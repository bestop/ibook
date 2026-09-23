// 人教版PEP英语 三年级下册（三年级起点·六三制 2025春新版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（PEP）三年级下册（2025 春版）· 人民教育出版社
// 目录（电子课本网 dzkbw pep3x_2025 权威核对）：
//   Unit 1 Meeting new people（A How do we greet new people? / B How can we be polite?）
//   Unit 2 Expressing yourself（A How do we describe things? / B How do we express our feelings?）
//   Unit 3 Learning better（A What tools help us learn? / B How do our senses help us learn?）
//   Unit 4 Healthy food（A What do we eat? / B What shall we eat?）
//   Unit 5 Old toys（A What kinds of old things do you have? / B How can old things be reused?）
//   Unit 6 Numbers in life（A How do numbers help us count and sort? / B How do numbers help us make decisions?）
//   Revision: Going to a school fair
// 每单元一关，每关 10 题，共 7 关 70 题，题目 id 前缀 ztc

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
    id: 'ztc1',
    name: 'Unit 1',
    title: 'Meeting new people',
    emoji: '🤗',
    color: 'pink',
    lessons: ['How do we greet new people?', 'How can we be polite?', 'Where are you from?'],
    intro: '认识新朋友，问好有礼貌，我们来自天南海北！',
  },
  {
    id: 'ztc2',
    name: 'Unit 2',
    title: 'Expressing yourself',
    emoji: '🎭',
    color: 'orange',
    lessons: ['How do we describe things?', 'How do we express our feelings?', 'Happy or sad?'],
    intro: '会描述、会表达，说出心中的喜怒哀乐！',
  },
  {
    id: 'ztc3',
    name: 'Unit 3',
    title: 'Learning better',
    emoji: '📚',
    color: 'teal',
    lessons: ['What tools help us learn?', 'How do our senses help us learn?', 'Magic senses'],
    intro: '文具是帮手，感官是魔法，学习越来越轻松！',
  },
  {
    id: 'ztc4',
    name: 'Unit 4',
    title: 'Healthy food',
    emoji: '🥗',
    color: 'lime',
    lessons: ['What do we eat?', 'What shall we eat?', 'A healthy plate'],
    intro: '会看营养、会挑食物，健康餐桌我做主！',
  },
  {
    id: 'ztc5',
    name: 'Unit 5',
    title: 'Old toys',
    emoji: '🪀',
    color: 'amber',
    lessons: ['What kinds of old things do you have?', 'How can old things be reused?', 'Toy box story'],
    intro: '旧玩具别丢弃，修一修、送一送，宝贝再发光！',
  },
  {
    id: 'ztc6',
    name: 'Unit 6',
    title: 'Numbers in life',
    emoji: '🔢',
    color: 'cyan',
    lessons: ['How do numbers help us count and sort?', 'How do numbers help us make decisions?', 'Number hunt'],
    intro: '房号、页码、班级号，数字就藏在生活里！',
  },
  {
    id: 'ztcr',
    name: 'Revision',
    title: 'Going to a school fair',
    emoji: '🎪',
    color: 'rose',
    lessons: ['Going to a school fair', '常用表达语', '综合复习'],
    intro: '校园集市开张啦！用一学期的本领去逛逛！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ztc1: [
    { id: 'ztc1-1', type: 'choice', q: '"Meeting new people" 的意思是：', options: ['结识新朋友', '和家人生气', '帮助老朋友', '和同学告别'], answer: 0, explain: 'meet 认识、结识，meeting new people 认识新朋友，问好是第一步！', tag: '短语理解' },
    { id: 'ztc1-2', type: 'choice', q: '和新朋友打招呼，可以说：', options: ['Hello! Nice to meet you!', 'Go away!', 'Who are you?', 'Give me your pen!'], answer: 0, explain: 'Nice to meet you! 很高兴认识你！回答是 Nice to meet you, too.', tag: '打招呼' },
    { id: 'ztc1-3', type: 'choice', q: '想问对方"来自哪里"，问：', options: ['Where are you from?', 'How old are you?', 'What\'s this?', 'Who\'s she?'], answer: 0, explain: 'Where are you from? 你来自哪里？回答：I\'m from Beijing.', tag: '句型' },
    { id: 'ztc1-4', type: 'choice', q: '"I\'m from Shanghai." 的意思是：', options: ['我来自上海。', '我去上海。', '我住在海里。', '我爱上海。'], answer: 0, explain: 'be from 来自……，介绍自己的家乡：I\'m from...', tag: '句型' },
    { id: 'ztc1-5', type: 'judge', q: '别人自我介绍后，你也可以介绍自己。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Hello, I\'m... 你好，我是……，互相介绍才能成为朋友。', tag: '交友' },
    { id: 'ztc1-6', type: 'choice', q: '不小心撞到新同学，最有礼貌的做法是：', options: ['说 Sorry! 并问他没事吧', '假装没看见', '跑得更快', '笑出声音'], answer: 0, explain: 'Sorry! + Are you OK? 有道歉有关心，新朋友更愿意靠近你。', tag: '礼貌用语' },
    { id: 'ztc1-7', type: 'choice', q: '想请新朋友一起玩，可以说：', options: ['Would you like to play with us?', 'You can\'t play here.', 'This is my ball, bye!', 'Don\'t look at me.'], answer: 0, explain: 'Would you like to...? 你愿意……吗？礼貌邀请的万能句。', tag: '句型' },
    { id: 'ztc1-8', type: 'judge', q: 'class 既是"班级"，也可以表示"同学们"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Good morning, class! 早上好，同学们！class 班级／同学们。', tag: '一词多义' },
    { id: 'ztc1-9', type: 'choice', q: '新同学名字叫 Bill，你可以叫他：', options: ['Bill', 'student Bill', 'boy', 'he'], answer: 0, explain: '直接叫名字最亲切，英语里名字开头字母要大写。', tag: '称呼' },
    { id: 'ztc1-10', type: 'choice', q: '"polite" 的意思是：', options: ['有礼貌的', '调皮的', '伤心的', '疲倦的'], answer: 0, explain: 'polite 有礼貌的，Be polite! 要有礼貌哦！', tag: '形容词' },
  ],
  ztc2: [
    { id: 'ztc2-1', type: 'choice', q: '"Expressing yourself" 的意思是：', options: ['表达自己', '打扮自己', '照顾自己', '改变自己'], answer: 0, explain: 'express 表达，expressing yourself 表达自己，把想法说出来！', tag: '短语理解' },
    { id: 'ztc2-2', type: 'choice', q: '形容大象"又大又重"，说：', options: ['big and heavy', 'small and light', 'tall and thin', 'short and fast'], answer: 0, explain: 'big 大的、heavy 重的，大象 big and heavy，用 and 连接两个形容词。', tag: '形容词' },
    { id: 'ztc2-3', type: 'choice', q: '小兔子的尾巴是"短的"，短的是：', options: ['short', 'long', 'big', 'fat'], answer: 0, explain: 'short 短的，反义词 long 长的，兔子尾巴 short。', tag: '形容词' },
    { id: 'ztc2-4', type: 'choice', q: '"I\'m happy today." 的意思是：', options: ['我今天很开心。', '我今天很累。', '我今天很生气。', '我今天很害怕。'], answer: 0, explain: 'happy 开心的，I\'m happy today. 我今天很开心！', tag: '情绪词汇' },
    { id: 'ztc2-5', type: 'choice', q: '考试得了满分，你的心情是：', options: ['happy 开心的', 'sad 难过的', 'angry 生气的', 'scared 害怕的'], answer: 0, explain: '得了满分当然 happy！开心的事要和大家分享。', tag: '情绪词汇' },
    { id: 'ztc2-6', type: 'choice', q: '好朋友要搬家了，你感到：', options: ['sad 难过', 'glad 高兴', 'proud 骄傲', 'tired 疲倦'], answer: 0, explain: 'sad 难过的，可以说 I\'m sad. 难过时可以找家人聊聊。', tag: '情绪词汇' },
    { id: 'ztc2-7', type: 'judge', q: '生气的时候可以深呼吸，再好好说出想法。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Take a deep breath. 深呼吸，再用 I\'m angry because... 说出原因，不做小火山。', tag: '情绪管理' },
    { id: 'ztc2-8', type: 'choice', q: '想知道朋友的感受，可以问：', options: ['How do you feel?', 'What colour is it?', 'Where is it?', 'How many books?'], answer: 0, explain: 'How do you feel? 你感觉怎么样？关心朋友的好问题。', tag: '句型' },
    { id: 'ztc2-9', type: 'judge', q: '表达自己就是想说什么就大喊大叫。', options: ['√ 对', '✗ 错'], answer: 1, explain: '表达自己要好好说话：先想清楚，再礼貌地说出来。', tag: '表达方法' },
    { id: 'ztc2-10', type: 'choice', q: '描述你的新书包"又新又漂亮"，说：', options: ['new and beautiful', 'old and dirty', 'big and sad', 'small and angry'], answer: 0, explain: 'new 新的、beautiful 漂亮的，形容词连用用 and 连接。', tag: '形容词' },
  ],
  ztc3: [
    { id: 'ztc3-1', type: 'choice', q: '"Learning better" 的意思是：', options: ['学得更好', '睡得更好', '跑得更快', '吃得更多'], answer: 0, explain: 'learn 学习，better 更好，用对方法和工具，学习事半功倍！', tag: '短语理解' },
    { id: 'ztc3-2', type: 'choice', q: '写字画图用的"铅笔"是：', options: ['pencil', 'ruler', 'crayon', 'book'], answer: 0, explain: 'pencil 铅笔，pencil case 铅笔盒，文具家族的小队长。', tag: '文具词汇' },
    { id: 'ztc3-3', type: 'choice', q: '画直线用的"尺子"是：', options: ['ruler', 'pencil', 'eraser', 'bag'], answer: 0, explain: 'ruler 尺子，线画得直不直，全靠尺子来帮忙。', tag: '文具词汇' },
    { id: 'ztc3-4', type: 'choice', q: '写错字可以擦掉的"橡皮"是：', options: ['eraser', 'ruler', 'pen', 'sharpener'], answer: 0, explain: 'eraser 橡皮，轻轻一擦改错字，本子干净又整齐。', tag: '文具词汇' },
    { id: 'ztc3-5', type: 'choice', q: '上课听讲主要用的"耳朵"是：', options: ['ears', 'eyes', 'hands', 'nose'], answer: 0, explain: 'ear→ears 耳朵，用来听 listen；看是用眼睛 eyes。', tag: '身体部位' },
    { id: 'ztc3-6', type: 'choice', q: '闻到饭菜香味用的"鼻子"是：', options: ['nose', 'ear', 'eye', 'mouth'], answer: 0, explain: 'nose 鼻子，用来闻 smell；Smell it! 闻一闻！', tag: '身体部位' },
    { id: 'ztc3-7', type: 'judge', q: '摸一摸、闻一闻、尝一尝，都是学习的好方法。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'touch 摸、smell 闻、taste 尝，感官是学习的魔法工具！', tag: '学习方法' },
    { id: 'ztc3-8', type: 'choice', q: '尝出酸甜苦辣用的"舌头"在：', options: ['mouth 嘴巴里', 'nose 鼻子上', 'ear 耳朵里', 'hand 手上'], answer: 0, explain: 'tongue 舌头藏在嘴巴 mouth 里，taste 尝味道全靠它。', tag: '身体部位' },
    { id: 'ztc3-9', type: 'choice', q: '读书看图画主要用：', options: ['eyes 眼睛看', 'ears 耳朵听', 'nose 鼻子闻', 'hands 手摸'], answer: 0, explain: 'see 看，用眼睛 eyes；看书、看黑板都要保护好眼睛！', tag: '学习方法' },
    { id: 'ztc3-10', type: 'choice', q: '文具用完以后应该：', options: ['收进铅笔盒放好', '扔在地上', '送给别人', '藏在同学书包里'], answer: 0, explain: 'Put away your pencil case. 收好文具，好习惯让学习更轻松。', tag: '习惯养成' },
  ],
  ztc4: [
    { id: 'ztc4-1', type: 'choice', q: '"Healthy food" 的意思是：', options: ['健康食物', '昂贵食物', '路边零食', '冰冻饮料'], answer: 0, explain: 'healthy 健康的，healthy food 健康食物，多吃身体棒！', tag: '短语理解' },
    { id: 'ztc4-2', type: 'choice', q: '下面哪种是健康饮品？', options: ['milk 牛奶', 'cola 可乐', 'iced tea 冰红茶', 'soda 汽水'], answer: 0, explain: 'milk 牛奶补钙长个子；含糖饮料要少喝哦。', tag: '食物词汇' },
    { id: 'ztc4-3', type: 'choice', q: '蔬菜和水果的英语是：', options: ['vegetables and fruit', 'meat and fish', 'bread and cake', 'water and juice'], answer: 0, explain: 'vegetables 蔬菜、fruit 水果，每天都要吃够量！', tag: '食物词汇' },
    { id: 'ztc4-4', type: 'choice', q: '"鸡肉"的英语是：', options: ['chicken', 'kitchen', 'chick', 'cook'], answer: 0, explain: 'chicken 鸡肉（也指小鸡），kitchen 是厨房，别弄混哦。', tag: '单词辨析' },
    { id: 'ztc4-5', type: 'judge', q: '零食吃多了更有力气，主食可以不吃。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！rice 米饭、noodles 面条等主食才给身体提供能量，零食要少吃。', tag: '营养常识' },
    { id: 'ztc4-6', type: 'choice', q: '一日三餐应该：', options: ['按时吃，不暴饮暴食', '早饭不吃', '晚饭吃两份', '饿了才吃零食'], answer: 0, explain: 'breakfast 早饭、lunch 午饭、dinner 晚饭，按时吃饭身体好。', tag: '健康习惯' },
    { id: 'ztc4-7', type: 'choice', q: '"What shall we eat?" 的意思是：', options: ['我们该吃什么呢？', '我们吃过了吗？', '我们想吃辣的吗？', '我们还需要买吗？'], answer: 0, explain: 'shall 我们……好吗，What shall we eat? 商量着搭配营养餐！', tag: '句型' },
    { id: 'ztc4-8', type: 'choice', q: '营养餐盘里最好有：', options: ['蔬菜、主食和蛋白质', '只有炸鸡', '只有糖果', '只有蛋糕'], answer: 0, explain: '荤素搭配、颜色丰富，营养餐盘让身体全方位变强！', tag: '营养常识' },
    { id: 'ztc4-9', type: 'judge', q: '薯片、糖果吃多了容易长蛀牙，要少吃。', options: ['√ 对', '✗ 错'], answer: 0, explain: '糖分多了蛀牙来，蔬菜水果是更好的加餐选择！', tag: '健康习惯' },
    { id: 'ztc4-10', type: 'choice', q: '"yummy" 的意思是：', options: ['好吃的', '难吃的', '辣的', '凉的'], answer: 0, explain: 'yummy 好吃的，Yummy, yummy! 香喷喷的饭菜来啦！', tag: '形容词' },
  ],
  ztc5: [
    { id: 'ztc5-1', type: 'choice', q: '"Old toys" 的意思是：', options: ['旧玩具', '新玩具', '玩具店', '玩具熊'], answer: 0, explain: 'old 旧的，old toys 旧玩具，旧物也有新用处！', tag: '短语理解' },
    { id: 'ztc5-2', type: 'choice', q: '天上飞的"风筝"是：', options: ['kite', 'bike', 'doll', 'ball'], answer: 0, explain: 'kite 风筝，fly a kite 放风筝，春天户外好游戏。', tag: '玩具词汇' },
    { id: 'ztc5-3', type: 'choice', q: '可以抱着的布娃娃"娃娃"是：', options: ['doll', 'robot', 'car', 'kite'], answer: 0, explain: 'doll 娃娃，robot 机器人，toy car 玩具车，都是玩具家族。', tag: '玩具词汇' },
    { id: 'ztc5-4', type: 'choice', q: '旧玩具还很新，可以：', options: ['送给需要的小朋友', '直接扔进垃圾桶', '踩坏它', '藏起来不用'], answer: 0, explain: 'give away 送出去，旧物有了新主人，环保又暖心！', tag: '环保意识' },
    { id: 'ztc5-5', type: 'judge', q: '坏掉的玩具没用了，直接扔掉，不用修也不用送人。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！Fix it first! 修一修还能玩，送给需要的小朋友，旧物再利用既环保又暖心。', tag: '环保意识' },
    { id: 'ztc5-6', type: 'choice', q: '"reuse" 的意思是：', options: ['再利用', '重新买', '扔掉', '卖掉'], answer: 0, explain: 're- 再、use 用 = reuse 再利用，地球资源省着用！', tag: '动词' },
    { id: 'ztc5-7', type: 'choice', q: '整理玩具箱，可以按：', options: ['种类或颜色分类摆放', '全部倒一起', '塞进床底下', '放在地板上'], answer: 0, explain: 'sort 分类，按类摆放找得快，房间整齐心情好！', tag: '整理习惯' },
    { id: 'ztc5-8', type: 'choice', q: '玩具车里没电了，应该：', options: ['充电或换电池再玩', '扔掉整个玩具', '再买十个', '哭一场'], answer: 0, explain: '先检查、充电再试试，会解决问题的孩子最棒！', tag: '解决问题' },
    { id: 'ztc5-9', type: 'judge', q: '把自己不玩的旧玩具送给弟弟妹妹，是分享也是环保。', options: ['√ 对', '✗ 错'], answer: 0, explain: '分享快乐 double，旧物利用 saving，一举两得！', tag: '品德养成' },
    { id: 'ztc5-10', type: 'choice', q: '下面哪种做法最环保？', options: ['旧物改造再利用', '天天买新玩具', '用完就扔', '浪费水电'], answer: 0, explain: 'Reuse and recycle! 旧物改造、循环利用，地球妈妈笑开花！', tag: '环保意识' },
  ],
  ztc6: [
    { id: 'ztc6-1', type: 'choice', q: '"Numbers in life" 的意思是：', options: ['生活中的数字', '很难的数学题', '数字玩具', '数字歌'], answer: 0, explain: 'numbers 数字，in life 在生活中，数字就藏在身边！', tag: '短语理解' },
    { id: 'ztc6-2', type: 'choice', q: '"数字 1-10" 中第 5 个数字是：', options: ['five', 'four', 'six', 'fifty'], answer: 0, explain: 'one two three four five… 第五个是 five 五。', tag: '数字' },
    { id: 'ztc6-3', type: 'choice', q: '酒店房间的门牌"三零二"号是：', options: ['302', '230', '3-20', '3200'], answer: 0, explain: '房间号直接连读：Room three oh two（302）。', tag: '数字运用' },
    { id: 'ztc6-4', type: 'choice', q: '课堂上老师按学号点名，学号是数字，用来：', options: ['分辨每一位同学', '给同学起外号', '决定谁吃饭', '排挤同学'], answer: 0, explain: '数字帮我们 count 数一数、sort 分一分，方便又公平！', tag: '数字运用' },
    { id: 'ztc6-5', type: 'judge', q: '坐公交车不用看路线编号，随便上哪辆都行。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！Bus No. 5 就是 5 路车，看清数字才不会坐错车。', tag: '数字运用' },
    { id: 'ztc6-6', type: 'choice', q: '买 3 元的贴纸，付给售货员：', options: ['3 元', '30 元不找零', '0.3 元', '300 元'], answer: 0, explain: '多少钱付多少，学看价签上的数字，做精明小买家！', tag: '数字运用' },
    { id: 'ztc6-7', type: 'choice', q: '图书馆书架上的编号是用来：', options: ['快速找到想要的书', '装饰书架', '给书称重', '数书的重量'], answer: 0, explain: '编号像书的家庭住址，按号查找又快又准！', tag: '数字运用' },
    { id: 'ztc6-8', type: 'judge', q: '电话号码是一串数字，紧急时要拨 110、120 等求助。', options: ['√ 对', '✗ 错'], answer: 0, explain: '记住求助电话：110 报警、120 急救，数字关键时刻帮大忙！', tag: '生活常识' },
    { id: 'ztc6-9', type: 'choice', q: '"How many books?" 是在问：', options: ['有多少本书？', '书在哪里？', '书是什么颜色？', '你喜欢书吗？'], answer: 0, explain: 'How many...? 多少……，问数量；回答用数字：Ten books.', tag: '句型' },
    { id: 'ztc6-10', type: 'choice', q: '运动会跑步比赛的名次"第一名"是：', options: ['first', 'one', 'once', 'fist'], answer: 0, explain: 'first 第一名，second 第二名，third 第三名，序数词排座次。', tag: '数字运用' },
  ],
  ztcr: [
    { id: 'ztcr-1', type: 'choice', q: '"school fair" 的意思是：', options: ['校园集市', '学校操场', '校园歌曲', '学校食堂'], answer: 0, explain: 'fair 集市，school fair 校园集市，摆摊、换物、献爱心！', tag: '短语理解' },
    { id: 'ztcr-2', type: 'choice', q: '集市上认识新伙伴，先说：', options: ['Hello! I\'m... What\'s your name?', 'Give me your toy!', 'Bye-bye!', 'Don\'t talk!'], answer: 0, explain: '先问好再互通姓名，交朋友的礼貌三步走！', tag: '交友' },
    { id: 'ztcr-3', type: 'choice', q: '在集市上用 5 元买一支旧钢笔，用到的本领是：', options: ['认识数字和价格', '唱歌跳舞', '画画', '跑步'], answer: 0, explain: 'Numbers in life！看价签、算价钱，数字本领派上用场。', tag: '数字运用' },
    { id: 'ztcr-4', type: 'choice', q: '卖出的旧玩具箱子上写着 "Old toys, good price"，意思是：', options: ['旧玩具，好价格', '新玩具，不要钱', '玩具坏了', '玩具租借'], answer: 0, explain: 'old 旧的、price 价格，旧物再利用，环保集市我参与！', tag: '短语理解' },
    { id: 'ztcr-5', type: 'judge', q: '集市上要轻声讲价，不吵不闹守秩序。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Talk quietly. 轻声交流，集市热闹又有礼貌！', tag: '礼貌用语' },
    { id: 'ztcr-6', type: 'choice', q: '向外国小朋友介绍你的家乡，说：', options: ['I\'m from Hangzhou.', 'I am nine.', 'I like blue.', 'My bag is new.'], answer: 0, explain: 'I\'m from... 我来自……，介绍家乡用这个句型。', tag: '句型' },
    { id: 'ztcr-7', type: 'choice', q: '摊位上的健康小食可以选：', options: ['fruit salad 水果沙拉', 'spicy chips 辣条', 'cola 可乐', 'lots of candy 大把糖果'], answer: 0, explain: 'Healthy food 健康食物当主角，水果沙拉受欢迎！', tag: '健康习惯' },
    { id: 'ztcr-8', type: 'choice', q: '收到摊位姐姐送的贴纸，你说：', options: ['Thank you so much!', 'Give me more!', 'I don\'t like it.', 'It\'s ugly.'], answer: 0, explain: 'Thank you so much! 太感谢啦！收到礼物要道谢。', tag: '礼貌用语' },
    { id: 'ztcr-9', type: 'judge', q: '没卖完的旧书可以捐给班级图书角。', options: ['√ 对', '✗ 错'], answer: 0, explain: '旧书捐出来，大家一起读，Reuse 再利用棒棒哒！', tag: '环保意识' },
    { id: 'ztcr-10', type: 'choice', q: '集市结束后，我们应该：', options: ['一起收拾摊位', '直接跑回家', '把垃圾留下', '拿走别人的东西'], answer: 0, explain: 'Clean up together! 一起收拾，有始有终是好习惯！', tag: '习惯养成' },
  ],
}
