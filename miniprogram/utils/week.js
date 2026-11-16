// 一周与日期键单一事实源（借鉴聪聪学堂 week.ts：日历周从周一开始，中国校历习惯）
// 仅用于「本周签到格」展示：全部按本地日历日计算，不做 UTC 换算，跨月/跨年安全。
// 纯函数零依赖，与网页版 lib/week.ts 同构（文案与排序规则一致）。

// 返回本周周一到周日的签到格数据：[{ key, label, isToday, signed }]
// signInDates: ['YYYY-MM-DD', ...]（store.signInDates）；today: 'YYYY-MM-DD'
function weekSignDays(signInDates, today) {
  const dates = Array.isArray(signInDates) ? signInDates : []
  const set = {}
  dates.forEach(function (d) { set[d] = true })
  // 解析 today 为本地时区 00:00（避免 new Date('YYYY-MM-DD') 按 UTC 解析的时区偏移）
  const parts = String(today || '').split('-').map(Number)
  const now =
    parts.length === 3 && parts.every(function (n) { return isFinite(n) })
      ? new Date(parts[0], parts[1] - 1, parts[2])
      : new Date()
  // 周一=1 … 周日=7（把周日从 0 折到 7，保证周一起始）
  const dow = now.getDay() === 0 ? 7 : now.getDay()
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - (dow - 1))
  const labels = ['一', '二', '三', '四', '五', '六', '日']
  const days = []
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i)
    const key =
      d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0')
    days.push({
      key: key,
      label: labels[i],
      isToday: key === today,
      signed: !!set[key],
    })
  }
  return days
}

// 本周学习报告（借鉴聪聪学堂 WeeklyReportCard：近 7 天柱状图 + 与上周对比，与网页版同构）
// dayStats: { 'YYYY-MM-DD': 当日学习秒数 }（store.dayStats）；today: 'YYYY-MM-DD'
// 返回: { days: [{key,label,minutes,isToday,pct}], totalMinutes, activeDays, lastWeekMinutes, deltaMinutes }
function weekReport(dayStats, today) {
  const stats = isPlainObject(dayStats) ? dayStats : {}
  const t = validDateKey(today) || todayStrFromDate(new Date())
  const thisKeys = weekKeys(t)
  const lastKeys = weekKeys(shiftDateKey(t, -7))
  const days = []
  let totalSec = 0
  let maxMin = 0
  for (let i = 0; i < thisKeys.length; i++) {
    const sec = Math.max(0, Number(stats[thisKeys[i]]) || 0)
    const minutes = Math.floor(sec / 60)
    totalSec += sec
    if (minutes > maxMin) maxMin = minutes
    days.push({
      key: thisKeys[i],
      label: LABELS[i],
      minutes: minutes,
      isToday: thisKeys[i] === t,
      pct: 0, // 柱高百分比，下方统一按最大值归一
    })
  }
  days.forEach(function (d) {
    d.pct = maxMin > 0 ? Math.max(6, Math.round((d.minutes / maxMin) * 100)) : 6
  })
  let lastSec = 0
  lastKeys.forEach(function (k) {
    lastSec += Math.max(0, Number(stats[k]) || 0)
  })
  const totalMinutes = Math.floor(totalSec / 60)
  const lastWeekMinutes = Math.floor(lastSec / 60)
  return {
    days: days,
    totalMinutes: totalMinutes,
    lastWeekMinutes: lastWeekMinutes,
    deltaMinutes: totalMinutes - lastWeekMinutes,
    activeDays: days.filter(function (d) { return d.minutes > 0 }).length,
  }
}

const LABELS = ['一', '二', '三', '四', '五', '六', '日']

function isPlainObject(v) {
  return !!v && typeof v === 'object' && !Array.isArray(v)
}

function todayStrFromDate(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0')
}

// 'YYYY-MM-DD' 合法性检查（非法返回 null，与 weekSignDays 的容错口径一致）
function validDateKey(key) {
  const parts = String(key || '').split('-').map(Number)
  if (parts.length === 3 && parts.every(function (n) { return isFinite(n) })) return String(key)
  return null
}

// 返回包含 today 的日历周（周一起始）的 7 个日期键
function weekKeys(today) {
  return weekSignDays([], today).map(function (d) { return d.key })
}

// 日期键平移 n 天（n 可为负）；非法输入回退为今天
function shiftDateKey(key, n) {
  const parts = String(key || '').split('-').map(Number)
  const d =
    parts.length === 3 && parts.every(function (x) { return isFinite(x) })
      ? new Date(parts[0], parts[1] - 1, parts[2] + (n || 0))
      : new Date()
  return todayStrFromDate(d)
}

module.exports = { weekSignDays: weekSignDays, weekReport: weekReport }
