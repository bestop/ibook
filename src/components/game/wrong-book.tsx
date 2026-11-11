'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ALL_QUESTIONS, shuffle, subjectOfQuestion } from '@/lib/questions'
import { useGame, todayStr, srsBoxOf } from '@/lib/game'
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
  chinese1b: 'bg-pink-100 text-pink-700',
  chinese2b: 'bg-rose-100 text-rose-700',
  chinese3b: 'bg-amber-100 text-amber-700',
  chinese4b: 'bg-teal-100 text-teal-700',
  chinese5b: 'bg-lime-100 text-lime-700',
  chinese6b: 'bg-blue-100 text-blue-700',
  chinese54b: 'bg-green-100 text-green-700',
  math1rjb: 'bg-orange-100 text-orange-700',
  math2rjb: 'bg-emerald-100 text-emerald-700',
  math3rjb: 'bg-red-100 text-red-700',
  math4rjb: 'bg-amber-100 text-amber-700',
  math5rjb: 'bg-blue-100 text-blue-700',
  math6rjb: 'bg-red-100 text-red-700',
  math1b: 'bg-indigo-100 text-indigo-700',
  math2b: 'bg-violet-100 text-violet-700',
  math3b: 'bg-lime-100 text-lime-700',
  math4b: 'bg-violet-100 text-violet-700',
  math5b: 'bg-emerald-100 text-emerald-700',
  math54b: 'bg-indigo-100 text-indigo-700',
  math1: 'bg-indigo-100 text-indigo-700',
  math2: 'bg-violet-100 text-violet-700',
  math3: 'bg-lime-100 text-lime-700',
  math4: 'bg-violet-100 text-violet-700',
  math: 'bg-emerald-100 text-emerald-700',
  math6: 'bg-red-100 text-red-700',
  math54: 'bg-indigo-100 text-indigo-700',
  math1rj: 'bg-orange-100 text-orange-700',
  math2rj: 'bg-emerald-100 text-emerald-700',
  math3rj: 'bg-red-100 text-red-700',
  math4rj: 'bg-amber-100 text-amber-700',
  math5rj: 'bg-blue-100 text-blue-700',
  english1: 'bg-fuchsia-100 text-fuchsia-700',
  english2: 'bg-sky-100 text-sky-700',
  english3: 'bg-cyan-100 text-cyan-700',
  english4: 'bg-teal-100 text-teal-700',
  english: 'bg-sky-100 text-sky-700',
  english6: 'bg-sky-100 text-sky-700',
  english1rj: 'bg-pink-100 text-pink-700',
  english2rj: 'bg-amber-100 text-amber-700',
  english3rj: 'bg-orange-100 text-orange-700',
  english4rj: 'bg-lime-100 text-lime-700',
  english5rj: 'bg-indigo-100 text-indigo-700',
  english6rj: 'bg-violet-100 text-violet-700',
} as const

export default function WrongBook({ onStartReview, onBack }: WrongBookProps) {
  const wrongBook = useGame((s) => s.wrongBook)
  const wrongLastAt = useGame((s) => s.wrongLastAt)
  const wrongBox = useGame((s) => s.wrongBox || {})
  const wrongNextAt = useGame((s) => s.wrongNextAt || {})
  const today = todayStr()

  // SRS 间隔调度排序（借鉴聪聪学堂 srs.ts Leitner 3 盒，与小程序 quiz.srsSortList 同构）：
  // 1) 到期题优先（nextAt 缺失或 <= 今天）：盒低优先 → 越久未错优先 → 错次多者优先
  // 2) 未到期补位：最近到期优先 → 盒低优先
  // 旧档无 SRS 字段时视作「盒 1 + 立即到期」，排序退化与历史行为一致（向后兼容）
  const wrongQuestions = useMemo(() => {
    const list = ALL_QUESTIONS.filter((q) => q.id in wrongBook).map((q) => ({
      q,
      count: wrongBook[q.id],
      lastAt: (wrongLastAt || {})[q.id] || '',
      box: srsBoxOf((wrongBox || {})[q.id]),
      nextAt: (wrongNextAt || {})[q.id] || '',
    }))
    const due = list.filter((it) => !it.nextAt || it.nextAt <= today)
    const later = list.filter((it) => !!it.nextAt && it.nextAt > today)
    due.sort((a, b) => {
      if (a.box !== b.box) return a.box - b.box
      if (a.lastAt !== b.lastAt) return a.lastAt < b.lastAt ? -1 : 1
      return b.count - a.count
    })
    later.sort((a, b) => {
      if (a.nextAt !== b.nextAt) return a.nextAt < b.nextAt ? -1 : 1
      return a.box - b.box
    })
    return [...due, ...later]
  }, [wrongBook, wrongLastAt, wrongBox, wrongNextAt, today])

  // 薄弱考点 Top3：聚合错题 tag 频次（对标聪聪学堂掌握度闭环，数据真实来自错题本）
  const weakTags = useMemo(() => {
    const m = new Map<string, number>()
    for (const { q } of wrongQuestions) {
      if (q.tag) m.set(q.tag, (m.get(q.tag) || 0) + 1)
    }
    return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3)
  }, [wrongQuestions])

  const startReview = () => {
    // 与小程序对齐：SRS 到期优先抽 10 题为一轮复习（错题不足 10 道则全部）；
    // wrongQuestions 已按「到期优先→未到期补位」排好，直接取前 10，不再随机洗牌
    const items: QuizItem[] = wrongQuestions
      .slice(0, 10)
      .map(({ q }) => {
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
      <Button
        size="sm"
        variant="outline"
        onClick={() => {
          sfx.click()
          onBack()
        }}
        className="mb-3 rounded-xl border-2 font-black"
      >
        ← 返回
      </Button>
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
            <span className="flex items-center gap-2">
              开始复习
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-black ring-1 ring-white/40">
                先练容易忘的 {Math.min(10, wrongQuestions.length)} 题
              </span>
            </span>
          </Button>
        </div>
      </div>

      {/* 薄弱考点 Top3 */}
      {weakTags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 rounded-2xl border-2 border-rose-200 bg-rose-50 px-4 py-3"
        >
          <p className="text-xs font-black text-rose-600">🎯 薄弱考点 · 优先消灭它们！</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {weakTags.map(([tag, n]) => (
              <span key={tag} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-black text-rose-500 shadow-sm">
                {tag} ×{n}
              </span>
            ))}
          </div>
          <p className="mt-1.5 text-[11px] font-bold text-rose-400">这些考点你答错的次数最多，复习时重点留意～</p>
        </motion.div>
      )}

      <div className="flex flex-col gap-3">
        {wrongQuestions.map(({ q, count, nextAt }, i) => {
          const subj = subjectOfQuestion(q.id)
          const due = !nextAt || nextAt <= today
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
                {/* 间隔状态徽标（SRS 间隔调度，与复习组卷/小程序同规则） */}
                {due ? (
                  <span className="rounded-md bg-rose-100 px-1.5 py-0.5 text-[11px] font-black text-rose-600">🔁 今日该练</span>
                ) : (
                  <span className="rounded-md bg-indigo-100 px-1.5 py-0.5 text-[11px] font-black text-indigo-600">
                    🌙 {nextAt.slice(5)} 该练
                  </span>
                )}
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
