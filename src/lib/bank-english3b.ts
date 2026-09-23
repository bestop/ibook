// 沪教版（五四学制·牛津上海版）英语 三年级下册（现行版目录）随堂知识点题库
// 教材：九年义务教育课本 英语（牛津上海版）三年级下册 · 上海教育出版社
// 目录（电子课本网 / 教师之家 牛津上海课标版全书目录核对）：
//   Module 1 Using my five senses: Unit 1 Seeing and hearing / Unit 2 Touching and feeling / Unit 3 Tasting and smelling
//   Module 2 My favourite things: Unit 1 Animals / Unit 2 Toys / Unit 3 Clothes
//   Module 3 Things around us: Unit 1 Shapes / Unit 2 Colours / Unit 3 Seasons
//   Module 4 More things to learn: Unit 1 My body / Unit 2 Children's Day / Unit 3 Story time
// 每单元一关，每关 10 题，共 12 关 120 题，题目 id 前缀 zti

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
    id: 'zti1',
    name: 'Unit 1',
    title: 'Seeing and hearing',
    emoji: '👁️',
    color: 'cyan',
    lessons: ['Module 1: Using my five senses', 'see with my eyes', 'hear with my ears'],
    intro: '眼睛看、耳朵听，飞机嗡嗡、汽车嘀嘀，世界真热闹！',
  },
  {
    id: 'zti2',
    name: 'Unit 2',
    title: 'Touching and feeling',
    emoji: '✋',
    color: 'teal',
    lessons: ['Module 1: Using my five senses', 'hard / soft', 'rough / smooth'],
    intro: '摸一摸猜一猜：是硬是软？是粗是滑？触觉大侦探！',
  },
  {
    id: 'zti3',
    name: 'Unit 3',
    title: 'Tasting and smelling',
    emoji: '🍋',
    color: 'lime',
    lessons: ['Module 1: Using my five senses', 'sweet / sour', 'salty / tasty'],
    intro: '柠檬酸酸、糖果甜甜，舌头和鼻子帮大忙！',
  },
  {
    id: 'zti4',
    name: 'Unit 4',
    title: 'Animals',
    emoji: '🦁',
    color: 'amber',
    lessons: ['Module 2: My favourite things', 'lions / tigers', 'Do you like...?'],
    intro: '狮子、老虎、大熊猫，你最喜欢哪种动物？',
  },
  {
    id: 'zti5',
    name: 'Unit 5',
    title: 'Toys',
    emoji: '🪁',
    color: 'orange',
    lessons: ['Module 2: My favourite things', 'kites / robots', 'this & that'],
    intro: '风筝、机器人、玩具熊，this 是这个，that 是那个！',
  },
  {
    id: 'zti6',
    name: 'Unit 6',
    title: 'Clothes',
    emoji: '🧣',
    color: 'rose',
    lessons: ['Module 2: My favourite things', 'gloves / scarf', 'Whose is this?'],
    intro: '手套、围巾、小外套，Whose is this? 是谁的呢？',
  },
  {
    id: 'zti7',
    name: 'Unit 7',
    title: 'Shapes',
    emoji: '🔺',
    color: 'sky',
    lessons: ['Module 3: Things around us', 'circle / square', 'triangle / star'],
    intro: '圆形、方形、三角形，图形宝宝藏身边！',
  },
  {
    id: 'zti8',
    name: 'Unit 8',
    title: 'Colours',
    emoji: '🌈',
    color: 'violet',
    lessons: ['Module 3: Things around us', 'rainbow colours', 'What colour...?'],
    intro: '雨后有彩虹，七种颜色真漂亮，你会说几种？',
  },
  {
    id: 'zti9',
    name: 'Unit 9',
    title: 'Seasons',
    emoji: '🌸',
    color: 'pink',
    lessons: ['Module 3: Things around us', 'spring / summer', 'autumn / winter'],
    intro: '四季更替真奇妙，每个季节都有好玩的事！',
  },
  {
    id: 'zti10',
    name: 'Unit 10',
    title: 'My body',
    emoji: '🦵',
    color: 'emerald',
    lessons: ['Module 4: More things to learn', 'shoulder / knee', 'finger / toe'],
    intro: '从头到脚认识身体：肩膀、膝盖、手指头！',
  },
  {
    id: 'zti11',
    name: 'Unit 11',
    title: "Children's Day",
    emoji: '🎈',
    color: 'red',
    lessons: ['Module 4: More things to learn', 'June 1st', "Happy Children's Day!"],
    intro: '六一儿童节是我们的节日，唱歌跳舞真开心！',
  },
  {
    id: 'zti12',
    name: 'Unit 12',
    title: 'Story time',
    emoji: '📖',
    color: 'fuchsia',
    lessons: ['Module 4: More things to learn', 'Listen and enjoy', 'Review of the book'],
    intro: '故事时间到，一学期的本领来复习，通关小达人！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zti1: [
    { id: 'zti1-1', type: 'choice', q: '"Seeing and hearing" 的意思是：', options: ['看和听', '摸和摸', '尝和闻', '说和唱'], answer: 0, explain: 'see 看、hear 听，Seeing and hearing 用眼睛和耳朵认识世界。', tag: '短语理解' },
    { id: 'zti1-2', type: 'choice', q: '"I see with my eyes." 的意思是：', options: ['我用眼睛看。', '我用耳朵听。', '我用鼻子闻。', '我用手摸。'], answer: 0, explain: 'with 表示"用"，I see with my eyes. 我用眼睛看。', tag: '句型' },
    { id: 'zti1-3', type: 'choice', q: '天上嗡嗡飞的"飞机"是：', options: ['aeroplane', 'bus', 'ship', 'train'], answer: 0, explain: 'aeroplane 飞机（美式常说 airplane），I can hear an aeroplane.', tag: '词汇' },
    { id: 'zti1-4', type: 'choice', q: '"What can you hear?" 的回答是：', options: ['I can hear a bus.', 'I can see a bus.', 'I like buses.', 'This is a bus.'], answer: 0, explain: '问 hear 听见，就用 I can hear... 回答，动词要对应。', tag: '句型' },
    { id: 'zti1-5', type: 'judge', q: '下雨天能听见雨声 rain，能看见雨点。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I can hear the rain. I can see the raindrops. 看和听一起来。', tag: '常识' },
    { id: 'zti1-6', type: 'choice', q: '听力游戏里听到"叮铃铃"，可能是：', options: ['bell 铃铛', 'drum 鼓', 'wind 风', 'rain 雨'], answer: 0, explain: 'bell 铃铛叮铃铃，drum 鼓是咚咚咚。', tag: '常识' },
    { id: 'zti1-7', type: 'choice', q: '上课铃响了，你应该：', options: ['回到座位准备上课', '再玩十分钟', '去买零食', '躲起来'], answer: 0, explain: '听到铃声 I can hear the bell. 马上回教室，遵守时间。', tag: '习惯养成' },
    { id: 'zti1-8', type: 'choice', q: '"listen" 和 "hear" 的区别是：', options: ['listen 强调用心听的动作，hear 强调听到结果', '完全一样', 'listen 是看，hear 是闻', 'hear 只能用在动物身上'], answer: 0, explain: 'Listen! 叫人注意听；I hear... 表示听见了。', tag: '辨析' },
    { id: 'zti1-9', type: 'judge', q: '过马路时不戴耳机听歌，才能听见汽车声。', options: ['√ 对', '✗ 错'], answer: 0, explain: '耳朵要留着听交通声音，安全比听歌重要。', tag: '安全常识' },
    { id: 'zti1-10', type: 'choice', q: '"I can see with my eyes and hear with my ears." 的意思是：', options: ['我用眼睛看、用耳朵听。', '我的眼睛像耳朵。', '眼睛和耳朵生病了。', '我不用眼睛看。'], answer: 0, explain: 'with my eyes / with my ears 表示用哪个器官做事。', tag: '句型' },
  ],
  zti2: [
    { id: 'zti2-1', type: 'choice', q: '"Touching and feeling" 的意思是：', options: ['触摸和感觉', '看和听', '尝和闻', '跑和跳'], answer: 0, explain: 'touch 触摸、feel 感觉，用手认识物体的特点。', tag: '短语理解' },
    { id: 'zti2-2', type: 'choice', q: '摸起来"硬"的单词是：', options: ['hard', 'soft', 'smooth', 'rough'], answer: 0, explain: 'hard 硬，The desk is hard. 桌子硬邦邦。', tag: '触感词汇' },
    { id: 'zti2-3', type: 'choice', q: '毛绒玩具摸起来"软软的"，是：', options: ['soft', 'hard', 'rough', 'sharp'], answer: 0, explain: 'soft 软，The toy bear is soft. 毛绒熊软绵绵。', tag: '触感词汇' },
    { id: 'zti2-4', type: 'choice', q: '树皮摸起来"粗糙的"，是：', options: ['rough', 'smooth', 'soft', 'sweet'], answer: 0, explain: 'rough 粗糙，树皮、菠萝皮都摸起来粗粗的。', tag: '触感词汇' },
    { id: 'zti2-5', type: 'choice', q: '镜子摸起来"光滑的"，是：', options: ['smooth', 'rough', 'hard', 'sour'], answer: 0, explain: 'smooth 光滑，镜面滑溜溜能照出人。', tag: '触感词汇' },
    { id: 'zti2-6', type: 'choice', q: '蒙眼摸物时问"它是软的吗？"，说：', options: ['Is it soft?', 'Is it blue?', 'Can it jump?', 'Does it run?'], answer: 0, explain: 'Is it + 形容词？回答 Yes, it is. / No, it isn\'t.', tag: '句型' },
    { id: 'zti2-7', type: 'judge', q: '"The pillow is hard." 的意思是"枕头是软的"。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错。hard 硬，soft 软。The pillow is hard. 枕头是硬的。', tag: '句型' },
    { id: 'zti2-8', type: 'choice', q: 'hard 的反义词是：', options: ['soft', 'rough', 'smooth', 'sweet'], answer: 0, explain: 'hard 硬 ↔ soft 软，rough 粗糙 ↔ smooth 光滑，反义词成对记。', tag: '词汇' },
    { id: 'zti2-9', type: 'choice', q: '猜物游戏：摸起来 hard 又 smooth 的可能是：', options: ['glass 玻璃杯', 'teddy bear 玩具熊', 'pineapple 菠萝', 'cotton 棉花'], answer: 0, explain: '玻璃杯又硬又滑；玩具熊软，菠萝粗，棉花最柔软。', tag: '情景' },
    { id: 'zti2-10', type: 'judge', q: '用触觉认识物体时，要轻摸不乱扔。', options: ['√ 对', '✗ 错'], answer: 0, explain: '轻拿轻放有礼貌，摸完东西放回原处。', tag: '习惯养成' },
  ],
  zti3: [
    { id: 'zti3-1', type: 'choice', q: '"Tasting and smelling" 的意思是：', options: ['品尝和闻', '看和听', '摸和捏', '跑和跳'], answer: 0, explain: 'taste 尝、smell 闻，舌头尝味道，鼻子闻气味。', tag: '短语理解' },
    { id: 'zti3-2', type: 'choice', q: '糖果的味道是"甜甜的"，甜是：', options: ['sweet', 'sour', 'salty', 'spicy'], answer: 0, explain: 'sweet 甜的，The sweets are sweet. 糖果甜甜的。', tag: '味觉词汇' },
    { id: 'zti3-3', type: 'choice', q: '柠檬的味道是"酸酸的"，酸是：', options: ['sour', 'sweet', 'salty', 'bitter'], answer: 0, explain: 'sour 酸的，The lemon is sour. 柠檬酸掉牙！', tag: '味觉词汇' },
    { id: 'zti3-4', type: 'choice', q: '放了盐的汤是"咸咸的"，咸是：', options: ['salty', 'sweet', 'sour', 'cool'], answer: 0, explain: 'salty 咸的，salt 盐 + y，菜太咸要多喝水。', tag: '味觉词汇' },
    { id: 'zti3-5', type: 'choice', q: '"Taste this. What is it?" 的意思是：', options: ['尝尝这个，它是什么？', '看看这个，它是谁的？', '闻闻这个，它在哪里？', '扔掉这个！'], answer: 0, explain: 'Taste this. 尝尝这个，闭眼猜食物的游戏真好玩。', tag: '句型' },
    { id: 'zti3-6', type: 'judge', q: '不知道是什么的东西，不能随便放进嘴里尝。', options: ['√ 对', '✗ 错'], answer: 0, explain: '陌生东西可能有毒，先问大人，安全第一。', tag: '安全常识' },
    { id: 'zti3-7', type: 'choice', q: '闻到臭臭的味道，你可以说：', options: ['It smells bad.', 'It smells good.', 'It tastes sweet.', 'It looks nice.'], answer: 0, explain: 'smell bad 难闻，smell good 好闻，气味用 smell 描述。', tag: '句型' },
    { id: 'zti3-8', type: 'choice', q: '生病喝的中药常常是"苦苦的"，苦是：', options: ['bitter', 'sweet', 'salty', 'sour'], answer: 0, explain: 'bitter 苦的，良药苦口利于病，勇敢喝药快快好。', tag: '拓展' },
    { id: 'zti3-9', type: 'judge', q: '吃饭时细嚼慢咽，才能尝出食物的味道。', options: ['√ 对', '✗ 错'], answer: 0, explain: '慢慢嚼，味道才能被舌头尝出来，还帮助消化。', tag: '习惯养成' },
    { id: 'zti3-10', type: 'choice', q: 'sweet、sour、salty、bitter 都是描述：', options: ['taste 味道', 'colour 颜色', 'shape 形状', 'weather 天气'], answer: 0, explain: '它们都是味觉词，taste words 味道词一家亲。', tag: '单词分类' },
  ],
  zti4: [
    { id: 'zti4-1', type: 'choice', q: '"Do you like animals?" 的意思是：', options: ['你喜欢动物吗？', '你是动物吗？', '动物喜欢你吗？', '动物在哪里？'], answer: 0, explain: 'Do you like...? 你喜欢……吗？回答 Yes, I do. / No, I don\'t.', tag: '句型' },
    { id: 'zti4-2', type: 'choice', q: '草原上奔跑的"老虎"是：', options: ['tiger', 'lion', 'panda', 'rabbit'], answer: 0, explain: 'tiger 老虎，I like tigers. 复数表示一类。', tag: '动物词汇' },
    { id: 'zti4-3', type: 'choice', q: '鬃毛蓬蓬的"狮子"是：', options: ['lion', 'tiger', 'bear', 'fox'], answer: 0, explain: 'lion 狮子，The lion is strong. 狮子很强壮。', tag: '动物词汇' },
    { id: 'zti4-4', type: 'choice', q: '说"我喜欢猴子"，正确的是：', options: ['I like monkeys.', 'I like monkey.', 'I like a monkeys.', 'I liking monkeys.'], answer: 0, explain: '喜欢一类动物，用复数 monkeys。', tag: '语法' },
    { id: 'zti4-5', type: 'judge', q: '"The panda is black and white." 的意思是"熊猫是黑黄相间的"。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错。black and white 黑白相间，熊猫的标志配色。', tag: '句型' },
    { id: 'zti4-6', type: 'choice', q: '"long nose" 长鼻子说的是：', options: ['elephant 大象', 'rabbit 兔子', 'bird 小鸟', 'fish 鱼'], answer: 0, explain: 'elephant 有一条长鼻子，还会卷东西呢。', tag: '常识' },
    { id: 'zti4-7', type: 'choice', q: '问别人喜欢什么动物，说：', options: ['What animals do you like?', 'What colour do you like?', 'Where do you live?', 'How are you?'], answer: 0, explain: 'What animals do you like? 回答 I like...。', tag: '对话' },
    { id: 'zti4-8', type: 'choice', q: '兔子 rabbit 有：', options: ['long ears 长耳朵', 'long nose 长鼻子', 'big mouth 大嘴', 'wings 翅膀'], answer: 0, explain: 'Rabbits have long ears. 兔子的长耳朵灵敏得很。', tag: '常识' },
    { id: 'zti4-9', type: 'judge', q: '动物是我们的朋友，要保护它们。', options: ['√ 对', '✗ 错'], answer: 0, explain: '不伤害动物，保护环境，动物才能快乐生活。', tag: '品德' },
    { id: 'zti4-10', type: 'choice', q: '"I like tigers and lions." 的意思是：', options: ['我喜欢老虎和狮子。', '我喜欢老虎不喜欢狮子。', '我在看老虎狮子。', '老虎和狮子喜欢我。'], answer: 0, explain: 'and 连接两个并列的东西：老虎和狮子都喜欢。', tag: '句型' },
  ],
  zti5: [
    { id: 'zti5-1', type: 'choice', q: '"toys" 的意思是：', options: ['玩具', '食物', '衣服', '动物'], answer: 0, explain: 'toy 玩具，复数 toys，I like toys. 我喜欢玩具。', tag: '词汇' },
    { id: 'zti5-2', type: 'choice', q: '会走路会说话的"机器人"是：', options: ['robot', 'kite', 'doll', 'ball'], answer: 0, explain: 'robot 机器人，按一下按钮就动起来。', tag: '玩具词汇' },
    { id: 'zti5-3', type: 'choice', q: '"this" 和 "that" 的区别是：', options: ['this 指近处的，that 指远处的', 'this 指远的，that 指近的', '都指远处', '都指近处'], answer: 0, explain: 'this 这个（近），that 那个（远），I like this kite.', tag: '语法' },
    { id: 'zti5-4', type: 'choice', q: '"I like that robot." 的意思是：', options: ['我喜欢那个机器人。', '我喜欢这个机器人。', '机器人喜欢我。', '那是我的机器人。'], answer: 0, explain: 'that 那个，指稍远的机器人。', tag: '句型' },
    { id: 'zti5-5', type: 'choice', q: '问"你喜欢哪个玩具？"，说：', options: ['Which toy do you like?', 'Where is the toy?', 'What colour is the toy?', 'Whose toy is this?'], answer: 0, explain: 'Which...? 哪一个，从几个里选一个。', tag: '句型' },
    { id: 'zti5-6', type: 'judge', q: '"These kites are beautiful." 里 these 指远处的"那些"。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错。these 这些（近指复数），those 才是那些（远指复数）。', tag: '语法' },
    { id: 'zti5-7', type: 'choice', q: '和同学交换玩具玩，应该说：', options: ['Let\'s swap toys!', 'Give me your toy now!', 'This is mine only!', 'I will hide it!'], answer: 0, explain: "swap 交换，Let's swap! 换着玩更开心，好东西要分享。", tag: '品德' },
    { id: 'zti5-8', type: 'choice', q: '玩具熊的"熊"是：', options: ['bear', 'pear', 'wear', 'hear'], answer: 0, explain: 'bear 熊，toy bear 玩具熊；pear 是梨子，别看混啦。', tag: '词汇' },
    { id: 'zti5-9', type: 'judge', q: '玩 skateboard 滑板的时候要戴好护具。', options: ['√ 对', '✗ 错'], answer: 0, explain: '滑滑板戴头盔和护膝，保护自己不摔伤。', tag: '安全常识' },
    { id: 'zti5-10', type: 'choice', q: 'robot、kite、doll、ball 都是：', options: ['toys 玩具', 'food 食物', 'clothes 衣服', 'animals 动物'], answer: 0, explain: '它们都是玩具一类，玩完记得收好。', tag: '单词分类' },
  ],
  zti6: [
    { id: 'zti6-1', type: 'choice', q: '"Whose gloves are these?" 的意思是：', options: ['这些是谁的手套？', '手套在哪里？', '手套多少钱？', '你喜欢手套吗？'], answer: 0, explain: 'whose 谁的，问东西的主人。', tag: '句型' },
    { id: 'zti6-2', type: 'choice', q: '冬天戴在手上的"手套"是：', options: ['gloves', 'shoes', 'socks', 'hats'], answer: 0, explain: 'gloves 手套（常用复数，一双是 a pair of gloves）。', tag: '服饰词汇' },
    { id: 'zti6-3', type: 'choice', q: '围在脖子上的"围巾"是：', options: ['scarf', 'coat', 'shirt', 'skirt'], answer: 0, explain: 'scarf 围巾，冬天围上暖和和。', tag: '服饰词汇' },
    { id: 'zti6-4', type: 'choice', q: '"Is this your scarf?" 的回答是：', options: ['Yes, it is. / No, it isn\'t.', 'Yes, they are.', 'I am fine.', 'It is red.'], answer: 0, explain: '问单数 this...is，回答用 it is 或 it isn\'t。', tag: '句型' },
    { id: 'zti6-5', type: 'judge', q: '捡到别人的手套要交给老师或失主。', options: ['√ 对', '✗ 错'], answer: 0, explain: '拾金不昧好品德，失主找不到会着急的。', tag: '品德' },
    { id: 'zti6-6', type: 'choice', q: '"Whose coat is this?" 的回答可能是：', options: ['It\'s Alice\'s.', 'It\'s red.', 'It\'s on the chair.', 'It\'s big.'], answer: 0, explain: '问谁的，要回答人名或人称：It\'s Alice\'s. 是爱丽丝的。', tag: '句型' },
    { id: 'zti6-7', type: 'choice', q: '下雨天穿的"雨靴"是：', options: ['rain boots', 'sports shoes', 'slippers', 'sandals'], answer: 0, explain: 'rain boots 雨靴，雨天踩水不湿脚。', tag: '拓展' },
    { id: 'zti6-8', type: 'choice', q: '"a pair of" 的意思是：', options: ['一双、一对', '一个', '许多', '一半'], answer: 0, explain: 'a pair of gloves 一双手套，socks、shoes 都用 a pair of。', tag: '词汇' },
    { id: 'zti6-9', type: 'judge', q: '脱下的外套要挂好，不能乱扔在地上。', options: ['√ 对', '✗ 错'], answer: 0, explain: '外套挂整齐，穿的时候找得到，教室也整洁。', tag: '习惯养成' },
    { id: 'zti6-10', type: 'choice', q: 'gloves、scarf、coat、sweater 都是：', options: ['clothes 衣服类', 'toys 玩具类', 'food 食物类', 'shapes 图形类'], answer: 0, explain: '都是穿戴的东西，clothes 大家族。', tag: '单词分类' },
  ],
  zti7: [
    { id: 'zti7-1', type: 'choice', q: '"shapes" 的意思是：', options: ['形状', '颜色', '数字', '动物'], answer: 0, explain: 'shape 形状，circle、square 都是 shapes。', tag: '词汇' },
    { id: 'zti7-2', type: 'choice', q: '圆圆的、没有角的"圆形"是：', options: ['circle', 'square', 'triangle', 'star'], answer: 0, explain: 'circle 圆形，太阳、皮球都是圆形。', tag: '图形词汇' },
    { id: 'zti7-3', type: 'choice', q: '四条边一样长的"正方形"是：', options: ['square', 'circle', 'star', 'heart'], answer: 0, explain: 'square 正方形，方方正正四条边。', tag: '图形词汇' },
    { id: 'zti7-4', type: 'choice', q: '三条边的"三角形"是：', options: ['triangle', 'circle', 'square', 'rectangle'], answer: 0, explain: 'triangle 三角形，tri- 表示三，像小山一样。', tag: '图形词汇' },
    { id: 'zti7-5', type: 'choice', q: '天上闪闪的"星形"是：', options: ['star', 'circle', 'square', 'diamond'], answer: 0, explain: 'star 星形，夜空里的小星星就是 star 形状。', tag: '图形词汇' },
    { id: 'zti7-6', type: 'choice', q: '长长方方的"长方形"是：', options: ['rectangle', 'triangle', 'circle', 'star'], answer: 0, explain: 'rectangle 长方形，黑板、书本都是长方形。', tag: '图形词汇' },
    { id: 'zti7-7', type: 'judge', q: '钟表的钟面是 square 正方形。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错。钟面圆圆的是 circle 圆形，看时间真方便。', tag: '常识' },
    { id: 'zti7-8', type: 'choice', q: '"What shape is the ball?" 的回答是：', options: ['It is a circle.', 'It is red.', 'It is big.', 'It is mine.'], answer: 0, explain: '问形状用 What shape...? 回答 It is a circle.', tag: '句型' },
    { id: 'zti7-9', type: 'choice', q: '下面是三角形的东西是：', options: ['三明治的一角', '皮球', '鸡蛋', '窗户玻璃'], answer: 0, explain: '切好的三明治常有三角形的角，皮球和鸡蛋是圆形。', tag: '常识' },
    { id: 'zti7-10', type: 'judge', q: '数学课上的图形用英语也能说出来。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'circle、square、triangle、rectangle、star，图形英语真有趣。', tag: '拓展' },
  ],
  zti8: [
    { id: 'zti8-1', type: 'choice', q: '"colours" 的意思是：', options: ['颜色', '形状', '水果', '动物'], answer: 0, explain: 'colour 颜色，复数 colours，彩虹有七种颜色。', tag: '词汇' },
    { id: 'zti8-2', type: 'choice', q: '"What colour is the apple?" 的回答是：', options: ['It is red.', 'It is a circle.', 'It is sweet.', 'It is on the desk.'], answer: 0, explain: '问颜色用 What colour...? 回答 It is + 颜色词。', tag: '句型' },
    { id: 'zti8-3', type: 'choice', q: '天空和大海的颜色常常是：', options: ['blue 蓝色', 'red 红色', 'yellow 黄色', 'black 黑色'], answer: 0, explain: 'blue 蓝色，蓝天大海蓝蓝的。', tag: '颜色词汇' },
    { id: 'zti8-4', type: 'choice', q: '小草和树叶的颜色是：', options: ['green 绿色', 'purple 紫色', 'white 白色', 'orange 橙色'], answer: 0, explain: 'green 绿色，green grass 绿绿的草。', tag: '颜色词汇' },
    { id: 'zti8-5', type: 'choice', q: '香蕉成熟后的颜色是：', options: ['yellow 黄色', 'blue 蓝色', 'green 绿色', 'black 黑色'], answer: 0, explain: 'yellow 黄色，yellow banana 黄香蕉。', tag: '常识' },
    { id: 'zti8-6', type: 'choice', q: '彩虹七色中排在第一的"红色"是：', options: ['red', 'green', 'blue', 'purple'], answer: 0, explain: 'red 红色，彩虹从红开始：红橙黄绿蓝靛紫。', tag: '常识' },
    { id: 'zti8-7', type: 'judge', q: '"The rainbow is beautiful." 的意思是"彩虹很美丽"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'beautiful 美丽的，雨后的彩虹挂天边。', tag: '句型' },
    { id: 'zti8-8', type: 'choice', q: '红绿灯里表示"停"的灯是：', options: ['red 红灯', 'green 绿灯', 'yellow 黄灯', 'blue 蓝灯'], answer: 0, explain: 'red light 停，green light 行，安全规则要记牢。', tag: '安全常识' },
    { id: 'zti8-9', type: 'choice', q: '"brown" 是什么颜色？', options: ['棕色', '蓝色', '粉色', '灰色'], answer: 0, explain: 'brown 棕色，树干、小熊、巧克力都是棕色。', tag: '颜色词汇' },
    { id: 'zti8-10', type: 'judge', q: 'red、orange、yellow、green、blue、purple 都是颜色词。', options: ['√ 对', '✗ 错'], answer: 0, explain: '它们就是彩虹的顺序：红橙黄绿蓝紫。', tag: '单词分类' },
  ],
  zti9: [
    { id: 'zti9-1', type: 'choice', q: '"seasons" 的意思是：', options: ['季节', '月份', '星期', '天气'], answer: 0, explain: 'season 季节，一年有 spring、summer、autumn、winter。', tag: '词汇' },
    { id: 'zti9-2', type: 'choice', q: '放风筝最好的季节常常是：', options: ['spring 春天', 'winter 冬天', 'autumn 深秋', '雨季'], answer: 0, explain: '春天温暖多风，适合放风筝 Fly a kite.', tag: '常识' },
    { id: 'zti9-3', type: 'choice', q: '游泳最合适的季节是：', options: ['summer 夏天', 'winter 冬天', 'spring 春天', 'autumn 秋天'], answer: 0, explain: 'summer 天气热，去正规泳池游泳最开心。', tag: '常识' },
    { id: 'zti9-4', type: 'choice', q: '树叶变黄落下的季节是：', options: ['autumn 秋天', 'spring 春天', 'summer 夏天', '雨季'], answer: 0, explain: 'autumn 秋天，落叶飘飘像蝴蝶。', tag: '常识' },
    { id: 'zti9-5', type: 'choice', q: '可以滑雪堆雪人的季节是：', options: ['winter 冬天', 'summer 夏天', 'spring 春天', 'autumn 秋天'], answer: 0, explain: 'winter 冬天，堆雪人打雪仗，戴好手套和帽子。', tag: '常识' },
    { id: 'zti9-6', type: 'choice', q: '"Which season do you like best?" 的意思是：', options: ['你最喜欢哪个季节？', '你最喜欢什么颜色？', '你喜欢动物吗？', '今天天气如何？'], answer: 0, explain: 'Which season... best? 最喜欢哪个季节，I like spring best.', tag: '句型' },
    { id: 'zti9-7', type: 'judge', q: '"In autumn, it is cool." 的意思是"秋天天气很热"。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错。cool 凉爽，hot 才是热。秋天凉爽舒适。', tag: '句型' },
    { id: 'zti9-8', type: 'choice', q: '春天 plants 会：', options: ['grow 发芽生长', 'die 枯死', 'fly away', 'sleep all day'], answer: 0, explain: 'Spring is warm. 万物生长，小芽钻出泥土。', tag: '常识' },
    { id: 'zti9-9', type: 'choice', q: '冬天 cold，出门要：', options: ['wear warm clothes 穿暖', 'wear shorts 穿短裤', 'eat ice cream 吃冰淇淋', 'swim outside 户外游泳'], answer: 0, explain: '穿上厚衣服，围巾手套齐上阵，感冒不来找。', tag: '生活常识' },
    { id: 'zti9-10', type: 'judge', q: '四季顺序是 spring → summer → autumn → winter。', options: ['√ 对', '✗ 错'], answer: 0, explain: '春夏秋冬转圈圈，季节歌谣记心间。', tag: '常识' },
  ],
  zti10: [
    { id: 'zti10-1', type: 'choice', q: '"My body" 的意思是：', options: ['我的身体', '我的书包', '我的家人', '我的朋友'], answer: 0, explain: 'body 身体，认识身体部位，运动保护自己做主人。', tag: '短语理解' },
    { id: 'zti10-2', type: 'choice', q: '连接手臂和身体的"肩膀"是：', options: ['shoulder', 'knee', 'finger', 'toe'], answer: 0, explain: 'shoulder 肩膀，书包背在肩膀上。', tag: '身体词汇' },
    { id: 'zti10-3', type: 'choice', q: '弯曲时用的"膝盖"是：', options: ['knee', 'shoulder', 'arm', 'head'], answer: 0, explain: 'knee 膝盖，跑步摔了膝盖要小心处理。', tag: '身体词汇' },
    { id: 'zti10-4', type: 'choice', q: '写字拿笔用的"手指"是：', options: ['finger', 'toe', 'ear', 'leg'], answer: 0, explain: 'finger 手指，five fingers 一只手五根手指。', tag: '身体词汇' },
    { id: 'zti10-5', type: 'choice', q: '脚趾的英语是：', options: ['toe', 'finger', 'knee', 'nose'], answer: 0, explain: 'toe 脚趾，ten toes 两只脚十个脚趾头。', tag: '身体词汇' },
    { id: 'zti10-6', type: 'judge', q: '"Touch your toes." 的意思是"摸摸你的脚趾"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'touch 摸，体育课热身常常 Touch your toes.', tag: '句型' },
    { id: 'zti10-7', type: 'choice', q: '手臂的英语是：', options: ['arm', 'leg', 'eye', 'mouth'], answer: 0, explain: 'arm 手臂，leg 是腿，别弄混。', tag: '身体词汇' },
    { id: 'zti10-8', type: 'choice', q: '"Clap your hands." 的意思是：', options: ['拍拍你的手', '跺跺你的脚', '眨眨你的眼', '摇摇你的头'], answer: 0, explain: 'clap 拍，hands 手，Clap your hands. 拍手唱歌真热闹。', tag: '句型' },
    { id: 'zti10-9', type: 'judge', q: '运动时保护好膝盖和手臂，摔倒了要告诉老师。', options: ['√ 对', '✗ 错'], answer: 0, explain: '运动注意安全，受伤及时报告，处理才及时。', tag: '安全常识' },
    { id: 'zti10-10', type: 'choice', q: 'shoulder、knee、finger、toe 都是：', options: ['body parts 身体部位', 'colours 颜色', 'shapes 形状', 'toys 玩具'], answer: 0, explain: '它们都是身体部位，Head, shoulders, knees and toes 唱起来！', tag: '单词分类' },
  ],
  zti11: [
    { id: 'zti11-1', type: 'choice', q: '"Children\'s Day" 的意思是：', options: ['儿童节', '母亲节', '教师节', '新年'], answer: 0, explain: "Children's Day 儿童节，六月一日是我们的节日。", tag: '节日词汇' },
    { id: 'zti11-2', type: 'choice', q: "儿童节在哪个月？", options: ['June 六月', 'May 五月', 'July 七月', 'March 三月'], answer: 0, explain: 'June 一号 June 1st，Children\'s Day 快乐！', tag: '常识' },
    { id: 'zti11-3', type: 'choice', q: '祝福同学儿童节快乐，说：', options: ["Happy Children's Day!", 'Happy New Year!', 'Merry Christmas!', 'Good night!'], answer: 0, explain: "Happy Children's Day! 儿童节快乐，自己的节日最开心。", tag: '节日表达' },
    { id: 'zti11-4', type: 'choice', q: '儿童节学校常常举办：', options: ['party 联欢会', '考试周', '大扫除日', '家访日'], answer: 0, explain: '唱歌跳舞做游戏，儿童节的 party 真热闹。', tag: '常识' },
    { id: 'zti11-5', type: 'judge', q: '儿童节收到礼物，要说 Thank you（谢谢）。', options: ['√ 对', '✗ 错'], answer: 0, explain: '收到祝福和礼物，别忘了说谢谢。', tag: '礼貌用语' },
    { id: 'zti11-6', type: 'choice', q: '"Let\'s sing and dance!" 的意思是：', options: ['我们一起唱歌跳舞吧！', '我们一起睡觉吧！', '我们一起吃饭吧！', '我们一起回家吧！'], answer: 0, explain: "Let's... 一起……，节日的快乐要说出来。", tag: '句型' },
    { id: 'zti11-7', type: 'choice', q: '节日里飘上天的"气球"是：', options: ['balloon', 'ball', 'doll', 'kite'], answer: 0, explain: 'balloon 气球，节日里飘着彩色气球，注意别爆哦。', tag: '词汇' },
    { id: 'zti11-8', type: 'choice', q: '儿童节想去公园玩，对爸爸说：', options: ['Let\'s go to the park!', 'Let\'s go to bed!', 'Let\'s do homework!', 'Go away!'], answer: 0, explain: "Let's go to the park! 我们去公园吧，全家过节乐融融。", tag: '情景' },
    { id: 'zti11-9', type: 'judge', q: '儿童节也是感恩的日子，谢谢老师和爸妈的陪伴。', options: ['√ 对', '✗ 错'], answer: 0, explain: '快乐的日子里说声谢谢，感恩让快乐加倍。', tag: '品德' },
    { id: 'zti11-10', type: 'choice', q: '"This is the best Children\'s Day!" 的意思是：', options: ['这是最棒的儿童节！', '这是最差的儿童节！', '儿童节在什么时候？', '儿童节放假吗？'], answer: 0, explain: 'best 最好的，玩得开心就大声说出来！', tag: '表达' },
  ],
  zti12: [
    { id: 'zti12-1', type: 'choice', q: '"Story time" 的意思是：', options: ['故事时间', '游戏时间', '午餐时间', '放学时间'], answer: 0, explain: 'story 故事，Story time 一起读故事学英语。', tag: '短语理解' },
    { id: 'zti12-2', type: 'choice', q: '本学期学过：眼睛用来看，是 I see with my ______.', options: ['eyes', 'ears', 'nose', 'hands'], answer: 0, explain: 'eyes 眼睛用来看，ears 耳朵用来听。', tag: '复习' },
    { id: 'zti12-3', type: 'choice', q: '柠檬尝起来酸酸的：', options: ['The lemon is sour.', 'The lemon is sweet.', 'The lemon is salty.', 'The lemon is smooth.'], answer: 0, explain: 'sour 酸，sweet 甜，salty 咸，taste words 记心间。', tag: '复习' },
    { id: 'zti12-4', type: 'choice', q: '"Do you like pandas?" 的肯定回答是：', options: ['Yes, I do.', 'Yes, I am.', 'Yes, I can.', 'Yes, it is.'], answer: 0, explain: 'Do 开头的一般疑问句，用 do 回答：Yes, I do.', tag: '语法复习' },
    { id: 'zti12-5', type: 'choice', q: '三角形 triangle 有：', options: ['three sides 三条边', 'four sides 四条边', 'no sides 没有边', 'five sides 五条边'], answer: 0, explain: 'tri- 是三，triangle 三条边；square 正方形四条边。', tag: '复习' },
    { id: 'zti12-6', type: 'choice', q: '彩虹的颜色顺序第一个是：', options: ['red 红', 'blue 蓝', 'green 绿', 'purple 紫'], answer: 0, explain: '红橙黄绿蓝靛紫，red 打头阵。', tag: '复习' },
    { id: 'zti12-7', type: 'judge', q: '"Whose scarf is this?" 是在问围巾是谁的。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'whose 谁的，找不到主人就交给老师。', tag: '句型复习' },
    { id: 'zti12-8', type: 'choice', q: '膝盖的英语是：', options: ['knee', 'toe', 'ear', 'arm'], answer: 0, explain: 'knee 膝盖，Head, shoulders, knees and toes 里唱过啦。', tag: '复习' },
    { id: 'zti12-9', type: 'judge', q: '七月一日是 Children\'s Day 儿童节。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错。儿童节是 June 1st 六月一日，属于每个小朋友的节日。', tag: '复习' },
    { id: 'zti12-10', type: 'choice', q: '读英语故事时遇到不认识的单词，最好：', options: ['猜一猜或查一查', '马上合上书', '撕掉那一页', '再也不读了'], answer: 0, explain: '猜词、查词典都是好方法，读得越多本领越大！', tag: '学习习惯' },
  ],
}
