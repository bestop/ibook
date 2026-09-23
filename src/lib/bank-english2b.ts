// 沪教版（五四学制·牛津上海版）英语 二年级下册（现行版目录）随堂知识点题库
// 教材：九年义务教育课本 英语（牛津上海版）二年级下册 · 上海教育出版社
// 目录（电子课本网 / 教师之家 牛津上海课标版全书目录核对）：
//   Module 1 Using my five senses: Unit 1 What can you see? / Unit 2 Touch and feel / Unit 3 What can you hear?
//   Module 2 My favourite things: Unit 1 Things I like doing / Unit 2 My favourite food / Unit 3 Animals I like
//   Module 3 Things around us: Unit 1 The four seasons / Unit 2 Rules / Unit 3 My clothes
//   Module 4 More things to learn: Unit 1 Activities / Unit 2 Mother's Day / Unit 3 Story time
// 每单元一关，每关 10 题，共 12 关 120 题，题目 id 前缀 zth

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
    id: 'zth1',
    name: 'Unit 1',
    title: 'What can you see?',
    emoji: '🌳',
    color: 'lime',
    lessons: ['Module 1: Using my five senses', 'In the park', 'I can see...'],
    intro: '公园里有什么？大树、小花、小鸟……你能看见几种？',
  },
  {
    id: 'zth2',
    name: 'Unit 2',
    title: 'Touch and feel',
    emoji: '🤲',
    color: 'orange',
    lessons: ['Module 1: Using my five senses', 'hard / soft', 'rough / smooth'],
    intro: '摸一摸：苹果硬硬的，枕头软软的，小手就是探测仪！',
  },
  {
    id: 'zth3',
    name: 'Unit 3',
    title: 'What can you hear?',
    emoji: '🚌',
    color: 'sky',
    lessons: ['Module 1: Using my five senses', 'bus / car', 'ship / train'],
    intro: '马路上嘀嘀叭叭，听一听是什么车在响？',
  },
  {
    id: 'zth4',
    name: 'Unit 4',
    title: 'Things I like doing',
    emoji: '🎵',
    color: 'pink',
    lessons: ['Module 2: My favourite things', 'singing / dancing', 'I like doing...'],
    intro: '唱歌、跳舞、画画……我喜欢的事情说出来！',
  },
  {
    id: 'zth5',
    name: 'Unit 5',
    title: 'My favourite food',
    emoji: '🍜',
    color: 'amber',
    lessons: ['Module 2: My favourite things', 'noodles / rice', 'I like...'],
    intro: '香喷喷的饭菜上桌啦，你最喜欢的食物是什么？',
  },
  {
    id: 'zth6',
    name: 'Unit 6',
    title: 'Animals I like',
    emoji: '🐼',
    color: 'emerald',
    lessons: ['Module 2: My favourite things', 'panda / lion', 'elephant / monkey'],
    intro: '熊猫、狮子、大象……动物王国大点名！',
  },
  {
    id: 'zth7',
    name: 'Unit 7',
    title: 'The four seasons',
    emoji: '🍂',
    color: 'rose',
    lessons: ['Module 3: Things around us', 'Spring is warm.', 'hot / cool / cold'],
    intro: '春夏秋冬说变化：春暖、夏热、秋凉、冬冷！',
  },
  {
    id: 'zth8',
    name: 'Unit 8',
    title: 'Rules',
    emoji: '🚦',
    color: 'red',
    lessons: ['Module 3: Things around us', 'traffic lights', 'Stop! / Go! / Wait!'],
    intro: '红灯停、绿灯行，规则记心间，安全又文明！',
  },
  {
    id: 'zth9',
    name: 'Unit 9',
    title: 'My clothes',
    emoji: '🧥',
    color: 'violet',
    lessons: ['Module 3: Things around us', 'shirt / sweater', 'coat / hat'],
    intro: '衬衫、毛衣、小帽子，我的衣服我会说！',
  },
  {
    id: 'zth10',
    name: 'Unit 10',
    title: 'Activities',
    emoji: '⚽',
    color: 'cyan',
    lessons: ['Module 4: More things to learn', 'play football', 'fly a kite'],
    intro: '踢足球、放风筝、骑单车，活动多多快乐多多！',
  },
  {
    id: 'zth11',
    name: 'Unit 11',
    title: "Mother's Day",
    emoji: '💐',
    color: 'fuchsia',
    lessons: ['Module 4: More things to learn', 'a card for Mum', 'I love you, Mum.'],
    intro: '母亲节到啦，做张贺卡送妈妈，说声 I love you!',
  },
  {
    id: 'zth12',
    name: 'Unit 12',
    title: 'Story time',
    emoji: '📚',
    color: 'teal',
    lessons: ['Module 4: More things to learn', 'Listen and enjoy', 'Review of the book'],
    intro: '故事里藏着大智慧，复习本学期单词句子，通关大挑战！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zth1: [
    { id: 'zth1-1', type: 'choice', q: '"What can you see?" 的意思是：', options: ['你能看见什么？', '你能听见什么？', '你想要什么？', '你在哪里？'], answer: 0, explain: 'see 看见，What can you see? 用 I can see... 回答。', tag: '句型' },
    { id: 'zth1-2', type: 'choice', q: '高高的、有绿叶子会结果的"大树"是：', options: ['tree', 'flower', 'bird', 'rabbit'], answer: 0, explain: 'tree 大树，tree 里藏着 three（三），别认错哦。', tag: '词汇' },
    { id: 'zth1-3', type: 'choice', q: '公园里五颜六色的"花"是：', options: ['flower', 'tree', 'grass', 'bee'], answer: 0, explain: 'flower 花，f-l-o-w-e-r，公园里的花不要摘。', tag: '词汇' },
    { id: 'zth1-4', type: 'choice', q: '在树枝上唱歌的"小鸟"是：', options: ['bird', 'bee', 'fish', 'hen'], answer: 0, explain: 'bird 小鸟，I can see a bird. 我能看见一只小鸟。', tag: '词汇' },
    { id: 'zth1-5', type: 'judge', q: '"I can see two rabbits." 的意思是"我能看见两只兔子"。', options: ['√ 对', '✗ 错'], answer: 0, explain: '两只以上要用复数：two rabbits，rabbit 后面加 s。', tag: '句型' },
    { id: 'zth1-6', type: 'choice', q: '看见蝴蝶飞过，你想说"我能看见一只蝴蝶"，是：', options: ['I can see a butterfly.', 'I can hear a butterfly.', 'I can touch a butterfly.', 'I can eat a butterfly.'], answer: 0, explain: '看见用 see，butterfly 蝴蝶，花丛里的舞蹈家。', tag: '情景' },
    { id: 'zth1-7', type: 'judge', q: '公园里看到漂亮的花，可以摘回家。', options: ['√ 对', '✗ 错'], answer: 1, explain: '花草是大家的，摘花不文明，用眼睛欣赏就好。', tag: '品德' },
    { id: 'zth1-8', type: 'choice', q: '绿色的小草是：', options: ['grass', 'tree', 'flower', 'leaf'], answer: 0, explain: 'grass 草，小草青青，脚下留情不要踩。', tag: '词汇' },
    { id: 'zth1-9', type: 'choice', q: '下面哪种东西在天上飞？', options: ['kite 和 bird', 'bus 和 car', 'fish 和 duck', 'tree 和 flower'], answer: 0, explain: 'kite 风筝和 bird 小鸟都在天上飞，bus 汽车在地上跑。', tag: '常识' },
    { id: 'zth1-10', type: 'judge', q: '用眼睛看是 see，用耳朵听是 hear，不能混用。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'see 用眼看，hear 用耳听，五感单词要分清。', tag: '辨析' },
  ],
  zth2: [
    { id: 'zth2-1', type: 'choice', q: '"Touch and feel" 的意思是：', options: ['摸一摸，感受一下', '看一看', '听一听', '闻一闻'], answer: 0, explain: 'touch 摸、feel 感觉，小手摸一摸，软硬都知道。', tag: '短语理解' },
    { id: 'zth2-2', type: 'choice', q: '石头摸上去"硬硬的"，硬是：', options: ['hard', 'soft', 'rough', 'smooth'], answer: 0, explain: 'hard 硬的，The stone is hard. 石头硬邦邦。', tag: '触感词汇' },
    { id: 'zth2-3', type: 'choice', q: '枕头摸上去"软软的"，软是：', options: ['soft', 'hard', 'sharp', 'cold'], answer: 0, explain: 'soft 软的，The pillow is soft. 枕头软绵绵。', tag: '触感词汇' },
    { id: 'zth2-4', type: 'choice', q: '菠萝皮摸上去"粗糙的"，粗糙是：', options: ['rough', 'smooth', 'soft', 'sweet'], answer: 0, explain: 'rough 粗糙的，菠萝皮坑坑洼洼摸起来粗粗的。', tag: '触感词汇' },
    { id: 'zth2-5', type: 'choice', q: '玻璃球摸上去"光滑的"，光滑是：', options: ['smooth', 'rough', 'hard', 'warm'], answer: 0, explain: 'smooth 光滑的，玻璃球滑溜溜，摸起来很舒服。', tag: '触感词汇' },
    { id: 'zth2-6', type: 'judge', q: '"The apple is hard." 的意思是"苹果是软的"。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'hard 是硬，不是软！苹果摸起来是硬硬的。', tag: '辨析' },
    { id: 'zth2-7', type: 'choice', q: '问"它摸起来是软的吗？"，说：', options: ['Is it soft?', 'Is it red?', 'Can you fly?', 'Do you like it?'], answer: 0, explain: 'Is it soft? 它软吗？回答 Yes, it is. / No, it isn\'t.', tag: '句型' },
    { id: 'zth2-8', type: 'choice', q: '摸一摸下面的东西，哪个是软的？', options: ['toy bear 毛绒玩具熊', 'stone 石头', 'desk 桌子', 'iron 铁锅'], answer: 0, explain: '毛绒玩具软绵绵；石头、桌子硬邦邦。', tag: '常识' },
    { id: 'zth2-9', type: 'judge', q: '小刀的刃很锋利，摸的时候要特别小心，最好让大人帮忙。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'sharp 锋利的东西会伤手，小朋友不要随便摸。', tag: '安全常识' },
    { id: 'zth2-10', type: 'choice', q: '闭眼摸出水果游戏里，你摸到一个光滑、硬硬、圆圆的，可能是：', options: ['apple 苹果', 'pineapple 菠萝皮', 'pillow 枕头', 'bread 面包'], answer: 0, explain: '苹果光滑又硬实；菠萝皮粗糙，枕头软软的。', tag: '情景' },
  ],
  zth3: [
    { id: 'zth3-1', type: 'choice', q: '"What can you hear?" 的意思是：', options: ['你能听见什么？', '你能看见什么？', '你能摸到什么？', '你想去哪里？'], answer: 0, explain: 'hear 听见，What can you hear? 用 I can hear... 回答。', tag: '句型' },
    { id: 'zth3-2', type: 'choice', q: '载着好多人的大公共汽车是：', options: ['bus', 'car', 'ship', 'train'], answer: 0, explain: 'bus 公共汽车，嘀嘀叭叭，大家坐公交要排队。', tag: '交通词汇' },
    { id: 'zth3-3', type: 'choice', q: '家里的小轿车是：', options: ['car', 'bus', 'train', 'bike'], answer: 0, explain: 'car 小汽车，坐车要系好安全带 seat belt。', tag: '交通词汇' },
    { id: 'zth3-4', type: 'choice', q: '呜——在铁轨上跑的长火车是：', options: ['train', 'bus', 'car', 'ship'], answer: 0, explain: 'train 火车，一节一节车厢连起来，呜呜跑得快。', tag: '交通词汇' },
    { id: 'zth3-5', type: 'choice', q: '在海里开的"轮船"是：', options: ['ship', 'train', 'bus', 'car'], answer: 0, explain: 'ship 轮船，大海里呜呜开，运人运货本领大。', tag: '交通词汇' },
    { id: 'zth3-6', type: 'judge', q: '"I can hear a train." 的意思是"我听见火车的声音"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I can hear... 我听见……，火车呜呜开过来啦。', tag: '句型' },
    { id: 'zth3-7', type: 'choice', q: '过马路时听到汽车喇叭声，你应该：', options: ['停下等一等，看清再走', '快跑过去', '捂住眼睛', '闭着眼走'], answer: 0, explain: '听到车声停下来，左看右看再通过，安全最重要。', tag: '安全常识' },
    { id: 'zth3-8', type: 'choice', q: '在图书馆里应该：', options: ['保持安静小声说', '大声唱歌', '追来追去', '用力关门'], answer: 0, explain: '图书馆要安静，大声吵闹会影响别人看书。', tag: '品德' },
    { id: 'zth3-9', type: 'judge', q: '在公交车上大声唱歌、跑来跑去也没关系。', options: ['√ 对', '✗ 错'], answer: 1, explain: '公交车上要坐稳扶好、小声说话；听到报站要提前到后门准备好下车。', tag: '生活常识' },
    { id: 'zth3-10', type: 'choice', q: 'bus、car、ship、train 都属于：', options: ['交通工具 vehicles', 'animals 动物', 'food 食物', 'toys 玩具'], answer: 0, explain: '它们都是交通工具，can you hear 能听到它们的声音。', tag: '单词分类' },
  ],
  zth4: [
    { id: 'zth4-1', type: 'choice', q: '"Things I like doing" 的意思是：', options: ['我喜欢做的事情', '我喜欢的食物', '我喜欢的动物', '我喜欢的衣服'], answer: 0, explain: 'like doing 喜欢做某事，Things I like doing 我爱做的事。', tag: '短语理解' },
    { id: 'zth4-2', type: 'choice', q: '张开嘴巴唱动听的"唱歌"是：', options: ['singing', 'dancing', 'running', 'sleeping'], answer: 0, explain: 'sing 唱歌，I like singing. 我喜欢唱歌。', tag: '动词' },
    { id: 'zth4-3', type: 'choice', q: '跟着音乐转圈圈的"跳舞"是：', options: ['dancing', 'reading', 'swimming', 'jumping'], answer: 0, explain: 'dance 跳舞，I like dancing. 我喜欢跳舞。', tag: '动词' },
    { id: 'zth4-4', type: 'choice', q: '在泳池里扑腾的"游泳"是：', options: ['swimming', 'singing', 'drawing', 'cooking'], answer: 0, explain: 'swim 游泳，双写 m 加 ing：swimming。', tag: '动词' },
    { id: 'zth4-5', type: 'choice', q: '"I like reading and singing." 的意思是：', options: ['我喜欢读书和唱歌。', '我喜欢读书或唱歌。', '我在读书和唱歌。', '我不喜欢读书和唱歌。'], answer: 0, explain: 'like doing 表示喜欢做某事，and 把两件喜欢的事连起来：喜欢读书，也喜欢唱歌。', tag: '句型' },
    { id: 'zth4-6', type: 'judge', q: '说"我喜欢画画"，应该说 I like drawing。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'draw 画画 → I like drawing. 我喜欢画画。', tag: '句型' },
    { id: 'zth4-7', type: 'choice', q: '问同学喜欢做什么，可以说：', options: ['What do you like doing?', 'What is your name?', 'How old are you?', 'Where is your bag?'], answer: 0, explain: 'What do you like doing? 你喜欢做什么？', tag: '对话' },
    { id: 'zth4-8', type: 'choice', q: '回答"我喜欢跑步"，说：', options: ['I like running.', 'I like runing.', 'I like runs.', 'I like run.'], answer: 0, explain: 'run 要双写 n 再加 ing：running，小尾巴别写错。', tag: '语法' },
    { id: 'zth4-9', type: 'judge', q: '每个人喜欢的事情不一样，要互相尊重。', options: ['√ 对', '✗ 错'], answer: 0, explain: '你爱唱歌我爱画画，互相欣赏，朋友更多。', tag: '品德' },
    { id: 'zth4-10', type: 'choice', q: '下面哪句是问"你会游泳吗？"：', options: ['Can you swim?', 'Do you like swimming?', 'I can swim.', 'Swimming is fun.'], answer: 0, explain: 'Can you...? 问会不会；Do you like...? 问喜不喜欢。', tag: '辨析' },
  ],
  zth5: [
    { id: 'zth5-1', type: 'choice', q: '"My favourite food" 的意思是：', options: ['我最喜欢的食物', '我最喜欢的饮料', '我最喜欢的动物', '我最喜欢的颜色'], answer: 0, explain: 'favourite 最喜欢的，My favourite food 我最爱的美食。', tag: '短语理解' },
    { id: 'zth5-2', type: 'choice', q: '长长的、要用筷子夹的"面条"是：', options: ['noodles', 'rice', 'fish', 'egg'], answer: 0, explain: 'noodles 面条（常用复数），吸溜吸溜真好吃。', tag: '食物词汇' },
    { id: 'zth5-3', type: 'choice', q: '"I like fish." 的意思是：', options: ['我喜欢吃鱼。', '我喜欢钓鱼。', '鱼喜欢我。', '我在吃鱼。'], answer: 0, explain: 'I like + 食物，表示喜欢吃什么。', tag: '句型' },
    { id: 'zth5-4', type: 'choice', q: '咕咕叫着"鸡肉"是：', options: ['chicken', 'fish', 'noodles', 'rice'], answer: 0, explain: 'chicken 鸡肉（也指小鸡），多吃鸡肉长肌肉。', tag: '食物词汇' },
    { id: 'zth5-5', type: 'choice', q: '白白的、一碗一碗盛的"米饭"是：', options: ['rice', 'noodles', 'soup', 'egg'], answer: 0, explain: 'rice 米饭，粒粒皆辛苦，不剩饭不浪费。', tag: '食物词汇' },
    { id: 'zth5-6', type: 'judge', q: '挑食的孩子只吃肉不吃菜，营养会不均衡。', options: ['√ 对', '✗ 错'], answer: 0, explain: '肉菜蛋果都要吃，不挑食身体才棒棒。', tag: '健康习惯' },
    { id: 'zth5-7', type: 'choice', q: '问别人"你最喜欢的食物是什么？"，说：', options: ['What is your favourite food?', 'What is your name?', 'Where is the food?', 'How is the weather?'], answer: 0, explain: 'What is your favourite food? 用 My favourite food is... 回答。', tag: '对话' },
    { id: 'zth5-8', type: 'choice', q: '吃饭时应该：', options: ['细嚼慢咽不说话', '边跑边吃', '抢别人碗里的菜', '把饭撒一地'], answer: 0, explain: '细嚼慢咽好消化，餐桌礼仪要记牢。', tag: '习惯养成' },
    { id: 'zth5-9', type: 'judge', q: '鸡蛋 egg 有丰富的营养，每天吃一个很好。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'egg 营养多多，早餐一个蛋，学习更有劲。', tag: '健康常识' },
    { id: 'zth5-10', type: 'choice', q: '把"我喜欢面条和鱼"说成英语是：', options: ['I like noodles and fish.', 'I like noodles or fish not.', 'I like fish noodle.', 'Me like eat noodle fish.'], answer: 0, explain: 'I like A and B. 用 and 把两种食物连起来。', tag: '句型' },
  ],
  zth6: [
    { id: 'zth6-1', type: 'choice', q: '"Animals I like" 的意思是：', options: ['我喜欢的动物', '我喜欢的食物', '我做的动作', '我的衣服'], answer: 0, explain: 'animal 动物，Animals I like 就是我喜欢的动物。', tag: '短语理解' },
    { id: 'zth6-2', type: 'choice', q: '黑眼圈、吃竹子的"熊猫"是：', options: ['panda', 'lion', 'tiger', 'monkey'], answer: 0, explain: 'panda 熊猫，我们的国宝，I like pandas. 我喜欢熊猫。', tag: '动物词汇' },
    { id: 'zth6-3', type: 'choice', q: '森林之王、吼声震天的"狮子"是：', options: ['lion', 'panda', 'rabbit', 'hen'], answer: 0, explain: 'lion 狮子，一头浓密的鬃毛，威风凛凛。', tag: '动物词汇' },
    { id: 'zth6-4', type: 'choice', q: '长鼻子、大耳朵的"大象"是：', options: ['elephant', 'monkey', 'panda', 'bird'], answer: 0, explain: 'elephant 大象，长鼻子会喷水，耳朵像大扇子。', tag: '动物词汇' },
    { id: 'zth6-5', type: 'choice', q: '爬树荡秋千最拿手的"猴子"是：', options: ['monkey', 'elephant', 'lion', 'fish'], answer: 0, explain: 'monkey 猴子，爬树高手，爱吃香蕉和桃子。', tag: '动物词汇' },
    { id: 'zth6-6', type: 'judge', q: '动物园里要安静观看，不投喂、不拍打玻璃。', options: ['√ 对', '✗ 错'], answer: 0, explain: '动物有自己的饮食和作息，文明观看不打扰。', tag: '品德' },
    { id: 'zth6-7', type: 'choice', q: '说"我喜欢熊猫"，正确的是：', options: ['I like pandas.', 'I like panda.', 'I like a pandas.', 'Me like pandas.'], answer: 0, explain: '喜欢一类动物用复数：I like pandas. 我喜欢熊猫。', tag: '语法' },
    { id: 'zth6-8', type: 'choice', q: '问"你喜欢什么动物？"，说：', options: ['What animals do you like?', 'What food do you like?', 'Can you see animals?', 'Where are animals?'], answer: 0, explain: 'What animals do you like? 用 I like... 回答。', tag: '对话' },
    { id: 'zth6-9', type: 'choice', q: '身上有黑白条纹、像老虎但更大的是"老虎" tiger，下面关于 tiger 正确的是：', options: ['tiger 是凶猛的大猫科动物', 'tiger 吃竹子', 'tiger 会飞', 'tiger 生活在水里'], answer: 0, explain: 'tiger 老虎，森林里的猛兽，条纹是它的隐身衣。', tag: '常识' },
    { id: 'zth6-10', type: 'judge', q: 'panda、lion、elephant、monkey 都是 animals。', options: ['√ 对', '✗ 错'], answer: 0, explain: '它们都是动物大家庭的成员。', tag: '单词分类' },
  ],
  zth7: [
    { id: 'zth7-1', type: 'choice', q: '"The four seasons" 的意思是：', options: ['四个季节', '四种食物', '四种颜色', '四件衣服'], answer: 0, explain: 'season 季节，the four seasons 春夏秋冬四季。', tag: '短语理解' },
    { id: 'zth7-2', type: 'choice', q: '"Spring is warm." 的意思是：', options: ['春天是温暖的。', '春天是炎热的。', '春天是寒冷的。', '春天下雨了。'], answer: 0, explain: 'warm 温暖的，Spring is warm. 春天暖洋洋。', tag: '句型' },
    { id: 'zth7-3', type: 'choice', q: '夏天 hot 的意思是：', options: ['热的', '暖的', '凉的', '冷的'], answer: 0, explain: 'Summer is hot. 夏天热乎乎，记得多喝水。', tag: '形容词' },
    { id: 'zth7-4', type: 'choice', q: '秋天凉凉的很舒服，"凉爽的"是：', options: ['cool', 'cold', 'hot', 'warm'], answer: 0, explain: 'cool 凉爽的，Autumn is cool. 秋高气爽真舒服。', tag: '形容词' },
    { id: 'zth7-5', type: 'choice', q: '冬天冷冰冰，"寒冷的"是：', options: ['cold', 'cool', 'warm', 'hot'], answer: 0, explain: 'cold 寒冷的，Winter is cold. 注意保暖别感冒。', tag: '形容词' },
    { id: 'zth7-6', type: 'judge', q: 'warm 比 hot 凉一些，cool 比 cold 暖一些。', options: ['√ 对', '✗ 错'], answer: 0, explain: '温度从高到低：hot > warm > cool > cold。', tag: '辨析' },
    { id: 'zth7-7', type: 'choice', q: '"Which season do you like?" 问的是：', options: ['你喜欢哪个季节？', '你喜欢什么颜色？', '现在几点？', '今天几号？'], answer: 0, explain: 'Which season...? 哪个季节，回答 I like spring. 等。', tag: '句型' },
    { id: 'zth7-8', type: 'choice', q: '堆雪人、打雪仗是在：', options: ['winter 冬天', 'summer 夏天', 'spring 春天', 'autumn 秋天'], answer: 0, explain: '冬天冷会下雪，堆雪人打雪仗，帽子手套不能少。', tag: '常识' },
    { id: 'zth7-9', type: 'choice', q: '夏天很热，我们要：', options: ['多喝水、少暴晒', '穿棉袄', '不开窗', '不吃水果'], answer: 0, explain: '夏天防暑降温，多喝水勤洗脸，中午别在太阳下玩太久。', tag: '生活常识' },
    { id: 'zth7-10', type: 'judge', q: '"Winter is hot." 这句话说得对。', options: ['√ 对', '✗ 错'], answer: 1, explain: '冬天是寒冷的：Winter is cold. hot 是夏天的天气。', tag: '句型复习' },
  ],
  zth8: [
    { id: 'zth8-1', type: 'choice', q: '"Rules" 的意思是：', options: ['规则', '食物', '游戏', '颜色'], answer: 0, explain: 'rule 规则，Rules 规则要遵守，生活才安全有序。', tag: '词汇' },
    { id: 'zth8-2', type: 'choice', q: '"traffic lights" 的意思是：', options: ['交通信号灯', '交通工具', '汽车站', '斑马线'], answer: 0, explain: 'traffic lights 红绿灯，红灯停绿灯行，黄灯亮了等一等。', tag: '词汇' },
    { id: 'zth8-3', type: 'choice', q: '红灯亮了，你要：', options: ['Stop! 停下来等', 'Go! 快跑过去', '慢慢走过去', '原地跳舞'], answer: 0, explain: 'Red light, stop! 红灯停，等绿灯亮了再走。', tag: '安全常识' },
    { id: 'zth8-4', type: 'choice', q: '绿灯亮了，可以：', options: ['Go! 走了', 'Stop! 停下', 'Sleep! 睡觉', 'Cry! 哭鼻子'], answer: 0, explain: 'Green light, go! 绿灯行，也要左右看看再走。', tag: '安全常识' },
    { id: 'zth8-5', type: 'choice', q: '黄灯亮了，应该：', options: ['Wait! 等一等', '冲过去', '倒着走', '站在路中间玩'], answer: 0, explain: 'Yellow light, wait! 黄灯等一等，不争不抢才安全。', tag: '安全常识' },
    { id: 'zth8-6', type: 'judge', q: '过马路要走斑马线，还要先左看右看。', options: ['√ 对', '✗ 错'], answer: 0, explain: '斑马线是安全线，左看右看再通行。', tag: '安全常识' },
    { id: 'zth8-7', type: 'choice', q: '在公园草坪上，看到牌子 "Keep off the grass"，意思是：', options: ['请勿踩踏草坪', '可以在草地上跑', '可以摘花', '草地关闭'], answer: 0, explain: 'Keep off the grass. 不要踩草地，小草也要睡觉长大。', tag: '标识理解' },
    { id: 'zth8-8', type: 'choice', q: '看到 "No swimming!" 的牌子，意思是：', options: ['禁止游泳', '欢迎游泳', '游泳比赛', '游泳课'], answer: 0, explain: 'No + doing 表示禁止：No swimming! 禁止游泳，河边危险。', tag: '标识理解' },
    { id: 'zth8-9', type: 'judge', q: '排队时不推不挤，一个跟着一个走。', options: ['√ 对', '✗ 错'], answer: 0, explain: '排队讲规则，不推不挤，人人都安全。', tag: '品德' },
    { id: 'zth8-10', type: 'choice', q: 'Stop、Go、Wait 三个词排序，红灯对应：', options: ['Stop', 'Go', 'Wait', 'Sleep'], answer: 0, explain: '红灯 Stop 停、绿灯 Go 行、黄灯 Wait 等。', tag: '常识' },
  ],
  zth9: [
    { id: 'zth9-1', type: 'choice', q: '"My clothes" 的意思是：', options: ['我的衣服', '我的食物', '我的动物', '我的书包'], answer: 0, explain: 'clothes 衣服，My clothes 我的衣物，穿上真精神。', tag: '短语理解' },
    { id: 'zth9-2', type: 'choice', q: '有领子和扣子的"衬衫"是：', options: ['shirt', 'sweater', 'coat', 'hat'], answer: 0, explain: 'shirt 衬衫，T-shirt 是 T 恤，多一个 T 少一个领。', tag: '服饰词汇' },
    { id: 'zth9-3', type: 'choice', q: '冬天穿的毛绒绒的"毛衣"是：', options: ['sweater', 'shirt', 'hat', 'shoes'], answer: 0, explain: 'sweater 毛衣，sweat 汗水 + er，保暖法宝。', tag: '服饰词汇' },
    { id: 'zth9-4', type: 'choice', q: '出门挡风的"外套"是：', options: ['coat', 'shirt', 'skirt', 'sock'], answer: 0, explain: 'coat 外套，天冷加件外套，风再大也不怕。', tag: '服饰词汇' },
    { id: 'zth9-5', type: 'choice', q: '戴在头上的"帽子"是：', options: ['hat', 'coat', 'shirt', 'shoe'], answer: 0, explain: 'hat 帽子，大太阳戴帽子，防晒又帅气。', tag: '服饰词汇' },
    { id: 'zth9-6', type: 'judge', q: '"This is my coat." 的意思是"这是我的外套"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'This is my... 这是我的……，介绍自己的衣物。', tag: '句型' },
    { id: 'zth9-7', type: 'choice', q: '冷的时候要：', options: ['put on a sweater 穿上毛衣', 'take off the coat 脱掉外套', '只穿 T 恤', '光脚走路'], answer: 0, explain: 'put on 穿上，天冷加衣；take off 是脱下。', tag: '句型' },
    { id: 'zth9-8', type: 'choice', q: '脱掉湿鞋子应该说：', options: ['Take off your wet shoes.', 'Put on your wet shoes.', 'Wash your wet shoes.', 'Buy wet shoes.'], answer: 0, explain: 'take off 脱下，湿鞋子脱下来，换上干爽的袜子。', tag: '句型' },
    { id: 'zth9-9', type: 'judge', q: '自己的衣服自己叠，衣柜整齐好找。', options: ['√ 对', '✗ 错'], answer: 0, explain: '叠衣服是生活小本领，自己动手最能干。', tag: '习惯养成' },
    { id: 'zth9-10', type: 'choice', q: 'shirt、sweater、coat、hat 都属于：', options: ['clothes 衣服类', 'food 食物类', 'animals 动物类', 'vehicles 交通类'], answer: 0, explain: '穿在身上的都是 clothes。', tag: '单词分类' },
  ],
  zth10: [
    { id: 'zth10-1', type: 'choice', q: '"play sports" 的意思是：', options: ['做运动', '做游戏', '做作业', '做早操'], answer: 0, explain: 'sport 运动，play sports 就是做运动、参加体育活动。运动让身体棒棒！', tag: '动词短语' },
    { id: 'zth10-2', type: 'choice', q: '用手拍着玩的"篮球"是：', options: ['basketball', 'football', 'ping-pong', 'kite'], answer: 0, explain: 'basketball 篮球，basket 篮子 + ball 球，投进篮筐得分！', tag: '运动词汇' },
    { id: 'zth10-3', type: 'choice', q: '"fly a kite" 的意思是：', options: ['放风筝', '扔皮球', '踢毽子', '荡秋千'], answer: 0, explain: 'fly a kite 放风筝，选空旷的场地，注意安全。', tag: '动词短语' },
    { id: 'zth10-4', type: 'choice', q: '"Can you ride a bicycle?" 的意思是：', options: ['你会骑自行车吗？', '你会开汽车吗？', '你有自行车吗？', '自行车是你的吗？'], answer: 0, explain: 'Can you ride a bicycle? 回答 Yes, I can. 会 / No, I can\'t. 不会。', tag: '句型' },
    { id: 'zth10-5', type: 'judge', q: '运动后满身汗，不要马上吹空调喝冰水。', options: ['√ 对', '✗ 错'], answer: 0, explain: '先擦擦汗、歇一歇，小口喝温水，身体才舒服。', tag: '健康常识' },
    { id: 'zth10-6', type: 'choice', q: '踢足球时应该：', options: ['遵守规则不推人', '故意绊倒别人', '抱着球跑', '用手打人'], answer: 0, explain: '比赛讲规则，友谊第一，比赛第二。', tag: '品德' },
    { id: 'zth10-7', type: 'choice', q: '运动前要做的事情是：', options: ['warm up 热身', '大吃一顿', '喝冰可乐', '不穿运动鞋'], answer: 0, explain: 'warm up 热身，把身体活动开，运动不受伤。', tag: '安全常识' },
    { id: 'zth10-8', type: 'choice', q: '"Let\'s play ping-pong!" 的意思是：', options: ['我们一起打乒乓球吧！', '我们一起睡觉吧！', '我们一起吃饭吧！', '我们一起读书吧！'], answer: 0, explain: "Let's... 让我们……，邀请小伙伴一起来运动。", tag: '句型' },
    { id: 'zth10-9', type: 'judge', q: '每天运动一小时，身体棒棒心情好。', options: ['√ 对', '✗ 错'], answer: 0, explain: '运动让身体强壮，还能让心情变阳光。', tag: '健康常识' },
    { id: 'zth10-10', type: 'choice', q: 'football、basketball、ping-pong 都是：', options: ['sports 运动', 'drinks 饮料', 'clothes 衣服', 'subjects 科目'], answer: 0, explain: '它们都是体育运动，运动使我们更健康。', tag: '单词分类' },
  ],
  zth11: [
    { id: 'zth11-1', type: 'choice', q: '"Mother\'s Day" 的意思是：', options: ['母亲节', '儿童节', '新年', '生日'], answer: 0, explain: "Mother's Day 母亲节，五月的第二个星期日，向妈妈表达爱。", tag: '节日词汇' },
    { id: 'zth11-2', type: 'choice', q: '对妈妈表达爱，可以说：', options: ['I love you, Mum!', 'Go away, Mum!', 'Give me money!', 'I don\'t know you.'], answer: 0, explain: 'I love you, Mum! 妈妈，我爱你！大声说出来吧。', tag: '表达' },
    { id: 'zth11-3', type: 'choice', q: '母亲节可以送给妈妈的"康乃馨花"是：', options: ['flower', 'fish', 'ball', 'book'], answer: 0, explain: 'flower 花，送妈妈一朵花，妈妈笑开花。', tag: '词汇' },
    { id: 'zth11-4', type: 'choice', q: '"Here is a card for you, Mum." 的意思是：', options: ['妈妈，这是送给您的贺卡。', '妈妈，卡片在哪里？', '妈妈，卡片坏了。', '妈妈，我不想要卡片。'], answer: 0, explain: 'Here is... for you. 这是送给你的……，亲手做的贺卡最珍贵。', tag: '句型' },
    { id: 'zth11-5', type: 'judge', q: '母亲节可以帮妈妈做家务，比如扫地、擦桌子。', options: ['√ 对', '✗ 错'], answer: 0, explain: '用行动表达爱：帮妈妈做一件小事，妈妈最感动。', tag: '品德' },
    { id: 'zth11-6', type: 'choice', q: '妈妈工作一天很辛苦，你应该：', options: ['给妈妈捶捶背', '让妈妈帮我做所有事', '大吵大闹', '乱扔玩具'], answer: 0, explain: '关心妈妈，捶捶背、倒杯水，做贴心的小棉袄。', tag: '品德' },
    { id: 'zth11-7', type: 'choice', q: '"kiss" 的意思是：', options: ['亲亲', '抱抱', '推推', '打打'], answer: 0, explain: 'kiss 亲亲，给妈妈一个 kiss，甜甜的爱。', tag: '词汇' },
    { id: 'zth11-8', type: 'choice', q: '"hug" 的意思是：', options: ['拥抱', '亲吻', '握手', '挥手'], answer: 0, explain: 'hug 拥抱，Give Mum a big hug. 给妈妈一个大大的拥抱。', tag: '词汇' },
    { id: 'zth11-9', type: 'judge', q: '爸爸、爷爷、奶奶也为我们付出很多，要同样爱他们。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Father\'s Day 父亲节也别忘了说 I love you, Dad! 爸爸我爱你！', tag: '品德' },
    { id: 'zth11-10', type: 'choice', q: '母亲节这天最棒的礼物是：', options: ['一句 I love you 和帮忙做家务', '乱发脾气', '不做作业', '一直玩手机'], answer: 0, explain: '爱与懂事是最好的礼物，妈妈收到了会特别开心。', tag: '情景' },
  ],
  zth12: [
    { id: 'zth12-1', type: 'choice', q: '"Story time" 的意思是：', options: ['故事时间', '上课时间', '吃饭时间', '运动时间'], answer: 0, explain: 'story 故事，Story time 到了，安静听故事。', tag: '短语理解' },
    { id: 'zth12-2', type: 'choice', q: '摸起来硬硬的用英语说是：', options: ['hard', 'soft', 'rough', 'smooth'], answer: 0, explain: 'hard 硬，soft 软，Touch and feel 摸一摸就知道。', tag: '复习' },
    { id: 'zth12-3', type: 'choice', q: '"I like singing and dancing." 的意思是：', options: ['我喜欢唱歌和跳舞。', '我会唱歌和跳舞。', '我在唱歌跳舞。', '唱歌跳舞很难。'], answer: 0, explain: 'like doing sth. 喜欢做某事，and 连接两个喜欢做的事。', tag: '句型复习' },
    { id: 'zth12-4', type: 'choice', q: '熊猫 panda 爱吃：', options: ['bamboo 竹子', 'meat 肉', 'fish 鱼骨头', 'grass 青草为主'], answer: 0, explain: 'panda 的主食是 bamboo 竹子，一天能吃好多好多。', tag: '常识' },
    { id: 'zth12-5', type: 'judge', q: '红灯停、绿灯行、黄灯等一等。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'traffic rules 交通规则记心间，安全出行每一天。', tag: '安全复习' },
    { id: 'zth12-6', type: 'choice', q: '母亲节对妈妈说的甜甜的话是：', options: ['I love you, Mum.', 'Good night.', 'See you.', 'You are welcome.'], answer: 0, explain: 'I love you, Mum. 妈妈我爱你，天天说更甜。', tag: '表达复习' },
    { id: 'zth12-7', type: 'choice', q: '"Winter is cold." 的意思是：', options: ['冬天是寒冷的。', '冬天是炎热的。', '冬天很温暖。', '冬天没有雪。'], answer: 0, explain: 'cold 寒冷的，冬天穿暖和，出门戴帽子。', tag: '句型复习' },
    { id: 'zth12-8', type: 'choice', q: '想邀请同学一起踢足球，说：', options: ["Let's play football!", "Let's go to bed!", "Let's eat!", "Let's cry!"], answer: 0, explain: "Let's play...! 一起玩吧，运动邀约最快乐。", tag: '句型复习' },
    { id: 'zth12-9', type: 'judge', q: '听故事时可以随便插话和走动。', options: ['√ 对', '✗ 错'], answer: 1, explain: '听故事要安静，尊重讲故事的人，听完再提问。', tag: '学习习惯' },
    { id: 'zth12-10', type: 'choice', q: '二年级下学期学完了，你会说这学期最大收获是：', options: ['我学会了好多英语单词和句子', '我学会了一直看电视', '我学会了挑食', '我学会了迟到'], answer: 0, explain: '一个学期 12 关闯下来，词汇句子装满小脑袋，给自己鼓掌！', tag: '表达' },
  ],
}
