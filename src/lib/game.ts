'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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
  // actions
  ensureToday: () => void
  signIn: () => void
  addTodaySeconds: (n: number) => void
  finishLevel: (levelId: string, stars: number) => void
  recordAnswer: (qid: string, correct: boolean, isReview?: boolean) => void
  removeWrong: (qid: string) => void
  grantCombo: (combo: number) => void
  markAchievementsSeen: () => void
  resetAll: () => void
}

export interface Achievement {
  id: string
  emoji: string
  name: string
  desc: string
  check: (s: GameState) => boolean
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_win', emoji: '🎉', name: '初出茅庐', desc: '第一次通过一关', check: (s) => Object.values(s.levels).some((l) => l.completed) },
  { id: 'win4', emoji: '📚', name: '渐入佳境', desc: '通过 4 个关卡', check: (s) => Object.values(s.levels).filter((l) => l.completed).length >= 4 },
  { id: 'win8', emoji: '🏆', name: '满腹经纶', desc: '通过全部 8 个关卡', check: (s) => Object.values(s.levels).filter((l) => l.completed).length >= 8 },
  { id: 'star3_any', emoji: '⭐', name: '三星大将', desc: '任意一关拿到 3 颗星', check: (s) => Object.values(s.levels).some((l) => l.stars >= 3) },
  { id: 'star3_all', emoji: '🌟', name: '全星霸主', desc: '全部关卡都拿到 3 颗星', check: (s) => Object.keys(s.levels).length >= 8 && Object.values(s.levels).every((l) => l.stars >= 3) },
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
        }),
    }),
    { name: 'yuwen-game-v2' } // v2：题库已按 2026 新版课本全量更新，旧存档作废重开
  )
)

// 金币奖励规则（闯关内即时结算）
export function coinForAnswer(combo: number): number {
  return 10 + (combo >= 3 ? 5 : 0) // 连击 3 次以上，每题额外 +5
}

export function coinForLevel(stars: number): number {
  return stars === 3 ? 100 : stars === 2 ? 50 : stars === 1 ? 20 : 0
}

export function isUnitUnlocked(unitIndex: number, levels: Record<string, LevelProgress>): boolean {
  if (unitIndex === 0) return true
  const prevUnit = `u${unitIndex}`
  return !!levels[prevUnit]?.completed
}

export function totalStars(levels: Record<string, LevelProgress>): number {
  return Object.values(levels).reduce((sum, l) => sum + l.stars, 0)
}
