// 本地进度存储 + 游戏机制（与网页版同构：进度键 `科目:关卡`，金币/星级/错题/签到/礼物屋规则一致）
// 注意：小程序与网页版的进度各自独立保存（浏览器 localStorage vs 微信 storage），
// 同步的是「教材与闯关内容」（题库从网页端 API 获取）。
const DEFAULT_REWARDS = [
  { id: 'reading', name: '亲子阅读 30 分钟', emoji: '📖', cost: 50, desc: '和爸爸妈妈一起读一本喜欢的书' },
  { id: 'cartoon', name: '看动画片 15 分钟', emoji: '📺', cost: 80, desc: '兑换后可以看 15 分钟喜欢的动画' },
  { id: 'snack', name: '美味小零食', emoji: '🍦', cost: 60, desc: '一支冰淇淋或喜欢的小零食' },
  { id: 'boardgame', name: '亲子桌游一局', emoji: '🎲', cost: 100, desc: '和爸爸妈妈玩一局桌游或拼图' },
  { id: 'park', name: '公园/游乐场', emoji: '🛝', cost: 200, desc: '周末去公园或游乐场玩半天' },
  { id: 'trip', name: '假日出游', emoji: '🚗', cost: 500, desc: '兑换一次全家假日出游计划' },
]

const DAILY_GOAL_SECONDS = 20 * 60
const TASK_REWARDS = { level: 20, minutes: 30, review: 10 }
const STORAGE_KEY = 'study-game-v3-mp'

function todayStr(offsetDays) {
  const d = new Date()
  d.setDate(d.getDate() + (offsetDays || 0))
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return d.getFullYear() + '-' + m + '-' + day
}

function defaultState() {
  return {
    textbook: { gradeNum: 5, term: 'a', publisher: 'all' },
    coins: 0,
    levels: {}, // `${subjectId}:${unitId}` -> { stars, completed, plays }
    wrongBook: {}, // qid -> 错误次数
    wrongSnaps: {}, // qid -> 题目快照（复习离线可用）
    achievements: [],
    signInDates: [],
    streak: 0,
    todaySeconds: 0,
    todayDate: todayStr(),
    todayReviewCorrect: 0,
    dailyDone: { level: false, minutes: false, review: false },
    totalCorrect: 0,
    totalWrong: 0,
    clearedTotal: 0,
    redeemLog: [], // { id, rewardId, name, emoji, cost, at, fulfilled }
    customRewards: [],
  }
}

let state = null
let subjectsRef = [] // manifest 注入，用于成就计算

function load() {
  if (state) return state
  try {
    const saved = wx.getStorageSync(STORAGE_KEY)
    state = Object.assign(defaultState(), saved || {})
  } catch (e) {
    state = defaultState()
  }
  // 跨天重置
  ensureToday()
  return state
}

function save() {
  if (!state) return
  try {
    wx.setStorageSync(STORAGE_KEY, state)
  } catch (e) {}
}

function ensureToday() {
  const s = load()
  const t = todayStr()
  if (s.todayDate === t) return
  const keepStreak = s.signInDates.indexOf(todayStr(-1)) >= 0 ? s.streak : 0
  s.todayDate = t
  s.todaySeconds = 0
  s.todayReviewCorrect = 0
  s.dailyDone = { level: false, minutes: false, review: false }
  s.streak = keepStreak
  save()
}

