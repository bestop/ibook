'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ACHIEVEMENTS, useGame } from '@/lib/game'
import { sfx } from '@/lib/sound'

export default function AchievementsView({ onBack }: { onBack: () => void }) {
  const achievements = useGame((s) => s.achievements)
  const totalCorrect = useGame((s) => s.totalCorrect)
  const totalWrong = useGame((s) => s.totalWrong)
  const streak = useGame((s) => s.streak)
  const coins = useGame((s) => s.coins)
  const levels = useGame((s) => s.levels)
  const clearedTotal = useGame((s) => s.clearedTotal)

  const accuracy = totalCorrect + totalWrong > 0 ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) : 0
  // 只统计当前成就列表内的解锁数（旧存档里已下线的成就 ID 不计入）
  const unlockedCount = ACHIEVEMENTS.filter((a) => achievements.includes(a.id)).length
  const stats = { levels, coins, streak, totalCorrect, clearedTotal }

  return (
    <div className="mx-auto w-full max-w-2xl px-3 pb-24 pt-4">
      {/* 数据总览 */}
      <div className="mb-4 grid grid-cols-4 gap-2">
        {[
          { label: '总金币', value: coins, emoji: '🪙', cls: 'bg-amber-50 text-amber-700' },
          { label: '连续签到', value: `${streak}天`, emoji: '📅', cls: 'bg-emerald-50 text-emerald-700' },
          { label: '答题总数', value: totalCorrect + totalWrong, emoji: '✏️', cls: 'bg-orange-50 text-orange-700' },
          { label: '正确率', value: `${accuracy}%`, emoji: '🎯', cls: 'bg-rose-50 text-rose-700' },
        ].map((s) => (
          <div key={s.label} className={`rounded-2xl p-3 text-center ${s.cls}`}>
            <p className="text-xl">{s.emoji}</p>
            <p className="mt-0.5 text-base font-black tabular-nums">{s.value}</p>
            <p className="text-[11px] font-bold opacity-70">{s.label}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-1 mt-5 text-lg font-black text-gray-800">🏆 成就墙</h2>
      <p className="mb-3 text-xs font-bold text-gray-400">
        已解锁 {unlockedCount}/{ACHIEVEMENTS.length} 个成就
      </p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => {
          const got = achievements.includes(a.id)
          const p = got ? null : a.progress?.(stats)
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.04 * i }}
              className={`rounded-2xl border-2 p-4 text-center ${
                got ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 shadow-[0_4px_0_0_rgba(251,191,36,0.35)]' : 'border-gray-200 bg-gray-50 opacity-80'
              }`}
            >
              <span className={`block text-4xl ${got ? '' : 'grayscale opacity-40'}`}>
                {got ? a.emoji : '🔒'}
              </span>
              <p className={`mt-2 text-sm font-black ${got ? 'text-amber-700' : 'text-gray-500'}`}>{a.name}</p>
              <p className="mt-0.5 text-xs font-bold text-gray-400">{a.desc}</p>
              {p && (
                <div className="mt-2">
                  <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
                      style={{ width: `${Math.min(100, Math.round((p.cur / p.goal) * 100))}%` }}
                    />
                  </div>
                  <p className="mt-1 text-[10px] font-bold tabular-nums text-gray-400">
                    {Math.min(p.cur, p.goal)}/{p.goal}
                  </p>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="mt-5 text-center">
        <Button
          onClick={() => {
            sfx.click()
            onBack()
          }}
          variant="outline"
          className="rounded-2xl border-2 px-8 py-4 font-black"
        >
          ← 返回
        </Button>
      </div>
    </div>
  )
}
