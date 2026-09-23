// 沪教版（五四学制）英语 一年级上册（2024 新教材·2026 秋使用版）随堂知识点题库
// 教材：义务教育教科书（五·四学制）英语 一年级上册 · 上海教育出版社（国家教材委员会 2024 审核通过）
// 目录（沪学习官方 App 目录 + 教学视频课程逐课核对）：
//   Starter: Our families and friends / Our teachers / We learn English!
//   Unit 1 Greetings / Unit 2 New friends / Unit 3 My schoolbag / Unit 4 My classroom
//   IPA (1) My school life（语音角·校园）
//   Unit 5 Lovely faces / Unit 6 My family / Unit 7 Animals in our lives
//   IPA (2) My home life（语音角·家庭）
//   Unit 8 Have a go! / Unit 9 Yes, I can! / Unit 10 Fun numbers
//   IPA (3) A better me（语音角·成长）
// 每单元一关，每关 10 题，共 14 关 140 题，题目 id 前缀 i

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
    id: 'ist',
    name: 'Starter',
    title: '热身站',
    emoji: '🌟',
    color: 'amber',
    lessons: ['Our families and friends', 'Our teachers', 'We learn English!'],
    intro: '认识新老师新朋友，一起大声喊：We learn English!',
  },
  {
    id: 'i1',
    name: 'Unit 1',
    title: 'Greetings',
    emoji: '👋',
    color: 'cyan',
    lessons: ['This is the way we greet', 'The first day'],
    intro: 'Hello! Hi! 开学第一课，学会大大方方打招呼！',
  },
  {
    id: 'i2',
    name: 'Unit 2',
    title: 'New friends',
    emoji: '🤝',
    color: 'sky',
    lessons: ['Welcome, my friend!', 'Meeting Lily'],
    intro: 'This is my friend! 认识新朋友，做个有礼貌的小主人！',
  },
  {
    id: 'i3',
    name: 'Unit 3',
    title: 'My schoolbag',
    emoji: '🎒',
    color: 'teal',
    lessons: ['Pack my schoolbag', 'My pencil case'],
    intro: '铅笔、尺子、小书包，学习用品的英语名字都知道！',
  },
  {
    id: 'i4',
    name: 'Unit 4',
    title: 'My classroom',
    emoji: '🏫',
    color: 'lime',
    lessons: ['Clean our classroom', "Who's on duty"],
    intro: '教室是我们的家，值日打扫真开心！',
  },
  {
    id: 'iipa1',
    name: 'IPA (1)',
    title: '语音角·校园',
    emoji: '🗣️',
    color: 'violet',
    lessons: ['My school life'],
    intro: '字母宝宝来排队，读准音、记牢形，校园单词我会拼！',
  },
  {
    id: 'i5',
    name: 'Unit 5',
    title: 'Lovely faces',
    emoji: '😀',
    color: 'orange',
    lessons: ['Draw a lovely face', 'Finding faces'],
    intro: 'Draw a lovely face! 画张可爱的脸，五官单词全认识！',
  },
  {
    id: 'i6',
    name: 'Unit 6',
    title: 'My family',
    emoji: '👨‍👩‍👧',
    color: 'emerald',
    lessons: ['This is my family', 'I love my family'],
    intro: 'This is my family. 介绍家人，说我爱我家！',
  },
  {
    id: 'i7',
    name: 'Unit 7',
    title: 'Animals in our lives',
    emoji: '🐶',
    color: 'pink',
    lessons: ['Helpful animals', 'Helping Mira'],
    intro: '小狗看家、小猫捉鼠，动物是人类的好朋友！',
  },
  {
    id: 'iipa2',
    name: 'IPA (2)',
    title: '语音角·家庭',
    emoji: '🏠',
    color: 'rose',
    lessons: ['My home life'],
    intro: '在家里也能练英语，好听的发音送给家人听！',
  },
  {
    id: 'i8',
    name: 'Unit 8',
    title: 'Have a go!',
    emoji: '🐦',
    color: 'fuchsia',
    lessons: ['Two little blackbirds', 'You can do it!'],
    intro: 'Have a go! 大胆试一试，你能做到的！',
  },
  {
    id: 'i9',
    name: 'Unit 9',
    title: 'Yes, I can!',
    emoji: '💪',
    color: 'indigo',
    lessons: ['I can do it by myself!', 'I can do it for you!'],
    intro: 'Yes, I can! 自己的事情自己做，还能帮家人一把！',
  },
  {
    id: 'i10',
    name: 'Unit 10',
    title: 'Fun numbers',
    emoji: '🔢',
    color: 'amber',
    lessons: ['Fun in finding numbers', 'Fun in using numbers'],
    intro: 'one, two, three...数字藏在哪里？找一找，真好玩！',
  },
  {
    id: 'iipa3',
    name: 'IPA (3)',
    title: '语音角·成长',
    emoji: '🌟',
    color: 'cyan',
    lessons: ['A better me'],
    intro: '每天进步一点点，A better me，更好的我！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ist: [
    { id: 'ist-1', type: 'choice', q: '第一次见到新老师，可以热情地说：', options: ['Hello, teacher!', 'Good night!', 'Thank you!', 'Bye-bye!'], answer: 0, explain: '见到老师打招呼说 Hello, teacher!（你好，老师！）；Good night 是睡前说的。', tag: '情景' },
    { id: 'ist-2', type: 'choice', q: '"friend" 的意思是：', options: ['朋友', '书本', '老师', '学校'], answer: 0, explain: 'friend 朋友。学校里一起玩、互相帮助的人都是朋友。', tag: '词汇' },
    { id: 'ist-3', type: 'judge', q: '在英语课上要大胆开口说英语，说错了也没关系。', options: ['√ 对', '✗ 错'], answer: 0, explain: '学语言就要大声说，出错是学习的一部分，勇敢开口最棒！', tag: '学习习惯' },
    { id: 'ist-4', type: 'choice', q: '"family" 的意思是：', options: ['家庭', '教室', '游戏', '颜色'], answer: 0, explain: 'family 家庭，家里有爸爸、妈妈和我。', tag: '词汇' },
    { id: 'ist-5', type: 'choice', q: '上学路上遇到同学，打招呼说：', options: ['Hello!', 'Sorry!', 'Good night!', 'Thank you!'], answer: 0, explain: 'Hello! 是最常用的打招呼用语，任何时间都能用。', tag: '情景' },
    { id: 'ist-6', type: 'choice', q: '"teacher" 是指：', options: ['老师', '医生', '司机', '厨师'], answer: 0, explain: 'teacher 老师，教我们知识的都是老师。', tag: '词汇' },
    { id: 'ist-7', type: 'choice', q: '英语的"你好"是：', options: ['Hello', 'Bye', 'No', 'OK'], answer: 0, explain: 'Hello 你好，Hi 也是"你好"，更随意一些。', tag: '问候语' },
    { id: 'ist-8', type: 'choice', q: '我们学习的 "English" 是指：', options: ['英语', '语文', '数学', '体育'], answer: 0, explain: 'English 英语。We learn English! 我们学英语！', tag: '词汇' },
    { id: 'ist-9', type: 'judge', q: '学英语只要用眼睛看，不用开口说。', options: ['√ 对', '✗ 错'], answer: 1, explain: '学英语要多听、多说、多唱！英文歌、小游戏都是好办法，勇敢开口最棒。', tag: '学习习惯' },
    { id: 'ist-10', type: 'choice', q: '认识新朋友时介绍自己，可以说：', options: ["I'm Lily.", 'Open the door.', 'Sit down, please.', 'Stand up.'], answer: 0, explain: "I'm ...（我是……）介绍自己的名字，比如 I'm Lily. 我是莉莉。", tag: '句型' },
  ],
  i1: [
    { id: 'i1-1', type: 'choice', q: '早上见到老师，说：', options: ['Good morning.', 'Good night.', 'Goodbye.', 'Good evening.'], answer: 0, explain: '早上问好说 Good morning（早上好）；Good night 是睡前说晚安。', tag: '问候语' },
    { id: 'i1-2', type: 'choice', q: '"Hello!" 的意思是：', options: ['你好', '再见', '谢谢', '对不起'], answer: 0, explain: 'Hello 是打招呼"你好"，Hi 也是"你好"，更随意一些。', tag: '问候语' },
    { id: 'i1-3', type: 'choice', q: '放学和老师同学告别，说：', options: ['Goodbye.', 'Good morning.', 'Hello.', 'Thank you.'], answer: 0, explain: 'Goodbye 是"再见"，也可以说 Bye-bye。', tag: '问候语' },
    { id: 'i1-4', type: 'choice', q: '别人问 "How are you?"，可以回答：', options: ["I'm fine, thank you.", 'I am seven.', 'It is a book.', 'Good night.'], answer: 0, explain: "How are you? 你好吗？回答 I'm fine, thank you.（我很好，谢谢）。", tag: '对话' },
    { id: 'i1-5', type: 'judge', q: '下午见到朋友，可以说 Good afternoon.', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Good afternoon 是下午的问好语，下午两点上学就可以这样说。', tag: '问候语' },
    { id: 'i1-6', type: 'choice', q: '"Hi" 和 "Hello" 都可以用来：', options: ['打招呼', '说再见', '道谢', '道歉'], answer: 0, explain: 'Hi 和 Hello 都是打招呼，见了朋友随便用哪个都行。', tag: '问候语' },
    { id: 'i1-7', type: 'choice', q: '开学第一天见到新同学，先说：', options: ['Hello! Nice to meet you.', 'Good night.', 'Thank you!', 'Sorry!'], answer: 0, explain: '第一天见面说 Hello! Nice to meet you.（你好，很高兴认识你）。', tag: '情景' },
    { id: 'i1-8', type: 'choice', q: '"Bye-bye" 的意思是：', options: ['再见', '你好', '谢谢', '晚安'], answer: 0, explain: 'Bye-bye 再见，和 Goodbye 一样，告别的时候用。', tag: '问候语' },
    { id: 'i1-9', type: 'judge', q: '早上可以和老师同学说 Good morning，晚上睡觉前说 Good night.', options: ['√ 对', '✗ 错'], answer: 0, explain: '按时间选问候语：早上 Good morning，下午 Good afternoon，睡前 Good night。', tag: '问候语' },
    { id: 'i1-10', type: 'choice', q: '和老师告别时很有礼貌地说：', options: ['Goodbye, Miss Li!', 'Good morning, Miss Li!', 'Sorry, Miss Li!', 'Look at me!'], answer: 0, explain: '放学告别说 Goodbye, Miss Li!（李老师再见），加上称呼更有礼貌。', tag: '情景' },
  ],
  i2: [
    { id: 'i2-1', type: 'choice', q: '介绍朋友"这是莉莉"，说：', options: ['This is Lily.', 'I am Lily.', 'Hello, Lily!', 'Bye, Lily!'], answer: 0, explain: 'This is ...（这是……）介绍别人；I am ... 是介绍自己。', tag: '句型' },
    { id: 'i2-2', type: 'choice', q: '"Nice to meet you!" 的意思是：', options: ['很高兴认识你！', '你几岁了？', '再见！', '请坐！'], answer: 0, explain: '初次见面说 Nice to meet you!（很高兴认识你！）。', tag: '句型' },
    { id: 'i2-3', type: 'choice', q: '和你一个班一起上课的人是：', options: ['classmate', 'teacher', 'family', 'friend'], answer: 0, explain: 'classmate 同学，class 班级 + mate 伙伴。', tag: '词汇' },
    { id: 'i2-4', type: 'choice', q: '"friend" 是：', options: ['朋友', '兄弟', '姐妹', '老师'], answer: 0, explain: 'friend 朋友，好朋友可以说 good friend。', tag: '词汇' },
    { id: 'i2-5', type: 'judge', q: '认识新朋友时要微笑问好，做个有礼貌的孩子。', options: ['√ 对', '✗ 错'], answer: 0, explain: '微笑问好、有礼貌，才能交到更多新朋友。', tag: '品德' },
    { id: 'i2-6', type: 'choice', q: '"Welcome!" 的意思是：', options: ['欢迎！', '谢谢！', '对不起！', '再见！'], answer: 0, explain: 'Welcome 欢迎，新同学来了就说 Welcome to our class!（欢迎来到我们班）。', tag: '句型' },
    { id: 'i2-7', type: 'choice', q: '新同学转来我们班，可以热情地说：', options: ['Welcome to our class!', 'Good night!', 'Go away!', 'No, no!'], answer: 0, explain: 'Welcome to our class! 欢迎来到我们班，让新同学感到温暖。', tag: '情景' },
    { id: 'i2-8', type: 'choice', q: '"This is my friend." 的意思是：', options: ['这是我的朋友。', '那是我的老师。', '我讨厌朋友。', '朋友在哪儿？'], answer: 0, explain: 'This is my friend. 这是我的朋友，介绍朋友的常用句子。', tag: '句型' },
    { id: 'i2-9', type: 'choice', q: '别人对你说 "Nice to meet you."，你回应：', options: ['Nice to meet you, too.', 'I am fine.', 'Good night.', 'Thank you.'], answer: 0, explain: '回应时加上 too（也）：Nice to meet you, too. 我也很高兴认识你。', tag: '对话' },
    { id: 'i2-10', type: 'judge', q: '可以邀请新朋友一起玩，互相帮助。', options: ['√ 对', '✗ 错'], answer: 0, explain: '一起玩、互相帮助，友谊会越来越好。', tag: '品德' },
  ],
  i3: [
    { id: 'i3-1', type: 'choice', q: '装课本和文具的"书包"是：', options: ['schoolbag', 'blackboard', 'desk', 'door'], answer: 0, explain: 'schoolbag 书包，school 学校 + bag 包，上学背的小包。', tag: '词汇' },
    { id: 'i3-2', type: 'choice', q: '写字用的"铅笔"是：', options: ['pencil', 'ruler', 'rubber', 'book'], answer: 0, explain: 'pencil 铅笔，pencil case 铅笔盒是铅笔的家。', tag: '词汇' },
    { id: 'i3-3', type: 'choice', q: '画直线用的"尺子"是：', options: ['ruler', 'pencil', 'bag', 'chair'], answer: 0, explain: 'ruler 尺子，可以画直线、量长短。', tag: '词汇' },
    { id: 'i3-4', type: 'choice', q: '写错字擦掉用的"橡皮"是：', options: ['rubber', 'ruler', 'pen', 'desk'], answer: 0, explain: 'rubber 橡皮（沪教版说法），写错了用橡皮擦一擦。', tag: '词汇' },
    { id: 'i3-5', type: 'choice', q: '我们天天读的"书"是：', options: ['book', 'bag', 'box', 'ball'], answer: 0, explain: 'book 书，open the book 打开书。', tag: '词汇' },
    { id: 'i3-6', type: 'judge', q: '铅笔盒（pencil case）里可以放铅笔和橡皮。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'pencil case 铅笔盒，是放 pencil、rubber 等文具的小盒子。', tag: '常识' },
    { id: 'i3-7', type: 'choice', q: '"Open your book." 的意思是：', options: ['打开你的书。', '合上你的书。', '拿出你的书包。', '放下你的笔。'], answer: 0, explain: 'Open 打开，Close 是合上。Open your book. 打开书。', tag: '句型' },
    { id: 'i3-8', type: 'choice', q: '下面应该放进书包的是：', options: ['book', 'apple', 'ball', 'cake'], answer: 0, explain: 'book 书是学习用品；apple 苹果、ball 球、cake 蛋糕都不是文具。', tag: '分类' },
    { id: 'i3-9', type: 'choice', q: '"pack my schoolbag" 的意思是：', options: ['整理我的书包', '扔掉我的书包', '买一个新书包', '画一个书包'], answer: 0, explain: 'pack 收拾、整理。Pack my schoolbag. 整理书包，上学前要做哦。', tag: '句型' },
    { id: 'i3-10', type: 'judge', q: '自己的事情自己做，每天自己整理书包。', options: ['√ 对', '✗ 错'], answer: 0, explain: '自己整理书包，第二天上课要用的书就不会找不到啦。', tag: '学习习惯' },
  ],
  i4: [
    { id: 'i4-1', type: 'choice', q: '我们上课的"教室"是：', options: ['classroom', 'bedroom', 'kitchen', 'park'], answer: 0, explain: 'classroom 教室，class 班级 + room 房间。', tag: '词汇' },
    { id: 'i4-2', type: 'choice', q: '老师写字的"黑板"是：', options: ['blackboard', 'window', 'door', 'desk'], answer: 0, explain: 'blackboard 黑板，black 黑色 + board 板。', tag: '词汇' },
    { id: 'i4-3', type: 'choice', q: '写字用的"课桌"是：', options: ['desk', 'chair', 'door', 'bag'], answer: 0, explain: 'desk 课桌、书桌，在上面写字读书。', tag: '词汇' },
    { id: 'i4-4', type: 'choice', q: '坐着的"椅子"是：', options: ['chair', 'desk', 'blackboard', 'book'], answer: 0, explain: 'chair 椅子，desk 桌子，别把它们弄混哦。', tag: '词汇' },
    { id: 'i4-5', type: 'judge', q: '值日生帮忙打扫教室，人人爱劳动。', options: ['√ 对', '✗ 错'], answer: 0, explain: '值日生 on duty 轮流打扫教室，教室干净大家舒服。', tag: '品德' },
    { id: 'i4-6', type: 'choice', q: '进出的"门"是：', options: ['door', 'window', 'desk', 'light'], answer: 0, explain: 'door 门，Open the door, please. 请开门。', tag: '词汇' },
    { id: 'i4-7', type: 'choice', q: '透光的"窗户"是：', options: ['window', 'door', 'wall', 'chair'], answer: 0, explain: 'window 窗户，Close the window. 关窗户。', tag: '词汇' },
    { id: 'i4-8', type: 'choice', q: '"Clean our classroom." 的意思是：', options: ['打扫我们的教室', '离开我们的教室', '画我们的教室', '锁上教室的门'], answer: 0, explain: 'clean 打扫、弄干净；Clean our classroom. 打扫教室。', tag: '句型' },
    { id: 'i4-9', type: 'choice', q: '教室里能看到的东西是：', options: ['desk 和 chair', '大象和老虎', '汽车和飞机', '苹果和香蕉'], answer: 0, explain: '教室里有课桌 desk、椅子 chair、黑板 blackboard；大象老虎在动物园里。', tag: '分类' },
    { id: 'i4-10', type: 'judge', q: '下课后要把椅子摆整齐，保持教室整洁。', options: ['√ 对', '✗ 错'], answer: 0, explain: '摆好椅子、捡起纸屑，教室整洁人人有责。', tag: '品德' },
  ],
  iipa1: [
    { id: 'iipa1-1', type: 'choice', q: '"bag"（书包）开头的字母是：', options: ['Bb', 'Aa', 'Dd', 'Gg'], answer: 0, explain: 'bag 的第一个字母是 Bb，发音 /b/，像轻轻爆出的"啵"。', tag: '字母' },
    { id: 'iipa1-2', type: 'choice', q: '"apple"（苹果）的第一个字母是：', options: ['Aa', 'Bb', 'Cc', 'Ee'], answer: 0, explain: 'apple 的第一个字母是 Aa，/æ/ 啊，张大嘴巴发这个音。', tag: '字母' },
    { id: 'iipa1-3', type: 'choice', q: '"cat"（小猫）的第一个字母是：', options: ['Cc', 'Aa', 'Tt', 'Dd'], answer: 0, explain: 'cat 的第一个字母是 Cc，发音 /k/。', tag: '字母' },
    { id: 'iipa1-4', type: 'choice', q: '下面以字母 Dd 开头的单词是：', options: ['dog', 'egg', 'fish', 'cat'], answer: 0, explain: 'dog 小狗以 Dd 开头，/d/；egg 是 Ee，fish 是 Ff。', tag: '字母' },
    { id: 'iipa1-5', type: 'judge', q: '大写 A 和小写 a 是两个不同的字母。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'A 和 a 是同一个字母哦：每个字母都有大写和小写两种样子，像双胞胎穿不同的衣服。', tag: '字母' },
    { id: 'iipa1-6', type: 'choice', q: '"egg"（鸡蛋）的第一个字母是：', options: ['Ee', 'Ff', 'Gg', 'Aa'], answer: 0, explain: 'egg 以 Ee 开头，/e/，嘴巴半开短短地发。', tag: '字母' },
    { id: 'iipa1-7', type: 'choice', q: '字母 Ff 开头的单词是：', options: ['fish', 'dog', 'apple', 'bag'], answer: 0, explain: 'fish 小鱼以 Ff 开头，/f/，像吹气一样。', tag: '字母' },
    { id: 'iipa1-8', type: 'choice', q: '"hand"（手）中间的字母 a 发音像：', options: ['"啊"', '"哦"', '"呜"', '"咿"'], answer: 0, explain: 'hand 里的 a 发 /æ/，嘴巴张大像说"啊"。', tag: '发音' },
    { id: 'iipa1-9', type: 'judge', q: '读英语的时候要大声、清楚。', options: ['√ 对', '✗ 错'], answer: 0, explain: '大声朗读才能练好发音，声音太小说话含糊可不行。', tag: '学习习惯' },
    { id: 'iipa1-10', type: 'choice', q: '"school"（学校）的第一个字母是：', options: ['Ss', 'Cc', 'Hh', 'Oo'], answer: 0, explain: 'school 以 Ss 开头，/s/ 像蛇发出的"嘶嘶"声。', tag: '字母' },
  ],
  i5: [
    { id: 'i5-1', type: 'choice', q: '用来看东西的"眼睛"是：', options: ['eye', 'ear', 'nose', 'mouth'], answer: 0, explain: 'eye 眼睛，两只眼睛是 two eyes。', tag: '词汇' },
    { id: 'i5-2', type: 'choice', q: '听声音的"耳朵"是：', options: ['ear', 'eye', 'hand', 'face'], answer: 0, explain: 'ear 耳朵，两只耳朵 two ears，用耳朵听声音。', tag: '词汇' },
    { id: 'i5-3', type: 'choice', q: '闻气味的"鼻子"是：', options: ['nose', 'mouth', 'ear', 'eye'], answer: 0, explain: 'nose 鼻子，闻花香用鼻子。', tag: '词汇' },
    { id: 'i5-4', type: 'choice', q: '吃东西说话的"嘴巴"是：', options: ['mouth', 'nose', 'eye', 'ear'], answer: 0, explain: 'mouth 嘴巴，说英语、唱歌、吃东西都靠它。', tag: '词汇' },
    { id: 'i5-5', type: 'choice', q: '"face" 的意思是：', options: ['脸', '手', '脚', '头发'], answer: 0, explain: 'face 脸，眼睛、鼻子、嘴巴都在脸上。', tag: '词汇' },
    { id: 'i5-6', type: 'judge', q: '我们有两张嘴巴、一只眼睛。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'We have two eyes and two ears, but only one mouth. 两只眼睛、两只耳朵，只有一张嘴巴哦。', tag: '常识' },
    { id: 'i5-7', type: 'choice', q: '"Touch your nose." 的意思是：', options: ['摸摸你的鼻子', '看看你的鼻子', '洗洗你的鼻子', '画一个鼻子'], answer: 0, explain: 'touch 摸、碰；Touch your nose. 摸摸小鼻子。', tag: '句型' },
    { id: 'i5-8', type: 'choice', q: '画一张脸，先画一个：', options: ['圆圈', '正方形', '三角形', '星星'], answer: 0, explain: 'Draw a lovely face. 先画一个圆圆的脸，再画上五官。', tag: '常识' },
    { id: 'i5-9', type: 'choice', q: '脸上最上面、能眨呀眨的是：', options: ['eyes', 'mouth', 'nose', 'ears'], answer: 0, explain: 'eyes 眼睛长在最上面，还会眨呀眨（blink）。', tag: '常识' },
    { id: 'i5-10', type: 'choice', q: 'smile 是脸上笑嘻嘻的样子，"smile" 的意思是：', options: ['微笑', '哭', '睡觉', '跑步'], answer: 0, explain: 'smile 微笑，笑一笑，脸蛋更可爱（lovely face）。', tag: '拓展' },
  ],
  i6: [
    { id: 'i6-1', type: 'choice', q: '"father" 的意思是：', options: ['爸爸', '妈妈', '爷爷', '老师'], answer: 0, explain: 'father 爸爸，也可以叫 dad / daddy，更亲昵。', tag: '词汇' },
    { id: 'i6-2', type: 'choice', q: '"mother" 的意思是：', options: ['妈妈', '爸爸', '奶奶', '阿姨'], answer: 0, explain: 'mother 妈妈，也可以叫 mum / mummy。', tag: '词汇' },
    { id: 'i6-3', type: 'choice', q: '"grandma" 是指：', options: ['奶奶或外婆', '姐姐', '妈妈', '老师'], answer: 0, explain: 'grandma 奶奶/外婆，grand + ma，老一辈的妈妈。', tag: '词汇' },
    { id: 'i6-4', type: 'choice', q: '"grandpa" 是指：', options: ['爷爷或外公', '哥哥', '爸爸', '叔叔'], answer: 0, explain: 'grandpa 爷爷/外公，grand + pa，老一辈的爸爸。', tag: '词汇' },
    { id: 'i6-5', type: 'choice', q: '"This is my family." 的意思是：', options: ['这是我的家庭。', '这是我的朋友。', '这是我的教室。', '这是我的书包。'], answer: 0, explain: 'family 家庭，介绍全家福照片时就说 This is my family. 这是我的家。', tag: '句型' },
    { id: 'i6-6', type: 'judge', q: '家人之间要互相关心、互相帮助。', options: ['√ 对', '✗ 错'], answer: 0, explain: '家是温暖的港湾，家人之间要相亲相爱。', tag: '品德' },
    { id: 'i6-7', type: 'choice', q: '爸爸的昵称可以叫：', options: ['dad', 'mum', 'sister', 'brother'], answer: 0, explain: 'dad 是 father 的昵称，更亲切；mum 是妈妈的昵称。', tag: '词汇' },
    { id: 'i6-8', type: 'choice', q: '"brother" 是指：', options: ['哥哥或弟弟', '姐姐或妹妹', '爸爸', '同学'], answer: 0, explain: 'brother 兄弟，英文里哥哥弟弟都叫 brother。', tag: '词汇' },
    { id: 'i6-9', type: 'choice', q: '"sister" 是指：', options: ['姐姐或妹妹', '哥哥或弟弟', '妈妈', '奶奶'], answer: 0, explain: 'sister 姐妹，英文里姐姐妹妹都叫 sister。', tag: '词汇' },
    { id: 'i6-10', type: 'choice', q: '"I love my family." 的意思是：', options: ['我爱我的家人。', '我有个大家庭。', '我在家里。', '我的家很大。'], answer: 0, explain: 'love 爱；I love my family. 我爱我家，可以对家人大声说出来！', tag: '句型' },
  ],
  i7: [
    { id: 'i7-1', type: 'choice', q: '汪汪叫的"小狗"是：', options: ['dog', 'cat', 'bird', 'fish'], answer: 0, explain: 'dog 小狗，汪汪叫，是人类的忠诚朋友。', tag: '词汇' },
    { id: 'i7-2', type: 'choice', q: '喵喵叫的"小猫"是：', options: ['cat', 'dog', 'bird', 'cow'], answer: 0, explain: 'cat 小猫，喵喵叫，还会捉老鼠。', tag: '词汇' },
    { id: 'i7-3', type: 'choice', q: '天上飞的"小鸟"是：', options: ['bird', 'dog', 'fish', 'rabbit'], answer: 0, explain: 'bird 小鸟，有翅膀 wings，会飞。', tag: '词汇' },
    { id: 'i7-4', type: 'choice', q: '长耳朵、爱吃萝卜的"兔子"是：', options: ['rabbit', 'cat', 'dog', 'hen'], answer: 0, explain: 'rabbit 兔子，长耳朵，蹦蹦跳跳爱吃萝卜和青菜。', tag: '词汇' },
    { id: 'i7-5', type: 'judge', q: '小狗看家、小猫捉老鼠，动物是我们的好朋友。', options: ['√ 对', '✗ 错'], answer: 0, explain: '动物帮我们做很多事，人类和动物是好朋友。', tag: '常识' },
    { id: 'i7-6', type: 'choice', q: '"Animals are our friends." 的意思是：', options: ['动物是我们的朋友。', '动物是我们的食物。', '动物住在动物园。', '动物会说话。'], answer: 0, explain: 'Animals are our friends. 动物是我们的朋友，要好好对待它们。', tag: '句型' },
    { id: 'i7-7', type: 'choice', q: '帮我们看家护院的动物是：', options: ['dog', 'fish', 'bird', 'rabbit'], answer: 0, explain: 'dog 小狗最忠诚，会看家护院，是 helpful animal。', tag: '常识' },
    { id: 'i7-8', type: 'choice', q: '产牛奶给我们喝的动物是：', options: ['cow', 'cat', 'dog', 'bird'], answer: 0, explain: 'cow 奶牛，哞哞叫，我们喝的牛奶来自奶牛。', tag: '常识' },
    { id: 'i7-9', type: 'choice', q: '咯咯叫、会下蛋的"母鸡"是：', options: ['hen', 'dog', 'fish', 'bird'], answer: 0, explain: 'hen 母鸡，会下蛋；小鸡是 chick。', tag: '词汇' },
    { id: 'i7-10', type: 'judge', q: '要爱护小动物，不打它们、不吓唬它们。', options: ['√ 对', '✗ 错'], answer: 0, explain: '动物也有感觉，爱护动物才是好孩子。', tag: '品德' },
  ],
  iipa2: [
    { id: 'iipa2-1', type: 'choice', q: '我们住的"家"是：', options: ['home', 'school', 'park', 'zoo'], answer: 0, explain: 'home 家，home life 家庭生活，家是最温暖的地方。', tag: '词汇' },
    { id: 'iipa2-2', type: 'choice', q: '"bed"（床）的第一个字母是：', options: ['Bb', 'Dd', 'Pp', 'Mm'], answer: 0, explain: 'bed 以 Bb 开头，/b/，睡觉睡在床上。', tag: '字母' },
    { id: 'iipa2-3', type: 'choice', q: '发 /m/ 音的字母是：', options: ['Mm', 'Nn', 'Bb', 'Dd'], answer: 0, explain: 'Mm 发 /m/，嘴巴闭上哼出的"嗯姆"音。', tag: '发音' },
    { id: 'iipa2-4', type: 'choice', q: '"mum"（妈妈）的第一个字母是：', options: ['Mm', 'Bb', 'Dd', 'Hh'], answer: 0, explain: 'mum 以 Mm 开头，/m/ /m/ mum。', tag: '字母' },
    { id: 'iipa2-5', type: 'judge', q: '早上起床对家人说 Good morning，晚上睡前说 Good night.', options: ['√ 对', '✗ 错'], answer: 0, explain: '在家也要用英语问好，做个甜甜的礼貌宝宝。', tag: '情景' },
    { id: 'iipa2-6', type: 'choice', q: '晚上睡觉前对家人说：', options: ['Good night.', 'Good morning.', 'Good afternoon.', 'Bye-bye.'], answer: 0, explain: 'Good night 晚安，睡前说的话。', tag: '问候语' },
    { id: 'iipa2-7', type: 'choice', q: '字母 Hh 开头的单词是：', options: ['home', 'apple', 'dog', 'egg'], answer: 0, explain: 'home 以 Hh 开头，/h/ 像轻轻哈气。', tag: '字母' },
    { id: 'iipa2-8', type: 'choice', q: '"dad"（爸爸）开头字母 d 的发音是：', options: ['/d/', '/b/', '/m/', '/s/'], answer: 0, explain: 'd 发 /d/，/d/ /d/ dad。注意 /d/ 和 /b/ 别搞混。', tag: '发音' },
    { id: 'iipa2-9', type: 'judge', q: '在家里也可以大声读英语，当爸爸妈妈的小老师。', options: ['√ 对', '✗ 错'], answer: 0, explain: '把学到的英语教给家人，自己会记得更牢。', tag: '学习习惯' },
    { id: 'iipa2-10', type: 'choice', q: '"love" 的意思是：', options: ['爱', '跑', '飞', '看'], answer: 0, explain: 'love 爱，I love you. 我爱你，对家人说吧！', tag: '词汇' },
  ],
  i8: [
    { id: 'i8-1', type: 'choice', q: '"Have a go!" 的意思是：', options: ['试一试吧！', '快回家吧！', '该睡觉了！', '吃饭啦！'], answer: 0, explain: 'Have a go! 试一试！鼓励大家勇敢尝试。', tag: '句型' },
    { id: 'i8-2', type: 'choice', q: '有翅膀会飞的"小鸟"是：', options: ['bird', 'fish', 'dog', 'cat'], answer: 0, explain: 'bird 小鸟，Two little blackbirds 就是"两只小黑鹂鸟"。', tag: '词汇' },
    { id: 'i8-3', type: 'judge', q: '不会的事情要勇敢试一试，不怕出错。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Have a go! 敢尝试才能学会新本领，失败了再来一次。', tag: '品德' },
    { id: 'i8-4', type: 'choice', q: '"two" 是数字：', options: ['2', '3', '4', '5'], answer: 0, explain: 'two 二，Two little blackbirds 两只小黑鹂鸟。', tag: '数字' },
    { id: 'i8-5', type: 'choice', q: '"little" 的意思是：', options: ['小的', '大的', '高的', '长的'], answer: 0, explain: 'little 小的、小小的，little bird 小小鸟。', tag: '词汇' },
    { id: 'i8-6', type: 'choice', q: '"blackbird" 是指：', options: ['黑色的鸟', '白色的猫', '红色的花', '绿色的树'], answer: 0, explain: 'black 黑色 + bird 鸟 = blackbird 黑鹂鸟（黑色的鸟）。', tag: '词汇' },
    { id: 'i8-7', type: 'choice', q: '"You can do it!" 的意思是：', options: ['你能做到！', '你不能去！', '你做错了！', '你在哪里？'], answer: 0, explain: 'You can do it! 你能做到！给朋友打气的话。', tag: '句型' },
    { id: 'i8-8', type: 'choice', q: '遇到困难应该：', options: ['再试一次', '哭鼻子', '扔东西', '躲起来'], answer: 0, explain: 'Have a go! 再试一次，多练几次就会成功。', tag: '品德' },
    { id: 'i8-9', type: 'judge', q: '唱英文歌也是学英语的好方法。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Two little blackbirds 就是一首英文儿歌，唱着唱着就记住了单词。', tag: '学习习惯' },
    { id: 'i8-10', type: 'choice', q: '"fly" 的意思是：', options: ['飞', '跑', '游', '跳'], answer: 0, explain: 'fly 飞，小鸟会飞（Birds can fly.）。', tag: '词汇' },
  ],
  i9: [
    { id: 'i9-1', type: 'choice', q: '"I can sing." 的意思是：', options: ['我会唱歌。', '我不会唱歌。', '我在唱歌。', '请唱歌。'], answer: 0, explain: 'can 会、能够；I can sing. 我会唱歌。', tag: '句型' },
    { id: 'i9-2', type: 'choice', q: '"sing" 是指：', options: ['唱歌', '跳舞', '画画', '跑步'], answer: 0, explain: 'sing 唱歌，sing a song 唱首歌。', tag: '词汇' },
    { id: 'i9-3', type: 'choice', q: '"dance" 是指：', options: ['跳舞', '唱歌', '读书', '写字'], answer: 0, explain: 'dance 跳舞，I can dance. 我会跳舞。', tag: '词汇' },
    { id: 'i9-4', type: 'choice', q: '拿画笔"画画"是：', options: ['draw', 'sing', 'run', 'read'], answer: 0, explain: 'draw 画画，draw a picture 画一幅画。', tag: '词汇' },
    { id: 'i9-5', type: 'choice', q: '"Yes, I can!" 的意思是：', options: ['是的，我能！', '不，我不会。', '是的，我是。', '请帮帮我！'], answer: 0, explain: 'Yes, I can! 是的我能行！自信的声音最响亮！', tag: '句型' },
    { id: 'i9-6', type: 'judge', q: '自己的事情自己做，I can do it by myself.', options: ['√ 对', '✗ 错'], answer: 0, explain: 'by myself 我自己，自己的事情自己做，独立又能干。', tag: '品德' },
    { id: 'i9-7', type: 'choice', q: '"run and jump" 的意思是：', options: ['跑和跳', '唱和跳', '读和写', '画和剪'], answer: 0, explain: 'run 跑，jump 跳，运动会上的基本本领。', tag: '词汇' },
    { id: 'i9-8', type: 'choice', q: '拿着书出声"读"是：', options: ['read', 'write', 'draw', 'sing'], answer: 0, explain: 'read 读、阅读，read a book 读书。', tag: '词汇' },
    { id: 'i9-9', type: 'choice', q: '别人问 "Can you draw?"，你会画就答：', options: ['Yes, I can.', 'No, I can.', 'I am fine.', 'Good night.'], answer: 0, explain: '会就答 Yes, I can.（是的，我会），不会答 No, I can\'t.。', tag: '对话' },
    { id: 'i9-10', type: 'judge', q: '帮家人做力所能及的小事，是懂事的孩子。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I can do it for you. 我能帮你做，爱家人要用行动表达。', tag: '品德' },
  ],
  i10: [
    { id: 'i10-1', type: 'choice', q: '"one" 是数字：', options: ['1', '2', '3', '10'], answer: 0, explain: 'one 一，数数从 one 开始：one, two, three...。', tag: '数字' },
    { id: 'i10-2', type: 'choice', q: '"three" 是数字：', options: ['3', '2', '5', '8'], answer: 0, explain: 'three 三，one two three，一起数一数。', tag: '数字' },
    { id: 'i10-3', type: 'choice', q: '"five" 是数字：', options: ['5', '4', '6', '9'], answer: 0, explain: 'five 五，一只手正好五根手指。', tag: '数字' },
    { id: 'i10-4', type: 'choice', q: '"ten" 是数字：', options: ['10', '5', '7', '1'], answer: 0, explain: 'ten 十，两只手的手指加起来正好十根。', tag: '数字' },
    { id: 'i10-5', type: 'judge', q: '数字可以用来数苹果、数台阶、数玩具。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Fun in finding numbers 数字真好玩，生活中到处都能数一数。', tag: '常识' },
    { id: 'i10-6', type: 'choice', q: '"seven" 是数字：', options: ['7', '6', '8', '11'], answer: 0, explain: 'seven 七，一周有七天（seven days）。', tag: '数字' },
    { id: 'i10-7', type: 'choice', q: '"我有两只手"说：', options: ['I have two hands.', 'I have two heads.', 'I have ten hands.', 'I have two legs.'], answer: 0, explain: 'hand 手，两只手 two hands；legs 是腿。', tag: '句型' },
    { id: 'i10-8', type: 'choice', q: '按顺序数：one, two, three, 接下来是：', options: ['four', 'five', 'ten', 'one'], answer: 0, explain: '顺序是 one two three four five...，four 四排在 three 后面。', tag: '数字' },
    { id: 'i10-9', type: 'choice', q: '"eight" 是数字：', options: ['8', '6', '3', '9'], answer: 0, explain: 'eight 八，8 像葫芦，eight 像字母 A 加个结。', tag: '数字' },
    { id: 'i10-10', type: 'judge', q: '电梯按钮上、日历上的数字都可以用英语读出来。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Fun in using numbers 数字用处大，看到数字就可以练英语。', tag: '拓展' },
  ],
  iipa3: [
    { id: 'iipa3-1', type: 'choice', q: '"A better me" 的意思是：', options: ['更好的我', '更小的我', '我的朋友', '我的家'], answer: 0, explain: 'better 更好（good 的比较级），A better me 更好的我。', tag: '句型' },
    { id: 'iipa3-2', type: 'choice', q: '"good" 的意思是：', options: ['好的', '坏的', '大的', '热的'], answer: 0, explain: 'good 好的，Good job! 做得好！', tag: '词汇' },
    { id: 'iipa3-3', type: 'choice', q: '发 /g/ 音的字母是：', options: ['Gg', 'Jj', 'Dd', 'Bb'], answer: 0, explain: 'Gg 发 /g/，/g/ /g/ good，注意别和 Jj 的音搞混。', tag: '发音' },
    { id: 'iipa3-4', type: 'choice', q: '"girl"（女孩）的第一个字母是：', options: ['Gg', 'Jj', 'Bb', 'Rr'], answer: 0, explain: 'girl 以 Gg 开头，/g/ /g/ girl。', tag: '字母' },
    { id: 'iipa3-5', type: 'judge', q: '每天进步一点点，就能成为更好的自己。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'A better me 更好的我，每天学会一点点，一学期就是大进步。', tag: '品德' },
    { id: 'iipa3-6', type: 'choice', q: '"red"（红色）的第一个字母是：', options: ['Rr', 'Ll', 'Bb', 'Gg'], answer: 0, explain: 'red 以 Rr 开头，/r/ 像小老虎轻吼。', tag: '字母' },
    { id: 'iipa3-7', type: 'choice', q: '"dog" 中间的字母是：', options: ['Oo', 'Aa', 'Ee', 'Uu'], answer: 0, explain: 'd-o-g，中间是 Oo，发短音 /ɒ/ 哦。', tag: '字母' },
    { id: 'iipa3-8', type: 'choice', q: '学好英语的好办法是：', options: ['多听多说多练', '只玩不学', '怕错不开口', '上课走神'], answer: 0, explain: '多听、多说、多练，英语才会越来越棒。', tag: '学习习惯' },
    { id: 'iipa3-9', type: 'judge', q: '说英语出错很正常，勇敢开口最棒。', options: ['√ 对', '✗ 错'], answer: 0, explain: '每个学英语的人都会出错，敢说才会进步。', tag: '品德' },
    { id: 'iipa3-10', type: 'choice', q: '"me" 的意思是：', options: ['我', '你', '他', '它'], answer: 0, explain: 'me 我，This is me! 这就是我！', tag: '词汇' },
  ],
}
