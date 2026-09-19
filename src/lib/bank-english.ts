// 2026 新版沪教版（五四学制）英语 五年级上册 随堂知识点题库
// 教材：义务教育教科书（五·四学制）英语 五年级上册 · 上海教育出版社 · 2024 年国家教材委员会审核通过（2026 秋季学期使用版）
// 目录：Starter + Unit 1 Clubs in our school / Unit 2 Traditional games / Unit 3 Amazing plants / Unit 4 Together with animals
//       / Unit 5 Seeing a doctor / Unit 6 Rise to the challenge / Unit 7 Great scientists / Unit 8 Useful inventions
//       / Unit 9 Using computers / Unit 10 A greener life
// Starter + 每个单元一关，每关 10 题，共 11 关 110 题

export type QType = 'choice' | 'judge'

export interface Question {
  id: string
  type: QType
  q: string
  options: string[]
  answer: number
  explain: string
  tag: string
}

export interface Unit {
  id: string
  name: string
  title: string
  emoji: string
  color: string
  lessons: string[]
  intro: string
}

export const UNITS: Unit[] = [
  {
    id: 'st',
    name: '衔接关',
    title: 'Starter 热身站',
    emoji: '🌈',
    color: 'sky',
    lessons: ['Greetings 问候', 'Numbers & Colours 数字颜色', 'Days & Weather 星期天气'],
    intro: '热身开始！把问候语、数字、颜色和天气都复习一遍，大声说 English！',
  },
  {
    id: 'e1',
    name: '第一单元',
    title: 'Clubs in our school',
    emoji: '🏫',
    color: 'orange',
    lessons: ['School clubs 学校社团', 'I want to join... 我想加入'],
    intro: '音乐、美术、科学、棋艺……学校社团真丰富，你会用英语介绍它们吗？',
  },
  {
    id: 'e2',
    name: '第二单元',
    title: 'Traditional games',
    emoji: '🪀',
    color: 'red',
    lessons: ['Games we play 我们玩的游戏', 'Grandparents\' games 爷爷奶奶的游戏'],
    intro: '捉迷藏、踢毽子、拔河——中国传统游戏里藏着满满的欢乐和智慧！',
  },
  {
    id: 'e3',
    name: '第三单元',
    title: 'Amazing plants',
    emoji: '🌱',
    color: 'emerald',
    lessons: ['Plants around us 身边的植物', 'Plant secrets 植物的秘密'],
    intro: '竹子长得快、向日葵爱太阳——植物世界超级神奇，一起来探索吧！',
  },
  {
    id: 'e4',
    name: '第四单元',
    title: 'Together with animals',
    emoji: '🐘',
    color: 'amber',
    lessons: ['Caring for animals 照顾动物', 'Animal friends 动物朋友'],
    intro: '喂喂小猫、遛遛小狗，学会关爱动物，做有爱心的小主人！',
  },
  {
    id: 'e5',
    name: '第五单元',
    title: 'Seeing a doctor',
    emoji: '🩺',
    color: 'rose',
    lessons: ['What\'s wrong? 哪里不舒服', 'Doctor\'s advice 医生的建议'],
    intro: '头疼发烧别害怕，学会用英语说清病情，做个勇敢的小病人！',
  },
  {
    id: 'e6',
    name: '第六单元',
    title: 'Rise to the challenge',
    emoji: '🧗',
    color: 'fuchsia',
    lessons: ['Never give up 永不放弃', 'Try again 再试一次'],
    intro: 'Challenge 挑战来了！勇敢面对困难，每天进步一点点！',
  },
  {
    id: 'e7',
    name: '第七单元',
    title: 'Great scientists',
    emoji: '🔬',
    color: 'teal',
    lessons: ['Famous scientists 著名科学家', 'Scientific spirit 科学精神'],
    intro: '袁隆平、屠呦呦、牛顿、居里夫人——认识改变世界的伟大科学家！',
  },
  {
    id: 'e8',
    name: '第八单元',
    title: 'Useful inventions',
    emoji: '💡',
    color: 'lime',
    lessons: ['Four great inventions 四大发明', 'Modern inventions 现代发明'],
    intro: '造纸术、指南针、电灯、飞机——了不起的发明让生活更美好！',
  },
  {
    id: 'e9',
    name: '第九单元',
    title: 'Using computers',
    emoji: '🖥️',
    color: 'sky',
    lessons: ['Computer words 电脑单词', 'Safe online 安全上网'],
    intro: '键盘、鼠标、屏幕……会用电脑更要会安全、健康地使用电脑！',
  },
  {
    id: 'e10',
    name: '第十单元',
    title: 'A greener life',
    emoji: '🌍',
    color: 'emerald',
    lessons: ['Save the Earth 保护地球', 'Green actions 绿色行动'],
    intro: '节约用水、垃圾分类、绿色出行——环保小卫士，让地球更美丽！',
  },
]

const JUDGE_OPTS = ['√ 对', '× 错']

