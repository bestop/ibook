// 组卷逻辑（与网页版一致：每关 10 题，选择题选项打乱，判断题保持顺序）
const QUESTIONS_PER_LEVEL = 10

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

// 错题复习：从错题快照随机抽 10 题
function buildReviewQuestions(snaps) {
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
    }
  })
  return shuffle(list).slice(0, QUESTIONS_PER_LEVEL)
}

module.exports = {
  QUESTIONS_PER_LEVEL: QUESTIONS_PER_LEVEL,
  buildLevelQuestions: buildLevelQuestions,
  buildDailyQuestions: buildDailyQuestions,
  buildReviewQuestions: buildReviewQuestions,
}
