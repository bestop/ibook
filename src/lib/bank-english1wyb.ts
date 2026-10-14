// 外研版新标准英语（一年级起点）一年级下册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）一年级下册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq1x 核对）：
//   M1 He's a doctor./She's a nurse. · M2 Where's the bird?/The toy car is under the bed.
//   M3 Where's the orange cat?/How many green birds? · M4 This is my head./These are your eyes.
//   M5 They're cows./It's thin. · M6 These snakes are short./They're little and cute.
//   M7 There is a cat in the tree./There are three brown monkeys.
//   M8 There's a pair of shorts under that duck./There are two footballs under my desk.
//   M9 I like football./What's your favourite sport? · M10 Let's play football!/Let's sing!
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wg

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
    id: 'wg1',
    name: 'Module 1',
    title: "He's a doctor.",
    emoji: '👩‍⚕️',
    color: 'amber',
    lessons: ["He's a doctor.", "She's a nurse.", 'Jobs around us'],
    intro: '医生护士真伟大，用英语说说身边的职业！',
  },
  {
    id: 'wg2',
    name: 'Module 2',
    title: "Where's the bird?",
    emoji: '🐦',
    color: 'orange',
    lessons: ["Where's the bird?", 'The toy car is under the bed.', 'On in under'],
    intro: '小鸟藏在哪儿？in、on、under 找一找！',
  },
  {
    id: 'wg3',
    name: 'Module 3',
    title: "Where's the orange cat?",
    emoji: '🐱',
    color: 'rose',
    lessons: ["Where's the orange cat?", 'How many green birds?', 'Numbers 11-12'],
    intro: '找一找橘猫在哪，数一数绿鸟几只！',
  },
  {
    id: 'wg4',
    name: 'Module 4',
    title: 'This is my head.',
    emoji: '🙆',
    color: 'lime',
    lessons: ['This is my head.', 'These are your eyes.', 'My body'],
    intro: '眼睛耳朵小鼻子，认识自己的身体部位！',
  },
  {
    id: 'wg5',
    name: 'Module 5',
    title: "They're cows.",
    emoji: '🐮',
    color: 'teal',
    lessons: ["They're cows.", "It's thin.", 'Farm animals'],
    intro: '农场里的牛和猪，胖的瘦的都可爱！',
  },
  {
    id: 'wg6',
    name: 'Module 6',
    title: 'These snakes are short.',
    emoji: '🐍',
    color: 'sky',
    lessons: ['These snakes are short.', "They're little and cute.", 'Long and short'],
    intro: '长颈鹿高、小蛇短，动物世界真奇妙！',
  },
  {
    id: 'wg7',
    name: 'Module 7',
    title: 'There is a cat in the tree.',
    emoji: '🐒',
    color: 'violet',
    lessons: ['There is a cat in the tree.', 'There are three brown monkeys.', 'There is / There are'],
    intro: '树上有一只猫，用 There is 说一说！',
  },
  {
    id: 'wg8',
    name: 'Module 8',
    title: "There's a pair of shorts under that duck.",
    emoji: '👕',
    color: 'pink',
    lessons: ["There's a pair of shorts under that duck.", 'There are two footballs under my desk.', 'Clothes'],
    intro: '短裤足球在桌下，衣物单词学一学！',
  },
  {
    id: 'wg9',
    name: 'Module 9',
    title: 'I like football.',
    emoji: '⚽',
    color: 'indigo',
    lessons: ['I like football.', "What's your favourite sport?", 'Sports we love'],
    intro: '足球篮球乒乓球，说说你爱的运动！',
  },
  {
    id: 'wg10',
    name: 'Module 10',
    title: "Let's play football!",
    emoji: '🎵',
    color: 'emerald',
    lessons: ["Let's play football!", "Let's sing!", "Let's do it together"],
    intro: "一起玩、一起唱，Let's 句型真好用！",
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wg1: [
    { id: 'wg1-1', type: 'choice', q: '生病了带我们看病的"医生"是：', options: ['doctor', 'nurse', 'teacher', 'driver'], answer: 0, explain: 'doctor 医生，看病找医生。', tag: '职业' },
    { id: 'wg1-2', type: 'choice', q: '在医院里照顾病人的"护士"是：', options: ['nurse', 'doctor', 'driver', 'pupil'], answer: 0, explain: 'nurse 护士，打针换药关心你。', tag: '职业' },
    { id: 'wg1-3', type: 'choice', q: '"He\'s a doctor." 的意思是：', options: ['他是一名医生。', '她是一名护士。', '他是我的爸爸。', '他想去医院。'], answer: 0, explain: "He's a doctor. 他是一名医生。he 指“他”。", tag: '句型' },
    { id: 'wg1-4', type: 'choice', q: '"She\'s a nurse." 中 "she" 的意思是：', options: ['她', '他', '它', '我们'], answer: 0, explain: 'she 她，he 他：She\'s a nurse. 她是一名护士。', tag: '单词' },
    { id: 'wg1-5', type: 'judge', q: '"teacher" 是"医生"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'teacher 是老师，doctor 才是医生，别记混哦。', tag: '单词' },
    { id: 'wg1-6', type: 'choice', q: '开公交车送大家上班的"司机"是：', options: ['driver', 'doctor', 'nurse', 'farmer'], answer: 0, explain: 'driver 司机，drive 是"开车"。', tag: '职业' },
    { id: 'wg1-7', type: 'choice', q: '保护大家安全的"警察"是：', options: ['policeman', 'pupil', 'player', 'postman'], answer: 0, explain: 'policeman 警察，遇到困难找警察叔叔。', tag: '职业' },
    { id: 'wg1-8', type: 'judge', q: '说男孩子是医生用 "He\'s a doctor."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '男孩用 he：He\'s a doctor. 女孩用 she。', tag: '句型' },
    { id: 'wg1-9', type: 'choice', q: '天天教我们学本领的"老师"是：', options: ['teacher', 'doctor', 'driver', 'nurse'], answer: 0, explain: 'teacher 老师，Teacher\'s Day 是教师节。', tag: '职业' },
    { id: 'wg1-10', type: 'choice', q: '"pupil" 指的是：', options: ['小学生', '警察', '司机', '医生'], answer: 0, explain: 'pupil 小学生，I\'m a pupil. 我是一名小学生。', tag: '职业' },
  ],
  wg2: [
    { id: 'wg2-1', type: 'choice', q: '"Where\'s the bird?" 是在问：', options: ['小鸟在哪里？', '小鸟是什么颜色？', '小鸟有几只？', '小鸟会飞吗？'], answer: 0, explain: "Where's...? ……在哪里？用来问地方。", tag: '句型' },
    { id: 'wg2-2', type: 'choice', q: '"under" 的意思是：', options: ['在……下面', '在……上面', '在……里面', '在……旁边'], answer: 0, explain: 'under 在……下面，in 在……里，on 在……上。', tag: '单词' },
    { id: 'wg2-3', type: 'choice', q: '"in the box" 的意思是：', options: ['在盒子里', '在盒子下', '在盒子上', '在盒子外'], answer: 0, explain: 'in 在……里面，The pen is in the box. 钢笔在盒子里。', tag: '短语' },
    { id: 'wg2-4', type: 'judge', q: '"on the bed" 是"在床下"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'on 是"在……上面"，在床下是 under the bed。', tag: '短语' },
    { id: 'wg2-5', type: 'choice', q: '"The toy car is under the bed." 的意思是：', options: ['玩具汽车在床下面。', '玩具汽车在床上。', '玩具汽车在盒子里。', '玩具汽车是小鸟的。'], answer: 0, explain: 'under the bed 在床下面，找玩具要翻一翻哦。', tag: '句型' },
    { id: 'wg2-6', type: 'choice', q: '想问"猫在哪里"，应该说：', options: ["Where's the cat?", "What's the cat?", 'How many cats?', 'Is it a cat?'], answer: 0, explain: "Where's the cat? 猫在哪里？找东西就问 Where。", tag: '句型' },
    { id: 'wg2-7', type: 'choice', q: '"on" 的意思是：', options: ['在……上面', '在……下面', '在……里面', '在哪里'], answer: 0, explain: 'on 在……上面，The book is on the desk. 书在课桌上。', tag: '单词' },
    { id: 'wg2-8', type: 'judge', q: '找不到自己的铅笔时，可以问 "Where\'s my pencil?"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Where\'s my pencil? 我的铅笔在哪儿？学会了自己找东西！', tag: '句型' },
    { id: 'wg2-9', type: 'choice', q: '睡觉时躺着的"床"是：', options: ['bed', 'desk', 'chair', 'box'], answer: 0, explain: 'bed 床，go to bed 上床睡觉。', tag: '单词' },
    { id: 'wg2-10', type: 'choice', q: '"It\'s in the tree." 的意思是：', options: ['它在树上。', '它在树下。', '它在天上。', '它是小鸟。'], answer: 0, explain: 'in the tree 在树上，外来的东西落在树上用 in。', tag: '句型' },
  ],
  wg3: [
    { id: 'wg3-1', type: 'choice', q: '"How many green birds?" 是在问：', options: ['有多少只绿色的鸟？', '鸟是什么颜色？', '鸟在哪儿？', '鸟会飞吗？'], answer: 0, explain: 'How many + 复数，问数量：有多少只绿鸟？', tag: '句型' },
    { id: 'wg3-2', type: 'choice', q: '"orange cat" 指的是：', options: ['橘色的猫', '橘子', '黑猫', '小狗'], answer: 0, explain: 'orange 既指"橘子"也指"橘色"，orange cat 橘猫。', tag: '单词' },
    { id: 'wg3-3', type: 'choice', q: '数字 11 的英文是：', options: ['eleven', 'twelve', 'ten', 'nine'], answer: 0, explain: 'eleven 11，比 ten 多一。', tag: '数字' },
    { id: 'wg3-4', type: 'choice', q: '数字 12 的英文是：', options: ['twelve', 'eleven', 'twenty', 'two'], answer: 0, explain: 'twelve 12，一年有十二个月。', tag: '数字' },
    { id: 'wg3-5', type: 'judge', q: '"How many birds?" 可以回答 "Ten birds."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '问几个就答几个：Ten birds. 十只鸟。', tag: '句型' },
    { id: 'wg3-6', type: 'choice', q: '小草和树叶的颜色"绿色"是：', options: ['green', 'orange', 'brown', 'black'], answer: 0, explain: 'green 绿色，green birds 绿色的鸟。', tag: '颜色' },
    { id: 'wg3-7', type: 'judge', q: '想知道有多少个东西，用 "How many...?" 来问。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'How many 用来问数量，后面接东西的复数。', tag: '句型' },
    { id: 'wg3-8', type: 'choice', q: '"Where\'s the orange cat?" 可以这样回答：', options: ["It's in the tree.", 'It is a cat.', 'There are three.', 'It\'s cute.'], answer: 0, explain: '问在哪里，就答地方：It\'s in the tree. 它在树上。', tag: '句型' },
    { id: 'wg3-9', type: 'choice', q: '"How many" 后面的名词要用：', options: ['复数（加 s）', '单数', '大写', '过去式'], answer: 0, explain: 'How many 后接复数：How many birds? 几只鸟？', tag: '语法' },
    { id: 'wg3-10', type: 'judge', q: '"twelve" 是 11 的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'twelve 是 12，11 是 eleven，别数错了。', tag: '数字' },
  ],
  wg4: [
    { id: 'wg4-1', type: 'choice', q: '戴帽子盖住的地方，"头"是：', options: ['head', 'hand', 'hair', 'hat'], answer: 0, explain: 'head 头，This is my head. 这是我的头。', tag: '身体' },
    { id: 'wg4-2', type: 'choice', q: '用来看东西的"眼睛"是：', options: ['eye', 'ear', 'nose', 'mouth'], answer: 0, explain: 'eye 眼睛，两只眼睛是 eyes。', tag: '身体' },
    { id: 'wg4-3', type: 'choice', q: '戴眼镜挂住的地方，"耳朵"是：', options: ['ear', 'eye', 'arm', 'leg'], answer: 0, explain: 'ear 耳朵，两只耳朵是 ears。', tag: '身体' },
    { id: 'wg4-4', type: 'choice', q: '闻花香用的"鼻子"是：', options: ['nose', 'mouth', 'eye', 'hand'], answer: 0, explain: 'nose 鼻子，Touch your nose. 摸摸你的鼻子。', tag: '身体' },
    { id: 'wg4-5', type: 'judge', q: '"mouth" 是"嘴巴"的意思。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'mouth 嘴巴，Open your mouth. 张开你的嘴巴。', tag: '身体' },
    { id: 'wg4-6', type: 'choice', q: '"This is my head." 的意思是：', options: ['这是我的头。', '这是你的手。', '这是我的眼睛。', '他是一名医生。'], answer: 0, explain: 'This is my + 身体部位，介绍自己的身体。', tag: '句型' },
    { id: 'wg4-7', type: 'choice', q: '"These are your eyes." 里 eye 变成了 eyes，是因为：', options: ['眼睛有两只，要用复数', '眼睛很大', '眼睛会眨', '这样更漂亮'], answer: 0, explain: '两个以上要用复数，eye 加 s 变 eyes。', tag: '语法' },
    { id: 'wg4-8', type: 'judge', q: '介绍身体部位可以说 "This is my nose."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '一个用 This is my...，多个用 These are my...。', tag: '句型' },
    { id: 'wg4-9', type: 'choice', q: '写字画画用的"手"是：', options: ['hand', 'head', 'foot', 'leg'], answer: 0, explain: 'hand 手，Clap your hands. 拍拍手。', tag: '身体' },
    { id: 'wg4-10', type: 'judge', q: '吃饭前、出门回家后要记得洗手。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Wash your hands! 勤洗手讲卫生，身体才能棒棒的！', tag: '习惯养成' },
  ],
  wg5: [
    { id: 'wg5-1', type: 'choice', q: '哞哞叫、产牛奶的"奶牛"是：', options: ['cow', 'pig', 'duck', 'hen'], answer: 0, explain: 'cow 奶牛，Cows give us milk. 奶牛给我们牛奶。', tag: '动物' },
    { id: 'wg5-2', type: 'choice', q: '圆滚滚爱睡觉的"猪"是：', options: ['pig', 'cow', 'dog', 'cat'], answer: 0, explain: 'pig 猪，The pig is fat. 猪胖胖的。', tag: '动物' },
    { id: 'wg5-3', type: 'choice', q: '"They\'re cows." 的意思是：', options: ['它们是奶牛。', '它是我的猪。', '它们很瘦。', '我喜欢牛奶。'], answer: 0, explain: "They're cows. 它们是奶牛。they're = they are。", tag: '句型' },
    { id: 'wg5-4', type: 'choice', q: '"thin" 的意思是：', options: ['瘦的', '胖的', '高的', '大的'], answer: 0, explain: 'thin 瘦的，fat 胖的，一瘦一胖要分清。', tag: '形容词' },
    { id: 'wg5-5', type: 'judge', q: '"fat" 是"瘦"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'fat 是胖，thin 才是瘦，It\'s fat. 它很胖。', tag: '形容词' },
    { id: 'wg5-6', type: 'choice', q: '嘎嘎叫、会游泳的"鸭子"是：', options: ['duck', 'hen', 'bird', 'frog'], answer: 0, explain: 'duck 鸭子，The duck can swim. 鸭子会游泳。', tag: '动物' },
    { id: 'wg5-7', type: 'choice', q: '"tall" 的意思是：', options: ['高的', '矮的', '小的', '胖的'], answer: 0, explain: 'tall 高的，short 矮的：The tree is tall. 树很高。', tag: '形容词' },
    { id: 'wg5-8', type: 'judge', q: '农场的动物是我们的朋友，要爱护它们。', options: ['√ 对', '✗ 错'], answer: 0, explain: '小动物是人类的朋友，不打不吓，好好爱护。', tag: '习惯养成' },
    { id: 'wg5-9', type: 'choice', q: '"They\'re" 是哪两个词的缩写？', options: ['They are', 'They is', 'They be', 'The are'], answer: 0, explain: "They're = They are，它们是……", tag: '语法' },
    { id: 'wg5-10', type: 'choice', q: '母鸡会下蛋，"鸡蛋"是：', options: ['egg', 'milk', 'rice', 'meat'], answer: 0, explain: 'egg 鸡蛋，hen 下 egg，营养又好吃。', tag: '单词' },
  ],
  wg6: [
    { id: 'wg6-1', type: 'choice', q: '细细长长没有脚、会扭来扭去的"蛇"是：', options: ['snake', 'fish', 'bird', 'duck'], answer: 0, explain: 'snake 蛇，These snakes are short. 这些蛇很短。', tag: '动物' },
    { id: 'wg6-2', type: 'choice', q: '"short" 的意思是：', options: ['短的；矮的', '长的', '大的', '圆的'], answer: 0, explain: 'short 短的、矮的，long 长的，反义词要记牢。', tag: '形容词' },
    { id: 'wg6-3', type: 'judge', q: '"long" 是"短"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'long 是长，short 才是短：The snake is long. 蛇很长。', tag: '形容词' },
    { id: 'wg6-4', type: 'choice', q: '"cute" 的意思是：', options: ['可爱的', '可怕的', '很高的', '很脏的'], answer: 0, explain: 'cute 可爱的，They\'re cute. 它们很可爱。', tag: '形容词' },
    { id: 'wg6-5', type: 'choice', q: '脖子长长的"长颈鹿"是：', options: ['giraffe', 'elephant', 'monkey', 'tiger'], answer: 0, explain: 'giraffe 长颈鹿，The giraffe is tall. 长颈鹿很高。', tag: '动物' },
    { id: 'wg6-6', type: 'choice', q: '鼻子长长的"大象"是：', options: ['elephant', 'giraffe', 'panda', 'lion'], answer: 0, explain: 'elephant 大象，鼻子长长会喷水。', tag: '动物' },
    { id: 'wg6-7', type: 'choice', q: '"little" 的意思是：', options: ['小的', '大的', '长的', '胖的'], answer: 0, explain: 'little 小的，a little cat 一只小猫。', tag: '形容词' },
    { id: 'wg6-8', type: 'judge', q: '"These snakes are short." 意思是"这些蛇很短。"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'these 这些（复数），are + short：这些蛇很短。', tag: '句型' },
    { id: 'wg6-9', type: 'choice', q: '"They\'re little and cute." 的意思是：', options: ['它们又小又可爱。', '它们又高又瘦。', '它们是蛇。', '它们在树上。'], answer: 0, explain: 'little 小 + cute 可爱，and 把两个形容词连起来。', tag: '句型' },
    { id: 'wg6-10', type: 'judge', q: '小动物很可爱，但野外的小蛇可能危险，不能随便摸。', options: ['√ 对', '✗ 错'], answer: 0, explain: '远观不乱碰，安全第一，这才是真正喜欢小动物！', tag: '习惯养成' },
  ],
  wg7: [
    { id: 'wg7-1', type: 'choice', q: '"There is a cat in the tree." 的意思是：', options: ['树上有一只猫。', '猫在树下。', '我喜欢猫。', '有三只猴子。'], answer: 0, explain: 'There is + 一个东西 + 地方：哪里有什么。', tag: '句型' },
    { id: 'wg7-2', type: 'choice', q: '爱吃香蕉爬树快的"猴子"是：', options: ['monkey', 'cat', 'bird', 'elephant'], answer: 0, explain: 'monkey 猴子，There are three brown monkeys. 有三只棕猴。', tag: '动物' },
    { id: 'wg7-3', type: 'choice', q: '巧克力和猴子的颜色"棕色"是：', options: ['brown', 'green', 'blue', 'white'], answer: 0, explain: 'brown 棕色，a brown monkey 一只棕色的猴子。', tag: '颜色' },
    { id: 'wg7-4', type: 'judge', q: '"There is" 后面要接两个以上的东西。', options: ['√ 对', '✗ 错'], answer: 1, explain: '反啦！There is 接一个（单数），There are 才接多个（复数）。', tag: '语法' },
    { id: 'wg7-5', type: 'choice', q: '只有一个东西时，应该说：', options: ['There is...', 'There are...', 'There be...', 'Where is...'], answer: 0, explain: 'There is a cat. 一只猫用 is；三只猴子用 There are。', tag: '语法' },
    { id: 'wg7-6', type: 'choice', q: '"There are three brown monkeys." 中用 are 是因为：', options: ['猴子有三只，是复数', '猴子很大', '猴子在树上', '句子很长'], answer: 0, explain: '三个及以上是复数，复数用 There are。', tag: '语法' },
    { id: 'wg7-7', type: 'choice', q: '想说"有五只小鸟"，应该说：', options: ['There are five birds.', 'There is five birds.', 'It has five birds.', 'Five is birds.'], answer: 0, explain: 'five 是复数，用 There are five birds.。', tag: '句型' },
    { id: 'wg7-8', type: 'choice', q: '猴子荡来荡去的"树"是：', options: ['tree', 'flower', 'grass', 'house'], answer: 0, explain: 'tree 树，in the tree 在树上。', tag: '单词' },
    { id: 'wg7-9', type: 'judge', q: '"There is a bird in the tree." 意思是"树上有一只鸟。"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'There is + a bird（一只鸟）+ in the tree（在树上）。', tag: '句型' },
    { id: 'wg7-10', type: 'judge', q: '小鸟的窝要好好保护，不掏鸟窝、不捉小鸟。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'There are birds in the tree. 树上有鸟，我们要爱护它们的家！', tag: '习惯养成' },
  ],
  wg8: [
    { id: 'wg8-1', type: 'choice', q: '夏天穿的"短裤"是：', options: ['shorts', 'shirt', 'shoes', 'socks'], answer: 0, explain: 'shorts 短裤（总是复数哦），夏天凉快穿短裤。', tag: '衣物' },
    { id: 'wg8-2', type: 'choice', q: '"a pair of shorts" 的意思是：', options: ['一条短裤', '一双袜子', '一件衬衫', '两只鸭子'], answer: 0, explain: 'a pair of 一条/一双/一副，裤子袜子都这样数。', tag: '短语' },
    { id: 'wg8-3', type: 'choice', q: '"There\'s a pair of shorts under that duck." 的意思是：', options: ['那只鸭子下面有一条短裤。', '鸭子穿着短裤。', '桌子下面有两个足球。', '短裤在小河里。'], answer: 0, explain: 'There\'s = There is，under that duck 在那只鸭子下面。', tag: '句型' },
    { id: 'wg8-4', type: 'judge', q: '"shirt" 是"鞋子"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'shirt 是衬衫，鞋子是 shoes，两个词长得像，意思差很远。', tag: '单词' },
    { id: 'wg8-5', type: 'choice', q: '"under my desk" 的意思是：', options: ['在我的课桌下面', '在我的课桌上面', '在我的课桌里', '是我的课桌'], answer: 0, explain: 'under 在……下面，my desk 我的课桌。', tag: '短语' },
    { id: 'wg8-6', type: 'choice', q: '用脚踢的"足球"是：', options: ['football', 'basketball', 'ping-pong', 'game'], answer: 0, explain: 'football 足球，There are two footballs. 有两个足球。', tag: '单词' },
    { id: 'wg8-7', type: 'judge', q: '衣服脱下来要叠整齐放好，不能到处乱扔。', options: ['√ 对', '✗ 错'], answer: 0, explain: '可不能像课文里那样把短裤丢在鸭子下面哦！自己的物品自己整理。', tag: '习惯养成' },
    { id: 'wg8-8', type: 'choice', q: '"There are two footballs." 里 football 加了 s，是因为：', options: ['有两个足球，复数加 s', '足球很大', '足球会滚', '习惯写法'], answer: 0, explain: '两个以上加 s：two footballs 两个足球。', tag: '语法' },
    { id: 'wg8-9', type: 'choice', q: '穿在脚上的"袜子"是：', options: ['sock', 'shirt', 'dress', 'shoe'], answer: 0, explain: 'sock 袜子，a pair of socks 一双袜子。', tag: '衣物' },
    { id: 'wg8-10', type: 'choice', q: '"dress" 指的是：', options: ['连衣裙', '裤子', '帽子', '毛衣'], answer: 0, explain: 'dress 连衣裙，妈妈的红裙子就是 a red dress。', tag: '衣物' },
  ],
  wg9: [
    { id: 'wg9-1', type: 'choice', q: '"I like football." 的意思是：', options: ['我喜欢足球。', '我会踢足球。', '足球是我的。', '一起去踢球。'], answer: 0, explain: 'I like + 东西，表达喜欢：I like football.。', tag: '句型' },
    { id: 'wg9-2', type: 'choice', q: '用手投的"篮球"是：', options: ['basketball', 'football', 'ping-pong', 'ball'], answer: 0, explain: 'basketball 篮球，basket 是篮筐，投进篮筐真开心！', tag: '单词' },
    { id: 'wg9-3', type: 'choice', q: '"What\'s your favourite sport?" 是在问：', options: ['你最喜欢的运动是什么？', '你会做运动吗？', '运动好玩吗？', '你几岁了？'], answer: 0, explain: 'favourite 最喜欢的，这句话问最喜欢的运动。', tag: '句型' },
    { id: 'wg9-4', type: 'judge', q: '"ping-pong" 是"足球"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'ping-pong 是乒乓球，football 才是足球。', tag: '单词' },
    { id: 'wg9-5', type: 'choice', q: '"favourite" 的意思是：', options: ['最喜欢的', '讨厌的', '新的', '大的'], answer: 0, explain: 'favourite 最喜欢的，my favourite colour 我最喜欢的颜色。', tag: '单词' },
    { id: 'wg9-6', type: 'choice', q: '想说"我喜欢游泳"，应该说：', options: ['I like swimming.', 'I can swimming.', 'I am swim.', 'I like swim.'], answer: 0, explain: 'like 后面的动词加 ing：like swimming 喜欢游泳。', tag: '句型' },
    { id: 'wg9-7', type: 'judge', q: '运动完出了汗，要及时擦干、多喝水。', options: ['√ 对', '✗ 错'], answer: 0, explain: '运动虽好，护理也重要：擦汗、喝水、休息一下！', tag: '习惯养成' },
    { id: 'wg9-8', type: 'choice', q: '"sport" 指的是：', options: ['运动', '游戏', '学习', '睡觉'], answer: 0, explain: 'sport 运动，football、basketball 都是 sport。', tag: '单词' },
    { id: 'wg9-9', type: 'choice', q: '"What\'s your favourite sport?" 可以这样回答：', options: ['I like basketball.', 'It is a ball.', 'I am fine.', 'Yes, I do.'], answer: 0, explain: '回答喜欢的运动：I like basketball. 我喜欢篮球。', tag: '句型' },
    { id: 'wg9-10', type: 'judge', q: '每天锻炼身体，才会长得高、跑得快。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Like sport, be strong! 爱运动的孩子身体棒！', tag: '习惯养成' },
  ],
  wg10: [
    { id: 'wg10-1', type: 'choice', q: '"Let\'s play football!" 的意思是：', options: ['让我们一起踢足球吧！', '我在踢足球。', '他喜欢足球。', '足球在哪里？'], answer: 0, explain: "Let's + 动词，邀请大家一起做某事。", tag: '句型' },
    { id: 'wg10-2', type: 'choice', q: '"Let\'s" 是哪两个词的缩写？', options: ['Let us', 'Let is', 'Let be', 'Lets a'], answer: 0, explain: "Let's = Let us，让我们……", tag: '语法' },
    { id: 'wg10-3', type: 'choice', q: '好听的歌曲要"唱歌"，唱是：', options: ['sing', 'dance', 'play', 'read'], answer: 0, explain: 'sing 唱歌，Let\'s sing! 让我们一起唱！', tag: '单词' },
    { id: 'wg10-4', type: 'choice', q: '"Let\'s sing!" 是在邀请大家：', options: ['一起唱歌', '一起画画', '一起睡觉', '一起吃饭'], answer: 0, explain: "Let's sing! 一起唱歌吧！sing a song 唱首歌。", tag: '句型' },
    { id: 'wg10-5', type: 'judge', q: '"dance" 是"跳舞"的意思。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'dance 跳舞，Let\'s sing and dance! 让我们唱歌跳舞！', tag: '单词' },
    { id: 'wg10-6', type: 'choice', q: '想邀请朋友一起玩，可以说：', options: ["Let's play!", 'You play now.', 'I play alone.', 'Play is good.'], answer: 0, explain: "Let's play! 一起玩吧！有朋友一起玩最开心。", tag: '句型' },
    { id: 'wg10-7', type: 'judge', q: '"Let\'s go to school!" 是"我们一起去上学吧！"的意思。', options: ['√ 对', '✗ 错'], answer: 0, explain: "go to school 去上学，Let's go! 走吧！", tag: '句型' },
    { id: 'wg10-8', type: 'choice', q: '"play" 指的是：', options: ['玩；踢（球）', '学习', '工作', '吃饭'], answer: 0, explain: 'play 玩，play football 踢足球，play games 做游戏。', tag: '单词' },
    { id: 'wg10-9', type: 'judge', q: '邀请别人一起玩时要有礼貌，别人不想玩也不能勉强。', options: ['√ 对', '✗ 错'], answer: 0, explain: '说 Let\'s... 要友好，被拒绝也不生气，这才是好朋友！', tag: '习惯养成' },
    { id: 'wg10-10', type: 'choice', q: '大家在一起最开心，"让我们一起唱歌吧"应该说：', options: ["Let's sing together!", 'Let\'s you sing.', 'Sing is we!', 'We sing let.'], answer: 0, explain: "together 一起，Let's sing together! 一起唱起来！", tag: '句型' },
  ],
}
