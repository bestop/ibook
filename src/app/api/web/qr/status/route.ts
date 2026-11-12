// 微信扫码登录 · 网页端轮询：GET ?token=<扫码凭证> → 200 { status: ... }
//   pending   { status: 'pending' }                        继续轮询（网页端 2s 间隔）
//   confirmed { status: 'confirmed', uid, token, profile } 小程序已确认：本次响应签发网页令牌并核销凭证
//   expired   { status: 'expired' }                        过期 / 已核销 / 不存在（网页端提示刷新）
// 恒 200 返回状态字段，便于前端统一分支处理。
import { NextRequest, NextResponse } from 'next/server'
import { pollQrLogin } from '@/lib/cloud-server'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const token = (req.nextUrl.searchParams.get('token') || '').trim()
  if (!/^[0-9a-f]{16}$/.test(token)) return NextResponse.json({ status: 'expired' })

  const r = await pollQrLogin(token)
  if (r.status === 'confirmed') {
    return NextResponse.json({ status: 'confirmed', uid: r.uid, token: r.token, profile: r.profile })
  }
  return NextResponse.json({ status: r.status })
}
