// 苏教版（江苏凤凰教育出版社）数学一年级下册 随堂知识点题库
// 目录（教师之家「小学数学苏教版一年级下册」现行版核对；2025 春起一年级新教材滚动替换，
// 过渡期新旧行动脉络一致，知识体系相同）：
//   一 20以内的退位减法 / 二 认识图形（二）/ 三 认识100以内的数 / 四 100以内的加法和减法（一）
//   五 元、角、分 / 六 100以内的加法和减法（二）/ 期末复习（综合实践：小小商店）
// 8 关 × 10 题（期末复习拆为计算闯关与小小商店两关），题目 id 前缀 sg

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
    id: 'sg1',
    name: '第一单元',
    title: '20以内的退位减法',
    emoji: '🎈',
    color: 'orange',
    lessons: ['十几减9', '十几减8、7', '十几减6、5、4、3、2'],
    intro: '个位不够减别着急，破十法、平十法帮你算得又快又准！',
  },
  {
    id: 'sg2',
    name: '第二单元',
    title: '认识图形（二）',
    emoji: '🔺',
    color: 'amber',
    lessons: ['认识长方形、正方形', '认识三角形', '认识圆', '图形拼组'],
    intro: '长方形、正方形、三角形和圆，平面图形朋友来报到！',
  },
  {
    id: 'sg3',
    name: '第三单元',
    title: '认识100以内的数',
    emoji: '🔢',
    color: 'lime',
    lessons: ['数数', '数的组成、写数', '100以内数的大小比较', '整十数加一位数及相应的减法'],
    intro: '10 个十是一百，几个十和几个一，组成两位数小主人！',
  },
  {
    id: 'sg4',
    name: '第四单元',
    title: '100以内的加法和减法（一）',
    emoji: '➕',
    color: 'teal',
    lessons: ['整十数加、减整十数', '两位数加整十数、一位数', '两位数减整十数、一位数', '求相差数'],
    intro: '整十数和整十数算，个位十位各管各，不进位不退位！',
  },
  {
    id: 'sg5',
    name: '第五单元',
    title: '元、角、分',
    emoji: '💰',
    color: 'cyan',
    lessons: ['认识人民币', '元、角、分', '简单的换算', '购物付钱'],
    intro: '1 元 = 10 角，1 角 = 10 分，认识人民币购物真方便！',
  },
  {
    id: 'sg6',
    name: '第六单元',
    title: '100以内的加法和减法（二）',
    emoji: '✏️',
    color: 'violet',
    lessons: ['两位数加一位数（进位）', '两位数减一位数（退位）', '两位数加两位数', '两位数减两位数'],
    intro: '个位满十向十位进 1，个位不够减向十位借 1，笔算不慌张！',
  },
  {
    id: 'sg7',
    name: '期末复习·计算闯关',
    title: '计算大闯关',
    emoji: '🏆',
    color: 'pink',
    lessons: ['100以内口算', '两位数笔算', '找规律'],
    intro: '口算笔算加找规律，一学期的好本领一起亮出来！',
  },
  {
    id: 'sg8',
    name: '综合实践·小小商店',
    title: '小小商店',
    emoji: '🛒',
    color: 'red',
    lessons: ['购物付钱', '找零钱', '提出并解决问题'],
    intro: '开一家小小商店，算价钱、找零钱，数学就在生活里！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  sg1: [
    { id: 'sg1-1', type: 'choice', q: '13 - 9 = ?', options: ['4', '3', '5', '14'], answer: 0, explain: '破十法：10 - 9 = 1，1 + 3 = 4。也可以想 9 + 4 = 13。', tag: '十几减9' },
    { id: 'sg1-2', type: 'choice', q: '15 - 8 = ?', options: ['7', '6', '8', '5'], answer: 0, explain: '想加算减：8 + 7 = 15，所以 15 - 8 = 7。', tag: '十几减8' },
    { id: 'sg1-3', type: 'choice', q: '14 - 7 = ?', options: ['7', '6', '8', '5'], answer: 0, explain: '10 - 7 = 3，3 + 4 = 7，14 - 7 = 7。', tag: '十几减7' },
    { id: 'sg1-4', type: 'choice', q: '11 - 6 = ?', options: ['5', '4', '6', '7'], answer: 0, explain: '想 6 + 5 = 11，所以 11 - 6 = 5。', tag: '十几减6' },
    { id: 'sg1-5', type: 'choice', q: '12 - 5 = ?', options: ['7', '6', '8', '17'], answer: 0, explain: '10 - 5 = 5，5 + 2 = 7，得数是 7。', tag: '十几减5' },
    { id: 'sg1-6', type: 'choice', q: '16 - 9 = ?', options: ['7', '8', '6', '9'], answer: 0, explain: '想加算减：9 + 7 = 16，所以 16 - 9 = 7。', tag: '十几减9' },
    { id: 'sg1-7', type: 'choice', q: '12 - 4 = ?', options: ['8', '7', '9', '6'], answer: 0, explain: '10 - 4 = 6，6 + 2 = 8，12 - 4 = 8。', tag: '十几减4' },
    { id: 'sg1-8', type: 'choice', q: '小明有 12 颗糖，吃了 3 颗，还剩几颗？', options: ['9 颗', '10 颗', '8 颗', '15 颗'], answer: 0, explain: '12 - 3 = 9（颗），去掉一部分用减法。', tag: '应用题' },
    { id: 'sg1-9', type: 'judge', q: '计算 15 - 9 时，可以先算 10 - 9 = 1，再算 1 + 5 = 6。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：这就是破十法，先破开一个十来减。', tag: '破十法' },
    { id: 'sg1-10', type: 'judge', q: '十几减 9，得数一定比 10 大。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：11 - 9 = 2，得数只有 2，比 10 小呢。', tag: '规律' },
  ],
  sg2: [
    { id: 'sg2-1', type: 'choice', q: '下面哪个图形有三条边？', options: ['三角形', '长方形', '正方形', '圆'], answer: 0, explain: '三角形有三条边、三个角，最容易认出来。', tag: '三角形' },
    { id: 'sg2-2', type: 'choice', q: '长方形和正方形都有几条边？', options: ['4 条', '3 条', '5 条', '6 条'], answer: 0, explain: '它们都是四边形，都有 4 条边、4 个角。', tag: '边数' },
    { id: 'sg2-3', type: 'choice', q: '硬币的面像什么图形？', options: ['圆', '长方形', '三角形', '正方形'], answer: 0, explain: '硬币的面圆圆的、边上没有角，像圆。', tag: '认识圆' },
    { id: 'sg2-4', type: 'choice', q: '正方形的四条边怎么样？', options: ['都一样长', '两条长两条短', '都不一样', '有长有短'], answer: 0, explain: '正方形四条边一样长，四个角一样大。', tag: '正方形' },
    { id: 'sg2-5', type: 'choice', q: '两个同样的正方形拼在一起，拼成什么图形？', options: ['长方形', '三角形', '圆', '五边形'], answer: 0, explain: '两个正方形肩并肩一拼，就变成长方形啦。', tag: '图形拼组' },
    { id: 'sg2-6', type: 'choice', q: '图里有 3 个三角形和 2 个圆，一共有几个图形？', options: ['5 个', '3 个', '2 个', '6 个'], answer: 0, explain: '3 + 2 = 5（个），合起来数一数。', tag: '数图形' },
    { id: 'sg2-7', type: 'choice', q: '长方形的对边怎么样？', options: ['一样长', '一条长一条短', '都不一样长', '一样短'], answer: 0, explain: '长方形上、下两条边一样长，左、右两条边也一样长。', tag: '长方形' },
    { id: 'sg2-8', type: 'choice', q: '语文书的封面像什么图形？', options: ['长方形', '圆', '三角形', '球'], answer: 0, explain: '语文书封面长长方方的，像长方形。', tag: '找图形' },
    { id: 'sg2-9', type: 'judge', q: '圆没有角，边是弯弯的。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：圆是一条光滑的曲线围成的，没有角。', tag: '圆' },
    { id: 'sg2-10', type: 'judge', q: '正方形和长方形完全一样，没有区别。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：正方形四条边一样长，长方形只是对边一样长。', tag: '正方形与长方形' },
  ],
  sg3: [
    { id: 'sg3-1', type: 'choice', q: '68 里面有几个十和几个一？', options: ['6 个十和 8 个一', '8 个十和 6 个一', '6 个十和 6 个一', '68 个一'], answer: 0, explain: '6 个十写在十位，8 个一写在个位，合起来是 68。', tag: '数的组成' },
    { id: 'sg3-2', type: 'choice', q: '与 79 相邻的两个数是？', options: ['78 和 80', '77 和 79', '78 和 81', '79 和 80'], answer: 0, explain: '79 前面是 78，后面是 80，相邻数相差 1。', tag: '相邻数' },
    { id: 'sg3-3', type: 'choice', q: '五个五个地数：30、35、40、接着数是几？', options: ['45', '41', '50', '44'], answer: 0, explain: '五个五个数，每次多 5：40 后面是 45。', tag: '数数' },
    { id: 'sg3-4', type: 'choice', q: '4 个十和 5 个一合起来是多少？', options: ['45', '54', '405', '9'], answer: 0, explain: '先写十位上的 4，再写个位上的 5，就是 45。', tag: '写数' },
    { id: 'sg3-5', type: 'choice', q: '比 50 大、比 52 小的数是几？', options: ['51', '49', '53', '50'], answer: 0, explain: '50 和 52 中间正好夹着 51。', tag: '数的顺序' },
    { id: 'sg3-6', type: 'choice', q: '最大的两位数是几？', options: ['99', '90', '100', '98'], answer: 0, explain: '十位个位都放最大的 9，就是 99，再大就要三位数了。', tag: '100以内数' },
    { id: 'sg3-7', type: 'choice', q: '10 个十是多少？', options: ['100', '10', '20', '99'], answer: 0, explain: '10 个十捆成一大捆，就是 100！', tag: '数的组成' },
    { id: 'sg3-8', type: 'choice', q: '37、40、90 三个数中，比 36 大得多的数是？', options: ['90', '40', '37', '35'], answer: 0, explain: '40、37 只比 36 大一点点，90 大得多。', tag: '大得多' },
    { id: 'sg3-9', type: 'judge', q: '个位是 3 的两位数只有 13。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：23、33、43……个位是 3 的两位数多着呢。', tag: '数位' },
    { id: 'sg3-10', type: 'judge', q: '读数和写数都从高位开始。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：先读十位再读个位，写数也一样。', tag: '读数写数' },
  ],
  sg4: [
    { id: 'sg4-1', type: 'choice', q: '30 + 40 = ?', options: ['70', '34', '7', '700'], answer: 0, explain: '3 个十加 4 个十是 7 个十，就是 70。', tag: '整十数加减' },
    { id: 'sg4-2', type: 'choice', q: '80 - 50 = ?', options: ['30', '3', '35', '13'], answer: 0, explain: '8 个十减 5 个十是 3 个十，就是 30。', tag: '整十数加减' },
    { id: 'sg4-3', type: 'choice', q: '45 + 3 = ?', options: ['48', '75', '42', '58'], answer: 0, explain: '先算个位 5 + 3 = 8，十位不变，是 48。', tag: '两位数加一位数' },
    { id: 'sg4-4', type: 'choice', q: '45 + 30 = ?', options: ['75', '48', '72', '57'], answer: 0, explain: '先算十位 40 + 30 = 70，再加 5，是 75。', tag: '两位数加整十数' },
    { id: 'sg4-5', type: 'choice', q: '67 - 4 = ?', options: ['63', '27', '67', '71'], answer: 0, explain: '先算个位 7 - 4 = 3，十位不变，是 63。', tag: '两位数减一位数' },
    { id: 'sg4-6', type: 'choice', q: '67 - 40 = ?', options: ['27', '63', '23', '37'], answer: 0, explain: '先算十位 60 - 40 = 20，再加 7，是 27。', tag: '两位数减整十数' },
    { id: 'sg4-7', type: 'choice', q: '42 比 40 多多少？', options: ['2', '82', '22', '12'], answer: 0, explain: '42 - 40 = 2，求相差数用减法。', tag: '求相差数' },
    { id: 'sg4-8', type: 'choice', q: '小明跳绳 30 下，小红跳 35 下，小红比小明多跳几下？', options: ['5 下', '65 下', '3 下', '15 下'], answer: 0, explain: '35 - 30 = 5（下），大数减小数就是相差数。', tag: '应用题' },
    { id: 'sg4-9', type: 'judge', q: '计算 52 + 30 时，先算 2 + 3 = 5。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：应该先把整十的 50 和 30 相加，再算 80 + 2 = 82。', tag: '计算顺序' },
    { id: 'sg4-10', type: 'judge', q: '78 比 70 多 8。', options: ['√ 对', '✗ 错'], answer: 0, explain: '78 - 70 = 8，完全正确！', tag: '求相差数' },
  ],
  sg5: [
    { id: 'sg5-1', type: 'choice', q: '1 元 = ? 角', options: ['10 角', '5 角', '100 角', '1 角'], answer: 0, explain: '1 元 = 10 角，元和角是 10 倍关系。', tag: '元角分' },
    { id: 'sg5-2', type: 'choice', q: '1 角 = ? 分', options: ['10 分', '5 分', '100 分', '1 分'], answer: 0, explain: '1 角 = 10 分，角和分也是 10 倍关系。', tag: '元角分' },
    { id: 'sg5-3', type: 'choice', q: '1 元 2 角 = ? 角', options: ['12 角', '3 角', '102 角', '21 角'], answer: 0, explain: '1 元是 10 角，再加 2 角，一共 12 角。', tag: '换算' },
    { id: 'sg5-4', type: 'choice', q: '15 角 = ? 元 ? 角', options: ['1 元 5 角', '5 元 1 角', '10 元 5 角', '1 元 15 角'], answer: 0, explain: '10 角是 1 元，剩下的 5 角不变，是 1 元 5 角。', tag: '换算' },
    { id: 'sg5-5', type: 'choice', q: '一支铅笔 5 角，一本本子 1 元，哪个贵？', options: ['本子', '铅笔', '一样贵', '不能比'], answer: 0, explain: '1 元 = 10 角，10 角比 5 角多，本子贵。', tag: '比较价钱' },
    { id: 'sg5-6', type: 'choice', q: '买 8 角的橡皮，付 1 元，找回多少？', options: ['2 角', '8 角', '1 角 8 分', '18 角'], answer: 0, explain: '1 元 = 10 角，10 - 8 = 2（角），找回 2 角。', tag: '找零' },
    { id: 'sg5-7', type: 'choice', q: '5 角 + 5 角 = ?', options: ['1 元', '10 元', '1 角', '2 元'], answer: 0, explain: '10 角正好是 1 元，两个 5 角凑一元！', tag: '换算' },
    { id: 'sg5-8', type: 'choice', q: '邮票 8 角一张，买 2 张一共多少钱？', options: ['1 元 6 角', '1 元', '1 元 8 角', '16 元'], answer: 0, explain: '8 + 8 = 16（角），16 角 = 1 元 6 角。', tag: '购物' },
    { id: 'sg5-9', type: 'judge', q: '1 元比 9 角多。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：1 元 = 10 角，10 角 > 9 角，所以 1 元比 9 角多。', tag: '比较' },
    { id: 'sg5-10', type: 'judge', q: '5 角 = 5 元。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：5 元 = 50 角，5 角比 5 元少得多呢。', tag: '换算' },
  ],
  sg6: [
    { id: 'sg6-1', type: 'choice', q: '38 + 5 = ?', options: ['43', '33', '42', '53'], answer: 0, explain: '先算 8 + 5 = 13，满十进一，30 + 13 = 43。', tag: '进位加' },
    { id: 'sg6-2', type: 'choice', q: '63 + 7 = ?', options: ['70', '69', '71', '60'], answer: 0, explain: '3 + 7 = 10，满十进一，60 + 10 = 70。', tag: '进位加' },
    { id: 'sg6-3', type: 'choice', q: '42 - 6 = ?', options: ['36', '38', '46', '34'], answer: 0, explain: '个位 2 不够减，向十位借 1：12 - 6 = 6，是 36。', tag: '退位减' },
    { id: 'sg6-4', type: 'choice', q: '55 - 8 = ?', options: ['47', '57', '48', '45'], answer: 0, explain: '15 - 8 = 7，借位后 40 + 7 = 47。', tag: '退位减' },
    { id: 'sg6-5', type: 'choice', q: '25 + 17 = ?', options: ['42', '32', '41', '52'], answer: 0, explain: '个位 5 + 7 = 12 进 1，十位 2 + 1 + 1 = 4，是 42。', tag: '两位数加两位数' },
    { id: 'sg6-6', type: 'choice', q: '81 - 45 = ?', options: ['36', '46', '35', '44'], answer: 0, explain: '个位 1 不够减借 1 变 11：11 - 5 = 6，7 - 4 = 3，是 36。', tag: '两位数减两位数' },
    { id: 'sg6-7', type: 'choice', q: '笔算加减法时，要把哪一位对齐？', options: ['相同数位对齐', '随便写', '把 0 对齐', '末尾空两格'], answer: 0, explain: '个位对个位，十位对十位，相同数位对齐才能算。', tag: '竖式' },
    { id: 'sg6-8', type: 'choice', q: '苹果有 36 个，梨有 28 个，一共有多少个？', options: ['64 个', '8 个', '54 个', '74 个'], answer: 0, explain: '36 + 28：个位 6 + 8 = 14 进 1，3 + 2 + 1 = 6，共 64 个。', tag: '应用题' },
    { id: 'sg6-9', type: 'judge', q: '笔算加法时，个位满十要向十位进 1。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：满十进一，这是笔算加法的规矩。', tag: '进位加' },
    { id: 'sg6-10', type: 'judge', q: '33 - 7 = 34。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：个位 3 不够减要借位，13 - 7 = 6，33 - 7 = 26。', tag: '退位减' },
  ],
  sg7: [
    { id: 'sg7-1', type: 'choice', q: '20 + 56 = ?', options: ['76', '66', '86', '72'], answer: 0, explain: '2 个十加 5 个十是 7 个十，再加 6，是 76。', tag: '口算' },
    { id: 'sg7-2', type: 'choice', q: '90 - 60 = ?', options: ['30', '3', '33', '60'], answer: 0, explain: '9 个十减 6 个十是 3 个十，是 30。', tag: '口算' },
    { id: 'sg7-3', type: 'choice', q: '44 + 8 = ?', options: ['52', '48', '51', '62'], answer: 0, explain: '4 + 8 = 12，满十进一，40 + 12 = 52。', tag: '进位加' },
    { id: 'sg7-4', type: 'choice', q: '73 - 5 = ?', options: ['68', '78', '67', '58'], answer: 0, explain: '13 - 5 = 8，借位后 60 + 8 = 68。', tag: '退位减' },
    { id: 'sg7-5', type: 'choice', q: '17 - 9 + 6 = ?', options: ['14', '13', '8', '2'], answer: 0, explain: '先算 17 - 9 = 8，再算 8 + 6 = 14。从左往右算。', tag: '加减混合' },
    { id: 'sg7-6', type: 'choice', q: '8 + 7 - 9 = ?', options: ['6', '15', '5', '24'], answer: 0, explain: '先算 8 + 7 = 15，再算 15 - 9 = 6。', tag: '加减混合' },
    { id: 'sg7-7', type: 'choice', q: '找规律：23、33、43、（？）', options: ['53', '44', '63', '52'], answer: 0, explain: '每次多 10，43 + 10 = 53。', tag: '找规律' },
    { id: 'sg7-8', type: 'choice', q: '找规律：95、90、85、（？）', options: ['80', '75', '90', '86'], answer: 0, explain: '每次少 5，85 - 5 = 80。', tag: '找规律' },
    { id: 'sg7-9', type: 'judge', q: '计算 36 + 40 时，先算 6 + 0 = 6。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：先把整十数相加 30 + 40 = 70，再算 70 + 6 = 76。', tag: '计算顺序' },
    { id: 'sg7-10', type: 'judge', q: '30 + 9 = 93。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：3 个十加 9 个一是 39，不是 93。', tag: '口算' },
  ],
  sg8: [
    { id: 'sg8-1', type: 'choice', q: '买一支 6 角的铅笔，付 1 元，找回多少？', options: ['4 角', '6 角', '1 角', '5 角'], answer: 0, explain: '1 元 = 10 角，10 - 6 = 4（角）。', tag: '找零' },
    { id: 'sg8-2', type: 'choice', q: '书包 35 元，文具盒 12 元，一共多少元？', options: ['47 元', '23 元', '43 元', '57 元'], answer: 0, explain: '35 + 12 = 47（元），合起来用加法。', tag: '购物' },
    { id: 'sg8-3', type: 'choice', q: '小明有 20 元，买 8 元的故事书，还剩多少元？', options: ['12 元', '8 元', '28 元', '10 元'], answer: 0, explain: '20 - 8 = 12（元），付钱后剩下的用减法。', tag: '购物' },
    { id: 'sg8-4', type: 'choice', q: '1 元可以买几支 5 角的棒棒糖？', options: ['2 支', '1 支', '5 支', '10 支'], answer: 0, explain: '1 元 = 10 角，10 ÷ 5 = 2（支），正好买 2 支。', tag: '购物' },
    { id: 'sg8-5', type: 'choice', q: '橡皮 7 角，尺子 9 角，哪个便宜？', options: ['橡皮', '尺子', '一样', '不能比'], answer: 0, explain: '7 角 < 9 角，橡皮便宜 2 角。', tag: '比较价钱' },
    { id: 'sg8-6', type: 'choice', q: '故事书 15 元，漫画 9 元，故事书贵多少元？', options: ['6 元', '24 元', '5 元', '16 元'], answer: 0, explain: '15 - 9 = 6（元），求相差数用减法。', tag: '求相差数' },
    { id: 'sg8-7', type: 'choice', q: '付 10 元买 7 元的玩具，找回多少？', options: ['3 元', '7 元', '13 元', '2 元'], answer: 0, explain: '10 - 7 = 3（元），找回 3 元。', tag: '找零' },
    { id: 'sg8-8', type: 'choice', q: '小红攒了 9 角，再攒几角就是 1 元？', options: ['1 角', '9 角', '10 角', '2 角'], answer: 0, explain: '9 + 1 = 10 角 = 1 元，再攒 1 角就够啦。', tag: '元角分' },
    { id: 'sg8-9', type: 'judge', q: '买东西时，付的钱可以比价钱少。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：付的钱必须不少于价钱，不然老板要亏本啦。', tag: '购物' },
    { id: 'sg8-10', type: 'judge', q: '一张 5 元可以换 5 张 1 元。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：5 个 1 元合起来正好是 5 元。', tag: '人民币' },
  ],
}
