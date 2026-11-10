'use client'

// 网页端语音朗读（Web Speech API，零后端零音频资产）
// 对标聪聪学堂「全站语音」：低年级孩子识字量有限，语音是独立学习的刚需。
// 智能分语种：中文段用 zh-CN，英文/字母段用 en-US（英语科目的单词句子获得原声朗读）。
// 注意：小程序端无系统 TTS 能力，微信同声传译插件需账号主体在后台添加授权后才能声明，
// 为避免上传失败，小程序端本轮不接语音（worklog 已记录）。

export function ttsSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window
}

export function stopSpeak(): void {
  if (ttsSupported()) window.speechSynthesis.cancel()
}

const CJK_RE = /[\u4e00-\u9fff\u3000-\u303f\uff01-\uff5e\u2018\u2019\u201c\u201d\u00b7\u2026]/

interface Segment {
  text: string
  lang: 'zh-CN' | 'en-US'
}

// 按字符语言把文本切成连续段（中英混排：各用各的嗓音）
function segment(text: string): Segment[] {
  const segs: Segment[] = []
  let cur = ''
  let curCJK: boolean | null = null
  for (const ch of text) {
    const cjk = CJK_RE.test(ch)
    if (curCJK === null || cjk === curCJK) {
      cur += ch
      curCJK = cjk
    } else {
      segs.push({ text: cur, lang: curCJK ? 'zh-CN' : 'en-US' })
      cur = ch
      curCJK = cjk
    }
  }
  if (cur) segs.push({ text: cur, lang: curCJK ? 'zh-CN' : 'en-US' })
  return segs.filter((s) => s.text.trim().length > 0)
}

// 朗读一段文本；朗读中再次调用会打断上一段（cancel 语义）
export function speak(text: string, rate = 0.95): void {
  if (!ttsSupported() || !text.trim()) return
  const synth = window.speechSynthesis
  synth.cancel()
  // voices 列表可能异步就绪；取不到匹配嗓音时仅设 lang，由浏览器按语言挑选默认嗓音
  const voices = synth.getVoices()
  for (const seg of segment(text)) {
    const u = new SpeechSynthesisUtterance(seg.text)
    u.lang = seg.lang
    u.rate = seg.lang === 'zh-CN' ? rate : Math.max(0.7, rate - 0.1)
    u.pitch = 1.1 // 稍高的音色更亲近孩子
    const v = voices.find((x) => x.lang.replace('_', '-').toLowerCase().startsWith(seg.lang.toLowerCase()))
    if (v) u.voice = v
    synth.speak(u)
  }
}
