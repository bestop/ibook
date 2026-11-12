// 网页端注册新账号（独立于小程序；用户名全局唯一，小写归一）：注册即登录并开通云端同步
// POST { username, password } → 200 { uid, token, profile } | 409 username_taken | 400 bad_request
import { NextRequest, NextResponse } from 'next/server'
import { issueToken, normalizeUsername, passwordOk, publicProfile, webRegister } from '@/lib/cloud-server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as { username?: unknown; password?: unknown } | null
  const username = body ? normalizeUsername(body.username) : null
  const password = body ? passwordOk(body.password) : null
  if (!username || !password) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  const r = await webRegister(username, password)
  if (r === 'taken') return NextResponse.json({ error: 'username_taken' }, { status: 409 })
  const token = await issueToken(r.uid, 'web')
  return NextResponse.json({ uid: r.uid, token, profile: await publicProfile(r.uid) })
}
