'use client'

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import HomeView from '@/components/game/home-view'
import MapView from '@/components/game/map-view'
import QuizView, { type QuizItem, type QuizMode, type QuizResult } from '@/components/game/quiz-view'
import ResultView from '@/components/game/result-view'
import WrongBook from '@/components/game/wrong-book'
import AchievementsView from '@/components/game/achievements-view'
import RewardShop from '@/components/game/reward-shop'
import TextbookPicker from '@/components/game/textbook-picker'
import { getSubject, buildLevelQuestions, buildDailyQuestions, shuffle, ALL_QUESTIONS } from '@/lib/questions'
import type { SubjectId } from '@/lib/questions'
import { ACHIEVEMENTS, useGame, totalStars } from '@/lib/game'
import { sfx, subscribeSound, getSoundSnapshot, loadSoundPref, setSoundEnabled } from '@/lib/sound'

const emptySubscribe = () => () => {}

function useHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}

type View =
  | { name: 'home' }
  | { name: 'map' }
  | { name: 'quiz'; mode: QuizMode; title: string; emoji: string; items: QuizItem[]; levelId?: string }
  | { name: 'result'; mode: QuizMode; levelId?: string; result: QuizResult }
  | { name: 'wrongbook' }
  | { name: 'achievements' }
  | { name: 'rewards' }

function buildReviewItems(ids: string[]): QuizItem[] {
  const qs = ALL_QUESTIONS.filter((q) => ids.includes(q.id))
  return shuffle(qs).map((q) => {
    if (q.type === 'judge') return { question: q, options: q.options, answer: q.answer }
    const idx = shuffle(q.options.map((_, i) => i))
    return { question: q, options: idx.map((i) => q.options[i]), answer: idx.indexOf(q.answer) }
  })
}

