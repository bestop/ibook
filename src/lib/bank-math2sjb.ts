// 苏教版（江苏凤凰教育出版社）数学二年级下册 随堂知识点题库
// 目录（教师之家「小学数学苏教版二年级下册」现行版核对；新教材过渡期知识体系一致）：
//   一 有余数的除法 / 二 时、分、秒 / 三 认识方向 / 四 认识万以内的数 / 五 分米和毫米
//   六 两、三位数的加法和减法 / 七 角的初步认识 / 八 数据的收集和整理（一）/ 期末复习
// 8 关 × 10 题，题目 id 前缀 sh

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
    id: 'sh1',
    name: '第一单元',
    title: '有余数的除法',
    emoji: '🍓',
    color: 'orange',
    lessons: ['有余数除法的认识', '除法竖式', '余数与除数的关系', '解决实际问题'],
    intro: '平均分有剩余，剩下的叫余数，余数一定要比除数小！',
  },
  {
    id: 'sh2',
    name: '第二单元',
    title: '时、分、秒',
    emoji: '⏰',
    color: 'amber',
    lessons: ['认识几时几分', '认识秒', '时间的简单计算'],
    intro: '时针慢慢走，分针快快跑，秒针滴答滴答一小格！',
  },
  {
    id: 'sh3',
    name: '第三单元',
    title: '认识方向',
    emoji: '🧭',
    color: 'lime',
    lessons: ['认识东、南、西、北', '认识东北、东南、西北、西南', '描述行走路线'],
    intro: '太阳从东方升起，地图上北下南、左西右东！',
  },
  {
    id: 'sh4',
    name: '第四单元',
    title: '认识万以内的数',
    emoji: '🔢',
    color: 'teal',
    lessons: ['认识千以内的数', '认识万以内的数', '数的组成和读写', '数的大小比较', '近似数'],
    intro: '10 个一百是一千，10 个一千是一万，大数朋友真不少！',
  },
  {
    id: 'sh5',
    name: '第五单元',
    title: '分米和毫米',
    emoji: '📏',
    color: 'cyan',
    lessons: ['认识分米', '认识毫米', '长度单位换算'],
    intro: '1 分米 = 10 厘米，1 厘米 = 10 毫米，小尺子藏着大秘密！',
  },
  {
    id: 'sh6',
    name: '第六单元',
    title: '两、三位数的加法和减法',
    emoji: '✏️',
    color: 'violet',
    lessons: ['口算两位数加减两位数', '三位数加三位数', '三位数减三位数', '验算'],
    intro: '相同数位对齐，从个位算起，进位退位要记牢！',
  },
  {
    id: 'sh7',
    name: '第七单元',
    title: '角的初步认识',
    emoji: '📐',
    color: 'pink',
    lessons: ['认识角', '认识直角、锐角、钝角'],
    intro: '一个顶点两条边，比直角小是锐角，比直角大是钝角！',
  },
  {
    id: 'sh8',
    name: '第八单元',
    title: '数据的收集和整理（一）',
    emoji: '📊',
    color: 'red',
    lessons: ['分类整理', '简单统计表'],
    intro: '调查、画「正」字、填表格，数据整理我最棒！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  sh1: [
    { id: 'sh1-1', type: 'choice', q: '17 ÷ 3 = ?', options: ['5 余 2', '4 余 5', '5 余 1', '6 余 1'], answer: 0, explain: '3 × 5 = 15，17 - 15 = 2，所以 17 ÷ 3 = 5 余 2。', tag: '有余数除法' },
    { id: 'sh1-2', type: 'choice', q: '余数和除数比，余数必须？', options: ['比除数小', '比除数大', '和除数一样大', '随便多大'], answer: 0, explain: '余数如果等于或大于除数，说明还能再分一份，所以余数一定比除数小。', tag: '余数与除数' },
    { id: 'sh1-3', type: 'choice', q: '22 ÷ 4 = ?', options: ['5 余 2', '6 余 2', '5 余 1', '4 余 6'], answer: 0, explain: '4 × 5 = 20，22 - 20 = 2，商 5 余 2。', tag: '有余数除法' },
    { id: 'sh1-4', type: 'choice', q: '□ ÷ 6 = 4 …… □，余数最大是几？', options: ['5', '6', '4', '7'], answer: 0, explain: '余数要比除数 6 小，最大就是 5。', tag: '余数最大' },
    { id: 'sh1-5', type: 'choice', q: '13 朵花，每 4 朵插一瓶，能插满几瓶，还剩几朵？', options: ['3 瓶余 1 朵', '4 瓶余 1 朵', '3 瓶余 2 朵', '2 瓶余 5 朵'], answer: 0, explain: '13 ÷ 4 = 3 余 1，能插满 3 瓶，还剩 1 朵。', tag: '应用题' },
    { id: 'sh1-6', type: 'choice', q: '20 ÷ 6 = ?', options: ['3 余 2', '3 余 1', '2 余 8', '4 余 4'], answer: 0, explain: '6 × 3 = 18，20 - 18 = 2，商 3 余 2。', tag: '有余数除法' },
    { id: 'sh1-7', type: 'choice', q: '竖式计算 17 ÷ 5，商 3，3 × 5 = 15 写在被除数下面，15 表示？', options: ['已经分掉的数', '剩下的数', '一共的数', '每份的数'], answer: 0, explain: '商和除数的乘积表示已经分掉的部分，剩下的 2 才是余数。', tag: '除法竖式' },
    { id: 'sh1-8', type: 'choice', q: '二(1)班 25 人划船，每条船最多坐 4 人，至少要几条船？', options: ['7 条', '6 条', '5 条', '8 条'], answer: 0, explain: '25 ÷ 4 = 6 余 1，剩下的 1 人也要坐船，所以至少要 7 条。', tag: '进一法' },
    { id: 'sh1-9', type: 'judge', q: '48 ÷ 5 = 9 …… 3。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：5 × 9 = 45，48 - 45 = 3，余数 3 比 5 小，正确。', tag: '有余数除法' },
    { id: 'sh1-10', type: 'judge', q: '在有余数的除法里，余数可以和除数一样大。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：余数和除数一样大，就还能再分一份，余数必须比除数小。', tag: '余数与除数' },
  ],
  sh2: [
    { id: 'sh2-1', type: 'choice', q: '钟面上有（?）个大格？', options: ['12 个', '60 个', '10 个', '24 个'], answer: 0, explain: '钟面上 1 到 12，一共 12 个大格，每个大格里有 5 小格。', tag: '认识钟面' },
    { id: 'sh2-2', type: 'choice', q: '分针走一圈，时针走多远？', options: ['1 大格', '一圈', '半圈', '2 大格'], answer: 0, explain: '分针走 60 小格（1 圈），时针正好走 1 大格，就是 1 时。', tag: '时分关系' },
    { id: 'sh2-3', type: 'choice', q: '1 时 = ? 分', options: ['60 分', '100 分', '10 分', '30 分'], answer: 0, explain: '1 时 = 60 分，时针走 1 大格，分针正好走一圈。', tag: '时分换算' },
    { id: 'sh2-4', type: 'choice', q: '1 分 = ? 秒', options: ['60 秒', '100 秒', '10 秒', '30 秒'], answer: 0, explain: '秒针走一圈是 60 秒，正好 1 分。', tag: '分秒换算' },
    { id: 'sh2-5', type: 'choice', q: '秒针走一小格是多久？', options: ['1 秒', '1 分', '5 秒', '1 时'], answer: 0, explain: '秒针走一小格是 1 秒，走一大格是 5 秒。', tag: '认识秒' },
    { id: 'sh2-6', type: 'choice', q: '看动画用了 30 分钟，再看 30 分钟，一共看了多久？', options: ['1 时', '1 分', '60 秒', '2 时'], answer: 0, explain: '30 + 30 = 60（分），60 分 = 1 时。', tag: '时间计算' },
    { id: 'sh2-7', type: 'choice', q: '小红早上 7:30 到校，小明 7:50 到校，谁到得早？', options: ['小红', '小明', '一样早', '不能比'], answer: 0, explain: '7:30 比 7:50 早 20 分钟，小红先到学校。', tag: '比较时间' },
    { id: 'sh2-8', type: 'choice', q: '唱一首歌大约用多长时间？', options: ['3 分', '3 秒', '3 时', '30 秒'], answer: 0, explain: '一首歌大约 3 分钟；3 秒太短，3 时太长。', tag: '时间估计' },
    { id: 'sh2-9', type: 'judge', q: '8 时 5 分可以写成 8:05。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：8 时 5 分写成 8:05，分不满 10 要补 0。', tag: '写时间' },
    { id: 'sh2-10', type: 'judge', q: '1 分 30 秒比 90 秒短。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：1 分 = 60 秒，60 + 30 = 90 秒，一样长。', tag: '时间换算' },
  ],
  sh3: [
    { id: 'sh3-1', type: 'choice', q: '太阳每天从（?）方升起。', options: ['东', '西', '南', '北'], answer: 0, explain: '太阳从东方升起、西方落下，这是辨认方向的好帮手。', tag: '东南西北' },
    { id: 'sh3-2', type: 'choice', q: '面向北站立时，右面是哪一方？', options: ['东', '西', '南', '北'], answer: 0, explain: '面向北时，前面北、后面南、左面西、右面东。', tag: '辨认方向' },
    { id: 'sh3-3', type: 'choice', q: '看地图时，上面通常是哪一方？', options: ['北', '南', '西', '东'], answer: 0, explain: '地图方向：上北、下南、左西、右东。', tag: '地图方向' },
    { id: 'sh3-4', type: 'choice', q: '面向南站立，背后是哪一方？', options: ['北', '东', '南', '西'], answer: 0, explain: '南北相对，面向南，背后就是北。', tag: '相对方向' },
    { id: 'sh3-5', type: 'choice', q: '东北方向在哪两个方向之间？', options: ['东和北', '东和南', '西和北', '南和北'], answer: 0, explain: '东北是东和北中间的方向，东南西北四个角都这样认。', tag: '复合方向' },
    { id: 'sh3-6', type: 'choice', q: '小明面向东方，他的左面是哪一方？', options: ['北', '南', '西', '东'], answer: 0, explain: '面向东：右面南、左面北、后面西。', tag: '辨认方向' },
    { id: 'sh3-7', type: 'choice', q: '傍晚树影指向东方，太阳在哪一方？', options: ['西', '东', '南', '北'], answer: 0, explain: '影子总是背着太阳：影子在东，太阳就在西。', tag: '生活应用' },
    { id: 'sh3-8', type: 'choice', q: '与西南相对的方向是？', options: ['东北', '西北', '东南', '正南'], answer: 0, explain: '西南对东北，东南对西北，正好斜着相对。', tag: '相对方向' },
    { id: 'sh3-9', type: 'judge', q: '面向北时，左面是西，右面是东。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：面向北张开双臂，左手西、右手东。', tag: '辨认方向' },
    { id: 'sh3-10', type: 'judge', q: '面向东方时，背对的方向是南。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：东西相对，面向东，背后是西。', tag: '相对方向' },
  ],
  sh4: [
    { id: 'sh4-1', type: 'choice', q: '10 个一百是多少？', options: ['一千', '一百', '一万', '九十'], answer: 0, explain: '一百一百地数，10 个一百正好是一千。', tag: '认识千' },
    { id: 'sh4-2', type: 'choice', q: '3 个千和 5 个百组成的数是？', options: ['3500', '3050', '5003', '35'], answer: 0, explain: '千位写 3，百位写 5，其他数位写 0，是 3500。', tag: '数的组成' },
    { id: 'sh4-3', type: 'choice', q: '4802 读作？', options: ['四千八百零二', '四千八百二十二', '四千零八十二', '四八零二'], answer: 0, explain: '千位 4、百位 8、十位 0 要读「零」、个位 2，读作四千八百零二。', tag: '读数' },
    { id: 'sh4-4', type: 'choice', q: '与 1000 相邻的两个数是？', options: ['999 和 1001', '990 和 1010', '998 和 1002', '900 和 1100'], answer: 0, explain: '1000 前面是 999，后面是 1001。', tag: '数数' },
    { id: 'sh4-5', type: 'choice', q: '6070 的数字 7 在哪一位上？', options: ['十位', '百位', '千位', '个位'], answer: 0, explain: '从右往左数：个位 0、十位 7、百位 0、千位 6。', tag: '数位' },
    { id: 'sh4-6', type: 'choice', q: '906 和 960 比，谁大？', options: ['960', '906', '一样大', '不能比'], answer: 0, explain: '百位都是 9，比十位：6 > 0，所以 960 大。', tag: '比较大小' },
    { id: 'sh4-7', type: 'choice', q: '一部手机大约 2000 元，这里的 2000 是？', options: ['近似数', '准确数', '猜的数', '最小的数'], answer: 0, explain: '「大约」表示不是准确价格，2000 是近似数。', tag: '近似数' },
    { id: 'sh4-8', type: 'choice', q: '最大的三位数与最小的四位数相差多少？', options: ['1', '100', '10', '999'], answer: 0, explain: '999 和 1000 相邻，正好相差 1。', tag: '数数' },
    { id: 'sh4-9', type: 'judge', q: '万以内的数，从高位读起，末尾的 0 都不读。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：如 4800 读作四千八百，末尾两个 0 不读。', tag: '读数' },
    { id: 'sh4-10', type: 'judge', q: '比 500 少 1 的数是 490。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：500 - 1 = 499，不是 490。', tag: '数数' },
  ],
  sh5: [
    { id: 'sh5-1', type: 'choice', q: '1 分米 = ? 厘米', options: ['10 厘米', '100 厘米', '5 厘米', '1 厘米'], answer: 0, explain: '1 分米 = 10 厘米，两个同学的手掌并起来差不多。', tag: '认识分米' },
    { id: 'sh5-2', type: 'choice', q: '1 厘米 = ? 毫米', options: ['10 毫米', '100 毫米', '5 毫米', '2 毫米'], answer: 0, explain: '尺子上 1 厘米中间有 10 个小格，每小格 1 毫米。', tag: '认识毫米' },
    { id: 'sh5-3', type: 'choice', q: '1 米 = ? 分米', options: ['10 分米', '100 分米', '1 分米', '5 分米'], answer: 0, explain: '1 米 = 10 分米 = 100 厘米。', tag: '长度换算' },
    { id: 'sh5-4', type: 'choice', q: '一张银行卡的厚度大约是 1（?）。', options: ['毫米', '厘米', '分米', '米'], answer: 0, explain: '银行卡很薄，大约 1 毫米厚。', tag: '单位选择' },
    { id: 'sh5-5', type: 'choice', q: '数学书的长大约是 2（?）。', options: ['分米', '米', '毫米', '千米'], answer: 0, explain: '数学书长约 20 厘米，就是 2 分米。', tag: '单位选择' },
    { id: 'sh5-6', type: 'choice', q: '30 毫米 = ? 厘米', options: ['3 厘米', '30 厘米', '300 厘米', '13 厘米'], answer: 0, explain: '10 毫米是 1 厘米，30 毫米是 3 厘米。', tag: '长度换算' },
    { id: 'sh5-7', type: 'choice', q: '小明量铅笔长 17 厘米，也就是几分米几厘米？', options: ['1 分米 7 厘米', '7 分米 1 厘米', '17 分米', '1 分米 17 厘米'], answer: 0, explain: '10 厘米是 1 分米，17 厘米 = 1 分米 7 厘米。', tag: '长度换算' },
    { id: 'sh5-8', type: 'choice', q: '量一枚硬币的厚度，用什么单位最合适？', options: ['毫米', '米', '分米', '千米'], answer: 0, explain: '硬币很薄，用毫米量最合适。', tag: '单位选择' },
    { id: 'sh5-9', type: 'judge', q: '1 分米比 9 厘米长。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：1 分米 = 10 厘米，比 9 厘米长 1 厘米。', tag: '比较长度' },
    { id: 'sh5-10', type: 'judge', q: '一根跳绳长 2 毫米。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：2 毫米比指甲还薄，跳绳大约长 2 米。', tag: '单位选择' },
  ],
  sh6: [
    { id: 'sh6-1', type: 'choice', q: '35 + 24 = ?', options: ['59', '69', '49', '58'], answer: 0, explain: '30 + 20 = 50，5 + 4 = 9，合起来 59。', tag: '口算' },
    { id: 'sh6-2', type: 'choice', q: '67 - 32 = ?', options: ['35', '45', '39', '25'], answer: 0, explain: '60 - 30 = 30，7 - 2 = 5，是 35。', tag: '口算' },
    { id: 'sh6-3', type: 'choice', q: '345 + 256 = ?', options: ['601', '591', '611', '501'], answer: 0, explain: '个位 5+6=11 进 1，十位 4+5+1=10 进 1，百位 3+2+1=6，是 601。', tag: '三位数加法' },
    { id: 'sh6-4', type: 'choice', q: '612 - 378 = ?', options: ['234', '244', '266', '134'], answer: 0, explain: '个位借位 12-8=4，十位借位 10-7=3，百位 5-3=2，是 234。', tag: '三位数减法' },
    { id: 'sh6-5', type: 'choice', q: '计算加法后想知道对不对，可以？', options: ['用和减一个加数看是否得另一个加数', '再算一遍乘法', '不用检查', '把数加大'], answer: 0, explain: '加法用减法验算：和 - 一个加数 = 另一个加数。', tag: '验算' },
    { id: 'sh6-6', type: 'choice', q: '书架上层有 120 本，下层比上层多 35 本，下层有几本？', options: ['155 本', '85 本', '185 本', '125 本'], answer: 0, explain: '120 + 35 = 155（本），比多就用加。', tag: '应用题' },
    { id: 'sh6-7', type: 'choice', q: '工厂上午生产 420 个零件，下午生产 380 个，一共多少个？', options: ['800 个', '40 个', '760 个', '820 个'], answer: 0, explain: '420 + 380 = 800（个）。', tag: '应用题' },
    { id: 'sh6-8', type: 'choice', q: '500 - 260 = ?', options: ['240', '340', '260', '230'], answer: 0, explain: '先算 500 - 200 = 300，再减 60 得 240。', tag: '口算' },
    { id: 'sh6-9', type: 'judge', q: '笔算加减法时，要把相同数位对齐，从个位算起。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：个位对个位、十位对十位，从个位算起。', tag: '笔算法则' },
    { id: 'sh6-10', type: 'judge', q: '计算 402 - 158 时，十位不够减要向百位借 1。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：个位先借，十位 0 不够再向百位借 1 当 10。', tag: '连续退位' },
  ],
  sh7: [
    { id: 'sh7-1', type: 'choice', q: '一个角有（?）个顶点和（?）条边？', options: ['1 个顶点 2 条边', '2 个顶点 1 条边', '1 个顶点 1 条边', '没有顶点'], answer: 0, explain: '角有一个顶点、两条边，顶点尖尖的。', tag: '认识角' },
    { id: 'sh7-2', type: 'choice', q: '三角尺上最大的那个角是？', options: ['直角', '锐角', '钝角', '平角'], answer: 0, explain: '每副三角尺都有一个直角，另外两个是锐角。', tag: '直角' },
    { id: 'sh7-3', type: 'choice', q: '比直角小的角叫？', options: ['锐角', '钝角', '直角', '没有名字'], answer: 0, explain: '锐角尖尖的、张口小，比直角小。', tag: '锐角' },
    { id: 'sh7-4', type: 'choice', q: '比直角大的角叫？', options: ['钝角', '锐角', '直角', '小角'], answer: 0, explain: '钝角张口大，比直角大。', tag: '钝角' },
    { id: 'sh7-5', type: 'choice', q: '要知道一个角是不是直角，可以？', options: ['用三角尺上的直角比一比', '用眼睛猜', '数边数', '量长短'], answer: 0, explain: '把三角尺的直角顶点和角重合，两条边都对齐就是直角。', tag: '判断直角' },
    { id: 'sh7-6', type: 'choice', q: '红领巾上有几个角？', options: ['3 个', '1 个', '2 个', '4 个'], answer: 0, explain: '红领巾是三角形，有 3 个角。', tag: '找角' },
    { id: 'sh7-7', type: 'choice', q: '角的大小与边的长短有关吗？', options: ['无关，与张口大小有关', '边越长角越大', '边越短角越大', '都有关系'], answer: 0, explain: '角的大小看两边张开的口，边的长短不影响角的大小。', tag: '角的大小' },
    { id: 'sh7-8', type: 'choice', q: '把一个角的两边画得更长，这个角？', options: ['大小不变', '变大', '变小', '变成直角'], answer: 0, explain: '边只是画长，张口没变，角的大小不变。', tag: '角的大小' },
    { id: 'sh7-9', type: 'judge', q: '课本的封面上有直角。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：课本封面四个角都是直角。', tag: '找直角' },
    { id: 'sh7-10', type: 'judge', q: '锐角比钝角大。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：锐角比直角小，钝角比直角大，所以钝角更大。', tag: '比角' },
  ],
  sh8: [
    { id: 'sh8-1', type: 'choice', q: '想知道班里同学最喜欢哪种运动，要先做什么？', options: ['调查并记录', '直接猜', '问老师一个人', '看课本'], answer: 0, explain: '收集数据要先调查记录，再整理成统计表。', tag: '数据收集' },
    { id: 'sh8-2', type: 'choice', q: '用画「正」字记录数据，一个「正」字表示几？', options: ['5', '4', '10', '1'], answer: 0, explain: '「正」字 5 画，一个「正」字记 5 个。', tag: '记录方法' },
    { id: 'sh8-3', type: 'choice', q: '把统计结果填进表格，这样的表叫？', options: ['统计表', '课程表', '记分册', '日历'], answer: 0, explain: '整理数据用的表格叫统计表。', tag: '统计表' },
    { id: 'sh8-4', type: 'choice', q: '统计路口 10 分钟通过的车辆，按什么分类记录最合适？', options: ['小汽车、公共汽车、卡车等种类', '司机的高矮', '车的价格', '随便分'], answer: 0, explain: '按车的种类分类，每辆车都能归入一类，记录最清楚。', tag: '分类标准' },
    { id: 'sh8-5', type: 'choice', q: '喜欢跳绳的有 15 人，喜欢踢毽的有 9 人，跳绳的比踢毽的多几人？', options: ['6 人', '24 人', '5 人', '16 人'], answer: 0, explain: '15 - 9 = 6（人），相差数用减法。', tag: '数据分析' },
    { id: 'sh8-6', type: 'choice', q: '图书角有故事书 45 本，比科技书多 12 本，科技书有几本？', options: ['33 本', '57 本', '45 本', '12 本'], answer: 0, explain: '45 - 12 = 33（本），「比多」反过来要用减。', tag: '应用题' },
    { id: 'sh8-7', type: 'choice', q: '记录同学上下学方式：步行的 12 人，坐车的 8 人，全班共多少人被统计？', options: ['20 人', '4 人', '12 人', '8 人'], answer: 0, explain: '12 + 8 = 20（人），所有分类人数合起来是总数。', tag: '数据分析' },
    { id: 'sh8-8', type: 'choice', q: '整理数据时发现漏记了 3 人，应该？', options: ['重新调查补上', '不管它', '把总数减 3', '改成别人的数'], answer: 0, explain: '数据要真实完整，漏了要重新调查补上。', tag: '数据收集' },
    { id: 'sh8-9', type: 'judge', q: '统计前要先收集和整理数据。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：调查收集、分类整理，才能做出统计表。', tag: '统计过程' },
    { id: 'sh8-10', type: 'judge', q: '一个「正」字表示 4 个数据。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：「正」字有 5 画，一个「正」字表示 5 个数据。', tag: '记录方法' },
  ],
}
