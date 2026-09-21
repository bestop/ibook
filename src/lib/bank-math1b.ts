// 沪教版（2025 春新版·五四学制·上海教育出版社）数学一年级下册 随堂知识点题库
// 目录（电子课本网 2025 春版核对）：
//   1 20以内数的加减法（二）/ 2 100以内的数 / 3 时间的初步认识 / 4 100以内数的加减法（一）
//   5 长度的比较与测量 / 6 身体上的尺子 / 7 数学广场 / 8 复习
// 每个单元一关，每关 10 题，题目 id 前缀 zu

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
    id: 'zu1',
    name: '第1单元',
    title: '20以内数的加减法（二）',
    emoji: '🎯',
    color: 'pink',
    lessons: ['十几减几的退位减法', '破十法与想加算减', '连加、连减与加减混合'],
    intro: '退位减法不可怕，破十法、想加算减来帮忙，算得又快又准就是它！',
  },
  {
    id: 'zu2',
    name: '第2单元',
    title: '100以内的数',
    emoji: '💯',
    color: 'amber',
    lessons: ['认识100', '百以内数的表示与大小比较', '认识人民币'],
    intro: '十个十个数到100，数位表里藏秘密，还有人民币朋友来见面！',
  },
  {
    id: 'zu3',
    name: '第3单元',
    title: '时间的初步认识',
    emoji: '⏰',
    color: 'cyan',
    lessons: ['认识钟表', '几时和几时半', '几时刚过与快到几时'],
    intro: '嘀嗒嘀嗒钟表走，时针分针手拉手，几时几时半都难不倒你！',
  },
  {
    id: 'zu4',
    name: '第4单元',
    title: '100以内数的加减法（一）',
    emoji: '🚂',
    color: 'lime',
    lessons: ['两位数加减整十数', '两位数加减一位数', '简单的解决问题'],
    intro: '整十数、一位数来加减，口算小火车呜呜开，解决问题我最棒！',
  },
  {
    id: 'zu5',
    name: '第5单元',
    title: '长度的比较与测量',
    emoji: '📏',
    color: 'violet',
    lessons: ['比长短、比高矮', '认识厘米与米', '用尺子量一量'],
    intro: '比一比谁高谁矮，量一量有多长，厘米和米是最好的测量伙伴！',
  },
  {
    id: 'zu6',
    name: '第6单元',
    title: '身体上的尺子',
    emoji: '🤸',
    color: 'rose',
    lessons: ['拃、步与庹', '用身体尺估一估', '量一量再验证'],
    intro: '原来身体上藏着尺子！拃、步、庹随身带，走到哪里量到哪里！',
  },
  {
    id: 'zu7',
    name: '第7单元',
    title: '数学广场',
    emoji: '🎪',
    color: 'orange',
    lessons: ['找规律填数', '数一数、搭一搭', '简单的搭配'],
    intro: '数学广场真热闹，找规律、巧搭配，动动脑筋快乐闯！',
  },
  {
    id: 'zu8',
    name: '第8单元',
    title: '复习',
    emoji: '🏁',
    color: 'emerald',
    lessons: ['数与运算', '时间与长度', '综合应用'],
    intro: '期末大闯关！把一年级下册的数学本领统统亮出来！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zu1: [
    { id: 'zu1-1', type: 'choice', q: '15 - 9 = ?（想：先算 10 - 9）', options: ['6', '5', '7', '4'], answer: 0, explain: '破十法：10 - 9 = 1，1 + 5 = 6。也可以想 9 + 6 = 15。', tag: '退位减法' },
    { id: 'zu1-2', type: 'choice', q: '13 - 8 = ?', options: ['5', '6', '4', '7'], answer: 0, explain: '想加算减：8 + 5 = 13，所以 13 - 8 = 5。', tag: '退位减法' },
    { id: 'zu1-3', type: 'choice', q: '12 - 7 = ?', options: ['5', '4', '6', '7'], answer: 0, explain: '破十法：10 - 7 = 3，3 + 2 = 5。', tag: '退位减法' },
    { id: 'zu1-4', type: 'choice', q: '14 - 6 = ?', options: ['8', '7', '9', '6'], answer: 0, explain: '想 6 + 8 = 14，所以 14 - 6 = 8。', tag: '退位减法' },
    { id: 'zu1-5', type: 'choice', q: '11 - 5 = ?', options: ['6', '5', '8', '4'], answer: 0, explain: '10 - 5 = 5，5 + 1 = 6。破十法一步一步来。', tag: '退位减法' },
    { id: 'zu1-6', type: 'choice', q: '17 - 8 = ?', options: ['9', '8', '7', '10'], answer: 0, explain: '10 - 8 = 2，2 + 7 = 9。十几减 8，得数总比个位多 2 哦！', tag: '退位减法' },
    { id: 'zu1-7', type: 'choice', q: '16 - 7 = ?', options: ['9', '8', '10', '7'], answer: 0, explain: '想 7 + 9 = 16，所以 16 - 7 = 9。想加算减真方便！', tag: '退位减法' },
    { id: 'zu1-8', type: 'judge', q: '计算 13 - 7 时，可以先算 10 - 7 = 3，再算 3 + 3 = 6。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！这就是"破十法"：先从一捆（10）里减，再加剩下的零头。', tag: '破十法' },
    { id: 'zu1-9', type: 'choice', q: '9 +（ ）= 16，括号里填几？', options: ['7', '6', '8', '9'], answer: 0, explain: '想 16 - 9 = 7。加法和减法是一对好朋友！', tag: '逆向思考' },
    { id: 'zu1-10', type: 'choice', q: '解决问题：公园里有 15 只风筝，飞走了 8 只，还剩几只？', options: ['7 只', '8 只', '6 只', '9 只'], answer: 0, explain: '15 - 8 = 7（只）。飞走了就用减法。', tag: '解决问题' },
  ],
  zu2: [
    { id: 'zu2-1', type: 'choice', q: '10 个十是多少？', options: ['100', '10', '90', '99'], answer: 0, explain: '10 个十捆成一大捆，就是 1 个百，也就是 100。', tag: '认识100' },
    { id: 'zu2-2', type: 'choice', q: '68 里面有（ ）个十和（ ）个一？', options: ['6 个十和 8 个一', '8 个十和 6 个一', '6 个十和 8 个十', '68 个十'], answer: 0, explain: '68 = 60 + 8，十位上的 6 表示 6 个十，个位上的 8 表示 8 个一。', tag: '数的组成' },
    { id: 'zu2-3', type: 'choice', q: '和 79 相邻的两个数是？', options: ['78 和 80', '77 和 78', '80 和 81', '76 和 80'], answer: 0, explain: '79 的前面是 78，后面是 80，就像排队时的左右邻居。', tag: '数的顺序' },
    { id: 'zu2-4', type: 'judge', q: '100 里面有 10 个十。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！10 个十正好是 1 个百。', tag: '认识100' },
    { id: 'zu2-5', type: 'choice', q: '最大的两位数是多少？', options: ['99', '90', '100', '98'], answer: 0, explain: '两位数里十位、个位都装满 9，就是最大的 99。', tag: '数的认识' },
    { id: 'zu2-6', type: 'choice', q: '比较大小：89 ○ 98，圆圈里填什么？', options: ['<', '>', '=', '不能比'], answer: 0, explain: '先比十位：8 个十比 9 个十小，所以 89 < 98。', tag: '比大小' },
    { id: 'zu2-7', type: 'choice', q: '1 元 = ? 角', options: ['10 角', '5 角', '100 角', '1 角'], answer: 0, explain: '1 元 = 10 角，元和角是一对好朋友，进率是 10。', tag: '认识人民币' },
    { id: 'zu2-8', type: 'choice', q: '一支铅笔 8 角，一块橡皮 5 角，一共要付多少钱？', options: ['1 元 3 角', '13 元', '3 角', '1 元'], answer: 0, explain: '8 角 + 5 角 = 13 角 = 1 元 3 角。满 10 角就换成 1 元！', tag: '付款' },
    { id: 'zu2-9', type: 'choice', q: '一本练习本 4 元 5 角，付了 5 元，应找回多少钱？', options: ['5 角', '1 元', '4 元 5 角', '1 元 5 角'], answer: 0, explain: '5 元 = 4 元 10 角，减去 4 元 5 角，找回 5 角。', tag: '找零' },
    { id: 'zu2-10', type: 'judge', q: '写数时，从右边起第一位是个位，第二位是十位。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！右边起第一位是个位，第二位是十位，第三位是百位。', tag: '数位' },
  ],
  zu3: [
    { id: 'zu3-1', type: 'choice', q: '钟面上又短又粗的针叫什么？', options: ['时针', '分针', '秒针', '数字'], answer: 0, explain: '钟面上短的是时针，长的是分针，时针走得慢，分针走得快。', tag: '认识钟表' },
    { id: 'zu3-2', type: 'choice', q: '分针指着 12，时针指着 3，是几时？', options: ['3 时', '12 时', '3 时半', '6 时'], answer: 0, explain: '分针指着 12，时针指着几就是几时整，所以是 3 时。', tag: '几时' },
    { id: 'zu3-3', type: 'choice', q: '几时半的时候，分针指着几？', options: ['6', '12', '3', '9'], answer: 0, explain: '分针从 12 走到 6，正好走了半圈，所以是几时半。', tag: '几时半' },
    { id: 'zu3-4', type: 'choice', q: '8 时半的时候，时针指在哪里？', options: ['8 和 9 的中间', '8 和 7 的中间', '正好指着 8', '9 和 10 的中间'], answer: 0, explain: '8 时半过了 8 时还没到 9 时，时针在 8 和 9 的中间。', tag: '几时半' },
    { id: 'zu3-5', type: 'judge', q: '钟面上一共有 12 个大格。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！钟面上有 1 到 12 共 12 个大格。', tag: '认识钟表' },
    { id: 'zu3-6', type: 'choice', q: '分针指着 6，时针指在 7 和 8 的中间，是几时？', options: ['7 时半', '8 时半', '7 时', '6 时半'], answer: 0, explain: '时针过了 7 还没到 8，分针指 6，就是 7 时半。', tag: '几时半' },
    { id: 'zu3-7', type: 'choice', q: '分针快走到 12，时针快走到 5，现在是？', options: ['快到 5 时了', '5 时半', '快到 6 时了', '刚过 4 时'], answer: 0, explain: '时针快到 5、分针快到 12，就是快到 5 时了。', tag: '快到几时' },
    { id: 'zu3-8', type: 'judge', q: '分针指着 12，时针指着 6，就是 6 时。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！分针指 12 是整时，时针指 6 就是 6 时。', tag: '几时' },
    { id: 'zu3-9', type: 'choice', q: '时针指着 9，分针指着 12，是几时？', options: ['9 时', '3 时', '12 时', '9 时半'], answer: 0, explain: '分针指 12，时针指 9，就是 9 时整。', tag: '几时' },
    { id: 'zu3-10', type: 'judge', q: '分针指着 6，时针指在 2 和 3 的中间，是 2 时半。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！时针过了 2 还没到 3，分针指 6，是 2 时半。', tag: '几时半' },
  ],
  zu4: [
    { id: 'zu4-1', type: 'choice', q: '30 + 40 = ?', options: ['70', '7', '60', '80'], answer: 0, explain: '3 个十加 4 个十是 7 个十，就是 70。', tag: '整十数加减' },
    { id: 'zu4-2', type: 'choice', q: '80 - 50 = ?', options: ['30', '3', '40', '20'], answer: 0, explain: '8 个十减 5 个十是 3 个十，就是 30。', tag: '整十数加减' },
    { id: 'zu4-3', type: 'choice', q: '45 + 3 = ?', options: ['48', '75', '45', '58'], answer: 0, explain: '先算个位：5 + 3 = 8，再加 40 得 48。', tag: '加一位数' },
    { id: 'zu4-4', type: 'choice', q: '45 + 7 = ?', options: ['52', '42', '51', '62'], answer: 0, explain: '5 + 7 = 12，满十进一：40 + 12 = 52。', tag: '进位加法' },
    { id: 'zu4-5', type: 'choice', q: '36 - 4 = ?', options: ['32', '28', '34', '40'], answer: 0, explain: '先算个位：6 - 4 = 2，再加 30 得 32。', tag: '减一位数' },
    { id: 'zu4-6', type: 'choice', q: '36 - 8 = ?', options: ['28', '32', '30', '18'], answer: 0, explain: '6 减 8 不够减，打开一捆：16 - 8 = 8，20 + 8 = 28。', tag: '退位减法' },
    { id: 'zu4-7', type: 'choice', q: '23 + 30 = ?', options: ['53', '26', '63', '50'], answer: 0, explain: '2 个十加 3 个十是 5 个十，再加 3 个一，是 53。', tag: '加整十数' },
    { id: 'zu4-8', type: 'judge', q: '计算 36 - 8 时，可以先把 36 分成 20 和 16，算 16 - 8 = 8，再算 20 + 8 = 28。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！这就是退位减法的好办法：先减零头，再加整十。', tag: '退位减法' },
    { id: 'zu4-9', type: 'choice', q: '解决问题：小明有 25 元，买文具花了 8 元，还剩多少元？', options: ['17 元', '33 元', '23 元', '15 元'], answer: 0, explain: '25 - 8 = 17（元）。花掉了就用减法。', tag: '解决问题' },
    { id: 'zu4-10', type: 'choice', q: '（ ）+ 9 = 42，括号里填几？', options: ['33', '43', '51', '32'], answer: 0, explain: '想 42 - 9 = 33。加减法可以互相验算！', tag: '逆向思考' },
  ],
  zu5: [
    { id: 'zu5-1', type: 'choice', q: '比高矮的时候，应该怎么做才公平？', options: ['站在同一起点、同一地面上', '随便站着比', '一个站楼上一个站楼下', '闭着眼睛比'], answer: 0, explain: '要在同一起点、同一地面比较，这样才公平准确。', tag: '比高矮' },
    { id: 'zu5-2', type: 'choice', q: '量一支铅笔的长度，用什么单位合适？', options: ['厘米', '米', '千克', '元'], answer: 0, explain: '铅笔短短的，用厘米量合适；米用来量较长的物体。', tag: '认识厘米' },
    { id: 'zu5-3', type: 'choice', q: '1 米 = ? 厘米', options: ['100 厘米', '10 厘米', '50 厘米', '1000 厘米'], answer: 0, explain: '1 米 = 100 厘米，米和厘米是一对测量好朋友。', tag: '认识米' },
    { id: 'zu5-4', type: 'judge', q: '一支铅笔长约 18 厘米。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！铅笔大约两个手掌长，18 厘米很合理。', tag: '估一估' },
    { id: 'zu5-5', type: 'choice', q: '量教室的长，用什么单位合适？', options: ['米', '厘米', '元', '角'], answer: 0, explain: '教室长长的，用"米"作单位合适，量起来更方便。', tag: '认识米' },
    { id: 'zu5-6', type: 'choice', q: '用尺子从刻度 0 量到刻度 5，这根小棒长多少？', options: ['5 厘米', '6 厘米', '4 厘米', '10 厘米'], answer: 0, explain: '从 0 到 5 中间隔了 5 个大格，就是 5 厘米。', tag: '量一量' },
    { id: 'zu5-7', type: 'judge', q: '一块橡皮长约 2 米。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！橡皮只有两三厘米长，2 米可比小朋友还高呢。', tag: '估一估' },
    { id: 'zu5-8', type: 'choice', q: '教室的门高大约 2（ ）。', options: ['米', '厘米', '分', '元'], answer: 0, explain: '门比小朋友高一点，大约 2 米，用"米"作单位。', tag: '估一估' },
    { id: 'zu5-9', type: 'choice', q: '下面哪个物体长约 1 米？', options: ['一张课桌的长', '一栋楼的高', '一支铅笔的长', '一枚硬币的厚'], answer: 0, explain: '课桌的长差不多 1 米；楼高几十米，铅笔十几厘米，硬币不到 1 厘米。', tag: '估一估' },
    { id: 'zu5-10', type: 'judge', q: '量床的长度，用"米"作单位比用"厘米"方便。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！床大约 2 米，用米量只要 2 个单位，用厘米要 200 个呢。', tag: '认识米' },
  ],
  zu6: [
    { id: 'zu6-1', type: 'choice', q: '"一拃"是指什么？', options: ['大拇指到中指张开最远的距离', '头到脚的距离', '两臂张开的全长', '走一步的距离'], answer: 0, explain: '手指用力张开，大拇指尖到中指尖的距离就是一拃。', tag: '拃' },
    { id: 'zu6-2', type: 'choice', q: '两臂左右伸直，两只手之间的距离叫什么？', options: ['一庹', '一拃', '一步', '一脚'], answer: 0, explain: '两臂伸直的长度是一庹，大约和身高差不多呢！', tag: '庹' },
    { id: 'zu6-3', type: 'choice', q: '量教室的长，用哪种"身体尺"最合适？', options: ['步', '拃', '庹', '拇指'], answer: 0, explain: '教室长长的，用"步"量最方便，走一走数一数就行。', tag: '选身体尺' },
    { id: 'zu6-4', type: 'judge', q: '身体上的尺子随时随地都带着，真方便。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！拃、步、庹都是随身携带的"尺子"，没有尺子也能估长度。', tag: '身体尺' },
    { id: 'zu6-5', type: 'choice', q: '量黑板的长，用哪种"身体尺"合适？', options: ['一庹', '一拃', '一步', '一个脚长'], answer: 0, explain: '黑板比人高，张开双臂用"庹"来量，几庹就够了。', tag: '选身体尺' },
    { id: 'zu6-6', type: 'choice', q: '课桌的高大约有几拃？', options: ['5 拃左右', '1 拃左右', '15 拃左右', '50 拃左右'], answer: 0, explain: '一拃约 15 厘米，课桌高约 70 多厘米，5 拃左右正合适。', tag: '估一估' },
    { id: 'zu6-7', type: 'judge', q: '每个人的"身体尺"都一样长。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！高个子的一步比小个子长，每个人的身体尺都不太一样。', tag: '身体尺' },
    { id: 'zu6-8', type: 'choice', q: '量数学书的宽，用哪种"身体尺"合适？', options: ['拃', '庹', '步', '脚'], answer: 0, explain: '数学书宽窄窄的，用"拃"量最合适。', tag: '选身体尺' },
    { id: 'zu6-9', type: 'choice', q: '用身体尺测量时，正确的做法是？', options: ['先估一估，再量一量验证', '估完就不用管了', '只要猜一猜', '量完不用记录'], answer: 0, explain: '先估一估再量一量验证，估得越准说明你的"身体尺"越灵！', tag: '估与量' },
    { id: 'zu6-10', type: 'judge', q: '脚也可以当尺子用，量教室地面用"脚"也行。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！脚印一挨一排走一走，也能量出地面的长度呢。', tag: '身体尺' },
  ],
  zu7: [
    { id: 'zu7-1', type: 'choice', q: '找规律：5、10、15、20、（ ）。', options: ['25', '24', '30', '21'], answer: 0, explain: '每次多 5：5、10、15、20、25，这是 5 个 5 个地数。', tag: '找规律' },
    { id: 'zu7-2', type: 'choice', q: '找规律：2、4、6、8、（ ）。', options: ['10', '9', '11', '12'], answer: 0, explain: '每次多 2，8 再加 2 是 10，两个两个地数。', tag: '找规律' },
    { id: 'zu7-3', type: 'choice', q: '2 件上衣和 2 条裤子，一件上衣配一条裤子，有几种穿法？', options: ['4 种', '2 种', '3 种', '8 种'], answer: 0, explain: '2 × 2 = 4（种），每件上衣都能配 2 条裤子。', tag: '搭配' },
    { id: 'zu7-4', type: 'judge', q: '找规律：1、3、5、7，后面一个数是 8。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！这是从小到大的单数：1、3、5、7、9，后面是 9。', tag: '找规律' },
    { id: 'zu7-5', type: 'choice', q: '从 40 数到 50（包括 40 和 50），一共数了几个数？', options: ['11 个', '10 个', '9 个', '12 个'], answer: 0, explain: '40、41……50，两头都要数进去，一共 11 个数。', tag: '数一数' },
    { id: 'zu7-6', type: 'choice', q: '在百数表里，比 30 大 10 的数是？', options: ['40', '31', '20', '39'], answer: 0, explain: '百数表里同一列上下相邻的两个数相差 10，30 加 10 是 40。', tag: '百数表' },
    { id: 'zu7-7', type: 'choice', q: '3 顶帽子和 2 条围巾，一顶帽子配一条围巾，有几种搭配？', options: ['6 种', '5 种', '3 种', '9 种'], answer: 0, explain: '3 × 2 = 6（种），一顶帽子配 2 条围巾，3 顶就有 6 种。', tag: '搭配' },
    { id: 'zu7-8', type: 'judge', q: '两个两个地数：2、4、6、8、10。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！每次多 2，就是两个两个地数。', tag: '找规律' },
    { id: 'zu7-9', type: 'choice', q: '△ + △ = 8，△ = ？', options: ['4', '2', '8', '16'], answer: 0, explain: '两个一样的数合起来是 8，4 + 4 = 8，所以 △ = 4。', tag: '数阵' },
    { id: 'zu7-10', type: 'choice', q: '找规律：1、4、7、10、（ ）。', options: ['13', '11', '12', '14'], answer: 0, explain: '每次多 3：10 + 3 = 13。', tag: '找规律' },
  ],
  zu8: [
    { id: 'zu8-1', type: 'choice', q: '16 - 9 = ?', options: ['7', '6', '8', '5'], answer: 0, explain: '10 - 9 = 1，1 + 6 = 7。破十法又快又准！', tag: '退位减法' },
    { id: 'zu8-2', type: 'choice', q: '27 + 8 = ?', options: ['35', '25', '37', '33'], answer: 0, explain: '个位 7 + 8 = 15，满十进一：20 + 15 = 35。', tag: '进位加法' },
    { id: 'zu8-3', type: 'choice', q: '62 - 40 = ?', options: ['22', '26', '32', '20'], answer: 0, explain: '6 个十减 4 个十是 2 个十，再加 2 个一，是 22。', tag: '减整十数' },
    { id: 'zu8-4', type: 'choice', q: '85 里面有 8 个十和几个一？', options: ['5 个一', '8 个一', '85 个一', '3 个一'], answer: 0, explain: '85 = 80 + 5，十位是 8 个十，个位是 5 个一。', tag: '数的组成' },
    { id: 'zu8-5', type: 'judge', q: '1 元 = 10 角。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！10 个 1 角凑成 1 元，人民币的单位进率要记牢。', tag: '认识人民币' },
    { id: 'zu8-6', type: 'choice', q: '分针指着 12，时针指着 11，是几时？', options: ['11 时', '1 时', '12 时', '11 时半'], answer: 0, explain: '分针指 12，时针指几就是几时整，是 11 时。', tag: '认识钟表' },
    { id: 'zu8-7', type: 'choice', q: '下面哪个图形没有角？', options: ['圆', '长方形', '三角形', '正方形'], answer: 0, explain: '圆的边是弯弯的曲线，一个角都没有。', tag: '认识图形' },
    { id: 'zu8-8', type: 'choice', q: '解决问题：树上原来有 46 只鸟，飞走 20 只，又飞来 5 只，现在树上有几只？', options: ['31 只', '26 只', '41 只', '61 只'], answer: 0, explain: '46 - 20 = 26，26 + 5 = 31（只）。飞走用减，飞来用加。', tag: '解决问题' },
    { id: 'zu8-9', type: 'choice', q: '1 米 = ? 厘米', options: ['100 厘米', '10 厘米', '50 厘米', '1000 厘米'], answer: 0, explain: '1 米 = 100 厘米，这是长度单位重要的进率。', tag: '长度单位' },
    { id: 'zu8-10', type: 'judge', q: '89 的相邻数是 88 和 90。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！89 的前面是 88，后面是 90，两个邻居都记住。', tag: '数的顺序' },
  ],
}
