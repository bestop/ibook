// 闯关地图：单科目的关卡列表 + 每日挑战（题库从网页端按需获取并缓存）
const api = require('../../utils/api')
const store = require('../../utils/store')
const quiz = require('../../utils/quiz')
const sfx = require('../../utils/sfx')

Page({
  data: {
    loading: true,
    error: '',
    subject: null,
    levels: [], // { id, name, title, emoji, stars, unlocked, completed, index }
    stats: { completed: 0, stars: 0, total: 0 },
    dailyOpen: false,
    subjectName: '',
  },

  onLoad(options) {
    this.subjectId = options.subjectId || ''
    this.setData({ subjectName: decodeURIComponent(options.name || '') })
  },

  onShow() {
    this.loadSubject()
  },

  loadSubject() {
    const that = this
    const manifest = getApp().globalData.manifest
    if (!manifest) {
      this.setData({ loading: false, error: '内容加载失败，请回首页重新进入' })
      return
    }
    const subject = manifest.subjects.find(function (s) { return s.id === that.subjectId })
    if (!subject) {
      this.setData({ loading: false, error: '未找到该科目岛' })
      return
    }
    this.setData({ loading: true, error: '', subject: subject })
    api
      .getBank(subject.id, manifest.version)
      .then(function (bank) {
        that.bank = bank
        that.renderLevels(subject)
        that.setData({ loading: false })
      })
      .catch(function (err) {
        that.setData({ loading: false, error: err.message || '题库加载失败' })
      })
  },

  renderLevels(subject) {
    const that = this
    const levels = subject.units.map(function (u, i) {
      const progress = store.getState().levels[subject.id + ':' + u.id]
      return {
        id: u.id,
        name: u.name,
        title: u.title,
        emoji: u.emoji,
        index: i + 1,
        stars: progress ? progress.stars : 0,
        completed: !!(progress && progress.completed),
        unlocked: store.isUnitUnlocked(subject, i),
      }
    })
    this.setData({ levels: levels, stats: store.subjectStats(subject) })
    // 每日挑战：至少有一个已解锁且有题的单元
    const unlockedIds = levels
      .filter(function (l) { return l.unlocked })
      .map(function (l) { return l.id })
    const hasQuestion = that.bank.units.some(function (u) {
      return unlockedIds.indexOf(u.id) >= 0 && u.questions.length > 0
    })
    this.setData({ dailyOpen: hasQuestion })
  },

  startLevel(e) {
    const id = e.currentTarget.dataset.id
    const unlocked = e.currentTarget.dataset.unlocked
    if (!unlocked) {
      wx.showToast({ title: '先通过上一关哦', icon: 'none' })
      return
    }
    sfx.click()
    wx.navigateTo({
      url:
        '/pages/quiz/index?subjectId=' +
        this.subjectId +
        '&unitId=' +
        id +
        '&mode=level&name=' +
        encodeURIComponent(this.data.subjectName),
    })
  },

  startDaily() {
    if (!this.data.dailyOpen) return
    sfx.click()
    wx.navigateTo({
      url: '/pages/quiz/index?subjectId=' + this.subjectId + '&mode=daily&name=' + encodeURIComponent(this.data.subjectName),
    })
  },

  goHome() {
    sfx.click()
    wx.redirectTo({ url: '/pages/home/index' })
  },
})
