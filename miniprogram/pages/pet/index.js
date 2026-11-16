// 宠物页：领养流程（选狗/猫 + 起名）/ 宠物主页（成长/心情/喂食/摸摸互动）/ 专属剧情阅读
// 形象层：点击爱心粒子、心情分层特效（开心光环/低落暖夜）、昼夜场景、进化光效
const sfx = require('../../utils/sfx')
const store = require('../../utils/store')
const pet = require('../../utils/pet')

// 摸摸台词：按种类 × 心情三层（开心/日常/撒娇求喂），与网页版 spawnHearts 粒子池一致
const TOUCH_WORDS = {
  dog: {
    happy: ['汪汪！今天超有干劲！', '嘿嘿，我最喜欢小主人了！', '汪呜～一起冒险吧！', '今天也要元气满满哦！'],
    mid: ['汪？要出门探险吗？', '汪汪！我在陪你学习哦～', '汪！你的口袋里有骨头味！', '嘿嘿，好痒好痒～'],
    low: ['肚子咕咕叫了……', '汪呜……想要小零食……', '小主人，多摸摸我嘛……', '呜……先去闯关赚金币嘛……'],
  },
  cat: {
    happy: ['喵～心情好想转圈圈！', '铃铛叮铃叮铃地响呢！', '喵呜♪ 今天也喜欢小主人！', '呼噜呼噜……好幸福～'],
    mid: ['喵？要一起去星星灯塔吗？', '喵～我的尾巴又毛茸茸了！', '喵呜……月亮婆婆快出来了', '嗯～摸摸头好舒服～'],
    low: ['喵呜……肚子饿了……', '铃铛都没力气响了……', '喵……想要小鱼干……', '呜……先喂喂我嘛……'],
  },
}
const COMBO_WORDS = {
  dog: ['哇——转圈圈！汪汪！', '呼——头都转晕啦，好开心！'],
  cat: ['喵——！转圈圈好晕呀～', '哇！铃铛响个不停啦！'],
}
const FOOD_WORDS = { dog: '啊呜～真好吃！汪！', cat: '喵呜～小零食最棒了！' }
const ADOPT_WORDS = { dog: '汪！你好呀，小主人！', cat: '喵～以后请多关照啦！' }
const PARTICLE_POOL = ['💕', '✨', '🐾', '💖']
const COMBO_POOL = ['💕', '✨', '🐾', '💖', '🌟']

