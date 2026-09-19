'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { subjectsFor } from '@/lib/questions'
import { useGame } from '@/lib/game'
import type { TextbookChoice } from '@/lib/game'
import { sfx } from '@/lib/sound'

export const GRADE_LABELS: Record<number, string> = { 1: '一年级', 2: '二年级', 3: '三年级', 4: '四年级', 5: '五年级', 6: '六年级' }
export const TERM_LABELS: Record<'a' | 'b', string> = { a: '上册', b: '下册' }

// 可选的年级（含未开岛的占位）
const GRADE_OPTIONS: { num: number; open: boolean }[] = [
  { num: 1, open: true },
  { num: 2, open: true },
  { num: 3, open: true },
  { num: 4, open: true },
  { num: 5, open: true },
  { num: 6, open: true },
]

type PubOptionKey = 'all' | 'rj' | 'rj54' | 'she'

const BASE_PUBLISHER_OPTIONS: { key: PubOptionKey; label: string }[] = [
  { key: 'all', label: '全部出版社' },
  { key: 'she', label: '上海教育出版社' },
  { key: 'rj', label: '人民教育出版社（统编语文）' },
]

// 六年级语文分六三制与五四学制两个版本
const G6_PUBLISHER_OPTIONS: { key: PubOptionKey; label: string }[] = [
  { key: 'all', label: '全部版本' },
  { key: 'rj', label: '六三制 · 人民教育出版社（统编）' },
  { key: 'rj54', label: '五四学制 · 统编教材' },
]

const publisherOptionsFor = (gradeNum: number) => (gradeNum === 6 ? G6_PUBLISHER_OPTIONS : BASE_PUBLISHER_OPTIONS)

/**
 * 教材选择器（顶部栏左上角）：
 * 按钮「📚 四年级·上册 ▼」+ 弹窗（年级 / 上下册 / 出版社 + 实时预览）
 * 选中状态存于全局 game store（localStorage 持久化），首页科目岛随之联动。
 */
