'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { UNITS } from '@/lib/questions'
import { useGame, isUnitUnlocked, DAILY_GOAL_SECONDS, TASK_REWARDS } from '@/lib/game'
import { sfx } from '@/lib/sound'
import type { Unit } from '@/lib/questions'

interface MapViewProps {
  onStartLevel: (unitId: string) => void
  onStartDaily: () => void
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
}

function UnitCard({ unit, index, onStart }: { unit: Unit; index: number; onStart: () => void }) {
  const levels = useGame((s) => s.levels)
  const progress = levels[unit.id]
  const unlocked = isUnitUnlocked(index, levels)
  const style = UNIT_STYLES[unit.color] || UNIT_STYLES.orange

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
          {unlocked ? unit.lessons.join(' · ') : `先通过「${UNITS[index - 1]?.title}」才能解锁`}
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

export default function MapView({ onStartLevel, onStartDaily }: MapViewProps) {
  const todaySeconds = useGame((s) => s.todaySeconds)
  const dailyDone = useGame((s) => s.dailyDone)
  const todayReviewCorrect = useGame((s) => s.todayReviewCorrect)
  const wrongBook = useGame((s) => s.wrongBook)
  const levels = useGame((s) => s.levels)
  const coins = useGame((s) => s.coins)

  const minutes = Math.floor(todaySeconds / 60)
  const dailyUnlocked = Object.values(levels).some((l) => l.completed)
  const wrongCount = Object.keys(wrongBook).length

  const tasks = [
    { key: 'level', emoji: '🗺️', name: '完成 1 次闯关', reward: TASK_REWARDS.level, done: dailyDone.level, progress: dailyDone.level ? 1 : 0, total: 1, unit: '关' },
    { key: 'minutes', emoji: '⏰', name: '累计学习 20 分钟', reward: TASK_REWARDS.minutes, done: dailyDone.minutes, progress: Math.min(todaySeconds, DAILY_GOAL_SECONDS), total: DAILY_GOAL_SECONDS, unit: '秒' },
    { key: 'review', emoji: '🎯', name: '复习答对 5 道错题', reward: TASK_REWARDS.review, done: dailyDone.review, progress: Math.min(todayReviewCorrect, 5), total: 5, unit: '题' },
  ]

  return (
    <div className="mx-auto w-full max-w-2xl px-3 pb-24 pt-3 sm:pt-5">
      {/* 每日学习进度 */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-4 shadow-[0_6px_0_0_rgba(251,191,36,0.35)] sm:p-5"
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-base font-black text-amber-800 sm:text-lg">🌟 今日学习任务（20 分钟）</h2>
          <span className="rounded-full bg-amber-400 px-2.5 py-1 text-xs font-black text-white">
            {minutes}/{DAILY_GOAL_SECONDS / 60} 分钟
          </span>
        </div>
        <Progress value={(todaySeconds / DAILY_GOAL_SECONDS) * 100} className="h-3.5 bg-amber-200" />
        <p className="mt-2 text-xs font-bold text-amber-700">
          {todaySeconds === 0
            ? '每天玩 20 分钟，闯关赢金币，快乐学语文！'
            : dailyDone.minutes
              ? '🎉 太厉害了！今日 20 分钟任务已完成！'
              : `继续加油！再学 ${DAILY_GOAL_SECONDS / 60 - minutes} 分钟就能完成任务～`}
        </p>

        {/* 每日任务列表 */}
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {tasks.map((t) => (
            <div key={t.key} className={`rounded-2xl border-2 p-2.5 ${t.done ? 'border-emerald-300 bg-emerald-50' : 'border-amber-200 bg-white/80'}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-gray-700">{t.emoji} {t.name}</span>
                {t.done && <span className="text-emerald-500">✅</span>}
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <Progress value={(t.progress / t.total) * 100} className="h-2 flex-1" />
                <span className="shrink-0 text-[11px] font-black text-amber-600">+{t.reward}🪙</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 每日挑战 + 错题本入口 */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            sfx.click()
            onStartDaily()
          }}
          disabled={!dailyUnlocked}
          className={`flex flex-col items-start gap-1 rounded-3xl border-2 border-violet-300 bg-gradient-to-br from-violet-50 to-fuchsia-50 p-4 text-left shadow-[0_6px_0_0_rgba(139,92,246,0.3)] ${!dailyUnlocked ? 'opacity-60' : ''}`}
        >
          <span className="text-3xl">🎲</span>
          <span className="text-base font-black text-violet-700">每日挑战</span>
          <span className="text-xs font-bold text-violet-500">
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
          className="flex flex-col items-start gap-1 rounded-3xl border-2 border-rose-300 bg-gradient-to-br from-rose-50 to-orange-50 p-4 text-left shadow-[0_6px_0_0_rgba(244,63,94,0.3)]"
        >
          <span className="text-3xl">💰</span>
          <span className="text-base font-black text-rose-700">我的金币</span>
          <span className="text-xs font-bold text-rose-500">
            已攒 {coins} 枚金币 · 错题本 {wrongCount} 道待消灭
          </span>
        </motion.button>
      </div>

      {/* 关卡地图 */}
      <h2 className="mb-3 mt-6 flex items-center gap-2 text-lg font-black text-gray-800">
        <span className="text-2xl">🏰</span> 语文闯关地图
        <span className="text-xs font-bold text-gray-400">（过一关，解锁下一关哦）</span>
      </h2>
      <div id="unit-list" className="flex flex-col gap-3 sm:gap-4">
        {UNITS.map((unit, i) => (
          <div key={unit.id} className={i % 2 === 1 ? 'sm:translate-x-4' : ''}>
            <UnitCard unit={unit} index={i} onStart={() => onStartLevel(unit.id)} />
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs font-bold text-gray-400">
        📚 题目来源：2026 新版统编语文五年级上册 · 八大单元主题 · {8 * 10} 道随堂精选题
      </p>
    </div>
  )
}