export default function Home() {
  const hydrated = useHydrated()
  const [view, setView] = useState<View>({ name: 'home' })
  const [subject, setSubject] = useState<SubjectId>('chinese')
  const soundOn = useSyncExternalStore(subscribeSound, getSoundSnapshot, () => true)
  const [guideOpen, setGuideOpen] = useState(false)

  const coins = useGame((s) => s.coins)
  const levels = useGame((s) => s.levels)
  const streak = useGame((s) => s.streak)
  const wrongBook = useGame((s) => s.wrongBook)
  const unseen = useGame((s) => s.unseenAchievements)
  const signIn = useGame((s) => s.signIn)
  const markSeen = useGame((s) => s.markAchievementsSeen)
  const ensureToday = useGame((s) => s.ensureToday)

  useEffect(() => {
    loadSoundPref()
    ensureToday()
    signIn()
  }, [ensureToday, signIn])

  const stars = totalStars(levels)
  const wrongCount = Object.keys(wrongBook).length

  const selectSubject = useCallback((id: SubjectId) => {
    setSubject(id)
    setView({ name: 'map' })
  }, [])

  const startLevel = useCallback(
    (unitId: string) => {
      const subjectData = getSubject(subject)
      const unit = subjectData.units.find((u) => u.id === unitId)
      setView({
        name: 'quiz',
        mode: 'level',
        levelId: unitId,
        title: `${unit?.name}·${unit?.title}` || '',
        emoji: subjectData.emoji,
        items: buildLevelQuestions(subject, unitId),
      })
    },
    [subject]
  )

  const startDaily = useCallback(() => {
    const subjectData = getSubject(subject)
    const unlocked = subjectData.units.filter((u) => levels[`${subject}:${u.id}`]?.completed).map((u) => u.id)
    setView({
      name: 'quiz',
      mode: 'daily',
      title: '每日挑战',
      emoji: '🎲',
      items: buildDailyQuestions(subject, unlocked.length ? unlocked : [subjectData.units[0].id]),
    })
  }, [subject, levels])

  const startReview = useCallback((items: QuizItem[]) => {
    setView({ name: 'quiz', mode: 'review', title: '错题大作战', emoji: '📕', items })
  }, [])

  const handleFinish = useCallback((result: QuizResult, mode: QuizMode, levelId?: string) => {
    setView({ name: 'result', mode, levelId, result })
  }, [])

  const retry = useCallback(() => {
    if (view.name !== 'result') return
    if (view.mode === 'review') {
      setView((v) => (v.name === 'result' && v.mode === 'review' ? { name: 'home' } : v))
      setView({ name: 'wrongbook' })
      return
    }
    if (view.mode === 'level' && view.levelId) {
      startLevel(view.levelId)
      return
    }
    startDaily()
  }, [view, startLevel, startDaily])

  const toggleSound = () => {
    const next = !soundOn
    setSoundEnabled(next)
    if (next) sfx.click()
  }

  // 成就弹窗
  const achievementPopup = useMemo(() => {
    if (unseen.length === 0) return null
    return ACHIEVEMENTS.find((a) => a.id === unseen[0]) || null
  }, [unseen])

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-amber-50 to-orange-100">
        <div className="flex flex-col items-center gap-3">
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} className="text-6xl">
            🏝️
          </motion.span>
          <p className="font-black text-orange-500">学习闯关岛加载中…</p>
        </div>
      </div>
    )
  }

  const showTabBar = view.name === 'home' || view.name === 'map' || view.name === 'wrongbook' || view.name === 'achievements' || view.name === 'rewards'

  const tabs = [
    { key: 'home', label: '选科目', emoji: '🏠' },
    { key: 'map', label: '闯关地图', emoji: '🏰' },
    { key: 'rewards', label: '礼物屋', emoji: '🎁' },
    { key: 'wrongbook', label: `错题本${wrongCount ? `(${wrongCount})` : ''}`, emoji: '📕' },
    { key: 'achievements', label: '成就墙', emoji: '🏆' },
  ] as const

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-amber-50 via-orange-50 to-orange-100">
      {/* 顶部资源栏 */}
      {view.name !== 'quiz' && (
        <header className="sticky top-0 z-40 border-b-2 border-amber-200/70 bg-white/85 backdrop-blur">
          <div className="mx-auto flex w-full max-w-2xl items-center justify-between gap-2 px-3 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl">🏝️</span>
              <h1 className="hidden text-lg font-black tracking-tight text-orange-600 sm:block">学习闯关岛</h1>
              <TextbookPicker />
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="shrink-0 whitespace-nowrap rounded-full bg-amber-100 px-2 py-1 text-xs font-black text-amber-700 sm:px-2.5" title="金币（各岛通用，可在礼物屋兑换亲子奖励）">
                🪙 {coins}
              </span>
              <span className="shrink-0 whitespace-nowrap rounded-full bg-orange-100 px-2 py-1 text-xs font-black text-orange-700 sm:px-2.5" title="星星总数（所有科目）">
                ⭐ {stars}
              </span>
              <span className="shrink-0 whitespace-nowrap rounded-full bg-emerald-100 px-2 py-1 text-xs font-black text-emerald-700 sm:px-2.5" title="连续签到">
                🔥 {streak}天
              </span>
              <button
                onClick={toggleSound}
                aria-label="音效开关"
                className="shrink-0 rounded-full bg-gray-100 px-1.5 py-1 text-xs transition-transform active:scale-90 sm:px-2"
              >
                {soundOn ? '🔊' : '🔇'}
              </button>
              <Dialog open={guideOpen} onOpenChange={setGuideOpen}>
                <DialogTrigger asChild>
                  <button
                    aria-label="家长指南"
                    className="shrink-0 rounded-full bg-violet-100 px-1.5 py-1 text-xs transition-transform active:scale-90 sm:px-2"
                  >
                    👨‍👩‍👧
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto rounded-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-black">👨‍👩‍👧 家长使用指南</DialogTitle>
                    <DialogDescription className="text-left text-sm font-bold leading-relaxed">
                      「学习闯关岛」覆盖一、二、三、四、五年级上册共 15 个科目岛（一二年级英语为沪教版 2024 新教材）：
                      🌸 一年级语文（8 关，2024 秋版）· 🧸 一年级数学（7 关）· 🐤 一年级英语（14 关，含 3 个语音角）·
                      🐸 二年级语文（8 关）· 🪀 二年级数学（8 关）· 🐣 二年级英语（11 关）·
                      🌱 三年级语文（8 关）· 🪁 三年级数学（9 关，含七巧板）· 🌈 三年级英语（11 关）·
                      🐉 四年级语文（8 关）· 🚀 四年级数学（9 关，含抽屉原理）· ⛵ 四年级英语（11 关）·
                      🏮 五年级语文（8 关）· 🧮 五年级数学（8 关）· 🔤 五年级英语（11 关）。
                      语文为统编教材，数学/英语为沪教版（上海教育出版社，一二年级英语为 2024 新教材，含 IPA 语音角）。共 139 关 1390 道精选题，全部带详细解析。顶部左上角可切换年级、册别和出版社，建议每天玩 20 分钟。
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                    <div className="rounded-2xl bg-amber-50 p-3">
                      <p className="font-black text-amber-700">⏰ 每天 20 分钟怎么安排？</p>
                      <p>1 关 ≈ 10 题 ≈ 5-8 分钟。推荐「闯 2 关（约 12 分钟）+ 复习错题（约 5 分钟）+ 每日挑战（约 3 分钟）」，十五个科目岛可以搭配着玩。今日学习时长会自动累计。</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 p-3">
                      <p className="font-black text-emerald-700">🎁 奖励机制</p>
                      <p>· 答对 1 题 +10 金币；连击 3 次以上每题再 +5<br />· 通关奖励：1 星 +20 / 2 星 +50 / 3 星 +100<br />· 每日任务（闯关/20分钟/复习错题）各有金币奖励<br />· 每日签到 +10 金币，32 个成就徽章等你解锁</p>
                    </div>
                    <div className="rounded-2xl bg-rose-50 p-3">
                      <p className="font-black text-rose-700">⚖️ 惩罚机制</p>
                      <p>· 每关 3 颗❤️：答错或超时（每题 40 秒）扣 1 颗<br />· ❤️ 用完闯关失败，本局金币减半<br />· 答错的题自动收进错题本，复习答对才能「消灭」<br />· 每科都是过一关解锁下一关</p>
                    </div>
                    <div className="rounded-2xl bg-violet-50 p-3">
                      <p className="font-black text-violet-700">👪 亲子奖励·礼物屋</p>
                      <p>· 孩子用金币在「礼物屋」兑换亲子奖励（亲子阅读、看动画片 15 分钟、公园游乐场、假日出游等）<br />· 兑换后生成「兑换券」，请家长尽快兑现约定，并在券包里点「已兑现」<br />· 支持家长添加自定义奖励和价格，建议和孩子一起商定<br />· 各科目进度分开记录，金币、错题本、成就、礼物屋通用；左上角可切换年级/册别/出版社</p>
                    </div>
                    <div className="rounded-2xl bg-violet-50/60 p-3">
                      <p className="font-black text-violet-700">💡 给家长的小建议</p>
                      <p>· 星级规则：全对 3 星，错 1 题 2 星，错 2 题 1 星——鼓励孩子冲 3 星<br />· 可以和孩子约定：金币/星星达到目标可获得小奖励<br />· 各科目进度分开记录，金币、错题本、成就、礼物屋是通用的<br />· 所有进度自动保存在本设备浏览器中，无需注册</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>
      )}

      {/* 主内容 */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={view.name + (view.name === 'quiz' ? view.levelId + view.mode : '')}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {view.name === 'home' && <HomeView onSelectSubject={selectSubject} />}
            {view.name === 'map' && (
              <MapView subject={subject} onStartLevel={startLevel} onStartDaily={startDaily} onBackHome={() => setView({ name: 'home' })} />
            )}
            {view.name === 'quiz' && (
              <QuizView
                title={view.title}
                emoji={view.emoji}
                mode={view.mode}
                items={view.items}
                onExit={() => setView({ name: 'map' })}
                onFinish={(r) => handleFinish(r, view.mode, view.levelId)}
              />
            )}
            {view.name === 'result' && (
              <ResultView
                subject={subject}
                mode={view.mode}
                levelId={view.levelId}
                result={view.result}
                onRetry={retry}
                onHome={() => setView({ name: 'map' })}
              />
            )}
            {view.name === 'wrongbook' && <WrongBook onStartReview={startReview} onBack={() => setView({ name: 'home' })} />}
            {view.name === 'achievements' && <AchievementsView onBack={() => setView({ name: 'home' })} />}
            {view.name === 'rewards' && <RewardShop />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 底部导航 */}
      {showTabBar && (
        <nav
          className="sticky bottom-0 z-40 border-t-2 border-amber-200/70 bg-white/95 backdrop-blur"
          style={{ paddingBottom: 'max(0.25rem, env(safe-area-inset-bottom))' }}
        >
          <div className="mx-auto grid w-full max-w-2xl grid-cols-5">
            {tabs.map((tab) => {
              const active = view.name === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    sfx.click()
                    setView({ name: tab.key } as View)
                  }}
                  className={`relative flex flex-col items-center gap-0.5 py-3 text-xs font-black transition-colors ${
                    active ? 'text-orange-600' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <span className={`text-2xl transition-transform ${active ? 'scale-110' : ''}`}>{tab.emoji}</span>
                  {tab.label}
                  {active && <span className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-orange-500" />}
                </button>
              )
            })}
          </div>
        </nav>
      )}

      {/* 成就解锁弹窗 */}
      <AnimatePresence>
        {achievementPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            onClick={() => markSeen()}
          >
            <motion.div
              initial={{ scale: 0.5, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xs rounded-3xl border-4 border-amber-300 bg-gradient-to-b from-amber-50 to-orange-50 p-6 text-center shadow-2xl"
            >
              <motion.p animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.6 }} className="text-6xl">
                {achievementPopup.emoji}
              </motion.p>
              <p className="mt-2 text-xs font-black tracking-widest text-amber-600">🎉 成就解锁</p>
              <p className="mt-1 text-xl font-black text-gray-800">{achievementPopup.name}</p>
              <p className="mt-1 text-sm font-bold text-gray-500">{achievementPopup.desc}</p>
              <Button
                onClick={() => {
                  sfx.coin()
                  markSeen()
                }}
                className="mt-4 w-full rounded-2xl bg-orange-500 py-3 font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] hover:bg-orange-600"
              >
                太棒了！收下 🪙
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
