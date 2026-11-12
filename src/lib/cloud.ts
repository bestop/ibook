'use client'

// 网页端云同步（统一账号）：与小程序端同一账号、同一份云端进度
//
// 账号统一方式：网页端用「用户名+密码」登录 —— 小程序「云端同步」卡设置的网页账号，
// 或在网页端直接注册新账号（/api/account/weblogin|register）；绑定码登录（/api/account/claim）
// 兼容保留。登录后两端共享同一份云端存档（last-write-wins，按服务端 savedAt 对齐）。
//
// 存档格式（canonical v1，两端通用，见小程序 README）：state 采用「小程序原生
// 形态」为超集 —— wrongSnaps 内嵌题目快照（复习离线可用）；网页端上传时从
// wrongBook/wrongLastAt/wrongBox/wrongNextAt 合成快照，恢复时反向展开，
// 其余字段两端同构直拷。
//
// 对齐规则（两端一致，见 utils/cloud.js）：
//   有令牌 → 启动拉取云端档：
//     云端无档            → 上传本机（首次开通）
//     云端 savedAt > 本机最近一次成功上传时刻(lastpush) → 其他端推过新档 → 拉取应用
//     否则                → 本机即最新，不动
// 本地进度仍以 localStorage（zustand persist）为准，云端是跨端备份。
import { ALL_QUESTIONS, SUBJECTS } from '@/lib/questions'
import type { Question, SubjectId } from '@/lib/questions'
import { useGame, srsBoxOf } from '@/lib/game'
import type { GameState } from '@/lib/game'

const TOKEN_KEY = 'tx-cloud-token-v1'
const PROFILE_KEY = 'tx-cloud-profile-v1'
const LASTPUSH_KEY = 'tx-cloud-lastpush-v1' // 本机最近一次成功上传的服务端 savedAt（ISO 字符串）

export interface CloudProfile {
  uid: string
  nickname: string
  avatarEmoji: string
  username: string // 网页登录用户名（未设置时为空）
  hasWebLogin: boolean // 是否已设置网页登录账号（密码哈希在服务端，本端只存状态位）
}

interface CloudSavePayload {
  state: Record<string, unknown>
  savedAt?: string
}

// ---------- 基础请求 ----------

function apiFetch(path: string, init?: RequestInit & { keepalive?: boolean }): Promise<{ ok: boolean; status: number; data: unknown }> {
  const headers: Record<string, string> = { 'content-type': 'application/json' }
  const token = cloudToken()
  if (token) headers['authorization'] = 'Bearer ' + token
  return fetch(path, { ...init, headers }).then(async (res) => ({
    ok: res.ok,
    status: res.status,
    data: await res.json().catch(() => null),
  }))
}

// ---------- 本地凭据 ----------

export function cloudToken(): string {
  try {
    return localStorage.getItem(TOKEN_KEY) || ''
  } catch (e) {
    return ''
  }
}

function setToken(token: string) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token)
    else localStorage.removeItem(TOKEN_KEY)
  } catch (e) {
    /* ignore */
  }
}

export function cloudProfile(): CloudProfile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY)
    if (!raw) return null
    const p = JSON.parse(raw) as CloudProfile
    if (!p || typeof p.uid !== 'string' || !p.uid) return null
    return {
      uid: p.uid,
      nickname: typeof p.nickname === 'string' ? p.nickname : '',
      avatarEmoji: typeof p.avatarEmoji === 'string' ? p.avatarEmoji : '',
      username: typeof p.username === 'string' ? p.username : '',
      hasWebLogin: p.hasWebLogin === true,
    }
  } catch (e) {
    return null
  }
}

function setProfile(p: CloudProfile | null) {
  try {
    if (p) localStorage.setItem(PROFILE_KEY, JSON.stringify(p))
    else localStorage.removeItem(PROFILE_KEY)
  } catch (e) {
    /* ignore */
  }
  emitUIChange()
}

// 最近一次成功上传的服务端时间（ISO），供 UI 展示与对齐比较
function lastPush(): string {
  try {
    return localStorage.getItem(LASTPUSH_KEY) || ''
  } catch (e) {
    return ''
  }
}

function setLastPush(iso: string) {
  try {
    if (iso) localStorage.setItem(LASTPUSH_KEY, iso)
  } catch (e) {
    /* ignore */
  }
  emitUIChange()
}

