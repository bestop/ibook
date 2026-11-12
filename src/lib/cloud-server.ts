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
//     不能被无令牌请求重新开通（防陌生设备顶号），绑定码是唯一跨设备入口。
import { NextRequest } from 'next/server'
import { createHash, randomBytes } from 'crypto'
import { db } from '@/lib/db'

const UID_RE = /^(w1_[0-9a-f]{40}|gid-[0-9a-z-]{4,48})$/
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

// 对外资料视图（昵称跨端同步；avatar 为网页端 emoji，小程序不用）
export async function publicProfile(uid: string): Promise<{ uid: string; nickname: string; avatarEmoji: string }> {
  const p = await db.player.findUnique({ where: { uid } })
  return { uid, nickname: (p && p.nickname) || '', avatarEmoji: (p && p.avatar) || '' }
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
