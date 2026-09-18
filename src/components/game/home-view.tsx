'use client'

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import { SUBJECTS } from '@/lib/questions'
import type { SubjectId } from '@/lib/questions'
import { useGame, subjectStats, DAILY_GOAL_SECONDS } from '@/lib/game'
import { sfx } from '@/lib/sound'

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
} as const

// 小朋友看得懂的科目口号（未来新增科目时自动回退到 tagline）
const KID_LINES: Partial<Record<SubjectId, string>> = {
  chinese: '读课文 · 背古诗 · 闯名著关！',
  math: '算一算 · 比一比 · 越闯越聪明！',
  english: 'ABC 大冒险 · 边玩边开口说！',
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

  const wrongCount = Object.keys(wrongBook).length
  const minutes = Math.floor(todaySeconds / 60)
  const pct = Math.min(100, (todaySeconds / DAILY_GOAL_SECONDS) * 100)

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
            className="relative mx-auto inline-block"
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
            学习闯关岛
          </h1>
          <p className="mt-1 text-sm font-black text-amber-600 sm:text-base">
            五年级上册 · 闯关赢金币 · 越玩越聪明
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
        </h2>
        <div className="flex flex-col gap-4">
          {SUBJECTS.map((subject, i) => {
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
                    <p className={`text-2xl font-black sm:text-3xl ${t.title}`}>{subject.name}岛</p>
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

        {/* 底部一句话 */}
        <p className="mt-8 text-center text-xs font-bold text-gray-400">
          🚧 更多年级和教材，正在开岛中…
        </p>
      </div>
    </div>
  )
}