// ===================== Starter 衔接关 =====================
const UNIT_ST: Question[] = [
  {
    id: 'e0-1', type: 'choice', tag: '日常用语',
    q: '早上见到老师，你应该说：',
    options: ['Good morning!', 'Good night!', 'Goodbye!', 'Thank you!'],
    answer: 0,
    explain: 'Good morning! 是早上问好；Good night! 是晚上道别；Goodbye! 是再见。',
  },
  {
    id: 'e0-2', type: 'choice', tag: '日常用语',
    q: '—Hello! I\'m Wang Ming. —______',
    options: ['Hi! My name is Li Hua.', 'I\'m fine, thank you.', 'Good idea!', 'You\'re welcome.'],
    answer: 0,
    explain: '对方自我介绍后，最好也介绍自己：Hi! My name is...（你好！我叫……）。',
  },
  {
    id: 'e0-3', type: 'choice', tag: '数字',
    q: '英语中"三十"是：',
    options: ['thirteen', 'thirty', 'three', 'thirty-one'],
    answer: 1,
    explain: 'thirteen 是十三，thirty 是三十，three 是三。注意 thirteen 和 thirty 长得像，别弄混哦。',
  },
  {
    id: 'e0-4', type: 'choice', tag: '单词',
    q: '雨后天边挂满七色，"rainbow" 的意思是：',
    options: ['雨伞', '彩虹', '下雨', '天空'],
    answer: 1,
    explain: 'rain（雨）+ bow（弓形）= rainbow 彩虹，雨后的天空中才可能出现哦。',
  },
  {
    id: 'e0-5', type: 'choice', tag: '星期',
    q: '—"How is the weather today?" —______',
    options: ['It\'s sunny.', 'I\'m fine.', 'I\'m ten.', 'It\'s Monday.'],
    answer: 0,
    explain: 'How is the weather? 问天气，回答用 It\'s + 天气词，如 It\'s sunny.（晴天）。',
  },
  {
    id: 'e0-6', type: 'judge', tag: '星期',
    q: '"星期五"的英文是 Friday。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '一周的英语说法：Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday。',
  },
  {
    id: 'e0-7', type: 'choice', tag: '单词',
    q: '我们在 "classroom" 里做什么？',
    options: ['上课学习', '游泳', '买菜', '睡觉'],
    answer: 0,
    explain: 'class（班级）+ room（房间）= classroom 教室，是我们上课学习的地方。',
  },
  {
    id: 'e0-8', type: 'choice', tag: '月份',
    q: '"January" 是几月？',
    options: ['一月', '六月', '七月', '十月'],
    answer: 0,
    explain: 'January 是一月，一年的第一个月；June 六月，July 七月，October 十月。',
  },
  {
    id: 'e0-9', type: 'judge', tag: '书写规范',
    q: '英语句子的第一个字母要大写。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '英语书写规范：句子开头的第一个字母必须大写，人名、地名的首字母也要大写。',
  },
  {
    id: 'e0-10', type: 'choice', tag: '家庭',
    q: '"My father\'s mother is my grandmother." 的意思是：',
    options: ['我爸爸的妈妈是我的奶奶', '我的爸爸是爷爷', '我妈妈是奶奶', '我爱我的家'],
    answer: 0,
    explain: 'father\'s mother = 爸爸的妈妈 = grandmother 奶奶（或外婆）。',
  },
]

// ===================== Unit 1 Clubs in our school =====================
const UNIT_E1: Question[] = [
  {
    id: 'e1-1', type: 'choice', tag: '单词',
    q: '"science club" 的意思是：',
    options: ['美术社团', '科学社团', '音乐社团', '象棋社团'],
    answer: 1,
    explain: 'science 科学 + club 社团 = science club 科学社团。art club 美术社团，music club 音乐社团。',
  },
  {
    id: 'e1-2', type: 'choice', tag: '句型',
    q: 'I want to ______ the art club.（我想加入美术社团。）',
    options: ['join', 'joins', 'joining', 'join to'],
    answer: 0,
    explain: 'want to + 动词原形，表示"想要做某事"，所以用 join。join the club 意思是"加入社团"。',
  },
  {
    id: 'e1-3', type: 'choice', tag: '情景对话',
    q: '—What club are you in? —______',
    options: ['I\'m in the chess club.', 'I\'m ten years old.', 'I like apples.', 'It\'s Monday.'],
    answer: 0,
    explain: '问句问你参加什么社团，回答 I\'m in the... club.（我在……社团）。',
  },
  {
    id: 'e1-4', type: 'choice', tag: '单词',
    q: '音乐社团（music club）里最可能出现的乐器是：',
    options: ['violin', 'football', 'pencil', 'carrot'],
    answer: 0,
    explain: 'violin 小提琴是乐器；football 足球、pencil 铅笔、carrot 胡萝卜都不是。',
  },
  {
    id: 'e1-5', type: 'choice', tag: '句型',
    q: 'She is good at ______.（她擅长唱歌。）',
    options: ['sing', 'singing', 'sings', 'sang'],
    answer: 1,
    explain: 'be good at + 动词ing 形式，表示"擅长做某事"，所以用 singing。',
  },
  {
    id: 'e1-6', type: 'judge', tag: '单词',
    q: '"sports club" 是体育运动类的社团。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: 'sports 运动 + club 社团 = sports club 体育社团，会开展跑步、打球等活动。',
  },
  {
    id: 'e1-7', type: 'choice', tag: '单词',
    q: '"足球社团"的英文是：',
    options: ['football club', 'film club', 'food club', 'fish club'],
    answer: 0,
    explain: 'football 足球 + club 社团 = football club。film club 电影社团，别看错单词哦。',
  },
  {
    id: 'e1-8', type: 'choice', tag: '单词',
    q: '—Do you want to join the chess club? 单词 "chess" 的意思是：',
    options: ['数学', '国际象棋', '篮球', '合唱'],
    answer: 1,
    explain: 'chess 是国际象棋，chess club 就是棋艺社团，下棋能锻炼大脑哦。',
  },
  {
    id: 'e1-9', type: 'choice', tag: '行为习惯',
    q: '放学后参加社团活动时，我们应该：',
    options: ['遵守规则、认真参与', '大声喧哗乱跑', '不打招呼就离开', '抢别人的东西'],
    answer: 0,
    explain: '参加社团要遵守规则、认真参与、和同伴友好合作，这样才能玩得开心又学到本领。',
  },
  {
    id: 'e1-10', type: 'choice', tag: '句型',
    q: 'We often ______ pictures in the art club.（我们常在美术社团画画。）',
    options: ['draw', 'draws', 'drew', 'drawing'],
    answer: 0,
    explain: '主语是 We，一般现在时用动词原形 draw。often 常常，提示这是经常发生的动作。',
  },
]

