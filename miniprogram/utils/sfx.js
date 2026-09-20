// 合成音效播放层：音色与网页版 sound.ts 同源（预渲染 WAV 内置于代码包，无需网络）
// 开关持久化在本地 storage（key: mp-sound），默认开启；API 与网页版 sfx 同名
const POOL = {}
let enabled = null

function isEnabled() {
  if (enabled === null) {
    try {
      enabled = wx.getStorageSync('mp-sound') !== '0'
    } catch (e) {
      enabled = true
    }
  }
  return enabled
}

function setEnabled(on) {
  enabled = !!on
  try {
    wx.setStorageSync('mp-sound', on ? '1' : '0')
  } catch (e) {
    /* 存储异常忽略 */
  }
}

function play(name) {
  if (!isEnabled()) return
  try {
    let c = POOL[name]
    if (!c) {
      c = wx.createInnerAudioContext()
      c.src = '/audio/' + name + '.wav'
      POOL[name] = c
    }
    c.stop()
    c.play()
  } catch (e) {
    /* 音频异常静默，不影响游戏 */
  }
}

module.exports = {
  isEnabled: isEnabled,
  setEnabled: setEnabled,
  click: function () { play('click') },
  correct: function () { play('correct') },
  wrong: function () { play('wrong') },
  combo: function () { play('combo') },
  coin: function () { play('coin') },
  win: function () { play('win') },
  lose: function () { play('lose') },
  tick: function () { play('tick') },
  star: function (i) { play('star' + (i >= 0 && i <= 2 ? i : 0)) },
}
