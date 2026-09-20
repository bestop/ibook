// 小程序端数据源：单科目题库（全部关卡 + 题目）
// 用法：GET /api/mp/bank?subject=chinese1
// 返回带 version（内容哈希），小程序缓存命中同 version 时无需重复下载。
import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { SUBJECTS } from '@/lib/questions'

export const dynamic = 'force-dynamic' // 含查询参数，按科目返回

export function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('subject') || ''
  const subject = SUBJECTS.find((s) => s.id === id)
  if (!subject) {
    return NextResponse.json({ error: `unknown subject: ${id}` }, { status: 404 })
  }
  const units = subject.units.map((u) => ({
    id: u.id,
    questions: (subject.questions[u.id] || []).map((q) => ({
      id: q.id,
      type: q.type,
      q: q.q,
      options: q.options,
      answer: q.answer,
      explain: q.explain,
      tag: q.tag,
    })),
  }))
  const version = createHash('sha1').update(JSON.stringify(units)).digest('hex').slice(0, 12)
  return new NextResponse(JSON.stringify({ subjectId: subject.id, version, units }), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
