// 人教版PEP英语 三年级上册（三年级起点·六三制 2024秋新版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（PEP）三年级上册（2024 秋版）· 人民教育出版社
// 目录（电子课本网 dzkbw pep3s_2024 权威核对）：
//   Unit 1 Making friends（A How do we greet friends? / B How can we be a good friend? / C Project）
//   Unit 2 Different families（A Who lives with you? / B How are families different?）
//   Unit 3 Amazing animals（A What pets do you know? / B What wild animals do you know?）
//   Unit 4 Plants around us（A What do we get from plants? / B How can we help plants?）
//   Unit 5 The colourful world（A What colours do you see? / B How do colours help us?）
//   Unit 6 Useful numbers（A When do we use numbers? / B How useful are numbers?）
//   Revision: Being a good guest
// 每单元一关，每关 10 题，共 7 关 70 题，题目 id 前缀 zc

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
    id: 'zc1',
    name: 'Unit 1',
    title: 'Making friends',
    emoji: '🤝',
    color: 'amber',
    lessons: ['How do we greet friends?', 'How can we be a good friend?', 'Project: Making friends'],
    intro: '学会问候新朋友，做一个会分享、肯帮忙的好朋友！',
  },
  {
    id: 'zc2',
    name: 'Unit 2',
    title: 'Different families',
    emoji: '👨‍👩‍👧‍👦',
    color: 'orange',
    lessons: ['Who lives with you?', 'How are families different?', 'Project: Family tree'],
    intro: '每个家庭都不一样，画出我家的家庭树！',
  },
  {
    id: 'zc3',
    name: 'Unit 3',
    title: 'Amazing animals',
    emoji: '🐼',
    color: 'lime',
    lessons: ['What pets do you know?', 'What wild animals do you know?', 'Project: Animal picture book'],
    intro: '可爱的宠物、神奇的野生动物，动物世界真奇妙！',
  },
  {
    id: 'zc4',
    name: 'Unit 4',
    title: 'Plants around us',
    emoji: '🌳',
    color: 'teal',
    lessons: ['What do we get from plants?', 'How can we help plants?', 'Project: Paper garden'],
    intro: '花草树木在身边，植物给我们的礼物数不清！',
  },
  {
    id: 'zc5',
    name: 'Unit 5',
    title: 'The colourful world',
    emoji: '🌈',
    color: 'rose',
    lessons: ['What colours do you see?', 'How do colours help us?', 'Project: Colour flip book'],
    intro: '红橙黄绿青蓝紫，颜色让世界更美丽！',
  },
  {
    id: 'zc6',
    name: 'Unit 6',
    title: 'Useful numbers',
    emoji: '🔢',
    color: 'cyan',
    lessons: ['When do we use numbers?', 'How useful are numbers?', 'Project: Birthday card'],
    intro: '年龄、电话、时间都离不开数字，数字本领大！',
  },
  {
    id: 'zcr',
    name: 'Revision',
    title: 'Being a good guest',
    emoji: '🌟',
    color: 'pink',
    lessons: ['Being a good guest', '常用表达语', '综合复习'],
    intro: '学做有礼貌的小客人，把一上学过的本领亮出来！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zc1: [
    { id: 'zc1-1', type: 'choice', q: '新学期见到同学，打招呼说：', options: ['Hello! Nice to see you!', 'Go away!', 'Who are you?', 'What do you want?'], answer: 0, explain: 'Hello! Nice to see you! 你好！很高兴见到你，大方问好交朋友。', tag: '打招呼' },
    { id: 'zc1-2', type: 'choice', q: '"Making friends" 的意思是：', options: ['交朋友', '做手工', '考试', '逛公园'], answer: 0, explain: 'make friends 交朋友，朋友是人生最宝贵的财富之一。', tag: '短语理解' },
    { id: 'zc1-3', type: 'choice', q: '想介绍自己，可以说：', options: ['I\'m Sarah. I\'m nine.', 'You are Sarah.', 'This is a book.', 'It\'s red.'], answer: 0, explain: '介绍自己：I\'m + 名字（+ 年龄），如 I\'m Sarah. I\'m nine.', tag: '自我介绍' },
    { id: 'zc1-4', type: 'choice', q: '好朋友的东西掉了，你应该：', options: ['帮他捡起来', '假装没看见', '踩一脚', '藏起来'], answer: 0, explain: '主动帮忙说 Let me help you. 互相帮助，友谊更深！', tag: '品德养成' },
    { id: 'zc1-5', type: 'judge', q: '和好朋友分享零食和故事，是做好朋友的表现。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Sharing is caring. 分享是关爱，好朋友要互相分享。', tag: '品德养成' },
    { id: 'zc1-6', type: 'choice', q: '问对方"你叫什么名字"，可以说：', options: ['What\'s your name?', 'What\'s this?', 'How are you?', 'How old are you?'], answer: 0, explain: 'What\'s your name? 你叫什么名字？回答：I\'m... / My name is...', tag: '句型' },
    { id: 'zc1-7', type: 'choice', q: '同学不小心撞到你并说了 Sorry! 你应该回答：', options: ['That\'s OK.', 'You\'re bad!', 'I\'ll tell the teacher!', 'Go away!'], answer: 0, explain: 'That\'s OK. 没关系。原谅别人的小失误，做宽容的好孩子。', tag: '礼貌用语' },
    { id: 'zc1-8', type: 'choice', q: '新同学一个人玩，你应该：', options: ['邀请他一起玩', '不理他', '笑话他', '抢他东西'], answer: 0, explain: 'Let\'s play together! 我们一起玩吧！主动邀请，友谊从这开始。', tag: '交友' },
    { id: 'zc1-9', type: 'choice', q: '"greet friends" 的意思是：', options: ['问候朋友', '帮助朋友', '想念朋友', '打电话给朋友'], answer: 0, explain: 'greet 问候，greet friends 问候朋友：Hello! Hi! How are you?', tag: '词汇' },
    { id: 'zc1-10', type: 'judge', q: '交朋友时想说什么就说什么，可以随便打断别人。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！认真倾听、不随便打断，是尊重别人。会倾听的孩子朋友多！', tag: '习惯养成' },
  ],
  zc2: [
    { id: 'zc2-1', type: 'choice', q: '"Different families" 的意思是：', options: ['不同的家庭', '同一个班级', '一样的衣服', '不同的学校'], answer: 0, explain: 'different 不同的，每个家庭都有自己的样子，都值得被爱。', tag: '短语理解' },
    { id: 'zc2-2', type: 'choice', q: '"Who lives with you?" 是在问：', options: ['你和谁住在一起？', '你在哪里？', '你喜欢谁？', '你几岁了？'], answer: 0, explain: 'live with... 和……住在一起，回答：I live with my parents.', tag: '句型' },
    { id: 'zc2-3', type: 'choice', q: '爸爸和妈妈合起来叫：', options: ['parents', 'grandparents', 'friends', 'cousins'], answer: 0, explain: 'parents 父母 = father + mother；grandparents 是爷爷奶奶外公外婆。', tag: '家庭词汇' },
    { id: 'zc2-4', type: 'choice', q: 'family tree（家庭树）上可以画出：', options: ['家里成员的关系', '真正的树', '家里的房子', '宠物'], answer: 0, explain: 'family tree 家庭树，画出家人之间的关系，帮助记忆家庭成员。', tag: '家庭词汇' },
    { id: 'zc2-5', type: 'judge', q: '有的家庭人多，有的家庭人少，都是幸福的家庭。', options: ['√ 对', '✗ 错'], answer: 0, explain: '家庭大小不重要，有爱最重要，每个家都独一无二！', tag: '情感态度' },
    { id: 'zc2-6', type: 'choice', q: '"This is my little sister." 的意思是：', options: ['这是我的妹妹。', '这是我的老师。', '这是我的朋友。', '这是我的同学。'], answer: 0, explain: 'little sister 妹妹，big sister 姐姐，介绍家人用 This is...', tag: '家庭词汇' },
    { id: 'zc2-7', type: 'choice', q: '爷爷的英语是：', options: ['grandpa', 'dad', 'brother', 'uncle'], answer: 0, explain: 'grandpa 爷爷/外公，grandma 奶奶/外婆，都是家里的长辈。', tag: '家庭词汇' },
    { id: 'zc2-8', type: 'choice', q: '和家人 together（一起）吃晚饭，可以说：', options: ['We have dinner together.', 'I have dinner alone.', 'Dinner is cold.', 'I don\'t like dinner.'], answer: 0, explain: 'together 一起，全家一起吃晚饭：We have dinner together.', tag: '句型' },
    { id: 'zc2-9', type: 'choice', q: '家里人的爱好 different（不同），你应该：', options: ['尊重每个人的爱好', '逼别人和你一样', '嘲笑别人', '不和别人玩'], answer: 0, explain: '尊重不同，欣赏差异，家里才会其乐融融。', tag: '情感态度' },
    { id: 'zc2-10', type: 'judge', q: '帮家里摆碗筷、拿快递，是爱家庭的表现。', options: ['√ 对', '✗ 错'], answer: 0, explain: '小事也能表达爱，家人一起分担，家庭更温暖！', tag: '品德养成' },
  ],
  zc3: [
    { id: 'zc3-1', type: 'choice', q: '"Amazing animals" 的意思是：', options: ['神奇的动物', '可爱的植物', '动物餐厅', '动物园门票'], answer: 0, explain: 'amazing 令人惊叹的，动物世界有太多 amazing animals！', tag: '短语理解' },
    { id: 'zc3-2', type: 'choice', q: '"pets" 指的是：', options: ['宠物', '野生动物', '动物园', '鸟笼'], answer: 0, explain: 'pet 宠物，cat 猫、dog 狗、fish 鱼都是常见的 pets。', tag: '动物词汇' },
    { id: 'zc3-3', type: 'choice', q: '中国的国宝动物是：', options: ['panda 熊猫', 'dog 狗', 'cat 猫', 'duck 鸭子'], answer: 0, explain: 'panda 熊猫是中国的国宝，黑白相间圆滚滚，全世界都喜欢它！', tag: '动物文化' },
    { id: 'zc3-4', type: 'choice', q: '长脖子的"长颈鹿"是：', options: ['giraffe', 'elephant', 'monkey', 'tiger'], answer: 0, explain: 'giraffe 长颈鹿，脖子长长够树叶；elephant 大象鼻子长。', tag: '动物词汇' },
    { id: 'zc3-5', type: 'judge', q: 'lion（狮子）和 tiger（老虎）都是 pets（宠物）。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错。它们是 wild animals 野生动物，生活在大自然里，不能当宠物养。', tag: '动物词汇' },
    { id: 'zc3-6', type: 'choice', q: '"I have a cat." 的意思是：', options: ['我有一只猫。', '我喜欢猫。', '猫在睡觉。', '这是一只猫。'], answer: 0, explain: 'have 有，I have a cat. 我养了一只猫，要好好照顾它。', tag: '句型' },
    { id: 'zc3-7', type: 'choice', q: '猴子的英语是：', options: ['monkey', 'donkey', 'mouse', 'rabbit'], answer: 0, explain: 'monkey 猴子，爱爬树爱吃香蕉；donkey 是驴，别搞混啦！', tag: '动物词汇' },
    { id: 'zc3-8', type: 'choice', q: '在动物园看动物，正确的做法是：', options: ['安静观赏，不投喂', '扔石头', '拍玻璃', '私自投喂零食'], answer: 0, explain: '动物园要文明游览，不投喂不惊吓，动物健康人人有责。', tag: '品德养成' },
    { id: 'zc3-9', type: 'choice', q: '"Look at that elephant. It\'s so big!" 中 big 的意思是：', options: ['大的', '小的', '长的', '胖的'], answer: 0, explain: 'big 大的，反义词 small 小的；大象 so big 好大呀！', tag: '形容词' },
    { id: 'zc3-10', type: 'judge', q: '养宠物要按时喂食、打扫，对宠物负责到底。', options: ['√ 对', '✗ 错'], answer: 0, explain: '宠物是我们的朋友，养它就要照顾它一辈子，不能半途丢弃。', tag: '品德养成' },
  ],
  zc4: [
    { id: 'zc4-1', type: 'choice', q: '"Plants around us" 的意思是：', options: ['我们身边的植物', '我们的动物朋友', '植物大战', '保护动物'], answer: 0, explain: 'plants 植物，around us 在我们身边，花草树木都是植物。', tag: '短语理解' },
    { id: 'zc4-2', type: 'choice', q: '我们从植物那里能得到：', options: ['fruit 水果和 vegetables 蔬菜', '玩具', '衣服鞋子', '汽车'], answer: 0, explain: 'plants 给我们 fruit 水果、vegetables 蔬菜、grain 粮食，还有新鲜空气！', tag: '植物知识' },
    { id: 'zc4-3', type: 'choice', q: '"tree" 的意思是：', options: ['树', '花', '草', '种子'], answer: 0, explain: 'tree 树，trees 给我们遮阴、结果实，还是小鸟的家。', tag: '植物词汇' },
    { id: 'zc4-4', type: 'choice', q: '植物生长需要：', options: ['阳光和水', '零食', '电视', '玩具'], answer: 0, explain: 'Plants need water and sunshine. 植物需要水和阳光才能长大。', tag: '植物知识' },
    { id: 'zc4-5', type: 'judge', q: '摘公园里的花是爱惜植物的表现。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！花草是大家的，只可远观欣赏，不能随意采摘。', tag: '品德养成' },
    { id: 'zc4-6', type: 'choice', q: '"water the plants" 的意思是：', options: ['给植物浇水', '种树', '摘花', '捡树叶'], answer: 0, explain: 'water 作动词是"浇水"，定期浇水，植物才能茁壮成长。', tag: '动词短语' },
    { id: 'zc4-7', type: 'choice', q: '苹果、香蕉、橘子都属于：', options: ['fruit 水果', 'vegetables 蔬菜', 'meat 肉', 'drinks 饮料'], answer: 0, explain: 'fruit 水果：apple、banana、orange……好吃又营养。', tag: '单词分类' },
    { id: 'zc4-8', type: 'choice', q: '植树节最好的活动是：', options: ['plant trees 植树', '摘树叶', '踩草坪', '折树枝'], answer: 0, explain: 'plant trees 植树造林，绿化的地球更美丽！', tag: '品德养成' },
    { id: 'zc4-9', type: 'choice', q: '"The flowers are beautiful." 的意思是：', options: ['这些花很美。', '这些花要浇水。', '这些花枯了。', '这些花是假的。'], answer: 0, explain: 'beautiful 美丽的，The flowers are beautiful. 花儿真美丽。', tag: '句型' },
    { id: 'zc4-10', type: 'judge', q: '踩踏草坪是爱护小草的表现。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！小草也有生命，绕道走路护小草，做爱护环境的小卫士！', tag: '品德养成' },
  ],
  zc5: [
    { id: 'zc5-1', type: 'choice', q: '"The colourful world" 的意思是：', options: ['多彩的世界', '黑色的夜晚', '白色的雪', '灰色的城市'], answer: 0, explain: 'colourful 五彩缤纷的，世界因为色彩而美丽。', tag: '短语理解' },
    { id: 'zc5-2', type: 'choice', q: '红绿灯"停"的灯是：', options: ['red 红色', 'green 绿色', 'yellow 黄色', 'blue 蓝色'], answer: 0, explain: 'Red means stop. 红灯停；Green means go. 绿灯行。', tag: '颜色' },
    { id: 'zc5-3', type: 'choice', q: '"orange" 可以指：', options: ['橙色和橙子', '蓝色', '香蕉', '苹果'], answer: 0, explain: 'orange 一词两用：橙色 & 橙子，好玩吧！', tag: '颜色词汇' },
    { id: 'zc5-4', type: 'choice', q: '问"它是什么颜色"，应该说：', options: ['What colour is it?', 'What is it?', 'How is it?', 'Where is it?'], answer: 0, explain: 'What colour is it? 回答：It\'s yellow. 黄色的。', tag: '句型' },
    { id: 'zc5-5', type: 'judge', q: 'banana（香蕉）是 yellow（黄色）的。', options: ['√ 对', '✗ 错'], answer: 0, explain: '香蕉黄澄澄：The banana is yellow.', tag: '颜色词汇' },
    { id: 'zc5-6', type: 'choice', q: '"white" 的意思是：', options: ['白色', '黑色', '红色', '绿色'], answer: 0, explain: 'white 白色，black 黑色，white and black 黑白相间。', tag: '颜色词汇' },
    { id: 'zc5-7', type: 'choice', q: '彩虹一般有几种颜色？', options: ['七种', '三种', '十种', '一种'], answer: 0, explain: '彩虹七色：red, orange, yellow, green, blue, indigo, violet！', tag: '自然常识' },
    { id: 'zc5-8', type: 'choice', q: '颜色帮我们生活，比如：', options: ['红绿灯指挥交通', '让作业变多', '让天气变冷', '让人长高'], answer: 0, explain: 'Colours help us. 颜色大有用处：红绿灯、警示牌、地图都靠颜色！', tag: '颜色作用' },
    { id: 'zc5-9', type: 'choice', q: '"brown" 是哪种颜色？', options: ['棕色', '粉色', '灰色', '金色'], answer: 0, explain: 'brown 棕色，树干、小熊都是 brown。', tag: '颜色词汇' },
    { id: 'zc5-10', type: 'judge', q: '美术课上可以把天空画成任何你想象的颜色。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！画画可以发挥想象力，创造属于你的 colourful world！', tag: '创造力' },
  ],
  zc6: [
    { id: 'zc6-1', type: 'choice', q: '"Useful numbers" 的意思是：', options: ['有用的数字', '电话号码', '数学作业', '幸运数字'], answer: 0, explain: 'useful 有用的，numbers in life 生活中的数字本领大！', tag: '短语理解' },
    { id: 'zc6-2', type: 'choice', q: '"How old are you?" 是在问：', options: ['你几岁了？', '你的名字？', '你好吗？', '你在哪里？'], answer: 0, explain: 'How old are you? 问年龄，回答：I\'m eight years old.', tag: '句型' },
    { id: 'zc6-3', type: 'choice', q: '数字 12 的英语是：', options: ['twelve', 'two', 'twenty', 'ten'], answer: 0, explain: 'twelve 12，twenty 是 20，two 是 2，注意区分！', tag: '数字' },
    { id: 'zc6-4', type: 'choice', q: '生活中用到数字的地方是：', options: ['电话号码和门牌号', '唱歌', '画画', '跑步'], answer: 0, explain: '电话号码、楼层、页码、时间……生活处处有 numbers！', tag: '数字应用' },
    { id: 'zc6-5', type: 'judge', q: 'three + five = eight。', options: ['√ 对', '✗ 错'], answer: 0, explain: '3 + 5 = 8，three and five makes eight！', tag: '数字' },
    { id: 'zc6-6', type: 'choice', q: '紧急求救电话 110、119、120 都是：', options: ['重要的号码', '游戏号码', '邮编号码', '车牌号'], answer: 0, explain: '110 报警、119 火警、120 急救，紧急号码要记牢，不能乱拨！', tag: '安全常识' },
    { id: 'zc6-7', type: 'choice', q: '"How many books?" 回答正确的是：', options: ['Nine books.', 'They\'re new.', 'It\'s on the desk.', 'Yes, please.'], answer: 0, explain: 'How many 问数量，回答用数字：Nine books. 九本书。', tag: '句型' },
    { id: 'zc6-8', type: 'choice', q: '"eleven" 的意思是：', options: ['十一', '七', '十二', '一百'], answer: 0, explain: 'eleven 11，twelve 12，ten 之后的数字要单独记。', tag: '数字' },
    { id: 'zc6-9', type: 'judge', q: '过生日收到礼物，要说 Thank you（谢谢你）。', options: ['√ 对', '✗ 错'], answer: 0, explain: '收到礼物大声说 Thank you! 有礼貌的孩子人人爱！', tag: '礼貌用语' },
    { id: 'zc6-10', type: 'choice', q: '做一张 birthday card（生日卡）送给朋友，你会写：', options: ['Happy birthday!', 'Happy New Year!', 'Merry Christmas!', 'Good night!'], answer: 0, explain: 'Happy birthday! 生日快乐，写上祝福，友谊满满！', tag: '祝福语' },
  ],
  zcr: [
    { id: 'zcr-1', type: 'choice', q: '"Being a good guest" 的意思是：', options: ['做一个好客人', '做一个好主人', '做一个好学生', '做一个好梦'], answer: 0, explain: 'guest 客人，去别人家做客要有礼貌：敲门问好、不乱翻东西。', tag: '短语理解' },
    { id: 'zcr-2', type: 'choice', q: '去朋友家做客，进门应该：', options: ['先敲门问好', '直接冲进去', '大声喊叫', '到处乱跑'], answer: 0, explain: '先敲门，见到主人问 Hello! 做好客人的第一步！', tag: '礼仪' },
    { id: 'zcr-3', type: 'choice', q: '主人请你吃东西，你可以说：', options: ['Thank you!', 'Give me more!', 'I don\'t want it!', 'No way!'], answer: 0, explain: 'Yes, please. / Thank you! 有礼貌地接受或婉拒。', tag: '礼貌用语' },
    { id: 'zcr-4', type: 'choice', q: '下面哪个是动物？', options: ['rabbit 兔子', 'ruler 尺子', 'red 红色', 'rain 雨'], answer: 0, explain: 'rabbit 兔子是动物；ruler 文具、red 颜色、rain 天气。', tag: '单词分类' },
    { id: 'zcr-5', type: 'judge', q: 'It\'s time to say goodbye. 意思是"该说再见了"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'It\'s time to... 到……的时间了，离开时说 Goodbye! Thank you!', tag: '句型' },
    { id: 'zcr-6', type: 'choice', q: '客人要走时，主人会说：', options: ['See you next time!', 'Don\'t go out!', 'Where are my keys?', 'What\'s this?'], answer: 0, explain: 'See you next time! 下次见！送客送到门口，礼貌又周到。', tag: '礼貌用语' },
    { id: 'zcr-7', type: 'choice', q: '做客时想玩主人的玩具，应该：', options: ['先征得同意', '直接拿走', '偷偷藏进书包', '假装没有'], answer: 0, explain: 'May I play with this? 我可以玩这个吗？经同意再拿，做文明小客人。', tag: '礼仪' },
    { id: 'zcr-8', type: 'choice', q: '"Nice to meet you." 的回答是：', options: ['Nice to meet you, too.', 'Yes, I am.', 'It\'s nine.', 'Goodbye!'], answer: 0, explain: 'Nice to meet you, too. 我也很高兴认识你，too 表示"也"。', tag: '句型' },
    { id: 'zcr-9', type: 'judge', q: '在别人家里要爱护物品，弄坏了要主动道歉。', options: ['√ 对', '✗ 错'], answer: 0, explain: '不小心弄坏东西要说 Sorry 并想办法弥补，诚实勇敢！', tag: '品德养成' },
    { id: 'zcr-10', type: 'choice', q: '这学期学过的表达里，"谢谢"是：', options: ['Thank you!', 'I\'m sorry.', 'Excuse me.', 'Good morning!'], answer: 0, explain: 'Thank you! 谢谢你，感恩的心要让对方听到！', tag: '礼貌用语' },
  ],
}