// ---------- 成就 ----------
// 通用里程碑成就：只统计累计闯关、满星、答题量、金币、连签等全局进度，
// 不绑定具体年级/科目（科目会持续新增，绑定后很快过时失效）
function buildAchievements() {
  const subjects = subjectsRef
  const totalLevels = subjects.reduce(function (n, s) { return n + s.levelCount }, 0)
  const list = [
    { id: 'first_win', emoji: '🎉', name: '初出茅庐', desc: '第一次通过一关' },
    { id: 'win4', emoji: '📚', name: '渐入佳境', desc: '累计通过 4 个关卡' },
    { id: 'win8', emoji: '🏆', name: '满腹经纶', desc: '累计通过 8 个关卡' },
    { id: 'win16', emoji: '🌉', name: '勇攀高峰', desc: '累计通过 16 个关卡' },
    { id: 'win32', emoji: '🚀', name: '闯关小将', desc: '累计通过 32 个关卡' },
    { id: 'win64', emoji: '🌏', name: '闯关大将', desc: '累计通过 64 个关卡' },
    { id: 'win128', emoji: '🛳️', name: '闯关舰队', desc: '累计通过 128 个关卡' },
  ]
  if (totalLevels > 0) {
    list.push({ id: 'win_all', emoji: '👑', name: '全能大满贯', desc: '通过全部 ' + totalLevels + ' 个关卡' })
    list.push({ id: 'star3_all', emoji: '🌟', name: '全星霸主', desc: '全部 ' + totalLevels + ' 关拿到 3 星' })
  }
  list.push(
    { id: 'star3_any', emoji: '⭐', name: '三星大将', desc: '任意一关拿到 3 颗星' },
    { id: 'star3_10', emoji: '✨', name: '摘星少年', desc: '10 个关卡拿到 3 颗星' },
    { id: 'correct100', emoji: '✏️', name: '百题小达人', desc: '累计答对 100 道题' },
    { id: 'correct500', emoji: '🎓', name: '答题小博士', desc: '累计答对 500 道题' },
    { id: 'rich300', emoji: '💰', name: '小富翁', desc: '累计攒到 300 金币' },
    { id: 'rich1000', emoji: '🤑', name: '大富翁', desc: '累计攒到 1000 金币' },
    { id: 'sign3', emoji: '📅', name: '持之以恒', desc: '连续签到 3 天' },
    { id: 'sign7', emoji: '🗓️', name: '学习之星', desc: '连续签到 7 天' },
    { id: 'sign21', emoji: '🌈', name: '习惯成自然', desc: '连续签到 21 天' },
    { id: 'combo5', emoji: '🔥', name: '连击达人', desc: '一关里连续答对 5 题' },
    { id: 'clear10', emoji: '🎯', name: '错题克星', desc: '复习消灭 10 道错题' }
  )
  return list
}

function completedCount(state, subject) {
  let n = 0
  subject.units.forEach(function (u) {
    const p = state.levels[subject.id + ':' + u.id]
    if (p && p.completed) n++
  })
  return n
}

function checkAchievement(state, id) {
  const subjects = subjectsRef
  const totalLevels = subjects.reduce(function (n, s) { return n + s.levelCount }, 0)
  const doneList = subjects.filter(function (s) { return completedCount(state, s) >= s.levelCount }).length
  let completed = 0
  let fullStars = 0
  Object.keys(state.levels).forEach(function (k) {
    if (state.levels[k].completed) completed++
    if (state.levels[k].stars >= 3) fullStars++
  })
  switch (id) {
    case 'first_win': return completed >= 1
    case 'win4': return completed >= 4
    case 'win8': return completed >= 8
    case 'win16': return completed >= 16
    case 'win32': return completed >= 32
    case 'win64': return completed >= 64
    case 'win128': return completed >= 128
    case 'win_all': return totalLevels > 0 && doneList >= subjects.length
    case 'star3_any': return fullStars >= 1
    case 'star3_10': return fullStars >= 10
    case 'star3_all': return totalLevels > 0 && fullStars >= totalLevels
    case 'correct100': return state.totalCorrect >= 100
    case 'correct500': return state.totalCorrect >= 500
    case 'rich300': return state.coins >= 300
    case 'rich1000': return state.coins >= 1000
    case 'sign3': return state.streak >= 3
    case 'sign7': return state.streak >= 7
    case 'sign21': return state.streak >= 21
    case 'combo5': return true // 由 grantCombo 手动授予
    case 'clear10': return state.clearedTotal >= 10
    default: return false
  }
}

