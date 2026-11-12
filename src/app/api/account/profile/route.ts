// 更新展示资料（昵称跨端同步；头像为网页端 emoji，仅网页端使用）
// POST（Bearer）{ nickname?, avatarEmoji? } → 200 { profile }
import { NextRequest, NextResponse } from 'next/server'
import { auth, publicProfile } from '@/lib/cloud-server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const authInfo = await auth(req)
  if (!authInfo) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const body = (await req.json().catch(() => null)) as { nickname?: unknown; avatarEmoji?: unknown } | null
  if (!body) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  const data: { nickname?: string; avatar?: string } = {}
  if (typeof body.nickname === 'string') {
    const nick = body.nickname.trim().slice(0, 12)
    if (!nick) return NextResponse.json({ error: 'nickname_required' }, { status: 400 })
    data.nickname = nick
  }
  if (typeof body.avatarEmoji === 'string') data.avatar = body.avatarEmoji.slice(0, 8)
  if (Object.keys(data).length === 0) return NextResponse.json({ error: 'bad_request' }, { status: 400 })

  await db.player.update({ where: { uid: authInfo.uid }, data })
  return NextResponse.json({ profile: await publicProfile(authInfo.uid) })
}