// ===================== Unit 2 Traditional games =====================
const UNIT_E2: Question[] = [
  {
    id: 'e2-1', type: 'choice', tag: '单词',
    q: '"hide-and-seek" 是什么游戏？',
    options: ['捉迷藏', '踢毽子', '拔河', '跳皮筋'],
    answer: 0,
    explain: 'hide（躲藏）+ seek（寻找）= hide-and-seek 捉迷藏，大家躲起来让一个人找。',
  },
  {
    id: 'e2-2', type: 'choice', tag: '单词',
    q: '"拔河"的英文是：',
    options: ['tug of war', 'hide-and-seek', 'hopscotch', 'marbles'],
    answer: 0,
    explain: 'tug of war 就是拔河，两队人朝相反方向拉绳子，比谁的力气大！',
  },
  {
    id: 'e2-3', type: 'choice', tag: '传统文化',
    q: '下面哪个是中国传统游戏？',
    options: ['shuttlecock kicking 踢毽子', 'video games 电子游戏', 'roller skating 轮滑', 'shopping 购物'],
    answer: 0,
    explain: '踢毽子是中国传统民间游戏，历史悠久；电子游戏、轮滑都是现代才出现的。',
  },
  {
    id: 'e2-4', type: 'choice', tag: '句型',
    q: 'Let\'s ______ tug of war!（我们来拔河吧！）',
    options: ['play', 'plays', 'playing', 'played'],
    answer: 0,
    explain: 'Let\'s + 动词原形，表示"让我们……吧"，所以用 play。',
  },
  {
    id: 'e2-5', type: 'choice', tag: '情景对话',
    q: '—What games did your grandparents play? —They played ______.',
    options: ['hide-and-seek', 'computer games', 'mobile games', 'online games'],
    answer: 0,
    explain: '爷爷奶奶小时候没有电脑和手机，他们常玩捉迷藏、跳皮筋、踢毽子这些游戏。',
  },
  {
    id: 'e2-6', type: 'judge', tag: '传统文化',
    q: '舞龙（dragon dance）常常在春节等喜庆节日表演。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '舞龙是中国传统民俗表演，春节、元宵节等喜庆的日子里，人们舞龙祈求好运。',
  },
  {
    id: 'e2-7', type: 'choice', tag: '单词',
    q: '"marbles" 指的游戏是：',
    options: ['弹珠', '秋千', '风筝', '积木'],
    answer: 0,
    explain: 'marbles 是弹珠（玻璃球），玩的时候在地上弹来弹去，是中外孩子都爱玩的游戏。',
  },
  {
    id: 'e2-8', type: 'choice', tag: '句型',
    q: 'It\'s fun to ______ kites in spring.（春天放风筝很有趣。）',
    options: ['fly', 'flies', 'flying', 'flew'],
    answer: 0,
    explain: 'It\'s fun to + 动词原形，"fly a kite" 意思是放风筝。',
  },
  {
    id: 'e2-9', type: 'judge', tag: '思维判断',
    q: '传统游戏只能一个人玩，不能和大家一起玩。',
    options: JUDGE_OPTS,
    answer: 1,
    explain: '错啦！很多传统游戏像拔河、捉迷藏、踢毽子比赛，都要和小伙伴一起玩才有趣。',
  },
  {
    id: 'e2-10', type: 'choice', tag: '传统文化',
    q: '踢毽子时，用得最多的身体部位是：',
    options: ['脚', '头', '手', '背'],
    answer: 0,
    explain: '踢毽子主要用脚内侧、脚背等部位把毽子踢起来，眼睛还要盯着毽子哦。',
  },
]

