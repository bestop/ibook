// 自定义底部导航（与网页版底部 Tab 一致，emoji + 文字）
const sfx = require('../../utils/sfx')

Component({
  properties: {
    active: { type: String, value: 'home' },
    wrongCount: { type: Number, value: 0 },
  },
  data: {
    tabs: [
      { key: 'home', label: '选科目', emoji: '🏠', url: '/pages/home/index' },
      { key: 'wrongbook', label: '错题本', emoji: '📕', url: '/pages/wrongbook/index' },
      { key: 'rewards', label: '礼物屋', emoji: '🎁', url: '/pages/rewards/index' },
      { key: 'profile', label: '我的', emoji: '🏆', url: '/pages/profile/index' },
    ],
  },
  methods: {
    onTap(e) {
      const key = e.currentTarget.dataset.key
      const url = e.currentTarget.dataset.url
      if (key === this.data.active) return
      sfx.click()
      wx.redirectTo({ url: url })
    },
  },
})
