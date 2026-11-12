// 统一账号与云端存档 · 服务端助手（小程序 + 网页端共用）
//
// 职责：令牌签发与鉴权、账号开通、绑定码生成、存档载荷校验、微信 code2session。
// 路由层（src/app/api/mp/login、src/app/api/account/*）只做参数收口与本文件调用。
//
// 环境变量：
//   DATABASE_URL  必需，SQLite 文件路径（如 file:/data/ibook.db），部署后先 `bun run db:push`
//   WX_APPID      可选，小程序 AppID（配置后 /api/mp/login 才生效）
//   WX_SECRET     可选，小程序 AppSecret（只在服务端，不下发）
//   WX_UID_SALT   可选，openid 哈希盐（默认 'tx-adventure'），更换会使已有微信账号身份失效
//
// 安全边界（家庭自用产品口径，详见小程序 README「云端同步与统一账号」）：
//   - openid / session_key 明文不出服务端，uid 为哈希后标识；
//   - 令牌不设过期，退出登录吊销；账号「先到先得」——已有活跃令牌的账号
//     不能被无令牌请求重新开通（防陌生设备顶号），绑定码与网页账号密码是跨设备入口。
import { NextRequest } from 'next/server'
import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'crypto'
import { Prisma } from '@prisma/client'
import { db } from '@/lib/db'

const UID_RE = /^(w1_[0-9a-f]{40}|wu_[0-9a-f]{40}|gid-[0-9a-z-]{4,48})$/
export const SAVE_MAX_BYTES = 768 * 1024 // canonical 存档上限（错题快照形态 ≈ 数百 KB 内）
export const PAIR_TTL_MS = 10 * 60 * 1000 // 绑定码有效期 10 分钟

// ---------- uid / 令牌 ----------

export function uidOk(uid: unknown): uid is string {
  return typeof uid === 'string' && UID_RE.test(uid)
}

// openid → 服务端内部 uid（哈希后返回给客户端，明文 openid 不出服务端）
export function uidFromOpenid(openid: string): string {
  return 'w1_' + createHash('sha1').update(openid + '|' + (process.env.WX_UID_SALT || 'tx-adventure')).digest('hex')
}

// 签发令牌（48 位 hex 随机）：登录/绑定成功后调用
export async function issueToken(uid: string, platform: 'mp' | 'web'): Promise<string> {
  const token = randomBytes(24).toString('hex')
  await db.authToken.create({ data: { token, uid, platform } })
  return token
}

// 鉴权：Authorization: Bearer <token> → { uid, platform } | null（无效/已吊销 → null）
export async function auth(req: NextRequest): Promise<{ uid: string; platform: string } | null> {
  const header = req.headers.get('authorization') || ''
  const m = /^Bearer\s+([0-9a-f]{32,96})$/i.exec(header)
  if (!m) return null
  const row = await db.authToken.findUnique({ where: { token: m[1] } })
  if (!row || row.revoked) return null
  // 滑动续期失败不影响本次请求（仅统计用途）
  try {
    await db.authToken.update({ where: { token: row.token }, data: { lastSeenAt: new Date() } })
  } catch (e) {
    /* ignore */
  }
  return { uid: row.uid, platform: row.platform }
}

// ---------- 账号 ----------

// 开通账号（不存在则创建；存在则仅在显式给昵称时更新资料）
export async function ensurePlayer(uid: string, source: 'wechat' | 'local', patch?: { nickname?: string }): Promise<void> {
  const exist = await db.player.findUnique({ where: { uid } })
  if (exist) {
    if (patch && typeof patch.nickname === 'string' && patch.nickname && patch.nickname !== exist.nickname) {
      await db.player.update({ where: { uid }, data: { nickname: patch.nickname } })
    }
    return
  }
  await db.player.create({ data: { uid, source, nickname: patch?.nickname || null } })
}

// 对外资料视图（昵称跨端同步；avatar 为网页端 emoji，小程序不用；
// username/hasWebLogin 供两端展示「网页登录账号」设置状态，密码哈希永不出服务端）
export async function publicProfile(uid: string): Promise<{ uid: string; nickname: string; avatarEmoji: string; username: string; hasWebLogin: boolean }> {
  const p = await db.player.findUnique({ where: { uid } })
  return {
    uid,
    nickname: (p && p.nickname) || '',
    avatarEmoji: (p && p.avatar) || '',
    username: (p && p.username) || '',
    hasWebLogin: !!(p && p.passwordHash),
  }
}

// 账号是否已被占用（存在任一未吊销令牌）：无令牌的 session 请求不得顶号
export async function accountOwned(uid: string): Promise<boolean> {
  const t = await db.authToken.findFirst({ where: { uid, revoked: false }, select: { token: true } })
  return !!t
}

// ---------- 绑定码 ----------

// 生成 6 位数字绑定码（同账号旧码删除，一码一用，PAIR_TTL_MS 有效）
export async function createPairCode(uid: string): Promise<{ code: string; expiresAt: string }> {
  await db.pairCode.deleteMany({ where: { uid } })
  const expiresAt = new Date(Date.now() + PAIR_TTL_MS)
  for (let i = 0; i < 6; i++) {
    const code = String(100000 + Math.floor(Math.random() * 900000))
    try {
      await db.pairCode.create({ data: { code, uid, expiresAt } })
      return { code, expiresAt: expiresAt.toISOString() }
    } catch (e) {
      /* 唯一键冲突（极小概率）→ 换号重试 */
    }
  }
  throw new Error('pair_code_exhausted')
}

