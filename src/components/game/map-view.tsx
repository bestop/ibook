'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { getSubject } from '@/lib/questions'
import type { SubjectId, Unit } from '@/lib/questions'
import { useGame, isUnitUnlocked, DAILY_GOAL_SECONDS, TASK_REWARDS } from '@/lib/game'
import { sfx } from '@/lib/sound'

interface MapViewProps {
  subject: SubjectId
  onStartLevel: (unitId: string) => void
  onStartDaily: () => void
  onBackHome: () => void
}

// 二上新增科目专属 footer（与四上共用主题色，但文案按年级区分）
const SUBJECT_FOOTERS: Partial<Record<string, string>> = {
  chinese2: '🐸 小蝌蚪到风娃娃，把二年级语文岛全部点亮吧！',
  math2: '🪀 乘法口诀背熟啦，把二上数学岛全部点亮！',
  english1: '🐤 从 Greetings 到 Fun numbers，把一上英语岛闯个遍吧！',
  english2: '🌅 从 My morning 到 This is me，把二上英语岛闯个遍吧！',
  math6: '📏 数对定位、分数乘除、圆与百分数……把六三制数学岛全部点亮！',
  math54: '🎲 数的整除、比和比例、圆和扇形……把五四学制数学岛全部点亮！',
  english6: '🐬 School life、Sports、Travelling……把预备年级英语岛闯个遍吧！',
  math1rj: '🐻 数学游戏、凑十法、进位加法……把人教版一上数学岛全部点亮！',
  math2rj: '🐿️ 分类整理、表内乘除、东南西北……把人教版二上数学岛全部点亮！',
  math3rj: '🦊 混合运算、曹冲称象、分数初识……把人教版三上数学岛全部点亮！',
  math4rj: '🐼 万以上大数、乘法模型、寻找宝藏……把人教版四上数学岛全部点亮！',
  math5rj: '🦉 小数乘除、字母代数、有趣的密铺……把人教版五上数学岛全部点亮！',
  english1rj: '🐥 Hello!、My first class、Ready for school……把 PEP 一上英语岛闯个遍吧！',
  english2rj: '🦆 Fun numbers、Helpful hands、Work time……把 PEP 二上英语岛闯个遍吧！',
  english3rj: '🐞 Making friends、Amazing animals、Useful numbers……把 PEP 三上英语岛闯个遍吧！',
  english4rj: '🐳 Helping at home、My friends、The weather and us……把 PEP 四上英语岛闯个遍吧！',
  english5rj: '🦜 Different friends、Healthy habits、Food we eat……把 PEP 五上英语岛闯个遍吧！',
  english6rj: '🕊️ Amazing places、Exploring space、Managing money well……把 PEP 六上英语岛闯个遍吧！',
  chinese1b: '🌷 从春夏秋冬到小壁虎借尾巴，把一年级下册语文岛全部点亮！',
  chinese2b: '🪁 从村居咏柳到羿射九日，把二年级下册语文岛全部点亮！',
  chinese3b: '🦋 从燕子荷花到漏，把三年级下册语文岛全部点亮！',
  chinese4b: '🐝 从田园生活到中外童话，把四年级下册语文岛全部点亮！',
  chinese5b: '🍃 从祖父的园子到手指，把五年级下册语文岛全部点亮！',
  chinese6b: '🕊️ 从民风民俗到难忘小学生活，把六三制语文下册岛全部点亮！',
  chinese54b: '🎋 从民风民俗到古诗词诵读，把五四学制语文下册岛全部点亮！',
  math1rjb: '🐰 平面图形、退位减法、欢乐购物街……把人教版一下数学岛全部点亮！',
  math2rjb: '🐝 表内除法、混合运算、推理……把人教版二下数学岛全部点亮！',
  math3rjb: '🐬 位置与方向、两位数乘两位数、面积……把人教版三下数学岛全部点亮！',
  math4rjb: '🦋 运算定律、小数、三角形、鸡兔同笼……把人教版四下数学岛全部点亮！',
  math5rjb: '🐧 因数与倍数、长方体、分数加减……把人教版五下数学岛全部点亮！',
  math6rjb: '📐 负数、百分数、圆柱圆锥、比例……把六三制数学毕业岛全部点亮！',
  math1b: '🎈 退位减法、认识100、身体上的尺子……把沪教版一下数学岛全部点亮！',
  math2b: '🧩 千以内数、三位数加减、克与千克……把沪教版二下数学岛全部点亮！',
  math3b: '🥧 两位数乘除、分数初步、周长……把沪教版三下数学岛全部点亮！',
  math4b: '📊 小数、折线统计图、垂直与平行……把沪教版四下数学岛全部点亮！',
  math5b: '🧊 正数与负数、方程、体积……把沪教版五下数学岛全部点亮！',
  math54b: '🧭 有理数、一次方程、线段与角……把预备年级数学毕业岛全部点亮！',
  english1rjb: '🐣 Nice boys and girls、Eat well、My pet……把 PEP 一下英语岛闯个遍吧！',
  english2rjb: '🦢 Put on my coat!、Play safely、Summer camp……把 PEP 二下英语岛闯个遍吧！',
  english3rjb: '🦋 Meeting new people、Healthy food、Numbers in life……把 PEP 三下英语岛闯个遍吧！',
  english4rjb: '🐬 Class rules、Going shopping、On the farm……把 PEP 四下英语岛闯个遍吧！',
  english5rjb: '🐝 My day、My favourite season、Work quietly!……把 PEP 五下英语岛闯个遍吧！',
  english6rjb: '🎓 How tall are you?、Last weekend、小升初总复习……把 PEP 毕业岛闯个遍吧！',
}

