// 外研版新标准英语（一年级起点）二年级下册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）二年级下册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq2x 核对）：
//   M1 What's the weather like?/I like swimming. · M2 She's listening to the radio./I'm drawing a picture.
//   M3 Sam isn't tidying his room./Are you doing your homework? · M4 What are you doing?/What's he doing?
//   M5 Lingling is skipping./What are the kids playing? · M6 I usually play basketball./My grandma usually cooks.
//   M7 It's Children's Day today./We're having a picnic. · M8 The train is going up a hill./The horse is turning around.
//   M9 Turn left./Where do you live? · M10 It's next to the park./He's helping a child.
// （源页 OCR 笔误已修正：M5U1 "Linglingi" 应为 "Lingling"）
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wh

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
    id: 'wh1',
    name: 'Module 1',
    title: "What's the weather like?",
    emoji: '☀️',
    color: 'amber',
    lessons: ["What's the weather like?", 'I like swimming.', 'Weather report'],
    intro: '晴天雨天都开心，学会用英语聊天气！',
  },
  {
    id: 'wh2',
    name: 'Module 2',
    title: "She's listening to the radio.",
    emoji: '📻',
    color: 'orange',
    lessons: ["She's listening to the radio.", "I'm drawing a picture.", '-ing actions'],
    intro: '听广播、画图画，正在做的事这么说！',
  },
  {
    id: 'wh3',
    name: 'Module 3',
    title: "Sam isn't tidying his room.",
    emoji: '🧹',
    color: 'rose',
    lessons: ["Sam isn't tidying his room.", 'Are you doing your homework?', 'Yes, I am. / No, I\'m not.'],
    intro: '萨姆没在收拾房间？进行时的否定和疑问！',
  },
  {
    id: 'wh4',
    name: 'Module 4',
    title: 'What are you doing?',
    emoji: '🎨',
    color: 'lime',
    lessons: ['What are you doing?', "What's he doing?", 'Asking and answering'],
    intro: '你在做什么？他在做什么？一问一答练一练！',
  },
  {
    id: 'wh5',
    name: 'Module 5',
    title: 'Lingling is skipping.',
    emoji: '🤸',
    color: 'teal',
    lessons: ['Lingling is skipping.', 'What are the kids playing?', 'Playground games'],
    intro: '玲玲跳绳真厉害，操场游戏真热闹！',
  },
  {
    id: 'wh6',
    name: 'Module 6',
    title: 'I usually play basketball.',
    emoji: '🏀',
    color: 'sky',
    lessons: ['I usually play basketball.', 'My grandma usually cooks.', 'usually habits'],
    intro: '通常做什么是习惯，usually 来说一说！',
  },
  {
    id: 'wh7',
    name: 'Module 7',
    title: "It's Children's Day today.",
    emoji: '🧺',
    color: 'violet',
    lessons: ["It's Children's Day today.", "We're having a picnic.", 'Happy holidays'],
    intro: '六一儿童节到啦，一起去野餐吧！',
  },
  {
    id: 'wh8',
    name: 'Module 8',
    title: 'The train is going up a hill.',
    emoji: '🚂',
    color: 'pink',
    lessons: ['The train is going up a hill.', 'The horse is turning around.', 'Up and down'],
    intro: '小火车上山又下山，动作方位看得清！',
  },
  {
    id: 'wh9',
    name: 'Module 9',
    title: 'Turn left.',
    emoji: '🧭',
    color: 'indigo',
    lessons: ['Turn left.', 'Where do you live?', 'Directions'],
    intro: '左转右转直着走，指路问路不用愁！',
  },
  {
    id: 'wh10',
    name: 'Module 10',
    title: "It's next to the park.",
    emoji: '🏫',
    color: 'emerald',
    lessons: ["It's next to the park.", "He's helping a child.", 'Places near us'],
    intro: '学校就在公园旁，乐于助人好榜样！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wh1: [
    { id: 'wh1-1', type: 'choice', q: '"What\'s the weather like?" 是在问：', options: ['天气怎么样？', '你叫什么名字？', '你喜欢什么？', '现在几点了？'], answer: 0, explain: "What's the weather like? 天气怎么样？聊天气就这么问。", tag: '句型' },
    { id: 'wh1-2', type: 'choice', q: '太阳公公出来啦，"晴朗的"是：', options: ['sunny', 'rainy', 'windy', 'snowy'], answer: 0, explain: 'sunny 晴朗的，sun 太阳 + ny，It\'s sunny today.。', tag: '单词' },
    { id: 'wh1-3', type: 'choice', q: '天上掉水珠，"下雨"是：', options: ['rain', 'snow', 'wind', 'sun'], answer: 0, explain: 'rain 下雨（名词：雨），rainy 下雨的。', tag: '单词' },
    { id: 'wh1-4', type: 'judge', q: '"windy" 是"晴朗"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'windy 是刮风的，sunny 才是晴朗的。', tag: '单词' },
    { id: 'wh1-5', type: 'choice', q: '"It\'s hot today." 的意思是：', options: ['今天很热。', '今天很冷。', '今天下雨。', '今天是晴天。'], answer: 0, explain: 'hot 热，cold 冷：It\'s hot today. 今天很热。', tag: '句型' },
    { id: 'wh1-6', type: 'choice', q: '冬天要穿厚衣服，因为天气"冷的"是：', options: ['cold', 'hot', 'warm', 'cool'], answer: 0, explain: 'cold 冷的，warm 温暖的，It\'s cold in winter.。', tag: '单词' },
    { id: 'wh1-7', type: 'choice', q: '"I like swimming." 的意思是：', options: ['我喜欢游泳。', '我正在游泳。', '我会游泳。', '游泳很好玩。'], answer: 0, explain: 'like + 动词ing 表示喜欢做某事。', tag: '句型' },
    { id: 'wh1-8', type: 'judge', q: '天气特别好时，可以说 "It\'s a nice day."。', options: ['√ 对', '✗ 错'], answer: 0, explain: "It's a nice day. 今天天气真好！夸天气就这么说。", tag: '句型' },
    { id: 'wh1-9', type: 'choice', q: '冬天飘的"雪"是：', options: ['snow', 'rain', 'cloud', 'wind'], answer: 0, explain: 'snow 雪，snowy 下雪的，Let\'s play in the snow!。', tag: '单词' },
    { id: 'wh1-10', type: 'judge', q: '下雨天出门记得带伞，别淋湿感冒了。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'It\'s rainy. Take your umbrella! 下雨带伞，好习惯！', tag: '习惯养成' },
  ],
  wh2: [
    { id: 'wh2-1', type: 'choice', q: '"She\'s listening to the radio." 的意思是：', options: ['她正在听收音机。', '她喜欢收音机。', '她在看电视。', '她有一个收音机。'], answer: 0, explain: 'be + 动词ing 表示"正在做"，listening 正在听。', tag: '句型' },
    { id: 'wh2-2', type: 'choice', q: '"listening to" 表示：', options: ['正在听', '想要听', '听过了', '不喜欢听'], answer: 0, explain: 'listen to 听……，加 be 动词表示正在听。', tag: '短语' },
    { id: 'wh2-3', type: 'choice', q: '"I\'m drawing a picture." 的意思是：', options: ['我正在画画。', '我喜欢画画。', '我画完了一幅画。', '你会画画吗？'], answer: 0, explain: "I'm drawing 我正在画，draw a picture 画画。", tag: '句型' },
    { id: 'wh2-4', type: 'judge', q: '"drawing" 是"唱歌"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'drawing 是画画，singing 才是唱歌。', tag: '单词' },
    { id: 'wh2-5', type: 'choice', q: '现在进行时（be + 动词ing）表示：', options: ['正在发生的动作', '昨天的事', '明天的事', '喜欢的事'], answer: 0, explain: '进行时 = 正在做：am/is/are + 动词ing。', tag: '语法' },
    { id: 'wh2-6', type: 'choice', q: '"watching TV" 的意思是：', options: ['正在看电视', '想看电视', '修电视', '关电视'], answer: 0, explain: 'watch TV 看电视，watching TV 正在看电视。', tag: '短语' },
    { id: 'wh2-7', type: 'judge', q: '"She\'s reading a book." 意思是"她正在看书。"。', options: ['√ 对', '✗ 错'], answer: 0, explain: "She's reading 她正在读，reading a book 看书。", tag: '句型' },
    { id: 'wh2-8', type: 'choice', q: '变成现在进行时，动词一般要：', options: ['加 ing', '加 s', '加 ed', '不变'], answer: 0, explain: 'draw → drawing，play → playing，加 ing 表正在进行。', tag: '语法' },
    { id: 'wh2-9', type: 'choice', q: '妈妈正在厨房做饭，应该说：', options: ['Mum is cooking.', 'Mum cooks.', 'Mum like cooking.', 'Mum is cook.'], answer: 0, explain: 'is + cooking 正在做饭，cooking 是 cook 的 ing 形式。', tag: '句型' },
    { id: 'wh2-10', type: 'judge', q: '画完画要把画笔和颜料收好，保持桌面整洁。', options: ['√ 对', '✗ 错'], answer: 0, explain: '工具用完放回原处，整洁习惯从小养成！', tag: '习惯养成' },
  ],
  wh3: [
    { id: 'wh3-1', type: 'choice', q: '"Sam isn\'t tidying his room." 的意思是：', options: ['萨姆没有在整理房间。', '萨姆正在整理房间。', '萨姆的房间很干净。', '萨姆喜欢整理房间。'], answer: 0, explain: "isn't = is not，否定式：没有在整理。", tag: '句型' },
    { id: 'wh3-2', type: 'choice', q: '"tidy" 指的是：', options: ['整理；收拾', '打扫卫生的机器', '睡觉', '看电视'], answer: 0, explain: 'tidy 收拾、整理，tidy your room 整理你的房间。', tag: '单词' },
    { id: 'wh3-3', type: 'choice', q: '"isn\'t" 是哪两个词的缩写？', options: ['is not', 'is no', 'it not', 'isn a'], answer: 0, explain: "isn't = is not，不是；没有在进行。", tag: '语法' },
    { id: 'wh3-4', type: 'judge', q: '"Sam isn\'t tidying his room." 意思是"萨姆正在整理房间。"。', options: ['√ 对', '✗ 错'], answer: 1, explain: "有 isn't 就是否定：萨姆没有在整理房间。", tag: '句型' },
    { id: 'wh3-5', type: 'choice', q: '"Are you doing your homework?" 是在问：', options: ['你正在做作业吗？', '你喜欢作业吗？', '作业写完了吗？', '作业多不多？'], answer: 0, explain: 'Are you + 动词ing...? 问对方正在做什么事。', tag: '句型' },
    { id: 'wh3-6', type: 'choice', q: '"Yes, I am." 表示：', options: ['是的，我正在做。', '不，我没有。', '我不想做。', '我马上做。'], answer: 0, explain: 'Are you...? 的肯定回答：Yes, I am.；否定回答 No, I\'m not.。', tag: '句型' },
    { id: 'wh3-7', type: 'judge', q: '问"你正在做……吗"，用 "Are you + 动词ing...?"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Are you reading? Are you playing? 都是这个结构。', tag: '语法' },
    { id: 'wh3-8', type: 'choice', q: '"homework" 指的是：', options: ['作业', '家务', '工作', '游戏'], answer: 0, explain: 'homework 作业，do my homework 做我的作业。', tag: '单词' },
    { id: 'wh3-9', type: 'judge', q: '做作业时要专心，不一边玩玩具一边写。', options: ['√ 对', '✗ 错'], answer: 0, explain: '专心做完作业再玩，效率高又学得牢！', tag: '习惯养成' },
    { id: 'wh3-10', type: 'choice', q: '"sleeping" 的意思是：', options: ['正在睡觉', '想睡觉', '起床了', '打呼噜'], answer: 0, explain: 'sleep 睡觉，sleeping 正在睡觉，The baby is sleeping.。', tag: '单词' },
  ],
  wh4: [
    { id: 'wh4-1', type: 'choice', q: '"What are you doing?" 是在问：', options: ['你正在做什么？', '你喜欢什么？', '你是谁？', '你要去哪里？'], answer: 0, explain: 'What are you doing? 你在干什么？进行时问句。', tag: '句型' },
    { id: 'wh4-2', type: 'choice', q: '回答"我正在读书"，应该说：', options: ["I'm reading a book.", 'I read a book.', 'I like books.', 'I am a book.'], answer: 0, explain: "问做什么，答 I'm + 动词ing：I'm reading a book.。", tag: '句型' },
    { id: 'wh4-3', type: 'choice', q: '"What\'s he doing?" 的意思是：', options: ['他正在做什么？', '他是做什么的？', '他在哪里？', '他喜欢什么？'], answer: 0, explain: "What's he doing? = What is he doing? 问男孩正在做的事。", tag: '句型' },
    { id: 'wh4-4', type: 'judge', q: '问"他正在做什么"应该说 "What are he doing?"。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'he 是第三人称单数，要用 is：What is he doing?。', tag: '语法' },
    { id: 'wh4-5', type: 'choice', q: '"They\'re playing football." 的意思是：', options: ['他们正在踢足球。', '他们喜欢足球。', '他们要去看球赛。', '他们踢得很好。'], answer: 0, explain: "They're playing 他们正在玩/踢，playing football 踢足球。", tag: '句型' },
    { id: 'wh4-6', type: 'choice', q: '"dance" 变成正在跳舞是：', options: ['dancing', 'danceing', 'dances', 'danced'], answer: 0, explain: 'dance 以不发音的 e 结尾，去 e 加 ing：dancing。', tag: '语法' },
    { id: 'wh4-7', type: 'judge', q: '回答"你正在做什么"，用 "I\'m + 动词ing" 就可以。', options: ['√ 对', '✗ 错'], answer: 0, explain: "I'm singing. I'm jumping. 都行，把正在做的事说出来！", tag: '句型' },
    { id: 'wh4-8', type: 'choice', q: '"What\'s she doing? She\'s singing." 里她在：', options: ['唱歌', '跳舞', '画画', '睡觉'], answer: 0, explain: 'singing 正在唱歌，sing 唱歌的 ing 形式。', tag: '单词' },
    { id: 'wh4-9', type: 'judge', q: '上课时间要专心听讲，不做与课堂无关的事。', options: ['√ 对', '✗ 错'], answer: 0, explain: '课堂 40 分钟认真听，学习效果才最好！', tag: '习惯养成' },
    { id: 'wh4-10', type: 'choice', q: '"running" 是哪个动词的 ing 形式？', options: ['run', 'runing', 'runs', 'ran'], answer: 0, explain: 'run 双写 n 再加 ing：running。类似：swimming、sitting。', tag: '语法' },
  ],
  wh5: [
    { id: 'wh5-1', type: 'choice', q: '"Lingling is skipping." 的意思是：', options: ['玲玲正在跳绳。', '玲玲会跳绳。', '玲玲喜欢跑步。', '玲玲在荡秋千。'], answer: 0, explain: 'is skipping 正在跳绳，skip 跳绳。', tag: '句型' },
    { id: 'wh5-2', type: 'choice', q: '"skip" 指的是：', options: ['跳绳', '跑步', '游泳', '爬山'], answer: 0, explain: 'skip 跳绳，skipping rope 就是跳绳用的绳子。', tag: '单词' },
    { id: 'wh5-3', type: 'choice', q: '"What are the kids playing?" 是在问：', options: ['孩子们正在玩什么？', '孩子们在哪里？', '孩子们喜欢玩吗？', '有几个孩子？'], answer: 0, explain: 'the kids 孩子们（复数），问他们正在玩什么游戏。', tag: '句型' },
    { id: 'wh5-4', type: 'judge', q: '"skipping" 是"跑步"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'skipping 是跳绳，running 才是跑步。', tag: '单词' },
    { id: 'wh5-5', type: 'choice', q: '"kids" 的意思是：', options: ['孩子们', '风筝', '老师', '山羊'], answer: 0, explain: 'kid 小孩，kids 孩子们，和 children 意思一样。', tag: '单词' },
    { id: 'wh5-6', type: 'choice', q: '"playing hide-and-seek" 的意思是：', options: ['正在玩捉迷藏', '正在躲雨', '在找东西', '在玩滑梯'], answer: 0, explain: 'hide-and-seek 捉迷藏，hide 藏，seek 找。', tag: '短语' },
    { id: 'wh5-7', type: 'judge', q: '"They\'re playing clapping games." 意思是"他们正在玩拍手游戏。"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'clapping games 拍手游戏，你拍一我拍一！', tag: '句型' },
    { id: 'wh5-8', type: 'choice', q: '捉迷藏里"seek"的意思是：', options: ['寻找', '躲藏', '拍到', '赢了'], answer: 0, explain: 'hide 藏起来，seek 找出来，一藏一找才好玩。', tag: '单词' },
    { id: 'wh5-9', type: 'judge', q: '课间玩游戏要守规则，不推搡不打闹。', options: ['√ 对', '✗ 错'], answer: 0, explain: '遵守游戏规则、注意安全，大家才玩得开心！', tag: '习惯养成' },
    { id: 'wh5-10', type: 'choice', q: '"play football" 的 ing 形式是：', options: ['playing football', 'play footballing', 'played football', 'plays football'], answer: 0, explain: 'play 直接加 ing：playing football 正在踢足球。', tag: '语法' },
  ],
  wh6: [
    { id: 'wh6-1', type: 'choice', q: '"usually" 的意思是：', options: ['通常', '现在', '从来', '明天'], answer: 0, explain: 'usually 通常，表示经常性的习惯。', tag: '单词' },
    { id: 'wh6-2', type: 'choice', q: '"I usually play basketball." 的意思是：', options: ['我通常打篮球。', '我正在打篮球。', '我喜欢篮球。', '我打篮球赢了。'], answer: 0, explain: 'usually + 动词，说平时常做的事：usually play。', tag: '句型' },
    { id: 'wh6-3', type: 'choice', q: '"My grandma usually cooks." 的意思是：', options: ['我奶奶通常做饭。', '奶奶正在做饭。', '奶奶会做蛋糕。', '奶奶喜欢吃饭。'], answer: 0, explain: 'cooks 做饭（三单加 s），奶奶通常下厨。', tag: '句型' },
    { id: 'wh6-4', type: 'judge', q: '"usually" 表示"此刻正在发生"的动作。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'usually 说的是平时的习惯，不是正在做的事哦。', tag: '语法' },
    { id: 'wh6-5', type: 'choice', q: '"cook" 指的是：', options: ['做饭；厨师', '书本', '医生', '游戏'], answer: 0, explain: 'cook 做饭，也可以当名词指厨师。', tag: '单词' },
    { id: 'wh6-6', type: 'choice', q: '说"我通常七点起床"，应该说：', options: ['I usually get up at seven.', 'I am getting up now.', 'I get up yesterday.', 'I like getting up.'], answer: 0, explain: '习惯性的动作用 usually + 动词原形。', tag: '句型' },
    { id: 'wh6-7', type: 'judge', q: 'usually 后面的动词一般用原形（他她它除外）。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I usually read. 他则用三单：He usually reads.。', tag: '语法' },
    { id: 'wh6-8', type: 'choice', q: '"every day" 的意思是：', options: ['每天', '昨天', '有时', '从不'], answer: 0, explain: 'every day 每天，I read every day. 我每天都阅读。', tag: '短语' },
    { id: 'wh6-9', type: 'choice', q: '想表达"我帮奶奶做家务"，应该说：', options: ['I help my grandma.', 'I look my grandma.', 'I play my grandma.', 'I am grandma.'], answer: 0, explain: 'help 帮助，help sb. 帮助某人。', tag: '句型' },
    { id: 'wh6-10', type: 'judge', q: '在家里可以帮爸爸妈妈做力所能及的家务。', options: ['√ 对', '✗ 错'], answer: 0, explain: '扫扫地、摆摆碗筷，爱劳动的孩子人人夸！', tag: '习惯养成' },
  ],
  wh7: [
    { id: 'wh7-1', type: 'choice', q: '"It\'s Children\'s Day today." 的意思是：', options: ['今天是儿童节。', '今天是星期天。', '今天天气好。', '今天是生日。'], answer: 0, explain: "Children's Day 儿童节，六月一日。", tag: '句型' },
    { id: 'wh7-2', type: 'choice', q: '"Children\'s Day" 是什么节日？', options: ['儿童节', '教师节', '春节', '中秋节'], answer: 0, explain: "Children's Day 儿童节，是小朋友自己的节日！", tag: '文化' },
    { id: 'wh7-3', type: 'choice', q: '"We\'re having a picnic." 的意思是：', options: ['我们正在野餐。', '我们想去公园。', '我们喜欢野餐。', '我们在做游戏。'], answer: 0, explain: "We're having 我们正在进行，have a picnic 野餐。", tag: '句型' },
    { id: 'wh7-4', type: 'judge', q: '"picnic" 是"运动会"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'picnic 是野餐，sports meeting 才是运动会。', tag: '单词' },
    { id: 'wh7-5', type: 'choice', q: '去野餐最适合带的是：', options: ['bread and juice', 'pencils and books', 'toys and games', 'socks and shoes'], answer: 0, explain: 'bread 面包 + juice 果汁，野餐食物带起来！', tag: '单词' },
    { id: 'wh7-6', type: 'choice', q: '"have a picnic" 中 "have" 的意思是：', options: ['进行（某活动）', '有（某物品）', '吃掉', '喜欢'], answer: 0, explain: 'have a picnic 进行野餐，have a look 看一看，have 用法很灵活。', tag: '语法' },
    { id: 'wh7-7', type: 'judge', q: '儿童节是属于全世界小朋友的节日。', options: ['√ 对', '✗ 错'], answer: 0, explain: '全世界的小朋友都过儿童节，外国小朋友说 Happy Children\'s Day!。', tag: '文化' },
    { id: 'wh7-8', type: 'choice', q: '"Today is my birthday." 的意思是：', options: ['今天是我的生日。', '今天是儿童节。', '今天我值日。', '今天是周末。'], answer: 0, explain: 'birthday 生日，Happy birthday! 生日快乐！', tag: '句型' },
    { id: 'wh7-9', type: 'judge', q: '野餐结束后要把垃圾带走，爱护草地。', options: ['√ 对', '✗ 错'], answer: 0, explain: '垃圾不落地，草地才美丽，文明野餐人人夸！', tag: '习惯养成' },
    { id: 'wh7-10', type: 'choice', q: '儿童节祝朋友节日快乐，可以说：', options: ["Happy Children's Day!", 'Happy birthday!', 'Happy New Year!', 'Merry Christmas!'], answer: 0, explain: "Happy Children's Day! 儿童节快乐！", tag: '祝福语' },
  ],
  wh8: [
    { id: 'wh8-1', type: 'choice', q: '"The train is going up a hill." 的意思是：', options: ['火车正在上山。', '火车正在下山。', '火车到站了。', '火车开得很快。'], answer: 0, explain: 'is going up 正在上，up a hill 上山。', tag: '句型' },
    { id: 'wh8-2', type: 'choice', q: '呜呜开的长长的"火车"是：', options: ['train', 'bus', 'car', 'bike'], answer: 0, explain: 'train 火车，by train 坐火车。', tag: '单词' },
    { id: 'wh8-3', type: 'choice', q: '"hill" 指的是：', options: ['小山；山坡', '高楼', '河流', '马路'], answer: 0, explain: 'hill 小山，爬山就是 go up the hill。', tag: '单词' },
    { id: 'wh8-4', type: 'judge', q: '"up the hill" 是"下山"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'up 是向上（上山），down 才是向下（下山）。', tag: '单词' },
    { id: 'wh8-5', type: 'choice', q: '"The horse is turning around." 的意思是：', options: ['马正在转圈。', '马在跑来跑去。', '马在吃草。', '马在爬山。'], answer: 0, explain: 'is turning around 正在转圈，turn around 转一圈。', tag: '句型' },
    { id: 'wh8-6', type: 'choice', q: '"turn around" 的意思是：', options: ['转圈；转身', '向前走', '停下来', '跑得快'], answer: 0, explain: 'turn around 转个圈，Turn around, please!。', tag: '短语' },
    { id: 'wh8-7', type: 'judge', q: '坐火车（坐车）时要坐稳扶好，不把头和手伸出窗外。', options: ['√ 对', '✗ 错'], answer: 0, explain: '安全乘车很重要，坐好扶稳不乱动！', tag: '习惯养成' },
    { id: 'wh8-8', type: 'choice', q: '火车下山了，应该说：', options: ['The train is going down the hill.', 'The train is going up the hill.', 'The train is turning around.', 'The train is at the station.'], answer: 0, explain: 'down 向下：going down the hill 正在下山。', tag: '句型' },
    { id: 'wh8-9', type: 'choice', q: '火车停靠的"车站"是：', options: ['station', 'school', 'shop', 'park'], answer: 0, explain: 'station 车站，train station 火车站。', tag: '单词' },
    { id: 'wh8-10', type: 'judge', q: '"stop" 的意思是"停止"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'stop 停止，The train stops. 火车停了。', tag: '单词' },
  ],
  wh9: [
    { id: 'wh9-1', type: 'choice', q: '"Turn left." 的意思是：', options: ['向左转。', '向右转。', '一直走。', '停下来。'], answer: 0, explain: 'turn left 向左转，left 左边。', tag: '句型' },
    { id: 'wh9-2', type: 'choice', q: '"Turn right." 的意思是：', options: ['向右转。', '向左转。', '向后转。', '向前走。'], answer: 0, explain: 'turn right 向右转，right 右边。', tag: '句型' },
    { id: 'wh9-3', type: 'choice', q: '"Where do you live?" 是在问：', options: ['你住在哪里？', '你要去哪里？', '你从哪里来？', '你在做什么？'], answer: 0, explain: 'live 居住，Where do you live? 问住处。', tag: '句型' },
    { id: 'wh9-4', type: 'judge', q: '"left" 是"右边"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'left 是左边，right 才是右边，方向别搞反！', tag: '单词' },
    { id: 'wh9-5', type: 'choice', q: '"I live in Beijing." 的意思是：', options: ['我住在北京。', '我去北京。', '我喜欢北京。', '我来自上海。'], answer: 0, explain: 'live in + 地方：住在某地。', tag: '句型' },
    { id: 'wh9-6', type: 'choice', q: '"Go straight on." 的意思是：', options: ['一直往前走。', '向左转。', '请停下来。', '跟我来。'], answer: 0, explain: 'straight 直的，go straight on 一直朝前走。', tag: '句型' },
    { id: 'wh9-7', type: 'judge', q: '给别人指路时要说清楚、指明白，让人听得懂。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Turn left. Go straight on. 说清楚方向，帮人帮到底！', tag: '习惯养成' },
    { id: 'wh9-8', type: 'choice', q: '"street" 指的是：', options: ['街道', '学校', '操场', '房间'], answer: 0, explain: 'street 街道，in the street 在街上。', tag: '单词' },
    { id: 'wh9-9', type: 'choice', q: '向别人问路，最礼貌的开场是：', options: ['Excuse me...', 'Hey, you!', 'Come here!', 'Follow me!'], answer: 0, explain: 'Excuse me. 打扰一下，问路先礼貌开口。', tag: '礼仪' },
    { id: 'wh9-10', type: 'judge', q: '在外面迷路了，可以找警察叔叔或工作人员帮忙。', options: ['√ 对', '✗ 错'], answer: 0, explain: '迷路不慌张，找穿制服的工作人员帮忙最安全！', tag: '安全' },
  ],
  wh10: [
    { id: 'wh10-1', type: 'choice', q: '"It\'s next to the park." 的意思是：', options: ['它在公园旁边。', '它在公园里。', '它是公园。', '它离公园很远。'], answer: 0, explain: 'next to 在……旁边，紧挨着。', tag: '句型' },
    { id: 'wh10-2', type: 'choice', q: '"next to" 的意思是：', options: ['在……旁边', '在……里面', '在……前面', '在……上面'], answer: 0, explain: 'next to 紧挨着：The shop is next to the school.。', tag: '短语' },
    { id: 'wh10-3', type: 'choice', q: '"He\'s helping a child." 的意思是：', options: ['他正在帮助一个孩子。', '他有一个孩子。', '他喜欢孩子。', '他在找孩子。'], answer: 0, explain: "He's helping 他正在帮助，help 帮助。", tag: '句型' },
    { id: 'wh10-4', type: 'judge', q: '"next to" 是"在……里面"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'next to 是在旁边，在……里面是 in。', tag: '短语' },
    { id: 'wh10-5', type: 'choice', q: '学校在公园旁边，应该说：', options: ['The school is next to the park.', 'The school is in the park.', 'The park is a school.', 'School like park.'], answer: 0, explain: 'A is next to B：A 在 B 的旁边。', tag: '句型' },
    { id: 'wh10-6', type: 'choice', q: '"help" 指的是：', options: ['帮助', '唱歌', '跑步', '睡觉'], answer: 0, explain: 'help 帮助，Help each other! 互相帮助！', tag: '单词' },
    { id: 'wh10-7', type: 'judge', q: '同学遇到困难时，要主动伸出援手帮忙。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'He\'s helping a child. 他帮助了别人，我们也要做乐于助人的好孩子！', tag: '习惯养成' },
    { id: 'wh10-8', type: 'choice', q: '买东西去的"超市"是：', options: ['supermarket', 'hospital', 'cinema', 'zoo'], answer: 0, explain: 'supermarket 超市，super + market，东西多多随便挑。', tag: '单词' },
    { id: 'wh10-9', type: 'choice', q: '想问"超市在哪里"，应该说：', options: ["Where's the supermarket?", 'What is a supermarket?', 'How is the supermarket?', 'Is it a supermarket?'], answer: 0, explain: "Where's...? 问地点，找地方就问 Where。", tag: '句型' },
    { id: 'wh10-10', type: 'judge', q: '别人帮助了你，要说 "Thank you."。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Thank you! 谢谢你！得到帮助要道谢，有礼貌！', tag: '礼仪' },
  ],
}
