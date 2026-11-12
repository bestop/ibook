// 小程序微信登录：wx.login code → code2session 换 openid → 统一账号令牌
// 契约（见小程序 README「用户系统与微信登录」）：POST { code } → 200 { openid, token, profile }
//   - 未配置 WX_APPID/WX_SECRET → 503 { error: 'server_not_configured' }（小程序端自动降级本机身份）
//   - code 无效 / 微信侧失败 → 502 { error: 'code2session_failed' }（同上降级）
//   - openid 哈希为 uid 后返回（安全红线：openid 明文不出服务端）
//   - token 为统一账号令牌：小程序端拿到即开通云端同步（utils/user.js 落 storage，
//     utils/cloud.js 用它上传/恢复进度与生成绑定码）
import { NextRequest, NextResponse } from 'next/server'
import { code2session, ensurePlayer, issueToken, publicProfile, uidFromOpenid } from '@/lib/cloud-server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const appid = process.env.WX_APPID
  const secret = process.env.WX_SECRET
  if (!appid || !secret) {
    return NextResponse.json({ error: 'server_not_configured' }, { status: 503 })
  }
  const body = (await req.json().catch(() => null)) as { code?: unknown } | null
  const code = body && typeof body.code === 'string' ? body.code : ''
  if (!code) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  const sess = await code2session(code, appid, secret)
  if (!sess) return NextResponse.json({ error: 'code2session_failed' }, { status: 502 })

  const uid = uidFromOpenid(sess.openid)
  await ensurePlayer(uid, 'wechat')
  const token = await issueToken(uid, 'mp')
  return NextResponse.json({ openid: uid, token, profile: await publicProfile(uid) })
}