const UNIT_STYLES: Record<string, { card: string; badge: string; btn: string; locked: string }> = {
  emerald: { card: 'border-emerald-300 bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700', btn: 'bg-emerald-500 hover:bg-emerald-600 shadow-[0_4px_0_0_rgba(16,185,129,0.45)]', locked: 'from-emerald-100 to-emerald-50' },
  orange: { card: 'border-orange-300 bg-orange-50', badge: 'bg-orange-100 text-orange-700', btn: 'bg-orange-500 hover:bg-orange-600 shadow-[0_4px_0_0_rgba(249,115,22,0.45)]', locked: 'from-orange-100 to-orange-50' },
  rose: { card: 'border-rose-300 bg-rose-50', badge: 'bg-rose-100 text-rose-700', btn: 'bg-rose-500 hover:bg-rose-600 shadow-[0_4px_0_0_rgba(244,63,94,0.45)]', locked: 'from-rose-100 to-rose-50' },
  red: { card: 'border-red-300 bg-red-50', badge: 'bg-red-100 text-red-700', btn: 'bg-red-500 hover:bg-red-600 shadow-[0_4px_0_0_rgba(239,68,68,0.45)]', locked: 'from-red-100 to-red-50' },
  amber: { card: 'border-amber-300 bg-amber-50', badge: 'bg-amber-100 text-amber-700', btn: 'bg-amber-500 hover:bg-amber-600 shadow-[0_4px_0_0_rgba(245,158,11,0.45)]', locked: 'from-amber-100 to-amber-50' },
  teal: { card: 'border-teal-300 bg-teal-50', badge: 'bg-teal-100 text-teal-700', btn: 'bg-teal-500 hover:bg-teal-600 shadow-[0_4px_0_0_rgba(20,184,166,0.45)]', locked: 'from-teal-100 to-teal-50' },
  lime: { card: 'border-lime-300 bg-lime-50', badge: 'bg-lime-100 text-lime-700', btn: 'bg-lime-500 hover:bg-lime-600 shadow-[0_4px_0_0_rgba(132,204,22,0.45)]', locked: 'from-lime-100 to-lime-50' },
  fuchsia: { card: 'border-fuchsia-300 bg-fuchsia-50', badge: 'bg-fuchsia-100 text-fuchsia-700', btn: 'bg-fuchsia-500 hover:bg-fuchsia-600 shadow-[0_4px_0_0_rgba(217,70,239,0.45)]', locked: 'from-fuchsia-100 to-fuchsia-50' },
  sky: { card: 'border-sky-300 bg-sky-50', badge: 'bg-sky-100 text-sky-700', btn: 'bg-sky-500 hover:bg-sky-600 shadow-[0_4px_0_0_rgba(14,165,233,0.45)]', locked: 'from-sky-100 to-sky-50' },
  violet: { card: 'border-violet-300 bg-violet-50', badge: 'bg-violet-100 text-violet-700', btn: 'bg-violet-500 hover:bg-violet-600 shadow-[0_4px_0_0_rgba(139,92,246,0.45)]', locked: 'from-violet-100 to-violet-50' },
  cyan: { card: 'border-cyan-300 bg-cyan-50', badge: 'bg-cyan-100 text-cyan-700', btn: 'bg-cyan-500 hover:bg-cyan-600 shadow-[0_4px_0_0_rgba(6,182,212,0.45)]', locked: 'from-cyan-100 to-cyan-50' },
  pink: { card: 'border-pink-300 bg-pink-50', badge: 'bg-pink-100 text-pink-700', btn: 'bg-pink-500 hover:bg-pink-600 shadow-[0_4px_0_0_rgba(236,72,153,0.45)]', locked: 'from-pink-100 to-pink-50' },
  indigo: { card: 'border-indigo-300 bg-indigo-50', badge: 'bg-indigo-100 text-indigo-700', btn: 'bg-indigo-500 hover:bg-indigo-600 shadow-[0_4px_0_0_rgba(99,102,241,0.45)]', locked: 'from-indigo-100 to-indigo-50' },
}

