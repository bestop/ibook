// 宠物页：领养流程（选狗/猫 + 起名）/ 宠物主页（成长/心情/喂食）/ 专属剧情阅读
const sfx = require('../../utils/sfx')
const store = require('../../utils/store')
const pet = require('../../utils/pet')

Page({
  data: {
    // 领养流
    kind: '',
    name: '',
    suggestions: [],
    // 宠物主页
    hasPet: false,
    pet: null,
    emoji: '',
    stage: null,
    isLegend: false,
    mood: { emoji: '', text: '' },
    expPct: 0,
    expHint: '',
    moodPct: 0,
    coins: 0,
    feedLeft: 0,
    fullLevel: false,
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
    bubble: '',
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
      emoji: pet.petEmoji(p.kind, prog.level),
      stage: stage,
      isLegend: prog.level >= pet.PET_STAGES[3].minLevel,
      mood: mood,
      expPct: Math.round(prog.pct * 100),
      expHint: fullLevel ? '满级传说！冒险之心仍在燃烧' : '距离 Lv.' + (prog.level + 1) + ' 还差 ' + (prog.need - prog.cur) + ' 经验',
      moodPct: p.mood,
      coins: s.coins,
      feedLeft: pet.FEED_DAILY_LIMIT - p.feedCount,
      fullLevel: fullLevel,
      bookTitle: pet.STORY_BOOK_TITLE[p.kind],
      readCount: p.storyRead.length,
      storyTotal: pet.PET_STORIES[p.kind].length,
      stories: stories,
    })
  },

  // 消费升级/剧情解锁事件队列（结算页未处理完的在这里兜底弹出）
  consumeEvents() {
    const s = store.getState()
    if (!s.petEvents || s.petEvents.length === 0) return
    const evs = s.petEvents
    const lines = evs.slice(0, 3).map(function (ev) {
      if (ev.type === 'levelup') return '🐾 ' + ev.petName + ' 升到了 Lv.' + ev.level + '！'
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
  },

  // ---------- 互动 ----------
  tapPet() {
    sfx.click()
    const p = this.data.pet
    if (!p) return
    const sounds = p.kind === 'dog' ? ['汪汪！', '汪呜～', '嘿嘿，好痒！', '我最喜欢小主人了！'] : ['喵～', '呼噜呼噜…', '喵呜♪', '小主人手好暖～']
    this.setData({ bouncing: true, bubble: sounds[Math.floor(Math.random() * sounds.length)] })
    const that = this
    setTimeout(function () { that.setData({ bouncing: false }) }, 600)
    setTimeout(function () { that.setData({ bubble: '' }) }, 1800)
  },

  feed() {
    const r = store.feedPet()
    wx.showToast({ title: r.msg, icon: 'none' })
    if (r.ok) {
      sfx.coin()
      this.tapPet()
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
      // 读完本章
      store.markStoryRead(ch.id)
      sfx.win()
      this.setData({ reading: null })
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
