// 沪教版（五四学制·牛津上海版）英语 五年级下册（现行版目录）随堂知识点题库
// 教材：九年义务教育课本 英语（牛津上海版）五年级下册 · 上海教育出版社
// 目录（电子课本网 / 教师之家 牛津上海课标版全书目录核对）：
//   Module 1 Using my five senses: Unit 1 What a mess! / Unit 2 Watch it grow! / Unit 3 How noisy!
//   Module 2 My favourite things: Unit 1 Food and drinks / Unit 2 Films / Unit 3 School subjects
//   Module 3 Things around us: Unit 1 Signs / Unit 2 Weather / Unit 3 Changes
//   Module 4 More things to learn: Unit 1 Museums / Unit 2 Western holidays / Unit 3 Story time
// 每单元一关，每关 10 题，共 12 关 120 题，题目 id 前缀 ztk

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
    id: 'ztk1',
    name: 'Unit 1',
    title: 'What a mess!',
    emoji: '🧦',
    color: 'orange',
    lessons: ['Module 1: Using my five senses', 'tidy up', 'Whose...? mine / his / hers'],
    intro: '袜子、帽子扔一地——What a mess! 一起整理房间吧！',
  },
  {
    id: 'ztk2',
    name: 'Unit 2',
    title: 'Watch it grow!',
    emoji: '🐛',
    color: 'emerald',
    lessons: ['Module 1: Using my five senses', 'silkworm / butterfly', 'was → is'],
    intro: '蚕宝宝吐丝结茧，毛毛虫变身蝴蝶，成长真奇妙！',
  },
  {
    id: 'ztk3',
    name: 'Unit 3',
    title: 'How noisy!',
    emoji: '📢',
    color: 'rose',
    lessons: ['Module 1: Using my five senses', 'noise', "Don't make noise!"],
    intro: '噪音扰人清梦，轻声细语做文明好邻居！',
  },
  {
    id: 'ztk4',
    name: 'Unit 4',
    title: 'Food and drinks',
    emoji: '🥗',
    color: 'lime',
    lessons: ['Module 2: My favourite things', 'healthy diet', 'What did you have?'],
    intro: '早餐吃了什么？健康饮食搭配好，能量满满一整天！',
  },
  {
    id: 'ztk5',
    name: 'Unit 5',
    title: 'Films',
    emoji: '🎬',
    color: 'violet',
    lessons: ['Module 2: My favourite things', 'cinema / ticket', 'exciting / funny'],
    intro: '走进电影院，买票看电影，说说你喜欢的影片！',
  },
  {
    id: 'ztk6',
    name: 'Unit 6',
    title: 'School subjects',
    emoji: '📐',
    color: 'sky',
    lessons: ['Module 2: My favourite things', 'Chinese / Maths / Science', 'Which subject...?'],
    intro: '语文数学英语科学，你最喜欢的科目是哪门？',
  },
  {
    id: 'ztk7',
    name: 'Unit 7',
    title: 'Signs',
    emoji: '🚸',
    color: 'amber',
    lessons: ['Module 3: Things around us', 'public signs', 'It means...'],
    intro: '街上的标志牌会"说话"，看懂标志更安全！',
  },
  {
    id: 'ztk8',
    name: 'Unit 8',
    title: 'Weather',
    emoji: '🌦️',
    color: 'cyan',
    lessons: ['Module 3: Things around us', "What's the weather like?", 'weather report'],
    intro: '天气预报小主播上线，明天天气怎么样？',
  },
  {
    id: 'ztk9',
    name: 'Unit 9',
    title: 'Changes',
    emoji: '🏙️',
    color: 'teal',
    lessons: ['Module 3: Things around us', 'then and now', 'There was... / There is...'],
    intro: '从旧照片看新城市，家乡的变化真大呀！',
  },
  {
    id: 'ztk10',
    name: 'Unit 10',
    title: 'Museums',
    emoji: '🏛️',
    color: 'violet',
    lessons: ['Module 4: More things to learn', 'science museum', 'a visit to...'],
    intro: '博物馆里宝藏多，科技历史开眼界！',
  },
  {
    id: 'ztk11',
    name: 'Unit 11',
    title: 'Western holidays',
    emoji: '🎄',
    color: 'red',
    lessons: ['Module 4: More things to learn', 'Christmas / Easter', 'Halloween / Thanksgiving'],
    intro: '西方节日知多少，比较中外节日文化真有趣！',
  },
  {
    id: 'ztk12',
    name: 'Unit 12',
    title: 'Story time',
    emoji: '📖',
    color: 'fuchsia',
    lessons: ['Module 4: More things to learn', 'Read and retell', 'Review of the book'],
    intro: '读故事、讲故事，五年级下学期知识大盘点！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ztk1: [
    { id: 'ztk1-1', type: 'choice', q: '"What a mess!" 的意思是：', options: ['真乱啊！', '真干净！', '真漂亮！', '真安静！'], answer: 0, explain: 'mess 乱七八糟，What a mess! 感叹句，表示太乱了。', tag: '短语理解' },
    { id: 'ztk1-2', type: 'choice', q: '"tidy up" 的意思是：', options: ['整理、收拾', '乱扔乱放', '睡觉', '吃饭'], answer: 0, explain: 'tidy up 收拾整齐，Let\'s tidy up the room. 一起收拾房间。', tag: '短语' },
    { id: 'ztk1-3', type: 'choice', q: '"Whose socks are these?" 的意思是：', options: ['这些是谁的袜子？', '袜子在哪里？', '袜子多少钱？', '你喜欢袜子吗？'], answer: 0, explain: 'whose 谁的，socks 袜子，问物品的主人。', tag: '句型' },
    { id: 'ztk1-4', type: 'choice', q: '"They are mine." 的意思是：', options: ['它们是我的。', '它们是他的。', '它们是她的。', '它们是你的。'], answer: 0, explain: 'mine 我的（名词性物主代词），his 他的，hers 她的。', tag: '语法' },
    { id: 'ztk1-5', type: 'choice', q: '"This cap is hers." 的意思是：', options: ['这顶帽子是她的。', '这顶帽子是我的。', '这顶帽子是他的。', '这顶帽子是大家的。'], answer: 0, explain: 'hers 她的，hers = her + 名词。', tag: '语法' },
    { id: 'ztk1-6', type: 'judge', q: '书桌上乱糟糟的，应该先 tidy up 再写作业。', options: ['√ 对', '✗ 错'], answer: 0, explain: '收拾整齐再学习，效率更高心情更好。', tag: '习惯养成' },
    { id: 'ztk1-7', type: 'choice', q: '袜子 socks 常用复数，因为：', options: ['袜子总是成双成对', 'sock 不好听', '复数更便宜', '没有原因'], answer: 0, explain: '袜子鞋裤都成双，a pair of socks 一双袜子。', tag: '常识' },
    { id: 'ztk1-8', type: 'choice', q: '尺子是你的，别人问 "Is this your ruler?"，应该回答：', options: ['Yes, it is mine.', 'Yes, they are mine.', 'No, it isn\'t mine.', 'It is a ruler.'], answer: 0, explain: '单数用 this 问，回答用 it：Yes, it is mine.（是的，是我的）。they 用于复数，不能回答单数问句。', tag: '句型' },
    { id: 'ztk1-9', type: 'judge', q: '物品用完放回原处，找起来方便。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'A place for everything. 物品有定位，房间不再 mess。', tag: '习惯养成' },
    { id: 'ztk1-10', type: 'choice', q: '把地板上的袜子捡起来，说：', options: ['Pick up the socks, please.', 'Throw away the socks!', 'Wash the floor!', 'Buy new socks!'], answer: 0, explain: 'pick up 捡起，衣物不乱扔，房间更整洁。', tag: '句型' },
  ],
  ztk2: [
    { id: 'ztk2-1', type: 'choice', q: '"Watch it grow!" 的意思是：', options: ['看它长大！', '看它睡觉！', '喂它吃饭！', '把它送人！'], answer: 0, explain: 'grow 生长、长大，观察小动物的生长变化。', tag: '短语理解' },
    { id: 'ztk2-2', type: 'choice', q: '吐丝结茧的"蚕"是：', options: ['silkworm', 'caterpillar', 'butterfly', 'bee'], answer: 0, explain: 'silkworm 蚕，silk 丝 + worm 虫，蚕宝宝吐丝做茧。', tag: '动物词汇' },
    { id: 'ztk2-3', type: 'choice', q: '毛毛虫长大变成"蝴蝶"是：', options: ['butterfly', 'silkworm', 'bird', 'moth'], answer: 0, explain: 'caterpillar 毛毛虫 → cocoon 茧 → butterfly 蝴蝶。', tag: '动物词汇' },
    { id: 'ztk2-4', type: 'choice', q: '"It was a caterpillar. Now it is a butterfly." 的意思是：', options: ['它以前是毛毛虫，现在是蝴蝶。', '它现在是毛毛虫。', '它喜欢蝴蝶。', '蝴蝶变成了毛毛虫。'], answer: 0, explain: 'was 是 is 的过去式，表示"以前是"。', tag: '语法' },
    { id: 'ztk2-5', type: 'judge', q: '小鸡是从鸡蛋里孵化出来的。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'egg → chick 小鸡 → hen 母鸡，生命成长真奇妙。', tag: '常识' },
    { id: 'ztk2-6', type: 'choice', q: '"The puppy grows bigger and bigger." 的意思是：', options: ['小狗长得越来越大。', '小狗越来越小。', '小狗不喜欢长大。', '小狗在睡觉。'], answer: 0, explain: 'grow 变得、长，bigger and bigger 越来越大。', tag: '句型' },
    { id: 'ztk2-7', type: 'choice', q: '蚕宝宝最爱吃：', options: ['mulberry leaves 桑叶', 'grass 草', 'fish 鱼', 'rice 米饭'], answer: 0, explain: '蚕宝宝的主食是桑叶，吃了才能快快长大。', tag: '常识' },
    { id: 'ztk2-8', type: 'choice', q: '观察蚕宝宝记录变化，最好的方法是：', options: ['写观察日记', '每天拿出来玩', '喂很多食物', '摇晃盒子'], answer: 0, explain: '观察日记记录生长过程，科学又有趣。', tag: '学习习惯' },
    { id: 'ztk2-9', type: 'judge', q: '观察小动物时要温柔，不能伤害它们。', options: ['√ 对', '✗ 错'], answer: 0, explain: '尊重生命，轻轻观察，做有爱心的观察者。', tag: '品德' },
    { id: 'ztk2-10', type: 'choice', q: '"egg → chick → hen" 的正确顺序是：', options: ['鸡蛋 → 小鸡 → 母鸡', '母鸡 → 鸡蛋 → 小鸡', '小鸡 → 鸡蛋 → 母鸡', '母鸡 → 小鸡 → 鸡蛋'], answer: 0, explain: '母鸡下蛋，蛋孵出小鸡，小鸡长大变母鸡。', tag: '常识' },
  ],
  ztk3: [
    { id: 'ztk3-1', type: 'choice', q: '"How noisy!" 的意思是：', options: ['好吵啊！', '好安静！', '好漂亮！', '好饿啊！'], answer: 0, explain: 'noisy 吵闹的，感叹句 How noisy! 好吵啊！', tag: '短语理解' },
    { id: 'ztk3-2', type: 'choice', q: '"noise" 的意思是：', options: ['噪音', '音乐', '歌声', '风声'], answer: 0, explain: 'noise 噪音，make noise 制造噪音，让人不舒服。', tag: '词汇' },
    { id: 'ztk3-3', type: 'choice', q: '"Don\'t make any noise!" 的意思是：', options: ['不要发出噪音！', '大声点！', '一起唱歌！', '快去睡觉！'], answer: 0, explain: "Don't + 动词原形，禁止做某事。", tag: '句型' },
    { id: 'ztk3-4', type: 'choice', q: '邻居在休息，你应该：', options: ['轻声说话小步走', '大声唱歌', '用力跺脚', '开着最大音量看电视'], answer: 0, explain: '做文明好邻居，轻声细语不扰民。', tag: '品德' },
    { id: 'ztk3-5', type: 'judge', q: '晚上十点后应该保持安静，让全家和邻居好好休息。', options: ['√ 对', '✗ 错'], answer: 0, explain: '作息有度，晚上安静，大家睡得香。', tag: '习惯养成' },
    { id: 'ztk3-6', type: 'choice', q: 'noisy 的反义词是：', options: ['quiet', 'loud', 'big', 'bad'], answer: 0, explain: 'noisy 吵闹 ↔ quiet 安静。', tag: '词汇' },
    { id: 'ztk3-7', type: 'choice', q: '"The students are talking loudly." 的意思是：', options: ['学生们在大声交谈。', '学生们在安静看书。', '学生们在跑步。', '学生们在睡觉。'], answer: 0, explain: 'loudly 大声地（副词），修饰 talk。', tag: '语法' },
    { id: 'ztk3-8', type: 'choice', q: '上课时应该：', options: ['quiet 认真听讲', 'noisy 随便说话', 'sing loudly 大声唱歌', 'run 跑来跑去'], answer: 0, explain: '上课保持安静，发言先举手。', tag: '习惯养成' },
    { id: 'ztk3-9', type: 'judge', q: '长期处在噪音环境会影响听力和睡眠。', options: ['√ 对', '✗ 错'], answer: 0, explain: '噪音危害健康，远离噪音，保护耳朵。', tag: '健康常识' },
    { id: 'ztk3-10', type: 'choice', q: '别人大声喧哗影响你学习时，最好说：', options: ['Excuse me, could you please be quiet?', 'Shut up!', 'I hate you!', 'Go away now!'], answer: 0, explain: '礼貌提醒别人，Excuse me + could you... 最得体。', tag: '表达' },
  ],
  ztk4: [
    { id: 'ztk4-1', type: 'choice', q: '"Food and drinks" 的意思是：', options: ['食物和饮料', '衣服和鞋子', '水果和花', '猫和狗'], answer: 0, explain: 'food 食物，drinks 饮料，健康饮食话题。', tag: '短语理解' },
    { id: 'ztk4-2', type: 'choice', q: '"What did you have for breakfast?" 的意思是：', options: ['你早餐吃了什么？', '你晚饭想吃什么？', '你喜欢早餐吗？', '早餐在哪里？'], answer: 0, explain: 'did...have 过去式，问吃过的早餐。', tag: '句型' },
    { id: 'ztk4-3', type: 'choice', q: '回答"我早餐吃了面包和牛奶"：', options: ['I had bread and milk.', 'I have bread and milk.', 'I eat bread now.', 'Bread likes milk.'], answer: 0, explain: 'had 是 have 的过去式，回答过去吃了什么。', tag: '语法' },
    { id: 'ztk4-4', type: 'choice', q: '下面比较健康的早餐是：', options: ['鸡蛋、牛奶、全麦面包', '薯片配可乐', '只吃糖果', '什么都不吃'], answer: 0, explain: '营养均衡的早餐提供上午的能量。', tag: '健康常识' },
    { id: 'ztk4-5', type: 'judge', q: 'healthy 的意思是健康的，unhealthy 是不健康的。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'un- 前缀表示否定，unhealthy 不健康。', tag: '词汇' },
    { id: 'ztk4-6', type: 'choice', q: '"Vegetables are good for us." 的意思是：', options: ['蔬菜对我们有好处。', '蔬菜很贵。', '我们不喜欢蔬菜。', '蔬菜是饮料。'], answer: 0, explain: 'be good for 对……有好处，多吃蔬菜身体好。', tag: '句型' },
    { id: 'ztk4-7', type: 'choice', q: '喝的"粥"是：', options: ['porridge', 'juice', 'coffee', 'soup'], answer: 0, explain: 'porridge 粥，warm porridge 暖暖的粥很养胃。', tag: '食物词汇' },
    { id: 'ztk4-8', type: 'choice', q: '下面是不健康的做法：', options: ['天天喝碳酸饮料代替水', '每天喝牛奶', '多吃水果', '按时吃饭'], answer: 0, explain: '碳酸饮料糖分高，不能代替白开水。', tag: '健康常识' },
    { id: 'ztk4-9', type: 'judge', q: '早上来不及，早餐可以不吃，中午多吃点补回来。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！早餐提供上午的能量，不吃早餐影响学习和健康，一日三餐要按时吃。', tag: '健康常识' },
    { id: 'ztk4-10', type: 'choice', q: '把"多吃蔬菜和水果"说给同学听：', options: ['Eat more vegetables and fruit.', 'Eat more candy and cola.', 'Drink more cola.', 'Don\'t eat anything.'], answer: 0, explain: 'Eat more... 多吃……，健康建议用英语说。', tag: '表达' },
  ],
  ztk5: [
    { id: 'ztk5-1', type: 'choice', q: '"film" 的意思是：', options: ['电影', '书本', '游戏', '照片'], answer: 0, explain: 'film 电影（英式），美式常说 movie。', tag: '词汇' },
    { id: 'ztk5-2', type: 'choice', q: '看电影的"电影院"是：', options: ['cinema', 'museum', 'library', 'hospital'], answer: 0, explain: 'cinema 电影院，go to the cinema 去看电影。', tag: '场所词汇' },
    { id: 'ztk5-3', type: 'choice', q: '入场用的"票"是：', options: ['ticket', 'money', 'card', 'book'], answer: 0, explain: 'ticket 票，two tickets 两张票。', tag: '词汇' },
    { id: 'ztk5-4', type: 'choice', q: '"The film is exciting." 的意思是：', options: ['这部电影很刺激。', '这部电影很无聊。', '这部电影很长。', '这部电影很旧。'], answer: 0, explain: 'exciting 精彩刺激的，boring 无聊的。', tag: '形容词' },
    { id: 'ztk5-5', type: 'choice', q: '让人哈哈大笑的"滑稽的"是：', options: ['funny', 'sad', 'scary', 'boring'], answer: 0, explain: 'funny 滑稽好笑，comedy 喜剧片很 funny。', tag: '形容词' },
    { id: 'ztk5-6', type: 'judge', q: '在电影院里可以大声聊天、随便接打电话。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！影院礼仪：手机静音、轻声交流，安静观影不打扰别人。', tag: '品德' },
    { id: 'ztk5-7', type: 'choice', q: '"What film did you see?" 的回答是：', options: ['I saw a cartoon.', 'I went to school.', 'It is red.', 'I like apples.'], answer: 0, explain: 'did...see 问看过的电影，saw 回答。', tag: '语法' },
    { id: 'ztk5-8', type: 'choice', q: 'scary 的意思是：', options: ['吓人的', '好笑的', '刺激的', '无聊的'], answer: 0, explain: 'scary 吓人的，恐怖片太 scary，小朋友不看。', tag: '形容词' },
    { id: 'ztk5-9', type: 'judge', q: '看电影要选适合小朋友的影片，看屏幕时间不宜过长。', options: ['√ 对', '✗ 错'], answer: 0, explain: '选择健康影片，控制用眼时间，保护视力。', tag: '健康常识' },
    { id: 'ztk5-10', type: 'choice', q: '向朋友推荐好看的电影，说：', options: ['The cartoon is funny. Let\'s watch it!', 'The film is bad. Don\'t watch!', 'I hate films.', 'Films are boring.'], answer: 0, explain: '推荐时说出亮点：很好笑，一起看吧！', tag: '表达' },
  ],
  ztk6: [
    { id: 'ztk6-1', type: 'choice', q: '"School subjects" 的意思是：', options: ['学校科目', '学校活动', '学校老师', '学校规则'], answer: 0, explain: 'subject 科目，学校里的学科都叫 subjects。', tag: '短语理解' },
    { id: 'ztk6-2', type: 'choice', q: '数数的"数学"是：', options: ['Maths', 'Chinese', 'Music', 'PE'], answer: 0, explain: 'Maths 数学（美式 Math），numbers and shapes。', tag: '科目词汇' },
    { id: 'ztk6-3', type: 'choice', q: '做实验观察自然的"科学"是：', options: ['Science', 'Art', 'English', 'Music'], answer: 0, explain: 'Science 科学，science lab 科学实验室。', tag: '科目词汇' },
    { id: 'ztk6-4', type: 'choice', q: '跑跳投掷的"体育"是：', options: ['PE', 'Maths', 'Art', 'IT'], answer: 0, explain: 'PE = Physical Education 体育课，have a PE class 上体育课。', tag: '科目词汇' },
    { id: 'ztk6-5', type: 'choice', q: '画画捏泥的"美术"是：', options: ['Art', 'Music', 'Science', 'Chinese'], answer: 0, explain: 'Art 美术，draw and paint 画画涂色。', tag: '科目词汇' },
    { id: 'ztk6-6', type: 'choice', q: '"Which subject do you like best?" 的意思是：', options: ['你最喜欢哪个科目？', '你在哪个班级？', '你喜欢哪位老师？', '今天有什么课？'], answer: 0, explain: 'which 哪一个 + best 最，问最喜欢的科目。', tag: '句型' },
    { id: 'ztk6-7', type: 'choice', q: '回答"我最喜欢英语"：', options: ['I like English best.', 'I like English good.', 'English likes me.', 'I am English.'], answer: 0, explain: 'like... best 最喜欢，English 前不加 the。', tag: '句型' },
    { id: 'ztk6-8', type: 'judge', q: '每门科目都很有用，不能偏科。', options: ['√ 对', '✗ 错'], answer: 0, explain: '全面学习，各科互相帮助，知识更全面。', tag: '学习习惯' },
    { id: 'ztk6-9', type: 'choice', q: '"We have Maths on Monday." 的意思是：', options: ['我们周一有数学课。', '我们喜欢数学。', '数学很难。', '周一是数学老师生日。'], answer: 0, explain: 'have + 科目表示"上……课"。', tag: '句型' },
    { id: 'ztk6-10', type: 'choice', q: 'Chinese、Maths、English、Science、Art、Music、PE 都是：', options: ['school subjects 科目', 'days 一周七天', 'sports 运动', 'festivals 节日'], answer: 0, explain: '它们都是学校的科目。', tag: '单词分类' },
  ],
  ztk7: [
    { id: 'ztk7-1', type: 'choice', q: '"signs" 的意思是：', options: ['标志、标识', '街道', '汽车', '信号灯'], answer: 0, explain: 'sign 标志，public signs 公共标识。', tag: '词汇' },
    { id: 'ztk7-2', type: 'choice', q: '"What does this sign mean?" 的意思是：', options: ['这个标志是什么意思？', '这个标志在哪里？', '谁画的标志？', '标志多少钱？'], answer: 0, explain: 'mean 意思是，回答 It means...（它表示……）。', tag: '句型' },
    { id: 'ztk7-3', type: 'choice', q: '公园里 "Don\'t walk on the grass" 的意思是：', options: ['不要踩踏草地', '可以在草地上野餐', '草地很贵', '请浇花'], answer: 0, explain: "Don't + 动词原形，表示禁止。", tag: '标识理解' },
    { id: 'ztk7-4', type: 'choice', q: '"Keep quiet" 标志应该出现在：', options: ['图书馆', '游乐场', '足球场', '菜市场'], answer: 0, explain: 'Keep quiet 保持安静，图书馆、医院常见。', tag: '标识理解' },
    { id: 'ztk7-5', type: 'choice', q: '"No smoking" 的意思是：', options: ['禁止吸烟', '欢迎吸烟', '吸烟区', '买烟处'], answer: 0, explain: 'No + doing 禁止做某事，吸烟有害健康。', tag: '标识理解' },
    { id: 'ztk7-6', type: 'judge', q: '看到 "Danger!" 标志要远离，那里有危险。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Danger 危险，看到标志绕道走，安全第一。', tag: '安全常识' },
    { id: 'ztk7-7', type: 'choice', q: '地铁里的 "Mind the gap" 的意思是：', options: ['小心站台间隙', '欢迎乘车', '禁止下车', '车票半价'], answer: 0, explain: 'mind 注意，gap 缝隙，上下车小心脚下。', tag: '拓展' },
    { id: 'ztk7-8', type: 'choice', q: '"No littering" 的意思是：', options: ['禁止乱扔垃圾', '欢迎扔垃圾', '请捡垃圾', '垃圾回收'], answer: 0, explain: 'litter 乱扔垃圾，垃圾要扔进垃圾桶。', tag: '标识理解' },
    { id: 'ztk7-9', type: 'judge', q: '遵守标志牌的提示，既是文明行为也是安全保证。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'signs 是无声的老师，读懂并遵守它。', tag: '品德' },
    { id: 'ztk7-10', type: 'choice', q: '看到 "Don\'t climb!" 的牌子，正确做法是：', options: ['不攀爬，绕行', '爬上去看看', '摇一摇栏杆', '叫朋友一起爬'], answer: 0, explain: '标志提示不攀爬，攀爬容易摔伤。', tag: '安全常识' },
  ],
  ztk8: [
    { id: 'ztk8-1', type: 'choice', q: '"What\'s the weather like?" 的意思是：', options: ['天气怎么样？', '你喜欢什么？', '今天几号？', '现在几点？'], answer: 0, explain: '问天气，回答 It is sunny. 等。', tag: '句型' },
    { id: 'ztk8-2', type: 'choice', q: '"weather report" 的意思是：', options: ['天气预报', '新闻报道', '体育比赛', '动画片'], answer: 0, explain: 'report 报道，weather report 播报天气。', tag: '词汇' },
    { id: 'ztk8-3', type: 'choice', q: '"It will be rainy tomorrow." 的意思是：', options: ['明天会下雨。', '昨天下雨了。', '现在在下雨。', '明天晴朗。'], answer: 0, explain: 'will 将要，表示将来的天气。', tag: '语法' },
    { id: 'ztk8-4', type: 'choice', q: '雪花飘飘的"下雪天"是：', options: ['snowy', 'rainy', 'cloudy', 'windy'], answer: 0, explain: 'snow 雪 → snowy 下雪的。', tag: '天气词汇' },
    { id: 'ztk8-5', type: 'choice', q: '天气很热时，播报员会说：', options: ['It is hot today.', 'It is cold today.', 'It is cool today.', 'It is warm today.'], answer: 0, explain: 'hot 热，cold 冷，cool 凉，warm 暖。', tag: '天气词汇' },
    { id: 'ztk8-6', type: 'judge', q: '台风天要待在家里，不外出玩耍。', options: ['√ 对', '✗ 错'], answer: 0, explain: '台风 typhoon 来时风大雨大，居家最安全。', tag: '安全常识' },
    { id: 'ztk8-7', type: 'choice', q: '明天要去野餐，最希望听到：', options: ['It will be sunny.', 'It will be rainy.', 'It will snow.', 'There will be a typhoon.'], answer: 0, explain: 'sunny 晴朗适合户外活动。', tag: '情景' },
    { id: 'ztk8-8', type: 'choice', q: '气温下降时应该：', options: ['add clothes 添加衣物', 'eat ice cream', 'swim outside', 'wear shorts'], answer: 0, explain: '及时添衣，感冒不来找。', tag: '生活常识' },
    { id: 'ztk8-9', type: 'choice', q: '"There is a rainbow after the rain." 的意思是：', options: ['雨后有彩虹。', '雨后没有太阳。', '彩虹在下雨。', '彩虹是雨做的。'], answer: 0, explain: 'after 在……之后，雨过天晴见彩虹。', tag: '常识' },
    { id: 'ztk8-10', type: 'judge', q: '播报员游戏里，可以自己编天气预报：sunny, hot, 35 degrees...', options: ['√ 对', '✗ 错'], answer: 0, explain: '播报员游戏练习天气表达，like a real weather reporter!', tag: '拓展' },
  ],
  ztk9: [
    { id: 'ztk9-1', type: 'choice', q: '"changes" 的意思是：', options: ['变化', '衣服', '钱币', '村庄'], answer: 0, explain: 'change 变化，家乡 changes 大变样。', tag: '词汇' },
    { id: 'ztk9-2', type: 'choice', q: '"then and now" 的意思是：', options: ['过去和现在', '白天和黑夜', '春天和秋天', '左边和右边'], answer: 0, explain: 'then 那时，now 现在，对比变化。', tag: '短语理解' },
    { id: 'ztk9-3', type: 'choice', q: '"There was a small village." 的意思是：', options: ['那里曾有一个小村庄。', '现在有一个小村庄。', '有一个大城市。', '村庄很美。'], answer: 0, explain: 'there was 过去存在，描述过去的景物。', tag: '语法' },
    { id: 'ztk9-4', type: 'choice', q: '描述现在"有许多高楼"：', options: ['There are many tall buildings now.', 'There was a tall building.', 'There is a village now.', 'There were no buildings.'], answer: 0, explain: 'there are（复数现在时）+ tall buildings 高楼。', tag: '语法' },
    { id: 'ztk9-5', type: 'choice', q: '"tall buildings" 的意思是：', options: ['高楼大厦', '小房子', '木桥', '篱笆'], answer: 0, explain: 'tall 高的，building 建筑物。', tag: '词汇' },
    { id: 'ztk9-6', type: 'judge', q: '以前的马路是 narrow（窄的），现在的马路是 wide（宽的）。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'narrow 窄 ↔ wide 宽，对比记忆。', tag: '词汇' },
    { id: 'ztk9-7', type: 'choice', q: '家乡变化大，是因为：', options: ['大家共同努力建设', '什么都没做', '天上掉下来的', '魔术变的'], answer: 0, explain: '勤劳智慧建设家乡，珍惜美好生活。', tag: '品德' },
    { id: 'ztk9-8', type: 'choice', q: '"The river was dirty. Now it is clean." 的意思是：', options: ['这条河以前很脏，现在很干净。', '这条河一直很脏。', '这条河很干净没有变化。', '河里没有水了。'], answer: 0, explain: 'dirty 脏 ↔ clean 干净，环境变好了。', tag: '句型' },
    { id: 'ztk9-9', type: 'judge', q: '保护环境，家乡才会越来越美丽。', options: ['√ 对', '✗ 错'], answer: 0, explain: '垃圾分类、爱护绿化，人人都出一份力。', tag: '品德' },
    { id: 'ztk9-10', type: 'choice', q: '采访长辈家乡的过去，可以问：', options: ['What was it like before?', 'What is your name?', 'Where are you going?', 'How old are you?'], answer: 0, explain: 'What was it like? 过去是什么样，采访小记者上线。', tag: '表达' },
  ],
  ztk10: [
    { id: 'ztk10-1', type: 'choice', q: '"museums" 的意思是：', options: ['博物馆', '电影院', '动物园', '游乐场'], answer: 0, explain: 'museum 博物馆，museums 是复数。', tag: '场所词汇' },
    { id: 'ztk10-2', type: 'choice', q: '看恐龙化石和机器人的"科技馆"是：', options: ['science museum', 'art museum', 'history museum', 'toy museum'], answer: 0, explain: 'science museum 科技馆，互动展项最有趣。', tag: '场所词汇' },
    { id: 'ztk10-3', type: 'choice', q: '看古代文物的"历史博物馆"是：', options: ['history museum', 'science museum', 'art museum', 'children museum'], answer: 0, explain: 'history 历史，history museum 里看千年文明。', tag: '场所词汇' },
    { id: 'ztk10-4', type: 'choice', q: '"a visit to the museum" 的意思是：', options: ['一次博物馆之旅', '一个博物馆钥匙', '一张博物馆地图', '一位博物馆馆长'], answer: 0, explain: 'a visit to... 一次到……的参观。', tag: '短语' },
    { id: 'ztk10-5', type: 'judge', q: '博物馆里要保持安静，不能奔跑打闹。', options: ['√ 对', '✗ 错'], answer: 0, explain: '文明参观，轻声交流，爱护展品。', tag: '品德' },
    { id: 'ztk10-6', type: 'choice', q: '博物馆里的展品可以：', options: ['用眼睛看、用心记', '随便触摸', '带回家', '拆开研究'], answer: 0, explain: '大部分展品不能摸，遵守 "Don\'t touch" 提示。', tag: '常识' },
    { id: 'ztk10-7', type: 'choice', q: '"The robots are amazing!" 的意思是：', options: ['机器人太神奇了！', '机器人很贵。', '机器人很小。', '机器人坏了。'], answer: 0, explain: 'amazing 令人惊叹的，科技馆的机器人真棒。', tag: '表达' },
    { id: 'ztk10-8', type: 'choice', q: '参观博物馆前最好：', options: ['提前了解开放时间和主题', '空手乱逛', '带零食进去吃', '大声打电话'], answer: 0, explain: '提前做功课，参观更有效率。', tag: '习惯养成' },
    { id: 'ztk10-9', type: 'judge', q: '博物馆能学到课本以外的知识。', options: ['√ 对', '✗ 错'], answer: 0, explain: '博物馆是立体的大课堂，常去参观开眼界。', tag: '学习习惯' },
    { id: 'ztk10-10', type: 'choice', q: '把最喜欢的展馆介绍给同学：', options: ['I like the science museum best.', 'I like museums not.', 'Museums are boring.', 'I never go to museums.'], answer: 0, explain: 'like... best 最喜欢，分享你的博物馆之旅吧！', tag: '表达' },
  ],
  ztk11: [
    { id: 'ztk11-1', type: 'choice', q: '"Western holidays" 的意思是：', options: ['西方节日', '中国节日', '学校假期', '周末'], answer: 0, explain: 'western 西方的，holiday 节日/假期。', tag: '短语理解' },
    { id: 'ztk11-2', type: 'choice', q: '装饰圣诞树、送礼物的"圣诞节"是：', options: ['Christmas', 'Easter', 'Halloween', 'Thanksgiving'], answer: 0, explain: 'Christmas 圣诞节，December 25th，Merry Christmas!', tag: '节日词汇' },
    { id: 'ztk11-3', type: 'choice', q: '"Easter" 的意思是：', options: ['复活节', '万圣节', '感恩节', '圣诞节'], answer: 0, explain: 'Easter 复活节，彩蛋 Easter eggs 是它的象征。', tag: '节日词汇' },
    { id: 'ztk11-4', type: 'choice', q: '孩子们扮鬼脸讨糖果的"万圣节"是：', options: ['Halloween', 'Christmas', 'Thanksgiving', 'New Year'], answer: 0, explain: 'Halloween 万圣节前夜，Trick or treat! 不给糖就捣蛋。', tag: '节日词汇' },
    { id: 'ztk11-5', type: 'choice', q: '吃火鸡、表达感谢的"感恩节"是：', options: ['Thanksgiving', 'Easter', 'Halloween', 'Christmas'], answer: 0, explain: 'Thanksgiving 感恩节，和家人分享火鸡大餐，感恩生活。', tag: '节日词汇' },
    { id: 'ztk11-6', type: 'choice', q: '圣诞老人是：', options: ['Santa Claus', 'Monkey King', 'Superman', 'Zhu Bajie'], answer: 0, explain: 'Santa Claus 圣诞老人，圣诞夜驾着驯鹿雪橇送礼物。', tag: '文化常识' },
    { id: 'ztk11-7', type: 'judge', q: '中国春节和西方圣诞节都是家人团聚的节日。', options: ['√ 对', '✗ 错'], answer: 0, explain: '节日文化不同，团聚与祝福的心意相通。', tag: '文化常识' },
    { id: 'ztk11-8', type: 'choice', q: '向外国朋友介绍中秋节，说：', options: ['The Mid-Autumn Festival is a Chinese festival.', 'The Mid-Autumn Festival is American.', 'We eat turkey on it.', 'It is in December.'], answer: 0, explain: '介绍中国节日，传播中华文化。', tag: '表达' },
    { id: 'ztk11-9', type: 'judge', q: '万圣节讨糖要有礼貌，并注意安全，最好由大人陪同。', options: ['√ 对', '✗ 错'], answer: 0, explain: '了解文化的同时，安全和礼貌不能忘。', tag: '安全常识' },
    { id: 'ztk11-10', type: 'choice', q: '感恩节最重要的主题是：', options: ['say thanks 感恩', '吓唬别人', '玩游戏机', '睡懒觉'], answer: 0, explain: 'Thanksgiving 学会感恩，向家人朋友说 Thank you.', tag: '品德' },
  ],
  ztk12: [
    { id: 'ztk12-1', type: 'choice', q: '"Story time" 的意思是：', options: ['故事时间', '新闻时间', '运动时间', '新闻联播'], answer: 0, explain: 'story 故事，Story time 读故事学英语。', tag: '短语理解' },
    { id: 'ztk12-2', type: 'choice', q: '"What a mess!" 后面应该：', options: ['tidy up 收拾', 'go to bed 睡觉', 'watch TV 看电视', 'eat snacks 吃零食'], answer: 0, explain: '房间乱了先收拾，Tidy up the room!', tag: '复习' },
    { id: 'ztk12-3', type: 'choice', q: '蚕宝宝 silkworm 最后变成：', options: ['moth/butterfly 飞蛾或蝴蝶', 'bird 鸟', 'fish 鱼', 'frog 青蛙'], answer: 0, explain: '蚕结茧后化蛾，生命循环真神奇。', tag: '常识复习' },
    { id: 'ztk12-4', type: 'choice', q: '"I had noodles for breakfast." 的意思是：', options: ['我早餐吃了面条。', '我早餐要吃面条。', '我喜欢面条。', '面条在锅里。'], answer: 0, explain: 'had 过去式，表示已经吃过了。', tag: '语法复习' },
    { id: 'ztk12-5', type: 'choice', q: '"No littering" 标志提醒我们：', options: ['垃圾入桶', '随手扔', '踩踏草坪', '大声喧哗'], answer: 0, explain: 'litter 乱扔垃圾，标志要遵守。', tag: '复习' },
    { id: 'ztk12-6', type: 'choice', q: '播报"明天晴，最高 30 度"：', options: ['It will be sunny tomorrow. The high is 30 degrees.', 'It rained yesterday.', 'It is snowing now.', 'Tomorrow is Monday.'], answer: 0, explain: 'will be 表将来，degrees 度数。', tag: '句型复习' },
    { id: 'ztk12-7', type: 'choice', q: '"There were small houses. Now there are tall buildings." 的意思是：', options: ['以前是小房子，现在是高楼。', '现在有小房子。', '高楼变矮了。', '没有变化。'], answer: 0, explain: 'there were 过去、there are 现在，对比变化。', tag: '语法复习' },
    { id: 'ztk12-8', type: 'judge', q: '参观博物馆要提前预约、遵守参观规则。', options: ['√ 对', '✗ 错'], answer: 0, explain: '文明参观三步走：预约、安静、爱护展品。', tag: '常识复习' },
    { id: 'ztk12-9', type: 'choice', q: '感恩节 Thanksgiving 的主题是：', options: ['感恩 thanks', '恐怖 scary', '购物 shopping', '运动 sports'], answer: 0, explain: 'Thanksgiving 学会说谢谢，感恩父母和老师。', tag: '复习' },
    { id: 'ztk12-10', type: 'choice', q: '给故事续编结尾，最好的方法是：', options: ['大胆想象，合理续写', '随便乱编', '不写了', '抄别人的'], answer: 0, explain: '想象是故事的翅膀，续编让阅读更有创造性。', tag: '学习习惯' },
  ],
}
