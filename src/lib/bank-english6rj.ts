// 人教版PEP英语 六年级上册（三年级起点·六三制 2026秋新版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（PEP）六年级上册（2026 秋版）· 人民教育出版社
// 目录（电子课本网 dzkbw pep6s_2026 权威核对）：
//   Unit 1 Amazing places / Unit 2 Getting together / Unit 3 Healthy life
//   Unit 4 Managing money well / Unit 5 Exploring space / Unit 6 Energy, nature and us
//   Revision: Learning in museums
// 每单元一关，每关 10 题，共 7 关 70 题，题目 id 前缀 zf

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
    id: 'zf1',
    name: 'Unit 1',
    title: 'Amazing places',
    emoji: '🏔️',
    color: 'amber',
    lessons: ['Amazing places', 'A trip plan', 'Travel stories'],
    intro: '长城、西湖、兵马俑……神奇的地方等你去探索！',
  },
  {
    id: 'zf2',
    name: 'Unit 2',
    title: 'Getting together',
    emoji: '🥮',
    color: 'orange',
    lessons: ['Getting together', 'Family reunion', 'Festival time'],
    intro: '中秋团圆、佳节相聚，在一起的时光最珍贵！',
  },
  {
    id: 'zf3',
    name: 'Unit 3',
    title: 'Healthy life',
    emoji: '🏃',
    color: 'lime',
    lessons: ['Healthy life', 'Good habits review', 'A healthy plan'],
    intro: '作息规律、坚持运动，健康生活每一天！',
  },
  {
    id: 'zf4',
    name: 'Unit 4',
    title: 'Managing money well',
    emoji: '💰',
    color: 'teal',
    lessons: ['Managing money well', 'Pocket money', 'Save and spend'],
    intro: '零花钱怎么花？学会理财做聪明小主人！',
  },
  {
    id: 'zf5',
    name: 'Unit 5',
    title: 'Exploring space',
    emoji: '🚀',
    color: 'rose',
    lessons: ['Exploring space', 'The moon and stars', 'Space dreams'],
    intro: '火箭升空、月球漫步，浩瀚太空任你想象！',
  },
  {
    id: 'zf6',
    name: 'Unit 6',
    title: 'Energy, nature and us',
    emoji: '🔋',
    color: 'cyan',
    lessons: ['Energy, nature and us', 'Green energy', 'Protect our planet'],
    intro: '节约能源、拥抱绿色，守护我们共同的家园！',
  },
  {
    id: 'zfr',
    name: 'Revision',
    title: 'Learning in museums',
    emoji: '🏛️',
    color: 'pink',
    lessons: ['Learning in museums', '常用表达语', '综合复习'],
    intro: '走进博物馆，边玩边学，六上英语大闯关！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zf1: [
    { id: 'zf1-1', type: 'choice', q: '"Amazing places" 的意思是：', options: ['神奇的地方', '无聊的教室', '我的房间', '小区花园'], answer: 0, explain: 'amazing 神奇的，place 地方，大好河山有很多 amazing places！', tag: '短语理解' },
    { id: 'zf1-2', type: 'choice', q: '"the Great Wall"（长城）在哪个城市附近？', options: ['Beijing 北京', 'Shanghai 上海', 'Guangzhou 广州', 'Hangzhou 杭州'], answer: 0, explain: '长城主要在北京周边，是中国也是世界的奇迹！', tag: '名胜古迹' },
    { id: 'zf1-3', type: 'choice', q: '"West Lake"（西湖）在：', options: ['Hangzhou 杭州', "Xi'an 西安", 'Beijing 北京', 'Chengdu 成都'], answer: 0, explain: '上有天堂，下有苏杭！West Lake 西湖在杭州。', tag: '名胜古迹' },
    { id: 'zf1-4', type: 'choice', q: '"We are going to visit the museum." 的意思是：', options: ['我们打算去参观博物馆。', '我们昨天去了博物馆。', '我们讨厌博物馆。', '博物馆关门了。'], answer: 0, explain: 'be going to 表示打算、计划，即将要做的事。', tag: '句型' },
    { id: 'zf1-5', type: 'judge', q: '秦始皇兵马俑（the Terracotta Warriors）在西安。', options: ['√ 对', '✗ 错'], answer: 0, explain: '西安是千年古都，兵马俑被誉为"世界第八大奇迹"！', tag: '名胜古迹' },
    { id: 'zf1-6', type: 'choice', q: '做旅行计划首先要确定：', options: ['时间、地点和交通', '零食和玩具', '游戏和电影', '睡到几点'], answer: 0, explain: 'travel plan 三要素：when 何时、where 何地、how 怎么去！', tag: '旅行规划' },
    { id: 'zf1-7', type: 'choice', q: '"How did you go there?" 回答正确的是：', options: ['By high-speed train.', 'Last summer.', 'It was great!', 'I went with my parents.'], answer: 0, explain: 'How 问交通方式，回答用 By + 交通工具。', tag: '疑问词' },
    { id: 'zf1-8', type: 'choice', q: '在景区看到"禁止攀爬"的牌子，你应该：', options: ['遵守规定，不攀爬', '偷偷爬上去', '拍照打卡爬一下', '把牌子拆掉'], answer: 0, explain: '遵守景区规则，爱护文物古迹，做文明游客！', tag: '文明旅游' },
    { id: 'zf1-9', type: 'choice', q: '"Guilin is famous for its mountains and rivers." 中 famous for 的意思是：', options: ['以……闻名', '对……友好', '和……一样', '离……很远'], answer: 0, explain: 'be famous for 以……闻名，桂林山水甲天下！', tag: '短语' },
    { id: 'zf1-10', type: 'judge', q: '旅行时垃圾要装袋带走或扔进垃圾箱。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Leave nothing but footprints. 除了脚印什么都不留下！', tag: '文明旅游' },
  ],
  zf2: [
    { id: 'zf2-1', type: 'choice', q: '"Getting together" 的意思是：', options: ['团聚、相聚', '分道扬镳', '一起上班', '一起搬家'], answer: 0, explain: 'get together 团聚，逢年过节一家人在一起最幸福！', tag: '短语理解' },
    { id: 'zf2-2', type: 'choice', q: '中秋节全家一起吃的是：', options: ['mooncakes 月饼', 'dumplings 饺子', 'zongzi 粽子', 'noodles 面条'], answer: 0, explain: 'Mid-Autumn Festival 中秋节，赏月吃 mooncakes，团团圆圆！', tag: '节日文化' },
    { id: 'zf2-3', type: 'choice', q: '春节（Spring Festival）常见的活动是：', options: ['吃团圆饭、拜年', '堆雪人打雪仗', '去学校上课', '扫墓踏青'], answer: 0, explain: '春节吃年夜饭、贴春联、拜年送祝福，是中国最重要的节日！', tag: '节日文化' },
    { id: 'zf2-4', type: 'choice', q: '"My grandparents live in the countryside." 的意思是：', options: ['我的祖父母住在乡下。', '我的祖父母住在城里。', '我的祖父母去旅行了。', '我的祖父母喜欢城市。'], answer: 0, explain: 'countryside 乡村，放假常回乡下看看爷爷奶奶！', tag: '句型' },
    { id: 'zf2-5', type: 'judge', q: '家庭聚会上，主动和长辈聊天、帮忙端菜是懂事的表现。', options: ['√ 对', '✗ 错'], answer: 0, explain: '团聚时光珍贵，主动帮忙、陪长辈聊天，做贴心小主人！', tag: '品德养成' },
    { id: 'zf2-6', type: 'choice', q: '亲戚家的小客人来了，你应该：', options: ['和他分享玩具', '藏起玩具', '让他哭', '霸占电视'], answer: 0, explain: 'Share your toys. 分享让快乐加倍，做热情的小主人！', tag: '社交礼仪' },
    { id: 'zf2-7', type: 'choice', q: '收到压岁钱，应该先：', options: ['和爸妈商量怎么管理', '全部买玩具', '到处炫耀', '随手乱放'], answer: 0, explain: '压岁钱要合理规划，可以储蓄、记账，学会理财！', tag: '理财意识' },
    { id: 'zf2-8', type: 'choice', q: '"We had a big family dinner." 的时态是：', options: ['一般过去时', '一般现在时', '一般将来时', '现在进行时'], answer: 0, explain: 'had 是 have 的过去式，表示过去发生的动作。', tag: '语法' },
    { id: 'zf2-9', type: 'choice', q: '远方的亲人不能团聚，可以用什么联系？', options: ['video call 视频通话', ' Forget them', 'Never talk', 'Break the phone'], answer: 0, explain: '视频通话让爱不缺席，天各一方也能"见面"！', tag: '情感态度' },
    { id: 'zf2-10', type: 'judge', q: '"Where there is love, there is home." 意思是"有爱就有家"。', options: ['√ 对', '✗ 错'], answer: 0, explain: '家人之间的爱，让每个相聚的时刻都变成温暖的"家"！', tag: '情感态度' },
  ],
  zf3: [
    { id: 'zf3-1', type: 'choice', q: '"Healthy life" 的意思是：', options: ['健康的生活', '忙碌的生活', '游戏人生', '天天睡懒觉'], answer: 0, explain: 'healthy 健康的，规律作息 + 均衡饮食 + 坚持运动！', tag: '短语理解' },
    { id: 'zf3-2', type: 'choice', q: '小学生每天应该睡：', options: ['9-10 小时', '5 小时', '12 小时以上', '从不睡觉'], answer: 0, explain: '小学生每天要睡够 9-10 小时，早睡早起精神好！', tag: '作息习惯' },
    { id: 'zf3-3', type: 'choice', q: '"exercise" 的意思是：', options: ['锻炼', '考试', '睡觉', '看剧'], answer: 0, explain: 'exercise 锻炼，每天锻炼一小时，强身健体少生病！', tag: '运动习惯' },
    { id: 'zf3-4', type: 'choice', q: '"Less screen time, more sleep." 的意思是：', options: ['少看屏幕多睡觉', '多看屏幕少睡觉', '只看屏幕不睡觉', '关掉手机去上学'], answer: 0, explain: '控制屏幕时间，睡眠充足，第二天学习效率更高！', tag: '健康习惯' },
    { id: 'zf3-5', type: 'judge', q: '不吃早餐有利于身体健康。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！早餐为大脑供能，不吃早餐容易头晕、注意力不集中！', tag: '饮食习惯' },
    { id: 'zf3-6', type: 'choice', q: '保护视力的正确做法：', options: ['读写 30-40 分钟远眺休息', '黑暗里看书', '躺着刷视频', '离屏幕越近越好'], answer: 0, explain: '科学用眼，定时休息、认真做眼保健操，视力棒棒！', tag: '健康习惯' },
    { id: 'zf3-7', type: 'choice', q: '"You should go to bed early." 中 should 的意思是：', options: ['应该', '可以', '必须不', '将要'], answer: 0, explain: 'should 应该，提建议常用：You should... 你应该……。', tag: '语法' },
    { id: 'zf3-8', type: 'choice', q: '饭后适合做的运动是：', options: ['散步', '百米冲刺', '倒立', '立刻游泳'], answer: 0, explain: '饭后百步走，活到九十九！剧烈运动要等饭后一小时哦。', tag: '运动常识' },
    { id: 'zf3-9', type: 'choice', q: '"keep a balanced diet" 的意思是：', options: ['保持均衡饮食', '只吃肉', '只吃菜', '吃很多糖'], answer: 0, explain: 'balanced diet 均衡饮食，五谷、蔬果、肉蛋奶都要有！', tag: '饮食习惯' },
    { id: 'zf3-10', type: 'judge', q: '心情不好时，运动、听音乐、找人倾诉都是好办法。', options: ['√ 对', '✗ 错'], answer: 0, explain: '心理健康同样重要，学会调节情绪，做阳光少年！', tag: '心理健康' },
  ],
  zf4: [
    { id: 'zf4-1', type: 'choice', q: '"Managing money well" 的意思是：', options: ['管好金钱', '疯狂花钱', '把钱扔掉', '向别人借钱'], answer: 0, explain: 'manage 管理，money 钱，学会管钱是长大的必修课！', tag: '短语理解' },
    { id: 'zf4-2', type: 'choice', q: '"pocket money" 指的是：', options: ['零花钱', '工资', '奖学金', '压岁钱债'], answer: 0, explain: 'pocket money 零花钱，怎么用零花钱大有学问！', tag: '理财词汇' },
    { id: 'zf4-3', type: 'choice', q: '"save" 在理财中的意思是：', options: ['储蓄、节省', '浪费', '扔掉', '偷拿'], answer: 0, explain: 'save money 存钱、省钱；spend money 花钱，一存一花要平衡！', tag: '理财词汇' },
    { id: 'zf4-4', type: 'choice', q: '想买一个较贵的文具，最好的办法是：', options: ['攒零花钱、制定储蓄计划', '哭着要', '偷偷拿家长的钱', '向同学借不还'], answer: 0, explain: 'Save up for it! 攒钱实现愿望，延迟满足更珍贵！', tag: '理财习惯' },
    { id: 'zf4-5', type: 'judge', q: '买东西前先想想"需要"还是"想要"，能避免乱花钱。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'need 需要，want 想要；先分清，再做决定，聪明消费！', tag: '理财习惯' },
    { id: 'zf4-6', type: 'choice', q: '"spend...on..." 的用法正确的是：', options: ['I spend ten yuan on books.', 'I spend books on ten yuan.', 'I spend ten books.', 'I books ten yuan.'], answer: 0, explain: 'spend + 钱 + on + 东西：花多少钱买某物。', tag: '语法' },
    { id: 'zf4-7', type: 'choice', q: '记账（keep accounts）的好处是：', options: ['知道钱花在哪里', '让钱变多', '假装有钱', '给别人看'], answer: 0, explain: '记账能看清收支，养成理性消费的好习惯！', tag: '理财习惯' },
    { id: 'zf4-8', type: 'choice', q: '捡到钱包的正确做法：', options: ['交给老师或警察', '自己留着', '扔掉', '拆开看看'], answer: 0, explain: '拾金不昧是美德，拾到财物要归还或上交！', tag: '品德养成' },
    { id: 'zf4-9', type: 'choice', q: '"price" 的意思是：', options: ['价格', '礼物', '商店', '钱包'], answer: 0, explain: 'price 价格，货比三家：The price is too high. 价格太高了。', tag: '理财词汇' },
    { id: 'zf4-10', type: 'judge', q: '免费的网络游戏抽奖，可能诱导花钱，要警惕并告诉家长。', options: ['√ 对', '✗ 错'], answer: 0, explain: '警惕游戏充值陷阱，不乱输密码，涉及花钱先问家长！', tag: '安全常识' },
  ],
  zf5: [
    { id: 'zf5-1', type: 'choice', q: '"Exploring space" 的意思是：', options: ['探索太空', '打扫房间', '太空电影', '宇宙飞船票'], answer: 0, explain: 'explore 探索，space 太空，星辰大海等着我们！', tag: '短语理解' },
    { id: 'zf5-2', type: 'choice', q: '"astronaut" 指的是：', options: ['宇航员', '天文学家', '飞行员', '科学家'], answer: 0, explain: 'astronaut 宇航员，乘火箭上太空，中国航天员 super cool！', tag: '太空词汇' },
    { id: 'zf5-3', type: 'choice', q: '地球绕着哪颗恒星转？', options: ['the Sun 太阳', 'the Moon 月亮', 'Mars 火星', 'Venus 金星'], answer: 0, explain: '地球绕太阳转，自转一圈是一天，公转一圈是一年！', tag: '太空知识' },
    { id: 'zf5-4', type: 'choice', q: '"The moon is bright tonight." 的意思是：', options: ['今晚月色明亮。', '今晚没有月亮。', '月亮是绿色的。', '月亮掉下来了。'], answer: 0, explain: 'bright 明亮的，月光洒满窗台，多美呀！', tag: '句型' },
    { id: 'zf5-5', type: 'judge', q: '月球上没有空气，宇航员要穿宇航服。', options: ['√ 对', '✗ 错'], answer: 0, explain: '太空没有氧气、温差极大，宇航服给宇航员全方位保护！', tag: '太空知识' },
    { id: 'zf5-6', type: 'choice', q: '中国自行建造的空间站叫：', options: ['天宫空间站', '国际空间站', '和平号', '哈勃'], answer: 0, explain: '天宫空间站是中国人的"太空之家"，航天员在里面做实验！', tag: '航天成就' },
    { id: 'zf5-7', type: 'choice', q: '"rocket" 的意思是：', options: ['火箭', '飞机', '高铁', '轮船'], answer: 0, explain: 'rocket 火箭，把卫星和宇航员送入太空！', tag: '太空词汇' },
    { id: 'zf5-8', type: 'choice', q: '第一进入太空的中国航天员是：', options: ['杨利伟', '牛顿', '爱因斯坦', '姚明'], answer: 0, explain: '2003 年杨利伟乘神舟五号飞天，中国太空之旅从此启航！', tag: '航天成就' },
    { id: 'zf5-9', type: 'choice', q: '"I want to be an astronaut in the future." 的意思是：', options: ['我将来想当宇航员。', '我害怕宇航员。', '我在看宇航员。', '宇航员来看我。'], answer: 0, explain: 'in the future 将来，怀揣梦想，努力学习去实现！', tag: '句型' },
    { id: 'zf5-10', type: 'judge', q: '太空里宇航员处于失重状态，容易"飘"起来。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！失重环境下人能"飞"，水珠也会飘成圆球，神奇吧！', tag: '太空知识' },
  ],
  zf6: [
    { id: 'zf6-1', type: 'choice', q: '"Energy, nature and us" 的意思是：', options: ['能源、自然与我们', '电力公司', '动物园游记', '天气预报'], answer: 0, explain: 'energy 能源，能源来自自然，我们该如何善待它们？', tag: '短语理解' },
    { id: 'zf6-2', type: 'choice', q: '下面哪种是绿色能源？', options: ['solar power 太阳能', 'coal 煤', 'petrol 汽油', 'diesel 柴油'], answer: 0, explain: '太阳能、风能、水能都是绿色能源，清洁又可再生！', tag: '能源知识' },
    { id: 'zf6-3', type: 'choice', q: '"turn off the tap" 的意思是：', options: ['关掉水龙头', '打开水龙头', '修水龙头', '买水龙头'], answer: 0, explain: 'tap 水龙头，turn off 关掉，刷完牙别让水哗哗流！', tag: '节能行动' },
    { id: 'zf6-4', type: 'choice', q: '节约用电的做法是：', options: ['人走灯灭', '白天开灯', '空调开到最低', '电器待机一整夜'], answer: 0, explain: '随手关灯、拔插头，节约能源从点滴做起！', tag: '节能行动' },
    { id: 'zf6-5', type: 'judge', q: '纸张是木头做的，双面用纸能保护森林。', options: ['√ 对', '✗ 错'], answer: 0, explain: '对！Save paper, save trees. 双面用纸、回收废纸，保护森林资源！', tag: '环保行动' },
    { id: 'zf6-6', type: 'choice', q: '"reuse" 的意思是：', options: ['重复使用', '直接扔掉', '高价购买', '焚烧处理'], answer: 0, explain: 'reuse 再利用：旧衣捐赠、玻璃瓶装东西，物尽其用！', tag: '环保词汇' },
    { id: 'zf6-7', type: 'choice', q: '全球变暖（global warming）可能导致：', options: ['冰川融化、海平面上升', '冬天更长', '永远不下雨', '月亮变亮'], answer: 0, explain: '少开车、多种树、节能降碳，一起减缓全球变暖！', tag: '环保知识' },
    { id: 'zf6-8', type: 'choice', q: '"We should protect wild animals." 中 protect 的意思是：', options: ['保护', '捕捉', '买卖', '驱赶'], answer: 0, explain: 'protect 保护，野生动物是自然的伙伴，拒绝捕杀和买卖！', tag: '环保词汇' },
    { id: 'zf6-9', type: 'choice', q: '践行低碳生活，你可以：', options: ['步行或骑车上学', '一直开着空调', '天天打车', '浪费水电'], answer: 0, explain: 'low-carbon life 低碳生活，绿色出行、节水节电！', tag: '环保行动' },
    { id: 'zf6-10', type: 'judge', q: '地球是我们唯一的家园，保护环境就是保护我们自己。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'There is no Planet B! 守护地球，就是守护我们的未来！', tag: '主题升华' },
  ],
  zfr: [
    { id: 'zfr-1', type: 'choice', q: '"Learning in museums" 的意思是：', options: ['在博物馆里学习', '在博物馆睡觉', '卖博物馆门票', '打扫博物馆'], answer: 0, explain: 'museum 博物馆，文物会"说话"，边看边学长知识！', tag: '短语理解' },
    { id: 'zfr-2', type: 'choice', q: '参观博物馆的正确礼仪是：', options: ['安静参观，不用闪光灯拍照', '大声喧哗', '触摸展品', '追逐打闹'], answer: 0, explain: '文明观展：轻声慢步、爱护展品，做个有教养的参观者！', tag: '场馆礼仪' },
    { id: 'zfr-3', type: 'choice', q: '科技馆（science museum）里可以：', options: ['动手体验科学互动展项', '背课文和写作业', '大声追逐打闹', '随意吃零食'], answer: 0, explain: 'science museum 科技馆有各种互动实验装置，科学原来这么好玩！', tag: '场馆知识' },
    { id: 'zfr-4', type: 'choice', q: '"I learned a lot from this trip." 的意思是：', options: ['我从这次旅行中学到很多。', '我这次旅行很累。', '我讨厌这次旅行。', '我旅行时忘带东西了。'], answer: 0, explain: 'learn from... 从……学到，研学旅行收获满满！', tag: '句型' },
    { id: 'zfr-5', type: 'judge', q: '博物馆里的文物记录着历史，我们要爱护它们。', options: ['√ 对', '✗ 错'], answer: 0, explain: '文物是历史的见证，是不可再生的宝贝，人人爱护！', tag: '文化保护' },
    { id: 'zfr-6', type: 'choice', q: '复习：问路应该说：', options: ['Excuse me, how can I get to the museum?', 'Tell me the way! Now!', 'Where is my ticket?', 'What is a museum?'], answer: 0, explain: '问路先说 Excuse me，礼貌用语不能少！', tag: '问路' },
    { id: 'zfr-7', type: 'choice', q: '复习："How was your weekend?" 回答正确的是：', options: ['It was great! I went to a museum.', 'I am twelve.', 'It\'s rainy today.', 'Yes, please.'], answer: 0, explain: 'How was...? 过去怎么样？回答用过去时：It was great!。', tag: '句型复习' },
    { id: 'zfr-8', type: 'choice', q: '这学期哪个单词表示"零花钱"？', options: ['pocket money', 'paper money', 'lucky money', 'toy money'], answer: 0, explain: 'pocket money 零花钱，管好它就是管好自己的小生活！', tag: '单词复习' },
    { id: 'zfr-9', type: 'choice', q: '绿色能源包括：', options: ['风能、太阳能', '煤和石油', '汽油和柴油', '煤炭和天然气'], answer: 0, explain: 'wind and solar power 风能太阳能取之不尽，清洁环保！', tag: '单词复习' },
    { id: 'zfr-10', type: 'judge', q: '学英语不仅为了考试，更是为了了解更广阔的世界。', options: ['√ 对', '✗ 错'], answer: 0, explain: '语言是通往世界的桥梁，Keep learning, keep exploring!', tag: '学习态度' },
  ],
}
