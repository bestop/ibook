// 沪教版（五四学制）英语 六年级下册（预备年级·2025 春新版）随堂知识点题库
// 教材：义务教育教科书（五·四学制）英语 六年级下册 · 上海教育出版社（2025 春使用版，与六年级上册新教材同系列）
// 目录（电子课本网 全书目录核对）：
//   Unit 1 Everyone is different（A Noticing differences / B Finding differences / C Accepting differences / D Showing differences / E Future me）
//   Unit 2 Rules around us（A Signs and rules / B Rules in different places / C A rule story / D A notice / E A flyer of signs and rules）
//   Unit 3 Festivals across cultures（A Festival foods / B Festival activities / C Festival celebrations / D Festival experiences / E A festival poster）
//   Unit 4 Weather and our lives（A Weather reports / B Seasonal activities / C Extreme weather / D Weather and travel / E Weather in life）
//   Unit 5 Green neighbourhood（A A green song / B Green ideas / C A green city / D "One-step Greener" / E An ideal green neighbourhood）
//   Unit 6 Famous people in history（A World changers / B Life savers / C Great storytellers / D Great minds / E Stamps of famous people）
//   Culture corner / Literature corner
// 每单元一关 + 文化文学角复习关，每关 10 题，共 7 关 70 题，题目 id 前缀 ztl

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
    id: 'ztl1',
    name: 'Unit 1',
    title: 'Everyone is different',
    emoji: '🧑‍🤝‍🧑',
    color: 'orange',
    lessons: ['Noticing differences', 'Accepting differences', 'Future me'],
    intro: '每个人都不一样：高矮、性格、梦想……接纳差异，欣赏自己！',
  },
  {
    id: 'ztl2',
    name: 'Unit 2',
    title: 'Rules around us',
    emoji: '📢',
    color: 'teal',
    lessons: ['Signs and rules', 'Rules in different places', 'A rule story'],
    intro: '身边的标志与规则：must 和 mustn\'t，文明生活有边界！',
  },
  {
    id: 'ztl3',
    name: 'Unit 3',
    title: 'Festivals across cultures',
    emoji: '🏮',
    color: 'red',
    lessons: ['Festival foods', 'Festival celebrations', 'A festival poster'],
    intro: '中外节日文化之旅：饺子、火鸡、彩蛋，各有各的精彩！',
  },
  {
    id: 'ztl4',
    name: 'Unit 4',
    title: 'Weather and our lives',
    emoji: '🌦️',
    color: 'sky',
    lessons: ['Weather reports', 'Extreme weather', 'Weather and travel'],
    intro: '天气影响生活：看懂预报、应对极端天气、聪明出行！',
  },
  {
    id: 'ztl5',
    name: 'Unit 5',
    title: 'Green neighbourhood',
    emoji: '🌳',
    color: 'emerald',
    lessons: ['Green ideas', 'A green city', 'One-step Greener'],
    intro: '绿色社区靠大家：垃圾分类、节约资源，做环保小先锋！',
  },
  {
    id: 'ztl6',
    name: 'Unit 6',
    title: 'Famous people in history',
    emoji: '🌟',
    color: 'violet',
    lessons: ['World changers', 'Life savers', 'Great minds'],
    intro: '历史名人故事多：世界改变者、生命守护者、伟大思想者！',
  },
  {
    id: 'ztlr',
    name: 'Culture & Literature',
    title: '文化文学角·复习站',
    emoji: '🎓',
    color: 'cyan',
    lessons: ['Culture corner', 'Literature corner', 'Review of the book'],
    intro: '文化角与文学角串起全册知识，预备年级毕业大挑战！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ztl1: [
    { id: 'ztl1-1', type: 'choice', q: '"Everyone is different" 的意思是：', options: ['每个人都不一样', '每个人都很高', '大家都一样', '大家都不对'], answer: 0, explain: 'different 不同的，接纳彼此的不同，世界才多彩。', tag: '短语理解' },
    { id: 'ztl1-2', type: 'choice', q: '形容人"外向的、爱交朋友的"是：', options: ['outgoing', 'shy', 'quiet', 'lazy'], answer: 0, explain: 'outgoing 外向的，shy 害羞的，性格无好坏，做自己最好。', tag: '性格词汇' },
    { id: 'ztl1-3', type: 'choice', q: '"She is hard-working." 的意思是：', options: ['她很勤奋。', '她很懒散。', '她很内向。', '她很高。'], answer: 0, explain: 'hard-working 勤奋的，夸人勤劳的常用语。', tag: '性格词汇' },
    { id: 'ztl1-4', type: 'choice', q: '"I\'m good at maths, but weak in English." 的意思是：', options: ['我擅长数学，但英语较弱。', '我数学英语都很好。', '我不喜欢数学。', '我英语比数学好。'], answer: 0, explain: 'be good at 擅长，weak in 薄弱，客观认识自己。', tag: '句型' },
    { id: 'ztl1-5', type: 'judge', q: '同学之间性格不同，要互相尊重、互相学习。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Accept differences. 接纳差异，取长补短。', tag: '品德' },
    { id: 'ztl1-6', type: 'choice', q: '"Future me" 的意思是：', options: ['未来的我', '现在的我', '过去的我', '理想的朋友'], answer: 0, explain: 'future 未来，畅想未来的自己，写下心愿。', tag: '短语理解' },
    { id: 'ztl1-7', type: 'choice', q: '"I want to be a doctor in the future." 的意思是：', options: ['我将来想当医生。', '我现在是医生。', '我讨厌医生。', '我过去是医生。'], answer: 0, explain: 'want to be 想成为，in the future 在将来。', tag: '句型' },
    { id: 'ztl1-8', type: 'choice', q: '形容人"勇敢的"是：', options: ['brave', 'afraid', 'careless', 'tall'], answer: 0, explain: 'brave 勇敢，afraid 害怕，careless 粗心。', tag: '性格词汇' },
    { id: 'ztl1-9', type: 'judge', q: '发现自己某方面较弱，可以通过努力慢慢提高。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Everyone is different. 差异不是终点，努力才能进步。', tag: '成长规划' },
    { id: 'ztl1-10', type: 'choice', q: '介绍朋友"他乐于助人"：', options: ['He is helpful.', 'He is harmful.', 'He is hopeless.', 'He is hungry.'], answer: 0, explain: 'helpful 乐于助人的，help 帮忙 + ful。', tag: '性格词汇' },
  ],
  ztl2: [
    { id: 'ztl2-1', type: 'choice', q: '"Rules around us" 的意思是：', options: ['我们身边的规则', '我们的作业', '我们的游戏', '我们的假期'], answer: 0, explain: 'rule 规则，生活中处处有规则，遵守规则更文明。', tag: '短语理解' },
    { id: 'ztl2-2', type: 'choice', q: '"You must wear a helmet." 的意思是：', options: ['你必须戴头盔。', '你可以不戴头盔。', '你不必戴头盔。', '你千万别戴头盔。'], answer: 0, explain: 'must 必须，表示必要的规定。', tag: '语法' },
    { id: 'ztl2-3', type: 'choice', q: '"You mustn\'t run in the hallway." 的意思是：', options: ['禁止在走廊奔跑。', '必须在走廊跑步。', '走廊里可以跑。', '走廊很宽。'], answer: 0, explain: "mustn't 禁止，比 don't 更严厉。", tag: '语法' },
    { id: 'ztl2-4', type: 'choice', q: '图书馆里的规则应该是：', options: ['Keep quiet. 保持安静', 'Shout loudly 大声喊叫', 'Run fast 快跑', 'Eat snacks 吃零食'], answer: 0, explain: '不同场所有不同规则，Rules in different places.', tag: '常识' },
    { id: 'ztl2-5', type: 'judge', q: '交通规则只是给司机看的，行人不用遵守。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！Rules keep us safe. 规则守护每个人的安全，行人和司机都要自觉遵守。', tag: '安全常识' },
    { id: 'ztl2-6', type: 'choice', q: 'A notice 的意思是：', options: ['通知', '小说', '日记', '海报主角'], answer: 0, explain: 'notice 通知，写通知要写清时间地点事项。', tag: '应用文' },
    { id: 'ztl2-7', type: 'choice', q: '看到 "No entry!" 的标志，意思是：', options: ['禁止入内', '欢迎光临', '出口在此', '小心地滑'], answer: 0, explain: 'entry 进入，No entry 禁止入内，绕道而行。', tag: '标识理解' },
    { id: 'ztl2-8', type: 'choice', q: '为活动写宣传单 flyer，要写清楚：', options: ['时间、地点、活动内容', '天气', '菜单', '课程表'], answer: 0, explain: 'flyer 要素齐全：When? Where? What?', tag: '应用文' },
    { id: 'ztl2-9', type: 'judge', q: '规则有时会带来小限制，但让集体更有序。', options: ['√ 对', '✗ 错'], answer: 0, explain: '没有规矩不成方圆，规则是大家的保护伞。', tag: '品德' },
    { id: 'ztl2-10', type: 'choice', q: '同学违反了班规，你应该：', options: ['善意提醒他遵守规则', '跟着一起违反', '嘲笑他', '假装没看见'], answer: 0, explain: '善意提醒是帮助，共同维护班级规则。', tag: '品德' },
  ],
  ztl3: [
    { id: 'ztl3-1', type: 'choice', q: '"Festivals across cultures" 的意思是：', options: ['跨文化的节日', '学校的节日', '生日的习俗', '季节的变化'], answer: 0, explain: 'culture 文化，across cultures 跨文化，比较中外节日。', tag: '短语理解' },
    { id: 'ztl3-2', type: 'choice', q: '中秋节的传统食物是：', options: ['mooncakes 月饼', 'turkey 火鸡', 'Easter eggs 彩蛋', 'dumplings 饺子'], answer: 0, explain: '中秋节 mooncakes，月圆人团圆。', tag: '文化常识' },
    { id: 'ztl3-3', type: 'choice', q: '感恩节的主菜通常是：', options: ['turkey 火鸡', 'mooncakes 月饼', 'rice dumplings 粽子', 'noodles 长寿面'], answer: 0, explain: 'Thanksgiving 火鸡大餐，家人围坐感恩分享。', tag: '文化常识' },
    { id: 'ztl3-4', type: 'choice', q: '春节的传统活动是：', options: ['贴春联、拜年、发红包', '捉迷藏讨糖果', '找彩蛋', '赏月'], answer: 0, explain: 'Spring Festival customs 春节习俗，年味浓浓。', tag: '文化常识' },
    { id: 'ztl3-5', type: 'judge', q: '不同国家的节日习俗不同，要尊重彼此的文化。', options: ['√ 对', '✗ 错'], answer: 0, explain: '尊重文化多样性，做开放包容的小公民。', tag: '品德' },
    { id: 'ztl3-6', type: 'choice', q: '"A festival poster" 的意思是：', options: ['一张节日海报', '一张车票', '一份作业', '一个礼物'], answer: 0, explain: 'poster 海报，做节日海报要主题鲜明、图文并茂。', tag: '应用文' },
    { id: 'ztl3-7', type: 'choice', q: '端午节 people usually：', options: ['watch dragon boat races 看龙舟赛', 'decorate a Christmas tree', 'hunt Easter eggs', 'play trick or treat'], answer: 0, explain: 'Dragon Boat Festival 端午节，赛龙舟吃粽子。', tag: '文化常识' },
    { id: 'ztl3-8', type: 'choice', q: '"How did you celebrate the Spring Festival?" 的意思是：', options: ['你们怎么庆祝春节的？', '春节是什么时候？', '你讨厌春节吗？', '春节吃什么？'], answer: 0, explain: 'celebrate 庆祝，did 过去式问经历。', tag: '句型' },
    { id: 'ztl3-9', type: 'judge', q: '西方圣诞节 Christmas 在 12 月 25 日。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'December 25th 是圣诞节，Merry Christmas! 人人互道祝福。', tag: '文化常识' },
    { id: 'ztl3-10', type: 'choice', q: '向外国朋友介绍春节，最合适的一句是：', options: ['It is the most important festival in China.', 'It is a small holiday.', 'Nobody likes it.', 'It is the same as Halloween.'], answer: 0, explain: '春节是中国最重要的节日，介绍要点抓重点。', tag: '表达' },
  ],
  ztl4: [
    { id: 'ztl4-1', type: 'choice', q: '"Weather and our lives" 的意思是：', options: ['天气与我们的生活', '四季与学习', '旅行与美食', '雨与彩虹'], answer: 0, explain: '天气影响穿衣、出行、活动，息息相关。', tag: '短语理解' },
    { id: 'ztl4-2', type: 'choice', q: 'weather report 里 "Tomorrow will be cloudy with a high of 20 degrees." 的意思是：', options: ['明天多云，最高 20 度。', '明天晴，最低 20 度。', '今天下雨 20 毫米。', '明天有台风。'], answer: 0, explain: 'high 最高温度，cloudy 多云。', tag: '听力理解' },
    { id: 'ztl4-3', type: 'choice', q: '"extreme weather" 的意思是：', options: ['极端天气', '普通天气', '好天气', '天气预报'], answer: 0, explain: 'extreme 极端的，台风、暴雨、高温都是 extreme weather。', tag: '词汇' },
    { id: 'ztl4-4', type: 'choice', q: '暴雨预警发布时，你应该：', options: ['留在安全的室内', '去河边看水', '在树下躲雨', '骑车冲浪'], answer: 0, explain: '极端天气避免外出，远离低洼地带。', tag: '安全常识' },
    { id: 'ztl4-5', type: 'judge', q: '出行前查看天气预报，能帮助安排行程。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Weather and travel. 天气与出行，提前查看不慌张。', tag: '生活常识' },
    { id: 'ztl4-6', type: 'choice', q: '"It\'s going to snow. Don\'t forget your coat." 的意思是：', options: ['要下雪了，别忘了穿外套。', '下雪了，把外套扔了。', '天晴了，穿短袖吧。', '下雪很好玩。'], answer: 0, explain: 'be going to 将要，提醒穿衣的常用句。', tag: '句型' },
    { id: 'ztl4-7', type: 'choice', q: '夏天的季节性活动是：', options: ['swimming 游泳', 'skiing 滑雪', 'flying kites in cold wind', 'making snowmen'], answer: 0, explain: 'Seasonal activities 季节活动，夏天游泳最清凉。', tag: '常识' },
    { id: 'ztl4-8', type: 'choice', q: '"typhoon" 的意思是：', options: ['台风', '地震', '彩虹', '雷电'], answer: 0, explain: 'typhoon 台风，沿海地区夏秋常见。', tag: '词汇' },
    { id: 'ztl4-9', type: 'judge', q: '高温天在太阳下长时间暴晒也没关系，不用多喝水。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！heatwave 高温天容易中暑，防暑三件套：多喝水、躲阴凉、多休息。', tag: '健康常识' },
    { id: 'ztl4-10', type: 'choice', q: '周末想去野餐，你先：', options: ['check the weather forecast 查天气预报', '直接出发', '叫上同学再说', '什么都不看'], answer: 0, explain: '先查天气再计划，野餐心情更美丽。', tag: '情景' },
  ],
  ztl5: [
    { id: 'ztl5-1', type: 'choice', q: '"Green neighbourhood" 的意思是：', options: ['绿色社区', '绿色衣服', '大草坪', '菜市场'], answer: 0, explain: 'green 绿色环保，neighbourhood 社区，绿色生活大家建。', tag: '短语理解' },
    { id: 'ztl5-2', type: 'choice', q: '"protect the environment" 的意思是：', options: ['保护环境', '破坏环境', '打扫房间', '买新衣服'], answer: 0, explain: 'protect 保护，environment 环境。', tag: '短语' },
    { id: 'ztl5-3', type: 'choice', q: '垃圾的正确处理方式是：', options: ['sort the garbage 垃圾分类', '随手乱扔', '扔进河道', '烧掉'], answer: 0, explain: '垃圾分类回收，资源再利用，地球少负担。', tag: '常识' },
    { id: 'ztl5-4', type: 'choice', q: '"One-step Greener" 的意思是：', options: ['更环保一步', '一步登天', '绿色发展公司', '绿颜色'], answer: 0, explain: '再环保一点：随手关灯、自带水杯，点滴行动。', tag: '短语理解' },
    { id: 'ztl5-5', type: 'judge', q: '出行多乘公交、地铁或骑单车，绿色又低碳。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'low-carbon travel 低碳出行，减少尾气排放。', tag: '常识' },
    { id: 'ztl5-6', type: 'choice', q: 'recycle 的意思是：', options: ['回收利用', '随意丢弃', '焚毁', '掩埋'], answer: 0, explain: 're- 再次 + cycle 循环，废纸、瓶子可回收。', tag: '词汇' },
    { id: 'ztl5-7', type: 'choice', q: '"We should save water." 的意思是：', options: ['我们应该节约用水。', '我们应该多用水。', '我们应该喝水。', '水很贵。'], answer: 0, explain: 'save water 节约用水，随手关紧水龙头。', tag: '句型' },
    { id: 'ztl5-8', type: 'choice', q: '让社区更绿色，你可以：', options: ['参加植树活动', '踩踏草坪', '摇小树苗', '摘花'], answer: 0, explain: 'plant trees 植树，绿化社区人人参与。', tag: '常识' },
    { id: 'ztl5-9', type: 'judge', q: '塑料袋用多少都不会污染环境，可以随便丢弃。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！白色污染就是指塑料垃圾，塑料袋难降解，少用一次性塑料袋、自带环保袋更 green。', tag: '常识' },
    { id: 'ztl5-10', type: 'choice', q: '设计 ideal green neighbourhood（理想绿色社区），少不了：', options: ['绿植、垃圾分类站、自行车道', '更多的垃圾堆', '更多的尾气', '更拥挤的道路'], answer: 0, explain: '绿意、整洁、低碳出行，理想社区三要素。', tag: '表达' },
  ],
  ztl6: [
    { id: 'ztl6-1', type: 'choice', q: '"Famous people in history" 的意思是：', options: ['历史上的名人', '我的好朋友', '明星演唱会', '运动员'], answer: 0, explain: 'famous 著名的，历史上的名人至今仍熠熠生辉。', tag: '短语理解' },
    { id: 'ztl6-2', type: 'choice', q: '"world changers" 的意思是：', options: ['改变世界的人', '环游世界的人', '世界冠军', '翻译家'], answer: 0, explain: 'changer 改变者，伟人们用行动改变世界。', tag: '词汇' },
    { id: 'ztl6-3', type: 'choice', q: '杂交水稻之父袁隆平的英文名是：', options: ['Yuan Longping', 'Tu Youyou', 'Confucius', 'Zheng He'], answer: 0, explain: 'Yuan Longping 让千万人远离饥饿，被誉为"杂交水稻之父"。', tag: '文化常识' },
    { id: 'ztl6-4', type: 'choice', q: '发现青蒿素、获诺贝尔奖的屠呦呦是：', options: ['Tu Youyou', 'Yuan Longping', 'Li Bai', 'Lu Xun'], answer: 0, explain: 'Tu Youyou 发现 artemisinin 青蒿素，拯救数百万疟疾患者。', tag: '文化常识' },
    { id: 'ztl6-5', type: 'choice', q: '"life savers" 在本单元指：', options: ['拯救生命的人', '救生圈', '糖果名', '消防员制服'], answer: 0, explain: 'save lives 拯救生命，医生、护士、科学家都是 life savers。', tag: '词汇' },
    { id: 'ztl6-6', type: 'choice', q: '古代伟大的教育家、思想家孔子是：', options: ['Confucius', 'Mozi', 'Sunzi', 'Laozi'], answer: 0, explain: 'Confucius 孔子，温故而知新的智慧流传至今。', tag: '文化常识' },
    { id: 'ztl6-7', type: 'choice', q: '"Great storytellers" 的意思是：', options: ['伟大的故事讲述者', '伟大的厨师', '伟大的司机', '伟大的法官'], answer: 0, explain: 'storyteller 讲故事的人，把智慧和梦想讲给世界听。', tag: '词汇' },
    { id: 'ztl6-8', type: 'choice', q: '"He never gave up." 的意思是：', options: ['他从不放弃。', '他放弃了。', '他给了东西。', '他向上爬。'], answer: 0, explain: 'give up 放弃，never 从不，伟大源于坚持。', tag: '句型' },
    { id: 'ztl6-9', type: 'judge', q: '名人邮票 stamps 上常有他们的头像和成就。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Stamps of famous people：小小邮票致敬伟人。', tag: '常识' },
    { id: 'ztl6-10', type: 'choice', q: '向同学介绍一位伟人，应包括：', options: ['他的贡献和精神', '他今天吃了什么', '他的手机号', '他家有几扇窗'], answer: 0, explain: '介绍人物抓重点：成就、精神与影响。', tag: '表达' },
  ],
  ztlr: [
    { id: 'ztlr-1', type: 'choice', q: '本册 Unit 1 告诉我们：', options: ['Everyone is different，接纳差异', 'Everyone is the same', '差异是坏事', '不要交朋友'], answer: 0, explain: '接纳差异、欣赏自己，是成长第一课。', tag: '主题复习' },
    { id: 'ztlr-2', type: 'choice', q: '"You mustn\'t swim here." 的意思是：', options: ['禁止在此游泳。', '你必须游泳。', '你可以游泳。', '游泳很有趣。'], answer: 0, explain: "mustn't 严禁，野外水域危险。", tag: '语法复习' },
    { id: 'ztlr-3', type: 'choice', q: '月饼 mooncakes 属于哪个节日？', options: ['Mid-Autumn Festival', 'Christmas', 'Easter', 'Halloween'], answer: 0, explain: '中秋吃月饼，传统美食记心间。', tag: '文化复习' },
    { id: 'ztlr-4', type: 'choice', q: '天气预报说 "heavy rain tomorrow"，你应该：', options: ['带伞、减少外出', '穿短袖去野餐', '去游泳', '晒被子'], answer: 0, explain: 'heavy rain 大雨，提前准备更从容。', tag: '情景' },
    { id: 'ztlr-5', type: 'judge', q: '垃圾分类 sort the garbage 是绿色生活的好习惯。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Green neighbourhood 从垃圾分类开始。', tag: '常识复习' },
    { id: 'ztlr-6', type: 'choice', q: '袁隆平 Yuan Longping 的贡献是：', options: ['杂交水稻 hybrid rice', '青蒿素', '万里长城', '活字印刷'], answer: 0, explain: '杂交水稻让更多人吃饱饭，功在千秋。', tag: '文化复习' },
    { id: 'ztlr-7', type: 'choice', q: '"I\'m good at singing, but weak in dancing." 的意思是：', options: ['我擅长唱歌，但舞蹈较弱。', '我唱歌跳舞都好。', '我讨厌音乐。', '我跳舞最好。'], answer: 0, explain: 'be good at / weak in，认识自己的长短处。', tag: '句型复习' },
    { id: 'ztlr-8', type: 'choice', q: '写 activity notice 通知要包括：', options: ['时间、地点、事件', '天气和星座', '菜单', '歌词'], answer: 0, explain: '通知三要素，一目了然不误事。', tag: '应用文复习' },
    { id: 'ztlr-9', type: 'judge', q: 'Culture corner 和 Literature corner 帮我们了解文化与文学。', options: ['√ 对', '✗ 错'], answer: 0, explain: '两个小角落，通往大世界。', tag: '复习' },
    { id: 'ztlr-10', type: 'choice', q: '预备年级下学期即将结束，最好的告别是：', options: ['带着收获，继续努力', '再也不学习了', '把书扔掉', '从此不读英语'], answer: 0, explain: '学无止境，Keep learning! 下一个学期更精彩！', tag: '成长规划' },
  ],
}
