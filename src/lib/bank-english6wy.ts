// 外研版新标准英语（一年级起点）六年级上册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）六年级上册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq6s 核对；源页 M6 U2 / M9 U1 有 OCR 脱字，实为 I haven't got a book about the US. 与 Do you want to visit the UN building?）：
//   M1 How long is the Great Wall?/It's more than four hundred metres high. · M2 I went to Chinatown in New York yesterday./I went to a library yesterday.
//   M3 Have you got any stamps from China?/Collecting stamps is my hobby. · M4 Thanksgiving is very important in the US./Can you tell me about Christmas?
//   M5 Can I write to her?/I want a Chinese pen friend. · M6 I've got some Chinese chopsticks./I haven't got a book about the US.
//   M7 Pandas love bamboo./A child sleeps for ten hours a night. · M8 Do you often tidy your bed?/I often read English books.
//   M9 Do you want to visit the UN building?/I want to go to Shanghai. · M10 Only drink clean water!/Go straight on.
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wf

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
    id: 'wf1',
    name: 'Module 1',
    title: 'How long is the Great Wall?',
    emoji: '🏞️',
    color: 'amber',
    lessons: ['How long is it?', "It's more than 400 metres high.", '量度表达'],
    intro: '多长多高多远，问一问长城和名山！',
  },
  {
    id: 'wf2',
    name: 'Module 2',
    title: 'I went to Chinatown in New York yesterday.',
    emoji: '🗽',
    color: 'orange',
    lessons: ['I went to Chinatown.', 'I went to a library.', '旅行见闻'],
    intro: '纽约唐人街、图书馆，过去式记见闻！',
  },
  {
    id: 'wf3',
    name: 'Module 3',
    title: 'Have you got any stamps from China?',
    emoji: '📮',
    color: 'rose',
    lessons: ['Have you got stamps?', 'Collecting stamps is my hobby.', '爱好'],
    intro: '集邮是我的爱好，have got 问收藏！',
  },
  {
    id: 'wf4',
    name: 'Module 4',
    title: 'Thanksgiving is very important in the US.',
    emoji: '🦃',
    color: 'lime',
    lessons: ['Thanksgiving is important.', 'Tell me about Christmas.', '节日文化'],
    intro: '感恩节、圣诞节，节日文化知多少！',
  },
  {
    id: 'wf5',
    name: 'Module 5',
    title: 'Can I write to her?',
    emoji: '✉️',
    color: 'teal',
    lessons: ['Can I write to her?', 'I want a Chinese pen friend.', '笔友'],
    intro: '写一封交友信，五湖四海成笔友！',
  },
  {
    id: 'wf6',
    name: 'Module 6',
    title: "I've got some Chinese chopsticks.",
    emoji: '🥢',
    color: 'sky',
    lessons: ["I've got some chopsticks.", "I haven't got a book.", 'some / any'],
    intro: 'some 用肯定 any 疑否，have got 说收藏！',
  },
  {
    id: 'wf7',
    name: 'Module 7',
    title: 'Pandas love bamboo.',
    emoji: '🐼',
    color: 'violet',
    lessons: ['Pandas love bamboo.', 'A child sleeps ten hours.', '动物习性'],
    intro: '熊猫爱竹子，一般现在时讲习性！',
  },
  {
    id: 'wf8',
    name: 'Module 8',
    title: 'Do you often tidy your bed?',
    emoji: '🛏️',
    color: 'pink',
    lessons: ['Do you often tidy your bed?', 'I often read English books.', '生活习惯'],
    intro: '整理床铺读英语，often 问出好习惯！',
  },
  {
    id: 'wf9',
    name: 'Module 9',
    title: 'Do you want to visit the UN building?',
    emoji: '🌍',
    color: 'indigo',
    lessons: ['Do you want to visit the UN?', 'I want to go to Shanghai.', 'want to'],
    intro: '想去联合国大厦看看吗？want to 说愿望！',
  },
  {
    id: 'wf10',
    name: 'Module 10',
    title: 'Only drink clean water!',
    emoji: '🚰',
    color: 'emerald',
    lessons: ['Only drink clean water!', 'Go straight on.', '规则与指路'],
    intro: '喝干净水、直行别转弯，祈使句护平安！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wf1: [
    { id: 'wf1-1', type: 'choice', q: '"How long is the Great Wall?" 的意思是：', options: ['长城有多长？', '长城有多高？', '长城在哪？', '长城美吗？'], answer: 0, explain: 'How long 问长度：多长？How tall 问高度：多高？', tag: '疑问词' },
    { id: 'wf1-2', type: 'choice', q: '"It\'s more than four hundred metres high." 的意思是：', options: ['它有四百多米高。', '它有四百米长。', '它只有四百米。', '它不到四百米。'], answer: 0, explain: 'more than 超过：more than 400 metres high 四百多米高。', tag: '数量' },
    { id: 'wf1-3', type: 'choice', q: '问"多长"用 How long，问"多远"用：', options: ['How far', 'How tall', 'How many', 'How much'], answer: 0, explain: 'How far 多远（距离），How long 多长（长度/时长）。', tag: '疑问词' },
    { id: 'wf1-4', type: 'choice', q: '"metre" 的意思是：', options: ['米', '千米', '厘米', '英尺'], answer: 0, explain: 'metre 米，kilometre 千米，centimetre 厘米。', tag: '单位' },
    { id: 'wf1-5', type: 'judge', q: '"How tall are you?" 是在问"你有多高？"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'How tall 问身高：I\'m 1.5 metres tall. 我一米五。', tag: '疑问词' },
    { id: 'wf1-6', type: 'choice', q: '"thousand" 是数字：', options: ['千', '百', '万', '十'], answer: 0, explain: 'hundred 百，thousand 千，ten thousand 一万。', tag: '数字' },
    { id: 'wf1-7', type: 'choice', q: '"这座山有 2000 多米高"应该说：', options: ["It's more than two thousand metres high.", "It's two thousand metres long.", "It's less than two thousand metres.", "It's two thousand metres old."], answer: 0, explain: 'more than + 数字 + metres high：超过两千米高。', tag: '数量' },
    { id: 'wf1-8', type: 'choice', q: '长城是中国古代用来：', options: ['抵御外敌的军事工程', '运水的运河', '皇帝的花园', '贮存粮食的仓库'], answer: 0, explain: '长城是古代军事防御工程，全长两万多千米（含关隘），是中华民族的象征！', tag: '文化' },
    { id: 'wf1-9', type: 'judge', q: '"How long is the river?" 可以回答 "It\'s about 5,000 kilometres long."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '问长度答长度：It\'s + 数字 + long.。', tag: '句型' },
    { id: 'wf1-10', type: 'choice', q: '"kilometre" 的意思是：', options: ['千米', '米', '英里', '光年'], answer: 0, explain: 'kilometre 千米/公里，1 kilometre = 1000 metres。', tag: '单位' },
  ],
  wf2: [
    { id: 'wf2-1', type: 'choice', q: '"I went to Chinatown in New York yesterday." 的意思是：', options: ['我昨天去了纽约的唐人街。', '我明天去唐人街。', '我住在唐人街。', '我来自唐人街。'], answer: 0, explain: 'went 过去式 + yesterday 昨天：昨天去了。', tag: '一般过去' },
    { id: 'wf2-2', type: 'choice', q: '"Chinatown" 的意思是：', options: ['唐人街/中国城', '中国小镇', '中国的城镇', '华人学校'], answer: 0, explain: 'Chinatown 唐人街，海外华人聚居的地方，纽约、伦敦都有。', tag: '文化' },
    { id: 'wf2-3', type: 'choice', q: '"library" 指的是：', options: ['图书馆', '书店', '教室', '博物馆'], answer: 0, explain: 'library 图书馆，borrow books 借书，保持安静。', tag: '场所' },
    { id: 'wf2-4', type: 'choice', q: '"I went to a library yesterday." 中 went 是：', options: ['go 的过去式', 'go 的原形', 'go 的 ing 形式', 'go 的三单'], answer: 0, explain: 'go→went：昨天去的，用过去式。', tag: '不规则过去式' },
    { id: 'wf2-5', type: 'judge', q: '"纽约"的英文是 New York。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'New York 纽约，美国大城市，有自由女神像。', tag: '文化' },
    { id: 'wf2-6', type: 'choice', q: '在图书馆里应该：', options: ['保持安静，爱护图书', '大声打电话', '在书上乱画', '吃零食'], answer: 0, explain: '图书馆礼仪：轻声细语、爱护书籍、按时归还。', tag: '习惯养成' },
    { id: 'wf2-7', type: 'choice', q: '"那里有很多中国餐馆"用过去式说：', options: ['There were many Chinese restaurants.', 'There are many Chinese restaurants.', 'There was many Chinese restaurants.', 'There is many Chinese restaurants.'], answer: 0, explain: 'restaurants 复数 + 过去 were：There were...。', tag: 'there be' },
    { id: 'wf2-8', type: 'choice', q: '"museum" 指的是：', options: ['博物馆', '电影院', '动物园', '公园'], answer: 0, explain: 'museum 博物馆，the British Museum 大英博物馆。', tag: '场所' },
    { id: 'wf2-9', type: 'judge', q: '唐人街能买到中国商品、吃到中餐，还能看到舞龙表演。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Chinatown 保留了许多中华文化：中餐、春联、舞龙舞狮！', tag: '文化' },
    { id: 'wf2-10', type: 'choice', q: '"我上周去了博物馆"应该说：', options: ['I went to a museum last week.', 'I go to a museum last week.', 'I was go to a museum last week.', 'I goes to a museum last week.'], answer: 0, explain: 'last week 上周（过去）：went 过去式。', tag: '一般过去' },
  ],
  wf3: [
    { id: 'wf3-1', type: 'choice', q: '"Have you got any stamps from China?" 的意思是：', options: ['你有来自中国的邮票吗？', '你在收集邮票吗？', '邮票在哪里？', '邮票多少钱？'], answer: 0, explain: 'Have you got any...? 你有……吗？any 用于疑问句。', tag: 'have got' },
    { id: 'wf3-2', type: 'choice', q: '"Collecting stamps is my hobby." 的意思是：', options: ['集邮是我的爱好。', '我想买邮票。', '邮票很有趣。', '我在寄信。'], answer: 0, explain: 'Collecting stamps 动名词作主语（集邮这件事），hobby 爱好。', tag: '语法' },
    { id: 'wf3-3', type: 'choice', q: '"stamps" 指的是：', options: ['邮票', '信封', '明信片', '贴纸'], answer: 0, explain: 'stamp 邮票，collect stamps 集邮。', tag: '单词' },
    { id: 'wf3-4', type: 'choice', q: '"Have you got any stamps...?" 的肯定回答：', options: ['Yes, I have.', 'Yes, I do.', 'Yes, I am.', 'Yes, I got.'], answer: 0, explain: 'Have you got...? 回答 Yes, I have. / No, I haven\'t.。', tag: '语法' },
    { id: 'wf3-5', type: 'judge', q: 'some 一般用于肯定句，any 一般用于疑问句和否定句。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I have some stamps. / Do you have any stamps? / I don\'t have any.。', tag: '语法' },
    { id: 'wf3-6', type: 'choice', q: '"hobby" 的复数是：', options: ['hobbies', 'hobbys', 'hobbyes', 'hobby'], answer: 0, explain: '辅音字母 + y 结尾，变 y 为 i 加 es：hobby→hobbies。', tag: '语法' },
    { id: 'wf3-7', type: 'choice', q: '"dancing" 作为爱好，"喜欢跳舞"应该说：', options: ['My hobby is dancing.', 'My hobby dance.', 'I hobby dancing.', 'My hobby is dance.'], answer: 0, explain: 'My hobby is + 动名词：My hobby is dancing.。', tag: '句型' },
    { id: 'wf3-8', type: 'choice', q: '集邮能带给我们：', options: ['知识和友谊', '很多钱', '无穷的零食', '讨厌的作业'], answer: 0, explain: '集邮长知识、交朋友，是有益身心的爱好！', tag: '爱好' },
    { id: 'wf3-9', type: 'judge', q: '"collect" 的意思是"收集"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'collect 收集：collect stamps/coins/leaves。', tag: '单词' },
    { id: 'wf3-10', type: 'choice', q: '"I haven\'t got any stamps." 的意思是：', options: ['我没有邮票。', '我有一些邮票。', '我想要邮票。', '我丢过邮票。'], answer: 0, explain: "haven't got any 没有：否定句用 any。", tag: 'have got' },
  ],
  wf4: [
    { id: 'wf4-1', type: 'choice', q: '"Thanksgiving is very important in the US." 的意思是：', options: ['感恩节在美国很重要。', '美国很重要。', '感恩节在春天。', '美国没有节日。'], answer: 0, explain: 'important 重要的：感恩节是美国的传统大节。', tag: '节日' },
    { id: 'wf4-2', type: 'choice', q: '"Can you tell me about Christmas?" 的意思是：', options: ['你能给我讲讲圣诞节吗？', '你能教我圣诞歌吗？', '圣诞节到了吗？', '你喜欢圣诞节吗？'], answer: 0, explain: 'tell sb about sth 给某人讲关于……的事。', tag: '句型' },
    { id: 'wf4-3', type: 'choice', q: '感恩节美国人常吃：', options: ['火鸡', '饺子', '寿司', '披萨'], answer: 0, explain: 'turkey 火鸡是感恩节大餐主角，还有南瓜派。', tag: '文化' },
    { id: 'wf4-4', type: 'choice', q: '"important" 的意思是：', options: ['重要的', '有趣的', '困难的', '古老的'], answer: 0, explain: 'important 重要的：English is important. 英语很重要。', tag: '单词' },
    { id: 'wf4-5', type: 'judge', q: '感恩节的意义是感恩收获、感谢家人朋友。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Thanksgiving 感恩节：心怀感恩，说声 thank you！', tag: '文化' },
    { id: 'wf4-6', type: 'choice', q: '圣诞节孩子们期待：', options: ['圣诞老人送礼物', '放风筝', '吃月饼', '赛龙舟'], answer: 0, explain: 'Santa Claus 圣诞老人，圣诞夜送礼物进袜子（传说）。', tag: '文化' },
    { id: 'wf4-7', type: 'choice', q: '"给家人讲讲学校的事"用英语说：', options: ['tell my family about school', 'say my family school', 'tell to my family school', 'speak my family about school'], answer: 0, explain: 'tell sb about sth：tell my family about school.。', tag: '句型' },
    { id: 'wf4-8', type: 'choice', q: '"美国的"用英语说：', options: ['American / of the US', 'England', 'Chinese', 'French'], answer: 0, explain: 'American 美国的，the US / the USA 美国。', tag: '单词' },
    { id: 'wf4-9', type: 'judge', q: '春节我们贴春联、吃团圆饭、给长辈拜年。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Spring Festival 春节：这些习俗向外国朋友介绍吧！', tag: '文化' },
    { id: 'wf4-10', type: 'choice', q: '向外国朋友介绍中国传统节日，应该说：', options: ['Let me tell you about the Spring Festival.', 'You must like dumplings!', 'My festival is good.', 'No festival for you.'], answer: 0, explain: 'Let me tell you about... 让我给你讲讲……，友好介绍文化。', tag: '句型' },
  ],
  wf5: [
    { id: 'wf5-1', type: 'choice', q: '"Can I write to her?" 的意思是：', options: ['我可以给她写信吗？', '我能读给她听吗？', '我能替她写吗？', '我该写信吗？'], answer: 0, explain: 'write to sb 给某人写信：Can I write to her?。', tag: '句型' },
    { id: 'wf5-2', type: 'choice', q: '"I want a Chinese pen friend." 的意思是：', options: ['我想要一位中国笔友。', '我是中国笔友。', '我在教笔友中文。', '我想去中国。'], answer: 0, explain: 'pen friend / pen pal 笔友，want 想要。', tag: '单词' },
    { id: 'wf5-3', type: 'choice', q: '"write" 的过去式是：', options: ['wrote', 'writed', 'writing', 'writes'], answer: 0, explain: 'write→wrote→written：昨天我写信说 I wrote a letter.。', tag: '不规则过去式' },
    { id: 'wf5-4', type: 'choice', q: '"她"作宾语（写给她）用：', options: ['her', 'she', 'hers', 'herself'], answer: 0, explain: '动词/介词后用宾格：write to her，to 是介词。', tag: '代词' },
    { id: 'wf5-5', type: 'judge', q: '"Can I write to him?" 中 him 是 he 的宾格。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'he 主格，him 宾格：write to him 写给他。', tag: '代词' },
    { id: 'wf5-6', type: 'choice', q: '给笔友的第一封信可以介绍：', options: ['自己的爱好和家庭', '银行密码', '别人隐私', '虚假信息'], answer: 0, explain: '交友信介绍真实又安全的自己：爱好、学校、家庭趣事。', tag: '安全教育' },
    { id: 'wf5-7', type: 'choice', q: '"letter" 指的是：', options: ['信件', '字母表', '课本', '报纸'], answer: 0, explain: 'letter 信件（也可指字母）：write a letter 写信。', tag: '单词' },
    { id: 'wf5-8', type: 'choice', q: '"他想成为我的笔友"应该说：', options: ['He wants to be my pen friend.', 'He want to be my pen friend.', 'He is want be my pen friend.', 'He wanting be my pen friend.'], answer: 0, explain: 'want to be 想成为：he 三单 wants。', tag: '语法' },
    { id: 'wf5-9', type: 'judge', q: '和网络笔友交流时不透露家庭住址、电话等隐私信息。', options: ['√ 对', '✗ 错'], answer: 0, explain: '网络安全第一：隐私信息不给陌生人！', tag: '安全教育' },
    { id: 'wf5-10', type: 'choice', q: '"Please write back soon." 的意思是：', options: ['请尽快回信。', '请写信给我。', '请快点来。', '请读这本书。'], answer: 0, explain: 'write back 回信，soon 尽快：信件结尾常用语。', tag: '句型' },
  ],
  wf6: [
    { id: 'wf6-1', type: 'choice', q: '"I\'ve got some Chinese chopsticks." 的意思是：', options: ['我有一些中国筷子。', '我想要中国筷子。', '我买过筷子。', '我不用筷子。'], answer: 0, explain: "I've got = I have got 有：some 用于肯定句。", tag: 'have got' },
    { id: 'wf6-2', type: 'choice', q: '"I haven\'t got a book about the US." 的意思是：', options: ['我没有关于美国的书。', '我有一本美国书。', '我想买美国书。', '美国书很好。'], answer: 0, explain: "haven't got 没有：about the US 关于美国的。", tag: 'have got' },
    { id: 'wf6-3', type: 'choice', q: '"Have you got any tea?" 中用 any 是因为：', options: ['疑问句用 any', '肯定句用 any', 'tea 是复数', '习惯用法'], answer: 0, explain: 'any 用于疑问句和否定句，some 用于肯定句。', tag: '语法' },
    { id: 'wf6-4', type: 'choice', q: '肯定句"有一些果汁"应该说：', options: ["I've got some juice.", "I've got any juice.", "I haven't got some juice.", "I got many juice."], answer: 0, explain: '肯定句用 some：I\'ve got some juice.。', tag: '语法' },
    { id: 'wf6-5', type: 'judge', q: '"chopsticks" 常用复数形式，因为筷子是两根。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'chopsticks 筷子，成对出现所以用复数。', tag: '语法' },
    { id: 'wf6-6', type: 'choice', q: '"about" 在 "a book about the US" 中的意思是：', options: ['关于', '大约', '周围', '在上方'], answer: 0, explain: 'about 关于：a book about animals 一本关于动物的书。', tag: '介词' },
    { id: 'wf6-7', type: 'choice', q: '"她没有兄弟"应该说：', options: ["She hasn't got any brothers.", "She haven't got any brothers.", "She hasn't got some brothers.", "She doesn't got brothers."], answer: 0, explain: 'she 三单用 hasn\'t got，否定句用 any。', tag: '语法' },
    { id: 'wf6-8', type: 'choice', q: '"Do you want to visit the UN building?" 的意思是：', options: ['你想参观联合国大楼吗？', '你在联合国工作吗？', '联合国在哪里？', '联合国很大吗？'], answer: 0, explain: 'want to do 想做：visit the UN building 参观联合国大楼。', tag: '句型' },
    { id: 'wf6-9', type: 'judge', q: '"the UN" 指联合国，全称 United Nations。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'UN = United Nations 联合国，总部在纽约。', tag: '文化' },
    { id: 'wf6-10', type: 'choice', q: '"我想去上海"应该说：', options: ['I want to go to Shanghai.', 'I want go to Shanghai.', 'I wanting to go Shanghai.', 'I want to going Shanghai.'], answer: 0, explain: 'want to + 动词原形：I want to go...。', tag: '语法' },
  ],
  wf7: [
    { id: 'wf7-1', type: 'choice', q: '"Pandas love bamboo." 的意思是：', options: ['熊猫爱吃竹子。', '熊猫在吃竹子。', '熊猫想吃竹子。', '熊猫种竹子。'], answer: 0, explain: '一般现在时表示习性：熊猫（向来）爱吃竹子。', tag: '一般现在' },
    { id: 'wf7-2', type: 'choice', q: '"A child sleeps for ten hours a night." 的意思是：', options: ['儿童每晚要睡十个小时。', '儿童白天睡十小时。', '十个孩子睡着了。', '孩子十点睡觉。'], answer: 0, explain: '一般现在时讲常识：a night 每晚，for ten hours 十个小时。', tag: '一般现在' },
    { id: 'wf7-3', type: 'choice', q: '描述动物习性用：', options: ['一般现在时', '现在进行时', '一般过去时', '将来时'], answer: 0, explain: '习性是长期规律，用一般现在时：Fish live in water.。', tag: '语法' },
    { id: 'wf7-4', type: 'choice', q: '"bamboo" 指的是：', options: ['竹子', '树叶', '青草', '花朵'], answer: 0, explain: 'bamboo 竹子，熊猫的主食。', tag: '单词' },
    { id: 'wf7-5', type: 'judge', q: '"Snakes love the sun." 意思是"蛇喜欢阳光"。', options: ['√ 对', '✗ 错'], answer: 0, explain: '蛇是冷血动物，常晒太阳取暖：love 表示习性。', tag: '动物' },
    { id: 'wf7-6', type: 'choice', q: '"hour" 的发音特点是：', options: ['h 不发音，读作 /ˈaʊə/', '读作 /haʊə/', '和 our 完全不同音', '重音在 h 上'], answer: 0, explain: 'hour 小时，h 不发音，与 our 同音，an hour 一小时。', tag: '语音' },
    { id: 'wf7-7', type: 'choice', q: '"它每天睡 12 个小时"（动物）应该说：', options: ['It sleeps for twelve hours a day.', 'It sleep twelve hours a day.', 'It is sleeping twelve hours.', 'It slept twelve hours a day.'], answer: 0, explain: '习性用一般现在时：sleeps 三单。', tag: '一般现在' },
    { id: 'wf7-8', type: 'choice', q: '小学生每天应睡：', options: ['10 小时左右', '5 小时', '15 小时', '随缘'], answer: 0, explain: '小学生每天 10 小时左右睡眠，才能长得高、学得好！', tag: '健康习惯' },
    { id: 'wf7-9', type: 'judge', q: '熊猫是中国国宝，主要生活在四川的竹林里。', options: ['√ 对', '✗ 错'], answer: 0, explain: '大熊猫故乡在中国四川，爱吃竹子，憨态可掬！', tag: '文化' },
    { id: 'wf7-10', type: 'choice', q: '"Panda" 复数是：', options: ['pandas', 'pandaes', 'pandass', 'panda'], answer: 0, explain: '规则复数直接加 s：pandas。', tag: '语法' },
  ],
  wf8: [
    { id: 'wf8-1', type: 'choice', q: '"Do you often tidy your bed?" 的意思是：', options: ['你经常整理床铺吗？', '你在床上吗？', '你买床了吗？', '你想睡觉吗？'], answer: 0, explain: 'tidy your bed 整理床铺，often 经常。', tag: '频率副词' },
    { id: 'wf8-2', type: 'choice', q: '"I often read English books." 的意思是：', options: ['我经常读英语书。', '我正在读英语书。', '我读过英语书。', '我想读英语书。'], answer: 0, explain: 'often 经常 + 一般现在时：描述习惯。', tag: '频率副词' },
    { id: 'wf8-3', type: 'choice', q: '"Do you often...?" 的肯定回答：', options: ['Yes, I do.', 'Yes, I often do.', 'Yes, I am.', 'Yes, I can.'], answer: 0, explain: 'Do 开头的一般疑问句：Yes, I do.。', tag: '语法' },
    { id: 'wf8-4', type: 'choice', q: '频率副词在句中的位置通常：', options: ['主语后、实义动词前', '句首', '句末', '动词后加 ed'], answer: 0, explain: 'I often read. / She always helps.：主语后动词前。', tag: '频率副词' },
    { id: 'wf8-5', type: 'judge', q: '"I always tidy my desk." 意思是"我总是整理书桌"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'always 总是：天天整理书桌，好习惯！', tag: '频率副词' },
    { id: 'wf8-6', type: 'choice', q: '"sometimes" 的意思是：', options: ['有时', '总是', '从不', '经常'], answer: 0, explain: 'sometimes 有时：Sometimes I walk to school.。', tag: '频率副词' },
    { id: 'wf8-7', type: 'choice', q: '好的生活习惯是：', options: ['每天整理床铺和书包', '从不收拾房间', '睡前玩手机', '天天赖床'], answer: 0, explain: '自己的事情自己做：整理床铺、收拾书包，条理清晰！', tag: '习惯养成' },
    { id: 'wf8-8', type: 'choice', q: '"她从不迟到"应该说：', options: ['She is never late.', 'She never is late.', 'She is late never.', 'She never late.'], answer: 0, explain: 'never 放在 be 动词后：She is never late.。', tag: '频率副词' },
    { id: 'wf8-9', type: 'judge', q: '频率副词：always > usually > often > sometimes > never。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'always 总是、usually 通常、often 经常、sometimes 有时、never 从不。', tag: '频率副词' },
    { id: 'wf8-10', type: 'choice', q: '"你周末经常做什么？"用英语问：', options: ['What do you often do at the weekend?', 'What are you doing at the weekend?', 'What did you do at the weekend?', 'What you often do at weekend?'], answer: 0, explain: 'What do you often do...? 问经常性的活动。', tag: '句型' },
  ],
  wf9: [
    { id: 'wf9-1', type: 'choice', q: '"Do you want to visit the UN building?" 的意思是：', options: ['你想参观联合国大楼吗？', '你去过联合国吗？', '联合国大吗？', '你在联合国吗？'], answer: 0, explain: 'Do you want to do...? 你想做……吗？', tag: '句型' },
    { id: 'wf9-2', type: 'choice', q: '"visit" 的意思是：', options: ['参观；拜访', '居住', '看见', '购买'], answer: 0, explain: 'visit 参观（地方）、拜访（人）：visit Beijing 参观北京。', tag: '单词' },
    { id: 'wf9-3', type: 'choice', q: '"Do you want to...?" 的肯定回答：', options: ['Yes, I do.', 'Yes, I want.', 'Yes, I am.', 'Yes, I can.'], answer: 0, explain: 'Do 开头问句用 do 回答：Yes, I do.。', tag: '语法' },
    { id: 'wf9-4', type: 'choice', q: '"我想去看看大熊猫"应该说：', options: ['I want to see the pandas.', 'I want see the pandas.', 'I wanting see pandas.', 'I see the pandas want.'], answer: 0, explain: 'want to + 原形：I want to see...。', tag: '语法' },
    { id: 'wf9-5', type: 'judge', q: '"want" 后面接动词要用 to + 原形。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'want to do sth：想做什么就 want to + 原形。', tag: '语法' },
    { id: 'wf9-6', type: 'choice', q: '"building" 指的是：', options: ['建筑物', '建造', '建筑工人', '房间'], answer: 0, explain: 'building 建筑物，build 建造（动词），builder 建筑工人。', tag: '单词' },
    { id: 'wf9-7', type: 'choice', q: '联合国大楼前飘扬的是：', options: ['各会员国国旗', '只有美国国旗', '没有旗帜', '彩色气球'], answer: 0, explain: '联合国总部前飘着 190 多个会员国的国旗，象征团结。', tag: '文化' },
    { id: 'wf9-8', type: 'choice', q: '"他想去北京"应该说：', options: ['He wants to go to Beijing.', 'He want to go Beijing.', 'He wants go to Beijing.', 'He want going Beijing.'], answer: 0, explain: 'he 三单 wants：He wants to go to Beijing.。', tag: '语法' },
    { id: 'wf9-9', type: 'judge', q: '参观博物馆、名胜古迹时要遵守规则，不乱刻乱画。', options: ['√ 对', '✗ 错'], answer: 0, explain: '文明参观：排队守序、爱护文物、轻声交谈！', tag: '习惯养成' },
    { id: 'wf9-10', type: 'choice', q: '"你想喝点什么吗？"用英语问：', options: ['Do you want something to drink?', 'Do you want drink something?', 'You want something drink?', 'Do you drink something want?'], answer: 0, explain: 'want something to drink 想要喝的东西。', tag: '句型' },
  ],
  wf10: [
    { id: 'wf10-1', type: 'choice', q: '"Only drink clean water!" 的意思是：', options: ['只喝干净的水！', '不要喝水！', '水很干净！', '请喝水！'], answer: 0, explain: 'only 只有：祈使句提醒我们喝干净的水。', tag: '祈使句' },
    { id: 'wf10-2', type: 'choice', q: '"Go straight on." 的意思是：', options: ['一直向前走。', '向右转。', '停下来。', '往回走。'], answer: 0, explain: 'straight 直的：go straight on 直行，指路常用语。', tag: '指路' },
    { id: 'wf10-3', type: 'choice', q: '"Turn left!" 的意思是：', options: ['向左转！', '向右转！', '直走！', '掉头！'], answer: 0, explain: 'turn left 左转，turn right 右转，go straight 直行。', tag: '指路' },
    { id: 'wf10-4', type: 'choice', q: '祈使句 "Don\'t..." 表示：', options: ['禁止、不要做', '请求', '过去的事', '将来的计划'], answer: 0, explain: "Don't touch! 别碰！Don't swim here! 禁止游泳！", tag: '祈使句' },
    { id: 'wf10-5', type: 'judge', q: '"Don\'t drink dirty water!" 意思是"不要喝脏水！"。', options: ['√ 对', '✗ 错'], answer: 0, explain: "dirty 脏的：Don't + 原形，禁止做某事。", tag: '祈使句' },
    { id: 'wf10-6', type: 'choice', q: '公园里的标志 "Keep off the grass!" 意思是：', options: ['请勿践踏草坪', '请勿停车', '禁止游泳', '保持安静'], answer: 0, explain: 'Keep off 远离：勿踩草坪，爱护绿化！', tag: '标志' },
    { id: 'wf10-7', type: 'choice', q: '"cross" 的意思是：', options: ['穿过（马路）', '爬上', '跳过', '绕开'], answer: 0, explain: 'cross the road 过马路：走斑马线，看红绿灯！', tag: '安全教育' },
    { id: 'wf10-8', type: 'choice', q: '过马路的正确做法：', options: ['走斑马线，红灯停绿灯行', '翻越护栏', '低头玩手机走', '奔跑冲过去'], answer: 0, explain: '交通安全：斑马线上左右看，红灯停、绿灯行！', tag: '安全教育' },
    { id: 'wf10-9', type: 'judge', q: '"Stop!" 意思是"停！"，是祈使句。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Stop! 停下！动词原形开头的祈使句。', tag: '祈使句' },
    { id: 'wf10-10', type: 'choice', q: '"请排队"用英语说：', options: ['Please wait in line!', 'Please run in line!', 'Please line the wait!', 'Please queue jump!'], answer: 0, explain: 'wait in line / queue up 排队等候：文明礼从小事做起！', tag: '习惯养成' },
  ],
}
