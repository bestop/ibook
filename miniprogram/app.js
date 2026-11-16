// 童学冒险岛 · 小程序端（独立版）
// 教材与闯关内容从数据域名（https://lx.hikid.vip，备用 www.hikid.org）获取，本地仅存学习进度。
const api = require('./utils/api')
const cloud = require('./utils/cloud')

App({
  globalData: {
    manifest: null, // 科目清单（来自网页端）
    manifestError: null,
  },

  onLaunch() {
    this.loadManifest()
    cloud.init() // 云端同步：订阅 store 变更（节流自动上传）+ 启动对齐（均静默，不影响游戏本体）
  },

  // 退到后台：节流窗口内未上传的变更立即兑底补传（fire-and-forget）
  onHide() {
    cloud.flushUpload()
  },

  // 拉取科目清单（小程序所有页面的数据源）
  // in-flight 去重：冷启动时 onLaunch 与首页 onLoad 几乎同时触发本方法，
  // 进行中的请求直接复用同一 Promise，避免同一接口并发两连发；
  // 请求落地后（成功或失败）标志复位，后续调用照常发起新请求用于刷新。
  loadManifest() {
    if (this._manifestLoading) return this._manifestLoading
    this.globalData.manifestError = null
    this._manifestLoading = api
      .getManifest()
      .then((manifest) => {
        this.globalData.manifest = manifest
        this._manifestLoading = null
        return manifest
      })
      .catch((err) => {
        this.globalData.manifestError = err && err.message ? err.message : '网络异常'
        this._manifestLoading = null
        throw err
      })
    return this._manifestLoading
  },
})