// ===================== Unit 3 Amazing plants =====================
const UNIT_E3: Question[] = [
  {
    id: 'e3-1', type: 'choice', tag: '单词',
    q: '"bamboo" 的意思是：',
    options: ['竹子', '花生', '向日葵', '荷花'],
    answer: 0,
    explain: 'bamboo 竹子，长得又高又快；peanut 花生，sunflower 向日葵，lotus 荷花。',
  },
  {
    id: 'e3-2', type: 'choice', tag: '科普',
    q: '植物进行光合作用，最主要靠哪个部位？',
    options: ['叶子', '根', '花', '果实'],
    answer: 0,
    explain: '叶子里的叶绿体利用阳光制造养分，这就是光合作用，所以叶子是植物的"小工厂"。',
  },
  {
    id: 'e3-3', type: 'choice', tag: '句型',
    q: 'A sunflower turns to face the ______.（向日葵会朝着太阳转。）',
    options: ['sun', 'moon', 'star', 'rain'],
    answer: 0,
    explain: 'sun 太阳。sunflower = sun + flower，向日葵的花盘会跟着太阳转，所以叫"太阳花"。',
  },
  {
    id: 'e3-4', type: 'choice', tag: '科普',
    q: '植物吸收水分，主要靠：',
    options: ['roots 根', 'flowers 花', 'leaves 叶', 'seeds 种子'],
    answer: 0,
    explain: 'roots（根）扎在土壤里，像吸管一样把水分和营养吸上来送给全身。',
  },
  {
    id: 'e3-5', type: 'judge', tag: '科普',
    q: '竹子是大熊猫最喜欢的食物。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！大熊猫最爱吃竹子，一天能吃掉几十斤新鲜的竹子和竹笋。',
  },
  {
    id: 'e3-6', type: 'choice', tag: '单词',
    q: '"出淤泥而不染"的 lotus 是：',
    options: ['荷花', '松树', '菊花', '梅花'],
    answer: 0,
    explain: 'lotus 荷花，从塘泥里长出来却干净美丽，所以古人夸它"出淤泥而不染"。',
  },
  {
    id: 'e3-7', type: 'choice', tag: '句型',
    q: 'Plants need water, air and ______.（植物需要水、空气和阳光。）',
    options: ['sunlight', 'candy', 'toys', 'books'],
    answer: 0,
    explain: 'sunlight 阳光。植物生长离不开水、空气和阳光，但不需要糖果和玩具哦。',
  },
  {
    id: 'e3-8', type: 'choice', tag: '科普',
    q: '植物的种子传播方式，不包括下面哪一种？',
    options: ['打电话传播', '风吹传播', '动物携带', '水流传播'],
    answer: 0,
    explain: '种子会乘风飞、被动物带走、随水漂流，但植物可不会打电话，哈哈。',
  },
  {
    id: 'e3-9', type: 'judge', tag: '科普',
    q: '竹子长得非常慢，一年只能长几厘米。',
    options: JUDGE_OPTS,
    answer: 1,
    explain: '错啦！竹子是世界上长得最快的植物之一，生长旺季一天就能蹿高几十厘米甚至一米！',
  },
  {
    id: 'e3-10', type: 'choice', tag: '单词',
    q: '"向日葵"的英文是：',
    options: ['sunflower', 'moonflower', 'starflower', 'rainflower'],
    answer: 0,
    explain: 'sunflower = sun（太阳）+ flower（花），花盘像小太阳，所以叫 sunflower。',
  },
]

// ===================== Unit 4 Together with animals =====================
const UNIT_E4: Question[] = [
  {
    id: 'e4-1', type: 'choice', tag: '单词',
    q: '"feed the cat" 的意思是：',
    options: ['喂猫', '遛狗', '给猫洗澡', '和猫玩'],
    answer: 0,
    explain: 'feed 是喂食，feed the cat 就是给猫咪喂食；遛狗是 walk the dog。',
  },
  {
    id: 'e4-2', type: 'choice', tag: '科普',
    q: 'Pandas love eating ______.（大熊猫爱吃______。）',
    options: ['bamboo', 'meat', 'fish', 'rice'],
    answer: 0,
    explain: 'bamboo 竹子。大熊猫99%的食物都是竹子，平均每天要吃12~38公斤！',
  },
  {
    id: 'e4-3', type: 'choice', tag: '情景对话',
    q: '—What animals do you like? —______',
    options: ['I like dogs.', 'I\'m fine.', 'It\'s a book.', 'Yes, I am.'],
    answer: 0,
    explain: '问你喜欢什么动物，回答 I like + 动物名，如 I like dogs. 我喜欢狗。',
  },
  {
    id: 'e4-4', type: 'choice', tag: '科普',
    q: '下面哪种动物是哺乳动物？',
    options: ['鲸鱼 whale', '金鱼 goldfish', '蛇 snake', '青蛙 frog'],
    answer: 0,
    explain: '鲸鱼虽然住在海里，但它是胎生、吃母乳的哺乳动物；金鱼、蛇、青蛙都不是。',
  },
  {
    id: 'e4-5', type: 'judge', tag: '爱心行动',
    q: '狗狗需要每天出门散步和运动。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！狗狗和人一样需要运动，每天散步能让它身体健康、心情愉快。',
  },
  {
    id: 'e4-6', type: 'choice', tag: '单词',
    q: '"protect animals" 的意思是：',
    options: ['保护动物', '抓住动物', '训练动物', '喂饱动物'],
    answer: 0,
    explain: 'protect 是保护，protect animals 就是保护动物，比如不伤害它们、保护它们的家园。',
  },
  {
    id: 'e4-7', type: 'choice', tag: '句型',
    q: 'We should be ______ to animals.（我们应该善待动物。）',
    options: ['kind', 'angry', 'sad', 'afraid'],
    answer: 0,
    explain: 'be kind to... 意思是"对……友好/善良"。we should be kind to animals 我们应该善待动物。',
  },
  {
    id: 'e4-8', type: 'choice', tag: '科普',
    q: '野生大熊猫主要生活在中国的哪里？',
    options: ['四川的山林里', '沙漠里', '北极', '大海上'],
    answer: 0,
    explain: '野生大熊猫住在四川、陕西、甘肃的高山竹林里，那里凉爽湿润、竹子丰富。',
  },
  {
    id: 'e4-9', type: 'judge', tag: '爱心行动',
    q: '看到流浪的小猫小狗，可以告诉大人或联系救助站，不能欺负它们。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！遇到流浪动物要请大人帮忙、联系救助站，小动物也是需要被爱护的生命。',
  },
  {
    id: 'e4-10', type: 'choice', tag: '单词',
    q: '周末去动物园看大象，"大象"的英文是：',
    options: ['elephant', 'rabbit', 'monkey', 'tiger'],
    answer: 0,
    explain: 'elephant 大象，rabbit 兔子，monkey 猴子，tiger 老虎。大象是陆地上最大的动物！',
  },
]