// 检查并授予新成就，返回新成就定义数组（用于 toast）
function refreshAchievements() {
  const s = load()
  const newly = []
  buildAchievements().forEach(function (a) {
    if (s.achievements.indexOf(a.id) < 0 && checkAchievement(s, a.id)) newly.push(a)
  })
  if (newly.length) {
    s.achievements = s.achievements.concat(newly.map(function (a) { return a.id }))
    save()
  }
  return newly
}

// ---------- 动作 ----------
function signIn() {
  ensureToday()
  const s = load()
  const t = todayStr()
  if (s.signInDates.indexOf(t) >= 0) return { ok: false, msg: '今天已经签到过啦' }
  s.signInDates.push(t)
  s.streak = s.signInDates.indexOf(todayStr(-1)) >= 0 ? s.streak + 1 : 1
  s.coins += 10
  save()
  const newly = refreshAchievements()
  return { ok: true, msg: '签到成功，金币 +10', newly: newly }
}

function addTodaySeconds(n) {
  const s = load()
  s.todaySeconds += n
  if (s.todaySeconds >= DAILY_GOAL_SECONDS && !s.dailyDone.minutes) {
    s.dailyDone.minutes = true
    s.coins += TASK_REWARDS.minutes
    save()
    return { taskDone: 'minutes', coins: TASK_REWARDS.minutes }
  }
  return null
}

function finishLevel(levelKey, stars) {
  ensureToday()
  const s = load()
  const prev = s.levels[levelKey] || { stars: 0, completed: false, plays: 0 }
  s.levels[levelKey] = {
    stars: Math.max(prev.stars, stars),
    completed: prev.completed || stars > 0,
    plays: prev.plays + 1,
  }
  let taskCoins = 0
  if (!s.dailyDone.level) {
    s.dailyDone.level = true
    s.coins += TASK_REWARDS.level
    taskCoins = TASK_REWARDS.level
  }
  save()
  const newly = refreshAchievements()
  return { taskCoins: taskCoins, newly: newly }
}

// 记录一次作答；答错写入错题本（含快照）；isReview 且答对 → 消灭错题 + 今日复习进度
function recordAnswer(question, correct, isReview) {
  ensureToday()
  const s = load()
  if (correct) {
    s.totalCorrect += 1
  } else {
    s.totalWrong += 1
    s.wrongBook[question.id] = (s.wrongBook[question.id] || 0) + 1
    s.wrongSnaps[question.id] = {
      subjectId: question.subjectId,
      unitId: question.unitId,
      type: question.type,
      q: question.q,
      options: question.options,
      answer: question.answer,
      explain: question.explain,
      tag: question.tag,
    }
  }
  let reviewDone = false
  if (isReview && correct) {
    s.todayReviewCorrect += 1
    if (s.todayReviewCorrect >= 5 && !s.dailyDone.review) {
      s.dailyDone.review = true
      s.coins += TASK_REWARDS.review
      reviewDone = true
    }
  }
  save()
  return { reviewDone: reviewDone }
}

function removeWrong(qid) {
  const s = load()
  if (!(qid in s.wrongBook)) return
  delete s.wrongBook[qid]
  delete s.wrongSnaps[qid]
  s.clearedTotal += 1
  save()
  return refreshAchievements()
}

function grantCombo(combo) {
  const s = load()
  if (combo < 5 || s.achievements.indexOf('combo5') >= 0) return null
  s.achievements.push('combo5')
  save()
  return { emoji: '🔥', name: '连击达人' }
}

