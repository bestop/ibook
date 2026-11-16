// 本地进度存储 + 游戏机制（与网页版同构：进度键 `科目:关卡`，金币/星级/错题/签到/礼物屋/宠物规则一致）
// 注意：小程序与网页版的进度各自独立保存（浏览器 localStorage vs 微信 storage），
// 同步的是「教材与闯关内容」（题库从网页端 API 获取）。
const pet = require('./pet')
const quiz = require('./quiz') // SRS 间隔调度（复习组卷与错题盒位晋升同源，避免两端规则漂移）

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
// 每日学习时长历史封顶（本周报告用，借鉴聪聪学堂 WeeklyReportCard；28 天足够任意日历周回溯）
const DAY_STATS_LIMIT = 28
// 错题本容量保护：全部进度存在单键 storage（单键上限 1MB），题目快照体积大，
// 无限增长终会写爆导致 save 静默失败丢进度；超限按插入序淘汰最旧（book/snap 同步淘汰）
const WRONGBOOK_LIMIT = 300
// 签到日期列表封顶：逻辑只用得到今昨两天与 streak 计数，封顶仅作存储卫生防膨胀
const SIGN_DATES_LIMIT = 400

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
    pet: null, // 虚拟宠物（与网页版同构：kind/name/exp/mood/storyRead...）
    petEvents: [], // 升级/剧情解锁事件队列（结算页/宠物页弹窗消费）
    petJustEvolved: null, // 跨成长阶段瞬态标记（宠物页播进化光效用，不随云档恢复）
    dayStats: {}, // 'YYYY-MM-DD' -> 当日学习秒数（本周报告柱状图，借鉴聪聪学堂 WeeklyReportCard）
  }
}

let state = null
let subjectsRef = [] // manifest 注入，用于成就计算

// —— 变更订阅（云端自动上传的数据源） ——
// utils/cloud 在 app 启动时订阅：save() 落盘后逐个通知，订阅者异常互不影响
let changeListeners = []
function onChange(cb) {
  if (typeof cb === 'function') changeListeners.push(cb)
}
function notifyChange() {
  changeListeners.forEach(function (cb) {
    try { cb() } catch (e) {}
  })
}

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
  notifyChange() // 落盘后通知订阅者（云端节流上传）；内存已变更，写盘失败也照常通知
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
  pruneDayStats(s)
  // 宠物：跨天结算心情轻度衰减（保底不惩罚）与喂食计数重置
  if (s.pet) {
    const days = Math.max(1, daysBetween(s.pet.lastActiveDate, t))
    s.pet.mood = Math.max(pet.MOOD_MIN, s.pet.mood - days * pet.MOOD_DECAY_PER_DAY)
    s.pet.lastActiveDate = t
    s.pet.feedCount = s.pet.feedDate === t ? s.pet.feedCount : 0
    s.pet.feedDate = t
  }
  save()
}

// 每日时长历史封顶：按日期键从新到旧保留最近 28 天（防长期运行无界增长）
function pruneDayStats(s) {
  if (!s.dayStats || typeof s.dayStats !== 'object') {
    s.dayStats = {}
    return
  }
  const keys = Object.keys(s.dayStats).sort().reverse()
  if (keys.length <= DAY_STATS_LIMIT) return
  keys.slice(DAY_STATS_LIMIT).forEach(function (k) { delete s.dayStats[k] })
}

// 三个每日任务是否全部达成（达成庆祝用，借鉴聪聪学堂每日达标庆祝）
function allTasksDone(s) {
  return !!(s.dailyDone && s.dailyDone.level && s.dailyDone.minutes && s.dailyDone.review)
}

// 两个 YYYY-MM-DD 之间的天数差（宠物跨天心情衰减用）
function daysBetween(from, to) {
  const a = new Date(from + 'T00:00:00').getTime()
  const b = new Date(to + 'T00:00:00').getTime()
  // 非法/缺失日期按 1 天处理：Math.max(1, NaN) 仍是 NaN，会污染宠物心情数值
  if (!isFinite(a) || !isFinite(b)) return 1
  return Math.round((b - a) / 86400000)
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
    // combo5 仅由 grantCombo 手动授予：若这里恒返回 true，refreshAchievements
    // 会把它自动发给从未达成连击的用户，且真正连击时 grantCombo 因已存在而失效
    case 'combo5': return state.achievements.indexOf('combo5') >= 0
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
  if (s.signInDates.length > SIGN_DATES_LIMIT) s.signInDates = s.signInDates.slice(-SIGN_DATES_LIMIT)
  s.streak = s.signInDates.indexOf(todayStr(-1)) >= 0 ? s.streak + 1 : 1
  s.coins += 10
  save()
  grantPetExp(pet.PET_EXP.signIn) // 签到宠物经验（统一走事件队列）
  const newly = refreshAchievements()
  return { ok: true, msg: '签到成功，金币 +10', newly: newly }
}

