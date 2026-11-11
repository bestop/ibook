'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SUBJECTS } from '@/lib/questions'
import type { SubjectId, PublisherKey } from '@/lib/questions'
import { petLevelOf, MOOD_DECAY_PER_DAY, MOOD_MIN, MOOD_MAX, FEED_COST, FEED_MOOD, FEED_DAILY_LIMIT, PET_EXP, STORY_UNLOCK_LEVELS } from '@/lib/pet'
import type { PetKind, PetState, PetEvent } from '@/lib/pet'

// 教材选择（顶栏左上角选择器）：年级 + 上下册 + 出版社
export interface TextbookChoice {
  gradeNum: number
  term: 'a' | 'b'
  publisher: 'all' | PublisherKey
}

export interface LevelProgress {
  stars: number // 0-3
  completed: boolean
  plays: number
}

export interface DailyDone {
  level: boolean // 完成 1 次闯关
  minutes: boolean // 玩满 20 分钟
  review: boolean // 复习 5 道错题
}

export interface GameState {
  // 资源
  textbook: TextbookChoice // 当前选中的教材（首页筛选科目岛）
  coins: number
  levels: Record<string, LevelProgress>
  wrongBook: Record<string, number> // questionId -> 错误次数
  // 最近答错日期（questionId -> YYYY-MM-DD）：SRS 到期组内「越久未错越优先」的次级排序键
  // （借鉴聪聪学堂 SRS 间隔复习思想，与小程序同构；旧档无此字段由默认值合并，无需迁移）
  wrongLastAt: Record<string, string>
  // SRS 间隔调度（借鉴聪聪学堂 srs.ts Leitner 3 盒，与小程序快照内 box/nextReviewAt 同义异构）：
  // wrongBox 盒位 1|2|3（答错回盒 1；非复习答对晋升：盒1→2 明天 / 盒2→3 3天后 / 盒3→3 7天后）；
  // wrongNextAt 下次复习日（缺失/空 = 立即到期）；复习模式答对 → 消灭出库（既有「答对即消灭」语义）。
  // 旧档无此两字段由默认值合并，无需迁移
  wrongBox: Record<string, number>
  wrongNextAt: Record<string, string>
  achievements: string[]
  unseenAchievements: string[] // 待展示的新成就
  signInDates: string[] // YYYY-MM-DD
  streak: number // 连续签到天数
  todaySeconds: number
  todayDate: string
  // 每日学习秒数历史（'YYYY-MM-DD' -> 秒）：本周报告柱状图数据源（借鉴聪聪学堂 WeeklyReportCard）
  // 旧档无此字段由默认值合并，无需迁移；ensureToday 跨天时收口至最近 28 天
  dayStats: Record<string, number>
  todayReviewCorrect: number // 今日复习答对数
  dailyDone: DailyDone
  totalCorrect: number
  totalWrong: number
  clearedTotal: number // 累计复习消灭的错题数
  // 礼物屋（亲子奖励）
  redeemLog: RedeemRecord[] // 兑换记录（最新在前）
  customRewards: RewardItem[] // 家长自定义奖励
  // 虚拟宠物（学习任务驱动成长）
  pet: PetState | null
  petEvents: PetEvent[] // 升级/剧情解锁事件队列（全局弹窗消费）
  // actions
  setTextbook: (t: TextbookChoice) => void
  adoptPet: (kind: PetKind, name: string) => void
  grantPetExp: (amount: number) => void
  feedPet: () => boolean
  markStoryRead: (chapterId: string) => void
  dismissPetEvent: () => void
  ensureToday: () => void
  signIn: () => void
  addTodaySeconds: (n: number) => void
  finishLevel: (levelId: string, stars: number) => void
  recordAnswer: (qid: string, correct: boolean, isReview?: boolean) => void
  removeWrong: (qid: string) => void
  grantCombo: (combo: number) => void
  markAchievementsSeen: () => void
  redeemReward: (rewardId: string) => boolean
  markRedeemFulfilled: (recordId: string) => void
  addCustomReward: (r: { name: string; emoji: string; cost: number; desc?: string }) => void
  removeCustomReward: (id: string) => void
  // 存档备份导入（借鉴聪聪学堂 BackupEnvelope：白名单键合并）
  // data 来自 lib/backup.ts validateEnvelope 的消毒结果；返回实际合并的键名列表
  applyBackup: (data: Record<string, unknown>) => string[]
  resetAll: () => void
}

