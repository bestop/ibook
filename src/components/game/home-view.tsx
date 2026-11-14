'use client'

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SUBJECTS, subjectsFor } from '@/lib/questions'
import type { SubjectId } from '@/lib/questions'
import { useGame, subjectStats, DAILY_GOAL_SECONDS } from '@/lib/game'
import type { TextbookChoice } from '@/lib/game'
import { sfx } from '@/lib/sound'
import { toast } from '@/hooks/use-toast'
import { GRADE_LABELS, TERM_LABELS, availablePublisherOptions } from '@/components/game/textbook-picker'
import type { PubOptionKey } from '@/components/game/textbook-picker'
import IconChip, { type IconTone } from '@/components/game/icon-chip'

interface HomeViewProps {
  onSelectSubject: (subjectId: SubjectId) => void
}

const THEME = {
  orange: {
    card: 'border-orange-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-orange-400 to-orange-500 shadow-[0_5px_0_0_rgba(234,88,12,0.55)]',
    bar: 'bg-orange-100 [&>div]:bg-gradient-to-r [&>div]:from-amber-400 [&>div]:to-orange-500',
    ring: 'ring-orange-200',
  },
  emerald: {
    card: 'border-emerald-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-emerald-400 to-emerald-500 shadow-[0_5px_0_0_rgba(5,150,105,0.55)]',
    bar: 'bg-emerald-100 [&>div]:bg-gradient-to-r [&>div]:from-teal-400 [&>div]:to-emerald-500',
    ring: 'ring-emerald-200',
  },
  sky: {
    card: 'border-sky-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-sky-400 to-sky-500 shadow-[0_5px_0_0_rgba(2,132,199,0.55)]',
    bar: 'bg-sky-100 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-sky-500',
    ring: 'ring-sky-200',
  },
  rose: {
    card: 'border-rose-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-rose-400 to-rose-500 shadow-[0_5px_0_0_rgba(225,29,72,0.55)]',
    bar: 'bg-rose-100 [&>div]:bg-gradient-to-r [&>div]:from-pink-400 [&>div]:to-rose-500',
    ring: 'ring-rose-200',
  },
  violet: {
    card: 'border-violet-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-violet-400 to-violet-500 shadow-[0_5px_0_0_rgba(124,58,237,0.55)]',
    bar: 'bg-violet-100 [&>div]:bg-gradient-to-r [&>div]:from-purple-400 [&>div]:to-violet-500',
    ring: 'ring-violet-200',
  },
  teal: {
    card: 'border-teal-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-teal-400 to-teal-500 shadow-[0_5px_0_0_rgba(13,148,136,0.55)]',
    bar: 'bg-teal-100 [&>div]:bg-gradient-to-r [&>div]:from-cyan-400 [&>div]:to-teal-500',
    ring: 'ring-teal-200',
  },
  amber: {
    card: 'border-amber-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-amber-400 to-amber-500 shadow-[0_5px_0_0_rgba(217,119,6,0.55)]',
    bar: 'bg-amber-100 [&>div]:bg-gradient-to-r [&>div]:from-yellow-400 [&>div]:to-amber-500',
    ring: 'ring-amber-200',
  },
  lime: {
    card: 'border-lime-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-lime-400 to-lime-500 shadow-[0_5px_0_0_rgba(101,163,13,0.55)]',
    bar: 'bg-lime-100 [&>div]:bg-gradient-to-r [&>div]:from-green-400 [&>div]:to-lime-500',
    ring: 'ring-lime-200',
  },
  cyan: {
    card: 'border-cyan-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-cyan-400 to-cyan-500 shadow-[0_5px_0_0_rgba(8,145,178,0.55)]',
    bar: 'bg-cyan-100 [&>div]:bg-gradient-to-r [&>div]:from-sky-400 [&>div]:to-cyan-500',
    ring: 'ring-cyan-200',
  },
  pink: {
    card: 'border-pink-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-pink-400 to-pink-500 shadow-[0_5px_0_0_rgba(219,39,119,0.55)]',
    bar: 'bg-pink-100 [&>div]:bg-gradient-to-r [&>div]:from-rose-300 [&>div]:to-pink-500',
    ring: 'ring-pink-200',
  },
  indigo: {
    card: 'border-indigo-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-indigo-400 to-indigo-500 shadow-[0_5px_0_0_rgba(79,70,229,0.55)]',
    bar: 'bg-indigo-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-400 [&>div]:to-indigo-500',
    ring: 'ring-indigo-200',
  },
  fuchsia: {
    card: 'border-fuchsia-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-fuchsia-400 to-fuchsia-500 shadow-[0_5px_0_0_rgba(192,38,211,0.55)]',
    bar: 'bg-fuchsia-100 [&>div]:bg-gradient-to-r [&>div]:from-pink-400 [&>div]:to-fuchsia-500',
    ring: 'ring-fuchsia-200',
  },
  blue: {
    card: 'border-blue-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-blue-400 to-blue-500 shadow-[0_5px_0_0_rgba(37,99,235,0.55)]',
    bar: 'bg-blue-100 [&>div]:bg-gradient-to-r [&>div]:from-sky-400 [&>div]:to-blue-500',
    ring: 'ring-blue-200',
  },
  green: {
    card: 'border-green-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-green-400 to-green-500 shadow-[0_5px_0_0_rgba(22,163,74,0.55)]',
    bar: 'bg-green-100 [&>div]:bg-gradient-to-r [&>div]:from-lime-400 [&>div]:to-green-500',
    ring: 'ring-green-200',
  },
  red: {
    card: 'border-red-200 bg-white dl-shadow-lift',
    title: 'text-[#3c3c3c]',
    btn: 'bg-gradient-to-b from-red-400 to-red-500 shadow-[0_5px_0_0_rgba(220,38,38,0.55)]',
    bar: 'bg-red-100 [&>div]:bg-gradient-to-r [&>div]:from-orange-400 [&>div]:to-red-500',
    ring: 'ring-red-200',
  },
} as const

