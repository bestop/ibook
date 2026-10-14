'use client'

import { PET_STORIES } from '@/lib/pet-stories'
import type { StoryChapter } from '@/lib/pet-stories'

// ---------- 宠物系统：成长 / 喂养 / 剧情 ----------
// 设计原则：轻养成、不惩罚——心情只影响表情与气泡，不影响经验获取；
// 宠物经验全部来自"学习任务"，让孩子与宠物一起成长。

export type PetKind = 'dog' | 'cat'

export interface PetState {
  kind: PetKind
  name: string
  exp: number // 累计经验（决定等级）
  mood: number // 心情 0-100
  lastActiveDate: string // 上次活跃日期（跨天结算心情衰减）
  feedDate: string // 喂食计数日期
  feedCount: number // 今日已喂食次数
  adoptedAt: number
  storyRead: string[] // 已读完的剧情章节 id
}

// 全局宠物事件队列（升级 / 剧情解锁），供全局弹窗消费
export type PetEvent =
  | { type: 'levelup'; level: number; petName: string; petKind: PetKind }
  | { type: 'story'; chapterId: string; petKind: PetKind; level: number }

// ---------- 经验来源（结算页与日常动作） ----------
export const PET_EXP = {
  level1Star: 20, // 闯关 1 星
  level2Star: 30, // 闯关 2 星
  level3Star: 40, // 闯关 3 星
  failComfort: 5, // 闯关失败安慰奖（宠物相信你会更好）
  daily: 25, // 每日挑战完成
  review: 15, // 错题复习完成
  signIn: 10, // 每日签到
  dailyGoal: 20, // 玩满 20 分钟
  reviewCleared: 3, // 每消灭 1 道错题
} as const

export function petExpForLevelStars(stars: number): number {
  if (stars >= 3) return PET_EXP.level3Star
  if (stars === 2) return PET_EXP.level2Star
  if (stars === 1) return PET_EXP.level1Star
  return PET_EXP.failComfort
}

// ---------- 等级曲线（累计经验阈值，Lv1 起始 0） ----------
// 每天认真玩 20 分钟（2 关 + 复习 + 任务 + 签到）≈ 110 经验/天，
// 满 15 级约 3~4 周，长期养成节奏。
export const PET_MAX_LEVEL = 15
export const PET_LEVEL_EXP = [0, 40, 100, 180, 280, 400, 540, 700, 880, 1080, 1300, 1540, 1800, 2080, 2380]

export function petLevelOf(exp: number): number {
  let lv = 1
  for (let i = 0; i < PET_LEVEL_EXP.length; i++) {
    if (exp >= PET_LEVEL_EXP[i]) lv = i + 1
  }
  return Math.min(lv, PET_MAX_LEVEL)
}

export function petLevelProgress(exp: number): { level: number; cur: number; need: number; pct: number } {
  const level = petLevelOf(exp)
  if (level >= PET_MAX_LEVEL) return { level, cur: 0, need: 0, pct: 1 }
  const base = PET_LEVEL_EXP[level - 1]
  const next = PET_LEVEL_EXP[level]
  return { level, cur: exp - base, need: next - base, pct: Math.min(1, (exp - base) / (next - base)) }
}

// ---------- 成长阶段 ----------
export interface PetStage {
  minLevel: number
  name: string
  title: string
  desc: string
  dogEmoji: string
  catEmoji: string
}

export const PET_STAGES: PetStage[] = [
  { minLevel: 1, name: '幼年期', title: '小小冒险家', desc: '刚来到冒险岛的小毛球，需要多多学习才能长大', dogEmoji: '🐶', catEmoji: '🐱' },
  { minLevel: 4, name: '少年期', title: '勇敢探险家', desc: '翅膀变硬啦（虽然猫狗都没有翅膀）', dogEmoji: '🐕', catEmoji: '🐈' },
  { minLevel: 8, name: '成年期', title: '岛屿守护者', desc: '可以独当一面，守护岛上的小伙伴们', dogEmoji: '🦮', catEmoji: '🐈‍⬛' },
  { minLevel: 12, name: '传说期', title: '岛之传说', desc: '觉醒远古血脉，戴上传说皇冠', dogEmoji: '🐕‍🦺', catEmoji: '🦁' },
]

export function petStageOf(level: number): PetStage {
  let stage = PET_STAGES[0]
  for (const s of PET_STAGES) {
    if (level >= s.minLevel) stage = s
  }
  return stage
}

export function petEmoji(kind: PetKind, level: number): string {
  const stage = petStageOf(level)
  return kind === 'dog' ? stage.dogEmoji : stage.catEmoji
}

// ---------- 喂食与心情 ----------
export const MOOD_DECAY_PER_DAY = 10 // 每天衰减
export const MOOD_MIN = 20 // 保底心情（不惩罚）
export const MOOD_MAX = 100
export const FEED_COST = 20 // 金币/次
export const FEED_MOOD = 30
export const FEED_DAILY_LIMIT = 3 // 每日喂食上限

export function moodLabel(mood: number): { text: string; emoji: string } {
  if (mood >= 85) return { text: '开心得转圈圈！', emoji: '💕' }
  if (mood >= 60) return { text: '心情不错，想出去探险～', emoji: '😊' }
  if (mood >= 40) return { text: '有点想小主人了……', emoji: '🙂' }
  return { text: '想吃点小零食提提神', emoji: '🥺' }
}

// ---------- 专属剧情解锁 ----------
export const STORY_UNLOCK_LEVELS = [1, 2, 4, 6, 8, 10, 12, 15]

export function storyUnlockLevel(index: number): number {
  return STORY_UNLOCK_LEVELS[index - 1] ?? PET_MAX_LEVEL
}

export function unlockedStories(kind: PetKind, level: number): Array<StoryChapter & { locked: boolean }> {
  return PET_STORIES[kind].map((ch) => ({
    ...ch,
    locked: level < storyUnlockLevel(ch.index),
  }))
}

export function totalStoryCount(kind: PetKind): number {
  return PET_STORIES[kind].length
}

// ---------- 宠物名候选 ----------
export const PET_NAME_SUGGESTIONS: Record<PetKind, string[]> = {
  dog: ['旺旺', '棉花糖', '小煤球', '饼干', '豆豆'],
  cat: ['喵喵', '糯米', '小橘子', '雪球', '布丁'],
}