// ===================== Unit 5 Seeing a doctor =====================
const UNIT_E5: Question[] = [
  {
    id: 'e5-1', type: 'choice', tag: '情景对话',
    q: '—What\'s wrong with you? —______',
    options: ['I have a fever.', 'I\'m ten.', 'It\'s sunny.', 'I like apples.'],
    answer: 0,
    explain: 'What\'s wrong with you? 医生问"你怎么了"，回答 I have a fever.（我发烧了）。',
  },
  {
    id: 'e5-2', type: 'choice', tag: '单词',
    q: '"headache" 的意思是：',
    options: ['头疼', '牙疼', '肚子疼', '发烧'],
    answer: 0,
    explain: 'head（头）+ ache（疼）= headache 头疼。同类词还有 toothache 牙疼。',
  },
  {
    id: 'e5-3', type: 'choice', tag: '单词',
    q: '"咳嗽"的英文是：',
    options: ['cough', 'cold', 'fever', 'hurt'],
    answer: 0,
    explain: 'cough 咳嗽；cold 感冒；fever 发烧。I have a cough. 我咳嗽。',
  },
  {
    id: 'e5-4', type: 'choice', tag: '情景对话',
    q: '—You have a cold. You should ______. —Thank you, doctor.',
    options: ['have a good rest', 'run fast', 'eat ice cream', 'play football'],
    answer: 0,
    explain: '感冒了医生会说：have a good rest（好好休息），多喝水，不能剧烈运动。',
  },
  {
    id: 'e5-5', type: 'judge', tag: '健康习惯',
    q: '生病发烧时要多喝温水、好好休息。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！发烧时身体缺水，多喝温水帮助降温排毒，休息够了才好得快。',
  },
  {
    id: 'e5-6', type: 'choice', tag: '单词',
    q: '"牙疼"的英文是：',
    options: ['toothache', 'headache', 'stomach ache', 'earache'],
    answer: 0,
    explain: 'tooth（牙齿）+ ache（疼）= toothache 牙疼。要少吃糖、早晚刷牙才不会牙疼哦。',
  },
  {
    id: 'e5-7', type: 'choice', tag: '句型',
    q: 'Take this ______ three times a day.（这药一天吃三次。）',
    options: ['medicine', 'apple', 'water', 'ball'],
    answer: 0,
    explain: 'medicine 药。take medicine 是固定搭配"吃药"，一天三次要听医生的话。',
  },
  {
    id: 'e5-8', type: 'choice', tag: '情景对话',
    q: '—How do you feel now? —______',
    options: ['I feel much better.', 'I feel like a bird.', 'I am a student.', 'I have two eyes.'],
    answer: 0,
    explain: 'How do you feel now? 问"你现在感觉怎么样"，好转了就回答 I feel much better.（好多了）。',
  },
  {
    id: 'e5-9', type: 'judge', tag: '健康习惯',
    q: '看医生时，应该如实告诉医生自己哪里不舒服。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！如实说清症状，医生才能准确判断病情，帮我们更快好起来。',
  },
  {
    id: 'e5-10', type: 'choice', tag: '健康习惯',
    q: '想少生病，我们应该：',
    options: ['多运动、勤洗手', '不吃蔬菜', '整天玩游戏', '熬夜不睡觉'],
    answer: 0,
    explain: '多运动、勤洗手、不挑食、睡好觉，身体的免疫力才会棒棒的！',
  },
]

