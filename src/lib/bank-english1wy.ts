// 外研版新标准英语（一年级起点）一年级上册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）一年级上册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq1s 核对）：
//   M1 Hello!/How are you? · M2 What's your name?/I'm a boy. · M3 Sit down!/Point to the window!
//   M4 It's red!/It's a red dog. · M5 This is our teacher./That is a yellow cat. · M6 What's this?/It's my ruler.
//   M7 Is it a dog?/It's a yellow cat. · M8 How many?/How many pink balls? · M9 How old are you?/Happy birthday!
//   M10 That is my father./That is his car.
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wa

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
    id: 'wa1',
    name: 'Module 1',
    title: 'Hello!',
    emoji: '👋',
    color: 'amber',
    lessons: ['Hello!', 'How are you?', 'Say hello'],
    intro: '挥挥小手说 Hello，认识新朋友，学会礼貌问好！',
  },
  {
    id: 'wa2',
    name: 'Module 2',
    title: "What's your name?",
    emoji: '🙋',
    color: 'orange',
    lessons: ["What's your name?", "I'm a boy.", 'Boy and girl'],
    intro: '大大方方说出自己的名字，认识男孩和女孩！',
  },
  {
    id: 'wa3',
    name: 'Module 3',
    title: 'Sit down!',
    emoji: '🪑',
    color: 'rose',
    lessons: ['Sit down!', 'Point to the window!', 'Classroom English'],
    intro: '听懂课堂小口令，起立坐下指一指，做课堂小主人！',
  },
  {
    id: 'wa4',
    name: 'Module 4',
    title: "It's red!",
    emoji: '🌈',
    color: 'lime',
    lessons: ["It's red!", "It's a red dog.", 'Colours around us'],
    intro: '红黄蓝绿真好看，用英语说出身边的颜色！',
  },
  {
    id: 'wa5',
    name: 'Module 5',
    title: 'This is our teacher.',
    emoji: '👩‍🏫',
    color: 'teal',
    lessons: ['This is our teacher.', 'That is a yellow cat.', 'This and that'],
    intro: 'This 指近处、That 指远处，介绍老师和朋友！',
  },
  {
    id: 'wa6',
    name: 'Module 6',
    title: "What's this?",
    emoji: '📏',
    color: 'sky',
    lessons: ["What's this?", "It's my ruler.", 'School things'],
    intro: '问一问、答一答，认识书包里的文具朋友！',
  },
  {
    id: 'wa7',
    name: 'Module 7',
    title: 'Is it a dog?',
    emoji: '🐶',
    color: 'violet',
    lessons: ['Is it a dog?', "It's a yellow cat.", 'Animal friends'],
    intro: '猜一猜它是谁，和小猫小狗熊猫做朋友！',
  },
  {
    id: 'wa8',
    name: 'Module 8',
    title: 'How many?',
    emoji: '🔢',
    color: 'pink',
    lessons: ['How many?', 'How many pink balls?', 'Numbers 1-10'],
    intro: 'one two three…数一数，数字宝宝真有趣！',
  },
  {
    id: 'wa9',
    name: 'Module 9',
    title: 'How old are you?',
    emoji: '🎂',
    color: 'indigo',
    lessons: ['How old are you?', 'Happy birthday!', 'Age and birthday'],
    intro: '说出自己的年龄，唱响生日快乐歌！',
  },
  {
    id: 'wa10',
    name: 'Module 10',
    title: 'That is my father.',
    emoji: '👨‍👩‍👧',
    color: 'emerald',
    lessons: ['That is my father.', 'That is his car.', 'My family'],
    intro: '爸爸妈妈和爷爷奶奶，我爱我的家！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wa1: [
    { id: 'wa1-1', type: 'choice', q: '早上见到老师和同学，打招呼说：', options: ['Hello!', 'Goodbye!', 'Thank you!', 'Sorry!'], answer: 0, explain: 'Hello! 你好！是见面打招呼最常用的说法，也可以说 Hi!。', tag: '打招呼' },
    { id: 'wa1-2', type: 'choice', q: '"Hello, I\'m Amy." 的意思是：', options: ['你好，我是艾米。', '你好，艾米再见。', '你好，这是艾米。', '艾米，谢谢你。'], answer: 0, explain: 'I\'m + 名字，用来介绍自己：I\'m Amy. 我是艾米。', tag: '自我介绍' },
    { id: 'wa1-3', type: 'choice', q: '想问朋友"你好吗"，应该说：', options: ['How are you?', "What's your name?", 'How old are you?', 'Goodbye!'], answer: 0, explain: 'How are you? 你好吗？是关心对方的问候语。', tag: '句型' },
    { id: 'wa1-4', type: 'choice', q: '别人问 "How are you?"，你可以回答：', options: ["I'm fine, thank you.", 'Goodbye!', 'Hello!', 'Thank you!'], answer: 0, explain: "I'm fine, thank you. 我很好，谢谢你。这是最常用的回答。", tag: '句型' },
    { id: 'wa1-5', type: 'judge', q: '"Good morning!" 是早上问好用的。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Good morning! 早上好！中午用 Good afternoon!，晚上用 Good evening!。', tag: '打招呼' },
    { id: 'wa1-6', type: 'choice', q: '放学和老师同学说再见，应该说：', options: ['Goodbye!', 'Hello!', 'Good morning!', 'Thank you!'], answer: 0, explain: 'Goodbye! 再见！道别时说，也可以说 Bye-bye! 或 See you!。', tag: '打招呼' },
    { id: 'wa1-7', type: 'choice', q: '"Hi!" 的意思和哪一个最接近？', options: ['Hello!', 'Bye!', 'Sorry!', 'No!'], answer: 0, explain: 'Hi! 和 Hello! 都是"你好！"，Hi 更随意亲切。', tag: '打招呼' },
    { id: 'wa1-8', type: 'choice', q: '第一次见面介绍自己，可以说：', options: ["I'm Sam.", 'You are Sam.', 'Point to Sam.', 'Sit down, Sam.'], answer: 0, explain: "I'm Sam. 我是萨姆。I'm = I am，介绍自己的名字。", tag: '自我介绍' },
    { id: 'wa1-9', type: 'judge', q: '打招呼时面带微笑、看着对方，是有礼貌的表现。', options: ['√ 对', '✗ 错'], answer: 0, explain: '打招呼时微笑、眼睛看着对方，会让别人觉得你很有礼貌！', tag: '习惯养成' },
    { id: 'wa1-10', type: 'choice', q: '睡觉前和爸爸妈妈道晚安，可以说：', options: ['Good night!', 'Good morning!', 'How are you?', 'Hello!'], answer: 0, explain: 'Good night! 晚安！是睡前道别用语，别和 Good morning 记混哦。', tag: '打招呼' },
  ],
  wa2: [
    { id: 'wa2-1', type: 'choice', q: '想知道对方叫什么名字，应该问：', options: ["What's your name?", 'How are you?', 'How old are you?', 'Goodbye!'], answer: 0, explain: "What's your name? 你叫什么名字？回答可以说 My name is...。", tag: '句型' },
    { id: 'wa2-2', type: 'choice', q: '"What\'s your name?" 的回答是：', options: ['My name is Sam.', "I'm fine.", "I'm nine.", 'Goodbye!'], answer: 0, explain: 'My name is Sam. 我的名字叫萨姆。也可以直接说 I\'m Sam.。', tag: '句型' },
    { id: 'wa2-3', type: 'choice', q: '"boy" 指的是：', options: ['男孩', '女孩', '老师', '爸爸'], answer: 0, explain: 'boy 男孩，girl 女孩，I\'m a boy. 我是一个男孩。', tag: '单词' },
    { id: 'wa2-4', type: 'choice', q: '"girl" 指的是：', options: ['女孩', '男孩', '妈妈', '老师'], answer: 0, explain: 'girl 女孩，如：Lily is a girl. 莉莉是一个女孩。', tag: '单词' },
    { id: 'wa2-5', type: 'judge', q: '"I\'m a boy." 意思是"我是一个女孩"。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'boy 是男孩，I\'m a boy. 我是男孩；女孩要说 I\'m a girl.。', tag: '句型' },
    { id: 'wa2-6', type: 'choice', q: '"I\'m" 是哪两个词的缩写？', options: ['I am', 'I is', 'I are', 'It is'], answer: 0, explain: "I'm = I am，意思是“我是”，后面接名字或身份。", tag: '语法' },
    { id: 'wa2-7', type: 'choice', q: '说"我是女孩"，应该用：', options: ["I'm a girl.", "I'm a boy.", "You're a girl.", 'It is a girl.'], answer: 0, explain: "说自己用 I'm：I'm a girl. 我是女孩；说自己性别要选对单词哦。", tag: '句型' },
    { id: 'wa2-8', type: 'choice', q: '老师问你叫什么名字，你应该：', options: ['大声清楚地回答', '低着头不说话', '跑出教室', '和同桌聊天'], answer: 0, explain: '被问到名字时，大声说 My name is...，声音响亮有自信！', tag: '习惯养成' },
    { id: 'wa2-9', type: 'judge', q: '问别人名字时，要有礼貌地看着对方问。', options: ['√ 对', '✗ 错'], answer: 0, explain: '问名字时看着对方、语气温和，才是懂礼貌的好孩子。', tag: '习惯养成' },
    { id: 'wa2-10', type: 'choice', q: '"What\'s" 是 "What is" 的缩写，"What\'s this?" 意思是：', options: ['这是什么？', '你是谁？', '你好吗？', '几个？'], answer: 0, explain: "What's this? 这是什么？回答用 It's a...。", tag: '句型' },
  ],
  wa3: [
    { id: 'wa3-1', type: 'choice', q: '老师说 "Sit down, please." 是让大家：', options: ['坐下', '起立', '看书', '出去'], answer: 0, explain: 'Sit down, please. 请坐下；Stand up, please. 请起立。', tag: '课堂口令' },
    { id: 'wa3-2', type: 'choice', q: '"Stand up!" 的意思是：', options: ['起立', '坐下', '安静', '排队'], answer: 0, explain: 'Stand up! 起立！上课问好时老师会说 Stand up, please.。', tag: '课堂口令' },
    { id: 'wa3-3', type: 'choice', q: '"Point to the window!" 的意思是：', options: ['指向窗户', '关上窗户', '打开门', '擦黑板'], answer: 0, explain: 'Point to... 指向……，window 窗户，Point to the window! 指向窗户！', tag: '课堂口令' },
    { id: 'wa3-4', type: 'choice', q: '教室里透光的"窗户"是：', options: ['window', 'door', 'desk', 'chair'], answer: 0, explain: 'window 窗户，door 门，一扇窗一扇门，单词要分清。', tag: '单词' },
    { id: 'wa3-5', type: 'judge', q: '上课铃响了要快快坐好，认真听老师讲课。', options: ['√ 对', '✗ 错'], answer: 0, explain: '铃响回座位坐好，安静听讲，课堂好习惯从小养成。', tag: '习惯养成' },
    { id: 'wa3-6', type: 'choice', q: '进出教室经过的"门"是：', options: ['door', 'window', 'desk', 'chair'], answer: 0, explain: 'door 门，Open the door. 开门；Close the door. 关门。', tag: '单词' },
    { id: 'wa3-7', type: 'choice', q: '老师说 "Point to the desk."，你应该：', options: ['伸出手指向课桌', '闭上眼睛', '跑出教室', '大声唱歌'], answer: 0, explain: 'Point to the desk. 指向课桌。听清口令再行动哦。', tag: '课堂口令' },
    { id: 'wa3-8', type: 'choice', q: '我们写字用的"课桌"是：', options: ['desk', 'chair', 'bag', 'window'], answer: 0, explain: 'desk 课桌，chair 椅子，坐在椅子上趴在桌上写字。', tag: '单词' },
    { id: 'wa3-9', type: 'judge', q: '"Point" 是"指"的意思，Point to the door 就是"指向门"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'point 指，point to + 东西，就是指向那个东西。', tag: '短语理解' },
    { id: 'wa3-10', type: 'choice', q: '老师说"请看黑板"，应该说：', options: ['Look at the blackboard!', 'Sit down!', 'Stand up!', 'Goodbye!'], answer: 0, explain: 'Look at... 看……，Look at the blackboard. 看黑板。', tag: '课堂口令' },
  ],
  wa4: [
    { id: 'wa4-1', type: 'choice', q: '"red" 是什么颜色？', options: ['红色', '蓝色', '黄色', '绿色'], answer: 0, explain: 'red 红色，像太阳、国旗和红苹果的颜色。', tag: '颜色' },
    { id: 'wa4-2', type: 'choice', q: '天空和大海的"蓝色"是：', options: ['blue', 'green', 'red', 'yellow'], answer: 0, explain: 'blue 蓝色，The sky is blue. 天空是蓝色的。', tag: '颜色' },
    { id: 'wa4-3', type: 'choice', q: '小草和树叶的"绿色"是：', options: ['green', 'red', 'blue', 'black'], answer: 0, explain: 'green 绿色，The tree is green. 大树是绿色的。', tag: '颜色' },
    { id: 'wa4-4', type: 'choice', q: '"yellow" 是哪种颜色？', options: ['黄色', '紫色', '白色', '黑色'], answer: 0, explain: 'yellow 黄色，像香蕉、柠檬和太阳的颜色。', tag: '颜色' },
    { id: 'wa4-5', type: 'judge', q: '"It\'s a red dog." 意思是"它是一只红色的狗"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'red 红色 + dog 狗，a red dog 一只红色的狗，颜色词放在东西前面。', tag: '句型' },
    { id: 'wa4-6', type: 'choice', q: '香蕉是黄色的，用英语说：', options: ['The banana is yellow.', 'The banana is red.', 'The banana is blue.', 'The banana is green.'], answer: 0, explain: 'yellow 黄色，The banana is yellow. 香蕉是黄色的。', tag: '句型' },
    { id: 'wa4-7', type: 'choice', q: '"It\'s blue." 的意思是：', options: ['它是蓝色的。', '它是红色的。', '它是一只狗。', '它是一本书。'], answer: 0, explain: "It's blue. 它是蓝色的。It's = It is。", tag: '句型' },
    { id: 'wa4-8', type: 'choice', q: '黑夜的颜色，"黑色"是：', options: ['black', 'white', 'blue', 'green'], answer: 0, explain: 'black 黑色，white 白色，一黑一白要分清。', tag: '颜色' },
    { id: 'wa4-9', type: 'judge', q: '描述颜色可以说 "It\'s + 颜色"，比如 It\'s green.。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'It\'s + 颜色词，就能说出东西的颜色，多练几遍就会啦！', tag: '句型' },
    { id: 'wa4-10', type: 'choice', q: '雪是白色的，"白色"是：', options: ['white', 'black', 'red', 'green'], answer: 0, explain: 'white 白色，The snow is white. 雪是白色的。', tag: '颜色' },
  ],
  wa5: [
    { id: 'wa5-1', type: 'choice', q: '"This is..." 用来介绍：', options: ['近处的人或物', '远处的人或物', '昨天的事', '明天的事'], answer: 0, explain: 'This is... 介绍近处的，That is... 指远处的，一近一远要分清。', tag: '语法' },
    { id: 'wa5-2', type: 'choice', q: '"That is..." 用来指：', options: ['远处的事物', '近处的事物', '自己的名字', '天气'], answer: 0, explain: 'That is... 那是……，指离我们远的东西。', tag: '语法' },
    { id: 'wa5-3', type: 'choice', q: '教我们读书写字的"老师"是：', options: ['teacher', 'doctor', 'driver', 'cook'], answer: 0, explain: 'teacher 老师，doctor 医生，driver 司机，职业单词要分清。', tag: '单词' },
    { id: 'wa5-4', type: 'choice', q: '"our" 的意思是：', options: ['我们的', '你们的', '他们的', '我的'], answer: 0, explain: 'our 我们的，This is our teacher. 这是我们的老师。', tag: '单词' },
    { id: 'wa5-5', type: 'judge', q: '"That is a yellow cat." 意思是"那是一只黄色的猫"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'That is + 远处的东西，yellow cat 黄猫，合起来就是"那是一只黄猫"。', tag: '句型' },
    { id: 'wa5-6', type: 'choice', q: '向朋友介绍近处的妈妈，说：', options: ['This is my mum.', 'That is my mum.', 'It is a mum.', 'Point to mum.'], answer: 0, explain: '妈妈就在身边，用 This is my mum. 这是我的妈妈。', tag: '句型' },
    { id: 'wa5-7', type: 'choice', q: '"This is our school." 的意思是：', options: ['这是我们的学校。', '那是我们的学校。', '这是我的老师。', '这是我们的家。'], answer: 0, explain: 'school 学校，our school 我们的学校，This is... 这是……。', tag: '句型' },
    { id: 'wa5-8', type: 'choice', q: '指近处的一只小狗，说：', options: ['This is a dog.', 'That is a dog.', 'It is the dog.', 'They are dogs.'], answer: 0, explain: '近处的用 This is a dog. 这是只狗。', tag: '语法' },
    { id: 'wa5-9', type: 'judge', q: '介绍人或物时，this 指近处、that 指远处，要分清楚。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'this 近、that 远，就像"这个"和"那个"的区别。', tag: '语法' },
    { id: 'wa5-10', type: 'choice', q: '"teacher" 和 "student" 的意思分别是：', options: ['老师；学生', '学生；老师', '爸爸；妈妈', '医生；护士'], answer: 0, explain: 'teacher 老师，student 学生，教室里有老师也有学生。', tag: '单词' },
  ],
  wa6: [
    { id: 'wa6-1', type: 'choice', q: '想问"这是什么"，应该说：', options: ["What's this?", 'Who is this?', 'How are you?', 'Goodbye!'], answer: 0, explain: "What's this? 这是什么？回答用 It's a...。", tag: '句型' },
    { id: 'wa6-2', type: 'choice', q: '"It\'s my ruler." 的意思是：', options: ['它是我的尺子。', '它是你的尺子。', '它是我的书。', '它是他的钢笔。'], answer: 0, explain: 'my 我的，ruler 尺子，It\'s my ruler. 它是我的尺子。', tag: '句型' },
    { id: 'wa6-3', type: 'choice', q: '画直线用的"尺子"是：', options: ['ruler', 'bag', 'pen', 'book'], answer: 0, explain: 'ruler 尺子，用来画线量长短。', tag: '文具' },
    { id: 'wa6-4', type: 'choice', q: '装课本的"书包"是：', options: ['bag', 'ruler', 'desk', 'pen'], answer: 0, explain: 'bag 书包，schoolbag 也是书包，上学背着它。', tag: '文具' },
    { id: 'wa6-5', type: 'judge', q: '"pen" 是铅笔，"pencil" 是钢笔。', options: ['√ 对', '✗ 错'], answer: 1, explain: '反啦！pen 是钢笔（或圆珠笔），pencil 才是铅笔。', tag: '文具' },
    { id: 'wa6-6', type: 'choice', q: '"What\'s this?" 的回答是：', options: ["It's a book.", "I'm fine.", 'My name is Sam.', "I'm nine."], answer: 0, explain: "What's this? 这是什么？It's a book. 是一本书。", tag: '句型' },
    { id: 'wa6-7', type: 'choice', q: '我们天天读的"书"是：', options: ['book', 'bag', 'door', 'pen'], answer: 0, explain: 'book 书，Open your book. 打开你的书。', tag: '文具' },
    { id: 'wa6-8', type: 'choice', q: '"It\'s my bag." 中 "my" 的意思是：', options: ['我的', '你的', '他的', '她的'], answer: 0, explain: 'my 我的，your 你的，his 他的，her 她的。', tag: '单词' },
    { id: 'wa6-9', type: 'judge', q: '借用同学的文具时，要说 "Thank you." 表示感谢。', options: ['√ 对', '✗ 错'], answer: 0, explain: '用了别人的东西要说 Thank you.，还的时候可以说 Here you are.。', tag: '习惯养成' },
    { id: 'wa6-10', type: 'choice', q: '"pencil" 指的是：', options: ['铅笔', '钢笔', '橡皮', '尺子'], answer: 0, explain: 'pencil 铅笔，pencil box 铅笔盒，都在书包里。', tag: '文具' },
  ],
  wa7: [
    { id: 'wa7-1', type: 'choice', q: '"Is it a dog?" 是在：', options: ['猜它是不是狗', '夸奖它', '数数', '说颜色'], answer: 0, explain: 'Is it a...? 是在猜测：它是……吗？回答 Yes, it is. 或 No, it isn\'t.。', tag: '句型' },
    { id: 'wa7-2', type: 'choice', q: '"Is it a dog?" 的否定回答是：', options: ["No, it isn't.", 'Yes, it is.', 'It is a dog.', 'Hello!'], answer: 0, explain: "No, it isn't. 不，它不是。isn't = is not。", tag: '句型' },
    { id: 'wa7-3', type: 'choice', q: '汪汪叫的"小狗"是：', options: ['dog', 'cat', 'bird', 'panda'], answer: 0, explain: 'dog 小狗，The dog says woof woof! 小狗汪汪叫。', tag: '动物' },
    { id: 'wa7-4', type: 'choice', q: '喵喵叫的"小猫"是：', options: ['cat', 'dog', 'duck', 'chicken'], answer: 0, explain: 'cat 小猫，The cat says meow! 小猫喵喵叫。', tag: '动物' },
    { id: 'wa7-5', type: 'judge', q: '"Is it a cat?" 回答 "Yes, it is." 表示"是的，它是"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Yes, it is. 是的，它是；猜对了就这么回答。', tag: '句型' },
    { id: 'wa7-6', type: 'choice', q: '我们的国宝"大熊猫"是：', options: ['panda', 'dog', 'cat', 'bird'], answer: 0, explain: 'panda 熊猫，黑白相间爱吃竹子，是中国的国宝！', tag: '动物' },
    { id: 'wa7-7', type: 'choice', q: '会在天上飞的"小鸟"是：', options: ['bird', 'fish', 'dog', 'duck'], answer: 0, explain: 'bird 小鸟，The bird can fly. 小鸟会飞。', tag: '动物' },
    { id: 'wa7-8', type: 'choice', q: '"It\'s a yellow cat." 中 "yellow" 说明了小猫的：', options: ['颜色', '大小', '名字', '年龄'], answer: 0, explain: 'yellow 黄色，放在 cat 前面说明小猫的颜色。', tag: '颜色' },
    { id: 'wa7-9', type: 'judge', q: '猜东西时可以先问 "Is it a...?"，猜错了再换一个猜。', options: ['√ 对', '✗ 错'], answer: 0, explain: '用 Is it a...? 一边问一边猜，是个好玩的猜谜游戏！', tag: '句型' },
    { id: 'wa7-10', type: 'choice', q: '"Is it a panda?" 的肯定回答是：', options: ['Yes, it is.', "No, it isn't.", 'Yes, it isn\'t.', 'No, it is.'], answer: 0, explain: '肯定回答 Yes, it is.，否定回答 No, it isn\'t.，注意搭配哦。', tag: '句型' },
  ],
  wa8: [
    { id: 'wa8-1', type: 'choice', q: '想问"有多少个"，应该说：', options: ['How many?', 'How old?', "What's this?", 'Who is it?'], answer: 0, explain: 'How many? 多少？用来问数量，后面接东西：How many books?。', tag: '句型' },
    { id: 'wa8-2', type: 'choice', q: '"three" 是数字几？', options: ['3', '2', '5', '4'], answer: 0, explain: 'one, two, three…three 是 3。', tag: '数字' },
    { id: 'wa8-3', type: 'choice', q: '一只手有五根手指，"五"是：', options: ['five', 'four', 'six', 'ten'], answer: 0, explain: 'five 五，一只手 five fingers 五根手指。', tag: '数字' },
    { id: 'wa8-4', type: 'choice', q: '"eight" 是数字几？', options: ['8', '3', '6', '9'], answer: 0, explain: 'eight 8，7 是 seven，9 是 nine，别记混哦。', tag: '数字' },
    { id: 'wa8-5', type: 'judge', q: '"How many pink balls?" 意思是"有多少个粉色的球？"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'pink 粉色 + ball 球，How many + 东西复数，问数量。', tag: '句型' },
    { id: 'wa8-6', type: 'choice', q: '伸出十个手指头，"十"是：', options: ['ten', 'nine', 'eight', 'seven'], answer: 0, explain: 'ten 十，数到 ten 就满十个啦！', tag: '数字' },
    { id: 'wa8-7', type: 'choice', q: '"How many books?" 可以回答：', options: ['Six books.', "I'm fine.", "It's red.", 'My name is Lily.'], answer: 0, explain: '问数量就回答数字：Six books. 六本书。', tag: '句型' },
    { id: 'wa8-8', type: 'choice', q: '1、2、3 的英文是：', options: ['one, two, three', 'one, two, four', 'two, three, four', 'one, three, five'], answer: 0, explain: 'one 一，two 二，three 三，按顺序数一数。', tag: '数字' },
    { id: 'wa8-9', type: 'judge', q: '数字 7 的英文是 seven。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'seven 7，six 6，eight 8，7 在中间。', tag: '数字' },
    { id: 'wa8-10', type: 'choice', q: '"How many" 用来问：', options: ['数量', '颜色', '名字', '年龄'], answer: 0, explain: 'How many 问数量；问年龄用 How old；问名字用 What\'s your name。', tag: '句型' },
  ],
  wa9: [
    { id: 'wa9-1', type: 'choice', q: '想问朋友几岁了，应该说：', options: ['How old are you?', 'How many?', "What's your name?", 'How are you?'], answer: 0, explain: 'How old are you? 你几岁了？回答 I\'m + 数字。', tag: '句型' },
    { id: 'wa9-2', type: 'choice', q: '"I\'m six." 的意思是：', options: ['我六岁了。', '我有六个。', '我是六号。', '我六点起床。'], answer: 0, explain: 'How old 的回答：I\'m six. 我六岁。', tag: '句型' },
    { id: 'wa9-3', type: 'choice', q: '朋友过生日时，大家会说：', options: ['Happy birthday!', 'Happy New Year!', 'Good morning!', 'How old are you?'], answer: 0, explain: 'Happy birthday! 生日快乐！唱生日歌前先送上祝福。', tag: '祝福语' },
    { id: 'wa9-4', type: 'judge', q: '别人问年龄，回答 "I\'m seven." 表示"我七岁"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I\'m seven. 我七岁。注意 seven 是 7 哦。', tag: '句型' },
    { id: 'wa9-5', type: 'choice', q: '"Happy birthday to you!" 的意思是：', options: ['祝你生日快乐！', '祝你新年快乐！', '早上好！', '再见！'], answer: 0, explain: 'Happy birthday to you! 祝你生日快乐！生日歌就唱这句。', tag: '祝福语' },
    { id: 'wa9-6', type: 'choice', q: '收到生日礼物时，应该说：', options: ['Thank you!', 'Sorry!', 'Goodbye!', 'No!'], answer: 0, explain: '收到礼物说 Thank you! 谢谢你！有礼貌的孩子人人爱。', tag: '习惯养成' },
    { id: 'wa9-7', type: 'choice', q: '"How old are you?" 的回答是：', options: ["I'm eight.", "I'm fine.", "I'm a girl.", "It's a bag."], answer: 0, explain: "问年龄答年龄：I'm eight. 我八岁。", tag: '句型' },
    { id: 'wa9-8', type: 'judge', q: '同学生日时送上 Happy birthday 的祝福，是有礼貌的表现。', options: ['√ 对', '✗ 错'], answer: 0, explain: '主动送上祝福，朋友会很开心，你也会收获友谊！', tag: '习惯养成' },
    { id: 'wa9-9', type: 'choice', q: '蛋糕上的数字 9，英文是：', options: ['nine', 'five', 'ten', 'three'], answer: 0, explain: 'nine 9，nine candles 九根蜡烛。', tag: '数字' },
    { id: 'wa9-10', type: 'choice', q: '别人祝你 "Happy birthday!"，你应该说：', options: ['Thank you!', 'Happy birthday!', 'Goodbye!', "I'm fine."], answer: 0, explain: '别人祝福你，要说 Thank you! 表示感谢。', tag: '祝福语' },
  ],
  wa10: [
    { id: 'wa10-1', type: 'choice', q: '"father" 指的是：', options: ['爸爸', '妈妈', '爷爷', '老师'], answer: 0, explain: 'father 爸爸，也可以叫 dad；mother 妈妈。', tag: '家庭' },
    { id: 'wa10-2', type: 'choice', q: '"mother" 指的是：', options: ['妈妈', '爸爸', '奶奶', '阿姨'], answer: 0, explain: 'mother 妈妈，口语里常叫 mum，Mother\'s Day 是母亲节。', tag: '家庭' },
    { id: 'wa10-3', type: 'choice', q: '"That is my father." 的意思是：', options: ['那是我的爸爸。', '这是我的妈妈。', '那是他的车。', '这是我的家。'], answer: 0, explain: 'That is my father. 那是我的爸爸，指远处的家人。', tag: '句型' },
    { id: 'wa10-4', type: 'choice', q: '"That is his car." 中 "his" 的意思是：', options: ['他的', '她的', '我的', '你的'], answer: 0, explain: 'his 他的，her 她的：That is his car. 那是他的车。', tag: '单词' },
    { id: 'wa10-5', type: 'judge', q: '介绍家人可以说 "This is my..." 或 "That is my..."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '近处的用 This is my...，远处的用 That is my...。', tag: '句型' },
    { id: 'wa10-6', type: 'choice', q: '爸爸的妈妈，我该叫：', options: ['grandma', 'grandpa', 'mum', 'sister'], answer: 0, explain: 'grandma 奶奶/外婆，grandpa 爷爷/外公。', tag: '家庭' },
    { id: 'wa10-7', type: 'choice', q: '爸爸的爸爸，我该叫：', options: ['grandpa', 'grandma', 'father', 'brother'], answer: 0, explain: 'grandpa 爷爷/外公，Grandpa is kind. 爷爷很慈祥。', tag: '家庭' },
    { id: 'wa10-8', type: 'choice', q: '"mum" 的意思是：', options: ['妈妈', '爸爸', '兄弟', '姐妹'], answer: 0, explain: 'mum 是 mother 的口语说法，都是妈妈。', tag: '家庭' },
    { id: 'wa10-9', type: 'judge', q: '爱家人可以用英语说 "I love you."。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I love you. 我爱你。对爸爸妈妈说一句吧！', tag: '习惯养成' },
    { id: 'wa10-10', type: 'choice', q: '指着远处的那位老爷爷说"那是他爷爷"：', options: ['That is his grandpa.', 'This is his grandpa.', 'That is her grandpa.', 'It is grandpa.'], answer: 0, explain: '远处用 That is，his 他的：That is his grandpa. 那是他爷爷。', tag: '句型' },
  ],
}
