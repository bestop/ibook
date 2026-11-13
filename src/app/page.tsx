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
import PetView from '@/components/game/pet-view'
import TextbookPicker from '@/components/game/textbook-picker'
import { getSubject, buildLevelQuestions, buildDailyQuestions } from '@/lib/questions'
import type { SubjectId } from '@/lib/questions'
import { ACHIEVEMENTS, useGame, totalStars } from '@/lib/game'
import { petStageIndexOf, petStageOf, PET_STAGES } from '@/lib/pet'
import type { PetEvent } from '@/lib/pet'
import PetAvatar from '@/components/game/pet-avatar'
import { PET_STORIES, STORY_BOOK_TITLE } from '@/lib/pet-stories'
import { sfx, subscribeSound, getSoundSnapshot, loadSoundPref, setSoundEnabled } from '@/lib/sound'
import UserDialog from '@/components/game/user-dialog'
import IconChip from '@/components/game/icon-chip'
import { alignCloud, cloudProfile, getCloudUISnapshot, startAutoSync, subscribeCloudUI } from '@/lib/cloud'
import { toast } from '@/hooks/use-toast'

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
  | { name: 'pet' }
  | { name: 'quiz'; mode: QuizMode; title: string; emoji: string; items: QuizItem[]; levelId?: string }
  | { name: 'result'; mode: QuizMode; levelId?: string; result: QuizResult }
  | { name: 'wrongbook' }
  | { name: 'achievements' }
  | { name: 'rewards' }

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
  const petEvents = useGame((s) => s.petEvents)
  const dismissPetEvent = useGame((s) => s.dismissPetEvent)
  const pet = useGame((s) => s.pet)
  const [petEvent, setPetEvent] = useState<PetEvent | null>(null)

  // 宠物事件（升级/剧情解锁）逐条弹出：队列里有事件且当前无弹窗时取出第一条
  useEffect(() => {
    if (petEvents.length > 0 && !petEvent) setPetEvent(petEvents[0])
  }, [petEvents, petEvent])

  const closePetEvent = useCallback(() => {
    setPetEvent(null)
    dismissPetEvent()
  }, [dismissPetEvent])

  useEffect(() => {
    loadSoundPref()
    ensureToday()
    signIn()
  }, [ensureToday, signIn])

  // 云端对齐 + 自动同步（登录态下生效；拉到更新的云端档后补一次今日签到，幂等）
  useEffect(() => {
    if (!hydrated) return
    const stop = startAutoSync()
    alignCloud().then((r) => {
      if (r === 'pulled') {
        ensureToday()
        signIn()
        toast({ title: '☁️ 已同步云端进度' })
      } else if (r === 'pushed') {
        toast({ title: '☁️ 本机进度已备份到云端' })
      }
    })
    return stop
  }, [hydrated, ensureToday, signIn])

  // 用户徽章随登录态/同步时间变化重渲染（登录态数据在渲染时从 cloudProfile 读取）
  useSyncExternalStore(subscribeCloudUI, getCloudUISnapshot, () => '')
  const cloudUser = hydrated ? cloudProfile() : null
  const [userOpen, setUserOpen] = useState(false)

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

  // 成就弹窗（跳过已下线的旧成就 ID，避免弹窗队列被卡住）
  const achievementPopup = useMemo(() => {
    for (const id of unseen) {
      const found = ACHIEVEMENTS.find((a) => a.id === id)
      if (found) return found
    }
    return null
  }, [unseen])

  // 队列里全是已下线的旧成就 ID 时自动清空，保持弹窗队列健康
  useEffect(() => {
    if (unseen.length > 0 && !achievementPopup) markSeen()
  }, [unseen, achievementPopup, markSeen])

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-amber-50 to-orange-100">
        <div className="flex flex-col items-center gap-3">
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} className="inline-flex">
            <IconChip tone="sky" size="xl" round>🏝️</IconChip>
          </motion.span>
          <p className="font-black text-orange-500">童学冒险岛加载中…</p>
        </div>
      </div>
    )
  }

  const showTabBar = view.name === 'home' || view.name === 'map' || view.name === 'pet' || view.name === 'wrongbook' || view.name === 'achievements' || view.name === 'rewards'

  const tabs = [
    { key: 'home', label: '科目', emoji: '🏠', tone: 'sky' },
    { key: 'map', label: '闯关地图', emoji: '🏰', tone: 'violet' },
    { key: 'pet', label: '宠物', emoji: '🐾', tone: 'orange' },
    { key: 'rewards', label: '礼物', emoji: '🎁', tone: 'pink' },
    { key: 'wrongbook', label: '错题本', emoji: '📕', tone: 'red' },
    { key: 'achievements', label: '成就墙', emoji: '🏆', tone: 'amber' },
  ] as const

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-amber-50 via-orange-50 to-orange-100">
      {/* 顶部资源栏 */}
      {view.name !== 'quiz' && (
        <header className="sticky top-0 z-40 border-b-2 border-amber-200/70 bg-white/85 backdrop-blur">
          <div className="mx-auto flex w-full max-w-2xl items-center justify-between gap-1 px-1.5 py-2.5 sm:px-2">
            <div className="flex items-center gap-1.5">
              <IconChip tone="sky" size="sm" round>🏝️</IconChip>
              <h1 className="hidden text-lg font-black tracking-tight text-orange-600 sm:block">童学冒险岛</h1>
              <TextbookPicker />
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="gloss-pill shrink-0 whitespace-nowrap rounded-full bg-amber-100 px-1.5 py-1 text-xs font-black text-amber-700 sm:px-2" title="金币（各岛通用，可在礼物屋兑换亲子奖励）">
                🪙 {coins}
              </span>
              <span className="gloss-pill shrink-0 whitespace-nowrap rounded-full bg-orange-100 px-1.5 py-1 text-xs font-black text-orange-700 sm:px-2" title="星星总数（所有科目）">
                ⭐ {stars}
              </span>
              <span className="gloss-pill shrink-0 whitespace-nowrap rounded-full bg-emerald-100 px-1.5 py-1 text-xs font-black text-emerald-700 sm:px-2" title="连续签到">
                🔥 {streak}天
              </span>
              <button
                onClick={toggleSound}
                aria-label="音效开关"
                className="gloss-pill shrink-0 rounded-full bg-gray-100 px-1 py-1 text-xs transition-transform active:scale-90 sm:px-1.5"
              >
                {soundOn ? '🔊' : '🔇'}
              </button>
              {/* 账号徽章：未登录提示登录（微信扫码 / 账号密码）；已登录展示 emoji 头像 + 昵称（与小程序同一账号） */}
              <button
                onClick={() => {
                  sfx.click()
                  setUserOpen(true)
                }}
                aria-label="账号与云端同步"
                title="账号与云端同步"
                className="shrink-0 max-w-[6rem] truncate rounded-full bg-sky-100 px-1.5 py-1 text-xs font-black text-sky-700 transition-transform active:scale-90 sm:px-2"
              >
                {cloudUser ? `${cloudUser.avatarEmoji || '🙂'} ${cloudUser.nickname || '我的账号'}` : '🙂 登录'}
              </button>
              <Dialog open={guideOpen} onOpenChange={setGuideOpen}>
                <DialogTrigger asChild>
                  <button
                    aria-label="使用指南"
                    className="gloss-pill shrink-0 rounded-full bg-violet-100 px-1 py-1 text-xs transition-transform active:scale-90 sm:px-1.5"
                  >
                    👨‍👩‍👧
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto rounded-3xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-lg font-black">
                      <IconChip tone="violet" size="md">👨‍👩‍👧</IconChip> 使用指南
                    </DialogTitle>
                    <DialogDescription className="text-left text-sm font-bold leading-relaxed">
                      覆盖语文、数学、英语一至六年级上下册，共 98 个科目岛、821 关 8210 道精选题，每题配详细解析。左上角可切换年级、册别和版本，建议孩子每天玩 20 分钟。
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                    <div className="rounded-2xl bg-amber-50 p-3">
                      <p className="flex items-center gap-2 font-black text-amber-700"><IconChip tone="sky" size="sm">⏰</IconChip>每天 20 分钟</p>
                      <p>1 关 ≈ 10 题 ≈ 5-8 分钟。推荐「闯 2 关 + 复习错题 + 每日挑战」，98 个科目岛可搭配着玩，时长自动累计。</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 p-3">
                      <p className="flex items-center gap-2 font-black text-emerald-700"><IconChip tone="green" size="sm">🎁</IconChip>奖励与惩罚</p>
                      <p>答对 +10 金币、连击再 +5，通关按星级 +20/50/100；每关 3 颗❤️，答错或超时扣 1 颗，用完闯关失败、本局金币减半，错题自动进错题本、复习答对才能「消灭」。</p>
                    </div>
                    <div className="rounded-2xl bg-violet-50 p-3">
                      <p className="flex items-center gap-2 font-black text-violet-700"><IconChip tone="violet" size="sm">👪</IconChip>礼物屋与宠物</p>
                      <p>金币可在礼物屋兑换亲子奖励，生成兑换券、家长兑现后点「已兑现」；宠物页领养猫狗伙伴，通关、挑战、复习、签到都涨经验，升级会进化。</p>
                    </div>
                    <div className="rounded-2xl bg-sky-50 p-3">
                      <p className="flex items-center gap-2 font-black text-sky-700"><IconChip tone="amber" size="sm">💡</IconChip>小贴士</p>
                      <p>全对 3 星、错 1 题 2 星，鼓励孩子冲 3 星；进度自动保存，登录后云端跨端同步，可与孩子约定金币/星星目标小奖励。</p>
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
            {view.name === 'achievements' && <AchievementsView />}
            {view.name === 'rewards' && <RewardShop />}
            {view.name === 'pet' && <PetView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 底部导航 */}
      {showTabBar && (
        <nav
          className="sticky bottom-0 z-40 border-t-2 border-amber-200/70 bg-white/95 backdrop-blur"
          style={{ paddingBottom: 'max(0.25rem, env(safe-area-inset-bottom))' }}
        >
          <div className="mx-auto grid w-full max-w-2xl grid-cols-6">
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
                  <span className="relative transition-transform">
                    <IconChip tone={tab.tone} size="md" className={active ? 'scale-110' : ''}>
                      {tab.emoji}
                    </IconChip>
                    {tab.key === 'wrongbook' && wrongCount > 0 && (
                      <span className="absolute -right-2.5 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-black leading-none text-white ring-2 ring-white">
                        {wrongCount > 99 ? '99+' : wrongCount}
                      </span>
                    )}
                  </span>
                  {tab.label}
                  {active && <span className="absolute inset-x-4 top-0 h-0.5 rounded-full bg-[#58cc02]" />}
                </button>
              )
            })}
          </div>
        </nav>
      )}

      {/* 账号与云端同步对话框（微信扫码/账号密码登录 / 资料与同步状态） */}
      <UserDialog open={userOpen} onOpenChange={setUserOpen} />

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
              <motion.span animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 1.6 }} className="flex justify-center">
                <IconChip tone="amber" size="xl" round>{achievementPopup.emoji}</IconChip>
              </motion.span>
              <p className="mt-2 text-xs font-black tracking-widest text-amber-600">🎉 成就解锁</p>
              <p className="mt-1 text-xl font-black text-gray-800">{achievementPopup.name}</p>
              <p className="mt-1 text-sm font-bold text-gray-500">{achievementPopup.desc}</p>
              <Button
                onClick={() => {
                  sfx.coin()
                  markSeen()
                }}
                className="mt-4 w-full rounded-2xl bg-[#58cc02] py-3 font-black text-white shadow-[0_4px_0_0_#58a700] hover:bg-[#6fe113]"
              >
                太棒了！收下 🪙
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* 宠物升级/剧情解锁弹窗 */}
      <AnimatePresence>
        {petEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4"
            onClick={closePetEvent}
          >
            <motion.div
              initial={{ scale: 0.5, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xs rounded-3xl border-4 border-sky-300 bg-gradient-to-b from-sky-50 to-emerald-50 p-6 text-center shadow-2xl"
            >
              {petEvent.type === 'levelup' ? (
                <>
                  <motion.div animate={{ scale: [1, 1.12, 1], rotate: [0, -5, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="flex justify-center drop-shadow-[0_8px_12px_rgba(0,0,0,0.12)]">
                    <PetAvatar kind={petEvent.petKind} stage={petStageIndexOf(petEvent.level)} size={112} />
                  </motion.div>
                  <p className="mt-2 text-xs font-black tracking-widest text-sky-600">🐾 宠物升级</p>
                  <p className="mt-1 text-xl font-black text-gray-800">
                    {petEvent.petName} 升到 Lv.{petEvent.level}！
                  </p>
                  <p className="mt-1 text-sm font-bold text-gray-500">
                    {PET_STAGES.some((st) => st.minLevel === petEvent.level)
                      ? `进化为「${petStageOf(petEvent.level).name} · ${petStageOf(petEvent.level).title}」！`
                      : '每天学习都能让它慢慢变强哦！'}
                  </p>
                  <Button
                    onClick={closePetEvent}
                    className="mt-4 w-full rounded-2xl bg-sky-500 py-3 font-black text-white shadow-[0_4px_0_0_rgba(14,165,233,0.5)] hover:bg-sky-600"
                  >
                    和 {petEvent.petName} 一起加油！
                  </Button>
                </>
              ) : (
                <>
                  {(() => {
                    const ch = PET_STORIES[petEvent.petKind].find((c) => c.id === petEvent.chapterId)
                    return (
                      <>
                        <motion.span animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="flex justify-center">
                          <IconChip tone="violet" size="xl" round>📖</IconChip>
                        </motion.span>
                        <p className="mt-2 text-xs font-black tracking-widest text-violet-600">✨ 解锁新剧情</p>
                        <p className="mt-1 text-lg font-black text-gray-800">《{STORY_BOOK_TITLE[petEvent.petKind]}》第 {ch?.index ?? '?'} 章</p>
                        <p className="mt-1 text-base font-black text-violet-500">{ch?.title ?? '神秘的新冒险'}</p>
                        <p className="mt-1 text-sm font-bold text-gray-500">{pet?.name ?? '你的伙伴'}想给你讲这段冒险故事！</p>
                        <Button
                          onClick={() => {
                            sfx.coin()
                            closePetEvent()
                            setView({ name: 'pet' })
                          }}
                          className="mt-4 w-full rounded-2xl bg-violet-500 py-3 font-black text-white shadow-[0_4px_0_0_rgba(139,92,246,0.5)] hover:bg-violet-600"
                        >
                          📖 去读故事
                        </Button>
                      </>
                    )
                  })()}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
