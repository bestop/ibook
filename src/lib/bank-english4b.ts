// 沪教版（五四学制·牛津上海版）英语 四年级下册（现行版目录）随堂知识点题库
// 教材：九年义务教育课本 英语（牛津上海版）四年级下册 · 上海教育出版社
// 目录（电子课本网 / 教师之家 牛津上海课标版全书目录核对）：
//   Module 1 Using my five senses: Unit 1 What can you smell and taste? / Unit 2 How does it feel? / Unit 3 Look at the shadow!
//   Module 2 My favourite things: Unit 1 Sports / Unit 2 Cute animals / Unit 3 Home life
//   Module 3 Things around us: Unit 1 Sounds / Unit 2 Time / Unit 3 Days of the week
//   Module 4 More things to learn: Unit 1 A Music class / Unit 2 Festivals in China / Unit 3 Story time
// 每单元一关，每关 10 题，共 12 关 120 题，题目 id 前缀 ztj

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
    id: 'ztj1',
    name: 'Unit 1',
    title: 'What can you smell and taste?',
    emoji: '🍉',
    color: 'lime',
    lessons: ['Module 1: Using my five senses', 'smell / taste', 'sweet or sour?'],
    intro: '闭上眼睛闻一闻、尝一尝，西瓜葡萄猜一猜！',
  },
  {
    id: 'ztj2',
    name: 'Unit 2',
    title: 'How does it feel?',
    emoji: '🖐️',
    color: 'teal',
    lessons: ['Module 1: Using my five senses', 'sharp / blunt', 'hard / soft'],
    intro: '尖的、钝的、硬的、软的，小手一摸就知道！',
  },
  {
    id: 'ztj3',
    name: 'Unit 3',
    title: 'Look at the shadow!',
    emoji: '🕴️',
    color: 'amber',
    lessons: ['Module 1: Using my five senses', 'shadow & light', 'long / short'],
    intro: '太阳下的小影子，早上长长中午短，光影游戏真有趣！',
  },
  {
    id: 'ztj4',
    name: 'Unit 4',
    title: 'Sports',
    emoji: '🏸',
    color: 'orange',
    lessons: ['Module 2: My favourite things', 'ball games', 'play + sport'],
    intro: '足球、篮球、羽毛球，说说你最喜欢的运动！',
  },
  {
    id: 'ztj5',
    name: 'Unit 5',
    title: 'Cute animals',
    emoji: '🐰',
    color: 'pink',
    lessons: ['Module 2: My favourite things', 'kitten / puppy', 'Which one...?'],
    intro: '小猫、小狗、小仓鼠，可爱动物大集合！',
  },
  {
    id: 'ztj6',
    name: 'Unit 6',
    title: 'Home life',
    emoji: '🏠',
    color: 'sky',
    lessons: ['Module 2: My favourite things', 'rooms at home', 'What is he doing?'],
    intro: '客厅、卧室、小厨房，家里的生活真温馨！',
  },
  {
    id: 'ztj7',
    name: 'Unit 7',
    title: 'Sounds',
    emoji: '🔊',
    color: 'violet',
    lessons: ['Module 3: Things around us', 'loud / quiet', 'What is that sound?'],
    intro: '声音有大有小，轻轻说话静静听，做文明小达人！',
  },
  {
    id: 'ztj8',
    name: 'Unit 8',
    title: 'Time',
    emoji: '⏰',
    color: 'cyan',
    lessons: ['Module 3: Things around us', "What time is it?", "o'clock / half past"],
    intro: '滴答滴答看时钟，整点半点都会说！',
  },
  {
    id: 'ztj9',
    name: 'Unit 9',
    title: 'Days of the week',
    emoji: '📅',
    color: 'rose',
    lessons: ['Module 3: Things around us', 'Monday to Sunday', 'What day is it today?'],
    intro: '一周七天排排队，今天是星期几？',
  },
  {
    id: 'ztj10',
    name: 'Unit 10',
    title: 'A Music class',
    emoji: '🎹',
    color: 'emerald',
    lessons: ['Module 4: More things to learn', 'piano / violin', 'play the + instrument'],
    intro: '钢琴、小提琴、小鼓，音乐课上的乐器你会说吗？',
  },
  {
    id: 'ztj11',
    name: 'Unit 11',
    title: 'Festivals in China',
    emoji: '🥮',
    color: 'red',
    lessons: ['Module 4: More things to learn', 'Spring Festival', 'Mid-Autumn Festival'],
    intro: '春节饺子、中秋月饼，中国节日故事多！',
  },
  {
    id: 'ztj12',
    name: 'Unit 12',
    title: 'Story time',
    emoji: '📚',
    color: 'fuchsia',
    lessons: ['Module 4: More things to learn', 'Read and think', 'Review of the book'],
    intro: '故事里的大世界，期末大复习，十二关挑战通关！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  ztj1: [
    { id: 'ztj1-1', type: 'choice', q: '"smell" 和 "taste" 分别是：', options: ['闻和尝', '看和听', '摸和拿', '跑和跳'], answer: 0, explain: 'smell 闻（用鼻子），taste 尝（用舌头）。', tag: '词汇' },
    { id: 'ztj1-2', type: 'choice', q: '圆滚滚、绿皮的"西瓜"是：', options: ['watermelon', 'grape', 'lemon', 'peach'], answer: 0, explain: 'watermelon 西瓜，water + melon，夏天解暑冠军。', tag: '水果词汇' },
    { id: 'ztj1-3', type: 'choice', q: '一串一串紫莹莹的"葡萄"是：', options: ['grapes', 'apples', 'bananas', 'pears'], answer: 0, explain: 'grape 葡萄，一串葡萄常用复数 grapes。', tag: '水果词汇' },
    { id: 'ztj1-4', type: 'choice', q: '"The lemon tastes sour." 的意思是：', options: ['柠檬尝起来很酸。', '柠檬闻起来很香。', '柠檬是甜的。', '柠檬是圆的。'], answer: 0, explain: 'taste + 形容词，尝起来……；sour 酸。', tag: '句型' },
    { id: 'ztj1-5', type: 'judge', q: '"I can smell the flowers." 的意思是"我能闻到花香"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'smell 闻到，公园里花香阵阵。', tag: '句型' },
    { id: 'ztj1-6', type: 'choice', q: '蒙眼闻气味：闻到酸酸的可能是：', options: ['vinegar 醋', 'sugar 糖', 'milk 牛奶', 'rice 米饭'], answer: 0, explain: 'vinegar 醋酸酸的；糖是甜的，闻不出大味道。', tag: '情景' },
    { id: 'ztj1-7', type: 'choice', q: '问"你能闻到什么？"，说：', options: ['What can you smell?', 'What can you see?', 'What can you hear?', 'What do you like?'], answer: 0, explain: 'What can you smell? 回答 I can smell...（我能闻到……）。', tag: '句型' },
    { id: 'ztj1-8', type: 'choice', q: 'sweet 和 sour 是一对反义词，意思是：', options: ['甜和酸', '热和冷', '大和小', '硬和软'], answer: 0, explain: 'sweet 甜 ↔ sour 酸，味觉反义词成对记。', tag: '词汇' },
    { id: 'ztj1-9', type: 'judge', q: '不认识的水果不能随便闻着玩、随便吃，先问大人。', options: ['√ 对', '✗ 错'], answer: 0, explain: '有些植物汁液会引起过敏，安全第一。', tag: '安全常识' },
    { id: 'ztj1-10', type: 'choice', q: '西瓜尝起来甜甜的，说：', options: ['The watermelon tastes sweet.', 'The watermelon tastes sour.', 'The watermelon smells sweet.', 'The watermelon looks salty.'], answer: 0, explain: 'taste sweet 尝起来甜，smell 是闻起来的味道。', tag: '辨析' },
  ],
  ztj2: [
    { id: 'ztj2-1', type: 'choice', q: '"How does it feel?" 的意思是：', options: ['它摸起来怎么样？', '它是什么颜色？', '它在哪里？', '它多少钱？'], answer: 0, explain: 'feel 摸起来、感觉，问触感用 How does it feel?', tag: '句型' },
    { id: 'ztj2-2', type: 'choice', q: '小刀很"锋利"，锋利是：', options: ['sharp', 'blunt', 'soft', 'smooth'], answer: 0, explain: 'sharp 锋利，用小刀要小心，不要对着人。', tag: '触感词汇' },
    { id: 'ztj2-3', type: 'choice', q: '钝钝的、不锋利的是：', options: ['blunt', 'sharp', 'hard', 'rough'], answer: 0, explain: 'blunt 钝的，blunt pencil 是削钝了的铅笔，要削一削。', tag: '触感词汇' },
    { id: 'ztj2-4', type: 'choice', q: '仙人掌的刺摸起来：', options: ['sharp 扎手', 'soft 软软', 'smooth 光滑', 'sweet 甜甜'], answer: 0, explain: '仙人掌的刺 sharp，远远欣赏不要摸。', tag: '常识' },
    { id: 'ztj2-5', type: 'choice', q: '"The toy is soft and smooth." 的意思是：', options: ['玩具又软又光滑', '玩具又硬又粗糙', '玩具又尖又钝', '玩具又甜又酸'], answer: 0, explain: 'soft 软、smooth 滑，毛绒玩具的手感。', tag: '句型' },
    { id: 'ztj2-6', type: 'judge', q: 'sharp 的反义词是 blunt。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'sharp 锋利 ↔ blunt 钝，一组好搭档。', tag: '词汇' },
    { id: 'ztj2-7', type: 'choice', q: '摸一摸猜东西：又硬又粗糙的可能是：', options: ['brick 砖头', 'silk 丝绸', 'cotton ball 棉球', 'jelly 果冻'], answer: 0, explain: '砖头硬又糙；丝绸滑，棉球软，果冻 Q 弹。', tag: '情景' },
    { id: 'ztj2-8', type: 'choice', q: '使用剪刀时应该：', options: ['小心使用，不对着人', '挥舞剪刀玩', '边跑边剪', '递剪刀时尖头朝人'], answer: 0, explain: '剪刀 sharp，递剪刀要把把手朝向对方，安全用剪刀。', tag: '安全常识' },
    { id: 'ztj2-9', type: 'choice', q: '"rough" 的意思是：', options: ['粗糙的', '光滑的', '柔软的', '锋利的'], answer: 0, explain: 'rough 粗糙，树皮、砂纸摸起来粗粗的。', tag: '触感词汇' },
    { id: 'ztj2-10', type: 'judge', q: 'sharp、blunt、hard、soft、rough、smooth 都是触感词。', options: ['√ 对', '✗ 错'], answer: 0, explain: '它们描述摸起来的感觉，How does it feel? 一问便知。', tag: '单词分类' },
  ],
  ztj3: [
    { id: 'ztj3-1', type: 'choice', q: '"Look at the shadow!" 的意思是：', options: ['看那个影子！', '看那个照片！', '看那朵云！', '看那道光！'], answer: 0, explain: 'shadow 影子，Look at... 看……。', tag: '短语理解' },
    { id: 'ztj3-2', type: 'choice', q: '影子是怎么来的？', options: ['光被身体挡住形成的', '自己长出来的', '衣服掉下来的', '天上掉下来的'], answer: 0, explain: '光沿直线走，被身体挡住就形成了 shadow。', tag: '常识' },
    { id: 'ztj3-3', type: 'choice', q: '中午太阳高高照，影子：', options: ['short 短短的', 'long 长长的', '不见了的', '会说话的'], answer: 0, explain: '太阳在头顶，影子最短；早晚太阳斜，影子长。', tag: '常识' },
    { id: 'ztj3-4', type: 'choice', q: '"My shadow is long in the morning." 的意思是：', options: ['早上我的影子长长的。', '早上我的影子短短的。', '我的影子会跑。', '我早上没有影子。'], answer: 0, explain: 'long 长，早上太阳斜射影子拉得长。', tag: '句型' },
    { id: 'ztj3-5', type: 'judge', q: '晚上没有太阳，就看不到影子了。', options: ['√ 对', '✗ 错'], answer: 1, explain: '有光就有影子：太阳下山了，灯光、手电筒也能照出影子，手影游戏晚上照样玩。', tag: '常识' },
    { id: 'ztj3-6', type: 'choice', q: '"light" 的意思是：', options: ['光；灯', '影子', '黑暗', '雷声'], answer: 0, explain: 'light 光、灯，有 light 才有 shadow。', tag: '词汇' },
    { id: 'ztj3-7', type: 'choice', q: '和影子玩游戏：影子会：', options: ['跟着你做一样的动作', '跑得比你快', '自己说话', '突然消失不见'], answer: 0, explain: '影子跟着身体动，抬手它也抬手，像个小跟班。', tag: '常识' },
    { id: 'ztj3-8', type: 'choice', q: '在强烈阳光下玩久了要：', options: ['到阴凉处休息、多喝水', '一直暴晒', '不戴帽子', '不喝水'], answer: 0, explain: '防晒防中暑，阴凉休息最舒服。', tag: '健康常识' },
    { id: 'ztj3-9', type: 'judge', q: '手影戏可以用手做出小狗、小鸟的影子。', options: ['√ 对', '✗ 错'], answer: 0, explain: '手影戏是光影游戏，还能编成小故事表演。', tag: '拓展' },
    { id: 'ztj3-10', type: 'choice', q: '影子 shadow 和光 light 的关系是：', options: ['有光、有遮挡物才会有影子', '没有光影子更清楚', '影子会发光', '光跟着影子走'], answer: 0, explain: 'Light + object = shadow，科学小知识用英语说。', tag: '常识' },
  ],
  ztj4: [
    { id: 'ztj4-1', type: 'choice', q: '"sports" 的意思是：', options: ['运动', '食物', '科目', '节日'], answer: 0, explain: 'sport 运动，sports 使身体更健康。', tag: '词汇' },
    { id: 'ztj4-2', type: 'choice', q: '用球拍和羽毛球玩的"羽毛球"是：', options: ['badminton', 'football', 'table tennis', 'volleyball'], answer: 0, explain: 'badminton 羽毛球，play badminton 打羽毛球。', tag: '运动词汇' },
    { id: 'ztj4-3', type: 'choice', q: '"table tennis" 的意思是：', options: ['乒乓球', '网球', '篮球', '排球'], answer: 0, explain: 'table tennis 乒乓球，我们的国球！', tag: '运动词汇' },
    { id: 'ztj4-4', type: 'choice', q: '"What sports do you like?" 的回答是：', options: ['I like playing football.', 'I like apples.', 'It is Monday.', 'I am fine.'], answer: 0, explain: '回答喜欢的运动：I like playing + 运动名。', tag: '句型' },
    { id: 'ztj4-5', type: 'judge', q: '球类运动前要加 the：play the basketball。', options: ['√ 对', '✗ 错'], answer: 1, explain: '球类运动前不加 the：play basketball / play football；乐器前才加 the，别混淆哦。', tag: '语法' },
    { id: 'ztj4-6', type: 'choice', q: '"Does Ben like swimming?" 的肯定回答是：', options: ['Yes, he does.', 'Yes, he is.', 'Yes, he can.', 'Yes, I do.'], answer: 0, explain: 'Does 开头的问句用 does 回答，Ben 是 he。', tag: '语法' },
    { id: 'ztj4-7', type: 'choice', q: '排球用双手托球，"排球"是：', options: ['volleyball', 'basketball', 'football', 'baseball'], answer: 0, explain: 'volleyball 排球，team work 团队配合很重要。', tag: '运动词汇' },
    { id: 'ztj4-8', type: 'choice', q: '运动会赛跑 "run fast" 的意思是：', options: ['跑得快', '走得慢', '跳得高', '游得远'], answer: 0, explain: 'run 跑 + fast 快，I can run fast. 我跑得快。', tag: '短语' },
    { id: 'ztj4-9', type: 'judge', q: '运动要循序渐进，运动后要拉伸放松。', options: ['√ 对', '✗ 错'], answer: 0, explain: '先热身再运动，后拉伸，肌肉不酸痛。', tag: '健康常识' },
    { id: 'ztj4-10', type: 'choice', q: 'badminton、table tennis、volleyball 都是：', options: ['ball games 球类运动', 'subjects 科目', 'instruments 乐器', 'festivals 节日'], answer: 0, explain: '它们都是球类运动，play + 球类直接连用。', tag: '单词分类' },
  ],
  ztj5: [
    { id: 'ztj5-1', type: 'choice', q: '"cute animals" 的意思是：', options: ['可爱的动物', '凶猛的动物', '小玩具', '好朋友'], answer: 0, explain: 'cute 可爱的，小猫小狗都是 cute animals。', tag: '短语理解' },
    { id: 'ztj5-2', type: 'choice', q: '喵喵叫的小"猫咪"是：', options: ['kitten', 'puppy', 'hamster', 'parrot'], answer: 0, explain: 'kitten 小猫（cat 的宝宝），puppy 是小狗的宝宝。', tag: '动物词汇' },
    { id: 'ztj5-3', type: 'choice', q: '毛茸茸爱囤粮的"仓鼠"是：', options: ['hamster', 'rabbit', 'kitten', 'tortoise'], answer: 0, explain: 'hamster 仓鼠，腮帮子里能藏好多粮食。', tag: '动物词汇' },
    { id: 'ztj5-4', type: 'choice', q: '"Which one do you like?" 的意思是：', options: ['你喜欢哪一个？', '你喜欢什么颜色？', '你在哪里？', '它几岁了？'], answer: 0, explain: 'Which one...? 哪一个，I like the white one. 我喜欢白色的那只。', tag: '句型' },
    { id: 'ztj5-5', type: 'choice', q: '兔子有：', options: ['long ears and a short tail 长耳朵短尾巴', 'long nose 长鼻子', 'wings 翅膀', 'stripes 条纹'], answer: 0, explain: 'Rabbits have long ears and short tails。', tag: '常识' },
    { id: 'ztj5-6', type: 'judge', q: '小动物的名字前面常常用 it 指代。', options: ['√ 对', '✗ 错'], answer: 0, explain: '不知道性别或说动物时用 it：Look at the kitten. It is cute。', tag: '语法' },
    { id: 'ztj5-7', type: 'choice', q: '"The puppy has a short tail." 的意思是：', options: ['小狗有一条短尾巴。', '小狗有长耳朵。', '小狗会游泳。', '小狗爱吃骨头。'], answer: 0, explain: 'tail 尾巴，has 表示"有"。', tag: '句型' },
    { id: 'ztj5-8', type: 'choice', q: '养小宠物要学会：', options: ['定时喂食、清理、陪伴', '想起来才喂', '一直关在笼子里不管', '经常吓唬它'], answer: 0, explain: '养宠物要有责任心，照顾它的吃喝和心情。', tag: '品德' },
    { id: 'ztj5-9', type: 'judge', q: '被小猫小狗抓伤或咬伤后，要立刻告诉大人并去医院处理。', options: ['√ 对', '✗ 错'], answer: 0, explain: '动物伤口可能感染，及时告知大人、就医很重要。', tag: '安全常识' },
    { id: 'ztj5-10', type: 'choice', q: 'kitten、puppy、hamster、rabbit 都是：', options: ['pets/cute animals 可爱小动物', 'wild animals 猛兽', 'insects 昆虫', 'birds 鸟类'], answer: 0, explain: '它们常被当作 pets 宠物饲养。', tag: '单词分类' },
  ],
  ztj6: [
    { id: 'ztj6-1', type: 'choice', q: '"home life" 的意思是：', options: ['家庭生活', '学校生活', '周末计划', '旅行日记'], answer: 0, explain: 'home 家，home life 家里日常的温馨生活。', tag: '短语理解' },
    { id: 'ztj6-2', type: 'choice', q: '做饭的地方"厨房"是：', options: ['kitchen', 'bedroom', 'bathroom', 'balcony'], answer: 0, explain: 'kitchen 厨房，Mum is cooking in the kitchen。', tag: '家居词汇' },
    { id: 'ztj6-3', type: 'choice', q: '睡觉的"卧室"是：', options: ['bedroom', 'kitchen', 'living room', 'garden'], answer: 0, explain: 'bedroom 卧室，bed 床 + room 房间。', tag: '家居词汇' },
    { id: 'ztj6-4', type: 'choice', q: '全家看电视的"客厅"是：', options: ['living room', 'bathroom', 'study', 'dining room'], answer: 0, explain: 'living room 客厅，also called sitting room。', tag: '家居词汇' },
    { id: 'ztj6-5', type: 'choice', q: '洗澡刷牙的"浴室"是：', options: ['bathroom', 'bedroom', 'kitchen', 'balcony'], answer: 0, explain: 'bathroom 浴室，bath 洗澡 + room。', tag: '家居词汇' },
    { id: 'ztj6-6', type: 'choice', q: '"What is he doing?" 的意思是：', options: ['他正在做什么？', '他喜欢什么？', '他在哪里？', '他是谁？'], answer: 0, explain: 'be doing 现在进行时，问正在做的事。', tag: '句型' },
    { id: 'ztj6-7', type: 'choice', q: '"He is watching TV in the living room." 的意思是：', options: ['他正在客厅看电视。', '他喜欢在客厅看电视。', '他要去客厅。', '客厅里有电视。'], answer: 0, explain: 'is watching 正在看，进行时表示正在发生。', tag: '句型' },
    { id: 'ztj6-8', type: 'judge', q: '在浴室里玩水、把地板弄得到处湿湿的很危险。', options: ['√ 对', '✗ 错'], answer: 0, explain: '浴室地板湿滑容易摔倒，洗澡不玩水。', tag: '安全常识' },
    { id: 'ztj6-9', type: 'choice', q: '帮妈妈摆碗筷，"摆桌子"是：', options: ['set the table', 'break the table', 'jump on the table', 'hide the table'], answer: 0, explain: 'set the table 摆放餐具，饭后还要 clear the table 收拾。', tag: '短语' },
    { id: 'ztj6-10', type: 'judge', q: '自己的房间自己整理，是爱家的小主人。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Tidy my room. 整理房间，家更温馨。', tag: '习惯养成' },
  ],
  ztj7: [
    { id: 'ztj7-1', type: 'choice', q: '"sounds" 的意思是：', options: ['声音', '颜色', '味道', '影子'], answer: 0, explain: 'sound 声音，What is that sound? 那是什么声音？', tag: '词汇' },
    { id: 'ztj7-2', type: 'choice', q: '声音很大的"响亮的"是：', options: ['loud', 'quiet', 'soft', 'sweet'], answer: 0, explain: 'loud 响亮，The music is too loud. 音乐太响了。', tag: '声音词汇' },
    { id: 'ztj7-3', type: 'choice', q: '安安静静的"轻声的"是：', options: ['quiet', 'loud', 'noisy', 'big'], answer: 0, explain: 'quiet 安静，Please be quiet. 请保持安静。', tag: '声音词汇' },
    { id: 'ztj7-4', type: 'choice', q: '闹哄哄的"吵闹的"是：', options: ['noisy', 'quiet', 'small', 'clean'], answer: 0, explain: 'noisy 吵闹，noise 噪音，noisy 的反义词是 quiet。', tag: '声音词汇' },
    { id: 'ztj7-5', type: 'choice', q: '"What is that sound?" 的回答可能是：', options: ['It is a bird singing.', 'It is red.', 'It is big.', 'It is mine.'], answer: 0, explain: '问什么声音，回答声音的来源。', tag: '句型' },
    { id: 'ztj7-6', type: 'judge', q: '图书馆、医院里要 quiet，不能 noisy。', options: ['√ 对', '✗ 错'], answer: 0, explain: '公共场合轻声细语，不打扰别人是美德。', tag: '品德' },
    { id: 'ztj7-7', type: 'choice', q: '听音乐时音量太大：', options: ['会伤害听力', '对耳朵更好', '能治感冒', '没有影响'], answer: 0, explain: '音量适中最护耳，长期太响会损伤听力。', tag: '健康常识' },
    { id: 'ztj7-8', type: 'choice', q: '雷声轰隆隆，"雷"是：', options: ['thunder', 'rain', 'wind', 'cloud'], answer: 0, explain: 'thunder 雷，lightning 闪电，打雷时待在室内。', tag: '拓展' },
    { id: 'ztj7-9', type: 'choice', q: '"Don\'t make noise!" 的意思是：', options: ['不要吵闹！', '大声点！', '一起唱歌！', '快跑！'], answer: 0, explain: "Don't... 不要……，make noise 制造噪音。", tag: '句型' },
    { id: 'ztj7-10', type: 'judge', q: 'loud 和 quiet 是反义词。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'loud 响亮 ↔ quiet 安静，noisy 也是 quiet 的反义词。', tag: '词汇' },
  ],
  ztj8: [
    { id: 'ztj8-1', type: 'choice', q: '"What time is it?" 的意思是：', options: ['现在几点了？', '今天星期几？', '今天几号？', '你在哪里？'], answer: 0, explain: '问时间，回答 It is + 时间。', tag: '句型' },
    { id: 'ztj8-2', type: 'choice', q: '"It is seven o\'clock." 的意思是：', options: ['现在七点整。', '现在七点半。', '现在是七天。', '七点了要迟到。'], answer: 0, explain: "o'clock 表示整点，seven o'clock 七点整。", tag: '时间表达' },
    { id: 'ztj8-3', type: 'choice', q: '"half past seven" 的意思是：', options: ['七点半', '六点半', '七点整', '八点整'], answer: 0, explain: 'half 半 + past 过，half past seven 七点半。', tag: '时间表达' },
    { id: 'ztj8-4', type: 'choice', q: '八点整是：', options: ["eight o'clock", 'half past eight', 'half past seven', 'eight half'], answer: 0, explain: '整点用 o\'clock：It is eight o\'clock。', tag: '时间表达' },
    { id: 'ztj8-5', type: 'judge', q: '钟面上长针指向 3、短针指向 12，是三点整。', options: ['√ 对', '✗ 错'], answer: 1, explain: '别搞反啦：短针（时针）指 3、长针（分针）指 12，才是 three o\'clock；长针指 3 是三点一刻。', tag: '常识' },
    { id: 'ztj8-6', type: 'choice', q: '"It is time for bed." 的意思是：', options: ['该睡觉了。', '该吃饭了。', '该上学了。', '该运动了。'], answer: 0, explain: 'It is time for... 该做……了，按时睡觉长得高。', tag: '句型' },
    { id: 'ztj8-7', type: 'choice', q: '早上七点起床，说：', options: ['I get up at seven o\'clock.', 'I go to bed at seven o\'clock.', 'I eat lunch at seven.', 'I run at seven.'], answer: 0, explain: 'get up 起床，at + 时间点。', tag: '句型' },
    { id: 'ztj8-8', type: 'choice', q: '"quarter past eight" 的意思是：', options: ['八点一刻', '八点半', '七点三刻', '八点三刻'], answer: 0, explain: 'quarter 一刻钟（15 分钟），quarter past eight 8:15。', tag: '时间表达' },
    { id: 'ztj8-9', type: 'judge', q: '看动画片要有时间约定，到点就停。', options: ['√ 对', '✗ 错'], answer: 0, explain: '守时小达人，约定时间到了自觉关电视。', tag: '习惯养成' },
    { id: 'ztj8-10', type: 'choice', q: '问几点用 "What time is it?"，问星期用：', options: ['What day is it today?', 'What time is it?', 'What is the date?', 'How are you?'], answer: 0, explain: 'What day is it today? 今天星期几？It is Monday。', tag: '辨析' },
  ],
  ztj9: [
    { id: 'ztj9-1', type: 'choice', q: '"Days of the week" 的意思是：', options: ['一周的日子', '一年的月份', '四季', '一天的钟点'], answer: 0, explain: 'week 星期，一周有七天，Monday 到 Sunday。', tag: '短语理解' },
    { id: 'ztj9-2', type: 'choice', q: '一周的第一天（学校课程表上）是：', options: ['Monday 星期一', 'Sunday 星期日', 'Saturday 星期六', 'Friday 星期五'], answer: 0, explain: 'Monday 周一，新的一周开始啦。', tag: '星期词汇' },
    { id: 'ztj9-3', type: 'choice', q: '"What day is it today?" 的回答是：', options: ['It is Wednesday.', 'It is six o\'clock.', 'It is sunny.', 'It is June.'], answer: 0, explain: '问星期回答 It is + 星期几。', tag: '句型' },
    { id: 'ztj9-4', type: 'choice', q: '周末两天是：', options: ['Saturday and Sunday', 'Monday and Tuesday', 'Wednesday and Thursday', 'Friday and Monday'], answer: 0, explain: 'Saturday 周六、Sunday 周日，周末放松充电。', tag: '星期词汇' },
    { id: 'ztj9-5', type: 'judge', q: '星期名词的首字母要小写，如 monday。', options: ['√ 对', '✗ 错'], answer: 1, explain: '星期名词是专有名词，首字母必须大写：Monday, Tuesday...；monday 是错的。', tag: '语法' },
    { id: 'ztj9-6', type: 'choice', q: '周五的前一天是：', options: ['Thursday 星期四', 'Saturday 星期六', 'Wednesday 星期三', 'Sunday 星期日'], answer: 0, explain: 'Thursday 在 Friday 之前，星期四到啦，明天就是周五。', tag: '常识' },
    { id: 'ztj9-7', type: 'choice', q: '"On Monday, we have a Music class." 的意思是：', options: ['周一我们有一节音乐课。', '周一我们不上课。', '音乐课在周日。', '我们喜欢音乐。'], answer: 0, explain: 'on + 星期几表示在那天。', tag: '句型' },
    { id: 'ztj9-8', type: 'choice', q: '按顺序排：Monday, Tuesday, ______。', options: ['Wednesday', 'Friday', 'Saturday', 'Sunday'], answer: 0, explain: '周一二三：Monday, Tuesday, Wednesday。', tag: '星期词汇' },
    { id: 'ztj9-9', type: 'judge', q: '每天整理好书包，星期一就不会手忙脚乱。', options: ['√ 对', '✗ 错'], answer: 0, explain: '按课程表理书包，好习惯天天有。', tag: '习惯养成' },
    { id: 'ztj9-10', type: 'choice', q: 'Monday、Tuesday、Wednesday、Thursday、Friday、Saturday、Sunday 都是：', options: ['days of the week 一周七天', 'months 月份', 'seasons 季节', 'subjects 科目'], answer: 0, explain: '七个星期词，首字母都大写。', tag: '单词分类' },
  ],
  ztj10: [
    { id: 'ztj10-1', type: 'choice', q: '"a Music class" 的意思是：', options: ['一节音乐课', '一节数学课', '一场音乐会', '一个乐器店'], answer: 0, explain: 'Music 音乐（课首字母大写常指学科）。', tag: '短语理解' },
    { id: 'ztj10-2', type: 'choice', q: '黑白琴键的"钢琴"是：', options: ['piano', 'violin', 'drum', 'guitar'], answer: 0, explain: 'piano 钢琴，play the piano 弹钢琴。', tag: '乐器词汇' },
    { id: 'ztj10-3', type: 'choice', q: '用琴弓拉响的"小提琴"是：', options: ['violin', 'piano', 'flute', 'drum'], answer: 0, explain: 'violin 小提琴，play the violin 拉小提琴。', tag: '乐器词汇' },
    { id: 'ztj10-4', type: 'choice', q: '"play the drum" 的意思是：', options: ['敲鼓', '弹钢琴', '拉小提琴', '吹笛子'], answer: 0, explain: 'drum 鼓，play the drum 敲鼓，咚咚咚。', tag: '短语' },
    { id: 'ztj10-5', type: 'judge', q: '乐器前面要加 the：play the piano / play the violin。', options: ['√ 对', '✗ 错'], answer: 0, explain: '西洋乐器前加 the；球类运动前不加。', tag: '语法' },
    { id: 'ztj10-6', type: 'choice', q: '吹奏的横笛是：', options: ['flute', 'drum', 'piano', 'guitar'], answer: 0, explain: 'flute 笛子，play the flute 吹笛子。', tag: '乐器词汇' },
    { id: 'ztj10-7', type: 'choice', q: '"Can you play the piano?" 的回答是：', options: ['Yes, I can. / No, I can\'t.', 'Yes, I do.', 'Yes, it is.', 'Yes, I am.'], answer: 0, explain: 'Can 开头的问句用 can 回答。', tag: '句型' },
    { id: 'ztj10-8', type: 'choice', q: '练乐器的好习惯是：', options: ['每天坚持练习', '只上课不练习', '弹错了就摔琴', '三天打鱼两天晒网'], answer: 0, explain: 'Practice every day. 每天练一练，琴声更动听。', tag: '习惯养成' },
    { id: 'ztj10-9', type: 'judge', q: '音乐课欣赏别人的演奏时要安静鼓掌。', options: ['√ 对', '✗ 错'], answer: 0, explain: '安静聆听、热情鼓掌，是音乐会礼仪。', tag: '品德' },
    { id: 'ztj10-10', type: 'choice', q: 'piano、violin、guitar、drum、flute 都是：', options: ['instruments 乐器', 'sports 运动', 'subjects 科目', 'animals 动物'], answer: 0, explain: '它们都是乐器，play the + 乐器表示演奏。', tag: '单词分类' },
  ],
  ztj11: [
    { id: 'ztj11-1', type: 'choice', q: '"Festivals in China" 的意思是：', options: ['中国的节日', '西方的节日', '学校的活动', '周末计划'], answer: 0, explain: 'festival 节日，中国有许多传统节日。', tag: '短语理解' },
    { id: 'ztj11-2', type: 'choice', q: '吃饺子、放鞭炮、拜年的节日是：', options: ['the Spring Festival 春节', 'the Mid-Autumn Festival 中秋节', 'Christmas 圣诞节', "Children's Day 儿童节"], answer: 0, explain: 'Spring Festival 春节，中国最重要的传统节日。', tag: '节日词汇' },
    { id: 'ztj11-3', type: 'choice', q: '吃月饼、赏月的节日是：', options: ['the Mid-Autumn Festival', 'the Spring Festival', 'the Lantern Festival', 'Easter'], answer: 0, explain: 'Mid-Autumn Festival 中秋节，mooncake 月饼，月圆人团圆。', tag: '节日词汇' },
    { id: 'ztj11-4', type: 'choice', q: '"mooncake" 的意思是：', options: ['月饼', '饺子', '汤圆', '粽子'], answer: 0, explain: 'moon 月亮 + cake 饼 = mooncake 月饼。', tag: '食物词汇' },
    { id: 'ztj11-5', type: 'choice', q: '端午节的美食"粽子"是：', options: ['rice dumplings', 'noodles', 'mooncakes', 'fish'], answer: 0, explain: 'rice dumplings 粽子，端午赛龙舟吃粽子。', tag: '食物词汇' },
    { id: 'ztj11-6', type: 'judge', q: '"Happy New Year!" 只能用在元旦，春节不能说。', options: ['√ 对', '✗ 错'], answer: 1, explain: '春节也是新年，拜年时说 Happy New Year! 或 Happy Chinese New Year! 都可以。', tag: '文化常识' },
    { id: 'ztj11-7', type: 'choice', q: '元宵节看的"花灯"是：', options: ['lanterns', 'balloons', 'kites', 'stars'], answer: 0, explain: 'lantern 灯笼，Lantern Festival 元宵节看花灯、吃汤圆。', tag: '节日词汇' },
    { id: 'ztj11-8', type: 'choice', q: '春节长辈给的"压岁钱"可以说：', options: ['lucky money', 'paper money', 'funny money', 'quick money'], answer: 0, explain: 'lucky money 压岁钱，装在红包 red packet 里。', tag: '文化常识' },
    { id: 'ztj11-9', type: 'judge', q: '放鞭炮有危险，要在成人陪同下按规定燃放，或用电子鞭炮代替。', options: ['√ 对', '✗ 错'], answer: 0, explain: '安全第一，遵守当地规定，热闹又平安。', tag: '安全常识' },
    { id: 'ztj11-10', type: 'choice', q: '把春节介绍给外国朋友，可以说：', options: ['The Spring Festival is a big festival in China.', 'The Spring Festival is boring.', 'We have no festivals.', 'Christmas is a Chinese festival.'], answer: 0, explain: '用英语介绍中国节日，做文化传播小使者！', tag: '表达' },
  ],
  ztj12: [
    { id: 'ztj12-1', type: 'choice', q: '"Story time" 的意思是：', options: ['故事时间', '音乐时间', '运动时间', '午餐时间'], answer: 0, explain: 'story 故事，Story time 一起读小故事。', tag: '短语理解' },
    { id: 'ztj12-2', type: 'choice', q: '本学期学过：闻一闻、尝一尝是：', options: ['smell and taste', 'see and hear', 'touch and feel', 'run and jump'], answer: 0, explain: 'smell 闻、taste 尝，五感词大家族。', tag: '复习' },
    { id: 'ztj12-3', type: 'choice', q: '"It is half past nine." 的意思是：', options: ['现在九点半。', '现在九点整。', '现在八点半。', '现在十点半。'], answer: 0, explain: 'half past + 小时 = 几点半。', tag: '复习' },
    { id: 'ztj12-4', type: 'choice', q: '"play the violin" 的意思是：', options: ['拉小提琴', '踢足球', '打篮球', '敲鼓'], answer: 0, explain: '乐器前加 the：play the violin。', tag: '复习' },
    { id: 'ztj12-5', type: 'judge', q: '中秋节吃 mooncakes，春节吃 dumplings（饺子）。', options: ['√ 对', '✗ 错'], answer: 0, explain: '不同节日有不同美食，文化知识真有趣。', tag: '文化复习' },
    { id: 'ztj12-6', type: 'choice', q: '"What day is it today?" 回答"今天是周五"：', options: ['It is Friday.', 'It is five o\'clock.', 'It is sunny.', 'It is May.'], answer: 0, explain: '问星期答星期，Friday 周五。', tag: '复习' },
    { id: 'ztj12-7', type: 'choice', q: '中午影子 short 的原因是：', options: ['太阳在头顶正上方', '太阳落山了', '影子去睡觉了', '影子变胖了'], answer: 0, explain: '太阳越高影子越短，早晚影子才长。', tag: '常识复习' },
    { id: 'ztj12-8', type: 'choice', q: '"She is cooking in the kitchen." 的意思是：', options: ['她正在厨房做饭。', '她喜欢厨房。', '她要去厨房。', '厨房很大。'], answer: 0, explain: 'is cooking 正在做饭，现在进行时。', tag: '语法复习' },
    { id: 'ztj12-9', type: 'judge', q: '乒乓球是 table tennis，羽毛球是 badminton。', options: ['√ 对', '✗ 错'], answer: 0, explain: '国球 table tennis，badminton 羽毛球，运动词记牢。', tag: '复习' },
    { id: 'ztj12-10', type: 'choice', q: '读故事时最好的习惯是：', options: ['边读边想故事内容', '一目十行不思考', '只看插图', '跳着读'], answer: 0, explain: 'Read and think. 边读边思考，故事越读越有意思。', tag: '学习习惯' },
  ],
}