// 成就进度条所需的统计快照（视图层组装后传入 progress）
export interface AchievementStats {
  levels: Record<string, LevelProgress>
  coins: number
  streak: number
  totalCorrect: number
  clearedTotal: number
}

export interface Achievement {
  id: string
  emoji: string
  name: string
  desc: string
  check: (s: GameState) => boolean
  progress?: (s: AchievementStats) => { cur: number; goal: number }
}

// ---------- 礼物屋（亲子奖励） ----------
export interface RewardItem {
  id: string
  name: string
  emoji: string
  cost: number
  desc: string
  custom?: boolean
}

export interface RedeemRecord {
  id: string
  rewardId: string
  name: string
  emoji: string
  cost: number
  at: number
  fulfilled: boolean
}

export const DEFAULT_REWARDS: RewardItem[] = [
  { id: 'reading', name: '亲子阅读 30 分钟', emoji: '📖', cost: 50, desc: '和爸爸妈妈一起读一本喜欢的书' },
  { id: 'cartoon', name: '看动画片 15 分钟', emoji: '📺', cost: 80, desc: '兑换后可以看 15 分钟喜欢的动画' },
  { id: 'snack', name: '美味小零食', emoji: '🍦', cost: 60, desc: '一支冰淇淋或喜欢的小零食' },
  { id: 'boardgame', name: '亲子桌游一局', emoji: '🎲', cost: 100, desc: '和爸爸妈妈玩一局桌游或拼图' },
  { id: 'park', name: '公园/游乐场', emoji: '🛝', cost: 200, desc: '周末去公园或游乐场玩半天' },
  { id: 'trip', name: '假日出游', emoji: '🚗', cost: 500, desc: '兑换一次全家假日出游计划' },
]

// 统计某科目已通过关卡数（进度键格式：`${subjectId}:${unitId}`）
function completedIn(levels: Record<string, LevelProgress>, subjectId: SubjectId): number {
  const subj = SUBJECTS.find((x) => x.id === subjectId)
  if (!subj) return 0
  return subj.units.filter((u) => levels[`${subjectId}:${u.id}`]?.completed).length
}

// 全库总关卡数（随题库自动增减，成就文案与判定动态计算，不写死数字）
const TOTAL_UNITS = SUBJECTS.reduce((n, s) => n + s.units.length, 0)

// 累计通过关卡数 / 满星关卡数（成就判定与进度条共用）
function completedTotal(levels: Record<string, LevelProgress>): number {
  return Object.values(levels).filter((l) => l.completed).length
}

function fullStarTotal(levels: Record<string, LevelProgress>): number {
  return Object.values(levels).filter((l) => l.stars >= 3).length
}

// 全部关卡都拿到满星
function allFullStars(levels: Record<string, LevelProgress>): boolean {
  return TOTAL_UNITS > 0 && fullStarTotal(levels) >= TOTAL_UNITS
}

