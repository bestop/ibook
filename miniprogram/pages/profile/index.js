// 我的：签到、每日任务、学习统计、成就墙、重置进度
const store = require('../../utils/store')
const sfx = require('../../utils/sfx')

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
      soundOn: sfx.isEnabled(),
    })
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
})
