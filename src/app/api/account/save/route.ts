// 云端存档读写（小程序与网页端共用，Bearer 鉴权）
// GET  → 200 { empty: true }（从未上传）| 200 { rev, savedAt, platform, state }
// PUT  { state, platform } → 200 { rev, savedAt }   last-write-wins，rev 单调递增
import { NextRequest, NextResponse } from 'next/server'
import { auth, saveDataOk } from '@/lib/cloud-server'
import { db } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const authInfo = await auth(req)
  if (!authInfo) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const row = await db.cloudSave.findUnique({ where: { uid: authInfo.uid } })
  if (!row) return NextResponse.json({ empty: true })
  let state: unknown = null
  try {
    state = JSON.parse(row.data)
  } catch (e) {
    return NextResponse.json({ empty: true })
  }
  return NextResponse.json({ rev: row.rev, savedAt: row.savedAt.toISOString(), platform: row.platform, state })
}

export async function PUT(req: NextRequest) {
  const authInfo = await auth(req)
  if (!authInfo) return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  const body = (await req.json().catch(() => null)) as { state?: unknown; platform?: unknown } | null
  const platform = body && body.platform === 'web' ? 'web' : 'mp'
  const data = body ? saveDataOk(body.state) : null
  if (!data) return NextResponse.json({ error: 'bad_payload' }, { status: 400 })

  const prev = await db.cloudSave.findUnique({ where: { uid: authInfo.uid } })
  const row = prev
    ? await db.cloudSave.update({ where: { uid: authInfo.uid }, data: { data, platform, rev: { increment: 1 } } })
    : await db.cloudSave.create({ data: { uid: authInfo.uid, data, platform, rev: 1 } })
  return NextResponse.json({ rev: row.rev, savedAt: row.savedAt.toISOString() })
}
