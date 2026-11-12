// 微信扫码登录 · 小程序码直出：GET ?token=<扫码凭证> → image/png
// 服务端以 stable_token + getwxacodeunlimit 生成（scene=token，落点 pages/web-login/index），
// 网页端 <img>/blob 直用，二维码内容不落网页端代码。
// 失败语义：404 凭证无效（不存在）| 410 凭证已过期 | 502 { error } 微信侧失败（40164=服务器 IP 不在白名单等）
import { NextRequest, NextResponse } from 'next/server'
import { wxacodeScene } from '@/lib/cloud-server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const token = (req.nextUrl.searchParams.get('token') || '').trim()
  if (!/^[0-9a-f]{16}$/.test(token)) {
    return NextResponse.json({ error: 'qr_invalid' }, { status: 404 })
  }
  const row = await db.qrLogin.findUnique({ where: { token } })
  if (!row) return NextResponse.json({ error: 'qr_invalid' }, { status: 404 })
  if (row.expiresAt.getTime() <= Date.now()) return NextResponse.json({ error: 'qr_expired' }, { status: 410 })

  const r = await wxacodeScene(token)
  if ('err' in r) return NextResponse.json({ error: r.err }, { status: 502 })

  return new NextResponse(new Uint8Array(r.png), {
    headers: {
      'content-type': r.type || 'image/png', // 微信实际返回 image/jpeg 字节，透传实际类型
      'cache-control': 'no-store',
    },
  })
}