// ===================== Unit 6 Rise to the challenge =====================
const UNIT_E6: Question[] = [
  {
    id: 'e6-1', type: 'choice', tag: '单词',
    q: '"Never give up!" 的意思是：',
    options: ['永不放弃', '永不给予', '永不停止', '永不迟到'],
    answer: 0,
    explain: 'give up 放弃，Never give up! 永不放弃——遇到困难时给自己打气的口号！',
  },
  {
    id: 'e6-2', type: 'choice', tag: '单词',
    q: '"challenge" 的意思是：',
    options: ['挑战', '变化', '玩笑', '礼物'],
    answer: 0,
    explain: 'challenge 挑战。Rise to the challenge 就是"迎接挑战"。',
  },
  {
    id: 'e6-3', type: 'choice', tag: '句型',
    q: 'The question is hard, but I will ______.（题目很难，但我会试一试。）',
    options: ['have a try', 'go to bed', 'play games', 'say sorry'],
    answer: 0,
    explain: 'have a try 试一试。遇到难题不逃跑，先试一试才知不知道答案！',
  },
  {
    id: 'e6-4', type: 'judge', tag: '学习方法',
    q: '遇到不会做的难题，应该先冷静思考，再请教别人。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！先自己想一想、试一试，实在不会再请教老师和同学，这样才能真正学会。',
  },
  {
    id: 'e6-5', type: 'choice', tag: '单词',
    q: '"勇敢的"英文是：',
    options: ['brave', 'quiet', 'lazy', 'angry'],
    answer: 0,
    explain: 'brave 勇敢的；quiet 安静的；lazy 懒惰的；angry 生气的。You are so brave! 你真勇敢！',
  },
  {
    id: 'e6-6', type: 'choice', tag: '句型',
    q: 'Believe in ______ and you will succeed.（相信自己，你就会成功。）',
    options: ['yourself', 'myself', 'himself', 'herself'],
    answer: 0,
    explain: 'believe in yourself 相信自己。对别人说这句话时，用 yourself（你自己）。',
  },
  {
    id: 'e6-7', type: 'choice', tag: '情感鼓励',
    q: '—I failed the game.（我输了。）—______',
    options: ['Don\'t worry! Try again!', 'Ha ha, goodbye!', 'I don\'t care.', 'You are bad!'],
    answer: 0,
    explain: '朋友输了应该鼓励他：别灰心，再试一次！Don\'t worry! Try again!',
  },
  {
    id: 'e6-8', type: 'judge', tag: '精神品质',
    q: '每天进步一点点，坚持下去就会有大的收获。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！每天进步一点点，就像存钱罐慢慢变满，坚持就会有收获。',
  },
  {
    id: 'e6-9', type: 'choice', tag: '单词',
    q: '"practice" 的意思是：',
    options: ['练习', '游戏', '睡觉', '旅行'],
    answer: 0,
    explain: 'practice 练习。Practise the piano every day. 每天练习弹钢琴。',
  },
  {
    id: 'e6-10', type: 'choice', tag: '谚语',
    q: '"熟能生巧"这句英文谚语是：',
    options: ['Practice makes perfect.', 'Practice makes money.', 'Practice makes food.', 'Practice makes friends.'],
    answer: 0,
    explain: 'Practice makes perfect. 直译是"练习造就完美"，就是熟能生巧的意思。',
  },
]

// ===================== Unit 7 Great scientists =====================
const UNIT_E7: Question[] = [
  {
    id: 'e7-1', type: 'choice', tag: '文化常识',
    q: '"杂交水稻之父"袁隆平爷爷，他的英文名写法是：',
    options: ['Yuan Longping', 'Newton', 'Einstein', 'Curie'],
    answer: 0,
    explain: '中国人名的英文写法是拼音：Yuan Longping 袁隆平。他研究的水稻让很多人吃饱了饭。',
  },
  {
    id: 'e7-2', type: 'choice', tag: '单词',
    q: '"scientist" 的意思是：',
    options: ['科学家', '艺术家', '司机', '医生'],
    answer: 0,
    explain: 'scientist 科学家，science（科学）+ ist（表示人）。artist 才是艺术家哦。',
  },
  {
    id: 'e7-3', type: 'choice', tag: '文化常识',
    q: '下面哪位中国科学家为我国的航天事业做出了巨大贡献？',
    options: ['钱学森 Qian Xuesen', '爱因斯坦 Einstein', '牛顿 Newton', '居里夫人 Curie'],
    answer: 0,
    explain: '钱学森爷爷是中国航天事业的奠基人，被称为"中国航天之父"。',
  },
  {
    id: 'e7-4', type: 'choice', tag: '文化常识',
    q: '屠呦呦奶奶因为发现治疗疟疾的青蒿素，获得了：',
    options: ['诺贝尔奖', '奥运会金牌', '电影奖', '唱歌比赛冠军'],
    answer: 0,
    explain: '2015年屠呦呦获得诺贝尔生理学或医学奖，她是第一位获得诺贝尔科学奖项的中国本土科学家。',
  },
  {
    id: 'e7-5', type: 'judge', tag: '文化常识',
    q: '牛顿因为苹果落地受到启发，发现了万有引力。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！牛顿看到苹果落地，思考"为什么苹果会往下掉"，最终发现了万有引力定律。',
  },
  {
    id: 'e7-6', type: 'choice', tag: '单词',
    q: '"invent" 的意思是：',
    options: ['发明', '发现', '忘记', '破坏'],
    answer: 0,
    explain: 'invent 发明（创造出以前没有的东西）；discover 才是发现（找到本来就有的东西）。',
  },
  {
    id: 'e7-7', type: 'choice', tag: '文化常识',
    q: '爱迪生经过上千次试验，发明（改良）了：',
    options: ['电灯泡', '电话', '飞机', '电视'],
    answer: 0,
    explain: '爱迪生试了上千种材料，找到了合适的灯丝，让电灯走进了千家万户。',
  },
  {
    id: 'e7-8', type: 'choice', tag: '句型',
    q: 'Scientists work hard to make the world ______.（科学家努力让世界变得更好。）',
    options: ['better', 'worse', 'smaller', 'colder'],
    answer: 0,
    explain: 'better 是 good 的比较级，"更好"。make the world better 让世界更美好。',
  },
  {
    id: 'e7-9', type: 'judge', tag: '精神品质',
    q: '科学家的成功来自认真观察、反复实验和永不放弃。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！认真观察、敢于提问、反复试验、不怕失败，这就是科学精神。',
  },
  {
    id: 'e7-10', type: 'choice', tag: '句型',
    q: 'Marie Curie was a great ______ scientist.（居里夫人是一位伟大的女科学家。）',
    options: ['woman', 'man', 'boy', 'girl'],
    answer: 0,
    explain: 'woman scientist 女科学家。居里夫人两次获得诺贝尔奖，是伟大的女科学家。',
  },
]

