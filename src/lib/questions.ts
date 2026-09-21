// 多科目题库注册中心
// 年级维度：一至六年级上册 + 语文一至六年级下册（term: 'a' 上册，'b' 下册）
// 上册：语文：统编教材（人民教育出版社）一上～五上各 8 关；六年级上册分两个学制版本：
//       六三制（2026 秋版 8 关，id chinese6，前缀 x）与 五·四学制（2024 秋版 7 关，id chinese54，前缀 y）
// 下册：语文统编版一～五下各 8 关（id chinese1b~chinese5b，前缀 zg/zh/zi/zj/zk）；
//       六年级下册分两个学制版本：六三制（7 关，id chinese6b，前缀 zl）与 五·四学制（6 关，id chinese54b，前缀 zm）；
//       数学人教版（六三制）一～六年级下册（id math1rjb~math6rjb，前缀 zn/zo/zp/zq/zr/zs，一下为新教材
//       2026 春版目录，二～六下为现行版目录）；英语下册建设中
// 数学：一上～五上每级分两个版本——沪教版（上海教育出版社，id math1~math/math4，前缀 b/r/p/n/m）
//       与人教版（六三制·人民教育出版社 2024~2026 秋新版，id math1rj~math5rj，前缀 w/j/l/o/s）；
//       六年级上册分两个学制版本：六三制·人教版（2026 秋版 9 关，id math6，前缀 u）与 五·四学制·沪教版（预备年级 8 关，id math54，前缀 v）
// 英语：每级分两个版本——沪教版（五四学制·上海教育出版社，id english1~english/english4，前缀 i/h/f/g/e，三上起 Starter+10 单元；一上含 3 个 IPA 语音角）
//       与人教版 PEP（人民教育出版社 2024~2026 秋新版，id english1rj~english6rj，前缀 za~zf，一/二上为一起点预备级，三上起三年级起点六三制）；
//       六年级上册沪教版为 2024 新教材（五·四学制·预备年级）Starter + Unit 1-6，人教版为 2026 秋新版 PEP（六三制）
// 每关 10 题

import { UNITS as CN_UNITS, QUESTIONS as CN_QUESTIONS } from './bank-chinese'
import { UNITS as CN1_UNITS, QUESTIONS as CN1_QUESTIONS } from './bank-chinese1'
import { UNITS as CN2_UNITS, QUESTIONS as CN2_QUESTIONS } from './bank-chinese2'
import { UNITS as CN3_UNITS, QUESTIONS as CN3_QUESTIONS } from './bank-chinese3'
import { UNITS as CN4_UNITS, QUESTIONS as CN4_QUESTIONS } from './bank-chinese4'
import { UNITS as CN6_UNITS, QUESTIONS as CN6_QUESTIONS } from './bank-chinese6'
import { UNITS as CN54_UNITS, QUESTIONS as CN54_QUESTIONS } from './bank-chinese54'
import { UNITS as CN1B_UNITS, QUESTIONS as CN1B_QUESTIONS } from './bank-chinese1b'
import { UNITS as CN2B_UNITS, QUESTIONS as CN2B_QUESTIONS } from './bank-chinese2b'
import { UNITS as CN3B_UNITS, QUESTIONS as CN3B_QUESTIONS } from './bank-chinese3b'
import { UNITS as CN4B_UNITS, QUESTIONS as CN4B_QUESTIONS } from './bank-chinese4b'
import { UNITS as CN5B_UNITS, QUESTIONS as CN5B_QUESTIONS } from './bank-chinese5b'
import { UNITS as CN6B_UNITS, QUESTIONS as CN6B_QUESTIONS } from './bank-chinese6b'
import { UNITS as CN54B_UNITS, QUESTIONS as CN54B_QUESTIONS } from './bank-chinese54b'
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
import { UNITS as MATH1RJ_UNITS, QUESTIONS as MATH1RJ_QUESTIONS } from './bank-math1rj'
import { UNITS as MATH2RJ_UNITS, QUESTIONS as MATH2RJ_QUESTIONS } from './bank-math2rj'
import { UNITS as MATH3RJ_UNITS, QUESTIONS as MATH3RJ_QUESTIONS } from './bank-math3rj'
import { UNITS as MATH4RJ_UNITS, QUESTIONS as MATH4RJ_QUESTIONS } from './bank-math4rj'
import { UNITS as MATH5RJ_UNITS, QUESTIONS as MATH5RJ_QUESTIONS } from './bank-math5rj'
import { UNITS as MATH1RJB_UNITS, QUESTIONS as MATH1RJB_QUESTIONS } from './bank-math1rjb'
import { UNITS as MATH2RJB_UNITS, QUESTIONS as MATH2RJB_QUESTIONS } from './bank-math2rjb'
import { UNITS as MATH3RJB_UNITS, QUESTIONS as MATH3RJB_QUESTIONS } from './bank-math3rjb'
import { UNITS as MATH4RJB_UNITS, QUESTIONS as MATH4RJB_QUESTIONS } from './bank-math4rjb'
import { UNITS as MATH5RJB_UNITS, QUESTIONS as MATH5RJB_QUESTIONS } from './bank-math5rjb'
import { UNITS as MATH6RJB_UNITS, QUESTIONS as MATH6RJB_QUESTIONS } from './bank-math6rjb'
import { UNITS as EN1RJ_UNITS, QUESTIONS as EN1RJ_QUESTIONS } from './bank-english1rj'
import { UNITS as EN2RJ_UNITS, QUESTIONS as EN2RJ_QUESTIONS } from './bank-english2rj'
import { UNITS as EN3RJ_UNITS, QUESTIONS as EN3RJ_QUESTIONS } from './bank-english3rj'
import { UNITS as EN4RJ_UNITS, QUESTIONS as EN4RJ_QUESTIONS } from './bank-english4rj'
import { UNITS as EN5RJ_UNITS, QUESTIONS as EN5RJ_QUESTIONS } from './bank-english5rj'
import { UNITS as EN6RJ_UNITS, QUESTIONS as EN6RJ_QUESTIONS } from './bank-english6rj'

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

