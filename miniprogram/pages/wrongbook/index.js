// 错题本：本地快照展示 + 复习模式（答对即消灭）
const store = require('../../utils/store')

Page({
  data: {
    items: [], // { qid, q, count, subjectId }
    wrongCount: 0,
  },

  onShow() {
    this.refresh()
  },

  refresh() {
    const s = store.getState()
    const items = Object.keys(s.wrongBook)
      .map(function (qid) {
        const snap = s.wrongSnaps[qid]
        return {
          qid: qid,
          q: snap ? snap.q : '（题目快照缺失）',
          count: s.wrongBook[qid],
          subjectId: snap ? snap.subjectId : '',
        }
      })
      .sort(function (a, b) { return b.count - a.count })
    this.setData({ items: items, wrongCount: items.length })
  },

  startReview() {
    wx.navigateTo({ url: '/pages/quiz/index?mode=review' })
  },
})
