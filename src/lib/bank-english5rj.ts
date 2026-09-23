// 人教版PEP英语 五年级上册（三年级起点·六三制 2026秋新版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（PEP）五年级上册（2026 秋版）· 人民教育出版社
// 目录（电子课本网 dzkbw pep5s_2026 权威核对）：
//   Unit 1 Different friends / Unit 2 My feelings / Unit 3 Work and play
//   Unit 4 Healthy habits / Unit 5 Food we eat / Unit 6 Nature and us
//   Revision: New Year's party
// 每单元一关，每关 10 题，共 7 关 70 题，题目 id 前缀 ze

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
    id: 'ze1',
    name: 'Unit 1',
    title: 'Different friends',
    emoji: '🧑‍🤝‍🧑',
    color: 'amber',
    lessons: ['Different friends', 'My best friend', 'A friend in need'],
    intro: '朋友各不相同，性格爱好各有精彩，友谊不分样子！',
  },
  {
    id: 'ze2',
    name: 'Unit 2',
    title: 'My feelings',
    emoji: '😊',
    color: 'orange',
    lessons: ['My feelings', 'Happy or sad?', 'Sharing feelings'],
    intro: '开心、紧张、担忧……说出感受，情绪也有色彩！',
  },
  {
    id: 'ze3',
    name: 'Unit 3',
    title: 'Work and play',
    emoji: '⚽',
    color: 'lime',
    lessons: ['Work and play', 'Time for everything', 'A busy week'],
    intro: '学习认真学，玩耍痛快玩，劳逸结合最聪明！',
  },
  {
    id: 'ze4',
    name: 'Unit 4',
    title: 'Healthy habits',
    emoji: '🥕',
    color: 'teal',
    lessons: ['Healthy habits', 'Everyday health', 'A healthy week'],
    intro: '早睡早起勤洗手，健康习惯天天有！',
  },
  {
    id: 'ze5',
    name: 'Unit 5',
    title: 'Food we eat',
    emoji: '🥗',
    color: 'rose',
    lessons: ['Food we eat', 'Yummy and healthy', 'My food plan'],
    intro: '一日三餐有讲究，荤素搭配吃得香！',
  },
  {
    id: 'ze6',
    name: 'Unit 6',
    title: 'Nature and us',
    emoji: '🌏',
    color: 'cyan',
    lessons: ['Nature and us', 'Protect the Earth', 'Green actions'],
    intro: '大自然是我们的家，环保行动靠大家！',
  },
  {
    id: 'zer',
    name: 'Revision',
    title: "New Year's party",
    emoji: '🎊',
    color: 'pink',
    lessons: ["New Year's party", '常用表达语', '综合复习'],
    intro: '新年派对开始啦！用一整年的英语本领来闯关！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ze1: [
    { id: 'ze1-1', type: 'choice', q: '"Different friends" 的意思是：', options: ['不同的朋友', '同样的爱好', '新的老师', '我的邻居'], answer: 0, explain: 'different 不同的，每个朋友都有独特之处，各有各的精彩！', tag: '短语理解' },
    { id: 'ze1-2', type: 'choice', q: '形容朋友"幽默搞笑的"，用：', options: ['funny', 'quiet', 'shy', 'strict'], answer: 0, explain: 'funny 有趣的、幽默的；quiet 安静的，shy 害羞的。', tag: '形容词' },
    { id: 'ze1-3', type: 'choice', q: '"He is good at maths." 的意思是：', options: ['他擅长数学。', '他讨厌数学。', '他在学数学。', '他在教数学。'], answer: 0, explain: 'be good at... 擅长……，朋友各有各的厉害之处！', tag: '句型' },
    { id: 'ze1-4', type: 'choice', q: '朋友的爱好和你不同，你应该：', options: ['尊重并了解他的爱好', '嘲笑他', '逼他改', '绝交'], answer: 0, explain: 'Different friends like different things. 尊重差异，友谊更宽广！', tag: '友谊观' },
    { id: 'ze1-5', type: 'judge', q: '"A friend in need is a friend indeed." 意思是"患难见真情"。', options: ['√ 对', '✗ 错'], answer: 0, explain: '患难见真情，在你困难时帮助你的，才是真朋友。', tag: '谚语' },
    { id: 'ze1-6', type: 'choice', q: '朋友难过时，你会：', options: ['陪着他、安慰他', '笑话他', '转身走开', '告诉别人'], answer: 0, explain: '好朋友会互相支持：I\'m here for you. 我陪着你！', tag: '品德养成' },
    { id: 'ze1-7', type: 'choice', q: '"outgoing" 的意思是：', options: ['外向开朗的', '内向害羞的', '生气的', '疲惫的'], answer: 0, explain: 'outgoing 开朗外向的，和 shy（害羞的）正好相反。', tag: '形容词' },
    { id: 'ze1-8', type: 'choice', q: '介绍好朋友的爱好，可以说：', options: ['She likes reading.', 'She is my mother.', 'He can\'t read.', 'I don\'t know him.'], answer: 0, explain: 'likes doing sth. 喜欢做某事，She likes reading. 她喜欢阅读。', tag: '句型' },
    { id: 'ze1-9', type: 'choice', q: '"helpful" 的意思是：', options: ['乐于助人的', '有害的', '粗心的', '骄傲的'], answer: 0, explain: 'helpful 乐于助人的，help 帮助 + ful，帮人小能手！', tag: '形容词' },
    { id: 'ze1-10', type: 'judge', q: '和不同性格的朋友相处，能让我们学到更多。', options: ['√ 对', '✗ 错'], answer: 0, explain: '和不同朋友交往，互相学习优点，自己也会更棒！', tag: '友谊观' },
  ],
  ze2: [
    { id: 'ze2-1', type: 'choice', q: '"My feelings" 的意思是：', options: ['我的情绪感受', '我的朋友', '我的假期', '我的作业'], answer: 0, explain: 'feeling 感受、情绪，认识情绪是成长的第一步！', tag: '短语理解' },
    { id: 'ze2-2', type: 'choice', q: '明天要上台演讲，你可能会觉得：', options: ['nervous 紧张的', 'boring 无聊的', 'sleepy 困的', 'thirsty 渴的'], answer: 0, explain: 'nervous 紧张的，上台前深呼吸，告诉自己 I can do it!', tag: '情绪词汇' },
    { id: 'ze2-3', type: 'choice', q: '"worried" 的意思是：', options: ['担心的', '开心的', '兴奋的', '自豪的'], answer: 0, explain: 'worried 担心的，be worried about... 为……担心。', tag: '情绪词汇' },
    { id: 'ze2-4', type: 'choice', q: '考试得了满分，你会感到：', options: ['proud 自豪的', 'sad 悲伤的', 'angry 生气的', 'afraid 害怕的'], answer: 0, explain: 'proud 自豪的，I\'m so proud! 我太自豪啦！', tag: '情绪词汇' },
    { id: 'ze2-5', type: 'judge', q: '把难过憋在心里不说，是勇敢的表现。', options: ['√ 对', '✗ 错'], answer: 1, explain: '不对！难过要说出来，和家人朋友分享，心情才能放晴！', tag: '情绪管理' },
    { id: 'ze2-6', type: 'choice', q: '朋友比赛失利很沮丧，你可以说：', options: ['Cheer up! You did your best.', 'You are so bad!', 'Haha, I won!', 'Never play again!'], answer: 0, explain: 'Cheer up! 振作起来！You did your best. 你已经尽力了！', tag: '安慰用语' },
    { id: 'ze2-7', type: 'choice', q: '"How do you feel today?" 回答正确的是：', options: ['I feel happy today.', 'I am ten.', 'It\'s Monday.', 'I like pizza.'], answer: 0, explain: '问感受，用 I feel + 情绪词 回答。', tag: '句型' },
    { id: 'ze2-8', type: 'choice', q: '感到 angry（生气）时，最好的做法是：', options: ['深呼吸，冷静下来再沟通', '摔门而出', '大喊大叫', '动手打人'], answer: 0, explain: 'Take a deep breath. 深呼吸，冷静沟通才能解决问题！', tag: '情绪管理' },
    { id: 'ze2-9', type: 'choice', q: '"excited" 的意思是：', options: ['兴奋的', '失望的', '无聊的', '害羞的'], answer: 0, explain: 'excited 兴奋的，I\'m so excited! 我太兴奋啦！', tag: '情绪词汇' },
    { id: 'ze2-10', type: 'judge', q: '每个人都有各种情绪，情绪没有好坏，但表达方式有对错。', options: ['√ 对', '✗ 错'], answer: 0, explain: '情绪本身没错，但发泄情绪不能伤害自己和他人，学会正确表达！', tag: '情绪管理' },
  ],
  ze3: [
    { id: 'ze3-1', type: 'choice', q: '"Work and play" 的意思是：', options: ['学习与玩耍', '上班下班', '游戏机', '体育运动课'], answer: 0, explain: 'work 学习/做事，play 玩耍，劳逸结合才能学得好玩得好！', tag: '短语理解' },
    { id: 'ze3-2', type: 'choice', q: '"always" 的意思是：', options: ['总是', '从不', '有时', '很少'], answer: 0, explain: 'always 总是，频度最高：always > usually > often > sometimes > never。', tag: '频度副词' },
    { id: 'ze3-3', type: 'choice', q: '"I usually do homework after school." 的意思是：', options: ['我通常放学后写作业。', '我从不写作业。', '我有时忘记写作业。', '我在学校写作业。'], answer: 0, explain: 'usually 通常，放学先写作业，好习惯保持住！', tag: '句型' },
    { id: 'ze3-4', type: 'choice', q: '"sometimes" 的意思是：', options: ['有时', '总是', '通常', '从不'], answer: 0, explain: 'sometimes 有时，频度低于 often，高于 never。', tag: '频度副词' },
    { id: 'ze3-5', type: 'judge', q: '可以边看电视边写作业，这样更轻松。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！一心二用作业质量差，先专心完成作业，再痛快玩耍！', tag: '学习习惯' },
    { id: 'ze3-6', type: 'choice', q: '一周的"周末"是：', options: ['Saturday and Sunday', 'Monday and Tuesday', 'Friday only', 'every day'], answer: 0, explain: 'weekend 周末 = Saturday 周六 + Sunday 周日。', tag: '时间词汇' },
    { id: 'ze3-7', type: 'choice', q: '"On weekends, I often play basketball." 中 play basketball 是：', options: ['打篮球', '踢足球', '打乒乓球', '游泳'], answer: 0, explain: 'play + 球类：play basketball 打篮球，球类前不加 the！', tag: '动词搭配' },
    { id: 'ze3-8', type: 'choice', q: '合理安排一周时间，应该：', options: ['学习、运动、休息都有安排', '天天玩游戏', '一直睡觉', '只学习不休息'], answer: 0, explain: 'A busy but happy week! 学习、运动、休息合理搭配！', tag: '时间管理' },
    { id: 'ze3-9', type: 'choice', q: '"never" 的意思是：', options: ['从不', '总是', '经常', '有时'], answer: 0, explain: 'never 从不，频度最低：I never give up. 我从不放弃！', tag: '频度副词' },
    { id: 'ze3-10', type: 'judge', q: '玩电子产品要控制时间，保护眼睛很重要。', options: ['√ 对', '✗ 错'], answer: 0, explain: '控制屏幕时间，多到户外活动，眼睛亮晶晶！', tag: '健康习惯' },
  ],
  ze4: [
    { id: 'ze4-1', type: 'choice', q: '"Healthy habits" 的意思是：', options: ['健康的习惯', '无聊的作业', '危险的举动', '昂贵的玩具'], answer: 0, explain: 'healthy 健康的，habit 习惯，健康习惯从小养成！', tag: '短语理解' },
    { id: 'ze4-2', type: 'choice', q: '饭前便后要：', options: ['wash hands 洗手', 'play games', 'run fast', 'sleep'], answer: 0, explain: 'Wash your hands before meals. 饭前洗手，病菌远离我！', tag: '卫生习惯' },
    { id: 'ze4-3', type: 'choice', q: '"brush your teeth" 的意思是：', options: ['刷牙', '洗脸', '梳头', '剪指甲'], answer: 0, explain: 'brush 刷，teeth 牙齿（tooth 的复数），早晚各刷一次！', tag: '卫生习惯' },
    { id: 'ze4-4', type: 'choice', q: '"early to bed, early to rise" 的意思是：', options: ['早睡早起', '晚睡晚起', '一直睡觉', '从不睡觉'], answer: 0, explain: '早睡早起身体好，rise 起床，每天睡足 9-10 小时！', tag: '作息习惯' },
    { id: 'ze4-5', type: 'judge', q: '只要多吃肉，蔬菜吃不吃都没关系。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！蔬菜含有丰富的维生素，挑食、不吃蔬菜是坏习惯，荤素搭配才营养均衡。', tag: '饮食习惯' },
    { id: 'ze4-6', type: 'choice', q: '每天坚持锻炼的好处是：', options: ['身体强壮少生病', '变得更累', '没有朋友', '作业变多'], answer: 0, explain: 'Exercise every day. 每天锻炼一小时，健康生活一辈子！', tag: '运动习惯' },
    { id: 'ze4-7', type: 'choice', q: '"drink enough water" 的意思是：', options: ['喝足够的水', '喝很多饮料', '不喝水', '把水浇花'], answer: 0, explain: 'drink 喝，enough 足够的，多喝白开水，少喝甜饮料！', tag: '饮食习惯' },
    { id: 'ze4-8', type: 'choice', q: '看书、写字的正确姿势是：', options: ['坐直，眼睛离书本一尺', '躺着看', '趴着写', '贴得很近'], answer: 0, explain: '坐姿端正护视力，一尺一拳一寸要记牢！', tag: '学习习惯' },
    { id: 'ze4-9', type: 'choice', q: '"stay up late" 的意思是：', options: ['熬夜', '早起', '午睡', '散步'], answer: 0, explain: 'stay up late 熬夜，Don\'t stay up late! 别熬夜哦！', tag: '作息习惯' },
    { id: 'ze4-10', type: 'judge', q: '生病了要好好休息，按时吃药，听医生的话。', options: ['√ 对', '✗ 错'], answer: 0, explain: '生病及时告诉家长，好好休息配合治疗，很快就会好起来！', tag: '健康常识' },
  ],
  ze5: [
    { id: 'ze5-1', type: 'choice', q: '"Food we eat" 的意思是：', options: ['我们吃的食物', '我们养的动物', '我们种的花', '我们的餐厅'], answer: 0, explain: 'food 食物，认识食物、学会健康饮食！', tag: '短语理解' },
    { id: 'ze5-2', type: 'choice', q: '"vegetables" 指的是：', options: ['蔬菜', '水果', '肉类', '主食'], answer: 0, explain: 'vegetables 蔬菜：carrot 胡萝卜、cabbage 卷心菜、tomato 西红柿。', tag: '食物词汇' },
    { id: 'ze5-3', type: 'choice', q: '"I\'d like some beef noodles." 的意思是：', options: ['我想要一些牛肉面。', '我不喜欢面条。', '面条卖完了。', '这是牛肉面。'], answer: 0, explain: 'I\'d like = I would like，礼貌表达想要什么。', tag: '句型' },
    { id: 'ze5-4', type: 'choice', q: '更健康的饮料是：', options: ['milk 牛奶', 'cola 可乐', 'beer 啤酒', 'energy drinks'], answer: 0, explain: 'milk 牛奶补钙长个子，碳酸饮料要少喝！', tag: '健康饮食' },
    { id: 'ze5-5', type: 'judge', q: 'rice（米饭）是不可数名词，没有复数形式。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'rice、water、milk 都不可数，不能加 s，用 some 修饰。', tag: '语法' },
    { id: 'ze5-6', type: 'choice', q: '"breakfast" 是指：', options: ['早餐', '午餐', '晚餐', '夜宵'], answer: 0, explain: 'breakfast 早餐，break 打破 + fast 禁食，一天第一餐最重要！', tag: '食物词汇' },
    { id: 'ze5-7', type: 'choice', q: '健康的饮食搭配是：', options: ['荤素搭配，多吃蔬果', '只吃炸鸡', '天天泡面', '不吃晚饭'], answer: 0, explain: 'Balanced diet! 均衡饮食：主食、蛋白、蔬果都要有！', tag: '健康饮食' },
    { id: 'ze5-8', type: 'choice', q: '"Would you like some soup?" 想要时的回答：', options: ['Yes, please.', 'No, I don\'t.', 'You\'re welcome.', 'Excuse me.'], answer: 0, explain: 'Yes, please. 好的，谢谢！不想要说 No, thanks.', tag: '句型' },
    { id: 'ze5-9', type: 'choice', q: '"delicious" 的意思是：', options: ['美味的', '难吃的', '昂贵的', '新鲜的'], answer: 0, explain: 'delicious 美味的，The noodles are delicious! 面条真好吃！', tag: '形容词' },
    { id: 'ze5-10', type: 'judge', q: '吃饭时细嚼慢咽，不暴饮暴食。', options: ['√ 对', '✗ 错'], answer: 0, explain: '细嚼慢咽好消化，暴饮暴食伤肠胃，餐桌好习惯！', tag: '饮食习惯' },
  ],
  ze6: [
    { id: 'ze6-1', type: 'choice', q: '"Nature and us" 的意思是：', options: ['自然与我们', '动物与植物', '你和我', '地球仪'], answer: 0, explain: 'nature 大自然，我们是大自然的一部分，要好好爱护它！', tag: '短语理解' },
    { id: 'ze6-2', type: 'choice', q: '"protect the Earth" 的意思是：', options: ['保护地球', '挖地球', '环游地球', '画地球'], answer: 0, explain: 'protect 保护，地球只有一个，保护地球人人有责！', tag: '环保词汇' },
    { id: 'ze6-3', type: 'choice', q: '节约用水可以说：', options: ['save water', 'waste water', 'drink water', 'play with water'], answer: 0, explain: 'save 节约，waste 浪费；Save water! 节约用水，随手关紧水龙头！', tag: '环保行动' },
    { id: 'ze6-4', type: 'choice', q: '垃圾的正确处理方式是：', options: ['垃圾分类投放', '随手扔路边', '扔进河里', '烧掉'], answer: 0, explain: 'Sort the rubbish! 垃圾分类，可回收、厨余、有害、其他要分清！', tag: '环保行动' },
    { id: 'ze6-5', type: 'judge', q: '植树造林能净化空气、防风固沙。', options: ['√ 对', '✗ 错'], answer: 0, explain: '树木是地球的肺，plant trees 植树，绿化家园！', tag: '环保知识' },
    { id: 'ze6-6', type: 'choice', q: '"Turn off the lights when you leave." 的意思是：', options: ['离开时关灯', '离开时开灯', '把灯带走', '换个灯泡'], answer: 0, explain: 'turn off 关掉，节约用电从随手关灯做起！', tag: '环保行动' },
    { id: 'ze6-7', type: 'choice', q: '下面哪种出行方式更环保？', options: ['骑自行车', '开私家车', '坐飞机', '多开车'], answer: 0, explain: 'ride a bike 骑自行车，绿色出行，减少尾气排放！', tag: '环保行动' },
    { id: 'ze6-8', type: 'choice', q: '"pollution" 的意思是：', options: ['污染', '植物', '公园', '发电'], answer: 0, explain: 'pollution 污染：air pollution 空气污染、water pollution 水污染。', tag: '环保词汇' },
    { id: 'ze6-9', type: 'choice', q: '看到有人乱扔垃圾，你应该：', options: ['提醒他扔进垃圾箱', '不管', '帮他也扔', '笑他'], answer: 0, explain: '礼貌提醒：Please put it in the bin. 请扔进垃圾箱！', tag: '品德养成' },
    { id: 'ze6-10', type: 'judge', q: '爱护动物、不购买野生动物制品，也是在保护大自然。', options: ['√ 对', '✗ 错'], answer: 0, explain: '动物是大自然的成员，没有买卖就没有伤害！', tag: '环保知识' },
  ],
  zer: [
    { id: 'zer-1', type: 'choice', q: '"New Year\'s party" 的意思是：', options: ['新年派对', '生日聚会', '运动会', '读书会'], answer: 0, explain: 'New Year 新年，party 派对，用欢乐的派对迎接新一年！', tag: '短语理解' },
    { id: 'zer-2', type: 'choice', q: '新年最常用的祝福是：', options: ['Happy New Year!', 'Happy birthday!', 'Merry Christmas!', 'Good night!'], answer: 0, explain: 'Happy New Year! 新年快乐！回答：The same to you! 你也一样！', tag: '祝福语' },
    { id: 'zer-3', type: 'choice', q: '派对上表演节目，可以说：', options: ['I will sing a song.', 'I will eat you.', 'Go away now.', 'No party today.'], answer: 0, explain: 'will 表示将要：I will sing a song. 我要唱一首歌！', tag: '句型' },
    { id: 'zer-4', type: 'choice', q: '下面哪个是健康食物？', options: ['fresh fruit 新鲜水果', 'fried chicken all day', 'candy for dinner', 'cola only'], answer: 0, explain: 'fresh fruit 新鲜水果富含维生素，健康饮食首选！', tag: '健康饮食' },
    { id: 'zer-5', type: 'judge', q: '去朋友家参加派对，带上一份小礼物或贺卡会更有心意。', options: ['√ 对', '✗ 错'], answer: 0, explain: '小小礼物大大心意，Being a good guest 从细节做起！', tag: '社交礼仪' },
    { id: 'zer-6', type: 'choice', q: '"My resolution for the new year" 指的是：', options: ['我的新年计划', '我的生日礼物', '我的寒假作业', '我的游戏账号'], answer: 0, explain: 'resolution 决心、计划，新年新目标，努力去实现！', tag: '新年文化' },
    { id: 'zer-7', type: 'choice', q: '派对结束后，你应该：', options: ['帮主人一起收拾', '直接跑走', '弄得更乱', '把零食全带走'], answer: 0, explain: '帮忙收拾再告别：Thanks for the party! 有始有终真棒！', tag: '社交礼仪' },
    { id: 'zer-8', type: 'choice', q: '总结这学期学的"情绪"类单词，哪个表达开心？', options: ['happy', 'sad', 'angry', 'worried'], answer: 0, explain: 'happy 开心，sad 悲伤，angry 生气，worried 担心。', tag: '单词复习' },
    { id: 'zer-9', type: 'choice', q: '"I often exercise and eat healthy food." 的意思是：', options: ['我经常锻炼并吃健康食物。', '我从不锻炼。', '我只吃零食。', '我讨厌运动。'], answer: 0, explain: 'often 经常，exercise 锻炼，healthy food 健康食物，好习惯满分！', tag: '句型复习' },
    { id: 'zer-10', type: 'judge', q: '新的一年，给自己定一个小目标，坚持去实现它。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'New year, new goals! 新年新目标，坚持行动，梦想成真！', tag: '成长规划' },
  ],
}
