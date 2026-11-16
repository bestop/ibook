// 网页版扫码登录确认页：网页端发起扫码登录 → 用户微信扫码进入本页 → 确认后网页端自动登录
// 入口是服务端生成的小程序码（scene=扫码凭证，5 分钟有效、一码一用）；
// 确认动作复用云端统一账号令牌，与「账号密码登录 / 绑定码」登录的是同一账号、同一份云端进度。
// 安全提示常驻页面：请确认是本人在网页上发起的登录再点确认。
const user = require('../../utils/user')
const cloud = require('../../utils/cloud')

const TOKEN_RE = /^[0-9a-f]{16}$/

Page({
  data: {
    phase: 'loading', // loading | no-token | ready | confirming | done | error
    nick: '',
    errMsg: '',
  },

  onLoad(options) {
    // 小程序码 scene 携带扫码凭证（16 位 hex）；开发调试可直传 token 参数
    let token = ''
    if (options && options.scene) {
      try {
        token = decodeURIComponent(options.scene)
      } catch (e) {
        token = options.scene
      }
    }
    if (!token && options && options.token) token = options.token
    this.qrToken = TOKEN_RE.test(token) ? token : ''
  },

  onShow() {
    this.bootstrap()
  },

  // 就绪流程：确保登录身份（微信登录静默、永不失败）→ 开通云端会话 → 展示账号与确认按钮。
  // 云端不可用不阻塞页面（给重试入口），与全局「登录永不失败」口径一致。
  bootstrap() {
    if (!this.qrToken) {
      this.setData({ phase: 'no-token' })
      return
    }
    this.setData({ phase: 'loading', errMsg: '' })
    const ensured = user.getUser() ? Promise.resolve(user.getUser()) : user.login()
    ensured
      .then(function () {
        return cloud.ensureToken()
      })
      .then(() => {
        const u = user.getUser()
        const nick = (u && u.profile && u.profile.nickname) || '微信用户'
        this.setData({ phase: 'ready', nick: nick })
      })
      .catch((e) => {
        const msg = e && e.message ? e.message : ''
        this.setData({
          phase: 'error',
          errMsg:
            msg.indexOf('403') >= 0
              ? '该账号已在其他设备登录，请先在原设备退出，或在网页用账号密码登录'
              : '云端连接失败，请检查网络后重试',
        })
      })
  },

  onRetry() {
    this.bootstrap()
  },

  // 确认登录：服务端核销扫码凭证（一码一用）；网页端轮询到 confirmed 即自动登录本账号
  onConfirm() {
    if (this.data.phase !== 'ready') return
    this.setData({ phase: 'confirming' })
    cloud.confirmQrLogin(this.qrToken).then((r) => {
      if (r && r.ok) {
        this.setData({ phase: 'done' })
        return
      }
      const msg = (r && r.err) || ''
      this.setData({
        phase: 'error',
        errMsg:
          msg.indexOf('410') >= 0
            ? '二维码已过期，请回到网页刷新二维码后重新扫码'
            : msg.indexOf('404') >= 0
              ? '二维码已使用或无效，请回到网页刷新后重新扫码'
              : '确认失败，请检查网络后重试',
      })
    })
  },

  onBackHome() {
    wx.reLaunch({ url: '/pages/home/index' })
  },
})