// 通用里程碑成就：只统计累计闯关、满星、答题量、金币、连签等全局进度，
// 不与具体年级/科目/教材版本绑定（科目会持续新增，绑定后很快过时）。
// progress 返回当前进度，成就墙上未解锁的成就展示进度条。
export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_win', emoji: '🎉', name: '初出茅庐', desc: '第一次通过一关（任意科目）', check: (s) => completedTotal(s.levels) >= 1, progress: (s) => ({ cur: completedTotal(s.levels), goal: 1 }) },
  { id: 'win4', emoji: '📚', name: '渐入佳境', desc: '累计通过 4 个关卡', check: (s) => completedTotal(s.levels) >= 4, progress: (s) => ({ cur: completedTotal(s.levels), goal: 4 }) },
  { id: 'win8', emoji: '🏆', name: '满腹经纶', desc: '累计通过 8 个关卡', check: (s) => completedTotal(s.levels) >= 8, progress: (s) => ({ cur: completedTotal(s.levels), goal: 8 }) },
  { id: 'win16', emoji: '🌉', name: '勇攀高峰', desc: '累计通过 16 个关卡', check: (s) => completedTotal(s.levels) >= 16, progress: (s) => ({ cur: completedTotal(s.levels), goal: 16 }) },
  { id: 'win32', emoji: '🚀', name: '闯关小将', desc: '累计通过 32 个关卡', check: (s) => completedTotal(s.levels) >= 32, progress: (s) => ({ cur: completedTotal(s.levels), goal: 32 }) },
  { id: 'win64', emoji: '🌏', name: '闯关大将', desc: '累计通过 64 个关卡', check: (s) => completedTotal(s.levels) >= 64, progress: (s) => ({ cur: completedTotal(s.levels), goal: 64 }) },
  { id: 'win128', emoji: '🛳️', name: '闯关舰队', desc: '累计通过 128 个关卡', check: (s) => completedTotal(s.levels) >= 128, progress: (s) => ({ cur: completedTotal(s.levels), goal: 128 }) },
  { id: 'win_all', emoji: '👑', name: '全能大满贯', desc: `通过全部 ${TOTAL_UNITS} 个关卡`, check: (s) => SUBJECTS.every((sub) => completedIn(s.levels, sub.id) >= sub.units.length), progress: (s) => ({ cur: SUBJECTS.filter((sub) => completedIn(s.levels, sub.id) >= sub.units.length).length, goal: SUBJECTS.length }) },
  { id: 'star3_any', emoji: '⭐', name: '三星大将', desc: '任意一关拿到 3 颗星', check: (s) => fullStarTotal(s.levels) >= 1, progress: (s) => ({ cur: fullStarTotal(s.levels), goal: 1 }) },
  { id: 'star3_10', emoji: '✨', name: '摘星少年', desc: '10 个关卡都拿到 3 颗星', check: (s) => fullStarTotal(s.levels) >= 10, progress: (s) => ({ cur: fullStarTotal(s.levels), goal: 10 }) },
  { id: 'star3_all', emoji: '🌟', name: '全星霸主', desc: `全部 ${TOTAL_UNITS} 关都拿到 3 颗星`, check: (s) => allFullStars(s.levels), progress: (s) => ({ cur: fullStarTotal(s.levels), goal: TOTAL_UNITS }) },
  { id: 'correct100', emoji: '✏️', name: '百题小达人', desc: '累计答对 100 道题', check: (s) => s.totalCorrect >= 100, progress: (s) => ({ cur: s.totalCorrect, goal: 100 }) },
  { id: 'correct500', emoji: '🎓', name: '答题小博士', desc: '累计答对 500 道题', check: (s) => s.totalCorrect >= 500, progress: (s) => ({ cur: s.totalCorrect, goal: 500 }) },
  { id: 'rich300', emoji: '💰', name: '小富翁', desc: '累计攒到 300 金币', check: (s) => s.coins >= 300, progress: (s) => ({ cur: s.coins, goal: 300 }) },
  { id: 'rich1000', emoji: '🤑', name: '大富翁', desc: '累计攒到 1000 金币', check: (s) => s.coins >= 1000, progress: (s) => ({ cur: s.coins, goal: 1000 }) },
  { id: 'sign3', emoji: '📅', name: '持之以恒', desc: '连续签到 3 天', check: (s) => s.streak >= 3, progress: (s) => ({ cur: s.streak, goal: 3 }) },
  { id: 'sign7', emoji: '🗓️', name: '学习之星', desc: '连续签到 7 天', check: (s) => s.streak >= 7, progress: (s) => ({ cur: s.streak, goal: 7 }) },
  { id: 'sign21', emoji: '🌈', name: '习惯成自然', desc: '连续签到 21 天', check: (s) => s.streak >= 21, progress: (s) => ({ cur: s.streak, goal: 21 }) },
  // combo5 由闯关连击逻辑（grantCombo）即时授予，无需进度条
  { id: 'combo5', emoji: '🔥', name: '连击达人', desc: '一关里连续答对 5 题', check: (s) => s.achievements.includes('combo5') },
  { id: 'clear10', emoji: '🎯', name: '错题克星', desc: '复习消灭 10 道错题', check: (s) => s.clearedTotal >= 10, progress: (s) => ({ cur: s.clearedTotal, goal: 10 }) },
]

// 两个 YYYY-MM-DD 之间的天数差（宠物跨天心情衰减用）
function daysBetween(from: string, to: string): number {
  const a = new Date(`${from}T00:00:00`)
  const b = new Date(`${to}T00:00:00`)
  return Math.round((b.getTime() - a.getTime()) / 86400000)
}

