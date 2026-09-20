// 礼物屋：金币兑换亲子奖励 + 兑换券（家长兑现）+ 自定义奖励
const store = require('../../utils/store')

Page({
  data: {
    coins: 0,
    rewards: [],
    redeemLog: [],
    showForm: false,
    formName: '',
    formEmoji: '🎁',
    formCost: '',
  },

  onShow() {
    this.refresh()
  },

  refresh() {
    const s = store.getState()
    const rewards = store.DEFAULT_REWARDS.concat(s.customRewards).map(function (r) {
      return Object.assign({}, r, { affordable: s.coins >= r.cost })
    })
    const redeemLog = s.redeemLog.map(function (r) {
      const d = new Date(r.at)
      return Object.assign({}, r, {
        timeText:
          d.getMonth() + 1 + '月' + d.getDate() + '日 ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'),
      })
    })
    this.setData({ coins: s.coins, rewards: rewards, redeemLog: redeemLog })
  },

  redeem(e) {
    const id = e.currentTarget.dataset.id
    const name = e.currentTarget.dataset.name
    const cost = Number(e.currentTarget.dataset.cost)
    const that = this
    wx.showModal({
      title: '兑换确认',
      content: '用 ' + cost + ' 金币兑换「' + name + '」？',
      confirmText: '兑换',
      cancelText: '再想想',
      success(res) {
        if (!res.confirm) return
        const r = store.redeemReward(id)
        wx.showToast({ title: r.msg, icon: r.ok ? 'success' : 'none', duration: 2200 })
        if (r.ok) that.refresh()
      },
    })
  },

  fulfill(e) {
    const id = e.currentTarget.dataset.id
    store.markRedeemFulfilled(id)
    wx.showToast({ title: '已标记兑现 🎉', icon: 'success' })
    this.refresh()
  },

  toggleForm() {
    this.setData({ showForm: !this.data.showForm, formName: '', formEmoji: '🎁', formCost: '' })
  },

  onFormName(e) {
    this.setData({ formName: e.detail.value })
  },
  onFormEmoji(e) {
    this.setData({ formEmoji: e.detail.value })
  },
  onFormCost(e) {
    this.setData({ formCost: e.detail.value })
  },

  saveReward() {
    const r = store.addCustomReward(this.data.formName, this.data.formEmoji, Number(this.data.formCost))
    wx.showToast({ title: r.msg, icon: r.ok ? 'success' : 'none' })
    if (r.ok) {
      this.setData({ showForm: false })
      this.refresh()
    }
  },

  removeReward(e) {
    const id = e.currentTarget.dataset.id
    const that = this
    wx.showModal({
      title: '删除自定义奖励？',
      content: '删除后不可恢复',
      confirmText: '删除',
      cancelText: '取消',
      success(res) {
        if (res.confirm) {
          store.removeCustomReward(id)
          that.refresh()
        }
      },
    })
  },
})