export function lastPushText(): string {
  const iso = lastPush()
  if (!iso) return ''
  const t = Date.parse(iso)
  if (!isFinite(t)) return ''
  const d = new Date(t)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getMonth() + 1}月${d.getDate()}日 ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

// ---------- UI 微 store（顶栏用户徽章随登录态/同步时间刷新） ----------

let uiListeners: Array<() => void> = []
export function subscribeCloudUI(cb: () => void): () => void {
  uiListeners.push(cb)
  return () => {
    uiListeners = uiListeners.filter((x) => x !== cb)
  }
}
function emitUIChange() {
  uiListeners.forEach((cb) => {
    try {
      cb()
    } catch (e) {
      /* ignore */
    }
  })
}
export function getCloudUISnapshot(): string {
  const p = cloudProfile()
  return (p ? p.nickname || p.uid : '') + '|' + lastPush()
}

// ---------- 登录 / 资料 / 登出 ----------

// 绑定码登录：成功后缓存令牌与资料并立即对齐云端
export async function claimByCode(code: string): Promise<CloudProfile> {
  const res = await apiFetch('/api/account/claim', { method: 'POST', body: JSON.stringify({ code }) })
  if (!res.ok || !res.data || typeof res.data !== 'object') throw new Error('code_invalid')
  const d = res.data as { uid?: string; token?: string; profile?: CloudProfile }
  if (!d.uid || !d.token) throw new Error('code_invalid')
  setToken(d.token)
  const profile: CloudProfile = {
    uid: d.uid,
    nickname: d.profile?.nickname || '',
    avatarEmoji: d.profile?.avatarEmoji || '',
    username: d.profile?.username || '',
    hasWebLogin: d.profile?.hasWebLogin === true,
  }
  setProfile(profile)
  return profile
}

// 网页账号登录/注册（用户名+密码）：成功后缓存令牌与资料（对齐由调用方 alignCloud 完成）
// 错误语义：'bad_credentials'=用户名或密码错误；'username_taken'=用户名被占用；其余=网络/服务异常
async function webAuth(path: string, body: { username: string; password: string }): Promise<CloudProfile> {
  let res: { ok: boolean; status: number; data: unknown }
  try {
    res = await apiFetch(path, { method: 'POST', body: JSON.stringify(body) })
  } catch (e) {
    throw new Error('network')
  }
  if (res.status === 401) throw new Error('bad_credentials')
  if (res.status === 409) throw new Error('username_taken')
  if (!res.ok || !res.data || typeof res.data !== 'object') throw new Error('failed')
  const d = res.data as { uid?: string; token?: string; profile?: CloudProfile }
  if (!d.uid || !d.token) throw new Error('failed')
  setToken(d.token)
  const profile: CloudProfile = {
    uid: d.uid,
    nickname: d.profile?.nickname || '',
    avatarEmoji: d.profile?.avatarEmoji || '',
    username: d.profile?.username || '',
    hasWebLogin: d.profile?.hasWebLogin === true,
  }
  setProfile(profile)
  return profile
}

// 用户名密码登录（小程序端设置的网页账号 / 网页端注册的账号，同一账号体系）
export function webLogin(username: string, password: string): Promise<CloudProfile> {
  return webAuth('/api/account/weblogin', { username, password })
}

// 网页端注册新账号（注册即登录，云端同步同步开通）
export function webRegister(username: string, password: string): Promise<CloudProfile> {
  return webAuth('/api/account/register', { username, password })
}

// 更新跨端资料（昵称同步到云端，小程序下次 claim/会话可见）
export async function saveCloudProfile(patch: { nickname?: string; avatarEmoji?: string }): Promise<CloudProfile> {
  const res = await apiFetch('/api/account/profile', { method: 'POST', body: JSON.stringify(patch) })
  if (!res.ok || !res.data || typeof res.data !== 'object') throw new Error('profile_failed')
  const d = res.data as { profile?: CloudProfile }
  if (!d.profile) throw new Error('profile_failed')
  const profile: CloudProfile = {
    uid: d.profile.uid,
    nickname: d.profile.nickname || '',
    avatarEmoji: d.profile.avatarEmoji || '',
    username: d.profile.username || '',
    hasWebLogin: d.profile.hasWebLogin === true,
  }
  setProfile(profile)
  return profile
}

