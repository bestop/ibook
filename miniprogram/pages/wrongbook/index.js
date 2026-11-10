// 错题本：本地快照展示 + 复习模式（答对即消灭）
const store = require('../../utils/store')
const sfx = require('../../utils/sfx')

Page({
  data: {
    items: [], // { qid, q, count, subjectId, tag }
    wrongCount: 0,
    weakTags: [], // 薄弱考点 Top3：{ tag, count }（真实来自错题快照 tag 聚合）
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
          tag: snap && snap.tag ? snap.tag : '',
        }
      })
      .sort(function (a, b) { return b.count - a.count })
    // 薄弱考点 Top3：聚合错题 tag 频次，指明优先消灭对象（对标聪聪学堂掌握度闭环）
    const tagCount = {}
    items.forEach(function (it) {
      if (it.tag) tagCount[it.tag] = (tagCount[it.tag] || 0) + 1
    })
    const weakTags = Object.keys(tagCount)
      .map(function (t) { return { tag: t, count: tagCount[t] } })
      .sort(function (a, b) { return b.count - a.count })
      .slice(0, 3)
    this.setData({ items: items, wrongCount: items.length, weakTags: weakTags })
  },

  startReview() {
    sfx.click()
    wx.navigateTo({ url: '/pages/quiz/index?mode=review' })
  },
})
