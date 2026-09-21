// 人教版PEP英语 一年级下册（一起点·预备级 2025春版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）一年级下册（2025 春版）· 人民教育出版社（PEP 新版预备级）
// 目录（电子课本网体系 + 英语朗读宝 51jiaoxi 新课本同步资源核对）：
//   Unit 1 Nice boys and girls / Unit 2 Wash, brush, clean! / Unit 3 Eat well
//   Unit 4 My pet / Unit 5 We are special! / Revision: We are great!
// 每单元一关，每关 10 题，共 6 关 60 题，题目 id 前缀 zta

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
    id: 'zta1',
    name: 'Unit 1',
    title: 'Nice boys and girls',
    emoji: '🌟',
    color: 'teal',
    lessons: ['Nice boys and girls', 'Say please and thank you', 'Be polite'],
    intro: '会道谢、会道歉，人人夸你有礼貌，做可爱的好孩子！',
  },
  {
    id: 'zta2',
    name: 'Unit 2',
    title: 'Wash, brush, clean!',
    emoji: '🧼',
    color: 'lime',
    lessons: ['Wash, brush, clean!', 'Wash your hands', 'Brush your teeth'],
    intro: '勤洗手、勤刷牙，干干净净的小朋友人人爱！',
  },
  {
    id: 'zta3',
    name: 'Unit 3',
    title: 'Eat well',
    emoji: '🥛',
    color: 'orange',
    lessons: ['Eat well', 'Yummy food', 'Healthy eating'],
    intro: '蔬菜水果牛奶蛋，样样都吃不挑食，身体棒棒！',
  },
  {
    id: 'zta4',
    name: 'Unit 4',
    title: 'My pet',
    emoji: '🐱',
    color: 'amber',
    lessons: ['My pet', 'Small and big', 'Animals at home'],
    intro: '小猫小狗小金鱼，我的宠物朋友真可爱！',
  },
  {
    id: 'zta5',
    name: 'Unit 5',
    title: 'We are special!',
    emoji: '✨',
    color: 'pink',
    lessons: ['We are special!', 'I can run and jump', 'Everyone is special'],
    intro: '会跑会跳会画画，每个小朋友都很了不起！',
  },
  {
    id: 'ztar',
    name: 'Revision',
    title: '快乐复习站',
    emoji: '🌈',
    color: 'cyan',
    lessons: ['常用表达语', '全册单词表', '小故事时间'],
    intro: '把一下学期学的单词句子串一串，快乐大复习！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zta1: [
    { id: 'zta1-1', type: 'choice', q: '"Nice boys and girls" 的意思是：', options: ['有礼貌的好孩子', '会飞的男孩', '爱跑步的女孩', '新来的同学'], answer: 0, explain: 'nice 有礼貌的、讨人喜欢的，nice boys and girls 就是有礼貌的好孩子！', tag: '短语理解' },
    { id: 'zta1-2', type: 'choice', q: '别人帮助了你，你应该说：', options: ['Thank you!', 'Goodbye!', 'Sorry!', 'Look out!'], answer: 0, explain: 'Thank you! 谢谢你！得到帮助要说谢谢，做个有礼貌的好孩子。', tag: '礼貌用语' },
    { id: 'zta1-3', type: 'choice', q: '不小心踩到同学的脚，应该说：', options: ['Sorry!', 'Thank you!', 'Hello!', 'Good night!'], answer: 0, explain: 'Sorry! 对不起！做错事要道歉，说声 Sorry，还是好朋友。', tag: '礼貌用语' },
    { id: 'zta1-4', type: 'choice', q: '请别人帮忙时，开头说"请"是：', options: ['Please', 'Thanks', 'OK', 'Hi'], answer: 0, explain: 'Please 请，放在请求的开头或结尾，如 Please open the door.。', tag: '礼貌用语' },
    { id: 'zta1-5', type: 'judge', q: '别人向你道谢，你可以回答 "You\'re welcome."。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'You\'re welcome. 不客气，是回答 Thank you 的礼貌用语。', tag: '礼貌用语' },
    { id: 'zta1-6', type: 'choice', q: '同学画画真漂亮，你可以夸他：', options: ['Great job!', 'Stand up!', 'Sit down!', 'Hurry up!'], answer: 0, explain: 'Great job! 做得真棒！夸奖别人，大家都开心。', tag: '礼貌用语' },
    { id: 'zta1-7', type: 'choice', q: '想让别人和你一起玩，可以说：', options: ['Let\'s play!', 'Let\'s go to bed.', 'Let\'s clean up.', 'Let\'s run.'], answer: 0, explain: 'Let\'s play! 我们一起玩吧！邀请小伙伴的魔法句子。', tag: '句型' },
    { id: 'zta1-8', type: 'judge', q: '想要别人的玩具，直接伸手抢过来就行。', options: ['√ 对', '✗ 错'], answer: 1, explain: '要先问 May I play? 我可以玩吗？经同意再拿，抢玩具没礼貌哦。', tag: '习惯养成' },
    { id: 'zta1-9', type: 'choice', q: '"Excuse me." 常用在：', options: ['打扰别人前，客气开口', '和别人告别时', '睡觉前', '吃饭后'], answer: 0, explain: 'Excuse me. 打扰一下／劳驾，请别人让路或提问前先说这句，很有礼貌。', tag: '礼貌用语' },
    { id: 'zta1-10', type: 'choice', q: '阿姨夸你有礼貌，你应该说：', options: ['Thank you!', 'You\'re welcome!', 'I\'m sorry.', 'Good morning!'], answer: 0, explain: '被夸奖要说 Thank you! 谢谢，不害羞不大声，礼貌又大方。', tag: '礼貌用语' },
  ],
  zta2: [
    { id: 'zta2-1', type: 'choice', q: '"Wash, brush, clean!" 的意思是：', options: ['洗一洗，刷一刷，擦一擦', '跑一跑，跳一跳', '吃一吃，喝一喝', '看一看，听一听'], answer: 0, explain: 'wash 洗、brush 刷、clean 擦干净，卫生小本领全在这句话里！', tag: '短语理解' },
    { id: 'zta2-2', type: 'choice', q: '吃饭前要做的卫生事情是：', options: ['Wash my hands 洗手', 'Brush my hair 梳头', 'Clean my shoes 擦鞋', 'Open the door 开门'], answer: 0, explain: '饭前便后要洗手：Wash your hands before meals.，细菌跑光光。', tag: '卫生习惯' },
    { id: 'zta2-3', type: 'choice', q: '早上起床后刷牙，"刷牙"是：', options: ['brush my teeth', 'wash my face', 'comb my hair', 'clean my room'], answer: 0, explain: 'brush 刷 + teeth 牙齿 = brush my teeth 刷牙，早晚各一次。', tag: '卫生词汇' },
    { id: 'zta2-4', type: 'choice', q: '用来洗脸的"脸"是：', options: ['face', 'hand', 'foot', 'hair'], answer: 0, explain: 'face 脸，Wash your face. 洗洗脸，早上精神一整天。', tag: '身体部位' },
    { id: 'zta2-5', type: 'judge', q: '洗手要用肥皂，搓出泡泡再冲干净。', options: ['√ 对', '✗ 错'], answer: 0, explain: '用肥皂搓一搓，手心手背都洗到，才能把细菌赶跑！', tag: '卫生习惯' },
    { id: 'zta2-6', type: 'choice', q: '擦干净小桌子，用哪个词？', options: ['clean the table', 'wash the table', 'brush the table', 'close the table'], answer: 0, explain: 'clean 擦干净，clean the table 擦桌子，做爱劳动的小帮手。', tag: '动词短语' },
    { id: 'zta2-7', type: 'choice', q: '刷牙要刷多久才够干净？', options: ['大约 2 分钟', '5 秒钟', '10 秒钟', '不用刷'], answer: 0, explain: '早晚各刷一次，每次大约 2 分钟，里里外外都刷到，牙齿白又亮！', tag: '卫生习惯' },
    { id: 'zta2-8', type: 'judge', q: '洗手只洗一下手心就够了，手背不用洗。', options: ['√ 对', '✗ 错'], answer: 1, explain: '手心、手背、指缝都要洗到，不然细菌还藏在指缝里哦。', tag: '卫生习惯' },
    { id: 'zta2-9', type: 'choice', q: '把洗手和洗脸连起来说，正确的是：', options: ['Wash your hands and face.', 'Brush your hands and face.', 'Clean your teeth and hair.', 'Open your mouth and eyes.'], answer: 0, explain: 'wash 洗手洗脸都用 wash；brush 只用在刷牙、梳头上。', tag: '动词辨析' },
    { id: 'zta2-10', type: 'choice', q: '吃饭前洗手，吃完饭可以帮忙：', options: ['clean the table 擦桌子', 'watch TV 看电视', 'play games 玩游戏', 'go to bed 睡觉'], answer: 0, explain: '饭后帮忙擦桌子，clean the table，是爱劳动的好孩子！', tag: '劳动习惯' },
  ],
  zta3: [
    { id: 'zta3-1', type: 'choice', q: '"Eat well" 的意思是：', options: ['吃得好', '吃得快', '吃得多', '不吃早饭'], answer: 0, explain: 'eat well 吃得好，蔬菜水果都爱吃，营养均衡身体棒！', tag: '短语理解' },
    { id: 'zta3-2', type: 'choice', q: '白白的"牛奶"是：', options: ['milk', 'water', 'juice', 'rice'], answer: 0, explain: 'milk 牛奶，每天喝牛奶，个子长得高！', tag: '食物词汇' },
    { id: 'zta3-3', type: 'choice', q: '"鸡蛋"的英语是：', options: ['egg', 'apple', 'banana', 'bread'], answer: 0, explain: 'egg 鸡蛋，eggs 是复数；一个鸡蛋是 an egg。', tag: '食物词汇' },
    { id: 'zta3-4', type: 'choice', q: '哪种是蔬菜 vegetable？', options: ['carrot 胡萝卜', 'apple 苹果', 'milk 牛奶', 'fish 鱼肉'], answer: 0, explain: 'carrot 胡萝卜是蔬菜；苹果是水果，牛奶是饮品。', tag: '单词分类' },
    { id: 'zta3-5', type: 'judge', q: '米饭的英语是 rice。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'rice 米饭，主食要吃够，才有力气跑和跳！', tag: '食物词汇' },
    { id: 'zta3-6', type: 'choice', q: '东西很好吃，可以说：', options: ['Yummy!', 'Sorry!', 'Hurry up!', 'Wake up!'], answer: 0, explain: 'Yummy! 真好吃！吃饭时的快乐表达。', tag: '表达' },
    { id: 'zta3-7', type: 'choice', q: '想再要一个苹果，可以说：', options: ['One more apple, please.', 'Give me your apple!', 'No apple, thanks.', 'Apples are big.'], answer: 0, explain: 'One more, please. 请再给我一个，加上 please 有礼貌。', tag: '句型' },
    { id: 'zta3-8', type: 'judge', q: '零食糖果很好吃，可以不吃饭光吃糖。', options: ['√ 对', '✗ 错'], answer: 1, explain: '糖吃多了会蛀牙，正餐要好好吃，零食要少吃哦。', tag: '健康习惯' },
    { id: 'zta3-9', type: 'choice', q: '大苹果的"大"是：', options: ['big', 'small', 'long', 'new'], answer: 0, explain: 'big 大，small 小，a big apple 一个大苹果。', tag: '形容词' },
    { id: 'zta3-10', type: 'choice', q: '不挑食的孩子会：', options: ['蔬菜水果都爱吃', '只吃肉不吃菜', '只喝饮料', '把青菜挑出来'], answer: 0, explain: '不挑食才能营养全面，Eat well, grow well! 吃得好，长得棒！', tag: '健康习惯' },
  ],
  zta4: [
    { id: 'zta4-1', type: 'choice', q: '"My pet" 的意思是：', options: ['我的宠物', '我的书包', '我的朋友', '我的家'], answer: 0, explain: 'pet 宠物，my pet 我的宠物，小动物是我们的小伙伴。', tag: '短语理解' },
    { id: 'zta4-2', type: 'choice', q: '喵喵叫的"小猫"是：', options: ['cat', 'dog', 'bird', 'fish'], answer: 0, explain: 'cat 小猫，dog 小狗，cat 会上树、爱抓老鼠。', tag: '动物词汇' },
    { id: 'zta4-3', type: 'choice', q: '会游泳的"金鱼"是：', options: ['fish', 'cat', 'rabbit', 'bird'], answer: 0, explain: 'fish 鱼，鱼儿鱼儿水里游，用鱼鳃呼吸不用肺。', tag: '动物词汇' },
    { id: 'zta4-4', type: 'choice', q: '长耳朵、爱吃萝卜的"兔子"是：', options: ['rabbit', 'duck', 'dog', 'turtle'], answer: 0, explain: 'rabbit 兔子，长耳朵短尾巴，蹦蹦跳跳真可爱。', tag: '动物词汇' },
    { id: 'zta4-5', type: 'judge', q: '"I have a cat." 的意思是"我有一只猫"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'I have... 我有……，介绍自己的宠物用这个句型。', tag: '句型' },
    { id: 'zta4-6', type: 'choice', q: '小狗会"汪汪"叫，狗是：', options: ['dog', 'cat', 'bird', 'fish'], answer: 0, explain: 'dog 小狗，是人类最忠实的朋友，会看家护院。', tag: '动物词汇' },
    { id: 'zta4-7', type: 'choice', q: '照顾小宠物，每天要：', options: ['喂食和给它喝水', '把它扔在一边', '追着它跑', '不给它水喝'], answer: 0, explain: '养宠物要有责任心：每天喂食、换水，还要爱抚它。', tag: '责任养成' },
    { id: 'zta4-8', type: 'judge', q: '小鸟 bird 会在天上飞。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Birds can fly. 鸟会飞，因为有一对翅膀 wings。', tag: '动物常识' },
    { id: 'zta4-9', type: 'choice', q: '小乌龟 turtle 走得：', options: ['very slow 很慢', 'very fast 很快', '像小鸟一样飞', '不会动'], answer: 0, explain: 'slow 慢的，乌龟背着壳慢慢爬，fast 快是它的反义词。', tag: '形容词' },
    { id: 'zta4-10', type: 'choice', q: '"It\'s small." 的意思是：', options: ['它很小。', '它很大。', '它很长。', '它很胖。'], answer: 0, explain: 'small 小的，反义词是 big 大的，小金鱼 small，大狗 big。', tag: '形容词' },
  ],
  zta5: [
    { id: 'zta5-1', type: 'choice', q: '"We are special!" 的意思是：', options: ['我们都很特别！', '我们都很高！', '我们在跑步！', '我们一起玩！'], answer: 0, explain: 'special 特别的，每个人都有自己的本领，都很了不起！', tag: '短语理解' },
    { id: 'zta5-2', type: 'choice', q: '"跑"的英语是：', options: ['run', 'jump', 'swim', 'fly'], answer: 0, explain: 'run 跑，I can run. 我会跑步；run fast 跑得快。', tag: '动词' },
    { id: 'zta5-3', type: 'choice', q: '青蛙和兔子都擅长"跳"，跳是：', options: ['jump', 'run', 'sing', 'draw'], answer: 0, explain: 'jump 跳，Jump! Jump! Jump! 蹦蹦跳跳身体好。', tag: '动词' },
    { id: 'zta5-4', type: 'choice', q: '鱼儿会在水里"游泳"，游泳是：', options: ['swim', 'fly', 'walk', 'sleep'], answer: 0, explain: 'swim 游泳，Fish can swim. 鱼会游泳。', tag: '动词' },
    { id: 'zta5-5', type: 'choice', q: '小鸟会在天上"飞"，飞是：', options: ['fly', 'run', 'jump', 'eat'], answer: 0, explain: 'fly 飞，Birds can fly. 鸟儿展翅天上飞。', tag: '动词' },
    { id: 'zta5-6', type: 'judge', q: '"I can sing." 的意思是"我会唱歌"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'can 会、能，后面跟动词原形：I can sing. 我会唱歌。', tag: '句型' },
    { id: 'zta5-7', type: 'choice', q: '想表达"我会画画"，说：', options: ['I can draw.', 'I can fly.', 'I can swim.', 'I can sing.'], answer: 0, explain: 'draw 画画，I can draw a cat. 我会画小猫。', tag: '句型' },
    { id: 'zta5-8', type: 'judge', q: '会游泳的小鱼说："我也会 fly 飞上天。"', options: ['√ 对', '✗ 错'], answer: 1, explain: '鱼会 swim 游泳，不会 fly 飞；会飞的是小鸟哦。', tag: '常识判断' },
    { id: 'zta5-9', type: 'choice', q: '同学跳绳很棒，你可以夸：', options: ['You can jump high!', 'You can\'t jump.', 'Sit down, please.', 'Goodbye!'], answer: 0, explain: 'You can jump high! 你跳得真高！夸夸小伙伴，友谊更甜。', tag: '表达' },
    { id: 'zta5-10', type: 'choice', q: '每个人都很特别，因为：', options: ['都有自己的本领', '都穿一样的衣服', '都用一样的书包', '都吃一样的饭'], answer: 0, explain: '有人会唱歌，有人会画画，We are special! 每个人都闪闪发光！', tag: '自信养成' },
  ],
  ztar: [
    { id: 'ztar-1', type: 'choice', q: '别人帮了你，你要说：', options: ['Thank you!', 'I\'m sorry.', 'Goodbye!', 'Wake up!'], answer: 0, explain: 'Thank you! 谢谢你！本期礼貌用语大明星。', tag: '礼貌用语' },
    { id: 'ztar-2', type: 'choice', q: '下面哪个是卫生好习惯？', options: ['brush my teeth 刷牙', 'watch TV 看电视', 'play games 玩游戏', 'eat candy 吃糖'], answer: 0, explain: '刷牙、洗手、洗脸都是卫生好习惯：wash, brush, clean!。', tag: '单词分类' },
    { id: 'ztar-3', type: 'choice', q: '"one more, please" 的意思是：', options: ['请再给我一个', '我不想要了', '给我你的', '一起分享吧'], answer: 0, explain: 'one more 再来一个，加上 please，客气又清楚。', tag: '句型' },
    { id: 'ztar-4', type: 'choice', q: '下面哪种动物会游泳？', options: ['fish 鱼', 'bird 鸟', 'cat 猫', 'rabbit 兔'], answer: 0, explain: 'Fish can swim. 鱼会游泳；鸟会飞，猫兔在地上跑。', tag: '动物常识' },
    { id: 'ztar-5', type: 'judge', q: '饭前要洗手，饭后可以帮忙擦桌子。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Wash before meals, clean after meals! 卫生劳动两不误。', tag: '习惯养成' },
    { id: 'ztar-6', type: 'choice', q: '"I can run fast." 的意思是：', options: ['我能跑得快。', '我会飞得很高。', '我会画画。', '我会唱歌。'], answer: 0, explain: 'run 跑 + fast 快，I can run fast. 我跑得快！', tag: '句型' },
    { id: 'ztar-7', type: 'choice', q: '牛奶和鸡蛋的英语分别是：', options: ['milk 和 egg', 'rice 和 fish', 'juice 和 bread', 'apple 和 banana'], answer: 0, explain: 'milk 牛奶、egg 鸡蛋，早餐好搭档，营养顶呱呱。', tag: '食物词汇' },
    { id: 'ztar-8', type: 'choice', q: '想请小伙伴一起玩，说：', options: ['Let\'s play!', 'Let\'s eat!', 'Let\'s go to bed!', 'Let\'s clean!'], answer: 0, explain: 'Let\'s play! 我们一起玩吧！交朋友的开心咒语。', tag: '句型' },
    { id: 'ztar-9', type: 'judge', q: '每个人的本领不一样，我们都应该互相学习。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'You can sing, I can draw. 互相学习，We are all special!。', tag: '成长规划' },
    { id: 'ztar-10', type: 'choice', q: '对小伙伴们展示自信，可以说：', options: ['Look at me! I can do it!', 'I can\'t do it.', 'It\'s too hard.', 'I don\'t know.'], answer: 0, explain: 'Look at me! I can do it! 看我的，我能行！大胆开口，自信满满！', tag: '表达' },
  ],
}
