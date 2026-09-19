// 人教版PEP英语 四年级上册（三年级起点·六三制 2025秋新版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（PEP）四年级上册（2025 秋版）· 人民教育出版社
// 目录（电子课本网 dzkbw pep4s_2025 权威核对）：
//   Unit 1 Helping at home（A How are families different? / B How can we help our family?）
//   Unit 2 My friends（A Who are your friends? / B How do we choose our friends?）
//   Unit 3 Places we live in（A What can we see in a community? / B What do people do in a community?）
//   Unit 4 Helping in the community（A What jobs are important? / B How can young people help?）
//   Unit 5 The weather and us（A How can the weather be different? / B What do we do in different weather?）
//   Unit 6 Changing for the seasons（A What do we wear? / B What do we do in different seasons?）
//   Revision: Let's help!
// 每单元一关，每关 10 题，共 7 关 70 题，题目 id 前缀 zd

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
    id: 'zd1',
    name: 'Unit 1',
    title: 'Helping at home',
    emoji: '🏠',
    color: 'amber',
    lessons: ['How are families different?', 'How can we help our family?', 'Project: Happy family poster'],
    intro: '家人每天都在忙什么？家务小帮手就是我！',
  },
  {
    id: 'zd2',
    name: 'Unit 2',
    title: 'My friends',
    emoji: '🧑‍🤝‍🧑',
    color: 'orange',
    lessons: ['Who are your friends?', 'How do we choose our friends?', 'Project: Friend book'],
    intro: '介绍我的好朋友，真诚友善才是友谊的魔法！',
  },
  {
    id: 'zd3',
    name: 'Unit 3',
    title: 'Places we live in',
    emoji: '🏘️',
    color: 'lime',
    lessons: ['What can we see in a community?', 'What do people do in a community?', 'Project: Dream community'],
    intro: '公园、医院、商店……我的社区生活真方便！',
  },
  {
    id: 'zd4',
    name: 'Unit 4',
    title: 'Helping in the community',
    emoji: '🦺',
    color: 'teal',
    lessons: ['What jobs are important?', 'How can young people help?', 'Project: School helpers'],
    intro: '医生、司机、清洁工……每个岗位都在帮助大家！',
  },
  {
    id: 'zd5',
    name: 'Unit 5',
    title: 'The weather and us',
    emoji: '🌦️',
    color: 'rose',
    lessons: ['How can the weather be different?', 'What do we do in different weather?', 'Project: Weather reminder'],
    intro: '晴天雨天大不同，看天出门有妙招！',
  },
  {
    id: 'zd6',
    name: 'Unit 6',
    title: 'Changing for the seasons',
    emoji: '🍂',
    color: 'cyan',
    lessons: ['What do we wear in different seasons?', 'What do we do in different seasons?', 'Project: Travel card'],
    intro: '春夏秋冬换衣裳，四季活动乐不停！',
  },
  {
    id: 'zdr',
    name: 'Revision',
    title: "Let's help!",
    emoji: '🌟',
    color: 'pink',
    lessons: ["Let's help!", '常用表达语', '综合复习'],
    intro: '帮助家人、帮助社区，把四上学过的本领全用上！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zd1: [
    { id: 'zd1-1', type: 'choice', q: '"Helping at home" 的意思是：', options: ['在家帮忙做家务', '在家里玩', '在家写作业', '在家睡觉'], answer: 0, explain: 'help 帮助，helping at home 在家帮忙，家务人人有份！', tag: '短语理解' },
    { id: 'zd1-2', type: 'choice', q: '"sweep the floor" 的意思是：', options: ['扫地', '洗碗', '浇花', '叠衣服'], answer: 0, explain: 'sweep 扫，sweep the floor 扫地；wash the dishes 洗碗。', tag: '家务' },
    { id: 'zd1-3', type: 'choice', q: '妈妈做饭很忙，你可以：', options: ['帮忙摆碗筷', '只顾看电视', '催她快点', '把零食吃光'], answer: 0, explain: 'Set the table. 摆碗筷，做家务小帮手，家人更轻松！', tag: '家务' },
    { id: 'zd1-4', type: 'choice', q: '"How are families different?" 是在问：', options: ['家庭之间有什么不同？', '家人在做什么？', '你爱家人吗？', '你家在哪里？'], answer: 0, explain: 'different 不同的，每个家庭的日常都不一样，互相了解真有趣。', tag: '句型' },
    { id: 'zd1-5', type: 'judge', q: '衣服脱下来应该叠好放整齐，而不是随手一扔。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Fold your clothes. 叠衣服，整理收纳好习惯，房间整齐心情好！', tag: '习惯养成' },
    { id: 'zd1-6', type: 'choice', q: '"My dad cooks dinner." 的意思是：', options: ['我爸爸做晚饭。', '我爸爸吃晚饭。', '我爸爸买菜。', '我爸爸洗碗。'], answer: 0, explain: 'cook 做饭（动词），cooks dinner 做晚饭，有的家庭是爸爸下厨哦。', tag: '句型' },
    { id: 'zd1-7', type: 'choice', q: '想主动帮忙，可以说：', options: ['What can I do?', 'Leave me alone!', 'It\'s not my job.', 'I\'m busy!'], answer: 0, explain: 'What can I do? 我能做点什么？主动询问，帮忙有方向！', tag: '句型' },
    { id: 'zd1-8', type: 'choice', q: '弟弟妹妹还小，作为哥哥姐姐应该：', options: ['照顾他们', '欺负他们', '抢他们玩具', '不理他们'], answer: 0, explain: 'care about... 关心照顾，家人之间要互相关爱。', tag: '品德养成' },
    { id: 'zd1-9', type: 'choice', q: '给花园里的花"浇水"是：', options: ['water the flowers', 'wash the flowers', 'cut the flowers', 'eat the flowers'], answer: 0, explain: 'water 作动词"浇水"，water the flowers 给花浇水。', tag: '动词短语' },
    { id: 'zd1-10', type: 'judge', q: '有些家庭爸爸做饭多，有些家庭妈妈做饭多，这都很正常。', options: ['√ 对', '✗ 错'], answer: 0, explain: '每个家庭的分工不同，互相体谅、彼此帮助才是关键！', tag: '情感态度' },
  ],
  zd2: [
    { id: 'zd2-1', type: 'choice', q: '"My friends" 单元教你：', options: ['认识朋友、珍惜友谊', '一个人玩耍', '和同学吵架', '抄别人作业'], answer: 0, explain: 'friend 朋友，好朋友是成长路上最好的礼物！', tag: '主题理解' },
    { id: 'zd2-2', type: 'choice', q: '"Who are your friends?" 回答正确的是：', options: ['Mike and Amy are my friends.', 'I\'m nine.', 'It\'s sunny.', 'I like apples.'], answer: 0, explain: '问"谁是你的朋友"，回答要说出朋友的名字。', tag: '句型' },
    { id: 'zd2-3', type: 'choice', q: '形容朋友"个子高的"，用：', options: ['tall', 'short', 'small', 'old'], answer: 0, explain: 'tall 高的，short 矮的/短的；My friend is tall. 我朋友高高的。', tag: '形容词' },
    { id: 'zd2-4', type: 'choice', q: '"She is kind." 的意思是：', options: ['她很友善。', '她很调皮。', '她很高。', '她很强壮。'], answer: 0, explain: 'kind 友善的、好心的，kind 的朋友人人都想交！', tag: '形容词' },
    { id: 'zd2-5', type: 'judge', q: '选朋友要看他是不是真诚友善，而不是看他有多少玩具。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'How do we choose our friends? 真诚、善良、爱帮助人，才是好朋友的标准！', tag: '友谊观' },
    { id: 'zd2-6', type: 'choice', q: '"strong" 的意思是：', options: ['强壮的', '瘦弱的', '年轻的', '开心的'], answer: 0, explain: 'strong 强壮的，He is strong. 他很强壮。', tag: '形容词' },
    { id: 'zd2-7', type: 'choice', q: '朋友比赛输了很难过，你应该：', options: ['安慰鼓励他', '笑话他', '到处宣传', '不理他'], answer: 0, explain: '安慰朋友：Don\'t worry. You can do it next time!，鼓励最温暖！', tag: '品德养成' },
    { id: 'zd2-8', type: 'choice', q: '"He often helps me." 中 often 的意思是：', options: ['经常', '从不', '很少', '将来'], answer: 0, explain: 'often 经常，频度副词；他经常帮助我，真够朋友！', tag: '频度副词' },
    { id: 'zd2-9', type: 'choice', q: '介绍朋友给大家认识，可以说：', options: ['This is my friend, Lily.', 'I am Lily.', 'Lily is my mother.', 'That is a dog.'], answer: 0, explain: 'This is my friend, + 名字，介绍朋友的万能句！', tag: '句型' },
    { id: 'zd2-10', type: 'judge', q: '好朋友之间也要说"请"和"谢谢"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Please 和 Thank you 对谁都要说，礼貌让友谊更长久！', tag: '礼貌用语' },
  ],
  zd3: [
    { id: 'zd3-1', type: 'choice', q: '"Places we live in" 的意思是：', options: ['我们居住的地方', '我们去旅行', '我们上学的地方', '动物园'], answer: 0, explain: 'places 地方，live in 居住，社区家园大发现！', tag: '短语理解' },
    { id: 'zd3-2', type: 'choice', q: '生病了要去的地方是：', options: ['hospital 医院', 'park 公园', 'shop 商店', 'zoo 动物园'], answer: 0, explain: 'hospital 医院，医生护士在这里帮我们看病。', tag: '场所词汇' },
    { id: 'zd3-3', type: 'choice', q: '"community" 的意思是：', options: ['社区', '国家', '班级', '家庭'], answer: 0, explain: 'community 社区，我们身边的小区、街道都属于社区。', tag: '词汇' },
    { id: 'zd3-4', type: 'choice', q: '在社区里可以散步、锻炼的地方是：', options: ['park 公园', 'hospital 医院', 'bank 银行', 'cinema 电影院'], answer: 0, explain: 'park 公园，跑步、散步、放风筝，社区公园真热闹！', tag: '场所词汇' },
    { id: 'zd3-5', type: 'judge', q: '"There is a big park near my home." 意思是"我家附近有一个大公园"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'There is... 有……；near my home 在我家附近。', tag: '句型' },
    { id: 'zd3-6', type: 'choice', q: '买文具、买水果可以去：', options: ['shop 商店', 'hospital 医院', 'park 公园', 'playground 操场'], answer: 0, explain: 'shop 商店，community 里的超市和小店都是 shop。', tag: '场所词汇' },
    { id: 'zd3-7', type: 'choice', q: '在社区图书馆应该：', options: ['安静看书', '大声唱歌', '奔跑打闹', '吃东西'], answer: 0, explain: 'library 图书馆，Be quiet! 保持安静，做个文明读者。', tag: '场所规则' },
    { id: 'zd3-8', type: 'choice', q: '"What do people do in a community?" 是在问：', options: ['人们在社区里做什么？', '社区里有什么？', '社区在哪里？', '你喜欢社区吗？'], answer: 0, explain: '问"人们做什么"，回答：They walk and play in the park.。', tag: '句型' },
    { id: 'zd3-9', type: 'choice', q: '爱护社区环境，应该：', options: ['垃圾分类入箱', '乱扔垃圾', '踩踏草坪', '在墙上画画'], answer: 0, explain: '爱护社区人人有责，垃圾入箱、爱护绿地，家园更美好！', tag: '品德养成' },
    { id: 'zd3-10', type: 'judge', q: 'restaurant（餐馆）是吃饭的地方。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'restaurant 餐馆，社区里还有 school、post office 等场所。', tag: '场所词汇' },
  ],
  zd4: [
    { id: 'zd4-1', type: 'choice', q: '"Helping in the community" 的意思是：', options: ['在社区里互相帮助', '在家帮忙', '去社区玩', '搬家'], answer: 0, explain: 'community 社区，每个人出一份力，社区更温暖！', tag: '短语理解' },
    { id: 'zd4-2', type: 'choice', q: '给我们看病的职业是：', options: ['doctor 医生', 'driver 司机', 'farmer 农民', 'pilot 飞行员'], answer: 0, explain: 'doctor 医生治病救人，hospital 里的重要岗位！', tag: '职业词汇' },
    { id: 'zd4-3', type: 'choice', q: '开公交车的"司机"是：', options: ['driver', 'doctor', 'teacher', 'cook'], answer: 0, explain: 'driver 司机，drive 驾驶；bus driver 公交车司机。', tag: '职业词汇' },
    { id: 'zd4-4', type: 'choice', q: '教学生知识的职业是：', options: ['teacher', 'driver', 'cleaner', 'farmer'], answer: 0, explain: 'teacher 老师，school 里的重要角色，教给我们知识和本领。', tag: '职业词汇' },
    { id: 'zd4-5', type: 'judge', q: '清洁工的工作又脏又累，不值得尊重。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！每种工作都很重要，清洁工让城市干净美丽，值得我们尊重和感谢！', tag: '职业态度' },
    { id: 'zd4-6', type: 'choice', q: '"farmer" 的工作是：', options: ['种庄稼、养动物', '开车', '看病', '教书'], answer: 0, explain: 'farmer 农民，在 farm 农场辛苦劳动，为我们种出粮食！', tag: '职业词汇' },
    { id: 'zd4-7', type: 'choice', q: '小学生可以帮助社区的方式：', options: ['捡起地上的垃圾', '在墙上涂画', '破坏长椅', '乱按门铃'], answer: 0, explain: 'Young people can help too! 小手捡起垃圾，社区因你更美丽！', tag: '品德养成' },
    { id: 'zd4-8', type: 'choice', q: '"police officer" 指的是：', options: ['警察', '厨师', '邮递员', '理发师'], answer: 0, explain: 'police officer 警察，保护大家的安全，遇到困难可以找他们！', tag: '职业词汇' },
    { id: 'zd4-9', type: 'choice', q: '在学校帮助大家的门卫、保洁叔叔阿姨是：', options: ['school helpers', 'movie stars', 'visitors', 'players'], answer: 0, explain: 'school helpers 学校帮手们，他们让校园更安全更整洁，要说谢谢哦！', tag: '职业词汇' },
    { id: 'zd4-10', type: 'judge', q: '对帮助过你的人说 Thank you!，感恩之心要常有。', options: ['√ 对', '✗ 错'], answer: 0, explain: '每一份帮助都值得感谢，感恩让社区更有爱！', tag: '品德养成' },
  ],
  zd5: [
    { id: 'zd5-1', type: 'choice', q: '"The weather and us" 的意思是：', options: ['天气和我们', '我们和宇宙', '四季变化', '水循环'], answer: 0, explain: 'weather 天气，天气影响我们的衣食住行。', tag: '短语理解' },
    { id: 'zd5-2', type: 'choice', q: '"sunny" 的意思是：', options: ['晴朗的', '下雨的', '下雪的', '刮风的'], answer: 0, explain: 'sunny 晴朗的，sun 太阳 + ny，晴天出门要防晒哦！', tag: '天气词汇' },
    { id: 'zd5-3', type: 'choice', q: '外面在下雨，出门要带：', options: ['umbrella 雨伞', 'sunglasses 太阳镜', 'fan 扇子', 'scarf 围巾'], answer: 0, explain: 'It\'s rainy. 下雨了，带上 umbrella 雨伞才不会淋湿！', tag: '生活常识' },
    { id: 'zd5-4', type: 'choice', q: '问"今天天气怎么样"，应该说：', options: ['What\'s the weather like today?', 'What time is it?', 'What\'s your name?', 'What day is it?'], answer: 0, explain: 'What\'s the weather like? 天气怎么样？回答：It\'s windy.。', tag: '句型' },
    { id: 'zd5-5', type: 'judge', q: '"windy" 的意思是"刮风的"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'wind 风 + y = windy 刮风的，大风吹得头发飞起来！', tag: '天气词汇' },
    { id: 'zd5-6', type: 'choice', q: '"cloudy" 的意思是：', options: ['多云的', '晴朗的', '寒冷的', '炎热的'], answer: 0, explain: 'cloud 云 + y = cloudy 多云的，天上有许多云朵。', tag: '天气词汇' },
    { id: 'zd5-7', type: 'choice', q: '下雪天最有趣的活动是：', options: ['堆雪人 make a snowman', '游泳', '野餐', '放风筝'], answer: 0, explain: 'It\'s snowy. 下雪了，make a snowman 堆雪人，打雪仗真开心！', tag: '天气活动' },
    { id: 'zd5-8', type: 'choice', q: '雷雨天气，正确的做法是：', options: ['待在室内，远离窗户', '在大树下避雨', '在空旷处打伞跑', '爬到高处'], answer: 0, explain: '雷雨天待在安全的室内，不站树下，安全第一！', tag: '安全常识' },
    { id: 'zd5-9', type: 'choice', q: '"hot" 的意思是：', options: ['热的', '冷的', '凉的', '温的'], answer: 0, explain: 'hot 热的，cold 冷的；It\'s hot today. 今天好热呀！', tag: '天气词汇' },
    { id: 'zd5-10', type: 'judge', q: '天气变冷时要及时添加衣服，小心着凉。', options: ['√ 对', '✗ 错'], answer: 0, explain: '天气变化早知道，增减衣服身体好！', tag: '健康习惯' },
  ],
  zd6: [
    { id: 'zd6-1', type: 'choice', q: '"Changing for the seasons" 的意思是：', options: ['随季节而改变', '四季变化图', '季节旅行', '改变季节'], answer: 0, explain: 'season 季节，随着季节变化换衣服、换活动。', tag: '短语理解' },
    { id: 'zd6-2', type: 'choice', q: '一年有四个季节，spring 是：', options: ['春天', '夏天', '秋天', '冬天'], answer: 0, explain: 'spring 春、summer 夏、autumn/fall 秋、winter 冬。', tag: '季节词汇' },
    { id: 'zd6-3', type: 'choice', q: '冬天很冷，我们要：', options: ['wear warm clothes', 'eat ice cream', 'go swimming', 'wear T-shirt'], answer: 0, explain: 'winter 冬天，wear warm clothes 穿上暖和的衣服：coat、sweater。', tag: '季节穿搭' },
    { id: 'zd6-4', type: 'choice', q: '"In autumn, leaves turn yellow." 的意思是：', options: ['秋天树叶变黄了。', '春天树叶绿了。', '冬天树叶掉了。', '夏天树叶很多。'], answer: 0, explain: 'turn 变得，leaves 树叶（leaf 的复数），秋天金黄满地！', tag: '句型' },
    { id: 'zd6-5', type: 'judge', q: 'summer（夏天）很热，可以多吃冷饮、多吹空调。', options: ['√ 对', '✗ 错'], answer: 1, explain: '错！冷饮吃多、空调吹多容易生病，适量就好，多喝温水更健康。', tag: '健康习惯' },
    { id: 'zd6-6', type: 'choice', q: '最适合放风筝的季节是：', options: ['spring 春天', 'winter 冬天', '雨季', '任何时间'], answer: 0, explain: 'spring 春暖花开，微风习习，fly a kite 放风筝正合适！', tag: '季节活动' },
    { id: 'zd6-7', type: 'choice', q: '"warm" 的意思是：', options: ['温暖的', '寒冷的', '炎热的', '凉爽的'], answer: 0, explain: 'warm 温暖的，cool 凉爽的，hot 炎热的，cold 寒冷的。', tag: '形容词' },
    { id: 'zd6-8', type: 'choice', q: '夏天游泳最要注意：', options: ['有大人陪同，去正规泳池', '独自去河里', '吃饱马上游', '游到深水区'], answer: 0, explain: '安全第一！游泳要有大人陪同，去正规泳池，防溺水要牢记！', tag: '安全常识' },
    { id: 'zd6-9', type: 'choice', q: '"Which season do you like best?" 回答正确的是：', options: ['I like autumn best.', 'I like apples.', 'It\'s cold.', 'Yes, I do.'], answer: 0, explain: 'Which season... best? 最喜欢哪个季节？回答：I like + 季节 + best.。', tag: '句型' },
    { id: 'zd6-10', type: 'judge', q: '不同的季节做不同的运动，坚持锻炼身体棒。', options: ['√ 对', '✗ 错'], answer: 0, explain: '春天放风筝、夏天游泳、秋天跑步、冬天跳绳，四季锻炼不停歇！', tag: '健康习惯' },
  ],
  zdr: [
    { id: 'zdr-1', type: 'choice', q: '"Let\'s help!" 的意思是：', options: ['让我们帮忙吧！', '让我们走吧！', '让我们玩吧！', '让我们吃吧！'], answer: 0, explain: 'Let\'s = Let us，让我们……吧！帮助别人快乐自己！', tag: '短语理解' },
    { id: 'zdr-2', type: 'choice', q: '奶奶拎着重东西，你应该：', options: ['帮她拎一些', '假装没看见', '跑开玩', '催她走快点'], answer: 0, explain: 'Let me help you. 让我帮您！尊老爱幼从我做起！', tag: '品德养成' },
    { id: 'zdr-3', type: 'choice', q: '下雨天送伞的说法是：', options: ['Here\'s an umbrella for you.', 'Bye-bye!', 'It\'s hot.', 'What a pity!'], answer: 0, explain: 'Here\'s... 给你……，Here\'s an umbrella for you. 给你一把伞。', tag: '句型' },
    { id: 'zdr-4', type: 'choice', q: '下面哪个是天气？', options: ['rainy 下雨的', 'river 河流', 'ruler 尺子', 'ready 准备'], answer: 0, explain: 'rainy 是天气词；sunny、windy、cloudy 也是。', tag: '单词分类' },
    { id: 'zdr-5', type: 'judge', q: 'It\'s sunny today. 意思是"今天天气晴朗"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'sunny 晴朗的，适合户外活动，记得做好防晒！', tag: '天气词汇' },
    { id: 'zdr-6', type: 'choice', q: '社区里发传单的叔叔递给你一张纸，你应该：', options: ['看看是什么，扔进分类垃圾箱', '随手扔地上', '扔到别人门口', '贴墙上'], answer: 0, explain: '看完的传单要扔进垃圾箱，爱护社区环境人人有责！', tag: '品德养成' },
    { id: 'zdr-7', type: 'choice', q: '夸朋友的新书包漂亮，可以说：', options: ['Your schoolbag is nice!', 'Your schoolbag is ugly!', 'Give it to me!', 'I don\'t care!'], answer: 0, explain: 'nice 漂亮的，学会赞美别人，大家都开心！', tag: '礼貌用语' },
    { id: 'zdr-8', type: 'choice', q: '"cleaner" 指的是：', options: ['清洁工', '老师', '司机', '医生'], answer: 0, explain: 'cleaner 清洁工，clean 打扫，他们让城市一尘不染！', tag: '职业词汇' },
    { id: 'zdr-9', type: 'judge', q: '帮助别人的时候，也要注意自己的安全。', options: ['√ 对', '✗ 错'], answer: 0, explain: '帮助他人很棒，但要在自己能力范围内，安全永远第一！', tag: '安全常识' },
    { id: 'zdr-10', type: 'choice', q: '这学期学到的"互相帮助"精神是：', options: ['Everyone helps each other.', 'I only help myself.', 'Never help anyone.', 'Help and ask for money.'], answer: 0, explain: 'Everyone helps each other. 人人互相帮助，家庭、社区都会更美好！', tag: '主题升华' },
  ],
}