export type SubjectId = 'chinese1' | 'chinese2' | 'chinese3' | 'chinese4' | 'chinese' | 'chinese6' | 'chinese54' | 'chinese1b' | 'chinese2b' | 'chinese3b' | 'chinese4b' | 'chinese5b' | 'chinese6b' | 'chinese54b' | 'math1' | 'math2' | 'math3' | 'math4' | 'math' | 'math6' | 'math54' | 'english1' | 'english2' | 'english3' | 'english4' | 'english' | 'english6' | 'math1rj' | 'math2rj' | 'math3rj' | 'math4rj' | 'math5rj' | 'math1rjb' | 'math2rjb' | 'math3rjb' | 'math4rjb' | 'math5rjb' | 'math6rjb' | 'english1rj' | 'english2rj' | 'english3rj' | 'english4rj' | 'english5rj' | 'english6rj'

// 出版社/版本 key：rj 人民教育出版社（统编语文 + 人教数学 + PEP 英语）、rj54 人民教育出版社统编教材（五·四学制）、she 上海教育出版社（沪教数学/英语）
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
    badge: '沪教版',
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
    badge: '沪教版',
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
    badge: '沪教版',
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
    badge: '沪教版',
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
    badge: '沪教版',
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
    badge: '沪教版',
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
    badge: '沪教版',
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
    badge: '沪教版',
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
    badge: '沪教版',
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
    badge: '沪教版',
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
    id: 'chinese1b',
    name: '语文',
    grade: '一年级下册',
    gradeNum: 1,
    term: 'b',
    publisher: '统编教材（2025 春版）· 人民教育出版社 · 一年级下册',
    publisherKey: 'rj',
    emoji: '🌷',
    theme: 'pink',
    qidPrefix: 'zg',
    tagline: '春夏秋冬 → 荷叶圆圆 → 小壁虎借尾巴',
    units: CN1B_UNITS,
    questions: CN1B_QUESTIONS,
  },
  {
    id: 'chinese2b',
    name: '语文',
    grade: '二年级下册',
    gradeNum: 2,
    term: 'b',
    publisher: '统编教材 · 人民教育出版社 · 二年级下册',
    publisherKey: 'rj',
    emoji: '🪁',
    theme: 'sky',
    qidPrefix: 'zh',
    tagline: '村居咏柳 → 神州谣 → 羿射九日',
    units: CN2B_UNITS,
    questions: CN2B_QUESTIONS,
  },
  {
    id: 'chinese3b',
    name: '语文',
    grade: '三年级下册',
    gradeNum: 3,
    term: 'b',
    publisher: '统编教材 · 人民教育出版社 · 三年级下册',
    publisherKey: 'rj',
    emoji: '🦋',
    theme: 'amber',
    qidPrefix: 'zi',
    tagline: '燕子荷花 → 守株待兔 → 海底世界',
    units: CN3B_UNITS,
    questions: CN3B_QUESTIONS,
  },
  {
    id: 'chinese4b',
    name: '语文',
    grade: '四年级下册',
    gradeNum: 4,
    term: 'b',
    publisher: '统编教材 · 人民教育出版社 · 四年级下册',
    publisherKey: 'rj',
    emoji: '🐝',
    theme: 'teal',
    qidPrefix: 'zj',
    tagline: '田园生活 → 科普探秘 → 中外童话',
    units: CN4B_UNITS,
    questions: CN4B_QUESTIONS,
  },
  {
    id: 'chinese5b',
    name: '语文',
    grade: '五年级下册',
    gradeNum: 5,
    term: 'b',
    publisher: '统编教材 · 人民教育出版社 · 五年级下册',
    publisherKey: 'rj',
    emoji: '🍃',
    theme: 'lime',
    qidPrefix: 'zk',
    tagline: '童年往事 → 古典名著 → 风趣幽默',
    units: CN5B_UNITS,
    questions: CN5B_QUESTIONS,
  },
  {
    id: 'chinese6b',
    name: '语文',
    grade: '六年级下册',
    gradeNum: 6,
    term: 'b',
    publisher: '统编教材（六三制）· 人民教育出版社 · 六年级下册',
    publisherKey: 'rj',
    badge: '六三制',
    emoji: '🕊️',
    theme: 'blue',
    qidPrefix: 'zl',
    tagline: '民风民俗 → 理想信念 → 难忘小学生活',
    units: CN6B_UNITS,
    questions: CN6B_QUESTIONS,
  },
  {
    id: 'chinese54b',
    name: '语文',
    grade: '六年级下册',
    gradeNum: 6,
    term: 'b',
    publisher: '统编教材（五·四学制）· 人民教育出版社 · 六年级下册',
    publisherKey: 'rj54',
    badge: '五四学制',
    emoji: '🎋',
    theme: 'green',
    qidPrefix: 'zm',
    tagline: '民风民俗 → 科学精神 → 古诗词诵读',
    units: CN54B_UNITS,
    questions: CN54B_QUESTIONS,
  },
  {
    id: 'math1rj',
    name: '数学',
    grade: '一年级上册',
    gradeNum: 1,
    term: 'a',
    publisher: '2024 新版人教版 · 人民教育出版社 · 一年级上册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🐻',
    theme: 'orange',
    qidPrefix: 'w',
    tagline: '数学游戏 → 凑十法 → 进位加法',
    units: MATH1RJ_UNITS,
    questions: MATH1RJ_QUESTIONS,
  },
  {
    id: 'math2rj',
    name: '数学',
    grade: '二年级上册',
    gradeNum: 2,
    term: 'a',
    publisher: '2025 新版人教版 · 人民教育出版社 · 二年级上册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🐿️',
    theme: 'emerald',
    qidPrefix: 'j',
    tagline: '分类整理 → 表内乘除 → 厘米和米',
    units: MATH2RJ_UNITS,
    questions: MATH2RJ_QUESTIONS,
  },
  {
    id: 'math3rj',
    name: '数学',
    grade: '三年级上册',
    gradeNum: 3,
    term: 'a',
    publisher: '2025 新版人教版 · 人民教育出版社 · 三年级上册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🦊',
    theme: 'red',
    qidPrefix: 'l',
    tagline: '混合运算 → 曹冲称象 → 分数初识',
    units: MATH3RJ_UNITS,
    questions: MATH3RJ_QUESTIONS,
  },
  {
    id: 'math4rj',
    name: '数学',
    grade: '四年级上册',
    gradeNum: 4,
    term: 'a',
    publisher: '2026 新版人教版 · 人民教育出版社 · 四年级上册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🐼',
    theme: 'amber',
    qidPrefix: 'o',
    tagline: '万以上大数 → 乘法模型 → 条形统计',
    units: MATH4RJ_UNITS,
    questions: MATH4RJ_QUESTIONS,
  },
  {
    id: 'math5rj',
    name: '数学',
    grade: '五年级上册',
    gradeNum: 5,
    term: 'a',
    publisher: '2026 新版人教版 · 人民教育出版社 · 五年级上册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🦉',
    theme: 'blue',
    qidPrefix: 's',
    tagline: '小数乘除 → 字母表示数 → 多边形面积',
    units: MATH5RJ_UNITS,
    questions: MATH5RJ_QUESTIONS,
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
    id: 'math1rjb',
    name: '数学',
    grade: '一年级下册',
    gradeNum: 1,
    term: 'b',
    publisher: '新人教版（2026 春版）· 人民教育出版社 · 一年级下册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🐰',
    theme: 'orange',
    qidPrefix: 'zn',
    tagline: '平面图形 → 退位减法 → 购物街',
    units: MATH1RJB_UNITS,
    questions: MATH1RJB_QUESTIONS,
  },
  {
    id: 'math2rjb',
    name: '数学',
    grade: '二年级下册',
    gradeNum: 2,
    term: 'b',
    publisher: '人教版 · 人民教育出版社 · 二年级下册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🐝',
    theme: 'emerald',
    qidPrefix: 'zo',
    tagline: '表内除法 → 万以内数 → 推理',
    units: MATH2RJB_UNITS,
    questions: MATH2RJB_QUESTIONS,
  },
  {
    id: 'math3rjb',
    name: '数学',
    grade: '三年级下册',
    gradeNum: 3,
    term: 'b',
    publisher: '人教版 · 人民教育出版社 · 三年级下册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🐬',
    theme: 'red',
    qidPrefix: 'zp',
    tagline: '位置方向 → 面积 → 年月日',
    units: MATH3RJB_UNITS,
    questions: MATH3RJB_QUESTIONS,
  },
  {
    id: 'math4rjb',
    name: '数学',
    grade: '四年级下册',
    gradeNum: 4,
    term: 'b',
    publisher: '人教版 · 人民教育出版社 · 四年级下册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🦋',
    theme: 'amber',
    qidPrefix: 'zq',
    tagline: '运算定律 → 小数 → 三角形',
    units: MATH4RJB_UNITS,
    questions: MATH4RJB_QUESTIONS,
  },
  {
    id: 'math5rjb',
    name: '数学',
    grade: '五年级下册',
    gradeNum: 5,
    term: 'b',
    publisher: '人教版 · 人民教育出版社 · 五年级下册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🐧',
    theme: 'blue',
    qidPrefix: 'zr',
    tagline: '因数倍数 → 分数 → 长方体',
    units: MATH5RJB_UNITS,
    questions: MATH5RJB_QUESTIONS,
  },
  {
    id: 'math6rjb',
    name: '数学',
    grade: '六年级下册',
    gradeNum: 6,
    term: 'b',
    publisher: '人教版（六三制）· 人民教育出版社 · 六年级下册',
    publisherKey: 'rj',
    badge: '六三制',
    emoji: '📐',
    theme: 'red',
    qidPrefix: 'zs',
    tagline: '负数 → 圆柱圆锥 → 比例 → 毕业总复习',
    units: MATH6RJB_UNITS,
    questions: MATH6RJB_QUESTIONS,
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
  {
    id: 'english1rj',
    name: '英语',
    grade: '一年级上册',
    gradeNum: 1,
    term: 'a',
    publisher: 'PEP 新版（一年级起点·预备级 2024 版）· 人民教育出版社 · 一年级上册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🐥',
    theme: 'amber',
    qidPrefix: 'za',
    tagline: 'Hello! → 第一堂课 → 上学准备 → 身边的人',
    units: EN1RJ_UNITS,
    questions: EN1RJ_QUESTIONS,
  },
  {
    id: 'english2rj',
    name: '英语',
    grade: '二年级上册',
    gradeNum: 2,
    term: 'a',
    publisher: 'PEP 新版（一年级起点·预备级 2025 秋版）· 人民教育出版社 · 二年级上册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🦆',
    theme: 'rose',
    qidPrefix: 'zb',
    tagline: '数字字母 → 我的一幅画 → 帮忙做家务 → 快乐情绪',
    units: EN2RJ_UNITS,
    questions: EN2RJ_QUESTIONS,
  },
  {
    id: 'english3rj',
    name: '英语',
    grade: '三年级上册',
    gradeNum: 3,
    term: 'a',
    publisher: '2024 秋新版 PEP（三年级起点·六三制）· 人民教育出版社 · 三年级上册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🐞',
    theme: 'orange',
    qidPrefix: 'zc',
    tagline: '交朋友 → 不同的家庭 → 神奇动物 → 多彩世界',
    units: EN3RJ_UNITS,
    questions: EN3RJ_QUESTIONS,
  },
  {
    id: 'english4rj',
    name: '英语',
    grade: '四年级上册',
    gradeNum: 4,
    term: 'a',
    publisher: '2025 秋新版 PEP（三年级起点·六三制）· 人民教育出版社 · 四年级上册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🐳',
    theme: 'indigo',
    qidPrefix: 'zd',
    tagline: '在家帮忙 → 我的朋友 → 社区生活 → 天气四季',
    units: EN4RJ_UNITS,
    questions: EN4RJ_QUESTIONS,
  },
  {
    id: 'english5rj',
    name: '英语',
    grade: '五年级上册',
    gradeNum: 5,
    term: 'a',
    publisher: '2026 秋新版 PEP（三年级起点·六三制）· 人民教育出版社 · 五年级上册',
    publisherKey: 'rj',
    badge: '人教版',
    emoji: '🦜',
    theme: 'emerald',
    qidPrefix: 'ze',
    tagline: '不同的朋友 → 情绪感受 → 健康习惯 → 食物自然',
    units: EN5RJ_UNITS,
    questions: EN5RJ_QUESTIONS,
  },
  {
    id: 'english6rj',
    name: '英语',
    grade: '六年级上册',
    gradeNum: 6,
    term: 'a',
    publisher: '2026 秋新版 PEP（三年级起点·六三制）· 人民教育出版社 · 六年级上册',
    publisherKey: 'rj',
    badge: '六三制',
    emoji: '🕊️',
    theme: 'violet',
    qidPrefix: 'zf',
    tagline: '神奇地方 → 团圆佳节 → 探索太空 → 管好零花钱',
    units: EN6RJ_UNITS,
    questions: EN6RJ_QUESTIONS,
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
  rj: '人民教育出版社 · 统编语文/人教数学/PEP英语（六三制）',
  rj54: '人民教育出版社 · 统编语文（五·四学制）',
  she: '上海教育出版社 · 沪教数学/英语',
}

// 全科题库合集（错题本用；题目 id 前缀区分科目：语文一上 a、语文二上 d、语文三上 t、语文四上 c、语文五上 q、语文六上·六三制 x、语文六上·五四 y、语文一下 zg、语文二下 zh、语文三下 zi、语文四下 zj、语文五下 zk、语文六下·六三制 zl、语文六下·五四 zm、数学一上沪 b、数学二上沪 r、数学三上沪 p、数学四上沪 n、数学五上沪 m、数学六上·六三制 u、数学六上·五四 v、数学一上人教 w、数学二上人教 j、数学三上人教 l、数学四上人教 o、数学五上人教 s、数学一下人教 zn、数学二下人教 zo、数学三下人教 zp、数学四下人教 zq、数学五下人教 zr、数学六下·六三制 zs、英语一上 i、英语二上 h、英语三上 f、英语四上 g、英语五上 e、英语六上·五四 k、英语一上人教 za、英语二上人教 zb、英语三上人教 zc、英语四上人教 zd、英语五上人教 ze、英语六上人教 zf，不会冲突）
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
