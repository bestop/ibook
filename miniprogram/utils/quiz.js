// 组卷逻辑（与网页版一致：每关 10 题，选择题选项打乱，判断题保持顺序）
//
// 复习组卷采用 SRS 间隔调度（借鉴聪聪学堂 srs.ts Leitner 3 盒制，两端同构）：
//   - 每道错题带盒位 box(1|2|3) 与下次复习日 nextReviewAt（YYYY-MM-DD；缺失/空 = 立即到期，旧档兼容）
//   - 答错（任意模式）→ 回盒 1、今日到期（镜像参考 reviewSrsEntry 答错分支「今天就再练」）
//   - 非复习模式答对（闯关/每日挑战重玩命中错题本题目）→ 盒位晋升、复习推迟：
//     盒1→盒2（明天）/ 盒2→盒3（3 天后）/ 盒3→盒3（7 天后）——间隔里记住了，集中复习可以缓缓
//   - 复习模式答对 → 消灭出库（本项目既有「答对即消灭」语义，等价于参考的毕业出队）
//   - 组卷：到期题优先（盒低 → 越久未错 → 错次多），不足 10 题用未到期题补位（最近到期 → 盒低）。
//     补位是与参考 getDueSrsEntries 硬过滤的刻意差异：本项目复习绑定每日任务经济（答对 5 题 +10 金币），
//     硬过滤会让无到期日的当天任务不可完成；补位视为「提前复习」，提前答对照样消灭，无负效应
const QUESTIONS_PER_LEVEL = 10

// 盒位晋升表：当前盒 → { 晋升后盒位, 间隔天数 }（store.recordAnswer 非复习答对时消费）
const SRS_BOX_NEXT = {
  1: { box: 2, days: 1 },
  2: { box: 3, days: 3 },
  3: { box: 3, days: 7 },
}

function todayStr(offsetDays) {
  const d = new Date()
  d.setDate(d.getDate() + (offsetDays || 0))
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return d.getFullYear() + '-' + m + '-' + day
}

// 有效盒位：非法/缺失一律回盒 1（旧档快照与备份消毒的兜底口径）
function srsBoxOf(box) {
  return box === 2 || box === 3 ? box : 1
}

// 是否到期：nextReviewAt 缺失/空 = 立即到期；YYYY-MM-DD 字符串比较跨月/跨年安全
function srsIsDue(nextReviewAt, today) {
  return !nextReviewAt || nextReviewAt <= today
}

// 非复习答对的晋升结果：{ 晋升后盒位, 间隔天数 }（日期由调用方 todayStr(days) 落值）
function srsPromote(box) {
  return SRS_BOX_NEXT[srsBoxOf(box)] || SRS_BOX_NEXT[1]
}

// SRS 排序（复习组卷与错题本列表同规则，两端同构）：
//   到期题在前：盒低优先 → lastWrongAt 旧者优先（越久未练，遗忘风险越高）→ 错次多者优先（薄弱优先）
//   未到期补位在后：nextReviewAt 最近到期优先 → 盒低优先
// 条目需带 _box/_nextReviewAt/_lastWrongAt/_count 排序字段，调用方排序后自行剔除
function srsSortList(list, today) {
  const due = []
  const later = []
  list.forEach(function (it) {
    ;(srsIsDue(it._nextReviewAt, today) ? due : later).push(it)
  })
  due.sort(function (a, b) {
    if (a._box !== b._box) return a._box - b._box
    if (a._lastWrongAt !== b._lastWrongAt) return a._lastWrongAt < b._lastWrongAt ? -1 : 1
    return b._count - a._count
  })
  later.sort(function (a, b) {
    if (a._nextReviewAt !== b._nextReviewAt) return a._nextReviewAt < b._nextReviewAt ? -1 : 1
    return a._box - b._box
  })
  return due.concat(later)
}

function shuffle(arr) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const t = a[i]
    a[i] = a[j]
    a[j] = t
  }
  return a
}

function prepare(q, subjectId, unitId) {
  if (q.type === 'judge') {
    return Object.assign({}, q, { subjectId: subjectId, unitId: unitId, options: q.options, answer: q.answer })
  }
  const idx = shuffle(q.options.map(function (_, i) { return i }))
  return Object.assign({}, q, {
    subjectId: subjectId,
    unitId: unitId,
    options: idx.map(function (i) { return q.options[i] }),
    answer: idx.indexOf(q.answer),
  })
}

// 普通关卡：从该单元题池随机抽 10 题
function buildLevelQuestions(bank, unitId) {
  const unit = bank.units.find(function (u) { return u.id === unitId })
  const pool = unit ? unit.questions : []
  const picked = pool.length <= QUESTIONS_PER_LEVEL ? pool : shuffle(pool).slice(0, QUESTIONS_PER_LEVEL)
  return picked.map(function (q) { return prepare(q, bank.subjectId, unitId) })
}

// 每日挑战：从已解锁单元的题池随机抽 10 题（不足则全科兜底）
function buildDailyQuestions(bank, unlockedUnitIds) {
  let pool = bank.units
    .filter(function (u) { return unlockedUnitIds.indexOf(u.id) >= 0 })
    .reduce(function (arr, u) { return arr.concat(u.questions) }, [])
  if (pool.length < QUESTIONS_PER_LEVEL) {
    pool = bank.units.reduce(function (arr, u) { return arr.concat(u.questions) }, [])
  }
  return shuffle(pool).slice(0, QUESTIONS_PER_LEVEL).map(function (q) {
    return prepare(q, bank.subjectId, q.id) // unitId 用题目 id 兜底（每日挑战不记星级）
  })
}

// 错题复习：SRS 间隔调度组卷（到期优先，不足 10 题用未到期题补位）
// 与网页版错题本排序同构；旧档快照无 SRS 字段时视作「盒 1 + 立即到期」，
// 排序退化为「越久未错优先 → 错次多者优先」，与历史行为完全一致（向后兼容）
function buildReviewQuestions(snaps) {
  const today = todayStr()
  const list = Object.keys(snaps).map(function (qid) {
    const s = snaps[qid]
    return {
      id: qid,
      subjectId: s.subjectId,
      unitId: s.unitId,
      type: s.type,
      q: s.q,
      options: s.options,
      answer: s.answer,
      explain: s.explain,
      tag: s.tag,
      _box: srsBoxOf(s.box),
      _nextReviewAt: s.nextReviewAt || '',
      _lastWrongAt: s.lastWrongAt || '',
      _count: s.count || 0,
    }
  })
  const ordered = srsSortList(list, today)
  return ordered.slice(0, QUESTIONS_PER_LEVEL).map(function (it) {
    delete it._box
    delete it._nextReviewAt
    delete it._lastWrongAt
    delete it._count
    return it
  })
}

module.exports = {
  QUESTIONS_PER_LEVEL: QUESTIONS_PER_LEVEL,
  SRS_BOX_NEXT: SRS_BOX_NEXT,
  srsToday: todayStr,
  srsBoxOf: srsBoxOf,
  srsIsDue: srsIsDue,
  srsPromote: srsPromote,
  srsSortList: srsSortList,
  buildLevelQuestions: buildLevelQuestions,
  buildDailyQuestions: buildDailyQuestions,
  buildReviewQuestions: buildReviewQuestions,
}
