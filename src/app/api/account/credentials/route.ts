// 设置/更新网页登录账号（用户名+密码）：Bearer 鉴权后绑定到当前统一账号
// POST { username, password } → 200 { profile } | 401 unauthorized | 409 username_taken | 400 bad_request
// 密码 scrypt 加盐哈希存储（见 lib/cloud-server）；设置后网页端可用用户名密码登录同一账号
import { NextRequest, NextResponse } from 'next/server'
import { auth, normalizeUsername, passwordOk, publicProfile, setWebCredentials } from '@/lib/cloud-server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const authInfo = await auth(req)
  if (!authInfo) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const body = (await req.json().catch(() => null)) as { username?: unknown; password?: unknown } | null
  const username = body ? normalizeUsername(body.username) : null
  const password = body ? passwordOk(body.password) : null
  if (!username || !password) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  const r = await setWebCredentials(authInfo.uid, username, password)
  if (r === 'taken') return NextResponse.json({ error: 'username_taken' }, { status: 409 })
  return NextResponse.json({ profile: await publicProfile(authInfo.uid) })
}
