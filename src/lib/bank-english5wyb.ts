// 外研版新标准英语（一年级起点）五年级下册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）五年级下册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq5x 核对）：
//   M1 She was a driver before./He worked in an office. · M2 What did she have for lunch?/Lunch is usually at half past twelve.
//   M3 Have you got the Harry Potter DVDs?/You can use the computers. · M4 Did you read them?/My favourite season is spring.
//   M5 Your bag is broken./Mine is pink. · M6 We'll see lots of very big stones./It was amazing.
//   M7 My father goes to work at 8 o'clock every morning./I'll be home at 7 o'clock.
//   M8 Will you help me?/I made a kite. · M9 We laughed a lot./Mum bought new chopsticks for you.
//   M10 What did you put in your bag?/I played on the beach.
// （源页 OCR 笔误已修正：M7U1 "goes to word" 应为 "goes to work"）
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wk

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
    id: 'wk1',
    name: 'Module 1',
    title: 'She was a driver before.',
    emoji: '👩‍✈️',
    color: 'amber',
    lessons: ['She was a driver before.', 'He worked in an office.', 'Jobs before'],
    intro: '翻翻爸妈的老照片，was、worked 说从前！',
  },
  {
    id: 'wk2',
    name: 'Module 2',
    title: 'What did she have for lunch?',
    emoji: '🍜',
    color: 'orange',
    lessons: ['What did she have for lunch?', 'Lunch is usually at half past twelve.', 'English food'],
    intro: '午餐吃了啥？英国美食了解下！',
  },
  {
    id: 'wk3',
    name: 'Module 3',
    title: 'Have you got the Harry Potter DVDs?',
    emoji: '💿',
    color: 'rose',
    lessons: ['Have you got the Harry Potter DVDs?', 'You can use the computers.', 'In the library'],
    intro: '图书馆里藏万卷，借书还书有礼貌！',
  },
  {
    id: 'wk4',
    name: 'Module 4',
    title: 'Did you read them?',
    emoji: '🌸',
    color: 'lime',
    lessons: ['Did you read them?', 'My favourite season is spring.', 'Four seasons'],
    intro: '书读了没？四季更替 spring 最美！',
  },
  {
    id: 'wk5',
    name: 'Module 5',
    title: 'Your bag is broken.',
    emoji: '🎒',
    color: 'teal',
    lessons: ['Your bag is broken.', 'Mine is pink.', 'mine / yours / his / hers'],
    intro: '你的包坏了，我的是粉色——物主代词大集合！',
  },
  {
    id: 'wk6',
    name: 'Module 6',
    title: "We'll see lots of very big stones.",
    emoji: '🗿',
    color: 'sky',
    lessons: ["We'll see lots of very big stones.", 'It was amazing.', 'Stonehenge'],
    intro: '巨石阵里石头怪，amazing 惊叹说出来！',
  },
  {
    id: 'wk7',
    name: 'Module 7',
    title: "My father goes to work at 8 o'clock every morning.",
    emoji: '⏰',
    color: 'violet',
    lessons: ["My father goes to work at 8 o'clock every morning.", "I'll be home at 7 o'clock.", 'Daily routine'],
    intro: '爸爸八点去上班，我七点准点回家转！',
  },
  {
    id: 'wk8',
    name: 'Module 8',
    title: 'Will you help me?',
    emoji: '🪁',
    color: 'pink',
    lessons: ['Will you help me?', 'I made a kite.', 'Making things'],
    intro: '一起动手做风筝，will 与 made 双双登场！',
  },
  {
    id: 'wk9',
    name: 'Module 9',
    title: 'We laughed a lot.',
    emoji: '😂',
    color: 'indigo',
    lessons: ['We laughed a lot.', 'Mum bought new chopsticks for you.', 'Funny stories'],
    intro: '笑话笑到停不下，laughed、bought 说趣事！',
  },
  {
    id: 'wk10',
    name: 'Module 10',
    title: 'What did you put in your bag?',
    emoji: '🏖️',
    color: 'emerald',
    lessons: ['What did you put in your bag?', 'I played on the beach.', 'Trip time'],
    intro: '行李装了啥？沙滩脚印一串串！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wk1: [
    { id: 'wk1-1', type: 'choice', q: '"She was a driver before." 的意思是：', options: ['她以前是一名司机。', '她想当司机。', '她现在是司机。', '她坐过汽车。'], answer: 0, explain: 'was + 职业 + before：以前做过什么工作。', tag: '句型' },
    { id: 'wk1-2', type: 'choice', q: '"before" 的意思是：', options: ['以前', '现在', '以后', '刚才'], answer: 0, explain: 'before 以前，ten years before 十年前。', tag: '单词' },
    { id: 'wk1-3', type: 'choice', q: '"He worked in an office." 的意思是：', options: ['他过去在办公室工作。', '他现在在办公室。', '他想去办公室。', '他喜欢办公室。'], answer: 0, explain: 'worked 过去式：他过去（曾）在办公室上班。', tag: '句型' },
    { id: 'wk1-4', type: 'choice', q: '"worked" 是哪个动词的过去式？', options: ['work', 'walk', 'word', 'world'], answer: 0, explain: 'work → worked，直接加 ed。', tag: '语法' },
    { id: 'wk1-5', type: 'judge', q: '"office" 是"厨房"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'office 是办公室，kitchen 才是厨房。', tag: '单词' },
    { id: 'wk1-6', type: 'choice', q: '说"她以前是老师"，应该说：', options: ['She was a teacher before.', 'She is a teacher before.', 'She liked teachers.', 'She teaches before.'], answer: 0, explain: 'was + a teacher + before，过去职业句型。', tag: '句型' },
    { id: 'wk1-7', type: 'choice', q: '农民伯伯干活的"田地"是：', options: ['field', 'factory', 'farm house', 'floor'], answer: 0, explain: 'field 田地，in the fields 在田里。', tag: '单词' },
    { id: 'wk1-8', type: 'judge', q: 'she、he、it 的过去状态用 was。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I/she/he/it + was；you/we/they + were。', tag: '语法' },
    { id: 'wk1-9', type: 'choice', q: '"worker" 指的是：', options: ['工人', '办公桌', '工作', '老板'], answer: 0, explain: 'work 工作 + er 人 → worker 工人。', tag: '单词' },
    { id: 'wk1-10', type: 'judge', q: '爸爸妈妈的工作都很辛苦，要体谅、关心他们。', options: ['√ 对', '✗ 错'], answer: 0, explain: '爸妈以前也是小朋友，现在为家努力工作——说声辛苦啦！', tag: '习惯养成' },
  ],
  wk2: [
    { id: 'wk2-1', type: 'choice', q: '"What did she have for lunch?" 的意思是：', options: ['她午餐吃了什么？', '她喜欢午餐吗？', '午餐几点吃？', '午餐在哪里吃？'], answer: 0, explain: 'have...for lunch 午餐吃了……，did 问过去。', tag: '句型' },
    { id: 'wk2-2', type: 'choice', q: '"have...for lunch" 表示：', options: ['午餐吃了……', '想要午餐', '做午餐', '买午餐'], answer: 0, explain: 'What did you have for breakfast? 早饭吃的什么？', tag: '短语' },
    { id: 'wk2-3', type: 'choice', q: '"Lunch is usually at half past twelve." 的意思是：', options: ['午餐通常在十二点半。', '午餐在十二点。', '我们喜欢十二点半。', '午餐有很多。'], answer: 0, explain: 'at half past twelve 在十二点半，usually 通常。', tag: '句型' },
    { id: 'wk2-4', type: 'judge', q: '"What did she have?" 可以回答 "She had eggs and sausages."。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'did 问过去，had 回答：她吃了鸡蛋和香肠。', tag: '句型' },
    { id: 'wk2-5', type: 'choice', q: '"sausage" 指的是：', options: ['香肠', '沙拉', '蛋糕', '米饭'], answer: 0, explain: 'sausage 香肠，English breakfast 常有它。', tag: '单词' },
    { id: 'wk2-6', type: 'choice', q: '两片面包夹菜的"三明治"是：', options: ['sandwich', 'hamburger', 'noodles', 'dumplings'], answer: 0, explain: 'sandwich 三明治，方便又好吃。', tag: '单词' },
    { id: 'wk2-7', type: 'choice', q: '英国传统美食 "fish and chips" 是：', options: ['炸鱼和薯条', '鱼和薯片', '鱼汤和米饭', '鱼丸和茶'], answer: 0, explain: 'fish and chips 炸鱼薯条，英国国民美食。', tag: '文化' },
    { id: 'wk2-8', type: 'judge', q: 'did 后面的动词要用原形。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'What did she have?（不是 had）——did 后动词还原！', tag: '语法' },
    { id: 'wk2-9', type: 'choice', q: '"delicious" 的意思是：', options: ['美味的', '可怕的', '昂贵的', '干净的'], answer: 0, explain: 'delicious 美味的，The food is delicious!。', tag: '单词' },
    { id: 'wk2-10', type: 'judge', q: '吃饭不挑食、按时吃，营养才均衡。', options: ['√ 对', '✗ 错'], answer: 0, explain: '青菜肉蛋都爱吃，营养均衡身体棒！', tag: '习惯养成' },
  ],
  wk3: [
    { id: 'wk3-1', type: 'choice', q: '"Have you got the Harry Potter DVDs?" 的意思是：', options: ['你们有《哈利·波特》DVD 吗？', '你看过哈利·波特吗？', '你喜欢哈利·波特吗？', 'DVD 在哪里？'], answer: 0, explain: 'Have you got...? 英式说法：有没有……？', tag: '句型' },
    { id: 'wk3-2', type: 'choice', q: '"Have you got...?" 是在问：', options: ['有……吗', '喜欢……吗', '拿到过……吗', '想要……吗'], answer: 0, explain: '英式英语用 have got 表示"拥有"。', tag: '句型' },
    { id: 'wk3-3', type: 'choice', q: '"You can use the computers." 的意思是：', options: ['你可以使用这些电脑。', '你有一台电脑。', '你在用电脑。', '电脑坏了。'], answer: 0, explain: 'can + 动词原形：可以使用。', tag: '句型' },
    { id: 'wk3-4', type: 'judge', q: '"borrow" 是"买"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'borrow 是借（入），buy 才是买。', tag: '单词' },
    { id: 'wk3-5', type: 'choice', q: '在图书馆里可以：', options: ['read books', 'run and shout', 'eat lunch', 'play football'], answer: 0, explain: 'library 图书馆，看书借书的地方。', tag: '常识' },
    { id: 'wk3-6', type: 'choice', q: '"library card" 是：', options: ['借书卡', '银行卡', '身份证', '门票'], answer: 0, explain: '借书要出示 library card 借书卡。', tag: '单词' },
    { id: 'wk3-7', type: 'judge', q: '"Have you got a pen?" 的回答是 "Yes, I have." 或 "No, I haven\'t."。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Have 问，have 答：Yes, I have. / No, I haven\'t.。', tag: '句型' },
    { id: 'wk3-8', type: 'choice', q: '"return" 的意思是：', options: ['归还；返回', '借出', '购买', '打开'], answer: 0, explain: 'return 还；return the books 把书还回去。', tag: '单词' },
    { id: 'wk3-9', type: 'judge', q: '图书馆、阅览室里要保持安静，不影响别人。', options: ['√ 对', '✗ 错'], answer: 0, explain: '轻轻走路小声说，做个安静的读书人！', tag: '习惯养成' },
    { id: 'wk3-10', type: 'choice', q: '借的书到期要：', options: ['按时归还', '一直占着', '转卖别人', '撕掉扔了'], answer: 0, explain: '按期还书，人人都有书看，好借好还！', tag: '习惯养成' },
  ],
  wk4: [
    { id: 'wk4-1', type: 'choice', q: '"Did you read them?" 的意思是：', options: ['你读过它们吗？', '你在读书吗？', '你要读书吗？', '书在哪里？'], answer: 0, explain: 'Did + 主语 + 动词原形...? 问过去做没做。', tag: '句型' },
    { id: 'wk4-2', type: 'choice', q: '"Did you...?" 的回答是：', options: ['Yes, I did. / No, I didn\'t.', 'Yes, I do. / No, I don\'t.', 'Yes, I am. / No, I\'m not.', 'Yes, I have. / No, I haven\'t.'], answer: 0, explain: 'Did 问，did 答。', tag: '句型' },
    { id: 'wk4-3', type: 'choice', q: '"My favourite season is spring." 的意思是：', options: ['我最喜欢的季节是春天。', '我喜欢春节。', '春天来了。', '春天很温暖。'], answer: 0, explain: 'season 季节，favourite 最喜欢的。', tag: '句型' },
    { id: 'wk4-4', type: 'choice', q: '"season" 指的是：', options: ['季节', '天气', '月份', '节日'], answer: 0, explain: 'season 季节，four seasons 四季。', tag: '单词' },
    { id: 'wk4-5', type: 'judge', q: '"autumn" 是"夏天"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'autumn 是秋天（美式叫 fall），summer 才是夏天。', tag: '单词' },
    { id: 'wk4-6', type: 'choice', q: '春天最典型的景物是：', options: ['flowers everywhere', 'snow everywhere', 'yellow leaves', 'hot sun'], answer: 0, explain: 'spring 春天，花开草绿，万物生长。', tag: '常识' },
    { id: 'wk4-7', type: 'choice', q: '"夏天"的英文是：', options: ['summer', 'spring', 'autumn', 'season'], answer: 0, explain: 'summer 夏天，summer holiday 暑假。', tag: '单词' },
    { id: 'wk4-8', type: 'choice', q: '"冬天"的英文是：', options: ['winter', 'water', 'wind', 'window'], answer: 0, explain: 'winter 冬天，in winter 在冬天。', tag: '单词' },
    { id: 'wk4-9', type: 'judge', q: 'read 的过去式拼写不变，但读音变成 /red/。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'read（现在 /ri:d/）→ read（过去 /red/），不规则动词。', tag: '语法' },
    { id: 'wk4-10', type: 'judge', q: '一年有春、夏、秋、冬四个季节。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'four seasons 四季轮转，各有各的美。', tag: '常识' },
  ],
  wk5: [
    { id: 'wk5-1', type: 'choice', q: '"Your bag is broken." 的意思是：', options: ['你的包坏了。', '你的包很漂亮。', '你有个新包。', '包在你手里。'], answer: 0, explain: 'broken 坏了、破了，The zipper is broken. 拉链坏了。', tag: '句型' },
    { id: 'wk5-2', type: 'choice', q: '"broken" 的意思是：', options: ['坏的；破的', '崭新的', '昂贵的', '粉色的'], answer: 0, explain: 'break 弄坏 → broken 坏的。', tag: '单词' },
    { id: 'wk5-3', type: 'choice', q: '"Mine is pink." 的意思是：', options: ['我的是粉色的。', '我的包要买了。', '粉色的给我。', ' mine 是动词。'], answer: 0, explain: 'mine = my bag（我的东西），单独使用不接名词。', tag: '句型' },
    { id: 'wk5-4', type: 'choice', q: '"mine" 等于：', options: ['my + 东西（我的……）', 'me', 'I', 'myself'], answer: 0, explain: 'mine 是名词性物主代词：This is mine = This is my bag.。', tag: '语法' },
    { id: 'wk5-5', type: 'judge', q: '"yours" 是"我的东西"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'yours 是"你的（东西）"，mine 才是"我的（东西）"。', tag: '语法' },
    { id: 'wk5-6', type: 'choice', q: '"hers" 的意思是：', options: ['她的（东西）', '她', '她的（形容词）', '头发'], answer: 0, explain: 'hers = her + 东西：The red one is hers. 红的那个是她的。', tag: '语法' },
    { id: 'wk5-7', type: 'choice', q: '"这个包是我的"应该说：', options: ['This bag is mine.', 'This bag is my.', 'This is mine bag.', 'This bag is me.'], answer: 0, explain: 'mine 后面不能再加名词：is mine 对，is my 错。', tag: '语法' },
    { id: 'wk5-8', type: 'judge', q: '名词性物主代词（mine、yours、hers）后面不再加名词。', options: ['√ 对', '✗ 错'], answer: 0, explain: '它本身就代表"某人的东西"，别再加名词哦。', tag: '语法' },
    { id: 'wk5-9', type: 'choice', q: '"carry" 的意思是：', options: ['提；背；扛', '哭泣', '剪开', '缝补'], answer: 0, explain: 'carry 携带，carry the bag 背包。', tag: '单词' },
    { id: 'wk5-10', type: 'judge', q: '书包坏了要请大人帮忙修，别自己硬撑。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Your bag is broken. 告诉家长老师，及时修理！', tag: '习惯养成' },
  ],
  wk6: [
    { id: 'wk6-1', type: 'choice', q: '"We\'ll see lots of very big stones." 的意思是：', options: ['我们将看到许多非常大的石头。', '我们看见了大石头。', '我们要搬石头。', '石头很大很多。'], answer: 0, explain: "We'll 将会，lots of 许多，very big stones 很大的石头。", tag: '句型' },
    { id: 'wk6-2', type: 'choice', q: '"Stonehenge" 是：', options: ['巨石阵', '金字塔', '长城', '大本钟'], answer: 0, explain: 'Stonehenge 巨石阵，英国史前遗迹。', tag: '文化' },
    { id: 'wk6-3', type: 'choice', q: '"It was amazing." 的意思是：', options: ['它太令人惊叹了。', '它还在那里。', '它是新的。', '它很大。'], answer: 0, explain: 'amazing 令人惊叹的，赞叹时就说 Amazing!。', tag: '句型' },
    { id: 'wk6-4', type: 'choice', q: '"amazing" 的意思是：', options: ['令人惊奇的', '好笑的', '可怕的', '普通的'], answer: 0, explain: 'amazing 了不起、令人称奇。', tag: '单词' },
    { id: 'wk6-5', type: 'judge', q: '"Stonehenge"（巨石阵）在美国。', options: ['√ 对', '✗ 错'], answer: 1, explain: '巨石阵在英国（the UK）的索尔兹伯里平原。', tag: '文化' },
    { id: 'wk6-6', type: 'choice', q: '"stone" 指的是：', options: ['石头', '故事', '骨头', '面包'], answer: 0, explain: 'stone 石头，Stonehenge 就是"悬挂的石头"。', tag: '单词' },
    { id: 'wk6-7', type: 'choice', q: '"lots of" 的意思是：', options: ['许多', '一点', '没有', '全部'], answer: 0, explain: 'lots of = a lot of 许多，可数不可数都能接。', tag: '短语' },
    { id: 'wk6-8', type: 'judge', q: 'will 后面要用动词原形。', options: ['√ 对', '✗ 错'], answer: 0, explain: "We'll see = We will see，will + see。", tag: '语法' },
    { id: 'wk6-9', type: 'choice', q: '巨石阵有几千年历史，"历史"的英文是：', options: ['history', 'story', 'stone', 'hobby'], answer: 0, explain: 'history 历史，a long history 悠久的历史。', tag: '单词' },
    { id: 'wk6-10', type: 'judge', q: '参观名胜古迹时不乱刻乱画、不攀爬文物。', options: ['√ 对', '✗ 错'], answer: 0, explain: '古迹是全人类的宝贝，文明游览别破坏！', tag: '习惯养成' },
  ],
  wk7: [
    { id: 'wk7-1', type: 'choice', q: '"My father goes to work at 8 o\'clock every morning." 的意思是：', options: ['我爸爸每天早上八点去上班。', '爸爸八点回家。', '爸爸喜欢八点。', '爸爸八点起床。'], answer: 0, explain: 'goes to work 去上班，at 8 o\'clock 在八点整。', tag: '句型' },
    { id: 'wk7-2', type: 'choice', q: '"go to work" 的意思是：', options: ['去上班', '去上学', '回家', '去工厂'], answer: 0, explain: 'go to work 上班；go to school 上学。', tag: '短语' },
    { id: 'wk7-3', type: 'choice', q: '"I\'ll be home at 7 o\'clock." 的意思是：', options: ['我七点会到家。', '我在家七点。', '我七点出门。', '我喜欢七点。'], answer: 0, explain: "I'll be home 我将到家，be home 到家。", tag: '句型' },
    { id: 'wk7-4', type: 'judge', q: '"go to work" 是"去上学"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'go to work 是去上班，go to school 才是上学。', tag: '短语' },
    { id: 'wk7-5', type: 'choice', q: '爸爸（三单）"去上班"的动词要变成：', options: ['goes', 'go', 'going', 'gone'], answer: 0, explain: 'he/she/it 作主语，go 变 goes。', tag: '语法' },
    { id: 'wk7-6', type: 'choice', q: '"at 8 o\'clock" 表示：', options: ['在八点整', '八小时', '八分钟', '大约八点'], answer: 0, explain: '具体时刻前用 at：at seven、at half past six。', tag: '时间' },
    { id: 'wk7-7', type: 'choice', q: '"every morning" 的意思是：', options: ['每天早上', '明天早上', '早上好', '整个上午'], answer: 0, explain: 'every morning 每天早上，习惯性动作。', tag: '短语' },
    { id: 'wk7-8', type: 'judge', q: '具体几点钟前面用介词 at。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'at 6 o\'clock、at 7:30，时刻前都用 at。', tag: '语法' },
    { id: 'wk7-9', type: 'choice', q: '"taxi driver" 指的是：', options: ['出租车司机', '公交车司机', '飞行员', '警察'], answer: 0, explain: 'taxi 出租车 + driver 司机 = 出租车司机。', tag: '单词' },
    { id: 'wk7-10', type: 'judge', q: '按时完成作业、守时守信，让爸妈放心。', options: ['√ 对', '✗ 错'], answer: 0, explain: "I'll be home at 7. 说到做到，守时是美德！", tag: '习惯养成' },
  ],
  wk8: [
    { id: 'wk8-1', type: 'choice', q: '"Will you help me?" 的意思是：', options: ['你会帮我吗？', '你帮我过了。', '你喜欢我吗？', '我能帮你吗？'], answer: 0, explain: 'Will you + 动词原形...? 礼貌请求帮忙。', tag: '句型' },
    { id: 'wk8-2', type: 'choice', q: '"Will you help me?" 的肯定回答是：', options: ['Yes, I will. / Sure!', "Yes, I am.", 'Yes, I do.', 'Yes, I can\'t.'], answer: 0, explain: 'Will you...? — Yes, I will. 当然可以！', tag: '句型' },
    { id: 'wk8-3', type: 'choice', q: '"I made a kite." 的意思是：', options: ['我做了一只风筝。', '我在放风筝。', '我买了一只风筝。', '我想要风筝。'], answer: 0, explain: 'made 是 make 的过去式：我做了一只风筝。', tag: '句型' },
    { id: 'wk8-4', type: 'choice', q: '"made" 是哪个动词的过去式？', options: ['make', 'madee', 'met', 'mend'], answer: 0, explain: 'make → made，不规则变化。', tag: '语法' },
    { id: 'wk8-5', type: 'judge', q: '"make a kite" 是"放风筝"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'make a kite 是做风筝，放风筝是 fly a kite。', tag: '短语' },
    { id: 'wk8-6', type: 'choice', q: '天上飞的"风筝"是：', options: ['kite', 'bird', 'plane', 'balloon'], answer: 0, explain: 'kite 风筝，fly a kite 放风筝。', tag: '单词' },
    { id: 'wk8-7', type: 'choice', q: '做风筝的材料 "paper and sticks" 是：', options: ['纸和木棍', '笔和尺子', '布和线', '胶水和剪刀'], answer: 0, explain: 'paper 纸、sticks 小木棍，风筝骨架材料。', tag: '单词' },
    { id: 'wk8-8', type: 'judge', q: '"Will you help me?" 的回答可以是 "Of course!"（当然！）。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Of course! 表示爽快答应，乐于助人！', tag: '句型' },
    { id: 'wk8-9', type: 'choice', q: '"cut the paper" 的意思是：', options: ['剪纸', '折纸', '买纸', '画纸'], answer: 0, explain: 'cut 剪、切，cut the paper 剪纸。', tag: '短语' },
    { id: 'wk8-10', type: 'judge', q: '同学向你求助时，要热心帮忙。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Will you help me? — Sure! 互相帮助，共同进步！', tag: '习惯养成' },
  ],
  wk9: [
    { id: 'wk9-1', type: 'choice', q: '"We laughed a lot." 的意思是：', options: ['我们笑个不停。', '我们大声喊。', '我们学了很多。', '我们很累了。'], answer: 0, explain: 'laugh 笑 → laughed，a lot 很多：笑得停不下来。', tag: '句型' },
    { id: 'wk9-2', type: 'choice', q: '"laughed" 是哪个动词的过去式？', options: ['laugh', 'laughed', 'love', 'leave'], answer: 0, explain: 'laugh → laughed，直接加 ed。', tag: '语法' },
    { id: 'wk9-3', type: 'choice', q: '"Mum bought new chopsticks for you." 的意思是：', options: ['妈妈给你买了新筷子。', '妈妈在用筷子。', '妈妈喜欢筷子。', '妈妈送走筷子。'], answer: 0, explain: 'bought 买（buy 的过去式），for you 给你。', tag: '句型' },
    { id: 'wk9-4', type: 'choice', q: '"chopsticks" 指的是：', options: ['筷子（总是复数）', '椅子', '筷子筒', '勺子'], answer: 0, explain: 'chopsticks 筷子，两根一组，总用复数。', tag: '单词' },
    { id: 'wk9-5', type: 'judge', q: '"laugh" 的过去式还是 laugh，不用变化。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'laugh 的过去式要加 ed：laughed。', tag: '语法' },
    { id: 'wk9-6', type: 'choice', q: '"a lot" 的意思是：', options: ['很多；非常', '一点点', '不', '许多东西'], answer: 0, explain: 'laugh a lot 笑得很多；thanks a lot 多谢。', tag: '短语' },
    { id: 'wk9-7', type: 'choice', q: '"剧院"的英文是：', options: ['theatre', 'cinema', 'museum', 'hospital'], answer: 0, explain: 'theatre 剧院，看话剧去 theatre，看电影去 cinema。', tag: '单词' },
    { id: 'wk9-8', type: 'judge', q: '"bought" 是 "buy" 的过去式。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'buy → bought，不规则变化。', tag: '语法' },
    { id: 'wk9-9', type: 'choice', q: '"for you" 的意思是：', options: ['给你', '为了你走', '四你', '在你前面'], answer: 0, explain: 'for you 给你：a gift for you 送你的礼物。', tag: '短语' },
    { id: 'wk9-10', type: 'judge', q: '收到别人的礼物或心意，要真诚道谢。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Thank you! 说出来，感恩之心暖人心！', tag: '习惯养成' },
  ],
  wk10: [
    { id: 'wk10-1', type: 'choice', q: '"What did you put in your bag?" 的意思是：', options: ['你在包里装了什么？', '你的包在哪里？', '你喜欢这个包吗？', '包重不重？'], answer: 0, explain: 'put 放，What did you put...? 问装了什么。', tag: '句型' },
    { id: 'wk10-2', type: 'choice', q: '"put" 的过去式是：', options: ['put（不变）', 'putted', 'puting', 'puted'], answer: 0, explain: 'put 的过去式还是 put，读音不变。', tag: '语法' },
    { id: 'wk10-3', type: 'choice', q: '"I played on the beach." 的意思是：', options: ['我在沙滩上玩了。', '我要去沙滩。', '我住在海边。', '沙滩很干净。'], answer: 0, explain: 'played 过去式，on the beach 在沙滩上。', tag: '句型' },
    { id: 'wk10-4', type: 'choice', q: '"beach" 指的是：', options: ['沙滩', '海水', '轮船', '贝壳'], answer: 0, explain: 'beach 沙滩，go to the beach 去海边。', tag: '单词' },
    { id: 'wk10-5', type: 'judge', q: '"swim in the sea" 是"在河里游泳"的意思。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'sea 是大海，river 才是河：在海里游泳。', tag: '单词' },
    { id: 'wk10-6', type: 'choice', q: '"Did you...?" 开头的问句，回答用：', options: ['did / didn\'t', 'do / don\'t', 'was / weren\'t', 'will / won\'t'], answer: 0, explain: 'Did you swim? — Yes, I did. / No, I didn\'t.。', tag: '句型' },
    { id: 'wk10-7', type: 'choice', q: '沙滩上金黄的"沙子"是：', options: ['sand', 'sea', 'shell', 'sun'], answer: 0, explain: 'sand 沙子，sandcastle 沙堡。', tag: '单词' },
    { id: 'wk10-8', type: 'judge', q: 'put 的过去式与原形相同。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'put-put-put，cut-cut-cut，原形过去式一个样。', tag: '语法' },
    { id: 'wk10-9', type: 'choice', q: '去海边要带的 "sun cream" 是：', options: ['防晒霜', '太阳镜', '遮阳伞', '游泳圈'], answer: 0, explain: 'sun 太阳 + cream 霜 = 防晒霜，海边必备。', tag: '单词' },
    { id: 'wk10-10', type: 'judge', q: '在海边玩耍要注意安全，不独自下水游泳。', options: ['√ 对', '✗ 错'], answer: 0, explain: '有大人陪同才能下水，安全永远第一！', tag: '安全' },
  ],
}