// ===================== Unit 8 Useful inventions =====================
const UNIT_E8: Question[] = [
  {
    id: 'e8-1', type: 'choice', tag: '文化常识',
    q: '中国古代"四大发明"是：',
    options: ['造纸术、印刷术、指南针、火药', '汽车、飞机、电脑、手机', '铅笔、橡皮、尺子、书包', '电视、冰箱、洗衣机、空调'],
    answer: 0,
    explain: '四大发明：paper 造纸术、printing 印刷术、compass 指南针、gunpowder 火药，是中国对世界的伟大贡献。',
  },
  {
    id: 'e8-2', type: 'choice', tag: '单词',
    q: '"invention" 的意思是：',
    options: ['发明', '游戏', '运动', '节日'],
    answer: 0,
    explain: 'invention 发明，是 invent（发明）的名词形式。an useful invention 一个有用的发明。',
  },
  {
    id: 'e8-3', type: 'choice', tag: '单词',
    q: '"compass" 的意思是：',
    options: ['指南针', '望远镜', '显微镜', '放大镜'],
    answer: 0,
    explain: 'compass 指南针，能指示南北方向，古代航海全靠它辨认方向。',
  },
  {
    id: 'e8-4', type: 'choice', tag: '文化常识',
    q: 'Paper was invented in ______.（纸是______发明的。）',
    options: ['China 中国', 'America 美国', 'England 英国', 'Japan 日本'],
    answer: 0,
    explain: '纸是中国古代发明的，东汉的蔡伦改进了造纸术，让纸变得又轻又便宜。',
  },
  {
    id: 'e8-5', type: 'judge', tag: '文化常识',
    q: '印刷术让书籍变得更多、更便宜，让更多人能读到书。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！有了印刷术，书不用再一本一本抄，知识传播得又快又广。',
  },
  {
    id: 'e8-6', type: 'choice', tag: '单词',
    q: '"飞机"的英文是：',
    options: ['plane', 'train', 'ship', 'bike'],
    answer: 0,
    explain: 'plane 飞机，train 火车，ship 轮船，bike 自行车。',
  },
  {
    id: 'e8-7', type: 'choice', tag: '文化常识',
    q: '贝尔发明了电话（telephone），人们可以用它：',
    options: ['和远方的人说话', '在水里游泳', '生火做饭', '飞上天空'],
    answer: 0,
    explain: '电话让相隔很远的人能即时通话，不用再等写信送信好多天啦。',
  },
  {
    id: 'e8-8', type: 'judge', tag: '思维判断',
    q: '许多发明让我们的生活更加方便。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！电灯照亮夜晚，洗衣机帮忙洗衣，电脑帮我们学习——发明让生活更方便。',
  },
  {
    id: 'e8-9', type: 'choice', tag: '单词',
    q: '"电灯"的英文是：',
    options: ['light', 'night', 'fight', 'right'],
    answer: 0,
    explain: 'light 电灯/光；night 夜晚。Turn on the light. 打开电灯。拼写注意区分。',
  },
  {
    id: 'e8-10', type: 'choice', tag: '句型',
    q: 'I want to ______ a useful machine when I grow up.（长大后我想发明有用的机器。）',
    options: ['invent', 'invents', 'invented', 'inventing'],
    answer: 0,
    explain: 'want to + 动词原形：want to invent 想要发明。小小的愿望可能就是伟大的开始！',
  },
]

// ===================== Unit 9 Using computers =====================
const UNIT_E9: Question[] = [
  {
    id: 'e9-1', type: 'choice', tag: '单词',
    q: '敲击它来输入文字，"keyboard" 是：',
    options: ['键盘', '鼠标', '屏幕', '音箱'],
    answer: 0,
    explain: 'key（按键）+ board（板）= keyboard 键盘，用手指敲击它输入文字。',
  },
  {
    id: 'e9-2', type: 'choice', tag: '单词',
    q: '"鼠标"的英文是：',
    options: ['mouse', 'cat', 'dog', 'bird'],
    answer: 0,
    explain: 'mouse 既指老鼠也指鼠标——因为拖着长长的线，样子像小老鼠。',
  },
  {
    id: 'e9-3', type: 'choice', tag: '句型',
    q: 'You can ______ the internet to find information.（你可以上网查资料。）',
    options: ['search', 'eat', 'sleep', 'wash'],
    answer: 0,
    explain: 'search the internet 上网搜索。search 搜索、查找，查资料用 search。',
  },
  {
    id: 'e9-4', type: 'judge', tag: '用眼健康',
    q: '电脑屏幕看久了要休息一下，眺望远方保护眼睛。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！用眼20~30分钟就远眺放松，做做眼保健操，眼睛才不会太疲劳。',
  },
  {
    id: 'e9-5', type: 'choice', tag: '单词',
    q: '发送"电子邮件"的英文是：',
    options: ['send an email', 'play football', 'wash clothes', 'do homework'],
    answer: 0,
    explain: 'send an email 发送电子邮件。e-mail 的 e 是 electronic（电子的）的意思。',
  },
  {
    id: 'e9-6', type: 'judge', tag: '安全上网',
    q: '可以把密码（password）随便告诉网上的陌生人。',
    options: JUDGE_OPTS,
    answer: 1,
    explain: '错！密码是重要的秘密，绝对不能告诉陌生人，也不能告诉除爸妈外的任何人。',
  },
  {
    id: 'e9-7', type: 'choice', tag: '单词',
    q: '"screen" 的意思是：',
    options: ['屏幕', '鼠标', '主机', '键盘'],
    answer: 0,
    explain: 'screen 屏幕。Don\'t sit too close to the screen. 别坐得离屏幕太近。',
  },
  {
    id: 'e9-8', type: 'choice', tag: '情景对话',
    q: '—I have an online class at nine. —______',
    options: ['See you in class!', 'Good night!', 'Happy birthday!', 'Merry Christmas!'],
    answer: 0,
    explain: 'online class 网络课。对方要去上课了，说 See you in class!（课上见！）。',
  },
  {
    id: 'e9-9', type: 'choice', tag: '句型',
    q: 'Don\'t play computer games for too ______.（不要玩太长时间电脑游戏。）',
    options: ['long', 'short', 'tall', 'small'],
    answer: 0,
    explain: 'for too long 太长时间。玩游戏要控制时间，每次不超过20分钟更健康。',
  },
  {
    id: 'e9-10', type: 'judge', tag: '安全上网',
    q: '用电脑查资料、学知识是很好的用法，但要控制时间。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！电脑是学习的好帮手，但要约定好使用时间，做时间的小主人。',
  },
]

