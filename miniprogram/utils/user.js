// 用户系统：微信登录身份 + 本地持久化（学习进度仍在 store 本机保存，本模块只管「身份层」）
//
// 登录阶梯（wx.login code → 服务端换取 openid；服务端未就绪时自动降级，登录永不失败）：
//   1) wx.login 静默取 code（5 分钟有效、一次性）；
//   2) api.exchangeLoginCode(code)：POST /api/mp/login，由服务端以 code2session 换 openid
//      （appid/secret 只在服务端，小程序端不接触任何敏感凭据）；
//   3) 换取失败（接口未实现 / 网络异常）→ 降级为「本机身份」：首次生成随机 gid 并持久化，
//      同一设备此后恒定（退出重登不变），登录体验不阻塞。
// 资料补全走微信官方「头像昵称填写能力」（open-type=chooseAvatar + type=nickname）：
// 登录成功且无资料时页面自动展开该表单（点头像可选微信头像、昵称键盘上方可一键填入微信昵称），
// 无需用户再手动找「完善资料」入口；不调用 getUserProfile（2022 年后对多数小程序已收敛为匿名数据），
// 也无需授权弹窗；登录本身一键直登，不强制填表。
// 安全红线：session_key 不出服务端；本端只落 openid / 本机 gid 与展示性资料（昵称/头像路径）。

const KEY = 'tx-user-v1'
const GUEST_KEY = 'tx-guest-id-v1'
// 统一账号云端令牌 storage 键（与 utils/cloud.js 的 TOKEN_KEY 保持一致：
// 登录换取成功即开通云端同步，令牌由本模块落盘、utils/cloud 读取使用）
const CLOUD_TOKEN_KEY = 'tx-cloud-token-v1'
const NICK_MAX = 12

const api = require('./api')

// —— 内部工具 ——

// 本机降级身份：首次生成后持久化，同设备恒定（退出重登保持一致）
function localUid() {
  try {
    const gid = wx.getStorageSync(GUEST_KEY)
    if (typeof gid === 'string' && gid) return gid
  } catch (e) {}
  const gid = 'gid-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10)
  try {
    wx.setStorageSync(GUEST_KEY, gid)
  } catch (e) {}
  return gid
}

function todayStr() {
  const d = new Date()
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0')
}

// 读取消毒：出口统一过一遍，防御手改 storage（脏字段按安全默认值收敛）
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
function sanitizeUser(u) {
  if (!u || typeof u !== 'object') return null
  if (!u.session || typeof u.session.uid !== 'string' || !u.session.uid) return null
  const clean = {
    session: {
      uid: String(u.session.uid).slice(0, 64),
      source: u.session.source === 'server' ? 'server' : 'local',
    },
    profile: null,
    loginAt: typeof u.loginAt === 'string' && DATE_RE.test(u.loginAt) ? u.loginAt : todayStr(),
  }
  if (u.profile && typeof u.profile === 'object') {
    const nickname = String(u.profile.nickname || '').trim().slice(0, NICK_MAX)
    if (nickname) {
      clean.profile = {
        nickname: nickname,
        // 头像必须是字符串路径：非字符串（数字/对象）一律收敛为空，避免生成破损图片地址
        avatar: typeof u.profile.avatar === 'string' ? u.profile.avatar.slice(0, 256) : '',
      }
    }
  }
  return clean
}

function readUser() {
  try {
    const u = wx.getStorageSync(KEY)
    return sanitizeUser(u && typeof u === 'object' ? u : null)
  } catch (e) {
    return null
  }
}

function writeUser(u) {
  try {
    wx.setStorageSync(KEY, u)
  } catch (e) {
    /* 存储满时忽略：身份层缺失仅影响展示，不影响学习进度 */
  }
}

// —— 对外 ——

// 登录：静默换取身份（服务端优先，失败降级本机），永不 reject；
// 重复登录刷新 session，已有资料（昵称/头像）原样保留。
function login() {
  return new Promise((resolve) => {
    const prev = readUser()
    const settle = (session) => {
      writeUser({ session: session, profile: prev ? prev.profile : null, loginAt: todayStr() })
      resolve(readUser())
    }
    wx.login({
      success(res) {
        if (res && res.code) {
          api
            .exchangeLoginCode(res.code)
            .then((r) => {
              // 服务端签发了统一账号令牌 → 落盘开通云端同步（utils/cloud 读取使用）
              if (r && r.token) {
                try {
                  wx.setStorageSync(CLOUD_TOKEN_KEY, r.token)
                } catch (e) {
                  /* 存储满时忽略：仅影响云同步，不影响登录身份 */
                }
              }
              settle({ uid: r.openid, source: 'server' })
            })
            .catch(() => {
              settle({ uid: localUid(), source: 'local' })
            })
        } else {
          settle({ uid: localUid(), source: 'local' })
        }
      },
      fail() {
        settle({ uid: localUid(), source: 'local' })
      },
    })
  })
}

// 保存展示资料：昵称必填（trim 后截断 NICK_MAX），头像路径可选；
// 未登录时拒绝写入（返回 null），脏输入静默忽略。
function saveProfile(input) {
  const cur = readUser()
  if (!cur) return null
  const nickname = String((input && input.nickname) || '').trim().slice(0, NICK_MAX)
  if (!nickname) return cur
  cur.profile = { nickname: nickname, avatar: String((input && input.avatar) || '') }
  writeUser(cur)
  return readUser()
}

// chooseAvatar 返回的是临时路径（可能被微信回收），持久化为用户文件；
// 保存失败退回临时路径（本次会话仍可用）。
function persistAvatar(tempPath) {
  return new Promise((resolve) => {
    if (!tempPath || typeof tempPath !== 'string') {
      resolve('')
      return
    }
    try {
      wx.getFileSystemManager().saveFile({
        tempFilePath: tempPath,
        success(res) {
          resolve((res && res.savedFilePath) || tempPath)
        },
        fail() {
          resolve(tempPath)
        },
      })
    } catch (e) {
      resolve(tempPath)
    }
  })
}

// 退出登录：仅清身份与展示资料；学习进度（store 本机数据）不受影响
function logout() {
  try {
    wx.removeStorageSync(KEY)
  } catch (e) {}
}

function getUser() {
  return readUser()
}

module.exports = {
  NICK_MAX: NICK_MAX,
  login: login,
  saveProfile: saveProfile,
  persistAvatar: persistAvatar,
  logout: logout,
  getUser: getUser,
}
