// 结算页：星级 / 金币明细 / 再来一次 / 返回地图
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
    })
  },

  onRetry() {
    wx.navigateBack() // 回到进入前的页面（地图/错题本）
  },

  onHome() {
    wx.redirectTo({ url: '/pages/home/index' })
  },
})
