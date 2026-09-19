// 2024 秋使用版 统编语文（人民教育出版社）一年级上册 随堂知识点题库
// 目录（电子课本网核对）：我上学了 + 八个单元
//   一 识字（天地人/金木水火土/口耳目手足/日月山川）
//   二 三 四 汉语拼音（a o e → y w / g k h → y w / 复韵母与鼻韵母）
//   五 阅读（秋天/江南/雪地里的小画家/四季）
//   六 识字（对韵歌/日月明/小书包/升国旗）
//   七 阅读（小小的船/影子/两件宝）
//   八 阅读（比尾巴/乌鸦喝水/雨点儿）
// 每个单元一关，每关 10 题，题目 id 前缀 a

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
    id: 'u1',
    name: '第一单元',
    title: '识字启蒙',
    emoji: '🌱',
    color: 'teal',
    lessons: ['《天地人》', '《金木水火土》', '《口耳目手足》', '《日月山川》'],
    intro: '天、地、人，口、耳、目——认识最先和我们见面的汉字好朋友！',
  },
  {
    id: 'u2',
    name: '第二单元',
    title: '拼音乐园一',
    emoji: '🎵',
    color: 'orange',
    lessons: ['《ɑ o e》', '《i u ü》', '《b p m f》', '《d t n l》'],
    intro: '张大嘴巴 ɑ ɑ ɑ，孩子们和第一个拼音朋友见面啦！',
  },
  {
    id: 'u3',
    name: '第三单元',
    title: '拼音乐园二',
    emoji: '🎶',
    color: 'amber',
    lessons: ['《g k h》', '《j q x》', '《z c s》', '《zh ch sh r》', '《y w》'],
    intro: '小 g 9 字加弯钩，j q x 见了 ü 脱帽行个礼——拼音朋友更多啦！',
  },
  {
    id: 'u4',
    name: '第四单元',
    title: '拼音乐园三',
    emoji: '🌟',
    color: 'lime',
    lessons: ['《ɑi ei ui》', '《ɑo ou iu》', '《ie üe er》', '《ɑn en in un ün》', '《ɑng eng ing ong》'],
    intro: '复韵母手拉手，一起标调念儿歌，拼音王国大集合！',
  },
  {
    id: 'u5',
    name: '第五单元',
    title: '阅读起步',
    emoji: '🍂',
    color: 'emerald',
    lessons: ['《秋天》', '《江南》', '《雪地里的小画家》', '《四季》'],
    intro: '天气凉了树叶黄了，江南可采莲，雪地里小画家们来画画啦！',
  },
  {
    id: 'u6',
    name: '第六单元',
    title: '识字加油站',
    emoji: '🎒',
    color: 'cyan',
    lessons: ['《对韵歌》', '《日月明》', '《小书包》', '《升国旗》'],
    intro: '云对雨，雪对风；日月明，田力男——汉字里藏着好多小秘密！',
  },
  {
    id: 'u7',
    name: '第七单元',
    title: '童谣与小诗',
    emoji: '🌙',
    color: 'sky',
    lessons: ['《小小的船》', '《影子》', '《两件宝》'],
    intro: '弯弯的月儿小小的船，影子是条小黑狗，双手大脑两件宝！',
  },
  {
    id: 'u8',
    name: '第八单元',
    title: '故事大王',
    emoji: '🐦',
    color: 'rose',
    lessons: ['《比尾巴》', '《乌鸦喝水》', '《雨点儿》'],
    intro: '谁的尾巴长？乌鸦动脑筋喝到水，小雨点儿去旅行——有趣的故事开始啦！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  u1: [
    { id: 'a1-1', type: 'choice', q: '《天地人》一课学了哪三个字？', options: ['天、地、人', '你、我、他', '日、月、星', '金、木、水'], answer: 0, explain: '《天地人》一课就六个大字：天、地、人、你、我、他。前三个是天、地、人哦。', tag: '识字' },
    { id: 'a1-2', type: 'choice', q: '"金木水火土"是几个字？', options: ['五个', '四个', '六个', '三个'], answer: 0, explain: '金、木、水、火、土，一共五个字，它们是大自然里的五行宝贝。', tag: '识字' },
    { id: 'a1-3', type: 'choice', q: '"口耳目手足"里，用来听声音的是？', options: ['耳', '口', '目', '手'], answer: 0, explain: '耳朵听声音，嘴巴说说话，眼睛看东西，小手做事情。听声音用的是"耳"。', tag: '识字' },
    { id: 'a1-4', type: 'choice', q: '"目"指的是我们身上的哪个部位？', options: ['眼睛', '耳朵', '嘴巴', '小手'], answer: 0, explain: '"目"就是眼睛，"耳目"就是耳朵和眼睛，古时候的人这样叫哦。', tag: '字义理解' },
    { id: 'a1-5', type: 'choice', q: '《金木水火土》里"一二三四五"的下一句是？', options: ['金木水火土', '天地分上下', '日月照今古', '六七八九十'], answer: 0, explain: '课文是"一二三四五，金木水火土。天地分上下，日月照今古。"念起来像唱歌一样！', tag: '课文理解' },
    { id: 'a1-6', type: 'choice', q: '"山"字长什么样？', options: ['中间高两边低，像一座山峰', '四四方方像口箱子', '弯弯的像月亮', '圆滚滚像皮球'], answer: 0, explain: '"山"字中间一竖高高的，两边矮一些，就像三座山峰连在一起。', tag: '字形' },
    { id: 'a1-7', type: 'judge', q: '"人"字有两笔，一撇一捺。', options: ['√ 对', '✗ 错'], answer: 0, explain: '"人"字只有两笔：一撇、一捺，站得稳稳的，像两条腿走路。', tag: '笔画' },
    { id: 'a1-8', type: 'choice', q: '"你、我、他"中，"我"指的是？', options: ['自己', '对方', '另外的人', '大家'], answer: 0, explain: '说话时，"我"指自己，"你"指对方，"他"指另外的一个人。', tag: '字义理解' },
    { id: 'a1-9', type: 'choice', q: '"日"和"月"合在一起可以变成哪个字？', options: ['明', '大', '小', '天'], answer: 0, explain: '日+月=明，太阳和月亮都很亮，合在一起就更亮啦，这就是"日月明"。', tag: '识字' },
    { id: 'a1-10', type: 'choice', q: '《口耳目手足》中，"口"可以用来做什么？', options: ['说话、吃饭', '走路、跑步', '看书画画', '听音乐'], answer: 0, explain: '"口"就是嘴巴，可以说话、吃饭、唱歌。耳朵管听，眼睛管看。', tag: '识字' },
  ],
  u2: [
    { id: 'a2-1', type: 'choice', q: '单韵母大哥是哪一个？张大嘴巴来念：', options: ['ɑ', 'o', 'e', 'i'], answer: 0, explain: '张大嘴巴 ɑ ɑ ɑ，医生检查嗓子就是发这个音，它是单韵母里的老大。', tag: '拼音' },
    { id: 'a2-2', type: 'choice', q: '公鸡打鸣的声音是哪个单韵母？', options: ['o', 'ɑ', 'e', 'u'], answer: 0, explain: '大公鸡喔喔啼，"喔"就是 o，嘴巴圆圆的。', tag: '拼音' },
    { id: 'a2-3', type: 'choice', q: '大白鹅的"鹅"和哪个单韵母读音一样？', options: ['e', 'o', 'ɑ', 'u'], answer: 0, explain: '大白鹅 e e e，嘴巴扁扁的，"鹅"的韵母就是 e。', tag: '拼音' },
    { id: 'a2-4', type: 'choice', q: '衣服穿在身上是哪个声母？', options: ['y', 'i', 'e', 'm'], answer: 0, explain: '声母 y 读"衣"，像树杈；单韵母 i 也读"衣"，头上有个小圆点。y 是声母，i 是韵母。', tag: '拼音' },
    { id: 'a2-5', type: 'choice', q: 'i 和 u 一起戴上帽子，变成了哪个韵母朋友？', options: ['ü', 'ɑ', 'e', 'o'], answer: 0, explain: 'i 和 u 合体戴上帽子就是 ü，小鱼吐泡泡 ü ü ü。', tag: '拼音' },
    { id: 'a2-6', type: 'choice', q: 'b p m f 中，像个小棒右下半圆的是？', options: ['b', 'p', 'm', 'f'], answer: 0, explain: '右下半圆 b b b，左下半圆 d d d；b 的肚子朝右，别和 d 混淆哦。', tag: '拼音' },
    { id: 'a2-7', type: 'judge', q: 'p 和 q 是一对好朋友，长得一模一样。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'p 右上半圆，q 左上半圆，它们方向相反，写的时候要看清楚哦。', tag: '易错点' },
    { id: 'a2-8', type: 'choice', q: '两个门洞是哪个声母？', options: ['m', 'n', 'h', 't'], answer: 0, explain: '两个门洞 m m m，一个门洞 n n n，m 有两个小山洞。', tag: '拼音' },
    { id: 'a2-9', type: 'choice', q: '"马路"的"路"，声母是？', options: ['l', 'n', 'r', 'd'], answer: 0, explain: '"路"读 lù，声母是 l，像一根小棒往上翘。n 和 l 要分清：n 是一个门洞。', tag: '拼音' },
    { id: 'a2-10', type: 'choice', q: '四线三格里，单韵母 ɑ 应该写在：', options: ['中格', '上格', '下格', '随便哪格'], answer: 0, explain: '单韵母 ɑ、o、e 都住在中格里，不碰上格也不碰下格，写得才漂亮。', tag: '书写' },
  ],
  u3: [
    { id: 'a3-1', type: 'choice', q: '9 字加弯钩是哪个声母？', options: ['g', 'k', 'h', 'q'], answer: 0, explain: '9 字加弯钩 g g g，鸽子的"鸽"声母就是 g。', tag: '拼音' },
    { id: 'a3-2', type: 'choice', q: 'j q x 和 ü 相拼时，ü 头上的两点要：', options: ['脱掉（不写）', '保留', '变成三个点', '写在上面'], answer: 0, explain: '小 ü 见了 j q x，脱帽行个礼——ü 上的两点去掉再拼，但读音不变。', tag: '拼音规则' },
    { id: 'a3-3', type: 'choice', q: '蚕吐丝的"丝"，声母是：', options: ['s', 'z', 'c', 'sh'], answer: 0, explain: '蚕儿吐丝 s s s，"丝"读 sī，声母是 s，平舌音。', tag: '拼音' },
    { id: 'a3-4', type: 'choice', q: 'z c s 叫什么音？', options: ['平舌音', '翘舌音', '前鼻音', '后鼻音'], answer: 0, explain: 'z c s 舌头平平的，叫平舌音；zh ch sh r 舌头翘起来，叫翘舌音。', tag: '拼音' },
    { id: 'a3-5', type: 'choice', q: '狮子和老虎的"狮"，声母是：', options: ['sh', 's', 'zh', 'ch'], answer: 0, explain: '"狮"读 shī，是翘舌音 sh。说悄悄话时要翘起舌头哦。', tag: '拼音' },
    { id: 'a3-6', type: 'choice', q: '小椅子是哪个声母？', options: ['h', 'n', 'r', 'k'], answer: 0, explain: '一把椅子 h h h，"喝水"的"喝"声母就是 h。', tag: '拼音' },
    { id: 'a3-7', type: 'choice', q: '"太阳"的"阳"，声母是：', options: ['y', 'r', 'l', 'i'], answer: 0, explain: '"阳"读 yáng，声母是 y。y w 是两个特别的声母，可以自己带韵母拼音节。', tag: '拼音' },
    { id: 'a3-8', type: 'judge', q: 'r 读"日"，像小苗发芽。', options: ['√ 对', '✗ 错'], answer: 0, explain: '一轮红日 r r r，小苗发芽的样子就是 r，读起来舌头翘翘的。', tag: '拼音' },
    { id: 'a3-9', type: 'choice', q: '"妈妈"的"妈"是哪个音节？', options: ['mā', 'bà', 'mà', 'nǎ'], answer: 0, explain: '"妈"读 mā，声母 m 加韵母 ɑ，第一声。妈妈最温柔啦。', tag: '音节拼读' },
    { id: 'a3-10', type: 'choice', q: '哪种动物的名字里有声母 k？', options: ['蝌蚪', '鸭子', '小猫', '白鹅'], answer: 0, explain: '小蝌蚪的"蝌"读 kē，声母是 k。k 像两只小手向上张。', tag: '音节拼读' },
  ],
  u4: [
    { id: 'a4-1', type: 'choice', q: '"ai"念什么？和"挨着"的"挨"一样吗？', options: ['念 ɑi，和"挨"一样', '念 ia', '念 ai 的反着', '念 ei'], answer: 0, explain: 'ɑ i 排队 ɑi ɑi ɑi，"挨着"的"挨"（āi）就有它。复韵母是两个字母一起读。', tag: '复韵母' },
    { id: 'a4-2', type: 'choice', q: '喝水的"水"，韵母是：', options: ['ui', 'iu', 'ei', 'ou'], answer: 0, explain: '"水"读 shuǐ，韵母是 ui。u i 手拉手，一起读 ui。', tag: '复韵母' },
    { id: 'a4-3', type: 'choice', q: '海鸥的"鸥"里藏着哪个复韵母？', options: ['ou', 'ao', 'iu', 'ui'], answer: 0, explain: '海鸥 ōu ōu ōu，韵母是 ou。o u 手拉手，一起读 ou。', tag: '复韵母' },
    { id: 'a4-4', type: 'choice', q: '皮球拍起来"qiū qiū"？其实皮球的"球"韵母是：', options: ['iu', 'ou', 'ui', 'ao'], answer: 0, explain: '"球"读 qiú，韵母是 iu。i u 排队 iu iu iu。', tag: '复韵母' },
    { id: 'a4-5', type: 'choice', q: '月亮弯弯像小船，"月"的韵母是：', options: ['üe', 'ie', 'ei', 'er'], answer: 0, explain: '"月"读 yuè，韵母是 üe（写出来是 ue，y 帮 ü 脱了帽子）。', tag: '复韵母' },
    { id: 'a4-6', type: 'choice', q: '下面哪个是特殊韵母，只能自己单独做音节？', options: ['er', 'ai', 'ao', 'ou'], answer: 0, explain: 'er 是特殊韵母，比如"耳朵""儿子"，它不和别的声母相拼。', tag: '复韵母' },
    { id: 'a4-7', type: 'judge', q: '"山"的韵母是 an，"风"的韵母是 eng。', options: ['√ 对', '✗ 错'], answer: 0, explain: '山 shān 的韵母 an 是前鼻音；风 fēng 的韵母 eng 是后鼻音。', tag: '鼻韵母' },
    { id: 'a4-8', type: 'choice', q: ' ang eng ing ong 四个都是：', options: ['后鼻韵母', '前鼻韵母', '单韵母', '声母'], answer: 0, explain: '带 ng 的都是后鼻韵母，读的时候舌头往后缩，鼻子里出气。', tag: '鼻韵母' },
    { id: 'a4-9', type: 'choice', q: '标声调的小帽子应该戴在谁头上？记住"有 ɑ 找 ɑ"！', options: ['ɑ', 'i', 'u', 'o（在没有 ɑ 时）'], answer: 0, explain: '标调规则：有 ɑ 找 ɑ，没 ɑ 找 o e，i u 并排标在后。小帽子要戴对地方。', tag: '标调规则' },
    { id: 'a4-10', type: 'choice', q: '"花儿"的"儿"读起来舌头卷起来，它是：', options: ['er（儿化音）', 'e', 're', 'r'], answer: 0, explain: '"儿"读 ér，是特殊韵母 er，读的时候舌头要卷起来，叫卷舌音。', tag: '复韵母' },
  ],
  u5: [
    { id: 'a5-1', type: 'choice', q: '《秋天》里，树叶是怎么样的？', options: ['一片片黄叶子从树上落下来', '叶子变绿了', '叶子都开花了', '叶子长大了'], answer: 0, explain: '课文说"天气凉了，树叶黄了，一片片叶子从树上落下来"，秋天来了！', tag: '课文理解' },
    { id: 'a5-2', type: 'choice', q: '《秋天》里，大雁飞向哪里？', options: ['南飞，一会儿排成"人"字，一会儿排成"一"字', '飞到东边', '躲进树洞', '飞到我们教室'], answer: 0, explain: '秋天到了，大雁要飞去暖和的南方过冬，队伍一会儿排成"人"字，一会儿排成"一"字。', tag: '课文理解' },
    { id: 'a5-3', type: 'choice', q: '《江南》里"江南可采莲"的下一句是？', options: ['莲叶何田田', '鱼戏莲叶间', '鱼戏莲叶东', '采莲南塘秋'], answer: 0, explain: '汉乐府《江南》："江南可采莲，莲叶何田田。鱼戏莲叶间……"写的是采莲的开心场面。', tag: '古诗' },
    { id: 'a5-4', type: 'choice', q: '《江南》里，鱼儿在莲叶间做什么？', options: ['游戏（游来游去）', '睡觉', '学本领', '唱歌'], answer: 0, explain: '"鱼戏莲叶间"的"戏"就是游戏，小鱼在莲叶东、西、南、北游来游去，真快乐！', tag: '古诗' },
    { id: 'a5-5', type: 'choice', q: '《雪地里的小画家》里，谁来画画了？', options: ['小鸡、小狗、小鸭、小马', '小猫和小狗', '小朋友', '小熊和小兔'], answer: 0, explain: '小鸡画竹叶，小狗画梅花，小鸭画枫叶，小马画月牙——雪地里的小画家们！', tag: '课文理解' },
    { id: 'a5-6', type: 'choice', q: '小鸡在雪地上画出的脚印像什么？', options: ['竹叶', '梅花', '月牙', '枫叶'], answer: 0, explain: '小鸡的脚印尖尖细细的，像竹叶；小狗的脚印像梅花。', tag: '课文理解' },
    { id: 'a5-7', type: 'choice', q: '青蛙为什么没来画画？', options: ['在洞里睡着啦（冬眠）', '去南方了', '不会画画', '怕冷躲起来了'], answer: 0, explain: '青蛙是冷血动物，冬天要冬眠，"青蛙为什么没参加？他在洞里睡着啦。"', tag: '课文理解' },
    { id: 'a5-8', type: 'choice', q: '《四季》里，草芽尖尖对小鸟说：', options: ['"我是春天"', '"我是夏天"', '"我是秋天"', '"我是冬天"'], answer: 0, explain: '草芽尖尖是春天的样子，荷叶圆圆是夏天，谷穗弯弯是秋天，雪人大肚子是冬天。', tag: '课文理解' },
    { id: 'a5-9', type: 'judge', q: '谷穗弯弯，他鞠着躬说"我是秋天"。', options: ['√ 对', '✗ 错'], answer: 0, explain: '谷穗成熟了弯着腰，就像在鞠躬，这是秋天的样子。', tag: '课文理解' },
    { id: 'a5-10', type: 'choice', q: '"秋天"的"秋"字里藏着什么？', options: ['禾和火', '口和天', '木和目', '人和二'], answer: 0, explain: '禾+火=秋，庄稼（禾）熟了，天干物燥（火），就是秋天啦。', tag: '字形' },
  ],
  u6: [
    { id: 'a6-1', type: 'choice', q: '《对韵歌》里"云对雨"的下一句是？', options: ['雪对风', '花对树', '鸟对虫', '山对水'], answer: 0, explain: '"云对雨，雪对风。花对树，鸟对虫。山清对水秀，柳绿对桃红。"对对子真好玩！', tag: '课文理解' },
    { id: 'a6-2', type: 'choice', q: '《对韵歌》里，"山清"对什么？', options: ['水秀', '柳绿', '桃红', '天蓝'], answer: 0, explain: '"山清对水秀，柳绿对桃红"，对子要词性相同、意思相对。', tag: '课文理解' },
    { id: 'a6-3', type: 'choice', q: '"日月明"是说：日和月在一起很明亮。那"小土"合起来是？', options: ['尘（灰尘的尘）', '尖', '明', '休'], answer: 0, explain: '小+土=尘，小小的土就是灰尘。"日月明，田力男。小土尘……"会意字真有趣！', tag: '识字' },
    { id: 'a6-4', type: 'choice', q: '两个人跟着走，"从"字是怎么来的？', options: ['一人跟着一人走就是"从"', '两个人吵架就是"从"', '两人背对背就是"从"', '两人手拉手坐着'], answer: 0, explain: '人+人=从，一个人在前面走，另一个人跟着，就是"跟从"的"从"。', tag: '识字' },
    { id: 'a6-5', type: 'choice', q: '《小书包》里，橡皮、铅笔是什么？', options: ['学习用品（文具）', '玩具', '水果', '动物'], answer: 0, explain: '小书包里装着铅笔、橡皮、尺子、课本，都是学习用品，要好好爱护它们。', tag: '课文理解' },
    { id: 'a6-6', type: 'judge', q: '书本课本要爱护，书包自己整理好。', options: ['√ 对', '✗ 错'], answer: 0, explain: '课文告诉我们要自己整理小书包，做个爱学习、有条理的好孩子。', tag: '课文理解' },
    { id: 'a6-7', type: 'choice', q: '《升国旗》里，我们的国旗是：', options: ['五星红旗', '红旗', '蓝旗', '彩旗'], answer: 0, explain: '我们的国旗是五星红旗。升国旗时，要立正、敬礼！', tag: '课文理解' },
    { id: 'a6-8', type: 'choice', q: '升国旗时，我们应该怎么做？', options: ['立正、行注目礼（敬礼）', '继续玩', '大声说话', '跑来跑去'], answer: 0, explain: '"五星红旗，我们的国旗……升国旗，要立正，行注目礼。"这是对国旗的尊重。', tag: '课文理解' },
    { id: 'a6-9', type: 'choice', q: '"国"字外面是什么框？', options: ['大口框（方框）', '圆圈', '三角框', '没有框'], answer: 0, explain: '"国"字外面是方方正正的大口框，里面是"玉"，先把外框写好再填里面。', tag: '字形' },
    { id: 'a6-10', type: 'choice', q: '"旗"的偏旁和什么有关？', options: ['旗子（方字旁）', '水', '火', '树'], answer: 0, explain: '"旗"字左边是"方"字旁，和旗子、旗帜有关，比如红旗、国旗。', tag: '偏旁' },
  ],
  u7: [
    { id: 'a7-1', type: 'choice', q: '《小小的船》里，弯弯的月儿像什么？', options: ['小小的船', '大大的球', '弯弯的桥', '圆圆的盘'], answer: 0, explain: '"弯弯的月儿小小的船，小小的船儿两头尖。"这是叶圣陶爷爷写的儿歌。', tag: '课文理解' },
    { id: 'a7-2', type: 'choice', q: '《小小的船》里，"我"在小小的船里看见了什么？', options: ['闪闪的星星蓝蓝的天', '白白的云红红的花', '高高的山绿绿的树', '宽宽的路长长的河'], answer: 0, explain: '"我在小小的船里坐，只看见闪闪的星星蓝蓝的天。"多美呀！', tag: '课文理解' },
    { id: 'a7-3', type: 'choice', q: '"弯弯的月儿"中"弯弯"是叠词，念起来感觉：', options: ['更可爱、更亲切', '更快', '更响', '更害怕'], answer: 0, explain: '"弯弯的、小小的、闪闪的、蓝蓝的"都是叠词，让儿歌更好听、更可爱。', tag: '词语积累' },
    { id: 'a7-4', type: 'choice', q: '《影子》里，影子像什么？', options: ['一条小黑狗', '一朵白云', '一只小鸟', '一棵大树'], answer: 0, explain: '"影子在前，影子在后，影子常常跟着我，就像一条小黑狗。"影子是我们的好朋友。', tag: '课文理解' },
    { id: 'a7-5', type: 'choice', q: '太阳在前面时，影子在：', options: ['后面', '前面', '天上', '不见了'], answer: 0, explain: '光从哪边照过来，影子就在另一边。太阳在前，影子就在后面；太阳在后，影子就在前面。', tag: '科学常识' },
    { id: 'a7-6', type: 'judge', q: '影子是我们的好朋友，常常跟着我们。', options: ['√ 对', '✗ 错'], answer: 0, explain: '课文说"影子常常陪着我，它是我的好朋友"。有光的地方，就有影子朋友。', tag: '课文理解' },
    { id: 'a7-7', type: 'choice', q: '《两件宝》指的是哪两件宝？', options: ['双手和大脑', '眼睛和耳朵', '铅笔和橡皮', '书和本子'], answer: 0, explain: '《两件宝》：人有左脑右脑，双手大脑两件宝——双手会做工，大脑会思考。', tag: '课文理解' },
    { id: 'a7-8', type: 'choice', q: '《两件宝》告诉我们：用手又用脑，才能：', options: ['有创造', '睡好觉', '吃得好', '跑得快'], answer: 0, explain: '课文说"用手又用脑，才能有创造"，动手又动脑，就能做出新东西！', tag: '课文理解' },
    { id: 'a7-9', type: 'choice', q: '《小小的船》作者是谁？', options: ['叶圣陶', '李白', '金波', '安徒生'], answer: 0, explain: '《小小的船》是叶圣陶爷爷写的儿童诗，他还写过《一粒种子》等作品。', tag: '文学常识' },
    { id: 'a7-10', type: 'choice', q: '影子会出现的时间是：', options: ['有光的时候', '半夜睡觉时', '下雨时一定有', '永远都有'], answer: 0, explain: '影子在有光、有身体挡住光的时候出现。黑漆漆的夜里没有光，影子就躲起来啦。', tag: '科学常识' },
  ],
  u8: [
    { id: 'a8-1', type: 'choice', q: '《比尾巴》里，谁的尾巴长？', options: ['猴子', '兔子', '松鼠', '公鸡'], answer: 0, explain: '"猴子的尾巴长，兔子的尾巴短，松鼠的尾巴好像一把伞。"猴子尾巴最长！', tag: '课文理解' },
    { id: 'a8-2', type: 'choice', q: '谁的尾巴好像一把伞？', options: ['松鼠', '猴子', '兔子', '鸭子'], answer: 0, explain: '松鼠的尾巴蓬蓬松松翘起来，好像一把撑开的小伞。', tag: '课文理解' },
    { id: 'a8-3', type: 'choice', q: '谁的尾巴弯？', options: ['公鸡', '鸭子', '孔雀', '猴子'], answer: 0, explain: '"公鸡的尾巴弯，鸭子的尾巴扁。"孔雀的尾巴最好看！', tag: '课文理解' },
    { id: 'a8-4', type: 'choice', q: '谁的尾巴最好看？', options: ['孔雀', '公鸡', '兔子', '松鼠'], answer: 0, explain: '孔雀开屏的时候，尾巴像一把五彩的大扇子，最好看！', tag: '课文理解' },
    { id: 'a8-5', type: 'choice', q: '《乌鸦喝水》里，乌鸦是怎么喝到水的？', options: ['把小石子一颗颗放进瓶子里', '把瓶子推倒', '用吸管吸', '飞去找河边'], answer: 0, explain: '瓶子里水不多，乌鸦把小石子一颗颗放进去，水慢慢升高，乌鸦就喝到水啦。', tag: '课文理解' },
    { id: 'a8-6', type: 'choice', q: '乌鸦放石子后，瓶里的水会：', options: ['慢慢升高', '慢慢变少', '不变', '全洒出来'], answer: 0, explain: '石子占了瓶子里的地方（占空间），水就被挤上来，水位升高，聪明的乌鸦就喝到水了。', tag: '科学常识' },
    { id: 'a8-7', type: 'judge', q: '乌鸦爱动脑筋，最后喝到了水。', options: ['√ 对', '✗ 错'], answer: 0, explain: '乌鸦口渴了没有放弃，动脑筋想办法解决了难题，我们要学习它爱动脑！', tag: '课文理解' },
    { id: 'a8-8', type: 'choice', q: '《雨点儿》里，大雨点儿要去：', options: ['没有花没有草的地方', '长花长草的地方', '大海里', '小朋友家'], answer: 0, explain: '大雨点儿说"我要去没有花没有草的地方"，小雨点儿去有花有草的地方。', tag: '课文理解' },
    { id: 'a8-9', type: 'choice', q: '小雨点儿去了有花有草的地方，结果那里：', options: ['花更红了，草更绿了', '全干了', '长出大树', '变成沙漠'], answer: 0, explain: '小雨点儿浇了花和草，"不一会儿，花更红了，草更绿了"。雨水让世界更美丽！', tag: '课文理解' },
    { id: 'a8-10', type: 'choice', q: '《比尾巴》是用的什么方式在问和答？', options: ['一问一答', '只有问没有答', '只有答没有问', '都不说话'], answer: 0, explain: '课文先问"谁的尾巴长？"再答"猴子的尾巴长"，一问一答，念起来特别有趣。', tag: '课文理解' },
  ],
}
