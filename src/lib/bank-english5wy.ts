// 外研版新标准英语（一年级起点）五年级上册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）五年级上册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq5s 核对；源页 M10 U1 OCR 误作 shouldn't，实为 You should tidy your toys.）：
//   M1 There wasn't a clock here before./There are tall trees now. · M2 This one is heavy./They sell many different things.
//   M3 Today is Halloween./Easter is in spring in the UK. · M4 We're going to tell stories./I'm going to be eleven.
//   M5 It's mine!/Amy's blue dress is wet. · M6 You can play basketball well./They got seventy points.
//   M7 His dog can help him./It could find the people. · M8 Children often sit around tables./There are lots of games.
//   M9 Are you sad?/She was very happy. · M10 You should tidy your toys./You shouldn't be late.
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 we

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
    id: 'we1',
    name: 'Module 1',
    title: "There wasn't a clock here before.",
    emoji: '🕰️',
    color: 'amber',
    lessons: ["There wasn't a clock.", 'There are tall trees now.', 'there be 变化'],
    intro: '以前没有、现在有了，there be 说变化！',
  },
  {
    id: 'we2',
    name: 'Module 2',
    title: 'This one is heavy.',
    emoji: '🛒',
    color: 'orange',
    lessons: ['This one is heavy.', 'They sell many things.', 'Shopping'],
    intro: '超市购物真热闹，heavy light 分得清！',
  },
  {
    id: 'we3',
    name: 'Module 3',
    title: 'Today is Halloween.',
    emoji: '🎃',
    color: 'rose',
    lessons: ['Today is Halloween.', 'Easter is in spring.', 'Festivals'],
    intro: '万圣节、复活节，西方节日大探秘！',
  },
  {
    id: 'we4',
    name: 'Module 4',
    title: "We're going to tell stories.",
    emoji: '📖',
    color: 'lime',
    lessons: ["We're going to tell stories.", "I'm going to be eleven.", 'be going to'],
    intro: '讲故事、过生日，be going to 说打算！',
  },
  {
    id: 'we5',
    name: 'Module 5',
    title: "It's mine!",
    emoji: '🎒',
    color: 'teal',
    lessons: ["It's mine!", "Amy's blue dress is wet.", '物主代词'],
    intro: 'mine yours his hers，东西是谁分得清！',
  },
  {
    id: 'we6',
    name: 'Module 6',
    title: 'You can play basketball well.',
    emoji: '🏀',
    color: 'sky',
    lessons: ['You can play basketball well.', 'They got seventy points.', 'can + well'],
    intro: '打得好好夸奖，can 加 well 来帮忙！',
  },
  {
    id: 'we7',
    name: 'Module 7',
    title: 'His dog can help him.',
    emoji: '🐕‍🦺',
    color: 'violet',
    lessons: ['His dog can help him.', 'It could find the people.', 'can / could'],
    intro: '导盲犬本领大，can could 真用途！',
  },
  {
    id: 'we8',
    name: 'Module 8',
    title: 'Children often sit around tables.',
    emoji: '🏫',
    color: 'pink',
    lessons: ['Children often sit around tables.', 'There are lots of games.', '频率词'],
    intro: 'often 有时从来不，频率副词说习惯！',
  },
  {
    id: 'we9',
    name: 'Module 9',
    title: 'Are you sad?',
    emoji: '😊',
    color: 'indigo',
    lessons: ['Are you sad?', 'She was very happy.', '情绪表达'],
    intro: '开心难过都正常，学会表达好心情！',
  },
  {
    id: 'we10',
    name: 'Module 10',
    title: 'You should tidy your toys.',
    emoji: '🧸',
    color: 'emerald',
    lessons: ['You should tidy your toys.', "You shouldn't be late.", 'should 建议'],
    intro: 'should 提建议，shouldn\'t 劝别做！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  we1: [
    { id: 'we1-1', type: 'choice', q: '"There wasn\'t a clock here before." 的意思是：', options: ['以前这里没有钟。', '现在这里没有钟。', '这里有一个钟。', '钟坏了。'], answer: 0, explain: "wasn't = was not，there be 的过去式否定：以前没有。", tag: 'there be' },
    { id: 'we1-2', type: 'choice', q: '"There are tall trees now." 的意思是：', options: ['现在有高高的树。', '以前有高高的树。', '树上很高。', '树要被砍掉。'], answer: 0, explain: 'There are 现在有，now 提示现在：现在有了（以前没有）。', tag: 'there be' },
    { id: 'we1-3', type: 'choice', q: '"There was" 和 "There is" 的区别是：', options: ['was 过去有，is 现在有', 'was 现在有，is 过去有', 'was 单数，is 复数', '没有区别'], answer: 0, explain: 'there be 的过去式：was/were；现在时：is/are。', tag: 'there be' },
    { id: 'we1-4', type: 'choice', q: '"There were many people." 中用 were 是因为：', options: ['people 是复数', 'people 是单数', 'many 是复数', '过去式都用 were'], answer: 0, explain: 'there be 的 be 看后面的名词：people 复数用 were。', tag: '语法' },
    { id: 'we1-5', type: 'judge', q: '"There wasn\'t a park here before." 意思是"以前这里有一个公园"。', options: ['√ 对', '✗ 错'], answer: 1, explain: "wasn't 是否定：以前这里没有公园。", tag: 'there be' },
    { id: 'we1-6', type: 'choice', q: '"clock" 指的是：', options: ['时钟', '手表', '铃铛', '日历'], answer: 0, explain: 'clock 时钟（挂钟、座钟），watch 手表。', tag: '单词' },
    { id: 'we1-7', type: 'choice', q: '"before" 的意思是：', options: ['以前', '现在', '以后', '刚刚'], answer: 0, explain: 'before 以前，now 现在，later 后来。', tag: '时间' },
    { id: 'we1-8', type: 'choice', q: '"Now there is a supermarket." 的意思是：', options: ['现在有一家超市。', '以前有一家超市。', '超市很远。', '超市关门了。'], answer: 0, explain: 'now 现在，there is 有：现在开了家超市（说变化）。', tag: 'there be' },
    { id: 'we1-9', type: 'judge', q: '说过去"有"用 there was/were，说现在"有"用 there is/are。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'there be 的时态：过去 was/were，现在 is/are。', tag: '语法' },
    { id: 'we1-10', type: 'choice', q: '"这里以前有一家小商店"应该说：', options: ['There was a small shop here before.', 'There is a small shop here before.', 'There were a small shop here before.', 'There wasn\'t a small shop here before.'], answer: 0, explain: 'a small shop 单数用 was：There was... before.。', tag: '一般过去' },
  ],
  we2: [
    { id: 'we2-1', type: 'choice', q: '"This one is heavy." 的意思是：', options: ['这个很重。', '这个很轻。', '这个很大。', '这个很好。'], answer: 0, explain: 'heavy 重的，light 轻的：This one is heavy. 这个重。', tag: '形容词' },
    { id: 'we2-2', type: 'choice', q: '"heavy" 的反义词是：', options: ['light', 'big', 'small', 'tall'], answer: 0, explain: 'heavy 重 ↔ light 轻；big 大 ↔ small 小。', tag: '形容词' },
    { id: 'we2-3', type: 'choice', q: '"They sell many different things." 的意思是：', options: ['他们卖很多不同的东西。', '他们买了很多东西。', '他们做了很多东西。', '他们喜欢不同的东西。'], answer: 0, explain: 'sell 卖，buy 买：超市卖各种商品。', tag: '购物' },
    { id: 'we2-4', type: 'choice', q: '"sell" 的意思是：', options: ['卖', '买', '送', '借'], answer: 0, explain: 'sell 卖，buy 买：The shop sells fruit. 商店卖水果。', tag: '单词' },
    { id: 'we2-5', type: 'judge', q: '"This bag is light." 意思是"这个包很重"。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'light 是"轻的"：这个包很轻。', tag: '形容词' },
    { id: 'we2-6', type: 'choice', q: '超市里的"收银员"帮我们：', options: ['结账付钱', '搬货', '试吃', '看孩子'], answer: 0, explain: '收银员 cashier，结账 pay：排队付款讲文明。', tag: '购物' },
    { id: 'we2-7', type: 'choice', q: '"This one is heavy. I can\'t carry it." 的意思是：', options: ['这个重，我搬不动。', '这个轻，我能搬动。', '我想买这个。', '这个坏了。'], answer: 0, explain: 'carry 搬/提，can\'t carry it 搬不动它。', tag: '句型' },
    { id: 'we2-8', type: 'choice', q: '"different" 的意思是：', options: ['不同的', '一样的', '困难的', '重要的'], answer: 0, explain: 'different 不同的，same 相同的。', tag: '单词' },
    { id: 'we2-9', type: 'judge', q: '超市购物要排队结账，不拆封商品。', options: ['√ 对', '✗ 错'], answer: 0, explain: '文明购物：排队付款，轻拿轻放，没买的先不拆。', tag: '习惯养成' },
    { id: 'we2-10', type: 'choice', q: '"帮妈妈提东西"用英语说：', options: ['help mum carry things', 'help mum to carry it heavy', 'carry mum help', 'mum help carry me'], answer: 0, explain: 'help sb (to) do sth：help mum carry things 帮妈妈提东西。', tag: '句型' },
  ],
  we3: [
    { id: 'we3-1', type: 'choice', q: '"Today is Halloween." 的意思是：', options: ['今天是万圣节。', '今天是圣诞节。', '今天是春节。', '今天是复活节。'], answer: 0, explain: 'Halloween 万圣节前夜（10 月 31 日），孩子们扮鬼讨糖。', tag: '节日' },
    { id: 'we3-2', type: 'choice', q: '"Easter is in spring in the UK." 的意思是：', options: ['在英国复活节在春天。', '英国春天很美。', '复活节在秋天。', '英国有春天。'], answer: 0, explain: 'Easter 复活节，in spring 在春天。', tag: '节日' },
    { id: 'we3-3', type: 'choice', q: '万圣节孩子们挨家讨糖时说：', options: ['Trick or treat!', 'Merry Christmas!', 'Happy birthday!', 'Good morning!'], answer: 0, explain: 'Trick or treat! 不给糖就捣蛋！是万圣节经典用语。', tag: '文化' },
    { id: 'we3-4', type: 'choice', q: '万圣节的标志性装饰是：', options: ['南瓜灯', '圣诞树', '彩蛋', '灯笼'], answer: 0, explain: 'pumpkin lantern 南瓜灯（杰克灯）是万圣节的象征。', tag: '文化' },
    { id: 'we3-5', type: 'judge', q: '复活节和彩蛋有关，彩蛋象征新生命。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Easter eggs 复活节彩蛋，象征春天与新生命。', tag: '文化' },
    { id: 'we3-6', type: 'choice', q: '"Christmas" 在：', options: ['12 月 25 日', '10 月 31 日', '1 月 1 日', '11 月的第四个周四'], answer: 0, explain: 'Christmas 圣诞节 12 月 25 日；10 月 31 日是 Halloween。', tag: '节日' },
    { id: 'we3-7', type: 'choice', q: '"Thanksgiving"（感恩节）是哪个国家的传统节日？', options: ['美国', '英国', '中国', '日本'], answer: 0, explain: 'Thanksgiving 感恩节，美国传统节日，吃火鸡感恩家人。', tag: '文化' },
    { id: 'we3-8', type: 'choice', q: '了解外国节日时，正确的态度是：', options: ['尊重并了解文化差异', '嘲笑别的节日', '说外国节日不好', '只过外国节日'], answer: 0, explain: '每种文化都值得尊重，了解差异才能更好交流！', tag: '文化' },
    { id: 'we3-9', type: 'judge', q: '中秋节是中国的传统节日，全家赏月吃月饼。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Mid-Autumn Festival 中秋节，月亮团圆、月饼香甜。', tag: '文化' },
    { id: 'we3-10', type: 'choice', q: '"in spring / in autumn" 说明季节前用：', options: ['in', 'on', 'at', 'to'], answer: 0, explain: 'in + 季节/月份：in spring，in May；on + 具体某天。', tag: '语法' },
  ],
  we4: [
    { id: 'we4-1', type: 'choice', q: '"We\'re going to tell stories." 的意思是：', options: ['我们打算讲故事。', '我们正在讲故事。', '我们讲过故事。', '我们喜欢听故事。'], answer: 0, explain: 'be going to + 动词原形：打算做某事。', tag: '一般将来' },
    { id: 'we4-2', type: 'choice', q: '"I\'m going to be eleven." 的意思是：', options: ['我快十一岁了。', '我已经十一岁了。', '我十岁了。', '我想变成十一。'], answer: 0, explain: 'be going to be + 年龄：快到 11 岁了（将来的状态）。', tag: '一般将来' },
    { id: 'we4-3', type: 'choice', q: '"tell stories" 的意思是：', options: ['讲故事', '读书', '写作文', '听广播'], answer: 0, explain: 'tell stories 讲故事，tell a story 讲一个故事。', tag: '短语' },
    { id: 'we4-4', type: 'choice', q: '"他们打算唱歌"应该说：', options: ['They are going to sing.', 'They are singing.', 'They sang.', 'They can sing.'], answer: 0, explain: 'they 配 are：They are going to sing.。', tag: '一般将来' },
    { id: 'we4-5', type: 'judge', q: '"be going to" 表示已经决定或计划好的事。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'be going to 表达计划、打算：先有计划，将来去做。', tag: '一般将来' },
    { id: 'we4-6', type: 'choice', q: '"What are you going to do at the weekend?" 的意思是：', options: ['你周末打算做什么？', '你周末在做什么？', '你周末做了什么？', '你喜欢周末吗？'], answer: 0, explain: 'What are you going to do...? 问将来的打算。', tag: '句型' },
    { id: 'we4-7', type: 'choice', q: '"她打算当一名老师"应该说：', options: ['She is going to be a teacher.', 'She is a teacher.', 'She likes teachers.', 'She was a teacher.'], answer: 0, explain: 'be going to be + 职业：打算成为……。', tag: '一般将来' },
    { id: 'we4-8', type: 'choice', q: '回答 "What are you going to do?" 可以说：', options: ["I'm going to visit my grandma.", "I'm fine.", 'I did it.', 'I like it.'], answer: 0, explain: '问打算就答 be going to 句子。', tag: '句型' },
    { id: 'we4-9', type: 'judge', q: '制定学习计划可以用 be going to，如 I\'m going to read every day.。', options: ['√ 对', '✗ 错'], answer: 0, explain: '用 be going to 定计划，然后坚持执行！', tag: '学习方法' },
    { id: 'we4-10', type: 'choice', q: '"We\'re going to have a party." 中 be 动词用 are 是因为：', options: ['主语 we 是复数', 'party 是复数', 'have 是原形', 'going 需要'], answer: 0, explain: 'be 的形式由主语决定：I am / he is / we are。', tag: '语法' },
  ],
  we5: [
    { id: 'we5-1', type: 'choice', q: '"It\'s mine!" 的意思是：', options: ['它是我的！', '它在这里！', '它是矿山！', '我想要它！'], answer: 0, explain: 'mine = my + 东西，名词性物主代词：我的（东西）。', tag: '物主代词' },
    { id: 'we5-2', type: 'choice', q: '"mine" 和 "my" 的区别是：', options: ['mine 后面不带名词，my 后面要带', 'mine 后面带名词，my 不带', '没有区别', 'mine 是复数'], answer: 0, explain: 'my bag = mine：my 后接名词，mine 单独用。', tag: '物主代词' },
    { id: 'we5-3', type: 'choice', q: '"This is your book." 中 "your" 是：', options: ['形容词性物主代词', '名词性物主代词', '人称代词', '疑问词'], answer: 0, explain: 'your/ my/ his/ her 后面接名词，是形容词性物主代词。', tag: '物主代词' },
    { id: 'we5-4', type: 'choice', q: '"Amy\'s blue dress is wet." 的意思是：', options: ['艾米的蓝裙子湿了。', '艾米买了蓝裙子。', '蓝裙子是湿的。', '艾米喜欢蓝裙子。'], answer: 0, explain: "Amy's 艾米的，wet 湿的：裙子湿了（可能是洗了或淋雨）。", tag: '句型' },
    { id: 'we5-5', type: 'judge', q: '"This pen is hers." 意思是"这支笔是她的"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'hers = her + 东西：hers 名词性物主代词，单独用。', tag: '物主代词' },
    { id: 'we5-6', type: 'choice', q: '"dress" 指的是：', options: ['连衣裙', '短裙', '裤子', '衬衫'], answer: 0, explain: 'dress 连衣裙，skirt 短裙，trousers 裤子。', tag: '服装' },
    { id: 'we5-7', type: 'choice', q: '"wet" 的反义词是：', options: ['dry', 'hot', 'cold', 'clean'], answer: 0, explain: 'wet 湿的 ↔ dry 干的。', tag: '形容词' },
    { id: 'we5-8', type: 'choice', q: '这是他的书包，应该说：', options: ["It's his.", "It's him.", "It's he's.", "It's her."], answer: 0, explain: 'his 他的（东西）：his 可以作形容词性和名词性。', tag: '物主代词' },
    { id: 'we5-9', type: 'judge', q: '不是自己的东西不能随便说 It\'s mine!，要先弄清楚主人。', options: ['√ 对', '✗ 错'], answer: 0, explain: '诚实守信：不是自己的东西要物归原主！', tag: '习惯养成' },
    { id: 'we5-10', type: 'choice', q: '"Is this your ruler?" 的回答（是我的）：', options: ["Yes, it's mine.", "Yes, it's my.", "Yes, it's me.", "Yes, it's I."], answer: 0, explain: 'mine 名词性物主代词：Yes, it\'s mine. 是我的。', tag: '物主代词' },
  ],
  we6: [
    { id: 'we6-1', type: 'choice', q: '"You can play basketball well." 的意思是：', options: ['你篮球打得好。', '你会打篮球。', '你想打篮球。', '你在打篮球。'], answer: 0, explain: 'can + 动词 + well：well 是副词，修饰"打得好"。', tag: '句型' },
    { id: 'we6-2', type: 'choice', q: '"good" 和 "well" 的区别：', options: ['good 修饰名词，well 修饰动词', 'good 修饰动词，well 修饰名词', '完全一样', 'good 是副词'], answer: 0, explain: 'a good player（形容词），play well（副词修饰动词）。', tag: '语法' },
    { id: 'we6-3', type: 'choice', q: '"They got seventy points." 的意思是：', options: ['他们得了七十分。', '他们有七十个朋友。', '他们七十岁了。', '他们买了七十分。'], answer: 0, explain: 'get points 得分，got 是过去式：seventy points 七十分。', tag: '运动' },
    { id: 'we6-4', type: 'choice', q: '"point" 在比赛中的意思是：', options: ['得分', '手指', '铅笔尖', '地点'], answer: 0, explain: 'point 得分（比赛用语）：get twenty points 得 20 分。', tag: '运动' },
    { id: 'we6-5', type: 'judge', q: '"She runs fast." 中 fast 修饰 run，说明跑得快。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'fast 既可作形容词也可作副词：run fast 跑得快。', tag: '语法' },
    { id: 'we6-6', type: 'choice', q: '"他歌唱得好"应该说：', options: ['He sings well.', 'He sings good.', 'He is sing well.', 'He well sings.'], answer: 0, explain: 'sing 是动词，用副词 well 修饰：He sings well.。', tag: '语法' },
    { id: 'we6-7', type: 'choice', q: '夸奖同学球打得好，可以说：', options: ['You can play it well!', 'You are bad!', 'I can play it!', 'Play it now!'], answer: 0, explain: '夸奖别人：You can play... well! 真棒！', tag: '习惯养成' },
    { id: 'we6-8', type: 'choice', q: '"seventy" 是数字：', options: ['70', '17', '7', '700'], answer: 0, explain: 'seventy 70，seventeen 17，seven 7，注意区分！', tag: '数字' },
    { id: 'we6-9', type: 'judge', q: '运动前要热身，运动后要放松。', options: ['√ 对', '✗ 错'], answer: 0, explain: '热身防拉伤，放松缓疲劳，科学运动身体好！', tag: '健康习惯' },
    { id: 'we6-10', type: 'choice', q: '"basketball" 的意思是：', options: ['篮球', '足球', '排球', '乒乓球'], answer: 0, explain: 'basketball 篮球（basket 篮 + ball 球），play basketball。', tag: '运动' },
  ],
  we7: [
    { id: 'we7-1', type: 'choice', q: '"His dog can help him." 的意思是：', options: ['他的狗能帮助他。', '他的狗很喜欢他。', '他帮了他的狗。', '他的狗跑得快。'], answer: 0, explain: 'can 能：这只狗（导盲犬）能帮助他。', tag: '情态动词' },
    { id: 'we7-2', type: 'choice', q: '"It could find the people." 中 could 是：', options: ['can 的过去式', 'can 的三单', 'can 的原形', 'can 的 ing'], answer: 0, explain: 'could 是 can 的过去式：它（当时）能找到人。', tag: '情态动词' },
    { id: 'we7-3', type: 'choice', q: '"导盲犬"的作用是：', options: ['帮助盲人出行', '看家护院', '表演节目', '放牧羊群'], answer: 0, explain: 'guide dog 导盲犬，是盲人朋友的"眼睛"，要爱护它们！', tag: '关爱' },
    { id: 'we7-4', type: 'choice', q: '"blind" 的意思是：', options: ['失明的', '聋的', '哑的', '瘸的'], answer: 0, explain: 'blind 失明的，deaf 聋的：帮助残疾人是美德。', tag: '单词' },
    { id: 'we7-5', type: 'judge', q: '"can" 和 "could" 后面都接动词原形。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'can/could 是情态动词，后面一律用原形。', tag: '语法' },
    { id: 'we7-6', type: 'choice', q: '"fireman"（消防员）能：', options: ['灭火救人', '看病', '教数学', '种树'], answer: 0, explain: 'fireman 消防员，put out fires 灭火，rescue people 救人。', tag: '职业' },
    { id: 'we7-7', type: 'choice', q: '"他们能找到路"应该说：', options: ['They can find the way.', 'They can finds the way.', 'They could found the way.', 'They cans find the way.'], answer: 0, explain: 'can + 原形：They can find the way.。', tag: '语法' },
    { id: 'we7-8', type: 'choice', q: '遇到导盲犬或警犬时应该：', options: ['不打扰、不投喂、不抚摸', '逗它们玩', '喂零食', '大声喊叫'], answer: 0, explain: '工作犬在执勤，不打扰是对它们最好的尊重！', tag: '关爱' },
    { id: 'we7-9', type: 'judge', q: '帮助有困难的人，世界会更温暖。', options: ['√ 对', '✗ 错'], answer: 0, explain: '赠人玫瑰手有余香：主动帮助需要帮助的人！', tag: '习惯养成' },
    { id: 'we7-10', type: 'choice', q: '"could" 表示过去的能力，如：', options: ['When he was young, he could run fast.', 'He can run fast.', 'He runs fast.', 'He is running fast.'], answer: 0, explain: '过去的能力用 could：他年轻时能跑得很快。', tag: '情态动词' },
  ],
  we8: [
    { id: 'we8-1', type: 'choice', q: '"Children often sit around tables." 的意思是：', options: ['孩子们经常围坐在桌子旁。', '孩子们正在桌子下。', '孩子们想买桌子。', '孩子们坐在地板上。'], answer: 0, explain: 'often 经常，频率副词：英国课堂孩子常围桌而坐。', tag: '频率副词' },
    { id: 'we8-2', type: 'choice', q: '频率从高到低排序正确的是：', options: ['always > often > sometimes > never', 'never > often > always > sometimes', 'often > always > never > sometimes', 'sometimes > always > often > never'], answer: 0, explain: 'always 总是 100%，often 经常，sometimes 有时，never 从不。', tag: '频率副词' },
    { id: 'we8-3', type: 'choice', q: '"There are lots of games." 的意思是：', options: ['有很多游戏。', '有一个游戏。', '游戏结束了。', '我们爱游戏。'], answer: 0, explain: 'lots of = a lot of 许多，可修饰复数或不可数名词。', tag: 'there be' },
    { id: 'we8-4', type: 'choice', q: '"There are lots of games." 中用 are 是因为：', options: ['games 是复数', 'lots 是复数', 'of 是复数', '习惯用法'], answer: 0, explain: 'there be 的 be 与最近名词一致：games 复数用 are。', tag: '语法' },
    { id: 'we8-5', type: 'judge', q: '"She never eats junk food." 意思是"她从不吃垃圾食品"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'never 从不：她从不吃垃圾食品，好习惯！', tag: '频率副词' },
    { id: 'we8-6', type: 'choice', q: '"我有时骑自行车上学"应该说：', options: ['I sometimes go to school by bike.', 'I sometime go to school by bike.', 'I go to school sometimes bike.', 'I by bike go sometimes school.'], answer: 0, explain: 'sometimes 放在主语后动词前：I sometimes go...。', tag: '频率副词' },
    { id: 'we8-7', type: 'choice', q: '"around tables" 中 around 的意思是：', options: ['围绕', '大约', '在上方', '穿过'], answer: 0, explain: 'around 围绕/在周围：sit around tables 围桌而坐。', tag: '介词' },
    { id: 'we8-8', type: 'choice', q: '"always" 的意思是：', options: ['总是', '经常', '有时', '从不'], answer: 0, explain: 'always 总是，频率最高：The sun always rises. 太阳总是升起。', tag: '频率副词' },
    { id: 'we8-9', type: 'judge', q: '英国学校的课堂常把孩子分成小组围桌讨论。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'sit around tables 围桌而坐，小组合作是英国课堂常见形式。', tag: '文化' },
    { id: 'we8-10', type: 'choice', q: '" lots of books" 意思是：', options: ['许多书', '一本书', '没有书', '借书'], answer: 0, explain: 'lots of + 复数名词：许多书 = many books。', tag: '短语' },
  ],
  we9: [
    { id: 'we9-1', type: 'choice', q: '"Are you sad?" 的意思是：', options: ['你难过吗？', '你生气吗？', '你累吗？', '你饿吗？'], answer: 0, explain: 'sad 难过的：关心朋友的情绪。', tag: '情绪' },
    { id: 'we9-2', type: 'choice', q: '"She was very happy." 的意思是：', options: ['她非常开心。', '她想开心。', '她不开心。', '她正在笑。'], answer: 0, explain: 'was 过去式：她（那时）非常开心。', tag: '一般过去' },
    { id: 'we9-3', type: 'choice', q: '"sad" 的反义词是：', options: ['happy', 'angry', 'tired', 'hungry'], answer: 0, explain: 'sad 难过 ↔ happy 开心；angry 生气，tired 累。', tag: '形容词' },
    { id: 'we9-4', type: 'choice', q: '"bored" 的意思是：', options: ['无聊的', '兴奋的', '害怕的', '骄傲的'], answer: 0, explain: 'bored 感到无聊的：I feel bored. 我觉得无聊。', tag: '情绪' },
    { id: 'we9-5', type: 'judge', q: '"He won the game, so he was happy." 意思是"他赢了比赛，所以很开心"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'win→won 赢，so 所以：赢了自然开心。', tag: '句型' },
    { id: 'we9-6', type: 'choice', q: '朋友难过的时侯，你应该：', options: ['安慰他、听他说', '嘲笑他', '不理他', '让他更难过'], answer: 0, explain: '安慰朋友：Don\'t be sad. 别难过，我陪着你！', tag: '习惯养成' },
    { id: 'we9-7', type: 'choice', q: '"angry" 的意思是：', options: ['生气的', '开心的', '伤心的', '惊讶的'], answer: 0, explain: 'angry 生气的：Don\'t be angry. 别生气。', tag: '情绪' },
    { id: 'we9-8', type: 'choice', q: '"Why are you sad?" 的意思是：', options: ['你为什么难过？', '你难过吗？', '你什么时候难过？', '你在哪难过？'], answer: 0, explain: 'Why 问原因：你为什么难过？', tag: '疑问词' },
    { id: 'we9-9', type: 'judge', q: '有坏情绪可以说出来或告诉大人，不要憋在心里。', options: ['√ 对', '✗ 错'], answer: 0, explain: '说出来、找人聊、运动一下，坏情绪就能被赶跑！', tag: '心理健康' },
    { id: 'we9-10', type: 'choice', q: '"tired" 的意思是：', options: ['疲倦的', '兴奋的', '高兴的', '渴的'], answer: 0, explain: 'tired 累的：I\'m tired. 我累了，休息一下吧。', tag: '情绪' },
  ],
  we10: [
    { id: 'we10-1', type: 'choice', q: '"You should tidy your toys." 的意思是：', options: ['你应该收拾好玩具。', '你不许玩玩具。', '你想买玩具。', '玩具坏了。'], answer: 0, explain: 'should 应该（提建议）：tidy your toys 收拾玩具。', tag: '情态动词' },
    { id: 'we10-2', type: 'choice', q: '"should" 后面的动词用：', options: ['原形', '过去式', 'ing 形式', '三单形式'], answer: 0, explain: 'should 是情态动词，后面接动词原形：should go, should tidy。', tag: '语法' },
    { id: 'we10-3', type: 'choice', q: '"You shouldn\'t be late." 的意思是：', options: ['你不应该迟到。', '你不应该早到。', '你迟到了。', '你应该迟到。'], answer: 0, explain: "shouldn't = should not：不应该做某事。", tag: '情态动词' },
    { id: 'we10-4', type: 'choice', q: '"tidy" 的意思是：', options: ['收拾整齐', '弄脏', '扔掉', '买新的'], answer: 0, explain: 'tidy 收拾整齐：tidy the room 整理房间。', tag: '单词' },
    { id: 'we10-5', type: 'judge', q: '"You should do more exercise." 意思是"你应该多锻炼"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'do exercise 锻炼，should 提建议。', tag: '情态动词' },
    { id: 'we10-6', type: 'choice', q: '给同学的合理建议是：', options: ['You should read more books.', 'You should play all day.', "You shouldn't listen to teachers.", "You shouldn't do homework."], answer: 0, explain: 'should + 好习惯：多读书是好建议！', tag: '习惯养成' },
    { id: 'we10-7', type: 'choice', q: '"她应该早点睡觉"应该说：', options: ['She should go to bed early.', 'She should goes to bed early.', 'She should to go to bed early.', 'She shouldn\'t go to bed early.'], answer: 0, explain: 'should + 原形：She should go to bed early.。', tag: '语法' },
    { id: 'we10-8', type: 'choice', q: '"shouldn\'t" 的完整形式是：', options: ['should not', 'should no', 'shouldn not', 'shouldn\'t not'], answer: 0, explain: "shouldn't = should not，缩写形式。", tag: '语法' },
    { id: 'we10-9', type: 'judge', q: '自己的玩具自己收拾，是好习惯。', options: ['√ 对', '✗ 错'], answer: 0, explain: '自己的事情自己做：玩具归位，房间整洁！', tag: '习惯养成' },
    { id: 'we10-10', type: 'choice', q: '"You should be polite." 的意思是：', options: ['你应该有礼貌。', '你可以没礼貌。', '你有礼貌吗？', '他很有礼貌。'], answer: 0, explain: 'polite 有礼貌的：should be polite 应该有礼貌。', tag: '习惯养成' },
  ],
}
