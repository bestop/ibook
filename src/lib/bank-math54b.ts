// 沪教版（五·四学制·上海教育出版社）数学六年级下册（预备年级第二学期）题库（现行版目录）
// 目录（电子课本网核对）：
//   第五章 有理数 / 第六章 一次方程（组）和一次不等式（组）/ 第七章 线段与角的画法 / 第八章 长方体的再认识
// 第六章内容量大，拆为"一次方程与方程组""一次不等式"两关；每个单元一关，每关 10 题，题目 id 前缀 zz

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
    id: 'zz1',
    name: '第五章',
    title: '有理数',
    emoji: '🔢',
    color: 'indigo',
    lessons: ['有理数的意义', '数轴与绝对值', '有理数的加减法', '有理数的乘除与乘方', '科学记数法'],
    intro: '正数、负数、零组成有理数大家庭，数轴上排排队，四则运算样样通！',
  },
  {
    id: 'zz2',
    name: '第六章（一）',
    title: '一次方程与方程组',
    emoji: '⚖️',
    color: 'orange',
    lessons: ['列方程与方程的解', '一元一次方程及其解法', '一元一次方程的应用', '二元一次方程组及其解法', '一次方程组的应用'],
    intro: '移项要变号，去括号看符号，一元一次方程、二元一次方程组各个击破！',
  },
  {
    id: 'zz3',
    name: '第六章（二）',
    title: '一次不等式',
    emoji: '🚦',
    color: 'cyan',
    lessons: ['不等式及其性质', '一元一次不等式的解法', '一元一次不等式组'],
    intro: '不等号像跷跷板：同乘负数要变向，解集在数轴上看得明明白白！',
  },
  {
    id: 'zz4',
    name: '第七章',
    title: '线段与角的画法',
    emoji: '📐',
    color: 'amber',
    lessons: ['线段的大小比较与画法', '角的概念与表示', '角的大小比较与画法', '余角、补角'],
    intro: '尺规画线段、量角器画角，余角补角和是定值，几何画图从这里起步！',
  },
  {
    id: 'zz5',
    name: '第八章',
    title: '长方体的再认识',
    emoji: '📦',
    color: 'green',
    lessons: ['长方体的元素', '长方体直观图的画法', '长方体中棱与棱的位置关系', '长方体中棱与平面、平面与平面的位置关系'],
    intro: '重新认识老朋友长方体：棱与棱、棱与面、面与面的位置关系一目了然！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zz1: [
    { id: 'zz1-1', type: 'choice', q: '-3 的绝对值是多少？', options: ['3', '-3', '0', '1/3'], answer: 0, explain: '|-3| = 3。绝对值表示数轴上这个数到原点的距离，距离不为负。', tag: '绝对值' },
    { id: 'zz1-2', type: 'choice', q: '数轴的三要素是？', options: ['原点、正方向、单位长度', '刻度、箭头、颜色', '原点、长度、宽度', '起点、终点、方向'], answer: 0, explain: '规定了原点、正方向和单位长度的直线叫数轴。', tag: '数轴' },
    { id: 'zz1-3', type: 'judge', q: '0 是正数。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！0 既不是正数，也不是负数，它是正负数的分界。', tag: '有理数' },
    { id: 'zz1-4', type: 'choice', q: '(-2) + (-3) = ?', options: ['-5', '5', '-1', '1'], answer: 0, explain: '同号相加，取相同的符号，绝对值相加：2 + 3 = 5，得 -5。', tag: '有理数加法' },
    { id: 'zz1-5', type: 'choice', q: '(-2) × 3 = ?', options: ['-6', '6', '-5', '5'], answer: 0, explain: '异号相乘得负，绝对值相乘：2 × 3 = 6，得 -6。', tag: '有理数乘法' },
    { id: 'zz1-6', type: 'choice', q: '-8 ÷ 4 = ?', options: ['-2', '2', '-4', '4'], answer: 0, explain: '异号相除得负：8 ÷ 4 = 2，得 -2。', tag: '有理数除法' },
    { id: 'zz1-7', type: 'choice', q: '2 的相反数是？', options: ['-2', '2', '0.5', '1/2'], answer: 0, explain: '只有符号不同的两个数互为相反数，2 的相反数是 -2。', tag: '相反数' },
    { id: 'zz1-8', type: 'judge', q: '|+5| = 5。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！正数的绝对值是它本身。', tag: '绝对值' },
    { id: 'zz1-9', type: 'choice', q: '2 的三次方（2³）等于多少？', options: ['8', '6', '9', '5'], answer: 0, explain: '2³ = 2 × 2 × 2 = 8。乘方是相同因数的乘法。', tag: '乘方' },
    { id: 'zz1-10', type: 'choice', q: '35000 用科学记数法表示为？', options: ['3.5 × 10⁴', '35 × 10³', '0.35 × 10⁵', '3.5 × 10³'], answer: 0, explain: '科学记数法写成 a×10ⁿ（1≤a<10）：35000 = 3.5 × 10⁴。', tag: '科学记数法' },
  ],
  zz2: [
    { id: 'zz2-1', type: 'judge', q: 'x = 2 是方程 3x - 1 = 5 的解。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！代入检验：3 × 2 - 1 = 5，等式成立。', tag: '方程的解' },
    { id: 'zz2-2', type: 'choice', q: '解方程：2x + 3 = 11，x = ?', options: ['4', '7', '14', '5'], answer: 0, explain: '两边减 3：2x = 8，再除以 2：x = 4。', tag: '一元一次方程' },
    { id: 'zz2-3', type: 'choice', q: '一元一次方程的特点是？', options: ['只含一个未知数，且未知数的次数是 1', '有两个未知数', '未知数的次数是 2', '没有未知数'], answer: 0, explain: '"一元"指一个未知数，"一次"指次数是 1。', tag: '方程概念' },
    { id: 'zz2-4', type: 'choice', q: '解方程移项时，要注意什么？', options: ['移项要变号（加变减、减变加）', '移项不变号', '全部项都要移', '只移数字不移字母'], answer: 0, explain: '移项的本质是两边同加减，移过去要变号。', tag: '移项' },
    { id: 'zz2-5', type: 'choice', q: '小红买 4 本同样的笔记本，付 20 元找回 4 元，每本 x 元。方程是？', options: ['4x + 4 = 20', '4x - 4 = 20', 'x + 4 = 20', '4 + x = 20'], answer: 0, explain: '花的钱加找回的等于付的：4x + 4 = 20，x = 4（元）。', tag: '应用题' },
    { id: 'zz2-6', type: 'choice', q: '二元一次方程组中含有几个未知数？', options: ['两个', '一个', '三个以上', '没有'], answer: 0, explain: '"二元"指含有两个未知数，且每个方程都是一次的。', tag: '方程组概念' },
    { id: 'zz2-7', type: 'choice', q: '若 x + y = 7 且 x - y = 3，则 x = ?', options: ['5', '2', '3', '10'], answer: 0, explain: '两式相加：2x = 10，x = 5，y = 2。这就是加减消元法。', tag: '解方程组' },
    { id: 'zz2-8', type: 'judge', q: '方程组 x + y = 1 与 x + y = 2 没有公共解。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！x + y 不可能既等于 1 又等于 2，这个方程组无解。', tag: '方程组' },
    { id: 'zz2-9', type: 'choice', q: '解二元一次方程组的基本思路是"消元"，常用方法有？', options: ['代入消元法和加减消元法', '画图法和列表法', '试数法和猜数法', '乘方法和开方'], answer: 0, explain: '代入消元、加减消元都是把"二元"变"一元"，化繁为简。', tag: '消元' },
    { id: 'zz2-10', type: 'choice', q: '两个数的和是 12，差是 4，较大的数是？', options: ['8', '4', '6', '16'], answer: 0, explain: '设两数为 x、y：x + y = 12，x - y = 4，相加得 2x = 16，x = 8。', tag: '应用题' },
  ],
  zz3: [
    { id: 'zz3-1', type: 'choice', q: '不等式两边同时加上同一个数，不等号方向？', options: ['不变', '改变', '变成等号', '无法确定'], answer: 0, explain: '不等式性质 1：两边同加减同一个数，不等号方向不变。', tag: '不等式性质' },
    { id: 'zz3-2', type: 'choice', q: '不等式两边同时乘同一个负数，不等号方向？', options: ['改变', '不变', '变成等号', '消失'], answer: 0, explain: '不等式性质 3：两边同乘负数，不等号方向要改变！', tag: '不等式性质' },
    { id: 'zz3-3', type: 'choice', q: '不等式 x + 3 > 5 的解集是？', options: ['x > 2', 'x < 2', 'x > 8', 'x < 8'], answer: 0, explain: '两边同时减 3：x > 2。', tag: '解不等式' },
    { id: 'zz3-4', type: 'judge', q: 'x = 3 是不等式 x + 1 > 3 的一个解。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！代入检验：3 + 1 = 4 > 3，成立。', tag: '不等式的解' },
    { id: 'zz3-5', type: 'choice', q: '不等式组 x > 1 且 x < 4 的解集是？', options: ['1 < x < 4', 'x < 1', 'x > 4', '无解'], answer: 0, explain: '两个条件都要满足，取公共部分：1 < x < 4。', tag: '不等式组' },
    { id: 'zz3-6', type: 'choice', q: '在数轴上表示 x > 2 时，2 处的点是空心还是实心？', options: ['空心（不包含 2）', '实心（包含 2）', '随意', '不画点'], answer: 0, explain: '大于号或小于号不含等号，画空心圈；含等号（大于等于、小于等于）画实心点。', tag: '数轴表示' },
    { id: 'zz3-7', type: 'choice', q: '不等式 -2x > 4 的解集是？', options: ['x < -2', 'x > -2', 'x < 2', 'x > 2'], answer: 0, explain: '两边同除以 -2，不等号变向：x < -2。', tag: '解不等式' },
    { id: 'zz3-8', type: 'judge', q: '不等式 3x < 6 的解集是 x < 2。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！两边同除以正数 3，方向不变：x < 2。', tag: '解不等式' },
    { id: 'zz3-9', type: 'choice', q: '小明有 50 元，笔每支 6 元，他最多能买几支（钱要够）？', options: ['8 支', '9 支', '7 支', '10 支'], answer: 0, explain: '6 × 8 = 48 ≤ 50，6 × 9 = 54 > 50，最多买 8 支。', tag: '应用题' },
    { id: 'zz3-10', type: 'judge', q: 'x ≤ 3 与 x < 3 的区别是：x ≤ 3 包含 3 本身。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！"≤"表示小于或等于，3 本身也是 x ≤ 3 的解。', tag: '解集' },
  ],
  zz4: [
    { id: 'zz4-1', type: 'choice', q: '比较两条线段的长短，常用的方法是？', options: ['叠合法或度量法', '目测法', '猜想法', '平移法'], answer: 0, explain: '把两条线段一端对齐叠合，或用刻度尺量出长度比较。', tag: '线段比较' },
    { id: 'zz4-2', type: 'choice', q: '画一条线段等于已知线段，可以用什么工具截取？', options: ['圆规', '三角板', '量角器', '橡皮'], answer: 0, explain: '用圆规量取已知线段长度，再在射线上一端截取。', tag: '画线段' },
    { id: 'zz4-3', type: 'choice', q: '角是由什么组成的图形？', options: ['有公共端点的两条射线', '两条平行线', '两条线段', '一条射线'], answer: 0, explain: '角：公共端点是顶点，两条射线是边。', tag: '角的概念' },
    { id: 'zz4-4', type: 'choice', q: '用三个大写字母表示角（如 ∠AOB）时，顶点字母必须写在？', options: ['中间', '最前面', '最后面', '任意位置'], answer: 0, explain: '顶点字母 O 写在中间：∠AOB 表示以 O 为顶点的角。', tag: '角的表示' },
    { id: 'zz4-5', type: 'judge', q: '角的大小与角两边的长短无关。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！角的两边是射线，看张开的大小，不看画多长。', tag: '角的大小' },
    { id: 'zz4-6', type: 'choice', q: '两个角互为余角，它们的和是？', options: ['90°', '180°', '360°', '45°'], answer: 0, explain: '和为 90° 的两个角互为余角；和为 180° 的互为补角。', tag: '余角' },
    { id: 'zz4-7', type: 'choice', q: '两个角互为补角，它们的和是？', options: ['180°', '90°', '270°', '60°'], answer: 0, explain: '和为 180° 的两个角互为补角。', tag: '补角' },
    { id: 'zz4-8', type: 'choice', q: '50° 角的余角是多少度？', options: ['40°', '130°', '50°', '140°'], answer: 0, explain: '90° - 50° = 40°。', tag: '余角' },
    { id: 'zz4-9', type: 'choice', q: '35° 角的补角是多少度？', options: ['145°', '55°', '65°', '325°'], answer: 0, explain: '180° - 35° = 145°。', tag: '补角' },
    { id: 'zz4-10', type: 'judge', q: '30° 和 60° 的两个角互为余角。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！30° + 60° = 90°，互为余角。', tag: '余角' },
  ],
  zz5: [
    { id: 'zz5-1', type: 'choice', q: '长方体有几条棱、几个顶点、几个面？', options: ['12 条棱、8 个顶点、6 个面', '8 条棱、12 个顶点、6 个面', '6 条棱、8 个顶点、12 个面', '12 条棱、6 个顶点、8 个面'], answer: 0, explain: '长方体：12 条棱、8 个顶点、6 个面（一般 6 个面都是长方形）。', tag: '长方体元素' },
    { id: 'zz5-2', type: 'choice', q: '画长方体直观图时，表示看不见的棱要画成？', options: ['虚线', '实线', '粗线', '彩色线'], answer: 0, explain: '被遮住的棱用虚线表示，直观图才立体清楚。', tag: '直观图' },
    { id: 'zz5-3', type: 'choice', q: '空间里两条不平行也不相交的直线，位置关系叫？', options: ['异面', '垂直', '相交', '重合'], answer: 0, explain: '不同在任何一个平面内的两条直线是异面直线。', tag: '棱与棱' },
    { id: 'zz5-4', type: 'judge', q: '长方体中，从同一个顶点出发的三条棱两两垂直。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！长、宽、高三条棱两两垂直。', tag: '棱与棱' },
    { id: 'zz5-5', type: 'choice', q: '长方体的侧棱与底面的位置关系是？', options: ['垂直', '平行', '在底面内', '异面'], answer: 0, explain: '长方体的侧棱垂直于底面，这也是棱与平面垂直的例子。', tag: '棱与平面' },
    { id: 'zz5-6', type: 'choice', q: '长方体中相对的两个面的位置关系是？', options: ['平行', '垂直', '相交', '重合'], answer: 0, explain: '相对的面互相平行，相邻的面互相垂直。', tag: '面与面' },
    { id: 'zz5-7', type: 'judge', q: '长方体相邻的两个面互相垂直。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！相邻两面相交，交成的二面角是直的，所以互相垂直。', tag: '面与面' },
    { id: 'zz5-8', type: 'choice', q: '一个长方体最多有几个面是正方形？', options: ['2 个', '6 个', '4 个', '1 个'], answer: 0, explain: '最多 2 个相对的面是正方形；若 6 个面都是正方形，它就变成正方体了。', tag: '长方体' },
    { id: 'zz5-9', type: 'choice', q: '长方体的 12 条棱可以分成几组，每组几条相等？', options: ['3 组，每组 4 条', '4 组，每组 3 条', '2 组，每组 6 条', '6 组，每组 2 条'], answer: 0, explain: '长、宽、高各 4 条，共 3 组，每组 4 条相等。', tag: '长方体元素' },
    { id: 'zz5-10', type: 'judge', q: '正方体是特殊的长方体。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！棱都相等的长方体就是正方体。', tag: '正方体' },
  ],
}