// 退出登录：吊销服务端令牌 + 清本地凭据（云端档保留，重新登录可恢复）
export async function cloudLogout(): Promise<void> {
  try {
    await apiFetch('/api/account/session', { method: 'DELETE' })
  } catch (e) {
    /* 网络失败也照常登出本地 */
  }
  setToken('')
  setProfile(null)
}

// ---------- canonical 载荷（web 原生 ↔ 小程序原生形态） ----------

interface SnapEntry {
  subjectId: string
  unitId: string
  type: string
  q: string
  options: string[]
  answer: number
  explain: string
  tag: string
  lastWrongAt: string
  count: number
  box: number
  nextReviewAt: string
}

// qid → 题目与归属科目/单元（懒构建一次；网页端题库常驻内存）
let qIndex: Map<string, { q: Question; subjectId: SubjectId; unitId: string }> | null = null
function questionIndex(): Map<string, { q: Question; subjectId: SubjectId; unitId: string }> {
  if (qIndex) return qIndex
  qIndex = new Map()
  for (const s of SUBJECTS) {
    for (const [unitId, qs] of Object.entries(s.questions)) {
      for (const q of qs) qIndex.set(q.id, { q, subjectId: s.id, unitId })
    }
  }
  return qIndex
}

// 网页原生 → canonical（小程序原生形态）：为错题本合成题目快照
export function toCanonical(s: GameState): { v: number; platform: 'web'; savedAt: number; state: Record<string, unknown> } {
  const idx = questionIndex()
  const wrongSnaps: Record<string, SnapEntry> = {}
  Object.keys(s.wrongBook).forEach((qid) => {
    const hit = idx.get(qid)
    if (!hit) return // 题库已下线的旧题不合成快照（本机原生映射仍保留）
    wrongSnaps[qid] = {
      subjectId: hit.subjectId,
      unitId: hit.unitId,
      type: hit.q.type,
      q: hit.q.q,
      options: hit.q.options,
      answer: hit.q.answer,
      explain: hit.q.explain,
      tag: hit.q.tag,
      lastWrongAt: s.wrongLastAt[qid] || '',
      count: s.wrongBook[qid] || 1,
      box: srsBoxOf(s.wrongBox[qid]),
      nextReviewAt: s.wrongNextAt[qid] || '',
    }
  })
  return {
    v: 1,
    platform: 'web',
    savedAt: Date.now(),
    state: {
      textbook: s.textbook,
      coins: s.coins,
      levels: s.levels,
      wrongBook: s.wrongBook,
      wrongSnaps,
      achievements: s.achievements,
      signInDates: s.signInDates,
      streak: s.streak,
      todaySeconds: s.todaySeconds,
      todayDate: s.todayDate,
      todayReviewCorrect: s.todayReviewCorrect,
      dailyDone: s.dailyDone,
      totalCorrect: s.totalCorrect,
      totalWrong: s.totalWrong,
      clearedTotal: s.clearedTotal,
      redeemLog: s.redeemLog,
      customRewards: s.customRewards,
      pet: s.pet,
      petEvents: [], // 事件队列为瞬态弹窗，不上云
      dayStats: s.dayStats,
    },
  }
}

// ---------- 恢复消毒（云端数据按安全默认值收敛，镜像小程序 store.replaceState） ----------

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
function intOr(v: unknown, d: number, max = 1e7): number {
  const n = typeof v === 'number' && isFinite(v) ? Math.floor(v) : NaN
  return isNaN(n) ? d : Math.max(0, Math.min(max, n))
}
function strOr(v: unknown, d: string, max = 64): string {
  return typeof v === 'string' ? v.slice(0, max) : d
}
function dateOr(v: unknown, d: string): string {
  return typeof v === 'string' && DATE_RE.test(v) ? v : d
}
function recOr(v: unknown): Record<string, unknown> {
  return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : {}
}
function arrOr(v: unknown): unknown[] {
  return Array.isArray(v) ? v : []
}

