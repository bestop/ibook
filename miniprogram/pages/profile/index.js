// 我的：微信登录用户卡、签到、每日任务、学习统计、成就墙、重置进度
// （云端同步全自动后台运行：变更节流上传 + 启动对齐 + onHide 兑底，无任何界面入口，见 utils/cloud.js）
const store = require('../../utils/store')
const sfx = require('../../utils/sfx')
const week = require('../../utils/week')
const user = require('../../utils/user')
const cloud = require('../../utils/cloud')

Page({
  data: {
    coins: 0,
    stars: 0,
    streak: 0,
    signedToday: false,
    todaySeconds: 0,
    todayMinutes: 0,
    goalSeconds: store.DAILY_GOAL_SECONDS,
    dailyDone: { level: false, minutes: false, review: false },
    todayReviewCorrect: 0,
    totalCorrect: 0,
    totalWrong: 0,
    totalCompleted: 0,
    achievements: [],
    unlockedCount: 0,
    taskRewards: store.TASK_REWARDS,
    soundOn: true,
    weekReport: null, // 本周报告（每日分钟柱状图 + 与上周对比，借鉴聪聪学堂 WeeklyReportCard）
    // 用户系统（微信登录）：user=已登录展示数据 / profileFormOpen=完善资料表单展开 / 草稿头像昵称
    user: null,
    profileFormOpen: false,
    draftNickname: '',
    draftAvatar: '',
  },

  onShow() {
    this.refresh()
  },

  refresh() {
    const s = store.getState()
    const today = new Date()
    const t =
      today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0')
    const subjects = getApp().globalData.manifest ? getApp().globalData.manifest.subjects : []
    let totalCompleted = 0
    subjects.forEach(function (sub) {
      Object.keys(s.levels).forEach(function (k) {
        if (k.indexOf(sub.id + ':') === 0 && s.levels[k].completed) totalCompleted++
      })
    })
    const list = this.buildAchievementList(s)
    // 本周报告（每日学习分钟柱状图 + 与上周对比，借鉴聪聪学堂 WeeklyReportCard，与网页版同构）
    const report = week.weekReport(s.dayStats, t)
    this.setData({
      coins: s.coins,
      stars: store.totalStars(),
      streak: s.streak,
      signedToday: s.signInDates.indexOf(t) >= 0,
      todaySeconds: s.todaySeconds,
      todayMinutes: Math.floor(s.todaySeconds / 60),
      dailyDone: s.dailyDone,
      todayReviewCorrect: s.todayReviewCorrect,
      totalCorrect: s.totalCorrect,
      totalWrong: s.totalWrong,
      totalCompleted: totalCompleted,
      achievements: list,
      unlockedCount: list.filter(function (a) { return a.unlocked }).length,
      wrongCount: Object.keys(s.wrongBook).length,
      weekReport: report,
      soundOn: sfx.isEnabled(),
      // 用户卡（微信登录身份，utils/user 身份层）
      user: this.buildUserCard(),
    })
  },

  // 用户卡展示数据（无资料时昵称回退「微信用户」占位）
  buildUserCard() {
    const u = user.getUser()
    if (!u) return null
    const p = u.profile || {}
    return {
      nickname: p.nickname || '微信用户',
      avatar: p.avatar || '',
      sourceLabel: u.session.source === 'server' ? '微信账号' : '本机身份',
      loginDate: u.loginAt || '',
    }
  },

  // 成就墙（与 store 内置规则一致，本地计算解锁状态与进度文本）
  buildAchievementList(s) {
    const subjects = getApp().globalData.manifest ? getApp().globalData.manifest.subjects : []
    let completed = 0
    let fullStars = 0
    Object.keys(s.levels).forEach(function (k) {
      if (s.levels[k].completed) completed++
      if (s.levels[k].stars >= 3) fullStars++
    })
    let totalLevels = 0
    let doneSubjects = 0
    subjects.forEach(function (sub) {
      totalLevels += sub.levelCount
      let n = 0
      Object.keys(s.levels).forEach(function (k) {
        if (k.indexOf(sub.id + ':') === 0 && s.levels[k].completed) n++
      })
      if (n >= sub.levelCount) doneSubjects++
    })
    const pg = function (cur, goal) { return Math.min(cur, goal) + '/' + goal }
    const defs = [
      { id: 'first_win', emoji: '🎉', name: '初出茅庐', ok: completed >= 1, prog: pg(completed, 1) },
      { id: 'win4', emoji: '📚', name: '渐入佳境', ok: completed >= 4, prog: pg(completed, 4) },
      { id: 'win8', emoji: '🏆', name: '满腹经纶', ok: completed >= 8, prog: pg(completed, 8) },
      { id: 'win16', emoji: '🌉', name: '勇攀高峰', ok: completed >= 16, prog: pg(completed, 16) },
      { id: 'win32', emoji: '🚀', name: '闯关小将', ok: completed >= 32, prog: pg(completed, 32) },
      { id: 'win64', emoji: '🌏', name: '闯关大将', ok: completed >= 64, prog: pg(completed, 64) },
      { id: 'win128', emoji: '🛳️', name: '闯关舰队', ok: completed >= 128, prog: pg(completed, 128) },
      { id: 'win_all', emoji: '👑', name: '全能大满贯', ok: subjects.length > 0 && totalLevels > 0 && doneSubjects >= subjects.length, prog: pg(doneSubjects, Math.max(subjects.length, 1)) },
      { id: 'star3_any', emoji: '⭐', name: '三星大将', ok: fullStars >= 1, prog: pg(fullStars, 1) },
      { id: 'star3_10', emoji: '✨', name: '摘星少年', ok: fullStars >= 10, prog: pg(fullStars, 10) },
      { id: 'star3_all', emoji: '🌟', name: '全星霸主', ok: totalLevels > 0 && fullStars >= totalLevels, prog: pg(fullStars, Math.max(totalLevels, 1)) },
      { id: 'correct100', emoji: '✏️', name: '百题小达人', ok: s.totalCorrect >= 100, prog: pg(s.totalCorrect, 100) },
      { id: 'correct500', emoji: '🎓', name: '答题小博士', ok: s.totalCorrect >= 500, prog: pg(s.totalCorrect, 500) },
      { id: 'rich300', emoji: '💰', name: '小富翁', ok: s.coins >= 300, prog: pg(s.coins, 300) },
      { id: 'rich1000', emoji: '🤑', name: '大富翁', ok: s.coins >= 1000, prog: pg(s.coins, 1000) },
      { id: 'sign3', emoji: '📅', name: '持之以恒', ok: s.streak >= 3, prog: pg(s.streak, 3) },
      { id: 'sign7', emoji: '🗓️', name: '学习之星', ok: s.streak >= 7, prog: pg(s.streak, 7) },
      { id: 'sign21', emoji: '🌈', name: '习惯成自然', ok: s.streak >= 21, prog: pg(s.streak, 21) },
      { id: 'combo5', emoji: '🔥', name: '连击达人', ok: s.achievements.indexOf('combo5') >= 0, prog: s.achievements.indexOf('combo5') >= 0 ? '1/1' : '0/1' },
      { id: 'clear10', emoji: '🎯', name: '错题克星', ok: (s.clearedTotal || 0) >= 10, prog: pg(s.clearedTotal || 0, 10) },
    ]
    return defs.map(function (d) {
      return { id: d.id, emoji: d.emoji, name: d.name, progress: d.prog, unlocked: d.ok && s.achievements.indexOf(d.id) >= 0 }
    })
  },

  doSignIn() {
    const r = store.signIn()
    wx.showToast({ title: r.msg, icon: r.ok ? 'success' : 'none', duration: 2000 })
    if (r.ok) {
      sfx.coin()
      this.refresh()
    }
  },

  onSoundToggle(e) {
    const on = !!e.detail.value
    sfx.setEnabled(on)
    this.setData({ soundOn: on })
    if (on) sfx.coin() // 开启时给个反馈音
  },

  openGuide() {
    sfx.click()
    wx.navigateTo({ url: '/pages/guide/index' })
  },

  doReset() {
    const that = this
    wx.showModal({
      title: '重置全部进度？',
      content: '金币、星级、错题本、成就、兑换记录都会清空，且无法恢复！',
      confirmText: '确认重置',
      cancelText: '取消',
      confirmColor: '#dc2626',
      success(res) {
        if (res.confirm) {
          store.resetAll()
          wx.showToast({ title: '已重置', icon: 'success' })
          that.refresh()
        }
      },
    })
  },

  // ---------- 用户系统（点「微信登录」直接授权登录；首次登录自动带出头像昵称填写） ----------

  // 一键直接授权微信登录：静默 wx.login → 服务端换 openid（未就绪自动降级本机身份），
  // 全程无表单无授权弹窗；_loginBusy 防连点重复发起登录。
  // 登录成功且尚无资料时，自动展开官方「头像昵称填写能力」表单（头像选择器可选微信头像、
  // 昵称键盘上方可一键填入微信昵称），免去手动找「完善资料」入口的额外步骤。
  // 说明：wx.getUserProfile 自 2022-10-25 起对新生效版本只返回匿名数据（灰头像+「微信用户」），
  // 微信平台已无静默提取真实头像昵称的接口，此自动弹表单即为合规下的最短路径。
  doWeChatLogin() {
    if (this._loginBusy) return
    this._loginBusy = true
    sfx.click()
    const that = this
    wx.showLoading({ title: '登录中…', mask: true })
    user
      .login()
      .then((u) => {
        wx.hideLoading()
        // 有资料按昵称欢迎，无资料（首次直登）提示登录成功并自动带出资料填写
        const hasProfile = !!(u && u.profile && u.profile.nickname)
        const title = hasProfile ? '欢迎，' + u.profile.nickname : '微信登录成功'
        wx.showToast({ title: title, icon: 'none', duration: 2000 })
        that.refresh()
        if (!hasProfile) {
          // 等欢迎 toast 展示后再展开表单：点头像可选微信头像，点昵称框键盘上方一键填入微信昵称
          setTimeout(() => {
            that.setData({ profileFormOpen: true, draftNickname: '', draftAvatar: '' })
          }, 650)
        }
      })
      .catch(() => {
        wx.hideLoading()
      })
      .then(() => {
        this._loginBusy = false
      })
  },

  // 完善资料表单：预填已有资料（昵称/头像留空则从零填），仅已登录态可达
  openProfileForm() {
    sfx.click()
    const u = user.getUser()
    const p = u && u.profile ? u.profile : {}
    this.setData({ profileFormOpen: true, draftNickname: p.nickname || '', draftAvatar: p.avatar || '' })
  },

  cancelProfileForm() {
    sfx.click()
    this.setData({ profileFormOpen: false })
  },

  // 选择头像（open-type=chooseAvatar）：临时路径持久化到用户文件，失败回退临时路径
  onChooseAvatar(e) {
    sfx.click()
    user.persistAvatar(e.detail && e.detail.avatarUrl).then((saved) => {
      this.setData({ draftAvatar: saved })
    })
  },

  // type=nickname 输入/失焦统一收口（键盘上方支持一键填入微信昵称）
  onNicknameInput(e) {
    this.setData({ draftNickname: e.detail && e.detail.value })
  },

  // 保存资料：昵称必填、头像可选；异常兜底先补登录（表单仅已登录态可达，此处防御性处理）
  doSaveProfile() {
    const that = this
    const nick = String(this.data.draftNickname || '').trim()
    if (!nick) {
      wx.showToast({ title: '先填一个昵称吧', icon: 'none' })
      return
    }
    wx.showLoading({ title: '保存中…', mask: true })
    const ensureLogin = user.getUser() ? Promise.resolve() : user.login()
    ensureLogin
      .then(() => user.saveProfile({ nickname: nick, avatar: that.data.draftAvatar }))
      .then((u) => {
        wx.hideLoading()
        that.setData({ profileFormOpen: false })
        wx.showToast({ title: '资料已保存', icon: 'none', duration: 2000 })
        cloud.pushProfile(nick) // 昵称同步到云端（fire-and-forget）：网页端登录后展示同一昵称
        that.refresh()
      })
      .catch(() => {
        wx.hideLoading()
      })
  },

  // 退出登录：清除登录身份与展示资料，同时断开云端同步（吊销令牌）；学习进度保存在本机不受影响
  doLogout() {
    const that = this
    sfx.click()
    wx.showModal({
      title: '退出登录？',
      content: '退出后恢复游客模式并断开云端同步；学习进度仍保存在本机，云端存档也保留。',
      confirmText: '退出',
      cancelText: '取消',
      success(res) {
        if (!res.confirm) return
        user.logout() // 清登录身份与展示资料（学习进度本机不动）
        cloud.logout() // 吊销并清除云端令牌与账号资料缓存（云端存档保留）
        wx.showToast({ title: '已退出登录', icon: 'none' })
        that.refresh()
      },
    })
  },
})
