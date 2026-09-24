'use client'

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import { SUBJECTS, subjectsFor } from '@/lib/questions'
import type { SubjectId } from '@/lib/questions'
import { useGame, subjectStats, DAILY_GOAL_SECONDS } from '@/lib/game'
import type { TextbookChoice } from '@/lib/game'
import { sfx } from '@/lib/sound'
import { GRADE_LABELS, TERM_LABELS } from '@/components/game/textbook-picker'

interface HomeViewProps {
  onSelectSubject: (subjectId: SubjectId) => void
}

const THEME = {
  orange: {
    card: 'border-orange-300 bg-gradient-to-br from-orange-100 via-orange-50 to-amber-50 shadow-[0_10px_0_0_rgba(251,146,60,0.35)]',
    title: 'text-orange-700',
    btn: 'bg-gradient-to-b from-orange-400 to-orange-500 shadow-[0_5px_0_0_rgba(234,88,12,0.55)]',
    bar: 'bg-orange-100 [&>div]:bg-gradient-to-r [&>div]:from-amber-400 [&>div]:to-orange-500',
    ring: 'ring-orange-200',
  },
  emerald: {
    card: 'border-emerald-300 bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-50 shadow-[0_10px_0_0_rgba(16,185,129,0.35)]',
    title: 'text-emerald-700',
    btn: 'bg-gradient-to-b from-emerald-400 to-emerald-500 shadow-[0_5px_0_0_rgba(5,150,105,0.55)]',
    bar: 'bg-emerald-100 [&>div]:bg-gradient-to-r [&>div]:from-teal-400 [&>div]:to-emerald-500',
    ring: 'ring-emerald-200',
  },
  sky: {
    card: 'border-sky-300 bg-gradient-to-br from-sky-100 via-sky-50 to-cyan-50 shadow-[0_10px_0_0_rgba(14,165,233,0.35)]',
    title: 'text-sky-700',
    btn: 'bg-gradient-to-b from-sky-400 to-sky-500 shadow-[0_5px_0_0_rgba(2,132,199,0.55)]',
    bar: 'bg-sky-100 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-sky-500',
    ring: 'ring-sky-200',
  },
  rose: {
    card: 'border-rose-300 bg-gradient-to-br from-rose-100 via-rose-50 to-pink-50 shadow-[0_10px_0_0_rgba(244,63,94,0.35)]',
    title: 'text-rose-700',
    btn: 'bg-gradient-to-b from-rose-400 to-rose-500 shadow-[0_5px_0_0_rgba(225,29,72,0.55)]',
    bar: 'bg-rose-100 [&>div]:bg-gradient-to-r [&>div]:from-pink-400 [&>div]:to-rose-500',
    ring: 'ring-rose-200',
  },
  violet: {
    card: 'border-violet-300 bg-gradient-to-br from-violet-100 via-violet-50 to-purple-50 shadow-[0_10px_0_0_rgba(139,92,246,0.35)]',
    title: 'text-violet-700',
    btn: 'bg-gradient-to-b from-violet-400 to-violet-500 shadow-[0_5px_0_0_rgba(124,58,237,0.55)]',
    bar: 'bg-violet-100 [&>div]:bg-gradient-to-r [&>div]:from-purple-400 [&>div]:to-violet-500',
    ring: 'ring-violet-200',
  },
  teal: {
    card: 'border-teal-300 bg-gradient-to-br from-teal-100 via-teal-50 to-cyan-50 shadow-[0_10px_0_0_rgba(20,184,166,0.35)]',
    title: 'text-teal-700',
    btn: 'bg-gradient-to-b from-teal-400 to-teal-500 shadow-[0_5px_0_0_rgba(13,148,136,0.55)]',
    bar: 'bg-teal-100 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-teal-500',
    ring: 'ring-teal-200',
  },
  amber: {
    card: 'border-amber-300 bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-50 shadow-[0_10px_0_0_rgba(245,158,11,0.35)]',
    title: 'text-amber-700',
    btn: 'bg-gradient-to-b from-amber-400 to-amber-500 shadow-[0_5px_0_0_rgba(217,119,6,0.55)]',
    bar: 'bg-amber-100 [&>div]:bg-gradient-to-r [&>div]:from-yellow-400 [&>div]:to-amber-500',
    ring: 'ring-amber-200',
  },
  lime: {
    card: 'border-lime-300 bg-gradient-to-br from-lime-100 via-lime-50 to-green-50 shadow-[0_10px_0_0_rgba(132,204,22,0.35)]',
    title: 'text-lime-700',
    btn: 'bg-gradient-to-b from-lime-400 to-lime-500 shadow-[0_5px_0_0_rgba(101,163,13,0.55)]',
    bar: 'bg-lime-100 [&>div]:bg-gradient-to-r [&>div]:from-green-400 [&>div]:to-lime-500',
    ring: 'ring-lime-200',
  },
  cyan: {
    card: 'border-cyan-300 bg-gradient-to-br from-cyan-100 via-cyan-50 to-sky-50 shadow-[0_10px_0_0_rgba(6,182,212,0.35)]',
    title: 'text-cyan-700',
    btn: 'bg-gradient-to-b from-cyan-400 to-cyan-500 shadow-[0_5px_0_0_rgba(8,145,178,0.55)]',
    bar: 'bg-cyan-100 [&>div]:bg-gradient-to-r [&>div]:from-sky-400 [&>div]:to-cyan-500',
    ring: 'ring-cyan-200',
  },
  pink: {
    card: 'border-pink-300 bg-gradient-to-br from-pink-100 via-pink-50 to-rose-50 shadow-[0_10px_0_0_rgba(236,72,153,0.35)]',
    title: 'text-pink-700',
    btn: 'bg-gradient-to-b from-pink-400 to-pink-500 shadow-[0_5px_0_0_rgba(219,39,119,0.55)]',
    bar: 'bg-pink-100 [&>div]:bg-gradient-to-r [&>div]:from-rose-300 [&>div]:to-pink-500',
    ring: 'ring-pink-200',
  },
  indigo: {
    card: 'border-indigo-300 bg-gradient-to-br from-indigo-100 via-indigo-50 to-blue-50 shadow-[0_10px_0_0_rgba(99,102,241,0.35)]',
    title: 'text-indigo-700',
    btn: 'bg-gradient-to-b from-indigo-400 to-indigo-500 shadow-[0_5px_0_0_rgba(79,70,229,0.55)]',
    bar: 'bg-indigo-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-400 [&>div]:to-indigo-500',
    ring: 'ring-indigo-200',
  },
  fuchsia: {
    card: 'border-fuchsia-300 bg-gradient-to-br from-fuchsia-100 via-fuchsia-50 to-pink-50 shadow-[0_10px_0_0_rgba(217,70,239,0.35)]',
    title: 'text-fuchsia-700',
    btn: 'bg-gradient-to-b from-fuchsia-400 to-fuchsia-500 shadow-[0_5px_0_0_rgba(192,38,211,0.55)]',
    bar: 'bg-fuchsia-100 [&>div]:bg-gradient-to-r [&>div]:from-pink-400 [&>div]:to-fuchsia-500',
    ring: 'ring-fuchsia-200',
  },
  blue: {
    card: 'border-blue-300 bg-gradient-to-br from-blue-100 via-blue-50 to-sky-50 shadow-[0_10px_0_0_rgba(59,130,246,0.35)]',
    title: 'text-blue-700',
    btn: 'bg-gradient-to-b from-blue-400 to-blue-500 shadow-[0_5px_0_0_rgba(37,99,235,0.55)]',
    bar: 'bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-sky-400 [&>div]:to-blue-500',
    ring: 'ring-blue-200',
  },
  green: {
    card: 'border-green-300 bg-gradient-to-br from-green-100 via-green-50 to-lime-50 shadow-[0_10px_0_0_rgba(34,197,94,0.35)]',
    title: 'text-green-700',
    btn: 'bg-gradient-to-b from-green-400 to-green-500 shadow-[0_5px_0_0_rgba(22,163,74,0.55)]',
    bar: 'bg-green-100 [&>div]:bg-gradient-to-r [&>div]:from-lime-400 [&>div]:to-green-500',
    ring: 'ring-green-200',
  },
  red: {
    card: 'border-red-300 bg-gradient-to-br from-red-100 via-red-50 to-orange-50 shadow-[0_10px_0_0_rgba(239,68,68,0.35)]',
    title: 'text-red-700',
    btn: 'bg-gradient-to-b from-red-400 to-red-500 shadow-[0_5px_0_0_rgba(220,38,38,0.55)]',
    bar: 'bg-red-100 [&>div]:bg-gradient-to-r [&>div]:from-orange-400 [&>div]:to-red-500',
    ring: 'ring-red-200',
  },
} as const

