// 人教版PEP英语 四年级下册（三年级起点·六三制 2026春新版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（PEP）四年级下册（2026 春版）· 人民教育出版社
// 目录（电子课本网 dzkbw pep4x_2026 权威核对）：
//   Unit 1 Class rules / Unit 2 Family rules / Unit 3 Time for school
//   Unit 4 Going shopping / Unit 5 Farms and US / Unit 6 On the farm
//   Revision: A great weekend plan
// 每单元一关，每关 10 题，共 7 关 70 题，题目 id 前缀 ztd

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
    id: 'ztd1',
    name: 'Unit 1',
    title: 'Class rules',
    emoji: '📏',
    color: 'cyan',
    lessons: ['Class rules', 'Follow the rules', 'Our class charter'],
    intro: '上课守规矩，班级更美好，规则一起来制定！',
  },
  {
    id: 'ztd2',
    name: 'Unit 2',
    title: 'Family rules',
    emoji: '🏠',
    color: 'rose',
    lessons: ['Family rules', 'Housework time', 'Our family agreement'],
    intro: '家规暖心不烦心，做家务、讲约定，家庭更温馨！',
  },
  {
    id: 'ztd3',
    name: 'Unit 3',
    title: 'Time for school',
    emoji: '⏰',
    color: 'indigo',
    lessons: ['Time for school', 'My school day', 'Be on time'],
    intro: '几点起床几点睡，作息有规律，上学不迟到！',
  },
  {
    id: 'ztd4',
    name: 'Unit 4',
    title: 'Going shopping',
    emoji: '🛒',
    color: 'amber',
    lessons: ['Going shopping', 'How much is it?', 'A smart shopper'],
    intro: '看看价签算算账，货比三家会挑选，购物小达人！',
  },
  {
    id: 'ztd5',
    name: 'Unit 5',
    title: 'Farms and US',
    emoji: '🌾',
    color: 'lime',
    lessons: ['Farms and US', 'Food from farms', 'Thank you, farmers'],
    intro: '米面果蔬从哪来？农场与我们关系大！',
  },
  {
    id: 'ztd6',
    name: 'Unit 6',
    title: 'On the farm',
    emoji: '🐄',
    color: 'teal',
    lessons: ['On the farm', 'Farm animals', 'A day on the farm'],
    intro: '牛羊鸡马齐报到，农场一日游开始啦！',
  },
  {
    id: 'ztdr',
    name: 'Revision',
    title: 'A great weekend plan',
    emoji: '🎈',
    color: 'pink',
    lessons: ['A great weekend plan', '常用表达语', '综合复习'],
    intro: '周末计划做起来，学习玩耍两不误！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ztd1: [
    { id: 'ztd1-1', type: 'choice', q: '"Class rules" 的意思是：', options: ['班级规则', '班级钥匙', '班级比赛', '班级作业'], answer: 0, explain: 'rules 规则，class rules 班级规则，大家都要遵守哦。', tag: '短语理解' },
    { id: 'ztd1-2', type: 'choice', q: '上课铃响后，你应该：', options: ['回到座位安静等待', '继续在走廊玩', '大声唱歌', '跑来跑去'], answer: 0, explain: '铃响回座位，安静等老师，课堂规则第一条！', tag: '课堂规则' },
    { id: 'ztd1-3', type: 'choice', q: '同学回答问题时，你应该：', options: ['认真听，不打断', '插嘴抢答', '和同桌聊天', '玩铅笔'], answer: 0, explain: 'Listen carefully. 认真倾听是尊重，也是好学的表现。', tag: '课堂规则' },
    { id: 'ztd1-4', type: 'choice', q: '"Don\'t run in the classroom." 的意思是：', options: ['不要在教室里奔跑。', '在教室里跑快一点。', '教我跑步吧。', '教室很大。'], answer: 0, explain: 'Don\'t... 不要……，禁止性规则常用这个句型。', tag: '句型' },
    { id: 'ztd1-5', type: 'judge', q: '值日的时候，应该认真打扫，不偷懒。', options: ['√ 对', '✗ 错'], answer: 0, explain: '值日是班级小主人的一份责任，认真做，教室亮堂堂！', tag: '责任养成' },
    { id: 'ztd1-6', type: 'choice', q: '想借同桌的尺子，最有礼貌的说法是：', options: ['May I use your ruler, please?', 'Give me your ruler!', 'Your ruler is mine.', 'Where is my ruler?'], answer: 0, explain: 'May I...? 我可以……吗？客气询问，人人愿意帮忙。', tag: '句型' },
    { id: 'ztd1-7', type: 'choice', q: '全班一起制定的规则叫：', options: ['our class charter 我们的班级公约', 'my homework 我的作业', 'your seat 你的座位', 'the window 窗户'], answer: 0, explain: '大家一起商量制定的公约，人人遵守才有效！', tag: '班级建设' },
    { id: 'ztd1-8', type: 'judge', q: '规则是给别人的，我可以不用遵守。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'Rules are for everyone! 规则面前人人平等，我也不例外。', tag: '规则意识' },
    { id: 'ztd1-9', type: 'choice', q: '看到有人违反班级规则，你应该：', options: ['小声提醒他遵守', '大声嘲笑他', '跟着一起违反', '告诉全班孤立他'], answer: 0, explain: '善意提醒 Please follow the rules.，帮助同学一起进步。', tag: '规则意识' },
    { id: 'ztd1-10', type: 'choice', q: '"keep the classroom clean" 的意思是：', options: ['保持教室干净', '把教室弄脏', '打扫家里', '关上教室的门'], answer: 0, explain: 'keep... + 形容词 让……保持……，keep it clean 保持干净。', tag: '动词短语' },
  ],
  ztd2: [
    { id: 'ztd2-1', type: 'choice', q: '"Family rules" 的意思是：', options: ['家庭规则', '家庭照片', '家庭作业', '家庭聚会'], answer: 0, explain: 'family rules 家规，好家规让家更温暖！', tag: '短语理解' },
    { id: 'ztd2-2', type: 'choice', q: '下面哪条是合理的家规？', options: ['先完成作业再玩', '整天玩游戏', '想几点睡就几点睡', '不吃早饭'], answer: 0, explain: 'Finish homework first. 先作业后玩耍，好家规帮我们养成好习惯。', tag: '家规' },
    { id: 'ztd2-3', type: 'choice', q: '吃完饭帮忙洗碗，是在：', options: ['帮家里做家务', '浪费水', '捣乱', '表现给别人看'], answer: 0, explain: 'do the dishes 洗碗，帮家里做家务 do housework，人人有份！', tag: '劳动习惯' },
    { id: 'ztd2-4', type: 'choice', q: '"sweep the floor" 的意思是：', options: ['扫地', '拖地', '擦窗户', '倒垃圾'], answer: 0, explain: 'sweep 扫，sweep the floor 扫地；mop the floor 才是拖地。', tag: '动词短语' },
    { id: 'ztd2-5', type: 'judge', q: '看电视的时间要和爸爸妈妈约定好。', options: ['√ 对', '✗ 错'], answer: 0, explain: '约定 screen time 屏幕时间，说到做到，眼睛也开心。', tag: '家规' },
    { id: 'ztd2-6', type: 'choice', q: '弟弟妹妹哭闹时，你可以：', options: ['耐心哄一哄、陪他玩', '冲他大喊大叫', '抢他的玩具', '跑去告状'], answer: 0, explain: '照顾家人是家规里最暖的一条：Be kind to your family。', tag: '品德养成' },
    { id: 'ztd2-7', type: 'choice', q: '晚上九点还在玩手机，违反了哪类约定？', options: ['作息时间约定', '班级规则', '交通规则', '游戏规则'], answer: 0, explain: '按时睡觉 go to bed on time，作息约定保护着你的身高和记忆力！', tag: '家规' },
    { id: 'ztd2-8', type: 'judge', q: '家里的事都是爸爸妈妈的，和我无关。', options: ['√ 对', '✗ 错'], answer: 1, explain: '家是大家的家！家务一起做，Family rules 人人有份。', tag: '责任养成' },
    { id: 'ztd2-9', type: 'choice', q: '不同意某条家规时，最好的做法是：', options: ['心平气和和家人商量', '大喊大叫', '闷不吭声生闷气', '故意捣乱'], answer: 0, explain: 'Can we talk about it? 我们能聊聊吗？好好商量，规则更合理。', tag: '沟通表达' },
    { id: 'ztd2-10', type: 'choice', q: '"make the bed" 的意思是：', options: ['整理床铺', '买一张床', '睡懒觉', '打扫厨房'], answer: 0, explain: 'make the bed 整理床铺，起床后把被子叠好，整洁一天好心情！', tag: '动词短语' },
  ],
  ztd3: [
    { id: 'ztd3-1', type: 'choice', q: '"Time for school" 的意思是：', options: ['上学时间到了', '放学时间到了', '吃饭时间到了', '睡觉时间到了'], answer: 0, explain: 'Time for school! 上学时间到！背起书包出门啦。', tag: '短语理解' },
    { id: 'ztd3-2', type: 'choice', q: '早上七点半的英语表达是：', options: ['half past seven', 'seven and half past', 'half to seven', 'seven halves'], answer: 0, explain: 'half past + 整点 = ……点半，half past seven 七点半。', tag: '时间表达' },
    { id: 'ztd3-3', type: 'choice', q: '"What time is it?" 的意思是：', options: ['现在几点了？', '今天星期几？', '你在哪里？', '时间过得快吗？'], answer: 0, explain: 'What time is it? 几点了？回答：It\'s eight o\'clock。', tag: '句型' },
    { id: 'ztd3-4', type: 'choice', q: '为了上学不迟到，你应该：', options: ['早睡早起，按点出门', '睡觉前玩游戏', '闹钟响了再睡十分钟', '不吃早饭慢慢走'], answer: 0, explain: '早睡早起 be on time，作息规律的孩子上学从不迟到！', tag: '作息习惯' },
    { id: 'ztd3-5', type: 'judge', q: '"It\'s time for class." 的意思是"到上课时间了"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'It\'s time for + 名词，到……的时间了：time for class 上课时间。', tag: '句型' },
    { id: 'ztd3-6', type: 'choice', q: '学校课程表里第一节课八点开始，你应该几点前到教室？', options: ['7:55 之前', '8:30 之前', '9:00 之前', '随意'], answer: 0, explain: '提前 5 分钟到教室，摆好书本，从容开始第一节课！', tag: '时间管理' },
    { id: 'ztd3-7', type: 'choice', q: '"起床"的英语是：', options: ['get up', 'get on', 'get off', 'give up'], answer: 0, explain: 'get up 起床，get on 上车，短语要分清楚哦。', tag: '动词短语' },
    { id: 'ztd3-8', type: 'judge', q: '放学到家先写作业，再看动画片。', options: ['√ 对', '✗ 错'], answer: 0, explain: '先做重要的事，Finish homework first! 时间安排更从容。', tag: '时间管理' },
    { id: 'ztd3-9', type: 'choice', q: '上课时间到了，正确的表达是：', options: ['It\'s time for class.', 'It\'s time to class.', 'It\'s time at class.', 'It\'s class time for.'], answer: 0, explain: 'It\'s time for + 名词 是固定搭配，别混成 to 哦（to 后要接动词）。', tag: '句型' },
    { id: 'ztd3-10', type: 'choice', q: '晚上九点上床睡觉，用英语说：', options: ['Go to bed at nine.', 'Go to school at nine.', 'Get up at nine.', 'Have dinner at nine.'], answer: 0, explain: 'go to bed 上床睡觉，小学生要睡够 10 小时，长高高！', tag: '作息习惯' },
  ],
  ztd4: [
    { id: 'ztd4-1', type: 'choice', q: '"Going shopping" 的意思是：', options: ['去购物', '去散步', '去游泳', '去旅行'], answer: 0, explain: 'go shopping 去购物，双写 p 加 -ing：shopping。', tag: '短语理解' },
    { id: 'ztd4-2', type: 'choice', q: '问价格"多少钱"，说：', options: ['How much is it?', 'How many is it?', 'How old is it?', 'How big is it?'], answer: 0, explain: 'How much is it? 多少钱？回答：It\'s ten yuan。', tag: '购物句型' },
    { id: 'ztd4-3', type: 'choice', q: '"十元"的英语是：', options: ['ten yuan', 'ten yuans', 'ten dollars', 'ten pounds'], answer: 0, explain: 'yuan 是人民币单位，单复数同形：ten yuan 十元。', tag: '购物词汇' },
    { id: 'ztd4-4', type: 'choice', q: '售货员问 "Can I help you?"，你回答：', options: ['I want a pen, please.', 'Yes, you are.', 'Thank you, goodbye.', 'You\'re welcome.'], answer: 0, explain: 'I want..., please. 我想要……，回答购物邀请最常用。', tag: '购物句型' },
    { id: 'ztd4-5', type: 'judge', q: '购物时要看好价格和质量，不乱花钱。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Look at the price! 看价签、比质量，做聪明的小顾客。', tag: '消费习惯' },
    { id: 'ztd4-6', type: 'choice', q: '同样的笔记本，A 店 5 元，B 店 4 元，聪明的选择是：', options: ['买 B 店的', '买 A 店的', '两店各买一本', '都不买了'], answer: 0, explain: '货比三家 shop around，同样的东西选更实惠的！', tag: '消费习惯' },
    { id: 'ztd4-7', type: 'choice', q: '试穿一双鞋，对售货员说：', options: ['Can I try them on?', 'Can I try on them?', 'Can I try it them?', 'Try on can I?'], answer: 0, explain: 'try on 试穿，代词放中间：try them on。', tag: '购物句型' },
    { id: 'ztd4-8', type: 'judge', q: '找零钱时要当面数一数，核对清楚。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Check the change. 核对找零，清清楚楚不糊涂。', tag: '消费习惯' },
    { id: 'ztd4-9', type: 'choice', q: '"cheap" 的意思是：', options: ['便宜的', '昂贵的', '漂亮的', '结实的'], answer: 0, explain: 'cheap 便宜的，expensive 昂贵的，一对反义词。', tag: '形容词' },
    { id: 'ztd4-10', type: 'choice', q: '零花钱用法最棒的是：', options: ['一部分存起来，一部分买需要的', '全部买糖果', '全部借给别人', '随便乱花'], answer: 0, explain: '会计划花钱 save and spend wisely，零花钱越理越有！', tag: '理财启蒙' },
  ],
  ztd5: [
    { id: 'ztd5-1', type: 'choice', q: '"Farms and US" 的意思是：', options: ['农场与我们', '农场和动物', '美国农场', '农场游戏'], answer: 0, explain: 'US 指我们（us 大写强调），农场与我们的生活息息相关！', tag: '短语理解' },
    { id: 'ztd5-2', type: 'choice', q: '面包的原料"小麦"来自：', options: ['farm 农场', 'factory 工厂', 'supermarket 超市', 'kitchen 厨房'], answer: 0, explain: '小麦 wheat 长在农场里，磨成面粉才能烤面包。', tag: '食物来源' },
    { id: 'ztd5-3', type: 'choice', q: '牛奶是从哪里来的？', options: ['奶牛 dairy cows', '肉牛 beef cattle', '绵羊 sheep', '山羊 goats'], answer: 0, explain: 'dairy cow 奶牛产奶，每天挤奶、消毒，才送到我们餐桌。', tag: '食物来源' },
    { id: 'ztd5-4', type: 'choice', q: '蔬菜水果生长需要：', options: ['阳光、水和土壤', '只有水', '只有塑料袋', '冰箱'], answer: 0, explain: 'sunlight 阳光、water 水、soil 土壤，庄稼生长三要素。', tag: '自然常识' },
    { id: 'ztd5-5', type: 'judge', q: '农民伯伯种粮食很辛苦，我们要爱惜食物。', options: ['√ 对', '✗ 错'], answer: 0, explain: '粒粒皆辛苦！Don\'t waste food. 不浪费粮食，光盘行动我先行！', tag: '品德养成' },
    { id: 'ztd5-6', type: 'choice', q: '"rice" 长在哪里？', options: ['水田 paddy fields', '山上雪地里', '海水里', '沙漠里'], answer: 0, explain: '水稻长在水田里，南方小朋友见过金色的稻田吧！', tag: '自然常识' },
    { id: 'ztd5-7', type: 'choice', q: '把水果从农场运到城市，靠的是：', options: ['卡车和货车运输', '小朋友背过去', '小鸟叼过来', '风刮过来'], answer: 0, explain: 'truck 卡车运输，冷链保鲜，新鲜果蔬才能进城！', tag: '生活常识' },
    { id: 'ztd5-8', type: 'judge', q: '超市里的蔬菜都是工厂里生产出来的。', options: ['√ 对', '✗ 错'], answer: 1, explain: '蔬菜水果来自 farm 农田农场，先收获再运到超市哦。', tag: '食物来源' },
    { id: 'ztd5-9', type: 'choice', q: '秋天农民伯伯在田里忙的是：', options: ['harvest 收获庄稼', '给庄稼盖雪被', '游泳', '堆雪人'], answer: 0, explain: 'harvest 收获，秋天稻谷金黄，是收获的季节！', tag: '自然常识' },
    { id: 'ztd5-10', type: 'choice', q: '感谢农民的劳动，可以说：', options: ['Thank you, farmers!', 'You\'re wrong!', 'Go away!', 'It\'s useless.'], answer: 0, explain: 'Thank you, farmers! 谢谢农民伯伯，劳动最光荣！', tag: '品德养成' },
  ],
  ztd6: [
    { id: 'ztd6-1', type: 'choice', q: '"On the farm" 的意思是：', options: ['在农场里', '在工厂里', '在公园里', '在家里'], answer: 0, explain: 'on the farm 在农场（用介词 on），在工厂用 in a factory。', tag: '短语理解' },
    { id: 'ztd6-2', type: 'choice', q: '哞哞叫的"奶牛"是：', options: ['cow', 'sheep', 'horse', 'hen'], answer: 0, explain: 'cow 奶牛， Moo! 哞哞叫，give us milk 给我们牛奶。', tag: '动物词汇' },
    { id: 'ztd6-3', type: 'choice', q: '毛茸茸、会产羊毛的"绵羊"是：', options: ['sheep', 'goat', 'cow', 'duck'], answer: 0, explain: 'sheep 绵羊，羊毛 wool 做成毛衣，单复数都是 sheep。', tag: '动物词汇' },
    { id: 'ztd6-4', type: 'choice', q: '会下蛋的"母鸡"是：', options: ['hen', 'rooster', 'duck', 'goose'], answer: 0, explain: 'hen 母鸡下蛋，rooster 公鸡打鸣，分工不同！', tag: '动物词汇' },
    { id: 'ztd6-5', type: 'judge', q: '"horse" 的意思是"马"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'horse 马，run fast 跑得快，农场里的大功臣。', tag: '动物词汇' },
    { id: 'ztd6-6', type: 'choice', q: '在农场喂小兔子，可以喂：', options: ['胡萝卜和青菜', '巧克力', '辣条', '口香糖'], answer: 0, explain: 'Rabbits love carrots! 兔子爱吃胡萝卜，不能乱喂零食哦。', tag: '动物常识' },
    { id: 'ztd6-7', type: 'choice', q: '农场里小鸭子们"游泳"的地方是：', options: ['pond 池塘', 'tree 树上', 'barn 谷仓里', 'roof 屋顶'], answer: 0, explain: 'pond 池塘，Ducks swim in the pond. 鸭子池塘游得欢。', tag: '动物常识' },
    { id: 'ztd6-8', type: 'judge', q: '在农场看到"请勿跨越栅栏"的牌子，就应该待在步道上。', options: ['√ 对', '✗ 错'], answer: 0, explain: '栅栏里是动物的家，遵守提示 Don\'t cross the fence. 安全又文明。', tag: '规则意识' },
    { id: 'ztd6-9', type: 'choice', q: '数一数农场里有几只羊，用英语问：', options: ['How many sheep are there?', 'How much sheep is it?', 'Where is the sheep going?', 'What colour is sheep?'], answer: 0, explain: 'How many... are there? 有多少……？问数量用 How many。', tag: '句型' },
    { id: 'ztd6-10', type: 'choice', q: '农场一日游结束后，感受最深的是：', options: ['劳动光荣，食物来之不易', '动物很脏不能碰', '农场就是游乐场', '什么都和自己无关'], answer: 0, explain: '尊重劳动、亲近自然，On the farm 学到的可不止英语！', tag: '品德养成' },
  ],
  ztdr: [
    { id: 'ztdr-1', type: 'choice', q: '"A great weekend plan" 的意思是：', options: ['一个很棒的周末计划', '一周的课程表', '一次家庭旅行', '一份期末试卷'], answer: 0, explain: 'weekend 周末，plan 计划，做好计划玩学两不误！', tag: '短语理解' },
    { id: 'ztdr-2', type: 'choice', q: '周六上午上兴趣班，英语是：', options: ['have a class on Saturday morning', 'sleep all day', 'go to bed early', 'watch TV all night'], answer: 0, explain: 'on Saturday morning 在周六上午，具体到上午用 on。', tag: '时间表达' },
    { id: 'ztdr-3', type: 'choice', q: '计划表里"先学习后玩耍"用英语说：', options: ['Homework first, then play.', 'Play first, then homework.', 'Only play, no homework.', 'No play, no homework.'], answer: 0, explain: 'first 先、then 然后，先……后……的顺序用 first..., then... 连接。', tag: '句型' },
    { id: 'ztdr-4', type: 'choice', q: '和家人去农场玩，你会带上：', options: ['水壶、帽子和防晒霜', '一台电视机', '一口大锅', '十本厚小说'], answer: 0, explain: '户外活动 water bottle 和 cap 必备，安全舒适最重要！', tag: '生活常识' },
    { id: 'ztdr-5', type: 'judge', q: '周末可以晚一点起床，但作息不能太乱。', options: ['√ 对', '✗ 错'], answer: 0, explain: '周末适度放松，作息规律别全乱，周一才不痛苦！', tag: '作息习惯' },
    { id: 'ztdr-6', type: 'choice', q: '在商店买纪念品 15 元，付 20 元应找回：', options: ['5 元 five yuan', '15 元 fifteen yuan', '10 元 ten yuan', '50 元 fifty yuan'], answer: 0, explain: '20-15=5，找回 5 元，记得 Check the change（核对找零）！', tag: '数字运用' },
    { id: 'ztdr-7', type: 'choice', q: '下面哪件事最适合写进周末计划？', options: ['去图书馆看书', '通宵打游戏', '睡到中午不吃饭', '看一整天电视'], answer: 0, explain: 'read books at the library 又充实又放松，好计划成就好周末！', tag: '时间管理' },
    { id: 'ztdr-8', type: 'choice', q: '"have a picnic" 的意思是：', options: ['去野餐', '做晚饭', '去露营过夜', '看比赛'], answer: 0, explain: 'picnic 野餐，have a picnic 去野餐，spring outing 好活动！', tag: '动词短语' },
    { id: 'ztdr-9', type: 'judge', q: '周末帮家里做一件家务，也是好计划的一部分。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'do housework 做家务，计划里留一份给家人，温暖又充实！', tag: '劳动习惯' },
    { id: 'ztdr-10', type: 'choice', q: '执行周末计划时发现安排太满，应该：', options: ['适当调整，留出休息时间', '硬撑着全部完成', '全部取消不干了', '再也不做计划'], answer: 0, explain: '计划是帮助我们的工具，学会调整 make changes 才是真本领！', tag: '时间管理' },
  ],
}
