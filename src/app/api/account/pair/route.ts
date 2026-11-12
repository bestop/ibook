// 小程序生成网页绑定码（一次性、10 分钟有效）：登录态才能生成
// POST（Bearer）→ 200 { code, expiresAt }
import { NextRequest, NextResponse } from 'next/server'
import { auth, createPairCode } from '@/lib/cloud-server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const authInfo = await auth(req)
  if (!authInfo) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const { code, expiresAt } = await createPairCode(authInfo.uid)
  return NextResponse.json({ code, expiresAt })
}