Page({
  data: {
    // 领养流
    kind: '',
    name: '',
    suggestions: [],
    // 宠物主页
    hasPet: false,
    pet: null,
    img: '',
    stage: null,
    mood: { emoji: '', text: '' },
    petLevel: 1,
    expPct: 0,
    expHint: '',
    moodPct: 0,
    moodTier: 'mid',
    coins: 0,
    feedLeft: 0,
    fullLevel: false,
    days: 1,
    night: false,
    // 剧情
    bookTitle: '',
    readCount: 0,
    storyTotal: 0,
    stories: [],
    // 阅读器
    reading: null,
    readerLines: [],
    lineIdx: 0,
    isLastLine: false,
    // 互动
    bouncing: false,
    spinning: false,
    evolving: false,
    bubble: '',
    particles: [],
  },

  onShow() {
    store.ensureToday()
    this.refresh()
    this.consumeEvents()
  },

  refresh() {
    const s = store.getState()
    const p = s.pet
    if (!p) {
      this.setData({ hasPet: false, pet: null })
      return
    }
    const prog = pet.petLevelProgress(p.exp)
    const stage = pet.petStageOf(prog.level)
    const mood = pet.moodLabel(p.mood)
    const fullLevel = prog.level >= pet.PET_MAX_LEVEL
    const h = new Date().getHours()
    const stories = pet.PET_STORIES[p.kind].map(function (ch) {
      const unlockLv = pet.storyUnlockLevel(ch.index)
      return {
        id: ch.id,
        index: ch.index,
        title: ch.title,
        locked: prog.level < unlockLv,
        read: p.storyRead.indexOf(ch.id) >= 0,
        unlockLv: unlockLv,
      }
    })
    this.setData({
      hasPet: true,
      pet: p,
      img: pet.petImage(p.kind, prog.level),
      stage: stage,
      mood: mood,
      petLevel: prog.level,
      expPct: Math.round(prog.pct * 100),
      expHint: fullLevel ? '满级传说！冒险之心仍在燃烧' : '距离 Lv.' + (prog.level + 1) + ' 还差 ' + (prog.need - prog.cur) + ' 经验',
      moodPct: p.mood,
      moodTier: p.mood >= 85 ? 'happy' : (p.mood >= 40 ? 'mid' : 'low'),
      coins: s.coins,
      feedLeft: pet.FEED_DAILY_LIMIT - p.feedCount,
      fullLevel: fullLevel,
      days: pet.petDaysOf(p.adoptedAt),
      night: h >= 18 || h < 6,
      bookTitle: pet.STORY_BOOK_TITLE[p.kind],
      readCount: p.storyRead.length,
      storyTotal: pet.PET_STORIES[p.kind].length,
      stories: stories,
    })
    // 跨成长阶段进化特效：grantPetExp 写入的瞬态标记，进页即播（与事件队列解耦，结算页跳转回也能触发）
    if (s.petJustEvolved && !this.data.evolving) {
      store.clearPetJustEvolved()
      this.setData({ evolving: true })
      sfx.win()
      const that = this
      this._evolveTimer = setTimeout(function () { that.setData({ evolving: false }) }, 2600)
    }
  },

  // 消费升级/剧情解锁事件队列（结算页未处理完的在这里兜底弹出）
  consumeEvents() {
    const s = store.getState()
    if (!s.petEvents || s.petEvents.length === 0) return
    const evs = s.petEvents
    const lines = evs.slice(0, 3).map((ev) => {
      if (ev.type === 'levelup') {
        const prev = ev.prevLevel != null ? ev.prevLevel : ev.level - 1
        if (pet.petStageIndex(prev) < pet.petStageIndex(ev.level)) {
          return '🌟 ' + ev.petName + ' 进化成了' + pet.petStageOf(ev.level).name + '！'
        }
        return '🐾 ' + ev.petName + ' 升到了 Lv.' + ev.level + '！'
      }
      return '📖 解锁新剧情《' + pet.STORY_BOOK_TITLE[ev.petKind] + '》第 ' + ev.chapterId.split('-')[1] + ' 章'
    })
    const extra = evs.length > 3 ? '\n…还有 ' + (evs.length - 3) + ' 条好消息' : ''
    store.clearPetEvents()
    this.refresh()
    sfx.coin()
    wx.showModal({
      title: '🎉 宠物快讯',
      content: lines.join('\n') + extra,
      confirmText: '太棒了',
      showCancel: false,
    })
  },

  // ---------- 领养流 ----------
  pickKind(e) {
    sfx.click()
    const kind = e.currentTarget.dataset.kind
    this.setData({ kind: kind, name: '', suggestions: pet.PET_NAME_SUGGESTIONS[kind] })
  },

  onNameInput(e) {
    this.setData({ name: (e.detail.value || '').slice(0, 8) })
  },

  pickName(e) {
    sfx.click()
    this.setData({ name: e.currentTarget.dataset.name })
  },

  confirmAdopt() {
    const kind = this.data.kind
    if (!kind) {
      wx.showToast({ title: '先选一位小伙伴吧', icon: 'none' })
      return
    }
    sfx.coin()
    store.adoptPet(kind, this.data.name)
    this.refresh()
    wx.showToast({ title: '领养成功！', icon: 'success' })
    this._poke(ADOPT_WORDS[kind])
  },

  // ---------- 互动 ----------
  // 互动内核：粒子迸发 + 弹跳 + 气泡（tapPet/feed/领养成功共用）
  _poke(text, burst) {
    this.spawnParticles(burst ? 6 : 3, burst ? COMBO_POOL : PARTICLE_POOL)
    this.setData({ bouncing: true, bubble: text })
    const that = this
    if (this._bounceTimer) clearTimeout(this._bounceTimer)
    if (this._bubbleTimer) clearTimeout(this._bubbleTimer)
    this._bounceTimer = setTimeout(function () { that.setData({ bouncing: false }) }, 600)
    this._bubbleTimer = setTimeout(function () { that.setData({ bubble: '' }) }, 1800)
  },

  // 爱心/星星粒子（与网页版 spawnHearts 同构：随机水平偏移，上浮淡出）
  spawnParticles(n, pool) {
    const list = this.data.particles.slice(-12) // 上限防连点堆积
    this._pid = (this._pid || 0) + 1
    for (let i = 0; i < n; i++) {
      list.push({
        id: this._pid,
        emoji: pool[Math.floor(Math.random() * pool.length)],
        x: Math.round(Math.random() * 120 - 60),
      })
    }
    const ids = list.map(function (p) { return p.id })
    this.setData({ particles: list })
    const that = this
    this._pTimers = this._pTimers || []
    this._pTimers.push(setTimeout(function () {
      that.setData({ particles: that.data.particles.filter(function (p) { return ids.indexOf(p.id) < 0 }) })
    }, 1200))
  },

  tapPet() {
    sfx.click()
    const p = this.data.pet
    if (!p) return
    // 连击彩蛋：3 秒内摸满 6 次 → 转圈圈
    const now = Date.now()
    this._taps = (this._taps || []).filter(function (t) { return now - t < 3000 })
    this._taps.push(now)
    if (!this.data.spinning && this._taps.length >= 6) {
      this._taps = []
      const words = COMBO_WORDS[p.kind]
      this.setData({ spinning: true })
      this._poke(words[Math.floor(Math.random() * words.length)], true)
      sfx.combo()
      const that = this
      if (this._spinTimer) clearTimeout(this._spinTimer)
      this._spinTimer = setTimeout(function () { that.setData({ spinning: false }) }, 900)
    } else {
      const tier = p.mood >= 85 ? 'happy' : (p.mood >= 40 ? 'mid' : 'low')
      const words = TOUCH_WORDS[p.kind][tier]
      this._poke(words[Math.floor(Math.random() * words.length)])
    }
    // 每日首次摸摸：心情 +5（store.touchPet 幂等，重复摸只表演）
    const r = store.touchPet()
    if (r && r.ok && r.first) {
      wx.showToast({ title: '和' + p.name + '贴贴，心情 +5', icon: 'none' })
      this.refresh()
    }
  },

  onUnload() {
    if (this._bounceTimer) clearTimeout(this._bounceTimer)
    if (this._bubbleTimer) clearTimeout(this._bubbleTimer)
    if (this._spinTimer) clearTimeout(this._spinTimer)
    if (this._evolveTimer) clearTimeout(this._evolveTimer)
    if (this._pTimers) this._pTimers.forEach(function (t) { clearTimeout(t) })
  },

  feed() {
    const r = store.feedPet()
    wx.showToast({ title: r.msg, icon: 'none' })
    if (r.ok) {
      sfx.coin()
      this._poke(FOOD_WORDS[this.data.pet.kind])
    }
    this.refresh()
  },

  // ---------- 剧情阅读 ----------
  openStory(e) {
    const id = e.currentTarget.dataset.id
    const ch = pet.PET_STORIES[this.data.pet.kind].find(function (c) { return c.id === id })
    if (!ch) return
    const level = pet.petLevelOf(this.data.pet.exp)
    if (level < pet.storyUnlockLevel(ch.index)) {
      wx.showToast({ title: '还没解锁哦，宠物升到 Lv.' + pet.storyUnlockLevel(ch.index) + ' 就能读啦', icon: 'none' })
      return
    }
    sfx.click()
    this.setData({ reading: ch, readerLines: [ch.lines[0]], lineIdx: 0, isLastLine: ch.lines.length === 1 })
  },

  nextLine() {
    const ch = this.data.reading
    if (!ch) return
    const idx = this.data.lineIdx
    if (idx >= ch.lines.length - 1) {
      // 读完本章：首次读完心情 +5（小程序端陪伴奖励）
      const r = store.markStoryRead(ch.id)
      sfx.win()
      this.setData({ reading: null })
      if (r && r.first && this.data.pet) {
        wx.showToast({ title: this.data.pet.name + ' 听得津津有味，心情 +5！', icon: 'none' })
      }
      this.refresh()
      return
    }
    sfx.click()
    const nextIdx = idx + 1
    this.setData({
      lineIdx: nextIdx,
      readerLines: ch.lines.slice(0, nextIdx + 1),
      isLastLine: nextIdx === ch.lines.length - 1,
    })
  },

  closeReader() {
    this.setData({ reading: null })
    this.refresh()
  },

  noop() {},
})