export function todayStr(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// 今天 + n 天的 YYYY-MM-DD（SRS 间隔调度落 nextReviewAt 用；setDate 自动进位跨月/跨年安全）
function datePlusDays(n: number): string {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// SRS 有效盒位：非法/缺失一律回盒 1（旧档兼容口径，与小程序 quiz.srsBoxOf 同构）
export function srsBoxOf(box: unknown): number {
  return box === 2 || box === 3 ? box : 1
}

// 盒位晋升表：当前盒 → { 晋升后盒位, 间隔天数 }（与小程序 quiz.SRS_BOX_NEXT 同构）
const SRS_BOX_NEXT: Record<number, { box: number; days: number }> = {
  1: { box: 2, days: 1 },
  2: { box: 3, days: 3 },
  3: { box: 3, days: 7 },
}

function yesterdayStr(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export const DAILY_GOAL_SECONDS = 20 * 60 // 每天 20 分钟
// 每日学习时长历史封顶（本周报告用，借鉴聪聪学堂 WeeklyReportCard；与小程序同构）
const DAY_STATS_LIMIT = 28

// 每日时长历史封顶：按日期键从新到旧保留最近 28 天（防长期运行无界增长）
function pruneDayStats(stats: Record<string, number>): Record<string, number> {
  const keys = Object.keys(stats).sort().reverse()
  if (keys.length <= DAY_STATS_LIMIT) return stats
  const capped: Record<string, number> = {}
  keys.slice(0, DAY_STATS_LIMIT).forEach((k) => {
    capped[k] = stats[k]
  })
  return capped
}

interface Rewards {
  level: number
  minutes: number
  review: number
}

export const TASK_REWARDS: Rewards = { level: 20, minutes: 30, review: 10 }

function grantAchievements(state: GameState): Partial<GameState> | null {
  const newly: string[] = []
  for (const a of ACHIEVEMENTS) {
    if (!state.achievements.includes(a.id) && a.check(state)) newly.push(a.id)
  }
  if (newly.length === 0) return null
  return {
    achievements: [...state.achievements, ...newly],
    unseenAchievements: [...state.unseenAchievements, ...newly],
  }
}

export const useGame = create<GameState>()(
  persist(
    (set, get) => ({
      textbook: { gradeNum: 5, term: 'a', publisher: 'all' },
      coins: 0,
      levels: {},
      wrongBook: {},
      wrongLastAt: {},
      wrongBox: {},
      wrongNextAt: {},
      achievements: [],
      unseenAchievements: [],
      signInDates: [],
      streak: 0,
      todaySeconds: 0,
      todayDate: todayStr(),
      todayReviewCorrect: 0,
      dailyDone: { level: false, minutes: false, review: false },
      dayStats: {},
      totalCorrect: 0,
      totalWrong: 0,
      clearedTotal: 0,
      redeemLog: [],
      customRewards: [],
      pet: null,
      petEvents: [],

      setTextbook: (t) => set({ textbook: t }),

      adoptPet: (kind, name) => {
        const clean = name.trim().slice(0, 8) || (kind === 'dog' ? '旺旺' : '喵喵')
        set({
          pet: {
            kind,
            name: clean,
            exp: 0,
            mood: 80,
            lastActiveDate: todayStr(),
            feedDate: todayStr(),
            feedCount: 0,
            adoptedAt: Date.now(),
            storyRead: [],
          },
        })
      },

      grantPetExp: (amount) => {
        get().ensureToday()
        const s = get()
        const pet = s.pet
        if (!pet || amount <= 0) return
        const prevLevel = petLevelOf(pet.exp)
        const exp = pet.exp + amount
        const level = petLevelOf(exp)
        const events: PetEvent[] = []
        if (level > prevLevel) {
          events.push({ type: 'levelup', level, petName: pet.name, petKind: pet.kind })
          // 升级跨过的剧情解锁等级 → 推送剧情解锁事件
          STORY_UNLOCK_LEVELS.forEach((ul, i) => {
            if (ul > prevLevel && ul <= level) {
              events.push({ type: 'story', chapterId: `${pet.kind}-${i + 1}`, petKind: pet.kind, level: ul })
            }
          })
        }
        set({ pet: { ...pet, exp }, petEvents: [...s.petEvents, ...events] })
      },

      feedPet: () => {
        get().ensureToday()
        const s = get()
        if (!s.pet) return false
        if (s.pet.feedCount >= FEED_DAILY_LIMIT) return false
        if (s.coins < FEED_COST) return false
        set({
          coins: s.coins - FEED_COST,
          pet: {
            ...s.pet,
            mood: Math.min(MOOD_MAX, s.pet.mood + FEED_MOOD),
            feedCount: s.pet.feedCount + 1,
            feedDate: todayStr(),
          },
        })
        return true
      },

      markStoryRead: (chapterId) => {
        const s = get()
        if (!s.pet || s.pet.storyRead.includes(chapterId)) return
        set({ pet: { ...s.pet, storyRead: [...s.pet.storyRead, chapterId] } })
      },

      dismissPetEvent: () => set((s) => ({ petEvents: s.petEvents.slice(1) })),

      ensureToday: () => {
        const s = get()
        const t = todayStr()
        if (s.todayDate === t) return
        // 跨天：重置今日任务与计时；若昨天未签到则断签
        const keepStreak = s.signInDates.includes(yesterdayStr()) ? s.streak : 0
        const patch: Partial<GameState> = {
          todayDate: t,
          todaySeconds: 0,
          todayReviewCorrect: 0,
          dailyDone: { level: false, minutes: false, review: false },
          streak: keepStreak,
          dayStats: pruneDayStats(s.dayStats && typeof s.dayStats === 'object' ? s.dayStats : {}),
        }
        // 宠物：跨天结算心情轻度衰减（保底不惩罚）与喂食计数重置
        if (s.pet) {
          const days = Math.max(1, daysBetween(s.pet.lastActiveDate, t))
          patch.pet = {
            ...s.pet,
            mood: Math.max(MOOD_MIN, s.pet.mood - days * MOOD_DECAY_PER_DAY),
            lastActiveDate: t,
            feedCount: s.pet.feedDate === t ? s.pet.feedCount : 0,
            feedDate: t,
          }
        }
        set(patch)
      },

      signIn: () => {
        get().ensureToday()
        const s = get()
        const t = todayStr()
        if (s.signInDates.includes(t)) return
        const signed: GameState = {
          ...s,
          signInDates: [...s.signInDates, t],
          streak: s.signInDates.includes(yesterdayStr()) ? s.streak + 1 : 1,
          coins: s.coins + 10, // 每日签到奖励
        }
        const extra = grantAchievements(signed)
        set({ ...signed, ...(extra || {}) })
        get().grantPetExp(PET_EXP.signIn) // 签到宠物经验（统一走事件队列，升级可弹窗）
      },

      addTodaySeconds: (n) => {
        get().ensureToday()
        const s = get()
        const total = s.todaySeconds + n
        // 每日时长历史（本周报告柱状图数据源；与 todaySeconds 同步覆盖写，幂等不重复计）
        const patch: Partial<GameState> = {
          todaySeconds: total,
          dayStats: { ...(s.dayStats || {}), [s.todayDate]: total },
        }
        if (total >= DAILY_GOAL_SECONDS && !s.dailyDone.minutes) {
          patch.dailyDone = { ...s.dailyDone, minutes: true }
          patch.coins = s.coins + TASK_REWARDS.minutes
        }
        const merged = { ...s, ...patch }
        const extra = grantAchievements(merged)
        set({ ...patch, ...(extra ? { achievements: extra.achievements, unseenAchievements: extra.unseenAchievements } : {}) })
        if (patch.dailyDone?.minutes) get().grantPetExp(PET_EXP.dailyGoal) // 玩满 20 分钟宠物经验（统一走事件队列）
      },

      finishLevel: (levelId, stars) => {
        get().ensureToday()
        const s = get()
        const prev = s.levels[levelId] || { stars: 0, completed: false, plays: 0 }
        const levels = {
          ...s.levels,
          [levelId]: {
            stars: Math.max(prev.stars, stars),
            completed: prev.completed || stars > 0,
            plays: prev.plays + 1,
          },
        }
        const patch: Partial<GameState> = { levels }
        if (!s.dailyDone.level) {
          patch.dailyDone = { ...s.dailyDone, level: true }
          patch.coins = s.coins + TASK_REWARDS.level
        }
        const merged = { ...s, ...patch, levels }
        const extra = grantAchievements(merged)
        set({ ...patch, ...(extra ? { achievements: extra.achievements, unseenAchievements: extra.unseenAchievements } : {}) })
      },

      recordAnswer: (qid, correct, isReview = false) => {
        get().ensureToday()
        const s = get()
        const wrongBook = { ...s.wrongBook }
        const wrongLastAt = { ...(s.wrongLastAt || {}) }
        const wrongBox = { ...(s.wrongBox || {}) }
        const wrongNextAt = { ...(s.wrongNextAt || {}) }
        if (!correct) {
          wrongBook[qid] = (wrongBook[qid] || 0) + 1
          wrongLastAt[qid] = todayStr()
          // SRS 间隔调度：答错（任意模式）→ 回盒 1、今日到期（镜像参考 reviewSrsEntry 答错分支）
          wrongBox[qid] = 1
          wrongNextAt[qid] = todayStr()
        } else if (!isReview && wrongBook[qid] !== undefined) {
          // SRS 间隔调度：非复习模式答对错题本中的题 → 盒位晋升、复习推迟
          // （在间隔里又答对了，说明记得住，集中复习往后缓一缓；再答错会回到盒 1）
          // 复习模式答对走 removeWrong 消灭出库（既有「答对即消灭」语义），不在此晋升
          const promote = SRS_BOX_NEXT[srsBoxOf(wrongBox[qid])] || SRS_BOX_NEXT[1]
          wrongBox[qid] = promote.box
          wrongNextAt[qid] = datePlusDays(promote.days)
        }
        const patch: Partial<GameState> = {
          wrongBook,
          wrongLastAt,
          wrongBox,
          wrongNextAt,
          totalCorrect: s.totalCorrect + (correct ? 1 : 0),
          totalWrong: s.totalWrong + (correct ? 0 : 1),
        }
        if (isReview && correct) {
          patch.todayReviewCorrect = s.todayReviewCorrect + 1
          if (s.todayReviewCorrect + 1 >= 5 && !s.dailyDone.review) {
            patch.dailyDone = { ...s.dailyDone, review: true }
            patch.coins = s.coins + TASK_REWARDS.review
          }
        }
        const merged = { ...s, ...patch }
        const extra = grantAchievements(merged)
        set({ ...patch, ...(extra ? { achievements: extra.achievements, unseenAchievements: extra.unseenAchievements } : {}) })
      },

      removeWrong: (qid) => {
        const s = get()
        const wrongBook = { ...s.wrongBook }
        if (!(qid in wrongBook)) return
        delete wrongBook[qid]
        const wrongLastAt = { ...(s.wrongLastAt || {}) }
        delete wrongLastAt[qid]
        const wrongBox = { ...(s.wrongBox || {}) }
        delete wrongBox[qid]
        const wrongNextAt = { ...(s.wrongNextAt || {}) }
        delete wrongNextAt[qid]
        const clearedTotal = s.clearedTotal + 1
        const extra = grantAchievements({ ...s, wrongBook, clearedTotal })
        set({
          wrongBook,
          wrongLastAt,
          wrongBox,
          wrongNextAt,
          clearedTotal,
          ...(extra ? { achievements: extra.achievements, unseenAchievements: extra.unseenAchievements } : {}),
        })
        get().grantPetExp(PET_EXP.reviewCleared) // 消灭错题宠物经验（统一走事件队列）
      },

      grantCombo: (combo) => {
        const s = get()
        if (combo < 5 || s.achievements.includes('combo5')) return
        set({
          achievements: [...s.achievements, 'combo5'],
          unseenAchievements: [...s.unseenAchievements, 'combo5'],
        })
      },

      markAchievementsSeen: () => set({ unseenAchievements: [] }),

      redeemReward: (rewardId) => {
        const s = get()
        const reward = [...DEFAULT_REWARDS, ...s.customRewards].find((r) => r.id === rewardId)
        if (!reward) return false
        if (s.coins < reward.cost) return false
        const record: RedeemRecord = {
          id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          rewardId,
          name: reward.name,
          emoji: reward.emoji,
          cost: reward.cost,
          at: Date.now(),
          fulfilled: false,
        }
        set({
          coins: s.coins - reward.cost,
          redeemLog: [record, ...s.redeemLog].slice(0, 60),
        })
        return true
      },

      markRedeemFulfilled: (recordId) => {
        const s = get()
        set({
          redeemLog: s.redeemLog.map((r) => (r.id === recordId ? { ...r, fulfilled: true } : r)),
        })
      },

      addCustomReward: ({ name, emoji, cost, desc }) => {
        const s = get()
        const clean = name.trim().slice(0, 12)
        if (!clean || !Number.isFinite(cost) || cost <= 0) return
        set({
          customRewards: [
            ...s.customRewards,
            { id: `custom_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`, name: clean, emoji, cost: Math.round(cost), desc: desc?.trim().slice(0, 30) || '和爸爸妈妈的约定', custom: true },
          ],
        })
      },

      removeCustomReward: (id) => {
        const s = get()
        set({ customRewards: s.customRewards.filter((r) => r.id !== id) })
      },

      // 存档备份导入（借鉴聪聪学堂 backup.ts：白名单键合并，与小程序 applyBackup 同构）
      // data 已由 lib/backup.ts validateEnvelope 逐字段消毒；这里只做「认识才合并」：
      // 与当前状态同类型才覆盖（对象深拷贝），pet 允许显式置空，缺失键保留当前值（前向兼容）
      applyBackup: (data) => {
        const s = get()
        const patch: Partial<GameState> = {}
        const imported: string[] = []
        Object.keys(data || {}).forEach((key) => {
          if (!(key in s)) return
          const v = data[key]
          const cur = (s as unknown as Record<string, unknown>)[key]
          if (v === null) {
            if (key === 'pet') {
              patch.pet = null
              imported.push(key)
            }
            return
          }
          if (typeof v !== typeof cur) return
          if (typeof v === 'number' && !Number.isFinite(v)) return
          if (typeof v === 'object') {
            ;(patch as Record<string, unknown>)[key] = JSON.parse(JSON.stringify(v))
          } else {
            ;(patch as Record<string, unknown>)[key] = v
          }
          imported.push(key)
        })
        if (imported.length === 0) return imported
        // 导入后统一收口：签到列表/每日时长重新封顶；跨天字段由 ensureToday 校正
        if (Array.isArray(patch.signInDates) && patch.signInDates.length > 400) {
          patch.signInDates = patch.signInDates.slice(-400)
        }
        if (patch.dayStats && typeof patch.dayStats === 'object') {
          patch.dayStats = pruneDayStats(patch.dayStats as Record<string, number>)
        }
        set(patch)
        get().ensureToday()
        return imported
      },

      resetAll: () =>
        set({
          coins: 0,
          levels: {},
          wrongBook: {},
          wrongLastAt: {},
          wrongBox: {},
          wrongNextAt: {},
          achievements: [],
          unseenAchievements: [],
          signInDates: [],
          streak: 0,
          todaySeconds: 0,
          todayReviewCorrect: 0,
          dailyDone: { level: false, minutes: false, review: false },
          dayStats: {},
          totalCorrect: 0,
          totalWrong: 0,
          clearedTotal: 0,
          redeemLog: [],
          customRewards: [],
          pet: null,
          petEvents: [],
        }),
    }),
    { name: 'study-game-v3' } // v3：多科目架构，进度键为 `科目:关卡`；新增科目/礼物屋字段由默认值合并，无需迁移旧存档
  )
)

// 金币奖励规则（闯关内即时结算）
export function coinForAnswer(combo: number): number {
  return 10 + (combo >= 3 ? 5 : 0) // 连击 3 次以上，每题额外 +5
}

export function coinForLevel(stars: number): number {
  return stars === 3 ? 100 : stars === 2 ? 50 : stars === 1 ? 20 : 0
}

// 科目内关卡解锁：第一关永远解锁，其后必须通过上一关
export function isUnitUnlocked(subjectId: SubjectId, unitIndex: number, levels: Record<string, LevelProgress>): boolean {
  if (unitIndex === 0) return true
  const subject = SUBJECTS.find((s) => s.id === subjectId)
  const prevUnit = subject?.units[unitIndex - 1]
  if (!prevUnit) return false
  return !!levels[`${subjectId}:${prevUnit.id}`]?.completed
}

export function totalStars(levels: Record<string, LevelProgress>): number {
  return Object.values(levels).reduce((sum, l) => sum + l.stars, 0)
}

// 某科目已通过关卡数 / 星星数（首页与地图统计用）
export function subjectStats(levels: Record<string, LevelProgress>, subjectId: SubjectId): { completed: number; stars: number; total: number } {
  const subject = SUBJECTS.find((s) => s.id === subjectId)
  if (!subject) return { completed: 0, stars: 0, total: 0 }
  let completed = 0
  let stars = 0
  for (const u of subject.units) {
    const p = levels[`${subjectId}:${u.id}`]
    if (p?.completed) completed++
    stars += p?.stars ?? 0
  }
  return { completed, stars, total: subject.units.length }
}
