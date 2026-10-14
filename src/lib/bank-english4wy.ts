// 外研版新标准英语（一年级起点）四年级上册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）四年级上册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq4s 核对）：
//   M1 It was my birthday on Saturday./I've got a new friend. · M2 I helped my mum./Amy painted a picture.
//   M3 She didn't walk to school yesterday./I didn't play football. · M4 Chinese people invented paper./He invented this bicycle.
//   M5 We went to the Great Wall./I wore warm clothes. · M6 It didn't become gold./He didn't come back.
//   M7 Did you take Amy's doll?/Did you see it? · M8 When did they come?/Where did you go yesterday?
//   M9 What happened to your head?/I bumped my head. · M10 Go to bed early./Eat vegetables every day.
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wd

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
    id: 'wd1',
    name: 'Module 1',
    title: 'It was my birthday on Saturday.',
    emoji: '🎁',
    color: 'amber',
    lessons: ['It was my birthday.', "I've got a new friend.", 'was 的用法'],
    intro: '周六过生日、结识新朋友，was 是 is 的过去身！',
  },
  {
    id: 'wd2',
    name: 'Module 2',
    title: 'I helped my mum.',
    emoji: '🧹',
    color: 'orange',
    lessons: ['I helped my mum.', 'Amy painted a picture.', '动词过去式（规则）'],
    intro: '帮忙做家务、画一幅画，动词加 ed 说过去！',
  },
  {
    id: 'wd3',
    name: 'Module 3',
    title: "She didn't walk to school yesterday.",
    emoji: '🚸',
    color: 'rose',
    lessons: ["She didn't walk.", "I didn't play football.", "didn't 否定"],
    intro: 'didn\'t + 动词原形，昨天的事说否定！',
  },
  {
    id: 'wd4',
    name: 'Module 4',
    title: 'Chinese people invented paper.',
    emoji: '📜',
    color: 'lime',
    lessons: ['Chinese people invented paper.', 'He invented this bicycle.', '伟大发明'],
    intro: '造纸术、自行车，invented 讲述伟大发明！',
  },
  {
    id: 'wd5',
    name: 'Module 5',
    title: 'We went to the Great Wall.',
    emoji: '🏯',
    color: 'teal',
    lessons: ['We went to the Great Wall.', 'I wore warm clothes.', '不规则过去式'],
    intro: '爬长城、穿暖衣，went wore 变形记！',
  },
  {
    id: 'wd6',
    name: 'Module 6',
    title: "It didn't become gold.",
    emoji: '🪙',
    color: 'sky',
    lessons: ["It didn't become gold.", "He didn't come back.", '不规则否定'],
    intro: "didn't + come/become，否定也要用原形！",
  },
  {
    id: 'wd7',
    name: 'Module 7',
    title: "Did you take Amy's doll?",
    emoji: '🎎',
    color: 'violet',
    lessons: ["Did you take Amy's doll?", 'Did you see it?', 'Did 疑问句'],
    intro: 'Did you...? 开口问，过去的事问明白！',
  },
  {
    id: 'wd8',
    name: 'Module 8',
    title: 'When did they come?',
    emoji: '🕰️',
    color: 'pink',
    lessons: ['When did they come?', 'Where did you go yesterday?', '特殊疑问'],
    intro: 'When 何时 Where 何地，did 疑问句来帮忙！',
  },
  {
    id: 'wd9',
    name: 'Module 9',
    title: 'What happened to your head?',
    emoji: '🤕',
    color: 'indigo',
    lessons: ['What happened to your head?', 'I bumped my head.', '意外受伤'],
    intro: '磕了碰了别慌张，关心询问用英语！',
  },
  {
    id: 'wd10',
    name: 'Module 10',
    title: 'Go to bed early.',
    emoji: '🥦',
    color: 'emerald',
    lessons: ['Go to bed early.', 'Eat vegetables every day.', '健康建议'],
    intro: '早睡早起多吃菜，祈使句送健康小贴士！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wd1: [
    { id: 'wd1-1', type: 'choice', q: '"It was my birthday on Saturday." 的意思是：', options: ['周六是我的生日。', '我现在过生日。', '我将要过生日。', '我的生日礼物到了。'], answer: 0, explain: 'was 是 is/am 的过去式：周六那天是我的生日（已经过去）。', tag: '一般过去' },
    { id: 'wd1-2', type: 'choice', q: '"was" 是哪个词的过去式？', options: ['is / am', 'are', 'do', 'go'], answer: 0, explain: 'is 和 am 的过去式是 was；are 的过去式是 were。', tag: '一般过去' },
    { id: 'wd1-3', type: 'choice', q: '"I\'ve got a new friend." 的意思是：', options: ['我交了一个新朋友。', '我朋友是新来的。', '我想要新朋友。', '我朋友来了。'], answer: 0, explain: "I've got = I have got 有：我有了个新朋友。", tag: '句型' },
    { id: 'wd1-4', type: 'choice', q: '昨天的事用英语说时，动词要变成：', options: ['过去式', '现在分词', '原形', '复数'], answer: 0, explain: '说过去发生的事，动词用过去式：was、helped、went 等。', tag: '一般过去' },
    { id: 'wd1-5', type: 'judge', q: '"She was at home yesterday." 意思是"她昨天在家"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'was 过去式，yesterday 昨天：她昨天在家。', tag: '一般过去' },
    { id: 'wd1-6', type: 'choice', q: '"birthday" 指的是：', options: ['生日', '节日', '聚会', '礼物'], answer: 0, explain: 'birthday 生日，birthday cake 生日蛋糕，birthday present 生日礼物。', tag: '单词' },
    { id: 'wd1-7', type: 'choice', q: '"on Saturday" 的意思是：', options: ['在周六', '在周六之后', '每个周六早上', '周六的晚上'], answer: 0, explain: 'on + 星期：on Saturday 在周六。', tag: '时间' },
    { id: 'wd1-8', type: 'choice', q: '介绍新朋友认识，应该说：', options: ['This is my new friend.', 'I have new friend.', 'He is new friend.', 'You are my friend.'], answer: 0, explain: '介绍别人用 This is...：This is my new friend.。', tag: '句型' },
    { id: 'wd1-9', type: 'judge', q: '主动和新同学打招呼、交朋友，是友善的表现。', options: ['√ 对', '✗ 错'], answer: 0, explain: '主动友好地介绍自己，你会收获更多朋友！', tag: '习惯养成' },
    { id: 'wd1-10', type: 'choice', q: '"They were happy yesterday." 中 were 是：', options: ['are 的过去式', 'is 的过去式', 'am 的过去式', 'be 的原形'], answer: 0, explain: 'are 的过去式是 were：他们昨天很开心。', tag: '一般过去' },
  ],
  wd2: [
    { id: 'wd2-1', type: 'choice', q: '"I helped my mum." 的意思是：', options: ['我帮助了妈妈。', '我正在帮妈妈。', '我要帮妈妈。', '我妈妈帮我。'], answer: 0, explain: 'help 变 helped（+ed）表示过去：我帮助了妈妈。', tag: '一般过去' },
    { id: 'wd2-2', type: 'choice', q: '"Amy painted a picture." 中 painted 是：', options: ['paint 的过去式', 'paint 的现在分词', 'paint 的原形', 'paint 的三单'], answer: 0, explain: 'paint 画画，+ed 变 painted：艾米画了一幅画。', tag: '一般过去' },
    { id: 'wd2-3', type: 'choice', q: '规则动词变过去式，一般在词尾加：', options: ['ed', 'ing', 's', 'er'], answer: 0, explain: '规则动词 + ed：help→helped，play→played，paint→painted。', tag: '语法' },
    { id: 'wd2-4', type: 'choice', q: '"watch" 的过去式是：', options: ['watched', 'watching', 'watches', 'watch'], answer: 0, explain: 'watch + ed = watched：昨天我看电视说 I watched TV.。', tag: '语法' },
    { id: 'wd2-5', type: 'judge', q: '"She played football yesterday." 意思是"她昨天踢足球了"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'played 过去式 + yesterday 昨天：她昨天踢球了。', tag: '一般过去' },
    { id: 'wd2-6', type: 'choice', q: '"clean the room" 的意思是：', options: ['打扫房间', '整理书包', '洗衣服', '做午饭'], answer: 0, explain: 'clean 打扫，I cleaned my room. 我打扫了房间。', tag: '短语' },
    { id: 'wd2-7', type: 'choice', q: '"昨天我帮助了妈妈"应该说：', options: ['I helped my mum yesterday.', 'I help my mum yesterday.', 'I helping my mum yesterday.', 'I helps my mum yesterday.'], answer: 0, explain: 'yesterday 提示过去：动词用 helped。', tag: '一般过去' },
    { id: 'wd2-8', type: 'choice', q: '"cook dinner" 的意思是：', options: ['做晚饭', '做饭盒', '买晚饭', '等晚饭'], answer: 0, explain: 'cook 烹饪，dinner 晚餐，cook dinner 做晚饭。', tag: '短语' },
    { id: 'wd2-9', type: 'judge', q: '在家主动帮忙做家务是爱父母、爱劳动的表现。', options: ['√ 对', '✗ 错'], answer: 0, explain: '扫扫地、擦擦桌，做家务的孩子最棒！', tag: '习惯养成' },
    { id: 'wd2-10', type: 'choice', q: '"listen" 的过去式是：', options: ['listened', 'listenning', 'listened to', 'listen'], answer: 0, explain: 'listen + ed = listened：昨天我听音乐说 I listened to music.。', tag: '语法' },
  ],
  wd3: [
    { id: 'wd3-1', type: 'choice', q: '"She didn\'t walk to school yesterday." 的意思是：', options: ['她昨天没有走路去学校。', '她昨天走路去学校。', '她正在走路去学校。', '她想走路去学校。'], answer: 0, explain: "didn't = did not，过去式的否定：didn't + 动词原形。", tag: "一般过去" },
    { id: 'wd3-2', type: 'choice', q: '"I didn\'t play football." 中 play 用原形是因为：', options: ["didn't 后面接动词原形", 'play 是规则动词', 'play 是原形 am', '过去式否定加 ed'], answer: 0, explain: "didn't 已经表示过去，后面的动词用原形：didn't play。", tag: '语法' },
    { id: 'wd3-3', type: 'choice', q: '"did" 是哪个词的过去式？', options: ['do / does', 'done', 'doing', 'make'], answer: 0, explain: 'do/does 的过去式都是 did。', tag: '语法' },
    { id: 'wd3-4', type: 'choice', q: '"昨天我没去公园"应该说：', options: ["I didn't go to the park.", "I don't go to the park.", "I not go to the park.", "I didn't went to the park."], answer: 0, explain: "didn't + go（原形）：注意不能写 didn't went！", tag: '一般过去' },
    { id: 'wd3-5', type: 'judge', q: '"He didn\'t do his homework." 意思是"他没有做作业"。', options: ['√ 对', '✗ 错'], answer: 0, explain: "didn't do 没做：do 的过去式否定是 didn't do。", tag: '一般过去' },
    { id: 'wd3-6', type: 'choice', q: '"walk" 的意思是：', options: ['走路', '跑步', '骑车', '开车'], answer: 0, explain: 'walk 走路，walk to school 走路去学校。', tag: '动词' },
    { id: 'wd3-7', type: 'choice', q: '过去式否定句的正确结构是：', options: ['主语 + didn\'t + 动词原形', '主语 + didn\'t + 动词过去式', '主语 + not + 动词原形', '主语 + don\'t + 动词过去式'], answer: 0, explain: "didn't + 原形：She didn't walk. 不能说 She didn't walked.。", tag: '语法' },
    { id: 'wd3-8', type: 'choice', q: '"yesterday" 的意思是：', options: ['昨天', '今天', '明天', '上周'], answer: 0, explain: 'yesterday 昨天，today 今天，tomorrow 明天。', tag: '时间' },
    { id: 'wd3-9', type: 'judge', q: '"They didn\'t watched TV." 这句话是对的。', options: ['√ 对', '✗ 错'], answer: 1, explain: "错在 watched！didn't 后面必须用原形：They didn't watch TV.。", tag: '语法' },
    { id: 'wd3-10', type: 'choice', q: '"I didn\'t finish my homework." 的意思是：', options: ['我没有完成作业。', '我完成了作业。', '我不想写作业。', '我正在写作业。'], answer: 0, explain: "didn't finish 没完成。作业要按时完成哦！", tag: '一般过去' },
  ],
  wd4: [
    { id: 'wd4-1', type: 'choice', q: '"Chinese people invented paper." 的意思是：', options: ['中国人发明了纸。', '中国人发现了纸。', '中国人制造纸张。', '中国人喜欢纸。'], answer: 0, explain: 'invent 发明，invented 是它的过去式：造纸术是中国古代四大发明之一！', tag: '文化' },
    { id: 'wd4-2', type: 'choice', q: '"invent" 的意思是：', options: ['发明', '发现', '使用', '购买'], answer: 0, explain: 'invent 发明（创造出新东西），discover 发现（找到已有的）。', tag: '单词' },
    { id: 'wd4-3', type: 'choice', q: '"invent" 的过去式是：', options: ['invented', 'inventted', 'inventing', 'invents'], answer: 0, explain: 'invent + ed = invented，规则变化。', tag: '语法' },
    { id: 'wd4-4', type: 'choice', q: '中国古代四大发明不包括：', options: ['电话', '造纸术', '印刷术', '指南针'], answer: 0, explain: '四大发明：造纸术、印刷术、指南针、火药。电话是外国人发明的。', tag: '文化' },
    { id: 'wd4-5', type: 'judge', q: '"He invented this bicycle." 意思是"他发明了这辆自行车"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'invented 过去式：他（在过去）发明了这辆自行车。', tag: '一般过去' },
    { id: 'wd4-6', type: 'choice', q: '"paper" 指的是：', options: ['纸', '钢笔', '书本', '地图'], answer: 0, explain: 'paper 纸，a piece of paper 一张纸。', tag: '单词' },
    { id: 'wd4-7', type: 'choice', q: '"bicycle" 的同义词是：', options: ['bike', 'bus', 'car', 'train'], answer: 0, explain: 'bicycle = bike 自行车，bicycle 是正式说法。', tag: '单词' },
    { id: 'wd4-8', type: 'choice', q: '"Chinese people" 的意思是：', options: ['中国人民', '中国的语言', '中国的历史', '中国的地图'], answer: 0, explain: 'people 人民，Chinese people 中国人民。', tag: '单词' },
    { id: 'wd4-9', type: 'judge', q: '发明家们善于观察和思考，我们也应该多动脑筋。', options: ['√ 对', '✗ 错'], answer: 0, explain: '多观察、多思考、多提问，说不定未来的发明家就是你！', tag: '习惯养成' },
    { id: 'wd4-10', type: 'choice', q: '"print" 的意思是：', options: ['印刷', '发明', '造纸', '书写'], answer: 0, explain: 'print 印刷，printing 印刷术，也是中国四大发明之一。', tag: '文化' },
  ],
  wd5: [
    { id: 'wd5-1', type: 'choice', q: '"We went to the Great Wall." 的意思是：', options: ['我们去了长城。', '我们将去长城。', '我们在长城上。', '我们想去长城。'], answer: 0, explain: 'went 是 go 的过去式：我们（过去）去了长城。', tag: '一般过去' },
    { id: 'wd5-2', type: 'choice', q: '"go" 的过去式是：', options: ['went', 'goed', 'going', 'goes'], answer: 0, explain: 'go 的过去式是 went，是不规则变化，要单独记！', tag: '不规则过去式' },
    { id: 'wd5-3', type: 'choice', q: '"I wore warm clothes." 中 wore 是：', options: ['wear 的过去式', 'wear 的原形', 'wear 的现在分词', 'wear 的三单'], answer: 0, explain: 'wear 穿，wore 是过去式：我穿了暖和的衣服。', tag: '不规则过去式' },
    { id: 'wd5-4', type: 'choice', q: '"the Great Wall" 指的是：', options: ['长城', '大山', '大河', '公园'], answer: 0, explain: 'the Great Wall 长城，是中国的象征之一！', tag: '文化' },
    { id: 'wd5-5', type: 'judge', q: '"eat" 的过去式是 "eated"。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！eat 的过去式是 ate，不规则变化。', tag: '不规则过去式' },
    { id: 'wd5-6', type: 'choice', q: '"warm" 的意思是：', options: ['暖和的', '热的', '冷的', '凉的'], answer: 0, explain: 'warm 暖和的，hot 热的，cold 冷的。', tag: '形容词' },
    { id: 'wd5-7', type: 'choice', q: '爬长城时应该：', options: ['扶好栏杆慢慢走', '在城墙上奔跑', '攀爬护栏', '乱扔垃圾'], answer: 0, explain: '文明游览、注意安全：扶好栏杆，不奔跑不打闹！', tag: '安全教育' },
    { id: 'wd5-8', type: 'choice', q: '"看见了许多山"用过去式说：', options: ['I saw many mountains.', 'I see many mountains.', 'I seeing many mountains.', 'I sees many mountains.'], answer: 0, explain: 'see 的过去式是 saw：I saw many mountains.。', tag: '不规则过去式' },
    { id: 'wd5-9', type: 'judge', q: '"have" 的过去式是 "had"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'have/has 的过去式都是 had：昨天我吃了汉堡说 I had a hamburger.。', tag: '不规则过去式' },
    { id: 'wd5-10', type: 'choice', q: '"我昨天穿了新鞋"应该说：', options: ['I wore new shoes yesterday.', 'I wear new shoes yesterday.', 'I weared new shoes yesterday.', 'I wearing new shoes yesterday.'], answer: 0, explain: 'wear 过去式 wore：I wore new shoes yesterday.。', tag: '不规则过去式' },
  ],
  wd6: [
    { id: 'wd6-1', type: 'choice', q: '"It didn\'t become gold." 的意思是：', options: ['它没有变成金子。', '它变成了金子。', '它不是金子。', '它想变成金子。'], answer: 0, explain: "didn't + become（原形）：它没有变成金子。", tag: '一般过去' },
    { id: 'wd6-2', type: 'choice', q: '"become" 的过去式是：', options: ['became', 'becomed', 'becoming', 'becomes'], answer: 0, explain: 'become→became，不规则变化：变成。', tag: '不规则过去式' },
    { id: 'wd6-3', type: 'choice', q: '"He didn\'t come back." 的意思是：', options: ['他没有回来。', '他回来了。', '他不想回来。', '他正在回来。'], answer: 0, explain: "didn't + come（原形）：他没有回来。", tag: '一般过去' },
    { id: 'wd6-4', type: 'choice', q: '"come" 的过去式是：', options: ['came', 'comed', 'coming', 'comes'], answer: 0, explain: 'come→came，不规则变化：来。', tag: '不规则过去式' },
    { id: 'wd6-5', type: 'judge', q: '"gold" 的意思是"金子；金色的"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'gold 金子/金色，golden 金黄色的。', tag: '单词' },
    { id: 'wd6-6', type: 'choice', q: '"她昨天没来学校"应该说：', options: ["She didn't come to school.", "She doesn't come to school.", "She didn't came to school.", "She not come to school."], answer: 0, explain: "didn't + come：注意不用 didn't came！", tag: '语法' },
    { id: 'wd6-7', type: 'choice', q: '点石成金的童话里，点金术：', options: ['是神话故事，现实不存在', '是科学', '是一种魔法纸', '是一种运动'], answer: 0, explain: '点金术是神话传说，现实中不存在，好好学习科学知识吧！', tag: '文化' },
    { id: 'wd6-8', type: 'choice', q: '"back" 的意思是：', options: ['回来；向后', '背包', '背部疼痛', '后退跑'], answer: 0, explain: 'come back 回来，go back 回去，back 向后。', tag: '单词' },
    { id: 'wd6-9', type: 'judge', q: '"It became a bird." 意思是"它变成了一只鸟"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'became 过去式：它（过去）变成了鸟，常见于童话。', tag: '一般过去' },
    { id: 'wd6-10', type: 'choice', q: '过去式否定句 didn\'t 后面接：', options: ['动词原形', '动词过去式', '动词 ing', '动词三单'], answer: 0, explain: "didn't + 原形，规则适用于所有动词！", tag: '语法' },
  ],
  wd7: [
    { id: 'wd7-1', type: 'choice', q: '"Did you take Amy\'s doll?" 的意思是：', options: ['你拿了艾米的娃娃吗？', '你想买娃娃吗？', '你在玩娃娃吗？', '你看见娃娃了吗？'], answer: 0, explain: 'Did you + 动词原形？过去式疑问句。', tag: '一般过去' },
    { id: 'wd7-2', type: 'choice', q: '"Did you see it?" 的肯定回答是：', options: ['Yes, I did.', 'Yes, I saw.', 'Yes, I see.', 'Yes, I do.'], answer: 0, explain: 'Did 问 did 答：Yes, I did. / No, I didn\'t.。', tag: '一般过去' },
    { id: 'wd7-3', type: 'choice', q: '"take" 的过去式是：', options: ['took', 'taked', 'taking', 'takes'], answer: 0, explain: 'take→took，不规则变化：拿、带。', tag: '不规则过去式' },
    { id: 'wd7-4', type: 'choice', q: '"Did you..." 疑问句的构成是：', options: ['Did + 主语 + 动词原形', 'Did + 主语 + 动词过去式', 'Did + 主语 + 动词ing', 'Was + 主语 + 动词原形'], answer: 0, explain: 'Did 已经带过去含义，后面动词用原形。', tag: '语法' },
    { id: 'wd7-5', type: 'judge', q: '"Did you go to the zoo?" 意思是"你去动物园了吗？"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Did + you + go（原形）：问过去是否去过。', tag: '一般过去' },
    { id: 'wd7-6', type: 'choice', q: '"doll" 指的是：', options: ['玩具娃娃', '小球', '风筝', '积木'], answer: 0, explain: 'doll 玩具娃娃，toy 玩具，ball 球。', tag: '单词' },
    { id: 'wd7-7', type: 'choice', q: '不是自己拿的东西要：', options: ['先问过主人再拿', '悄悄拿走', '弄坏了再说', '藏起来'], answer: 0, explain: '别人的东西要先征得同意，未经允许不能拿！', tag: '习惯养成' },
    { id: 'wd7-8', type: 'choice', q: '"Did she wash her clothes?" 的否定回答：', options: ["No, she didn't.", "No, she didn't washed.", "No, she doesn't.", "No, she isn't."], answer: 0, explain: "Did 问句否定回答：No, she didn't.。", tag: '一般过去' },
    { id: 'wd7-9', type: 'judge', q: '"Did you have fun?" 意思是"你玩得开心吗？"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'have fun 玩得开心，Did you have fun? 问过去的经历。', tag: '句型' },
    { id: 'wd7-10', type: 'choice', q: '"你昨天做作业了吗？"用英语问：', options: ['Did you do your homework yesterday?', 'Did you did your homework yesterday?', 'Do you do your homework yesterday?', 'Were you do your homework yesterday?'], answer: 0, explain: 'Did + you + do（原形）+ yesterday。', tag: '一般过去' },
  ],
  wd8: [
    { id: 'wd8-1', type: 'choice', q: '"When did they come?" 的意思是：', options: ['他们什么时候来的？', '他们来过吗？', '他们从哪来？', '他们要来吗？'], answer: 0, explain: 'When 问时间，did 表过去：他们何时来的？', tag: '特殊疑问' },
    { id: 'wd8-2', type: 'choice', q: '"Where did you go yesterday?" 的意思是：', options: ['你昨天去哪了？', '你在哪里住？', '你昨天做了什么？', '你几点走的？'], answer: 0, explain: 'Where 问地点：你昨天去了哪里？', tag: '特殊疑问' },
    { id: 'wd8-3', type: 'choice', q: '对时间提问用：', options: ['When', 'Where', 'What', 'Who'], answer: 0, explain: 'When 什么时候，Where 在哪里，What 什么，Who 谁。', tag: '疑问词' },
    { id: 'wd8-4', type: 'choice', q: '对地点提问用：', options: ['Where', 'When', 'How', 'Why'], answer: 0, explain: 'Where 在哪里：Where did you go? 你去了哪里？', tag: '疑问词' },
    { id: 'wd8-5', type: 'judge', q: '"When did they come?" 的回答可以是 "They came at nine."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '问时间答时间：They came at nine. 他们九点来的。', tag: '句型' },
    { id: 'wd8-6', type: 'choice', q: '特殊疑问句（过去式）的语序是：', options: ['疑问词 + did + 主语 + 动词原形', '疑问词 + 主语 + did + 动词原形', 'Did + 疑问词 + 主语 + 动词', '疑问词 + 动词过去式 + 主语'], answer: 0, explain: 'Where did you go? = 疑问词 + did + 主语 + 原形。', tag: '语法' },
    { id: 'wd8-7', type: 'choice', q: '"你昨天做了什么？"用英语问：', options: ['What did you do yesterday?', 'What do you do yesterday?', 'What you did yesterday?', 'What did you yesterday?'], answer: 0, explain: 'What did you do yesterday? 过去式特殊疑问句。', tag: '句型' },
    { id: 'wd8-8', type: 'choice', q: '"When did they come?" 的回答：', options: ['They came yesterday.', 'They come by bus.', 'They are students.', 'They like cakes.'], answer: 0, explain: '问 come 的时间，回答用过去式 + 时间。', tag: '句型' },
    { id: 'wd8-9', type: 'judge', q: '问别人经历时语气友好，别人不想说就不要追问。', options: ['√ 对', '✗ 错'], answer: 0, explain: '尊重别人的隐私和感受，友好交流！', tag: '习惯养成' },
    { id: 'wd8-10', type: 'choice', q: '"去哪儿了"和"什么时候来的"分别是：', options: ['Where did you go?；When did you come?', 'When did you go?；Where did you come?', 'Where do you go?；When do you come?', 'How did you go?；What did you come?'], answer: 0, explain: 'Where 问地点，When 问时间，注意区分！', tag: '疑问词' },
  ],
  wd9: [
    { id: 'wd9-1', type: 'choice', q: '"What happened to your head?" 的意思是：', options: ['你的头怎么了？', '你的头在哪？', '你头疼吗？', '你的头真大！'], answer: 0, explain: 'happen 发生，What happened...? 发生了什么事？', tag: '句型' },
    { id: 'wd9-2', type: 'choice', q: '"happen" 的过去式是：', options: ['happened', 'happenning', 'happend', 'happens'], answer: 0, explain: 'happen + ed = happened，规则变化。', tag: '语法' },
    { id: 'wd9-3', type: 'choice', q: '"I bumped my head." 的意思是：', options: ['我撞到了头。', '我在点头。', '我摸摸头。', '我头疼。'], answer: 0, explain: 'bump 撞，bumped 过去式：我撞到头了。', tag: '一般过去' },
    { id: 'wd9-4', type: 'choice', q: '"bump" 的过去式是：', options: ['bumped', 'bumpd', 'bumping', 'bumps'], answer: 0, explain: 'bump + ed = bumped，规则变化。', tag: '语法' },
    { id: 'wd9-5', type: 'judge', q: '同学受伤了，应该马上告诉老师。', options: ['√ 对', '✗ 错'], answer: 0, explain: '有人受伤不能围观慌乱，第一时间找老师处理！', tag: '安全教育' },
    { id: 'wd9-6', type: 'choice', q: '跑跳时撞到头，正确的做法是：', options: ['告诉大人并观察情况', '继续玩', '用手揉一揉就好', '隐瞒不说'], answer: 0, explain: '撞到头不能大意，及时告诉大人，不舒服要就医。', tag: '安全教育' },
    { id: 'wd9-7', type: 'choice', q: '"hurt" 的意思是：', options: ['受伤；疼痛', '开心', '奔跑', '帮助'], answer: 0, explain: 'hurt 受伤，My leg hurts. 我的腿疼。', tag: '健康' },
    { id: 'wd9-8', type: 'choice', q: '"你膝盖怎么了？"用英语问：', options: ['What happened to your knee?', 'Where is your knee?', 'Is your knee big?', 'Do you like your knee?'], answer: 0, explain: 'What happened to + 身体部位，问哪里受伤。', tag: '句型' },
    { id: 'wd9-9', type: 'judge', q: '"Are you OK?" 是关心别人"你还好吗？"。', options: ['√ 对', '✗ 错'], answer: 0, explain: '看到别人摔倒或受伤，先问一句 Are you OK?。', tag: '习惯养成' },
    { id: 'wd9-10', type: 'choice', q: '课间活动的正确做法：', options: ['不追逐打闹，慢慢走', '在走廊赛跑', '爬窗户', '从楼梯扶手滑下'], answer: 0, explain: '课间文明休息，追逐打闹容易撞伤自己和同学！', tag: '安全教育' },
  ],
  wd10: [
    { id: 'wd10-1', type: 'choice', q: '"Go to bed early." 的意思是：', options: ['早点上床睡觉。', '早点起床。', '去早点铺。', '快去床上玩。'], answer: 0, explain: '这是祈使句：go to bed 上床睡觉，early 早。', tag: '祈使句' },
    { id: 'wd10-2', type: 'choice', q: '"Eat vegetables every day." 的意思是：', options: ['每天吃蔬菜。', '每天买菜。', '每天种菜。', '不吃蔬菜。'], answer: 0, explain: 'vegetables 蔬菜，every day 每天，祈使句给出健康建议。', tag: '祈使句' },
    { id: 'wd10-3', type: 'choice', q: '祈使句的特点是：', options: ['动词原形开头，常省略主语 you', '动词加 s', '动词加 ed', '以 Did 开头'], answer: 0, explain: '祈使句用动词原形开头：Stand up! / Listen! / Go!。', tag: '语法' },
    { id: 'wd10-4', type: 'choice', q: '祈使句的否定形式是：', options: ["Don't + 动词原形", "Doesn't + 动词原形", "Not + 动词原形", "No + 动词过去式"], answer: 0, explain: "Don't be late! 别迟到！Don't run! 别跑！", tag: '语法' },
    { id: 'wd10-5', type: 'judge', q: '"Wash your hands before meals." 意思是"饭前洗手"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'wash your hands 洗手，before meals 饭前，好习惯！', tag: '健康习惯' },
    { id: 'wd10-6', type: 'choice', q: '"别熬夜"用祈使句说：', options: ["Don't stay up late.", "Don't stay up lately.", "Not stay up late.", "Doesn't stay up late."], answer: 0, explain: "stay up late 熬夜，Don't + 原形：别熬夜！", tag: '祈使句' },
    { id: 'wd10-7', type: 'choice', q: '"vegetable" 指的是：', options: ['蔬菜', '水果', '肉类', '主食'], answer: 0, explain: 'vegetable 蔬菜，fruit 水果，meat 肉。', tag: '食物' },
    { id: 'wd10-8', type: 'choice', q: '健康的习惯是：', options: ['早睡早起，多吃蔬菜水果', '天天喝碳酸饮料', '熬夜玩游戏', '不吃早餐'], answer: 0, explain: '早睡早起、均衡饮食、坚持锻炼，身体才棒棒！', tag: '健康习惯' },
    { id: 'wd10-9', type: 'judge', q: '"Drink more water." 是一句健康建议。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Drink more water. 多喝水！祈使句常用给建议。', tag: '祈使句' },
    { id: 'wd10-10', type: 'choice', q: '"early" 的反义词是：', options: ['late', 'early too', 'soon', 'fast'], answer: 0, explain: 'early 早，late 晚：Don\'t be late! 别迟到！', tag: '单词' },
  ],
}
