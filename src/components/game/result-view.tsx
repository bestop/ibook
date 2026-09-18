'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { UNITS } from '@/lib/questions'
import { useGame, coinForLevel } from '@/lib/game'
import { sfx } from '@/lib/sound'
import type { QuizResult, QuizMode } from './quiz-view'

interface ResultViewProps {
  mode: QuizMode
  levelId?: string
  result: QuizResult
  onRetry: () => void
  onHome: () => void
}

export default function ResultView({ mode, levelId, result, onRetry, onHome }: ResultViewProps) {
  const finishLevel = useGame((s) => s.finishLevel)
  const coins = useGame((s) => s.coins)
  const [stars, setStars] = useState(0)
  const [payout, setPayout] = useState(0)
  const [levelBonus, setLevelBonus] = useState(0)
  const [penalty, setPenalty] = useState(false)
  const settledRef = useRef(false)

  const passed = result.finished
  const unitIndex = levelId ? UNITS.findIndex((u) => u.id === levelId) : -1
  const nextUnit = unitIndex >= 0 && unitIndex < UNITS.length - 1 ? UNITS[unitIndex + 1] : null

  useEffect(() => {
    if (settledRef.current) return
    settledRef.current = true

    let s = 0
    let bonus = 0
    let pay = result.coinsEarned
    let penalized = false

    if (mode === 'level' && levelId && passed) {
      s = result.correct === result.total ? 3 : result.correct >= result.total - 1 ? 2 : 1
      bonus = coinForLevel(s)
      finishLevel(levelId, s)
    }
    if (!passed && mode !== 'review') {
      // 惩罚：失败金币减半
      pay = Math.floor(pay / 2)
      penalized = true
    }
    if (mode === 'daily' && passed) {
      bonus = 20 // 每日挑战完成奖励
    }
    if (mode === 'review' && passed) {
      bonus = 10 // 复习完成奖励
    }

    setStars(s)
    setLevelBonus(bonus)
    setPayout(pay)
    setPenalty(penalized)

    // 发放金币到账户
    const st = useGame.getState()
    useGame.setState({ coins: st.coins + pay + bonus })

    if (passed) {
      sfx.win()
      const delays = s > 0 ? [0, 300, 600].slice(0, s) : []
      delays.forEach((d) => setTimeout(() => sfx.star(delays.indexOf(d)), d + 500))
    } else {
      sfx.lose()
    }
  }, [finishLevel, mode, levelId, passed, result])

  const title = passed
    ? mode === 'level'
      ? '🎉 闯关成功！'
      : mode === 'daily'
        ? '🎲 挑战完成！'
        : '🎯 复习完成！'
    : mode === 'review'
      ? '💪 复习中断'
      : '😅 挑战失败'

  const encourage = passed
    ? ['太棒了！继续保持！', '知识就是力量！', '你真是语文小达人！', '哇，进步神速！'][Math.floor(Math.random() * 4)]
    : '失败是成功之母，看完解析再来一次！'

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-4 pb-28 pt-8">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full rounded-3xl border-2 border-orange-200 bg-white p-6 text-center shadow-[0_8px_0_0_rgba(251,146,60,0.35)] sm:p-8"
      >
        <h1 className={`text-2xl font-black sm:text-3xl ${passed ? 'text-orange-600' : 'text-rose-500'}`}>
          {title}
        </h1>

        {/* 星星 */}
        {mode === 'level' && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                initial={{ scale: 0, rotate: -60 }}
                animate={stars > i ? { scale: 1, rotate: 0 } : { scale: 0.6, opacity: 0.2 }}
                transition={{ delay: 0.5 + i * 0.3, type: 'spring', stiffness: 260 }}
                className="text-5xl sm:text-6xl"
                style={stars > i ? { filter: 'drop-shadow(0 0 8px rgba(251,191,36,0.8))' } : { opacity: 0.2 }}
              >
                {stars > i ? '⭐' : '☆'}
              </motion.span>
            ))}
          </div>
        )}

        <p className="mt-3 text-sm font-bold text-gray-500">{encourage}</p>

        {/* 金币结算 */}
        <div className="mt-5 rounded-2xl bg-amber-50 p-4">
          <p className="text-xs font-black uppercase tracking-wide text-amber-600">金币结算</p>
          <div className="mt-2 flex flex-col gap-1.5 text-sm font-bold text-gray-600">
            <div className="flex justify-between">
              <span>🪙 答题所得</span>
              <span className="tabular-nums">+{penalty ? result.coinsEarned : payout}</span>
            </div>
            {levelBonus > 0 && (
              <div className="flex justify-between text-amber-700">
                <span>{mode === 'level' ? `⭐ 通关奖励（${stars} 星）` : mode === 'daily' ? '🎲 挑战完成奖励' : '🎯 复习完成奖励'}</span>
                <span className="tabular-nums">+{levelBonus}</span>
              </div>
            )}
            {penalty && (
              <div className="flex justify-between text-rose-600">
                <span>💔 生命耗尽 · 金币减半惩罚</span>
                <span className="tabular-nums">−{result.coinsEarned - payout}</span>
              </div>
            )}
            <div className="mt-1 flex justify-between border-t border-amber-200 pt-2 text-base font-black text-amber-700">
              <span>本次共获得</span>
              <span className="tabular-nums">+{payout + levelBonus} 🪙</span>
            </div>
            <p className="text-right text-xs font-bold text-gray-400">账户总金币：{coins}</p>
          </div>
        </div>

        {/* 答题数据 */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-2xl bg-emerald-50 p-3">
            <p className="text-xl font-black text-emerald-600">{result.correct}/{result.answered}</p>
            <p className="text-xs font-bold text-gray-500">答对题数</p>
          </div>
          <div className="rounded-2xl bg-orange-50 p-3">
            <p className="text-xl font-black text-orange-600">
              {result.answered ? Math.round((result.correct / result.answered) * 100) : 0}%
            </p>
            <p className="text-xs font-bold text-gray-500">正确率</p>
          </div>
          <div className={`rounded-2xl p-3 ${result.wrongIds.length ? 'bg-rose-50' : 'bg-gray-50'}`}>
            <p className={`text-xl font-black ${result.wrongIds.length ? 'text-rose-600' : 'text-gray-500'}`}>
              {result.wrongIds.length}
            </p>
            <p className="text-xs font-bold text-gray-500">错题收录</p>
          </div>
        </div>

        {result.wrongIds.length > 0 && (
          <p className="mt-3 rounded-xl bg-rose-50 px-3 py-2 text-xs font-bold text-rose-500">
            📌 答错的题已经收进「错题本」了，去复习答对就能消灭它们！
          </p>
        )}
      </motion.div>

      {/* 操作按钮 */}
      <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
        <Button
          onClick={onRetry}
          className="rounded-2xl bg-orange-500 px-8 py-5 text-base font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] hover:bg-orange-600"
        >
          🔁 {passed ? '再玩一次' : '再来挑战'}
        </Button>
        {passed && mode === 'level' && nextUnit && (
          <Button
            onClick={onHome}
            className="rounded-2xl bg-emerald-500 px-8 py-5 text-base font-black text-white shadow-[0_4px_0_0_rgba(16,185,129,0.5)] hover:bg-emerald-600"
          >
            🏰 回地图闯下一关
          </Button>
        )}
        <Button
          onClick={onHome}
          variant="outline"
          className="rounded-2xl border-2 border-gray-300 px-8 py-5 text-base font-black text-gray-600"
        >
          🏠 返回地图
        </Button>
      </div>
    </div>
  )
}
