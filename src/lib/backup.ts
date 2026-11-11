'use client'

// 存档备份中立信封（借鉴聪聪学堂 backup.ts BackupEnvelope v1：双端互通、零依赖手写校验）
// 与小程序 utils/backup.js 同构：同一 schema（txstudy-backup v1），网页端导出的备份文本
// 可在小程序「我的 → 存档备份」导入，反之亦然；端独有键在另一端自动跳过并有透明提示。
//
// 瞬态状态不进信封：todaySeconds / todayDate / dailyDone / todayReviewCorrect /
// petEvents / unseenAchievements（当日态与队列）。

export const BACKUP_SCHEMA = 'txstudy-backup' as const
export const BACKUP_VERSION = 1

export interface BackupEnvelope {
  schema: typeof BACKUP_SCHEMA
  version: number
  platform: 'mp' | 'web'
  exportedAt: string
  data: Record<string, unknown>
}

export interface ValidateResult {
  ok: boolean
  /** 校验后可合并的字段（只含目标端认识且通过消毒的键） */
  data: Record<string, unknown>
  /** 被丢弃/替换字段的修复日志（可展示） */
  errors: string[]
  meta: { platform: 'mp' | 'web'; exportedAt: string; version: number } | null
}

// 允许进信封的键（网页端侧；wrongLastAt 为网页端独有，小程序导出的是 wrongSnaps）
const EXPORT_KEYS = [
  'coins',
  'levels',
  'wrongBook',
  'wrongLastAt', // 网页端独有：错题最近答错日期（SRS 排序用）
  'wrongBox', // 网页端独有：SRS 盒位 1|2|3（与小程序快照内 box 同义异构）
  'wrongNextAt', // 网页端独有：SRS 下次复习日（与小程序快照内 nextReviewAt 同义异构）
  'achievements',
  'signInDates',
  'streak',
  'totalCorrect',
  'totalWrong',
  'clearedTotal',
  'redeemLog',
  'customRewards',
  'pet',
  'textbook',
  'dayStats',
]

// 容量上限（与 store 各键封顶一致；小程序侧同值）
const CAPS = {
  wrongBook: 300,
  signInDates: 400,
  achievements: 100,
  redeemLog: 60,
  customRewards: 50,
  dayStats: 28,
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === 'object' && !Array.isArray(v)
}

// 整数收敛：非法返回 null，合法则 clamp 到 [min, max]
function clampInt(v: unknown, min: number, max: number): number | null {
  const n = typeof v === 'number' && Number.isFinite(v) ? Math.round(v) : NaN
  if (!Number.isFinite(n)) return null
  return Math.min(max, Math.max(min, n))
}

/** 从游戏状态组装备份信封（state 取 useGame.getState() 的快照） */
export function buildEnvelope(
  state: Record<string, unknown>,
  platform: 'mp' | 'web'
): BackupEnvelope {
  const data: Record<string, unknown> = {}
  EXPORT_KEYS.forEach((key) => {
    if (!(key in state)) return
    if (key === 'pet' && !state[key]) return // 未领养宠物不携带，导入端保持现状
    data[key] = JSON.parse(JSON.stringify(state[key]))
  })
  return {
    schema: BACKUP_SCHEMA,
    version: BACKUP_VERSION,
    platform: platform === 'web' ? 'web' : 'mp',
    exportedAt: new Date().toISOString(),
    data,
  }
}

