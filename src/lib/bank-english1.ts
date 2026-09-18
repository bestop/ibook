// 牛津上海版（试用本）英语 一年级上册（1A）随堂知识点题库
// 教材：九年义务教育课本 英语（牛津上海版）一年级上册 · 上海教育出版社
// 目录（电子课本/教师之家核对）：
//   Module 1 Getting to know you: Greetings / My classmates / My face
//   Module 2 Me, my family and friends: My abilities / My family / My friends
//   Module 3 Places and activities: In the classroom / In the fruit shop / In the restaurant
//   Module 4 The natural world: On the farm / In the zoo / In the park
// 每个单元一关，每关 10 题，共 12 关 120 题，题目 id 前缀 i

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
    id: 'i1',
    name: 'Unit 1',
    title: 'Greetings',
    emoji: '👋',
    color: 'cyan',
    lessons: ['Hello / Hi', 'Good morning', 'How are you?'],
    intro: 'Hello! Hello! 一年级英语第一课，学会大声打招呼！',
  },
  {
    id: 'i2',
    name: 'Unit 2',
    title: 'My classmates',
    emoji: '🎒',
    color: 'sky',
    lessons: ['book / ruler / pencil / bag', 'Give me ..., please.'],
    intro: '认识新同学，还要认识铅笔盒里的英语单词朋友！',
  },
  {
    id: 'i3',
    name: 'Unit 3',
    title: 'My face',
    emoji: '😀',
    color: 'teal',
    lessons: ['eye / ear / nose / mouth / face', 'Touch your ...'],
    intro: 'Touch your nose! 摸摸小鼻子，五官单词真有趣！',
  },
  {
    id: 'i4',
    name: 'Unit 1',
    title: 'My abilities',
    emoji: '💪',
    color: 'lime',
    lessons: ['read / write / draw / sing / dance / jump', 'I can ...'],
    intro: 'I can sing! I can dance! 说说你的小本领！',
  },
  {
    id: 'i5',
    name: 'Unit 2',
    title: 'My family',
    emoji: '👨‍👩‍👧',
    color: 'emerald',
    lessons: ['father / mother / sister / brother', 'This is my ...'],
    intro: 'This is my father. 介绍你的家人们！',
  },
  {
    id: 'i6',
    name: 'Unit 3',
    title: 'My friends',
    emoji: '🤝',
    color: 'violet',
    lessons: ['tall / short / fat / thin', 'He is ... / She is ...'],
    intro: 'My friend is tall. 你的好朋友是高高的还是瘦瘦的？',
  },
  {
    id: 'i7',
    name: 'Unit 1',
    title: 'In the classroom',
    emoji: '🏫',
    color: 'amber',
    lessons: ['desk / chair / blackboard', 'one / two / three'],
    intro: 'In the classroom: 桌子椅子黑板，教室里的英语大发现！',
  },
  {
    id: 'i8',
    name: 'Unit 2',
    title: 'In the fruit shop',
    emoji: '🍎',
    color: 'red',
    lessons: ['apple / banana / pear / orange', 'I like ...'],
    intro: 'Fruit shop 到啦！apple、banana、pear，甜甜的水果都会说！',
  },
  {
    id: 'i9',
    name: 'Unit 3',
    title: 'In the restaurant',
    emoji: '🍜',
    color: 'orange',
    lessons: ['rice / noodles / soup', 'Have some ..., please.'],
    intro: 'In the restaurant: rice、noodles、soup——用餐英语开饭啦！',
  },
  {
    id: 'i10',
    name: 'Unit 1',
    title: 'On the farm',
    emoji: '🐷',
    color: 'rose',
    lessons: ['chick / duck / cow / pig', 'What do you see?'],
    intro: 'On the farm: 小鸡小鸭奶牛猪，农场动物英语集合！',
  },
  {
    id: 'i11',
    name: 'Unit 2',
    title: 'In the zoo',
    emoji: '🐼',
    color: 'fuchsia',
    lessons: ['panda / tiger / monkey / bear', 'Look at the ...'],
    intro: 'In the zoo: panda、tiger、monkey——动物园里的大明星！',
  },
  {
    id: 'i12',
    name: 'Unit 3',
    title: 'In the park',
    emoji: '🌸',
    color: 'pink',
    lessons: ['flower / tree / kite', 'red / blue / yellow'],
    intro: 'In the park: 花儿、大树、风筝，还有漂亮的颜色单词！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  i1: [
    { id: 'i1-1', type: 'choice', q: '早上见到老师，说：', options: ['Good morning.', 'Good night.', 'Goodbye.', 'Good evening.'], answer: 0, explain: '早上问好说 Good morning（早上好）；Good night 是睡前说晚安。', tag: '问候语' },
    { id: 'i1-2', type: 'choice', q: '"Hello!" 的意思是：', options: ['你好', '再见', '谢谢', '对不起'], answer: 0, explain: 'Hello 是打招呼"你好"，Hi 也是"你好"，更随意一些。', tag: '问候语' },
    { id: 'i1-3', type: 'choice', q: '放学和老师同学告别，说：', options: ['Goodbye.', 'Good morning.', 'Hello.', 'Thank you.'], answer: 0, explain: 'Goodbye 是"再见"，也可以说 Bye-bye。', tag: '问候语' },
    { id: 'i1-4', type: 'choice', q: '"How are you?" 的意思是：', options: ['你好吗？', '你是谁？', '你几岁？', '再见'], answer: 0, explain: 'How are you? 是问"你好吗"，回答可以说 I’m fine. Thank you.（我很好，谢谢。）', tag: '对话' },
    { id: 'i1-5', type: 'choice', q: '别人问 How are you?，可以回答：', options: ["I'm fine. Thank you.", 'Good morning.', 'Hello!', 'Goodbye.'], answer: 0, explain: '回答 I’m fine. Thank you.（我很好，谢谢），有礼貌的孩子人人爱。', tag: '对话' },
    { id: 'i1-6', type: 'choice', q: '"Hi" 和哪个单词意思一样？', options: ['Hello', 'Bye', 'Sorry', 'Thanks'], answer: 0, explain: 'Hi 和 Hello 都是"你好"，朋友之间用 Hi 更轻松。', tag: '词汇' },
    { id: 'i1-7', type: 'choice', q: '第一次认识新朋友，可以说：', options: ['Hello! I am Alice.', 'Good night.', 'Goodbye!', 'Thank you!'], answer: 0, explain: '打招呼并介绍自己：Hello! I am ...（你好！我是……）', tag: '对话' },
    { id: 'i1-8', type: 'judge', q: 'Good night. 可以用来早上问好。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'Good night 是晚上睡前说的"晚安"，早上要说 Good morning。', tag: '易错点' },
    { id: 'i1-9', type: 'choice', q: '"morning" 表示一天中的：', options: ['早晨', '晚上', '中午', '明天'], answer: 0, explain: 'morning 是早晨；afternoon 是下午；evening 是傍晚；night 是夜晚。', tag: '词汇' },
    { id: 'i1-10', type: 'choice', q: '见到很久不见的好朋友，最开心的说法是：', options: ['Hi! Nice to see you!', 'Goodbye!', 'Good night.', 'Sorry.'], answer: 0, explain: 'Nice to see you!（见到你真开心！）表达见到朋友的喜悦。', tag: '问候语' },
  ],
  i2: [
    { id: 'i2-1', type: 'choice', q: '"book" 是什么意思？', options: ['书', '尺', '铅笔', '书包'], answer: 0, explain: 'book 是书。ruler 尺子、pencil 铅笔、bag 书包。', tag: '词汇' },
    { id: 'i2-2', type: 'choice', q: '画直线要用到：', options: ['ruler', 'book', 'bag', 'pencil box'], answer: 0, explain: 'ruler 是尺子，可以用来画直线、量长短。', tag: '词汇' },
    { id: 'i2-3', type: 'choice', q: '"铅笔"的英语是：', options: ['pencil', 'pen', 'bag', 'book'], answer: 0, explain: 'pencil 是铅笔；pen 是钢笔（不用橡皮擦的那种）。', tag: '词汇' },
    { id: 'i2-4', type: 'choice', q: '上学背的"书包"是：', options: ['bag', 'cat', 'cake', 'card'], answer: 0, explain: 'bag 是书包（袋子），把书本铅笔都装进去。', tag: '词汇' },
    { id: 'i2-5', type: 'choice', q: '请别人递东西给你，礼貌地说：', options: ['Give me the book, please.', 'Give me the book now!', 'Book give me.', 'I book.'], answer: 0, explain: 'Give me ..., please.（请给我……）加上 please 才有礼貌哦。', tag: '句型' },
    { id: 'i2-6', type: 'choice', q: '"Give me the rubber, please." 中 rubber 是：', options: ['橡皮', '尺子', '书本', '铅笔'], answer: 0, explain: 'rubber 是橡皮（英式说法），可以擦掉铅笔字。', tag: '词汇' },
    { id: 'i2-7', type: 'choice', q: '同学把尺子递给你，你应该说：', options: ['Thank you.', 'Give me.', 'Hello.', 'Bye.'], answer: 0, explain: '收到别人的帮助或东西，要说 Thank you.（谢谢你）。', tag: '礼貌用语' },
    { id: 'i2-8', type: 'judge', q: 'pencil 和 pen 都是铅笔。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'pencil 是铅笔，pen 是钢笔，两个单词不一样哦。', tag: '易错点' },
    { id: 'i2-9', type: 'choice', q: '"这是我的书包。"怎么说？', options: ['This is my bag.', 'This is my book.', 'That is a bag.', 'My bag this.'], answer: 0, explain: 'This is my ...（这是我的……）介绍自己的东西。', tag: '句型' },
    { id: 'i2-10', type: 'choice', q: '和 classmates 一起学习，classmates 是：', options: ['同班同学', '老师', '爸爸妈妈', '哥哥姐姐'], answer: 0, explain: 'classmate 是同班同学，classmates 是复数，好多同学在一起学习。', tag: '词汇' },
  ],
  i3: [
    { id: 'i3-1', type: 'choice', q: '用来看书的"眼睛"是：', options: ['eye', 'ear', 'nose', 'mouth'], answer: 0, explain: 'eye 眼睛，ear 耳朵，nose 鼻子，mouth 嘴巴。', tag: '词汇' },
    { id: 'i3-2', type: 'choice', q: '听声音要用：', options: ['ear', 'eye', 'nose', 'hand'], answer: 0, explain: 'ear 是耳朵，用来听声音。两个耳朵是 ears。', tag: '词汇' },
    { id: 'i3-3', type: 'choice', q: '"鼻子"的英语是：', options: ['nose', 'eye', 'ear', 'mouth'], answer: 0, explain: 'nose 是鼻子，闻香香的味道全靠它。', tag: '词汇' },
    { id: 'i3-4', type: 'choice', q: '吃饭唱歌靠的是：', options: ['mouth', 'nose', 'ear', 'eye'], answer: 0, explain: 'mouth 是嘴巴，可以吃饭、唱歌、说话。', tag: '词汇' },
    { id: 'i3-5', type: 'choice', q: '"Touch your face." 的意思是：', options: ['摸摸你的脸', '摸摸你的鼻子', '拍拍你的手', '抬起你的头'], answer: 0, explain: 'Touch your ...（摸摸你的……）face 是脸。这是好玩的课堂游戏！', tag: '句型' },
    { id: 'i3-6', type: 'choice', q: '老师喊 "Touch your ears!"，你应该摸：', options: ['耳朵', '眼睛', '嘴巴', '脸'], answer: 0, explain: 'ears 是耳朵（两只）。单数 ear，复数 ears。', tag: '句型' },
    { id: 'i3-7', type: 'judge', q: '我们有两只眼睛和两只耳朵。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'two eyes 两只眼睛，two ears 两只耳朵，所以常用复数形式。', tag: '常识' },
    { id: 'i3-8', type: 'choice', q: '"face" 的意思是：', options: ['脸', '手', '脚', '头'], answer: 0, explain: 'face 是脸。五官都长在脸上：眼睛、耳朵、鼻子、嘴巴。', tag: '词汇' },
    { id: 'i3-9', type: 'choice', q: '眼睛看不见了，可以用什么认东西？', options: ['hands（手）和 ears（耳朵）', 'nose only', 'mouth only', '都不行'], answer: 0, explain: '小手摸一摸、耳朵听一听，也能认出很多东西，感官会互相帮忙。', tag: '常识' },
    { id: 'i3-10', type: 'choice', q: '"This is my nose." 的意思是：', options: ['这是我的鼻子。', '这是我的眼睛。', '这是你的鼻子。', '那是我的鼻子。'], answer: 0, explain: 'This is my ...（这是我的……）nose 鼻子。my 我的，your 你的。', tag: '句型' },
  ],
  i4: [
    { id: 'i4-1', type: 'choice', q: '"I can sing." 的意思是：', options: ['我会唱歌。', '我会画画。', '我会跳舞。', '我会写字。'], answer: 0, explain: 'sing 是唱歌。I can ...（我会……）介绍自己的本领。', tag: '句型' },
    { id: 'i4-2', type: 'choice', q: '"dance" 是什么意思？', options: ['跳舞', '读书', '跑步', '画画'], answer: 0, explain: 'dance 是跳舞。read 读书、run 跑步、draw 画画。', tag: '词汇' },
    { id: 'i4-3', type: 'choice', q: '用彩笔画一幅画，用的是：', options: ['draw', 'sing', 'read', 'jump'], answer: 0, explain: 'draw 是画画。I can draw.（我会画画。）', tag: '词汇' },
    { id: 'i4-4', type: 'choice', q: '"read a book" 的意思是：', options: ['读书', '写书', '买书', '卖书'], answer: 0, explain: 'read 是读、看（书）。read a book 就是读书。', tag: '词汇' },
    { id: 'i4-5', type: 'choice', q: '兔子最擅长的动作是：', options: ['jump', 'write', 'sing', 'read'], answer: 0, explain: 'jump 是跳，小兔子蹦蹦跳跳，I can jump like a rabbit!（我能像兔子一样跳！）', tag: '词汇' },
    { id: 'i4-6', type: 'choice', q: '"我会写字。"怎么说？', options: ['I can write.', 'I can sing.', 'I can draw.', 'I can dance.'], answer: 0, explain: 'write 是写字。I can write.（我会写字。）', tag: '句型' },
    { id: 'i4-7', type: 'judge', q: 'I can read. 是说"我会读书"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'read 读，I can read. 我会读书。can 后面用动词的原形。', tag: '句型' },
    { id: 'i4-8', type: 'choice', q: '问别人"你会唱歌吗？"可以说：', options: ['Can you sing?', 'You can sing?', 'Sing you can?', 'I can sing?'], answer: 0, explain: 'Can you ...?（你会……吗？）回答：Yes, I can. / No, I cannot.', tag: '句型' },
    { id: 'i4-9', type: 'choice', q: '音乐课上大家一起做的事是：', options: ['sing and dance', 'sleep', 'run', 'eat'], answer: 0, explain: '音乐课唱歌跳舞：sing and dance。and 连接两个动作。', tag: '情景' },
    { id: 'i4-10', type: 'choice', q: '"We can jump." 的意思是：', options: ['我们会跳。', '我会跳。', '他们能吃。', '你们会写。'], answer: 0, explain: 'we 是"我们"，We can jump. 我们会跳。I 我、we 我们、you 你/你们。', tag: '句型' },
  ],
  i5: [
    { id: 'i5-1', type: 'choice', q: '"father" 是家里谁？', options: ['爸爸', '妈妈', '姐姐', '哥哥'], answer: 0, explain: 'father 是爸爸，也可以说 dad。mother 是妈妈。', tag: '词汇' },
    { id: 'i5-2', type: 'choice', q: '"妈妈"的英语是：', options: ['mother', 'father', 'brother', 'sister'], answer: 0, explain: 'mother 是妈妈，口语可以说 mum。', tag: '词汇' },
    { id: 'i5-3', type: 'choice', q: '妹妹或姐姐都是你的：', options: ['sister', 'brother', 'father', 'mother'], answer: 0, explain: 'sister 是姐妹（姐姐或妹妹）；brother 是兄弟（哥哥或弟弟）。', tag: '词汇' },
    { id: 'i5-4', type: 'choice', q: '"This is my mother." 的意思是：', options: ['这是我的妈妈。', '这是我的爸爸。', '那是我的妈妈。', '这是你的妈妈。'], answer: 0, explain: 'This is my ...（这是我的……）介绍家人就用这个句型。', tag: '句型' },
    { id: 'i5-5', type: 'choice', q: '哥哥或弟弟的英语是：', options: ['brother', 'sister', 'grandma', 'aunt'], answer: 0, explain: 'brother 是兄弟。兄弟+姐妹就是 brothers and sisters。', tag: '词汇' },
    { id: 'i5-6', type: 'choice', q: 'father and mother 合起来可以说：', options: ['parents', 'friends', 'classmates', 'teachers'], answer: 0, explain: 'parents 是父母（爸爸和妈妈的总称）。', tag: '词汇' },
    { id: 'i5-7', type: 'judge', q: '向别人介绍家人时可以说 This is my father.', options: ['√ 对', '✗ 错'], answer: 0, explain: '介绍用 This is ...（这是……），my 表示"我的"。', tag: '句型' },
    { id: 'i5-8', type: 'choice', q: '"I love my family." 的意思是：', options: ['我爱我的家。', '我喜欢我的朋友。', '这是我的家。', '我的家人很多。'], answer: 0, explain: 'love 是爱，family 是家庭。我爱我的家人！', tag: '句型' },
    { id: 'i5-9', type: 'choice', q: 'father 的 father 是你的：', options: ['爷爷或外公（grandfather）', '哥哥', '儿子', '叔叔'], answer: 0, explain: '爸爸的爸爸是爷爷，grandfather（grandpa）是爷爷/外公。', tag: '拓展' },
    { id: 'i5-10', type: 'choice', q: '全家人一起吃饭，最幸福的说法是：', options: ['We are a happy family!', 'I am a teacher.', 'You are my friend.', 'It is a book.'], answer: 0, explain: 'We are a happy family!（我们是幸福的一家人！）', tag: '情景' },
  ],
  i6: [
    { id: 'i6-1', type: 'choice', q: '"tall" 的意思是：', options: ['高的', '矮的', '胖的', '瘦的'], answer: 0, explain: 'tall 高的；short 矮的/短的。姚明叔叔 is very tall!（个子很高）', tag: '词汇' },
    { id: 'i6-2', type: 'choice', q: '"矮的、短的"英语是：', options: ['short', 'tall', 'fat', 'thin'], answer: 0, explain: 'short 矮的（人）或短的（铅笔尾巴）。反义词是 tall。', tag: '词汇' },
    { id: 'i6-3', type: 'choice', q: '胖胖的小猪是：', options: ['a fat pig', 'a thin pig', 'a tall pig', 'a small pig'], answer: 0, explain: 'fat 是胖的；thin 是瘦的。小猪圆滚滚，a fat pig！', tag: '词汇' },
    { id: 'i6-4', type: 'choice', q: '"He is thin." 的意思是：', options: ['他很瘦。', '他很胖。', '他很高。', '他很矮。'], answer: 0, explain: 'thin 瘦的。he 是"他"，she 是"她"。He is thin. 他很瘦。', tag: '句型' },
    { id: 'i6-5', type: 'choice', q: '介绍好朋友（女生）高高的，说：', options: ['She is tall.', 'He is tall.', 'She is short.', 'It is tall.'], answer: 0, explain: '女生用 she。She is tall.（她很高。）男生用 he。', tag: '句型' },
    { id: 'i6-6', type: 'choice', q: '"friend" 是什么意思？', options: ['朋友', '家人', '同学', '老师'], answer: 0, explain: 'friend 是朋友。My friend 我的朋友。', tag: '词汇' },
    { id: 'i6-7', type: 'judge', q: '介绍男生用 He，介绍女生用 She。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'he 他（男生），she 她（女生），要用对哦。', tag: '易错点' },
    { id: 'i6-8', type: 'choice', q: '"My friend is fat." 的意思是：', options: ['我的朋友很胖。', '我的朋友很瘦。', '我的朋友很高。', '我的朋友很小。'], answer: 0, explain: 'fat 胖的。My friend is fat. 我的朋友胖胖的。', tag: '句型' },
    { id: 'i6-9', type: 'choice', q: '和好朋友见面最想说的是：', options: ['Hello! My friend!', 'Goodbye!', 'Sorry!', 'No!'], answer: 0, explain: '见到朋友开心地打招呼 Hello!，难过才说 Sorry（对不起）。', tag: '情景' },
    { id: 'i6-10', type: 'choice', q: 'tall 的反义词（反义搭档）是：', options: ['short', 'fat', 'big', 'small'], answer: 0, explain: 'tall（高）↔ short（矮）；fat（胖）↔ thin（瘦）。', tag: '反义词' },
  ],
  i7: [
    { id: 'i7-1', type: 'choice', q: '教室里的"桌子"是：', options: ['desk', 'chair', 'bag', 'book'], answer: 0, explain: 'desk 是课桌；chair 是椅子。In the classroom 教室里有什么？', tag: '词汇' },
    { id: 'i7-2', type: 'choice', q: '坐下要用的"椅子"是：', options: ['chair', 'desk', 'blackboard', 'window'], answer: 0, explain: 'chair 椅子。Sit down, please.（请坐）就是坐到 chair 上。', tag: '词汇' },
    { id: 'i7-3', type: 'choice', q: '老师写字的"黑板"是：', options: ['blackboard', 'whiteboard', 'black cat', 'big book'], answer: 0, explain: 'blackboard 黑板，black 黑色 + board 板子，合起来就是黑板。', tag: '词汇' },
    { id: 'i7-4', type: 'choice', q: '"three" 是数字几？', options: ['3', '2', '4', '13'], answer: 0, explain: 'one 1、two 2、three 3。three 是 3。', tag: '数字' },
    { id: 'i7-5', type: 'choice', q: '"5" 的英语是：', options: ['five', 'four', 'six', 'three'], answer: 0, explain: 'four 4、five 5、six 6。伸出小手数一数！', tag: '数字' },
    { id: 'i7-6', type: 'choice', q: '"I can see two desks." 的意思是：', options: ['我能看见两张桌子。', '我有两把椅子。', '我能看见两个书包。', '桌子上有两本书。'], answer: 0, explain: 'I can see ...（我能看见……）desk 的复数是 desks（加 s）。', tag: '句型' },
    { id: 'i7-7', type: 'judge', q: '教室里有许多 desks 和 chairs。', options: ['√ 对', '✗ 错'], answer: 0, explain: '好多桌椅要用复数：desks、chairs。一个用单数，多个加 s。', tag: '复数' },
    { id: 'i7-8', type: 'choice', q: '上英语课，走进的房间是：', options: ['classroom', 'kitchen', 'zoo', 'park'], answer: 0, explain: 'classroom 教室（class 班级 + room 房间）；kitchen 厨房；zoo 动物园。', tag: '词汇' },
    { id: 'i7-9', type: 'choice', q: '"How many desks?" 在问：', options: ['有多少张桌子？', '桌子在哪里？', '桌子是什么颜色？', '你喜欢单桌吗？'], answer: 0, explain: 'How many ...?（有多少……？）问数量，回答 two desks 等。', tag: '句型' },
    { id: 'i7-10', type: 'choice', q: '数字歌 one, two, three, four, ___ ! 接下来是：', options: ['five', 'nine', 'ten', 'two'], answer: 0, explain: '顺序是 one two three four five（12345），接下来是 five。', tag: '数字' },
  ],
  i8: [
    { id: 'i8-1', type: 'choice', q: '"apple" 是什么水果？', options: ['苹果', '香蕉', '梨', '橘子'], answer: 0, explain: 'apple 苹果，An apple a day.（一天一个苹果身体好）', tag: '词汇' },
    { id: 'i8-2', type: 'choice', q: '长长的、黄黄的水果是：', options: ['banana', 'apple', 'pear', 'peach'], answer: 0, explain: 'banana 香蕉，弯弯的黄黄色。monkey 猴子最爱吃！', tag: '词汇' },
    { id: 'i8-3', type: 'choice', q: '"pear" 的意思是：', options: ['梨', '苹果', '葡萄', '西瓜'], answer: 0, explain: 'pear 梨，长得像小葫芦。pear 和 bear（熊）发音有点像，别弄混。', tag: '词汇' },
    { id: 'i8-4', type: 'choice', q: '又酸又甜的"橘子"是：', options: ['orange', 'apple', 'banana', 'cake'], answer: 0, explain: 'orange 既是橘子也是橙色——橘子的颜色就是 orange 哦！', tag: '词汇' },
    { id: 'i8-5', type: 'choice', q: '"I like apples." 的意思是：', options: ['我喜欢苹果。', '我有一个苹果。', '这是苹果。', '苹果是红色的。'], answer: 0, explain: 'I like ...（我喜欢……）说喜欢的水果：I like apples.', tag: '句型' },
    { id: 'i8-6', type: 'choice', q: '在水果店，店员问"你想吃什么？"可以说：', options: ['What do you like?', 'Where is the apple?', 'How are you?', 'Goodbye!'], answer: 0, explain: 'What do you like?（你喜欢什么？）回答 I like peaches. 我喜欢桃子。', tag: '句型' },
    { id: 'i8-7', type: 'judge', q: 'fruit 的意思是水果，苹果香蕉都是 fruit。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'fruit 水果。apple、banana、pear、orange 都是水果大家庭的成员。', tag: '词汇' },
    { id: 'i8-8', type: 'choice', q: '"红色的苹果"可以说：', options: ['a red apple', 'a red banana', 'a green banana', 'an red apple'], answer: 0, explain: 'red 红色。a red apple 一个红苹果。green 是绿色。', tag: '颜色+名词' },
    { id: 'i8-9', type: 'choice', q: '去 fruit shop 买东西，进门先说：', options: ['Hello!', 'Goodbye!', 'Thank you!', 'Sorry!'], answer: 0, explain: '进店先打招呼 Hello!，买完东西说 Thank you.（谢谢）。', tag: '情景' },
    { id: 'i8-10', type: 'choice', q: '"This is an apple." 用 an 是因为：', options: ['apple 第一个音是元音', 'apple 很大', '苹果是红色的', '随便用的'], answer: 0, explain: 'apple 开头是元音发音 /æ/，所以用 an 而不是 a：an apple, an orange。', tag: '语法' },
  ],
  i9: [
    { id: 'i9-1', type: 'choice', q: '米饭的英语是：', options: ['rice', 'noodles', 'soup', 'juice'], answer: 0, explain: 'rice 是米饭，white rice 白白的米饭。', tag: '词汇' },
    { id: 'i9-2', type: 'choice', q: '长长的面条是：', options: ['noodles', 'rice', 'egg', 'soup'], answer: 0, explain: 'noodles 面条（常用复数，因为一根根数不清）。I like noodles! 我爱吃面条！', tag: '词汇' },
    { id: 'i9-3', type: 'choice', q: '"soup" 是什么？', options: ['汤', '饭', '鱼', '肉'], answer: 0, explain: 'soup 是汤，热乎乎的汤 winter 冬天喝最舒服。', tag: '词汇' },
    { id: 'i9-4', type: 'choice', q: '"Have some rice, please." 的意思是：', options: ['请吃点米饭。', '请喝点汤。', '这是米饭。', '米饭在哪里？'], answer: 0, explain: 'Have some ..., please.（请吃/喝点……）招待别人很有礼貌。', tag: '句型' },
    { id: 'i9-5', type: 'choice', q: '别人请你吃东西，吃完说：', options: ['Thank you!', 'Give me more!', 'No food!', 'Goodbye!'], answer: 0, explain: '别人请客要说 Thank you!（谢谢你），做个有礼貌的小朋友。', tag: '礼貌用语' },
    { id: 'i9-6', type: 'choice', q: 'restaurant 是什么地方？', options: ['餐馆', '教室', '动物园', '公园'], answer: 0, explain: 'restaurant 餐馆，In the restaurant 在餐馆里吃饭。', tag: '词汇' },
    { id: 'i9-7', type: 'judge', q: 'noodles 要用筷子 chopsticks 吃，rice 可以用勺子 spoon 吃。', options: ['√ 对', '✗ 错'], answer: 0, explain: '中国面条用筷子，米饭用勺子或筷子都行，餐具各有用处。', tag: '常识' },
    { id: 'i9-8', type: 'choice', q: '早餐想喝的 milk 是：', options: ['牛奶', '果汁', '水', '汤'], answer: 0, explain: 'milk 牛奶，喝了长高高。juice 果汁、water 水。', tag: '词汇' },
    { id: 'i9-9', type: 'choice', q: '"I like rice and fish." 的意思是：', options: ['我喜欢米饭和鱼。', '我喜欢米饭和汤。', '这是米饭和鱼。', '米饭和鱼在哪里？'], answer: 0, explain: 'and 连接两个喜欢的东西：rice and fish 米饭和鱼。', tag: '句型' },
    { id: 'i9-10', type: 'choice', q: '吃饭前对做饭的人说：', options: ['Thank you for the food!', 'Give me food!', 'I want food now!', 'Bye!'], answer: 0, explain: '感谢做饭的人：Thank you for the food!（谢谢你的饭饭！）', tag: '礼貌用语' },
  ],
  i10: [
    { id: 'i10-1', type: 'choice', q: '"chick" 是农场里的：', options: ['小鸡', '小鸭', '小猪', '奶牛'], answer: 0, explain: 'chick 是小鸡，叽叽叽。hen 是母鸡（鸡妈妈）。', tag: '词汇' },
    { id: 'i10-2', type: 'choice', q: '嘎嘎叫的"鸭子"是：', options: ['duck', 'chick', 'cow', 'pig'], answer: 0, explain: 'duck 鸭子，嘎嘎嘎 quack quack！', tag: '词汇' },
    { id: 'i10-3', type: 'choice', q: '哞哞叫、能产奶的是：', options: ['cow', 'pig', 'duck', 'chick'], answer: 0, explain: 'cow 奶牛，milk 来自奶牛哦。', tag: '词汇' },
    { id: 'i10-4', type: 'choice', q: '"pig" 是什么动物？', options: ['猪', '牛', '鸭', '鸡'], answer: 0, explain: 'pig 猪，圆滚滚粉嘟嘟。', tag: '词汇' },
    { id: 'i10-5', type: 'choice', q: '"What do you see?" 的意思是：', options: ['你看见了什么？', '你是谁？', '你几岁了？', '你喜欢什么？'], answer: 0, explain: 'What do you see?（你看见什么？）回答：I see a cow.（我看见一头奶牛。）', tag: '句型' },
    { id: 'i10-6', type: 'choice', q: '在农场里，"I see a duck." 的意思是：', options: ['我看见一只鸭子。', '我看见一头牛。', '我养了一只鸭子。', '鸭子看见我。'], answer: 0, explain: 'I see ...（我看见……）see 是"看见"。', tag: '句型' },
    { id: 'i10-7', type: 'judge', q: 'farm 是农场，农场里有许多动物。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'farm 农场，On the farm 在农场上，小鸡小鸭小猪都是 farm animals 农场动物。', tag: '词汇' },
    { id: 'i10-8', type: 'choice', q: '母鸡 hen 生下的东西是：', options: ['egg', 'milk', 'bread', 'rice'], answer: 0, explain: 'hen 生 egg（鸡蛋）。milk 是奶牛产的奶。', tag: '常识' },
    { id: 'i10-9', type: 'choice', q: '小狗的英语是：', options: ['dog', 'cat', 'cow', 'pig'], answer: 0, explain: 'dog 小狗，人类的好朋友。cat 是小猫。', tag: '词汇' },
    { id: 'i10-10', type: 'choice', q: '去农场玩，看到很多动物，开心地说：', options: ['Wow! So many animals!', 'Bye-bye animals!', 'No animals!', 'Sorry!'], answer: 0, explain: 'Wow! So many animals!（哇！好多动物呀！）So many 表示"好多好多"。', tag: '情景' },
  ],
  i11: [
    { id: 'i11-1', type: 'choice', q: '黑白色的、中国的国宝是：', options: ['panda', 'tiger', 'monkey', 'bear'], answer: 0, explain: 'panda 熊猫是我们的国宝，黑白相间，爱吃竹子 bamboo。', tag: '词汇' },
    { id: 'i11-2', type: 'choice', q: '"tiger" 是什么动物？', options: ['老虎', '猴子', '大象', '熊猫'], answer: 0, explain: 'tiger 老虎，森林之王，身上有条纹。', tag: '词汇' },
    { id: 'i11-3', type: 'choice', q: '最爱吃香蕉、爬树很快的是：', options: ['monkey', 'panda', 'tiger', 'bear'], answer: 0, explain: 'monkey 猴子，最爱吃 banana 香蕉，还会荡秋千！', tag: '词汇' },
    { id: 'i11-4', type: 'choice', q: 'zoo 是什么地方？', options: ['动物园', '公园', '农场', '教室'], answer: 0, explain: 'zoo 动物园，In the zoo 在动物园里能看到许多 wild animals 野生动物。', tag: '词汇' },
    { id: 'i11-5', type: 'choice', q: '"Look at the panda!" 的意思是：', options: ['看那只熊猫！', '喂那只熊猫！', '那只熊猫不见了！', '我喜欢熊猫！'], answer: 0, explain: 'Look at ...（看……）提醒别人看某样东西。', tag: '句型' },
    { id: 'i11-6', type: 'choice', q: '动物园里体形最大、长鼻子的是：', options: ['elephant', 'monkey', 'duck', 'chick'], answer: 0, explain: 'elephant 大象，长长的大鼻子 long trunk，耳朵像大扇子。', tag: '词汇' },
    { id: 'i11-7', type: 'judge', q: '在动物园里不能随便喂动物，要爱护它们。', options: ['√ 对', '✗ 错'], answer: 0, explain: '动物有饲养员照顾，随便投喂会让它们生病，我们要文明游园。', tag: '常识' },
    { id: 'i11-8', type: 'choice', q: '"The tiger is big." 的意思是：', options: ['老虎很大。', '老虎很小。', '老虎不见了。', '老虎在睡觉。'], answer: 0, explain: 'big 大的，反义词 small 小的。The tiger is big. 老虎大大的。', tag: '句型' },
    { id: 'i11-9', type: 'choice', q: '棕熊是：', options: ['bear', 'pear', 'hair', 'chair'], answer: 0, explain: 'bear 熊。注意别和 pear（梨）搞混，发音接近但意思完全不同。', tag: '易错点' },
    { id: 'i11-10', type: 'choice', q: '逛完动物园，和朋友说：', options: ['I love the zoo!', 'I hate the zoo!', 'Where is the zoo?', 'No zoo!'], answer: 0, explain: 'I love the zoo!（我爱动物园！）love 表达喜欢。', tag: '情景' },
  ],
  i12: [
    { id: 'i12-1', type: 'choice', q: '公园里香香的"花"是：', options: ['flower', 'tree', 'kite', 'grass'], answer: 0, explain: 'flower 花，公园里 flower 有红的黄的，好漂亮！', tag: '词汇' },
    { id: 'i12-2', type: 'choice', q: '高高的大树是：', options: ['tree', 'flower', 'bird', 'kite'], answer: 0, explain: 'tree 大树，tree 上可能有 bird 小鸟哦。', tag: '词汇' },
    { id: 'i12-3', type: 'choice', q: '春天放飞的"风筝"是：', options: ['kite', 'ball', 'bike', 'boat'], answer: 0, explain: 'kite 风筝，Fly a kite 放风筝。风筝要飞得高高！', tag: '词汇' },
    { id: 'i12-4', type: 'choice', q: '"red" 是什么颜色？', options: ['红色', '蓝色', '黄色', '绿色'], answer: 0, explain: 'red 红色，像太阳、像红花。', tag: '颜色' },
    { id: 'i12-5', type: 'choice', q: '"蓝色的天空"是：', options: ['blue sky', 'red sky', 'yellow sky', 'green sky'], answer: 0, explain: 'blue 蓝色，sky 天空。blue sky 蓝蓝的天空。', tag: '颜色' },
    { id: 'i12-6', type: 'choice', q: '小草和小树叶的颜色是：', options: ['green', 'red', 'blue', 'black'], answer: 0, explain: 'green 绿色，grass 草和 tree 叶子都是 green。', tag: '颜色' },
    { id: 'i12-7', type: 'judge', q: 'banana 是黄色的，yellow 就是黄色。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'yellow 黄色，香蕉、小鸭子、太阳都是 yellow。', tag: '颜色' },
    { id: 'i12-8', type: 'choice', q: '"I can see a kite in the park." 的意思是：', options: ['在公园里我看见一只风筝。', '我在公园放风筝。', '公园里没有风筝。', '风筝在公园里睡觉。'], answer: 0, explain: 'I can see ... in the park.（在公园里我看见……）', tag: '句型' },
    { id: 'i12-9', type: 'choice', q: '公园里不能做的事是：', options: ['摘花、踩草地', '散步', '放风筝', '看花'], answer: 0, explain: '爱护花草：不摘 flower、不踩 grass，做文明小游客。', tag: '常识' },
    { id: 'i12-10', type: 'choice', q: '彩虹的颜色可以用英语数一数，其中"紫色"是：', options: ['purple', 'yellow', 'green', 'white'], answer: 0, explain: 'purple 紫色。彩虹七色：red orange yellow green blue indigo purple。', tag: '拓展' },
  ],
}
