'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { SUBJECTS } from '@/lib/questions'
import type { SubjectId } from '@/lib/questions'
import { useGame, subjectStats, DAILY_GOAL_SECONDS, TASK_REWARDS } from '@/lib/game'
import { sfx } from '@/lib/sound'

interface HomeViewProps {
  onSelectSubject: (subjectId: SubjectId) => void
}

const THEME = {
  orange: {
    card: 'border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 shadow-[0_8px_0_0_rgba(251,146,60,0.35)] hover:shadow-[0_10px_0_0_rgba(251,146,60,0.45)]',
    chip: 'bg-orange-100 text-orange-700',
    title: 'text-orange-700',
    btn: 'bg-orange-500 hover:bg-orange-600 shadow-[0_4px_0_0_rgba(234,88,12,0.5)]',
    bar: 'bg-orange-400',
    ring: 'bg-white ring-orange-200',
  },
  emerald: {
    card: 'border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-[0_8px_0_0_rgba(16,185,129,0.35)] hover:shadow-[0_10px_0_0_rgba(16,185,129,0.45)]',
    chip: 'bg-emerald-100 text-emerald-700',
    title: 'text-emerald-700',
    btn: 'bg-emerald-500 hover:bg-emerald-600 shadow-[0_4px_0_0_rgba(5,150,105,0.5)]',
    bar: 'bg-emerald-400',
    ring: 'bg-white ring-emerald-200',
  },
} as const

