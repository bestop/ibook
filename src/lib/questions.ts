// 多科目题库注册中心
// 语文五上：2026 新版统编五年级上册（八大单元主题）
// 语文四上：2026 新版统编四年级上册（含新增文化遗产单元）
// 数学：沪教版（上海教育出版社）五年级第一学期（八大关卡）
// 英语：2026 新版沪教版（五四学制）英语五年级上册（上海教育出版社，Starter + 10 个单元）
// 每关 10 题

import { UNITS as CN_UNITS, QUESTIONS as CN_QUESTIONS } from './bank-chinese'
import { UNITS as CN4_UNITS, QUESTIONS as CN4_QUESTIONS } from './bank-chinese4'
import { UNITS as MATH_UNITS, QUESTIONS as MATH_QUESTIONS } from './bank-math'
import { UNITS as EN_UNITS, QUESTIONS as EN_QUESTIONS } from './bank-english'

export type QType = 'choice' | 'judge'

export interface Question {
  id: string
  type: QType
  q: string
  options: string[]
  answer: number
  explain: string
  tag: string
}

export interface Unit {
  id: string
  name: string
  title: string
  emoji: string
  color: string
  lessons: string[]
  intro: string
}

export type SubjectId = 'chinese' | 'chinese4' | 'math' | 'english'

export interface Subject {
  id: SubjectId
  name: string
  grade: string
  publisher: string
  emoji: string
  theme: 'orange' | 'emerald' | 'sky' | 'rose'
  qidPrefix: string
  tagline: string
  units: Unit[]
  questions: Record<string, Question[]>
}

export const SUBJECTS: Subject[] = [
  {
    id: 'chinese',
    name: '语文',
    grade: '五年级上册',
    publisher: '2026 新版统编教材 · 五年级上册',
    emoji: '🏮',
    theme: 'orange',
    qidPrefix: 'q',
    tagline: '万物有灵 → 读书明理，八大单元主题闯关',
    units: CN_UNITS,
    questions: CN_QUESTIONS,
  },
  {
    id: 'chinese4',
    name: '语文',
    grade: '四年级上册',
    publisher: '2026 新版统编教材 · 四年级上册',
    emoji: '🐉',
    theme: 'rose',
    qidPrefix: 'c',
    tagline: '自然之美 → 文化遗产 → 家国情怀',
    units: CN4_UNITS,
    questions: CN4_QUESTIONS,
  },
  {
    id: 'math',
    name: '数学',
    grade: '五年级第一学期',
    publisher: '沪教版 · 上海教育出版社 · 五年级第一学期',
    emoji: '🧮',
    theme: 'emerald',
    qidPrefix: 'm',
    tagline: '小数乘除 → 平均数 → 图形面积 → 方程',
    units: MATH_UNITS,
    questions: MATH_QUESTIONS,
  },
  {
    id: 'english',
    name: '英语',
    grade: '五年级上册',
    publisher: '2026 新版沪教版（五四学制）· 上海教育出版社',
    emoji: '🔤',
    theme: 'sky',
    qidPrefix: 'e',
    tagline: 'Starter 热身 → 社团 → 传统游戏 → 植物动物 → 科学家与发明',
    units: EN_UNITS,
    questions: EN_QUESTIONS,
  },
]

export function getSubject(id: SubjectId): Subject {
  const s = SUBJECTS.find((x) => x.id === id)
  if (!s) throw new Error(`unknown subject: ${id}`)
  return s
}

// 全科题库合集（错题本用；题目 id 前缀区分科目：语文五上 q、语文四上 c、数学 m、英语 e，不会冲突）
export const ALL_QUESTIONS: Question[] = SUBJECTS.flatMap((s) => Object.values(s.questions).flat())

export function subjectOfQuestion(qid: string): Subject {
  const s = SUBJECTS.find((x) => qid.startsWith(x.qidPrefix))
  if (!s) throw new Error(`unknown subject for question: ${qid}`)
  return s
}

export const QUESTIONS_PER_LEVEL = 10
export const TIME_PER_QUESTION = 40 // 每题倒计时（秒）
export const LIVES = 3 // 生命值

// 洗牌（Fisher-Yates）
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function prepare(q: Question): { question: Question; options: string[]; answer: number } {
  if (q.type === 'judge') return { question: q, options: q.options, answer: q.answer }
  const idx = shuffle(q.options.map((_, i) => i))
  return {
    question: q,
    options: idx.map((i) => q.options[i]),
    answer: idx.indexOf(q.answer),
  }
}

// 生成一次闯关的题目序列（选项也打乱，judge 保持顺序）
export function buildLevelQuestions(subjectId: SubjectId, unitId: string): { question: Question; options: string[]; answer: number }[] {
  const pool = getSubject(subjectId).questions[unitId] || []
  const picked = pool.length <= QUESTIONS_PER_LEVEL ? pool : shuffle(pool).slice(0, QUESTIONS_PER_LEVEL)
  return picked.map(prepare)
}

// 每日挑战：从本科目已解锁单元中随机抽题
export function buildDailyQuestions(subjectId: SubjectId, unlockedUnitIds: string[]): { question: Question; options: string[]; answer: number }[] {
  const subject = getSubject(subjectId)
  const pool = subject.units
    .filter((u) => unlockedUnitIds.includes(u.id))
    .flatMap((u) => subject.questions[u.id] || [])
  const source = pool.length >= QUESTIONS_PER_LEVEL ? pool : subject.units.flatMap((u) => subject.questions[u.id] || [])
  return shuffle(source).slice(0, QUESTIONS_PER_LEVEL).map(prepare)
}

export function levelKey(subjectId: SubjectId, unitId: string): string {
  return `${subjectId}:${unitId}`
}
