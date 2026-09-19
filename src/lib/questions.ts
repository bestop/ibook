// 多科目题库注册中心
// 年级维度：一年级上册 ～ 六年级上册（term: 'a' 上册，'b' 下册预留）
// 语文：统编教材（人民教育出版社）一上～五上各 8 关；六年级上册分两个学制版本：
//       六三制（2026 秋版 8 关，id chinese6，前缀 x）与 五·四学制（2024 秋版 7 关，id chinese54，前缀 y）
// 数学：一上～五上为沪教版（上海教育出版社）；六年级上册分两个学制版本：
//       六三制·人教版（2026 秋版 9 关，id math6，前缀 u）与 五·四学制·沪教版（预备年级 8 关，id math54，前缀 v）
// 英语：沪教版（五四学制·上海教育出版社）一上～五上（三上起 Starter+10 单元；一上含 3 个 IPA 语音角）；
//       六年级上册为沪教版 2024 新教材（五·四学制·预备年级）：Starter 衔接站 + Unit 1-6
// 每关 10 题

import { UNITS as CN_UNITS, QUESTIONS as CN_QUESTIONS } from './bank-chinese'
import { UNITS as CN1_UNITS, QUESTIONS as CN1_QUESTIONS } from './bank-chinese1'
import { UNITS as CN2_UNITS, QUESTIONS as CN2_QUESTIONS } from './bank-chinese2'
import { UNITS as CN3_UNITS, QUESTIONS as CN3_QUESTIONS } from './bank-chinese3'
import { UNITS as CN4_UNITS, QUESTIONS as CN4_QUESTIONS } from './bank-chinese4'
import { UNITS as CN6_UNITS, QUESTIONS as CN6_QUESTIONS } from './bank-chinese6'
import { UNITS as CN54_UNITS, QUESTIONS as CN54_QUESTIONS } from './bank-chinese54'
import { UNITS as MATH_UNITS, QUESTIONS as MATH_QUESTIONS } from './bank-math'
import { UNITS as MATH1_UNITS, QUESTIONS as MATH1_QUESTIONS } from './bank-math1'
import { UNITS as MATH2_UNITS, QUESTIONS as MATH2_QUESTIONS } from './bank-math2'
import { UNITS as MATH3_UNITS, QUESTIONS as MATH3_QUESTIONS } from './bank-math3'
import { UNITS as MATH4_UNITS, QUESTIONS as MATH4_QUESTIONS } from './bank-math4'
import { UNITS as EN_UNITS, QUESTIONS as EN_QUESTIONS } from './bank-english'
import { UNITS as EN1_UNITS, QUESTIONS as EN1_QUESTIONS } from './bank-english1'
import { UNITS as EN2_UNITS, QUESTIONS as EN2_QUESTIONS } from './bank-english2'
import { UNITS as EN3_UNITS, QUESTIONS as EN3_QUESTIONS } from './bank-english3'
import { UNITS as EN4_UNITS, QUESTIONS as EN4_QUESTIONS } from './bank-english4'
import { UNITS as EN6_UNITS, QUESTIONS as EN6_QUESTIONS } from './bank-english6'
import { UNITS as MATH6_UNITS, QUESTIONS as MATH6_QUESTIONS } from './bank-math6'
import { UNITS as MATH54_UNITS, QUESTIONS as MATH54_QUESTIONS } from './bank-math54'

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

export type SubjectId = 'chinese1' | 'chinese2' | 'chinese3' | 'chinese4' | 'chinese' | 'chinese6' | 'chinese54' | 'math1' | 'math2' | 'math3' | 'math4' | 'math' | 'math6' | 'math54' | 'english1' | 'english2' | 'english3' | 'english4' | 'english' | 'english6'

// 出版社/版本 key：rj 人民教育出版社（统编语文）、rj54 人民教育出版社统编教材（五·四学制）、she 上海教育出版社（数学/英语）
export type PublisherKey = 'rj' | 'rj54' | 'she'

export interface Subject {
  id: SubjectId
  name: string
  grade: string // 展示用，如「四年级上册」
  gradeNum: number // 2 / 3 / 4 / 5
  term: 'a' | 'b' // a 上册 / b 下册
  publisher: string // 完整出版信息
  publisherKey: PublisherKey
  badge?: string // 版本徽章（同一年级同一科目有多个版本时显示，如六三制/五四学制）
  emoji: string
  theme: 'orange' | 'emerald' | 'sky' | 'rose' | 'violet' | 'teal' | 'amber' | 'lime' | 'cyan' | 'pink' | 'indigo' | 'fuchsia' | 'blue' | 'green' | 'red'
  qidPrefix: string
  tagline: string
  units: Unit[]
  questions: Record<string, Question[]>
}