// 小朋友看得懂的科目口号（未来新增科目时自动回退到 tagline）
const KID_LINES: Partial<Record<SubjectId, string>> = {
  chinese1: '天地人 · 拼音宝宝 · 雪地小画家！',
  math1: '数一数 · 凑十法 · 越算越聪明！',
  english1: '打招呼 · 小书包 · 趣味数字，宝宝也会说！',
  chinese2: '小蝌蚪 · 黄山奇石 · 狐假虎威！',
  math2: '乘法口诀 · 求商 · 角与直角，越背越灵！',
  english2: '我的早晨 · 四季水果 · 五感大发现！',
  chinese3: '大青树下 · 秋天的雨 · 古诗新唱！',
  math3: '一位数乘除 · 年月日 · 七巧板，越算越灵！',
  english3: '字母 ABC · 小花园 · 美食节，英语初体验！',
  chinese4: '看大潮 · 游长城 · 访古迹！',
  math4: '运算律 · 大数 · 抽屉原理，越算越聪明！',
  english4: '学校 · 动物 · 早餐 · 天气，开口就说！',
  chinese: '读课文 · 背古诗 · 闯名著关！',
  chinese6: '草原丁香 · 长征壮歌 · 走近鲁迅！',
  chinese54: '草原丁香 · 红色足迹 · 科学之光！',
  chinese1b: '春夏秋冬 · 荷叶圆圆 · 小壁虎借尾巴！',
  chinese2b: '村居咏柳 · 神州谣 · 羿射九日！',
  chinese3b: '燕子荷花 · 守株待兔 · 海底世界！',
  chinese4b: '田园诗歌 · 琥珀恐龙 · 中外童话！',
  chinese5b: '祖父的园子 · 草船借箭 · 刷子李！',
  chinese6b: '民风民俗 · 理想信念 · 难忘小学时光！',
  chinese54b: '民风民俗 · 科学精神 · 古诗词诵读！',
  math1rjb: '平面图形 · 退位减法 · 购物街开张！',
  math2rjb: '表内除法 · 万以内数 · 小小侦探！',
  math3rjb: '东南西北 · 面积 · 年月日，越算越灵！',
  math4rjb: '运算定律 · 小数朋友 · 三角形！',
  math5rjb: '因数倍数 · 分数王国 · 长方体！',
  math6rjb: '负数 · 圆柱圆锥 · 毕业大闯关！',
  math1b: '退位减法 · 认识100 · 身体上的尺子！',
  math2b: '千以内数 · 三位数加减 · 克与千克！',
  math3b: '两位数乘除 · 分数初识 · 周长！',
  math4b: '小数朋友 · 折线统计 · 垂直平行！',
  math5b: '正负数 · 方程应用 · 体积大冒险！',
  math54b: '有理数 · 一次方程 · 长方体再认识！',
  math6: '数对定位 · 圆与百分数 · 越算越厉害！',
  math54: '整除素数 · 比和比例 · 圆和扇形！',
  english6: '校园家庭 · 美食运动 · 动物旅行！',
  math: '算一算 · 比一比 · 越闯越聪明！',
  english: 'ABC 大冒险 · 边玩边开口说！',
  math1rj: '数学游戏 · 凑十法 · 越玩越聪明！',
  math2rj: '分类整理 · 表内乘除 · 量长量短！',
  math3rj: '混合运算 · 曹冲称象 · 分数初识！',
  math4rj: '万以上大数 · 乘法模型 · 找宝藏！',
  math5rj: '小数乘除 · 字母代数 · 图形面积！',
  english1rj: 'Hello! · 第一堂课 · 上学准备出发！',
  english2rj: '数字字母 · 帮忙做家务 · 快乐情绪！',
  english3rj: '交朋友 · 神奇动物 · 多彩世界！',
  english4rj: '在家帮忙 · 社区生活 · 天气四季！',
  english5rj: '不同的朋友 · 健康习惯 · 美食自然！',
  english6rj: '神奇地方 · 团圆佳节 · 探索太空！',
  english1rjb: '有礼貌 · 讲卫生 · 吃得好，宝贝真棒！',
  english2rjb: '穿外套 · 安全玩 · 我能行 · 设计公园！',
  english3rjb: '新朋友 · 表达自己 · 健康食物 · 数字生活！',
  english4rjb: '班级规则 · 家规 · 购物 · 农场一日游！',
  english5rjb: '我的一天 · 最爱季节 · 校园日历 · 文明标识！',
  english6rjb: '比较高矮 · 上周末 · 今昔对比 · 毕业冲刺！',
}

