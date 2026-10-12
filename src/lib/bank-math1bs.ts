// 北师大版（北京师范大学出版社）数学一年级上册 随堂知识点题库
// 目录（教师之家「小学数学北师大版(2024)一年级上册」2024 秋新教材核对）：
//   我上学啦 / 一 生活中的数 / 二 5以内数加与减 / 三 整理与分类 / 四 10以内数加与减
//   五 有趣的立体图形 / 综合实践 记录我的一天 / 总复习
// 8 关 × 10 题，题目 id 前缀 ka

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
    id: 'ka1',
    name: '第一单元',
    title: '生活中的数',
    emoji: '🌾',
    color: 'orange',
    lessons: ['走进美丽乡村', '玩具', '小猫钓鱼', '文具', '数鸡蛋', '快乐的午餐', '动物乐园'],
    intro: '在美丽乡村里数一数：0～10 都是我们的数字朋友，还会比谁多谁少哦！',
  },
  {
    id: 'ka2',
    name: '第二单元',
    title: '5以内数加与减',
    emoji: '🎈',
    color: 'amber',
    lessons: ['一共有多少', '还剩下多少', '可爱的小猫'],
    intro: '把两部分合起来用加法，去掉一部分用减法，5 以内的加减真好玩！',
  },
  {
    id: 'ka3',
    name: '第三单元',
    title: '整理与分类',
    emoji: '🧺',
    color: 'lime',
    lessons: ['整理房间', '一起来分类'],
    intro: '把乱糟糟的东西整理整齐：同一类的东西放在一起，就叫做分类！',
  },
  {
    id: 'ka4',
    name: '第四单元',
    title: '10以内数加与减（一）',
    emoji: '🎲',
    color: 'teal',
    lessons: ['猜数游戏', '背土豆', '课间', '小鸡吃食'],
    intro: '分与合是加减法的小钥匙：10 只小鸡分两边，怎么分都记牢！',
  },
  {
    id: 'ka5',
    name: '第四单元',
    title: '10以内数加与减（二）',
    emoji: '🚌',
    color: 'cyan',
    lessons: ['乘车', '挖红薯', '可爱的企鹅', '做个加法表', '做个减法表'],
    intro: '坐车时会连加连减，还能自己整理加法表和减法表，真了不起！',
  },
  {
    id: 'ka6',
    name: '第五单元',
    title: '有趣的立体图形',
    emoji: '🧊',
    color: 'violet',
    lessons: ['认识图形', '我说你做', '怎样搭得高'],
    intro: '长方体、正方体、圆柱和球：摸一摸、滚一滚、搭一搭，图形朋友真有趣！',
  },
  {
    id: 'ka7',
    name: '综合实践',
    title: '记录我的一天',
    emoji: '⏰',
    color: 'pink',
    lessons: ['淘气的一天', '记录我的一天', '分享我的一天'],
    intro: '早上、中午、晚上排排队：用数学记录我的一天，做时间的小主人！',
  },
  {
    id: 'ka8',
    name: '总复习',
    title: '学期大闯关',
    emoji: '🏆',
    color: 'red',
    lessons: ['数与代数', '图形与几何', '统计与概率', '综合与实践'],
    intro: '一学期的本领都学会了吗？大闯关开始，勇敢冲鸭！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ka1: [
    { id: 'ka1-1', type: 'choice', q: '走进美丽乡村：池塘边有 3 只大白鹅，又游来 2 只，现在一共有几只？', options: ['5 只', '4 只', '6 只', '3 只'], answer: 0, explain: '3 和 2 合起来是 5：3、4、5，一个一个接着数。', tag: '数一数' },
    { id: 'ka1-2', type: 'choice', q: '数鸡蛋：鸡妈妈已经下了 6 个蛋，又下了 1 个，现在有几个蛋？', options: ['7 个', '6 个', '8 个', '5 个'], answer: 0, explain: '6 再添上 1 就是 7。数到最后一个数就是总数。', tag: '数一数' },
    { id: 'ka1-3', type: 'choice', q: '快乐的午餐：6 个小朋友吃饭，每人分 1 个盘子，需要几个盘子？', options: ['6 个', '5 个', '7 个', '4 个'], answer: 0, explain: '一人对一个盘子，一一对应正好 6 个，不多也不少。', tag: '比多少' },
    { id: 'ka1-4', type: 'choice', q: '动物乐园：小兔有 4 只，小猴有 3 只，哪种动物多？', options: ['小兔多', '小猴多', '一样多', '不能比'], answer: 0, explain: '4 比 3 大，一只对一个，小兔还多出 1 只，所以小兔多。', tag: '比多少' },
    { id: 'ka1-5', type: 'choice', q: '小猫钓鱼：小猫一条鱼也没钓到，用哪个数表示？', options: ['0', '1', '10', '没有数'], answer: 0, explain: '一条也没有就用 0 表示，0 也是一个数哦。', tag: '0的认识' },
    { id: 'ka1-6', type: 'choice', q: '文具：盒子里有 9 支铅笔，再放进 1 支，一共有几支？', options: ['10 支', '9 支', '8 支', '11 支'], answer: 0, explain: '9 添 1 是 10：9、10。10 支铅笔正好装满一盒！', tag: '10的认识' },
    { id: 'ka1-7', type: 'choice', q: '从 1 数到 10，7 的后面是几？', options: ['8', '6', '9', '7'], answer: 0, explain: '按顺序数：5、6、7、8，7 的后面是 8。', tag: '数的顺序' },
    { id: 'ka1-8', type: 'choice', q: '比一比：方框里最大能填几？□＜6', options: ['5', '6', '7', '0'], answer: 0, explain: '比 6 小的数里，5 最大。0～5 都可以，5 是最大的一个。', tag: '比大小' },
    { id: 'ka1-9', type: 'judge', q: '数数的时候，2 排在 1 的前面。', options: ['√ 对', '✗ 错'], answer: 1, explain: '按顺序是 1、2、3……2 排在 1 的后面才对。', tag: '数的顺序' },
    { id: 'ka1-10', type: 'judge', q: '按顺序数数，10 排在 9 的前面。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：按顺序是 8、9、10，10 排在 9 的后面。', tag: '数的顺序' },
  ],
  ka2: [
    { id: 'ka2-1', type: 'choice', q: '一共有多少：树上有 2 只小鸟，又飞来 3 只，一共有几只？', options: ['5 只', '4 只', '6 只', '3 只'], answer: 0, explain: '2 + 3 = 5（只）。把两部分合起来，用加法。', tag: '加法' },
    { id: 'ka2-2', type: 'choice', q: '还剩下多少：盘子里有 4 个桃子，小猴吃掉 1 个，还剩几个？', options: ['3 个', '4 个', '2 个', '5 个'], answer: 0, explain: '4 - 1 = 3（个）。去掉一部分，用减法。', tag: '减法' },
    { id: 'ka2-3', type: 'choice', q: '可爱的小猫：小猫吃掉 0 条鱼，盘子里 3 条鱼还剩几条？', options: ['3 条', '0 条', '2 条', '4 条'], answer: 0, explain: '3 - 0 = 3。一条也没吃，当然还是 3 条啦。', tag: '0的加减' },
    { id: 'ka2-4', type: 'choice', q: '0 + 2 = ?', options: ['2', '0', '3', '1'], answer: 0, explain: '0 表示没有，加上 0 就像没加一样，还是 2。', tag: '0的加减' },
    { id: 'ka2-5', type: 'choice', q: '5 可以分成 2 和几？', options: ['3', '2', '4', '1'], answer: 0, explain: '分与合：2 和 3 合起来是 5，所以 5 能分成 2 和 3。', tag: '分与合' },
    { id: 'ka2-6', type: 'choice', q: '□ - 2 = 1，方框里是几？', options: ['3', '2', '4', '1'], answer: 0, explain: '想：1 + 2 = 3，所以 3 - 2 = 1。加法和减法是好朋友！', tag: '逆向思考' },
    { id: 'ka2-7', type: 'choice', q: '1 + 4 = ?', options: ['5', '4', '6', '3'], answer: 0, explain: '从 1 接着数：2、3、4、5，一共 5。', tag: '加法' },
    { id: 'ka2-8', type: 'choice', q: '5 个气球飞走 2 个，还剩几个？', options: ['3 个', '2 个', '4 个', '5 个'], answer: 0, explain: '5 - 2 = 3（个）。飞走了就用减法算。', tag: '减法应用' },
    { id: 'ka2-9', type: 'judge', q: '3 + 1 和 1 + 3 的结果不一样。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：交换两个数的位置，合起来的总数不变，都是 4。', tag: '交换' },
    { id: 'ka2-10', type: 'judge', q: '4 - 4 = 0。', options: ['√ 对', '✗ 错'], answer: 0, explain: '4 个全拿走，一个也不剩，就用 0 表示。', tag: '0的加减' },
  ],
  ka3: [
    { id: 'ka3-1', type: 'choice', q: '整理房间：下面哪一个是玩具？', options: ['积木', '袜子', '苹果', '筷子'], answer: 0, explain: '积木是用来玩的，是玩具；袜子是穿的，苹果是吃的。', tag: '分类' },
    { id: 'ka3-2', type: 'choice', q: '把苹果、香蕉、橘子放在一起，这一类可以叫什么？', options: ['水果类', '玩具类', '衣服类', '文具类'], answer: 0, explain: '它们都是能吃的水果，放在一起叫水果类。', tag: '分类' },
    { id: 'ka3-3', type: 'choice', q: '下面哪一组是按「会飞」分出来的？', options: ['小鸟、蝴蝶、蜜蜂', '小猫、小狗、小兔', '课桌、椅子、黑板', '苹果、香蕉、橘子'], answer: 0, explain: '小鸟、蝴蝶、蜜蜂都会飞，分一类；其他组里的小动物、家具都不会飞。', tag: '分类标准' },
    { id: 'ka3-4', type: 'choice', q: '下面哪一个不是交通工具？', options: ['书包', '飞机', '轮船', '自行车'], answer: 0, explain: '飞机、轮船、自行车都能带着我们走，是交通工具；书包是用来装书的。', tag: '分类' },
    { id: 'ka3-5', type: 'choice', q: '垃圾分类：香蕉皮应该放进哪个垃圾桶？', options: ['厨余垃圾桶', '可回收桶', '其他垃圾桶', '有害垃圾桶'], answer: 0, explain: '果皮菜叶容易烂，是厨余垃圾。分类投放，环保小卫士就是你！', tag: '生活分类' },
    { id: 'ka3-6', type: 'choice', q: '整理书包：上课要用的课本应该放在哪里？', options: ['书包里', '玩具箱里', '冰箱里', '垃圾桶里'], answer: 0, explain: '书是学习用品，放进书包里，第二天上学才不会忘带。', tag: '整理' },
    { id: 'ka3-7', type: 'choice', q: '一堆卡片有红的、蓝的，有圆形、方形。按颜色分，红圆形和谁一组？', options: ['红方形', '蓝圆形', '蓝方形', '谁也不组'], answer: 0, explain: '按颜色分，红色的一组：红圆形和红方形手拉手。', tag: '分类标准' },
    { id: 'ka3-8', type: 'choice', q: '下面哪种分法把「动物」分成了一类？', options: ['小猫、小狗、小鸟', '小猫、白菜、书包', '小狗、桌子、铅笔', '小鸟、苹果、皮球'], answer: 0, explain: '小猫、小狗、小鸟都是小动物，分一类才整齐。', tag: '分类' },
    { id: 'ka3-9', type: 'judge', q: '同一堆积木，只能有一种分法。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：可以按颜色分，也可以按形状分，分类的标准不止一个！', tag: '分类标准' },
    { id: 'ka3-10', type: 'judge', q: '把东西分类整理后，反而更难找到需要的东西。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：分类整理的好处就是看起来整齐，要用时一找就找到！', tag: '整理' },
  ],
  ka4: [
    { id: 'ka4-1', type: 'choice', q: '猜数游戏：老师手里一共有 6 颗豆子，握住 2 颗，另一只手里有几颗？', options: ['4 颗', '3 颗', '5 颗', '2 颗'], answer: 0, explain: '6 分成 2 和 4：6 - 2 = 4。分与合帮你猜出来！', tag: '分与合' },
    { id: 'ka4-2', type: 'choice', q: '背土豆：小老鼠背着 7 个土豆，路上掉了 1 个，还剩几个？', options: ['6 个', '7 个', '5 个', '8 个'], answer: 0, explain: '7 - 1 = 6（个）。掉了就要减去。', tag: '7的加减' },
    { id: 'ka4-3', type: 'choice', q: '小鸡吃食：10 只小鸡来吃食，左边站着 4 只，右边有几只？', options: ['6 只', '5 只', '7 只', '4 只'], answer: 0, explain: '10 分成 4 和 6：10 - 4 = 6（只）。', tag: '10的组成' },
    { id: 'ka4-4', type: 'choice', q: '课间：8 个小朋友玩跳绳，回教室 3 个，操场上还剩几个？', options: ['5 个', '3 个', '6 个', '4 个'], answer: 0, explain: '8 - 3 = 5（个）。', tag: '减法' },
    { id: 'ka4-5', type: 'choice', q: '5 + 3 = ?', options: ['8', '7', '6', '9'], answer: 0, explain: '从 5 接着数：6、7、8，一共 8。', tag: '加法' },
    { id: 'ka4-6', type: 'choice', q: '9 - 4 = ?', options: ['5', '4', '6', '3'], answer: 0, explain: '想 4 加几得 9：4 + 5 = 9，所以 9 - 4 = 5。', tag: '减法' },
    { id: 'ka4-7', type: 'choice', q: '8 可以分成 4 和几？', options: ['4', '3', '5', '2'], answer: 0, explain: '4 和 4 合起来是 8，8 就能分成 4 和 4，正好一样多！', tag: '分与合' },
    { id: 'ka4-8', type: 'choice', q: '4 + □ = 7，方框里填几？', options: ['3', '2', '4', '5'], answer: 0, explain: '7 分成 4 和 3，所以 4 + 3 = 7。', tag: '逆向思考' },
    { id: 'ka4-9', type: 'judge', q: '6 + 2 = 8，那么 2 + 6 也等于 8。', options: ['√ 对', '✗ 错'], answer: 0, explain: '交换加数的位置，得数不变，这就是加法的小秘密。', tag: '交换' },
    { id: 'ka4-10', type: 'judge', q: '10 只小鸡分两边，可以一边 5 只、另一边 5 只。', options: ['√ 对', '✗ 错'], answer: 0, explain: '5 和 5 合起来是 10，两边一样多，这也是一种分法！', tag: '10的组成' },
  ],
  ka5: [
    { id: 'ka5-1', type: 'choice', q: '乘车：车上有 2 人，第一站上来 3 人，第二站又上来 4 人，现在车上有几人？', options: ['9 人', '7 人', '8 人', '10 人'], answer: 0, explain: '2 + 3 = 5，5 + 4 = 9（人）。一个一个加，别着急。', tag: '连加' },
    { id: 'ka5-2', type: 'choice', q: '乘车：车上有 8 人，到站下去 3 人，又上来 2 人，现在有几人？', options: ['7 人', '8 人', '6 人', '9 人'], answer: 0, explain: '8 - 3 = 5，5 + 2 = 7（人）。先减再加，按顺序算。', tag: '加减混合' },
    { id: 'ka5-3', type: 'choice', q: '挖红薯：已经挖了 5 个红薯，又挖了 3 个，一共几个？', options: ['8 个', '7 个', '6 个', '9 个'], answer: 0, explain: '5 + 3 = 8（个）。两部分合起来用加法。', tag: '加法应用' },
    { id: 'ka5-4', type: 'choice', q: '可爱的企鹅：冰山上站着 3 只企鹅，又跳上来 6 只，一共几只？', options: ['9 只', '8 只', '7 只', '10 只'], answer: 0, explain: '3 + 6 = 9（只）。', tag: '加法' },
    { id: 'ka5-5', type: 'choice', q: '10 - 2 - 3 = ?', options: ['5', '6', '4', '7'], answer: 0, explain: '先算 10 - 2 = 8，再算 8 - 3 = 5。连减从左往右算。', tag: '连减' },
    { id: 'ka5-6', type: 'choice', q: '做个加法表：4 + 1、3 + 2、2 + 3 的得数都是几？', options: ['5', '4', '6', '7'], answer: 0, explain: '它们都等于 5，所以会排在加法表的同一列！', tag: '加法表' },
    { id: 'ka5-7', type: 'choice', q: '找规律填数：1、3、5、7、（ ）。', options: ['9', '8', '10', '6'], answer: 0, explain: '每次多 2：1、3、5、7、9，都是单数排队走！', tag: '找规律' },
    { id: 'ka5-8', type: 'choice', q: '小明有 6 颗糖，送给妹妹 2 颗，妈妈又给他 3 颗，现在有几颗？', options: ['7 颗', '6 颗', '8 颗', '5 颗'], answer: 0, explain: '6 - 2 = 4，4 + 3 = 7（颗）。先减再加。', tag: '加减混合应用' },
    { id: 'ka5-9', type: 'judge', q: '9 - 0 = 0。', options: ['√ 对', '✗ 错'], answer: 1, explain: '减 0 就是一个也没去掉，9 - 0 = 9 才对。', tag: '0的减法' },
    { id: 'ka5-10', type: 'judge', q: '加法表里，得数一样的算式可以排在一起。', options: ['√ 对', '✗ 错'], answer: 0, explain: '整理加法表时按得数排队，一样得数的排一列，好记又好查！', tag: '加法表' },
  ],
  ka6: [
    { id: 'ka6-1', type: 'choice', q: '下面哪一个最像球？', options: ['皮球', '课本', '牙膏盒', '易拉罐'], answer: 0, explain: '皮球圆圆的，到处都一样，是球。', tag: '认识球' },
    { id: 'ka6-2', type: 'choice', q: '魔方的形状是？', options: ['正方体', '球', '圆柱', '长方体'], answer: 0, explain: '魔方方方正正，每个面都一样大，是正方体。', tag: '认识正方体' },
    { id: 'ka6-3', type: 'choice', q: '易拉罐的形状像什么？', options: ['圆柱', '球', '正方体', '长方体'], answer: 0, explain: '易拉罐上下一样粗，圆圆的身子直直站，像圆柱。', tag: '认识圆柱' },
    { id: 'ka6-4', type: 'choice', q: '牙膏盒的形状是？', options: ['长方体', '球', '圆柱', '正方体'], answer: 0, explain: '牙膏盒长长方方的，是长方体。', tag: '认识长方体' },
    { id: 'ka6-5', type: 'choice', q: '搭高高：用哪种图形搭得又高又稳？', options: ['长方体', '球', '都要倒', '不能搭'], answer: 0, explain: '长方体有平平的面，摞起来稳稳的；球会滚，放不稳。', tag: '搭一搭' },
    { id: 'ka6-6', type: 'choice', q: '哪种图形放在地上轻轻一推最容易滚动？', options: ['球', '长方体', '正方体', '都不能滚'], answer: 0, explain: '球圆圆的，没有角没有平面挡着，一推就滚远啦。', tag: '滚一滚' },
    { id: 'ka6-7', type: 'choice', q: '教室里找一找：下面哪个东西是长方体？', options: ['黑板擦', '皮球', '魔方', '易拉罐'], answer: 0, explain: '黑板擦长长方方的；魔方是正方体，易拉罐是圆柱，皮球是球。', tag: '找一找' },
    { id: 'ka6-8', type: 'choice', q: '我说你做：闭眼摸到一个图形，圆圆的还会转，它可能是？', options: ['球', '正方体', '长方体', '都是'], answer: 0, explain: '圆圆的、能转的是球。摸图形小游戏真好玩！', tag: '摸一摸' },
    { id: 'ka6-9', type: 'judge', q: '正方体方方正正，每个面都一样大。', options: ['√ 对', '✗ 错'], answer: 0, explain: '正方体 6 个面都一样，就像魔方一样整齐。', tag: '正方体' },
    { id: 'ka6-10', type: 'judge', q: '圆柱的身上有平平的面，也有弯弯的面。', options: ['√ 对', '✗ 错'], answer: 0, explain: '圆柱上下两个面平平的，旁边是弯弯的面，能站也能滚。', tag: '圆柱' },
  ],
  ka7: [
    { id: 'ka7-1', type: 'choice', q: '早上起床后，应该先做哪件事？', options: ['刷牙洗脸', '吃晚饭', '睡觉', '放学'], answer: 0, explain: '起床后的顺序：先刷牙洗脸，再吃早饭，精神满满去上学！', tag: '时间顺序' },
    { id: 'ka7-2', type: 'choice', q: '把「早上、中午、晚上」按一天的顺序排，谁在最前面？', options: ['早上', '中午', '晚上', '随便排'], answer: 0, explain: '一天从早上开始：早上→中午→晚上，像排队一样不能乱。', tag: '时间顺序' },
    { id: 'ka7-3', type: 'choice', q: '淘气的一天：放学回家后，先做什么更合理？', options: ['先写作业再玩', '先睡觉', '先吃晚饭再上学', '先看早晨的太阳'], answer: 0, explain: '先写作业再玩，安排得井井有条，玩的时候更开心！', tag: '合理安排' },
    { id: 'ka7-4', type: 'choice', q: '记录天气：晴天可以用什么符号记录？', options: ['太阳 ☀️', '雨滴 🌧️', '雪花 ❄️', '云朵 ⛅'], answer: 0, explain: '晴天画个太阳，一看就明白。记录天气也要讲究方法哦！', tag: '记录' },
    { id: 'ka7-5', type: 'choice', q: '太阳什么时候从东边升起？', options: ['早上', '中午', '晚上', '半夜'], answer: 0, explain: '早上升起，傍晚落下，太阳每天都准时上班。', tag: '生活常识' },
    { id: 'ka7-6', type: 'choice', q: '下面哪件事在中午做最合适？', options: ['吃午饭', '刷牙洗脸睡觉', '升国旗做早操', '看星星'], answer: 0, explain: '中午吃午饭；早操在早上，看星星在晚上。', tag: '时间顺序' },
    { id: 'ka7-7', type: 'choice', q: '记录我的一天：一天里先后发生的事，可以用什么办法记录？', options: ['按顺序画下来或写下来', '打乱顺序随便记', '只记一件', '不用记'], answer: 0, explain: '按时间顺序记录，回顾一天清清楚楚！', tag: '记录方法' },
    { id: 'ka7-8', type: 'choice', q: '晚上睡觉前，做哪件事对牙齿好？', options: ['刷牙', '吃糖', '不刷牙', '喝很多甜饮料'], answer: 0, explain: '睡前刷牙，牙齿干干净净，不长小蛀虫。', tag: '生活习惯' },
    { id: 'ka7-9', type: 'judge', q: '中午吃的饭叫午饭。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：早上吃早饭，中午吃午饭，晚上吃晚饭。', tag: '时间顺序' },
    { id: 'ka7-10', type: 'judge', q: '一天里有早上、中午、下午和晚上。', options: ['√ 对', '✗ 错'], answer: 0, explain: '一天的时间像列车一样，一站一站往前开。', tag: '一天' },
  ],
  ka8: [
    { id: 'ka8-1', type: 'choice', q: '3 + 4 + 2 = ?', options: ['9', '8', '7', '10'], answer: 0, explain: '先算 3 + 4 = 7，再算 7 + 2 = 9。连加从左往右算。', tag: '连加' },
    { id: 'ka8-2', type: 'choice', q: '8 - 3 - 2 = ?', options: ['3', '4', '2', '5'], answer: 0, explain: '先算 8 - 3 = 5，再算 5 - 2 = 3。', tag: '连减' },
    { id: 'ka8-3', type: 'choice', q: '比 9 小 1 的数是几？', options: ['8', '10', '7', '9'], answer: 0, explain: '9 的前面是 8：8、9，一个挨一个。', tag: '数的顺序' },
    { id: 'ka8-4', type: 'choice', q: '圆圆的、会滚动的是哪种图形？', options: ['球', '长方体', '正方体', '都不是'], answer: 0, explain: '球圆圆的，没有角，轻轻一推就滚。', tag: '立体图形' },
    { id: 'ka8-5', type: 'choice', q: '7 可以分成 3 和几？', options: ['4', '3', '5', '2'], answer: 0, explain: '3 和 4 合起来是 7，所以 7 分成 3 和 4。', tag: '分与合' },
    { id: 'ka8-6', type: 'choice', q: '5 只小鸟飞走 2 只，又飞来 3 只，现在有几只？', options: ['6 只', '5 只', '7 只', '4 只'], answer: 0, explain: '5 - 2 = 3，3 + 3 = 6（只）。', tag: '加减混合应用' },
    { id: 'ka8-7', type: 'choice', q: '□ + 2 = 6，方框里填几？', options: ['4', '3', '5', '8'], answer: 0, explain: '想：6 - 2 = 4，4 + 2 = 6。', tag: '逆向思考' },
    { id: 'ka8-8', type: 'choice', q: '把苹果、香蕉、橘子放一类，皮球、积木放一类，这是在做什么？', options: ['分类', '数数', '比多少', '搭积木'], answer: 0, explain: '把同类的东西放在一起就是分类，房间马上变整齐！', tag: '分类' },
    { id: 'ka8-9', type: 'judge', q: '9 的相邻数是 8 和 10。', options: ['√ 对', '✗ 错'], answer: 0, explain: '9 前面是 8，后面是 10，两个邻居一个不少。', tag: '相邻数' },
    { id: 'ka8-10', type: 'judge', q: '0 + 5 = 0。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：加上 0 等于没加，0 + 5 = 5 才对。', tag: '0的加法' },
  ],
}
