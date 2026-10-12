// 北师大版（北京师范大学出版社）数学一年级下册 随堂知识点题库
// 目录（电子课本网「北师大版一年级下册(2025春版)数学电子课本」2025 春新教材核对）：
//   一 20以内数与加法 / 二 图形大变身（一）·综合实践 设计教室装饰图 / 三 20以内数与减法
//   四 100以内数的认识 / 数学好玩 填数游戏 / 五 100以内数加与减（一）
//   六 有趣的平面图形（一）·综合实践 画数学连环画 / 总复习
// 8 关 × 10 题，题目 id 前缀 kg

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
    id: 'kg1',
    name: '第一单元',
    title: '20以内数与加法',
    emoji: '🌰',
    color: 'orange',
    lessons: ['9加几', '8加几', '5、4、3、2加几', '凑十法'],
    intro: '把大数凑成十再加一凑，20 以内的加法就变得又快又准！',
  },
  {
    id: 'kg2',
    name: '第二单元',
    title: '图形大变身（一）',
    emoji: '🧩',
    color: 'lime',
    lessons: ['拼一拼', '折一折', '剪一剪', '综合实践：设计教室装饰图'],
    intro: '图形宝宝会变身：拼一拼、折一折、剪一剪，变出好多新图形！',
  },
  {
    id: 'kg3',
    name: '第三单元',
    title: '20以内数与减法',
    emoji: '🎯',
    color: 'amber',
    lessons: ['十几减9', '十几减8、7', '十几减6、5、4、3、2', '比多比少'],
    intro: '十几减几不用怕：先破十再相加，或者想加法算减法！',
  },
  {
    id: 'kg4',
    name: '第四单元',
    title: '100以内数的认识',
    emoji: '🔢',
    color: 'teal',
    lessons: ['数一数', '数位的认识', '数的组成', '比大小'],
    intro: '10 个十是一百：数位排排队，个位十位各有各的本领！',
  },
  {
    id: 'kg5',
    name: '数学好玩',
    title: '填数游戏',
    emoji: '🎲',
    color: 'violet',
    lessons: ['找规律填数', '数阵填数', '填数谜'],
    intro: '数字排排队藏规律，睁大眼睛找一找，把空格都填满！',
  },
  {
    id: 'kg6',
    name: '第五单元',
    title: '100以内数加与减（一）',
    emoji: '➕',
    color: 'cyan',
    lessons: ['整十数加减整十数', '两位数加减一位数', '两位数加减整十数'],
    intro: '十位和十位算，个位和个位算，100 以内的加减真简单！',
  },
  {
    id: 'kg7',
    name: '第六单元',
    title: '有趣的平面图形（一）',
    emoji: '🔺',
    color: 'pink',
    lessons: ['认识长方形和正方形', '认识三角形和圆', '拼美丽的图案', '综合实践：画数学连环画'],
    intro: '长方形、正方形、三角形和圆：图形朋友手拉手，拼出美丽新世界！',
  },
  {
    id: 'kg8',
    name: '总复习',
    title: '学期大闯关',
    emoji: '🏆',
    color: 'red',
    lessons: ['数与代数', '图形与几何', '统计与概率', '综合与实践'],
    intro: '一学期的本领都学会了吗？大闯关开始，勇敢冲鸭！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  kg1: [
    { id: 'kg1-1', type: 'choice', q: '9 + 5 = ?', options: ['14', '15', '13', '16'], answer: 0, explain: '凑十法：9 + 1 = 10，再算 10 + 4 = 14。', tag: '凑十法' },
    { id: 'kg1-2', type: 'choice', q: '8 + 7 = ?', options: ['15', '16', '14', '13'], answer: 0, explain: '8 + 2 = 10，10 + 5 = 15。把 7 分成 2 和 5。', tag: '凑十法' },
    { id: 'kg1-3', type: 'choice', q: '池塘里有 6 条小鱼，又游来 8 条，一共有几条？', options: ['14 条', '13 条', '15 条', '12 条'], answer: 0, explain: '6 + 8 = 14（条）。4 + 8 = 12，12 + 2 = 14。', tag: '加法应用' },
    { id: 'kg1-4', type: 'choice', q: '7 + 6 = ?', options: ['13', '12', '14', '11'], answer: 0, explain: '7 + 3 = 10，10 + 3 = 13。把 6 分成 3 和 3。', tag: '凑十法' },
    { id: 'kg1-5', type: 'choice', q: '9 + 9 = ?', options: ['18', '19', '17', '16'], answer: 0, explain: '9 + 1 = 10，10 + 8 = 18。', tag: '凑十法' },
    { id: 'kg1-6', type: 'choice', q: '□ + 4 = 12，方框里填几？', options: ['8', '7', '9', '6'], answer: 0, explain: '想：12 - 4 = 8，8 + 4 = 12。', tag: '逆向思考' },
    { id: 'kg1-7', type: 'choice', q: '3 + 4 + 6 = ?', options: ['13', '12', '14', '11'], answer: 0, explain: '先算 3 + 4 = 7，再算 7 + 6 = 13。也可以先算 4 + 6 = 10，10 + 3 = 13 更快！', tag: '连加' },
    { id: 'kg1-8', type: 'choice', q: '小明摘了 5 个草莓，小红摘的和小明同样多，两人一共摘几个？', options: ['10 个', '9 个', '11 个', '8 个'], answer: 0, explain: '同样多就是也是 5 个：5 + 5 = 10（个）。', tag: '加法应用' },
    { id: 'kg1-9', type: 'judge', q: '计算 9 + 4 时，可以先把 9 凑成 10，再算 10 + 3 = 13。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对，这就是凑十法：把 4 分成 1 和 3。', tag: '凑十法' },
    { id: 'kg1-10', type: 'judge', q: '6 + 8 = 15。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：6 + 4 = 10，10 + 4 = 14，6 + 8 = 14 才对。', tag: '20以内加法' },
  ],
  kg2: [
    { id: 'kg2-1', type: 'choice', q: '七巧板一共有几块？', options: ['7 块', '5 块', '8 块', '6 块'], answer: 0, explain: '七巧板有 7 块：三角形、正方形都能找到，可以拼出好多图案！', tag: '七巧板' },
    { id: 'kg2-2', type: 'choice', q: '两个完全一样的正方形拼在一起，变成了什么图形？', options: ['长方形', '圆', '三角形', '还是正方形'], answer: 0, explain: '两个正方形并排站，就变成长方形啦，边数都不一样了！', tag: '图形拼组' },
    { id: 'kg2-3', type: 'choice', q: '把一张正方形纸沿着对角线（斜斜的对角）折一次，折出来的是什么图形？', options: ['三角形', '圆', '长方形', '正方形'], answer: 0, explain: '沿斜对角折，两个角碰在一起，就折出三角形。', tag: '折一折' },
    { id: 'kg2-4', type: 'choice', q: '4 个完全一样的小正方形排成一排，拼成的长方形一共用了几条边？', options: ['数不清，拼成长方形了', '4 条', '16 条', '8 条'], answer: 0, explain: '拼在一起后有些边贴在一起「藏」起来了，整体看是一个长方形。', tag: '图形拼组' },
    { id: 'kg2-5', type: 'choice', q: '设计教室装饰图时，用一张圆形纸对折再对折，能剪出什么形状的窗花？', options: ['扇子形（扇形）', '正方形', '三角形', '长方形'], answer: 0, explain: '圆形纸对折再对折，剪出的图形像打开的小扇子，贴在教室里真好看！', tag: '剪一剪' },
    { id: 'kg2-6', type: 'choice', q: '用两个完全一样的三角形拼一拼，下面哪种说法是对的？', options: ['可以拼成一个更大的三角形', '只能拼成正方形', '什么也拼不成', '只能拼成圆形'], answer: 0, explain: '两个一样的三角形头对头、边贴边，能拼出大三角形，转一转还能拼出长方形。', tag: '图形拼组' },
    { id: 'kg2-7', type: 'choice', q: '一张长方形纸对折一次，再对折一次，展开后有几道折痕？', options: ['2 道', '1 道', '3 道', '4 道'], answer: 0, explain: '对折一次 1 道折痕，再对折一次又 1 道，一共 2 道，纸上出现 4 个小格。', tag: '折一折' },
    { id: 'kg2-8', type: 'choice', q: '把一个长方形剪成两个完全一样的小长方形，每个小长方形和原来比：', options: ['变小了', '一样大', '变大了', '不能剪'], answer: 0, explain: '剪开后每个小长方形都是原来的一半，当然变小啦。', tag: '剪一剪' },
    { id: 'kg2-9', type: 'judge', q: '用七巧板可以拼出小房子、小船等很多有趣的图案。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！七巧板是神奇的拼图玩具，能拼出上百种图案。', tag: '七巧板' },
    { id: 'kg2-10', type: 'judge', q: '两个完全一样的三角形，只能拼成一种图形。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：摆法不同，可以拼出大三角形、长方形、平行四边形等不同图形。', tag: '图形拼组' },
  ],
  kg3: [
    { id: 'kg3-1', type: 'choice', q: '15 - 9 = ?', options: ['6', '5', '7', '4'], answer: 0, explain: '破十法：10 - 9 = 1，5 + 1 = 6。也可以想 9 + 6 = 15。', tag: '十几减9' },
    { id: 'kg3-2', type: 'choice', q: '13 - 8 = ?', options: ['5', '4', '6', '7'], answer: 0, explain: '想加法：8 + 5 = 13，所以 13 - 8 = 5。', tag: '十几减8' },
    { id: 'kg3-3', type: 'choice', q: '12 比 4 多几？', options: ['多 8', '多 9', '多 7', '多 16'], answer: 0, explain: '12 - 4 = 8，12 比 4 多 8。求多几用减法。', tag: '比多比少' },
    { id: 'kg3-4', type: 'choice', q: '11 - 2 = ?', options: ['9', '8', '10', '7'], answer: 0, explain: '11 - 1 = 10，10 - 1 = 9。平十法先把个位减完。', tag: '十几减2' },
    { id: 'kg3-5', type: 'choice', q: '□ - 5 = 7，方框里填几？', options: ['12', '11', '13', '2'], answer: 0, explain: '想：7 + 5 = 12，12 - 5 = 7。被减数是减数加差。', tag: '逆向思考' },
    { id: 'kg3-6', type: 'choice', q: '18 - 6 - 4 = ?', options: ['8', '9', '7', '10'], answer: 0, explain: '先算 18 - 6 = 12，再算 12 - 4 = 8。', tag: '连减' },
    { id: 'kg3-7', type: 'choice', q: '树上有 14 只小鸟，飞走了 6 只，还剩几只？', options: ['8 只', '7 只', '9 只', '6 只'], answer: 0, explain: '14 - 6 = 8（只）。10 - 6 = 4，4 + 4 = 8。', tag: '减法应用' },
    { id: 'kg3-8', type: 'choice', q: '16 - 7 = ?', options: ['9', '8', '10', '7'], answer: 0, explain: '破十法：10 - 7 = 3，6 + 3 = 9。', tag: '十几减7' },
    { id: 'kg3-9', type: 'judge', q: '计算 13 - 9 时，可以想「9 加几等于 13」。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对，因为 9 + 4 = 13，所以 13 - 9 = 4，这叫想加算减。', tag: '想加算减' },
    { id: 'kg3-10', type: 'judge', q: '17 - 8 = 10。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：10 - 8 = 2，7 + 2 = 9，17 - 8 = 9 才对。', tag: '十几减8' },
  ],
  kg4: [
    { id: 'kg4-1', type: 'choice', q: '10 个十是多少？', options: ['100', '10', '1000', '20'], answer: 0, explain: '一十、二十……十个十正好是一百！', tag: '数的组成' },
    { id: 'kg4-2', type: 'choice', q: '68 里面有（）个十和（）个一。', options: ['6 个十和 8 个一', '8 个十和 6 个一', '68 个十', '6 个十和 68 个一'], answer: 0, explain: '6 在十位上表示 6 个十，8 在个位上表示 8 个一。', tag: '数的组成' },
    { id: 'kg4-3', type: 'choice', q: '和 79 相邻的两个数是：', options: ['78 和 80', '77 和 78', '80 和 81', '69 和 89'], answer: 0, explain: '79 前面是 78，后面是 80，一前一后是邻居。', tag: '数的顺序' },
    { id: 'kg4-4', type: 'choice', q: '从右边起，第一位是（）位，第二位是（）位。', options: ['个位、十位', '十位、个位', '百位、个位', '个位、百位'], answer: 0, explain: '数位从右边数起：第一位个位，第二位十位，第三位百位。', tag: '数位' },
    { id: 'kg4-5', type: 'choice', q: '比 30 多 5 的数是几？', options: ['35', '25', '53', '45'], answer: 0, explain: '30 + 5 = 35。30 后面接着数 5 个：31、32、33、34、35。', tag: '数的顺序' },
    { id: 'kg4-6', type: 'choice', q: '45 的「4」表示什么？', options: ['4 个十', '4 个一', '4 个百', '45 个十'], answer: 0, explain: '4 在十位上，表示 4 个十，也就是 40。', tag: '数位' },
    { id: 'kg4-7', type: 'choice', q: '89 和 98 比大小：', options: ['89 < 98', '89 > 98', '89 = 98', '不能比'], answer: 0, explain: '先比十位：8 个十比 9 个十少，所以 89 < 98。', tag: '比大小' },
    { id: 'kg4-8', type: 'choice', q: '59 后面一个数是几？', options: ['60', '58', '61', '69'], answer: 0, explain: '59 再数一个就是 60：5 个十添 1 个十是 6 个十。', tag: '数的顺序' },
    { id: 'kg4-9', type: 'judge', q: '100 是最大的两位数。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：100 有三个数位，是三位数；最大的两位数是 99。', tag: '数位' },
    { id: 'kg4-10', type: 'judge', q: '读数和写数都从高位开始。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对，先读十位再读个位，比如 36 读作「三十六」。', tag: '读写数' },
  ],
  kg5: [
    { id: 'kg5-1', type: 'choice', q: '找规律填数：2、4、6、8、□', options: ['10', '9', '11', '7'], answer: 0, explain: '每次多 2：2、4、6、8、10，这是双数排队。', tag: '找规律' },
    { id: 'kg5-2', type: 'choice', q: '找规律填数：5、10、15、20、□', options: ['25', '24', '30', '21'], answer: 0, explain: '每次多 5：20 + 5 = 25。', tag: '找规律' },
    { id: 'kg5-3', type: 'choice', q: '两个数合起来要是 10：3 和 □', options: ['7', '6', '8', '5'], answer: 0, explain: '3 + 7 = 10，好朋友数凑成十。', tag: '凑十' },
    { id: 'kg5-4', type: 'choice', q: '找规律填数：1、3、5、7、□', options: ['9', '8', '10', '11'], answer: 0, explain: '每次多 2：这是单数队伍，7 后面是 9。', tag: '找规律' },
    { id: 'kg5-5', type: 'choice', q: '找规律填数：10、20、30、□', options: ['40', '35', '50', '31'], answer: 0, explain: '每次多 10：30 + 10 = 40。', tag: '找规律' },
    { id: 'kg5-6', type: 'choice', q: '找规律填数：3、6、9、12、□', options: ['15', '14', '16', '13'], answer: 0, explain: '每次多 3：12 + 3 = 15。', tag: '找规律' },
    { id: 'kg5-7', type: 'choice', q: '△ + △ = 8，△ = ?', options: ['4', '2', '6', '8'], answer: 0, explain: '两个一样的数合起来是 8：4 + 4 = 8，所以 △ 是 4。', tag: '填数谜' },
    { id: 'kg5-8', type: 'choice', q: '△ + ○ = 10，△ = 4，○ = ?', options: ['6', '5', '7', '4'], answer: 0, explain: '10 - 4 = 6，所以 ○ 是 6。', tag: '填数谜' },
    { id: 'kg5-9', type: 'judge', q: '找规律填数前，要先观察相邻两个数之间的关系。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对，先看是每次加几还是减几，规律找到了就能填对。', tag: '找规律' },
    { id: 'kg5-10', type: 'judge', q: '规律是 2、4、6、8，下一个数应该填 9。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：每次多 2，8 后面是 10，不是 9。', tag: '找规律' },
  ],
  kg6: [
    { id: 'kg6-1', type: 'choice', q: '30 + 40 = ?', options: ['70', '60', '80', '34'], answer: 0, explain: '3 个十加 4 个十是 7 个十，就是 70。', tag: '整十数加法' },
    { id: 'kg6-2', type: 'choice', q: '56 - 20 = ?', options: ['36', '54', '76', '34'], answer: 0, explain: '5 个十减 2 个十剩 3 个十，个位 6 不变：36。', tag: '两位数减整十数' },
    { id: 'kg6-3', type: 'choice', q: '45 + 3 = ?', options: ['48', '75', '42', '58'], answer: 0, explain: '个位相加：5 + 3 = 8，十位不变，45 + 3 = 48。', tag: '两位数加一位数' },
    { id: 'kg6-4', type: 'choice', q: '67 - 5 = ?', options: ['62', '17', '57', '72'], answer: 0, explain: '个位相减：7 - 5 = 2，十位不变，67 - 5 = 62。', tag: '两位数减一位数' },
    { id: 'kg6-5', type: 'choice', q: '32 + 20 = ?', options: ['52', '34', '72', '50'], answer: 0, explain: '十位相加：30 + 20 = 50，再加个位 2，是 52。', tag: '两位数加整十数' },
    { id: 'kg6-6', type: 'choice', q: '78 - 30 = ?', options: ['48', '75', '38', '45'], answer: 0, explain: '7 个十减 3 个十是 4 个十，个位 8 不变：48。', tag: '两位数减整十数' },
    { id: 'kg6-7', type: 'choice', q: '书架上有 34 本故事书，又放上去 5 本，现在有多少本？', options: ['39 本', '84 本', '29 本', '35 本'], answer: 0, explain: '34 + 5 = 39（本）。个位 4 + 5 = 9。', tag: '加法应用' },
    { id: 'kg6-8', type: 'choice', q: '妈妈买了 50 个樱桃，吃掉 10 个，还剩几个？', options: ['40 个', '60 个', '41 个', '39 个'], answer: 0, explain: '50 - 10 = 40（个）。5 个十减 1 个十是 4 个十。', tag: '减法应用' },
    { id: 'kg6-9', type: 'judge', q: '计算 43 + 20 时，先算 40 + 20 = 60，再算 60 + 3 = 63。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对，十位先相加，个位跟着搬过去。', tag: '两位数加整十数' },
    { id: 'kg6-10', type: 'judge', q: '96 - 6 = 36。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：个位 6 - 6 = 0，十位 9 不变，96 - 6 = 90。', tag: '两位数减一位数' },
  ],
  kg7: [
    { id: 'kg7-1', type: 'choice', q: '有三条边、三个角的图形是：', options: ['三角形', '长方形', '圆', '正方形'], answer: 0, explain: '三条边围起来，顶上三个尖角，就是三角形。', tag: '认识三角形' },
    { id: 'kg7-2', type: 'choice', q: '长方形和正方形有什么相同的地方？', options: ['都有四条边和四个角', '四条边都一样长', '都是圆圆的', '都有三条边'], answer: 0, explain: '它们都是四边形，有四条边四个角；不同的是正方形四条边一样长。', tag: '图形特征' },
    { id: 'kg7-3', type: 'choice', q: '汽车的车轮为什么做成圆形？', options: ['圆形没有角，可以滚动', '圆形最好看', '圆形最省材料', '随便选的'], answer: 0, explain: '圆圆的车轮没有角，滚起来又平又稳，汽车跑得快！', tag: '认识圆' },
    { id: 'kg7-4', type: 'choice', q: '红领巾是什么形状的？', options: ['三角形', '正方形', '圆形', '长方形'], answer: 0, explain: '红领巾有三条边，是三角形，戴上真精神！', tag: '生活中的图形' },
    { id: 'kg7-5', type: 'choice', q: '用小棒摆一个正方形，最少需要几根同样长的小棒？', options: ['4 根', '3 根', '5 根', '6 根'], answer: 0, explain: '正方形四条边一样长，4 根小棒正好围一圈。', tag: '图形特征' },
    { id: 'kg7-6', type: 'choice', q: '画数学连环画时，画小房子：屋顶用三角形，墙用正方形，烟囱可以用什么形状？', options: ['长方形', '三角形', '圆', '随便什么图形都行，只要像'], answer: 0, explain: '烟囱细细方方立在小房子上，用长方形最合适！', tag: '综合实践' },
    { id: 'kg7-7', type: 'choice', q: '数一数：一个长方形里横着画一条线、竖着画一条线，最多能分成几个小长方形？', options: ['4 个', '2 个', '3 个', '6 个'], answer: 0, explain: '像窗户一样，横竖各一刀，分成 4 个小格子。', tag: '图形分割' },
    { id: 'kg7-8', type: 'choice', q: '下面哪个图形没有角？', options: ['圆', '三角形', '长方形', '正方形'], answer: 0, explain: '圆是一条光滑的曲线围成的，一个角也没有。', tag: '认识圆' },
    { id: 'kg7-9', type: 'judge', q: '正方形的四条边一样长。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对，四条边一样长、四个角方方的，才是正方形。', tag: '图形特征' },
    { id: 'kg7-10', type: 'judge', q: '圆有很多个尖尖的角。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：圆是滑滑的曲线，一个角都没有。', tag: '认识圆' },
  ],
  kg8: [
    { id: 'kg8-1', type: 'choice', q: '12 - 4 + 3 = ?', options: ['11', '10', '12', '13'], answer: 0, explain: '先算 12 - 4 = 8，再算 8 + 3 = 11。从左往右算。', tag: '加减混合' },
    { id: 'kg8-2', type: 'choice', q: '8 + 9 = ?', options: ['17', '16', '18', '15'], answer: 0, explain: '凑十法：8 + 2 = 10，10 + 7 = 17。', tag: '凑十法' },
    { id: 'kg8-3', type: 'choice', q: '73 里面有（）个十和（）个一。', options: ['7 个十和 3 个一', '3 个十和 7 个一', '73 个一', '7 个十和 73 个一'], answer: 0, explain: '7 在十位是 7 个十，3 在个位是 3 个一。', tag: '数的组成' },
    { id: 'kg8-4', type: 'choice', q: '60 + 30 = ?', options: ['90', '63', '93', '80'], answer: 0, explain: '6 个十加 3 个十是 9 个十，就是 90。', tag: '整十数加法' },
    { id: 'kg8-5', type: 'choice', q: '17 - 9 = ?', options: ['8', '7', '9', '6'], answer: 0, explain: '破十法：10 - 9 = 1，7 + 1 = 8。', tag: '十几减9' },
    { id: 'kg8-6', type: 'choice', q: '46 和 64 谁大？', options: ['64', '46', '一样大', '不能比'], answer: 0, explain: '先比十位：6 个十比 4 个十大，所以 64 > 46。', tag: '比大小' },
    { id: 'kg8-7', type: 'choice', q: '找规律填数：11、13、15、□', options: ['17', '16', '18', '14'], answer: 0, explain: '每次多 2：15 + 2 = 17。', tag: '找规律' },
    { id: 'kg8-8', type: 'choice', q: '小明有 6 颗糖，妈妈又给他 8 颗，小明现在有几颗？', options: ['14 颗', '13 颗', '15 颗', '12 颗'], answer: 0, explain: '6 + 8 = 14（颗）。6 + 4 = 10，10 + 4 = 14。', tag: '加法应用' },
    { id: 'kg8-9', type: 'judge', q: '比 50 大、比 52 小的数只有一个，是 51。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对，51 就夹在 50 和 52 中间。', tag: '数的顺序' },
    { id: 'kg8-10', type: 'judge', q: '两个完全一样的三角形，可以拼成一个长方形。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对，两个一样的直角三角形边贴边拼，正好变成长方形。', tag: '图形拼组' },
  ],
}
