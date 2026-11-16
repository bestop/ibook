// 自定义底部导航（与网页版底部 Tab 一致；参考图简约扁平剪影图标，形状由 wxss 内嵌 SVG 提供）
const sfx = require('../../utils/sfx')

Component({
  properties: {
    active: { type: String, value: 'home' },
    wrongCount: { type: Number, value: 0 },
  },
  data: {
    tabs: [
      { key: 'home', label: '科目', url: '/pages/home/index' },
      { key: 'pet', label: '宠物', url: '/pages/pet/index' },
      { key: 'wrongbook', label: '错题本', url: '/pages/wrongbook/index' },
      { key: 'rewards', label: '礼物', url: '/pages/rewards/index' },
      { key: 'profile', label: '我的', url: '/pages/profile/index' },
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
