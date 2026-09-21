// 人教版PEP英语 六年级下册（三年级起点·六三制 现行版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（PEP）六年级下册（现行版，新版六下尚未出版）· 人民教育出版社
// 目录（电子课本网 dzkbw peps6x 权威核对）：
//   Unit 1 How tall are you? / Unit 2 Last weekend / Unit 3 Where did you go?
//   Unit 4 Then and now / Recycle: Mike's happy days
//   六下为毕业学期：现行版教材仅 4 个单元 + Recycle，另编两个小升初总复习关补足学期复习链
// 每单元一关，每关 10 题，共 7 关 70 题，题目 id 前缀 ztf

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
    id: 'ztf1',
    name: 'Unit 1',
    title: 'How tall are you?',
    emoji: '📏',
    color: 'blue',
    lessons: ['How tall are you?', 'Comparatives: taller, stronger', 'Growing up'],
    intro: '比一比身高体重，形容词比较级大显身手！',
  },
  {
    id: 'ztf2',
    name: 'Unit 2',
    title: 'Last weekend',
    emoji: '📝',
    color: 'teal',
    lessons: ['Last weekend', 'Past tense: -ed', 'Weekend diary'],
    intro: '上周末做了什么？一般过去时来记录！',
  },
  {
    id: 'ztf3',
    name: 'Unit 3',
    title: 'Where did you go?',
    emoji: '🗺️',
    color: 'cyan',
    lessons: ['Where did you go?', 'Holiday fun', 'Travel stories'],
    intro: '假期去了哪里、怎么去的？旅行故事讲一讲！',
  },
  {
    id: 'ztf4',
    name: 'Unit 4',
    title: 'Then and now',
    emoji: '🕰️',
    color: 'indigo',
    lessons: ['Then and now', 'was / were / could', 'Changes around us'],
    intro: '过去 vs 现在，学校、家乡的变化真大呀！',
  },
  {
    id: 'ztf5',
    name: 'Recycle',
    title: "Mike's happy days",
    emoji: '🎒',
    color: 'amber',
    lessons: ["Mike's happy days", '综合运用', '小学英语大盘点'],
    intro: '跟着 Mike 回顾小学快乐时光，语言点大盘点！',
  },
  {
    id: 'ztf6',
    name: '总复习 1',
    title: '小升初基础过关',
    emoji: '🧱',
    color: 'lime',
    lessons: ['词汇与短语', '核心句型', '语法点睛'],
    intro: '单词、句型、语法三关连过，小升初地基打牢！',
  },
  {
    id: 'ztf7',
    name: '总复习 2',
    title: '小升初综合演练',
    emoji: '🏆',
    color: 'pink',
    lessons: ['情景交际', '时态综合', '阅读理解初步'],
    intro: '情景、时态、阅读综合练，毕业闯关稳稳的！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ztf1: [
    { id: 'ztf1-1', type: 'choice', q: '"How tall are you?" 的意思是：', options: ['你有多高？', '你多重？', '你多大了？', '你有多快？'], answer: 0, explain: 'tall 高的，How tall are you? 问身高，回答：I\'m 1.6 metres tall.。', tag: '句型' },
    { id: 'ztf1-2', type: 'choice', q: '"taller" 的意思是：', options: ['更高的', '最高的', '高的', '和……一样高'], answer: 0, explain: 'tall→taller 更高的，两者比较用比较级 + than。', tag: '比较级' },
    { id: 'ztf1-3', type: 'choice', q: '"I\'m taller than you." 的意思是：', options: ['我比你高。', '你比我高。', '我们一样高。', '我最高。'], answer: 0, explain: 'A is + 比较级 + than B：A 比 B 更……。', tag: '句型' },
    { id: 'ztf1-4', type: 'choice', q: 'big 的比较级是：', options: ['bigger', 'biger', 'biggest', 'more big'], answer: 0, explain: '重读闭音节双写 g 再加 er：big→bigger。', tag: '比较级' },
    { id: 'ztf1-5', type: 'judge', q: 'heavy 的比较级是 heavier。', options: ['√ 对', '✗ 错'], answer: 0, explain: '辅音字母 + y 结尾，变 y 为 i 加 er：heavy→heavier。', tag: '比较级' },
    { id: 'ztf1-6', type: 'choice', q: '"How heavy are you?" 的回答是：', options: ['I\'m 45 kilograms.', 'I\'m 1.5 metres.', 'I\'m twelve years old.', 'I\'m fine.'], answer: 0, explain: '问体重用 kilograms 千克回答；metres 是身高单位。', tag: '句型' },
    { id: 'ztf1-7', type: 'choice', q: 'thin 的比较级是：', options: ['thinner', 'thiner', 'thinnest', 'more thin'], answer: 0, explain: '双写 n 加 er：thin→thinner，更瘦的。', tag: '比较级' },
    { id: 'ztf1-8', type: 'judge', q: '长颈鹿比大象高，可以说 "A giraffe is taller than an elephant."。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'giraffe 长颈鹿 taller，elephant 大象更重 heavier，各有所长！', tag: '常识判断' },
    { id: 'ztf1-9', type: 'choice', q: '"你的脚比我大"是：', options: ['Your feet are bigger than mine.', 'Your feet are bigger than you.', 'Your foot is big than me.', 'My feet are bigger than yours.'], answer: 0, explain: 'mine = my feet，比较对象要对等：feet 对 mine。', tag: '句型' },
    { id: 'ztf1-10', type: 'choice', q: '三个或以上比较"最高"用：', options: ['the tallest', 'taller', 'tall', 'more tall'], answer: 0, explain: '最高级 the tallest，比较级 taller 只用于两者。', tag: '最高级' },
  ],
  ztf2: [
    { id: 'ztf2-1', type: 'choice', q: '"Last weekend" 的意思是：', options: ['上周末', '这个周末', '下周末', '每个周末'], answer: 0, explain: 'last 上一个，last weekend 上周末，事情已经发生，用过去时！', tag: '短语理解' },
    { id: 'ztf2-2', type: 'choice', q: '"我上周末看望了爷爷奶奶"是：', options: ['I visited my grandparents last weekend.', 'I visit my grandparents last weekend.', 'I visits my grandparents last weekend.', 'I am visiting my grandparents now.'], answer: 0, explain: 'last weekend 是过去时间，动词用过去式 visited。', tag: '时态' },
    { id: 'ztf2-3', type: 'choice', q: 'watch 的过去式是：', options: ['watched', 'watches', 'watching', 'watch'], answer: 0, explain: '规则变化直接加 ed：watch→watched 看了。', tag: '动词过去式' },
    { id: 'ztf2-4', type: 'choice', q: 'wash 的过去式是：', options: ['washed', 'washes', 'washing', 'washd'], answer: 0, explain: 'wash→washed 洗了：I washed my clothes.。', tag: '动词过去式' },
    { id: 'ztf2-5', type: 'judge', q: '"Did you clean your room?" 的肯定回答是 "Yes, I did."。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Did 开头的一般疑问句，回答用 did / didn\'t。', tag: '句型' },
    { id: 'ztf2-6', type: 'choice', q: 'stay 的过去式是：', options: ['stayed', 'staied', 'stays', 'staying'], answer: 0, explain: 'stay 以元音字母 + y 结尾，直接加 ed：stayed 待在家。', tag: '动词过去式' },
    { id: 'ztf2-7', type: 'choice', q: '"你上周末做什么了？"问：', options: ['What did you do last weekend?', 'What do you do last weekend?', 'What are you doing last weekend?', 'Where did you go last weekend?'], answer: 0, explain: 'did + 动词原形构成过去时疑问句：What did you do...?。', tag: '句型' },
    { id: 'ztf2-8', type: 'judge', q: '过去时句子里动词要用原形，如 "I played football." 是错的。', options: ['√ 对', '✗ 错'], answer: 1, explain: '"I played football." 是正确的！过去时陈述句动词要用过去式 played。', tag: '时态' },
    { id: 'ztf2-9', type: 'choice', q: '"写作业"的过去式短语是：', options: ['did homework', 'do homework', 'does homework', 'doing homework'], answer: 0, explain: 'do→did 特殊变化：I did homework yesterday.。', tag: '动词过去式' },
    { id: 'ztf2-10', type: 'choice', q: '写周末日记最好用：', options: ['一般过去时记录做过的事', '一般将来时', '现在进行时', '不用时态'], answer: 0, explain: '周末日记 diary 记录已发生的事，通篇用过去时！', tag: '写作方法' },
  ],
  ztf3: [
    { id: 'ztf3-1', type: 'choice', q: '"Where did you go?" 的意思是：', options: ['你去了哪里？', '你怎么去的？', '你和谁去的？', '你什么时候去的？'], answer: 0, explain: 'Where 去了哪里，问地点；How 问方式，When 问时间。', tag: '句型' },
    { id: 'ztf3-2', type: 'choice', q: '"I went to Xinjiang." 中 went 是：', options: ['go 的过去式', 'went 原形', 'coming 的同义词', 'will go 的缩写'], answer: 0, explain: 'go→went 特殊变化：I went to... 我去了……。', tag: '动词过去式' },
    { id: 'ztf3-3', type: 'choice', q: '"坐火车去"的英语是：', options: ['went by train', 'went by the train go', 'go by train last', 'went on train'], answer: 0, explain: 'by + 交通工具：by train, by plane, by bus。', tag: '交通表达' },
    { id: 'ztf3-4', type: 'choice', q: 'take pictures 的过去式短语是：', options: ['took pictures', 'taked pictures', 'take pictured', 'takes pictures'], answer: 0, explain: 'take→took 特殊变化：took many pictures 拍了很多照片。', tag: '动词过去式' },
    { id: 'ztf3-5', type: 'judge', q: '"buy gifts" 的过去式是 "bought gifts"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'buy→bought 买了：I bought gifts for my mum.。', tag: '动词过去式' },
    { id: 'ztf3-6', type: 'choice', q: '"骑马"的过去式短语是：', options: ['rode a horse', 'rided a horse', 'ride a horse now', 'rides a horse'], answer: 0, explain: 'ride→rode 骑了：I rode a horse on the grassland.。', tag: '动词过去式' },
    { id: 'ztf3-7', type: 'choice', q: '"go fishing" 的意思是：', options: ['去钓鱼', '去游泳', '去爬山', '去野餐'], answer: 0, explain: 'go fishing 去钓鱼，go swimming 游泳，go camping 露营。', tag: '动词短语' },
    { id: 'ztf3-8', type: 'judge', q: '"How did you go there?" 是在问去的交通方式。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'How 怎么去的？回答：We went there by plane.。', tag: '句型' },
    { id: 'ztf3-9', type: 'choice', q: '假期旅行回来分享经历，讲述用：', options: ['一般过去时', '一般现在时', '一般将来时', '祈使句'], answer: 0, explain: '讲已经发生的经历，用一般过去时，动词全变过去式！', tag: '时态' },
    { id: 'ztf3-10', type: 'choice', q: '"eat fresh food" 的过去式是：', options: ['ate fresh food', 'eated fresh food', 'eats fresh food', 'eating fresh food'], answer: 0, explain: 'eat→ate 吃了：We ate fresh food in the countryside.。', tag: '动词过去式' },
  ],
  ztf4: [
    { id: 'ztf4-1', type: 'choice', q: '"Then and now" 的意思是：', options: ['过去和现在', '这里和那里', '白天和黑夜', '快和慢'], answer: 0, explain: 'then 过去、now 现在，对比变化就用这个词组。', tag: '短语理解' },
    { id: 'ztf4-2', type: 'choice', q: '"我以前很矮"是：', options: ['I was short before.', 'I am short before.', 'I were short before.', 'I is short now.'], answer: 0, explain: '第一人称过去用 was：I was... 我过去……。', tag: '时态' },
    { id: 'ztf4-3', type: 'choice', q: '"他们以前是小村庄"中的"是"用：', options: ['were', 'was', 'are', 'is'], answer: 0, explain: 'they 是复数，过去时用 were：They were small villages.。', tag: '时态' },
    { id: 'ztf4-4', type: 'choice', q: '"Six years ago, I couldn\'t swim." 的意思是：', options: ['六年前我不会游泳。', '六年后我不会游泳。', '我现在不会游泳。', '我六岁就会游泳。'], answer: 0, explain: 'couldn\'t = could not 不会、不能，表过去的能力。', tag: '时态' },
    { id: 'ztf4-5', type: 'judge', q: '"There was no gym in my school before." 意思是"以前学校没有体育馆"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'There was no... 以前没有……，gym 体育馆。', tag: '句型' },
    { id: 'ztf4-6', type: 'choice', q: '现在学校"有"体育馆，用：', options: ['There is a gym now.', 'There was a gym now.', 'There were a gym now.', 'There be a gym now.'], answer: 0, explain: 'now 现在用一般现在时，单数用 There is。', tag: '句型' },
    { id: 'ztf4-7', type: 'choice', q: '过去联系朋友靠"写信"，写信是：', options: ['write letters', 'use the internet', 'make videos', 'send emails'], answer: 0, explain: 'write letters 写信；现在常用 use the internet 上网联系。', tag: '词汇' },
    { id: 'ztf4-8', type: 'judge', q: '过去人们能上网查资料，现在反而不能了。', options: ['√ 对', '✗ 错'], answer: 1, explain: '反了！过去 couldn\'t use the internet，现在 can，科技让生活更方便。', tag: '常识判断' },
    { id: 'ztf4-9', type: 'choice', q: '介绍家乡的变化，最好的结构是：', options: ['先说过去，再说现在，最后谈感受', '只说现在', '只说风景', '说吃的就行'], answer: 0, explain: 'Then → Now → Feelings 三段式，变化讲得明明白白！', tag: '写作方法' },
    { id: 'ztf4-10', type: 'choice', q: '"My school is more beautiful now." 的意思是：', options: ['现在我的学校更美了。', '以前我的学校更美。', '我的学校最美。', '我的学校不美。'], answer: 0, explain: 'more beautiful 更美，多音节形容词比较级用 more。', tag: '比较级' },
  ],
  ztf5: [
    { id: 'ztf5-1', type: 'choice', q: '"Mike\'s happy days" 的意思是：', options: ['迈克的快乐日子', '迈克的星期天', '迈克的朋友', '迈克的学校'], answer: 0, explain: 'Mike\'s 迈克的，\'s 表示所属关系：名词所有格。', tag: '所有格' },
    { id: 'ztf5-2', type: 'choice', q: '"这是莉莉的书"是：', options: ['This is Lily\'s book.', 'This is Lily book.', 'This is Lilys book.', 'This is book\'s Lily.'], answer: 0, explain: '人名 + \'s 表示"某人的"：Lily\'s book 莉莉的书。', tag: '所有格' },
    { id: 'ztf5-3', type: 'choice', q: '回顾小学生活，"六年"是：', options: ['six years', 'six year', 'sixes years', 'six year\'s'], answer: 0, explain: '复数 years：six years 六年，I studied here for six years.。', tag: '词汇' },
    { id: 'ztf5-4', type: 'choice', q: '"We had a good time." 的意思是：', options: ['我们玩得很开心。', '我们时间很多。', '我们有个好时钟。', '我们迟到了。'], answer: 0, explain: 'have a good time 玩得开心，过去式 had a good time。', tag: '句型' },
    { id: 'ztf5-5', type: 'judge', q: '"graduate" 的意思是"毕业"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'graduate 毕业，We will graduate from primary school. 我们即将小学毕业。', tag: '词汇' },
    { id: 'ztf5-6', type: 'choice', q: '和同学告别，最真挚的说法是：', options: ['I will miss you!', 'Go away!', 'Don\'t see me again.', 'Bye, forever.'], answer: 0, explain: 'I will miss you! 我会想你的！珍惜友谊，好好道别。', tag: '表达' },
    { id: 'ztf5-7', type: 'choice', q: 'Mike 六年级时变得更 tall 更 strong，这里用了：', options: ['形容词比较级', '形容词原级', '副词', '动词'], answer: 0, explain: 'taller and stronger 更高更壮，成长的比较级！', tag: '比较级' },
    { id: 'ztf5-8', type: 'judge', q: '"take a trip" 的意思是"去旅行"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'take a trip 去旅行，毕业旅行安排起来！', tag: '动词短语' },
    { id: 'ztf5-9', type: 'choice', q: '给同学写毕业留言，可以写：', options: ['祝福与感谢的话', '骂人的话', '让别人难堪的话', '什么都不写'], answer: 0, explain: '留言写祝福 Best wishes! 和感谢 Thank you for...，温暖一生！', tag: '表达' },
    { id: 'ztf5-10', type: 'choice', q: '感谢老师六年教导，说：', options: ['Thank you for teaching us!', 'You must go away!', 'I don\'t know you.', 'Give me homework!'], answer: 0, explain: 'Thank you for + doing 感谢你做了……，感谢师恩！', tag: '句型' },
  ],
  ztf6: [
    { id: 'ztf6-1', type: 'choice', q: '"去上学"的短语是：', options: ['go to school', 'go school', 'go to the school game', 'come school'], answer: 0, explain: 'go to school 去上学，固定搭配不加 the（指上学这件事）。', tag: '短语' },
    { id: 'ztf6-2', type: 'choice', q: '第三人称单数"He ___ football after school."填：', options: ['plays', 'play', 'played every day', 'playing'], answer: 0, explain: '一般现在时第三人称单数动词加 s：He plays football.。', tag: '语法点睛' },
    { id: 'ztf6-3', type: 'choice', q: '"There ___ many books on the desk."填：', options: ['are', 'is', 'was', 'be'], answer: 0, explain: 'many books 复数，There are... 有很多……。', tag: '语法点睛' },
    { id: 'ztf6-4', type: 'choice', q: '下面哪组全是"动词过去式"？', options: ['went, saw, ate', 'go, see, eat', 'goes, sees, eats', 'going, seeing, eating'], answer: 0, explain: 'went（去）、saw（看见）、ate（吃）都是过去式。', tag: '动词过去式' },
    { id: 'ztf6-5', type: 'judge', q: '冠词 a 用于辅音音素开头的词前，an 用于元音音素开头的词前。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'an apple 一个苹果，a book 一本书，看发音不看字母！', tag: '语法点睛' },
    { id: 'ztf6-6', type: 'choice', q: '"比……更高"完整结构是：', options: ['taller than', 'taller then', 'more tall than', 'tall than'], answer: 0, explain: '比较级 + than：taller than me 比我高。', tag: '比较级' },
    { id: 'ztf6-7', type: 'choice', q: '"would like" 的意思是：', options: ['想要', '像', '喜欢过', '将会喜欢'], answer: 0, explain: 'would like 想要，比 want 更客气：Would you like some tea?。', tag: '短语' },
    { id: 'ztf6-8', type: 'judge', q: '"Let\'s..." 后面跟动词原形，如 Let\'s go.。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Let\'s + 动词原形：Let\'s play! 我们一起玩！', tag: '语法点睛' },
    { id: 'ztf6-9', type: 'choice', q: '"我每天走路上学"是：', options: ['I walk to school every day.', 'I walked to school every day.', 'I am walking to school every day now.', 'I walks to school every day.'], answer: 0, explain: 'every day 一般现在时，I 后动词用原形 walk。', tag: '时态' },
    { id: 'ztf6-10', type: 'choice', q: '"Both A and B" 的意思是：', options: ['A 和 B 都', 'A 或 B', '不是 A 而是 B', '只有 A'], answer: 0, explain: 'both...and... 两者都：Both Mike and John are here.。', tag: '短语' },
  ],
  ztf7: [
    { id: 'ztf7-1', type: 'choice', q: '别人说 "Thank you for your help."，你回答：', options: ['You\'re welcome.', 'I\'m fine, thanks.', 'How do you do?', 'Yes, please.'], answer: 0, explain: 'You\'re welcome. 不客气，回答感谢的标准用语。', tag: '情景交际' },
    { id: 'ztf7-2', type: 'choice', q: '问路得到帮助后说 "Thanks a lot!"，回答：', options: ['Not at all. / My pleasure.', 'You\'re right.', 'Here you are.', 'That\'s OK, bye!'], answer: 0, explain: 'Not at all. 不客气，My pleasure. 我的荣幸。', tag: '情景交际' },
    { id: 'ztf7-3', type: 'choice', q: '打电话时介绍"我是莉莉"，说：', options: ['This is Lily speaking.', 'I am Lily here call.', 'Lily is me.', 'That is Lily.'], answer: 0, explain: '电话用语 This is... 我是……，That is...? 你是……？', tag: '情景交际' },
    { id: 'ztf7-4', type: 'choice', q: '劝同学"不要在图书室吃东西"，说：', options: ['Don\'t eat in the library, please.', 'Eat more in the library!', 'Library food is good.', 'Can I eat here loud?'], answer: 0, explain: 'Don\'t..., please. 礼貌劝阻，文明阅读环境靠大家。', tag: '情景交际' },
    { id: 'ztf7-5', type: 'judge', q: '"What\'s the matter with you?" 是在关心对方怎么了。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'What\'s the matter? 怎么了？关心他人用这句开场。', tag: '情景交际' },
    { id: 'ztf7-6', type: 'choice', q: '"明天我将去北京"，用将来时说：', options: ['I will go to Beijing tomorrow.', 'I went to Beijing tomorrow.', 'I go to Beijing yesterday.', 'I am Beijing tomorrow.'], answer: 0, explain: 'will + 动词原形表将来：will go 将要去。', tag: '时态综合' },
    { id: 'ztf7-7', type: 'choice', q: '"看！她正在跳舞。"是：', options: ['Look! She is dancing.', 'Look! She dances.', 'Look! She danced.', 'Look! She will dance.'], answer: 0, explain: 'Look! 提示正在发生，用现在进行时 is dancing。', tag: '时态综合' },
    { id: 'ztf7-8', type: 'judge', q: '"He often plays basketball on Sundays." 用的是一般现在时。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'often、on Sundays 是一般现在时标志，plays 第三人称单数。', tag: '时态综合' },
    { id: 'ztf7-9', type: 'choice', q: '短文里看到 "last summer, we swam in the sea"，知道这件事发生在：', options: ['去年夏天', '今年夏天', '明年夏天', '每个夏天'], answer: 0, explain: 'last summer + swam 过去式，锁定发生在过去。', tag: '阅读理解' },
    { id: 'ztf7-10', type: 'choice', q: '小升初冲刺阶段，最好的复习方法是：', options: ['错题整理 + 每日坚持听读', '考前通宵刷题', '只背单词不做题', '完全放松不复习'], answer: 0, explain: '整理错题、坚持听读，稳扎稳打，毕业闯关必胜！', tag: '学习方法' },
  ],
}
