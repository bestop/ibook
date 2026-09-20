// 小明乐学岛 · 小程序端
// 教材与闯关内容从网页版（https://www.hikid.org）获取，本地仅存学习进度。
const api = require('./utils/api')

App({
  globalData: {
    manifest: null, // 科目清单（来自网页端）
    manifestError: null,
  },

  onLaunch() {
    this.loadManifest()
  },

  // 拉取科目清单（小程序所有页面的数据源）
  loadManifest() {
    this.globalData.manifestError = null
    return api
      .getManifest()
      .then((manifest) => {
        this.globalData.manifest = manifest
        return manifest
      })
      .catch((err) => {
        this.globalData.manifestError = err && err.message ? err.message : '网络异常'
        throw err
      })
  },
})
