// 外研版新标准英语（一年级起点）三年级下册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）三年级下册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq3x 核对）：
//   M1 She's very nice./I'm going to help her. · M2 It's very long./You'll see Tower Bridge.
//   M3 We'll go to the zoo./Will we have breakfast at 7? · M4 We'll pick fruit./Thirteen, fourteen, fifteen...
//   M5 Will you take your ball tomorrow?/On Monday, I'll go swimming. · M6 Here are his hands./There is a small monster.
//   M7 Are there many children in your class?/How many apples are there in the box?
//   M8 He works hard./She's quite good at English. · M9 They were very young./He was in Hong Kong.
//   M10 Were you on the second floor?/It was there.
// （源页 OCR 笔误已修正：M4U2 "Thirteen,fourteen,fifteen..."、M5U2 "On Monday,I'll go swimming" 补空格）
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wi

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
    id: 'wi1',
    name: 'Module 1',
    title: "She's very nice.",
    emoji: '👧',
    color: 'amber',
    lessons: ["She's very nice.", "I'm going to help her.", 'Good friends'],
    intro: '夸夸好朋友，再打算去帮助她！',
  },
  {
    id: 'wi2',
    name: 'Module 2',
    title: "It's very long.",
    emoji: '🌉',
    color: 'orange',
    lessons: ["It's very long.", "You'll see Tower Bridge.", "will = 'll"],
    intro: '塔桥长又宽，will 说出将来会看到的风景！',
  },
  {
    id: 'wi3',
    name: 'Module 3',
    title: "We'll go to the zoo.",
    emoji: '🦁',
    color: 'rose',
    lessons: ["We'll go to the zoo.", 'Will we have breakfast at 7?', 'Yes, we will.'],
    intro: '我们将去动物园，will 疑问句练一练！',
  },
  {
    id: 'wi4',
    name: 'Module 4',
    title: "We'll pick fruit.",
    emoji: '🍎',
    color: 'lime',
    lessons: ["We'll pick fruit.", 'Thirteen, fourteen, fifteen...', 'Numbers 13-18'],
    intro: '一起去摘果，十三到十八数得清！',
  },
  {
    id: 'wi5',
    name: 'Module 5',
    title: 'Will you take your ball tomorrow?',
    emoji: '📅',
    color: 'teal',
    lessons: ['Will you take your ball tomorrow?', "On Monday, I'll go swimming.", 'Days of the week'],
    intro: '明天带不带球？星期一到星期日排排队！',
  },
  {
    id: 'wi6',
    name: 'Module 6',
    title: 'Here are his hands.',
    emoji: '🖐️',
    color: 'sky',
    lessons: ['Here are his hands.', 'There is a small monster.', 'Body words'],
    intro: '这是他的手，那儿还有个小怪物！',
  },
  {
    id: 'wi7',
    name: 'Module 7',
    title: 'Are there many children in your class?',
    emoji: '👾',
    color: 'violet',
    lessons: ['Are there many children in your class?', 'How many apples are there in the box?', 'there be questions'],
    intro: '班里孩子多不多？盒里苹果有几个？',
  },
  {
    id: 'wi8',
    name: 'Module 8',
    title: 'He works hard.',
    emoji: '🏫',
    color: 'pink',
    lessons: ['He works hard.', "She's quite good at English.", 'be good at'],
    intro: '他学习真努力，她英语顶呱呱！',
  },
  {
    id: 'wi9',
    name: 'Module 9',
    title: 'They were very young.',
    emoji: '👶',
    color: 'indigo',
    lessons: ['They were very young.', 'He was in Hong Kong.', 'was / were'],
    intro: '翻翻老照片，was、were 说过去！',
  },
  {
    id: 'wi10',
    name: 'Module 10',
    title: 'Were you on the second floor?',
    emoji: '🏢',
    color: 'emerald',
    lessons: ['Were you on the second floor?', 'It was there.', 'Ordinal numbers'],
    intro: '当时你在二楼吗？过去的事问一问！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wi1: [
    { id: 'wi1-1', type: 'choice', q: '"She\'s very nice." 的意思是：', options: ['她人非常好。', '她非常漂亮。', '她非常高。', '她非常喜欢我。'], answer: 0, explain: 'nice 友好的、好相处的，夸人品用 nice。', tag: '句型' },
    { id: 'wi1-2', type: 'choice', q: '"nice" 的意思是：', options: ['友好的；很好的', '整齐的', '九', '夜晚'], answer: 0, explain: 'nice 好的、友善的，a nice girl 一个友好的女孩。', tag: '单词' },
    { id: 'wi1-3', type: 'choice', q: '"I\'m going to help her." 的意思是：', options: ['我打算去帮助她。', '我正在帮助她。', '我帮助过她。', '她要来帮我。'], answer: 0, explain: "be going to + 动词，表示打算、准备做某事。", tag: '句型' },
    { id: 'wi1-4', type: 'choice', q: '"be going to" 表示：', options: ['打算；将要', '正在', '过去', '喜欢'], answer: 0, explain: 'be going to 说将来的打算：I\'m going to swim.。', tag: '语法' },
    { id: 'wi1-5', type: 'judge', q: '"clever" 是"聪明"的意思。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'clever 聪明的，a clever boy 一个聪明的男孩。', tag: '单词' },
    { id: 'wi1-6', type: 'choice', q: '图书馆里要保持"安静的"，安静的是：', options: ['quiet', 'loud', 'nice', 'naughty'], answer: 0, explain: 'quiet 安静的，Please be quiet. 请安静。', tag: '单词' },
    { id: 'wi1-7', type: 'choice', q: '"I\'m going to swim." 的意思是：', options: ['我打算去游泳。', '我正在游泳。', '我会游泳。', '我游过泳了。'], answer: 0, explain: 'be going to + 动词原形：打算去游泳。', tag: '句型' },
    { id: 'wi1-8', type: 'judge', q: '"She\'s very nice." 可以用来夸奖别人。', options: ['√ 对', '✗ 错'], answer: 0, explain: '夸别人友善、人好，就说 You\'re very nice!。', tag: '句型' },
    { id: 'wi1-9', type: 'choice', q: '"naughty" 的意思是：', options: ['调皮的', '聪明的', '害羞的', '勇敢的'], answer: 0, explain: 'naughty 调皮的，a naughty monkey 一只调皮的猴子。', tag: '单词' },
    { id: 'wi1-10', type: 'judge', q: '同学有困难，打算帮助他可以说 "I\'m going to help him."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '他 him、她 her，帮助别人时别用错代词。', tag: '句型' },
  ],
  wi2: [
    { id: 'wi2-1', type: 'choice', q: '"It\'s very long." 的意思是：', options: ['它很长。', '它很宽。', '它很旧。', '它很高。'], answer: 0, explain: 'long 长的，The river is long. 这条河很长。', tag: '句型' },
    { id: 'wi2-2', type: 'choice', q: '"You\'ll see Tower Bridge." 的意思是：', options: ['你将会看到塔桥。', '你看到了塔桥。', '你想看塔桥。', '你在塔桥上。'], answer: 0, explain: "'ll = will，表示将来会……", tag: '句型' },
    { id: 'wi2-3', type: 'choice', q: "'ll（will）表示：", options: ['将来会', '过去曾', '正在', '必须'], answer: 0, explain: 'will 将来时标志：I\'ll see = I will see 我将会看到。', tag: '语法' },
    { id: 'wi2-4', type: 'judge', q: '"Tower Bridge"（塔桥）在北京。', options: ['√ 对', '✗ 错'], answer: 1, explain: '塔桥在英国伦敦，横跨泰晤士河，是伦敦的标志。', tag: '文化' },
    { id: 'wi2-5', type: 'choice', q: '"old"（旧的）的反义词是：', options: ['new', 'long', 'big', 'tall'], answer: 0, explain: 'old 旧 ↔ new 新；old 老 ↔ young 年轻。', tag: '单词' },
    { id: 'wi2-6', type: 'choice', q: '"wide" 的意思是：', options: ['宽的', '窄的', '长的', '圆的'], answer: 0, explain: 'wide 宽的，The road is wide. 马路很宽。', tag: '单词' },
    { id: 'wi2-7', type: 'choice', q: '塔桥所在的"河流"是：', options: ['river', 'lake', 'sea', 'hill'], answer: 0, explain: 'river 河流，Tower Bridge is over the River Thames.。', tag: '单词' },
    { id: 'wi2-8', type: 'judge', q: '"You\'ll see..." 用来告诉别人将会看到什么。', options: ['√ 对', '✗ 错'], answer: 0, explain: "You'll see a big park. 你会看到一个大公园。", tag: '句型' },
    { id: 'wi2-9', type: 'choice', q: '伦敦是哪个国家的城市？', options: ['英国', '美国', '法国', '中国'], answer: 0, explain: 'London 伦敦，英国（the UK）的首都。', tag: '文化' },
    { id: 'wi2-10', type: 'judge', q: 'will 后面的动词要用原形。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'will see、will go、will play——will + 动词原形。', tag: '语法' },
  ],
  wi3: [
    { id: 'wi3-1', type: 'choice', q: '"We\'ll go to the zoo." 的意思是：', options: ['我们将要去动物园。', '我们正在动物园。', '我们去过动物园。', '我们喜欢动物园。'], answer: 0, explain: "We'll = We will，将要去动物园。", tag: '句型' },
    { id: 'wi3-2', type: 'choice', q: '"Will we have breakfast at 7?" 是在问：', options: ['我们七点吃早餐吗？', '早餐吃什么？', '早餐好吃吗？', '几点了？'], answer: 0, explain: 'Will + 主语 + 动词原形...? 问将来会不会做某事。', tag: '句型' },
    { id: 'wi3-3', type: 'choice', q: '"breakfast" 指的是：', options: ['早餐', '午餐', '晚餐', '夜宵'], answer: 0, explain: 'breakfast 早餐，break（打破）fast（禁食），睡醒第一餐。', tag: '单词' },
    { id: 'wi3-4', type: 'choice', q: '"Will we...?" 的肯定回答是：', options: ['Yes, we will.', 'Yes, we do.', 'Yes, we are.', 'Yes, we can.'], answer: 0, explain: 'Will 问，will 答：Yes, we will. / No, we won\'t.。', tag: '句型' },
    { id: 'wi3-5', type: 'judge', q: '"zoo" 是"公园"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'zoo 是动物园，park 才是公园。', tag: '单词' },
    { id: 'wi3-6', type: 'choice', q: '在动物园里能看到：', options: ['lions and monkeys', 'desks and chairs', 'bread and milk', 'pens and books'], answer: 0, explain: 'zoo 里都是动物：lion 狮子、monkey 猴子、tiger 老虎。', tag: '单词' },
    { id: 'wi3-7', type: 'choice', q: '中午吃的"午餐"是：', options: ['lunch', 'breakfast', 'dinner', 'fruit'], answer: 0, explain: 'lunch 午餐，have lunch 吃午餐。', tag: '单词' },
    { id: 'wi3-8', type: 'judge', q: 'Will 开头的疑问句用 Yes 或 No 来回答。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Will you go? — Yes, I will. / No, I won\'t.。', tag: '语法' },
    { id: 'wi3-9', type: 'choice', q: '晚上吃的"晚餐"是：', options: ['dinner', 'breakfast', 'lunch', 'snack'], answer: 0, explain: 'dinner 晚餐（正餐），have dinner 吃晚饭。', tag: '单词' },
    { id: 'wi3-10', type: 'judge', q: '一日三餐要按时吃，早餐不能省。', options: ['√ 对', '✗ 错'], answer: 0, explain: '按时吃三餐，身体才健康，早餐尤其重要！', tag: '习惯养成' },
  ],
  wi4: [
    { id: 'wi4-1', type: 'choice', q: '"We\'ll pick fruit." 的意思是：', options: ['我们将要去摘水果。', '我们喜欢水果。', '我们正在吃水果。', '水果很甜。'], answer: 0, explain: "pick 摘、采，We'll pick fruit. 我们要去摘果子。", tag: '句型' },
    { id: 'wi4-2', type: 'choice', q: '"pick" 的意思是：', options: ['摘；采', '踢', '买', '洗'], answer: 0, explain: 'pick 摘：pick apples 摘苹果。', tag: '单词' },
    { id: 'wi4-3', type: 'choice', q: '数字 13 的英文是：', options: ['thirteen', 'thirty', 'three', 'fourteen'], answer: 0, explain: 'thirteen 13，three + teen。30 是 thirty，别混！', tag: '数字' },
    { id: 'wi4-4', type: 'choice', q: '数字 14 的英文是：', options: ['fourteen', 'forty', 'four', 'fifteen'], answer: 0, explain: 'fourteen 14，four + teen。', tag: '数字' },
    { id: 'wi4-5', type: 'choice', q: '数字 15 的英文是：', options: ['fifteen', 'fifty', 'five', 'sixteen'], answer: 0, explain: 'fifteen 15（five 变 fif + teen），50 是 fifty。', tag: '数字' },
    { id: 'wi4-6', type: 'judge', q: '"thirteen" 是 30 的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'thirteen 是 13，thirty 是 30，-teen 和 -ty 大不同！', tag: '数字' },
    { id: 'wi4-7', type: 'choice', q: '红红的"苹果"是：', options: ['apple', 'banana', 'orange', 'pear'], answer: 0, explain: 'apple 苹果，an apple a day 一天一个苹果。', tag: '单词' },
    { id: 'wi4-8', type: 'choice', q: '数字 16 的英文是：', options: ['sixteen', 'sixty', 'six', 'seventeen'], answer: 0, explain: 'sixteen 16，six + teen。', tag: '数字' },
    { id: 'wi4-9', type: 'judge', q: '13 到 19 的英文数字都以 -teen 结尾。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'thirteen、fourteen、fifteen… nineteen，都有 teen。', tag: '数字' },
    { id: 'wi4-10', type: 'choice', q: '"fruit" 指的是：', options: ['水果', '蔬菜', '花朵', '树木'], answer: 0, explain: 'fruit 水果，apples、bananas 都是 fruit。', tag: '单词' },
  ],
  wi5: [
    { id: 'wi5-1', type: 'choice', q: '"Will you take your ball tomorrow?" 是在问：', options: ['你明天会带球来吗？', '你的球在哪里？', '你喜欢什么球？', '球是新的吗？'], answer: 0, explain: 'Will you + 动词原形...? 问对方将来做不做。', tag: '句型' },
    { id: 'wi5-2', type: 'choice', q: '"tomorrow" 的意思是：', options: ['明天', '今天', '昨天', '每天'], answer: 0, explain: 'tomorrow 明天，See you tomorrow! 明天见！', tag: '单词' },
    { id: 'wi5-3', type: 'choice', q: '"On Monday, I\'ll go swimming." 的意思是：', options: ['周一我将去游泳。', '我周一喜欢游泳。', '我正在游泳。', '周一我游过泳。'], answer: 0, explain: '在星期几用 on：On Monday + I\'ll go swimming.。', tag: '句型' },
    { id: 'wi5-4', type: 'choice', q: '"Monday" 是：', options: ['星期一', '星期天', '星期五', '月份'], answer: 0, explain: 'Monday 星期一，一周的开始（英式习惯）。', tag: '单词' },
    { id: 'wi5-5', type: 'judge', q: '"Sunday" 是"星期一"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'Sunday 是星期日，Monday 才是星期一。', tag: '单词' },
    { id: 'wi5-6', type: 'choice', q: '星期五是：', options: ['Friday', 'Funday', 'Monday', 'Thursday'], answer: 0, explain: 'Friday 星期五，快到周末啦！', tag: '单词' },
    { id: 'wi5-7', type: 'choice', q: '"take" 在 "take your ball" 里的意思是：', options: ['带上；带去', '拿走别人的', '修理', '观看'], answer: 0, explain: 'take 带上：take your ball to school 把球带到学校。', tag: '单词' },
    { id: 'wi5-8', type: 'judge', q: '星期的单词开头字母要大写。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Monday、Tuesday……首字母都大写，这是规矩！', tag: '语法' },
    { id: 'wi5-9', type: 'choice', q: '"week" 指的是：', options: ['星期；一周', '一个月', '一年', '一天'], answer: 0, explain: 'week 一周，seven days in a week 一周七天。', tag: '单词' },
    { id: 'wi5-10', type: 'judge', q: '一周有七天。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Monday 到 Sunday，七天一周轮流转。', tag: '常识' },
  ],
  wi6: [
    { id: 'wi6-1', type: 'choice', q: '"Here are his hands." 的意思是：', options: ['这是他的两只手。', '这是他的头。', '这是你的手。', '他有两只脚。'], answer: 0, explain: 'Here are + 复数：这是（些）……', tag: '句型' },
    { id: 'wi6-2', type: 'choice', q: '"hand" 的复数是：', options: ['hands', 'handes', 'hand', 'handies'], answer: 0, explain: 'hand 直接加 s 变 hands，两只手。', tag: '语法' },
    { id: 'wi6-3', type: 'choice', q: '"There is a small monster." 的意思是：', options: ['有一个小怪物。', '怪物很小很小。', '有三只怪物。', '怪物在山洞里。'], answer: 0, explain: 'There is + 单数名词：有一个……', tag: '句型' },
    { id: 'wi6-4', type: 'judge', q: '"monster" 是"猴子"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'monster 是怪物，monkey 才是猴子。', tag: '单词' },
    { id: 'wi6-5', type: 'choice', q: '"small" 的意思是：', options: ['小的', '大的', '长的', '高的'], answer: 0, explain: 'small 小的，a small monster 一个小怪物。', tag: '单词' },
    { id: 'wi6-6', type: 'choice', q: '"两只眼睛"应该说：', options: ['two eyes', 'two eye', 'two noses', 'two ears'], answer: 0, explain: 'eye 是单数，两只眼睛 eye 加 s：two eyes。', tag: '语法' },
    { id: 'wi6-7', type: 'judge', q: 'There is 后面要接单数名词。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'There is a cat. 单数用 is；复数用 There are。', tag: '语法' },
    { id: 'wi6-8', type: 'choice', q: '怪物圆圆的"头"是：', options: ['head', 'hand', 'hair', 'hat'], answer: 0, explain: 'head 头，Touch your head. 摸摸头。', tag: '单词' },
    { id: 'wi6-9', type: 'choice', q: '肩膀下面长长的"手臂"是：', options: ['arm', 'leg', 'foot', 'hand'], answer: 0, explain: 'arm 手臂，two arms 两条手臂。', tag: '单词' },
    { id: 'wi6-10', type: 'judge', q: '"Here are his feet." 里用 are，是因为 feet 是复数。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'foot 的复数是 feet（不规则变化），复数配 are。', tag: '语法' },
  ],
  wi7: [
    { id: 'wi7-1', type: 'choice', q: '"Are there many children in your class?" 是在问：', options: ['你班里孩子多吗？', '你的班级在哪？', '班里孩子是谁？', '你喜欢班级吗？'], answer: 0, explain: 'Are there + 复数...? 问"有……吗"。', tag: '句型' },
    { id: 'wi7-2', type: 'choice', q: '"children" 是哪个词的复数？', options: ['child', 'childrens', 'kid', 'class'], answer: 0, explain: 'child 孩子 → children 孩子们，不规则复数。', tag: '语法' },
    { id: 'wi7-3', type: 'choice', q: '"How many apples are there in the box?" 是在问：', options: ['盒子里有多少个苹果？', '苹果多少钱？', '苹果好吃吗？', '盒子是谁的？'], answer: 0, explain: 'How many + 复数 + are there...? 问有多少个。', tag: '句型' },
    { id: 'wi7-4', type: 'choice', q: '"Are there...?" 的否定回答是：', options: ["No, there aren't.", 'No, it isn\'t.', "No, there isn't.", 'No, they aren\'t.'], answer: 0, explain: 'Are there 问，there aren\'t 答。', tag: '句型' },
    { id: 'wi7-5', type: 'judge', q: '"How many apples are there?" 可以回答 "There are ten."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '问有多少，用 There are + 数字回答。', tag: '句型' },
    { id: 'wi7-6', type: 'choice', q: '"class" 指的是：', options: ['班级；课堂', '学校', '老师', '书本'], answer: 0, explain: 'class 班级，Class 3 三班，in class 在课堂上。', tag: '单词' },
    { id: 'wi7-7', type: 'choice', q: '"many" 后面的名词要用：', options: ['复数', '单数', '原形', '过去式'], answer: 0, explain: 'many + 复数：many children、many apples。', tag: '语法' },
    { id: 'wi7-8', type: 'judge', q: 'there be 的疑问句要把 be 动词（is/are）放到句首。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'There is... → Is there...? There are... → Are there...?。', tag: '语法' },
    { id: 'wi7-9', type: 'choice', q: '装东西的"盒子"是：', options: ['box', 'bag', 'basket', 'bottle'], answer: 0, explain: 'box 盒子，in the box 在盒子里。', tag: '单词' },
    { id: 'wi7-10', type: 'judge', q: '想知道教室里有多少张桌子，可以用 "How many desks are there?" 来问。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'How many + desks（复数）+ are there?。', tag: '句型' },
  ],
  wi8: [
    { id: 'wi8-1', type: 'choice', q: '"He works hard." 的意思是：', options: ['他学习/工作很努力。', '他很辛苦。', '他在干活。', '他不想工作。'], answer: 0, explain: 'work 工作/学习，hard 努力地：work hard 努力干。', tag: '句型' },
    { id: 'wi8-2', type: 'choice', q: '"works" 加了 s 是因为：', options: ['he 是第三人称单数', 'work 是复数', '句子很长', '习惯写法'], answer: 0, explain: '一般现在时，he/she/it 作主语动词加 s。', tag: '语法' },
    { id: 'wi8-3', type: 'choice', q: '"She\'s quite good at English." 的意思是：', options: ['她英语相当好。', '她想学英语。', '她在上英语课。', '她不喜欢英语。'], answer: 0, explain: 'be good at 擅长，quite 相当、很。', tag: '句型' },
    { id: 'wi8-4', type: 'choice', q: '"be good at" 的意思是：', options: ['擅长于', '对……好', '喜欢', '开始做'], answer: 0, explain: 'be good at + 事情，擅长：good at maths 擅长数学。', tag: '短语' },
    { id: 'wi8-5', type: 'judge', q: '"He works hard." 里动词不加 s。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'he 是三单，动词要加 s：He works. 不加 s 就错啦。', tag: '语法' },
    { id: 'wi8-6', type: 'choice', q: '"hard" 在 "work hard" 里的意思是：', options: ['努力地', '困难的', '坚硬的', '硬的糖'], answer: 0, explain: 'hard 既可形容"困难"，也可作副词"努力地"。', tag: '单词' },
    { id: 'wi8-7', type: 'choice', q: '说"我擅长画画"，应该说：', options: ["I'm good at drawing.", 'I good at draw.', 'I am draw well.', 'I like draw.'], answer: 0, explain: 'be good at + 动词ing：good at drawing。', tag: '句型' },
    { id: 'wi8-8', type: 'judge', q: '学习要像课文中的人物一样努力，才能天天进步。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Work hard, play hard! 认真学习，快乐游戏！', tag: '习惯养成' },
    { id: 'wi8-9', type: 'choice', q: '"quite" 的意思是：', options: ['相当；很', '安静的', '快的', '正确的'], answer: 0, explain: 'quite 相当：quite good 相当好，quite big 相当大。', tag: '单词' },
    { id: 'wi8-10', type: 'judge', q: '每天坚持读英语、听英语，英语会越来越好。', options: ['√ 对', '✗ 错'], answer: 0, explain: '一天进步一点点，坚持就是胜利！', tag: '习惯养成' },
  ],
  wi9: [
    { id: 'wi9-1', type: 'choice', q: '"They were very young." 的意思是：', options: ['（那时）他们非常小。', '他们现在很小。', '他们想要长大。', '他们很有趣。'], answer: 0, explain: 'were 是 are 的过去式，说的是过去的样子。', tag: '句型' },
    { id: 'wi9-2', type: 'choice', q: '"were" 是哪个词的过去式？', options: ['are', 'is', 'am', 'was'], answer: 0, explain: 'are → were（你们/我们/他们），is/am → was。', tag: '语法' },
    { id: 'wi9-3', type: 'choice', q: '"was" 是哪两个词的过去式？', options: ['is 和 am', 'are 和 is', 'am 和 be', 'do 和 does'], answer: 0, explain: 'I was... / He was...，单数过去都用 was。', tag: '语法' },
    { id: 'wi9-4', type: 'judge', q: '"He was in Hong Kong." 意思是"他现在在香港。"。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'was 表示过去：他（当时）在香港，现在不一定哦。', tag: '句型' },
    { id: 'wi9-5', type: 'choice', q: '说"我昨天在家"，应该说：', options: ['I was at home yesterday.', 'I am at home yesterday.', 'I were at home.', 'I like home.'], answer: 0, explain: '过去的事用 was：I was at home yesterday.。', tag: '句型' },
    { id: 'wi9-6', type: 'choice', q: '"young"（年轻的）的反义词是：', options: ['old', 'new', 'small', 'little'], answer: 0, explain: 'young 年轻 ↔ old 年老；new 新 ↔ old 旧。', tag: '单词' },
    { id: 'wi9-7', type: 'judge', q: 'was 和 were 用来描述过去的状态。', options: ['√ 对', '✗ 错'], answer: 0, explain: '照片里、故事里过去的样子，就用 was/were 说。', tag: '语法' },
    { id: 'wi9-8', type: 'choice', q: '"他那时个子很矮"应该说：', options: ['He was short then.', 'He is short.', 'He were short.', 'He likes short.'], answer: 0, explain: 'was + 形容词：He was short then.（then 那时）。', tag: '句型' },
    { id: 'wi9-9', type: 'judge', q: '主语是 they（他们），过去时要用 were。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'they/we/you + were；he/she/it/I + was。', tag: '语法' },
    { id: 'wi9-10', type: 'choice', q: '"then" 在 "He was short then." 里的意思是：', options: ['那时', '然后', '所以', '但是'], answer: 0, explain: 'then 那时（也可指"然后"），句尾常表"当时"。', tag: '单词' },
  ],
  wi10: [
    { id: 'wi10-1', type: 'choice', q: '"Were you on the second floor?" 是在问：', options: ['你（当时）在二楼吗？', '你经常去二楼吗？', '二楼在哪儿？', '你喜欢二楼吗？'], answer: 0, explain: 'Were you...? 问过去的状况。', tag: '句型' },
    { id: 'wi10-2', type: 'choice', q: '"second" 的意思是：', options: ['第二', '第一', '第三次', '两倍'], answer: 0, explain: 'first 第一、second 第二、third 第三——序数词表顺序。', tag: '单词' },
    { id: 'wi10-3', type: 'choice', q: '"It was there." 的意思是：', options: ['它（当时）在那里。', '它现在在这里。', '它要去那里。', '它是这里的。'], answer: 0, explain: 'was + there 过去在那里。', tag: '句型' },
    { id: 'wi10-4', type: 'judge', q: '"first" 是"第二"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'first 是第一，second 才是第二。', tag: '单词' },
    { id: 'wi10-5', type: 'choice', q: '"Were you...?" 的否定回答是：', options: ["No, I wasn't.", "No, I didn't.", "No, I'm not.", "No, I aren't."], answer: 0, explain: 'Were you...? — Yes, I was. / No, I wasn\'t.。', tag: '句型' },
    { id: 'wi10-6', type: 'choice', q: '"floor" 指的是：', options: ['楼层；地板', '天花板', '楼梯', '门'], answer: 0, explain: 'floor 楼层，on the second floor 在二楼（英式说法）。', tag: '单词' },
    { id: 'wi10-7', type: 'judge', q: 'Were 开头的疑问句用 Yes 或 No 回答。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Were you happy? — Yes, I was.。', tag: '语法' },
    { id: 'wi10-8', type: 'choice', q: '"三楼"（英式）应该说：', options: ['the third floor', 'the three floor', 'the third floors', 'floor three'], answer: 0, explain: 'third 第三，the third floor 三楼，floor 不加 s。', tag: '语法' },
    { id: 'wi10-9', type: 'judge', q: 'first、second、third 叫序数词，表示顺序。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'one two three 是数数，first second third 是排第几。', tag: '语法' },
    { id: 'wi10-10', type: 'choice', q: '描述过去在哪里，要用：', options: ['was / were', 'is / are', 'will', 'do / does'], answer: 0, explain: '过去的状态用 was（单数）/ were（复数）。', tag: '语法' },
  ],
}