// 页面边缘的漂浮小装饰
const FLOATERS = [
  { emoji: '☁️', cls: 'left-[3%] top-3 text-3xl', d: 5 },
  { emoji: '⭐', cls: 'right-[7%] top-8 text-2xl', d: 6 },
  { emoji: '🎈', cls: 'left-[6%] top-[44%] text-2xl', d: 7 },
  { emoji: '🐚', cls: 'right-[4%] top-[54%] text-xl', d: 5.5 },
  { emoji: '☁️', cls: 'right-[14%] top-[76%] text-3xl', d: 8 },
  { emoji: '✨', cls: 'left-[4%] top-[86%] text-xl', d: 6.5 },
]

export default function HomeView({ onSelectSubject }: HomeViewProps) {
  const levels = useGame((s) => s.levels)
  const coins = useGame((s) => s.coins)
  const streak = useGame((s) => s.streak)
  const todaySeconds = useGame((s) => s.todaySeconds)
  const dailyDone = useGame((s) => s.dailyDone)
  const wrongBook = useGame((s) => s.wrongBook)
  const textbook = useGame((s) => s.textbook)
  const setTextbook = useGame((s) => s.setTextbook)

  const wrongCount = Object.keys(wrongBook).length
  const minutes = Math.floor(todaySeconds / 60)
  const pct = Math.min(100, (todaySeconds / DAILY_GOAL_SECONDS) * 100)

  // 按左上角选择器筛选当前要展示的科目岛
  const visibleSubjects = subjectsFor(textbook)
  const hasContent = visibleSubjects.length > 0

  const pick = (patch: Partial<TextbookChoice>) => {
    sfx.click()
    setTextbook({ ...textbook, ...patch })
  }

  return (
    <div className="relative mx-auto w-full max-w-2xl px-3 pb-24 pt-4 sm:pt-6">
      {/* 漂浮装饰层 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {FLOATERS.map((f, i) => (
          <motion.span
            key={i}
            className={`absolute select-none opacity-70 ${f.cls}`}
            animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
            transition={{ repeat: Infinity, duration: f.d, ease: 'easeInOut', delay: i * 0.35 }}
          >
            {f.emoji}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10">
        {/* 英雄区：小岛和你打招呼 */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0, y: -10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.15 }}
            className="relative mx-auto mt-3 inline-block"
          >
            <p className="rounded-2xl border-2 border-orange-200 bg-white px-4 py-2 text-sm font-black text-orange-500 shadow-[0_4px_0_0_rgba(251,146,60,0.2)] sm:text-base">
              嗨，小岛民！今天想去哪个岛冒险呀？
            </p>
            <span className="absolute -bottom-[9px] left-10 h-3.5 w-3.5 rotate-45 border-b-2 border-r-2 border-orange-200 bg-white" />
          </motion.div>

          <motion.p
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="mt-4 text-7xl sm:text-8xl"
          >
            🏝️
          </motion.p>
          <h1 className="mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
            童学冒险岛
          </h1>
          <p className="mt-1 text-sm font-black text-amber-600 sm:text-base">
            一至六年级 · 闯关赢金币 · 越玩越聪明
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-black sm:text-sm">
            <span className="rounded-full bg-amber-100 px-3 py-1.5 text-amber-700 shadow-sm">🪙 {coins}</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-emerald-700 shadow-sm">🔥 连续 {streak} 天</span>
            <span className="rounded-full bg-rose-100 px-3 py-1.5 text-rose-700 shadow-sm">📕 错题 {wrongCount}</span>
          </div>
        </motion.section>

        {/* 今日 20 分钟：小帆船进度 */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-5 rounded-3xl border-2 border-amber-200 bg-white/90 p-4 shadow-[0_6px_0_0_rgba(251,191,36,0.25)]"
        >
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-black text-amber-800 sm:text-base">⛵ 今日 20 分钟小目标</h2>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-black text-white ${
                dailyDone.minutes ? 'bg-emerald-400' : 'bg-amber-400'
              }`}
            >
              {minutes}/{DAILY_GOAL_SECONDS / 60} 分钟
            </span>
          </div>
          <div className="relative">
            <Progress value={pct} className="h-4 rounded-full bg-amber-100 [&>div]:bg-gradient-to-r [&>div]:from-amber-300 [&>div]:to-orange-400" />
            <span
              className="absolute -top-1.5 text-2xl transition-all duration-700"
              style={{ left: `calc(${pct}% - 16px)` }}
            >
              ⛵
            </span>
          </div>
          <p className="mt-2 text-xs font-bold text-amber-600">
            {todaySeconds === 0
              ? '选一个岛出发吧，小帆船会跟着你前进哦～'
              : dailyDone.minutes
                ? '🎉 今日目标达成！明天继续来冒险～'
                : `再学 ${DAILY_GOAL_SECONDS / 60 - minutes} 分钟，小帆船就到终点啦！`}
          </p>
        </motion.section>

        {/* 科目岛选择 */}
        <h2 className="mb-3 mt-6 flex items-center gap-2 text-lg font-black text-gray-800 sm:text-xl">
          <span className="text-2xl">🗺️</span> 选一个岛出发
          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-black text-violet-500">
            {GRADE_LABELS[textbook.gradeNum] ?? `${textbook.gradeNum}年级`}{TERM_LABELS[textbook.term]}
          </span>
        </h2>

        {!hasContent ? (
          <div className="rounded-[2rem] border-4 border-dashed border-amber-300 bg-white/80 p-8 text-center">
            <p className="text-5xl">🚧</p>
            <p className="mt-2 text-base font-black text-amber-600">这片海域还没开岛哦！</p>
            <p className="mt-1 text-xs font-bold text-gray-400">
              {GRADE_LABELS[textbook.gradeNum] ?? textbook.gradeNum + '年级'}
              {TERM_LABELS[textbook.term]}的教材正在赶来，先回上册继续冒险吧～
            </p>
            <button
              onClick={() => {
                sfx.click()
                pick({ term: 'a' })
              }}
              className="mt-4 rounded-2xl bg-gradient-to-b from-amber-400 to-orange-500 px-5 py-2.5 text-sm font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] active:translate-y-[3px] active:shadow-none"
            >
              ⛵ 回到上册
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {visibleSubjects.map((subject, i) => {
              const t = THEME[subject.theme]
              const stats = subjectStats(levels, subject.id)
              return (
                <motion.button
                  key={subject.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, type: 'spring', stiffness: 220, damping: 20 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    sfx.click()
                    onSelectSubject(subject.id)
                  }}
                  className={`w-full rounded-[2rem] border-4 p-5 text-left ${t.card}`}
                >
                  <div className="flex items-center gap-4">
                    <motion.span
                      animate={{ rotate: [0, -6, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 4.5, delay: i * 0.8, ease: 'easeInOut' }}
                      className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.4rem] bg-white text-5xl shadow-sm ring-4 sm:h-24 sm:w-24 sm:text-6xl ${t.ring}`}
                    >
                      {subject.emoji}
                    </motion.span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <p className={`text-2xl font-black sm:text-3xl ${t.title}`}>{subject.name}岛</p>
                        {subject.badge && (
                          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-black text-violet-500 shadow-sm">
                            {subject.badge}
                          </span>
                        )}
                        <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-black text-gray-500 shadow-sm">
                          {subject.grade}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs font-black text-gray-500 sm:text-sm">
                        {KID_LINES[subject.id] ?? subject.tagline}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-sm font-black sm:text-base">
                        <span className="text-amber-500">⭐ {stats.stars}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-gray-500">✅ {stats.completed}/{stats.total} 关</span>
                      </div>
                    </div>
                  </div>
                  <Progress value={(stats.completed / stats.total) * 100} className={`mt-3 h-3 rounded-full ${t.bar}`} />
                  <span
                    className={`mt-4 flex items-center justify-center gap-1.5 rounded-2xl py-3.5 text-lg font-black text-white transition-transform active:translate-y-[3px] active:shadow-none sm:text-xl ${t.btn}`}
                  >
                    {stats.completed > 0 ? '继续冒险' : '出发冒险'}
                    <span className="text-xl">🚀</span>
                  </span>
                </motion.button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