function addTodaySeconds(n) {
  ensureToday() // 跨天防御：答题页计时器跨零点时累计归入新的一天
  const s = load()
  s.todaySeconds += n
  // 每日时长历史（本周报告柱状图数据源；与 todaySeconds 同步覆盖写，幂等不重复计）
  if (s.dayStats && typeof s.dayStats === 'object') s.dayStats[s.todayDate] = s.todaySeconds
  if (s.todaySeconds >= DAILY_GOAL_SECONDS && !s.dailyDone.minutes) {
    s.dailyDone.minutes = true
    s.coins += TASK_REWARDS.minutes
    save()
    grantPetExp(pet.PET_EXP.dailyGoal) // 玩满 20 分钟宠物经验
    // 金币入账后顺带刷一次成就（攒金类可能恰好达标），随返回值带给页面提示
    return { taskDone: 'minutes', coins: TASK_REWARDS.minutes, newly: refreshAchievements(), allDone: allTasksDone(s) }
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
  return { taskCoins: taskCoins, newly: newly, allDone: allTasksDone(s) }
}

// 记录一次作答；答错写入错题本（含快照）；isReview 且答对 → 消灭错题 + 今日复习进度
function recordAnswer(question, correct, isReview) {
  ensureToday()
  const s = load()
  if (correct) {
    s.totalCorrect += 1
    // SRS 间隔调度（借鉴聪聪学堂 srs.ts，与网页版同构）：非复习模式答对错题本中的题
    // → 盒位晋升、复习推迟（盒1→2 明天 / 盒2→3 3天后 / 盒3→3 7天后）：
    // 在间隔里又答对了，说明记得住，集中复习往后缓一缓；再答错会回到盒 1
    // 复习模式答对走 removeWrong 消灭出库（既有「答对即消灭」语义），不在此晋升
    const snap = isReview ? null : s.wrongSnaps[question.id]
    if (snap) {
      const promote = quiz.srsPromote(snap.box)
      snap.box = promote.box
      snap.nextReviewAt = todayStr(promote.days)
    }
  } else {
    s.totalWrong += 1
    s.wrongBook[question.id] = (s.wrongBook[question.id] || 0) + 1
    // 快照自包含 SRS 字段（借鉴聪聪学堂 srs.ts Leitner 3 盒，与网页版同构）：
    // lastWrongAt 最近答错日期 / count 累计错误次数 / box 盒位 / nextReviewAt 下次复习日
    // 答错（任意模式）→ 回盒 1、今日到期（镜像参考 reviewSrsEntry 答错分支「今天就再练」）
    s.wrongSnaps[question.id] = {
      subjectId: question.subjectId,
      unitId: question.unitId,
      type: question.type,
      q: question.q,
      options: question.options,
      answer: question.answer,
      explain: question.explain,
      tag: question.tag,
      lastWrongAt: todayStr(),
      count: s.wrongBook[question.id],
      box: 1,
      nextReviewAt: todayStr(),
    }
    // 容量保护：超限按插入序淘汰最旧的错题（book 与 snap 同步删，保持两表一致；
    // 被淘汰的题目仅退出复习圈，成就统计走 clearedTotal 独立计数不受影响）
    const ids = Object.keys(s.wrongBook)
    if (ids.length > WRONGBOOK_LIMIT) {
      ids.slice(0, ids.length - WRONGBOOK_LIMIT).forEach(function (qid) {
        delete s.wrongBook[qid]
        delete s.wrongSnaps[qid]
      })
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
  return { reviewDone: reviewDone, allDone: reviewDone ? allTasksDone(s) : false }
}

function removeWrong(qid) {
  const s = load()
  if (!(qid in s.wrongBook)) return
  delete s.wrongBook[qid]
  delete s.wrongSnaps[qid]
  s.clearedTotal += 1
  save()
  grantPetExp(pet.PET_EXP.reviewCleared) // 消灭错题宠物经验
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
  // 内容未变化时跳过写入：首页每次 onShow 都会调 applyFilter → 本方法，
  // 不判等会产生每次切页一次的同步 storage I/O
  if (s.textbook && JSON.stringify(s.textbook) === JSON.stringify(choice)) return
  s.textbook = choice
  save()
}

// ---------- 宠物 ----------
function adoptPet(kind, name) {
  const s = load()
  const clean = (name || '').trim().slice(0, 8) || (kind === 'dog' ? '旺旺' : '喵喵')
  s.pet = {
    kind: kind,
    name: clean,
    exp: 0,
    mood: 80,
    lastActiveDate: todayStr(),
    feedDate: todayStr(),
    feedCount: 0,
    touchDate: '', // 最后一次获得摸摸奖励的日期（'' 表示今日还没摸过）
    adoptedAt: Date.now(),
    storyRead: [],
  }
  save()
}

// 发放宠物经验；升级时推送升级/剧情解锁事件（与网页版 grantPetExp 同构）
// 跨成长阶段时额外写瞬态字段 petJustEvolved，供宠物页播进化光效（不随云档恢复，同 petEvents）
function grantPetExp(amount) {
  ensureToday()
  const s = load()
  if (!s.pet || !(amount > 0)) return
  const prevLevel = pet.petLevelOf(s.pet.exp)
  s.pet.exp += amount
  const level = pet.petLevelOf(s.pet.exp)
  if (level > prevLevel) {
    s.petEvents.push({ type: 'levelup', level: level, prevLevel: prevLevel, petName: s.pet.name, petKind: s.pet.kind })
    if (pet.petStageIndex(prevLevel) < pet.petStageIndex(level)) {
      s.petJustEvolved = { prevLevel: prevLevel, level: level, petKind: s.pet.kind, ts: Date.now() }
    }
    pet.STORY_UNLOCK_LEVELS.forEach(function (ul, i) {
      if (ul > prevLevel && ul <= level) {
        s.petEvents.push({ type: 'story', chapterId: s.pet.kind + '-' + (i + 1), petKind: s.pet.kind, level: ul })
      }
    })
  }
  save()
}

function feedPet() {
  ensureToday()
  const s = load()
  if (!s.pet) return { ok: false, msg: '还没有领养宠物' }
  if (s.pet.feedCount >= pet.FEED_DAILY_LIMIT) return { ok: false, msg: '今天吃得太饱啦，明天再喂吧～' }
  if (s.coins < pet.FEED_COST) return { ok: false, msg: '金币不够哦（需要 ' + pet.FEED_COST + ' 枚），去闯关赚金币吧！' }
  s.coins -= pet.FEED_COST
  s.pet.mood = Math.min(pet.MOOD_MAX, s.pet.mood + pet.FEED_MOOD)
  s.pet.feedCount += 1
  s.pet.feedDate = todayStr()
  save()
  return { ok: true, msg: s.pet.name + ' 吃得香喷喷，心情 +30！' }
}

// 摸摸宠物（小程序端互动扩展）：每日首次心情 +5，之后纯表演不落库
function touchPet() {
  ensureToday()
  const s = load()
  if (!s.pet) return { ok: false, first: false, mood: 0 }
  const t = todayStr()
  if (s.pet.touchDate === t) return { ok: true, first: false, mood: s.pet.mood }
  s.pet.touchDate = t
  s.pet.mood = Math.min(pet.MOOD_MAX, s.pet.mood + pet.PET_TOUCH_MOOD)
  save()
  return { ok: true, first: true, mood: s.pet.mood }
}

// 标记剧情章读完；首次读完返回 { ok, first }，首次读同时心情 +5（小程序端扩展）
function markStoryRead(chapterId) {
  const s = load()
  if (!s.pet || s.pet.storyRead.indexOf(chapterId) >= 0) return { ok: false, first: false }
  s.pet.storyRead.push(chapterId)
  s.pet.mood = Math.min(pet.MOOD_MAX, s.pet.mood + pet.PET_STORY_MOOD)
  save()
  return { ok: true, first: true }
}

function clearPetEvents() {
  const s = load()
  s.petEvents = []
  save()
}

function clearPetJustEvolved() {
  const s = load()
  if (s.petJustEvolved) {
    s.petJustEvolved = null
    save()
  }
}

function resetAll() {
  state = defaultState()
  save()
}

// ---------- 云端恢复：白名单消毒重建（与网页端 cloud.ts applyCanonical 同构） ----------
// 云端档不可信：逐字段钳制/回退安全默认值/容量封顶，未知字段一律丢弃；
// 重建全新 state 后整体替换，再跨天归一化 + 成就重算，返回消毒后的活动状态。
const RESTORE_DATE_RE = /^\d{4}-\d{2}-\d{2}$/
function restoreInt(v, d, max) {
  const n = typeof v === 'number' && isFinite(v) ? Math.floor(v) : NaN
  return isNaN(n) ? d : Math.max(0, Math.min(max === undefined ? 1e7 : max, n))
}
function restoreStr(v, d, max) {
  return typeof v === 'string' ? v.slice(0, max === undefined ? 64 : max) : d
}
function restoreDate(v, d) {
  return typeof v === 'string' && RESTORE_DATE_RE.test(v) ? v : d
}
function restoreObj(v) {
  return v && typeof v === 'object' && !Array.isArray(v) ? v : {}
}
function restoreArr(v) {
  return Array.isArray(v) ? v : []
}

function replaceState(dirty) {
  const st = dirty && typeof dirty === 'object' && !Array.isArray(dirty) ? dirty : {}
  const today = todayStr()
  const next = defaultState()

  // 错题本（计数表）：键长/容量封顶，按插入序保留前 300（与网页端 slice(0, N) 同构）
  const wb = restoreObj(st.wrongBook)
  Object.keys(wb)
    .slice(0, WRONGBOOK_LIMIT)
    .forEach(function (qid) {
      if (typeof qid !== 'string' || qid.length > 48) return
      next.wrongBook[qid] = restoreInt(wb[qid], 1, 99)
    })
  // 错题快照（含 SRS 盒位，离线复习可用）：与计数表同上限；非法 options 重建为数组
  const snaps = restoreObj(st.wrongSnaps)
  Object.keys(snaps)
    .slice(0, WRONGBOOK_LIMIT)
    .forEach(function (qid) {
      if (typeof qid !== 'string' || qid.length > 48) return
      const sn = restoreObj(snaps[qid])
      const box = restoreInt(sn.box, 1, 3)
      next.wrongSnaps[qid] = {
        subjectId: restoreStr(sn.subjectId, '', 16),
        unitId: restoreStr(sn.unitId, '', 16),
        type: restoreStr(sn.type, '', 12),
        q: restoreStr(sn.q, '', 300),
        options: restoreArr(sn.options)
          .filter(function (o) { return typeof o === 'string' })
          .slice(0, 8)
          .map(function (o) { return o.slice(0, 100) }),
        answer: restoreInt(sn.answer, 0, 9),
        explain: restoreStr(sn.explain, '', 300),
        tag: restoreStr(sn.tag, '', 16),
        lastWrongAt: restoreDate(sn.lastWrongAt, today),
        count: restoreInt(sn.count, 1, 99),
        box: box === 2 || box === 3 ? box : 1,
        nextReviewAt: restoreDate(sn.nextReviewAt, today),
      }
    })

  // 关卡进度：非对象值整条丢弃；stars 钳 0-3 / completed 严格布尔 / plays 钳非负
  const lv = restoreObj(st.levels)
  Object.keys(lv)
    .slice(0, 3000)
    .forEach(function (k) {
      if (typeof k !== 'string' || k.length > 64) return
      const p = lv[k]
      if (!p || typeof p !== 'object' || Array.isArray(p)) return
      next.levels[k] = {
        stars: Math.max(0, Math.min(3, restoreInt(p.stars, 0, 3))),
        completed: p.completed === true,
        plays: restoreInt(p.plays, 0, 9999),
      }
    })

  // 签到日期（合法日期去重，保尾 400）与每日时长历史（键必须合法日期，保尾 28 天）
  next.signInDates = Array.from(
    new Set(restoreArr(st.signInDates).filter(function (x) { return typeof x === 'string' && RESTORE_DATE_RE.test(x) }))
  ).slice(-SIGN_DATES_LIMIT)
  const ds = restoreObj(st.dayStats)
  Object.keys(ds)
    .filter(function (k) { return RESTORE_DATE_RE.test(k) })
    .sort()
    .slice(-DAY_STATS_LIMIT)
    .forEach(function (k) { next.dayStats[k] = restoreInt(ds[k], 0) })

  // 成就：字符串且 ≤32 位，去重封顶（满星关补授等重算交给 refreshAchievements）
  const achSeen = {}
  restoreArr(st.achievements).forEach(function (a) {
    if (typeof a === 'string' && a.length > 0 && a.length <= 32) achSeen[a] = true
  })
  next.achievements = Object.keys(achSeen).slice(0, 64)

  // 计数与今日字段（负数收敛 0、超大值钳上限、非法日期回退今天）
  next.coins = restoreInt(st.coins, 0)
  next.streak = restoreInt(st.streak, 0, 9999)
  next.todaySeconds = restoreInt(st.todaySeconds, 0)
  next.todayDate = restoreDate(st.todayDate, today)
  next.todayReviewCorrect = restoreInt(st.todayReviewCorrect, 0, 999)
  next.totalCorrect = restoreInt(st.totalCorrect, 0)
  next.totalWrong = restoreInt(st.totalWrong, 0)
  next.clearedTotal = restoreInt(st.clearedTotal, 0)

  // 每日任务严格布尔化（数字/字符串一律 false）
  const dd = restoreObj(st.dailyDone)
  next.dailyDone = { level: dd.level === true, minutes: dd.minutes === true, review: dd.review === true }

  // 兑换记录 / 自定义奖励：结构消毒 + 容量封顶，无 id 条目丢弃
  next.redeemLog = restoreArr(st.redeemLog)
    .filter(function (r) { return !!r && typeof r === 'object' && !Array.isArray(r) })
    .slice(0, 60)
    .map(function (r) {
      return {
        id: restoreStr(r.id, '', 48),
        rewardId: restoreStr(r.rewardId, '', 48),
        name: restoreStr(r.name, '', 24),
        emoji: restoreStr(r.emoji, '🎁', 4),
        cost: restoreInt(r.cost, 0),
        at: restoreInt(r.at, 0, 4102444800000),
        fulfilled: r.fulfilled === true,
      }
    })
    .filter(function (r) { return r.id })
  next.customRewards = restoreArr(st.customRewards)
    .filter(function (r) { return !!r && typeof r === 'object' && !Array.isArray(r) })
    .slice(0, 60)
    .map(function (r) {
      return {
        id: restoreStr(r.id, '', 64),
        name: restoreStr(r.name, '', 12),
        emoji: restoreStr(r.emoji, '🎁', 4),
        cost: Math.max(1, restoreInt(r.cost, 1)),
        desc: restoreStr(r.desc, '', 30),
        custom: true,
      }
    })
    .filter(function (r) { return r.id })

  // 教材选择：年级钳 1-6（缺省 5）、册别回退 a、出版社字符串化（缺省 all）
  const tb = restoreObj(st.textbook)
  const gradeNum = restoreInt(tb.gradeNum, 5, 6) || 5
  next.textbook = {
    gradeNum: gradeNum,
    term: tb.term === 'b' ? 'b' : 'a',
    publisher: typeof tb.publisher === 'string' && tb.publisher ? tb.publisher.slice(0, 12) : 'all',
  }

  // 宠物（与 adoptPet 同构收敛）；petEvents 为瞬态弹窗队列，不随云档恢复（重建为空）
  const petRaw = st.pet && typeof st.pet === 'object' && !Array.isArray(st.pet) ? st.pet : null
  if (petRaw) {
    next.pet = {
      kind: petRaw.kind === 'cat' ? 'cat' : 'dog',
      name: restoreStr(petRaw.name, '小伙伴', 8) || '小伙伴',
      exp: restoreInt(petRaw.exp, 0, 1000000),
      mood: Math.max(0, Math.min(100, restoreInt(petRaw.mood, 80, 100))),
      lastActiveDate: restoreDate(petRaw.lastActiveDate, today),
      feedDate: restoreDate(petRaw.feedDate, today),
      feedCount: restoreInt(petRaw.feedCount, 0, 99),
      touchDate: restoreDate(petRaw.touchDate, ''),
      adoptedAt: restoreInt(petRaw.adoptedAt, Date.now(), 4102444800000),
      storyRead: restoreArr(petRaw.storyRead)
        .filter(function (x) { return typeof x === 'string' })
        .slice(0, 32)
        .map(function (c) { return c.slice(0, 48) }),
    }
  }

  // 整体替换 + 落盘 + 跨天归一化（昨日档重置今日任务）+ 成就重算（满星关补授星成就）
  state = next
  save()
  ensureToday()
  refreshAchievements()
  return state
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
  onChange: onChange,
  replaceState: replaceState,
  refreshAchievements: refreshAchievements,
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
  adoptPet: adoptPet,
  grantPetExp: grantPetExp,
  feedPet: feedPet,
  touchPet: touchPet,
  markStoryRead: markStoryRead,
  clearPetEvents: clearPetEvents,
  clearPetJustEvolved: clearPetJustEvolved,
  resetAll: resetAll,
  subjectStats: subjectStats,
  totalStars: totalStars,
  isUnitUnlocked: isUnitUnlocked,
  starsForWrong: starsForWrong,
  coinForAnswer: coinForAnswer,
  coinForLevel: coinForLevel,
}
