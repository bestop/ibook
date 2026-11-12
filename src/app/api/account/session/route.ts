// 统一账号会话开通：本机降级身份（gid-）申请云端令牌；也用于补签会话
// POST { uid, platform: 'mp', nickname? } → 200 { uid, token, profile }
//
// 防顶号：账号已存在且持有任一未吊销令牌时，无有效 Bearer 的请求一律 403
// ——绑定码（/api/account/claim）是唯一合法的跨设备入口。
import { NextRequest, NextResponse } from 'next/server'
import { accountOwned, auth, ensurePlayer, issueToken, publicProfile, uidOk } from '@/lib/cloud-server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as { uid?: unknown; nickname?: unknown } | null
  if (!body || !uidOk(body.uid)) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  const owned = await accountOwned(body.uid)
  const authInfo = await auth(req)
  if (owned && !authInfo) return NextResponse.json({ error: 'account_taken' }, { status: 403 })
  if (authInfo && authInfo.uid !== body.uid) return NextResponse.json({ error: 'token_mismatch' }, { status: 403 })

  const nickname = typeof body.nickname === 'string' ? body.nickname.trim().slice(0, 12) : ''
  await ensurePlayer(body.uid, 'local', nickname ? { nickname } : undefined)
  const token = await issueToken(body.uid, 'mp')
  return NextResponse.json({ uid: body.uid, token, profile: await publicProfile(body.uid) })
}

// 退出登录：吊销当前令牌（登出端）。学习进度不受影响（云端档保留，重新登录可恢复）。
export async function DELETE(req: NextRequest) {
  const authInfo = await auth(req)
  if (!authInfo) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const header = req.headers.get('authorization') || ''
  const m = /^Bearer\s+([0-9a-f]{32,96})$/i.exec(header)
  if (m) {
    try {
      await db.authToken.update({ where: { token: m[1] }, data: { revoked: true } })
    } catch (e) {
      /* 令牌已不存在时忽略 */
    }
  }
  return NextResponse.json({ ok: true })
}
