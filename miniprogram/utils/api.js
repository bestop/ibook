// 数据同步层：教材与闯关内容全部从网页端获取
// manifest（科目清单）每次启动拉取；bank（题库）按科目+版本号增量缓存。
// 合法域名：主用 lx.hikid.vip（小程序专用数据域名），
// 网络异常时自动回退 www.hikid.org（网页版主域，同源同内容）。
const DOMAINS = ['https://lx.hikid.vip', 'https://www.hikid.org']
const BASE = DOMAINS[0]
const MANIFEST_KEY = 'mp-manifest-v1'
const BANK_KEY_PREFIX = 'mp-bank-v1-'

function requestOnce(base, path) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: base + path,
      method: 'GET',
      dataType: 'json',
      timeout: 15000,
      success(res) {
        if (res.statusCode === 200) resolve(res.data)
        else reject(new Error('服务器返回 ' + res.statusCode))
      },
      fail() {
        reject(new Error('网络异常，请检查网络后重试'))
      },
    })
  })
}

// 依次尝试 DOMAINS：主域失败自动切换备用域
function request(path) {
  return new Promise((resolve, reject) => {
    let idx = 0
    const attempt = (lastErr) => {
      if (idx >= DOMAINS.length) {
        reject(lastErr || new Error('网络异常，请检查网络后重试'))
        return
      }
      requestOnce(DOMAINS[idx++], path).then(resolve, attempt)
    }
    attempt(null)
  })
}

// POST 单域请求（登录等写接口使用；与 GET 同款超时/状态码语义）
function requestOncePost(base, path, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: base + path,
      method: 'POST',
      data: data,
      header: { 'content-type': 'application/json' },
      dataType: 'json',
      timeout: 15000,
      success(res) {
        if (res.statusCode === 200) resolve(res.data)
        else reject(new Error('服务器返回 ' + res.statusCode))
      },
      fail() {
        reject(new Error('网络异常，请检查网络后重试'))
      },
    })
  })
}

// POST 双域回退（与 GET request 同款依次尝试策略）
function post(path, data) {
  return new Promise((resolve, reject) => {
    let idx = 0
    const attempt = (lastErr) => {
      if (idx >= DOMAINS.length) {
        reject(lastErr || new Error('网络异常，请检查网络后重试'))
        return
      }
      requestOncePost(DOMAINS[idx++], path, data).then(resolve, attempt)
    }
    attempt(null)
  })
}

// 微信登录 code 换取账号身份（服务端用 code2session 完成，appid/secret 不落小程序端）
// 接口约定：POST /api/mp/login  body { code }  →  200 { openid, token?, profile? }（详见 README「用户系统与微信登录」）
// 服务端未实现/响应不含 openid 一律 reject，由 user.login 降级本机身份，登录体验不阻塞；
// 响应带 token 时为统一账号令牌（云端同步用），user.login 会将其持久化供 utils/cloud 使用
function exchangeLoginCode(code) {
  return post('/api/mp/login', { code: code }).then((res) => {
    if (res && typeof res.openid === 'string' && res.openid) {
      return { openid: res.openid, token: typeof res.token === 'string' ? res.token : '', profile: res.profile || null }
    }
    throw new Error('登录响应缺少 openid')
  })
}

// 拉取科目清单（含全库 version）
function getManifest() {
  return request('/api/mp/manifest').then((manifest) => {
    try {
      wx.setStorageSync(MANIFEST_KEY, { at: Date.now(), data: manifest })
    } catch (e) {
      /* 存储满时忽略 */
    }
    return manifest
  })
}

// 读取缓存的清单（离线兜底）
function getCachedManifest() {
  try {
    const cached = wx.getStorageSync(MANIFEST_KEY)
    if (cached && cached.data) return cached.data
  } catch (e) {}
  return null
}

