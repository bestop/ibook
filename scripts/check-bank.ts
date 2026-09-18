// 题库数据完整性自检
import { SUBJECTS, ALL_QUESTIONS, buildLevelQuestions } from '../src/lib/questions'

let errors = 0
const fail = (msg: string) => {
  errors++
  console.log('❌ ' + msg)
}

// 1. 每科 8 单元 × 10 题，ID 唯一，答案索引合法
for (const s of SUBJECTS) {
  console.log(`\n📘 科目：${s.name}（${s.publisher}）`)
  if (s.units.length !== 8) fail(`${s.name} 单元数 ${s.units.length} ≠ 8`)
  const seen = new Set<string>()
  for (const u of s.units) {
    const qs = s.questions[u.id] || []
    if (qs.length !== 10) fail(`${s.name} ${u.id}「${u.title}」题数 ${qs.length} ≠ 10`)
    for (const q of qs) {
      if (seen.has(q.id)) fail(`重复题目 ID: ${q.id}`)
      seen.add(q.id)
      if (q.answer < 0 || q.answer >= q.options.length) fail(`${q.id} 答案索引越界`)
      if (q.options.length < 2) fail(`${q.id} 选项不足`)
      if (!q.explain) fail(`${q.id} 缺解析`)
      if (q.type !== 'choice' && q.type !== 'judge') fail(`${q.id} 非法题型 ${q.type}`)
    }
    console.log(`  ${u.emoji} ${u.name}「${u.title}」${qs.length} 题 ✅`)
  }
}

// 2. 全局唯一性 + 总数
console.log(`\n总题数: ${ALL_QUESTIONS.length}（期望 160）`)
if (ALL_QUESTIONS.length !== 160) fail('总题数不是 160')
const ids = ALL_QUESTIONS.map((q) => q.id)
if (new Set(ids).size !== ids.length) fail('跨科目存在重复 ID')

// 3. 抽样构建闯关题目（选项打乱后答案索引仍指向正确选项文本）
for (const s of SUBJECTS) {
  for (const u of s.units) {
    const items = buildLevelQuestions(s.id, u.id)
    for (const it of items) {
      const correctText = it.question.options[it.question.answer]
      if (it.options[it.answer] !== correctText) fail(`${s.id}/${u.id} 打乱后答案错位: ${it.question.id}`)
    }
  }
}
console.log('选项打乱后答案映射检查完成')

// 4. 打印数学关卡列表，供人工核对
const math = SUBJECTS.find((s) => s.id === 'math')!
console.log('\n📐 数学关卡（沪教版五年级第一学期）:')
for (const u of math.units) console.log(`  ${u.emoji} ${u.name}「${u.title}」: ${u.lessons.join('、')}`)

if (errors > 0) {
  console.log(`\n❌ 共 ${errors} 个问题`)
  process.exit(1)
}
console.log('\n✅ 题库自检全部通过！')
