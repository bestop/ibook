'use client'

import { motion } from 'framer-motion'
import { ACHIEVEMENTS, useGame } from '@/lib/game'
import { todayKey, weekSignDays, weekReport } from '@/lib/week'
import IconChip, { type IconTone } from '@/components/game/icon-chip'

export default function AchievementsView() {
  const achievements = useGame((s) => s.achievements)
  const totalCorrect = useGame((s) => s.totalCorrect)
  const totalWrong = useGame((s) => s.totalWrong)
  const streak = useGame((s) => s.streak)
  const coins = useGame((s) => s.coins)
  const levels = useGame((s) => s.levels)
  const clearedTotal = useGame((s) => s.clearedTotal)
  const signInDates = useGame((s) => s.signInDates)
  // 本周报告数据源（借鉴聪聪学堂 WeeklyReportCard：每日分钟柱状图 + 与上周对比）
  const dayStats = useGame((s) => s.dayStats)

  const accuracy = totalCorrect + totalWrong > 0 ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) : 0
  // 只统计当前成就列表内的解锁数（旧存档里已下线的成就 ID 不计入）
  const unlockedCount = ACHIEVEMENTS.filter((a) => achievements.includes(a.id)).length
  const stats = { levels, coins, streak, totalCorrect, clearedTotal }
  // 本周签到格（借鉴聪聪学堂 week.ts 本周报告：周一起始的日历周，与小程序同构）
  const today = todayKey()
  const weekDays = weekSignDays(signInDates, today)
  // 本周报告（借鉴聪聪学堂 WeeklyReportCard，与小程序 utils/week.js 同构）
  const report = weekReport(dayStats, today)

  return (
    <div className="mx-auto w-full max-w-2xl px-3 pb-24 pt-4">
      {/* 成就墙为底部第 5 个 tab，导航由底部栏承担，无需页内返回钮 */}

      {/* 数据总览 */}
      <div className="mb-4 grid grid-cols-4 gap-2">
        {([
          { label: '总金币', value: coins, emoji: '🪙', tone: 'amber', cls: 'bg-amber-50 text-amber-700' },
          { label: '连续签到', value: `${streak}天`, emoji: '📅', tone: 'green', cls: 'bg-emerald-50 text-emerald-700' },
          { label: '答题总数', value: totalCorrect + totalWrong, emoji: '✏️', tone: 'orange', cls: 'bg-orange-50 text-orange-700' },
          { label: '正确率', value: `${accuracy}%`, emoji: '🎯', tone: 'red', cls: 'bg-rose-50 text-rose-700' },
        ] as { label: string; value: string | number; emoji: string; tone: IconTone; cls: string }[]).map((s) => (
          <div key={s.label} className={`rounded-2xl p-3 text-center ${s.cls}`}>
            <div className="flex justify-center">
              <IconChip tone={s.tone} size="sm">{s.emoji}</IconChip>
            </div>
            <p className="mt-1 text-base font-black tabular-nums">{s.value}</p>
            <p className="text-[11px] font-bold opacity-70">{s.label}</p>
          </div>
        ))}
      </div>

      {/* 本周签到格（借鉴聪聪学堂 week.ts 本周报告：周一起始，与小程序同构） */}
      <div className="mb-4 flex gap-1.5">
        {weekDays.map((d) => (
          <div
            key={d.key}
            className={`flex-1 rounded-xl border-2 py-2 text-center ${
              d.signed ? 'border-emerald-200 bg-emerald-50' : 'border-gray-100 bg-gray-50'
            } ${d.isToday ? 'ring-2 ring-amber-300' : ''}`}
          >
            <p className="text-[10px] font-black text-gray-400">周{d.label}</p>
            <p className={`text-sm ${d.signed ? 'text-emerald-600' : 'text-gray-300'}`}>{d.signed ? '✅' : '·'}</p>
          </div>
        ))}
      </div>

      {/* 本周报告（借鉴聪聪学堂 WeeklyReportCard：每日分钟柱状图 + 学习天数 + 与上周对比，与小程序同构） */}
      <div className="mb-4 rounded-3xl border-2 border-gray-100 bg-white p-4 shadow-[0_4px_0_0_rgba(0,0,0,0.04)]">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-sm font-black text-gray-800"><IconChip tone="sky" size="sm">📊</IconChip>本周报告</h2>
          {report.deltaMinutes !== 0 && (
            <span className={`text-xs font-black ${report.deltaMinutes > 0 ? 'text-emerald-600' : 'text-gray-400'}`}>
              {report.deltaMinutes > 0 ? '+' : ''}
              {report.deltaMinutes} 分钟 vs 上周
            </span>
          )}
        </div>
        <div className="flex items-end justify-between gap-1.5">
          {report.days.map((d) => (
            <div key={d.key} className="flex flex-1 flex-col items-center gap-1">
              <span className="text-[10px] font-black tabular-nums text-gray-400">{d.minutes}′</span>
              <div className="flex h-16 w-full items-end overflow-hidden rounded-lg bg-gray-100">
                <div
                  className={`w-full rounded-lg transition-all ${d.isToday ? 'bg-amber-400' : 'bg-violet-400'}`}
                  style={{ height: `${d.pct}%` }}
                />
              </div>
              <span className={`text-[10px] font-bold ${d.isToday ? 'text-amber-600' : 'text-gray-400'}`}>
                {d.isToday ? '今' : d.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: '本周分钟', value: `${report.totalMinutes}` },
            { label: '学习天数', value: `${report.activeDays}/7` },
            { label: '上周分钟', value: `${report.lastWeekMinutes}` },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-gray-50 py-2 text-center">
              <p className="text-base font-black tabular-nums text-gray-700">{s.value}</p>
              <p className="text-[10px] font-bold text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mb-1 mt-5 flex items-center gap-2 text-lg font-black text-gray-800"><IconChip tone="amber" size="md">🏆</IconChip>成就墙</h2>
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
                got ? 'border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 dl-shadow-flat' : 'border-gray-200 bg-gray-50 opacity-80'
              }`}
            >
              <div className="flex justify-center">
                <IconChip tone={got ? 'amber' : 'gray'} size="lg" className={`h-16 w-16 text-4xl ${got ? '' : 'grayscale opacity-40'}`}>
                  {got ? a.emoji : '🔒'}
                </IconChip>
              </div>
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

    </div>
  )
}
