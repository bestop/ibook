// 网页端凭绑定码登录：claim 小程序生成的绑定码 → 绑定同一统一账号、签发网页令牌
// POST { code } → 200 { uid, token, profile }
//   绑定码过期/已用/不存在 → 410 { error: 'code_invalid' }
import { NextRequest, NextResponse } from 'next/server'
import { consumePairCode, issueToken, publicProfile } from '@/lib/cloud-server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as { code?: unknown } | null
  const code = body && typeof body.code === 'string' ? body.code.replace(/\D/g, '') : ''
  if (code.length !== 6) return NextResponse.json({ error: 'code_invalid' }, { status: 410 })

  const uid = await consumePairCode(code)
  if (!uid) return NextResponse.json({ error: 'code_invalid' }, { status: 410 })

  const token = await issueToken(uid, 'web')
  return NextResponse.json({ uid, token, profile: await publicProfile(uid) })
}
