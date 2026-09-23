// 人教版PEP英语 二年级上册（一起点·预备级 2025新版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点·预备级）二年级上册 · 人民教育出版社（PEP 新版）
// 目录（电子课本网体系 + 21世纪教育/51教学优化单元资源交叉核对）：
//   Unit 1 Fun numbers and letters / Unit 2 A great picture / Unit 3 Helpful hands
//   Unit 4 I'm happy / Unit 5 Work time / Revision
// 每单元一关，每关 10 题，共 6 关 60 题，题目 id 前缀 zb

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
    id: 'zb1',
    name: 'Unit 1',
    title: 'Fun numbers and letters',
    emoji: '🔢',
    color: 'amber',
    lessons: ['Fun numbers', 'Letters A-Z', 'How many?'],
    intro: '数字和字母做游戏，数一数、认一认，越玩越聪明！',
  },
  {
    id: 'zb2',
    name: 'Unit 2',
    title: 'A great picture',
    emoji: '🎨',
    color: 'orange',
    lessons: ['A great picture', 'Draw and colour', 'Our art class'],
    intro: '画一幅了不起的画，五颜六色真好看！',
  },
  {
    id: 'zb3',
    name: 'Unit 3',
    title: 'Helpful hands',
    emoji: '🧹',
    color: 'lime',
    lessons: ['Helpful hands', 'Chores at home', 'Let\'s clean up'],
    intro: '伸出小手帮忙做家务，扫地擦桌我都在行！',
  },
  {
    id: 'zb4',
    name: 'Unit 4',
    title: "I'm happy",
    emoji: '😄',
    color: 'rose',
    lessons: ["I'm happy", 'My feelings', 'How do you feel?'],
    intro: '开心、难过、累了吧？说出心情，做情绪小主人！',
  },
  {
    id: 'zb5',
    name: 'Unit 5',
    title: 'Work time',
    emoji: '⏰',
    color: 'teal',
    lessons: ['Work time', 'Class duties', 'Do it now'],
    intro: '值日时间到，分工合作把教室打扫得亮堂堂！',
  },
  {
    id: 'zbr',
    name: 'Revision',
    title: '快乐复习站',
    emoji: '🌟',
    color: 'cyan',
    lessons: ['常用表达语', '全册单词表', '小故事时间'],
    intro: '数字、颜色、家务、心情，一起来个期末大闯关！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zb1: [
    { id: 'zb1-1', type: 'choice', q: '"Fun numbers and letters" 的意思是：', options: ['有趣的数字和字母', '无聊的作业', '数学试卷', '字母歌'], answer: 0, explain: 'fun 有趣的，numbers 数字，letters 字母，数字字母一起玩！', tag: '短语理解' },
    { id: 'zb1-2', type: 'choice', q: '数字 5 的英语是：', options: ['five', 'four', 'six', 'fine'], answer: 0, explain: 'four 4，five 5，six 6，注意 five 和 four 别记混。', tag: '数字' },
    { id: 'zb1-3', type: 'choice', q: '"How many pencils?" 是在问：', options: ['有多少支铅笔？', '铅笔是什么颜色？', '铅笔在哪里？', '铅笔多少钱？'], answer: 0, explain: 'How many...? 问数量多少，回答：Five pencils. 五支铅笔。', tag: '句型' },
    { id: 'zb1-4', type: 'choice', q: '字母表里的第一个字母是：', options: ['Aa', 'Bb', 'Zz', 'Mm'], answer: 0, explain: '字母表从 Aa 开始，到 Zz 结束，一共 26 个字母。', tag: '字母' },
    { id: 'zb1-5', type: 'judge', q: 'one, two, three, four 是按顺序排列的数字。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'one 1、two 2、three 3、four 4，数数要按顺序哦。', tag: '数字' },
    { id: 'zb1-6', type: 'choice', q: '3 + 4 = ? 用英语回答：', options: ['seven', 'six', 'eight', 'five'], answer: 0, explain: '3+4=7，seven 七！算式读作 three and four makes seven。', tag: '数字' },
    { id: 'zb1-7', type: 'choice', q: '"ten" 的意思是：', options: ['十', '七', '二十', '一百'], answer: 0, explain: 'ten 十，两只手的手指头刚好十个。', tag: '数字' },
    { id: 'zb1-8', type: 'choice', q: '英语字母表共有多少个字母？', options: ['26 个', '20 个', '30 个', '50 个'], answer: 0, explain: 'Aa 到 Zz 共 26 个字母，大写小写各一套。', tag: '字母' },
    { id: 'zb1-9', type: 'judge', q: '字母 "Bb" 的大小写写法是对的。', options: ['√ 对', '✗ 错'], answer: 0, explain: '大写 B 小写 b，每个字母都有大小写两种样子。', tag: '字母' },
    { id: 'zb1-10', type: 'choice', q: '数一数：一只手 5 根手指，两只手有几根？', options: ['ten', 'five', 'two', 'one'], answer: 0, explain: '5+5=10，两只手的手指刚好是 ten——Ten fingers! 我们有十根手指。', tag: '数字' },
  ],
  zb2: [
    { id: 'zb2-1', type: 'choice', q: '"A great picture" 的意思是：', options: ['一幅很棒的画', '一本大书', '一张照片', '一个大苹果'], answer: 0, explain: 'great 很棒的，picture 图画，art class 美术课上画出 great picture！', tag: '短语理解' },
    { id: 'zb2-2', type: 'choice', q: '"draw" 的意思是：', options: ['画画', '唱歌', '跳舞', '跑步'], answer: 0, explain: 'draw 画画，draw a picture 画一幅画。', tag: '动词' },
    { id: 'zb2-3', type: 'choice', q: '天空中太阳的颜色，用英语说是：', options: ['yellow', 'black', 'brown', 'purple'], answer: 0, explain: 'yellow 黄色，The sun is yellow. 太阳是黄色的。', tag: '颜色' },
    { id: 'zb2-4', type: 'choice', q: '"red" 是什么颜色？', options: ['红色', '绿色', '蓝色', '白色'], answer: 0, explain: 'red 红色，apple 苹果红彤彤：a red apple。', tag: '颜色' },
    { id: 'zb2-5', type: 'judge', q: '"Colour it green." 意思是"把它涂成绿色"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'colour 也可以当动词"涂色"，green 绿色，像小草和树叶。', tag: '动词短语' },
    { id: 'zb2-6', type: 'choice', q: '草地和树叶的颜色是：', options: ['green', 'red', 'orange', 'pink'], answer: 0, explain: 'green 绿色，大自然里到处都是 green 哦。', tag: '颜色' },
    { id: 'zb2-7', type: 'choice', q: '问"它是什么颜色"，应该问：', options: ['What colour is it?', 'What is your name?', 'How many books?', 'Where is it?'], answer: 0, explain: 'What colour is it? 它是什么颜色？回答：It\'s blue. 它是蓝色的。', tag: '句型' },
    { id: 'zb2-8', type: 'choice', q: '"blue" 的意思是：', options: ['蓝色', '黑色', '黄色', '紫色'], answer: 0, explain: 'blue 蓝色，像天空和大海：The sky is blue. 天空是蓝色的。', tag: '颜色' },
    { id: 'zb2-9', type: 'judge', q: '画画时彩笔用完要放回原处，保持桌面整洁。', options: ['√ 对', '✗ 错'], answer: 0, explain: '用完彩笔盖好笔帽放回原处，好习惯让画具用得更久！', tag: '习惯养成' },
    { id: 'zb2-10', type: 'choice', q: '同学画得很好，你应该夸他：', options: ['Great picture!', 'Bad picture!', 'Go away!', 'I don\'t like it.'], answer: 0, explain: '夸奖别人：Great! / Wonderful!，会欣赏别人的孩子最可爱。', tag: '品德养成' },
  ],
  zb3: [
    { id: 'zb3-1', type: 'choice', q: '"Helpful hands" 的意思是：', options: ['帮得上忙的小手', '受伤的手', '干净的衣服', '好吃的手指饼'], answer: 0, explain: 'helpful 有帮助的，helpful hands 爱帮忙的小手，家务劳动我最棒！', tag: '短语理解' },
    { id: 'zb3-2', type: 'choice', q: '"clean the table" 的意思是：', options: ['擦桌子', '看电视', '买桌子', '搬桌子'], answer: 0, explain: 'clean 擦干净/打扫，clean the table 擦桌子，饭后帮妈妈擦一擦。', tag: '动词短语' },
    { id: 'zb3-3', type: 'choice', q: '打扫"地面"用英语说是：', options: ['clean the floor', 'clean the window', 'clean the car', 'clean the cat'], answer: 0, explain: 'floor 地面，sweep the floor 扫地，clean the floor 把地面弄干净。', tag: '家务' },
    { id: 'zb3-4', type: 'choice', q: '给小鱼或小猫"喂食"是：', options: ['feed', 'wash', 'draw', 'read'], answer: 0, explain: 'feed 喂养，feed the fish 喂鱼，feed the cat 喂猫。', tag: '动词' },
    { id: 'zb3-5', type: 'judge', q: '家务活都是大人的事，小孩子不用做。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦！家里的事人人有份，小孩也可以扫地、擦桌子，做家务小帮手！', tag: '品德养成' },
    { id: 'zb3-6', type: 'choice', q: '"wash the dishes" 的意思是：', options: ['洗碗', '洗手', '洗衣服', '洗车'], answer: 0, explain: 'wash 洗，dishes 碗碟，wash the dishes 洗碗，记得轻拿轻放。', tag: '家务' },
    { id: 'zb3-7', type: 'choice', q: '想帮妈妈干活，可以说：', options: ['Let me help you!', 'Go away!', 'I want to play.', 'Not me!'], answer: 0, explain: 'Let me help you! 让我来帮你！主动帮忙的孩子最贴心！', tag: '句型' },
    { id: 'zb3-8', type: 'choice', q: '玩具玩完之后应该：', options: ['收拾好放回原处', '扔在地上', '藏在床底下', '送给别人'], answer: 0, explain: 'Put away your toys. 把玩具收好，tidy and clean 又整洁又干净！', tag: '习惯养成' },
    { id: 'zb3-9', type: 'judge', q: '"tidy up the room" 意思是"整理房间"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'tidy up 收拾整理，自己的房间自己整理，干净又舒服。', tag: '动词短语' },
    { id: 'zb3-10', type: 'choice', q: '帮忙做家务后，家人会对你说：', options: ['Thank you! You\'re a good helper!', 'You are bad!', 'Never do that!', 'Don\'t touch!'], answer: 0, explain: 'good helper 好帮手，帮完忙家人会说谢谢，家里更温暖！', tag: '品德养成' },
  ],
  zb4: [
    { id: 'zb4-1', type: 'choice', q: '"I\'m happy." 的意思是：', options: ['我很开心。', '我很生气。', '我很累。', '我很难过。'], answer: 0, explain: 'happy 开心的，I\'m happy. 我很开心，笑容挂在脸上！', tag: '情绪' },
    { id: 'zb4-2', type: 'choice', q: '"sad" 的意思是：', options: ['难过的', '开心的', '生气的', '害怕的'], answer: 0, explain: 'sad 难过的，和 happy 相反，难过时可以说 I\'m sad. 我难过了。', tag: '情绪' },
    { id: 'zb4-3', type: 'choice', q: '跑完步满头大汗，你会觉得：', options: ['tired 累的', 'happy 开心的', 'angry 生气的', 'scared 害怕的'], answer: 0, explain: 'tired 累的，运动后休息一下，喝口水就不累啦。', tag: '情绪' },
    { id: 'zb4-4', type: 'choice', q: '想知道对方心情怎么样，可以问：', options: ['How do you feel?', 'What is this?', 'How old are you?', 'Where are you from?'], answer: 0, explain: 'How do you feel? 你感觉怎么样？回答：I\'m happy. 我很开心。', tag: '句型' },
    { id: 'zb4-5', type: 'judge', q: '生气的时候可以大喊大叫、摔东西。', options: ['√ 对', '✗ 错'], answer: 1, explain: '不对！生气时先深呼吸，或者告诉大人，打人摔物会伤害自己和别人。', tag: '情绪管理' },
    { id: 'zb4-6', type: 'choice', q: '朋友难过了，你可以：', options: ['安慰他：Don\'t be sad.', '嘲笑他', '跑开', '告诉所有人'], answer: 0, explain: 'Don\'t be sad. 别难过啦！安慰朋友，友谊更温暖。', tag: '品德养成' },
    { id: 'zb4-7', type: 'choice', q: '"thirsty" 的意思是：', options: ['口渴的', '饿的', '饱的', '困的'], answer: 0, explain: 'thirsty 口渴的，I\'m thirsty. 我渴了，多喝白开水身体好。', tag: '情绪感受' },
    { id: 'zb4-8', type: 'choice', q: '"I\'m hungry." 的意思是：', options: ['我饿了。', '我渴了。', '我饱了。', '我困了。'], answer: 0, explain: 'hungry 饿的，想吃饭说 I\'m hungry，记得按时吃饭哦！', tag: '情绪感受' },
    { id: 'zb4-9', type: 'judge', q: '把开心的事和家人分享，快乐会变多。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Sharing makes happiness double. 分享快乐，快乐加倍！', tag: '品德养成' },
    { id: 'zb4-10', type: 'choice', q: '黑夜一个人害怕时，最好：', options: ['告诉爸爸妈妈', '一直哭', '躲起来不说', '生闷气'], answer: 0, explain: 'scared 害怕的，害怕时告诉大人，他们会陪着你、保护你。', tag: '情绪管理' },
  ],
  zb5: [
    { id: 'zb5-1', type: 'choice', q: '"Work time" 的意思是：', options: ['劳动时间', '吃饭时间', '游戏时间', '睡觉时间'], answer: 0, explain: 'work 工作/劳动，work time 劳动时间，值日生该出场啦！', tag: '短语理解' },
    { id: 'zb5-2', type: 'choice', q: '教室值日生擦黑板，英语说：', options: ['clean the blackboard', 'watch TV', 'open the door', 'read a book'], answer: 0, explain: 'blackboard 黑板，clean the blackboard 擦黑板，值日工作之一。', tag: '值日' },
    { id: 'zb5-3', type: 'choice', q: '"class duty" 指的是：', options: ['班级值日', '家庭作业', '课外班', '考试'], answer: 0, explain: 'duty 职责，class duty 班级值日，人人轮流为大家服务。', tag: '值日' },
    { id: 'zb5-4', type: 'choice', q: '值日时分工合作，应该：', options: ['各做各的，互相帮助', '都让别人做', '偷懒躲起来', '只擦一小块'], answer: 0, explain: '分工合作效率高：你扫地我擦桌——Many hands make light work. 人多好办事。', tag: '合作' },
    { id: 'zb5-5', type: 'judge', q: '轮到我值日时，我可以先做完自己的事再来劳动。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！值日是大家的约定，轮到自己就要认真完成，不能偷懒。', tag: '责任' },
    { id: 'zb5-6', type: 'choice', q: '把教室打扫干净后，教室变得：', options: ['clean and tidy', 'dirty and messy', 'dark and cold', 'small and old'], answer: 0, explain: 'clean 干净的，tidy 整洁的，干净的教室大家学得开心！', tag: '形容词' },
    { id: 'zb5-7', type: 'choice', q: '同学帮你一起值日，你要说：', options: ['Thank you!', 'You\'re wrong.', 'Hurry up!', 'Go away!'], answer: 0, explain: 'Thank you! 谢谢你帮我，有礼貌的值日生人人夸。', tag: '礼貌用语' },
    { id: 'zb5-8', type: 'choice', q: '"It\'s my turn today." 的意思是：', options: ['今天轮到我了。', '今天我不来。', '今天是星期一。', '今天我生日。'], answer: 0, explain: 'turn 轮流，It\'s my turn. 轮到我了，值日表上看得清。', tag: '句型' },
    { id: 'zb5-9', type: 'judge', q: '值日做完要认真检查，看看有没有漏掉的地方。', options: ['√ 对', '✗ 错'], answer: 0, explain: '做完再检查一遍，角落也别放过，做事认真不马虎！', tag: '习惯养成' },
    { id: 'zb5-10', type: 'choice', q: '劳动结束后要先做什么？', options: ['洗干净小手', '马上吃零食', '躺下睡觉', '去玩游戏'], answer: 0, explain: 'Wash your hands. 劳动后先洗手，讲卫生的小朋友少生病。', tag: '卫生习惯' },
  ],
  zbr: [
    { id: 'zbr-1', type: 'choice', q: '下面哪个是数字？', options: ['six', 'sit', 'sun', 'sister'], answer: 0, explain: 'six 六是数字；sun 太阳、sister 姐妹都不是数字。', tag: '单词分类' },
    { id: 'zbr-2', type: 'choice', q: '"How many books do you have?" 回答：', options: ['I have three books.', 'They are blue.', 'It\'s on the desk.', 'I\'m happy.'], answer: 0, explain: 'How many 问数量，回答要用数字：three books。', tag: '句型' },
    { id: 'zbr-3', type: 'choice', q: '画太阳用什么颜色？', options: ['red / orange', 'black', 'grey', 'purple'], answer: 0, explain: '太阳红彤彤或橙黄色：red / orange，画出暖暖的太阳。', tag: '颜色' },
    { id: 'zbr-4', type: 'choice', q: '帮家里做的事是：', options: ['clean the floor', 'play games', 'watch TV all day', 'sleep late'], answer: 0, explain: 'clean the floor 扫地是家务；其他都不是帮忙哦。', tag: '家务' },
    { id: 'zbr-5', type: 'judge', q: '心情不好的时候，说出来会让心里舒服一些。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I\'m sad. 说出来，家人朋友会安慰你，坏心情跑光光。', tag: '情绪管理' },
    { id: 'zbr-6', type: 'choice', q: '值日生放学后要做什么？', options: ['clean the classroom', 'go swimming', 'play football', 'watch a film'], answer: 0, explain: 'clean the classroom 打扫教室，值日生的任务光荣又重要！', tag: '值日' },
    { id: 'zbr-7', type: 'choice', q: '26 个字母里，最后一个是：', options: ['Zz', 'Aa', 'Mm', 'Bb'], answer: 0, explain: '字母表从 Aa 到 Zz，Z 是最后一位。', tag: '字母' },
    { id: 'zbr-8', type: 'choice', q: '朋友赢了比赛很开心，你可以：', options: ['和他一起高兴：Great job!', '不理他', '嫉妒他', '说他坏话'], answer: 0, explain: 'Great job! 干得漂亮！为朋友高兴，友谊长长久久。', tag: '品德养成' },
    { id: 'zbr-9', type: 'judge', q: '做家务、当值日都能锻炼我们的动手能力。', options: ['√ 对', '✗ 错'], answer: 0, explain: '劳动最光荣！爱劳动的孩子更独立、更能干！', tag: '品德养成' },
    { id: 'zbr-10', type: 'choice', q: '老师问 How do you feel?，你精神满满地回答：', options: ['I\'m happy and great!', 'I\'m a book.', 'It\'s green.', 'Two, please.'], answer: 0, explain: '回答心情：I\'m happy / I feel great!，问什么答什么哦。', tag: '句型' },
  ],
}
