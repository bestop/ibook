// 数据同步层：教材与闯关内容全部从网页端获取
// manifest（科目清单）每次启动拉取；bank（题库）按科目+版本号增量缓存。
// 合法域名：主用 lx.hikid.vip（小程序专用数据域名），
// 网络异常时自动回退 www.hikid.org（网页版主域，同源同内容）。
const DOMAINS = ['https://lx.hikid.vip', 'https://www.hikid.org']
const BASE = DOMAINS[0]
const MANIFEST_KEY = 'mp-manifest-v1'
const BANK_KEY_PREFIX = 'mp-bank-v1-'

function requestOnce(base, path) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: base + path,
      method: 'GET',
      dataType: 'json',
      timeout: 15000,
      success(res) {
        if (res.statusCode === 200) resolve(res.data)
        else reject(new Error('服务器返回 ' + res.statusCode))
      },
      fail() {
        reject(new Error('网络异常，请检查网络后重试'))
      },
    })
  })
}

// 依次尝试 DOMAINS：主域失败自动切换备用域
function request(path) {
  return new Promise((resolve, reject) => {
    let idx = 0
    const attempt = (lastErr) => {
      if (idx >= DOMAINS.length) {
        reject(lastErr || new Error('网络异常，请检查网络后重试'))
        return
      }
      requestOnce(DOMAINS[idx++], path).then(resolve, attempt)
    }
    attempt(null)
  })
}

// 拉取科目清单（含全库 version）
function getManifest() {
  return request('/api/mp/manifest').then((manifest) => {
    try {
      wx.setStorageSync(MANIFEST_KEY, { at: Date.now(), data: manifest })
    } catch (e) {
      /* 存储满时忽略 */
    }
    return manifest
  })
}

// 读取缓存的清单（离线兜底）
function getCachedManifest() {
  try {
    const cached = wx.getStorageSync(MANIFEST_KEY)
    if (cached && cached.data) return cached.data
  } catch (e) {}
  return null
}

// 拉取单科题库：优先使用 manifest.version 命中本地缓存
function getBank(subjectId, manifestVersion) {
  const key = BANK_KEY_PREFIX + subjectId
  return new Promise((resolve, reject) => {
    try {
      const cached = wx.getStorageSync(key)
      if (cached && cached.version && cached.version === manifestVersion && cached.units) {
        resolve(cached)
        return
      }
    } catch (e) {}
    request('/api/mp/bank?subject=' + encodeURIComponent(subjectId))
      .then((bank) => {
        try {
          wx.setStorageSync(key, { version: bank.version, units: bank.units })
        } catch (e) {
          // 单科缓存失败（存储满）：清掉其它科目缓存重试一次
          try {
            wx.clearStorageSync()
          } catch (e2) {}
        }
        resolve(bank)
      })
      .catch(reject)
  })
}

module.exports = { BASE, getManifest, getCachedManifest, getBank }
