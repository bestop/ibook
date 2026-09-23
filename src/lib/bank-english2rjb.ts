// 人教版PEP英语 二年级下册（一起点·预备级 2026春版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点·预备级）二年级下册（2026 春版）· 人民教育出版社（PEP 新版）
// 目录（英语朗读宝 51jiaoxi 2026 新课本同步资源 + 教材销售渠道书目交叉核对）：
//   Unit 1 Put on my coat! / Unit 2 Play safely / Unit 3 I can do it!
//   Unit 4 Let's design a park! / Unit 5 Let's play together! / Revision: Summer camp
// 每单元一关，每关 10 题，共 6 关 60 题，题目 id 前缀 ztb

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
    id: 'ztb1',
    name: 'Unit 1',
    title: 'Put on my coat!',
    emoji: '🧥',
    color: 'sky',
    lessons: ['Put on my coat!', 'Clothes for seasons', 'Getting dressed'],
    intro: '天冷穿外套，衣服穿对季，自己穿衣我最棒！',
  },
  {
    id: 'ztb2',
    name: 'Unit 2',
    title: 'Play safely',
    emoji: '🦺',
    color: 'amber',
    lessons: ['Play safely', 'Safe or not?', 'Safety rules'],
    intro: '不推不挤不乱爬，安全玩耍笑哈哈！',
  },
  {
    id: 'ztb3',
    name: 'Unit 3',
    title: 'I can do it!',
    emoji: '💪',
    color: 'lime',
    lessons: ['I can do it!', 'Helping hands', 'Little helper'],
    intro: '会传递、会使用小工具，我是能干的小帮手！',
  },
  {
    id: 'ztb4',
    name: 'Unit 4',
    title: "Let's design a park!",
    emoji: '🌳',
    color: 'teal',
    lessons: ["Let's design a park!", 'In the park', 'Trees and lakes'],
    intro: '小山小湖大树花，一起设计美丽的公园！',
  },
  {
    id: 'ztb5',
    name: 'Unit 5',
    title: "Let's play together!",
    emoji: '🤸',
    color: 'pink',
    lessons: ["Let's play together!", 'Fun games', 'Good friends'],
    intro: '一起跳绳一起爬，好朋友一起玩最开心！',
  },
  {
    id: 'ztbr',
    name: 'Revision',
    title: '夏令营时光',
    emoji: '⛺',
    color: 'cyan',
    lessons: ['Summer camp', '常用表达语', '全册单词表'],
    intro: '夏令营集合啦！用一学期的英语本领闯关吧！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ztb1: [
    { id: 'ztb1-1', type: 'choice', q: '"Put on my coat!" 的意思是：', options: ['穿上我的外套！', '脱下我的外套！', '洗我的外套！', '买一件外套！'], answer: 0, explain: 'put on 穿上，coat 外套，天冷了记得说 Put on your coat! 快穿上外套！', tag: '短语理解' },
    { id: 'ztb1-2', type: 'choice', q: '冬天保暖穿的"毛衣"是：', options: ['sweater', 'skirt', 'shirt', 'shoe'], answer: 0, explain: 'sweater 毛衣，冬天穿上暖和和；skirt 是短裙。', tag: '服装词汇' },
    { id: 'ztb1-3', type: 'choice', q: '夏天天气热，适合穿：', options: ['a skirt 一条短裙', 'a big coat 一件厚外套', 'a sweater 一件毛衣', 'two scarves 两条围巾'], answer: 0, explain: 'skirt 短裙凉快适合夏天；sweater 毛衣、coat 外套都是保暖的，留给冬天。', tag: '生活常识' },
    { id: 'ztb1-4', type: 'choice', q: '下雨出门要带的"雨伞"是：', options: ['umbrella', 'sweater', 'coat', 'skirt'], answer: 0, explain: 'umbrella 雨伞，下雨打伞，别淋湿衣服哦。', tag: '日常用品' },
    { id: 'ztb1-5', type: 'judge', q: '"Take off your shoes." 的意思是"脱下你的鞋子"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'put on 穿上，take off 脱下，一对反义短语。', tag: '动词短语' },
    { id: 'ztb1-6', type: 'choice', q: '早上自己穿衣服，可以对妈妈说：', options: ['I can get dressed!', 'I can\'t do it!', 'Help me all the time!', 'You do it for me.'], answer: 0, explain: 'get dressed 穿好衣服，自己的事情自己做，能干又自信！', tag: '习惯养成' },
    { id: 'ztb1-7', type: 'choice', q: '"裤子"的英语是：', options: ['trousers', 'jacket', 'hat', 'glove'], answer: 0, explain: 'trousers 裤子，两条裤腿，所以总是带 s 哦。', tag: '服装词汇' },
    { id: 'ztb1-8', type: 'judge', q: '天冷了要穿外套，天热就不用穿了。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Cold day, put on a coat. 天冷加衣，热天减衣，跟着季节穿衣服。', tag: '生活常识' },
    { id: 'ztb1-9', type: 'choice', q: '外套穿反了，应该：', options: ['脱下来重新穿好', '就这样穿一天', '把外套扔掉', '再套一件外套'], answer: 0, explain: '穿反了 take off 脱下再穿好，检查一下袖子和扣子！', tag: '习惯养成' },
    { id: 'ztb1-10', type: 'choice', q: '"cold" 的意思是：', options: ['寒冷的', '炎热的', '暖和的', '凉快的'], answer: 0, explain: 'cold 冷的，hot 热的，warm 暖和的，天气词要分清。', tag: '形容词' },
  ],
  ztb2: [
    { id: 'ztb2-1', type: 'choice', q: '"Play safely" 的意思是：', options: ['安全地玩耍', '大声地喊叫', '飞快地奔跑', '开心地吃饭'], answer: 0, explain: 'safely 安全地，play safely 安全玩耍，安全第一要记牢！', tag: '短语理解' },
    { id: 'ztb2-2', type: 'choice', q: '下课在走廊里，应该：', options: ['慢慢走 walk slowly', '用力推 push', '大声喊 shout', '追着跑 run fast'], answer: 0, explain: '走廊里要 walk slowly 慢慢走，推、喊、跑都会伤到人。', tag: '安全规则' },
    { id: 'ztb2-3', type: 'choice', q: '"Don\'t push!" 的意思是：', options: ['不要推挤！', '不要睡觉！', '不要吃饭！', '不要说话！'], answer: 0, explain: 'push 推，Don\'t... 不要……，劝阻别人时用这个句型。', tag: '句型' },
    { id: 'ztb2-4', type: 'choice', q: '荡秋千时正确的做法是：', options: ['坐稳、双手抓紧', '站着荡', '推前面的同学', '荡得越高越站起来'], answer: 0, explain: '坐稳抓紧再荡，危险动作 Don\'t do it! 一个都不能做。', tag: '安全规则' },
    { id: 'ztb2-5', type: 'judge', q: '上下楼梯要靠右慢行，不推不挤。', options: ['√ 对', '✗ 错'], answer: 0, explain: '上下楼梯靠右走，一步一步踩踏实，安全习惯天天有。', tag: '安全规则' },
    { id: 'ztb2-6', type: 'choice', q: '看到小伙伴要摔倒，你应该：', options: ['赶紧扶一把', '哈哈大笑', '快跑开', '推他一把'], answer: 0, explain: '扶一把、问一句 Are you OK?，互相帮助才安全。', tag: '品德养成' },
    { id: 'ztb2-7', type: 'choice', q: '在马路边玩耍是：', options: ['危险的 dangerous', '安全的 safe', '好玩的 fun', '安静的 quiet'], answer: 0, explain: 'dangerous 危险的，马路边车多，千万不能玩耍！', tag: '安全词汇' },
    { id: 'ztb2-8', type: 'judge', q: '玩滑梯不用排队，谁跑得快谁先玩。', options: ['√ 对', '✗ 错'], answer: 1, explain: '玩滑梯要排队 wait for my turn，一个一个来，推推挤挤会摔伤。', tag: '安全规则' },
    { id: 'ztb2-9', type: 'choice', q: '"shout" 的意思是：', options: ['大喊大叫', '轻轻说话', '安静看书', '慢慢走路'], answer: 0, explain: 'shout 喊叫，图书馆和走廊里 Don\'t shout! 不要大喊大叫。', tag: '动词' },
    { id: 'ztb2-10', type: 'choice', q: '玩耍时受伤了，应该先：', options: ['告诉老师或家长', '自己躲起来', '继续玩', '哭个不停'], answer: 0, explain: '受伤先告诉大人：Tell your teacher. 告诉老师，及时处理好得快。', tag: '安全规则' },
  ],
  ztb3: [
    { id: 'ztb3-1', type: 'choice', q: '"I can do it!" 的意思是：', options: ['我能做到！', '我不想做！', '你帮我做！', '我做不到！'], answer: 0, explain: 'I can do it! 我能行！相信自己，大声说出来！', tag: '短语理解' },
    { id: 'ztb3-2', type: 'choice', q: '把书"递给"同学，用动词：', options: ['pass', 'push', 'wash', 'draw'], answer: 0, explain: 'pass 递、传，Pass me the book, please. 请把书递给我。', tag: '动词' },
    { id: 'ztb3-3', type: 'choice', q: '"use" 的意思是：', options: ['使用', '扔掉', '踩踏', '藏起来'], answer: 0, explain: 'use 使用，Use the scissors carefully. 小心使用剪刀。', tag: '动词' },
    { id: 'ztb3-4', type: 'choice', q: '用剪刀剪纸时应该：', options: ['小心使用，用完收好', '拿着剪刀跑', '把剪刀指向别人', '乱剪一气'], answer: 0, explain: 'Use it carefully. 小心用，用完收好，安全第一！', tag: '安全规则' },
    { id: 'ztb3-5', type: 'judge', q: '同学搬不动书箱，我可以帮忙一起搬。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Let me help you. 我来帮你，互相帮助真温暖。', tag: '品德养成' },
    { id: 'ztb3-6', type: 'choice', q: '想请同学帮忙，可以说：', options: ['Can you help me?', 'You must go away.', 'I don\'t need you.', 'Watch TV with me.'], answer: 0, explain: 'Can you help me? 你能帮我吗？客气请求，别人更愿意帮。', tag: '句型' },
    { id: 'ztb3-7', type: 'choice', q: '擦桌子要用到的工具是：', options: ['a cloth 一块抹布', 'a spoon 一个勺子', 'a cup 一个杯子', 'a toothbrush 一把牙刷'], answer: 0, explain: 'cloth 抹布，Use a cloth to clean the table. 用抹布擦桌子。', tag: '日常用品' },
    { id: 'ztb3-8', type: 'judge', q: '自己的书包都让爸爸妈妈整理，我不用动手。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'I can do it! 自己的事情自己做，整理书包是小本领，小小年纪有担当。', tag: '习惯养成' },
    { id: 'ztb3-9', type: 'choice', q: '妈妈做饭时，你可以帮忙：', options: ['摆碗筷 set the table', '玩玩具', '看电视', '跑来跑去'], answer: 0, explain: 'set the table 摆碗筷，做个能干的小帮手！', tag: '劳动习惯' },
    { id: 'ztb3-10', type: 'choice', q: '别人帮了你，除了说谢谢还可以：', options: ['下次也帮助他', '转身就跑', '假装没发生', '让他再帮一次'], answer: 0, explain: 'Thank you! + 下次我也帮你，友谊就是这样暖暖的。', tag: '品德养成' },
  ],
  ztb4: [
    { id: 'ztb4-1', type: 'choice', q: '"Let\'s design a park!" 的意思是：', options: ['我们来设计一座公园吧！', '我们去公园玩吧！', '我们把公园弄脏吧！', '我们住进公园吧！'], answer: 0, explain: 'design 设计，design a park 设计公园，动手又动脑！', tag: '短语理解' },
    { id: 'ztb4-2', type: 'choice', q: '公园里的"大树"是：', options: ['tree', 'flower', 'lake', 'hill'], answer: 0, explain: 'tree 树，Trees are green. 大树绿油油，还能净化空气。', tag: '自然词汇' },
    { id: 'ztb4-3', type: 'choice', q: '公园里能划船的"湖"是：', options: ['lake', 'tree', 'road', 'bench'], answer: 0, explain: 'lake 湖，There is a lake in the park. 公园里有个湖。', tag: '自然词汇' },
    { id: 'ztb4-4', type: 'choice', q: '香香的"花"是：', options: ['flower', 'tree', 'grass', 'hill'], answer: 0, explain: 'flower 花，Don\'t pick the flowers! 不要摘花哦。', tag: '自然词汇' },
    { id: 'ztb4-5', type: 'judge', q: '"hill" 的意思是"小山"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'hill 小山，爬上小山看风景：Climb the hill! 爬上小山！', tag: '自然词汇' },
    { id: 'ztb4-6', type: 'choice', q: '说公园里"有一个湖"，用：', options: ['There is a lake.', 'I have a lake.', 'It\'s a lake.', 'They are lakes.'], answer: 0, explain: 'There is... 有（一个）……，介绍景物用这个句型。', tag: '句型' },
    { id: 'ztb4-7', type: 'choice', q: '公园的长椅是用来：', options: ['坐下来休息的', '站上去跳的', '刻字画画的', '推来推去的'], answer: 0, explain: 'bench 长椅，坐一坐歇一歇，爱护公物人人夸。', tag: '公物爱护' },
    { id: 'ztb4-8', type: 'judge', q: '公园里的花很漂亮，可以摘一朵带回家。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'Don\'t pick the flowers! 花是大家的，留在公园里大家看。', tag: '品德养成' },
    { id: 'ztb4-9', type: 'choice', q: '设计公园时，下面哪个想法最好？', options: ['留一块草坪给大家野餐', '把湖水抽干', '砍掉所有大树', '到处盖满房子'], answer: 0, explain: '好公园要有树、有湖、有草坪，大家一起玩耍才快乐！', tag: '创意表达' },
    { id: 'ztb4-10', type: 'choice', q: '在公园里看到垃圾，应该：', options: ['捡起来扔进垃圾桶', '踢来踢去', '假装没看见', '再扔一个'], answer: 0, explain: 'Keep the park clean! 捡起垃圾扔进桶，公园美丽我做主。', tag: '环保意识' },
  ],
  ztb5: [
    { id: 'ztb5-1', type: 'choice', q: '"Let\'s play together!" 的意思是：', options: ['我们一起玩吧！', '我们一起睡觉吧！', '我们一起学习吧！', '我们一起吃饭吧！'], answer: 0, explain: 'together 一起，Let\'s play together! 一起玩最开心！', tag: '短语理解' },
    { id: 'ztb5-2', type: 'choice', q: '两个人轮流跳的"绳"是：', options: ['rope 跳绳', 'ball 皮球', 'kite 风筝', 'bike 自行车'], answer: 0, explain: 'rope 绳，跳绳 jump rope，锻炼身体顶呱呱。', tag: '玩具词汇' },
    { id: 'ztb5-3', type: 'choice', q: '玩皮球时可以说：', options: ['Let\'s play ball!', 'Let\'s play sleep!', 'Let\'s play eat!', 'Let\'s play cry!'], answer: 0, explain: 'play ball 玩球，play 后面接球类运动不加 the。', tag: '表达' },
    { id: 'ztb5-4', type: 'choice', q: '输了游戏应该：', options: ['大方握手祝贺赢家', '把玩具扔掉', '再也不玩了', '哭闹耍赖'], answer: 0, explain: '胜不骄败不馁，说声 Good game! 下次再努力！', tag: '品德养成' },
    { id: 'ztb5-5', type: 'judge', q: '和小伙伴一起玩玩具，要轮流分享。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Take turns. 轮流玩，Share your toys. 分享玩具真快乐。', tag: '品德养成' },
    { id: 'ztb5-6', type: 'choice', q: '好朋友摔倒了，你应该：', options: ['扶他起来问他疼不疼', '跑开不管', '笑话他', '再推一下'], answer: 0, explain: 'Are you OK? Let me help you. 关心伙伴，友谊长长久久。', tag: '品德养成' },
    { id: 'ztb5-7', type: 'choice', q: '想加入小伙伴的游戏，先说：', options: ['Can I play, too?', 'Go away!', 'This is mine!', 'I\'m leaving!'], answer: 0, explain: 'Can I play, too? 我也能一起玩吗？有礼貌地加入大家更欢迎。', tag: '句型' },
    { id: 'ztb5-8', type: 'judge', q: '玩得满头大汗，可以马上脱掉衣服吹冷风。', options: ['√ 对', '✗ 错'], answer: 1, explain: '出汗后吹冷风容易感冒，先擦汗休息一会儿再脱外套。', tag: '健康习惯' },
    { id: 'ztb5-9', type: 'choice', q: '游戏结束后要：', options: ['把玩具收好', '把玩具乱扔', '把玩具藏起来', '把玩具弄坏'], answer: 0, explain: 'Put away the toys. 收好玩具，下次再玩，教室也整洁。', tag: '习惯养成' },
    { id: 'ztb5-10', type: 'choice', q: '和小伙伴玩得开心，可以说：', options: ['I\'m so happy!', 'I\'m so sad.', 'I\'m tired of you.', 'Go away!'], answer: 0, explain: 'I\'m so happy! 我太开心啦！把快乐说出来，感染小伙伴。', tag: '表达' },
  ],
  ztbr: [
    { id: 'ztbr-1', type: 'choice', q: '"Summer camp" 的意思是：', options: ['夏令营', '冬令营', '运动会', '生日会'], answer: 0, explain: 'summer 夏天 + camp 营地 = summer camp 夏令营，快乐集合啦！', tag: '短语理解' },
    { id: 'ztbr-2', type: 'choice', q: '下面哪件是冬天穿的？', options: ['sweater 毛衣', 'skirt 短裙', 'T-shirt T恤', 'shorts 短裤'], answer: 0, explain: 'sweater 毛衣保暖冬天穿；短裙短裤是夏天的凉快装备。', tag: '单词分类' },
    { id: 'ztbr-3', type: 'choice', q: '在走廊里看到"禁止奔跑"的标志，你应该：', options: ['慢慢走', '跑快点', '蹦蹦跳跳', '推着同学跑'], answer: 0, explain: 'Don\'t run. 标志在提醒：walk slowly 慢慢走，安全最重要。', tag: '安全规则' },
    { id: 'ztbr-4', type: 'choice', q: '"Pass me the pencil, please." 的意思是：', options: ['请把铅笔递给我。', '请把铅笔借给我。', '请帮我削铅笔。', '请把铅笔收起来。'], answer: 0, explain: 'pass 递给，Pass me..., please. 请递给我……，礼貌请求。', tag: '句型' },
    { id: 'ztbr-5', type: 'judge', q: '公园里的湖水很美，但不能独自下水游泳。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Don\'t swim alone! 不独自下水，安全时刻记心间。', tag: '安全规则' },
    { id: 'ztbr-6', type: 'choice', q: '公园里有的景物是：', options: ['trees, flowers and a lake', 'beds, desks and sofas', 'knives, forks and plates', 'cars, buses and trains'], answer: 0, explain: '树、花、湖都在公园里；床桌沙发在家里，餐具在餐桌上。', tag: '单词分类' },
    { id: 'ztbr-7', type: 'choice', q: '想帮妈妈拿东西，可以说：', options: ['Let me help you.', 'You help me.', 'I can\'t help.', 'Go away, Mum!'], answer: 0, explain: 'Let me help you. 让我来帮你，做妈妈的贴心小帮手。', tag: '句型' },
    { id: 'ztbr-8', type: 'choice', q: '和夏令营的新朋友认识，先说：', options: ['Hello! I\'m...', 'Goodbye!', 'Don\'t talk to me.', 'Give me that!'], answer: 0, explain: 'Hello! I\'m... 你好，我是……，自我介绍交新朋友。', tag: '交友' },
    { id: 'ztbr-9', type: 'judge', q: '玩滑梯时不推不挤，排队等候。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Wait for your turn. 等待轮到自己，安全玩耍人人夸。', tag: '安全规则' },
    { id: 'ztbr-10', type: 'choice', q: '夏令营要出发了，你准备的东西是：', options: ['水壶、帽子和背包', '很多很多糖果', '十件厚外套', '一整箱玩具'], answer: 0, explain: '收拾行装要实用：water bottle, cap and backpack，轻装出发！', tag: '生活常识' },
  ],
}