const SUBJECT_THEME = {
  orange: {
    hero: 'border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 shadow-[0_6px_0_0_rgba(251,191,36,0.35)]',
    heroTitle: 'text-amber-800',
    heroChip: 'bg-amber-400',
    heroBar: 'bg-amber-200',
    accent: 'text-orange-600',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-orange-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-orange-100 text-orange-600',
    backBtn: 'border-orange-300 bg-orange-50 text-orange-700 hover:bg-orange-100',
    footer: '🏮 每过一关点亮星星，把语文岛全部点亮吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学语文！',
  },
  emerald: {
    hero: 'border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-[0_6px_0_0_rgba(16,185,129,0.35)]',
    heroTitle: 'text-emerald-800',
    heroChip: 'bg-emerald-400',
    heroBar: 'bg-emerald-200',
    accent: 'text-emerald-600',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-teal-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-emerald-100 text-emerald-600',
    backBtn: 'border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
    footer: '🧮 算得越准，金币越多，数学岛等你点亮！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学数学！',
  },
  sky: {
    hero: 'border-sky-300 bg-gradient-to-br from-sky-50 to-cyan-50 shadow-[0_6px_0_0_rgba(14,165,233,0.35)]',
    heroTitle: 'text-sky-800',
    heroChip: 'bg-sky-400',
    heroBar: 'bg-sky-200',
    accent: 'text-sky-600',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-sky-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-sky-100 text-sky-600',
    backBtn: 'border-sky-300 bg-sky-50 text-sky-700 hover:bg-sky-100',
    footer: '🔤 大声读出来，把英语岛闯个遍吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学英语！',
  },
  rose: {
    hero: 'border-rose-300 bg-gradient-to-br from-rose-50 to-pink-50 shadow-[0_6px_0_0_rgba(244,63,94,0.35)]',
    heroTitle: 'text-rose-800',
    heroChip: 'bg-rose-400',
    heroBar: 'bg-rose-200',
    accent: 'text-rose-600',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-orange-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-rose-100 text-rose-600',
    backBtn: 'border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100',
    footer: '🐉 游长城、逛颐和园，把四年级语文岛点亮！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学语文！',
  },
  violet: {
    hero: 'border-violet-300 bg-gradient-to-br from-violet-50 to-purple-50 shadow-[0_6px_0_0_rgba(139,92,246,0.35)]',
    heroTitle: 'text-violet-800',
    heroChip: 'bg-violet-400',
    heroBar: 'bg-violet-200',
    accent: 'text-violet-600',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-orange-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-violet-100 text-violet-600',
    backBtn: 'border-violet-300 bg-violet-50 text-violet-700 hover:bg-violet-100',
    footer: '🚀 抽屉原理、大数改写，把四上数学岛全部点亮！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学数学！',
  },
  teal: {
    hero: 'border-teal-300 bg-gradient-to-br from-teal-50 to-cyan-50 shadow-[0_6px_0_0_rgba(20,184,166,0.35)]',
    heroTitle: 'text-teal-800',
    heroChip: 'bg-teal-400',
    heroBar: 'bg-teal-200',
    accent: 'text-teal-600',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-sky-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-teal-100 text-teal-600',
    backBtn: 'border-teal-300 bg-teal-50 text-teal-700 hover:bg-teal-100',
    footer: '⛵ My school、Weather……把四上英语岛闯个遍吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学英语！',
  },
  amber: {
    hero: 'border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50 shadow-[0_6px_0_0_rgba(245,158,11,0.35)]',
    heroTitle: 'text-amber-800',
    heroChip: 'bg-amber-400',
    heroBar: 'bg-amber-200',
    accent: 'text-amber-600',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-orange-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-amber-100 text-amber-600',
    backBtn: 'border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100',
    footer: '🌱 大青树下、秋天的雨……把三上语文岛全部点亮吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学语文！',
  },
  lime: {
    hero: 'border-lime-300 bg-gradient-to-br from-lime-50 to-green-50 shadow-[0_6px_0_0_rgba(132,204,22,0.35)]',
    heroTitle: 'text-lime-800',
    heroChip: 'bg-lime-400',
    heroBar: 'bg-lime-200',
    accent: 'text-lime-700',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-lime-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-lime-100 text-lime-700',
    backBtn: 'border-lime-300 bg-lime-50 text-lime-700 hover:bg-lime-100',
    footer: '🪁 一位数乘除、周长、七巧板，把三上数学岛全部点亮！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学数学！',
  },
  cyan: {
    hero: 'border-cyan-300 bg-gradient-to-br from-cyan-50 to-sky-50 shadow-[0_6px_0_0_rgba(6,182,212,0.35)]',
    heroTitle: 'text-cyan-800',
    heroChip: 'bg-cyan-400',
    heroBar: 'bg-cyan-200',
    accent: 'text-cyan-700',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-cyan-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-cyan-100 text-cyan-700',
    backBtn: 'border-cyan-300 bg-cyan-50 text-cyan-700 hover:bg-cyan-100',
    footer: '🌈 A B C、Our garden、Special days……把三上英语岛闯个遍吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学英语！',
  },
  pink: {
    hero: 'border-pink-300 bg-gradient-to-br from-pink-50 to-rose-50 shadow-[0_6px_0_0_rgba(236,72,153,0.35)]',
    heroTitle: 'text-pink-800',
    heroChip: 'bg-pink-400',
    heroBar: 'bg-pink-200',
    accent: 'text-pink-700',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-orange-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-pink-100 text-pink-700',
    backBtn: 'border-pink-300 bg-pink-50 text-pink-700 hover:bg-pink-100',
    footer: '🌸 天地人、拼音乐园、雪地小画家，把一上语文岛全部点亮吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学语文！',
  },
  indigo: {
    hero: 'border-indigo-300 bg-gradient-to-br from-indigo-50 to-blue-50 shadow-[0_6px_0_0_rgba(99,102,241,0.35)]',
    heroTitle: 'text-indigo-800',
    heroChip: 'bg-indigo-400',
    heroBar: 'bg-indigo-200',
    accent: 'text-indigo-700',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-indigo-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-indigo-100 text-indigo-700',
    backBtn: 'border-indigo-300 bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
    footer: '🧸 认识图形、凑十法……把一上数学岛全部点亮吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学数学！',
  },
  fuchsia: {
    hero: 'border-fuchsia-300 bg-gradient-to-br from-fuchsia-50 to-pink-50 shadow-[0_6px_0_0_rgba(217,70,239,0.35)]',
    heroTitle: 'text-fuchsia-800',
    heroChip: 'bg-fuchsia-400',
    heroBar: 'bg-fuchsia-200',
    accent: 'text-fuchsia-700',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-fuchsia-100 text-fuchsia-700',
    backBtn: 'border-fuchsia-300 bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100',
    footer: '🐤 打招呼、小书包、趣味数字，把一上英语岛全部点亮吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学英语！',
  },
  blue: {
    hero: 'border-blue-300 bg-gradient-to-br from-blue-50 to-sky-50 shadow-[0_6px_0_0_rgba(59,130,246,0.35)]',
    heroTitle: 'text-blue-800',
    heroChip: 'bg-blue-400',
    heroBar: 'bg-blue-200',
    accent: 'text-blue-700',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-blue-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-blue-100 text-blue-700',
    backBtn: 'border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100',
    footer: '🦌 草原、长征、鲁迅先生……把六三制语文岛全部点亮吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学语文！',
  },
  green: {
    hero: 'border-green-300 bg-gradient-to-br from-green-50 to-lime-50 shadow-[0_6px_0_0_rgba(34,197,94,0.35)]',
    heroTitle: 'text-green-800',
    heroChip: 'bg-green-400',
    heroBar: 'bg-green-200',
    accent: 'text-green-700',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-green-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-green-100 text-green-700',
    backBtn: 'border-green-300 bg-green-50 text-green-700 hover:bg-green-100',
    footer: '🌿 红色足迹、科学之光……把五四学制语文岛全部点亮吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学语文！',
  },
  red: {
    hero: 'border-red-300 bg-gradient-to-br from-red-50 to-orange-50 shadow-[0_6px_0_0_rgba(239,68,68,0.35)]',
    heroTitle: 'text-red-800',
    heroChip: 'bg-red-400',
    heroBar: 'bg-red-200',
    accent: 'text-red-600',
    dailyBtn: 'border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-[0_6px_0_0_rgba(139,92,246,0.3)]',
    dailyTitle: 'text-violet-700',
    dailyDesc: 'text-violet-500',
    coinBtn: 'border-rose-300 bg-gradient-to-br from-rose-50 to-red-50 shadow-[0_6px_0_0_rgba(244,63,94,0.3)]',
    coinTitle: 'text-rose-700',
    coinDesc: 'text-rose-500',
    mapBadge: 'bg-red-100 text-red-600',
    backBtn: 'border-red-300 bg-red-50 text-red-700 hover:bg-red-100',
    footer: '📏 数对定位、圆与百分数……把六三制数学岛全部点亮吧！',
    tip: '每天玩 20 分钟，闯关赢金币，快乐学数学！',
  },
} as const

