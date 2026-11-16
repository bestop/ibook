// 云端同步编排：全自动后台同步（无任何界面入口）+ 扫码登录确认（网页端微信扫码通道）
//
// 与网页端（ibook src/lib/cloud.ts）共用同一套契约与对齐规则，见 README「云端同步与统一账号」：
//   - 开通：登录成功（服务端签发令牌）即自动开通，无任何手动开关；
//   - 自动上传：store 每次变更 → 节流上传（两次尝试最小间隔 45s，尾随补传一次），
//     app onHide 兜底 flush；恢复应用触发的变更不回环上传（applying 哨兵）；
//   - 启动对齐：有令牌时拉取云端档 —— 云端无档 → 首次上传本机；
//     云端 savedAt 较新（晚于本机最近一次成功上传）→ 其他设备推过新档 → 拉取应用；
//     否则本机即最新，不动。savedAt 由服务端生成，双端免时钟偏差；
//   - 所有网络失败均静默降级：云同步永远不影响游戏本体与本地进度。
// 扫码登录（confirmQrLogin）是「网页端微信扫码登录」的小程序侧确认通道，见 pages/web-login。
const api = require('./api')
const user = require('./user')
const store = require('./store')

const TOKEN_KEY = 'tx-cloud-token-v1' // 与 utils/user.js 的 CLOUD_TOKEN_KEY 保持一致
const LASTPUSH_KEY = 'tx-cloud-lastpush-v1' // 最近一次成功上传的服务端 savedAt（ISO 字符串）
const UPLOAD_MIN_INTERVAL = 45 * 1000

let tokenCache = null
let applying = false // 恢复应用期间 store 变更不回环上传
let lastTryAt = 0 // 最近一次自动上传尝试时刻（含失败，防网络差时高频重试）
let pendingTrailing = false // 节流窗口内仍有未上传的变更
let trailingTimer = null

// —— 令牌 ——
function getToken() {
  if (tokenCache) return tokenCache
  try {
    const t = wx.getStorageSync(TOKEN_KEY)
    if (typeof t === 'string' && t) tokenCache = t
  } catch (e) {}
  return tokenCache || ''
}

function setToken(t) {
  tokenCache = t || ''
  try {
    if (tokenCache) wx.setStorageSync(TOKEN_KEY, tokenCache)
    else wx.removeStorageSync(TOKEN_KEY)
  } catch (e) {}
}

function clearToken() {
  setToken('')
}

function getLastPushMs() {
  try {
    const iso = wx.getStorageSync(LASTPUSH_KEY)
    if (typeof iso === 'string' && iso) {
      const t = Date.parse(iso)
      if (isFinite(t)) return t
    }
  } catch (e) {}
  return 0
}

function setLastPush(iso) {
  if (!iso) return
  try {
    wx.setStorageSync(LASTPUSH_KEY, iso)
  } catch (e) {}
}

// —— 会话开通 ——
// 已有令牌直接用；否则用当前登录身份（微信 openid 或本机 gid）开通云端会话。
// 未登录（无身份）→ reject('need_login')，由调用方提示先登录。
function ensureToken() {
  const existing = getToken()
  if (existing) return Promise.resolve(existing)
  const u = user.getUser()
  const uid = u && u.session && u.session.uid
  if (!uid) return Promise.reject(new Error('need_login'))
  const nick = u.profile && u.profile.nickname ? u.profile.nickname : ''
  return api
    .ensureCloudSession(uid, nick)
    .then((res) => {
      if (!res || typeof res.token !== 'string' || !res.token) throw new Error('session 响应缺少 token')
      setToken(res.token)
      return res.token
    })
    .catch((err) => {
      // 账号已被其他设备占用（防顶号 403）：清掉本地旧令牌，下次变更/启动时重试开通
      const msg = err && err.message ? err.message : ''
      if (msg.indexOf('403') >= 0) clearToken()
      throw err
    })
}

// —— 上传 ——
function uploadState() {
  return ensureToken().then((token) =>
    api.uploadCloudSave(token, store.getState()).then((res) => {
      if (res && res.savedAt) setLastPush(res.savedAt)
      return res
    })
  )
}