export const SUBJECTS: Subject[] = [
  {
    id: 'chinese1',
    name: '语文',
    grade: '一年级上册',
    gradeNum: 1,
    term: 'a',
    publisher: '统编教材（2024 秋版）· 人民教育出版社 · 一年级上册',
    publisherKey: 'rj',
    emoji: '🌸',
    theme: 'pink',
    qidPrefix: 'a',
    tagline: '天地人 → 拼音乐园 → 雪地里的小画家',
    units: CN1_UNITS,
    questions: CN1_QUESTIONS,
  },
  {
    id: 'math1',
    name: '数学',
    grade: '一年级上册',
    gradeNum: 1,
    term: 'a',
    publisher: '沪教版（2024 新版）· 上海教育出版社 · 一年级上册',
    publisherKey: 'she',
    emoji: '🧸',
    theme: 'indigo',
    qidPrefix: 'b',
    tagline: '认识图形 → 10 以内加减 → 凑十法',
    units: MATH1_UNITS,
    questions: MATH1_QUESTIONS,
  },
  {
    id: 'english1',
    name: '英语',
    grade: '一年级上册',
    gradeNum: 1,
    term: 'a',
    publisher: '沪教版 2024 新教材 · 上海教育出版社 · 一年级上册',
    publisherKey: 'she',
    emoji: '🐤',
    theme: 'fuchsia',
    qidPrefix: 'i',
    tagline: '打招呼 → 小书包 → 我爱我家 → 趣味数字（含 IPA 语音角）',
    units: EN1_UNITS,
    questions: EN1_QUESTIONS,
  },
  {
    id: 'chinese2',
    name: '语文',
    grade: '二年级上册',
    gradeNum: 2,
    term: 'a',
    publisher: '统编教材 · 人民教育出版社 · 二年级上册',
    publisherKey: 'rj',
    emoji: '🐸',
    theme: 'rose',
    qidPrefix: 'd',
    tagline: '小蝌蚪找妈妈 → 黄山奇石 → 狐假虎威',
    units: CN2_UNITS,
    questions: CN2_QUESTIONS,
  },
  {
    id: 'math2',
    name: '数学',
    grade: '二年级上册',
    gradeNum: 2,
    term: 'a',
    publisher: '沪教版 · 上海教育出版社 · 二年级上册',
    publisherKey: 'she',
    emoji: '🪀',
    theme: 'violet',
    qidPrefix: 'r',
    tagline: '乘法口诀 → 求商 → 角与直角',
    units: MATH2_UNITS,
    questions: MATH2_QUESTIONS,
  },
  {
    id: 'english2',
    name: '英语',
    grade: '二年级上册',
    gradeNum: 2,
    term: 'a',
    publisher: '沪教版 2024 新教材 · 上海教育出版社 · 二年级上册',
    publisherKey: 'she',
    emoji: '🐣',
    theme: 'sky',
    qidPrefix: 'h',
    tagline: '我的早晨 → 天空大海 → 四季水果 → 五感认识世界',
    units: EN2_UNITS,
    questions: EN2_QUESTIONS,
  },
  {
    id: 'chinese3',
    name: '语文',
    grade: '三年级上册',
    gradeNum: 3,
    term: 'a',
    publisher: '2026 新版统编教材 · 人民教育出版社 · 三年级上册',
    publisherKey: 'rj',
    emoji: '🌱',
    theme: 'amber',
    qidPrefix: 't',
    tagline: '学校生活 → 金秋时节 → 祖国河山 → 美好品质',
    units: CN3_UNITS,
    questions: CN3_QUESTIONS,
  },
  {
    id: 'math3',
    name: '数学',
    grade: '三年级上册',
    gradeNum: 3,
    term: 'a',
    publisher: '2026 新版沪教版 · 上海教育出版社 · 三年级上册',
    publisherKey: 'she',
    emoji: '🪁',
    theme: 'lime',
    qidPrefix: 'p',
    tagline: '一位数乘除 → 年月日 → 周长 → 七巧板',
    units: MATH3_UNITS,
    questions: MATH3_QUESTIONS,
  },
  {
    id: 'english3',
    name: '英语',
    grade: '三年级上册',
    gradeNum: 3,
    term: 'a',
    publisher: '2026 新版沪教版（五四学制）· 上海教育出版社 · 三年级上册',
    publisherKey: 'she',
    emoji: '🌈',
    theme: 'cyan',
    qidPrefix: 'f',
    tagline: '字母 ABC → 小花园 → 中国节日 → 世界美食',
    units: EN3_UNITS,
    questions: EN3_QUESTIONS,
  },
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
    publisher: '2026 新版沪教版 · 上海教育出版社 · 四年级上册',
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
    grade: '五年级上册',
    gradeNum: 5,
    term: 'a',
    publisher: '沪教版 · 上海教育出版社 · 五年级上册',
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
  {
    id: 'chinese6',
    name: '语文',
    grade: '六年级上册',
    gradeNum: 6,
    term: 'a',
    publisher: '2026 新版统编教材（六三制）· 人民教育出版社 · 六年级上册',
    publisherKey: 'rj',
    badge: '六三制',
    emoji: '🦌',
    theme: 'blue',
    qidPrefix: 'x',
    tagline: '草原丁香 → 长征壮歌 → 走近鲁迅',
    units: CN6_UNITS,
    questions: CN6_QUESTIONS,
  },
  {
    id: 'chinese54',
    name: '语文',
    grade: '六年级上册',
    gradeNum: 6,
    term: 'a',
    publisher: '统编教材（五·四学制 2024 秋版）· 人民教育出版社 · 六年级上册',
    publisherKey: 'rj54',
    badge: '五四学制',
    emoji: '🌿',
    theme: 'green',
    qidPrefix: 'y',
    tagline: '草原丁香 → 红色足迹 → 科学之光',
    units: CN54_UNITS,
    questions: CN54_QUESTIONS,
  },
  {
    id: 'math6',
    name: '数学',
    grade: '六年级上册',
    gradeNum: 6,
    term: 'a',
    publisher: '2026 新版人教版（六三制）· 人民教育出版社 · 六年级上册',
    publisherKey: 'rj',
    badge: '六三制',
    emoji: '📏',
    theme: 'red',
    qidPrefix: 'u',
    tagline: '数对定位 → 分数乘除 → 圆与百分数',
    units: MATH6_UNITS,
    questions: MATH6_QUESTIONS,
  },
  {
    id: 'math54',
    name: '数学',
    grade: '六年级上册',
    gradeNum: 6,
    term: 'a',
    publisher: '沪教版（五·四学制）· 上海教育出版社 · 六年级上册（预备年级）',
    publisherKey: 'she',
    badge: '五四学制',
    emoji: '🎲',
    theme: 'indigo',
    qidPrefix: 'v',
    tagline: '数的整除 → 分数 → 比和比例 → 圆和扇形',
    units: MATH54_UNITS,
    questions: MATH54_QUESTIONS,
  },
  {
    id: 'english6',
    name: '英语',
    grade: '六年级上册',
    gradeNum: 6,
    term: 'a',
    publisher: '沪教版 2024 新教材（五·四学制）· 上海教育出版社 · 六年级上册（预备年级）',
    publisherKey: 'she',
    badge: '五四学制',
    emoji: '🐬',
    theme: 'sky',
    qidPrefix: 'k',
    tagline: 'Starter 衔接 → 校园家庭 → 美食运动 → 动物旅行',
    units: EN6_UNITS,
    questions: EN6_QUESTIONS,
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
  rj: '人民教育出版社 · 统编语文/人教数学（六三制）',
  rj54: '人民教育出版社 · 统编语文（五·四学制）',
  she: '上海教育出版社 · 沪教数学/英语',
}

// 全科题库合集（错题本用；题目 id 前缀区分科目：语文一上 a、语文二上 d、语文三上 t、语文四上 c、语文五上 q、语文六上·六三制 x、语文六上·五四 y、数学一上 b、数学二上 r、数学三上 p、数学四上 n、数学五上 m、数学六上·六三制 u、数学六上·五四 v、英语一上 i、英语二上 h、英语三上 f、英语四上 g、英语五上 e、英语六上·五四 k，不会冲突）
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
