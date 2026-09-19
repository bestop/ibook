// 2026 新版沪教版（上海教育出版社）英语 三年级上册 随堂知识点题库（五四学制）
// 教材：（根据2022年版课程标准修订）义务教育教科书（五•四学制）·英语三年级上册 · 上海教育出版社
// 目录（国家中小学智慧教育平台官方电子教材）：Starter（字母表/季节/数字/国家）
//       / U1 A new start / U2 Proud of you, proud of myself / U3 Our garden / U4 Water / U5 I can help
//       / U6 How do you feel? / U7 Jobs / U8 Finding places / U9 Special days in China / U10 Foods around the world
// Starter 热身站 + 10 个单元一关，每关 10 题，共 11 关 110 题

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
    id: 'fst',
    name: '热身站',
    title: 'Starter',
    emoji: '🔤',
    color: 'cyan',
    lessons: ['The alphabet 字母表', 'Seasons / Numbers / Countries'],
    intro: '从 A 到 Z 认识 26 个字母，还有季节、数字和国家的单词，热热身出发吧！',
  },
  {
    id: 'f1',
    name: '第一关',
    title: 'A new start',
    emoji: '🎒',
    color: 'cyan',
    lessons: ['school, classmate, teacher', 'read, book, study, friend'],
    intro: '新学期新开始！认一认学校和学习的单词，说说你的新目标（What is your goal?）。',
  },
  {
    id: 'f2',
    name: '第二关',
    title: 'Proud of you, proud of myself',
    emoji: '🌟',
    color: 'teal',
    lessons: ['draw, tell a story, dance, sing', 'use the computer, run, jump'],
    intro: 'I am good at... 我擅长的事说出来，为自己骄傲，也为同学骄傲！',
  },
  {
    id: 'f3',
    name: '第三关',
    title: 'Our garden',
    emoji: '🌻',
    color: 'lime',
    lessons: ['garden, flower, vegetable, plant', 'orange tree, tomato, carrot'],
    intro: '校园小花园里有什么？What is this? It is a flower. 一起逛逛我们的花园！',
  },
  {
    id: 'f4',
    name: '第四关',
    title: 'Water',
    emoji: '💧',
    color: 'sky',
    lessons: ['water, river, lake, sea', 'water vapour, cloud, rain, snow, ice'],
    intro: '水的旅行真奇妙：Where does it come from? 跟着小水滴上天入海！',
  },
  {
    id: 'f5',
    name: '第五关',
    title: 'I can help',
    emoji: '🧹',
    color: 'amber',
    lessons: ['help, cook, do the dishes', 'clean the table, walk the dog, chore'],
    intro: 'I can help! 会做家务的孩子最棒，帮忙做家务用英语怎么说？',
  },
  {
    id: 'f6',
    name: '第六关',
    title: 'How do you feel?',
    emoji: '😊',
    color: 'orange',
    lessons: ['happy, sad, good, bad', 'excited, scared, tired, unhappy'],
    intro: '心情有晴有雨：How do you feel? 学会说出自己的感受，也学会关心别人。',
  },
  {
    id: 'f7',
    name: '第七关',
    title: 'Jobs',
    emoji: '👷',
    color: 'violet',
    lessons: ['driver, police officer, engineer', 'writer, doctor, chef, astronaut'],
    intro: 'What do you want to be? 认识各种职业，说说你的大梦想！',
  },
  {
    id: 'f8',
    name: '第八关',
    title: 'Finding places',
    emoji: '🗺️',
    color: 'emerald',
    lessons: ['library, museum, road', 'find the way, walk along, left, right'],
    intro: '迷路了怎么办？Walk along the road, turn left... 学会指路和问路！',
  },
  {
    id: 'f9',
    name: '第九关',
    title: 'Special days in China',
    emoji: '🎊',
    color: 'red',
    lessons: ['the Spring Festival, the Lantern Festival', 'the Double Ninth Festival, celebrate, holiday'],
    intro: '中国的节日故事多：春节、元宵节、重阳节……用英语介绍中国节日！',
  },
  {
    id: 'f10',
    name: '第十关',
    title: 'Foods around the world',
    emoji: '🍕',
    color: 'rose',
    lessons: ['food, noodles, pizza, sandwich', 'hot dog, fish and chips, beef, bread, cake'],
    intro: '世界美食大集合：noodles 还是 pizza？做个小小美食家！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  fst: [
    { id: 'fstq1', type: 'choice', q: '字母表中有多少个英文字母？', options: ['26 个', '24 个', '28 个', '30 个'], answer: 0, explain: '英文字母表共有 26 个字母，从 Aa 到 Zz，有大写和小写两种样子。', tag: '字母表' },
    { id: 'fstq2', type: 'choice', q: '按字母表顺序，A 后面第三个字母是什么？', options: ['D', 'B', 'C', 'E'], answer: 0, explain: 'A → B（第二个）→ C（第三个后一位）……A 后面的第三个字母是 D。唱唱字母歌就不容易数错。', tag: '字母表' },
    { id: 'fstq3', type: 'choice', q: '下面哪个字母的发音以 /e/（哎）开头？', options: ['F', 'A', 'H', 'J'], answer: 0, explain: 'F 读 /ef/，字母名以 /e/ 开头；A 读 /eɪ/，H 读 /eɪtʃ/，J 读 /dʒeɪ/。', tag: '字母发音' },
    { id: 'fstq4', type: 'choice', q: '"summer" 是哪个季节？', options: ['夏天', '春天', '秋天', '冬天'], answer: 0, explain: 'spring 春天，summer 夏天，autumn/fall 秋天，winter 冬天。summer 很热，可以游泳。', tag: '季节单词' },
    { id: 'fstq5', type: 'choice', q: '一年四季中，最冷、会下雪的季节是？', options: ['winter', 'spring', 'summer', 'autumn'], answer: 0, explain: 'winter 冬天最冷，会下雪（snow）、结冰（ice），可以堆雪人。', tag: '季节单词' },
    { id: 'fstq6', type: 'choice', q: '"fifteen" 是数字几？', options: ['15', '5', '50', '4'], answer: 0, explain: 'five 5，fifteen 15，fifty 50。注意 fifteen 的拼写是 fifteen，不是 fiveteen。', tag: '数字单词' },
    { id: 'fstq7', type: 'choice', q: '下面哪个是"中国"的英文？', options: ['China', 'Chinese', 'canada', 'chinese food'], answer: 0, explain: 'China 中国（国家名），Chinese 中国人/中文/中国的。国家名首字母要大写：China, Canada, America。', tag: '国家单词' },
    { id: 'fstq8', type: 'choice', q: '哪个单词表示数字 8？', options: ['eight', 'eigt', 'eiht', 'eigh'], answer: 0, explain: 'eight 是 8。它的拼写有点特别：ei 开头、gh 不发音，读 /eɪt/，和 aite 无关，要记住哦。', tag: '数字单词' },
    { id: 'fstq9', type: 'judge', q: '字母 Gg 在字母表里排在 Ff 的后面。', options: ['对', '错'], answer: 0, explain: '对。顺序是 E, F, G——G 排在 F 后面、H 前面。多背字母表，顺序不会乱。', tag: '字母表' },
    { id: 'fstq10', type: 'choice', q: '"We are Chinese." 的意思是？', options: ['我们是中国人', '我们喜欢中国菜', '我们在中国的学校', '我们说中文'], answer: 0, explain: 'Chinese 作名词可以指中国人、中文。We are Chinese. 意思是"我们是中国人"。', tag: '句子理解' },
  ],
  f1: [
    { id: 'f1q1', type: 'choice', q: '"classmate" 是什么意思？', options: ['同班同学', '老师', '教室', '课本'], answer: 0, explain: 'class＋mate＝classmate，同一个班的伙伴，就是"同班同学"。', tag: '单词理解' },
    { id: 'f1q2', type: 'choice', q: 'Which word means "学习"？', options: ['study', 'read', 'play', 'friend'], answer: 0, explain: 'study 是学习，read 是阅读，play 是玩，friend 是朋友。本单元主题词：school, classmate, teacher, read, book, study, friend。', tag: '单词理解' },
    { id: 'f1q3', type: 'choice', q: '"What is your goal?" 是在问什么？', options: ['你的目标是什么？', '你是谁？', '你的学校在哪里？', '你几岁了？'], answer: 0, explain: 'goal 是目标。开学第一课，老师会问 What is your goal? 回答可以说 I want to...（我想……）。', tag: '句型理解' },
    { id: 'f1q4', type: 'choice', q: 'I want to read more books. 的意思是？', options: ['我想读更多的书', '我想买一本书', '我想写一本书', '我讨厌读书'], answer: 0, explain: 'want to＋动词原形，表示"想做某事"。I want to read more books. 我想读更多的书——这就是一个小目标！', tag: '句型运用' },
    { id: 'f1q5', type: 'choice', q: '在图书馆或教室里，下面哪种做法与 "read quietly" 相符？', options: ['安静地看书', '大声唱歌', '到处乱跑', '吃零食'], answer: 0, explain: 'quietly 安静地。read quietly 安静地读书，是学校里应该做到的好习惯。', tag: '行为用语' },
    { id: 'f1q6', type: 'judge', q: 'teacher 的意思是"老师"，school 的意思是"学校"。', options: ['对', '错'], answer: 0, explain: '对。teacher 老师（teach 教＋er 人），school 学校。这两个词是本单元 Topic words。', tag: '单词理解' },
    { id: 'f1q7', type: 'choice', q: '"我的朋友会打篮球"用英语怎么说？', options: ['My friend can play basketball.', 'My friend is basketball.', 'My friend play basketball.', 'I friend basketball.'], answer: 0, explain: 'play sports/play basketball 做运动、打篮球。My friend can play basketball. 我的朋友会打篮球。', tag: '句子运用' },
    { id: 'f1q8', type: 'choice', q: '课本上 Sound 时间学的是字母 b（book）的发音，b 在 book 里读什么音？', options: ['/b/', '/d/', '/p/', '/m/'], answer: 0, explain: 'b 在单词里通常读 /b/，如 book, bag, big。书名 book 开头的 b 就读 /b/。', tag: '语音' },
    { id: 'f1q9', type: 'choice', q: 'Minmin 的 goal 是在"目标叶子"上写下心愿。下面哪个最适合写在目标叶子上？', options: ['I want to read one book every week.', 'I like pizza.', 'It is a dog.', 'Goodbye!'], answer: 0, explain: '目标要写"想做到的事"。I want to read one book every week. 我想要每周读一本书，这就是目标。', tag: '语篇理解' },
    { id: 'f1q10', type: 'choice', q: '老师让你介绍自己，下面哪句最合适？', options: ['I am a new student in Class 3.', 'She is my mother.', 'It is raining.', 'Open the door, please.'], answer: 0, explain: '介绍自己用 I am...（我是……）。I am a new student in Class 3. 我是三班的一名新生。', tag: '情景交际' },
  ],
  f2: [
    { id: 'f2q1', type: 'choice', q: 'I am good at drawing. 的意思是？', options: ['我擅长画画', '我会画画课', '我想去画画', '我讨厌画画'], answer: 0, explain: 'be good at（doing）表示"擅长做某事"，at 后面动词要加 ing：good at drawing 擅长画画。', tag: '句型运用' },
    { id: 'f2q2', type: 'choice', q: '下面哪个词是"跳舞"？', options: ['dance', 'sing', 'run', 'jump'], answer: 0, explain: 'dance 跳舞，sing 唱歌，run 跑步，jump 跳高。本单元词表：draw, tell a story, dance, sing, use the computer, run, jump。', tag: '单词理解' },
    { id: 'f2q3', type: 'choice', q: '"Proud of you" 的意思是？', options: ['为你骄傲', '向你学习', '和你一起玩', '帮助了你'], answer: 0, explain: 'proud 骄傲的、自豪的。Proud of you! 为你骄傲！同学进步了，我们要真诚地夸奖对方。', tag: '单词理解' },
    { id: 'f2q4', type: 'choice', q: '夸奖同学歌唱得好，可以说？', options: ['You sing very well!', 'You run very well!', 'You can cook!', 'You are sad.'], answer: 0, explain: 'sing 唱歌。You sing very well! 你唱得真好！夸人要用对动词哦。', tag: '情景交际' },
    { id: 'f2q5', type: 'judge', q: '"use the computer" 的意思是"使用电脑"。', options: ['对', '错'], answer: 0, explain: '对。use 使用，computer 电脑。use the computer 就是使用电脑，也是一项本领哦。', tag: '单词理解' },
    { id: 'f2q6', type: 'choice', q: 'She can jump very high. 的意思是？', options: ['她能跳得很高', '她跳得很低', '她想跳绳', '她会跑步'], answer: 0, explain: 'can 会、能，high 高。She can jump very high. 她能跳得很高。描述本领用 can＋动词原形。', tag: '句子理解' },
    { id: 'f2q7', type: 'choice', q: 'Guess who? 是在玩什么游戏？', options: ['猜猜他是谁', '捉迷藏', '丢手绢', '老鹰捉小鸡'], answer: 0, explain: 'guess 猜。Guess who? 猜猜是谁？描述同学的特点让大家猜，这正是课本 Fun time 的游戏。', tag: '语篇理解' },
    { id: 'f2q8', type: 'choice', q: '课本 Sound 时间学字母 d（dance），d 的发音是？', options: ['/d/', '/t/', '/b/', '/g/'], answer: 0, explain: 'd 读 /d/，如 dance（跳舞）、dog（狗）、dad（爸爸）。清浊要分清：/d/ 振动声带。', tag: '语音' },
    { id: 'f2q9', type: 'choice', q: '要表达"我擅长讲故事"，哪句是对的？', options: ['I am good at telling stories.', 'I good tell story.', 'I am good tell stories.', 'Me tell stories good.'], answer: 0, explain: 'be good at 后接动词 ing 形式：good at telling stories。tell a story 讲故事，复数是 stories。', tag: '句型运用' },
    { id: 'f2q10', type: 'choice', q: '同学跑步比赛得了第一名，你会说？', options: ['Proud of you!', 'Bad luck!', 'I am scared.', 'How do you feel?'], answer: 0, explain: '为别人高兴、送上称赞是好朋友的表现。Proud of you! 为你骄傲！', tag: '情景交际' },
  ],
  f3: [
    { id: 'f3q1', type: 'choice', q: '"garden" 是什么意思？', options: ['花园', '教室', '操场', '厨房'], answer: 0, explain: 'garden 花园。Our garden 我们的花园，学校里的 garden 也可以种菜种花。', tag: '单词理解' },
    { id: 'f3q2', type: 'choice', q: '"vegetable" 的意思是？', options: ['蔬菜', '水果', '花', '树'], answer: 0, explain: 'vegetable 蔬菜，tomato 西红柿、carrot 胡萝卜都是 vegetable。flower 是花，tree 是树。', tag: '单词理解' },
    { id: 'f3q3', type: 'choice', q: '指着远处的一棵树，应该问？', options: ['What is that?', 'What is this?', 'Who is that?', 'Where is it?'], answer: 0, explain: '近处用 this（这个），远处用 that（那个）。What is that? 那是什么？It is a tree. 那是一棵树。', tag: '句型运用' },
    { id: 'f3q4', type: 'choice', q: '"It is a tomato." 的意思是？', options: ['它是一个西红柿', '它是一根胡萝卜', '它是一棵橘子树', '它是一朵花'], answer: 0, explain: 'tomato 西红柿。orange tree 橘子树，carrot 胡萝卜，flower 花。看清单词再看句子。', tag: '句子理解' },
    { id: 'f3q5', type: 'judge', q: 'carrot（胡萝卜）长在泥土里，tomato（西红柿）长在藤上。', options: ['对', '错'], answer: 0, explain: '对。这是生活常识：胡萝卜是根，长在土里；西红柿是果实，长在藤上。观察植物很有趣！', tag: '科学常识' },
    { id: 'f3q6', type: 'choice', q: 'Welcome to our school garden! 的意思是？', options: ['欢迎来到我们的校园花园！', '再见，我们的花园！', '我们的花园很小。', '请打扫花园。'], answer: 0, explain: 'welcome to＋地点，表示"欢迎来到……"。带同学参观花园时就可以这样说。', tag: '句子理解' },
    { id: 'f3q7', type: 'choice', q: '公园里的花开得很好，你会说？', options: ['The flowers are beautiful!', 'The flowers are bad.', 'I am scared of flowers.', 'Close the flowers.'], answer: 0, explain: 'beautiful 美丽的。The flowers are beautiful! 这些花真美！学会用形容词表达感受。', tag: '情景交际' },
    { id: 'f3q8', type: 'choice', q: '课本 Sound 时间学字母 g（garden），g 的发音是？', options: ['/g/', '/dʒ/ 在这个单词里不读 /dʒ/', '/j/', '/k/'], answer: 0, explain: 'garden 里 g 读 /g/（给）。g 有时也读 /dʒ/（如 giraffe 长颈鹿），但 garden、go、good 中读 /g/。', tag: '语音' },
    { id: 'f3q9', type: 'choice', q: '要写"My school garden report"（花园观察报告），下面哪句适合写进去？', options: ['In our garden, there are flowers and carrots.', 'I like playing games.', 'My mother cooks well.', 'It is a book.'], answer: 0, explain: '报告要写观察到的内容：In our garden, there are flowers and carrots. 我们花园里有花和胡萝卜。', tag: '语篇理解' },
    { id: 'f3q10', type: 'choice', q: 'plant 一词在本单元既可作名词"植物"，也可以作动词，作动词的意思是？', options: ['种植', '浇水', '摘花', '挖土'], answer: 0, explain: 'plant 种植：We plant flowers in the garden. 我们在花园里种花。一词多义要结合句子判断。', tag: '单词运用' },
  ],
  f4: [
    { id: 'f4q1', type: 'choice', q: '"water" 是什么意思？', options: ['水', '风', '火', '土'], answer: 0, explain: 'water 水。本单元词表：water, river, lake, sea, water vapour, cloud, rain, snow, ice。', tag: '单词理解' },
    { id: 'f4q2', type: 'choice', q: '下面哪个词表示"河、江"？', options: ['river', 'lake', 'sea', 'rain'], answer: 0, explain: 'river 河（如 the Yangtze River 长江），lake 湖，sea 海。水在河里流，在海里汇合。', tag: '单词理解' },
    { id: 'f4q3', type: 'choice', q: '"Where does the rain come from?" 的意思是？', options: ['雨从哪里来？', '雨下得多大？', '你喜欢雨吗？', '雨停了吗？'], answer: 0, explain: 'come from 来自。Where does it come from? 它从哪里来？回答：It comes from the clouds. 它来自云。', tag: '句型理解' },
    { id: 'f4q4', type: 'choice', q: '水变成水蒸气升上天空，"水蒸气"用英语说是？', options: ['water vapour', 'snow', 'ice', 'cloud'], answer: 0, explain: 'water vapour 水蒸气（美式拼写为 vapor）。水受热变成水蒸气，升到天上变成云。', tag: '科学常识' },
    { id: 'f4q5', type: 'judge', q: '水在天冷时会结成冰，"冰"的英文是 ice。', options: ['对', '错'], answer: 0, explain: '对。ice 冰，snow 雪。水遇冷结冰，冰融化又变回水，水的形态会变化。', tag: '科学常识' },
    { id: 'f4q6', type: 'choice', q: '"I am water. I come from the sea." 中 come from 的用法正确吗？', options: ['正确，第三人称单数用 comes', '错误，应该说 am come', '错误，要用 coming', '错误，要用 go'], answer: 0, explain: '注意：主语是 I 时用 come from；主语是 he/she/it（第三人称单数）时要说 comes from。I am water 用 I 的时候 come 不加 s。', tag: '语法要点' },
    { id: 'f4q7', type: 'choice', q: '天上会下雨的"云"用英语说是？', options: ['cloud', 'river', 'vapour', 'lake'], answer: 0, explain: 'cloud 云。小水滴聚在一起变成 cloud，云越变越大，就下 rain（雨）了。', tag: '单词理解' },
    { id: 'f4q8', type: 'choice', q: '课本 Sound 时间学字母 s（sea），s 在 sea 里读什么？', options: ['/s/', '/z/', '/ʃ/', '/h/'], answer: 0, explain: 's 在 sea、snow、sun 中读 /s/（丝）。sea 大海，snow 雪，sun 太阳。', tag: '语音' },
    { id: 'f4q9', type: 'choice', q: '水的旅行小报告"My lab report"里，正确的顺序是？', options: ['海/湖水 → 水蒸气 → 云 → 雨 → 回到江河湖海', '云 → 雨 → 水蒸气 → 冰 → 云', '冰 → 云 → 雨 → 海 → 水蒸气（结束）', '雨 → 冰 → 云 → 水蒸气'], answer: 0, explain: '水循环：水受热变成水蒸气升空 → 变成云 → 变成雨雪落下来 → 流回江河湖海。循环往复，生生不息。', tag: '科学常识' },
    { id: 'f4q10', type: 'choice', q: '同学问你 "Where does it come from?" 指着河里的水，你可以回答？', options: ['It comes from the rain.', 'It is a book.', 'I am happy.', 'They are teachers.'], answer: 0, explain: '问哪里来，答 comes from。It comes from the rain. 河水来自雨水。it 对应 It comes。', tag: '情景交际' },
  ],
  f5: [
    { id: 'f5q1', type: 'choice', q: '"I can help." 的意思是？', options: ['我能帮忙', '我需要帮助', '我不能来', '我可以去吗'], answer: 0, explain: 'can 能、会，help 帮忙。I can help! 我能帮忙！主动帮忙是好孩子。', tag: '句子理解' },
    { id: 'f5q2', type: 'choice', q: '"do the dishes" 的意思是？', options: ['洗碗', '做饭', '遛狗', '擦桌子'], answer: 0, explain: 'dishes 盘碗。do the dishes 洗碗筷，clean the table 擦桌子，都是家务（chores）。', tag: '单词理解' },
    { id: 'f5q3', type: 'choice', q: '家里的小狗需要出去运动，你要"遛狗"，用英语说？', options: ['walk the dog', 'cook the dog', 'wash the dog only', 'feed the fish'], answer: 0, explain: 'walk 可以表示"牵着……散步"。walk the dog 遛狗，这是本单元的 Topic word。', tag: '单词运用' },
    { id: 'f5q4', type: 'judge', q: '"chore" 的意思是"家务活"。', options: ['对', '错'], answer: 0, explain: '对。chore 家务杂事，do chores 做家务。Help with family chores 帮忙做家务。', tag: '单词理解' },
    { id: 'f5q5', type: 'choice', q: '妈妈在做饭，你想帮忙摆桌子，可以说？', options: ['Let me clean the table.', 'Let me cook noodles.', 'Let me sleep.', 'Let me go out.'], answer: 0, explain: 'clean the table 擦桌子、摆桌。Let me... 让我来……，主动帮忙要用这个句型。', tag: '情景交际' },
    { id: 'f5q6', type: 'choice', q: '"Help with family chores" 的意思是？', options: ['帮忙做家务', '在家写作业', '和家人聊天', '去超市购物'], answer: 0, explain: 'help with＋事情，帮忙做……。family chores 家务。帮忙做家务的孩子人人爱！', tag: '句子理解' },
    { id: 'f5q7', type: 'choice', q: '在公交车上给老人让座，"give your seat" 的意思是？', options: ['让座', '要座位', '搬椅子', '坐着别动'], answer: 0, explain: 'give 给，seat 座位。give your seat (to someone) 把座位让给别人，是乐于助人的表现。', tag: '单词理解' },
    { id: 'f5q8', type: 'choice', q: '课本 Sound 时间学字母 i（dish），i 在 dish 里读什么音？', options: ['/ɪ/（短音衣）', '/aɪ/（爱）', '/iː/（长音衣）', '/e/'], answer: 0, explain: 'i 在 dish、big、fish 中读短音 /ɪ/；在 like、nice 中读字母音 /aɪ/。注意区分。', tag: '语音' },
    { id: 'f5q9', type: 'choice', q: '爸爸做了一顿饭，你想夸他，说？', options: ['You cook very well, Dad!', 'You wash the dog well!', 'You are a driver!', 'You are scared!'], answer: 0, explain: 'cook 做饭。You cook very well! 你做饭真好吃！夸人要夸到点子上。', tag: '情景交际' },
    { id: 'f5q10', type: 'choice', q: '"Being a good helper"（本单元 Big task）的意思是？', options: ['做一个好帮手', '找一个好朋友', '写一份好报告', '唱一首好歌'], answer: 0, explain: 'helper 帮手（help＋er）。Being a good helper 做个好帮手——本单元的任务就是在家里当好小帮手！', tag: '语篇理解' },
  ],
  f6: [
    { id: 'f6q1', type: 'choice', q: '"How do you feel?" 是在问什么？', options: ['你感觉怎么样？', '你在做什么？', '你几岁了？', '你喜欢什么颜色？'], answer: 0, explain: 'feel 感觉。How do you feel? 你感觉怎么样？回答：I am happy. I am tired. 等。', tag: '句型理解' },
    { id: 'f6q2', type: 'choice', q: '下面哪个词是"高兴的"？', options: ['happy', 'sad', 'tired', 'scared'], answer: 0, explain: 'happy 高兴，sad 伤心，tired 累，scared 害怕。本单元词表都是心情词。', tag: '单词理解' },
    { id: 'f6q3', type: 'choice', q: '"excited" 的意思是？', options: ['兴奋的、激动的', '累的', '饿的', '伤心的'], answer: 0, explain: 'excited 兴奋的。要去春游了，你会很 excited——又高兴又激动！', tag: '单词理解' },
    { id: 'f6q4', type: 'choice', q: '打了很久的球，你很累，可以说？', options: ['I am tired.', 'I am scared.', 'I am unhappy.', 'I am excited.'], answer: 0, explain: 'tired 累的。I am tired. 我累了。运动后要休息，多喝水。', tag: '情景交际' },
    { id: 'f6q5', type: 'judge', q: '"unhappy" 的意思是"不高兴、难过"，un- 表示"不"。', options: ['对', '错'], answer: 0, explain: '对。happy 加上 un- 变成 unhappy（不高兴）。像这样加 un- 的词还有 unlucky（不走运的）。', tag: '构词常识' },
    { id: 'f6q6', type: 'choice', q: '好朋友心情不好（sad），你会怎么做、怎么说？', options: ['安慰他：Do not be sad. I am here.', '笑话他', '不理他', '说 You are bad!'], answer: 0, explain: '关心朋友：Do not be sad. 别难过，我在呢。Minmin 的坏心情（bad feelings）也需要朋友的开导。', tag: '情景交际' },
    { id: 'f6q7', type: 'choice', q: '"Minmin is scared of the big dog." 的意思是？', options: ['闵敏怕那条大狗', '闵敏喜欢那条大狗', '闵敏是大狗', '大狗害怕闵敏'], answer: 0, explain: 'be scared of... 害怕……。scared 怕的。大狗很凶，害怕很正常，可以告诉大人。', tag: '句子理解' },
    { id: 'f6q8', type: 'choice', q: '课本 Sound 时间学字母 a（happy），a 在 happy 里读什么音？', options: ['/æ/（哎呀的"哎"）', '/eɪ/（诶）', '/ɑː/', '/ɪ/'], answer: 0, explain: 'a 在 happy、bad、sad、cat 中读 /æ/。而在 name、cake 中 a 读 /eɪ/。多读多比较。', tag: '语音' },
    { id: 'f6q9', type: 'choice', q: '"A letter to Mr Tree"（写给树先生的信）里，可以写什么内容？', options: ['写出自己的心情和感谢，如 I was scared, but now I am happy.', '只写天气', '写一堆不相干的单词', '抄别人的信'], answer: 0, explain: '本单元 Big task 是把心情写成信。写下自己的感受（feeling）和变化，就是一篇真诚的小信。', tag: '语篇理解' },
    { id: 'f6q10', type: 'judge', q: '心情没有好坏，但要说出来、多沟通，别憋在心里。', options: ['对', '错'], answer: 0, explain: '对。开心、难过、害怕都是正常的。学会说出自己的感受，也倾听别人，是心理健康的好习惯。', tag: '情感教育' },
  ],
  f7: [
    { id: 'f7q1', type: 'choice', q: '"What do you want to be?" 是在问什么？', options: ['你想成为什么（做什么工作）？', '你想吃什么？', '你是谁？', '你想要什么礼物？'], answer: 0, explain: 'want to be 想成为。问职业梦想：What do you want to be? 回答：I want to be a doctor. 我想当医生。', tag: '句型理解' },
    { id: 'f7q2', type: 'choice', q: '"doctor" 的意思是？', options: ['医生', '老师', '司机', '厨师'], answer: 0, explain: 'doctor 医生，chef 厨师，driver 司机，teacher 老师。看病要找 doctor。', tag: '单词理解' },
    { id: 'f7q3', type: 'choice', q: '在马路上指挥交通、保护大家安全的职业是？', options: ['police officer', 'writer', 'astronaut', 'engineer'], answer: 0, explain: 'police officer 警察。police officer 维持治安、指挥交通，遇到危险找警察。', tag: '单词理解' },
    { id: 'f7q4', type: 'choice', q: '"astronaut" 是什么职业？', options: ['宇航员', '作家', '工程师', '司机'], answer: 0, explain: 'astronaut 宇航员，能飞向太空！writer 作家，engineer 工程师，driver 司机。', tag: '单词理解' },
    { id: 'f7q5', type: 'judge', q: '"chef" 的意思是"厨师"，在餐厅里做美味的菜。', options: ['对', '错'], answer: 0, explain: '对。chef 厨师（也常说 cook 作名词）。做饭好吃的人可以成为 chef！', tag: '单词理解' },
    { id: 'f7q6', type: 'choice', q: '"engineer" 的意思是？', options: ['工程师', '宇航员', '医生', '警察'], answer: 0, explain: 'engineer 工程师，设计机器、修桥造路都靠他们。中国的航天工程师们很了不起！', tag: '单词理解' },
    { id: 'f7q7', type: 'choice', q: '本单元 Fun time 是"What do you want to be?"，正确的回答是？', options: ['I want to be a writer.', 'I am a book.', 'Yes, I do.', 'It is a car.'], answer: 0, explain: 'I want to be a/an＋职业。I want to be a writer. 我想成为一名作家。', tag: '句型运用' },
    { id: 'f7q8', type: 'choice', q: '课本 Sound 时间学字母 t（teacher），t 的发音是？', options: ['/t/', '/d/', '/s/', '/p/'], answer: 0, explain: 't 读 /t/（特），如 teacher、tomato、tiger。清辅音发音时声带不振动。', tag: '语音' },
    { id: 'f7q9', type: 'choice', q: '小组采访（group interview）同学的职业梦想，最好先说什么？', options: ['Hello! What do you want to be?', 'Goodbye!', 'I am scared.', 'Where is the library?'], answer: 0, explain: '采访先打招呼再提问：Hello! What do you want to be? 有礼貌的问题让大家愿意回答。', tag: '情景交际' },
    { id: 'f7q10', type: 'judge', q: '职业没有高低贵贱，每一种认真工作的职业都值得尊重。', options: ['对', '错'], answer: 0, explain: '对。司机、厨师、医生、宇航员……大家分工合作，社会才能运转。尊重每一种职业，也要为自己的梦想努力。', tag: '情感教育' },
  ],
  f8: [
    { id: 'f8q1', type: 'choice', q: '"library" 的意思是？', options: ['图书馆', '博物馆', '超市', '公园'], answer: 0, explain: 'library 图书馆，可以借书看书。museum 博物馆。本单元词表：library, road, museum 等。', tag: '单词理解' },
    { id: 'f8q2', type: 'choice', q: '"turn left" 的意思是？', options: ['向左转', '向右转', '直走', '掉头'], answer: 0, explain: 'left 左，right 右。turn left 左转，turn right 右转，go straight 直走。指路要用对方向！', tag: '单词理解' },
    { id: 'f8q3', type: 'choice', q: '"Walk along the road." 的意思是？', options: ['沿着这条路走', '穿过马路', '在路上跑', '把路扫干净'], answer: 0, explain: 'walk along 沿着……走。Walk along the road, and you can see the library. 沿着这条路走，你就能看到图书馆。', tag: '句子理解' },
    { id: 'f8q4', type: 'choice', q: '不知道去博物馆怎么走，最礼貌的问法是？', options: ['Excuse me, how can I get to the museum?', 'Museum! Go!', 'You, tell me!', 'Where am I? Now!'], answer: 0, explain: '问路先说 Excuse me（打扰一下），再问 How can I get to...? 我怎么才能到……？有礼貌才有人愿意帮你。', tag: '情景交际' },
    { id: 'f8q5', type: 'judge', q: '"find the way" 的意思是"找到路、认路"。', options: ['对', '错'], answer: 0, explain: '对。find 找到，way 路。find the way 认路、找到路。看地图、记标志物都能帮我们认路。', tag: '单词理解' },
    { id: 'f8q6', type: 'choice', q: '给别人指路去图书馆，图书馆在前面右边，可以说？', options: ['Go straight, then turn right. It is the library.', 'Turn left two times.', 'Go back home.', 'It is under the tree.'], answer: 0, explain: '先直走再右转：Go straight, then turn right. 指路要按顺序说清楚每一步。', tag: '情景交际' },
    { id: 'f8q7', type: 'choice', q: '"road" 的意思是？', options: ['马路、道路', '河流', '房子', '汽车'], answer: 0, explain: 'road 马路。过马路要走斑马线，先看 left 再看 right，安全第一。', tag: '单词理解' },
    { id: 'f8q8', type: 'choice', q: '课本 Sound 时间学字母 m（many），m 的发音是？', options: ['/m/', '/n/', '/l/', '/r/'], answer: 0, explain: 'm 读 /m/（摸），如 many、museum、mother。发音时嘴巴闭住，鼻子出气。', tag: '语音' },
    { id: 'f8q9', type: 'choice', q: 'Notice（布告）上写着 "Library: Open 9:00-16:00"。意思是？', options: ['图书馆 9 点到 16 点开放', '图书馆在 9 号房间', '图书馆有 16 本书', '图书馆 9 点关门'], answer: 0, explain: '本单元 Fun time 学会看 Notice。Open 9:00-16:00 表示开放时间是 9 点到 16 点，16 点后别白跑一趟哦。', tag: '语篇理解' },
    { id: 'f8q10', type: 'choice', q: '"Finding the places"（本单元 Big task）要做什么？', options: ['看地图找到并说出地点位置', '学做菜', '写一首诗', '数数字'], answer: 0, explain: 'Finding the places 找地点：用 left/right/along 说清路线，做一个认路小达人！', tag: '语篇理解' },
  ],
  f9: [
    { id: 'f9q1', type: 'choice', q: '"the Spring Festival" 是哪个节日？', options: ['春节', '中秋节', '端午节', '重阳节'], answer: 0, explain: 'the Spring Festival 春节，是中国最重要的传统节日，全家人团圆过年。', tag: '节日文化' },
    { id: 'f9q2', type: 'choice', q: '"the Lantern Festival" 是什么节？', options: ['元宵节（看花灯、吃汤圆）', '春节', '国庆节', '儿童节'], answer: 0, explain: 'lantern 灯笼。the Lantern Festival 元宵节，在正月十五，人们看花灯、猜灯谜、吃汤圆。', tag: '节日文化' },
    { id: 'f9q3', type: 'choice', q: '"the Double Ninth Festival" 是哪个节？', options: ['重阳节（敬老节）', '元宵节', '春节', '中秋节'], answer: 0, explain: 'the Double Ninth Festival 重阳节，在九月初九，人们登高、赏菊，还要尊敬关爱老人。', tag: '节日文化' },
    { id: 'f9q4', type: 'choice', q: '"celebrate" 的意思是？', options: ['庆祝', '睡觉', '购物', '学习'], answer: 0, explain: 'celebrate 庆祝。We celebrate the Spring Festival with our family. 我们和家人一起庆祝春节。', tag: '单词理解' },
    { id: 'f9q5', type: 'judge', q: '"holiday" 的意思是"假期、节日"。', options: ['对', '错'], answer: 0, explain: '对。holiday 假期。The Spring Festival is a happy holiday. 春节是快乐的假期。', tag: '单词理解' },
    { id: 'f9q6', type: 'choice', q: '春节时，人们常常做什么？', options: ['吃年夜饭、拜年、拿压岁钱', '只写作业', '一个人待着', '去上学'], answer: 0, explain: '春节习俗：全家吃年夜饭、贴春联、拜年、长辈给压岁钱。用英语可以说：We have a big dinner together.', tag: '节日文化' },
    { id: 'f9q7', type: 'choice', q: '"special" 的意思是？', options: ['特别的', '普通的', '便宜的', '危险的'], answer: 0, explain: 'special 特别的。Special days in China 中国的特别日子，就是那些重要的传统节日。', tag: '单词理解' },
    { id: 'f9q8', type: 'choice', q: '向外国朋友介绍重阳节，最合适的一句是？', options: ['We visit grandparents on the Double Ninth Festival.', 'We eat pizza on the Double Ninth Festival.', 'We go to school on that day.', 'It is a Western festival.'], answer: 0, explain: '重阳节是敬老节：We visit (and help) our grandparents. 我们看望爷爷奶奶，陪他们过节。', tag: '情景交际' },
    { id: 'f9q9', type: 'choice', q: '课本 Sound 时间学字母 e（festival），e 在 festival 里读什么音？', options: ['/e/（哎）', '/iː/（衣）', '/aɪ/', '/əʊ/'], answer: 0, explain: 'e 在 festival、help、bed 中读短音 /e/。而 he、we 中 e 读 /iː/。注意比较。', tag: '语音' },
    { id: 'f9q10', type: 'choice', q: '本单元 Big task 是 "Planning New Year activities"，意思是？', options: ['计划新年活动', '写新年贺卡', '买新年礼物', '唱新年歌曲'], answer: 0, explain: 'plan 计划。Planning New Year activities 计划新年活动：写一写、说一说你们家过年要做的有趣的事吧！', tag: '语篇理解' },
  ],
  f10: [
    { id: 'f10q1', type: 'choice', q: '"food" 的意思是？', options: ['食物', '饮料', '水果', '玩具'], answer: 0, explain: 'food 食物。本单元词表：food, noodles, pizza, sandwich, hot dog, fish and chips, beef, bread, cake。', tag: '单词理解' },
    { id: 'f10q2', type: 'choice', q: '"noodles" 是什么食物？', options: ['面条', '披萨', '汉堡', '蛋糕'], answer: 0, explain: 'noodles 面条（常用复数，因为一根根面条）。Chinese noodles 中国面条很好吃！', tag: '单词理解' },
    { id: 'f10q3', type: 'choice', q: '"pizza" 和 "sandwich" 分别来自哪里？', options: ['pizza 来自意大利，sandwich 是西方常见食物', '都是中国食物', 'pizza 来自中国', 'sandwich 来自日本'], answer: 0, explain: 'pizza 披萨源自意大利；sandwich 三明治是西方常见食物。Foods around the world 世界各地的美食。', tag: '文化常识' },
    { id: 'f10q4', type: 'choice', q: '"fish and chips" 是哪个国家有名的食物？', options: ['英国', '中国', '埃及', '巴西'], answer: 0, explain: 'fish and chips 炸鱼薯条，是英国的经典食物。各国都有自己的代表美食。', tag: '文化常识' },
    { id: 'f10q5', type: 'judge', q: '"beef" 的意思是"牛肉"。', options: ['对', '错'], answer: 0, explain: '对。beef 牛肉。常见的肉类：beef 牛肉、pork 猪肉、chicken 鸡肉、fish 鱼肉。', tag: '单词理解' },
    { id: 'f10q6', type: 'choice', q: '"bread" 和 "cake" 的区别是？', options: ['bread 是主食面包，cake 是生日等吃的甜蛋糕', '一样的东西', 'bread 是甜的蛋糕', 'cake 是咸的主食'], answer: 0, explain: 'bread 面包（日常主食），cake 蛋糕（生日、庆祝时吃）。过生日吃 birthday cake！', tag: '单词理解' },
    { id: 'f10q7', type: 'choice', q: '同学问你最喜欢什么食物，正确回答是？', options: ['My favourite food is noodles.', 'My favourite food is running.', 'I like blue.', 'I am a student.'], answer: 0, explain: 'favourite 最喜欢的。My favourite food is... 我最喜欢的食物是……，food 要用食物作答。', tag: '句型运用' },
    { id: 'f10q8', type: 'choice', q: '课本 Sound 时间学字母 n（noodles），n 的发音是？', options: ['/n/', '/m/', '/l/', '/ŋ/（总是）'], answer: 0, explain: 'n 在词首读 /n/（呢），如 noodles、new、nice。发音时舌尖抵上齿龈，鼻子出气。', tag: '语音' },
    { id: 'f10q9', type: 'choice', q: '做一张美食卡（food card），下面哪句最适合写上去？', options: ['I like beef noodles. They are yummy!', 'I like running fast.', 'It is a blue car.', 'Good night!'], answer: 0, explain: '美食卡要写食物和感受：I like beef noodles. They are yummy! 我喜欢牛肉面，太好吃了！', tag: '语篇理解' },
    { id: 'f10q10', type: 'judge', q: '甜食好吃，但要适量；多吃蔬菜水果，饮食才健康。', options: ['对', '错'], answer: 0, explain: '对。cake、hot dog 等要适量吃，多吃蔬菜水果、不挑食，身体才能棒棒的！', tag: '健康教育' },
  ],
}