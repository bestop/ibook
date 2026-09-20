// 答题页：3 命 + 每题 40 秒倒计时 + 连击金币 + 解析；支持 普通关/每日挑战/错题复习 三种模式
const api = require('../../utils/api')
const store = require('../../utils/store')
const quiz = require('../../utils/quiz')
const sfx = require('../../utils/sfx')

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
    this.setData({ ready: true, total: this.items.length })
    this.showQuestion(0)
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
    })
    this.startTimer()
  },

  startTimer() {
    const that = this
    this.stopTimer()
    this.secondTick = 0
    this.timer = setInterval(function () {
      // 学习时长：每秒累计（每 5 秒落一次盘）
      that.secondTick++
      store.addTodaySeconds(1)
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
    store.save()
  },

  onHide() {
    store.save()
  },

  pick(e) {
    if (this.data.answered) return
    const picked = Number(e.currentTarget.dataset.idx)
    this.stopTimer()
    const correct = picked === this.data.question.answer
    const combo = correct ? this.data.combo + 1 : 0
    const coins = correct ? store.coinForAnswer(combo) : 0
    const lives = correct ? this.data.lives : this.data.lives - 1
    const wrongCount = correct ? this.data.wrongCount : this.data.wrongCount + 1

    store.recordAnswer(this.data.question, correct, this.mode === 'review')
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
    })
    // 音效：连击 3 次以上用连击音，答对用正确音，答错用错误音（与网页版一致）
    if (correct) {
      if (combo >= 3) sfx.combo()
      else sfx.correct()
    } else {
      sfx.wrong()
    }
    if (comboAchievement) {
      wx.showToast({ title: '🏆 解锁成就：' + comboAchievement.name, icon: 'none', duration: 2000 })
    }
  },

  timeout() {
    if (this.data.answered) return
    this.stopTimer()
    const lives = this.data.lives - 1
    const wrongCount = this.data.wrongCount + 1
    store.recordAnswer(this.data.question, false, this.mode === 'review')
    this.setData({
      answered: true,
      picked: -1,
      isCorrect: false,
      combo: 0,
      lives: lives,
      wrongCount: wrongCount,
    })
    sfx.wrong()
  },

  next() {
    const isLast = this.currentIndex >= this.items.length - 1
    const dead = this.data.lives <= 0
    if (!isLast && !dead) {
      this.showQuestion(this.currentIndex + 1)
      return
    }
    this.finish(dead)
  },

  finish(dead) {
    this.stopTimer()
    const correctCount = this.data.total - this.data.wrongCount
    let stars = 0
    let levelBonus = 0
    let taskCoins = 0
    let newly = []
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
      }
      finalCoins = this.data.coinsEarned + levelBonus
      s.coins += finalCoins
    }
    store.save()
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
        encodeURIComponent(newly.map(function (a) { return a.name }).join('、')),
    })
  },

  exit() {
    wx.showModal({
      title: '退出闯关？',
      content: '本局进度将不会保存',
      confirmText: '退出',
      cancelText: '继续',
      success(res) {
        if (res.confirm) wx.navigateBack()
      },
    })
  },
})
