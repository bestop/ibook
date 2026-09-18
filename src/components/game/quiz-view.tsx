'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { QUESTIONS_PER_LEVEL, TIME_PER_QUESTION, LIVES } from '@/lib/questions'
import { useGame, coinForAnswer } from '@/lib/game'
import { sfx } from '@/lib/sound'
import type { Question } from '@/lib/questions'

export interface QuizItem {
  question: Question
  options: string[]
  answer: number
}

export interface QuizResult {
  total: number
  answered: number
  correct: number
  coinsEarned: number
  finished: boolean // true=完整跑完（通关/复习完成），false=生命耗尽中途失败
  wrongIds: string[]
}

export type QuizMode = 'level' | 'daily' | 'review'

interface QuizViewProps {
  title: string
  emoji: string
  mode: QuizMode
  items: QuizItem[]
  onExit: () => void
  onFinish: (r: QuizResult) => void
}

const LETTERS = ['A', 'B', 'C', 'D']

export default function QuizView({ title, emoji, mode, items, onExit, onFinish }: QuizViewProps) {
  const recordAnswer = useGame((s) => s.recordAnswer)
  const removeWrong = useGame((s) => s.removeWrong)
  const grantCombo = useGame((s) => s.grantCombo)
  const addTodaySeconds = useGame((s) => s.addTodaySeconds)

  const [idx, setIdx] = useState(0)
  const [lives, setLives] = useState(LIVES)
  const [combo, setCombo] = useState(0)
  const [maxCombo, setMaxCombo] = useState(0)
  const [coins, setCoins] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const [shake, setShake] = useState(false)
  const [gainFloat, setGainFloat] = useState<string | null>(null)

  const answeredRef = useRef(false)
  const coinsRef = useRef(0)
  const correctCount = useRef(0)
  const wrongIds = useRef<string[]>([])

  const current = items[idx]
  const total = items.length
  const isLast = idx >= total - 1

  // 学习时长累计（每秒 +1，仅答题中）
  useEffect(() => {
    const timer = setInterval(() => addTodaySeconds(1), 1000)
    return () => clearInterval(timer)
  }, [addTodaySeconds])

  const finish = useCallback(
    (finished: boolean) => {
      onFinish({
        total,
        answered: idx + (answeredRef.current ? 1 : 0),
        correct: correctCount.current,
        coinsEarned: coinsRef.current,
        finished,
        wrongIds: [...wrongIds.current],
      })
    },
    [idx, onFinish, total]
  )

  const answer = useCallback(
    (choice: number | null) => {
      if (answeredRef.current || !current) return
      answeredRef.current = true
      setSelected(choice)
      const correct = choice !== null && choice === current.answer
      recordAnswer(current.question.id, correct, mode === 'review')

      if (correct) {
        correctCount.current += 1
        const newCombo = combo + 1
        setCombo(newCombo)
        setMaxCombo((m) => Math.max(m, newCombo))
        grantCombo(newCombo)
        const gain = mode === 'review' ? 5 : coinForAnswer(newCombo)
        coinsRef.current += gain
        setCoins(coinsRef.current)
        setGainFloat(`+${gain} 金币`)
        if (newCombo >= 3) sfx.combo()
        else sfx.correct()
        if (mode === 'review') {
          removeWrong(current.question.id)
        }
      } else {
        setCombo(0)
        wrongIds.current.push(current.question.id)
        setLives((l) => l - 1)
        setShake(true)
        setTimeout(() => setShake(false), 500)
        sfx.wrong()
      }
      setTimeout(() => setGainFloat(null), 1200)
    },
    [combo, current, grantCombo, mode, recordAnswer, removeWrong]
  )

  // 倒计时（超时判定放在 setTimeout 异步回调中，避免级联渲染）
  useEffect(() => {
    if (answeredRef.current) return
    const t = setTimeout(() => {
      if (timeLeft <= 1) {
        answer(null) // 时间耗尽，视为答错
      } else {
        setTimeLeft((v) => v - 1)
        if (timeLeft <= 7) sfx.tick()
      }
    }, 1000)
    return () => clearTimeout(t)
  }, [timeLeft, answer])

  const next = () => {
    if (lives <= 0) {
      finish(false)
      return
    }
    if (isLast) {
      finish(true)
      return
    }
    answeredRef.current = false
    setSelected(null)
    setTimeLeft(TIME_PER_QUESTION)
    setIdx((i) => i + 1)
    sfx.click()
  }

  if (!current) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <span className="text-5xl">🤔</span>
        <p className="text-lg text-gray-500">没有可用的题目</p>
        <Button onClick={onExit}>返回</Button>
      </div>
    )
  }

  const answered = selected !== null
  const isCorrect = answered && selected === current.answer
  const timeRatio = timeLeft / TIME_PER_QUESTION

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 px-3 pb-28 pt-3 sm:gap-4 sm:pt-5">
      {/* 顶部 HUD */}
      <div className="flex items-center justify-between gap-2">
        <Button variant="outline" size="sm" className="rounded-xl border-2 font-bold" onClick={onExit}>
          ← 退出
        </Button>
        <div className="flex min-w-0 items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 shadow-sm">
          <span className="truncate text-xs font-bold text-gray-500">{emoji} {title}</span>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: LIVES }).map((_, i) => (
            <motion.span
              key={i}
              animate={i < lives ? { scale: [1, 1.15, 1] } : { scale: 1 }}
              className={`text-xl transition-opacity ${i < lives ? '' : 'opacity-25 grayscale'}`}
            >
              ❤️
            </motion.span>
          ))}
        </div>
      </div>

      {/* 进度 + 时间 */}
      <div className="flex items-center gap-3">
        <span className="shrink-0 text-sm font-black text-orange-600">
          {idx + 1}/{total}
        </span>
        <Progress value={((idx + (answered ? 1 : 0)) / total) * 100} className="h-3 flex-1" />
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-sm font-black tabular-nums ${
            timeRatio > 0.5 ? 'bg-emerald-100 text-emerald-700' : timeRatio > 0.25 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700 animate-pulse'
          }`}
        >
          ⏰ {timeLeft}s
        </span>
      </div>

      {/* 连击 */}
      <AnimatePresence>
        {combo >= 3 && (
          <motion.div
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            className="mx-auto rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-1 text-sm font-black text-white shadow-lg"
          >
            🔥 连击 ×{combo} · 每题额外 +5 金币！
          </motion.div>
        )}
      </AnimatePresence>

      {/* 题目卡 */}
      <motion.div
        key={current.question.id + idx}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: shake ? [0, -10, 10, -6, 6, 0] : 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border-2 border-orange-200 bg-white p-4 shadow-[0_6px_0_0_rgba(251,146,60,0.35)] sm:p-6"
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-lg bg-orange-100 px-2 py-0.5 text-xs font-bold text-orange-700">
            {current.question.tag}
          </span>
          {current.question.type === 'judge' && (
            <span className="rounded-lg bg-teal-100 px-2 py-0.5 text-xs font-bold text-teal-700">判断题</span>
          )}
        </div>
        <p className="text-lg font-bold leading-relaxed text-gray-800 sm:text-xl">{current.question.q}</p>

        {/* 选项 */}
        <div className={`mt-4 grid gap-2.5 ${current.question.type === 'judge' ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {current.options.map((opt, i) => {
            const base =
              'relative flex min-h-[52px] items-center gap-2 rounded-2xl border-2 px-3.5 py-2.5 text-left font-bold transition-all active:scale-[0.98]'
            let cls = 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50 text-gray-700'
            if (answered) {
              if (i === current.answer) cls = 'border-emerald-400 bg-emerald-50 text-emerald-700 shadow-[0_0_0_3px_rgba(52,211,153,0.25)]'
              else if (i === selected) cls = 'border-rose-400 bg-rose-50 text-rose-600'
              else cls = 'border-gray-200 bg-gray-50 text-gray-400 opacity-60'
            }
            return (
              <button
                key={i}
                disabled={answered}
                onClick={() => answer(i)}
                className={`${base} ${cls}`}
              >
                {current.question.type !== 'judge' && (
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-black ${answered && i === current.answer ? 'bg-emerald-400 text-white' : answered && i === selected ? 'bg-rose-400 text-white' : 'bg-orange-100 text-orange-600'}`}>
                    {LETTERS[i]}
                  </span>
                )}
                <span className="text-[15px] leading-snug sm:text-base">{opt}</span>
              </button>
            )
          })}
        </div>

        {/* 解析 */}
        <AnimatePresence>
          {answered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="overflow-hidden"
            >
              <div
                className={`mt-4 rounded-2xl border p-3.5 ${
                  isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'
                }`}
              >
                <p className={`mb-1 font-black ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {isCorrect ? (combo >= 3 ? '🔥 太棒了，连击中！' : '✅ 答对啦！') : selected === null ? '⏰ 时间到！' : '💪 答错了，看解析记住它'}
                </p>
                <p className="text-sm leading-relaxed text-gray-600">{current.question.explain}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 金币飘字 */}
      <AnimatePresence>
        {gainFloat && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -30, scale: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed left-1/2 top-1/3 z-50 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-2 font-black text-white shadow-lg"
          >
            🪙 {gainFloat}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 底部：金币 + 下一题 */}
      <div className="fixed inset-x-0 bottom-16 z-40 border-t-2 border-orange-100 bg-white/95 p-3 backdrop-blur sm:bottom-0">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-amber-100 px-3 py-1.5 text-sm font-black text-amber-700">
              🪙 本局 {coins}
            </span>
            {maxCombo >= 2 && (
              <span className="rounded-full bg-orange-100 px-3 py-1.5 text-sm font-black text-orange-600">
                🔥 ×{maxCombo}
              </span>
            )}
          </div>
          {answered && (
            <Button
              onClick={next}
              className={`min-w-[110px] rounded-2xl px-6 py-3 text-base font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] ${
                lives <= 0
                  ? 'bg-rose-500 hover:bg-rose-600'
                  : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              {lives <= 0 ? '查看结果 →' : isLast ? '完成 →' : '下一题 →'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
