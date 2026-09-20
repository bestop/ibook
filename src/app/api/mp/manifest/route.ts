// 小程序端数据源：科目/关卡清单（manifest）
// 小程序启动时拉取本接口，获得全部科目元信息与内容版本号（version）。
// 题目内容变化（新教材/改题）会随重新构建改变 version，小程序据此增量同步题库。
import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { SUBJECTS } from '@/lib/questions'

export const dynamic = 'force-static' // 构建时预渲染，Vercel CDN 直出

export function GET() {
  const subjects = SUBJECTS.map((s) => ({
    id: s.id,
    name: s.name,
    grade: s.grade,
    gradeNum: s.gradeNum,
    term: s.term,
    publisher: s.publisher,
    publisherKey: s.publisherKey,
    badge: s.badge ?? '',
    emoji: s.emoji,
    theme: s.theme,
    tagline: s.tagline,
    levelCount: s.units.length,
    units: s.units.map((u) => ({
      id: u.id,
      name: u.name,
      title: u.title,
      emoji: u.emoji,
      color: u.color,
      intro: u.intro,
      lessons: u.lessons,
    })),
  }))
  const version = createHash('sha1').update(JSON.stringify(subjects)).digest('hex').slice(0, 12)
  return NextResponse.json(
    {
      name: '小明乐学岛',
      version, // 全库内容版本号
      generatedAt: new Date().toISOString(),
      counts: { subjects: subjects.length, levels: subjects.reduce((n, s) => n + s.levelCount, 0) },
      subjects,
    },
    { headers: { 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'public, max-age=300' } }
  )
}