/** 校验备份文本：ok === false ⇔ 结构性不可用；ok === true 时 data 只含可合并字段 */
export function validateEnvelope(text: string): ValidateResult {
  let raw: unknown = null
  try {
    raw = JSON.parse(String(text || ''))
  } catch {
    return { ok: false, data: {}, errors: ['不是有效的 JSON 文本'], meta: null }
  }
  if (!isPlainObject(raw)) return { ok: false, data: {}, errors: ['备份结构不正确'], meta: null }
  const env = raw as Record<string, unknown>
  if (env.schema !== BACKUP_SCHEMA) {
    return { ok: false, data: {}, errors: ['备份格式不符（schema 不匹配）'], meta: null }
  }
  const errors: string[] = []
  const version = typeof env.version === 'number' && Number.isFinite(env.version) ? env.version : NaN
  if (!Number.isFinite(version) || version <= 0) {
    return { ok: false, data: {}, errors: ['备份版本号无效'], meta: null }
  }
  if (version > BACKUP_VERSION) errors.push('备份来自更新版本，仅恢复已知字段')
  const data = env.data
  if (!isPlainObject(data)) return { ok: false, data: {}, errors: ['备份缺少进度数据（data）'], meta: null }

  const clean: Record<string, unknown> = {}

  // —— 数值类
  const intFields: Array<[string, number, number]> = [
    ['coins', 0, 1e9],
    ['streak', 0, 9999],
    ['totalCorrect', 0, 1e6],
    ['totalWrong', 0, 1e6],
    ['clearedTotal', 0, 1e6],
  ]
  intFields.forEach(([k, lo, hi]) => {
    const v = clampInt(data[k], lo, hi)
    if (v !== null) clean[k] = v
    else if (data[k] !== undefined) errors.push(`${k} 字段无效，已跳过`)
  })

  // —— 关卡进度
  if (isPlainObject(data.levels)) {
    const lv = data.levels
    const levels: Record<string, unknown> = {}
    Object.keys(lv).forEach((k) => {
      const p = lv[k]
      if (!k || !isPlainObject(p)) return
      const stars = clampInt(p.stars, 0, 3)
      if (stars === null) return
      levels[k] = { stars, completed: !!p.completed, plays: clampInt(p.plays, 0, 1e6) || 0 }
    })
    clean.levels = levels
  } else if (data.levels !== undefined) errors.push('levels 字段无效，已跳过')

  // —— 错题计数：qid -> 错次（严格整数 ≥1：0 次/非法条目丢弃；插入序保留最新 300 条）
  if (isPlainObject(data.wrongBook)) {
    const wb = data.wrongBook
    const book: Record<string, number> = {}
    Object.keys(wb).forEach((k) => {
      const rawV = wb[k]
      const n = typeof rawV === 'number' && Number.isFinite(rawV) ? Math.round(rawV) : NaN
      if (k && n >= 1 && n <= 9999) book[k] = n
    })
    const ids = Object.keys(book)
    ids.slice(0, Math.max(0, ids.length - CAPS.wrongBook)).forEach((k) => delete book[k])
    clean.wrongBook = book
  } else if (data.wrongBook !== undefined) errors.push('wrongBook 字段无效，已跳过')

  // —— 错题最近答错日期（网页端独有）：qid -> 'YYYY-MM-DD'
  if (isPlainObject(data.wrongLastAt)) {
    const wla = data.wrongLastAt
    const map: Record<string, string> = {}
    Object.keys(wla).forEach((k) => {
      const v = wla[k]
      if (k && typeof v === 'string' && DATE_RE.test(v)) map[k] = v
    })
    clean.wrongLastAt = map
  } else if (data.wrongLastAt !== undefined) errors.push('wrongLastAt 字段无效，已跳过')

  // —— SRS 盒位（网页端独有）：qid -> 1|2|3（非 1..3 整数丢弃 → 回盒 1，与小程序快照消毒同构）
  if (isPlainObject(data.wrongBox)) {
    const wb = data.wrongBox
    const map: Record<string, number> = {}
    Object.keys(wb).forEach((k) => {
      const n = clampInt(wb[k], 1, 3)
      if (k && n !== null) map[k] = n
    })
    clean.wrongBox = map
  } else if (data.wrongBox !== undefined) errors.push('wrongBox 字段无效，已跳过')

  // —— SRS 下次复习日（网页端独有）：qid -> 'YYYY-MM-DD'（非日期格式丢弃 → 视作立即到期）
  if (isPlainObject(data.wrongNextAt)) {
    const wna = data.wrongNextAt
    const map: Record<string, string> = {}
    Object.keys(wna).forEach((k) => {
      const v = wna[k]
      if (k && typeof v === 'string' && DATE_RE.test(v)) map[k] = v
    })
    clean.wrongNextAt = map
  } else if (data.wrongNextAt !== undefined) errors.push('wrongNextAt 字段无效，已跳过')

  // —— 签到日期（去重、按日期保留最新 N 条）
  if (Array.isArray(data.signInDates)) {
    const set = new Set<string>()
    data.signInDates.forEach((d) => {
      if (typeof d === 'string' && DATE_RE.test(d)) set.add(d)
    })
    const keys = Array.from(set).sort()
    if (keys.length > CAPS.signInDates) errors.push(`签到记录超出上限，仅保留最近 ${CAPS.signInDates} 天`)
    clean.signInDates = keys.slice(Math.max(0, keys.length - CAPS.signInDates))
  } else if (data.signInDates !== undefined) errors.push('signInDates 字段无效，已跳过')

  // —— 成就 id 列表（去重字符串）
  if (Array.isArray(data.achievements)) {
    const set = new Set<string>()
    data.achievements.forEach((a) => {
      if (typeof a === 'string' && a) set.add(a)
    })
    clean.achievements = Array.from(set).slice(0, CAPS.achievements)
  } else if (data.achievements !== undefined) errors.push('achievements 字段无效，已跳过')

  // —— 兑换记录 / 自定义奖励
  if (Array.isArray(data.redeemLog)) {
    clean.redeemLog = data.redeemLog
      .filter((r): r is Record<string, unknown> => isPlainObject(r) && typeof r.id === 'string' && typeof r.rewardId === 'string')
      .slice(0, CAPS.redeemLog)
      .map((r) => ({
        id: r.id,
        rewardId: r.rewardId,
        name: String(r.name || '').slice(0, 24),
        emoji: String(r.emoji || '🎁').slice(0, 4),
        cost: clampInt(r.cost, 0, 1e9) || 0,
        at: clampInt(r.at, 0, 8.64e15) || 0,
        fulfilled: !!r.fulfilled,
      }))
  } else if (data.redeemLog !== undefined) errors.push('redeemLog 字段无效，已跳过')

  if (Array.isArray(data.customRewards)) {
    clean.customRewards = data.customRewards
      .filter((r): r is Record<string, unknown> => isPlainObject(r) && typeof r.id === 'string' && typeof r.name === 'string')
      .slice(0, CAPS.customRewards)
      .map((r) => ({
        id: r.id,
        name: String(r.name).slice(0, 12),
        emoji: String(r.emoji || '🎁').slice(0, 4),
        cost: clampInt(r.cost, 1, 1e9) || 1,
        desc: String(r.desc || '').slice(0, 30),
        custom: true,
      }))
  } else if (data.customRewards !== undefined) errors.push('customRewards 字段无效，已跳过')

  // —— 宠物：显式 null 透传（导入端置空）；对象按允许清单收口
  if (isPlainObject(data.pet)) {
    const p = data.pet
    const pet: Record<string, unknown> = {}
    if (p.kind === 'cat' || p.kind === 'dog') pet.kind = p.kind
    pet.name = String(p.name || '').slice(0, 8)
    const exp = clampInt(p.exp, 0, 1e7)
    if (exp !== null) pet.exp = exp
    const mood = clampInt(p.mood, 0, 100)
    if (mood !== null) pet.mood = mood
    if (typeof p.lastActiveDate === 'string' && DATE_RE.test(p.lastActiveDate)) pet.lastActiveDate = p.lastActiveDate
    if (typeof p.feedDate === 'string' && DATE_RE.test(p.feedDate)) pet.feedDate = p.feedDate
    const fc = clampInt(p.feedCount, 0, 99)
    if (fc !== null) pet.feedCount = fc
    const at = clampInt(p.adoptedAt, 0, 8.64e15)
    if (at !== null) pet.adoptedAt = at
    if (Array.isArray(p.storyRead)) pet.storyRead = p.storyRead.filter((c) => typeof c === 'string').slice(0, 50)
    clean.pet = pet
  } else if (data.pet === null) {
    clean.pet = null
  } else if (data.pet !== undefined) errors.push('pet 字段无效，已跳过')

  // —— 教材选择
  if (isPlainObject(data.textbook)) {
    const t = data.textbook
    const gn = clampInt(t.gradeNum, 1, 6)
    if (gn !== null && (t.term === 'a' || t.term === 'b')) {
      clean.textbook = { gradeNum: gn, term: t.term, publisher: String(t.publisher || 'all').slice(0, 20) }
    }
  } else if (data.textbook !== undefined) errors.push('textbook 字段无效，已跳过')

  // —— 每日时长历史：date -> 秒数（非负整数，负数丢弃；按日期保留最新 28 条）
  if (isPlainObject(data.dayStats)) {
    const ds = data.dayStats
    const stats: Record<string, number> = {}
    Object.keys(ds).forEach((k) => {
      const rawV = ds[k]
      const n = typeof rawV === 'number' && Number.isFinite(rawV) ? Math.round(rawV) : NaN
      if (DATE_RE.test(k) && n >= 0 && n <= 86400) stats[k] = n
    })
    const keys = Object.keys(stats).sort()
    keys.slice(0, Math.max(0, keys.length - CAPS.dayStats)).forEach((k) => delete stats[k])
    clean.dayStats = stats
  } else if (data.dayStats !== undefined) errors.push('dayStats 字段无效，已跳过')

  // —— 小程序端独有字段：透明说明（不合并，避免误以为丢了数据）
  if (data.wrongSnaps !== undefined) errors.push('wrongSnaps 为小程序端独有数据，此端不恢复')

  return {
    ok: Object.keys(clean).length > 0,
    data: clean,
    errors,
    meta: {
      platform: env.platform === 'web' ? 'web' : 'mp',
      exportedAt: typeof env.exportedAt === 'string' ? env.exportedAt : '',
      version,
    },
  }
}
