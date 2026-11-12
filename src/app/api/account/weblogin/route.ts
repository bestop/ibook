// 网页端用户名密码登录：小程序端「设置网页登录账号」的账号 或 网页端注册的账号，同一统一账号体系
// POST { username, password } → 200 { uid, token, profile } | 401 bad_credentials（不区分原因，防枚举）
import { NextRequest, NextResponse } from 'next/server'
import { issueToken, normalizeUsername, passwordOk, publicProfile, webLogin } from '@/lib/cloud-server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as { username?: unknown; password?: unknown } | null
  const username = body ? normalizeUsername(body.username) : null
  const password = body ? passwordOk(body.password) : null
  if (!username || !password) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  const r = await webLogin(username, password)
  if (r === 'bad') return NextResponse.json({ error: 'bad_credentials' }, { status: 401 })
  const token = await issueToken(r.uid, 'web')
  return NextResponse.json({ uid: r.uid, token, profile: await publicProfile(r.uid) })
}
