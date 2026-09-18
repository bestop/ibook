// 多科目题库注册中心
// 年级维度：四年级上册 / 五年级上册（term: 'a' 上册，'b' 下册预留）
// 语文：2026 新版统编教材（人民教育出版社）四上/五上，各 8 单元
// 数学：沪教版（上海教育出版社）2026 新版四上（9 单元）/ 五上（8 单元）
// 英语：2026 新版沪教版（五四学制·上海教育出版社）四上/五上，各 Starter + 10 单元
// 每关 10 题

import { UNITS as CN_UNITS, QUESTIONS as CN_QUESTIONS } from './bank-chinese'
import { UNITS as CN4_UNITS, QUESTIONS as CN4_QUESTIONS } from './bank-chinese4'
import { UNITS as MATH_UNITS, QUESTIONS as MATH_QUESTIONS } from './bank-math'
import { UNITS as MATH4_UNITS, QUESTIONS as MATH4_QUESTIONS } from './bank-math4'
import { UNITS as EN_UNITS, QUESTIONS as EN_QUESTIONS } from './bank-english'
import { UNITS as EN4_UNITS, QUESTIONS as EN4_QUESTIONS } from './bank-english4'

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

export type SubjectId = 'chinese' | 'chinese4' | 'math' | 'math4' | 'english' | 'english4'

// 出版社 key：rj 人民教育出版社（统编语文）、she 上海教育出版社（数学/英语）
export type PublisherKey = 'rj' | 'she'

export interface Subject {
  id: SubjectId
  name: string
  grade: string // 展示用，如「四年级上册」
  gradeNum: number // 4 / 5
  term: 'a' | 'b' // a 上册 / b 下册
  publisher: string // 完整出版信息
  publisherKey: PublisherKey
  emoji: string
  theme: 'orange' | 'emerald' | 'sky' | 'rose' | 'violet' | 'teal'
  qidPrefix: string
  tagline: string
  units: Unit[]
  questions: Record<string, Question[]>
}

export const SUBJECTS: Subject[] = [
  {
    id: 'chinese4',
    name: '语文',
    grade: '四年级上册',
    gradeNum: 4,
    term: 'a',
    publisher: '2026 新版统编教材 · 人民教育出版社 · 四年级上册',
    publisherKey: 'rj',
    emoji: '🐉',
    theme: 'rose',
    qidPrefix: 'c',
    tagline: '自然之美 → 文化遗产 → 家国情怀',
    units: CN4_UNITS,
    questions: CN4_QUESTIONS,
  },
  {
    id: 'math4',
    name: '数学',
    grade: '四年级上册',
    gradeNum: 4,
    term: 'a',
    publisher: '2026 新版沪教版 · 上海教育出版社 · 四年级第一学期',
    publisherKey: 'she',
    emoji: '🚀',
    theme: 'violet',
    qidPrefix: 'n',
    tagline: '运算律 → 大数 → 分数 → 线与角 → 抽屉原理',
    units: MATH4_UNITS,
    questions: MATH4_QUESTIONS,
  },
  {
    id: 'english4',
    name: '英语',
    grade: '四年级上册',
    gradeNum: 4,
    term: 'a',
    publisher: '2026 新版沪教版（五四学制）· 上海教育出版社 · 四年级上册',
    publisherKey: 'she',
    emoji: '⛵',
    theme: 'teal',
    qidPrefix: 'g',
    tagline: '我的学校 → 动物家园 → 健康早餐 → 天气预报',
    units: EN4_UNITS,
    questions: EN4_QUESTIONS,
  },
  {
    id: 'chinese',
    name: '语文',
    grade: '五年级上册',
    gradeNum: 5,
    term: 'a',
    publisher: '2026 新版统编教材 · 人民教育出版社 · 五年级上册',
    publisherKey: 'rj',
    emoji: '🏮',
    theme: 'orange',
    qidPrefix: 'q',
    tagline: '万物有灵 → 读书明理，八大单元主题闯关',
    units: CN_UNITS,
    questions: CN_QUESTIONS,
  },
  {
    id: 'math',
    name: '数学',
    grade: '五年级第一学期',
    gradeNum: 5,
    term: 'a',
    publisher: '沪教版 · 上海教育出版社 · 五年级第一学期',
    publisherKey: 'she',
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
    gradeNum: 5,
    term: 'a',
    publisher: '2026 新版沪教版（五四学制）· 上海教育出版社 · 五年级上册',
    publisherKey: 'she',
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

// 教材选择条件：年级 + 学期 + 出版社（'all' 不限出版社）
export interface TextbookFilter {
  gradeNum: number
  term: 'a' | 'b'
  publisher: 'all' | PublisherKey
}

export function subjectsFor(filter: TextbookFilter): Subject[] {
  return SUBJECTS.filter(
    (s) => s.gradeNum === filter.gradeNum && s.term === filter.term && (filter.publisher === 'all' || s.publisherKey === filter.publisher)
  )
}

export const PUBLISHER_LABELS: Record<PublisherKey, string> = {
  rj: '人民教育出版社 · 统编语文',
  she: '上海教育出版社 · 沪教数学/英语',
}

// 全科题库合集（错题本用；题目 id 前缀区分科目：语文五上 q、语文四上 c、数学五上 m、数学四上 n、英语五上 e、英语四上 g，不会冲突）
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
