// 苏教版（江苏凤凰教育出版社）数学五年级下册 随堂知识点题库
// 目录（教师之家「小学数学苏教版五年级下册」现行版核对）：
//   一 简易方程 / 二 折线统计图 / 三 因数与倍数 / 四 分数的意义和性质 / 五 分数加法和减法
//   六 圆 / 七 解决问题的策略 / 八 整理与复习
// 8 关 × 10 题，题目 id 前缀 sk

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
    id: 'sk1',
    name: '第一单元',
    title: '简易方程',
    emoji: '⚖️',
    color: 'orange',
    lessons: ['等式与方程', '等式的性质', '解方程', '列方程解决实际问题'],
    intro: '含有未知数的等式叫方程，等式两边同变化，天平永远平！',
  },
  {
    id: 'sk2',
    name: '第二单元',
    title: '折线统计图',
    emoji: '📈',
    color: 'amber',
    lessons: ['折线统计图的特点', '读折线统计图', '选择合适的统计图'],
    intro: '点和线手拉手，升降起伏一眼看穿，变化趋势它最懂！',
  },
  {
    id: 'sk3',
    name: '第三单元',
    title: '因数与倍数',
    emoji: '🔗',
    color: 'lime',
    lessons: ['因数与倍数', '2、5 的倍数特征', '3 的倍数特征', '质数与合数'],
    intro: '因数倍数互相找，2、5、3 的倍数有诀窍，质数合数分得清！',
  },
  {
    id: 'sk4',
    name: '第四单元',
    title: '分数的意义和性质',
    emoji: '🍕',
    color: 'teal',
    lessons: ['分数的意义', '真分数与假分数', '分数的基本性质', '约分与通分', '分数与小数互化'],
    intro: '平均分产生分数，基本性质变中不变，约分通分本领大！',
  },
  {
    id: 'sk5',
    name: '第五单元',
    title: '分数加法和减法',
    emoji: '🧮',
    color: 'cyan',
    lessons: ['同分母分数加减', '异分母分数加减', '分数加减混合运算'],
    intro: '同分母直接加减，异分母先通分，结果记得要约分！',
  },
  {
    id: 'sk6',
    name: '第六单元',
    title: '圆',
    emoji: '⭕',
    color: 'violet',
    lessons: ['圆的认识', '圆的周长', '圆的面积'],
    intro: '圆心定位置，半径定大小，圆周率 π 是圆的灵魂！',
  },
  {
    id: 'sk7',
    name: '第七单元',
    title: '解决问题的策略',
    emoji: '🔄',
    color: 'pink',
    lessons: ['转化策略', '不规则图形的转化', '用转化巧算'],
    intro: '把没学过的变成学过的，转一转化一化，难题不再怕！',
  },
  {
    id: 'sk8',
    name: '第八单元',
    title: '整理与复习',
    emoji: '🏆',
    color: 'red',
    lessons: ['数与代数整理', '图形与统计整理', '综合应用'],
    intro: '方程、分数、圆，串成知识项链，期末闯关发光发亮！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  sk1: [
    { id: 'sk1-1', type: 'choice', q: '含有未知数的等式叫什么？', options: ['方程', '算式', '不等式', '公式'], answer: 0, explain: '两个条件缺一不可：有未知数，还是等式。', tag: '方程意义' },
    { id: 'sk1-2', type: 'choice', q: '等式两边同时加上一个数，等式怎样？', options: ['仍然成立', '不成立了', '变成方程', '无法判断'], answer: 0, explain: '天平两边同加同重，天平还平，等式仍成立。', tag: '等式性质' },
    { id: 'sk1-3', type: 'choice', q: 'x + 15 = 40，x = ?', options: ['25', '55', '35', '15'], answer: 0, explain: '两边同减 15：x = 40 - 15 = 25。', tag: '解方程' },
    { id: 'sk1-4', type: 'choice', q: '3x = 27，x = ?', options: ['9', '24', '81', '30'], answer: 0, explain: '两边同除以 3：x = 27 ÷ 3 = 9。', tag: '解方程' },
    { id: 'sk1-5', type: 'choice', q: 'x - 8 = 12，x = ?', options: ['20', '4', '16', '96'], answer: 0, explain: '两边同加 8：x = 12 + 8 = 20。', tag: '解方程' },
    { id: 'sk1-6', type: 'choice', q: 'x ÷ 4 = 6，x = ?', options: ['24', '10', '2', '1.5'], answer: 0, explain: '两边同乘 4：x = 6 × 4 = 24。', tag: '解方程' },
    { id: 'sk1-7', type: 'choice', q: '一本 120 页的书，每天看 x 页，看了 4 天看完。列方程是？', options: ['4x = 120', 'x + 4 = 120', '120 ÷ x = 4', 'x - 4 = 120'], answer: 0, explain: '每天 x 页看 4 天，4 个 x 正好 120 页：4x = 120。', tag: '列方程' },
    { id: 'sk1-8', type: 'choice', q: '比一个数的 3 倍多 6 的数是 21，这个数是多少？', options: ['5', '9', '7', '45'], answer: 0, explain: '设这个数为 x：3x + 6 = 21，3x = 15，x = 5。', tag: '列方程' },
    { id: 'sk1-9', type: 'judge', q: '方程一定是等式。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：方程是含未知数的等式，当然属于等式。', tag: '方程意义' },
    { id: 'sk1-10', type: 'judge', q: '等式一定是方程。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：像 3 + 2 = 5 是等式但没有未知数，不是方程。', tag: '方程意义' },
  ],
  sk2: [
    { id: 'sk2-1', type: 'choice', q: '要清楚地看出数量的增减变化趋势，用哪种统计图？', options: ['折线统计图', '条形统计图', '扇形统计图', '统计表'], answer: 0, explain: '折线上升下降，变化趋势一目了然。', tag: '统计图选择' },
    { id: 'sk2-2', type: 'choice', q: '折线统计图中一段线往上走，表示数量？', options: ['增加', '减少', '不变', '消失'], answer: 0, explain: '线往上走是上升，数量在增加。', tag: '读图' },
    { id: 'sk2-3', type: 'choice', q: '记录一周每天的气温变化，用哪种统计图最合适？', options: ['折线统计图', '扇形统计图', '条形统计图', '画「正」字'], answer: 0, explain: '气温连续变化，折线图最能体现升降。', tag: '统计图选择' },
    { id: 'sk2-4', type: 'choice', q: '要比较各班人数的多少，用哪种统计图？', options: ['条形统计图', '折线统计图', '线段图', '实物图'], answer: 0, explain: '比多少，条形图的高矮长短最直观。', tag: '统计图选择' },
    { id: 'sk2-5', type: 'choice', q: '折线统计图中一段线特别陡，说明数量变化？', options: ['很快', '很慢', '不变', '没有了'], answer: 0, explain: '线越陡，说明同样时间里变化越大。', tag: '读图' },
    { id: 'sk2-6', type: 'choice', q: '记录病人一整天体温的变化情况，最好用？', options: ['折线统计图', '条形统计图', '正字记录', '文字记录'], answer: 0, explain: '体温随时间连续变化，折线图最合适。', tag: '统计图选择' },
    { id: 'sk2-7', type: 'choice', q: '折线统计图主要由什么组成？', options: ['点和线', '只有条形', '只有圆', '表格'], answer: 0, explain: '点表示数量的多少，线表示变化的趋势。', tag: '统计图组成' },
    { id: 'sk2-8', type: 'choice', q: '从折线统计图中不能直接看出的是？', options: ['每个数据的准确来源', '数量的多少', '变化趋势', '升降情况'], answer: 0, explain: '折线图看多少和趋势很方便，但看不出数据是怎么来的。', tag: '读图' },
    { id: 'sk2-9', type: 'judge', q: '折线统计图能清楚看出数量的变化趋势。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：这正是折线统计图最大的本领。', tag: '特点' },
    { id: 'sk2-10', type: 'judge', q: '条形统计图和折线统计图的作用完全一样。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：条形擅长比多少，折线擅长看变化，各有绝活。', tag: '特点' },
  ],
  sk3: [
    { id: 'sk3-1', type: 'choice', q: '6 的因数有哪几个？', options: ['1、2、3、6', '1、2、3', '2、3、6', '6、12、18'], answer: 0, explain: '1 × 6 = 6，2 × 3 = 6，四个因数一个不少。', tag: '因数' },
    { id: 'sk3-2', type: 'choice', q: '4 的倍数中最小的是几？', options: ['4', '8', '1', '0'], answer: 0, explain: '一个数最小的倍数是它本身：4。', tag: '倍数' },
    { id: 'sk3-3', type: 'choice', q: '一个数最小的因数是几？', options: ['1', '它本身', '0', '2'], answer: 0, explain: '任何数都能被 1 整除，最小因数是 1。', tag: '因数特征' },
    { id: 'sk3-4', type: 'choice', q: '个位是 0、2、4、6、8 的数都是几的倍数？', options: ['2', '3', '7', '9'], answer: 0, explain: '个位是偶数的都能被 2 整除，是 2 的倍数。', tag: '2的倍数' },
    { id: 'sk3-5', type: 'choice', q: '3 的倍数特征是什么？', options: ['各位数字的和是 3 的倍数', '个位是 3', '一定是奇数', '末尾是 0'], answer: 0, explain: '如 123：1 + 2 + 3 = 6，6 是 3 的倍数，所以 123 也是。', tag: '3的倍数' },
    { id: 'sk3-6', type: 'choice', q: '个位是 0 或 5 的数都是几的倍数？', options: ['5', '2', '3', '4'], answer: 0, explain: '个位 0 或 5 的数都能被 5 整除。', tag: '5的倍数' },
    { id: 'sk3-7', type: 'choice', q: '只有 1 和它本身两个因数的数叫？', options: ['质数', '合数', '偶数', '倍数'], answer: 0, explain: '质数只有两个因数，如 2、3、5、7。', tag: '质数' },
    { id: 'sk3-8', type: 'choice', q: '20 以内的质数共有几个？', options: ['8 个', '9 个', '7 个', '10 个'], answer: 0, explain: '2、3、5、7、11、13、17、19，一共 8 个。', tag: '质数' },
    { id: 'sk3-9', type: 'judge', q: '1 是质数。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：1 只有 1 个因数，既不是质数也不是合数。', tag: '质数' },
    { id: 'sk3-10', type: 'judge', q: '所有的偶数都是合数。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：2 是偶数，但 2 只有 1 和 2 两个因数，是质数。', tag: '质数' },
  ],
  sk4: [
    { id: 'sk4-1', type: 'choice', q: '把单位「1」平均分成若干份，表示这样一份或几份的数叫？', options: ['分数', '小数', '整数', '倍数'], answer: 0, explain: '平均分是分数的前提，份数写进分数里。', tag: '分数意义' },
    { id: 'sk4-2', type: 'choice', q: '3/4 的分数单位是？', options: ['1/4', '3/4', '1/3', '4/3'], answer: 0, explain: '分母是几，分数单位就是几分之一：1/4。', tag: '分数单位' },
    { id: 'sk4-3', type: 'choice', q: '分子比分母小的分数叫？', options: ['真分数', '假分数', '带分数', '整数'], answer: 0, explain: '真分数小于 1，如 3/4。', tag: '真分数' },
    { id: 'sk4-4', type: 'choice', q: '5/5 = ?', options: ['1', '5', '0', '25'], answer: 0, explain: '分子分母相同（不为 0）的分数等于 1。', tag: '假分数' },
    { id: 'sk4-5', type: 'choice', q: '分数的分子和分母同时乘或除以同一个数（0 除外），分数大小？', options: ['不变', '变大', '变小', '不确定'], answer: 0, explain: '这是分数的基本性质，和商不变规律是一家人。', tag: '基本性质' },
    { id: 'sk4-6', type: 'choice', q: '把 6/8 约分，最简结果是？', options: ['3/4', '2/3', '6/4', '1/2'], answer: 0, explain: '分子分母同除以 2：6 ÷ 2 = 3，8 ÷ 2 = 4，得 3/4。', tag: '约分' },
    { id: 'sk4-7', type: 'choice', q: '通分时一般用分母的什么作公分母？', options: ['最小公倍数', '最大公因数', '和', '差'], answer: 0, explain: '用最小公倍数作公分母，数字小好计算。', tag: '通分' },
    { id: 'sk4-8', type: 'choice', q: '0.25 化成分数是？', options: ['1/4', '1/2', '2/5', '1/25'], answer: 0, explain: '0.25 = 25/100，约分得 1/4。', tag: '互化' },
    { id: 'sk4-9', type: 'judge', q: '真分数都小于 1。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：分子小于分母，只取了整体的一部分。', tag: '真分数' },
    { id: 'sk4-10', type: 'judge', q: '分母越大，分数单位就越大。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：分母越大，平均分的份数越多，每份反而越小。', tag: '分数单位' },
  ],
  sk5: [
    { id: 'sk5-1', type: 'choice', q: '1/5 + 2/5 = ?', options: ['3/5', '3/10', '2/5', '1/5'], answer: 0, explain: '同分母相加，分母不变，分子相加：1 + 2 = 3。', tag: '同分母加法' },
    { id: 'sk5-2', type: 'choice', q: '7/8 - 3/8 = ?', options: ['1/2', '3/8', '5/8', '1/8'], answer: 0, explain: '7 - 3 = 4，得 4/8，约分后是 1/2。', tag: '同分母减法' },
    { id: 'sk5-3', type: 'choice', q: '1/2 + 1/3 = ?', options: ['5/6', '2/5', '1/6', '2/6'], answer: 0, explain: '通分：3/6 + 2/6 = 5/6。', tag: '异分母加法' },
    { id: 'sk5-4', type: 'choice', q: '3/4 - 1/6 = ?', options: ['7/12', '2/2', '1/3', '1/12'], answer: 0, explain: '通分：9/12 - 2/12 = 7/12。', tag: '异分母减法' },
    { id: 'sk5-5', type: 'choice', q: '1 - 2/7 = ?', options: ['5/7', '2/7', '1/7', '7/7'], answer: 0, explain: '1 = 7/7，7/7 - 2/7 = 5/7。', tag: '简单减法' },
    { id: 'sk5-6', type: 'choice', q: '异分母分数相加减，要先做什么？', options: ['通分', '约分', '化小数', '去分母'], answer: 0, explain: '分数单位不同不能直接加，先通分变同分母。', tag: '方法' },
    { id: 'sk5-7', type: 'choice', q: '1/4 + 1/4 + 1/4 = ?', options: ['3/4', '3/12', '1/4', '4/4'], answer: 0, explain: '3 个 1/4 合起来是 3/4。', tag: '同分母加法' },
    { id: 'sk5-8', type: 'choice', q: '一瓶果汁喝了 1/3，还剩几分之几？', options: ['2/3', '1/3', '3/3', '1'], answer: 0, explain: '1 - 1/3 = 2/3，还剩三分之二。', tag: '应用题' },
    { id: 'sk5-9', type: 'judge', q: '同分母分数相加，分母不变，分子相加。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：分数单位相同，个数（分子）直接加。', tag: '同分母' },
    { id: 'sk5-10', type: 'judge', q: '1/2 + 1/2 = 2/4。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：1/2 + 1/2 = 1，2/4 虽然数值相同但没有化成最简，规范写法是 1。', tag: '计算规范' },
  ],
  sk6: [
    { id: 'sk6-1', type: 'choice', q: '圆中心的一点叫什么？', options: ['圆心', '顶点', '焦点', '中心线'], answer: 0, explain: '圆心用字母 O 表示，决定圆的位置。', tag: '圆心' },
    { id: 'sk6-2', type: 'choice', q: '连接圆心和圆上任意一点的线段叫？', options: ['半径', '直径', '弦', '边'], answer: 0, explain: '半径用 r 表示，决定圆的大小。', tag: '半径' },
    { id: 'sk6-3', type: 'choice', q: '同一个圆里，直径是半径的几倍？', options: ['2 倍', '3 倍', '1 倍', 'π 倍'], answer: 0, explain: 'd = 2r，直径过圆心，正好两个半径长。', tag: '直径与半径' },
    { id: 'sk6-4', type: 'choice', q: '圆周率 π 保留两位小数约是？', options: ['3.14', '3.41', '3.12', '6.28'], answer: 0, explain: 'π 是圆的周长除以直径，约 3.14，无限不循环。', tag: '圆周率' },
    { id: 'sk6-5', type: 'choice', q: '圆的周长公式是？', options: ['C = πd', 'C = πr', 'C = 2πd', 'C = d ÷ π'], answer: 0, explain: '周长 = 圆周率 × 直径，也可以写成 C = 2πr。', tag: '周长公式' },
    { id: 'sk6-6', type: 'choice', q: '半径 3 厘米的圆，直径是多少？', options: ['6 厘米', '9 厘米', '3 厘米', '1.5 厘米'], answer: 0, explain: 'd = 2r = 2 × 3 = 6（厘米）。', tag: '直径半径' },
    { id: 'sk6-7', type: 'choice', q: '圆有多少条对称轴？', options: ['无数条', '1 条', '2 条', '4 条'], answer: 0, explain: '每条过圆心的直线都是对称轴，圆是最完美的对称图形。', tag: '对称轴' },
    { id: 'sk6-8', type: 'choice', q: '半径 2 厘米的圆，周长约多少厘米？', options: ['12.56', '6.28', '25.12', '4'], answer: 0, explain: 'C = 2πr = 2 × 3.14 × 2 = 12.56（厘米）。', tag: '周长计算' },
    { id: 'sk6-9', type: 'judge', q: '两端都在圆上的线段就是直径。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：直径必须过圆心，不过圆心的只是普通的弦。', tag: '直径' },
    { id: 'sk6-10', type: 'judge', q: '圆的周长是直径的 3 倍多一些。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：周长 ÷ 直径 = π ≈ 3.14，正是 3 倍多一些。', tag: '圆周率' },
  ],
  sk7: [
    { id: 'sk7-1', type: 'choice', q: '把不规则图形剪一剪、拼一拼变成长方形，用了什么策略？', options: ['转化', '假设', '列举', '倒推'], answer: 0, explain: '把没学过的变成学过的，就是转化策略。', tag: '转化' },
    { id: 'sk7-2', type: 'choice', q: '计算异分母分数加法时，把它转化成什么来算？', options: ['同分母分数', '小数', '整数', '乘法'], answer: 0, explain: '通分就是把异分母转化成同分母。', tag: '转化应用' },
    { id: 'sk7-3', type: 'choice', q: '推导圆面积公式时，把圆剪拼成近似的？', options: ['长方形', '三角形', '梯形', '正方形'], answer: 0, explain: '拼成长方形：长是 πr，宽是 r，面积 πr²。', tag: '圆面积推导' },
    { id: 'sk7-4', type: 'choice', q: '「曹冲称象」把大象的重量转化成了什么？', options: ['石头的重量', '水的重量', '船的重量', '人的重量'], answer: 0, explain: '象太重称不了，石头一样重却好称，这是古人的转化智慧。', tag: '转化故事' },
    { id: 'sk7-5', type: 'choice', q: '半圆的周长等于？', options: ['圆周长的一半加直径', '圆周长的一半', '直径', '半径 × π'], answer: 0, explain: '别忘了弧线加直线：πr + 2r（即 πr + d）。', tag: '转化' },
    { id: 'sk7-6', type: 'choice', q: '把平行四边形剪拼成长方形，是为了求它的？', options: ['面积', '周长', '边数', '颜色'], answer: 0, explain: '长方形面积 = 长 × 宽，平行四边形 = 底 × 高，道理相同。', tag: '面积推导' },
    { id: 'sk7-7', type: 'choice', q: '巧算：1/2 + 1/4 + 1/8 + 1/16 = ?', options: ['15/16', '1', '1/2', '15/32'], answer: 0, explain: '画图看：每次都差一点点，和 = 1 - 1/16 = 15/16。', tag: '巧算' },
    { id: 'sk7-8', type: 'choice', q: '甲乙两人相距 600 米，相向而行，甲每分钟走 70 米，乙每分钟走 80 米，几分钟相遇？', options: ['4 分钟', '3 分钟', '5 分钟', '6 分钟'], answer: 0, explain: '每分钟共走近 70 + 80 = 150 米，600 ÷ 150 = 4（分钟）。', tag: '相遇问题' },
    { id: 'sk7-9', type: 'judge', q: '转化可以把新知识变成学过的旧知识。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：这就是转化策略最棒的地方。', tag: '转化' },
    { id: 'sk7-10', type: 'judge', q: '转化策略只能用在图形问题上。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：数与代数、统计里都能用，比如异分母通分就是转化。', tag: '转化' },
  ],
  sk8: [
    { id: 'sk8-1', type: 'choice', q: '方程 2x + 5 = 25 的解是？', options: ['x = 10', 'x = 15', 'x = 12', 'x = 20'], answer: 0, explain: '2x = 20，x = 10。', tag: '解方程' },
    { id: 'sk8-2', type: 'choice', q: '既是 2 的倍数，又是 3 和 5 的倍数的最小两位数是？', options: ['30', '15', '20', '60'], answer: 0, explain: '要同时被 2、3、5 整除，最小是 2 × 3 × 5 = 30。', tag: '倍数综合' },
    { id: 'sk8-3', type: 'choice', q: '3/4 和 5/6 谁大？', options: ['5/6', '3/4', '一样大', '不能比'], answer: 0, explain: '通分：9/12 和 10/12，10/12 大，所以 5/6 大。', tag: '通分比较' },
    { id: 'sk8-4', type: 'choice', q: '半径 5 厘米的圆，面积约是多少平方厘米？', options: ['78.5', '31.4', '15.7', '314'], answer: 0, explain: 'S = πr² = 3.14 × 25 = 78.5（平方厘米）。', tag: '圆面积' },
    { id: 'sk8-5', type: 'choice', q: '一根绳子长 2 米，用去 1/4 米，还剩多少米？', options: ['1 又 3/4 米', '3/4 米', '1 又 1/2 米', '2 米'], answer: 0, explain: '2 - 1/4 = 1 又 3/4（米），注意是 1/4 米不是 1/4！', tag: '分数减法' },
    { id: 'sk8-6', type: 'choice', q: '三个连续偶数中间一个是 12，它们的和是多少？', options: ['36', '30', '42', '24'], answer: 0, explain: '三个数是 10、12、14，和 = 12 × 3 = 36。', tag: '数的规律' },
    { id: 'sk8-7', type: 'choice', q: '洗衣机 1800 元，比冰箱便宜 600 元，冰箱多少元？', options: ['2400 元', '1200 元', '1800 元', '2600 元'], answer: 0, explain: '1800 + 600 = 2400（元），「比便宜」反过来加。', tag: '应用题' },
    { id: 'sk8-8', type: 'choice', q: '要看商店 1～6 月销售额的变化趋势，用哪种统计图？', options: ['折线统计图', '条形统计图', '扇形统计图', '统计表'], answer: 0, explain: '看变化趋势，折线统计图最拿手。', tag: '统计复习' },
    { id: 'sk8-9', type: 'judge', q: '复习时可以画思维导图，把知识串起来。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：画图列表都是整理复习的好方法。', tag: '复习方法' },
    { id: 'sk8-10', type: 'judge', q: '分数加减法应用题和整数加减法的数量关系完全不同。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：都是「合起来用加法、去掉用减法」，道理相通。', tag: '复习方法' },
  ],
}