export function applyCanonical(payload: CloudSavePayload): boolean {
  const st = payload && payload.state ? recOr(payload.state) : {}
  const today = (() => {
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  })()

  // 错题本：从 wrongSnaps（canonical）展开为网页原生四张映射表
  const wrongBook: Record<string, number> = {}
  const wrongLastAt: Record<string, string> = {}
  const wrongBox: Record<string, number> = {}
  const wrongNextAt: Record<string, string> = {}
  const snaps = recOr(st.wrongSnaps)
  Object.keys(snaps)
    .slice(0, 400)
    .forEach((qid) => {
      if (typeof qid !== 'string' || qid.length > 48) return
      const sn = recOr(snaps[qid])
      const count = intOr(sn.count, 1, 99)
      wrongBook[qid] = count
      wrongLastAt[qid] = dateOr(sn.lastWrongAt, today)
      const box = intOr(sn.box, 1, 3)
      wrongBox[qid] = box === 2 || box === 3 ? box : 1
      wrongNextAt[qid] = dateOr(sn.nextReviewAt, today)
    })

  // 关卡进度：`科目:关卡` → { stars, completed, plays }
  const levels: GameState['levels'] = {}
  const lv = recOr(st.levels)
  Object.keys(lv)
    .slice(0, 3000)
    .forEach((k) => {
      if (typeof k !== 'string' || k.length > 64) return
      const p = recOr(lv[k])
      levels[k] = {
        stars: Math.max(0, Math.min(3, intOr(p.stars, 0, 3))),
        completed: p.completed === true,
        plays: intOr(p.plays, 0, 9999),
      }
    })

  // 签到日期（YYYY-MM-DD 去重，保尾 400 天）与每日时长历史（保尾 28 天）
  const signInDates = Array.from(new Set(arrOr(st.signInDates).filter((x): x is string => typeof x === 'string' && DATE_RE.test(x)))).slice(-400)
  const dayStatsRaw = recOr(st.dayStats)
  const dayStats: Record<string, number> = {}
  Object.keys(dayStatsRaw)
    .filter((k) => DATE_RE.test(k))
    .sort()
    .slice(-28)
    .forEach((k) => {
      dayStats[k] = intOr(dayStatsRaw[k], 0)
    })

  // 教材选择（两端同构：gradeNum/term/publisher）
  const tb = recOr(st.textbook)
  const gradeNum = intOr(tb.gradeNum, 5, 6) || 5
  const term = tb.term === 'b' ? 'b' : 'a'
  const publisher = typeof tb.publisher === 'string' && tb.publisher ? tb.publisher.slice(0, 12) : 'all'

  // 宠物（与 adoptPet 同构，缺字段按默认收敛）
  const petRaw = st.pet && typeof st.pet === 'object' && !Array.isArray(st.pet) ? recOr(st.pet) : null
  const pet = petRaw
    ? {
        kind: petRaw.kind === 'cat' ? ('cat' as const) : ('dog' as const),
        name: strOr(petRaw.name, '小伙伴', 8) || '小伙伴',
        exp: intOr(petRaw.exp, 0, 1e6),
        mood: Math.max(0, Math.min(100, intOr(petRaw.mood, 80, 100))),
        lastActiveDate: dateOr(petRaw.lastActiveDate, today),
        feedDate: dateOr(petRaw.feedDate, today),
        feedCount: intOr(petRaw.feedCount, 0, 99),
        adoptedAt: intOr(petRaw.adoptedAt, Date.now(), 4102444800000),
        storyRead: arrOr(petRaw.storyRead).filter((x): x is string => typeof x === 'string').slice(0, 32),
      }
    : null

  // 兑换记录 / 自定义奖励（结构消毒，容量封顶）
  const redeemLog = arrOr(st.redeemLog)
    .filter((x): x is Record<string, unknown> => !!x && typeof x === 'object' && !Array.isArray(x))
    .slice(0, 60)
    .map((r) => ({
      id: strOr(r.id, '', 48),
      rewardId: strOr(r.rewardId, '', 48),
      name: strOr(r.name, '', 24),
      emoji: strOr(r.emoji, '🎁', 4),
      cost: intOr(r.cost, 0, 1e6),
      at: intOr(r.at, 0, 4102444800000),
      fulfilled: r.fulfilled === true,
    }))
    .filter((r) => r.id)
  const customRewards = arrOr(st.customRewards)
    .filter((x): x is Record<string, unknown> => !!x && typeof x === 'object' && !Array.isArray(x))
    .slice(0, 60)
    .map((r) => ({
      id: strOr(r.id, '', 64),
      name: strOr(r.name, '', 12),
      emoji: strOr(r.emoji, '🎁', 4),
      cost: intOr(r.cost, 1, 1e6),
      desc: strOr(r.desc, '', 30),
      custom: true,
    }))
    .filter((r) => r.id)

  const dd = recOr(st.dailyDone)

  useGame.setState({
    textbook: { gradeNum: gradeNum as GameState['textbook']['gradeNum'], term, publisher: publisher as GameState['textbook']['publisher'] },
    coins: intOr(st.coins, 0),
    levels,
    wrongBook,
    wrongLastAt,
    wrongBox,
    wrongNextAt,
    achievements: arrOr(st.achievements).filter((x): x is string => typeof x === 'string' && x.length <= 32).slice(0, 64),
    signInDates,
    streak: intOr(st.streak, 0, 9999),
    todaySeconds: intOr(st.todaySeconds, 0),
    todayDate: dateOr(st.todayDate, today),
    todayReviewCorrect: intOr(st.todayReviewCorrect, 0, 999),
    dailyDone: { level: dd.level === true, minutes: dd.minutes === true, review: dd.review === true },
    totalCorrect: intOr(st.totalCorrect, 0),
    totalWrong: intOr(st.totalWrong, 0),
    clearedTotal: intOr(st.clearedTotal, 0),
    redeemLog,
    customRewards,
    pet,
    petEvents: [], // 瞬态弹窗队列不随云档恢复
    dayStats,
  })
  useGame.getState().ensureToday() // 跨天归一化（todayDate 不是今天时重置今日任务）
  return true
}