export default function HomeView({ onSelectSubject }: HomeViewProps) {
  const levels = useGame((s) => s.levels)
  const coins = useGame((s) => s.coins)
  const streak = useGame((s) => s.streak)
  const todaySeconds = useGame((s) => s.todaySeconds)
  const dailyDone = useGame((s) => s.dailyDone)
  const wrongBook = useGame((s) => s.wrongBook)
  const achievements = useGame((s) => s.achievements)

  const wrongCount = Object.keys(wrongBook).length
  const minutes = Math.floor(todaySeconds / 60)

  return (
    <div className="mx-auto w-full max-w-2xl px-3 pb-28 pt-4 sm:pt-6">
      {/* 英雄区 */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-5 text-center shadow-[0_8px_0_0_rgba(251,191,36,0.35)] sm:p-7"
      >
        <motion.p
          animate={{ y: [0, -8, 0], rotate: [0, -3, 3, 0] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
          className="text-6xl sm:text-7xl"
        >
          🏝️
        </motion.p>
        <h1 className="mt-2 text-2xl font-black tracking-tight text-gray-800 sm:text-3xl">
          学习闯关岛
        </h1>
        <p className="mt-1 text-sm font-black text-amber-600 sm:text-base">五年级上册 · 语文 + 数学 双科闯关</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-black">
          <span className="rounded-full bg-amber-100 px-2.5 py-1 text-amber-700">🪙 {coins} 金币</span>
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-700">🔥 连续签到 {streak} 天</span>
          <span className="rounded-full bg-rose-100 px-2.5 py-1 text-rose-700">📕 错题 {wrongCount} 道待消灭</span>
        </div>
      </motion.section>

      {/* 今日 20 分钟进度 */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mt-4 rounded-3xl border-2 border-amber-200 bg-white/90 p-4 shadow-[0_6px_0_0_rgba(251,191,36,0.25)]"
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-black text-amber-800 sm:text-base">⏰ 今天的 20 分钟学习时间</h2>
          <span className={`rounded-full px-2.5 py-1 text-xs font-black text-white ${dailyDone.minutes ? 'bg-emerald-400' : 'bg-amber-400'}`}>
            {minutes}/{DAILY_GOAL_SECONDS / 60} 分钟
          </span>
        </div>
        <Progress value={(todaySeconds / DAILY_GOAL_SECONDS) * 100} className="h-3 bg-amber-100" />
        <p className="mt-2 text-xs font-bold text-amber-600">
          {todaySeconds === 0
            ? '选一个科目出发吧！每天 20 分钟，闯关赢金币～'
            : dailyDone.minutes
              ? '🎉 今日目标已达成，明天继续哦！'
              : `再学 ${DAILY_GOAL_SECONDS / 60 - minutes} 分钟就完成今日任务啦！`}
        </p>
      </motion.section>

      {/* 科目选择 */}
      <h2 className="mb-3 mt-6 flex items-center gap-2 text-lg font-black text-gray-800">
        <span className="text-2xl">🎒</span> 选择科目开始闯关
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {SUBJECTS.map((subject, i) => {
          const t = THEME[subject.theme]
          const stats = subjectStats(levels, subject.id)
          return (
            <motion.button
              key={subject.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.35 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                sfx.click()
                onSelectSubject(subject.id)
              }}
              className={`flex flex-col items-start gap-2 rounded-3xl border-2 p-5 text-left transition-shadow ${t.card}`}
            >
              <div className="flex w-full items-center gap-3">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-4xl ring-4 ${t.ring}`}>
                  {subject.emoji}
                </span>
                <div className="min-w-0">
                  <p className={`text-xl font-black ${t.title}`}>
                    {subject.name}闯关
                  </p>
                  <span className={`mt-0.5 inline-block rounded-md px-1.5 py-0.5 text-[11px] font-black ${t.chip}`}>
                    {subject.publisher}
                  </span>
                </div>
              </div>
              <p className="text-xs font-bold leading-relaxed text-gray-500">{subject.tagline}</p>
              <div className="mt-1 flex items-center gap-2 text-xs font-black text-gray-600">
                <span>⭐ {stats.stars} 星</span>
                <span className="text-gray-300">|</span>
                <span>✅ {stats.completed}/{stats.total} 关</span>
              </div>
              <Progress value={(stats.completed / stats.total) * 100} className={`h-2.5 w-full ${subject.theme === 'orange' ? 'bg-orange-100' : 'bg-emerald-100'}`} />
              <Button className={`mt-2 w-full rounded-2xl py-3 font-black text-white ${t.btn}`}>
                {stats.completed > 0 ? '继续闯关 →' : '开始闯关 →'}
              </Button>
            </motion.button>
          )
        })}
      </div>

      {/* 奖惩机制速览 */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mt-5 grid gap-3 sm:grid-cols-2"
      >
        <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50/80 p-4">
          <p className="text-sm font-black text-emerald-700">🎁 奖励规则</p>
          <ul className="mt-1.5 space-y-1 text-xs font-bold leading-relaxed text-emerald-600">
            <li>· 答对 1 题 +10 金币，连击 3 次每题再 +5</li>
            <li>· 通关拿星星：1 星 +20 / 2 星 +50 / 3 星 +100</li>
            <li>· 每日任务（闯关 / 20 分钟 / 复习错题）有金币</li>
            <li>· 签到 +10 金币，攒金币解锁 13 个成就徽章</li>
          </ul>
        </div>
        <div className="rounded-3xl border-2 border-rose-200 bg-rose-50/80 p-4">
          <p className="text-sm font-black text-rose-700">⚖️ 惩罚规则（很温柔哦）</p>
          <ul className="mt-1.5 space-y-1 text-xs font-bold leading-relaxed text-rose-600">
            <li>· 每关 3 颗❤️：答错或超时（40 秒/题）扣 1 颗</li>
            <li>· ❤️ 用完本关失败，本局金币减半</li>
            <li>· 错题自动收进错题本，复习答对才能「消灭」</li>
            <li>· 上一关通关后，才能解锁下一关</li>
          </ul>
        </div>
      </motion.section>

      <p className="mt-5 text-center text-xs font-bold text-gray-400">
        📚 语文：2026 新版统编五上 · 数学：沪教版五上（上海教育出版社） · 每天 20 分钟
      </p>
      <p className="mt-1 text-center text-[11px] font-bold text-gray-300">
        进度自动保存在本设备浏览器中 · 已解锁成就 {achievements.length} 个 · 每日任务奖励最多 +{TASK_REWARDS.level + TASK_REWARDS.minutes + TASK_REWARDS.review} 金币
      </p>
    </div>
  )
}
