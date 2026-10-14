// 外研版新标准英语（一年级起点）四年级下册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）四年级下册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq4x 核对）：
//   M1 Don't touch the machines, please!/Don't feed the fish! · M2 It's cheap./It costs one hundred and eighteen yuan.
//   M3 He shouted, 'Wolf, wolf!'/She went into a shop. · M4 Dad played the erhu./I was very nervous.
//   M5 We're having a party./He's drawing books and birds. · M6 I'll draw the pictures./Let's have fun this Saturday!
//   M7 What's the time?/It's 6:30 am in New York. · M8 He lives in the east of the US./It's in the north of China.
//   M9 Why do you like Australia?/Kangaroos live in Australia. · M10 I'll send you a postcard./I'm going to visit London.
// （源页 OCR 笔误已修正：M1U1 "Do't" 应为 "Don't"、M3U1 "shouted,'Wolf,wolf!'" 补空格）
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wj

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
    id: 'wj1',
    name: 'Module 1',
    title: "Don't touch the machines, please!",
    emoji: '🚫',
    color: 'amber',
    lessons: ["Don't touch the machines, please!", "Don't feed the fish!", 'Don\'t + 动词'],
    intro: '工厂博物馆规则多，Don\'t 句型要记牢！',
  },
  {
    id: 'wj2',
    name: 'Module 2',
    title: "It's cheap.",
    emoji: '💰',
    color: 'orange',
    lessons: ["It's cheap.", 'It costs one hundred and eighteen yuan.', 'How much'],
    intro: '买东西看价格，cheap 和 expensive 分得清！',
  },
  {
    id: 'wj3',
    name: 'Module 3',
    title: "He shouted, 'Wolf, wolf!'",
    emoji: '🐺',
    color: 'rose',
    lessons: ["He shouted, 'Wolf, wolf!'", 'She went into a shop.', 'Past tense'],
    intro: '狼来了的故事，过去式动词登场！',
  },
  {
    id: 'wj4',
    name: 'Module 4',
    title: 'Dad played the erhu.',
    emoji: '🎻',
    color: 'lime',
    lessons: ['Dad played the erhu.', 'I was very nervous.', 'Concert time'],
    intro: '音乐会上二胡响，紧张又自豪的回忆！',
  },
  {
    id: 'wj5',
    name: 'Module 5',
    title: "We're having a party.",
    emoji: '🎉',
    color: 'teal',
    lessons: ["We're having a party.", "He's drawing books and birds.", '-ing actions'],
    intro: '派对开始啦，正在进行时说来就来！',
  },
  {
    id: 'wj6',
    name: 'Module 6',
    title: "I'll draw the pictures.",
    emoji: '🎨',
    color: 'sky',
    lessons: ["I'll draw the pictures.", "Let's have fun this Saturday!", 'Plan together'],
    intro: '分工合作本领大，这周六一起嗨！',
  },
  {
    id: 'wj7',
    name: 'Module 7',
    title: "What's the time?",
    emoji: '⏰',
    color: 'violet',
    lessons: ["What's the time?", "It's 6:30 am in New York.", 'Time zones'],
    intro: '北京纽约钟不同，时区知识藏着呢！',
  },
  {
    id: 'wj8',
    name: 'Module 8',
    title: 'He lives in the east of the US.',
    emoji: '🧭',
    color: 'pink',
    lessons: ['He lives in the east of the US.', "It's in the north of China.", 'Directions'],
    intro: '东南西北四个方向，地图上找一找！',
  },
  {
    id: 'wj9',
    name: 'Module 9',
    title: 'Why do you like Australia?',
    emoji: '🦘',
    color: 'indigo',
    lessons: ['Why do you like Australia?', 'Kangaroos live in Australia.', 'Because...'],
    intro: '为什么喜欢澳大利亚？Because 袋鼠超可爱！',
  },
  {
    id: 'wj10',
    name: 'Module 10',
    title: "I'll send you a postcard.",
    emoji: '💌',
    color: 'emerald',
    lessons: ["I'll send you a postcard.", "I'm going to visit London.", 'Travel plans'],
    intro: '寄张明信片，说一说旅行计划！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wj1: [
    { id: 'wj1-1', type: 'choice', q: '"Don\'t touch the machines, please!" 的意思是：', options: ['请不要触摸机器！', '请摸一摸机器！', '请开动机器！', '机器坏了！'], answer: 0, explain: "Don't + 动词原形，表示禁止、提醒。", tag: '句型' },
    { id: 'wj1-2', type: 'choice', q: '"Don\'t" 的完整形式是：', options: ['Do not', 'Does not', 'Did not', 'Don a'], answer: 0, explain: "Don't = Do not，祈使句否定式。", tag: '语法' },
    { id: 'wj1-3', type: 'choice', q: '"Don\'t feed the fish!" 的意思是：', options: ['不要喂鱼！', '不要抓鱼！', '请喂鱼！', '鱼饿了！'], answer: 0, explain: 'feed 喂养，Don\'t feed the fish! 禁止投喂。', tag: '句型' },
    { id: 'wj1-4', type: 'choice', q: '"feed" 的意思是：', options: ['喂；喂养', '摸', '抓', '看'], answer: 0, explain: 'feed 喂，feed the dog 喂小狗。', tag: '单词' },
    { id: 'wj1-5', type: 'judge', q: '"Don\'t touch!" 是"请摸一摸"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: "Don't touch! 是“别碰！”的意思，touch 才是“摸”。", tag: '句型' },
    { id: 'wj1-6', type: 'choice', q: '图书馆里要提醒大家安静，应该说：', options: ["Don't talk loudly.", "Don't read books.", "Don't sit down.", "Don't go out."], answer: 0, explain: 'talk loudly 大声说话，Don\'t talk loudly. 别大声喧哗。', tag: '句型' },
    { id: 'wj1-7', type: 'choice', q: '"touch" 的意思是：', options: ['触摸', '教导', '搬走', '修理'], answer: 0, explain: 'touch 触摸，Don\'t touch it. 别碰它。', tag: '单词' },
    { id: 'wj1-8', type: 'judge', q: '祈使句的否定形式是在动词前加 Don\'t。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Open the door. → Don\'t open the door.。', tag: '语法' },
    { id: 'wj1-9', type: 'choice', q: '草坪提示牌"禁止踩踏草坪"应该说：', options: ["Don't walk on the grass.", "Walk on the grass.", "Don't water the grass.", "Cut the grass."], answer: 0, explain: 'walk on the grass 踩草坪，加 Don\'t 表示禁止。', tag: '句型' },
    { id: 'wj1-10', type: 'judge', q: '在工厂、公园等公共场所要遵守规则，不乱摸、不乱喂。', options: ['√ 对', '✗ 错'], answer: 0, explain: '看懂 Don\'t 提示牌，既是学英语，更是讲文明！', tag: '习惯养成' },
  ],
  wj2: [
    { id: 'wj2-1', type: 'choice', q: '"It\'s cheap." 的意思是：', options: ['它很便宜。', '它很贵。', '它是新的。', '它很好看。'], answer: 0, explain: 'cheap 便宜的，The pen is cheap. 这支笔很便宜。', tag: '句型' },
    { id: 'wj2-2', type: 'choice', q: '"cheap"（便宜的）的反义词是：', options: ['expensive', 'cheaply', 'good', 'small'], answer: 0, explain: 'cheap 便宜 ↔ expensive 昂贵。', tag: '单词' },
    { id: 'wj2-3', type: 'choice', q: '"It costs one hundred and eighteen yuan." 的意思是：', options: ['它的售价是 118 元。', '它值一元钱。', '它有 118 个。', '它要打折了。'], answer: 0, explain: 'cost 花费、售价，one hundred and eighteen = 118。', tag: '句型' },
    { id: 'wj2-4', type: 'choice', q: '"cost" 的意思是：', options: ['花费；价值为', '拿走', '数数', '找钱'], answer: 0, explain: 'cost 说东西"要花多少钱"：It costs five yuan.。', tag: '单词' },
    { id: 'wj2-5', type: 'judge', q: '"expensive" 是"便宜"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'expensive 是昂贵，cheap 才是便宜。', tag: '单词' },
    { id: 'wj2-6', type: 'choice', q: '数字 100 的英文是：', options: ['one hundred', 'one thousand', 'ten', 'one hand'], answer: 0, explain: 'one hundred 一百，two hundred 两百。', tag: '数字' },
    { id: 'wj2-7', type: 'choice', q: '"How much is it?" 是在问：', options: ['它多少钱？', '它有多少个？', '它是什么？', '它好不好？'], answer: 0, explain: 'How much 问价格：它多少钱？', tag: '句型' },
    { id: 'wj2-8', type: 'judge', q: '买东西前可以先问一问价格，心里有数。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'How much is it? 先问价，做个聪明的小顾客！', tag: '习惯养成' },
    { id: 'wj2-9', type: 'choice', q: '"yuan" 指的是：', options: ['元（人民币单位）', '美元', '英镑', '日元'], answer: 0, explain: 'yuan 元，five yuan 五元，中国钱币单位。', tag: '常识' },
    { id: 'wj2-10', type: 'judge', q: 'one hundred and eighteen 就是 118。', options: ['√ 对', '✗ 错'], answer: 0, explain: '百位后加 and：one hundred and eighteen = 118。', tag: '数字' },
  ],
  wj3: [
    { id: 'wj3-1', type: 'choice', q: '"He shouted, \'Wolf, wolf!\'" 的意思是：', options: ['他喊道："狼来了！狼来了！"', '他喜欢狼。', '他害怕狼。', '他看见了一只狼。'], answer: 0, explain: 'shout 喊叫，shouted 是过去式：喊"狼来了"。', tag: '句型' },
    { id: 'wj3-2', type: 'choice', q: '"shouted" 是哪个动词的过去式？', options: ['shout', 'shouted', 'shoot', 'short'], answer: 0, explain: 'shout → shouted，直接加 ed。', tag: '语法' },
    { id: 'wj3-3', type: 'choice', q: '"went" 是哪个动词的过去式？', options: ['go', 'want', 'walk', 'get'], answer: 0, explain: 'go → went，不规则变化要背熟。', tag: '语法' },
    { id: 'wj3-4', type: 'judge', q: '"ran" 是"跑（run）"的过去式。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'run → ran，跑的过去式。', tag: '语法' },
    { id: 'wj3-5', type: 'choice', q: '"She went into a shop." 的意思是：', options: ['她走进了一家商店。', '她想去商店。', '她喜欢商店。', '她在商店工作。'], answer: 0, explain: 'went into 走进，a shop 一家商店。', tag: '句型' },
    { id: 'wj3-6', type: 'choice', q: '"狼来了"的故事告诉我们：', options: ['不能说谎，要诚实', '要多喊叫', '狼很可怕', '放羊很好玩'], answer: 0, explain: '说谎一次两次，别人就不再相信你了——诚实最可贵！', tag: '道理' },
    { id: 'wj3-7', type: 'judge', q: '经常说谎的孩子会失去别人的信任。', options: ['√ 对', '✗ 错'], answer: 0, explain: '狼来了喊两次就没人信了——诚信是金！', tag: '道理' },
    { id: 'wj3-8', type: 'choice', q: '"Wolf" 指的是：', options: ['狼', '狗', '羊', '牛'], answer: 0, explain: 'wolf 狼，复数是 wolves。', tag: '单词' },
    { id: 'wj3-9', type: 'choice', q: '"bought" 是哪个动词的过去式？', options: ['buy', 'bring', 'build', 'beat'], answer: 0, explain: 'buy → bought 买，不规则变化。', tag: '语法' },
    { id: 'wj3-10', type: 'judge', q: '一般过去时用来描述过去发生的事。', options: ['√ 对', '✗ 错'], answer: 0, explain: '昨天、上周的事，动词用过去式。', tag: '语法' },
  ],
  wj4: [
    { id: 'wj4-1', type: 'choice', q: '"Dad played the erhu." 的意思是：', options: ['爸爸拉了二胡。', '爸爸会拉二胡。', '爸爸在买二胡。', '爸爸喜欢二胡。'], answer: 0, explain: 'played 过去式：爸爸（那天）演奏了二胡。', tag: '句型' },
    { id: 'wj4-2', type: 'choice', q: '"played" 是哪个动词的过去式？', options: ['play', 'plan', 'plane', 'plate'], answer: 0, explain: 'play → played，直接加 ed。', tag: '语法' },
    { id: 'wj4-3', type: 'choice', q: '"I was very nervous." 的意思是：', options: ['我当时非常紧张。', '我现在很紧张。', '我很勇敢。', '我很开心。'], answer: 0, explain: 'was 过去式：演出前紧张的心情。', tag: '句型' },
    { id: 'wj4-4', type: 'choice', q: '"nervous" 的意思是：', options: ['紧张的', '高兴的', '生气的', '累的'], answer: 0, explain: 'nervous 紧张的，be nervous 感到紧张。', tag: '单词' },
    { id: 'wj4-5', type: 'judge', q: '"concert" 是"运动会"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'concert 是音乐会，sports meeting 才是运动会。', tag: '单词' },
    { id: 'wj4-6', type: 'choice', q: 'play 后面接乐器时，通常要加：', options: ['the', 'a', 'an', '不加'], answer: 0, explain: 'play the erhu / play the piano，乐器前加 the。', tag: '语法' },
    { id: 'wj4-7', type: 'choice', q: '"proud" 的意思是：', options: ['自豪的', '紧张的', '害羞的', '难过的'], answer: 0, explain: 'proud 自豪的，I was proud. 我很自豪。', tag: '单词' },
    { id: 'wj4-8', type: 'judge', q: '说"我当时很高兴"，可以说 "I was very happy."。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I + was，过去的状态。', tag: '语法' },
    { id: 'wj4-9', type: 'choice', q: '音乐会上演奏的"乐器"是：', options: ['instruments', 'inventions', 'machines', 'pictures'], answer: 0, explain: 'instrument 乐器，erhu、piano、violin 都是乐器。', tag: '单词' },
    { id: 'wj4-10', type: 'judge', q: '上台表演前紧张很正常，深呼吸、好好准备就不怕了。', options: ['√ 对', '✗ 错'], answer: 0, explain: '人人都会紧张，充分练习是消除紧张的好办法！', tag: '习惯养成' },
  ],
  wj5: [
    { id: 'wj5-1', type: 'choice', q: '"We\'re having a party." 的意思是：', options: ['我们正在开派对。', '我们想去派对。', '我们喜欢派对。', '派对开始了。'], answer: 0, explain: "We're having 正在举行，have a party 开派对。", tag: '句型' },
    { id: 'wj5-2', type: 'choice', q: '"having a party" 表示：', options: ['正在举行派对', '想要派对', '派对结束了', '布置派对'], answer: 0, explain: 'be + having：have 的 ing 形式表示正在进行。', tag: '语法' },
    { id: 'wj5-3', type: 'choice', q: '"He\'s drawing books and birds." 的意思是：', options: ['他正在画书和小鸟。', '他喜欢书和小鸟。', '他画完了书和小鸟。', '他在读书看鸟。'], answer: 0, explain: "He's drawing 他正在画，现在进行时。", tag: '句型' },
    { id: 'wj5-4', type: 'judge', q: '"party" 是"数学课"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'party 是派对、聚会，maths class 才是数学课。', tag: '单词' },
    { id: 'wj5-5', type: 'choice', q: '生日派对上大家都会唱：', options: ['Happy birthday', 'Happy New Year', 'Merry Christmas', 'Good morning'], answer: 0, explain: 'Happy birthday to you! 生日歌一响，蛋糕登场！', tag: '文化' },
    { id: 'wj5-6', type: 'choice', q: '"Everyone is having fun." 的意思是：', options: ['大家都玩得很开心。', '每个人都要来了。', '大家都很累。', '有人在开玩笑。'], answer: 0, explain: 'have fun 玩得开心，everyone 每个人（谓语用单数）。', tag: '句型' },
    { id: 'wj5-7', type: 'judge', q: '现在进行时的结构是 be + 动词ing。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'am/is/are + doing，表示正在做。', tag: '语法' },
    { id: 'wj5-8', type: 'choice', q: '派对上甜甜的"蛋糕"是：', options: ['cake', 'candy', 'bread', 'biscuit'], answer: 0, explain: 'cake 蛋糕，birthday cake 生日蛋糕。', tag: '单词' },
    { id: 'wj5-9', type: 'judge', q: '参加派对要文明有礼，不大喊大叫乱扔东西。', options: ['√ 对', '✗ 错'], answer: 0, explain: '开派对也要讲礼貌，做文明小客人！', tag: '习惯养成' },
    { id: 'wj5-10', type: 'choice', q: '"他们正在唱歌跳舞"应该说：', options: ["They're singing and dancing.", 'They sing and dance.', 'They liked singing.', 'They can sing dance.'], answer: 0, explain: "They're + singing and dancing，两个动作都用 ing。", tag: '句型' },
  ],
  wj6: [
    { id: 'wj6-1', type: 'choice', q: '"I\'ll draw the pictures." 的意思是：', options: ['我来画图画。', '我正在画画。', '我画过画了。', '我喜欢画画。'], answer: 0, explain: "I'll = I will，主动承担任务：我来画！。", tag: '句型' },
    { id: 'wj6-2', type: 'choice', q: '"I\'ll = I will" 表示：', options: ['我将要', '我正在', '我过去', '我想要'], answer: 0, explain: 'will 将来时，主动说"我来做某事"。', tag: '语法' },
    { id: 'wj6-3', type: 'choice', q: '"Let\'s have fun this Saturday!" 的意思是：', options: ['这周六我们一起玩吧！', '周六要上课！', '周六很好玩。', '我们一起学习吧！'], answer: 0, explain: "Let's + 动词原形，发出邀请。", tag: '句型' },
    { id: 'wj6-4', type: 'choice', q: '"Saturday" 是：', options: ['星期六', '星期日', '星期五', '星期一'], answer: 0, explain: 'Saturday 星期六，周末第一天（英式习惯）。', tag: '单词' },
    { id: 'wj6-5', type: 'judge', q: '"Sunday" 是"星期六"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'Sunday 是星期日，Saturday 才是星期六。', tag: '单词' },
    { id: 'wj6-6', type: 'choice', q: '出黑板报分工，说"我来写字"应该说：', options: ["I'll write the words.", 'I write now.', 'I wrote words.', 'I like writing.'], answer: 0, explain: "I'll + 动词原形，主动认领任务。", tag: '句型' },
    { id: 'wj6-7', type: 'choice', q: '"fun" 的意思是：', options: ['乐趣；开心', '玩笑骗人', '工作', '学习'], answer: 0, explain: 'fun 开心、有趣，have fun 玩得开心。', tag: '单词' },
    { id: 'wj6-8', type: 'judge', q: 'will 后面要用动词原形。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I\'ll draw / I\'ll go / I\'ll play，will + 原形。', tag: '语法' },
    { id: 'wj6-9', type: 'choice', q: '"clean the room" 的意思是：', options: ['打扫房间', '整理书包', '洗衣服', '倒垃圾'], answer: 0, explain: 'clean 打扫、弄干净，clean the room 打扫房间。', tag: '短语' },
    { id: 'wj6-10', type: 'judge', q: '和同学分工合作，事情会做得又快又好。', options: ['√ 对', '✗ 错'], answer: 0, explain: '你画画我写字，团队合作力量大！', tag: '习惯养成' },
  ],
  wj7: [
    { id: 'wj7-1', type: 'choice', q: '"What\'s the time?" 是在问：', options: ['现在几点了？', '今天星期几？', '时间过得快吗？', '你有时间吗？'], answer: 0, explain: "What's the time? 几点了？也可以说 What time is it?。", tag: '句型' },
    { id: 'wj7-2', type: 'choice', q: '"It\'s 6:30 am in New York." 的意思是：', options: ['纽约现在是早上六点半。', '纽约现在是晚上六点半。', '我们要六点半去纽约。', '纽约时间很慢。'], answer: 0, explain: 'am 上午、pm 下午，6:30 am 早上六点半。', tag: '句型' },
    { id: 'wj7-3', type: 'choice', q: '"am" 表示：', options: ['上午（凌晨到中午）', '下午', '晚上', '中午'], answer: 0, explain: 'am 上午，8 am 早上八点。', tag: '常识' },
    { id: 'wj7-4', type: 'choice', q: '"pm" 表示：', options: ['下午（中午到午夜）', '上午', '凌晨', '白天'], answer: 0, explain: 'pm 下午，3 pm 下午三点。', tag: '常识' },
    { id: 'wj7-5', type: 'judge', q: '"half past six" 是"六点半"的意思。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'past 过，half past six 六点半（六点过半小时）。', tag: '时间' },
    { id: 'wj7-6', type: 'choice', q: '"七点整"应该说：', options: ["seven o'clock", 'seven half', 'past seven', 'seven minutes'], answer: 0, explain: "o'clock 整点：six o'clock、seven o'clock。", tag: '时间' },
    { id: 'wj7-7', type: 'choice', q: '北京和纽约的钟表时间不一样，是因为：', options: ['两地属于不同时区', '北京的表坏了', '纽约用另一种钟', '地球在转圈'], answer: 0, explain: '地球自转，世界各地有时差，分成了 24 个时区。', tag: '常识' },
    { id: 'wj7-8', type: 'judge', q: '问时间可以说 "What\'s the time?" 也可以说 "What time is it?"。', options: ['√ 对', '✗ 错'], answer: 0, explain: '两种说法都对，意思一样。', tag: '句型' },
    { id: 'wj7-9', type: 'choice', q: '"quarter past seven" 是：', options: ['七点一刻', '七点半', '七点三刻', '七小时'], answer: 0, explain: 'quarter 一刻钟（15 分钟），quarter past seven 七点十五。', tag: '时间' },
    { id: 'wj7-10', type: 'judge', q: '作息要规律，按时睡觉、按时起床。', options: ['√ 对', '✗ 错'], answer: 0, explain: '早睡早起身体好，做时间的小主人！', tag: '习惯养成' },
  ],
  wj8: [
    { id: 'wj8-1', type: 'choice', q: '"He lives in the east of the US." 的意思是：', options: ['他住在美国东部。', '他住在美国西部。', '他来自中国。', '他要去美国。'], answer: 0, explain: 'in the east of 在……的东部，lives 居住（三单加 s）。', tag: '句型' },
    { id: 'wj8-2', type: 'choice', q: '"east" 的意思是：', options: ['东；东部', '西；西部', '南；南部', '北；北部'], answer: 0, explain: 'east 东，the east of China 中国东部。', tag: '单词' },
    { id: 'wj8-3', type: 'choice', q: '"It\'s in the north of China." 的意思是：', options: ['它在中国北部。', '它在中国南部。', '它在中国东部。', '它是中国地图。'], answer: 0, explain: 'north 北，in the north of China 在中国北方。', tag: '句型' },
    { id: 'wj8-4', type: 'choice', q: '"north" 的意思是：', options: ['北；北部', '南；南部', '东；东部', '西；西部'], answer: 0, explain: 'north 北，North Pole 北极。', tag: '单词' },
    { id: 'wj8-5', type: 'judge', q: '"south" 是"北方"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'south 是南方，north 才是北方。', tag: '单词' },
    { id: 'wj8-6', type: 'choice', q: '"west" 的意思是：', options: ['西；西部', '东；东部', '南；南部', '北；北部'], answer: 0, explain: 'west 西，the west of the US 美国西部。', tag: '单词' },
    { id: 'wj8-7', type: 'choice', q: '地图上"上北下南，左西右"——横线后应填：', options: ['east（东）', 'west（西）', 'north（北）', 'south（南）'], answer: 0, explain: '口诀：上北下南、左西右东。', tag: '常识' },
    { id: 'wj8-8', type: 'judge', q: '"in the east of" 表示"在……的东部（范围内）"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Shanghai is in the east of China. 上海在中国东部。', tag: '短语' },
    { id: 'wj8-9', type: 'choice', q: '太阳每天从哪边升起？', options: ['east（东）', 'west（西）', 'south（南）', 'north（北）'], answer: 0, explain: 'The sun rises in the east. 太阳东升西落。', tag: '常识' },
    { id: 'wj8-10', type: 'judge', q: '北京是中国的首都，在中国的北方。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Beijing is in the north of China.。', tag: '常识' },
  ],
  wj9: [
    { id: 'wj9-1', type: 'choice', q: '"Why do you like Australia?" 是在问：', options: ['你为什么喜欢澳大利亚？', '你在澳大利亚吗？', '澳大利亚远吗？', '你喜欢澳大利亚吗？'], answer: 0, explain: 'Why 问原因，用 Because 回答。', tag: '句型' },
    { id: 'wj9-2', type: 'choice', q: '回答 Why 的问题，常用：', options: ['Because...', 'So...', 'But...', 'And...'], answer: 0, explain: 'Why 问为什么，Because 因为……。', tag: '句型' },
    { id: 'wj9-3', type: 'choice', q: '"Kangaroos live in Australia." 的意思是：', options: ['袋鼠生活在澳大利亚。', '袋鼠住在动物园。', '袋鼠会跳很高。', '澳大利亚有很多树。'], answer: 0, explain: 'kangaroo 袋鼠（复数 kangaroos），live in 生活在。', tag: '句型' },
    { id: 'wj9-4', type: 'choice', q: '"kangaroo" 指的是：', options: ['袋鼠', '考拉', '熊猫', '企鹅'], answer: 0, explain: 'kangaroo 袋鼠，肚子上有口袋，跳得很远。', tag: '单词' },
    { id: 'wj9-5', type: 'judge', q: '"Australia" 是"奥地利"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'Australia 是澳大利亚，Austria 才是奥地利，别看混！', tag: '文化' },
    { id: 'wj9-6', type: 'choice', q: '"because" 的意思是：', options: ['因为', '所以', '但是', '而且'], answer: 0, explain: 'because 因为，引出原因。', tag: '单词' },
    { id: 'wj9-7', type: 'choice', q: '澳大利亚的标志动物（国宝）是：', options: ['koala（考拉）', 'panda（熊猫）', 'tiger（老虎）', 'lion（狮子）'], answer: 0, explain: 'koala 考拉，睡在桉树上，是澳大利亚的国宝。', tag: '常识' },
    { id: 'wj9-8', type: 'judge', q: '"Why do you like it?" 可以回答 "Because it\'s cute."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '问为什么，because + 原因来回答。', tag: '句型' },
    { id: 'wj9-9', type: 'choice', q: '袋鼠宝宝住在：', options: ['妈妈的育儿袋里', '树洞里', '山洞里', '鸟窝里'], answer: 0, explain: '袋鼠妈妈肚子上有个 pouch（育儿袋），宝宝住在里面。', tag: '常识' },
    { id: 'wj9-10', type: 'judge', q: '动物是大自然的一员，我们要保护它们的家园。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Kangaroos live in Australia. 每种动物都有自己的家，保护环境人人有责！', tag: '习惯养成' },
  ],
  wj10: [
    { id: 'wj10-1', type: 'choice', q: '"I\'ll send you a postcard." 的意思是：', options: ['我会给你寄一张明信片。', '我收到了明信片。', '我想买明信片。', '明信片很好看。'], answer: 0, explain: "I'll send 我会寄，postcard 明信片。", tag: '句型' },
    { id: 'wj10-2', type: 'choice', q: '"postcard" 指的是：', options: ['明信片', '信封', '邮票', '包裹'], answer: 0, explain: 'postcard 明信片，post 邮政 + card 卡片。', tag: '单词' },
    { id: 'wj10-3', type: 'choice', q: '"send" 的意思是：', options: ['寄；发送', '买', '卖', '画'], answer: 0, explain: 'send 寄、发送，send an email 发邮件。', tag: '单词' },
    { id: 'wj10-4', type: 'choice', q: '"I\'m going to visit London." 的意思是：', options: ['我打算去游览伦敦。', '我住在伦敦。', '我去过伦敦。', '伦敦很美。'], answer: 0, explain: 'be going to 打算、计划，visit 参观游览。', tag: '句型' },
    { id: 'wj10-5', type: 'judge', q: '"visit" 是"居住"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'visit 是参观、拜访，live 才是居住。', tag: '单词' },
    { id: 'wj10-6', type: 'choice', q: '明信片上通常会写：', options: ['greetings（问候）', 'homework（作业）', 'menus（菜单）', 'keys（钥匙）'], answer: 0, explain: 'postcard 上写祝福问候，贴上邮票就能寄。', tag: '常识' },
    { id: 'wj10-7', type: 'choice', q: '"travel" 的意思是：', options: ['旅行', '火车', '麻烦', '宝藏'], answer: 0, explain: 'travel 旅行，travel around the world 环游世界。', tag: '单词' },
    { id: 'wj10-8', type: 'judge', q: '"be going to" 表示计划、打算做的事。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I\'m going to visit... 我打算去……。', tag: '语法' },
    { id: 'wj10-9', type: 'choice', q: '伦敦的著名景点"大本钟"是：', options: ['Big Ben', 'Great Wall', 'Buckingham Cat', 'London Eye Ben'], answer: 0, explain: 'Big Ben 大本钟，伦敦的标志建筑。', tag: '文化' },
    { id: 'wj10-10', type: 'judge', q: '出门旅行前，要和爸爸妈妈一起做好准备、做好计划。', options: ['√ 对', '✗ 错'], answer: 0, explain: '计划好时间、带好物品，旅行才顺利开心！', tag: '习惯养成' },
  ],
}