// 校验并核销绑定码：有效 → 返回 uid；过期/已用/不存在 → null
export async function consumePairCode(code: string): Promise<string | null> {
  const row = await db.pairCode.findUnique({ where: { code } })
  if (!row || row.usedAt || row.expiresAt.getTime() <= Date.now()) return null
  await db.pairCode.update({ where: { code }, data: { usedAt: new Date() } })
  return row.uid
}

// ---------- 网页登录账号（用户名 + 密码，可选） ----------

// 用户名：2-24 位字母/数字/汉字/下划线/连字符（无空格与符号），
// 小写归一后存储保证唯一性大小写不敏感（汉字 toLowerCase 不变）
const USERNAME_RE = /^[\p{L}\p{N}_-]+$/u
export function normalizeUsername(u: unknown): string | null {
  if (typeof u !== 'string') return null
  const s = u.trim().toLowerCase()
  if (s.length < 2 || s.length > 24) return null
  if (!USERNAME_RE.test(s)) return null
  return s
}

// 密码：6-32 位（原样参与哈希，不做归一；太短易被猜、太长无意义）
export function passwordOk(p: unknown): string | null {
  if (typeof p !== 'string') return null
  if (p.length < 6 || p.length > 32) return null
  return p
}

// scrypt 加盐哈希（Node 内置，无外部依赖）：格式 s2$<salt 16B hex>$<key 32B hex>
const SCRYPT_KEYLEN = 32
export function hashPassword(pw: string): string {
  const salt = randomBytes(16)
  const key = scryptSync(pw, salt, SCRYPT_KEYLEN)
  return 's2$' + salt.toString('hex') + '$' + key.toString('hex')
}

export function verifyPassword(pw: string, stored: string): boolean {
  try {
    const parts = stored.split('$')
    if (parts.length !== 3 || parts[0] !== 's2') return false
    const salt = Buffer.from(parts[1], 'hex')
    const key = Buffer.from(parts[2], 'hex')
    if (salt.length !== 16 || key.length !== SCRYPT_KEYLEN) return false
    return timingSafeEqual(scryptSync(pw, salt, SCRYPT_KEYLEN), key)
  } catch (e) {
    return false
  }
}

// 登录失败限速（单实例内存口径，家庭自用产品）：同用户名 5 次失败锁 60s，成功即清零
const loginFails = new Map<string, { n: number; until: number }>()
function loginLocked(username: string): boolean {
  const e = loginFails.get(username)
  return !!e && e.until > Date.now()
}
function noteLoginFail(username: string) {
  const e = loginFails.get(username) || { n: 0, until: 0 }
  e.n += 1
  if (e.n >= 5) {
    e.until = Date.now() + 60 * 1000
    e.n = 0
  }
  loginFails.set(username, e)
}
function noteLoginOk(username: string) {
  loginFails.delete(username)
}

// 设置/更新网页登录账号：username 全局唯一（冲突返回 taken），密码覆盖旧值
export async function setWebCredentials(uid: string, username: string, password: string): Promise<'ok' | 'taken'> {
  try {
    await db.player.update({ where: { uid }, data: { username, passwordHash: hashPassword(password) } })
    return 'ok'
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') return 'taken'
    throw e
  }
}

// 用户名密码登录：成功返回 uid；用户不存在/未设密码/密码错误/被限速一律 'bad'（不区分原因，防枚举）
export async function webLogin(username: string, password: string): Promise<{ uid: string } | 'bad'> {
  if (loginLocked(username)) return 'bad'
  const p = await db.player.findUnique({ where: { username } })
  if (!p || !p.passwordHash || !verifyPassword(password, p.passwordHash)) {
    noteLoginFail(username)
    return 'bad'
  }
  noteLoginOk(username)
  return { uid: p.uid }
}

// 网页端注册新账号：wu_ 前缀 uid，昵称默认取用户名；用户名冲突返回 'taken'
export async function webRegister(username: string, password: string): Promise<{ uid: string } | 'taken'> {
  const uid = 'wu_' + randomBytes(20).toString('hex')
  try {
    await db.player.create({
      data: { uid, source: 'web', username, passwordHash: hashPassword(password), nickname: username },
    })
    return { uid }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') return 'taken'
    throw e
  }
}

// ---------- 云端存档 ----------

// 存档载荷校验：state 必须是可序列化普通对象且不超限；返回规范化 JSON 字符串或 null
export function saveDataOk(state: unknown): string | null {
  if (!state || typeof state !== 'object' || Array.isArray(state)) return null
  try {
    const data = JSON.stringify(state)
    if (data.length > SAVE_MAX_BYTES) return null
    return data
  } catch (e) {
    return null
  }
}

// ---------- 微信 code2session ----------

// wx.login code → openid / session_key（session_key 只留服务端日志之外，不返回）
export async function code2session(code: string, appid: string, secret: string): Promise<{ openid: string } | null> {
  const url =
    'https://api.weixin.qq.com/sns/jscode2session?appid=' +
    encodeURIComponent(appid) +
    '&secret=' +
    encodeURIComponent(secret) +
    '&js_code=' +
    encodeURIComponent(code) +
    '&grant_type=authorization_code'
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 8000)
    const res = await fetch(url, { signal: ctrl.signal })
    clearTimeout(timer)
    if (!res.ok) return null
    const data = (await res.json()) as { openid?: string; errcode?: number; errmsg?: string }
    if (data && typeof data.openid === 'string' && data.openid) return { openid: data.openid }
    return null
  } catch (e) {
    return null
  }
}
