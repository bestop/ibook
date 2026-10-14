// 外研版新标准英语（一年级起点）六年级下册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）六年级下册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq6x 核对）：
//   M1 I want a hot dog, please./What do you want to eat? · M2 When are we going to eat?/It will rain in Beijing.
//   M3 I took some photos./The sun is shining. · M4 I can't carry all these things./The apples are falling down the stairs!
//   M5 He is playing the suona./Some children are jumping in the water.
//   M6 It was Daming's birthday yesterday./The name of the spaceship is Shenzhou V.
//   M7 My father flew into space in Shenzhou V./She couldn't see or hear.
//   M8 Why do you have cups on your heads?/Why are you wearing a hat?
//   M9 Best wishes to you!/Wishing you happiness every day.
//   M10 We're going to different schools./I'm going to Lake Middle School.
// （源页 OCR 问题已修正：M5U1 条目截断，补全为 "He is playing the suona."（唢呐））
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wl

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
    id: 'wl1',
    name: 'Module 1',
    title: 'I want a hot dog, please.',
    emoji: '🌭',
    color: 'amber',
    lessons: ['I want a hot dog, please.', 'What do you want to eat?', 'Ordering food'],
    intro: '餐厅点餐有学问，want 句型点一点！',
  },
  {
    id: 'wl2',
    name: 'Module 2',
    title: 'When are we going to eat?',
    emoji: '🌧️',
    color: 'orange',
    lessons: ['When are we going to eat?', 'It will rain in Beijing.', 'Weather plan'],
    intro: '什么时候吃饭？北京会不会下雨？',
  },
  {
    id: 'wl3',
    name: 'Module 3',
    title: 'I took some photos.',
    emoji: '📷',
    color: 'rose',
    lessons: ['I took some photos.', 'The sun is shining.', 'took & shining'],
    intro: '拍照片、看阳光，过去进行两相宜！',
  },
  {
    id: 'wl4',
    name: 'Module 4',
    title: "I can't carry all these things.",
    emoji: '🍎',
    color: 'lime',
    lessons: ["I can't carry all these things.", 'The apples are falling down the stairs!', 'Helping hands'],
    intro: '苹果滚下楼梯啦，谁能来帮帮我们？',
  },
  {
    id: 'wl5',
    name: 'Module 5',
    title: 'He is playing the suona.',
    emoji: '🎺',
    color: 'teal',
    lessons: ['He is playing the suona.', 'Some children are jumping in the water.', '-ing actions'],
    intro: '唢呐声声响，戏水孩子乐开怀！',
  },
  {
    id: 'wl6',
    name: 'Module 6',
    title: "It was Daming's birthday yesterday.",
    emoji: '🚀',
    color: 'sky',
    lessons: ["It was Daming's birthday yesterday.", 'The name of the spaceship is Shenzhou V.', 'Space dream'],
    intro: '生日礼物是飞船模型，太空梦想启航！',
  },
  {
    id: 'wl7',
    name: 'Module 7',
    title: 'My father flew into space in Shenzhou V.',
    emoji: '🌟',
    color: 'violet',
    lessons: ['My father flew into space in Shenzhou V.', "She couldn't see or hear.", 'Great people'],
    intro: '飞向太空的爸爸，永不放弃的海伦！',
  },
  {
    id: 'wl8',
    name: 'Module 8',
    title: 'Why do you have cups on your heads?',
    emoji: '🎩',
    color: 'pink',
    lessons: ['Why do you have cups on your heads?', 'Why are you wearing a hat?', 'Why & Because'],
    intro: '杯子顶头上？帽子不能少？一问一答 why 和 because！',
  },
  {
    id: 'wl9',
    name: 'Module 9',
    title: 'Best wishes to you!',
    emoji: '🎓',
    color: 'indigo',
    lessons: ['Best wishes to you!', 'Wishing you happiness every day.', 'Farewell words'],
    intro: '毕业赠言写下来，美好祝福送给好朋友！',
  },
  {
    id: 'wl10',
    name: 'Module 10',
    title: "We're going to different schools.",
    emoji: '🏫',
    color: 'emerald',
    lessons: ["We're going to different schools.", "I'm going to Lake Middle School.", 'New start'],
    intro: '就要升入中学啦，新的起点新的朋友！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wl1: [
    { id: 'wl1-1', type: 'choice', q: '"I want a hot dog, please." 的意思是：', options: ['我想要一个热狗。', '我想要一只狗。', '狗很热。', '我喜欢狗。'], answer: 0, explain: 'want 想要，hot dog 热狗——夹香肠的面包，加 please 更礼貌。', tag: '句型' },
    { id: 'wl1-2', type: 'choice', q: '"What do you want to eat?" 是在问：', options: ['你想吃点什么？', '你在吃什么？', '你喜欢吃饭吗？', '饭好吃吗？'], answer: 0, explain: 'want to do 想要做：你想吃什么？点餐常用句。', tag: '句型' },
    { id: 'wl1-3', type: 'choice', q: '"hot dog" 指的是：', options: ['一种夹香肠的长面包', '很热的狗', '热乎乎的狗狗', '辣的狗粮'], answer: 0, explain: 'hot dog 热狗，西式快餐，别理解成"热的狗"！', tag: '单词' },
    { id: 'wl1-4', type: 'judge', q: '"hot dog" 是"热心的狗"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'hot dog 是食物"热狗"，与真的狗无关哦。', tag: '单词' },
    { id: 'wl1-5', type: 'choice', q: '进餐厅服务员会先说：', options: ['Can I help you?', 'How are you?', "What's your name?", 'Where are you from?'], answer: 0, explain: 'Can I help you? 您要点什么？服务常用语。', tag: '句型' },
    { id: 'wl1-6', type: 'choice', q: '想知道多少钱，应该问：', options: ['How much is it?', 'How many is it?', 'How old is it?', 'How big is it?'], answer: 0, explain: 'How much 问价格（不可数/钱），How many 问数量。', tag: '句型' },
    { id: 'wl1-7', type: 'judge', q: '点餐时说 "please"，结账说 "thank you"，有礼貌。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'please、thank you 常挂嘴边，礼貌用餐人人夸！', tag: '礼仪' },
    { id: 'wl1-8', type: 'choice', q: '"a hamburger" 指的是：', options: ['汉堡包', '热狗', '三明治', '薯条'], answer: 0, explain: 'hamburger 汉堡包，hamburger 中间夹肉饼。', tag: '单词' },
    { id: 'wl1-9', type: 'choice', q: '冒气泡的深色饮料 "cola" 是：', options: ['可乐', '咖啡', '牛奶', '果汁'], answer: 0, explain: 'cola 可乐，a can of cola 一罐可乐。', tag: '单词' },
    { id: 'wl1-10', type: 'judge', q: '碳酸饮料要少喝，白开水才是最好的饮品。', options: ['√ 对', '✗ 错'], answer: 0, explain: '少喝 cola，多喝 water，健康饮食从小做起！', tag: '习惯养成' },
  ],
  wl2: [
    { id: 'wl2-1', type: 'choice', q: '"When are we going to eat?" 的意思是：', options: ['我们打算什么时候吃饭？', '我们喜欢吃什么？', '我们正在吃饭吗？', '饭做好了吗？'], answer: 0, explain: 'When 问时间 + be going to 打算：打算何时吃？', tag: '句型' },
    { id: 'wl2-2', type: 'choice', q: '"be going to" 表示：', options: ['计划；打算（将要做）', '正在做', '做过', '喜欢做'], answer: 0, explain: 'be going to + 动词原形，计划要做的事。', tag: '语法' },
    { id: 'wl2-3', type: 'choice', q: '"It will rain in Beijing." 的意思是：', options: ['北京将会下雨。', '北京下过雨。', '北京正在下雨。', '北京喜欢下雨。'], answer: 0, explain: 'will 将来时：天气预报常这么说。', tag: '句型' },
    { id: 'wl2-4', type: 'judge', q: '"It will rain." 里的 will 表示将来。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'will + 动词原形，表示将来会发生。', tag: '语法' },
    { id: 'wl2-5', type: 'choice', q: '阳光灿烂的"晴朗的"是：', options: ['sunny', 'rainy', 'cloudy', 'snowy'], answer: 0, explain: 'sunny 晴朗，sun + ny。', tag: '单词' },
    { id: 'wl2-6', type: 'choice', q: '天气预报说要下雨，出门要带：', options: ['an umbrella', 'a camera', 'a kite', 'a ball'], answer: 0, explain: 'umbrella 雨伞，下雨出门带把伞。', tag: '常识' },
    { id: 'wl2-7', type: 'judge', q: '问将来的时间可以用 "When + be going to...?"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'When are we going to eat? / When are you going to leave?。', tag: '句型' },
    { id: 'wl2-8', type: 'choice', q: '天上好多云，"多云的"是：', options: ['cloudy', 'cloud', 'windy', 'foggy'], answer: 0, explain: 'cloud 云 → cloudy 多云的。', tag: '单词' },
    { id: 'wl2-9', type: 'choice', q: '旗帜呼呼响，"刮风的"是：', options: ['windy', 'wind', 'rainy', 'hot'], answer: 0, explain: 'wind 风 → windy 刮风的。', tag: '单词' },
    { id: 'wl2-10', type: 'judge', q: '出门前看看天气预报，能帮助我们安排活动。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'It will rain today. 那就带伞改期——看天气做计划！', tag: '习惯养成' },
  ],
  wl3: [
    { id: 'wl3-1', type: 'choice', q: '"I took some photos." 的意思是：', options: ['我拍了一些照片。', '我想拍照。', '我在拍照片。', '我买了几张照片。'], answer: 0, explain: 'took 是 take 的过去式：took photos 拍了照。', tag: '句型' },
    { id: 'wl3-2', type: 'choice', q: '"took" 是哪个动词的过去式？', options: ['take', 'talk', 'look', 'book'], answer: 0, explain: 'take → took，不规则变化。', tag: '语法' },
    { id: 'wl3-3', type: 'choice', q: '"The sun is shining." 的意思是：', options: ['阳光正灿烂。', '太阳下山了。', '太阳很晒人。', '天空多云。'], answer: 0, explain: 'is shining 正在照耀，现在进行时。', tag: '句型' },
    { id: 'wl3-4', type: 'choice', q: '"shining" 的动词原形是：', options: ['shine', 'shining', 'shone light', 'sun'], answer: 0, explain: 'shine 照耀，去 e 加 ing 变 shining。', tag: '语法' },
    { id: 'wl3-5', type: 'judge', q: '"take photos" 是"洗照片"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'take photos 是拍照，洗照片是把照片印出来。', tag: '短语' },
    { id: 'wl3-6', type: 'choice', q: '拍照用的"相机"是：', options: ['camera', 'computer', 'phone book', 'picture'], answer: 0, explain: 'camera 相机，take photos with a camera 用相机拍照。', tag: '单词' },
    { id: 'wl3-7', type: 'choice', q: '"鸟儿正在树上唱歌"应该说：', options: ['The birds are singing in the trees.', 'The birds sing in trees.', 'The birds sang tomorrow.', 'Birds is singing.'], answer: 0, explain: 'are singing 正在唱，birds 复数配 are。', tag: '句型' },
    { id: 'wl3-8', type: 'judge', q: 'shine 变 ing 形式要去掉 e 再加 ing：shining。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'shine 以不发音的 e 结尾，去 e 加 ing：shining。类似：make → making。', tag: '语法' },
    { id: 'wl3-9', type: 'choice', q: '"photo" 的复数是：', options: ['photos', 'photoes', 'photois', 'photoies'], answer: 0, explain: 'photo 直接加 s：photos。', tag: '语法' },
    { id: 'wl3-10', type: 'judge', q: '拍照片可以留下美好的回忆。', options: ['√ 对', '✗ 错'], answer: 0, explain: '多拍些照片，多年后再看，回忆满满！', tag: '常识' },
  ],
  wl4: [
    { id: 'wl4-1', type: 'choice', q: '"I can\'t carry all these things." 的意思是：', options: ['我拿不动所有这些东西。', '我不想要这些东西。', '我没有这些东西。', '我买不起这些东西。'], answer: 0, explain: "can't 不能，carry 搬、提：拿不动啦！", tag: '句型' },
    { id: 'wl4-2', type: 'choice', q: '"carry" 的意思是：', options: ['提；搬；携带', '剪', '扔', '买'], answer: 0, explain: 'carry 拿、搬，carry the box 搬箱子。', tag: '单词' },
    { id: 'wl4-3', type: 'choice', q: '"The apples are falling down the stairs!" 的意思是：', options: ['苹果正滚下楼梯！', '苹果在楼梯上。', '苹果掉进水里了。', '我们把苹果放上楼梯。'], answer: 0, explain: 'are falling 正在掉落，down the stairs 沿楼梯向下。', tag: '句型' },
    { id: 'wl4-4', type: 'choice', q: '"fall down" 的意思是：', options: ['落下；倒下', '站起来', '飞起来', '拿起'], answer: 0, explain: 'fall 落下，fall down 跌落。Leaves fall down in autumn.。', tag: '短语' },
    { id: 'wl4-5', type: 'judge', q: '"can\'t" 表示"不能"。', options: ['√ 对', '✗ 错'], answer: 0, explain: "can't = cannot，能力或可能性上'不能'。", tag: '语法' },
    { id: 'wl4-6', type: 'choice', q: '上下楼走的"楼梯"是：', options: ['stairs', 'ladder', 'lift', 'floor'], answer: 0, explain: 'stairs 楼梯（复数），lift 电梯。', tag: '单词' },
    { id: 'wl4-7', type: 'choice', q: '想请求帮忙，应该说：', options: ['Who can help me?', 'Help yourself!', 'I help you.', 'You are help.'], answer: 0, explain: 'Who can help me? 谁能帮我？（Help yourself 是"请自便"）', tag: '句型' },
    { id: 'wl4-8', type: 'judge', q: '看到别人东西拿不动，要主动搭把手。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I can help you! 互相帮助，再多的东西也拿得动！', tag: '习惯养成' },
    { id: 'wl4-9', type: 'choice', q: '"everything" 的意思是：', options: ['每件事物；一切', '每件事都好', '一些东西', '没有东西'], answer: 0, explain: 'every + thing：一切、所有东西。', tag: '单词' },
    { id: 'wl4-10', type: 'judge', q: '东西太重时分几次拿，或请大人帮忙，安全第一。', options: ['√ 对', '✗ 错'], answer: 0, explain: '逞强容易砸脚，分批搬运更聪明！', tag: '安全' },
  ],
  wl5: [
    { id: 'wl5-1', type: 'choice', q: '"He is playing the suona." 的意思是：', options: ['他正在吹唢呐。', '他在做唢呐。', '他喜欢唢呐。', '他有一支唢呐。'], answer: 0, explain: 'is playing 正在演奏，suona 唢呐——中国双簧木管乐器。', tag: '句型' },
    { id: 'wl5-2', type: 'choice', q: '"suona" 是什么？', options: ['唢呐（中国传统乐器）', '小提琴', '钢琴', '鼓'], answer: 0, explain: 'suona 唢呐，声音高亢嘹亮，民间的"乐器之王"。', tag: '文化' },
    { id: 'wl5-3', type: 'choice', q: '"Some children are jumping in the water." 的意思是：', options: ['一些孩子正在水里戏水跳跃。', '孩子们在岸上看水。', '孩子们跳进了游泳池。', '孩子们怕水。'], answer: 0, explain: 'are jumping 正在跳，in the water 在水里。', tag: '句型' },
    { id: 'wl5-4', type: 'judge', q: '"play the suona" 里乐器前要加 the。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'play the suona / play the piano，乐器前加 the。', tag: '语法' },
    { id: 'wl5-5', type: 'choice', q: '"ring" 在"the phone rings"里的意思是：', options: ['响铃', '圆圈', '跑步', '戒指戴'], answer: 0, explain: 'ring 既指戒指，也指铃响：The bell rings.。', tag: '单词' },
    { id: 'wl5-6', type: 'choice', q: '"正在弹钢琴"应该说：', options: ['playing the piano', 'playing piano the', 'play piano', 'piano playing is'], answer: 0, explain: 'play the piano 弹钢琴，进行时 playing the piano。', tag: '句型' },
    { id: 'wl5-7', type: 'judge', q: '演奏乐器的句型是 "play + the + 乐器"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'play the erhu、play the violin——the 不能少。', tag: '语法' },
    { id: 'wl5-8', type: 'choice', q: '"loudly" 的意思是：', options: ['大声地', '小声地', '快乐地', '慢慢地'], answer: 0, explain: 'loud 大声 → loudly 大声地（副词）。', tag: '单词' },
    { id: 'wl5-9', type: 'judge', q: '在公共场合演奏、播放音乐要控制音量，不打扰他人。', options: ['√ 对', '✗ 错'], answer: 0, explain: '唢呐虽好听，也要看场合——公共文明记心间！', tag: '习惯养成' },
    { id: 'wl5-10', type: 'choice', q: '"他开始吹唢呐"应该说：', options: ['He starts to play the suona.', 'He start play suona.', 'He starts playing to suona.', 'He is start suona.'], answer: 0, explain: 'start to do 开始做：He starts to play the suona.。', tag: '句型' },
  ],
  wl6: [
    { id: 'wl6-1', type: 'choice', q: '"It was Daming\'s birthday yesterday." 的意思是：', options: ['昨天是大明的生日。', '大明明天过生日。', '大明的生日礼物。', '大明喜欢过生日。'], answer: 0, explain: "was 过去式 + Daming's（大明的）名词所有格。", tag: '句型' },
    { id: 'wl6-2', type: 'choice', q: '"The name of the spaceship is Shenzhou V." 的意思是：', options: ['这艘飞船的名字是神舟五号。', '飞船想去神舟。', '神舟五号是飞机。', '飞船没有名字。'], answer: 0, explain: 'the name of……的名字，spaceship 宇宙飞船。', tag: '句型' },
    { id: 'wl6-3', type: 'choice', q: '"spaceship" 指的是：', options: ['宇宙飞船', '太空站', '火箭燃料', '星球'], answer: 0, explain: 'space 太空 + ship 船 = spaceship 宇宙飞船。', tag: '单词' },
    { id: 'wl6-4', type: 'judge', q: '"Shenzhou V"（神舟五号）是中国发射的载人飞船。', options: ['√ 对', '✗ 错'], answer: 0, explain: '2003 年神舟五号载人飞天，杨利伟是中国太空第一人。', tag: '常识' },
    { id: 'wl6-5', type: 'choice', q: '"space" 的意思是：', options: ['太空；空间', '特殊', '速度', '运动'], answer: 0, explain: 'space 太空，in space 在太空中。', tag: '单词' },
    { id: 'wl6-6', type: 'choice', q: '中国第一位进入太空的航天员是：', options: ['杨利伟', '刘翔', '姚明', '袁隆平'], answer: 0, explain: '杨利伟乘神舟五号进入太空，中国航天里程碑！', tag: '常识' },
    { id: 'wl6-7', type: 'judge', q: '"Daming\'s" 中的 \'s 表示"大明的"，是名词所有格。', options: ['√ 对', '✗ 错'], answer: 0, explain: "名词 + 's 表示所属：Daming's birthday 大明的生日。", tag: '语法' },
    { id: 'wl6-8', type: 'choice', q: '我们居住的"地球"是：', options: ['earth', 'moon', 'sun', 'star'], answer: 0, explain: 'earth 地球，the earth goes around the sun 地球绕着太阳转。', tag: '单词' },
    { id: 'wl6-9', type: 'choice', q: '"astronaut" 指的是：', options: ['宇航员', '天文学家', '飞行员', '科学家'], answer: 0, explain: 'astronaut 宇航员，乘飞船上太空的人。', tag: '单词' },
    { id: 'wl6-10', type: 'judge', q: '中国航天从神舟五号到空间站，成就令我们自豪。', options: ['√ 对', '✗ 错'], answer: 0, explain: '一代代航天人努力，才有今天的太空家园——为祖国点赞！', tag: '常识' },
  ],
  wl7: [
    { id: 'wl7-1', type: 'choice', q: '"My father flew into space in Shenzhou V." 的意思是：', options: ['我爸爸乘神舟五号飞入太空。', '爸爸想去太空。', '爸爸在造飞船。', '爸爸喜欢看星星。'], answer: 0, explain: 'flew 是 fly 的过去式：飞入太空。', tag: '句型' },
    { id: 'wl7-2', type: 'choice', q: '"flew" 是哪个动词的过去式？', options: ['fly', 'flow', 'flee', 'fly high'], answer: 0, explain: 'fly 飞 → flew，不规则变化。', tag: '语法' },
    { id: 'wl7-3', type: 'choice', q: '"She couldn\'t see or hear." 的意思是：', options: ['她既看不见也听不见。', '她不想看也不想听。', '她能看见听不见。', '她看得见听不见。'], answer: 0, explain: "couldn't 不能，or 在否定句里连接两个并列部分。", tag: '句型' },
    { id: 'wl7-4', type: 'choice', q: '"couldn\'t" 是：', options: ['could not（不能）', 'can not（现在不能）', 'could yes', 'count not'], answer: 0, explain: "could 的过去式，couldn't = 过去'不能'。", tag: '语法' },
    { id: 'wl7-5', type: 'judge', q: '海伦·凯勒（Helen Keller）是一位又盲又聋却学会读书写作的伟大作家。', options: ['√ 对', '✗ 错'], answer: 0, explain: '海伦·凯勒在莎莉文老师帮助下毕业于哈佛，写下《假如给我三天光明》。', tag: '文化' },
    { id: 'wl7-6', type: 'choice', q: '否定句里连接"看不见"和"听不见"，用：', options: ['or', 'and', 'but', 'so'], answer: 0, explain: "否定句并列用 or：couldn't see or hear；肯定句才用 and。", tag: '语法' },
    { id: 'wl7-7', type: 'choice', q: '"blind" 的意思是：', options: ['失明的', '失聪的', '哑的', '瘸的'], answer: 0, explain: 'blind 失明的，a blind writer 一位盲人作家。', tag: '单词' },
    { id: 'wl7-8', type: 'judge', q: '遇到困难不放弃，坚持努力就有希望。', options: ['√ 对', '✗ 错'], answer: 0, explain: '海伦·凯勒看不见听不见都不放弃，我们更要以她为榜样！', tag: '道理' },
    { id: 'wl7-9', type: 'choice', q: '海伦·凯勒通过努力学会了：', options: ['read and write', 'run and jump', 'sing and dance', 'fly a plane'], answer: 0, explain: '她用手指"摸读"盲文，学会读书写作，还上了大学。', tag: '文化' },
    { id: 'wl7-10', type: 'choice', q: '"deaf" 的意思是：', options: ['失聪的', '失明的', '勇敢的', '聪明的'], answer: 0, explain: 'deaf 失聪的，blind 失明的，两个词常一起出现。', tag: '单词' },
  ],
  wl8: [
    { id: 'wl8-1', type: 'choice', q: '"Why do you have cups on your heads?" 的意思是：', options: ['你们为什么把杯子顶在头上？', '你们头上有几个杯子？', '杯子是谁的？', '杯子在头上凉快吗？'], answer: 0, explain: 'Why 问原因，have cups on your heads 杯子顶在头上（课文里是听错了 play the suona → some cups）。', tag: '句型' },
    { id: 'wl8-2', type: 'choice', q: '"Why are you wearing a hat?" 的意思是：', options: ['你为什么戴着帽子？', '你的帽子在哪？', '帽子多少钱？', '你想买帽子吗？'], answer: 0, explain: 'wearing 穿戴着（进行时），Why 问原因。', tag: '句型' },
    { id: 'wl8-3', type: 'choice', q: '回答 Why 的问题，用：', options: ['Because...', 'So...', 'Then...', 'OK...'], answer: 0, explain: 'Why...? — Because... 问为什么，答因为。', tag: '句型' },
    { id: 'wl8-4', type: 'judge', q: '"wear" 是"吃"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'wear 是穿、戴，eat 才是吃。', tag: '单词' },
    { id: 'wl8-5', type: 'choice', q: '喝水用的"杯子"是：', options: ['cup', 'cap', 'hat', 'bowl'], answer: 0, explain: 'cup 杯子；cap 鸭舌帽，拼写很像别搞混。', tag: '单词' },
    { id: 'wl8-6', type: 'choice', q: '"Because it\'s sunny." 的意思是：', options: ['因为天气晴朗。', '它是晴朗的。', '太阳出来了。', '我喜欢晴天。'], answer: 0, explain: 'because + 原因：因为阳光很好（所以戴帽子）。', tag: '句型' },
    { id: 'wl8-7', type: 'judge', q: 'why 用来问原因，because 用来给出原因。', options: ['√ 对', '✗ 错'], answer: 0, explain: '一问一答：Why? — Because...。', tag: '语法' },
    { id: 'wl8-8', type: 'choice', q: '"wearing a raincoat" 的意思是：', options: ['穿着雨衣', '戴着眼镜', '拿着伞', '穿着裙子'], answer: 0, explain: 'raincoat 雨衣，rain + coat，下雨天穿上它。', tag: '短语' },
    { id: 'wl8-9', type: 'choice', q: '"make mistakes" 的意思是：', options: ['犯错误', '做蛋糕', '交朋友', '做决定'], answer: 0, explain: 'mistake 错误，make mistakes 犯错——人人都会犯错，改了就好。', tag: '短语' },
    { id: 'wl8-10', type: 'judge', q: '犯了错误要勇于承认、及时改正。', options: ['√ 对', '✗ 错'], answer: 0, explain: '把 suona 听成 cups 没关系，弄清原因下次就不错了！', tag: '道理' },
  ],
  wl9: [
    { id: 'wl9-1', type: 'choice', q: '"Best wishes to you!" 的意思是：', options: ['给你最美好的祝愿！', '祝你生日快乐！', '你最好了！', '祝你好运！'], answer: 0, explain: 'best wishes 最美好的祝愿，毕业赠言常用。', tag: '句型' },
    { id: 'wl9-2', type: 'choice', q: '"Wishing you happiness every day." 的意思是：', options: ['祝你天天开心。', '祝你生日快乐。', '祝你一路顺风。', '祝你学业进步。'], answer: 0, explain: 'happiness 快乐、幸福，wishing 祝愿。', tag: '句型' },
    { id: 'wl9-3', type: 'choice', q: '"happiness" 的意思是：', options: ['幸福；快乐', '悲哀', '健康', '财富'], answer: 0, explain: 'happy 快乐的 → happiness 快乐（名词）。', tag: '单词' },
    { id: 'wl9-4', type: 'judge', q: '"wish" 是"洗"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'wish 是祝愿，wash 才是洗。', tag: '单词' },
    { id: 'wl9-5', type: 'choice', q: '给同学的毕业赠言，可以写：', options: ['Best wishes to you!', 'Go away!', 'You are bad.', 'Never see you!'], answer: 0, explain: '毕业时写下 Best wishes，把祝福留给朋友。', tag: '礼仪' },
    { id: 'wl9-6', type: 'choice', q: '"good luck" 的意思是：', options: ['好运', '再见', '加油学习', '不要紧'], answer: 0, explain: 'Good luck! 祝你好运！考试、比赛前都能说。', tag: '祝福语' },
    { id: 'wl9-7', type: 'judge', q: '分别时送上真诚的祝福，是友谊的体现。', options: ['√ 对', '✗ 错'], answer: 0, explain: '一句祝福，一份心意，友谊地久天长！', tag: '礼仪' },
    { id: 'wl9-8', type: 'choice', q: '"forever" 的意思是：', options: ['永远', '从来不', '向前', '为了'], answer: 0, explain: 'Friends forever! 永远是朋友！', tag: '单词' },
    { id: 'wl9-9', type: 'choice', q: '"Remember" 的意思是：', options: ['记得；记住', '重复', '归还', '提醒'], answer: 0, explain: 'Remember me! 记得我哦！留言册上常见。', tag: '单词' },
    { id: 'wl9-10', type: 'judge', q: '毕业时给同学写祝福留言，能留下美好的纪念。', options: ['√ 对', '✗ 错'], answer: 0, explain: '写下一句 Best wishes，多年后再翻看，满满都是回忆！', tag: '习惯养成' },
  ],
  wl10: [
    { id: 'wl10-1', type: 'choice', q: '"We\'re going to different schools." 的意思是：', options: ['我们将去不同的学校。', '我们喜欢不同学校。', '我们在不同学校。', '我们参观了学校。'], answer: 0, explain: "be going to 将要，different 不同的。", tag: '句型' },
    { id: 'wl10-2', type: 'choice', q: '"different" 的意思是：', options: ['不同的', '困难的', '重要的', '相同的'], answer: 0, explain: 'different 不同 ↔ same 相同。', tag: '单词' },
    { id: 'wl10-3', type: 'choice', q: '"I\'m going to Lake Middle School." 的意思是：', options: ['我将去湖畔中学。', '我在湖边学校。', '我喜欢中学。', '我路过中学。'], answer: 0, explain: 'be going to + 学校，表示将要去哪里上学。', tag: '句型' },
    { id: 'wl10-4', type: 'choice', q: '"middle school" 指的是：', options: ['中学', '小学', '大学', '幼儿园'], answer: 0, explain: 'middle school 中学，primary school 小学。', tag: '单词' },
    { id: 'wl10-5', type: 'judge', q: '"primary school" 是"中学"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'primary school 是小学，middle school 才是中学。', tag: '单词' },
    { id: 'wl10-6', type: 'choice', q: '"same"（相同的）的反义词是：', options: ['different', 'difficult', 'delicious', 'dangerous'], answer: 0, explain: 'same 相同 ↔ different 不同。', tag: '单词' },
    { id: 'wl10-7', type: 'choice', q: '"study" 的意思是：', options: ['学习', '学生', '老师', '学校'], answer: 0, explain: 'study 学习（动词），student 学生。', tag: '单词' },
    { id: 'wl10-8', type: 'judge', q: '"be going to" 可以表示计划好的将来安排。', options: ['√ 对', '✗ 错'], answer: 0, explain: "I'm going to a new school. 计划好的事就这么说。", tag: '语法' },
    { id: 'wl10-9', type: 'choice', q: '毕业后想和好朋友保持联系，可以说：', options: ['Keep in touch!', 'Goodbye forever!', 'Never mind.', 'See you never.'], answer: 0, explain: 'Keep in touch! 保持联系！友谊不因分别而淡。', tag: '句型' },
    { id: 'wl10-10', type: 'judge', q: '进入新学校要主动认识新朋友、适应新环境。', options: ['√ 对', '✗ 错'], answer: 0, explain: '新学校新起点，大方自信交朋友，中学生活更精彩！', tag: '习惯养成' },
  ],
}
