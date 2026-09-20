// 首页：科目岛选择（数据来自网页端 manifest）
const api = require('../../utils/api')
const store = require('../../utils/store')
const sfx = require('../../utils/sfx')

const GRADE_LABELS = ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级']
const TERM_LABELS = ['上册', '下册']
const PUBLISHER_OPTIONS = [
  { key: 'all', label: '全部版本' },
  { key: 'rj', label: '人教版' },
  { key: 'she', label: '沪教版' },
]

Page({
  data: {
    loading: true,
    error: '',
    gradeLabels: GRADE_LABELS,
    termLabels: TERM_LABELS,
    publisherLabels: PUBLISHER_OPTIONS.map(function (o) { return o.label }),
    gradeIndex: 4,
    termIndex: 0,
    pubIndex: 0,
    subjects: [],
    coins: 0,
    stars: 0,
    streak: 0,
    wrongCount: 0,
    todaySeconds: 0,
    goalSeconds: store.DAILY_GOAL_SECONDS,
    minutePct: 0,
  },

  onLoad() {
    this.bootstrap()
  },

  onShow() {
    this.refreshStats()
    if (getApp().globalData.manifest) this.applyFilter()
  },

  bootstrap() {
    const that = this
    const saved = store.getState().textbook
    this.setData({
      gradeIndex: Math.min(5, Math.max(0, saved.gradeNum - 1)),
      termIndex: saved.term === 'b' ? 1 : 0,
      pubIndex: Math.max(0, PUBLISHER_OPTIONS.findIndex(function (o) { return o.key === saved.publisher })),
    })
    this.setData({ loading: true, error: '' })
    getApp()
      .loadManifest()
      .then(function () {
        store.setSubjects(getApp().globalData.manifest.subjects)
        that.setData({ loading: false })
        that.applyFilter()
      })
      .catch(function (err) {
        const cached = api.getCachedManifest()
        if (cached) {
          getApp().globalData.manifest = cached
          store.setSubjects(cached.subjects)
          that.setData({ loading: false, error: '网络不太顺畅，先玩离线内容吧' })
          that.applyFilter()
        } else {
          that.setData({ loading: false, error: err.message || '加载失败' })
        }
      })
  },

  retry() {
    this.bootstrap()
  },

  refreshStats() {
    const s = store.getState()
    const wrongCount = Object.keys(s.wrongBook).length
    this.setData({
      coins: s.coins,
      stars: store.totalStars(),
      streak: s.streak,
      wrongCount: wrongCount,
      todaySeconds: s.todaySeconds,
      todayMinutes: Math.floor(s.todaySeconds / 60),
      minutePct: Math.min(100, Math.round((s.todaySeconds / store.DAILY_GOAL_SECONDS) * 100)),
    })
  },

  onPickGrade(e) {
    sfx.click()
    this.data.gradeIndex = Number(e.detail.value)
    this.applyFilter()
  },
  onPickTerm(e) {
    sfx.click()
    this.data.termIndex = Number(e.detail.value)
    this.applyFilter()
  },
  onPickPublisher(e) {
    sfx.click()
    this.data.pubIndex = Number(e.detail.value)
    this.applyFilter()
  },

  // 年级 + 册别 + 出版社 → 科目岛列表（与网页版 subjectsFor 同语义）
  applyFilter() {
    const manifest = getApp().globalData.manifest
    if (!manifest) return
    const gi = this.data.gradeIndex
    const ti = this.data.termIndex
    const pi = this.data.pubIndex
    const gradeNum = gi + 1
    const term = ti === 1 ? 'b' : 'a'
    const publisher = PUBLISHER_OPTIONS[pi].key
    store.setTextbook({ gradeNum: gradeNum, term: term, publisher: publisher })
    const subjects = manifest.subjects.filter(function (s) {
      if (s.gradeNum !== gradeNum || s.term !== term) return false
      if (publisher === 'all') return true
      if (publisher === 'rj') return s.publisherKey === 'rj' || s.publisherKey === 'rj54'
      return s.publisherKey === publisher
    })
    this.setData({ gradeIndex: gi, termIndex: ti, pubIndex: pi, subjects: subjects })
    this.refreshStats()
  },

  backToA() {
    this.setData({ termIndex: 0 })
    this.applyFilter()
  },

  openGuide() {
    sfx.click()
    wx.navigateTo({ url: '/pages/guide/index' })
  },

  openSubject(e) {
    sfx.click()
    const id = e.currentTarget.dataset.id
    const name = e.currentTarget.dataset.name
    wx.navigateTo({ url: '/pages/map/index?subjectId=' + id + '&name=' + encodeURIComponent(name) })
  },
})
