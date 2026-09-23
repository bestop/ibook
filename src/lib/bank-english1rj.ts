// 人教版PEP英语 一年级上册（一起点·预备级 2024版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）一年级上册 · 人民教育出版社（PEP 新版预备级）
// 目录（电子课本网 + 人民教育出版社官网 + renjiaoshe 2024 版同步资源核对）：
//   Unit 1 Hello! / Unit 2 My first class / Unit 3 Look, listen and learn
//   Unit 4 Ready for school / Unit 5 People around me / Revision
// 每单元一关，每关 10 题，共 6 关 60 题，题目 id 前缀 za

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
    id: 'za1',
    name: 'Unit 1',
    title: 'Hello!',
    emoji: '👋',
    color: 'amber',
    lessons: ['Hello!', 'Greet your friends', 'Say goodbye'],
    intro: '挥挥小手说 Hello，认识新朋友，学会说再见！',
  },
  {
    id: 'za2',
    name: 'Unit 2',
    title: 'My first class',
    emoji: '🏫',
    color: 'orange',
    lessons: ['My first class', 'In the classroom', 'Meet my teacher'],
    intro: '走进第一堂课，认识教室和新老师，做课堂小主人！',
  },
  {
    id: 'za3',
    name: 'Unit 3',
    title: 'Look, listen and learn',
    emoji: '👀',
    color: 'rose',
    lessons: ['Look, listen and learn', 'Eyes and ears', 'Point and say'],
    intro: '用眼睛看、用耳朵听，指着图片大声说英语！',
  },
  {
    id: 'za4',
    name: 'Unit 4',
    title: 'Ready for school',
    emoji: '🎒',
    color: 'lime',
    lessons: ['Ready for school', 'My schoolbag', 'School things'],
    intro: '整理小书包，认识铅笔橡皮，上学准备我能行！',
  },
  {
    id: 'za5',
    name: 'Unit 5',
    title: 'People around me',
    emoji: '👨‍👩‍👧',
    color: 'teal',
    lessons: ['People around me', 'My family', 'My friends and teachers'],
    intro: '爸爸妈妈、老师朋友，身边的人都来认识一下！',
  },
  {
    id: 'zar',
    name: 'Revision',
    title: '快乐复习站',
    emoji: '🌟',
    color: 'cyan',
    lessons: ['常用表达语', '全册单词表', '小故事时间'],
    intro: '把一上学期学的单词句子串一串，快乐大复习！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  za1: [
    { id: 'za1-1', type: 'choice', q: '早上见到小朋友，打招呼说：', options: ['Hello!', 'Goodbye!', 'Thank you!', 'Sorry!'], answer: 0, explain: 'Hello! 你好！是见面打招呼最常用的说法，也可以说 Hi!。', tag: '打招呼' },
    { id: 'za1-2', type: 'choice', q: '"Hello, I\'m Bill." 的意思是：', options: ['你好，我是比尔。', '你好，比尔再见。', '你好，这是比尔。', '比尔，谢谢你。'], answer: 0, explain: 'I\'m... 我是……，介绍自己名字用 I\'m + 名字。', tag: '自我介绍' },
    { id: 'za1-3', type: 'choice', q: '放学和好朋友说再见，应该说：', options: ['Goodbye!', 'Hello!', 'Good morning!', 'Nice to meet you!'], answer: 0, explain: 'Goodbye! 再见！道别时说，也可以说 Bye-bye!。', tag: '打招呼' },
    { id: 'za1-4', type: 'choice', q: '想知道对方叫什么名字，应该问：', options: ['What\'s your name?', 'How are you?', 'How old are you?', 'Where are you?'], answer: 0, explain: 'What\'s your name? 你叫什么名字？回答：I\'m... / My name is...。', tag: '句型' },
    { id: 'za1-5', type: 'judge', q: '"Good night." 是早上见面问好用的。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'Good night 是睡前说的晚安；早上问好要说 Good morning!，中午用 Good afternoon!。', tag: '打招呼' },
    { id: 'za1-6', type: 'choice', q: '别人向你问好，你可以回答：', options: ['Hello! Hi!', 'Goodbye!', 'I\'m fine.', 'Thank you!'], answer: 0, explain: '别人说 Hello，你也回 Hello! 或 Hi!，礼貌又友好。', tag: '打招呼' },
    { id: 'za1-7', type: 'choice', q: '"Hi, I\'m Lily." 中 Lily 是：', options: ['名字', '动物', '颜色', '文具'], answer: 0, explain: 'Lily 是女孩的名字，英语里名字开头字母要大写哦。', tag: '名字' },
    { id: 'za1-8', type: 'choice', q: '和新朋友第一次见面，可以说：', options: ['Nice to meet you!', 'See you!', 'Good night!', 'Excuse me!'], answer: 0, explain: 'Nice to meet you! 很高兴见到你！对方会回答 Nice to meet you, too!。', tag: '句型' },
    { id: 'za1-9', type: 'judge', q: '用英语打招呼时要看着对方的眼睛，面带微笑。', options: ['√ 对', '✗ 错'], answer: 0, explain: '打招呼时微笑、眼睛看着对方，是有礼貌的好孩子！', tag: '习惯养成' },
    { id: 'za1-10', type: 'choice', q: '睡觉前和爸爸妈妈道晚安，可以说：', options: ['Good night!', 'Good morning!', 'Good afternoon!', 'Goodbye!'], answer: 0, explain: 'Good night! 晚安，是睡前道别用语，别和 Good morning 记混哦。', tag: '打招呼' },
  ],
  za2: [
    { id: 'za2-1', type: 'choice', q: '"My first class" 的意思是：', options: ['我的第一堂课', '我的第一本书', '我的第一个朋友', '我的第一节体育课'], answer: 0, explain: 'class 课堂/班级，my first class 我的第一堂课，小学的英语课开始啦！', tag: '短语理解' },
    { id: 'za2-2', type: 'choice', q: '教我们学习的"老师"是：', options: ['teacher', 'doctor', 'driver', 'farmer'], answer: 0, explain: 'teacher 老师，schoolbag 里装课本，教室里有 teacher 带我们学习。', tag: '校园词汇' },
    { id: 'za2-3', type: 'choice', q: '上课想发言，应该先：', options: ['举手 raise my hand', '大声喊', '跑上台', '和同学聊天'], answer: 0, explain: '课堂上举手再发言：raise your hand，课堂规则要记牢。', tag: '课堂规则' },
    { id: 'za2-4', type: 'choice', q: '"classroom" 指的是：', options: ['教室', '卧室', '操场', '图书馆'], answer: 0, explain: 'class 班级 + room 房间 = classroom 教室，我们上课的地方。', tag: '校园词汇' },
    { id: 'za2-5', type: 'judge', q: '"This is my teacher." 意思是"这是我的老师"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'This is... 这是……，向别人介绍老师、朋友都可以用它。', tag: '句型' },
    { id: 'za2-6', type: 'choice', q: '上课铃响了，我们应该：', options: ['快快坐好等老师', '继续玩玩具', '跑出教室', '吃零食'], answer: 0, explain: '铃响回座位坐好，安静等老师来上课，课堂好习惯从小养成。', tag: '课堂规则' },
    { id: 'za2-7', type: 'choice', q: '老师夸你做得好，会对你说：', options: ['Good! / Great!', 'Stand up, please.', 'Open your book.', 'Listen to me.'], answer: 0, explain: 'Good! 真棒！Great! 太好了！都是老师表扬时的常用语。', tag: '课堂用语' },
    { id: 'za2-8', type: 'choice', q: '"May I come in?" 的意思是：', options: ['我可以进来吗？', '我可以吃吗？', '我可以走吗？', '我可以玩吗？'], answer: 0, explain: '迟到或敲门时说 May I come in? 我可以进来吗？多礼貌呀。', tag: '课堂用语' },
    { id: 'za2-9', type: 'judge', q: '在教室里要轻声说话，不能追跑打闹。', options: ['√ 对', '✗ 错'], answer: 0, explain: '教室是学习的地方，轻声慢步，大家一起遵守课堂规则。', tag: '习惯养成' },
    { id: 'za2-10', type: 'choice', q: '老师让"起立"，会说：', options: ['Stand up, please.', 'Sit down, please.', 'Turn around.', 'Come here.'], answer: 0, explain: 'Stand up, please. 请起立；Sit down, please. 请坐下。', tag: '课堂用语' },
  ],
  za3: [
    { id: 'za3-1', type: 'choice', q: '"look" 的意思是：', options: ['看', '听', '说', '写'], answer: 0, explain: 'look 看，用眼睛看：Look at me! 看着我！', tag: '动词' },
    { id: 'za3-2', type: 'choice', q: '"listen" 的意思是：', options: ['听', '看', '指', '画'], answer: 0, explain: 'listen 听，用耳朵听：Listen! 听好了！', tag: '动词' },
    { id: 'za3-3', type: 'choice', q: '用来看东西的"眼睛"是：', options: ['eye', 'ear', 'nose', 'hand'], answer: 0, explain: 'eye 眼睛用来看 look；ear 耳朵用来听 listen。', tag: '身体部位' },
    { id: 'za3-4', type: 'choice', q: '用来听声音的"耳朵"是：', options: ['ear', 'eye', 'mouth', 'foot'], answer: 0, explain: 'ear 耳朵，两只耳朵是 ears，听音乐、听老师讲课都靠它。', tag: '身体部位' },
    { id: 'za3-5', type: 'judge', q: '"Point and say." 意思是"指着说"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'point 指，point and say 指着图片大声说，是学英语的好方法。', tag: '短语理解' },
    { id: 'za3-6', type: 'choice', q: '老师问"这是什么颜色"，是在说：', options: ['What colour is it?', 'What is this?', 'How are you?', 'Who is she?'], answer: 0, explain: 'What colour is it? 它是什么颜色？colour 颜色。', tag: '句型' },
    { id: 'za3-7', type: 'choice', q: '"Say it aloud, please." 是让大家：', options: ['大声说出来', '安静下来', '打开书', '写下来'], answer: 0, explain: 'aloud 大声地，学英语要大声开口说，越说越流利！', tag: '课堂用语' },
    { id: 'za3-8', type: 'choice', q: '上课认真听老师讲，就是：', options: ['Listen to the teacher carefully.', 'Talk to my friends.', 'Play with my toys.', 'Look out of the window.'], answer: 0, explain: 'listen to... 听……，carefully 认真地，认真听讲才能学到本领。', tag: '课堂规则' },
    { id: 'za3-9', type: 'judge', q: '学英语要敢开口、多开口，说错了也没关系。', options: ['√ 对', '✗ 错'], answer: 0, explain: '学语言就是要多说多练，大胆开口才会进步快！', tag: '学习方法' },
    { id: 'za3-10', type: 'choice', q: '"hands" 指的是：', options: ['手', '脚', '头', '腿'], answer: 0, explain: 'hand 手，两只手是 hands；Clap your hands! 拍拍手！', tag: '身体部位' },
  ],
  za4: [
    { id: 'za4-1', type: 'choice', q: '"Ready for school" 的意思是：', options: ['为上学做好准备', '放学回家', '在学校玩', '去学校看老师'], answer: 0, explain: 'ready 准备好的，ready for school 为上学做好准备，头天晚上整理好书包！', tag: '短语理解' },
    { id: 'za4-2', type: 'choice', q: '装课本和文具的"书包"是：', options: ['schoolbag', 'pencil', 'ruler', 'desk'], answer: 0, explain: 'school 学校 + bag 包 = schoolbag 书包，上学必备。', tag: '文具词汇' },
    { id: 'za4-3', type: 'choice', q: '写字用的"铅笔"是：', options: ['pencil', 'eraser', 'book', 'bag'], answer: 0, explain: 'pencil 铅笔，pencil case 铅笔盒，注意别和 pen 钢笔弄混。', tag: '文具词汇' },
    { id: 'za4-4', type: 'choice', q: '写错字可以擦掉的"橡皮"是：', options: ['eraser', 'ruler', 'pencil', 'book'], answer: 0, explain: 'eraser 橡皮，写错了用橡皮轻轻擦，本子干净又整齐。', tag: '文具词汇' },
    { id: 'za4-5', type: 'judge', q: '"This is my schoolbag." 意思是"这是我的书包"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'my 我的，后面跟东西：my schoolbag 我的书包。', tag: '句型' },
    { id: 'za4-6', type: 'choice', q: '用来画直线的"尺子"是：', options: ['ruler', 'rubber duck', 'book', 'bag'], answer: 0, explain: 'ruler 尺子，画直线、量长短都用它。', tag: '文具词汇' },
    { id: 'za4-7', type: 'choice', q: '"Open your book." 的意思是：', options: ['打开你的书', '合上你的书', '给我你的书', '买一本书'], answer: 0, explain: 'open 打开，open your book 打开课本；合上用 close。', tag: '动词短语' },
    { id: 'za4-8', type: 'choice', q: '上学前要做的准备是：', options: ['整理书包、带好文具', '多玩一会儿游戏', '多睡懒觉', '不吃早饭'], answer: 0, explain: '睡前整理好书包和文具，第二天上学不慌张，做有准备的小学生。', tag: '习惯养成' },
    { id: 'za4-9', type: 'judge', q: '同学借橡皮给你用，你要说 Thank you!。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Thank you! 谢谢你！得到帮助要说谢谢，有礼貌的孩子人人爱。', tag: '礼貌用语' },
    { id: 'za4-10', type: 'choice', q: '"desk" 指的是：', options: ['书桌', '椅子', '黑板', '窗户'], answer: 0, explain: 'desk 书桌，chair 椅子，blackboard 黑板，都是教室里的家当。', tag: '校园词汇' },
  ],
  za5: [
    { id: 'za5-1', type: 'choice', q: '"People around me" 的意思是：', options: ['我身边的人', '我的动物朋友', '我的玩具', '我的学校'], answer: 0, explain: 'people 人们，around me 在我身边，身边的人最值得珍惜。', tag: '短语理解' },
    { id: 'za5-2', type: 'choice', q: '"妈妈"的英语是：', options: ['mum', 'dad', 'grandma', 'sister'], answer: 0, explain: 'mum 妈妈，dad 爸爸，grandma 奶奶/外婆，grandpa 爷爷/外公。', tag: '家庭词汇' },
    { id: 'za5-3', type: 'choice', q: '"This is my dad." 的意思是：', options: ['这是我的爸爸。', '这是我的老师。', '我的爸爸在家。', '我爱我的爸爸。'], answer: 0, explain: 'This is my... 这是我的……，介绍家人用这个句型。', tag: '句型' },
    { id: 'za5-4', type: 'choice', q: '一起玩耍的"朋友"是：', options: ['friend', 'teacher', 'brother', 'cousin'], answer: 0, explain: 'friend 朋友，We are friends. 我们是朋友。', tag: '人际词汇' },
    { id: 'za5-5', type: 'judge', q: '"I love my family." 意思是"我爱我的家人"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'family 家人/家庭，爱家人就要常常表达出来哦！', tag: '句型' },
    { id: 'za5-6', type: 'choice', q: '爸爸的爸爸是你的：', options: ['grandpa 爷爷', 'dad 爸爸', 'brother 哥哥', 'uncle 叔叔'], answer: 0, explain: 'grandpa 爷爷/外公，grandma 奶奶/外婆，是爸爸妈妈的爸爸妈妈。', tag: '家庭词汇' },
    { id: 'za5-7', type: 'choice', q: '和小伙伴一起玩得开心，可以说：', options: ['Let\'s play!', 'Let\'s go home.', 'Let\'s eat.', 'Let\'s sleep.'], answer: 0, explain: 'Let\'s... 我们一起……吧！Let\'s play! 我们一起玩吧！', tag: '句型' },
    { id: 'za5-8', type: 'choice', q: '妈妈生病了，你应该：', options: ['关心照顾她', '大声吵闹', '只顾自己玩', '不理她'], answer: 0, explain: '家人不舒服要关心照顾，一句 Are you OK? 温暖又贴心。', tag: '品德养成' },
    { id: 'za5-9', type: 'judge', q: '见到长辈要主动问好，做有礼貌的小朋友。', options: ['√ 对', '✗ 错'], answer: 0, explain: '主动说 Hello!/Good morning!，长辈都会夸你有礼貌！', tag: '礼貌用语' },
    { id: 'za5-10', type: 'choice', q: '"sister" 指的是：', options: ['姐姐或妹妹', '哥哥或弟弟', '姑姑', '阿姨'], answer: 0, explain: 'sister 姐姐/妹妹，brother 哥哥/弟弟，英语里不分大小哦。', tag: '家庭词汇' },
  ],
  zar: [
    { id: 'zar-1', type: 'choice', q: '早上到校见到老师，应该说：', options: ['Good morning, Miss Li!', 'Good night!', 'Goodbye!', 'See you!'], answer: 0, explain: '早上问好 Good morning + 称呼，对女老师用 Miss/Ms，男老师用 Mr。', tag: '打招呼' },
    { id: 'zar-2', type: 'choice', q: '下面哪个是文具？', options: ['pencil 铅笔', 'dog 小狗', 'apple 苹果', 'mum 妈妈'], answer: 0, explain: 'pencil 铅笔是文具；schoolbag、ruler、eraser 也都是文具。', tag: '单词分类' },
    { id: 'zar-3', type: 'choice', q: '介绍自己的好朋友，可以说：', options: ['This is my friend.', 'This is my book.', 'This is my bag.', 'This is my desk.'], answer: 0, explain: 'This is my friend. 这是我的朋友，介绍人用 This is...。', tag: '句型' },
    { id: 'zar-4', type: 'choice', q: '"listen and point" 的意思是：', options: ['听一听，指一指', '看一看，写一写', '站起来，坐下去', '打开，合上'], answer: 0, explain: 'listen 听、point 指，听音指图是课堂上常玩的小游戏。', tag: '动词短语' },
    { id: 'zar-5', type: 'judge', q: 'schoolbag（书包）里可以装 book（书）和 pencil（铅笔）。', options: ['√ 对', '✗ 错'], answer: 0, explain: '书包里装课本和文具，上学的东西都在里面。', tag: '生活常识' },
    { id: 'zar-6', type: 'choice', q: '放学回家和老师同学告别，说：', options: ['Goodbye! See you!', 'Good morning!', 'Nice to meet you!', 'How are you?'], answer: 0, explain: 'Goodbye! / See you! 再见！明天见可以说 See you tomorrow!。', tag: '打招呼' },
    { id: 'zar-7', type: 'choice', q: '"eyes and ears" 指的是：', options: ['眼睛和耳朵', '手和脚', '嘴巴和鼻子', '头和肩膀'], answer: 0, explain: 'eye→eyes 眼睛，ear→ears 耳朵，两个用复数，词尾加 s。', tag: '身体部位' },
    { id: 'zar-8', type: 'choice', q: '想认识新朋友，可以先说：', options: ['Hello! I\'m...', 'Goodbye!', 'You\'re wrong!', 'Give me that!'], answer: 0, explain: '先打招呼再自我介绍：Hello! I\'m...，交朋友就是这么简单！', tag: '交友' },
    { id: 'zar-9', type: 'judge', q: '每天自己整理书包，是上学前的好习惯。', options: ['√ 对', '✗ 错'], answer: 0, explain: '自己的事情自己做，睡前整理书包，做能干的小学生！', tag: '习惯养成' },
    { id: 'zar-10', type: 'choice', q: '"family" 的意思是：', options: ['家庭', '学校', '教室', '朋友'], answer: 0, explain: 'family 家庭，家里的爸爸妈妈和你，组成温暖的一家人。', tag: '家庭词汇' },
  ],
}
