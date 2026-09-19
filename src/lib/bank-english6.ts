// 沪教版（五四学制）英语 六年级上册（2024 新教材·上海教育出版社·预备年级）随堂知识点题库
// 教材：义务教育教科书（五·四学制）英语 六年级上册 · 上海教育出版社（国家教材委员会 2024 审核通过）
// 目录（沪学习官方 App 目录 + 菁优网/21 世纪教育网同步资源全书核对）：
//   Starter: 1 Meet our new friends / 2 Open the schoolbag / 3 Plan my time / 4 Yes, I'm ready!
//   Unit 1 School life（A School subjects / C A school day / D My school life）
//   Unit 2 Family ties（A Family relations / C Family duties / D Family time）
//   Unit 3 Food（A Food groups / B Healthy food choices）
//   Unit 4 Sports（A Sports activities / E Sports for us·Project）
//   Unit 5 Animals and us（A Amazing animals / B Getting along with animals / C A day on the farm）
//   Unit 6 Travelling around China
// 每单元一关，每关 10 题，共 7 关 70 题，题目 id 前缀 k

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
    id: 'kst',
    name: 'Starter',
    title: '开学衔接站',
    emoji: '🎒',
    color: 'amber',
    lessons: ['Meet our new friends', 'Open the schoolbag', 'Plan my time', "Yes, I'm ready!"],
    intro: '认识新朋友、整理小书包、规划新学期，大声说：Yes, I\'m ready!',
  },
  {
    id: 'k1',
    name: 'Unit 1',
    title: 'School life',
    emoji: '🏫',
    color: 'orange',
    lessons: ['School subjects', 'A school day', 'My school life'],
    intro: '科目表、上课铃、图书馆……说说我的校园生活！',
  },
  {
    id: 'k2',
    name: 'Unit 2',
    title: 'Family ties',
    emoji: '👨‍👩‍👧',
    color: 'rose',
    lessons: ['Family relations', 'Family duties', 'Family time'],
    intro: '家人称呼、家庭小责任、亲子时光，家庭纽带暖洋洋！',
  },
  {
    id: 'k3',
    name: 'Unit 3',
    title: 'Food',
    emoji: '🥗',
    color: 'red',
    lessons: ['Food groups', 'Healthy food choices'],
    intro: '食物分分类，学会健康选择，做个不挑食的小吃货！',
  },
  {
    id: 'k4',
    name: 'Unit 4',
    title: 'Sports',
    emoji: '⚽',
    color: 'lime',
    lessons: ['Sports activities', 'Sports for us'],
    intro: '跑步、跳绳、打球，运动使我最快乐！',
  },
  {
    id: 'k5',
    name: 'Unit 5',
    title: 'Animals and us',
    emoji: '🐼',
    color: 'teal',
    lessons: ['Amazing animals', 'Getting along with animals', 'A day on the farm'],
    intro: '神奇动物大集合，和动物做朋友，保护它们我行动！',
  },
  {
    id: 'k6',
    name: 'Unit 6',
    title: 'Travelling around China',
    emoji: '🚄',
    color: 'cyan',
    lessons: ['Travelling around China', 'Our travel plan'],
    intro: '坐上高铁去旅行，长城西湖兵马俑，走遍大中国！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  kst: [
    { id: 'kst-1', type: 'choice', q: '开学第一天认识新朋友，说"很高兴见到你"用英语：', options: ['Nice to meet you!', 'Good night!', 'See you tomorrow!', 'How old are you?'], answer: 0, explain: '初次见面说 Nice to meet you!，对方会回答 Nice to meet you, too!。', tag: '打招呼' },
    { id: 'kst-2', type: 'choice', q: '"My name is Li Ming." 的意思是：', options: ['我叫李明。', '我喜欢李明。', '这是李明。', '再见，李明。'], answer: 0, explain: '介绍自己的名字用 My name is... 或者 I am...。', tag: '自我介绍' },
    { id: 'kst-3', type: 'judge', q: '"What\'s your name?" 是在问对方的年龄。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'What\'s your name? 问的是名字；问年龄用 How old are you?。', tag: '句型' },
    { id: 'kst-4', type: 'choice', q: '"schoolbag" 指的是：', options: ['书包', '铅笔盒', '课本', '尺子'], answer: 0, explain: 'school 学校 + bag 包 = schoolbag 书包，开学必备！', tag: '文具词汇' },
    { id: 'kst-5', type: 'choice', q: '装铅笔、橡皮的"铅笔盒"是：', options: ['pencil case', 'schoolbag', 'textbook', 'notebook'], answer: 0, explain: 'pencil 铅笔 + case 盒子 = pencil case 铅笔盒。', tag: '文具词汇' },
    { id: 'kst-6', type: 'judge', q: '"Open the schoolbag." 意思是"打开书包"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'open 打开，open the schoolbag 打开书包；关上用 close。', tag: '动词短语' },
    { id: 'kst-7', type: 'choice', q: '"Monday" 是一周里的：', options: ['星期一', '星期日', '星期五', '星期三'], answer: 0, explain: 'Monday 星期一，是上学周的第一天，一周七天要按顺序背熟哦。', tag: '时间词汇' },
    { id: 'kst-8', type: 'choice', q: '"Plan my time" 的意思是：', options: ['规划我的时间', '忘记时间', '浪费时间', '没有时间'], answer: 0, explain: 'plan 计划，plan my time 规划时间，新学期做个有时间观念的小学生。', tag: '动词短语' },
    { id: 'kst-9', type: 'choice', q: '想知道现在几点了，应该问：', options: ['What time is it?', 'What day is it today?', 'Where are you from?', 'How are you?'], answer: 0, explain: 'What time is it? 几点了？回答如 It\'s seven o\'clock.。', tag: '句型' },
    { id: 'kst-10', type: 'judge', q: '开学前自己整理书包、备齐文具，是个好习惯。', options: ['√ 对', '✗ 错'], answer: 0, explain: '自己动手准备学习用品，新学期做有准备的小主人！', tag: '习惯养成' },
  ],
  k1: [
    { id: 'k1-1', type: 'choice', q: '"Chinese, maths, English, PE" 都是：', options: ['学校科目', '颜色名称', '动物名称', '家庭成员'], answer: 0, explain: '语文、数学、英语、体育都是 subjects 科目，课程表上常见哦。', tag: '学校词汇' },
    { id: 'k1-2', type: 'choice', q: '体育课的英文缩写是：', options: ['PE', 'PM', 'IT', 'CD'], answer: 0, explain: 'PE = Physical Education 体育课，是 Physical 与 Education 的缩写。', tag: '学校词汇' },
    { id: 'k1-3', type: 'choice', q: '在图书馆里我们应该：', options: ['保持安静 quiet', '大声唱歌', '到处奔跑', '吃零食'], answer: 0, explain: '图书馆要保持安静：Be quiet in the library.。', tag: '校园规则' },
    { id: 'k1-4', type: 'choice', q: '"We have four lessons in the morning." 的意思是：', options: ['我们上午有四节课。', '我们早上四点起床。', '我们有四个班级。', '我们上午上四天学。'], answer: 0, explain: 'lesson 节、课；have four lessons 上四节课，in the morning 在上午。', tag: '句型' },
    { id: 'k1-5', type: 'choice', q: '频度副词 "always" 表示：', options: ['总是', '从不', '有时', '很少'], answer: 0, explain: '频度从大到小：always 总是 > usually 通常 > often 经常 > sometimes 有时 > never 从不。', tag: '频度副词' },
    { id: 'k1-6', type: 'judge', q: '"A school day" 的意思是"上学的日子"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'school day 上学日，指的是周一到周五上学的日子。', tag: '短语理解' },
    { id: 'k1-7', type: 'choice', q: 'She ___ to school at seven every day.（三单形式）', options: ['goes', 'go', 'going', 'to go'], answer: 0, explain: '一般现在时里，主语是第三人称单数 she，动词 go 要变成 goes。', tag: '一般现在时' },
    { id: 'k1-8', type: 'choice', q: '"I never get up late on school days." 中 never 的意思是：', options: ['从不', '总是', '经常', '通常'], answer: 0, explain: 'never 从不，全句意思是：上学日我从不睡懒觉。', tag: '频度副词' },
    { id: 'k1-9', type: 'choice', q: '询问对方最喜欢哪个科目，应该问：', options: ['What\'s your favourite subject?', 'What\'s your name?', 'How do you go to school?', 'Where is your school?'], answer: 0, explain: 'favourite subject 最喜欢的科目，问喜好用 What\'s your favourite...?。', tag: '句型' },
    { id: 'k1-10', type: 'judge', q: '按时到校、认真听讲、遵守课堂纪律是校园好习惯。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Come to school on time. 按时到校，做遵守规则的好学生。', tag: '习惯养成' },
  ],
  k2: [
    { id: 'k2-1', type: 'choice', q: 'father 和 mother 合起来称为：', options: ['parents', 'grandparents', 'cousins', 'friends'], answer: 0, explain: 'parents 父母 = father + mother；grandparents 是祖父母、外祖父母。', tag: '家庭词汇' },
    { id: 'k2-2', type: 'choice', q: '"grandfather" 指的是：', options: ['爷爷或外公', '奶奶或外婆', '叔叔', '哥哥'], answer: 0, explain: 'grandfather 爷爷/外公，grandmother 奶奶/外婆，统称 grandparents。', tag: '家庭词汇' },
    { id: 'k2-3', type: 'choice', q: '姑姑、阿姨、舅妈都可以统称为：', options: ['aunt', 'uncle', 'cousin', 'sister'], answer: 0, explain: 'aunt 是对女性长辈的统称；uncle 是叔叔、舅舅、姨父等男性长辈。', tag: '家庭词汇' },
    { id: 'k2-4', type: 'choice', q: '表哥、表妹、堂弟这类同辈亲戚是：', options: ['cousin', 'aunt', 'parent', 'brother'], answer: 0, explain: 'cousin 表（堂）兄弟姐妹，男孩女孩都可以用这个词。', tag: '家庭词汇' },
    { id: 'k2-5', type: 'judge', q: '"This is a photo of my family." 意思是"这是一张我的全家福"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'a photo of my family 我的全家福，介绍家人常用这张照片。', tag: '句型' },
    { id: 'k2-6', type: 'choice', q: '"Family duties" 指家庭里的小责任，比如：', options: ['do the dishes 洗碗', 'play games 打游戏', 'watch TV 看电视', 'go shopping 逛街'], answer: 0, explain: 'duty 责任，do the dishes 洗碗、sweep the floor 扫地都是帮家里分担的家务。', tag: '家庭责任' },
    { id: 'k2-7', type: 'choice', q: '"water the plants" 的意思是：', options: ['给植物浇水', '喝水', '玩水', '搬植物'], answer: 0, explain: 'water 在这里作动词"浇水"，water the plants 给花花草草浇水。', tag: '动词短语' },
    { id: 'k2-8', type: 'choice', q: '"tidy up the room" 意思是：', options: ['整理房间', '打扫厕所', '装饰房间', '离开房间'], answer: 0, explain: 'tidy up 收拾、整理，自己的房间自己整理。', tag: '动词短语' },
    { id: 'k2-9', type: 'choice', q: 'I → my，she → her，they → ___（形容词性物主代词）', options: ['their', 'them', 'theirs', 'they'], answer: 0, explain: 'they 的形容词性物主代词是 their（他们的），后面要跟名词，如 their home。', tag: '代词' },
    { id: 'k2-10', type: 'judge', q: '主动帮爸妈做力所能及的家务，是爱家庭的表现。', options: ['√ 对', '✗ 错'], answer: 0, explain: '帮着洗碗、浇花、倒垃圾，家人一起分担，家里更温暖！', tag: '品德养成' },
  ],
  k3: [
    { id: 'k3-1', type: 'choice', q: '"vegetables" 指的是：', options: ['蔬菜', '水果', '肉类', '饮料'], answer: 0, explain: 'vegetables 蔬菜，如 carrot 胡萝卜、cabbage 卷心菜，每天都要吃。', tag: '食物词汇' },
    { id: 'k3-2', type: 'choice', q: '"Healthy food choices" 中 healthy 的意思是：', options: ['健康的', '昂贵的', '美味的', '方便的'], answer: 0, explain: 'healthy 健康的，healthy food 健康食物，选择食物要看健不健康。', tag: '健康饮食' },
    { id: 'k3-3', type: 'choice', q: '一天中的第一餐"早餐"是：', options: ['breakfast', 'lunch', 'dinner', 'supper'], answer: 0, explain: 'breakfast 早餐，lunch 午餐，dinner 晚餐，三餐要按时吃。', tag: '食物词汇' },
    { id: 'k3-4', type: 'choice', q: '"Would you like some rice?" 想要时的肯定回答是：', options: ['Yes, please.', 'No, thanks.', 'I don\'t know.', 'You\'re welcome.'], answer: 0, explain: '想要就礼貌地说 Yes, please.；不想要说 No, thanks.。', tag: '句型' },
    { id: 'k3-5', type: 'judge', q: '"rice"（米饭）是不可数名词，没有复数形式。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'rice、water、milk 都是不可数名词，不能加 s，可以说 some rice。', tag: '语法' },
    { id: 'k3-6', type: 'choice', q: 'Are there ___ eggs in the fridge?（填合适的词）', options: ['any', 'some', 'much', 'a'], answer: 0, explain: '疑问句和否定句里常用 any；some 多用于肯定句。', tag: '语法' },
    { id: 'k3-7', type: 'choice', q: '"milk" 属于哪一类？', options: ['奶制品饮品', '蔬菜', '肉类', '主食'], answer: 0, explain: 'milk 牛奶，属于奶制品，富含钙质，帮助长高高。', tag: '食物分类' },
    { id: 'k3-8', type: 'choice', q: '"I\'d like some noodles." 的意思是：', options: ['我想要一些面条。', '我不喜欢面条。', '这是面条。', '面条卖完了。'], answer: 0, explain: 'I\'d like = I would like，礼貌地表达"我想要……"。', tag: '句型' },
    { id: 'k3-9', type: 'choice', q: '下面哪种饮食习惯更健康？', options: ['三餐规律，多吃蔬菜水果', '天天喝碳酸饮料', '不吃早餐', '只吃肉不吃菜'], answer: 0, explain: '三餐规律、荤素搭配、少喝甜饮料，身体才会棒棒的。', tag: '健康饮食' },
    { id: 'k3-10', type: 'judge', q: '挑食、暴饮暴食都是不好的饮食习惯。', options: ['√ 对', '✗ 错'], answer: 0, explain: '不挑食、不暴食，营养均衡才能长得好、学得好！', tag: '习惯养成' },
  ],
  k4: [
    { id: 'k4-1', type: 'choice', q: '"basketball" 指的是：', options: ['篮球', '排球', '足球', '网球'], answer: 0, explain: 'basket 篮 + ball 球 = basketball 篮球；volleyball 排球，football 足球。', tag: '运动词汇' },
    { id: 'k4-2', type: 'choice', q: '"play football" 的意思是：', options: ['踢足球', '打篮球', '打排球', '看比赛'], answer: 0, explain: 'play + 球类运动：play football 踢足球，play basketball 打篮球（球类前不加 the）。', tag: '动词搭配' },
    { id: 'k4-3', type: 'choice', q: '"go swimming" 的意思是：', options: ['去游泳', '游泳馆', '教游泳', '看游泳'], answer: 0, explain: 'go + 动词-ing 表示去做某项活动：go swimming 去游泳，go running 去跑步。', tag: '动词搭配' },
    { id: 'k4-4', type: 'choice', q: '"skip" 或 "jump rope" 指的运动是：', options: ['跳绳', '跳高', '跳远', '滑冰'], answer: 0, explain: 'skip / jump rope 跳绳，是课间最受欢迎的运动之一。', tag: '运动词汇' },
    { id: 'k4-5', type: 'judge', q: '"Sports activities" 的意思是"体育活动"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'sports 体育 + activities 活动，学校里的 sports activities 可多啦。', tag: '短语理解' },
    { id: 'k4-6', type: 'choice', q: '学校一年一度的"运动会"是：', options: ['sports day', 'school day', 'birthday', 'May Day'], answer: 0, explain: 'sports day / sports meeting 运动会，那天大家都会参加各种比赛。', tag: '运动词汇' },
    { id: 'k4-7', type: 'choice', q: 'He ___ football every weekend.（三单形式）', options: ['plays', 'play', 'playing', 'to play'], answer: 0, explain: '主语 he 是第三人称单数，play 变成 plays，表示经常性动作。', tag: '一般现在时' },
    { id: 'k4-8', type: 'choice', q: '"usually" 的意思是：', options: ['通常', '总是', '从不', '有时'], answer: 0, explain: 'usually 通常，频度仅次于 always 总是，高于 often 经常。', tag: '频度副词' },
    { id: 'k4-9', type: 'choice', q: '本单元的 Project 项目任务是：', options: ['Sports for us', 'Food for us', 'Animals for us', 'School for us'], answer: 0, explain: 'E 部分 Sports for us（Project）让大家一起设计班级运动活动。', tag: '单元结构' },
    { id: 'k4-10', type: 'judge', q: '坚持每天锻炼，运动前要做热身，运动后要放松。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'warm up 热身能防受伤，天天锻炼一小时，健康生活一辈子！', tag: '健康习惯' },
  ],
  k5: [
    { id: 'k5-1', type: 'choice', q: '"dolphin" 指的是：', options: ['海豚', '鲨鱼', '鲸鱼', '海豹'], answer: 0, explain: 'dolphin 海豚，聪明又友善，还会跃出水面玩耍呢。', tag: '动物词汇' },
    { id: 'k5-2', type: 'choice', q: '"Amazing animals" 中 amazing 的意思是：', options: ['神奇的、令人惊叹的', '可怕的', '可爱的', '巨大的'], answer: 0, explain: 'amazing 令人惊叹的，动物世界里有很多 amazing animals。', tag: '形容词' },
    { id: 'k5-3', type: 'choice', q: '下面哪种动物会飞？', options: ['eagle 老鹰', 'panda 熊猫', 'dolphin 海豚', 'rabbit 兔子'], answer: 0, explain: 'eagle 老鹰飞得又高又稳；熊猫、海豚、兔子都不会飞。', tag: '动物能力' },
    { id: 'k5-4', type: 'choice', q: '被称为中国"国宝"的动物是：', options: ['panda 熊猫', 'tiger 老虎', 'monkey 猴子', 'elephant 大象'], answer: 0, explain: 'panda 熊猫是中国的国宝，也是世界的珍稀动物。', tag: '动物文化' },
    { id: 'k5-5', type: 'judge', q: '"Getting along with animals" 的意思是"与动物相处"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'get along with... 与……相处融洽，我们要友善地对待动物。', tag: '短语理解' },
    { id: 'k5-6', type: 'choice', q: '"A day on the farm" 的意思是：', options: ['农场的一天', '公园的一天', '海边的一天', '学校的一天'], answer: 0, explain: 'farm 农场，在农场可以看到 cows 奶牛、sheep 绵羊、hens 母鸡。', tag: '短语理解' },
    { id: 'k5-7', type: 'choice', q: '"protect animals" 的意思是：', options: ['保护动物', '训练动物', '投喂动物', '捕捉动物'], answer: 0, explain: 'protect 保护， protect animals 保护动物，人人有责。', tag: '动物保护' },
    { id: 'k5-8', type: 'choice', q: '"endangered animals" 指的是：', options: ['濒危动物', '农场动物', '宠物', '童话动物'], answer: 0, explain: 'endangered 濒危的，很多野生动物正濒临灭绝，需要我们伸出援手。', tag: '动物保护' },
    { id: 'k5-9', type: 'choice', q: 'one monkey → two ___（复数）', options: ['monkeys', 'monkeyes', 'monkeies', 'monkey'], answer: 0, explain: 'monkey 的 y 前发元音 /ɪ/，直接加 s：monkeys。类似还有 boys、toys。', tag: '名词复数' },
    { id: 'k5-10', type: 'judge', q: '在动物园要爱护动物，不随便投喂、不拍打玻璃惊吓它们。', options: ['√ 对', '✗ 错'], answer: 0, explain: '文明游园，安静观赏，动物也有自己的生活习惯，要尊重它们。', tag: '品德养成' },
  ],
  k6: [
    { id: 'k6-1', type: 'choice', q: '"Travelling around China" 的意思是：', options: ['环游中国', '周游世界', '环游上海', '出国旅行'], answer: 0, explain: 'travel 旅行，travelling around China 环游中国，本单元一起去看看大好河山！', tag: '短语理解' },
    { id: 'k6-2', type: 'choice', q: '"the Great Wall"（长城）主要在哪个城市附近？', options: ['北京 Beijing', '上海 Shanghai', '广州 Guangzhou', '哈尔滨 Harbin'], answer: 0, explain: 'the Great Wall 长城，主要位于北京周边，是中国的象征之一。', tag: '名胜古迹' },
    { id: 'k6-3', type: 'choice', q: '"high-speed train" 指的是：', options: ['高铁', '地铁', '公交车', '轮船'], answer: 0, explain: 'high-speed 高速度的，high-speed train 高铁，又快又稳的中国名片！', tag: '交通词汇' },
    { id: 'k6-4', type: 'choice', q: '"I go to Beijing by plane." 中 by plane 的意思是：', options: ['坐飞机', '坐火车', '坐公交', '步行'], answer: 0, explain: 'by + 交通工具 表示出行方式：by plane 坐飞机、by train 坐火车、by bus 坐公交。', tag: '交通方式' },
    { id: 'k6-5', type: 'choice', q: '"West Lake"（西湖）在哪个城市？', options: ['杭州 Hangzhou', '西安 Xi\'an', '南京 Nanjing', '成都 Chengdu'], answer: 0, explain: 'West Lake 西湖位于杭州，"上有天堂，下有苏杭"！', tag: '名胜古迹' },
    { id: 'k6-6', type: 'judge', q: '"Where are you going?" 是在问"你要去哪里？"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'where 哪里，be going to 表示计划打算，Where are you going? 你要去哪儿？', tag: '句型' },
    { id: 'k6-7', type: 'choice', q: '秦始皇兵马俑所在的著名古都是：', options: ['西安 Xi\'an', '杭州 Hangzhou', '重庆 Chongqing', '武汉 Wuhan'], answer: 0, explain: '西安是千年古都，the Terracotta Warriors 兵马俑世界闻名。', tag: '名胜古迹' },
    { id: 'k6-8', type: 'choice', q: '制定 "travel plan"（旅行计划）时，首先要确定：', options: ['时间和地点', '零食和玩具', '游戏和动画', '衣服颜色'], answer: 0, explain: '先定出发时间、目的地和交通方式，再列清单，做计划小达人。', tag: '旅行规划' },
    { id: 'k6-9', type: 'choice', q: '___ do you go to Shanghai? — By train.', options: ['How', 'What', 'Where', 'When'], answer: 0, explain: '问出行方式用 How：How do you go to...? 回答用 By + 交通工具。', tag: '疑问词' },
    { id: 'k6-10', type: 'judge', q: '旅行时要遵守景区规则、不乱扔垃圾，做文明游客。', options: ['√ 对', '✗ 错'], answer: 0, explain: '垃圾入箱、排队守序、爱护文物，文明旅行风景才更美！', tag: '品德养成' },
  ],
}
