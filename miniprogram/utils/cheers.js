// 反馈文案池（借鉴聪聪学堂 FeedbackPanel 随机鼓励语 + Mascot 应援思想，与网页版同构）
// 设计原则：答对夸奖、答错安慰，随机轮换避免固定文案带来的「通关麻木」；
// 纯函数零依赖，宠物应援句以宠物名字开头，模拟吉祥物「读懂情境」的陪伴感。
const PRAISE_POOL = ['答对了！', '做得好！', '继续保持！', '太棒了！']
const COMFORT_POOL = ['再想想', '差一点', '加油', '没关系', '下次就对！']
const PET_CHEER_POOL = ['哇，你真棒！', '太厉害啦！', '就要这样冲！', '我为你骄傲！']
const PET_COMFORT_POOL = ['没关系，再来一次！', '错题是最好的老师～', '别灰心，你可以的！', '我们一起加油！']

function pick(pool) {
  return pool[Math.floor(Math.random() * pool.length)]
}

// 答对反馈标题（连击中固定高亮文案，其余随机夸奖；与网页版同规则）
function praise(combo) {
  return combo >= 3 ? '🔥 太棒了，连击中！' : '✅ ' + pick(PRAISE_POOL)
}

// 答错反馈标题（随机安慰，语气不打击）
function comfort() {
  return '💪 ' + pick(COMFORT_POOL)
}

// 宠物应援句（答对夸奖池）
function petCheer(name) {
  return (name || '宠物') + '：' + pick(PET_CHEER_POOL)
}

// 宠物安慰句（答错/超时安慰池）
function petComfort(name) {
  return (name || '宠物') + '：' + pick(PET_COMFORT_POOL)
}

// 宠物头像（与 pet.js 阶段形象无关的静态小头像，答题区轻量展示）
function petFace(kind) {
  return kind === 'cat' ? '🐱' : '🐶'
}

module.exports = {
  praise: praise,
  comfort: comfort,
  petCheer: petCheer,
  petComfort: petComfort,
  petFace: petFace,
}
