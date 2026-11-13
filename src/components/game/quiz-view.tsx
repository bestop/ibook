'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { QUESTIONS_PER_LEVEL, TIME_PER_QUESTION, LIVES } from '@/lib/questions'
import { useGame, coinForAnswer } from '@/lib/game'
import { sfx } from '@/lib/sound'
import { speak, stopSpeak, ttsSupported } from '@/lib/tts'
import * as cheers from '@/lib/cheers'
import IconChip from '@/components/game/icon-chip'
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
  const pet = useGame((s) => s.pet)

  const [idx, setIdx] = useState(0)
  const [lives, setLives] = useState(LIVES)
  const [combo, setCombo] = useState(0)
  const [maxCombo, setMaxCombo] = useState(0)
  const [coins, setCoins] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [timedOut, setTimedOut] = useState(false) // 超时也算已作答，避免卡死在本题
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  // 答错抖动（与小程序同构）
  const [shake, setShake] = useState(false)
  // 退出二次确认（借鉴聪聪学堂「退出二次确认」）：已有作答进度时拦截直接退出，防手滑丢进度
  const [confirmExit, setConfirmExit] = useState(false)
  const [gainFloat, setGainFloat] = useState<string | null>(null)
  // 反馈标题（借鉴聪聪学堂 FeedbackPanel 随机鼓励语，答对夸奖/答错安慰轮换，与小程序同构）
  const [feedbackTitle, setFeedbackTitle] = useState('')
  // 宠物应援（借鉴聪聪学堂 Mascot reaction：答题后宠物随对错变化应援句）
  const [petCheerText, setPetCheerText] = useState('')
  const [canSpeak, setCanSpeak] = useState(false) // Web Speech API 可用性（挂载后探测，避免水合不一致）
  const [tipOpen, setTipOpen] = useState(true)
  // 连击里程碑（借鉴聪聪学堂 ComboOverlay：3/5/10 连击居中大徽章，与小程序同构）
  const [comboMilestone, setComboMilestone] = useState<number | null>(null)
  const comboMilestoneTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const answeredRef = useRef(false)
  const coinsRef = useRef(0)
  const correctCount = useRef(0)
  const wrongIds = useRef<string[]>([])

  // 组件卸载时清理里程碑定时器（避免离页后 setState）
  useEffect(() => {
    return () => {
      if (comboMilestoneTimer.current) {
        clearTimeout(comboMilestoneTimer.current)
        comboMilestoneTimer.current = null
      }
    }
  }, [])

  const current = items[idx]
  const total = items.length
  const isLast = idx >= total - 1

  // 本关考点去重（最多 4 个，真实来自题库 tag，不剧透具体题目）
  const levelTags = useMemo(() => {
    const seen: string[] = []
    for (const it of items) {
      if (it.question.tag && !seen.includes(it.question.tag)) seen.push(it.question.tag)
    }
    return seen.slice(0, 4)
  }, [items])

  // 学习时长累计（每秒 +1，仅答题中）
  useEffect(() => {
    const timer = setInterval(() => addTodaySeconds(1), 1000)
    return () => clearInterval(timer)
  }, [addTodaySeconds])

  // 语音可用性探测 + 离开页面时停止朗读
  useEffect(() => {
    setCanSpeak(ttsSupported())
    return () => stopSpeak()
  }, [])

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
      // 本题后的连击数：提到外层作用域，反馈标题也需要（答对夸奖随连击档位变化）
      const newCombo = combo + 1

      if (correct) {
        correctCount.current += 1
        setCombo(newCombo)
        setMaxCombo((m) => Math.max(m, newCombo))
        grantCombo(newCombo)
        const gain = mode === 'review' ? 5 : coinForAnswer(newCombo)
        coinsRef.current += gain
        setCoins(coinsRef.current)
        setGainFloat(`+${gain} 金币`)
        if (newCombo === 3 || newCombo === 5 || newCombo === 10) {
          // 连击里程碑：居中大徽章，弹入→上浮→淡出后自动清理（与小程序同构）
          if (comboMilestoneTimer.current) clearTimeout(comboMilestoneTimer.current)
          setComboMilestone(newCombo)
          comboMilestoneTimer.current = setTimeout(() => setComboMilestone(null), 1400)
        }
        if (newCombo >= 3) sfx.combo()
        else sfx.correct()
        if (mode === 'review') {
          removeWrong(current.question.id)
        }
      } else {
        setCombo(0)
        wrongIds.current.push(current.question.id)
        // 复习模式不扣命（借鉴聪聪学堂「错题复习不扣爱心且奖励经验值」）：
        // 复习是巩固不是惩罚，让孩子完整刷完复习题；普通关/每日挑战保持 3 命规则不变
        if (mode !== 'review') setLives((l) => l - 1)
        setShake(true)
        setTimeout(() => setShake(false), 500)
        sfx.wrong()
      }
      if (choice === null) setTimedOut(true) // 超时：显示解析与“下一题”按钮
      setTimeout(() => setGainFloat(null), 1200)
      // 随机反馈标题（答对夸奖/答错安慰/超时固定）+ 宠物应援（与小程序同构）
      setFeedbackTitle(correct ? cheers.praise(newCombo) : choice === null ? '⏰ 时间到！' : cheers.comfort())
      setPetCheerText(pet ? (correct ? cheers.petCheer(pet.name) : cheers.petComfort(pet.name)) : '')
    },
    [combo, current, grantCombo, mode, pet, recordAnswer, removeWrong]
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
    stopSpeak() // 切题时停止上一题的朗读
    // 复习模式无生命限制，永远走完整卷（普通关/每日挑战仍按 3 命判定）
    if (lives <= 0 && mode !== 'review') {
      finish(false)
      return
    }
    if (isLast) {
      finish(true)
      return
    }
    answeredRef.current = false
    setSelected(null)
    setTimedOut(false)
    setTimeLeft(TIME_PER_QUESTION)
    setFeedbackTitle('')
    setPetCheerText('')
    setIdx((i) => i + 1)
    sfx.click()
  }

  if (!current) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <IconChip tone="gray" size="lg" className="h-20 w-20 text-5xl">🤔</IconChip>
        <p className="text-lg text-gray-500">没有可用的题目</p>
        <Button onClick={onExit}>返回</Button>
      </div>
    )
  }

  const answered = selected !== null || timedOut
  const isCorrect = answered && selected === current.answer
  const timeRatio = timeLeft / TIME_PER_QUESTION

  return (
    <div className="mx-auto flex min-h-[100svh] w-full max-w-2xl flex-col gap-3 px-3 pb-28 pt-3 sm:gap-4 sm:pt-5">
      {/* 顶部 HUD */}
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl border-2 font-bold"
          onClick={() => {
            // 已有作答进度 → 先二次确认（借鉴聪聪学堂）；尚未作答直接退出
            if (idx > 0 || answeredRef.current) setConfirmExit(true)
            else onExit()
          }}
        >
          ← 退出
        </Button>
        <div className="flex min-w-0 items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 shadow-[inset_0_2px_0_rgba(255,255,255,0.5),inset_0_-2px_0_rgba(0,0,0,0.06)]">
          <IconChip tone="gray" size="xs">{emoji}</IconChip>
          <span className="truncate text-xs font-bold text-gray-500">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          {mode === 'review' ? (
            // 复习模式不扣命：红心位改展示「答对即掌握」徽标（与小程序同构）
            <span className="gloss-pill rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">📚 答对即掌握</span>
          ) : (
            Array.from({ length: LIVES }).map((_, i) => (
              <motion.span
                key={i}
                animate={i < lives ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                className={`transition-opacity ${i < lives ? '' : 'opacity-25 grayscale'}`}
              >
                <IconChip tone="red" size="xs" round>❤️</IconChip>
              </motion.span>
            ))
          )}
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

      {/* 主内容：剩余视口内垂直居中（短题卡不再悬顶，重心稳定） */}
      <div className="flex flex-1 flex-col justify-center gap-3 sm:gap-4">
      {/* 本关考点锦囊（仅第一题上方展示，可收起） */}
      {idx === 0 && tipOpen && levelTags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border-2 border-sky-200 bg-sky-50 px-4 py-2.5"
        >
          <div className="flex items-center justify-between gap-2">
            <p className="flex min-w-0 items-center gap-2 text-xs font-black text-sky-700">
              <IconChip tone="sky" size="sm">📚</IconChip>
              <span className="truncate">本关考点：{levelTags.join(' · ')}</span>
            </p>
            <button
              onClick={() => {
                sfx.click()
                setTipOpen(false)
              }}
              className="shrink-0 rounded-full bg-sky-100 px-2.5 py-0.5 text-[11px] font-black text-sky-500 transition-transform active:scale-90"
            >
              知道了
            </button>
          </div>
          <p className="mt-0.5 text-[11px] font-bold text-sky-400">先看一眼考点，答题时想想每道题属于哪一类！</p>
        </motion.div>
      )}

      {/* 连击 */}
      <AnimatePresence>
        {combo >= 3 && (
          <motion.div
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            className="mx-auto rounded-full bg-gradient-to-r from-[#ff9600] to-[#f43f5e] px-4 py-1 text-sm font-black text-white shadow-lg"
          >
            🔥 连击 ×{combo} · 每题额外 +5 金币！
          </motion.div>
        )}
      </AnimatePresence>

      {/* 连击里程碑：3/5/10 连击居中大徽章（借鉴聪聪学堂 ComboOverlay，与小程序同构） */}
      <AnimatePresence>
        {comboMilestone !== null && (
          <motion.div
            key={comboMilestone}
            initial={{ scale: 0.2, rotate: -15, opacity: 0, y: 0 }}
            animate={{
              scale: [0.2, 1.25, 1, 1],
              rotate: [-15, 5, 0, 0],
              opacity: [0, 1, 1, 0],
              y: [0, 0, 0, -50],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, times: [0, 0.25, 0.5, 1] }}
            className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center"
          >
            <div
              className="rounded-3xl px-7 py-4 text-3xl font-extrabold text-white sm:text-4xl"
              style={{
                background: 'linear-gradient(135deg, #FFC800 0%, #FF9600 50%, #FF4B4B 100%)',
                boxShadow: '0 8px 0 0 rgba(180,90,0,0.4), 0 20px 40px rgba(255,150,0,0.4)',
                textShadow: '0 2px 0 rgba(0,0,0,0.2)',
              }}
            >
              🔥 连击 ×{comboMilestone}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 题目卡 */}
      <motion.div
        key={current.question.id + idx}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: shake ? [0, -10, 10, -6, 6, 0] : 0 }}
        transition={{ duration: 0.4 }}
        className="dl-card p-4 sm:p-6"
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-lg bg-orange-100 px-2 py-0.5 text-xs font-bold text-orange-700">
            {current.question.tag}
          </span>
          {current.question.type === 'judge' && (
            <span className="rounded-lg bg-teal-100 px-2 py-0.5 text-xs font-bold text-teal-700">判断题</span>
          )}
          {canSpeak && (
            <button
              onClick={() => {
                const opts = current.options.map((o, i) => (current.question.type === 'judge' ? o : `${LETTERS[i]}，${o}`)).join('；')
                speak(`${current.question.q}。选项：${opts}`)
              }}
              aria-label="朗读题目和选项"
              className="ml-auto shrink-0 transition-transform active:scale-90"
            >
              <IconChip tone="sky" size="sm" round>🔊</IconChip>
            </button>
          )}
        </div>
        <p className="text-lg font-bold leading-relaxed text-gray-800 sm:text-xl">{current.question.q}</p>

        {/* 选项 */}
        <div className={`mt-4 grid gap-2.5 ${current.question.type === 'judge' ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {current.options.map((opt, i) => {
            const base =
              'relative flex min-h-[52px] items-center gap-2 rounded-2xl border-2 px-3.5 py-2.5 text-left font-bold transition-all active:scale-[0.98]'
            let cls = 'border-[#e5e5e5] bg-white hover:border-[#89e219] hover:bg-[#dbf8c5]/40 text-gray-700'
            if (answered) {
              if (i === current.answer) cls = 'border-[#58cc02] bg-[#dbf8c5] text-[#3f8f00]'
              else if (i === selected) cls = 'border-[#ff4b4b] bg-[#ffdfe0] text-[#d63131]'
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
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-black ${answered && i === current.answer ? 'bg-[#58cc02] text-white' : answered && i === selected ? 'bg-[#ff4b4b] text-white' : 'bg-[#e5f5ff] text-[#1899d6]'}`}>
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
                <div className={`mb-1 flex items-start justify-between gap-2`}>
                  <p className={`font-black ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {feedbackTitle || (isCorrect ? (combo >= 3 ? '🔥 太棒了，连击中！' : '✅ 答对啦！') : selected === null ? '⏰ 时间到！' : '💪 答错了，看解析记住它')}
                  </p>
                  {canSpeak && (
                    <button
                      onClick={() => speak(current.question.explain)}
                      aria-label="朗读解析"
                      className="shrink-0 rounded-full bg-white/70 px-2 py-0.5 text-xs transition-transform active:scale-90"
                    >
                      🔊 听解析
                    </button>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{current.question.explain}</p>
                {/* 宠物应援条：解析卡内轻量气泡（借鉴聪聪学堂 Mascot reaction，与小程序同构） */}
                {petCheerText && (
                  <div className="mt-2 rounded-xl bg-violet-50 px-3 py-2 text-sm font-bold text-violet-600">
                    {cheers.petFace(pet?.kind)} {petCheerText}
                  </div>
                )}
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

      </div>

      {/* 底部：金币 + 下一题（答题时无底部导航，直接贴底并适配安全区） */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[#e5e5e5] bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="dl-sticker gloss-pill rounded-full px-3 py-1.5 text-sm font-black text-[#3c3c3c]">
              🪙 本局 {coins}
            </span>
            {maxCombo >= 2 && (
              <span className="dl-sticker gloss-pill rounded-full px-3 py-1.5 text-sm font-black text-[#3c3c3c]">
                🔥 ×{maxCombo}
              </span>
            )}
          </div>
          {answered && (
            <Button
              onClick={next}
              className={`min-w-[110px] rounded-2xl px-6 py-3 text-base font-black text-white shadow-[0_4px_0_0_#d63131] ${
                lives <= 0 && mode !== 'review'
                  ? 'bg-[#ff4b4b] hover:bg-[#ff6060]'
                  : 'bg-[#58cc02] shadow-[0_4px_0_0_#58a700] hover:bg-[#6fe113]'
              }`}
            >
              {lives <= 0 && mode !== 'review' ? '查看结果 →' : isLast ? '完成 →' : '下一题 →'}
            </Button>
          )}
        </div>
      </div>

      {/* 退出二次确认（借鉴聪聪学堂「退出二次确认」，与小程序 enableAlertBeforeUnload 同语义） */}
      <Dialog open={confirmExit} onOpenChange={setConfirmExit}>
        <DialogContent className="max-w-sm rounded-3xl">
          <DialogHeader>
            <DialogTitle>退出闯关？</DialogTitle>
            <DialogDescription>本局进度不会保存哦，确定要离开吗？</DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-row gap-2">
            <Button variant="outline" className="flex-1 rounded-2xl font-bold" onClick={() => setConfirmExit(false)}>
              继续答题
            </Button>
            <Button variant="destructive" className="flex-1 rounded-2xl font-bold" onClick={onExit}>
              退出
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