export default function TextbookPicker() {
  const textbook = useGame((s) => s.textbook)
  const setTextbook = useGame((s) => s.setTextbook)
  const [open, setOpen] = useState(false)

  const visibleSubjects = subjectsFor(textbook)

  const pick = (patch: Partial<TextbookChoice>) => {
    sfx.click()
    let next = { ...textbook, ...patch }
    // 版本选项随年级变化：切年级后若当前版本在新年级不可用，自动回退到全部
    if (patch.gradeNum !== undefined && patch.gradeNum !== textbook.gradeNum) {
      const validKeys = publisherOptionsFor(next.gradeNum).map((p) => p.key)
      if (!validKeys.includes(next.publisher as PubOptionKey)) next = { ...next, publisher: 'all' }
    }
    setTextbook(next)
  }

  const gradeText = GRADE_LABELS[textbook.gradeNum] ?? `${textbook.gradeNum}年级`

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.94 }}
        onClick={() => {
          sfx.click()
          setOpen(true)
        }}
        className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border-2 border-violet-200 bg-white px-2.5 py-1 text-xs font-black text-violet-600 shadow-[0_3px_0_0_rgba(139,92,246,0.25)] transition-transform active:translate-y-[2px] active:shadow-none sm:px-3 sm:text-sm"
        aria-label="选择年级、册别和出版社"
        title="点击切换年级 / 上下册 / 出版社"
      >
        <span className="hidden sm:inline">📚</span>
        <span>
          {gradeText}·{TERM_LABELS[textbook.term]}
        </span>
        <span className="hidden text-[10px] text-violet-400 sm:inline">▼</span>
      </motion.button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[80vh] overflow-y-auto rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-black">📚 选择你的教材</DialogTitle>
            <DialogDescription className="text-left text-xs font-bold">
              选好年级、册别和出版社，对应的科目岛就会出现！
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* 年级 */}
            <div>
              <p className="mb-2 text-sm font-black text-gray-700">🎒 年级</p>
              <div className="flex flex-wrap gap-2">
                {GRADE_OPTIONS.map((g) => {
                  const active = textbook.gradeNum === g.num
                  if (!g.open) {
                    return (
                      <span
                        key={g.num}
                        className="rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-2 text-sm font-black text-gray-300"
                      >
                        {GRADE_LABELS[g.num]} 🚧
                      </span>
                    )
                  }
                  return (
                    <button
                      key={g.num}
                      onClick={() => pick({ gradeNum: g.num })}
                      className={`rounded-2xl border-2 px-4 py-2 text-sm font-black transition-transform active:translate-y-[2px] ${
                        active
                          ? 'border-violet-400 bg-violet-500 text-white shadow-[0_3px_0_0_rgba(124,58,237,0.45)]'
                          : 'border-gray-200 bg-white text-gray-600 shadow-sm'
                      }`}
                    >
                      {GRADE_LABELS[g.num]}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 上下册 */}
            <div>
              <p className="mb-2 text-sm font-black text-gray-700">🗓️ 上下册</p>
              <div className="flex flex-wrap gap-2">
                {(['a', 'b'] as const).map((term) => {
                  const active = textbook.term === term
                  if (term === 'b') {
                    return (
                      <span
                        key={term}
                        className="rounded-2xl border-2 border-gray-200 bg-gray-50 px-4 py-2 text-sm font-black text-gray-300"
                      >
                        下册 🚧
                      </span>
                    )
                  }
                  return (
                    <button
                      key={term}
                      onClick={() => pick({ term })}
                      className={`rounded-2xl border-2 px-4 py-2 text-sm font-black transition-transform active:translate-y-[2px] ${
                        active
                          ? 'border-violet-400 bg-violet-500 text-white shadow-[0_3px_0_0_rgba(124,58,237,0.45)]'
                          : 'border-gray-200 bg-white text-gray-600 shadow-sm'
                      }`}
                    >
                      上册
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 版本/出版社 */}
            <div>
              <p className="mb-2 text-sm font-black text-gray-700">🏢 {textbook.gradeNum === 6 ? '学制版本' : '出版社'}</p>
              {textbook.gradeNum === 6 && (
                <p className="mb-2 text-[11px] font-bold text-violet-400">六年级语文有「六三制」和「五四学制」两个版本，选好版本再开岛哦～</p>
              )}
              <div className="flex flex-col gap-2">
                {publisherOptionsFor(textbook.gradeNum).map((p) => {
                  const active = textbook.publisher === p.key
                  return (
                    <button
                      key={p.key}
                      onClick={() => pick({ publisher: p.key })}
                      className={`flex items-center justify-between rounded-2xl border-2 px-4 py-2.5 text-sm font-black transition-transform active:translate-y-[2px] ${
                        active
                          ? 'border-violet-400 bg-violet-500 text-white shadow-[0_3px_0_0_rgba(124,58,237,0.45)]'
                          : 'border-gray-200 bg-white text-gray-600 shadow-sm'
                      }`}
                    >
                      <span>{p.label}</span>
                      {active && <span>✓</span>}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 当前组合预览 */}
            <div className="rounded-2xl bg-amber-50 p-3">
              <p className="text-xs font-black text-amber-700">
                🗺️ {GRADE_LABELS[textbook.gradeNum] ?? textbook.gradeNum + '年级'}
                {TERM_LABELS[textbook.term]}
                （{textbook.publisher === 'all' ? publisherOptionsFor(textbook.gradeNum)[0].label : publisherOptionsFor(textbook.gradeNum).find((p) => p.key === textbook.publisher)?.label ?? '全部版本'}）
                已开岛 {visibleSubjects.length} 个科目岛 · 共 {visibleSubjects.reduce((n, s) => n + s.units.length, 0)} 关
              </p>
              <p className="mt-1 text-[11px] font-bold text-amber-500">
                {visibleSubjects.map((s) => `${s.emoji}${s.name}`).join(' · ') || '🚧 暂无教材，换个组合试试～'}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
