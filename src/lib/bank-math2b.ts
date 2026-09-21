// 沪教版（五四学制·上海教育出版社）数学二年级下册 随堂知识点题库（现行版目录）
// 目录（电子课本网核对）：
//   一 复习与提高 / 二 千以内数的认识与表达 / 三 时间的初步认识（二）/ 四 三位数的加减法
//   五 质量的初步认识 / 六 几何小实践 / 七 整理与提高
// 每个单元一关，每关 10 题，题目 id 前缀 zv

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
    id: 'zv1',
    name: '第一单元',
    title: '复习与提高',
    emoji: '🌱',
    color: 'cyan',
    lessons: ['小复习', '分拆成几个几加几个几', '相差多少'],
    intro: '乘法本领再升级，把算式分拆成几个几加几个几，相差多少一眼看出来！',
  },
  {
    id: 'zv2',
    name: '第二单元',
    title: '千以内数的认识与表达',
    emoji: '🔢',
    color: 'amber',
    lessons: ['千以内数的认识与表达', '数射线（千）', '位值图上的游戏'],
    intro: '一百一百地数到一千，数射线上比大小，位值图上的游戏真好玩！',
  },
  {
    id: 'zv3',
    name: '第三单元',
    title: '时间的初步认识（二）',
    emoji: '⏰',
    color: 'orange',
    lessons: ['时、分、秒', '时间单位小练习'],
    intro: '时针分针秒针赛跑，1 时 = 60 分、1 分 = 60 秒，做时间的小主人！',
  },
  {
    id: 'zv4',
    name: '第四单元',
    title: '三位数的加减法',
    emoji: '🚂',
    color: 'lime',
    lessons: ['整百数、整十数的加减法', '三位数加减一位数', '三位数加法与减法', '三位数加减法的估算'],
    intro: '整百整十先算快，三位数加减竖式帮忙，还能用估算来判断对错！',
  },
  {
    id: 'zv5',
    name: '第五单元',
    title: '质量的初步认识',
    emoji: '⚖️',
    color: 'teal',
    lessons: ['轻与重', '克、千克的认识与计算'],
    intro: '天平翘一翘谁重谁轻，克和千克手拉手，1 千克 = 1000 克！',
  },
  {
    id: 'zv6',
    name: '第六单元',
    title: '几何小实践',
    emoji: '🧭',
    color: 'violet',
    lessons: ['东南西北', '角', '三角形与四边形', '三角形的分类（1）'],
    intro: '辨认东南西北，认识角和三角形，几何小侦探出发啦！',
  },
  {
    id: 'zv7',
    name: '第七单元',
    title: '整理与提高',
    emoji: '🏁',
    color: 'pink',
    lessons: ['万以内数的认识与表达', '解决问题', '巧算（2）', '数学广场——列表枚举'],
    intro: '万以内的数会读会写，巧算有妙招，数学广场里列表枚举本领大！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zv1: [
    { id: 'zv1-1', type: 'choice', q: '7×3 可以分拆成"几个几加几个几"？', options: ['4×3 ＋ 3×3', '5×3 ＋ 3×2', '6×3 ＋ 2×3', '7×2 ＋ 7×3'], answer: 0, explain: '7 个 3 分成 4 个 3 加 3 个 3：4×3 + 3×3 = 12 + 9 = 21 = 7×3。', tag: '分拆' },
    { id: 'zv1-2', type: 'choice', q: '5 × 8 = ?', options: ['40', '35', '45', '48'], answer: 0, explain: '想口诀"五八四十"，5×8 = 40。', tag: '小复习' },
    { id: 'zv1-3', type: 'choice', q: '35 比 28 多多少？', options: ['7', '8', '63', '17'], answer: 0, explain: '相差多少用减法：35 - 28 = 7。', tag: '相差多少' },
    { id: 'zv1-4', type: 'choice', q: '6×4 ＋ 6 ＝ 6×（ ），括号里填几？', options: ['5', '4', '6', '3'], answer: 0, explain: '6×4 是 4 个 6，再加 1 个 6 就是 5 个 6，所以是 6×5。', tag: '分拆' },
    { id: 'zv1-5', type: 'judge', q: '3×7 ＝ 3×6 ＋ 3。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！3×7 是 7 个 3，就是 6 个 3 再加 1 个 3，等于 21。', tag: '分拆' },
    { id: 'zv1-6', type: 'choice', q: '62 与 47 相差多少？', options: ['15', '25', '11', '109'], answer: 0, explain: '62 - 47 = 15。求相差多少，用大数减小数。', tag: '相差多少' },
    { id: 'zv1-7', type: 'choice', q: '5×8 ＝ 3×8 ＋ □×8，□ 里填几？', options: ['2', '3', '5', '8'], answer: 0, explain: '5 个 8 分成 3 个 8 和 2 个 8，□ 填 2。', tag: '分拆' },
    { id: 'zv1-8', type: 'judge', q: '比 58 多 6 的数是 52。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！比 58 多 6 要用加法：58 + 6 = 64。52 是比 58 少 6 的数。', tag: '相差多少' },
    { id: 'zv1-9', type: 'choice', q: '（ ）× 9 ＝ 27 ＋ 9，括号里填几？', options: ['4', '3', '5', '9'], answer: 0, explain: '27 + 9 = 36，36 ÷ 9 = 4，想口诀"四九三十六"。', tag: '逆向思考' },
    { id: 'zv1-10', type: 'choice', q: '解决问题：花花有 8 朵红花，东东有 11 朵，东东比花花多几朵？', options: ['3 朵', '19 朵', '8 朵', '4 朵'], answer: 0, explain: '比多少用减法：11 - 8 = 3（朵）。', tag: '相差多少' },
  ],
  zv2: [
    { id: 'zv2-1', type: 'choice', q: '10 个一百是多少？', options: ['一千', '一百', '一万', '九十'], answer: 0, explain: '一百一百地数，10 个一百是一千。', tag: '千以内数' },
    { id: 'zv2-2', type: 'choice', q: '358 里面有（ ）？', options: ['3 个百、5 个十和 8 个一', '3 个百、8 个十和 5 个一', '5 个百、3 个十和 8 个一', '358 个一'], answer: 0, explain: '358 = 300 + 50 + 8，百位 3、十位 5、个位 8。', tag: '数的组成' },
    { id: 'zv2-3', type: 'choice', q: '在数射线上，和 340 相邻的两个数是？', options: ['339 和 341', '330 和 350', '341 和 342', '300 和 400'], answer: 0, explain: '数射线上一个数一个数地数，340 的左边是 339，右边是 341。', tag: '数射线（千）' },
    { id: 'zv2-4', type: 'judge', q: '908 读作"九百零八"。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！十位上一个也没有，要用"零"来占位读出。', tag: '读数' },
    { id: 'zv2-5', type: 'choice', q: '位值图上的游戏：用 2 颗小圆片在数位表（百位、十位、个位）上摆，可以摆出几个不同的数？', options: ['6 个', '3 个', '4 个', '5 个'], answer: 0, explain: '2、11、20、101、110、200，一共 6 个数。圆片位置不同，数就不同！', tag: '位值图' },
    { id: 'zv2-6', type: 'choice', q: '比较大小：567 ○ 576', options: ['<', '>', '=', '不能比'], answer: 0, explain: '先比百位：都是 5；再比十位：6 < 7，所以 567 < 576。', tag: '比大小' },
    { id: 'zv2-7', type: 'judge', q: '最大的三位数是 999。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！三个数位都装满 9，就是最大的三位数。', tag: '数的认识' },
    { id: 'zv2-8', type: 'choice', q: '6 个百和 8 个十合起来是多少？', options: ['680', '608', '688', '86'], answer: 0, explain: '6 个百是 600，8 个十是 80，合起来 680。', tag: '数的组成' },
    { id: 'zv2-9', type: 'choice', q: '比 500 小、比 498 大的数是？', options: ['499', '497', '501', '498'], answer: 0, explain: '按顺序数：498、499、500，夹在中间的是 499。', tag: '数的顺序' },
    { id: 'zv2-10', type: 'judge', q: '405 的个位上的 5 表示 5 个一。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！405 = 4 个百、0 个十、5 个一。', tag: '数的组成' },
  ],
  zv3: [
    { id: 'zv3-1', type: 'choice', q: '1 时 = ? 分', options: ['60 分', '10 分', '100 分', '30 分'], answer: 0, explain: '分针走一圈正好 60 小格，时针走 1 大格，1 时 = 60 分。', tag: '时与分' },
    { id: 'zv3-2', type: 'choice', q: '1 分 = ? 秒', options: ['60 秒', '10 秒', '100 秒', '30 秒'], answer: 0, explain: '秒针走一小格是 1 秒，走一圈是 60 秒，正好 1 分。', tag: '分与秒' },
    { id: 'zv3-3', type: 'choice', q: '时针刚过 3，分针指着 3，现在是几时几分？', options: ['3 时 15 分', '3 时 3 分', '12 时 15 分', '3 时半'], answer: 0, explain: '分针指 3 就是 15 分（每大格 5 分：3×5=15），是 3 时 15 分。', tag: '认读时间' },
    { id: 'zv3-4', type: 'judge', q: '秒针走一圈是 1 分钟。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！秒针走一圈 60 秒，也就是 1 分。', tag: '认识秒' },
    { id: 'zv3-5', type: 'choice', q: '120 分 = ? 时', options: ['2 时', '12 时', '1 时', '20 时'], answer: 0, explain: '60 分是 1 时，120 分里有 2 个 60 分，就是 2 时。', tag: '时间换算' },
    { id: 'zv3-6', type: 'choice', q: '90 秒 = ? 分 ? 秒', options: ['1 分 30 秒', '9 分', '1 分 90 秒', '30 分'], answer: 0, explain: '60 秒 = 1 分，90 - 60 = 30 秒，所以是 1 分 30 秒。', tag: '时间换算' },
    { id: 'zv3-7', type: 'choice', q: '唱一首歌大约要 3（ ）。', options: ['分', '秒', '时', '天'], answer: 0, explain: '一首歌大约几分钟，用"分"作单位合适。', tag: '选单位' },
    { id: 'zv3-8', type: 'choice', q: '8 时 5 分用电子表记法写作？', options: ['8:05', '8:5', '85', '8:50'], answer: 0, explain: '分钟数不满 10，前面要补 0，写作 8:05。', tag: '记时间' },
    { id: 'zv3-9', type: 'judge', q: '1 秒钟可以跳绳 100 个。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！1 秒只有"滴答"一下，跳绳 1 秒最多 1~2 个。', tag: '认识秒' },
    { id: 'zv3-10', type: 'choice', q: '分针指着 6，时针指在 9 和 10 的中间，是几时？', options: ['9 时 30 分', '10 时 30 分', '9 时', '6 时'], answer: 0, explain: '时针过了 9 还没到 10，分针指 6（30 分），是 9 时 30 分。', tag: '认读时间' },
  ],
  zv4: [
    { id: 'zv4-1', type: 'choice', q: '300 + 500 = ?', options: ['800', '80', '700', '900'], answer: 0, explain: '3 个百加 5 个百是 8 个百，就是 800。', tag: '整百数加减' },
    { id: 'zv4-2', type: 'choice', q: '700 - 200 = ?', options: ['500', '50', '600', '400'], answer: 0, explain: '7 个百减 2 个百是 5 个百，就是 500。', tag: '整百数加减' },
    { id: 'zv4-3', type: 'choice', q: '450 + 40 = ?', options: ['490', '49', '850', '410'], answer: 0, explain: '5 个十加 4 个十是 9 个十，再加 4 个百，是 490。', tag: '整十数加减' },
    { id: 'zv4-4', type: 'choice', q: '563 + 4 = ?', options: ['567', '603', '573', '564'], answer: 0, explain: '个位 3 + 4 = 7，十位百位不变，是 567。', tag: '加一位数' },
    { id: 'zv4-5', type: 'choice', q: '348 + 165 = ?', options: ['513', '503', '413', '523'], answer: 0, explain: '个位 8+5=13 进一，十位 4+6+1=11 进一，百位 3+1+1=5，得 513。', tag: '三位数加法' },
    { id: 'zv4-6', type: 'choice', q: '512 - 387 = ?', options: ['125', '135', '225', '215'], answer: 0, explain: '512 - 300 = 212，212 - 87 = 125。逐位退位算也对：得 125。', tag: '三位数减法' },
    { id: 'zv4-7', type: 'choice', q: '估算：398 + 102 的结果大约是？', options: ['500', '400', '600', '300'], answer: 0, explain: '398 接近 400，102 接近 100，400 + 100 = 500。', tag: '估算' },
    { id: 'zv4-8', type: 'judge', q: '403 + 297 的结果大约是 700。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！403 ≈ 400，297 ≈ 300，400 + 300 = 700。', tag: '估算' },
    { id: 'zv4-9', type: 'choice', q: '634 - 4 = ?', options: ['630', '594', '634', '604'], answer: 0, explain: '个位 4 - 4 = 0，十位百位不变，是 630。', tag: '减一位数' },
    { id: 'zv4-10', type: 'choice', q: '解决问题：一本故事书 382 页，已经读了 146 页，还剩多少页没读？', options: ['236 页', '246 页', '336 页', '528 页'], answer: 0, explain: '382 - 146 = 236（页）。用减法算剩下的一部分。', tag: '解决问题' },
  ],
  zv5: [
    { id: 'zv5-1', type: 'choice', q: '1 千克 = ? 克', options: ['1000 克', '100 克', '10 克', '500 克'], answer: 0, explain: '1 千克 = 1000 克，千克和克的进率是 1000。', tag: '克与千克' },
    { id: 'zv5-2', type: 'choice', q: '用天平比较两个物体的轻重，沉下去的一边表示？', options: ['重', '轻', '一样重', '不确定'], answer: 0, explain: '天平沉下去的一边物体重，翘起来的一边轻。', tag: '轻与重' },
    { id: 'zv5-3', type: 'choice', q: '2 千克 = ? 克', options: ['2000 克', '200 克', '20 克', '1000 克'], answer: 0, explain: '1 千克 = 1000 克，2 千克就是 2000 克。', tag: '克与千克' },
    { id: 'zv5-4', type: 'choice', q: '500 克 + 500 克 = ?', options: ['1 千克', '10 千克', '100 克', '2 千克'], answer: 0, explain: '500 + 500 = 1000 克，1000 克 = 1 千克。', tag: '克与千克' },
    { id: 'zv5-5', type: 'judge', q: '一个苹果大约重 150 克。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！苹果拿在手里轻轻的，150 克很合理。', tag: '估一估' },
    { id: 'zv5-6', type: 'choice', q: '一个大西瓜大约重 4（ ）。', options: ['千克', '克', '米', '元'], answer: 0, explain: '西瓜沉甸甸的，大约几千克；4 克太轻啦。', tag: '选单位' },
    { id: 'zv5-7', type: 'judge', q: '1 克比 1 千克重。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！1 千克 = 1000 克，1 克比 1 千克轻得多。', tag: '克与千克' },
    { id: 'zv5-8', type: 'choice', q: '两袋盐，每袋 500 克，一共重多少？', options: ['1 千克', '500 克', '2 千克', '100 克'], answer: 0, explain: '500 × 2 = 1000 克 = 1 千克。', tag: '克与千克' },
    { id: 'zv5-9', type: 'choice', q: '一头大象大约重 5000（ ）。', options: ['千克', '克', '米', '分'], answer: 0, explain: '大象非常重，5000 千克（5 吨）才合理；5000 克只有 5 千克，太轻了。', tag: '选单位' },
    { id: 'zv5-10', type: 'judge', q: '一枚一元硬币大约重 6 克。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！硬币很轻，大约 6 克。', tag: '估一估' },
  ],
  zv6: [
    { id: 'zv6-1', type: 'choice', q: '面向南站立，背后是什么方向？', options: ['北', '东', '西', '南'], answer: 0, explain: '南和北相对，面向南，背后就是北。', tag: '东南西北' },
    { id: 'zv6-2', type: 'choice', q: '早晨面向太阳，前面是什么方向？', options: ['东', '西', '南', '北'], answer: 0, explain: '太阳从东方升起，早晨面向太阳，前面是东。', tag: '东南西北' },
    { id: 'zv6-3', type: 'choice', q: '一个角有（ ）个顶点和（ ）条边？', options: ['1 个顶点、2 条边', '2 个顶点、1 条边', '1 个顶点、1 条边', '没有顶点'], answer: 0, explain: '角是由一个顶点和两条直直的边组成的。', tag: '角的认识' },
    { id: 'zv6-4', type: 'choice', q: '三角尺上最大的角是什么角？', options: ['直角', '锐角', '钝角', '平角'], answer: 0, explain: '三角尺上有一个直角和两个锐角，直角最大。', tag: '角的认识' },
    { id: 'zv6-5', type: 'judge', q: '三角形有三条边、三个角。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！三角形有三条边和三个角。', tag: '三角形' },
    { id: 'zv6-6', type: 'choice', q: '四边形有几条边？', options: ['4 条', '3 条', '5 条', '6 条'], answer: 0, explain: '四边形有四条边和四个角，像长方形、正方形。', tag: '四边形' },
    { id: 'zv6-7', type: 'choice', q: '有一个角是直角的三角形，叫什么三角形？', options: ['直角三角形', '锐角三角形', '钝角三角形', '等边三角形'], answer: 0, explain: '按角分类：有一个直角的三角形是直角三角形。', tag: '三角形的分类' },
    { id: 'zv6-8', type: 'judge', q: '长方形是四边形。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！长方形有四条边，是四边形的一种。', tag: '四边形' },
    { id: 'zv6-9', type: 'choice', q: '角的大小与边的长短有关系吗？', options: ['没有关系，只与两边张开的大小有关', '边越长角越大', '边越短角越大', '有关系，边长角就大'], answer: 0, explain: '角的大小看两边张开的程度，边画多长都不影响。', tag: '角的大小' },
    { id: 'zv6-10', type: 'choice', q: '地图通常是按"上（ ）下南、左西右东"绘制的。', options: ['北', '南', '东', '西'], answer: 0, explain: '地图方向规定：上北、下南、左西、右东。', tag: '东南西北' },
  ],
  zv7: [
    { id: 'zv7-1', type: 'choice', q: '10 个一千是多少？', options: ['一万', '一千', '一百', '十万'], answer: 0, explain: '一千一千地数，10 个一千是一万。', tag: '万以内数' },
    { id: 'zv7-2', type: 'choice', q: '4050 读作什么？', options: ['四千零五十', '四千五十', '四千五', '四千零五'], answer: 0, explain: '百位是 0 要读"零"：4050 读作四千零五十。', tag: '读数' },
    { id: 'zv7-3', type: 'choice', q: '比较大小：3864 ○ 3846', options: ['>', '<', '=', '不能比'], answer: 0, explain: '千位、百位相同，十位 6 > 4，所以 3864 > 3846。', tag: '比大小' },
    { id: 'zv7-4', type: 'judge', q: '最小的四位数是 1000。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！千位最小装 1，其余装 0，就是 1000。', tag: '数的认识' },
    { id: 'zv7-5', type: 'choice', q: '解决问题：每盒装 6 个苹果，8 盒一共装多少个？', options: ['48 个', '42 个', '54 个', '14 个'], answer: 0, explain: '6 × 8 = 48（个），想口诀"六八四十八"。', tag: '解决问题' },
    { id: 'zv7-6', type: 'choice', q: '巧算：25 + 38 + 75 = ?', options: ['138', '128', '148', '118'], answer: 0, explain: '先把 25 和 75 凑成 100：25 + 75 + 38 = 138。', tag: '巧算' },
    { id: 'zv7-7', type: 'choice', q: '数学广场——列表枚举：只用 2 元和 5 元纸币凑出 10 元，有几种方法？', options: ['2 种', '3 种', '1 种', '4 种'], answer: 0, explain: '按顺序枚举：5+5，2×5，一共 2 种。列表枚举不重复、不遗漏。', tag: '列表枚举' },
    { id: 'zv7-8', type: 'judge', q: '7842 里有 7 个千、8 个百、4 个十和 2 个一。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！每个数位上的数字就表示几个相应的计数单位。', tag: '数的组成' },
    { id: 'zv7-9', type: 'choice', q: '解决问题：图书角原有 156 本书，借走 78 本，又还回 24 本，现在有多少本？', options: ['102 本', '112 本', '54 本', '258 本'], answer: 0, explain: '156 - 78 = 78，78 + 24 = 102（本）。借走用减，还回用加。', tag: '解决问题' },
    { id: 'zv7-10', type: 'choice', q: '巧算：63 + 29 = ?', options: ['92', '82', '93', '91'], answer: 0, explain: '29 接近 30：63 + 30 - 1 = 92。先凑整再调整。', tag: '巧算' },
  ],
}