function redeemReward(rewardId) {
  const s = load()
  const reward = DEFAULT_REWARDS.concat(s.customRewards).find(function (r) { return r.id === rewardId })
  if (!reward) return { ok: false, msg: '奖励不存在' }
  if (s.coins < reward.cost) return { ok: false, msg: '金币不够哦，还差 ' + (reward.cost - s.coins) + ' 枚' }
  s.coins -= reward.cost
  s.redeemLog.unshift({
    id: Date.now() + '_' + Math.random().toString(36).slice(2, 8),
    rewardId: reward.id,
    name: reward.name,
    emoji: reward.emoji,
    cost: reward.cost,
    at: Date.now(),
    fulfilled: false,
  })
  s.redeemLog = s.redeemLog.slice(0, 60)
  save()
  return { ok: true, msg: '兑换成功！记得提醒爸爸妈妈兑现哦', reward: reward }
}

function markRedeemFulfilled(recordId) {
  const s = load()
  s.redeemLog = s.redeemLog.map(function (r) {
    if (r.id === recordId) r.fulfilled = true
    return r
  })
  save()
}

function addCustomReward(name, emoji, cost) {
  const s = load()
  const clean = (name || '').trim().slice(0, 12)
  const c = Math.round(Number(cost))
  if (!clean || !isFinite(c) || c <= 0) return { ok: false, msg: '请填写奖励名称和正确的金币价格' }
  s.customRewards.push({
    id: 'custom_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
    name: clean,
    emoji: (emoji || '🎁').slice(0, 4),
    cost: c,
    desc: '和爸爸妈妈的约定',
    custom: true,
  })
  save()
  return { ok: true, msg: '已添加自定义奖励' }
}

function removeCustomReward(id) {
  const s = load()
  s.customRewards = s.customRewards.filter(function (r) { return r.id !== id })
  save()
}

function setTextbook(choice) {
  const s = load()
  s.textbook = choice
  save()
}

function resetAll() {
  state = defaultState()
  save()
}

// ---------- 查询 ----------
function subjectStats(subject) {
  const s = load()
  let completed = 0
  let stars = 0
  subject.units.forEach(function (u) {
    const p = s.levels[subject.id + ':' + u.id]
    if (p && p.completed) completed++
    stars += p ? p.stars : 0
  })
  return { completed: completed, stars: stars, total: subject.levelCount }
}

function totalStars() {
  const s = load()
  let sum = 0
  Object.keys(s.levels).forEach(function (k) { sum += s.levels[k].stars })
  return sum
}

function isUnitUnlocked(subject, unitIndex) {
  if (unitIndex === 0) return true
  const s = load()
  const prev = subject.units[unitIndex - 1]
  if (!prev) return false
  const p = s.levels[subject.id + ':' + prev.id]
  return !!(p && p.completed)
}

function starsForWrong(wrongCount) {
  return wrongCount === 0 ? 3 : wrongCount === 1 ? 2 : 1
}

function coinForAnswer(combo) {
  return 10 + (combo >= 3 ? 5 : 0)
}

function coinForLevel(stars) {
  return stars === 3 ? 100 : stars === 2 ? 50 : stars === 1 ? 20 : 0
}

module.exports = {
  DEFAULT_REWARDS: DEFAULT_REWARDS,
  DAILY_GOAL_SECONDS: DAILY_GOAL_SECONDS,
  TASK_REWARDS: TASK_REWARDS,
  getState: load,
  save: save,
  ensureToday: ensureToday,
  setSubjects: function (subjects) { subjectsRef = subjects || [] },
  signIn: signIn,
  addTodaySeconds: addTodaySeconds,
  finishLevel: finishLevel,
  recordAnswer: recordAnswer,
  removeWrong: removeWrong,
  grantCombo: grantCombo,
  redeemReward: redeemReward,
  markRedeemFulfilled: markRedeemFulfilled,
  addCustomReward: addCustomReward,
  removeCustomReward: removeCustomReward,
  setTextbook: setTextbook,
  resetAll: resetAll,
  subjectStats: subjectStats,
  totalStars: totalStars,
  isUnitUnlocked: isUnitUnlocked,
  starsForWrong: starsForWrong,
  coinForAnswer: coinForAnswer,
  coinForLevel: coinForLevel,
}
