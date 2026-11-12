// 微信扫码登录 · 网页端发起：创建待确认凭证（5 分钟有效、一码一用）
// POST（无鉴权：扫码前网页端还没有账号身份）→ 200 { token, expiresAt, qrUrl }
//   - 未配置 WX_APPID/WX_SECRET → 503 { error: 'server_not_configured' }（网页端提示扫码登录未启用）
//   - 凭证用于换取小程序码（/api/web/qr/qrcode）与轮询（/api/web/qr/status）
import { NextRequest, NextResponse } from 'next/server'
import { createQrLogin } from '@/lib/cloud-server'

export const dynamic = 'force-dynamic'

export async function POST(_req: NextRequest) {
  if (!process.env.WX_APPID || !process.env.WX_SECRET) {
    return NextResponse.json({ error: 'server_not_configured' }, { status: 503 })
  }
  const { token, expiresAt } = await createQrLogin()
  return NextResponse.json({
    token,
    expiresAt,
    qrUrl: '/api/web/qr/qrcode?token=' + token,
  })
}