// ---------- 上传 / 拉取 / 对齐 ----------

let applying = false // 恢复应用引发的 store 变更不回环上传
let uploading = false

async function uploadNow(keepalive = false): Promise<boolean> {
  if (uploading || !cloudToken()) return false
  uploading = true
  try {
    const body = JSON.stringify(toCanonical(useGame.getState()))
    const res = await apiFetch('/api/account/save', { method: 'PUT', body, ...(keepalive ? { keepalive: true } : {}) })
    if (res.ok && res.data && typeof res.data === 'object') {
      const savedAt = (res.data as { savedAt?: string }).savedAt
      if (typeof savedAt === 'string' && savedAt) setLastPush(savedAt)
      return true
    }
    return false
  } catch (e) {
    return false
  } finally {
    uploading = false
  }
}

async function fetchCloudSave(): Promise<CloudSavePayload | null | 'empty'> {
  const res = await apiFetch('/api/account/save', { method: 'GET' })
  if (!res.ok) return null
  const d = res.data as { empty?: boolean; state?: Record<string, unknown>; savedAt?: string }
  if (!d || d.empty) return 'empty'
  if (!d.state || typeof d.state !== 'object') return null
  return { state: d.state, savedAt: d.savedAt }
}

export type AlignResult = 'pulled' | 'pushed' | 'in-sync' | 'off' | 'error'

// 启动对齐（规则见文件头注释）：登录态下拉取/推送一次
export async function alignCloud(): Promise<AlignResult> {
  if (!cloudToken()) return 'off'
  try {
    const cloud = await fetchCloudSave()
    if (cloud === null) return 'error'
    if (cloud === 'empty') {
      const ok = await uploadNow()
      return ok ? 'pushed' : 'error'
    }
    const cloudAt = cloud.savedAt ? Date.parse(cloud.savedAt) : 0
    const mine = lastPush() ? Date.parse(lastPush()) : 0
    if (isFinite(cloudAt) && cloudAt > mine) {
      applying = true
      try {
        applyCanonical(cloud)
      } finally {
        applying = false
      }
      setLastPush(cloud.savedAt || '') // 以云端档为准更新游标（下次对齐不再重复拉）
      return 'pulled'
    }
    return 'in-sync'
  } catch (e) {
    return 'error'
  }
}

// 手动立即上传（用户对话框「立即同步」按钮）
export async function pushCloudNow(): Promise<boolean> {
  return uploadNow()
}

// 自动同步：store 任一变更 → 2.5s 防抖上传；页面隐藏时兜底 flush
export function startAutoSync(): () => void {
  let timer: ReturnType<typeof setTimeout> | null = null
  const unsub = useGame.subscribe(() => {
    if (applying || !cloudToken()) return
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      uploadNow()
    }, 2500)
  })
  const flush = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    if (cloudToken()) uploadNow(true)
  }
  if (typeof window !== 'undefined') window.addEventListener('pagehide', flush)
  return () => {
    unsub()
    if (timer) clearTimeout(timer)
    if (typeof window !== 'undefined') window.removeEventListener('pagehide', flush)
  }
}
