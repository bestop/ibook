// 沪教版（五四学制）英语 二年级上册（2024 新教材·2026 秋使用版）随堂知识点题库
// 教材：义务教育教科书（五·四学制）英语 二年级上册 · 上海教育出版社（国家教材委员会 2024 审核通过）
// 目录（沪学习官方 App 目录 + 21 世纪教育网同步课件全书核对）：
//   Starter: Our families and friends / Our teachers / Colours & Numbers / Letters
//   Unit 1 My morning / Unit 2 My room / Unit 3 On the way / Unit 4 Playing sports
//   Unit 5 In the sky / Unit 6 In the sea / Unit 7 Seasons / Unit 8 Yummy fruit
//   Unit 9 The five senses / Unit 10 This is me
// 每单元一关，每关 10 题，共 11 关 110 题，题目 id 前缀 h

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
    id: 'hst',
    name: 'Starter',
    title: '热身站',
    emoji: '🌟',
    color: 'amber',
    lessons: ['Our families and friends', 'Our teachers', 'Colours & Numbers', 'Letters'],
    intro: '颜色、数字、字母复习一遍，开学热身刚刚好！',
  },
  {
    id: 'h1',
    name: 'Unit 1',
    title: 'My morning',
    emoji: '🌅',
    color: 'orange',
    lessons: ['Get up', 'Good morning'],
    intro: 'Get up! 起床啦！说说你的清晨小节奏！',
  },
  {
    id: 'h2',
    name: 'Unit 2',
    title: 'My room',
    emoji: '🛏️',
    color: 'sky',
    lessons: ['In my room', 'Tidy my room'],
    intro: '床、书桌、小台灯，我的房间我最爱！',
  },
  {
    id: 'h3',
    name: 'Unit 3',
    title: 'On the way',
    emoji: '🚌',
    color: 'emerald',
    lessons: ['To school', 'Traffic lights'],
    intro: '走路、坐车去上学，路上安全记心间！',
  },
  {
    id: 'h4',
    name: 'Unit 4',
    title: 'Playing sports',
    emoji: '⚽',
    color: 'lime',
    lessons: ['Run and jump', 'Ball games'],
    intro: '跑步、跳高、踢足球，运动健儿就是你！',
  },
  {
    id: 'h5',
    name: 'Unit 5',
    title: 'In the sky',
    emoji: '☁️',
    color: 'cyan',
    lessons: ['Sun and moon', 'Stars and clouds'],
    intro: '太阳、月亮、小星星，抬头看看天空中有什么！',
  },
  {
    id: 'h6',
    name: 'Unit 6',
    title: 'In the sea',
    emoji: '🐠',
    color: 'teal',
    lessons: ['Sea animals', 'The blue sea'],
    intro: '大海里有什么？小鱼游来游去真快乐！',
  },
  {
    id: 'h7',
    name: 'Unit 7',
    title: 'Seasons',
    emoji: '🍂',
    color: 'rose',
    lessons: ['Four seasons', 'Weather talk'],
    intro: '春夏秋冬转圈圈，说说季节的变化！',
  },
  {
    id: 'h8',
    name: 'Unit 8',
    title: 'Yummy fruit',
    emoji: '🍎',
    color: 'red',
    lessons: ['I like fruit', 'Fruit salad'],
    intro: '苹果香蕉甜甜梨，多吃水果身体好！',
  },
  {
    id: 'h9',
    name: 'Unit 9',
    title: 'The five senses',
    emoji: '👀',
    color: 'violet',
    lessons: ['See and hear', 'Smell, taste and touch'],
    intro: '眼看、耳听、鼻闻、嘴尝、手摸，五大感官本领大！',
  },
  {
    id: 'h10',
    name: 'Unit 10',
    title: 'This is me',
    emoji: '🌟',
    color: 'pink',
    lessons: ['All about me', 'My show time'],
    intro: '名字、年龄、小爱好，大声说：This is me!',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  hst: [
    { id: 'hst-1', type: 'choice', q: '"red" 是什么颜色？', options: ['红色', '蓝色', '黄色', '绿色'], answer: 0, explain: 'red 红色，像太阳、像红花。', tag: '颜色' },
    { id: 'hst-2', type: 'choice', q: '天空的颜色 "blue" 是：', options: ['蓝色', '红色', '绿色', '黑色'], answer: 0, explain: 'blue 蓝色，蓝蓝的天空 blue sky。', tag: '颜色' },
    { id: 'hst-3', type: 'choice', q: '"one, two, three" 是：', options: ['数字', '颜色', '动物', '水果'], answer: 0, explain: 'one two three 是数字 numbers，一起大声数！', tag: '数字' },
    { id: 'hst-4', type: 'judge', q: '英文字母有 26 个。', options: ['√ 对', '✗ 错'], answer: 0, explain: '字母表从 Aa 到 Zz 一共 26 个字母。', tag: '字母' },
    { id: 'hst-5', type: 'choice', q: '小草的颜色 "green" 是：', options: ['绿色', '红色', '蓝色', '白色'], answer: 0, explain: 'green 绿色，green grass 绿绿的草。', tag: '颜色' },
    { id: 'hst-6', type: 'choice', q: '"How many?" 是在问：', options: ['多少个', '是什么', '在哪里', '几岁了'], answer: 0, explain: 'How many...? 多少个？问数量的时候用。', tag: '句型' },
    { id: 'hst-7', type: 'choice', q: '字母表的第一个字母是：', options: ['Aa', 'Bb', 'Zz', 'Mm'], answer: 0, explain: 'Aa 是第一个字母，Zz 是最后一个。', tag: '字母' },
    { id: 'hst-8', type: 'choice', q: '香蕉的颜色 "yellow" 是：', options: ['黄色', '紫色', '黑色', '红色'], answer: 0, explain: 'yellow 黄色，yellow banana 黄黄的香蕉。', tag: '颜色' },
    { id: 'hst-9', type: 'choice', q: '"ten" 是数字：', options: ['10', '5', '2', '9'], answer: 0, explain: 'ten 十，两只手的手指正好十个。', tag: '数字' },
    { id: 'hst-10', type: 'judge', q: '见到老师同学，可以装作没看见，不用问好。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'Hello! Good morning! 见到老师同学要主动大声问好，做有礼貌的小学生。', tag: '品德' },
  ],
  h1: [
    { id: 'h1-1', type: 'choice', q: '"get up" 的意思是：', options: ['起床', '睡觉', '跑步', '坐下'], answer: 0, explain: 'get up 起床，早上听到闹钟就要 get up 啦！', tag: '词汇' },
    { id: 'h1-2', type: 'choice', q: '"wash my face" 的意思是：', options: ['洗脸', '洗手', '洗头', '洗脚'], answer: 0, explain: 'wash 洗，face 脸；wash my face 洗脸。', tag: '句型' },
    { id: 'h1-3', type: 'choice', q: '"brush my teeth" 的意思是：', options: ['刷牙', '梳头', '洗手', '擦嘴'], answer: 0, explain: 'brush 刷，tooth 牙齿（复数 teeth），早晚都要刷牙。', tag: '句型' },
    { id: 'h1-4', type: 'choice', q: '"breakfast" 是指：', options: ['早餐', '午餐', '晚餐', '零食'], answer: 0, explain: 'breakfast 早餐，break 打破 + fast 禁食，"打破一夜的禁食"就是早餐。', tag: '词汇' },
    { id: 'h1-5', type: 'judge', q: '早上起床后不用刷牙洗脸，直接去上学就行。', options: ['√ 对', '✗ 错'], answer: 1, explain: '起床后要先刷牙洗脸、吃好早餐再去上学，干干净净精神饱满。', tag: '常识' },
    { id: 'h1-6', type: 'choice', q: '"morning" 是指：', options: ['早上', '下午', '晚上', '深夜'], answer: 0, explain: 'morning 早上，My morning 我的早晨。', tag: '词汇' },
    { id: 'h1-7', type: 'choice', q: '早上喝牛奶吃鸡蛋，这是：', options: ['breakfast', 'lunch', 'dinner', 'picnic'], answer: 0, explain: '早上吃的是 breakfast 早餐；lunch 午餐，dinner 晚餐。', tag: '常识' },
    { id: 'h1-8', type: 'choice', q: '"Good morning!" 用在：', options: ['早上', '深夜', '半夜', '随便什么时候'], answer: 0, explain: 'Good morning 早上好，中午之前用都合适。', tag: '问候语' },
    { id: 'h1-9', type: 'judge', q: '早睡早起身体好。', options: ['√ 对', '✗ 错'], answer: 0, explain: '晚上早睡，早上早起，白天才有精神。', tag: '常识' },
    { id: 'h1-10', type: 'choice', q: '早上见到家人，说：', options: ['Good morning!', 'Good night!', 'Goodbye!', 'Thank you!'], answer: 0, explain: '早上问好 Good morning!，甜甜的问候开启一天。', tag: '情景' },
  ],
  h2: [
    { id: 'h2-1', type: 'choice', q: '"room" 的意思是：', options: ['房间', '教室', '公园', '商店'], answer: 0, explain: 'room 房间，my room 我的房间。', tag: '词汇' },
    { id: 'h2-2', type: 'choice', q: '睡觉用的"床"是：', options: ['bed', 'desk', 'chair', 'lamp'], answer: 0, explain: 'bed 床，go to bed 上床睡觉。', tag: '词汇' },
    { id: 'h2-3', type: 'choice', q: '写字看书的"书桌"是：', options: ['desk', 'bed', 'sofa', 'box'], answer: 0, explain: 'desk 书桌，在书桌上写字画画。', tag: '词汇' },
    { id: 'h2-4', type: 'choice', q: '"chair" 是指：', options: ['椅子', '桌子', '床', '门'], answer: 0, explain: 'chair 椅子，坐的家具。', tag: '词汇' },
    { id: 'h2-5', type: 'choice', q: '"lamp" 是指：', options: ['台灯', '窗户', '地板', '窗帘'], answer: 0, explain: 'lamp 台灯，晚上开灯看书。', tag: '词汇' },
    { id: 'h2-6', type: 'judge', q: '自己的房间都留给爸爸妈妈整理，我不用动手。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'Tidy my room——自己的房间自己整理，被子叠好、玩具归位，最能干！', tag: '品德' },
    { id: 'h2-7', type: 'choice', q: '"my room" 的意思是：', options: ['我的房间', '你的房间', '他的房间', '大房间'], answer: 0, explain: 'my 我的；my room 我的房间。', tag: '句型' },
    { id: 'h2-8', type: 'choice', q: '累了要休息，睡觉用的家具是：', options: ['bed', 'lamp', 'desk', 'door'], answer: 0, explain: 'bed 床，睡觉睡在床上；lamp 是灯。', tag: '常识' },
    { id: 'h2-9', type: 'choice', q: '房间里晚上用来照明的是：', options: ['lamp', 'bed', 'chair', 'bag'], answer: 0, explain: 'lamp 台灯会发光，照明全靠它。', tag: '常识' },
    { id: 'h2-10', type: 'judge', q: '看书时坐姿要端正，保护眼睛。', options: ['√ 对', '✗ 错'], answer: 0, explain: '坐得直、离书远一点，小眼睛才明亮。', tag: '常识' },
  ],
  h3: [
    { id: 'h3-1', type: 'choice', q: '"bus" 是指：', options: ['公共汽车', '自行车', '火车', '飞机'], answer: 0, explain: 'bus 公共汽车，by bus 坐公交车。', tag: '词汇' },
    { id: 'h3-2', type: 'choice', q: '两个轮子自己蹬的"自行车"是：', options: ['bike', 'bus', 'car', 'ship'], answer: 0, explain: 'bike 自行车，也可以说 bicycle，骑车戴好头盔。', tag: '词汇' },
    { id: 'h3-3', type: 'choice', q: '"walk" 的意思是：', options: ['步行', '开车', '游泳', '飞行'], answer: 0, explain: 'walk 走路、步行，I walk to school. 我走路去学校。', tag: '词汇' },
    { id: 'h3-4', type: 'choice', q: '"car" 是指：', options: ['小汽车', '公交车', '火车', '地铁'], answer: 0, explain: 'car 小汽车，四个轮子嘀嘀嘀。', tag: '词汇' },
    { id: 'h3-5', type: 'judge', q: '过马路要走斑马线，注意来往车辆。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'On the way 路上安全第一：走斑马线、看红绿灯、左右看看再走。', tag: '安全' },
    { id: 'h3-6', type: 'choice', q: '"on the way to school" 的意思是：', options: ['在上学的路上', '在学校里面', '放学回家', '在操场上'], answer: 0, explain: 'on the way to school 在上学路上，注意安全哦。', tag: '句型' },
    { id: 'h3-7', type: 'choice', q: '红灯亮了，应该：', options: ['停下来等一等', '快速跑过去', '闭上眼睛', '原地跳舞'], answer: 0, explain: '红灯停、绿灯行，stop and wait 等一等最安全。', tag: '安全' },
    { id: 'h3-8', type: 'choice', q: '"我走路去学校"说：', options: ['I walk to school.', 'I swim to school.', 'I fly to school.', 'I sleep to school.'], answer: 0, explain: 'walk to school 走路上学，运动又环保。', tag: '句型' },
    { id: 'h3-9', type: 'judge', q: '坐小汽车要系好安全带，不把头伸出窗外。', options: ['√ 对', '✗ 错'], answer: 0, explain: '安全带是生命带，坐车守规则，全家都放心。', tag: '安全' },
    { id: 'h3-10', type: 'choice', q: '长长的、在铁轨上跑的"火车"是：', options: ['train', 'bus', 'bike', 'boat'], answer: 0, explain: 'train 火车，呜呜呜，一节一节跑得快。', tag: '词汇' },
  ],
  h4: [
    { id: 'h4-1', type: 'choice', q: '"run" 是指：', options: ['跑步', '走路', '睡觉', '读书'], answer: 0, explain: 'run 跑步，Run and jump 跑跑跳跳身体好。', tag: '词汇' },
    { id: 'h4-2', type: 'choice', q: '"jump" 是指：', options: ['跳', '跑', '爬', '游'], answer: 0, explain: 'jump 跳，能跳多高呀？', tag: '词汇' },
    { id: 'h4-3', type: 'choice', q: '用脚踢的"足球"是：', options: ['football', 'basketball', 'ping-pong', 'book'], answer: 0, explain: 'football 足球，play football 踢足球。', tag: '词汇' },
    { id: 'h4-4', type: 'choice', q: '用手拍的"篮球"是：', options: ['basketball', 'football', 'balloon', 'ball'], answer: 0, explain: 'basketball 篮球，basket 篮 + ball 球。', tag: '词汇' },
    { id: 'h4-5', type: 'judge', q: '运动前不用热身，直接猛烈运动就可以。', options: ['√ 对', '✗ 错'], answer: 1, explain: '运动前要 warm up 热身，拉拉筋、伸伸手，身体活动开才不容易受伤。', tag: '常识' },
    { id: 'h4-6', type: 'choice', q: '"play football" 的意思是：', options: ['踢足球', '拍篮球', '打乒乓球', '扔皮球'], answer: 0, explain: 'play football 踢足球，用脚踢哦。', tag: '句型' },
    { id: 'h4-7', type: 'choice', q: '"swim" 是指：', options: ['游泳', '跑步', '跳高', '爬山'], answer: 0, explain: 'swim 游泳，小鱼会游泳（Fish can swim.）。', tag: '词汇' },
    { id: 'h4-8', type: 'choice', q: '运动之前应该先：', options: ['做热身运动', '喝可乐', '睡一觉', '玩手机'], answer: 0, explain: '运动前热身（warm up），拉拉筋、伸伸手，不受伤。', tag: '常识' },
    { id: 'h4-9', type: 'choice', q: '"我妹妹会跳舞"说：', options: ['My sister can dance.', 'My sister can swim.', 'My dad can dance.', 'I can dance.'], answer: 0, explain: 'can 表示"会"；dance 跳舞。', tag: '句型' },
    { id: 'h4-10', type: 'judge', q: '运动后要洗手、喝水，及时擦汗。', options: ['√ 对', '✗ 错'], answer: 0, explain: '运动后讲卫生：洗手、擦汗、慢慢喝水。', tag: '常识' },
  ],
  h5: [
    { id: 'h5-1', type: 'choice', q: '白天高高挂的"太阳"是：', options: ['sun', 'moon', 'star', 'cloud'], answer: 0, explain: 'sun 太阳，给我们光和热。', tag: '词汇' },
    { id: 'h5-2', type: 'choice', q: '晚上圆圆的"月亮"是：', options: ['moon', 'sun', 'star', 'light'], answer: 0, explain: 'moon 月亮，有时候圆圆的，有时候弯弯的。', tag: '词汇' },
    { id: 'h5-3', type: 'choice', q: '一闪一闪的"星星"是：', options: ['star', 'moon', 'sun', 'lamp'], answer: 0, explain: 'star 星星，Twinkle twinkle little star 一闪一闪亮晶晶。', tag: '词汇' },
    { id: 'h5-4', type: 'choice', q: '天上白白的"云朵"是：', options: ['cloud', 'star', 'bird', 'kite'], answer: 0, explain: 'cloud 云朵，clouds 慢慢飘。', tag: '词汇' },
    { id: 'h5-5', type: 'choice', q: '"sky" 的意思是：', options: ['天空', '大海', '草地', '山洞'], answer: 0, explain: 'sky 天空，in the sky 在天空中。', tag: '词汇' },
    { id: 'h5-6', type: 'judge', q: '白天有太阳，晚上太阳也一直挂在天上。', options: ['√ 对', '✗ 错'], answer: 1, explain: '白天太阳上班，晚上太阳下山了，月亮和星星出来值班。', tag: '常识' },
    { id: 'h5-7', type: 'choice', q: '晚上天上亮晶晶的小点是：', options: ['stars', 'clouds', 'birds', 'balloons'], answer: 0, explain: 'stars 星星，很多颗星星要加 s。', tag: '词汇' },
    { id: 'h5-8', type: 'choice', q: '"The sun is big and bright." 的意思是：', options: ['太阳又大又亮。', '太阳又小又暗。', '月亮又大又亮。', '太阳掉下来了。'], answer: 0, explain: 'big 大的，bright 明亮的；太阳又大又亮。', tag: '句型' },
    { id: 'h5-9', type: 'choice', q: '下雨前天上会有黑黑的：', options: ['clouds', 'stars', 'moons', 'kites'], answer: 0, explain: '乌云乌云来报信，black clouds 要下雨。', tag: '常识' },
    { id: 'h5-10', type: 'judge', q: '太阳给我们光和热，不能长时间直视太阳。', options: ['√ 对', '✗ 错'], answer: 0, explain: '太阳光很刺眼，长时间直视太阳会伤眼睛，千万不要盯着太阳看。', tag: '安全' },
  ],
  h6: [
    { id: 'h6-1', type: 'choice', q: '咸咸的、大大的"大海"是：', options: ['sea', 'sky', 'river', 'lake'], answer: 0, explain: 'sea 大海，in the sea 在大海里。', tag: '词汇' },
    { id: 'h6-2', type: 'choice', q: '在水里游的"鱼"是：', options: ['fish', 'bird', 'cat', 'dog'], answer: 0, explain: 'fish 鱼，fish 在水里游来游去。', tag: '词汇' },
    { id: 'h6-3', type: 'choice', q: '"big fish" 的意思是：', options: ['大鱼', '小鱼', '小鸟', '大船'], answer: 0, explain: 'big 大的；big fish 大鱼，small fish 小鱼。', tag: '词汇' },
    { id: 'h6-4', type: 'choice', q: '住在海里、会游泳的动物是：', options: ['fish', 'cat', 'bird', 'rabbit'], answer: 0, explain: 'fish 鱼住在水里；小猫小鸟可不会游泳。', tag: '常识' },
    { id: 'h6-5', type: 'judge', q: '大海是很多海洋动物的家。', options: ['√ 对', '✗ 错'], answer: 0, explain: '海里有鱼、海豚、螃蟹……大海是它们的家。', tag: '常识' },
    { id: 'h6-6', type: 'choice', q: '"swim" 的意思是：', options: ['游泳', '跑步', '飞行', '跳跃'], answer: 0, explain: 'swim 游泳，The fish can swim. 鱼会游泳。', tag: '词汇' },
    { id: 'h6-7', type: 'choice', q: '"The fish can swim." 的意思是：', options: ['鱼会游泳。', '鱼会唱歌。', '鱼在睡觉。', '鱼不会游泳。'], answer: 0, explain: 'can 会；鱼天生就是游泳高手。', tag: '句型' },
    { id: 'h6-8', type: 'choice', q: '保护大海应该：', options: ['不往海里扔垃圾', '往海里扔瓶子', '抓小鱼回家', '在海里大喊大叫'], answer: 0, explain: '不乱扔垃圾，海水干净，海洋动物才住得舒服。', tag: '品德' },
    { id: 'h6-9', type: 'judge', q: '小朋友不能私自下水游泳，要有大人陪同。', options: ['√ 对', '✗ 错'], answer: 0, explain: '安全第一！游泳要去正规场所，必须有大人陪着。', tag: '安全' },
    { id: 'h6-10', type: 'choice', q: '聪明可爱、生活在海里的"海豚"是：', options: ['dolphin', 'panda', 'tiger', 'monkey'], answer: 0, explain: 'dolphin 海豚，聪明又友善，是海洋里的游泳健将。', tag: '拓展' },
  ],
  h7: [
    { id: 'h7-1', type: 'choice', q: '花开了、小草绿了的"春天"是：', options: ['spring', 'summer', 'autumn', 'winter'], answer: 0, explain: 'spring 春天，Spring is beautiful! 春天真美！', tag: '词汇' },
    { id: 'h7-2', type: 'choice', q: '可以游泳吃西瓜的"夏天"是：', options: ['summer', 'spring', 'autumn', 'winter'], answer: 0, explain: 'summer 夏天，天气 hot 热热的。', tag: '词汇' },
    { id: 'h7-3', type: 'choice', q: '树叶变黄掉落的"秋天"是：', options: ['autumn', 'summer', 'winter', 'spring'], answer: 0, explain: 'autumn 秋天（英式说法，美式叫 fall），叶子黄了。', tag: '词汇' },
    { id: 'h7-4', type: 'choice', q: '会下雪、要穿棉衣的"冬天"是：', options: ['winter', 'autumn', 'summer', 'spring'], answer: 0, explain: 'winter 冬天，cold 冷冷的，会下雪。', tag: '词汇' },
    { id: 'h7-5', type: 'judge', q: '一年有四个季节。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Four seasons：spring、summer、autumn、winter，转圈圈轮着来。', tag: '常识' },
    { id: 'h7-6', type: 'choice', q: '春天桃花开了，可以说：', options: ['Spring is beautiful!', 'Spring is white!', 'I like winter snow.', 'Autumn is hot.'], answer: 0, explain: 'Spring is beautiful! 春天真美！花儿都开了。', tag: '句型' },
    { id: 'h7-7', type: 'choice', q: '"hot" 的意思是：', options: ['热的', '冷的', '凉的', '温的'], answer: 0, explain: 'hot 热的，夏天天气很 hot；注意 hot 也表示"烫"。', tag: '词汇' },
    { id: 'h7-8', type: 'choice', q: '"cold" 的意思是：', options: ['冷的', '热的', '软的', '甜的'], answer: 0, explain: 'cold 冷的，冬天 cold，要多穿衣服。', tag: '词汇' },
    { id: 'h7-9', type: 'choice', q: '冬天冷，出门要穿：', options: ['coat', 'T-shirt', 'sunglasses', 'swimsuit'], answer: 0, explain: 'coat 外套、大衣，冬天穿 coat 暖和；T 恤和泳衣是夏天的。', tag: '常识' },
    { id: 'h7-10', type: 'judge', q: '秋天很多树叶会变黄、落下来。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'autumn leaves 秋天的叶子变黄飘落，铺成金色小路。', tag: '常识' },
  ],
  h8: [
    { id: 'h8-1', type: 'choice', q: '红红的、圆圆的"苹果"是：', options: ['apple', 'banana', 'pear', 'egg'], answer: 0, explain: 'apple 苹果，An apple a day 一天一苹果。', tag: '词汇' },
    { id: 'h8-2', type: 'choice', q: '小猴子最爱的"香蕉"是：', options: ['banana', 'apple', 'grape', 'melon'], answer: 0, explain: 'banana 香蕉，弯弯的、黄黄的。', tag: '词汇' },
    { id: 'h8-3', type: 'choice', q: '"orange" 是指：', options: ['橙子', '苹果', '桃子', '西瓜'], answer: 0, explain: 'orange 橙子，也表示"橙色"，剥皮吃。', tag: '词汇' },
    { id: 'h8-4', type: 'choice', q: '像小葫芦形状的"梨"是：', options: ['pear', 'banana', 'apple', 'orange'], answer: 0, explain: 'pear 梨，多汁又清甜；发音别和 bear（熊）搞混。', tag: '词汇' },
    { id: 'h8-5', type: 'choice', q: '"yummy" 的意思是：', options: ['好吃的', '难吃的', '臭臭的', '硬硬的'], answer: 0, explain: 'yummy 好吃的、香香的，Yummy fruit 好吃的水果。', tag: '词汇' },
    { id: 'h8-6', type: 'judge', q: '多吃水果对身体好。', options: ['√ 对', '✗ 错'], answer: 0, explain: '水果有维生素，多吃水果身体棒，但要适量哦。', tag: '常识' },
    { id: 'h8-7', type: 'choice', q: '弯弯的、要剥皮的黄色水果是：', options: ['banana', 'apple', 'grape', 'pear'], answer: 0, explain: 'banana 香蕉，剥开皮吃，小猴子最爱它。', tag: '常识' },
    { id: 'h8-8', type: 'choice', q: '"I like apples." 的意思是：', options: ['我喜欢苹果。', '我不喜欢苹果。', '苹果在哪儿？', '苹果是红色的。'], answer: 0, explain: 'like 喜欢；I like apples. 我喜欢苹果，记得用复数 apples。', tag: '句型' },
    { id: 'h8-9', type: 'choice', q: '"红红的苹果"说：', options: ['red apple', 'blue apple', 'red banana', 'black apple'], answer: 0, explain: 'red 红色 + apple 苹果，red apple 红苹果。', tag: '句型' },
    { id: 'h8-10', type: 'judge', q: '吃水果之前要先洗干净。', options: ['√ 对', '✗ 错'], answer: 0, explain: '洗一洗、冲一冲，把脏东西冲掉再吃，健康又卫生。', tag: '常识' },
  ],
  h9: [
    { id: 'h9-1', type: 'choice', q: '用眼睛"看见"是：', options: ['see', 'hear', 'smell', 'taste'], answer: 0, explain: 'see 看见，I can see... 我看见……', tag: '词汇' },
    { id: 'h9-2', type: 'choice', q: '用耳朵"听见"是：', options: ['hear', 'see', 'touch', 'taste'], answer: 0, explain: 'hear 听见，I can hear a bird. 我听见鸟叫。', tag: '词汇' },
    { id: 'h9-3', type: 'choice', q: '用鼻子"闻"是：', options: ['smell', 'hear', 'see', 'jump'], answer: 0, explain: 'smell 闻，闻花香闻饭香都用鼻子。', tag: '词汇' },
    { id: 'h9-4', type: 'choice', q: '用嘴巴"尝"是：', options: ['taste', 'smell', 'see', 'hear'], answer: 0, explain: 'taste 尝味道，甜甜酸酸的味道都是用舌头尝出来的。', tag: '词汇' },
    { id: 'h9-5', type: 'choice', q: '用手"摸"是：', options: ['touch', 'taste', 'smell', 'hear'], answer: 0, explain: 'touch 摸、碰，Touch your nose. 摸摸鼻子。', tag: '词汇' },
    { id: 'h9-6', type: 'judge', q: '眼睛看、耳朵听、鼻子闻、舌头尝、手来摸。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'The five senses 五感：see、hear、smell、taste、touch，一个都不少。', tag: '常识' },
    { id: 'h9-7', type: 'choice', q: '用来看东西的器官是：', options: ['eyes', 'ears', 'nose', 'hands'], answer: 0, explain: 'eyes 眼睛用来看（see），eyes 要加 s 因为有两只。', tag: '常识' },
    { id: 'h9-8', type: 'choice', q: '闻花香用的是：', options: ['nose', 'eyes', 'ears', 'feet'], answer: 0, explain: 'nose 鼻子闻气味，smell 闻一闻，花香真好闻呀！', tag: '常识' },
    { id: 'h9-9', type: 'choice', q: '"I can hear a bird." 的意思是：', options: ['我能听见鸟叫。', '我能看见小鸟。', '我能摸到小鸟。', '我在喂小鸟。'], answer: 0, explain: 'hear 听见；闭上眼睛也能"听见"大自然。', tag: '句型' },
    { id: 'h9-10', type: 'judge', q: '五种感官帮我们认识世界。', options: ['√ 对', '✗ 错'], answer: 0, explain: '眼看、耳听、鼻闻、嘴尝、手摸，五感合作本领大。', tag: '常识' },
  ],
  h10: [
    { id: 'h10-1', type: 'choice', q: '"This is me." 的意思是：', options: ['这就是我。', '那是你。', '这是他。', '我们来了。'], answer: 0, explain: 'This is me! 这就是我！自信介绍自己。', tag: '句型' },
    { id: 'h10-2', type: 'choice', q: '"My name is..." 的意思是：', options: ['我的名字叫……', '你叫什么名字', '他是谁', '再见'], answer: 0, explain: 'My name is Lily. 我的名字叫莉莉，介绍自己第一句。', tag: '句型' },
    { id: 'h10-3', type: 'choice', q: '"I am seven." 的意思是：', options: ['我七岁了。', '我有七本书。', '我七点起床。', '我坐七号车。'], answer: 0, explain: 'I am seven (years old). 我七岁，介绍年龄。', tag: '句型' },
    { id: 'h10-4', type: 'choice', q: '"I like reading." 的意思是：', options: ['我喜欢阅读。', '我喜欢跑步。', '我讨厌读书。', '我在写字。'], answer: 0, explain: 'like doing 喜欢做某事；reading 阅读，读书的孩子最帅。', tag: '句型' },
    { id: 'h10-5', type: 'judge', q: '每个人都是独一无二的，要喜欢自己。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'This is me! 每个人都特别，自信的孩子最闪亮。', tag: '品德' },
    { id: 'h10-6', type: 'choice', q: '"boy" 是指：', options: ['男孩', '女孩', '男人', '老师'], answer: 0, explain: 'boy 男孩，girl 女孩。', tag: '词汇' },
    { id: 'h10-7', type: 'choice', q: '"girl" 是指：', options: ['女孩', '男孩', '奶奶', '妹妹专用称呼'], answer: 0, explain: 'girl 女孩，男孩是 boy，别搞反了。', tag: '词汇' },
    { id: 'h10-8', type: 'choice', q: '把好朋友介绍给大家，说：', options: ['This is my friend.', 'This is me.', 'I am a boy.', 'Goodbye, friend!'], answer: 0, explain: 'This is my friend. 这是我的朋友，介绍他人用 This is ... 句型。', tag: '句型' },
    { id: 'h10-9', type: 'judge', q: '可以大大方方地在大家面前说 "This is me!"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'My show time 我的展示时间，大声说出 This is me! 吧。', tag: '品德' },
    { id: 'h10-10', type: 'choice', q: '学完一学期，夸夸自己说：', options: ['I did a good job!', 'I did nothing.', 'I am sad.', 'I give up.'], answer: 0, explain: 'I did a good job! 我做得真棒！为努力的自己鼓掌。', tag: '句型' },
  ],
}
