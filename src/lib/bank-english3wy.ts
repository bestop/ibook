// 外研版新标准英语（一年级起点）三年级上册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）三年级上册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq3s 核对）：
//   M1 Do you use chopsticks in the UK?/I'm eating hamburgers and chips. · M2 We're making a cake./I'm watching TV.
//   M3 These ducks are very naughty!/The ducks are playing in the rain. · M4 I can jump./What can you see?
//   M5 Can I have an ice cream?/Can I come in? · M6 I've got new shorts and new shoes./He's got a new shirt.
//   M7 Have you got a headache?/She's got a cold. · M8 This is Sam's book./Is this your grandma's umbrella?
//   M9 I'm going to do the long jump./I'm going to be a driver. · M10 Are you going to Hong Kong?/What are you going to see?
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wc

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
    id: 'wc1',
    name: 'Module 1',
    title: 'Do you use chopsticks in the UK?',
    emoji: '🥢',
    color: 'amber',
    lessons: ['Do you use chopsticks?', "I'm eating hamburgers.", 'Food and tools'],
    intro: '筷子刀叉各不同，边吃边学进行时！',
  },
  {
    id: 'wc2',
    name: 'Module 2',
    title: "We're making a cake.",
    emoji: '🎂',
    color: 'orange',
    lessons: ["We're making a cake.", "I'm watching TV.", '-ing words'],
    intro: '正在做什么？-ing 进行时来报道！',
  },
  {
    id: 'wc3',
    name: 'Module 3',
    title: 'These ducks are very naughty!',
    emoji: '🦆',
    color: 'rose',
    lessons: ['These ducks are naughty.', 'Playing in the rain.', 'These and those'],
    intro: 'these 近 those 远，调皮鸭子雨中玩！',
  },
  {
    id: 'wc4',
    name: 'Module 4',
    title: 'I can jump.',
    emoji: '🤸',
    color: 'lime',
    lessons: ['I can jump.', 'What can you see?', 'Abilities'],
    intro: '跳一跳看一看，can 能力大挑战！',
  },
  {
    id: 'wc5',
    name: 'Module 5',
    title: 'Can I have an ice cream?',
    emoji: '🍦',
    color: 'teal',
    lessons: ['Can I have an ice cream?', 'Can I come in?', 'Polite requests'],
    intro: 'Can I...? 有礼貌，请求帮忙要用到！',
  },
  {
    id: 'wc6',
    name: 'Module 6',
    title: "I've got new shorts and new shoes.",
    emoji: '👟',
    color: 'sky',
    lessons: ["I've got new shorts.", "He's got a new shirt.", "have got"],
    intro: 'have got 我有你有，新衣新鞋真开心！',
  },
  {
    id: 'wc7',
    name: 'Module 7',
    title: 'Have you got a headache?',
    emoji: '🤒',
    color: 'violet',
    lessons: ['Have you got a headache?', "She's got a cold.", 'Feeling ill'],
    intro: '头疼感冒要关心，have got 问健康！',
  },
  {
    id: 'wc8',
    name: 'Module 8',
    title: "This is Sam's book.",
    emoji: '📕',
    color: 'pink',
    lessons: ["This is Sam's book.", "Is this your grandma's umbrella?", "Whose is it?"],
    intro: "'s 表示“谁的”，物品主人看得清！",
  },
  {
    id: 'wc9',
    name: 'Module 9',
    title: "I'm going to do the long jump.",
    emoji: '🏃',
    color: 'indigo',
    lessons: ["I'm going to do long jump.", "I'm going to be a driver.", 'be going to'],
    intro: 'be going to 表打算，运动职业说一说！',
  },
  {
    id: 'wc10',
    name: 'Module 10',
    title: 'Are you going to Hong Kong?',
    emoji: '✈️',
    color: 'emerald',
    lessons: ['Are you going to Hong Kong?', 'What are you going to see?', 'Travel plans'],
    intro: '旅行计划问一问，be going to 用起来！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wc1: [
    { id: 'wc1-1', type: 'choice', q: '"chopsticks" 指的是：', options: ['筷子', '刀', '叉子', '勺子'], answer: 0, explain: 'chopsticks 筷子（常用复数），中国人吃饭用筷子。', tag: '餐具' },
    { id: 'wc1-2', type: 'choice', q: '"Do you use chopsticks in the UK?" 的意思是：', options: ['在英国你们用筷子吗？', '你有筷子吗？', '英国的筷子好吃吗？', '你去英国吃饭吗？'], answer: 0, explain: 'use 使用，in the UK 在英国：问英国人用不用筷子。', tag: '句型' },
    { id: 'wc1-3', type: 'choice', q: '"I\'m eating hamburgers and chips." 的意思是：', options: ['我正在吃汉堡和薯条。', '我喜欢吃汉堡。', '我吃过汉堡了。', '我想吃汉堡。'], answer: 0, explain: "be + 动词-ing 表示“正在做”：I'm eating... 我正在吃。", tag: '进行时' },
    { id: 'wc1-4', type: 'choice', q: '英国人吃饭常用：', options: ['knife and fork', 'chopsticks', 'hands', 'spoon only'], answer: 0, explain: 'knife and fork 刀叉，是英国人常用的餐具。', tag: '文化' },
    { id: 'wc1-5', type: 'judge', q: '"hamburger" 指的是汉堡包，"chips" 指的是薯条。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'hamburger 汉堡包，chips 薯条（英式），美式叫 fries。', tag: '食物' },
    { id: 'wc1-6', type: 'choice', q: '"use" 的意思是：', options: ['使用', '吃', '买', '洗'], answer: 0, explain: 'use 使用：I use chopsticks. 我用筷子。', tag: '单词' },
    { id: 'wc1-7', type: 'choice', q: '"She is eating rice." 的意思是：', options: ['她正在吃米饭。', '她喜欢米饭。', '她要去做饭。', '她吃完了米饭。'], answer: 0, explain: 'is + eating 正在吃：她正在吃米饭。', tag: '进行时' },
    { id: 'wc1-8', type: 'choice', q: 'eat 的-ing 形式是：', options: ['eating', 'eting', 'eatting', 'eated'], answer: 0, explain: 'eat 直接加 ing 变 eating，不用双写 t。', tag: '语法' },
    { id: 'wc1-9', type: 'judge', q: '用筷子吃饭时不指着别人，也不敲碗盘。', options: ['√ 对', '✗ 错'], answer: 0, explain: '用餐礼仪要记牢：不指人、不敲碗，文明用餐！', tag: '习惯养成' },
    { id: 'wc1-10', type: 'choice', q: '"What are you eating?" 的回答：', options: ["I'm eating noodles.", 'I like noodles.', 'I ate noodles.', 'I eat noodles every day.'], answer: 0, explain: '问正在吃什么，用进行时回答：I\'m eating...。', tag: '进行时' },
  ],
  wc2: [
    { id: 'wc2-1', type: 'choice', q: '"We\'re making a cake." 的意思是：', options: ['我们正在做蛋糕。', '我们喜欢吃蛋糕。', '我们买了一个蛋糕。', '我们想吃蛋糕。'], answer: 0, explain: "We're = We are，are making 正在做。", tag: '进行时' },
    { id: 'wc2-2', type: 'choice', q: '"I\'m watching TV." 的意思是：', options: ['我正在看电视。', '我喜欢看电视。', '我想看电视。', '我看过电视了。'], answer: 0, explain: 'am watching 正在看：我正在看电视。', tag: '进行时' },
    { id: 'wc2-3', type: 'choice', q: '现在进行时的构成是：', options: ['be + 动词-ing', '动词 + s', '动词 + ed', 'will + 动词'], answer: 0, explain: '现在进行时 = be 动词（am/is/are）+ 动词-ing，表示正在发生。', tag: '语法' },
    { id: 'wc2-4', type: 'choice', q: 'make 的-ing 形式是：', options: ['making', 'makeing', 'maked', 'makes'], answer: 0, explain: 'make 以不发音 e 结尾，去 e 加 ing：making。', tag: '语法' },
    { id: 'wc2-5', type: 'judge', q: '"They are playing football." 意思是"他们正在踢足球"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'are playing 正在踢：他们正在踢足球。', tag: '进行时' },
    { id: 'wc2-6', type: 'choice', q: '"她正在唱歌"应该说：', options: ['She is singing.', 'She sings.', 'She can sing.', 'She sang.'], answer: 0, explain: 'is + singing 正在唱：She is singing.。', tag: '进行时' },
    { id: 'wc2-7', type: 'choice', q: 'run 的-ing 形式是：', options: ['running', 'runing', 'rund', 'runs'], answer: 0, explain: 'run 重读闭音节，双写 n 加 ing：running。', tag: '语法' },
    { id: 'wc2-8', type: 'choice', q: '"What are you doing?" 的意思是：', options: ['你正在做什么？', '你喜欢什么？', '你是做什么的？', '你要去哪？'], answer: 0, explain: 'What are you doing? 你正在做什么？回答 I\'m...ing。', tag: '句型' },
    { id: 'wc2-9', type: 'judge', q: '妈妈做蛋糕时帮忙打鸡蛋、递东西，是爱劳动的表现。', options: ['√ 对', '✗ 错'], answer: 0, explain: '做家务长本领，帮妈妈做蛋糕真开心！', tag: '习惯养成' },
    { id: 'wc2-10', type: 'choice', q: '"I\'m watching TV." 的主语换成 they：', options: ["They're watching TV.", 'They watching TV.', 'They is watching TV.', 'They are watch TV.'], answer: 0, explain: 'they 配 are：They\'re watching TV.。', tag: '语法' },
  ],
  wc3: [
    { id: 'wc3-1', type: 'choice', q: '"These ducks are very naughty!" 的意思是：', options: ['这些鸭子非常调皮！', '那些鸭子很可爱！', '这只鸭子在游泳！', '鸭子们在下雨！'], answer: 0, explain: 'these 这些（近处），naughty 调皮的。', tag: '句型' },
    { id: 'wc3-2', type: 'choice', q: '"these" 和 "those" 的区别是：', options: ['these 指近处，those 指远处', 'these 指远处，those 指近处', 'these 是单数，those 是复数', '没有区别'], answer: 0, explain: 'this/these 近，that/those 远，和中文"这些/那些"一样。', tag: '语法' },
    { id: 'wc3-3', type: 'choice', q: '"The ducks are playing in the rain." 的意思是：', options: ['鸭子们正在雨中玩耍。', '鸭子们喜欢下雨。', '鸭子们被雨淋湿了。', '鸭子们在躲雨。'], answer: 0, explain: 'are playing 正在玩耍，in the rain 在雨中。', tag: '进行时' },
    { id: 'wc3-4', type: 'choice', q: '"naughty" 的意思是：', options: ['调皮的', '可爱的', '高兴的', '干净的'], answer: 0, explain: 'naughty 调皮的，a naughty boy 一个调皮的男孩。', tag: '单词' },
    { id: 'wc3-5', type: 'judge', q: '"These are ducks." 意思是"这些是鸭子"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'these + 复数名词：These are ducks. 这些是鸭子。', tag: '句型' },
    { id: 'wc3-6', type: 'choice', q: '指远处的那群鸟，应该说：', options: ['Those are birds.', 'These are birds.', 'This is a bird.', 'That are birds.'], answer: 0, explain: '远处的复数用 those：Those are birds. 那些是鸟。', tag: '语法' },
    { id: 'wc3-7', type: 'choice', q: '"duck" 指的是：', options: ['鸭子', '母鸡', '小鸟', '鹅'], answer: 0, explain: 'duck 鸭子，hen 母鸡，bird 小鸟，goose 鹅。', tag: '动物' },
    { id: 'wc3-8', type: 'choice', q: '"rain" 的意思是：', options: ['雨', '风', '雪', '云'], answer: 0, explain: 'rain 雨，snow 雪，wind 风，cloud 云。', tag: '天气' },
    { id: 'wc3-9', type: 'judge', q: 'this 的复数是 these，that 的复数是 those。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'this→these，that→those，单复数要配对。', tag: '语法' },
    { id: 'wc3-10', type: 'choice', q: '"What are these?" 的回答：', options: ["They're ducks.", "It's a duck.", 'They ducks.', 'This is ducks.'], answer: 0, explain: '问这些是什么，用 They\'re...（复数）回答。', tag: '句型' },
  ],
  wc4: [
    { id: 'wc4-1', type: 'choice', q: '"I can jump." 的意思是：', options: ['我会跳。', '我在跳。', '我跳得高。', '我想跳。'], answer: 0, explain: 'can 能/会，后面接动词原形：I can jump. 我会跳。', tag: '情态动词' },
    { id: 'wc4-2', type: 'choice', q: '"What can you see?" 的意思是：', options: ['你能看见什么？', '你在看什么书？', '你怎么看的？', '你看见我了吗？'], answer: 0, explain: 'What can you see? 你能看见什么？回答 I can see...。', tag: '句型' },
    { id: 'wc4-3', type: 'choice', q: '"jump" 的意思是：', options: ['跳', '跑', '走', '飞'], answer: 0, explain: 'jump 跳，run 跑，walk 走，fly 飞。', tag: '动词' },
    { id: 'wc4-4', type: 'choice', q: '"我会游泳"应该说：', options: ['I can swim.', 'I swim can.', 'I am swim.', 'I cans swim.'], answer: 0, explain: 'can + 动词原形：I can swim. 我会游泳。', tag: '句型' },
    { id: 'wc4-5', type: 'judge', q: 'can 后面的动词要加 s 或 ing。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'can 后面用动词原形！I can run. 不加 s 也不加 ing。', tag: '语法' },
    { id: 'wc4-6', type: 'choice', q: '"I can\'t fly." 的意思是：', options: ['我不会飞。', '我在飞。', '我能飞。', '我不想飞。'], answer: 0, explain: "can't = can not，表示“不会/不能”。", tag: '情态动词' },
    { id: 'wc4-7', type: 'choice', q: '"I can see a bird." 的意思是：', options: ['我能看见一只鸟。', '我看见了鸟笼。', '我想养鸟。', '鸟看见我了。'], answer: 0, explain: 'I can see... 我能看见……，see 看见。', tag: '句型' },
    { id: 'wc4-8', type: 'choice', q: '"你弟弟会骑自行车吗？"用英语问：', options: ['Can your brother ride a bike?', 'Do your brother ride a bike?', 'Is your brother ride a bike?', 'Your brother can ride a bike?'], answer: 0, explain: 'Can 开头提问能力：Can he...?。', tag: '句型' },
    { id: 'wc4-9', type: 'judge', q: '"Can you swim?" 的肯定回答是 "Yes, I can."。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Can 问 can 答：Yes, I can. / No, I can\'t.。', tag: '语法' },
    { id: 'wc4-10', type: 'choice', q: '运动会上"跳远"叫 long jump，"跳高"叫：', options: ['high jump', 'jump high', 'long run', 'high run'], answer: 0, explain: 'long jump 跳远，high jump 跳高，都是运动项目。', tag: '运动' },
  ],
  wc5: [
    { id: 'wc5-1', type: 'choice', q: '"Can I have an ice cream?" 的意思是：', options: ['我能吃个冰淇淋吗？', '我有冰淇淋。', '冰淇淋好吃吗？', '我在吃冰淇淋。'], answer: 0, explain: 'Can I have...? 我能要……吗？礼貌请求的说法。', tag: '句型' },
    { id: 'wc5-2', type: 'choice', q: '"Can I come in?" 的意思是：', options: ['我能进来吗？', '我要出去了。', '我能去吗？', '进来吧！'], answer: 0, explain: 'come in 进来，敲门后问 Can I come in?。', tag: '句型' },
    { id: 'wc5-3', type: 'choice', q: '"Can I have...?" 的肯定回答是：', options: ['Yes, you can.', 'Yes, I can.', 'Yes, you do.', 'Yes, please.'], answer: 0, explain: 'Can I 问句用 you 回答：Yes, you can.。', tag: '语法' },
    { id: 'wc5-4', type: 'choice', q: '"ice cream" 指的是：', options: ['冰淇淋', '冰水', '果冻', '酸奶'], answer: 0, explain: 'ice cream 冰淇淋，an ice cream 一个冰淇淋。', tag: '食物' },
    { id: 'wc5-5', type: 'judge', q: '用 "Can I...?" 提问是有礼貌的请求方式。', options: ['√ 对', '✗ 错'], answer: 0, explain: '想要东西、进门前，用 Can I...? 比直接说要礼貌！', tag: '习惯养成' },
    { id: 'wc5-6', type: 'choice', q: '"Can I have a drink?" 的否定回答：', options: ["No, you can't.", 'No, you can.', "No, I can't.", 'No, thanks you.'], answer: 0, explain: "Can I 问句否定回答：No, you can't.。", tag: '语法' },
    { id: 'wc5-7', type: 'choice', q: '进老师办公室前应该说：', options: ['May I come in?', 'Open the door!', 'I come in.', 'Where is the door?'], answer: 0, explain: 'May I come in? 我能进来吗？比 Can I 更正式礼貌。', tag: '习惯养成' },
    { id: 'wc5-8', type: 'choice', q: '"Can I have some water?" 中 "some" 的意思是：', options: ['一些', '没有', '很多', '全部'], answer: 0, explain: 'some 一些，some water 一些水。', tag: '单词' },
    { id: 'wc5-9', type: 'judge', q: '别人答应你的请求后，要说 "Thank you."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '得到帮助或允许后说 Thank you.，感恩有礼貌。', tag: '习惯养成' },
    { id: 'wc5-10', type: 'choice', q: '"Can I turn on the light?" 的意思是：', options: ['我能开灯吗？', '我能关灯吗？', '灯亮着吗？', '灯在哪里？'], answer: 0, explain: 'turn on 打开，turn off 关掉，Can I turn on...? 我能打开……吗？', tag: '句型' },
  ],
  wc6: [
    { id: 'wc6-1', type: 'choice', q: '"I\'ve got new shorts and new shoes." 的意思是：', options: ['我有新短裤和新鞋。', '我买了短裤。', '我穿着短裤。', '我想要新鞋。'], answer: 0, explain: "I've got = I have got，表示“有”。", tag: '句型' },
    { id: 'wc6-2', type: 'choice', q: '"have got" 的意思是：', options: ['有', '吃', '买', '穿'], answer: 0, explain: 'have got 有：I\'ve got a pen. 我有一支钢笔。', tag: '语法' },
    { id: 'wc6-3', type: 'choice', q: '"He\'s got a new shirt." 中 "He\'s got" 是：', options: ['He has got 的缩写', 'He is got 的缩写', 'He was got 的缩写', 'He does got 的缩写'], answer: 0, explain: "He's got = He has got，他有……。", tag: '语法' },
    { id: 'wc6-4', type: 'choice', q: '"shirt" 指的是：', options: ['衬衫', '短裤', '裙子', '毛衣'], answer: 0, explain: 'shirt 衬衫，T-shirt T 恤衫，shorts 短裤。', tag: '服装' },
    { id: 'wc6-5', type: 'judge', q: '"shorts"（短裤）和 "trousers"（裤子）常用复数形式。', options: ['√ 对', '✗ 错'], answer: 0, explain: '短裤和裤子有两条裤腿，英语里常用复数 shorts/trousers。', tag: '服装' },
    { id: 'wc6-6', type: 'choice', q: '"Have you got a pen?" 的肯定回答：', options: ['Yes, I have.', 'Yes, I\'ve.', 'Yes, I do.', 'Yes, I got.'], answer: 0, explain: 'Have you got...? 回答 Yes, I have. / No, I haven\'t.。', tag: '语法' },
    { id: 'wc6-7', type: 'choice', q: '"他没有自行车"应该说：', options: ["He hasn't got a bike.", "He doesn't got a bike.", "He haven't got a bike.", "He isn't got a bike."], answer: 0, explain: "he 三单用 has：hasn't got 没有。", tag: '语法' },
    { id: 'wc6-8', type: 'choice', q: '"I\'ve got two feet." 的意思是：', options: ['我有两只脚。', '我踩到脚了。', '我想买鞋子。', '我长高了。'], answer: 0, explain: 'foot 的复数是 feet：two feet 两只脚。', tag: '身体部位' },
    { id: 'wc6-9', type: 'judge', q: 'new shoes 新鞋子，穿新鞋也要爱护，不踩水不踢墙。', options: ['√ 对', '✗ 错'], answer: 0, explain: '爱护自己的物品，鞋子干净又耐穿！', tag: '习惯养成' },
    { id: 'wc6-10', type: 'choice', q: '"she has got" 的缩写形式是：', options: ["she's got", 'she has\'nt got', 'she got', 'she gots'], answer: 0, explain: "she has got = she's got，注意和 she is 的缩写区分要看后面词。", tag: '语法' },
  ],
  wc7: [
    { id: 'wc7-1', type: 'choice', q: '"Have you got a headache?" 的意思是：', options: ['你头疼吗？', '你有帽子吗？', '你摔倒了吗？', '你开心吗？'], answer: 0, explain: 'headache 头疼（head 头 + ache 疼），关心别人的健康。', tag: '健康' },
    { id: 'wc7-2', type: 'choice', q: '"She\'s got a cold." 的意思是：', options: ['她感冒了。', '她很冷。', '她拿了冷饮。', '她想吹空调。'], answer: 0, explain: 'have got a cold 感冒了；cold 还有"冷"的意思。', tag: '健康' },
    { id: 'wc7-3', type: 'choice', q: '"toothache" 指的是：', options: ['牙疼', '胃疼', '发烧', '咳嗽'], answer: 0, explain: 'toothache 牙疼（tooth 牙 + ache 疼），少吃糖勤刷牙。', tag: '健康' },
    { id: 'wc7-4', type: 'choice', q: '同学感冒了，你应该：', options: ['提醒他多喝水休息', '跟他打闹', '共用他的水杯', '让他多运动出汗'], answer: 0, explain: '生病要多休息多喝水，不能共用杯子以免传染。', tag: '健康习惯' },
    { id: 'wc7-5', type: 'judge', q: '"stomach ache" 意思是"胃疼/肚子疼"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'stomach 胃/肚子，stomach ache 胃疼，饭前洗手防生病。', tag: '健康' },
    { id: 'wc7-6', type: 'choice', q: '"Have you got a headache?" 的否定回答：', options: ["No, I haven't.", "No, I don't.", "No, I haven't got.", "No, I haven't headache."], answer: 0, explain: "Have you got...? 否定回答 No, I haven't.。", tag: '语法' },
    { id: 'wc7-7', type: 'choice', q: '发烧了用英语说：', options: ["I've got a fever.", "I've got a cold.", "I've got a cough.", "I've got a fever's head."], answer: 0, explain: 'fever 发烧，have got a fever 发烧了，要告诉老师家长。', tag: '健康' },
    { id: 'wc7-8', type: 'choice', q: '"cough" 指的是：', options: ['咳嗽', '头疼', '牙疼', '流鼻涕'], answer: 0, explain: 'cough 咳嗽，咳嗽时要用纸巾或手肘挡住口鼻。', tag: '健康' },
    { id: 'wc7-9', type: 'judge', q: '身体不舒服要及时告诉老师和家长，不能硬撑。', options: ['√ 对', '✗ 错'], answer: 0, explain: '不舒服马上说，大人才能及时照顾你、带你看医生！', tag: '安全教育' },
    { id: 'wc7-10', type: 'choice', q: '"Take care!" 的意思是：', options: ['保重！', '小心！', '再见！', '加油！'], answer: 0, explain: 'Take care! 保重！关心别人时常用的祝福。', tag: '祝福语' },
  ],
  wc8: [
    { id: 'wc8-1', type: 'choice', q: '"This is Sam\'s book." 的意思是：', options: ['这是萨姆的书。', '这是我的书。', '萨姆在看书。', '这是本萨姆书。'], answer: 0, explain: "Sam's = Sam 的，名词后加 's 表示“某人的”。", tag: "所有格" },
    { id: 'wc8-2', type: 'choice', q: '"Sam\'s book" 中 \'s 表示：', options: ['书的归属（Sam 的）', 'Sam 是 is 的缩写', '复数形式', '动词所有格'], answer: 0, explain: "人名 + 's 表示“某人的”：Sam's book 萨姆的书。", tag: "所有格" },
    { id: 'wc8-3', type: 'choice', q: '"这是妈妈的伞"应该说：', options: ["This is mum's umbrella.", 'This is mum umbrella.', "This is mums' umbrella.", 'This is a mum umbrella.'], answer: 0, explain: "mum + 's：mum's umbrella 妈妈的伞。", tag: "所有格" },
    { id: 'wc8-4', type: 'choice', q: '"umbrella" 指的是：', options: ['雨伞', '雨衣', '雨鞋', '帽子'], answer: 0, explain: 'umbrella 雨伞，下雨打伞。', tag: '单词' },
    { id: 'wc8-5', type: 'judge', q: '"Is this your grandma\'s umbrella?" 意思是"这是你奶奶的伞吗？"。', options: ['√ 对', '✗ 错'], answer: 0, explain: "grandma's 奶奶的，Is this...? 这是……吗？", tag: "所有格" },
    { id: 'wc8-6', type: 'choice', q: '"book" 的所有格正确的写法是（主人是 Lily）：', options: ["Lily's book", 'Lilys book', 'Lily book', 'the Lily book'], answer: 0, explain: "人名后加 's：Lily's book 莉莉的书。", tag: "所有格" },
    { id: 'wc8-7', type: 'choice', q: '捡到别人的东西应该：', options: ['交给老师或物主', '自己留着', '扔掉', '和同学分'], answer: 0, explain: '拾金不昧！捡到东西交给老师，找到主人归还。', tag: '习惯养成' },
    { id: 'wc8-8', type: 'choice', q: '"Whose bag is this?" 的意思是：', options: ['这是谁的包？', '这是谁的包在哪儿？', '包里是什么？', '这个包多少钱？'], answer: 0, explain: 'whose 谁的，问东西的主人。', tag: '句型' },
    { id: 'wc8-9', type: 'judge', q: '"This is Amy\'s desk." 意思是"这是艾米的课桌"。', options: ['√ 对', '✗ 错'], answer: 0, explain: "Amy's desk 艾米的桌子，'s 表示所属。", tag: "所有格" },
    { id: 'wc8-10', type: 'choice', q: '"爸爸的汽车"应该说：', options: ["dad's car", 'dad car', 'dads car', 'the dad car'], answer: 0, explain: "dad's car 爸爸的车，人 + 's + 东西。", tag: "所有格" },
  ],
  wc9: [
    { id: 'wc9-1', type: 'choice', q: '"I\'m going to do the long jump." 的意思是：', options: ['我打算去跳远。', '我正在跳远。', '我跳过远了。', '我擅长跳远。'], answer: 0, explain: 'be going to + 动词原形，表示打算/计划做某事。', tag: '一般将来' },
    { id: 'wc9-2', type: 'choice', q: '"be going to" 表示：', options: ['打算、将要', '正在', '过去', '经常'], answer: 0, explain: 'be going to 打算做某事，还没发生但已有计划。', tag: '一般将来' },
    { id: 'wc9-3', type: 'choice', q: '"I\'m going to be a driver." 的意思是：', options: ['我打算当一名司机。', '我是司机。', '我正在开车。', '我坐过车。'], answer: 0, explain: 'be going to be + 职业，打算成为……。', tag: '一般将来' },
    { id: 'wc9-4', type: 'choice', q: '"long jump" 指的是：', options: ['跳远', '跳高', '长跑', '跳绳'], answer: 0, explain: 'long jump 跳远，high jump 跳高。', tag: '运动' },
    { id: 'wc9-5', type: 'judge', q: '"She is going to sing." 意思是"她正在唱歌"。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'be going to 是"打算唱"（还没唱），"正在唱"是 She is singing.。', tag: '一般将来' },
    { id: 'wc9-6', type: 'choice', q: '"他打算踢足球"应该说：', options: ['He is going to play football.', 'He is playing football.', 'He plays football.', 'He can play football.'], answer: 0, explain: 'he 配 is：He is going to play...。', tag: '一般将来' },
    { id: 'wc9-7', type: 'choice', q: '"driver" 指的是：', options: ['司机', '医生', '老师', '警察'], answer: 0, explain: 'driver 司机（drive 驾驶 + r），drive a bus 开公交车。', tag: '职业' },
    { id: 'wc9-8', type: 'choice', q: '"你打算做什么？"用英语问：', options: ['What are you going to do?', 'What do you do?', 'What are you doing?', 'What did you do?'], answer: 0, explain: 'What are you going to do? 问打算做什么。', tag: '句型' },
    { id: 'wc9-9', type: 'judge', q: '"我打算当医生"可以说 I\'m going to be a doctor.。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'be going to be + a doctor，谈理想就是这样说！', tag: '一般将来' },
    { id: 'wc9-10', type: 'choice', q: '"They are going to run." 中 are 是因为主语：', options: ['They 是复数', 'They 是单数', 'run 是原形', 'going 需要'], answer: 0, explain: 'be going to 中 be 的形式看主语：I am / he is / they are。', tag: '语法' },
  ],
  wc10: [
    { id: 'wc10-1', type: 'choice', q: '"Are you going to Hong Kong?" 的意思是：', options: ['你打算去香港吗？', '你去过香港吗？', '你在香港吗？', '你喜欢香港吗？'], answer: 0, explain: 'Are you going to + 地点，问是不是打算去。', tag: '一般将来' },
    { id: 'wc10-2', type: 'choice', q: '"Are you going to Hong Kong?" 的肯定回答：', options: ['Yes, I am.', 'Yes, I do.', 'Yes, I can.', 'Yes, I have.'], answer: 0, explain: 'Are you...? 回答 Yes, I am. / No, I\'m not.。', tag: '语法' },
    { id: 'wc10-3', type: 'choice', q: '"What are you going to see?" 的意思是：', options: ['你打算去看什么？', '你看见了什么？', '你想看什么书？', '你看电视吗？'], answer: 0, explain: 'be going to + see，打算去看的东西。', tag: '一般将来' },
    { id: 'wc10-4', type: 'choice', q: '回答 "What are you going to see?" 可以说：', options: ["I'm going to see the pandas.", 'I see pandas.', 'I saw pandas.', 'I like pandas.'], answer: 0, explain: '用 be going to 回答打算：I\'m going to see...。', tag: '句型' },
    { id: 'wc10-5', type: 'judge', q: '"She is going to visit Beijing." 意思是"她打算去北京玩"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'visit 参观/拜访，be going to visit 打算去参观。', tag: '一般将来' },
    { id: 'wc10-6', type: 'choice', q: '"坐飞机去"旅行应该说：', options: ['go by plane', 'go on plane', 'go plane', 'fly plane'], answer: 0, explain: 'by plane 坐飞机，旅行交通方式用 by。', tag: '交通' },
    { id: 'wc10-7', type: 'choice', q: '外出旅行时应该：', options: ['紧跟家长不乱跑', '自己乱跑乱逛', '和陌生人走', '独自坐车'], answer: 0, explain: '旅行安全第一：跟紧大人，走散了原地等待找警察。', tag: '安全教育' },
    { id: 'wc10-8', type: 'choice', q: '"他们打算去公园"应该说：', options: ['They are going to the park.', 'They going to the park.', 'They is going to the park.', 'They are go to the park.'], answer: 0, explain: 'they 配 are：They are going to...。', tag: '语法' },
    { id: 'wc10-9', type: 'judge', q: '制定计划用 be going to，比如周末 I\'m going to read books.。', options: ['√ 对', '✗ 错'], answer: 0, explain: '先计划再行动：be going to 把计划说出来！', tag: '一般将来' },
    { id: 'wc10-10', type: 'choice', q: '"打算"和"正在"分别是：', options: ['be going to；be + -ing', 'be + -ing；be going to', 'will；-ed', 'can；must'], answer: 0, explain: 'be going to 打算（将来），be + -ing 正在（现在进行）。', tag: '语法' },
  ],
}
