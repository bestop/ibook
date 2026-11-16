// 错题本：本地快照展示 + 复习模式（答对即消灭）
// 列表排序与复习组卷（utils/quiz.js buildReviewQuestions → srsSortList）同规则：
// SRS 间隔调度（借鉴聪聪学堂 srs.ts Leitner 3 盒，两端同构）：
// 1) 到期题优先（nextReviewAt 缺失或 <= 今天）：盒低优先 → 越久未错优先 → 错次多者优先
// 2) 未到期补位：最近到期优先 → 盒低优先；卡片带间隔状态徽标（🔁 今日该练 / 🌙 日期 该练）
// 旧档快照无 SRS 字段时视作「盒 1 + 立即到期」，排序退化与历史行为一致（向后兼容）
const store = require('../../utils/store')
const quiz = require('../../utils/quiz')
const sfx = require('../../utils/sfx')

Page({
  data: {
    items: [], // { qid, q, count, subjectId, subjectLabel, answerText, explain, tag, due, dueLabel }
    wrongCount: 0,
    weakTags: [], // 薄弱考点 Top3：{ tag, n }（聚合错题 tag 频次，与网页版同构）
  },

  onShow() {
    this.refresh()
  },

  refresh() {
    const s = store.getState()
    const today = quiz.srsToday()
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
        const nextAt = (snap && snap.nextReviewAt) || ''
        const due = quiz.srsIsDue(nextAt, today)
        return {
          qid: qid,
          q: snap ? snap.q : '（题目快照缺失）',
          count: s.wrongBook[qid],
          subjectId: sid,
          subjectLabel: nameMap[sid] || sid,
          // 展示正确答案与解析（与网页版错题本同构）；快照缺失时留空由 WXML 兜底
          answerText: snap && snap.options && snap.options[snap.answer] != null ? snap.options[snap.answer] : '',
          explain: snap ? snap.explain || '' : '',
          tag: snap ? snap.tag || '' : '',
          // 间隔状态徽标：到期题「今日该练」，未到期显示下次复习日（MM-DD）
          due: due,
          dueLabel: due ? '🔁 今日该练' : '🌙 ' + nextAt.slice(5) + ' 该练',
          // 排序字段：与复习组卷 srsSortList 同规则（旧档无字段视作最久未复习）
          _box: quiz.srsBoxOf(snap && snap.box),
          _nextReviewAt: nextAt,
          _lastWrongAt: snap && snap.lastWrongAt ? snap.lastWrongAt : '',
          _count: s.wrongBook[qid],
        }
      })
    quiz.srsSortList(items, today)
    items.forEach(function (it) {
      delete it._box
      delete it._nextReviewAt
      delete it._lastWrongAt
      delete it._count
    })
    // 薄弱考点 Top3：聚合 tag 频次（对标聪聪学堂掌握度闭环，数据真实来自错题本）
    const tagMap = {}
    let tagMax = 0
    items.forEach(function (it) {
      if (!it.tag) return
      tagMap[it.tag] = (tagMap[it.tag] || 0) + 1
      if (tagMap[it.tag] > tagMax) tagMax = tagMap[it.tag]
    })
    const weakTags = Object.keys(tagMap)
      .map(function (tag) { return { tag: tag, n: tagMap[tag] } })
      .sort(function (a, b) { return b.n - a.n })
      .slice(0, 3)
    this.setData({
      items: items,
      wrongCount: items.length,
      weakTags: weakTags,
    })
  },

  startReview() {
    sfx.click()
    wx.navigateTo({ url: '/pages/quiz/index?mode=review' })
  },
})
