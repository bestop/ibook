// 结算页：星级 / 金币明细 / 再来一次 / 返回地图
const sfx = require('../../utils/sfx')
const store = require('../../utils/store')
const pet = require('../../utils/pet')
Page({
  data: {
    mode: 'level',
    passed: false,
    stars: 0,
    total: 0,
    correct: 0,
    finalCoins: 0,
    levelBonus: 0,
    taskCoins: 0,
    name: '',
    unit: '',
    newly: '',
    petExp: 0,
    petName: '',
    hasPet: false,
  },

  onLoad(options) {
    this.subjectId = options.subjectId || ''
    this.setData({
      mode: options.mode || 'level',
      passed: options.passed === '1',
      stars: Number(options.stars || 0),
      total: Number(options.total || 0),
      correct: Number(options.correct || 0),
      finalCoins: Number(options.finalCoins || 0),
      levelBonus: Number(options.levelBonus || 0),
      taskCoins: Number(options.taskCoins || 0),
      name: decodeURIComponent(options.name || ''),
      unit: decodeURIComponent(options.unit || ''),
      newly: decodeURIComponent(options.newly || ''),
      petExp: Number(options.petExp || 0),
      petName: decodeURIComponent(options.petName || ''),
      hasPet: !!store.getState().pet,
    })
    // 每日任务全部达成庆祝（借鉴聪聪学堂每日达标庆祝）：结算页弹出，避免答题页跳转时 toast 丢失
    if (options.allDone === '1') {
      const that = this
      this._timers = [setTimeout(function () {
        wx.showToast({ title: '🎉 今日任务全部达成！', icon: 'none', duration: 2200 })
      }, 400)]
    } else {
      this._timers = []
    }
    // 音效：通关播放胜利曲 + 星星逐颗点亮音（与网页版一致）；定时器登记待卸载时清理
    if (this.data.passed) {
      sfx.win()
      const that = this
      const delays = [0, 300, 600].slice(0, this.data.stars)
      delays.forEach(function (d, i) {
        that._timers.push(setTimeout(function () { sfx.star(i) }, d + 500))
      })
    } else {
      sfx.lose()
    }
  },

  onUnload() {
    // 清理待触发的音效/弹窗定时器：用户快速离开结算页时，
    // 避免「宠物快讯」弹窗追到其它页面上弹出；未消费的事件留在队列，
    // 由宠物页 onShow 兜底弹出（见 pet/index.js consumeEvents）
    ;(this._timers || []).forEach(function (t) { clearTimeout(t) })
    this._timers = null
  },

  onReady() {
    // 宠物升级/剧情解锁事件弹窗（与网页版事件队列同构；延迟避开星星音效）
    const s = store.getState()
    if (!s.petEvents || s.petEvents.length === 0) return
    const evs = s.petEvents
    const lines = evs.slice(0, 2).map(function (ev) {
      if (ev.type === 'levelup') return '🐾 ' + ev.petName + ' 升到了 Lv.' + ev.level + '！'
      return '📖 解锁新剧情《' + pet.STORY_BOOK_TITLE[ev.petKind] + '》第 ' + ev.chapterId.split('-')[1] + ' 章'
    })
    const extra = evs.length > 2 ? '\n…还有 ' + (evs.length - 2) + ' 条好消息' : ''
    const that = this
    this._timers.push(setTimeout(function () {
      if (!that._timers) return // 页面已卸载（定时器被清理）：事件留在队列由宠物页兑底
      sfx.coin()
      wx.showModal({
        title: '🎉 宠物快讯',
        content: lines.join('\n') + extra,
        confirmText: '去宠物页',
        cancelText: '知道了',
        success(res) {
          store.clearPetEvents()
          if (res.confirm) wx.redirectTo({ url: '/pages/pet/index' })
        },
      })
    }, 900))
  },

  onRetry() {
    wx.navigateBack() // 回到进入前的页面（地图/错题本）
  },

  onHome() {
    wx.redirectTo({ url: '/pages/home/index' })
  },
})
