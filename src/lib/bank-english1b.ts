// 沪教版（五四学制·牛津上海版）英语 一年级下册（现行版目录）随堂知识点题库
// 教材：九年义务教育课本 英语（牛津上海版）一年级下册 · 上海教育出版社
// 目录（电子课本网 / 教师之家 牛津上海课标版全书目录核对）：
//   Module 1 Using my five senses: Unit 1 Look and see / Unit 2 Listen and hear / Unit 3 Taste and smell
//   Module 2 My favourite things: Unit 1 Toys I like / Unit 2 Food I like / Unit 3 Drinks I like
//   Module 3 Things around us: Unit 1 Seasons / Unit 2 Weather / Unit 3 Clothes
//   Module 4 Things we do: Unit 1 Activities / Unit 2 New Year's Day / Unit 3 Story time
// 每单元一关，每关 10 题，共 12 关 120 题，题目 id 前缀 ztg

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
    id: 'ztg1',
    name: 'Unit 1',
    title: 'Look and see',
    emoji: '👀',
    color: 'cyan',
    lessons: ['Module 1: Using my five senses', 'What can you see?', 'I can see...'],
    intro: '小眼睛看一看：小鸟、青蛙、小兔……用英语说出你看到的！',
  },
  {
    id: 'ztg2',
    name: 'Unit 2',
    title: 'Listen and hear',
    emoji: '👂',
    color: 'sky',
    lessons: ['Module 1: Using my five senses', 'What do you hear?', 'I hear...'],
    intro: '小耳朵听一听：喵喵、汪汪、咩咩，是谁在叫？',
  },
  {
    id: 'ztg3',
    name: 'Unit 3',
    title: 'Taste and smell',
    emoji: '👃',
    color: 'teal',
    lessons: ['Module 1: Using my five senses', 'Taste the...', 'Smell the...'],
    intro: '尝一尝、闻一闻，米饭香香汤烫烫，五味小侦探出发！',
  },
  {
    id: 'ztg4',
    name: 'Unit 4',
    title: 'Toys I like',
    emoji: '🧸',
    color: 'orange',
    lessons: ['Module 2: My favourite things', 'I like...', 'My favourite toy'],
    intro: '皮球、洋娃娃、小风筝，我最爱的玩具用英语说一说！',
  },
  {
    id: 'ztg5',
    name: 'Unit 5',
    title: 'Food I like',
    emoji: '🍮',
    color: 'rose',
    lessons: ['Module 2: My favourite things', 'jelly & biscuit', 'I like...'],
    intro: '果冻、冰淇淋、小饼干，说说你喜欢的美味小零食！',
  },
  {
    id: 'ztg6',
    name: 'Unit 6',
    title: 'Drinks I like',
    emoji: '🥛',
    color: 'lime',
    lessons: ['Module 2: My favourite things', 'milk & juice', 'Drink some...'],
    intro: '口渴了喝什么？牛奶、果汁还是白开水？',
  },
  {
    id: 'ztg7',
    name: 'Unit 7',
    title: 'Seasons',
    emoji: '🌸',
    color: 'pink',
    lessons: ['Module 3: Things around us', 'Four seasons', 'Warm / hot / cool / cold'],
    intro: '春暖夏热秋凉爽，冬天下雪冷冰冰，四季转圈圈！',
  },
  {
    id: 'ztg8',
    name: 'Unit 8',
    title: 'Weather',
    emoji: '☀️',
    color: 'amber',
    lessons: ['Module 3: Things around us', 'sunny / rainy', 'cloudy / windy'],
    intro: '晴天雨天都好玩，看天说话学英语！',
  },
  {
    id: 'ztg9',
    name: 'Unit 9',
    title: 'Clothes',
    emoji: '👕',
    color: 'violet',
    lessons: ['Module 3: Things around us', 'T-shirt & dress', 'Put on...'],
    intro: 'T 恤、裙子、小短裤，穿衣服也要会说英语哦！',
  },
  {
    id: 'ztg10',
    name: 'Unit 10',
    title: 'Activities',
    emoji: '🤸',
    color: 'fuchsia',
    lessons: ['Module 4: Things we do', 'ride & skip', 'I can...'],
    intro: '骑车、跳绳、放风筝，运动小达人就是你！',
  },
  {
    id: 'ztg11',
    name: 'Unit 11',
    title: "New Year's Day",
    emoji: '🧧',
    color: 'red',
    lessons: ['Module 4: Things we do', 'Happy New Year!', 'A card for you'],
    intro: '过年啦！Happy New Year! 送贺卡、收礼物，学说新年祝福！',
  },
  {
    id: 'ztg12',
    name: 'Unit 12',
    title: 'Story time',
    emoji: '📖',
    color: 'emerald',
    lessons: ['Module 4: Things we do', 'Listen to a story', 'Review of the book'],
    intro: '故事时间到！把一学期学的单词句子串一串，大复习！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ztg1: [
    { id: 'ztg1-1', type: 'choice', q: '"Look and see" 的意思是：', options: ['看一看，瞧一瞧', '听一听', '尝一尝', '摸一摸'], answer: 0, explain: 'look 看、see 看见，Look and see 就是睁大眼睛看一看！', tag: '短语理解' },
    { id: 'ztg1-2', type: 'choice', q: '呱呱叫、绿绿的"青蛙"是：', options: ['frog', 'bird', 'bee', 'rabbit'], answer: 0, explain: 'frog 青蛙，呱呱叫，专捉害虫是能手。', tag: '动物词汇' },
    { id: 'ztg1-3', type: 'choice', q: '天上飞、会采蜜的"蜜蜂"是：', options: ['bee', 'bird', 'frog', 'hen'], answer: 0, explain: 'bee 蜜蜂，嗡嗡嗡，飞到花丛采蜜忙。', tag: '动物词汇' },
    { id: 'ztg1-4', type: 'choice', q: '长耳朵、红眼睛的"兔子"是：', options: ['rabbit', 'bird', 'frog', 'bee'], answer: 0, explain: 'rabbit 兔子，长耳朵短尾巴，蹦蹦跳跳爱吃萝卜。', tag: '动物词汇' },
    { id: 'ztg1-5', type: 'choice', q: '"What can you see?" 问的是：', options: ['你能看见什么？', '你能听见什么？', '你能摸到什么？', '你想要什么？'], answer: 0, explain: 'What can you see? 你能看见什么？回答 I can see...（我能看见……）。', tag: '句型' },
    { id: 'ztg1-6', type: 'judge', q: '"I can see a bird." 的意思是"我能看见一只小鸟"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I can see... 我能看见……，看见小鸟就说 I can see a bird。', tag: '句型' },
    { id: 'ztg1-7', type: 'choice', q: '用来看东西的身体部位是：', options: ['eyes 眼睛', 'ears 耳朵', 'hands 手', 'feet 脚'], answer: 0, explain: 'eyes 眼睛用来看，Look and see 就是用眼睛看。', tag: '常识' },
    { id: 'ztg1-8', type: 'choice', q: '下面会飞的小动物是：', options: ['bird 小鸟', 'frog 青蛙', 'rabbit 兔子', 'hen 母鸡'], answer: 0, explain: 'bird 小鸟有翅膀会飞；青蛙跳、兔子蹦、母鸡走。', tag: '常识' },
    { id: 'ztg1-9', type: 'judge', q: '观察小动物时轻轻看、不捉不碰，才是爱动物的孩子。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Look and see 用眼睛看就好，不捉不吓小动物。', tag: '品德' },
    { id: 'ztg1-10', type: 'choice', q: '公园里看见很多花，可以说：', options: ['I can see flowers.', 'I can hear flowers.', 'I can taste flowers.', 'I can buy flowers.'], answer: 0, explain: '看见用 see：I can see flowers. 我能看见许多花。', tag: '句型' },
  ],
  ztg2: [
    { id: 'ztg2-1', type: 'choice', q: '"Listen and hear" 的意思是：', options: ['听一听，听见', '看一看', '闻一闻', '跳一跳'], answer: 0, explain: 'listen 听、hear 听见，竖起耳朵听一听！', tag: '短语理解' },
    { id: 'ztg2-2', type: 'choice', q: '咩咩叫的"绵羊"是：', options: ['sheep', 'hen', 'cat', 'dog'], answer: 0, explain: 'sheep 绵羊，咩咩叫，身上的羊毛可以做毛衣。', tag: '动物词汇' },
    { id: 'ztg2-3', type: 'choice', q: '咯咯叫、会下蛋的"母鸡"是：', options: ['hen', 'sheep', 'bee', 'frog'], answer: 0, explain: 'hen 母鸡，咯咯叫，还会下鸡蛋。', tag: '动物词汇' },
    { id: 'ztg2-4', type: 'choice', q: '"What do you hear?" 问的是：', options: ['你听见了什么？', '你看见了什么？', '你吃什么？', '你喜欢什么？'], answer: 0, explain: 'What do you hear? 你听见什么？回答 I hear...（我听见……）。', tag: '句型' },
    { id: 'ztg2-5', type: 'judge', q: '"I hear a cat." 的意思是"我听见猫叫声"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I hear... 我听见……，听见猫叫喵喵喵。', tag: '句型' },
    { id: 'ztg2-6', type: 'choice', q: '用来的听声音的耳朵是：', options: ['ears', 'eyes', 'nose', 'mouth'], answer: 0, explain: 'ears 耳朵，两只耳朵用来听声音，Listen and hear！', tag: '常识' },
    { id: 'ztg2-7', type: 'choice', q: '汪汪叫的小狗是：', options: ['dog', 'cat', 'sheep', 'hen'], answer: 0, explain: 'dog 小狗汪汪叫，cat 小猫喵喵叫，别弄混哦。', tag: '动物词汇' },
    { id: 'ztg2-8', type: 'choice', q: '听到电话铃响，你应该：', options: ['接电话问你好', '把电话藏起来', '大声哭', '把电池扣掉'], answer: 0, explain: '听到铃声 I hear the phone. 有礼貌地接听问好。', tag: '情景' },
    { id: 'ztg2-9', type: 'judge', q: '上课时要竖起小耳朵认真听老师讲话。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Listen and hear! 上课认真听，本领学得多。', tag: '学习习惯' },
    { id: 'ztg2-10', type: 'choice', q: '农场里能听到的声音是：', options: ['sheep 咩咩', '汽车嘀嘀', '飞机轰隆', '闹钟叮铃'], answer: 0, explain: '农场里有绵羊 sheep、母鸡 hen，它们叫起来咩咩、咯咯。', tag: '情景' },
  ],
  ztg3: [
    { id: 'ztg3-1', type: 'choice', q: '"Taste and smell" 的意思是：', options: ['尝一尝，闻一闻', '看一看', '跑一跑', '画一画'], answer: 0, explain: 'taste 尝、smell 闻，用舌头尝、用鼻子闻。', tag: '短语理解' },
    { id: 'ztg3-2', type: 'choice', q: '白白的"米饭"是：', options: ['rice', 'soup', 'egg', 'fish'], answer: 0, explain: 'rice 米饭，一碗香香的米饭是 a bowl of rice。', tag: '食物词汇' },
    { id: 'ztg3-3', type: 'choice', q: '热乎乎的"汤"是：', options: ['soup', 'rice', 'juice', 'milk'], answer: 0, explain: 'soup 汤，喝汤小心烫，Taste the soup. 尝尝汤。', tag: '食物词汇' },
    { id: 'ztg3-4', type: 'choice', q: '"Taste the rice." 的意思是：', options: ['尝尝米饭', '扔掉米饭', '买米饭', '看看米饭'], answer: 0, explain: 'taste 尝一尝，Taste the rice. 尝尝米饭香不香。', tag: '句型' },
    { id: 'ztg3-5', type: 'judge', q: '闻一闻鱼新不新鲜，要用鼻子 smell。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Smell the fish. 闻闻鱼，用鼻子判断新不新鲜。', tag: '句型' },
    { id: 'ztg3-6', type: 'choice', q: '用来闻气味的身体部位是：', options: ['nose 鼻子', 'eye 眼睛', 'ear 耳朵', 'hand 手'], answer: 0, explain: 'nose 鼻子闻气味，tongue 舌头尝味道。', tag: '常识' },
    { id: 'ztg3-7', type: 'choice', q: '刚出锅的汤很烫，你应该：', options: ['吹一吹、等一等再喝', '马上大口喝', '倒在地上', '用手去捞'], answer: 0, explain: '烫的东西要吹一吹、等一等，小心别烫着小舌头。', tag: '安全常识' },
    { id: 'ztg3-8', type: 'choice', q: '鸡蛋的英语是：', options: ['egg', 'milk', 'rice', 'soup'], answer: 0, explain: 'egg 鸡蛋，一个鸡蛋是 an egg，营养又好吃。', tag: '食物词汇' },
    { id: 'ztg3-9', type: 'judge', q: '吃饭前要用肥皂洗手，讲卫生少生病。', options: ['√ 对', '✗ 错'], answer: 0, explain: '饭前洗手，细菌赶走，做个讲卫生的好孩子。', tag: '卫生习惯' },
    { id: 'ztg3-10', type: 'choice', q: '香香的东西闻起来，你会说：', options: ['It smells good. 闻起来真香', 'It looks blue.', 'It hears a song.', 'It runs fast.'], answer: 0, explain: 'smell 闻起来，It smells good. 闻起来香香的，食欲都来了！', tag: '拓展' },
  ],
  ztg4: [
    { id: 'ztg4-1', type: 'choice', q: '"Toys I like" 的意思是：', options: ['我喜欢的玩具', '我喜欢的食物', '我喜欢的动物', '我喜欢的书'], answer: 0, explain: 'toy 玩具，Toys I like 就是我喜欢的玩具。', tag: '短语理解' },
    { id: 'ztg4-2', type: 'choice', q: '拍来拍去会弹跳的"皮球"是：', options: ['ball', 'doll', 'kite', 'bicycle'], answer: 0, explain: 'ball 皮球，拍一拍跳得高，play with a ball 玩皮球。', tag: '玩具词汇' },
    { id: 'ztg4-3', type: 'choice', q: '抱在怀里的"洋娃娃"是：', options: ['doll', 'ball', 'kite', 'car'], answer: 0, explain: 'doll 洋娃娃，可以给她梳头发、穿裙子。', tag: '玩具词汇' },
    { id: 'ztg4-4', type: 'choice', q: '风一吹就上天的小"风筝"是：', options: ['kite', 'ball', 'doll', 'robot'], answer: 0, explain: 'kite 风筝，Fly a kite. 放风筝，要在大人的陪伴下到空旷的地方玩。', tag: '玩具词汇' },
    { id: 'ztg4-5', type: 'judge', q: '"I like my doll." 的意思是"我喜欢我的洋娃娃"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I like... 我喜欢……，说出心爱的玩具吧！', tag: '句型' },
    { id: 'ztg4-6', type: 'choice', q: '两个轮子踩着跑的"自行车"是：', options: ['bicycle', 'bus', 'ship', 'plane'], answer: 0, explain: 'bicycle 自行车，也可以简说 bike，骑车戴好安全帽。', tag: '词汇' },
    { id: 'ztg4-7', type: 'choice', q: '想问别人"你喜欢什么玩具？"，可以说：', options: ['What toys do you like?', 'What do you eat?', 'How old are you?', 'Where are you?'], answer: 0, explain: 'What toys do you like? 你喜欢什么玩具？I like... 回答。', tag: '对话' },
    { id: 'ztg4-8', type: 'judge', q: '玩具玩完要收好，放回玩具箱。', options: ['√ 对', '✗ 错'], answer: 0, explain: '玩具回家啦！收好玩具，房间整洁又安全。', tag: '习惯养成' },
    { id: 'ztg4-9', type: 'choice', q: '小伙伴想把你的小汽车借去玩，你应该：', options: ['大方地说 Here you are.', '紧紧抱住不给看', '把它藏起来', '弄坏它'], answer: 0, explain: 'Here you are. 给你。学会分享，朋友更多！', tag: '品德' },
    { id: 'ztg4-10', type: 'choice', q: '下面不是玩具的是：', options: ['broccoli 西兰花', 'kite 风筝', 'doll 洋娃娃', 'ball 皮球'], answer: 0, explain: 'broccoli 西兰花是蔬菜，玩具里有球、娃娃和风筝。', tag: '单词分类' },
  ],
  ztg5: [
    { id: 'ztg5-1', type: 'choice', q: '"Food I like" 的意思是：', options: ['我喜欢的食物', '我喜欢的饮料', '我喜欢的玩具', '我喜欢的颜色'], answer: 0, explain: 'food 食物，Food I like 就是我爱吃的食物。', tag: '短语理解' },
    { id: 'ztg5-2', type: 'choice', q: 'QQ 弹弹、亮晶晶的"果冻"是：', options: ['jelly', 'biscuit', 'rice', 'egg'], answer: 0, explain: 'jelly 果冻，滑滑的 QQ 的，要小口慢慢吃。', tag: '食物词汇' },
    { id: 'ztg5-3', type: 'choice', q: '夏天吃的冰冰凉凉的"冰淇淋"是：', options: ['ice cream', 'jelly', 'soup', 'fish'], answer: 0, explain: 'ice cream 冰淇淋，冰凉香甜，吃多了肚子会不舒服哦。', tag: '食物词汇' },
    { id: 'ztg5-4', type: 'choice', q: '香香脆脆的"饼干"是：', options: ['biscuit', 'jelly', 'milk', 'water'], answer: 0, explain: 'biscuit 饼干，一块饼干是 a biscuit，many biscuits 是很多块。', tag: '食物词汇' },
    { id: 'ztg5-5', type: 'judge', q: '"I like sweets." 的意思是"我喜欢糖果"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'sweet 糖果（复数 sweets），糖果好吃但要少吃，小心蛀牙。', tag: '句型' },
    { id: 'ztg5-6', type: 'choice', q: '想请别人吃饼干，可以说：', options: ['Have a biscuit, please.', 'Throw the biscuit!', 'Wash the biscuit.', 'Hide the biscuit.'], answer: 0, explain: 'Have a..., please. 请吃……，分享食物有礼貌。', tag: '句型' },
    { id: 'ztg5-7', type: 'choice', q: '下面哪种是健康的好食物？', options: ['苹果 apple', '只吃糖果', '只喝可乐', '不吃晚饭'], answer: 0, explain: '苹果有维生素，多吃水果身体好；零食糖果要少吃。', tag: '健康习惯' },
    { id: 'ztg5-8', type: 'judge', q: '吃饭前洗手，吃东西不挑食，身体才能棒棒的。', options: ['√ 对', '✗ 错'], answer: 0, explain: '讲卫生、不挑食，Food I like 里也要有蔬菜哦。', tag: '健康习惯' },
    { id: 'ztg5-9', type: 'choice', q: '别人请你吃果冻，接过时要说：', options: ['Thank you!', 'Go away!', 'Give me more!', 'No, no, no!'], answer: 0, explain: 'Thank you! 谢谢你！别人分享食物时要道谢。', tag: '礼貌用语' },
    { id: 'ztg5-10', type: 'choice', q: '"yummy" 的意思是：', options: ['好吃的、真美味', '难吃的', '烫的', '冰的'], answer: 0, explain: 'Yummy! 真好吃！尝到美味就可以说这个词。', tag: '表达' },
  ],
  ztg6: [
    { id: 'ztg6-1', type: 'choice', q: '"Drinks I like" 的意思是：', options: ['我喜欢的饮料', '我喜欢的食物', '我喜欢的玩具', '我喜欢的游戏'], answer: 0, explain: 'drink 饮料（也可以表示"喝"），Drinks I like 就是我爱喝的。', tag: '短语理解' },
    { id: 'ztg6-2', type: 'choice', q: '白白的、喝了长个子的"牛奶"是：', options: ['milk', 'cola', 'juice', 'water'], answer: 0, explain: 'milk 牛奶，每天喝牛奶，骨骼强健长得高。', tag: '饮品词汇' },
    { id: 'ztg6-3', type: 'choice', q: '橙子榨出来的"橙汁"是：', options: ['juice', 'milk', 'water', 'soup'], answer: 0, explain: 'juice 果汁，orange juice 橙汁，甜甜的维 C 多。', tag: '饮品词汇' },
    { id: 'ztg6-4', type: 'choice', q: '最解渴、身体最需要的"水"是：', options: ['water', 'cola', 'juice', 'milk'], answer: 0, explain: 'water 水，多喝白开水，少喝甜甜的碳酸饮料。', tag: '健康常识' },
    { id: 'ztg6-5', type: 'judge', q: '"Drink some water." 的意思是"喝点水"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Drink some water. 喝点水吧，运动后要及时补水。', tag: '句型' },
    { id: 'ztg6-6', type: 'choice', q: '口渴了想喝水，可以说：', options: ['I want some water.', 'I want some toys.', 'I want to sleep.', 'I want a book.'], answer: 0, explain: 'I want... 我想要……，I want some water. 我想要点水。', tag: '句型' },
    { id: 'ztg6-7', type: 'choice', q: '下面哪种喝法最健康？', options: ['口渴时慢慢喝白开水', '一口气灌一大瓶冰可乐', '只用饮料代替水', '一天不喝水'], answer: 0, explain: '白开水最健康，慢慢喝；碳酸饮料少喝为妙。', tag: '健康常识' },
    { id: 'ztg6-8', type: 'judge', q: '运动出汗后，要及时喝水补充水分。', options: ['√ 对', '✗ 错'], answer: 0, explain: '运动后小口多次喝水，身体水分才充足。', tag: '健康常识' },
    { id: 'ztg6-9', type: 'choice', q: '客人来家里，请客人喝果汁可以说：', options: ['Have some juice, please.', 'Go and get juice yourself.', 'No juice for you.', 'Juice is mine!'], answer: 0, explain: 'Have some juice, please. 请喝点果汁，小主人真有礼貌。', tag: '情景' },
    { id: 'ztg6-10', type: 'choice', q: '牛奶 milk、水 water、果汁 juice 都是：', options: ['drinks 饮料', 'toys 玩具', 'animals 动物', 'clothes 衣服'], answer: 0, explain: '能喝的都归为 drinks 饮料这一类，分类记忆真方便。', tag: '单词分类' },
  ],
  ztg7: [
    { id: 'ztg7-1', type: 'choice', q: '"seasons" 的意思是：', options: ['季节', '天气', '衣服', '食物'], answer: 0, explain: 'season 季节，一年有四个季节 four seasons。', tag: '词汇' },
    { id: 'ztg7-2', type: 'choice', q: '桃花开、柳发芽的"春天"是：', options: ['spring', 'summer', 'autumn', 'winter'], answer: 0, explain: 'spring 春天，花儿开草儿绿，Spring is warm. 春天暖洋洋。', tag: '季节词汇' },
    { id: 'ztg7-3', type: 'choice', q: '烈日炎炎、可以游泳吃西瓜的"夏天"是：', options: ['summer', 'spring', 'autumn', 'winter'], answer: 0, explain: 'summer 夏天，Summer is hot. 夏天热乎乎，游泳最开心。', tag: '季节词汇' },
    { id: 'ztg7-4', type: 'choice', q: '树叶变黄、凉风习习的"秋天"是：', options: ['autumn', 'summer', 'spring', 'winter'], answer: 0, explain: 'autumn 秋天，Autumn is cool. 秋天凉丝丝，果实熟了。', tag: '季节词汇' },
    { id: 'ztg7-5', type: 'choice', q: '会下雪、可以堆雪人的"冬天"是：', options: ['winter', 'autumn', 'summer', 'spring'], answer: 0, explain: 'winter 冬天，Winter is cold. 冬天冷冰冰，穿暖和再出门。', tag: '季节词汇' },
    { id: 'ztg7-6', type: 'judge', q: '春天暖、夏天热、秋天凉、冬天冷。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'warm 暖、hot 热、cool 凉、cold 冷，四季温度各不同。', tag: '常识' },
    { id: 'ztg7-7', type: 'choice', q: '"I like spring." 的意思是：', options: ['我喜欢春天。', '我是春天。', '我在春天。', '春天来了。'], answer: 0, explain: 'I like... 我喜欢……，说说你最喜欢的季节吧！', tag: '句型' },
    { id: 'ztg7-8', type: 'choice', q: '按一年顺序排列正确的是：', options: ['spring → summer → autumn → winter', 'summer → spring → winter → autumn', 'winter → spring → autumn → summer', 'autumn → summer → spring → winter'], answer: 0, explain: '春夏秋冬轮流转，spring 后面是 summer。', tag: '常识' },
    { id: 'ztg7-9', type: 'choice', q: '冬天很冷，出门要：', options: ['穿上厚外套', '只穿短袖', '光脚跑', '不吃早饭'], answer: 0, explain: 'Winter is cold. 穿上厚衣服才不会着凉。', tag: '生活常识' },
    { id: 'ztg7-10', type: 'judge', q: '每个季节都有不同的好玩活动，比如春天放风筝、冬天堆雪人。', options: ['√ 对', '✗ 错'], answer: 0, explain: '四季活动真丰富，跟着季节玩，快乐一整年！', tag: '常识' },
  ],
  ztg8: [
    { id: 'ztg8-1', type: 'choice', q: '"weather" 的意思是：', options: ['天气', '季节', '水', '风'], answer: 0, explain: 'weather 天气，sunny、rainy 都是天气词。', tag: '词汇' },
    { id: 'ztg8-2', type: 'choice', q: '太阳当空照的"晴天"是：', options: ['sunny', 'rainy', 'cloudy', 'windy'], answer: 0, explain: 'sunny 晴朗的，sun 太阳 + ny，It is sunny. 今天是晴天。', tag: '天气词汇' },
    { id: 'ztg8-3', type: 'choice', q: '哗啦啦下雨的"雨天"是：', options: ['rainy', 'sunny', 'windy', 'cloudy'], answer: 0, explain: 'rainy 下雨的，下雨天记得带伞 umbrella。', tag: '天气词汇' },
    { id: 'ztg8-4', type: 'choice', q: '白云飘来飘去的"多云天"是：', options: ['cloudy', 'rainy', 'sunny', 'hot'], answer: 0, explain: 'cloudy 多云的，cloud 云朵，天上有好多云。', tag: '天气词汇' },
    { id: 'ztg8-5', type: 'choice', q: '风吹得呼呼响的"大风天"是：', options: ['windy', 'sunny', 'rainy', 'warm'], answer: 0, explain: 'windy 有风的，wind 风，风筝最爱大风天。', tag: '天气词汇' },
    { id: 'ztg8-6', type: 'judge', q: '"It is sunny." 的意思是"今天是晴天"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'It is + 天气词，可以描述今天的天气。', tag: '句型' },
    { id: 'ztg8-7', type: 'choice', q: '雨天出门要带：', options: ['umbrella 雨伞', 'kite 风筝', 'swim ring 泳圈', 'sunhat 太阳帽'], answer: 0, explain: 'It is rainy. 带上雨伞，就不怕淋湿啦。', tag: '生活常识' },
    { id: 'ztg8-8', type: 'choice', q: '想问"今天天气怎么样？"，可以说：', options: ['How is the weather?', 'What is your name?', 'How old are you?', 'Where is the cat?'], answer: 0, explain: 'How is the weather? 天气怎么样？回答 It is sunny. 等。', tag: '对话' },
    { id: 'ztg8-9', type: 'judge', q: '打雷下雨时，要待在安全的室内，不能站在大树下。', options: ['√ 对', '✗ 错'], answer: 0, explain: '雷雨天躲进屋里，大树底下很危险，安全第一！', tag: '安全常识' },
    { id: 'ztg8-10', type: 'choice', q: 'sunny、rainy、cloudy、windy 都属于：', options: ['weather words 天气词', 'food words 食物词', 'toy words 玩具词', 'animal words 动物词'], answer: 0, explain: '它们都是描述天气的词，归为 weather words 一类。', tag: '单词分类' },
  ],
  ztg9: [
    { id: 'ztg9-1', type: 'choice', q: '"clothes" 的意思是：', options: ['衣服', '食物', '玩具', '动物'], answer: 0, explain: 'clothes 衣服（复数形式），T 恤、裙子都属于 clothes。', tag: '词汇' },
    { id: 'ztg9-2', type: 'choice', q: '夏天常穿的"T 恤衫"是：', options: ['T-shirt', 'sweater', 'coat', 'scarf'], answer: 0, explain: 'T-shirt T 恤衫，像字母 T 的形状，夏天穿凉快。', tag: '服饰词汇' },
    { id: 'ztg9-3', type: 'choice', q: '女孩子爱穿的"连衣裙"是：', options: ['dress', 'shorts', 'T-shirt', 'shoes'], answer: 0, explain: 'dress 连衣裙，转个圈裙子会飞起来。', tag: '服饰词汇' },
    { id: 'ztg9-4', type: 'choice', q: '短短的"短裤"是：', options: ['shorts', 'dress', 'coat', 'sweater'], answer: 0, explain: 'shorts 短裤（常用复数），short 短 + s，夏天穿真凉快。', tag: '服饰词汇' },
    { id: 'ztg9-5', type: 'judge', q: '冬天冷，要穿厚厚的 sweater（毛衣）和 coat（外套）。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'sweater 毛衣、coat 外套，冬天穿暖和不怕冷。', tag: '常识' },
    { id: 'ztg9-6', type: 'choice', q: '"Put on your T-shirt." 的意思是：', options: ['穿上你的 T 恤', '脱下你的 T 恤', '洗洗你的 T 恤', '买一件 T 恤'], answer: 0, explain: 'put on 穿上，Put on your T-shirt. 把 T 恤穿上。', tag: '句型' },
    { id: 'ztg9-7', type: 'choice', q: '早晨自己穿衣服，可以说：', options: ['I can dress myself.', 'I can swim.', 'I can cook rice.', 'I can drive a car.'], answer: 0, explain: 'I can dress myself. 我会自己穿衣服，独立小达人！', tag: '句型' },
    { id: 'ztg9-8', type: 'judge', q: '衣服脏了要换洗，干净衣服香喷喷。', options: ['√ 对', '✗ 错'], answer: 0, explain: '勤换衣服讲卫生，人人夸你好宝宝。', tag: '卫生习惯' },
    { id: 'ztg9-9', type: 'choice', q: '下雨天最好穿：', options: ['raincoat 雨衣', 'T-shirt 短袖', 'swimsuit 泳衣', 'party dress 礼服'], answer: 0, explain: 'raincoat 雨衣，rain 雨 + coat 外套，下雨穿它不怕淋。', tag: '拓展' },
    { id: 'ztg9-10', type: 'choice', q: 'T-shirt、dress、shorts、coat 都属于：', options: ['clothes 衣服类', 'food 食物类', 'drinks 饮料类', 'animals 动物类'], answer: 0, explain: '能穿在身上的都归为 clothes 衣服类。', tag: '单词分类' },
  ],
  ztg10: [
    { id: 'ztg10-1', type: 'choice', q: '"activities" 的意思是：', options: ['活动', '食物', '颜色', '动物'], answer: 0, explain: 'activity 活动，activities 是它的复数，骑车跳绳都是活动。', tag: '词汇' },
    { id: 'ztg10-2', type: 'choice', q: '骑"自行车"的动作是：', options: ['ride', 'skip', 'fly', 'swim'], answer: 0, explain: 'ride 骑，Ride a bicycle. 骑自行车，扶好把手慢慢骑。', tag: '动词' },
    { id: 'ztg10-3', type: 'choice', q: '摇绳跳起来的"跳绳"是：', options: ['skip', 'ride', 'sleep', 'eat'], answer: 0, explain: 'skip 跳绳，Skip the rope. 摇摇绳跳一跳。', tag: '动词' },
    { id: 'ztg10-4', type: 'choice', q: '"I can skip." 的意思是：', options: ['我会跳绳。', '我会骑车。', '我会游泳。', '我会画画。'], answer: 0, explain: 'can 会、能，I can skip. 我会跳绳！', tag: '句型' },
    { id: 'ztg10-5', type: 'judge', q: '问别人会不会做某事，可以说 "Can you ride a bicycle?"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Can you...? 你会……吗？会就答 Yes, I can.', tag: '对话' },
    { id: 'ztg10-6', type: 'choice', q: '小伙伴问你会不会游泳，你不会，应该答：', options: ['No, I can\'t.', 'Yes, I can.', 'I am five.', 'Thank you.'], answer: 0, explain: '不会就大方地说 No, I can\'t.，诚实又可爱。', tag: '对话' },
    { id: 'ztg10-7', type: 'choice', q: '放风筝应该说：', options: ['fly a kite', 'fly a ball', 'fly a doll', 'fly a book'], answer: 0, explain: 'fly 放（风筝）/飞，fly a kite 放风筝，去公园的草地上玩。', tag: '动词短语' },
    { id: 'ztg10-8', type: 'judge', q: '运动前要做热身，活动开身体再玩。', options: ['√ 对', '✗ 错'], answer: 0, explain: '热身做一做，扭扭腰摆摆手，运动不容易受伤。', tag: '安全常识' },
    { id: 'ztg10-9', type: 'choice', q: '骑车时应该：', options: ['戴好头盔注意安全', '骑得越快越好', '单手骑车耍帅', '闭着眼睛骑'], answer: 0, explain: 'Ride safely! 戴头盔、慢速骑，安全永远排第一。', tag: '安全常识' },
    { id: 'ztg10-10', type: 'choice', q: '夸小伙伴跳绳跳得好，可以说：', options: ['You can skip very well!', 'You can\'t skip.', 'Skip is bad.', 'Go away!'], answer: 0, explain: 'You can skip very well! 你跳绳真棒！夸奖让友谊更甜。', tag: '表达' },
  ],
  ztg11: [
    { id: 'ztg11-1', type: 'choice', q: '"New Year\'s Day" 的意思是：', options: ['元旦、新年', '儿童节', '生日', '周末'], answer: 0, explain: "New Year's Day 新年（元旦），一月一日是新年的第一天。", tag: '节日词汇' },
    { id: 'ztg11-2', type: 'choice', q: '新年见面祝福的话是：', options: ['Happy New Year!', 'Happy birthday!', 'Good night!', 'Goodbye!'], answer: 0, explain: 'Happy New Year! 新年快乐！见面说祝福，喜气洋洋。', tag: '节日表达' },
    { id: 'ztg11-3', type: 'choice', q: '新年里可以送给朋友的"贺卡"是：', options: ['card', 'ball', 'banana', 'shoe'], answer: 0, explain: 'card 贺卡，a New Year card 一张新年贺卡，写上祝福送给你。', tag: '词汇' },
    { id: 'ztg11-4', type: 'choice', q: '"Here is a card for you." 的意思是：', options: ['这是给你的贺卡。', '这是我的贺卡。', '贺卡在哪？', '贺卡太贵了。'], answer: 0, explain: 'Here is... for you. 这是送给你的……，送礼时这样说。', tag: '句型' },
    { id: 'ztg11-5', type: 'judge', q: '收到新年礼物，要说 Thank you!。', options: ['√ 对', '✗ 错'], answer: 0, explain: '收到礼物道声谢，礼貌又开心。', tag: '礼貌用语' },
    { id: 'ztg11-6', type: 'choice', q: '新年钟声敲响，全家一起：', options: ['说 Happy New Year 互相祝福', '各自睡觉', '吵架', '不开灯'], answer: 0, explain: '新年互相祝福，说说新年愿望，全家乐融融。', tag: '文化常识' },
    { id: 'ztg11-7', type: 'choice', q: '"gift" 的意思是：', options: ['礼物', '衣服', '动物', '食物'], answer: 0, explain: 'gift 礼物，和 present 一样，都是"礼物"的意思。', tag: '词汇' },
    { id: 'ztg11-8', type: 'judge', q: '过年拿到的红包压岁钱，可以交给爸爸妈妈一起商量怎么用。', options: ['√ 对', '✗ 错'], answer: 0, explain: '压岁钱和爸爸妈妈一起规划，学着储蓄和分享。', tag: '成长规划' },
    { id: 'ztg11-9', type: 'choice', q: '新年愿望可以说：', options: ['I want to read more books.', 'I want to fight.', 'I want to cry.', 'I want to be late.'], answer: 0, explain: '说说新年新愿望：多读书、多运动，天天向上！', tag: '表达' },
    { id: 'ztg11-10', type: 'choice', q: '春节挂的红红的"灯笼"是：', options: ['lantern', 'ball', 'moon', 'star'], answer: 0, explain: 'lantern 灯笼，red lanterns 红灯笼，挂起来喜气洋洋。', tag: '拓展' },
  ],
  ztg12: [
    { id: 'ztg12-1', type: 'choice', q: '"Story time" 的意思是：', options: ['故事时间', '午餐时间', '睡觉时间', '游戏时间'], answer: 0, explain: 'story 故事，Story time 故事时间到，竖起耳朵听！', tag: '短语理解' },
    { id: 'ztg12-2', type: 'choice', q: '一学期里"我能看见什么"用英语问是：', options: ['What can you see?', 'What can you hear?', 'What do you like?', 'How are you?'], answer: 0, explain: 'What can you see? 你能看见什么？I can see... 来回答。', tag: '句型复习' },
    { id: 'ztg12-3', type: 'choice', q: '下面哪个是饮料 drink？', options: ['milk 牛奶', 'doll 洋娃娃', 'frog 青蛙', 'dress 连衣裙'], answer: 0, explain: 'milk 牛奶是饮料；娃娃是玩具，青蛙是动物，裙子是衣服。', tag: '单词分类' },
    { id: 'ztg12-4', type: 'choice', q: '春天 spring 的天气特点是：', options: ['warm 暖暖的', 'hot 热死了', 'cold 冷冰冰', '下大雪'], answer: 0, explain: 'Spring is warm. 春天暖洋洋，花儿都开了。', tag: '季节复习' },
    { id: 'ztg12-5', type: 'judge', q: '晴天是 sunny，雨天是 rainy。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'sunny 晴、rainy 雨、cloudy 多云、windy 有风，天气词要记牢。', tag: '天气复习' },
    { id: 'ztg12-6', type: 'choice', q: '新年见到奶奶，送上祝福：', options: ['Happy New Year, Grandma!', 'Good night, Grandma!', 'Bye-bye, Grandma!', 'Sorry, Grandma!'], answer: 0, explain: 'Happy New Year! 加上称呼更有礼貌，奶奶笑开花。', tag: '情景' },
    { id: 'ztg12-7', type: 'choice', q: '"I like my kite." 的意思是：', options: ['我喜欢我的风筝。', '我会放风筝。', '风筝在天上。', '风筝坏了。'], answer: 0, explain: 'I like... 我喜欢……，like 后面跟喜欢的东西。', tag: '句型复习' },
    { id: 'ztg12-8', type: 'choice', q: '听故事时要：', options: ['安静认真听', '大声吵闹', '跑来跑去', '抢着说话'], answer: 0, explain: 'Story time 安静听，听完还能讲给爸爸妈妈听。', tag: '学习习惯' },
    { id: 'ztg12-9', type: 'judge', q: '睡前听个英语小故事，边听边学真开心。', options: ['√ 对', '✗ 错'], answer: 0, explain: '睡前故事是学英语的好时光，坚持下去收获大。', tag: '学习习惯' },
    { id: 'ztg12-10', type: 'choice', q: '一年级下学期结束了，对自己的努力说：', options: ['Great job! 我真棒', 'I am tired. 我累了', 'Go away! 走开', 'I don\'t know. 我不知道'], answer: 0, explain: 'Great job! 这学期学了这么多单词句子，给自己点个大大的赞！', tag: '表达' },
  ],
}