// 主题色 → 图标芯片色调（统一图标体系：彩色扁平 + 轻微拟物光泽）
const CHIP_TONE: Record<keyof typeof THEME, IconTone> = {
  orange: 'orange', emerald: 'green', sky: 'sky', rose: 'pink', violet: 'violet',
  teal: 'teal', amber: 'amber', lime: 'green', cyan: 'sky', pink: 'pink',
  indigo: 'sky', fuchsia: 'violet', blue: 'sky', green: 'green', red: 'red',
}
// 小朋友看得懂的科目口号（未来新增科目时自动回退到 tagline）
const KID_LINES: Partial<Record<SubjectId, string>> = {
  chinese1: '天地人 · 拼音宝宝 · 雪地小画家！',
  math1: '数一数 · 凑十法 · 越算越聪明！',
  english1: '打招呼 · 小书包 · 趣味数字，宝宝也会说！',
  chinese2: '小蝌蚪 · 黄山奇石 · 狐假虎威！',
  math2: '乘法口诀 · 求商 · 角与直角，越背越灵！',
  english2: '我的早晨 · 四季水果 · 五感大发现！',
  chinese3: '大青树下 · 秋天的雨 · 古诗新唱！',
  math3: '一位数乘除 · 年月日 · 七巧板，越算越灵！',
  english3: '字母 ABC · 小花园 · 美食节，英语初体验！',
  chinese4: '看大潮 · 游长城 · 访古迹！',
  math4: '运算律 · 大数 · 抽屉原理，越算越聪明！',
  english4: '学校 · 动物 · 早餐 · 天气，开口就说！',
  chinese: '读课文 · 背古诗 · 闯名著关！',
  chinese6: '草原丁香 · 长征壮歌 · 走近鲁迅！',
  chinese54: '草原丁香 · 红色足迹 · 科学之光！',
  chinese1b: '春夏秋冬 · 荷叶圆圆 · 小壁虎借尾巴！',
  chinese2b: '村居咏柳 · 神州谣 · 羿射九日！',
  chinese3b: '燕子荷花 · 守株待兔 · 海底世界！',
  chinese4b: '田园诗歌 · 琥珀恐龙 · 中外童话！',
  chinese5b: '祖父的园子 · 草船借箭 · 刷子李！',
  chinese6b: '民风民俗 · 理想信念 · 难忘小学时光！',
  chinese54b: '民风民俗 · 科学精神 · 古诗词诵读！',
  math1rjb: '平面图形 · 退位减法 · 购物街开张！',
  math2rjb: '表内除法 · 万以内数 · 小小侦探！',
  math3rjb: '东南西北 · 面积 · 年月日，越算越灵！',
  math4rjb: '运算定律 · 小数朋友 · 三角形！',
  math5rjb: '因数倍数 · 分数王国 · 长方体！',
  math6rjb: '负数 · 圆柱圆锥 · 毕业大闯关！',
  math1b: '退位减法 · 认识100 · 身体上的尺子！',
  math2b: '千以内数 · 三位数加减 · 克与千克！',
  math3b: '两位数乘除 · 分数初识 · 周长！',
  math4b: '小数朋友 · 折线统计 · 垂直平行！',
  math5b: '正负数 · 方程应用 · 体积大冒险！',
  math54b: '有理数 · 一次方程 · 长方体再认识！',
  math6: '数对定位 · 圆与百分数 · 越算越厉害！',
  math54: '整除素数 · 比和比例 · 圆和扇形！',
  english6: '校园家庭 · 美食运动 · 动物旅行！',
  math: '算一算 · 比一比 · 越闯越聪明！',
  english: 'ABC 大冒险 · 边玩边开口说！',
  math1rj: '数学游戏 · 凑十法 · 越玩越聪明！',
  math2rj: '分类整理 · 表内乘除 · 量长量短！',
  math3rj: '混合运算 · 曹冲称象 · 分数初识！',
  math4rj: '万以上大数 · 乘法模型 · 找宝藏！',
  math5rj: '小数乘除 · 字母代数 · 图形面积！',
  english1rj: 'Hello! · 第一堂课 · 上学准备出发！',
  english2rj: '数字字母 · 帮忙做家务 · 快乐情绪！',
  english3rj: '交朋友 · 神奇动物 · 多彩世界！',
  english4rj: '在家帮忙 · 社区生活 · 天气四季！',
  english5rj: '不同的朋友 · 健康习惯 · 美食自然！',
  english6rj: '神奇地方 · 团圆佳节 · 探索太空！',
  english1rjb: '有礼貌 · 讲卫生 · 吃得好，宝贝真棒！',
  english2rjb: '穿外套 · 安全玩 · 我能行 · 设计公园！',
  english3rjb: '新朋友 · 表达自己 · 健康食物 · 数字生活！',
  english4rjb: '班级规则 · 家规 · 购物 · 农场一日游！',
  english5rjb: '我的一天 · 最爱季节 · 校园日历 · 文明标识！',
  english6rjb: '比较高矮 · 上周末 · 今昔对比 · 毕业冲刺！',
}