function UnitCard({ subject, unit, index, onStart }: { subject: SubjectId; unit: Unit; index: number; onStart: () => void }) {
  const levels = useGame((s) => s.levels)
  const progress = levels[`${subject}:${unit.id}`]
  const unlocked = isUnitUnlocked(subject, index, levels)
  const style = UNIT_STYLES[unit.color] || UNIT_STYLES.orange
  const subjectData = getSubject(subject)
  const prevTitle = subjectData.units[index - 1]?.title

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: 0.03 * (index % 4) }}
      className={`flex items-center gap-3 rounded-3xl border-2 p-4 sm:gap-4 sm:p-5 ${unlocked ? style.card : 'border-gray-200 bg-gray-50'}`}
    >
      {/* 关卡徽章 */}
      <div className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl text-3xl sm:h-20 sm:w-20 ${unlocked ? 'bg-white shadow-sm' : 'bg-gray-100 grayscale'}`}>
        <span>{unlocked ? unit.emoji : '🔒'}</span>
        {progress?.stars ? (
          <span className="mt-0.5 text-[10px] leading-none tracking-tight">
            {'⭐'.repeat(progress.stars)}
            <span className="opacity-25">{'☆'.repeat(3 - progress.stars)}</span>
          </span>
        ) : null}
      </div>

      {/* 内容 */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className={`rounded-md px-1.5 py-0.5 text-[11px] font-black ${unlocked ? style.badge : 'bg-gray-200 text-gray-500'}`}>
            {unit.name}
          </span>
          <span className={`truncate text-base font-black sm:text-lg ${unlocked ? 'text-gray-800' : 'text-gray-400'}`}>
            {unlocked ? unit.title : '待解锁'}
          </span>
        </div>
        <p className={`mt-1 line-clamp-1 text-xs sm:text-sm ${unlocked ? 'text-gray-500' : 'text-gray-400'}`}>
          {unlocked ? unit.lessons.join(' · ') : `先通过「${prevTitle}」才能解锁`}
        </p>
        {progress?.completed && (
          <p className="mt-1 text-xs font-bold text-emerald-600">
            ✅ 已通关 · 已挑战 {progress.plays} 次{progress.stars < 3 ? ' · 再拿 3 星试试！' : ' · 满星神童！'}
          </p>
        )}
      </div>

      <Button
        disabled={!unlocked}
        onClick={() => {
          sfx.click()
          onStart()
        }}
        className={`shrink-0 rounded-2xl px-4 py-2.5 font-black text-white sm:px-6 ${unlocked ? style.btn : 'bg-gray-300 text-gray-500 shadow-none'}`}
      >
        {progress?.completed ? '再战' : '挑战'}
      </Button>
    </motion.div>
  )
}

export default function MapView({ subject, onStartLevel, onStartDaily, onBackHome }: MapViewProps) {
  const todaySeconds = useGame((s) => s.todaySeconds)
  const dailyDone = useGame((s) => s.dailyDone)
  const todayReviewCorrect = useGame((s) => s.todayReviewCorrect)
  const wrongBook = useGame((s) => s.wrongBook)
  const levels = useGame((s) => s.levels)
  const coins = useGame((s) => s.coins)

  const subjectData = getSubject(subject)
  const t = SUBJECT_THEME[subjectData.theme]

  const minutes = Math.floor(todaySeconds / 60)
  const unlockedUnitIds = subjectData.units.filter((u) => levels[`${subject}:${u.id}`]?.completed).map((u) => u.id)
  const dailyUnlocked = unlockedUnitIds.length > 0
  const wrongCount = Object.keys(wrongBook).length

  const tasks = [
    { key: 'level', emoji: '🗺️', name: '完成 1 次闯关', reward: TASK_REWARDS.level, done: dailyDone.level, progress: dailyDone.level ? 1 : 0, total: 1, unit: '关' },
    { key: 'minutes', emoji: '⏰', name: '累计学习 20 分钟', reward: TASK_REWARDS.minutes, done: dailyDone.minutes, progress: Math.min(todaySeconds, DAILY_GOAL_SECONDS), total: DAILY_GOAL_SECONDS, unit: '秒' },
    { key: 'review', emoji: '🎯', name: '复习答对 5 道错题', reward: TASK_REWARDS.review, done: dailyDone.review, progress: Math.min(todayReviewCorrect, 5), total: 5, unit: '题' },
  ]

  return (
    <div className="mx-auto w-full max-w-2xl px-3 pb-24 pt-3 sm:pt-5">
      {/* 返回科目选择 */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          sfx.click()
          onBackHome()
        }}
        className={`mb-3 rounded-xl border-2 font-black ${t.backBtn}`}
      >
        ← 换科目
      </Button>

      {/* 每日学习进度 */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-3xl border-2 p-4 sm:p-5 ${t.hero}`}
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 className={`text-base font-black sm:text-lg ${t.heroTitle}`}>
            {subjectData.emoji} {subjectData.name}·今日学习任务（20 分钟）
          </h2>
          <span className={`rounded-full px-2.5 py-1 text-xs font-black text-white ${t.heroChip}`}>
            {minutes}/{DAILY_GOAL_SECONDS / 60} 分钟
          </span>
        </div>
        <Progress value={(todaySeconds / DAILY_GOAL_SECONDS) * 100} className={`h-3.5 ${t.heroBar}`} />
        <p className={`mt-2 text-xs font-bold ${t.accent}`}>
          {dailyDone.minutes ? '🎉 太厉害了！今日 20 分钟任务已完成！' : t.tip}
        </p>

        {/* 每日任务列表 */}
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {tasks.map((task) => (
            <div key={task.key} className={`rounded-2xl border-2 p-2.5 ${task.done ? 'border-emerald-300 bg-emerald-50' : 'border-white/80 bg-white/80'}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-gray-700">{task.emoji} {task.name}</span>
                {task.done && <span className="text-emerald-500">✅</span>}
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <Progress value={(task.progress / task.total) * 100} className="h-2 flex-1" />
                <span className="shrink-0 text-[11px] font-black text-amber-600">+{task.reward}🪙</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 每日挑战 + 金币入口 */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            sfx.click()
            onStartDaily()
          }}
          disabled={!dailyUnlocked}
          className={`flex flex-col items-start gap-1 rounded-3xl border-2 p-4 text-left ${t.dailyBtn} ${!dailyUnlocked ? 'opacity-60' : ''}`}
        >
          <span className="text-3xl">🎲</span>
          <span className={`text-base font-black ${t.dailyTitle}`}>每日挑战</span>
          <span className={`text-xs font-bold ${t.dailyDesc}`}>
            {dailyUnlocked ? '随机 10 题大混战，看你能拿多少金币！' : '通过第一关后解锁'}
          </span>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            sfx.click()
            const el = document.getElementById('unit-list')
            el?.scrollIntoView({ behavior: 'smooth' })
          }}
          className={`flex flex-col items-start gap-1 rounded-3xl border-2 p-4 text-left ${t.coinBtn}`}
        >
          <span className="text-3xl">💰</span>
          <span className={`text-base font-black ${t.coinTitle}`}>我的金币</span>
          <span className={`text-xs font-bold ${t.coinDesc}`}>
            已攒 {coins} 枚金币 · 错题本 {wrongCount} 道待消灭
          </span>
        </motion.button>
      </div>

      {/* 关卡地图 */}
      <h2 className="mb-3 mt-6 flex items-center gap-2 text-lg font-black text-gray-800">
        <span className="text-2xl">🏰</span> {subjectData.name}闯关地图
        <span className="text-xs font-bold text-gray-400">（过一关，解锁下一关哦）</span>
      </h2>
      <div id="unit-list" className="flex flex-col gap-3 sm:gap-4">
        {subjectData.units.map((unit, i) => (
          <div key={unit.id} className={i % 2 === 1 ? 'sm:translate-x-4' : ''}>
            <UnitCard subject={subject} unit={unit} index={i} onStart={() => onStartLevel(unit.id)} />
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs font-bold text-gray-400">{SUBJECT_FOOTERS[subject] ?? t.footer}</p>
    </div>
  )
}
