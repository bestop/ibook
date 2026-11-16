// 答题页：3 命 + 每题 40 秒倒计时 + 连击金币 + 解析；支持 普通关/每日挑战/错题复习 三种模式
const api = require('../../utils/api')
const store = require('../../utils/store')
const quiz = require('../../utils/quiz')
const sfx = require('../../utils/sfx')
const pet = require('../../utils/pet')
const cheers = require('../../utils/cheers')

const TIME_PER_QUESTION = 40
const LIVES = 3

Page({
  data: {
    ready: false,
    loadError: '',
    mode: 'level', // level | daily | review
    title: '',
    subjectName: '',
    // 题目态
    question: null,
    options: [],
    index: 0,
    total: 0,
    answered: false,
    picked: -1,
    isCorrect: false,
    // 资源态
    lives: LIVES,
    combo: 0,
    coinsEarned: 0,
    wrongCount: 0,
    timeLeft: TIME_PER_QUESTION,
    timePct: 100,
    // 考点锦囊（借鉴聪聪学堂知识讲解卡 + 网页版考点锦囊，两端同构）
    levelTags: [],
    tipOpen: true,
    // 连击里程碑特效（借鉴聪聪学堂 ComboOverlay：3/5/10 连击居中大徽章）
    comboMilestone: null,
    // 反馈标题（借鉴聪聪学堂 FeedbackPanel 随机鼓励语，答对夸奖/答错安慰轮换）
    feedbackTitle: '',
    // 宠物应援（借鉴聪聪学堂 Mascot reaction：答题后宠物随对错变化应援句）
    petCheerText: '',
    petFace: '',
    // 答错抖动（与网页版同构）
    shake: false,
    // 结算
    correctCount: 0,
    finished: false,
    passed: false,
    stars: 0,
    levelBonus: 0,
    taskCoins: 0,
    finalCoins: 0,
    comboAchievement: null,
    newly: [],
  },

  onLoad(options) {
    this.subjectId = options.subjectId || ''
    this.unitId = options.unitId || ''
    this.mode = options.mode || 'level'
    this.subjectName = decodeURIComponent(options.name || '')
    this.items = []
    this.timer = null
    this._comboTimer = null
    this._shakeTimer = null
    this.titles = {
      level: '关卡挑战',
      daily: '每日挑战',
      review: '错题复习',
    }
    this.setData({ mode: this.mode, subjectName: this.subjectName, title: this.titles[this.mode] || '闯关' })
    this.boot()
  },

  boot() {
    const that = this
    if (this.mode === 'review') {
      // 复习模式：题目来自本地错题快照，无需联网
      const snaps = store.getState().wrongSnaps
      this.items = quiz.buildReviewQuestions(snaps)
      this.start()
      return
    }
    const manifest = getApp().globalData.manifest
    if (!manifest) {
      this.setData({ loadError: '内容加载失败，请返回首页重新进入' })
      return
    }
    api
      .getBank(this.subjectId, manifest.version)
      .then(function (bank) {
        if (that.mode === 'daily') {
          const subject = manifest.subjects.find(function (s) { return s.id === that.subjectId })
          // 防御：manifest 刷新后旧 subjectId 可能失配，直接取 units 会 TypeError 白屏
          if (!subject) {
            that.setData({ loadError: '科目信息已更新，请返回首页重新进入' })
            return
          }
          const unlockedIds = subject.units
            .filter(function (u, i) { return store.isUnitUnlocked(subject, i) })
            .map(function (u) { return u.id })
          that.items = quiz.buildDailyQuestions(bank, unlockedIds)
        } else {
          that.items = quiz.buildLevelQuestions(bank, that.unitId)
        }
        that.start()
      })
      .catch(function (err) {
        that.setData({ loadError: err.message || '题库加载失败' })
      })
  },

  start() {
    if (this.items.length === 0) {
      this.setData({ loadError: this.mode === 'review' ? '太棒了，错题本已经空啦！' : '该关卡暂无题目' })
      return
    }
    // 本关考点去重（最多 4 个，真实来自题库 tag，不剧透具体题目；与网页版同构）
    const tags = []
    this.items.forEach(function (it) {
      if (it.tag && tags.indexOf(it.tag) < 0) tags.push(it.tag)
    })
    this.setData({ ready: true, total: this.items.length, levelTags: tags.slice(0, 4), tipOpen: true })
    this.armExitGuard()
    this.showQuestion(0)
  },

  // 退出二次确认（借鉴聪聪学堂「退出二次确认」）：开考后启用返回拦截，防手滑丢进度；
  // 结算页 redirectTo 前主动解除。基础库不支持时静默跳过（保持原行为）
  armExitGuard() {
    try {
      if (typeof wx.enableAlertBeforeUnload !== 'function') return
      wx.enableAlertBeforeUnload({ message: '退出闯关？本局进度不会保存哦' })
    } catch (e) {}
  },

  disarmExitGuard() {
    try {
      if (typeof wx.disableAlertBeforeUnload !== 'function') return
      wx.disableAlertBeforeUnload({})
    } catch (e) {}
  },

  toggleTip() {
    this.setData({ tipOpen: !this.data.tipOpen })
  },

  // 小 toast 队列：wx 同屏只保留一个 toast，任务达成/成就解锁可能同帧连发互相覆盖
  // （Task 5 遗留问题）；这里串行播放，2.1s 一档依次展示，并在页退出时清空
  queueToast(title) {
    const that = this
    if (!this._toastQueue) this._toastQueue = []
    this._toastQueue.push(title)
    if (this._toastPlaying) return
    const play = function () {
      const next = that._toastQueue && that._toastQueue.shift()
      if (!next) {
        that._toastPlaying = false
        return
      }
      that._toastPlaying = true
      wx.showToast({ title: next, icon: 'none', duration: 2000 })
      that._toastTimer = setTimeout(function () { play() }, 2100)
    }
    play()
  },

  clearToastQueue() {
    if (this._toastTimer) {
      clearTimeout(this._toastTimer)
      this._toastTimer = null
    }
    this._toastQueue = []
    this._toastPlaying = false
  },

  // 连击里程碑：3/5/10 连击时居中弹出大徽章，弹入→上浮→淡出后自动清理
  showComboMilestone(combo) {
    const that = this
    if (this._comboTimer) clearTimeout(this._comboTimer)
    this.setData({ comboMilestone: combo })
    this._comboTimer = setTimeout(function () {
      that._comboTimer = null
      that.setData({ comboMilestone: null })
    }, 1400)
  },

  showQuestion(i) {
    const q = this.items[i]
    this.currentIndex = i
    this.setData({
      index: i + 1,
      question: q,
      options: q.options,
      answered: false,
      picked: -1,
      isCorrect: false,
      timeLeft: TIME_PER_QUESTION,
      timePct: 100,
      shake: false,
      feedbackTitle: '',
      petCheerText: '',
    })
    this.startTimer()
  },

  // 宠物应援：有宠物才展示，答对夸奖/答错安慰（与网页版同构）
  petCheerFor(correct) {
    const s = store.getState()
    if (!s.pet) return ''
    return correct ? cheers.petCheer(s.pet.name) : cheers.petComfort(s.pet.name)
  },

  // 答错抖动：500ms 后复位（与网页版 shake 同构）
  playShake() {
    const that = this
    if (this._shakeTimer) clearTimeout(this._shakeTimer)
    this.setData({ shake: true })
    this._shakeTimer = setTimeout(function () {
      that._shakeTimer = null
      that.setData({ shake: false })
    }, 500)
  },

  startTimer() {
    const that = this
    this.stopTimer()
    this.secondTick = 0
    this.timer = setInterval(function () {
      // 学习时长：每秒累计（每 5 秒落一次盘）；任务达成时及时反馈
      that.secondTick++
      const taskRet = store.addTodaySeconds(1)
      if (taskRet) {
        if (taskRet.taskDone === 'minutes') {
          that.queueToast(taskRet.allDone ? '🎉 今日任务全部达成！金币 +' + taskRet.coins : '⏰ 今日任务达成，金币 +' + taskRet.coins)
        }
        if (taskRet.newly && taskRet.newly.length) {
          that.queueToast('🏆 解锁成就：' + taskRet.newly[0].name)
        }
      }
      if (that.secondTick % 5 === 0) store.save()
      const left = that.data.timeLeft - 1
      if (left <= 0) {
        that.setData({ timeLeft: 0, timePct: 0 })
        that.timeout()
      } else {
        that.setData({ timeLeft: left, timePct: Math.round((left / TIME_PER_QUESTION) * 100) })
        if (left <= 7) sfx.tick() // 最后 7 秒滴答提示（与网页版一致）
      }
    }, 1000)
  },

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  },

  onUnload() {
    this.stopTimer()
    this.clearToastQueue()
    if (this._comboTimer) {
      clearTimeout(this._comboTimer)
      this._comboTimer = null
    }
    if (this._shakeTimer) {
      clearTimeout(this._shakeTimer)
      this._shakeTimer = null
    }
    store.save()
  },

  onHide() {
    // 切后台先停表：部分安卓机型回前台后 interval 会补偿性连跳，
    // 瞬间扣光剩余时间；改为回前台后从剩余秒数继续
    this.stopTimer()
    this.clearToastQueue()
    if (this._comboTimer) {
      clearTimeout(this._comboTimer)
      this._comboTimer = null
    }
    if (this._shakeTimer) {
      clearTimeout(this._shakeTimer)
      this._shakeTimer = null
    }
    store.save()
  },

  onShow() {
    // 仅在答题中恢复倒计时（onLoad 后首次 onShow 时 ready 尚为 false，已作答/结算态无需计时）
    if (this.data.ready && !this.data.answered && !this.timer) this.startTimer()
  },

  pick(e) {
    if (this.data.answered) return
    const picked = Number(e.currentTarget.dataset.idx)
    this.stopTimer()
    const correct = picked === this.data.question.answer
    const combo = correct ? this.data.combo + 1 : 0
    const coins = correct ? store.coinForAnswer(combo) : 0
    // 复习模式不扣命（借鉴聪聪学堂「错题复习不扣爱心且奖励经验值」）：
    // 复习是巩固不是惩罚，让孩子完整刷完复习题；普通关/每日挑战保持 3 命规则不变
    const lives = correct || this.mode === 'review' ? this.data.lives : this.data.lives - 1
    const wrongCount = correct ? this.data.wrongCount : this.data.wrongCount + 1

    const answerRet = store.recordAnswer(this.data.question, correct, this.mode === 'review')
    let comboAchievement = null
    if (correct && combo === 5) {
      const granted = store.grantCombo(5)
      if (granted) comboAchievement = granted
    }
    if (this.mode === 'review' && correct) {
      store.removeWrong(this.data.question.id)
    }

    this.setData({
      answered: true,
      picked: picked,
      isCorrect: correct,
      combo: combo,
      coinsEarned: this.data.coinsEarned + coins,
      lives: lives,
      wrongCount: wrongCount,
      comboAchievement: comboAchievement,
      // 随机反馈标题（答对夸奖/答错安慰，借鉴聪聪学堂 FeedbackPanel）+ 宠物应援
      feedbackTitle: correct ? cheers.praise(combo) : cheers.comfort(),
      petCheerText: this.petCheerFor(correct),
      petFace: cheers.petFace(store.getState().pet && store.getState().pet.kind),
    })
    if (!correct) this.playShake()
    if (correct && (combo === 3 || combo === 5 || combo === 10)) this.showComboMilestone(combo)
    // 音效：连击 3 次以上用连击音，答对用正确音，答错用错误音（与网页版一致）
    if (correct) {
      if (combo >= 3) sfx.combo()
      else sfx.correct()
    } else {
      sfx.wrong()
    }
    if (comboAchievement) {
      this.queueToast('🏆 解锁成就：' + comboAchievement.name)
    }
    // 复习任务达成提示（此前 recordAnswer 返回值未消费，达成无提示）；全部达成时升级为庆祝文案
    if (answerRet && answerRet.allDone) {
      this.queueToast('🎉 今日任务全部达成！金币 +' + store.TASK_REWARDS.review)
    } else if (answerRet && answerRet.reviewDone) {
      this.queueToast('📕 复习任务达成，金币 +' + store.TASK_REWARDS.review)
    }
  },

  timeout() {
    if (this.data.answered) return
    this.stopTimer()
    // 复习模式不扣命（与 pick 同构；超时同样只记答错不扣红心）
    const lives = this.mode === 'review' ? this.data.lives : this.data.lives - 1
    const wrongCount = this.data.wrongCount + 1
    store.recordAnswer(this.data.question, false, this.mode === 'review')
    this.setData({
      answered: true,
      picked: -1,
      isCorrect: false,
      combo: 0,
      lives: lives,
      wrongCount: wrongCount,
      feedbackTitle: '⏰ 时间到！',
      petCheerText: this.petCheerFor(false),
      petFace: cheers.petFace(store.getState().pet && store.getState().pet.kind),
    })
    this.playShake()
    sfx.wrong()
  },

  next() {
    const isLast = this.currentIndex >= this.items.length - 1
    // 复习模式无生命限制，永远走完整卷（普通关/每日挑战仍按 3 命判定）
    const dead = this.data.lives <= 0 && this.mode !== 'review'
    if (!isLast && !dead) {
      this.showQuestion(this.currentIndex + 1)
      return
    }
    this.finish(dead)
  },

  finish(dead) {
    this.stopTimer()
    this.disarmExitGuard()
    const correctCount = this.data.total - this.data.wrongCount
    let stars = 0
    let levelBonus = 0
    let taskCoins = 0
    let newly = []
    let allDone = false
    let finalCoins = 0
    const s = store.getState()

    if (dead) {
      // 挑战失败：本局答题金币减半后入账
      finalCoins = Math.floor(this.data.coinsEarned / 2)
      s.coins += finalCoins
    } else {
      stars = store.starsForWrong(this.data.wrongCount)
      if (this.mode === 'level') {
        levelBonus = store.coinForLevel(stars)
        const r = store.finishLevel(this.subjectId + ':' + this.unitId, stars) // 内部已加每日任务金币
        taskCoins = r.taskCoins
        newly = r.newly || []
        allDone = r.allDone
      }
      finalCoins = this.data.coinsEarned + levelBonus
      s.coins += finalCoins
    }

    // 宠物经验：与金币同处结算，保证展示与发放一致（升级/剧情事件由结算页弹窗消费）
    let petExp = 0
    let petName = ''
    if (s.pet) {
      petName = s.pet.name
      if (dead) petExp = this.mode === 'review' ? 0 : pet.PET_EXP.failComfort
      else if (this.mode === 'level') petExp = pet.petExpForLevelStars(stars)
      else if (this.mode === 'daily') petExp = pet.PET_EXP.daily
      else if (this.mode === 'review') petExp = pet.PET_EXP.review
    }
    if (petExp > 0) store.grantPetExp(petExp)

    store.save()

    // 金币入账后再补一次成就检查：finishLevel 内的检查发生在金币入账前，
    // 本局攒金类成就（小富翁/大富翁）可能恰好达标，不补查要等下一次动作才解锁；
    // 与 finishLevel 已返回的 newly 按 id 去重合并后传给结算页展示
    const moreNewly = store.refreshAchievements()
    if (moreNewly.length) {
      const seen = {}
      const merged = []
      newly.concat(moreNewly).forEach(function (a) {
        if (!seen[a.id]) {
          seen[a.id] = true
          merged.push(a)
        }
      })
      newly = merged
    }

    const passed = !dead && stars > 0
    wx.redirectTo({
      url:
        '/pages/result/index?mode=' +
        this.mode +
        '&passed=' +
        (passed ? 1 : 0) +
        '&stars=' +
        stars +
        '&total=' +
        this.data.total +
        '&correct=' +
        correctCount +
        '&finalCoins=' +
        finalCoins +
        '&levelBonus=' +
        levelBonus +
        '&taskCoins=' +
        taskCoins +
        '&name=' +
        encodeURIComponent(this.data.subjectName) +
        '&unit=' +
        encodeURIComponent((this.data.question && this.data.question.tag) || this.titles[this.mode] || '') +
        '&newly=' +
        encodeURIComponent(newly.map(function (a) { return a.name }).join('、')) +
        '&allDone=' +
        (allDone ? 1 : 0) +
        '&petExp=' +
        petExp +
        '&petName=' +
        encodeURIComponent(petName),
    })
  },

  // 加载失败态的返回按钮：未开考无进度可谈，直接返回上一页，不弹确认弹窗
  back() {
    wx.navigateBack()
  },
})
