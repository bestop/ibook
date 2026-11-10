// 一周与日期键单一事实源（借鉴聪聪学堂 week.ts：日历周从周一开始，中国校历习惯）
// 仅用于「本周签到格」展示：全部按本地日历日计算，不做 UTC 换算，跨月/跨年安全。
// 纯函数零依赖，与小程序 utils/week.js 同构（文案与排序规则一致）。

export interface WeekSignDay {
  /** 日期键 YYYY-MM-DD */
  key: string
  /** 周几单字（一~日） */
  label: string
  /** 是否今天（高亮描边） */
  isToday: boolean
  /** 当天是否签到 */
  signed: boolean
}

/** 返回本周周一到周日的签到格数据（signInDates: ['YYYY-MM-DD', ...]） */
export function weekSignDays(signInDates: string[], today: string): WeekSignDay[] {
  const set = new Set(Array.isArray(signInDates) ? signInDates : [])
  // 解析 today 为本地时区 00:00（避免 new Date('YYYY-MM-DD') 按 UTC 解析的时区偏移）
  const parts = String(today || '').split('-').map(Number)
  const valid =
    parts.length === 3 && parts.every((n) => Number.isFinite(n))
  const now = valid ? new Date(parts[0], parts[1] - 1, parts[2]) : new Date()
  // 周一=1 … 周日=7（把周日从 0 折到 7，保证周一起始）
  const dow = now.getDay() === 0 ? 7 : now.getDay()
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - (dow - 1))
  const labels = ['一', '二', '三', '四', '五', '六', '日']
  const days: WeekSignDay[] = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    days.push({ key, label: labels[i], isToday: key === today, signed: set.has(key) })
  }
  return days
}

/** 本地时区下把 Date 格式化成 YYYY-MM-DD（与小程序 todayStr 同构） */
export function todayKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
