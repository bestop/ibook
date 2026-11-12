// 微信扫码登录 · 小程序端确认：扫码进入 pages/web-login/index 后，Bearer 鉴权确认本次网页登录
// POST { token } → 200 { ok: true }
//   401 unauthorized（小程序端令牌缺失/失效）| 410 { error: 'qr_expired' } | 404 { error: 'qr_invalid' }
// 确认后网页端轮询到 confirmed 即登录同一统一账号（与账号密码/绑定码登录同一套 AuthToken）。
import { NextRequest, NextResponse } from 'next/server'
import { auth, confirmQrLogin } from '@/lib/cloud-server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const authInfo = await auth(req)
  if (!authInfo) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })

  const body = (await req.json().catch(() => null)) as { token?: unknown } | null
  const token = body && typeof body.token === 'string' ? body.token.trim() : ''
  if (!/^[0-9a-f]{16}$/.test(token)) return NextResponse.json({ error: 'qr_invalid' }, { status: 404 })

  const r = await confirmQrLogin(token, authInfo.uid)
  if (r === 'expired') return NextResponse.json({ error: 'qr_expired' }, { status: 410 })
  if (r === 'invalid') return NextResponse.json({ error: 'qr_invalid' }, { status: 404 })
  return NextResponse.json({ ok: true })
}
