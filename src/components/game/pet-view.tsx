'use client'

import { useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useGame } from '@/lib/game'
import { sfx } from '@/lib/sound'
import {
  petStageIndexOf,
  petStageOf,
  petLevelProgress,
  moodLabel,
  FEED_COST,
  FEED_DAILY_LIMIT,
  MOOD_MAX,
  PET_NAME_SUGGESTIONS,
  PET_MAX_LEVEL,
  storyUnlockLevel,
} from '@/lib/pet'
import type { PetKind } from '@/lib/pet'
import PetAvatar from '@/components/game/pet-avatar'
import { PET_STORIES, STORY_BOOK_TITLE } from '@/lib/pet-stories'
import type { StoryChapter } from '@/lib/pet-stories'

// ---------- 领养流程 ----------
function AdoptFlow() {
  const adoptPet = useGame((s) => s.adoptPet)
  const coins = useGame((s) => s.coins)
  const [kind, setKind] = useState<PetKind | null>(null)
  const [name, setName] = useState('')

  const suggestions = kind ? PET_NAME_SUGGESTIONS[kind] : []

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-28 pt-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <motion.p animate={{ rotate: [0, -6, 6, 0] }} transition={{ repeat: Infinity, duration: 2.4 }} className="text-5xl">
          🥚
        </motion.p>
        <h1 className="mt-2 text-2xl font-black text-orange-600">遇见你的冒险伙伴</h1>
        <p className="mt-1 text-sm font-bold text-gray-500">
          完成学习任务就能帮它长大，还能解锁专属冒险剧情！
        </p>
        {coins >= FEED_COST && (
          <p className="mt-1 text-xs font-bold text-amber-600">🪙 领养后可用金币喂食，让伙伴保持好心情</p>
        )}
      </motion.div>

      {/* 第一步：选择宠物 */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {(
          [
            { kind: 'dog' as PetKind, name: '小狗', desc: '忠诚勇敢\n元气满满', traits: ['蹦蹦跳跳', '爱交朋友', '汪汪加油'] },
            { kind: 'cat' as PetKind, name: '小猫', desc: '聪明优雅\n魔法满满', traits: ['好奇心强', '夜观星象', '喵喵灵巧'] },
          ] as const
        ).map((opt) => {
          const active = kind === opt.kind
          return (
            <motion.button
              key={opt.kind}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                sfx.click()
                setKind(opt.kind)
                setName('')
              }}
              className={`rounded-3xl border-2 bg-white p-4 text-center transition-all ${
                active ? 'border-orange-400 shadow-[0_8px_0_0_rgba(251,146,60,0.4)] ring-4 ring-orange-200' : 'border-gray-200 shadow-[0_5px_0_0_rgba(0,0,0,0.06)]'
              }`}
            >
              <motion.span
                animate={active ? { scale: [1, 1.12, 1], rotate: [0, -6, 6, 0] } : { y: [0, -5, 0] }}
                transition={active ? { duration: 0.6 } : { repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
                className="block"
              >
                <PetAvatar kind={opt.kind} stage={1} size={104} />
              </motion.span>
              <p className="mt-2 text-lg font-black text-gray-800">{opt.name}</p>
              <p className="mt-0.5 whitespace-pre-line text-xs font-bold text-gray-500">{opt.desc}</p>
              <div className="mt-2 flex flex-wrap justify-center gap-1">
                {opt.traits.map((t) => (
                  <span key={t} className={`rounded-full px-2 py-0.5 text-[10px] font-black ${active ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>
                    {t}
                  </span>
                ))}
              </div>
              {active && <p className="mt-2 text-xs font-black text-orange-500">✓ 就决定是它啦！</p>}
            </motion.button>
          )
        })}
      </div>

      {/* 第二步：起名字 */}
      <AnimatePresence>
        {kind && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-3xl border-2 border-amber-200 bg-white p-4">
            <p className="text-sm font-black text-gray-700">给它取个名字吧（最多 8 个字）</p>
            <div className="mt-2 flex items-center gap-2">
              <PetAvatar kind={kind} stage={1} size={40} />
              <input
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 8))}
                placeholder={kind === 'dog' ? '比如：旺旺' : '比如：喵喵'}
                maxLength={8}
                className="w-full flex-1 rounded-2xl border-2 border-gray-200 px-4 py-2.5 font-black text-gray-700 outline-none transition-colors focus:border-orange-400"
              />
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {suggestions.map((n) => (
                <button
                  key={n}
                  onClick={() => {
                    sfx.click()
                    setName(n)
                  }}
                  className={`rounded-full px-3 py-1 text-xs font-black transition-colors ${name === n ? 'bg-orange-500 text-white' : 'bg-amber-50 text-amber-600 hover:bg-amber-100'}`}
                >
                  {n}
                </button>
              ))}
            </div>
            <Button
              onClick={() => {
                if (!kind) return
                sfx.coin()
                adoptPet(kind, name)
              }}
              className="mt-3 w-full rounded-2xl bg-orange-500 py-4 text-base font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] hover:bg-orange-600"
            >
              🎉 领养{name.trim() || (kind === 'dog' ? '旺旺' : '喵喵')}，开始冒险！
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ---------- 剧情阅读弹窗 ----------
function StoryReader({ chapter, petKind, petName, onClose }: { chapter: StoryChapter; petKind: PetKind; petName: string; onClose: () => void }) {
  const markStoryRead = useGame((s) => s.markStoryRead)
  const [idx, setIdx] = useState(0)
  const line = chapter.lines[idx]
  const isLast = idx === chapter.lines.length - 1
  const scrollRef = useRef<HTMLDivElement>(null)

  const next = () => {
    if (isLast) {
      markStoryRead(chapter.id)
      sfx.win()
      onClose()
      return
    }
    sfx.click()
    setIdx((v) => v + 1)
    requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' }))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-3 sm:items-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl overflow-hidden rounded-3xl border-4 border-amber-300 bg-gradient-to-b from-amber-50 to-orange-50 shadow-2xl"
      >
        {/* 章节头 */}
        <div className="flex items-center justify-between border-b-2 border-amber-200 bg-white/70 px-4 py-3">
          <div>
            <p className="text-[10px] font-black tracking-widest text-amber-500">
              《{STORY_BOOK_TITLE[petKind]}》第 {chapter.index} 章
            </p>
            <p className="text-lg font-black text-gray-800">{chapter.title}</p>
          </div>
          <button onClick={onClose} aria-label="关闭剧情" className="rounded-full bg-gray-100 px-2.5 py-1.5 text-sm font-black text-gray-500 transition-transform active:scale-90">
            ✕
          </button>
        </div>

        {/* 对话区 */}
        <div ref={scrollRef} className="max-h-[52vh] min-h-[300px] space-y-2.5 overflow-y-auto px-4 py-4">
          {chapter.lines.slice(0, idx + 1).map((l, i) => (
            <motion.div
              key={`${chapter.id}-${i}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-2 ${l.who === '旁白' ? 'justify-center' : ''}`}
            >
              {l.who !== '旁白' && <span className="shrink-0 text-3xl">{l.emoji}</span>}
              <div className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 ${l.who === '旁白' ? 'bg-white/60 text-center' : 'bg-white shadow-sm'}`}>
                {l.who !== '旁白' && (
                  <p className="text-[11px] font-black text-orange-500">
                    {l.who}
                    {l.who === petName && '（你的伙伴）'}
                  </p>
                )}
                <p className={`text-sm leading-relaxed ${l.who === '旁白' ? 'font-bold text-gray-500' : 'font-bold text-gray-700'}`}>{l.text}</p>
              </div>
              {l.who !== '旁白' && <span className="hidden shrink-0 text-3xl sm:block">&nbsp;</span>}
            </motion.div>
          ))}
        </div>

        {/* 底部推进 */}
        <div className="border-t-2 border-amber-200 bg-white/70 px-4 py-3">
          <div className="mb-2 flex items-center justify-center gap-1">
            {chapter.lines.map((_, i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all ${i <= idx ? 'w-5 bg-orange-400' : 'w-1.5 bg-gray-200'}`} />
            ))}
          </div>
          <Button
            onClick={next}
            className="w-full rounded-2xl bg-orange-500 py-3 font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] hover:bg-orange-600"
          >
            {isLast ? '📖 合上书本，收下这段冒险！' : '下一句 ▶'}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ---------- 宠物主页 ----------
interface HeartParticle {
  id: number
  x: number
  emoji: string
}

export default function PetView() {
  const pet = useGame((s) => s.pet)
  const coins = useGame((s) => s.coins)
  const feedPet = useGame((s) => s.feedPet)
  const [reading, setReading] = useState<StoryChapter | null>(null)
  const [hearts, setHearts] = useState<HeartParticle[]>([])
  const [toast, setToast] = useState<string>('')
  const [bounce, setBounce] = useState(0)
  const heartId = useRef(0)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = (text: string) => {
    setToast(text)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(''), 2200)
  }

  if (!pet) return <AdoptFlow />

  const prog = petLevelProgress(pet.exp)
  const stage = petStageOf(prog.level)
  const stageNo = petStageIndexOf(prog.level)
  const mood = moodLabel(pet.mood)
  const stories = PET_STORIES[pet.kind].map((ch) => ({ ...ch, locked: prog.level < storyUnlockLevel(ch.index) }))
  const readCount = pet.storyRead.length
  const feedLeft = FEED_DAILY_LIMIT - pet.feedCount

  const spawnHearts = () => {
    sfx.click()
    setBounce((v) => v + 1)
    const pool = ['💕', '✨', '🐾', '💖']
    const items: HeartParticle[] = Array.from({ length: 3 }, () => ({
      id: heartId.current++,
      x: Math.round(Math.random() * 120 - 60),
      emoji: pool[Math.floor(Math.random() * pool.length)],
    }))
    setHearts((prev) => [...prev, ...items])
    setTimeout(() => setHearts((prev) => prev.filter((h) => !items.some((i) => i.id === h.id))), 1200)
  }

  const handleFeed = () => {
    if (feedLeft <= 0) {
      showToast(`${pet.name} 今天吃得太饱啦，明天再喂吧～`)
      return
    }
    if (coins < FEED_COST) {
      showToast(`金币不够啦（需要 ${FEED_COST} 🪙），去闯关赚金币吧！`)
      return
    }
    if (feedPet()) {
      sfx.coin()
      spawnHearts()
      showToast(`${pet.name} 吃得香喷喷，心情 +30！`)
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pb-28 pt-4">
      {/* 宠物展示区 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl border-2 border-sky-200 bg-gradient-to-b from-sky-100 via-sky-50 to-emerald-50 p-5 text-center shadow-[0_8px_0_0_rgba(56,189,248,0.3)]"
      >
        {/* 装饰云朵 */}
        <span className="pointer-events-none absolute left-4 top-3 text-2xl opacity-70">☁️</span>
        <span className="pointer-events-none absolute right-6 top-6 text-xl opacity-60">☁️</span>
        <span className="pointer-events-none absolute bottom-3 left-8 text-xl opacity-70">🌿</span>
        <span className="pointer-events-none absolute bottom-4 right-10 text-lg opacity-60">🌸</span>

        {/* 心情气泡 */}
        <div className="mb-1 flex justify-center">
          <motion.div
            key={mood.emoji + pet.mood}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="rounded-2xl bg-white/90 px-3 py-1.5 shadow-sm"
          >
            <p className="text-xs font-black text-gray-600">
              {mood.emoji} {mood.text}
            </p>
          </motion.div>
        </div>

        {/* 宠物本体（全身动画形象，可点击互动） */}
        <button onClick={spawnHearts} aria-label={`摸摸${pet.name}`} className="relative mx-auto block px-14 py-2">
          <motion.div
            key={`${pet.kind}-${stageNo}-${bounce}`}
            animate={{ y: [0, -8, 0], scale: [1, 1.05, 1], rotate: [0, -3, 3, 0] }}
            transition={bounce ? { duration: 0.5 } : { repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            className="drop-shadow-[0_8px_12px_rgba(0,0,0,0.14)]"
          >
            <PetAvatar kind={pet.kind} stage={stageNo} size={176} />
          </motion.div>
          {/* 爱心粒子 */}
          <AnimatePresence>
            {hearts.map((h) => (
              <motion.span
                key={h.id}
                initial={{ opacity: 1, y: 0, x: 0, scale: 0.6 }}
                animate={{ opacity: 0, y: -70, x: h.x, scale: 1.3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                className="pointer-events-none absolute left-1/2 top-2 text-2xl"
              >
                {h.emoji}
              </motion.span>
            ))}
          </AnimatePresence>
        </button>

        <p className="mt-1 text-lg font-black text-gray-800">
          {pet.name}
          <span className="ml-2 text-xs font-black text-sky-500">{stage.name} · {stage.title}</span>
        </p>
        <p className="text-xs font-bold text-gray-400">{stage.desc}</p>

        {/* 等级与经验条 */}
        <div className="mx-auto mt-3 max-w-sm">
          <div className="flex items-center justify-between text-xs font-black text-sky-600">
            <span>Lv.{prog.level}{prog.level >= PET_MAX_LEVEL ? ' · 满级传说！' : ''}</span>
            <span className="text-gray-400">{prog.level >= PET_MAX_LEVEL ? '冒险之心仍在燃烧' : `距离 Lv.${prog.level + 1} 还差 ${prog.need - prog.cur} 经验`}</span>
          </div>
          <div className="mt-1 h-3 overflow-hidden rounded-full bg-sky-100 ring-1 ring-sky-200">
            <motion.div
              animate={{ width: `${Math.round(prog.pct * 100)}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"
            />
          </div>
        </div>
      </motion.div>

      {/* 喂养区 */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-3xl border-2 border-rose-200 bg-white p-4">
          <p className="text-xs font-black text-rose-500">🍖 心情值</p>
          <p className="mt-1 text-2xl font-black tabular-nums text-gray-800">{pet.mood}<span className="text-sm text-gray-400">/{MOOD_MAX}</span></p>
          <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-rose-100">
            <motion.div
              animate={{ width: `${pet.mood}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="h-full rounded-full bg-gradient-to-r from-rose-400 to-orange-400"
            />
          </div>
          <p className="mt-1.5 text-[11px] font-bold leading-snug text-gray-400">每天会慢慢下降（不会饿坏），喂食可恢复</p>
        </div>
        <div className="flex flex-col justify-between rounded-3xl border-2 border-amber-200 bg-white p-4">
          <div>
            <p className="text-xs font-black text-amber-600">🪙 喂食（{FEED_COST} 金币/次）</p>
            <p className="mt-1 text-sm font-black text-gray-700">今日还可喂 {feedLeft} 次</p>
            <p className="text-[11px] font-bold text-gray-400">喂一次心情 +30</p>
          </div>
          <Button
            onClick={handleFeed}
            disabled={feedLeft <= 0 || coins < FEED_COST}
            className="mt-2 w-full rounded-2xl bg-amber-500 py-2.5 text-sm font-black text-white shadow-[0_4px_0_0_rgba(217,119,6,0.5)] hover:bg-amber-600 disabled:opacity-40"
          >
            {feedLeft <= 0 ? '今日已喂饱' : '投喂小零食'}
          </Button>
        </div>
      </motion.div>

      {/* 经验来源提示 */}
      <div className="mt-3 rounded-2xl bg-sky-50 px-4 py-2.5 text-[11px] font-bold leading-relaxed text-sky-700">
        <p className="font-black">💡 {pet.name}的经验来自你的学习：通关 +20/30/40（按星级）· 每日挑战 +25 · 复习完成 +15 · 消灭错题 +3/题 · 签到 +10 · 玩满 20 分钟 +20</p>
      </div>

      {/* 专属剧情 */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-base font-black text-gray-800">
            📚 专属剧情《{STORY_BOOK_TITLE[pet.kind]}》
          </h2>
          <span className="rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-black text-violet-600">
            已读 {readCount}/{PET_STORIES[pet.kind].length}
          </span>
        </div>
        <div className="mt-2 space-y-2">
          {stories.map((ch, i) => {
            const read = pet.storyRead.includes(ch.id)
            const unlockLv = storyUnlockLevel(ch.index)
            return (
              <motion.button
                key={ch.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.04 }}
                whileTap={{ scale: ch.locked ? 1 : 0.97 }}
                disabled={ch.locked}
                onClick={() => {
                  sfx.click()
                  setReading(ch)
                }}
                className={`flex w-full items-center gap-3 rounded-2xl border-2 p-3 text-left transition-colors ${
                  ch.locked ? 'border-gray-100 bg-gray-50' : read ? 'border-emerald-200 bg-emerald-50/60 hover:bg-emerald-50' : 'border-violet-200 bg-white hover:bg-violet-50'
                }`}
              >
                <span className={`shrink-0 text-3xl ${ch.locked ? 'opacity-30 grayscale' : ''}`}>{ch.locked ? '🔒' : read ? '📗' : '📘'}</span>
                <div className="min-w-0 flex-1">
                  <p className={`truncate text-sm font-black ${ch.locked ? 'text-gray-400' : 'text-gray-800'}`}>
                    第 {ch.index} 章 · {ch.locked ? '？？？？？' : ch.title}
                  </p>
                  <p className={`text-[11px] font-bold ${ch.locked ? 'text-gray-400' : read ? 'text-emerald-500' : 'text-violet-500'}`}>
                    {ch.locked ? `宠物 Lv.${unlockLv} 解锁` : read ? '已读完这段冒险' : '新章节！点开阅读'}
                  </p>
                </div>
                {!ch.locked && !read && <span className="shrink-0 rounded-full bg-violet-500 px-2 py-0.5 text-[10px] font-black text-white">NEW</span>}
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* 喂食/互动 toast */}
      <AnimatePresence>
        {toast && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 bottom-24 z-40 mx-auto w-fit max-w-[90vw] rounded-full bg-gray-800/90 px-4 py-2 text-center text-xs font-black text-white shadow-lg"
          >
            {toast}
          </motion.p>
        )}
      </AnimatePresence>

      {/* 剧情阅读弹窗 */}
      <AnimatePresence>
        {reading && <StoryReader chapter={reading} petKind={pet.kind} petName={pet.name} onClose={() => setReading(null)} />}
      </AnimatePresence>
    </div>
  )
}

