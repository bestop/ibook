// 错题本：本地快照展示 + 复习模式（答对即消灭）
const store = require('../../utils/store')
const sfx = require('../../utils/sfx')

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
    // 科目友好名：从 manifest 映射 id → 「三年级数学」，离线无缓存时回退原始 id
    const nameMap = {}
    const manifest = getApp().globalData.manifest
    if (manifest && manifest.subjects) {
      manifest.subjects.forEach(function (sub) {
        nameMap[sub.id] = (sub.grade || '') + (sub.name || '')
      })
    }
    const items = Object.keys(s.wrongBook)
      .map(function (qid) {
        const snap = s.wrongSnaps[qid]
        const sid = snap ? snap.subjectId : ''
        return {
          qid: qid,
          q: snap ? snap.q : '（题目快照缺失）',
          count: s.wrongBook[qid],
          subjectId: sid,
          subjectLabel: nameMap[sid] || sid,
        }
      })
      .sort(function (a, b) { return b.count - a.count })
    this.setData({ items: items, wrongCount: items.length })
  },

  startReview() {
    sfx.click()
    wx.navigateTo({ url: '/pages/quiz/index?mode=review' })
  },
})
