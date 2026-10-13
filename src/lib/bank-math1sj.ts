// 苏教版（江苏凤凰教育出版社）数学一年级上册 随堂知识点题库
// 目录（教师之家「小学数学苏教版一年级上册」现行版核对；2024 秋起一年级新教材滚动替换，
// 过渡期新旧行动脉络一致，知识体系相同）：
//   一 数一数 / 二 比一比 / 三 分一分 / 四 认位置 / 五 认识10以内的数
//   六 认识图形（一）/ 七 分与合 / 八 10以内的加法和减法 / 九 认识11～20各数
//   十 20以内的进位加法 / 期末复习（综合实践：丰收的果园）
// 8 关 × 10 题（一、二单元合并为第一关；十单元与期末复习合并为第八关），题目 id 前缀 sa

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
    id: 'sa1',
    name: '第一·二单元',
    title: '数一数与比一比',
    emoji: '🌾',
    color: 'orange',
    lessons: ['数一数', '比多少', '比长短', '比高矮'],
    intro: '数一数滑梯上有几个小朋友，再比一比谁多谁少、谁长谁短！',
  },
  {
    id: 'sa2',
    name: '第三·四单元',
    title: '分一分与认位置',
    emoji: '🧺',
    color: 'amber',
    lessons: ['分一分', '认位置', '上、下、前、后', '左、右'],
    intro: '把同类的东西放在一起叫分类；上下前后左右，位置词语要分清！',
  },
  {
    id: 'sa3',
    name: '第五单元',
    title: '认识10以内的数',
    emoji: '🔢',
    color: 'lime',
    lessons: ['认识1～5', '认识几和第几', '0的认识', '认识=、＞和＜', '认识6～9', '认识10'],
    intro: '1～10 都是数字朋友，几和第几不一样，=、＞、＜ 来排队！',
  },
  {
    id: 'sa4',
    name: '第六单元',
    title: '认识图形（一）',
    emoji: '🧊',
    color: 'teal',
    lessons: ['认识长方体', '认识正方体', '认识圆柱和球', '搭一搭、滚一滚'],
    intro: '长方体、正方体、圆柱和球：摸一摸、搭一搭，图形朋友真有趣！',
  },
  {
    id: 'sa5',
    name: '第七单元',
    title: '分与合',
    emoji: '🎈',
    color: 'cyan',
    lessons: ['2～5的分与合', '6、7的分与合', '8、9的分与合', '10的分与合'],
    intro: '一个数可以分成两部分，两部分合起来又变回它，分与合是加减法的钥匙！',
  },
  {
    id: 'sa6',
    name: '第八单元',
    title: '10以内的加法和减法',
    emoji: '🍎',
    color: 'violet',
    lessons: ['5以内的加法', '5以内的减法', '得数是6、7的加减', '得数是8、9、10的加减', '连加、连减', '加减混合'],
    intro: '合起来用加法，去掉一部分用减法，连加连减从左往右算！',
  },
  {
    id: 'sa7',
    name: '第九单元',
    title: '认识11～20各数',
    emoji: '🚌',
    color: 'pink',
    lessons: ['数数、读数', '数的组成、写数', '10加几和相应的减法'],
    intro: '10 根小棒捆一捆，再加几根就是十几，11～20 一起来报到！',
  },
  {
    id: 'sa8',
    name: '第十单元',
    title: '20以内的进位加法',
    emoji: '🏆',
    color: 'red',
    lessons: ['9加几', '8、7加几', '6、5、4、3、2加几', '期末复习：丰收的果园'],
    intro: '凑十法帮你算得快：看大数、拆小数、凑成十，期末大闯关冲鸭！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  sa1: [
    { id: 'sa1-1', type: 'choice', q: '数一数：滑梯上原来有 4 个小朋友，又上来 2 个，现在有几个？', options: ['6 个', '5 个', '7 个', '4 个'], answer: 0, explain: '4 和 2 合起来是 6：4、5、6，接着数就对了。', tag: '数一数' },
    { id: 'sa1-2', type: 'choice', q: '比多少：5 只小鸭和 3 只小鸡比，谁多？', options: ['小鸭多', '小鸡多', '一样多', '不能比'], answer: 0, explain: '5 比 3 大，一只对一个，小鸭还多出 2 只。', tag: '比多少' },
    { id: 'sa1-3', type: 'choice', q: '比长短：下面哪样东西最长？', options: ['跳绳', '铅笔', '橡皮', '回形针'], answer: 0, explain: '跳绳可以拉得很长很长，铅笔、橡皮都比不过它。', tag: '比长短' },
    { id: 'sa1-4', type: 'choice', q: '比高矮：爸爸和妹妹站在一起，谁高？', options: ['爸爸高', '妹妹高', '一样高', '都矮'], answer: 0, explain: '比高矮要站在一起、站在同一地面比，爸爸明显高一些。', tag: '比高矮' },
    { id: 'sa1-5', type: 'choice', q: '比多少：每个小朋友坐 1 把椅子，6 个小朋友坐 6 把椅子，人和椅子怎么样？', options: ['一样多', '人多', '椅子多', '不能比'], answer: 0, explain: '一人对一把椅子，正好配对，就是一样多。', tag: '一一对应' },
    { id: 'sa1-6', type: 'choice', q: '数一数：从 1 数到 10，6 的后面是几？', options: ['7', '5', '8', '9'], answer: 0, explain: '按顺序数：5、6、7，6 的后面是 7。', tag: '数的顺序' },
    { id: 'sa1-7', type: 'choice', q: '比一比：3 和 5 谁大？', options: ['5', '3', '一样大', '不能比'], answer: 0, explain: '5 在 3 的后面，后面的数大，所以 5 大。', tag: '比大小' },
    { id: 'sa1-8', type: 'choice', q: '□＞4，方框里最小能填几？', options: ['5', '4', '3', '1'], answer: 0, explain: '比 4 大的数里，5 是最小的一个。', tag: '比大小' },
    { id: 'sa1-9', type: 'judge', q: '比长短时，要把一端对齐再看另一端。', options: ['√ 对', '✗ 错'], answer: 0, explain: '一端对齐才能比出长短，不然斜着放会看错哦。', tag: '比长短' },
    { id: 'sa1-10', type: 'judge', q: '7 个苹果比 9 个苹果多。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：9 比 7 大，9 个苹果更多才对。', tag: '比多少' },
  ],
  sa2: [
    { id: 'sa2-1', type: 'choice', q: '分一分：下面哪一个和苹果、香蕉是一类？', options: ['橘子', '小汽车', '铅笔', '积木'], answer: 0, explain: '苹果、香蕉、橘子都是水果，放一类最整齐。', tag: '分类' },
    { id: 'sa2-2', type: 'choice', q: '整理书包：下面哪样东西不是学习用品？', options: ['皮球', '铅笔', '橡皮', '课本'], answer: 0, explain: '皮球是玩具，其他三样都是学习用品，书包里不用带皮球。', tag: '分类' },
    { id: 'sa2-3', type: 'choice', q: '认位置：红旗在旗杆的上面，旗杆在红旗的什么位置？', options: ['下面', '上面', '左面', '后面'], answer: 0, explain: '上下是相对的：红旗在上面，旗杆就在下面。', tag: '上下' },
    { id: 'sa2-4', type: 'choice', q: '排队时，小明前面有 2 人，后面有 3 人，一队一共有几人？', options: ['6 人', '5 人', '4 人', '7 人'], answer: 0, explain: '前面 2 人 + 小明 1 人 + 后面 3 人 = 6 人，别忘数自己哦！', tag: '前后' },
    { id: 'sa2-5', type: 'choice', q: '用右手拿筷子，写字的这只手是哪只手？', options: ['右手', '左手', '两只都行', '都不是'], answer: 0, explain: '大多数小朋友用右手拿筷子、写字，左右手要分清。', tag: '左右' },
    { id: 'sa2-6', type: 'choice', q: '面对黑板站着，黑板在你的什么方向？', options: ['前面', '后面', '左面', '右面'], answer: 0, explain: '面对谁，谁就在前面，这是前后位置的小秘密。', tag: '前后' },
    { id: 'sa2-7', type: 'choice', q: '分一分：把红花、黄花分一类，把积木、皮球分一类，是按什么分的？', options: ['用途', '颜色', '大小', '形状'], answer: 0, explain: '花是装饰用的，积木皮球是玩的，按用途分成两类。', tag: '分类标准' },
    { id: 'sa2-8', type: 'choice', q: '书桌上，课本在铅笔盒的左边，铅笔盒就在课本的哪边？', options: ['右边', '左边', '上面', '下面'], answer: 0, explain: '左右是相对的：你在我的左边，我就在你的右边。', tag: '左右' },
    { id: 'sa2-9', type: 'judge', q: '同一堆积木，只能按一种标准分类。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：可以按颜色分，也可以按形状分，标准不止一个！', tag: '分类标准' },
    { id: 'sa2-10', type: 'judge', q: '小鸟在天上飞，可以说小鸟在树的上面。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：以树为标准，小鸟的位置在树的上面。', tag: '上下' },
  ],
  sa3: [
    { id: 'sa3-1', type: 'choice', q: '认识1～5：一只手有 5 根手指，两只手一共有几根？', options: ['10 根', '9 根', '8 根', '5 根'], answer: 0, explain: '5 和 5 合起来是 10，两只手正好 10 根手指。', tag: '认识5' },
    { id: 'sa3-2', type: 'choice', q: '几和第几：排队的小动物里，小兔排在第 2，前面有几只小动物？', options: ['1 只', '2 只', '3 只', '0 只'], answer: 0, explain: '排第 2 说明前面只有 1 只，「几个」是总数，「第几」是位置。', tag: '几和第几' },
    { id: 'sa3-3', type: 'choice', q: '0 的认识：盘子里一条鱼也没有，用哪个数表示？', options: ['0', '1', '10', '没有数'], answer: 0, explain: '一条也没有就用 0 表示，0 也是一个数。', tag: '0的认识' },
    { id: 'sa3-4', type: 'choice', q: '认识=：4 = □，方框里填几才对？', options: ['4', '5', '3', '6'], answer: 0, explain: '等号两边一样多，4 = 4 才算平衡。', tag: '等号' },
    { id: 'sa3-5', type: 'choice', q: '认识＞：5 ○ 3，圈里应该填什么符号？', options: ['＞', '＜', '=', '＋'], answer: 0, explain: '开口朝大数：5 比 3 大，填大于号 5 ＞ 3。', tag: '大于小于' },
    { id: 'sa3-6', type: 'choice', q: '认识6～9：7 前面的一个数是几？', options: ['6', '8', '5', '9'], answer: 0, explain: '按顺序数：5、6、7，7 的前面是 6。', tag: '数的顺序' },
    { id: 'sa3-7', type: 'choice', q: '认识10：9 添上 1 是几？', options: ['10', '8', '11', '9'], answer: 0, explain: '9 再数一个就是 10，10 是两位数里最小的小家伙。', tag: '10的认识' },
    { id: 'sa3-8', type: 'choice', q: '几和第几：一排 5 棵树，从左往右数，第 3 棵树左边有几棵？', options: ['2 棵', '3 棵', '4 棵', '1 棵'], answer: 0, explain: '第 3 棵的左边是第 1、第 2 棵，一共 2 棵。', tag: '几和第几' },
    { id: 'sa3-9', type: 'judge', q: '按顺序数数，8 排在 9 的后面。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：8、9，8 排在 9 的前面才对。', tag: '数的顺序' },
    { id: 'sa3-10', type: 'judge', q: '10 和 10 是一样多的，可以写成 10 = 10。', options: ['√ 对', '✗ 错'], answer: 0, explain: '两边一样多用等号，10 = 10 完全正确！', tag: '等号' },
  ],
  sa4: [
    { id: 'sa4-1', type: 'choice', q: '下面哪一个最像球？', options: ['皮球', '课本', '魔方', '易拉罐'], answer: 0, explain: '皮球圆圆的，到处都一样，是球。', tag: '认识球' },
    { id: 'sa4-2', type: 'choice', q: '魔方的形状是？', options: ['正方体', '球', '圆柱', '长方体'], answer: 0, explain: '魔方方方正正，每个面都一样大，是正方体。', tag: '认识正方体' },
    { id: 'sa4-3', type: 'choice', q: '易拉罐的形状像什么？', options: ['圆柱', '球', '正方体', '长方体'], answer: 0, explain: '易拉罐上下一样粗，圆圆的身子直直站，像圆柱。', tag: '认识圆柱' },
    { id: 'sa4-4', type: 'choice', q: '牙膏盒的形状是？', options: ['长方体', '球', '圆柱', '正方体'], answer: 0, explain: '牙膏盒长长方方的，是长方体。', tag: '认识长方体' },
    { id: 'sa4-5', type: 'choice', q: '搭高高：用哪种形状搭得又高又稳？', options: ['长方体', '球', '都会滚倒', '不能搭'], answer: 0, explain: '长方体有平平的面，摞起来稳稳的；球会滚走。', tag: '搭一搭' },
    { id: 'sa4-6', type: 'choice', q: '哪种形状轻轻一推最容易滚动？', options: ['球', '长方体', '正方体', '都不能滚'], answer: 0, explain: '球圆圆的没有角，一推就滚远啦。', tag: '滚一滚' },
    { id: 'sa4-7', type: 'choice', q: '教室里找一找：粉笔盒是什么形状？', options: ['正方体', '球', '圆柱', '都不是'], answer: 0, explain: '粉笔盒方方正正，每个面一样大，像正方体。', tag: '找一找' },
    { id: 'sa4-8', type: 'choice', q: '摸一摸：闭眼摸到一个图形，上下一样粗、能站着也能滚，它可能是？', options: ['圆柱', '球', '正方体', '长方体'], answer: 0, explain: '圆柱上下两个面平平的，旁边弯弯的，能站也能滚。', tag: '摸一摸' },
    { id: 'sa4-9', type: 'judge', q: '正方体方方正正，每个面都一样大。', options: ['√ 对', '✗ 错'], answer: 0, explain: '正方体 6 个面都一样，像魔方一样整齐。', tag: '正方体' },
    { id: 'sa4-10', type: 'judge', q: '球可以稳稳地站在斜坡上不动。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：球圆圆的会滚，放在斜坡上就滚走啦。', tag: '球' },
  ],
  sa5: [
    { id: 'sa5-1', type: 'choice', q: '5 可以分成 2 和几？', options: ['3', '2', '4', '1'], answer: 0, explain: '2 和 3 合起来是 5，所以 5 能分成 2 和 3。', tag: '5的分与合' },
    { id: 'sa5-2', type: 'choice', q: '4 和 3 合起来是几？', options: ['7', '6', '8', '5'], answer: 0, explain: '4 和 3 合起来是 7，分与合要记牢。', tag: '7的分与合' },
    { id: 'sa5-3', type: 'choice', q: '6 可以分成 3 和 3，对不对？', options: ['对', '不对', '只能分成 1 和 5', '不能分'], answer: 0, explain: '3 和 3 合起来是 6，6 可以分成 3 和 3，两边一样多！', tag: '6的分与合' },
    { id: 'sa5-4', type: 'choice', q: '8 可以分成 4 和几？', options: ['4', '3', '5', '2'], answer: 0, explain: '4 和 4 合起来是 8，8 正好分成 4 和 4。', tag: '8的分与合' },
    { id: 'sa5-5', type: 'choice', q: '9 可以分成 5 和几？', options: ['4', '3', '5', '6'], answer: 0, explain: '5 和 4 合起来是 9，所以 9 分成 5 和 4。', tag: '9的分与合' },
    { id: 'sa5-6', type: 'choice', q: '10 可以分成 6 和几？', options: ['4', '5', '3', '6'], answer: 0, explain: '6 和 4 合起来是 10，10 的分与合要滚瓜烂熟！', tag: '10的分与合' },
    { id: 'sa5-7', type: 'choice', q: '□ 和 2 合起来是 7，方框里是几？', options: ['5', '4', '6', '3'], answer: 0, explain: '想：5 和 2 合起来是 7，所以方框里填 5。', tag: '逆向思考' },
    { id: 'sa5-8', type: 'choice', q: '10 个苹果分给两个小朋友，怎样分两人一样多？', options: ['每人 5 个', '每人 4 个', '一人 6 个', '一人 7 个'], answer: 0, explain: '10 分成 5 和 5，两边一样多，都开心！', tag: '10的分与合' },
    { id: 'sa5-9', type: 'judge', q: '2 可以分成 1 和 1。', options: ['√ 对', '✗ 错'], answer: 0, explain: '1 和 1 合起来是 2，这是最小的分与合。', tag: '2的分与合' },
    { id: 'sa5-10', type: 'judge', q: '7 可以分成 3 和 3。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：3 和 3 合起来是 6，7 应该分成 3 和 4。', tag: '7的分与合' },
  ],
  sa6: [
    { id: 'sa6-1', type: 'choice', q: '树上有 2 只小鸟，又飞来 3 只，一共有几只？', options: ['5 只', '4 只', '6 只', '3 只'], answer: 0, explain: '2 + 3 = 5（只）。把两部分合起来，用加法。', tag: '加法' },
    { id: 'sa6-2', type: 'choice', q: '盘子里有 4 个桃子，小猴吃掉 1 个，还剩几个？', options: ['3 个', '4 个', '2 个', '5 个'], answer: 0, explain: '4 - 1 = 3（个）。去掉一部分，用减法。', tag: '减法' },
    { id: 'sa6-3', type: 'choice', q: '3 - 0 = ?', options: ['3', '0', '2', '4'], answer: 0, explain: '减 0 就是一个也没去掉，还是 3。', tag: '0的减法' },
    { id: 'sa6-4', type: 'choice', q: '2 + 3 = ?', options: ['5', '4', '6', '3'], answer: 0, explain: '从 2 接着数：3、4、5，一共 5。', tag: '加法' },
    { id: 'sa6-5', type: 'choice', q: '6 - 2 = ?', options: ['4', '3', '5', '2'], answer: 0, explain: '想 2 加几得 6：2 + 4 = 6，所以 6 - 2 = 4。', tag: '减法' },
    { id: 'sa6-6', type: 'choice', q: '5 朵花和 3 朵花合起来是几朵？', options: ['8 朵', '7 朵', '6 朵', '9 朵'], answer: 0, explain: '5 + 3 = 8（朵），合起来用加法。', tag: '加法应用' },
    { id: 'sa6-7', type: 'choice', q: '连加：2 + 3 + 4 = ?', options: ['9', '8', '7', '10'], answer: 0, explain: '先算 2 + 3 = 5，再算 5 + 4 = 9。连加从左往右算。', tag: '连加' },
    { id: 'sa6-8', type: 'choice', q: '加减混合：10 - 4 + 2 = ?', options: ['8', '6', '7', '9'], answer: 0, explain: '先算 10 - 4 = 6，再算 6 + 2 = 8。按顺序算不慌张。', tag: '加减混合' },
    { id: 'sa6-9', type: 'judge', q: '1 + 5 和 5 + 1 的得数一样。', options: ['√ 对', '✗ 错'], answer: 0, explain: '交换两个数的位置，合起来的总数不变，都是 6。', tag: '交换' },
    { id: 'sa6-10', type: 'judge', q: '7 - 7 = 7。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：7 个全拿走，一个也不剩，7 - 7 = 0。', tag: '同数相减' },
  ],
  sa7: [
    { id: 'sa7-1', type: 'choice', q: '10 根小棒捆成 1 捆，再加 3 根，一共是多少？', options: ['13', '12', '14', '11'], answer: 0, explain: '1 捆是 10 根，再加 3 根就是 13。', tag: '数的组成' },
    { id: 'sa7-2', type: 'choice', q: '11 ~ 20：15 里面有 1 个十和几个一？', options: ['5 个一', '1 个一', '4 个一', '6 个一'], answer: 0, explain: '15 = 10 + 5，1 个十和 5 个一合起来是 15。', tag: '数的组成' },
    { id: 'sa7-3', type: 'choice', q: '数数：17 后面的一个数是几？', options: ['18', '16', '19', '17'], answer: 0, explain: '按顺序数：16、17、18，17 的后面是 18。', tag: '数数' },
    { id: 'sa7-4', type: 'choice', q: '10 + 5 = ?', options: ['15', '10', '5', '20'], answer: 0, explain: '10 加几就是十几：10 + 5 = 15。', tag: '10加几' },
    { id: 'sa7-5', type: 'choice', q: '13 - 3 = ?', options: ['10', '13', '3', '11'], answer: 0, explain: '13 里面去掉 3 个一，剩下 1 个十，是 10。', tag: '相应减法' },
    { id: 'sa7-6', type: 'choice', q: '写数：1 个十和 8 个一合起来是多少？', options: ['18', '81', '9', '108'], answer: 0, explain: '先写 1 个十，再写 8 个一，就是 18。', tag: '写数' },
    { id: 'sa7-7', type: 'choice', q: '两个两个地数：12、14、16、接着数是几？', options: ['18', '17', '19', '20'], answer: 0, explain: '两个两个数，每次多 2：16 后面是 18。', tag: '数数' },
    { id: 'sa7-8', type: 'choice', q: '12 和 16 比，谁大？', options: ['16', '12', '一样大', '不能比'], answer: 0, explain: '先比十位都是 1，再比个位：6 比 2 大，所以 16 大。', tag: '比大小' },
    { id: 'sa7-9', type: 'judge', q: '20 里面有 2 个十。', options: ['√ 对', '✗ 错'], answer: 0, explain: '2 个十合起来是 20，20 是最大的整十数朋友。', tag: '数的组成' },
    { id: 'sa7-10', type: 'judge', q: '13 读作「三十一」。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：13 读作「十三」，先读十位再读个位。', tag: '读数' },
  ],
  sa8: [
    { id: 'sa8-1', type: 'choice', q: '9 + 2 = ?（凑十法：9 凑 10 差 1）', options: ['11', '10', '12', '9'], answer: 0, explain: '把 2 分成 1 和 1：9 + 1 = 10，10 + 1 = 11。凑十法真棒！', tag: '9加几' },
    { id: 'sa8-2', type: 'choice', q: '9 + 5 = ?', options: ['14', '13', '15', '12'], answer: 0, explain: '把 5 分成 1 和 4：9 + 1 = 10，10 + 4 = 14。', tag: '9加几' },
    { id: 'sa8-3', type: 'choice', q: '8 + 4 = ?', options: ['12', '11', '13', '10'], answer: 0, explain: '把 4 分成 2 和 2：8 + 2 = 10，10 + 2 = 12。', tag: '8加几' },
    { id: 'sa8-4', type: 'choice', q: '7 + 6 = ?', options: ['13', '12', '14', '11'], answer: 0, explain: '把 6 分成 3 和 3：7 + 3 = 10，10 + 3 = 13。', tag: '7加几' },
    { id: 'sa8-5', type: 'choice', q: '6 + 5 = ?', options: ['11', '10', '12', '9'], answer: 0, explain: '把 5 分成 4 和 1：6 + 4 = 10，10 + 1 = 11。', tag: '6加几' },
    { id: 'sa8-6', type: 'choice', q: '5 + 7 = ?', options: ['12', '11', '13', '10'], answer: 0, explain: '想 7 + 5 一样：把 5 分成 3 和 2，7 + 3 = 10，10 + 2 = 12。', tag: '5加几' },
    { id: 'sa8-7', type: 'choice', q: '丰收的果园：树上有 9 个苹果，摘下 6 个，还剩几个？', options: ['3 个', '4 个', '2 个', '5 个'], answer: 0, explain: '9 - 6 = 3（个）。进位加法学好了，减法也要会算哦。', tag: '丰收的果园' },
    { id: 'sa8-8', type: 'choice', q: '小明做了 8 朵红花，又做了 7 朵黄花，一共做了几朵？', options: ['15 朵', '14 朵', '16 朵', '13 朵'], answer: 0, explain: '8 + 7：把 7 分成 2 和 5，8 + 2 = 10，10 + 5 = 15（朵）。', tag: '应用题' },
    { id: 'sa8-9', type: 'judge', q: '计算 9 + 3 时，可以先把 9 凑成 10 再算。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对呀：把 3 分成 1 和 2，9 + 1 = 10，10 + 2 = 12，这就是凑十法。', tag: '凑十法' },
    { id: 'sa8-10', type: 'judge', q: '4 + 8 和 8 + 4 的得数不一样。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错啦：交换加数位置得数不变，都是 12。', tag: '交换' },
  ],
}
