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

// ============ 本周学习报告（借鉴聪聪学堂 WeeklyReportCard，与小程序 utils/week.js 同构） ============

export interface WeekReportDay {
  /** 日期键 YYYY-MM-DD */
  key: string
  /** 周几单字（一~日） */
  label: string
  /** 当日学习分钟数 */
  minutes: number
  /** 是否今天（柱体高亮） */
  isToday: boolean
  /** 柱高百分比（按本周最大分钟归一，最小 6% 保底可见） */
  pct: number
}

export interface WeekReport {
  days: WeekReportDay[]
  /** 本周总学习分钟 */
  totalMinutes: number
  /** 本周有学习记录的天数（分钟 > 0） */
  activeDays: number
  /** 上周总学习分钟 */
  lastWeekMinutes: number
  /** 与上周的差值（本周 - 上周） */
  deltaMinutes: number
}

/** 返回包含 today 的日历周（周一起始）的 7 个日期键 */
function weekKeys(today: string): string[] {
  return weekSignDays([], today).map((d) => d.key)
}

/** 日期键平移 n 天（n 可为负）；非法输入回退为今天 */
function shiftDateKey(key: string, n: number): string {
  const parts = String(key || '').split('-').map(Number)
  const d =
    parts.length === 3 && parts.every((x) => Number.isFinite(x))
      ? new Date(parts[0], parts[1] - 1, parts[2] + (n || 0))
      : new Date()
  return todayKey(d)
}

/**
 * 本周学习报告：近 7 天每日分钟柱状图 + 学习天数 + 与上周对比。
 * dayStats: { 'YYYY-MM-DD': 当日学习秒数 }（game store 的 dayStats）。
 */
export function weekReport(dayStats: Record<string, number> | undefined, today: string): WeekReport {
  const stats = dayStats && typeof dayStats === 'object' ? dayStats : {}
  const parts = String(today || '').split('-').map(Number)
  const t =
    parts.length === 3 && parts.every((n) => Number.isFinite(n)) ? String(today) : todayKey()
  const thisKeys = weekKeys(t)
  const lastKeys = weekKeys(shiftDateKey(t, -7))
  const days: WeekReportDay[] = []
  let totalSec = 0
  let maxMin = 0
  thisKeys.forEach((key, i) => {
    const sec = Math.max(0, Number(stats[key]) || 0)
    const minutes = Math.floor(sec / 60)
    totalSec += sec
    if (minutes > maxMin) maxMin = minutes
    days.push({ key, label: ['一', '二', '三', '四', '五', '六', '日'][i], minutes, isToday: key === t, pct: 0 })
  })
  days.forEach((d) => {
    d.pct = maxMin > 0 ? Math.max(6, Math.round((d.minutes / maxMin) * 100)) : 6
  })
  let lastSec = 0
  lastKeys.forEach((k) => {
    lastSec += Math.max(0, Number(stats[k]) || 0)
  })
  const totalMinutes = Math.floor(totalSec / 60)
  const lastWeekMinutes = Math.floor(lastSec / 60)
  return {
    days,
    totalMinutes,
    activeDays: days.filter((d) => d.minutes > 0).length,
    lastWeekMinutes,
    deltaMinutes: totalMinutes - lastWeekMinutes,
  }
}