// ===================== Unit 10 A greener life =====================
const UNIT_E10: Question[] = [
  {
    id: 'e10-1', type: 'choice', tag: '单词',
    q: '"save water" 的意思是：',
    options: ['节约用水', '喝光水', '倒掉水', '玩水'],
    answer: 0,
    explain: 'save 是节约/节省，save water 节约用水。save 也有"拯救、储存"的意思。',
  },
  {
    id: 'e10-2', type: 'choice', tag: '句型',
    q: 'Turn ______ the lights when you leave.（离开时把灯关掉。）',
    options: ['off', 'on', 'up', 'in'],
    answer: 0,
    explain: 'turn off 关掉（电器），turn on 打开。随手关灯，节约用电从小事做起。',
  },
  {
    id: 'e10-3', type: 'judge', tag: '环保行动',
    q: '垃圾分类能让更多垃圾被回收利用。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！分类投放后，纸、塑料、金属能被送去回收再利用，减少浪费和污染。',
  },
  {
    id: 'e10-4', type: 'choice', tag: '单词',
    q: '"recycle" 的意思是：',
    options: ['回收利用', '随手扔掉', '烧掉', '埋起来'],
    answer: 0,
    explain: 're（再次）+ cycle（循环）= recycle 回收利用，让旧东西变成新宝贝。',
  },
  {
    id: 'e10-5', type: 'choice', tag: '环保行动',
    q: 'We should use ______ bags instead of plastic ones.（我们应该用______袋代替塑料袋。）',
    options: ['cloth', 'plastic', 'more plastic', 'new plastic'],
    answer: 0,
    explain: 'cloth bag 布袋子。布袋可以反复使用，少用塑料袋，白色污染就少一点。',
  },
  {
    id: 'e10-6', type: 'choice', tag: '单词',
    q: '"a greener life" 指的是哪种生活方式？',
    options: ['环保低碳的生活', '多吃绿色糖果', '一直打游戏', '天天开车出门'],
    answer: 0,
    explain: 'greener life 绿色生活：节约资源、爱护环境、低碳出行，对地球更友好。',
  },
  {
    id: 'e10-7', type: 'judge', tag: '环保行动',
    q: '刷牙时一直开着水龙头很浪费水。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！刷牙时应该用杯子接水或先关上水龙头，一个水龙头一分钟能流出好几升水呢。',
  },
  {
    id: 'e10-8', type: 'choice', tag: '单词',
    q: '"垃圾"的英文是：',
    options: ['rubbish', 'water', 'money', 'food'],
    answer: 0,
    explain: 'rubbish 垃圾（英式常用）；美式常说 trash 或 garbage。Don\'t drop rubbish. 别乱扔垃圾。',
  },
  {
    id: 'e10-9', type: 'choice', tag: '句型',
    q: 'Paper, glass and metal can be ______.（纸、玻璃和金属都可以被回收。）',
    options: ['recycled', 'eaten', 'drunk', 'forgotten'],
    answer: 0,
    explain: 'can be recycled 能被回收利用。纸、玻璃、金属都是可回收物。',
  },
  {
    id: 'e10-10', type: 'judge', tag: '绿色出行',
    q: '出门多走路、骑车或坐公交，可以减少空气污染。',
    options: JUDGE_OPTS,
    answer: 0,
    explain: '对！步行、骑车、坐公共交通都是绿色出行，少开私家车，天空会更蓝。',
  },
]

// ===================== 题库汇总 =====================
export const QUESTIONS: Record<string, Question[]> = {
  st: UNIT_ST,
  e1: UNIT_E1,
  e2: UNIT_E2,
  e3: UNIT_E3,
  e4: UNIT_E4,
  e5: UNIT_E5,
  e6: UNIT_E6,
  e7: UNIT_E7,
  e8: UNIT_E8,
  e9: UNIT_E9,
  e10: UNIT_E10,
}
