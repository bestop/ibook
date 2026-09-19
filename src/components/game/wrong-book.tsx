'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ALL_QUESTIONS, shuffle, subjectOfQuestion } from '@/lib/questions'
import { useGame } from '@/lib/game'
import { sfx } from '@/lib/sound'
import type { QuizItem } from './quiz-view'

interface WrongBookProps {
  onStartReview: (items: QuizItem[]) => void
  onBack: () => void
}

const SUBJECT_BADGE = {
  chinese1: 'bg-pink-100 text-pink-700',
  chinese2: 'bg-rose-100 text-rose-700',
  chinese3: 'bg-amber-100 text-amber-700',
  chinese4: 'bg-rose-100 text-rose-700',
  chinese: 'bg-orange-100 text-orange-700',
  chinese6: 'bg-blue-100 text-blue-700',
  chinese54: 'bg-green-100 text-green-700',
  math1: 'bg-indigo-100 text-indigo-700',
  math2: 'bg-violet-100 text-violet-700',
  math3: 'bg-lime-100 text-lime-700',
  math4: 'bg-violet-100 text-violet-700',
  math: 'bg-emerald-100 text-emerald-700',
  math6: 'bg-red-100 text-red-700',
  math54: 'bg-indigo-100 text-indigo-700',
  english1: 'bg-fuchsia-100 text-fuchsia-700',
  english2: 'bg-sky-100 text-sky-700',
  english3: 'bg-cyan-100 text-cyan-700',
  english4: 'bg-teal-100 text-teal-700',
  english: 'bg-sky-100 text-sky-700',
  english6: 'bg-sky-100 text-sky-700',
} as const

export default function WrongBook({ onStartReview, onBack }: WrongBookProps) {
  const wrongBook = useGame((s) => s.wrongBook)

  const wrongQuestions = useMemo(
    () => ALL_QUESTIONS.filter((q) => q.id in wrongBook).map((q) => ({ q, count: wrongBook[q.id] })),
    [wrongBook]
  )

  const startReview = () => {
    const items: QuizItem[] = shuffle(wrongQuestions).map(({ q }) => {
      if (q.type === 'judge') return { question: q, options: q.options, answer: q.answer }
      const idx = shuffle(q.options.map((_, i) => i))
      return { question: q, options: idx.map((i) => q.options[i]), answer: idx.indexOf(q.answer) }
    })
    sfx.click()
    onStartReview(items)
  }

  if (wrongQuestions.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 px-4 pb-24 pt-16 text-center">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.6 }}
          className="text-7xl"
        >
          🏅
        </motion.span>
        <h2 className="text-xl font-black text-gray-700">错题本空空的！</h2>
        <p className="max-w-xs text-sm font-bold leading-relaxed text-gray-500">
          你已经消灭了所有错题，太厉害啦！继续保持，向 3 星关卡发起冲击吧！
        </p>
        <Button
          onClick={() => {
            sfx.click()
            onBack()
          }}
          variant="outline"
          className="mt-2 rounded-2xl border-2 px-6 py-4 font-black"
        >
          ← 返回
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-3 pb-24 pt-4">
      <div className="mb-4 rounded-3xl border-2 border-rose-300 bg-gradient-to-br from-rose-50 to-orange-50 p-4 shadow-[0_6px_0_0_rgba(244,63,94,0.25)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-black text-rose-700">📕 错题集中营</h2>
            <p className="mt-0.5 text-xs font-bold text-rose-500">
              共 {wrongQuestions.length} 道错题待消灭 · 复习时答对 1 题就能消灭它，还有金币拿！
            </p>
          </div>
          <Button
            onClick={startReview}
            className="shrink-0 rounded-2xl bg-rose-500 px-5 py-3 font-black text-white shadow-[0_4px_0_0_rgba(244,63,94,0.4)] hover:bg-rose-600"
          >
            🎯 开始复习
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {wrongQuestions.map(({ q, count }, i) => {
          const subj = subjectOfQuestion(q.id)
          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i }}
              className="rounded-2xl border-2 border-gray-200 bg-white p-4"
            >
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <span className={`rounded-md px-1.5 py-0.5 text-[11px] font-black ${SUBJECT_BADGE[subj.id]}`}>
                  {subj.emoji} {subj.name}·{subj.badge ?? subj.grade.slice(0, 2)}
                </span>
                <span className="rounded-md bg-orange-100 px-1.5 py-0.5 text-[11px] font-black text-orange-700">{q.tag}</span>
                <span className="rounded-md bg-rose-100 px-1.5 py-0.5 text-[11px] font-black text-rose-600">
                  错了 {count} 次
                </span>
              </div>
              <p className="text-[15px] font-bold leading-relaxed text-gray-800">{q.q}</p>
              <p className="mt-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">
                ✅ 正确答案：{q.options[q.answer]}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-500">💡 {q.explain}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