// 拉取单科题库：优先使用 manifest.version 命中本地缓存
function getBank(subjectId, manifestVersion) {
  const key = BANK_KEY_PREFIX + subjectId
  return new Promise((resolve, reject) => {
    try {
      const cached = wx.getStorageSync(key)
      if (cached && cached.version && cached.version === manifestVersion && cached.units) {
        resolve(cached)
        return
      }
    } catch (e) {}
    request('/api/mp/bank?subject=' + encodeURIComponent(subjectId))
      .then((bank) => {
        try {
          wx.setStorageSync(key, { version: bank.version, units: bank.units })
        } catch (e) {
          // 单科缓存失败（存储满）：只驱逐其它科目题库缓存后重试一次。
          // 注意不能用 wx.clearStorageSync()——那会连用户学习进度
          // （金币/错题/宠物/签到）与 manifest 缓存一起清掉，造成数据丢失。
          try {
            const info = wx.getStorageInfoSync()
            ;(info.keys || []).forEach(function (k) {
              if (k.indexOf(BANK_KEY_PREFIX) === 0) {
                try { wx.removeStorageSync(k) } catch (e2) {}
              }
            })
            wx.setStorageSync(key, { version: bank.version, units: bank.units })
          } catch (e2) {
            /* 重试仍失败：放弃本次缓存，仅当前会话不走离线缓存，不影响功能 */
          }
        }
        resolve(bank)
      })
      .catch(reject)
  })
}

// —— 统一账号与云端同步接口（Bearer 令牌鉴权，双域回退同 manifest）——
// 契约详见 README「云端同步与统一账号」；任一接口失败均 reject，由 utils/cloud 决定降级策略
function requestOnceAuth(base, method, path, data, token) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: base + path,
      method: method,
      data: data,
      header: { 'content-type': 'application/json', Authorization: 'Bearer ' + token },
      dataType: 'json',
      timeout: 15000,
      success(res) {
        if (res.statusCode === 200) resolve(res.data)
        else reject(new Error('服务器返回 ' + res.statusCode))
      },
      fail() {
        reject(new Error('网络异常，请检查网络后重试'))
      },
    })
  })
}

// 鉴权请求双域回退（与 GET/POST 同款依次尝试策略）
function requestAuth(method, path, data, token) {
  return new Promise((resolve, reject) => {
    let idx = 0
    const attempt = (lastErr) => {
      if (idx >= DOMAINS.length) {
        reject(lastErr || new Error('网络异常，请检查网络后重试'))
        return
      }
      requestOnceAuth(DOMAINS[idx++], method, path, data, token).then(resolve, attempt)
    }
    attempt(null)
  })
}

// 开通云端会话（本机降级身份 gid- 首次开通 / 例行补签会话）
// POST /api/account/session  { uid, platform: 'mp', nickname? } → { uid, token, profile }
function ensureCloudSession(uid, nickname) {
  const body = { uid: uid, platform: 'mp' }
  if (nickname) body.nickname = nickname
  return requestAuth('POST', '/api/account/session', body, '')
}

// 上传云端存档：PUT /api/account/save  { state, platform: 'mp' } → { rev, savedAt }
function uploadCloudSave(token, state) {
  return requestAuth('PUT', '/api/account/save', { state: state, platform: 'mp' }, token)
}

// 拉取云端存档：GET /api/account/save → { empty: true } | { rev, savedAt, platform, state }
function downloadCloudSave(token) {
  return requestAuth('GET', '/api/account/save', null, token)
}

// 更新跨端资料（昵称同步到云端）：POST /api/account/profile  { nickname } → { profile }
function pushCloudProfile(token, nickname) {
  return requestAuth('POST', '/api/account/profile', { nickname: nickname }, token)
}

// 吊销云端会话令牌（退出登录时）：DELETE /api/account/session
function logoutCloudSession(token) {
  return requestAuth('DELETE', '/api/account/session', null, token)
}

// 扫码登录确认（网页端发起、小程序端确认）：POST /api/mp/qr/confirm  { token } → { ok: true }
// token 为扫码凭证（16 位 hex，来自网页二维码 scene）；410=二维码已过期、404=已使用或无效
function confirmQrLogin(token, qrToken) {
  return requestAuth('POST', '/api/mp/qr/confirm', { token: qrToken }, token)
}

module.exports = {
  BASE: BASE,
  getManifest: getManifest,
  getCachedManifest: getCachedManifest,
  getBank: getBank,
  exchangeLoginCode: exchangeLoginCode,
  ensureCloudSession: ensureCloudSession,
  uploadCloudSave: uploadCloudSave,
  downloadCloudSave: downloadCloudSave,
  pushCloudProfile: pushCloudProfile,
  logoutCloudSession: logoutCloudSession,
  confirmQrLogin: confirmQrLogin,
}