function tryUpload() {
  lastTryAt = Date.now()
  return uploadState()
    .then(() => {
      pendingTrailing = false
      return true
    })
    .catch(() => false) // 静默：失败后由下一次变更/尾随定时器/手动按钮重试
}

// store 变更回调（store.save() 落盘后触发）：节流自动上传
function noteChange() {
  if (applying) return
  if (!getToken() && !user.getUser()) return // 未登录且无身份：完全静默
  const now = Date.now()
  const wait = UPLOAD_MIN_INTERVAL - (now - lastTryAt)
  if (wait <= 0) {
    tryUpload()
    return
  }
  pendingTrailing = true
  if (trailingTimer) return // 尾随定时器已在排队
  trailingTimer = setTimeout(function () {
    trailingTimer = null
    if (pendingTrailing) tryUpload()
  }, wait)
}

// app onHide 兜底：把节流窗口内未上传的变更立即补传（fire-and-forget）
function flushUpload() {
  if (applying) return
  if (!getToken() || !pendingTrailing) return
  tryUpload()
}

// —— 启动对齐 ——
// 返回动作：'off'（无令牌未开通）/ 'pulled' / 'pushed' / 'in-sync' / 'error'
function alignOnLaunch() {
  if (!getToken()) return Promise.resolve('off')
  return api
    .downloadCloudSave(getToken())
    .then((res) => {
      if (!res) return 'error'
      if (res.empty) {
        return uploadState()
          .then(() => 'pushed')
          .catch(() => 'error')
      }
      const cloudAt = res.savedAt ? Date.parse(res.savedAt) : 0
      if (isFinite(cloudAt) && cloudAt > getLastPushMs()) {
        applyCloudPayload(res)
        setLastPush(res.savedAt || '')
        return 'pulled'
      }
      return 'in-sync'
    })
    .catch(() => 'error')
}

// 应用云端档（启动对齐判定云端较新时拉取应用）：消毒合并 → 跨天归一化 → 成就重算；
// applying 哨兵保证恢复期间的 store 变更不回环上传
function applyCloudPayload(payload) {
  applying = true
  try {
    return store.replaceState(payload && payload.state ? payload.state : {})
  } finally {
    applying = false
  }
}

// 昵称改动同步到云端（fire-and-forget，失败静默）
function pushProfile(nickname) {
  if (!getToken() || !nickname) return
  api.pushCloudProfile(getToken(), nickname).catch(() => {})
}

// —— 扫码登录（网页端发起、小程序端确认） ——
// 网页展示小程序码 → 用户扫码进入 pages/web-login/index → 本机已登录身份确认本次网页登录。
// 返回 { ok, err? }；err 为原始「服务器返回 <状态码>」/「网络异常…」，由页面转译为友好文案。
function confirmQrLogin(qrToken) {
  return ensureToken()
    .then((token) => api.confirmQrLogin(token, qrToken).then(function () {
      return { ok: true }
    }))
    .catch((err) => ({ ok: false, err: err && err.message ? err.message : '网络异常' }))
}

// 退出登录：吊销云端令牌（fire-and-forget，失败静默）并清除本地令牌与历史资料缓存；
// 云端存档保留在服务端，重新登录后自动对齐恢复
function logout() {
  const t = getToken()
  clearToken()
  try {
    // 旧版本曾落盘统一账号资料缓存（tx-cloud-profile-v1），界面化能力下线后顺手清理残留
    wx.removeStorageSync('tx-cloud-profile-v1')
  } catch (e) {}
  if (t) api.logoutCloudSession(t).catch(() => {})
}

// app onLaunch 调用一次：订阅 store 变更 + 启动对齐（均静默）
function init() {
  store.onChange(noteChange)
  alignOnLaunch()
}

// 导出面 = 自动同步编排（app.js）+ 扫码登录确认（web-login 页）+ 最小内部复用；
// 手动上传/恢复/网页账号/绑定码等界面化能力已随云端同步卡下线（全自动同步不需要）。
module.exports = {
  init: init,
  noteChange: noteChange,
  flushUpload: flushUpload,
  alignOnLaunch: alignOnLaunch, // 启动对齐（init 内部调用；导出供行为测试）
  ensureToken: ensureToken,
  confirmQrLogin: confirmQrLogin,
  pushProfile: pushProfile,
  logout: logout,
  getToken: getToken,
}