// 页面边缘的漂浮小装饰（云朵与星星保留，位置避开左侧标题与右侧小岛）
const FLOATERS = [
  { emoji: '☁️', cls: 'left-[2%] top-1 text-2xl', d: 5 },
  { emoji: '⭐', cls: 'right-[3%] top-1 text-xl', d: 6 },
  { emoji: '🎈', cls: 'left-[6%] top-[44%] text-2xl', d: 7 },
  { emoji: '🐚', cls: 'right-[4%] top-[54%] text-xl', d: 5.5 },
  { emoji: '☁️', cls: 'right-[14%] top-[76%] text-3xl', d: 8 },
  { emoji: '✨', cls: 'left-[4%] top-[86%] text-xl', d: 6.5 },
]

// 版本药丸上的短标签（完整出版社名放进下拉菜单里展示）
const SHORT_PUB_LABEL: Record<PubOptionKey, string> = {
  all: '全部版本',
  rj: '人教版',
  rj54: '统编五四',
  she: '沪教版',
  bs: '北师大版',
  sj: '苏教版',
  wy: '外研版',
}

// 筛选药丸：白色胶囊 + emoji + 当前值 + ▾（参考图样式，共用一套外观）
function FilterPill({ emoji, label, children, title }: { emoji: string; label: string; children: React.ReactNode; title?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex w-full items-center justify-center gap-1 rounded-full bg-white px-2 py-2.5 text-sm font-black text-[#3c3c3c] shadow-[0_2px_10px_rgba(43,90,138,0.10)] ring-1 ring-white/80 transition-transform active:scale-95 sm:py-3"
          title={title}
        >
          <span className="truncate">
            {emoji} {label}
          </span>
          <span className="text-[10px] text-slate-400">▾</span>
        </button>
      </DropdownMenuTrigger>
      {children}
    </DropdownMenu>
  )
}

export default function HomeView({ onSelectSubject }: HomeViewProps) {
  const levels = useGame((s) => s.levels)
  const coins = useGame((s) => s.coins)
  const streak = useGame((s) => s.streak)
  const todaySeconds = useGame((s) => s.todaySeconds)
  const dailyDone = useGame((s) => s.dailyDone)
  const wrongBook = useGame((s) => s.wrongBook)
  const textbook = useGame((s) => s.textbook)
  const setTextbook = useGame((s) => s.setTextbook)

  const wrongCount = Object.keys(wrongBook).length
  const minutes = Math.floor(todaySeconds / 60)
  const pct = Math.min(100, (todaySeconds / DAILY_GOAL_SECONDS) * 100)

  // 按筛选药丸（年级/册别/版本）筛选当前要展示的科目岛
  const visibleSubjects = subjectsFor(textbook)
  const hasContent = visibleSubjects.length > 0

  const gradeText = GRADE_LABELS[textbook.gradeNum] ?? `${textbook.gradeNum}年级`
  const pubOptions = availablePublisherOptions(textbook.gradeNum, textbook.term)
  const currentPub = pubOptions.find((p) => p.key === textbook.publisher)
  const pubText = currentPub ? SHORT_PUB_LABEL[currentPub.key] : '全部版本'

  const pick = (patch: Partial<TextbookChoice>) => {
    sfx.click()
    let next = { ...textbook, ...patch }
    // 版本选项随年级/册别变化：切换后若当前版本不可用，自动回退到全部
    if (
      (patch.gradeNum !== undefined && patch.gradeNum !== textbook.gradeNum) ||
      (patch.term !== undefined && patch.term !== textbook.term)
    ) {
      const validKeys = availablePublisherOptions(next.gradeNum, next.term).map((p) => p.key)
      if (!validKeys.includes(next.publisher as PubOptionKey)) next = { ...next, publisher: 'all' }
    }
    setTextbook(next)
  }

  // 点小岛分享：优先调起系统分享，不支持时复制链接并轻提示（与小程序「点小岛分享」同语义）
  const shareIsland = () => {
    sfx.click()
    const url = typeof window !== 'undefined' ? window.location.origin : ''
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({ title: '童学冒险岛', text: '一至六年级语数英闯关，越玩越聪明！', url })
        .catch(() => {})
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(url)
        .then(() => toast({ title: '🔗 链接已复制，快分享给小伙伴吧！' }))
        .catch(() => toast({ title: '🔗 快把网址分享给小伙伴吧！' }))
    } else {
      toast({ title: '🔗 快把网址分享给小伙伴吧！' })
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-2xl px-3 pb-24 pt-4 sm:pt-6">
      {/* 漂浮装饰层 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {FLOATERS.map((f, i) => (
          <motion.span
            key={i}
            className={`absolute select-none opacity-70 ${f.cls}`}
            animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
            transition={{ repeat: Infinity, duration: f.d, ease: 'easeInOut', delay: i * 0.35 }}
          >
            {f.emoji}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10">
        {/* 英雄区（参考图）：左侧大标题 + 问候语，右侧小岛；点小岛分享 */}
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="pt-1">
          <div className="flex items-center gap-2">
            <div className="min-w-0 flex-1">
              <h1 className="text-4xl font-black tracking-tight text-[#2e3a50] sm:text-5xl">童学冒险岛</h1>
              <p className="mt-2 text-sm font-bold text-gray-500 sm:text-base">
                嗨，小岛民！今天想去哪个岛冒险呀？
              </p>
            </div>
            {/* 小岛场景即分享钮：主岛 + 山（山居中略偏下落在岛上），其余树/浪花已按需求移除 */}
            <motion.button
              type="button"
              onClick={shareIsland}
              whileTap={{ scale: 0.9 }}
              aria-label="分享给小伙伴"
              title="点一点，分享给小伙伴"
              className="relative shrink-0 p-1"
            >
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="relative block h-[100px] w-[130px] leading-none sm:h-[130px] sm:w-[164px]"
              >
                <span className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 select-none text-[72px] sm:text-[92px]">🏝️</span>
                <span className="absolute bottom-[16px] left-1/2 z-20 -translate-x-1/2 select-none text-[48px] sm:bottom-[22px] sm:text-[60px]">⛰️</span>
              </motion.span>
              <span className="absolute -bottom-1 left-1/2 h-2.5 w-24 -translate-x-1/2 rounded-full bg-sky-400/25 blur-[3px] sm:w-28" />
            </motion.button>
          </div>
        </motion.section>

        {/* 今日 20 分钟（参考图胶囊卡）：顶部三数据行（金币/连续/错题）+ 目标进度 + 今日任务 */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-5 rounded-3xl border-2 border-[#e5e5e5] bg-white/90 p-4 dl-shadow-lift"
        >
          <div className="flex items-center">
            <span
              title="金币（各岛通用，可在礼物屋兑换亲子奖励）"
              className="flex flex-1 items-center justify-center gap-1 text-base font-black text-[#3c3c3c] sm:text-lg"
            >
              🪙 {coins}
            </span>
            <span className="h-6 w-px shrink-0 bg-[#e5e5e5]" />
            <span title="连续签到天数" className="flex flex-1 items-center justify-center gap-1 text-base font-black text-[#3c3c3c] sm:text-lg">
              🔥 {streak} 天
            </span>
            <span className="h-6 w-px shrink-0 bg-[#e5e5e5]" />
            <span title="错题本里待消灭的题数" className="flex flex-1 items-center justify-center gap-1 text-base font-black text-[#3c3c3c] sm:text-lg">
              📕 {wrongCount}
            </span>
          </div>
          <div className="my-3 h-px bg-[#eeeeee]" />

          <div className="mb-2 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-sm font-black text-[#3c3c3c] sm:text-base">
              <IconChip tone="sky" size="sm">⛵</IconChip> 今日 20 分钟小目标
            </h2>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-black text-white ${
                dailyDone.minutes ? 'bg-emerald-400' : 'bg-amber-400'
              }`}
            >
              {minutes}/{DAILY_GOAL_SECONDS / 60} 分钟
            </span>
          </div>
          <div className="relative">
            <Progress value={pct} className="h-4 rounded-full bg-[#e5e5e5] [&>div]:bg-[#58cc02]" />
            <span
              className="absolute -top-1.5 text-2xl transition-all duration-700"
              style={{ left: `calc(${pct}% - 16px)` }}
            >
              ⛵
            </span>
          </div>
          <p className="mt-2 text-xs font-bold text-gray-500">
            {todaySeconds === 0
              ? '挑一座岛开启冒险吧，小帆船会跟着你前进哦～'
              : dailyDone.minutes
                ? '🎉 今日目标达成！明天继续来冒险～'
                : `再学 ${DAILY_GOAL_SECONDS / 60 - minutes} 分钟，小帆船就到终点啦！`}
          </p>
          {/* 今日任务胶囊（闯关 1 局 / 20 分钟）已按需求移除，仅保留上方进度条与达成庆祝 */}
          {/* 全部达成庆祝徽标（闯关 + 20 分钟双达标即触发，与小程序同构） */}
          {dailyDone.level && dailyDone.minutes && (
            <div className="dl-sticker mt-2 rounded-2xl px-3 py-2 text-center text-xs font-black text-[#3c3c3c]">
              🎉 今日任务全部达成，太棒了！
            </div>
          )}
        </motion.section>

        {/* 筛选药丸（参考图）：年级 / 上下册 / 版本 */}
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          <FilterPill emoji="🎓" label={gradeText} title="切换年级">
            <DropdownMenuContent align="start" className="max-h-72 w-32 overflow-y-auto rounded-2xl">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <DropdownMenuItem key={n} onClick={() => pick({ gradeNum: n })}>
                  {GRADE_LABELS[n]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </FilterPill>
          <FilterPill emoji="📖" label={TERM_LABELS[textbook.term]} title="切换上 / 下册">
            <DropdownMenuContent align="center" className="w-28 rounded-2xl">
              {(['a', 'b'] as const).map((term) => (
                <DropdownMenuItem key={term} onClick={() => pick({ term })}>
                  {TERM_LABELS[term]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </FilterPill>
          <FilterPill emoji="📚" label={pubText} title="切换出版社 / 版本">
            <DropdownMenuContent align="end" className="max-h-72 w-64 overflow-y-auto rounded-2xl">
              {pubOptions.map((p) => (
                <DropdownMenuItem key={p.key} onClick={() => pick({ publisher: p.key })}>
                  {p.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </FilterPill>
        </div>

        {/* 科目岛列表（分区标题已按需求移除，筛选药丸直接衔接列表） */}
        {!hasContent ? (
          <div className="mt-5 rounded-[2rem] border-4 border-dashed border-amber-300 bg-white/80 p-8 text-center">
            <div className="flex justify-center">
              <IconChip tone="amber" size="lg" className="h-20 w-20 text-5xl">🚧</IconChip>
            </div>
            <p className="mt-2 text-base font-black text-amber-600">这片海域还没开岛哦！</p>
            <p className="mt-1 text-xs font-bold text-gray-400">
              {GRADE_LABELS[textbook.gradeNum] ?? textbook.gradeNum + '年级'}
              {TERM_LABELS[textbook.term]}的教材正在赶来，先回上册继续冒险吧～
            </p>
            <button
              onClick={() => {
                sfx.click()
                pick({ term: 'a' })
              }}
              className="mt-4 rounded-2xl bg-gradient-to-b from-amber-400 to-orange-500 px-5 py-2.5 text-sm font-black text-white shadow-[0_4px_0_0_rgba(234,88,12,0.5)] active:translate-y-[3px] active:shadow-none"
            >
              ⛵ 回到上册
            </button>
          </div>
        ) : (
          <div className="mt-5 flex flex-col gap-4">
            {visibleSubjects.map((subject, i) => {
              const t = THEME[subject.theme]
              const stats = subjectStats(levels, subject.id)
              return (
                <motion.button
                  key={subject.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, type: 'spring', stiffness: 220, damping: 20 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    sfx.click()
                    onSelectSubject(subject.id)
                  }}
                  className={`w-full rounded-[2rem] border-4 p-5 text-left ${t.card}`}
                >
                  <div className="flex items-center gap-4">
                    <motion.span
                      animate={{ rotate: [0, -6, 6, 0] }}
                      transition={{ repeat: Infinity, duration: 4.5, delay: i * 0.8, ease: 'easeInOut' }}
                      className="shrink-0"
                    >
                      <IconChip tone={CHIP_TONE[subject.theme]} size="lg" className="h-20 w-20 text-5xl sm:h-24 sm:w-24 sm:text-6xl">
                        {subject.emoji}
                      </IconChip>
                    </motion.span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <p className={`text-2xl font-black sm:text-3xl ${t.title}`}>{subject.name}岛</p>
                        {subject.badge && (
                          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-black text-violet-500 shadow-sm">
                            {subject.badge}
                          </span>
                        )}
                        <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-black text-gray-500 shadow-sm">
                          {subject.grade}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs font-black text-gray-500 sm:text-sm">
                        {KID_LINES[subject.id] ?? subject.tagline}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-sm font-black sm:text-base">
                        <span className="text-amber-500">⭐ {stats.stars}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-gray-500">✅ {stats.completed}/{stats.total} 关</span>
                      </div>
                    </div>
                  </div>
                  <Progress value={(stats.completed / stats.total) * 100} className={`mt-3 h-3 rounded-full ${t.bar}`} />
                  <span
                    className={`mt-4 flex items-center justify-center gap-1.5 rounded-2xl py-3.5 text-lg font-black text-white transition-transform active:translate-y-[3px] active:shadow-none sm:text-xl ${t.btn}`}
                  >
                    {stats.completed > 0 ? '继续冒险' : '出发冒险'}
                    <span className="text-xl">🚀</span>
                  </span>
                </motion.button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
