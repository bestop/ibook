'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { SUBJECTS } from '@/lib/questions'
import type { SubjectId, PublisherKey } from '@/lib/questions'

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
  achievements: string[]
  unseenAchievements: string[] // 待展示的新成就
  signInDates: string[] // YYYY-MM-DD
  streak: number // 连续签到天数
  todaySeconds: number
  todayDate: string
  todayReviewCorrect: number // 今日复习答对数
  dailyDone: DailyDone
  totalCorrect: number
  totalWrong: number
  // 礼物屋（亲子奖励）
  redeemLog: RedeemRecord[] // 兑换记录（最新在前）
  customRewards: RewardItem[] // 家长自定义奖励
  // actions
  setTextbook: (t: TextbookChoice) => void
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
  resetAll: () => void
}

export interface Achievement {
  id: string
  emoji: string
  name: string
  desc: string
  check: (s: GameState) => boolean
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

// 全部 154 关（十七科：语文一上8+数学一上7+英语一上14+语文二上8+数学二上8+英语二上11+语文三上8+数学三上9+英语三上11+语文四上8+数学四上9+英语四上11+语文五上8+数学五上8+英语五上11+语文六上·六三制8+语文六上·五四7）是否都拿到满星
function allFullStars(levels: Record<string, LevelProgress>): boolean {
  const totalUnits = SUBJECTS.reduce((n, s) => n + s.units.length, 0)
  let count = 0
  for (const s of SUBJECTS) {
    for (const u of s.units) {
      if ((levels[`${s.id}:${u.id}`]?.stars ?? 0) >= 3) count++
    }
  }
  return count >= totalUnits
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_win', emoji: '🎉', name: '初出茅庐', desc: '第一次通过一关（任意科目）', check: (s) => Object.values(s.levels).some((l) => l.completed) },
  { id: 'win4', emoji: '📚', name: '渐入佳境', desc: '累计通过 4 个关卡', check: (s) => Object.values(s.levels).filter((l) => l.completed).length >= 4 },
  { id: 'win8', emoji: '🏆', name: '满腹经纶', desc: '累计通过 8 个关卡', check: (s) => Object.values(s.levels).filter((l) => l.completed).length >= 8 },
  { id: 'win16', emoji: '🌉', name: '文理双全', desc: '语文、数学全部 16 关都通过', check: (s) => completedIn(s.levels, 'chinese') >= 8 && completedIn(s.levels, 'math') >= 8 },
  { id: 'eng_all', emoji: '🐲', name: '英语小能手', desc: '通过英语全部 11 个单元（含 Starter 热身站）', check: (s) => completedIn(s.levels, 'english') >= 11 },
  { id: 'win27', emoji: '🌈', name: '三科全能王', desc: '五上语文、数学、英语全部 27 关都通过', check: (s) => completedIn(s.levels, 'chinese') >= 8 && completedIn(s.levels, 'math') >= 8 && completedIn(s.levels, 'english') >= 11 },
  { id: 'cn_all', emoji: '🏮', name: '文学小达人', desc: '通过五年级上册语文全部 8 个单元', check: (s) => completedIn(s.levels, 'chinese') >= 8 },
  { id: 'cn4_all', emoji: '🐉', name: '四年级小状元', desc: '通过四年级上册语文全部 8 个单元（含文化遗产单元）', check: (s) => completedIn(s.levels, 'chinese4') >= 8 },
  { id: 'win35', emoji: '🚀', name: '全能小岛主', desc: '四上语文、五上语文、数学、英语全部 35 关都通过', check: (s) => completedIn(s.levels, 'chinese') >= 8 && completedIn(s.levels, 'chinese4') >= 8 && completedIn(s.levels, 'math') >= 8 && completedIn(s.levels, 'english') >= 11 },
  { id: 'math4_all', emoji: '🚀', name: '四上数学小达人', desc: '通过四年级上册数学全部 9 个关卡（含抽屉原理）', check: (s) => completedIn(s.levels, 'math4') >= 9 },
  { id: 'eng4_all', emoji: '⛵', name: '四上英语小能手', desc: '通过四年级上册英语全部 11 个单元（含 Starter 热身站）', check: (s) => completedIn(s.levels, 'english4') >= 11 },
  { id: 'win54', emoji: '🏝️', name: '六科全能大岛主', desc: '四、五年级语文·数学·英语全部 55 关都通过', check: (s) => completedIn(s.levels, 'chinese') >= 8 && completedIn(s.levels, 'chinese4') >= 8 && completedIn(s.levels, 'math') >= 8 && completedIn(s.levels, 'math4') >= 9 && completedIn(s.levels, 'english') >= 11 && completedIn(s.levels, 'english4') >= 11 },
  { id: 'cn3_all', emoji: '🌱', name: '三年级小进士', desc: '通过三年级上册语文全部 8 个单元（含文言文《司马光》）', check: (s) => completedIn(s.levels, 'chinese3') >= 8 },
  { id: 'math3_all', emoji: '🪁', name: '三上数学小神童', desc: '通过三年级上册数学全部 9 个关卡（含数学广场·七巧板）', check: (s) => completedIn(s.levels, 'math3') >= 9 },
  { id: 'eng3_all', emoji: '🌈', name: '三上英语小明星', desc: '通过三年级上册英语全部 11 个单元（含 Starter 热身站）', check: (s) => completedIn(s.levels, 'english3') >= 11 },
  { id: 'cn2_all', emoji: '🐸', name: '二年级小书虫', desc: '通过二年级上册语文全部 8 个单元（小蝌蚪到风娃娃）', check: (s) => completedIn(s.levels, 'chinese2') >= 8 },
  { id: 'math2_all', emoji: '🪀', name: '二上数学小机灵', desc: '通过二年级上册数学全部 8 个关卡（含乘法口诀与几何小实践）', check: (s) => completedIn(s.levels, 'math2') >= 8 },
  { id: 'eng2_all', emoji: '🐣', name: '二上英语小芽芽', desc: '通过二年级上册英语全部 11 个单元（沪教版新教材，含 Starter）', check: (s) => completedIn(s.levels, 'english2') >= 11 },
  { id: 'win83', emoji: '🏝️', name: '九科全能总岛主', desc: '三、四、五年级语数英全部 83 关都通过', check: (s) => completedIn(s.levels, 'chinese3') >= 8 && completedIn(s.levels, 'math3') >= 9 && completedIn(s.levels, 'english3') >= 11 && completedIn(s.levels, 'chinese4') >= 8 && completedIn(s.levels, 'math4') >= 9 && completedIn(s.levels, 'english4') >= 11 && completedIn(s.levels, 'chinese') >= 8 && completedIn(s.levels, 'math') >= 8 && completedIn(s.levels, 'english') >= 11 },
  { id: 'win111', emoji: '🌏', name: '十二科全能总岛主', desc: '二、三、四、五年级语数英全部 110 关都通过', check: (s) => completedIn(s.levels, 'chinese2') >= 8 && completedIn(s.levels, 'math2') >= 8 && completedIn(s.levels, 'english2') >= 11 && completedIn(s.levels, 'chinese3') >= 8 && completedIn(s.levels, 'math3') >= 9 && completedIn(s.levels, 'english3') >= 11 && completedIn(s.levels, 'chinese4') >= 8 && completedIn(s.levels, 'math4') >= 9 && completedIn(s.levels, 'english4') >= 11 && completedIn(s.levels, 'chinese') >= 8 && completedIn(s.levels, 'math') >= 8 && completedIn(s.levels, 'english') >= 11 },
  { id: 'cn1_all', emoji: '🌸', name: '小小读书郎', desc: '通过一年级上册语文全部 8 个单元（含拼音乐园）', check: (s) => completedIn(s.levels, 'chinese1') >= 8 },
  { id: 'cn6_all', emoji: '🦌', name: '六年级小翰林', desc: '通过六年级上册语文（六三制）全部 8 个单元（含文言文《两小儿辩日》《曹冲称象》）', check: (s) => completedIn(s.levels, 'chinese6') >= 8 },
  { id: 'cn54_all', emoji: '🌿', name: '五四学制小才子', desc: '通过六年级上册语文（五四学制）全部 7 个单元（含红色经典活动·探究）', check: (s) => completedIn(s.levels, 'chinese54') >= 7 },
  { id: 'math1_all', emoji: '🧸', name: '一上数学小天才', desc: '通过一年级上册数学全部 7 个关卡（含凑十法）', check: (s) => completedIn(s.levels, 'math1') >= 7 },
  { id: 'eng1_all', emoji: '🐤', name: '一上英语小雏鹰', desc: '通过一年级上册英语全部 14 个单元（沪教版新教材，含 Starter 与 3 个语音角）', check: (s) => completedIn(s.levels, 'english1') >= 14 },
  { id: 'win138', emoji: '🌟', name: '十七科全能满贯岛主', desc: '一至六年级语数英（含六上语文两个学制版本）全部 154 关都通过', check: (s) => completedIn(s.levels, 'chinese1') >= 8 && completedIn(s.levels, 'math1') >= 7 && completedIn(s.levels, 'english1') >= 14 && completedIn(s.levels, 'chinese2') >= 8 && completedIn(s.levels, 'math2') >= 8 && completedIn(s.levels, 'english2') >= 11 && completedIn(s.levels, 'chinese3') >= 8 && completedIn(s.levels, 'math3') >= 9 && completedIn(s.levels, 'english3') >= 11 && completedIn(s.levels, 'chinese4') >= 8 && completedIn(s.levels, 'math4') >= 9 && completedIn(s.levels, 'english4') >= 11 && completedIn(s.levels, 'chinese') >= 8 && completedIn(s.levels, 'math') >= 8 && completedIn(s.levels, 'english') >= 11 && completedIn(s.levels, 'chinese6') >= 8 && completedIn(s.levels, 'chinese54') >= 7 },
  { id: 'math_all', emoji: '🧮', name: '数学小达人', desc: '通过五年级上册数学全部 8 个关卡', check: (s) => completedIn(s.levels, 'math') >= 8 },
  { id: 'star3_any', emoji: '⭐', name: '三星大将', desc: '任意一关拿到 3 颗星', check: (s) => Object.values(s.levels).some((l) => l.stars >= 3) },
  { id: 'star3_all', emoji: '🌟', name: '全星霸主', desc: '全部 154 个关卡都拿到 3 颗星', check: (s) => allFullStars(s.levels) },
  { id: 'combo5', emoji: '🔥', name: '连击达人', desc: '一关里连续答对 5 题', check: (s) => s.achievements.includes('combo5') },
  { id: 'rich300', emoji: '💰', name: '小富翁', desc: '累计攒到 300 金币', check: (s) => s.coins >= 300 },
  { id: 'sign3', emoji: '📅', name: '持之以恒', desc: '连续签到 3 天', check: (s) => s.streak >= 3 },
  { id: 'sign7', emoji: '🗓️', name: '学习之星', desc: '连续签到 7 天', check: (s) => s.streak >= 7 },
  // clear10 由 removeWrong() 手动授予（需要累计消灭错题计数器）
  { id: 'clear10', emoji: '🎯', name: '错题克星', desc: '复习消灭 10 道错题', check: () => false },
]

// 累计消灭错题计数器（非持久化，重开游戏后重新累计即可）
const clearedCounter = { value: 0 }

function todayStr(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function yesterdayStr(): string {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export const DAILY_GOAL_SECONDS = 20 * 60 // 每天 20 分钟

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
      achievements: [],
      unseenAchievements: [],
      signInDates: [],
      streak: 0,
      todaySeconds: 0,
      todayDate: todayStr(),
      todayReviewCorrect: 0,
      dailyDone: { level: false, minutes: false, review: false },
      totalCorrect: 0,
      totalWrong: 0,
      redeemLog: [],
      customRewards: [],

      setTextbook: (t) => set({ textbook: t }),

      ensureToday: () => {
        const s = get()
        const t = todayStr()
        if (s.todayDate === t) return
        // 跨天：重置今日任务与计时；若昨天未签到则断签
        const keepStreak = s.signInDates.includes(yesterdayStr()) ? s.streak : 0
        set({
          todayDate: t,
          todaySeconds: 0,
          todayReviewCorrect: 0,
          dailyDone: { level: false, minutes: false, review: false },
          streak: keepStreak,
        })
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
      },

      addTodaySeconds: (n) => {
        get().ensureToday()
        const s = get()
        const total = s.todaySeconds + n
        const patch: Partial<GameState> = { todaySeconds: total }
        if (total >= DAILY_GOAL_SECONDS && !s.dailyDone.minutes) {
          patch.dailyDone = { ...s.dailyDone, minutes: true }
          patch.coins = s.coins + TASK_REWARDS.minutes
        }
        const merged = { ...s, ...patch }
        const extra = grantAchievements(merged)
        set({ ...patch, ...(extra ? { achievements: extra.achievements, unseenAchievements: extra.unseenAchievements } : {}) })
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
        if (!correct) {
          wrongBook[qid] = (wrongBook[qid] || 0) + 1
        }
        const patch: Partial<GameState> = {
          wrongBook,
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
        clearedCounter.value += 1
        const merged = { ...s, wrongBook }
        const customCheck = ACHIEVEMENTS.find((a) => a.id === 'clear10')
        const patch: Partial<GameState> = { wrongBook }
        if (customCheck && clearedCounter.value >= 10 && !s.achievements.includes('clear10')) {
          patch.achievements = [...s.achievements, 'clear10']
          patch.unseenAchievements = [...s.unseenAchievements, 'clear10']
        }
        const extra = grantAchievements({ ...merged, ...patch } as GameState)
        set({
          ...patch,
          ...(extra ? { achievements: extra.achievements, unseenAchievements: extra.unseenAchievements } : {}),
        })
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

      resetAll: () =>
        set({
          coins: 0,
          levels: {},
          wrongBook: {},
          achievements: [],
          unseenAchievements: [],
          signInDates: [],
          streak: 0,
          todaySeconds: 0,
          todayReviewCorrect: 0,
          dailyDone: { level: false, minutes: false, review: false },
          totalCorrect: 0,
          totalWrong: 0,
          redeemLog: [],
          customRewards: [],
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
