// 2026 秋使用版 牛津上海版（试用本）英语 二年级上册（2A）随堂知识点题库
// 教材：九年义务教育课本 英语（牛津上海版）二年级上册 · 上海教育出版社
// 目录：Module 1 Getting to know you（Unit 1-3）/ Module 2 Me, my family and friends（Unit 1-3）
//       / Module 3 Places and activities（Unit 1-3）/ Module 4 The natural world（Unit 1-3）
// 每个单元一关，每关 10 题，共 12 关 120 题，题目 id 前缀 h

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
    id: 'h1',
    name: 'Unit 1',
    title: 'Hello',
    emoji: '👋',
    color: 'cyan',
    lessons: ['Good morning / afternoon / evening / night', 'How are you today?'],
    intro: 'Hello! 学会用英语说早安、晚安，问好朋友——开口就是好朋友！',
  },
  {
    id: 'h2',
    name: 'Unit 2',
    title: "I'm Danny",
    emoji: '🧒',
    color: 'sky',
    lessons: ['I am a boy / a girl', 'tall / short / big / small'],
    intro: "I'm Danny. I'm a boy. 用英语介绍自己，还要学会说高矮胖瘦哦！",
  },
  {
    id: 'h3',
    name: 'Unit 3',
    title: 'A new classmate',
    emoji: '🎒',
    color: 'teal',
    lessons: ['You are ... / I am ...', '认识新同学'],
    intro: '班里来了新同学，用英语互相认识一下：What is your name? Nice to meet you!',
  },
  {
    id: 'h4',
    name: 'Unit 1',
    title: 'Can you swim?',
    emoji: '🏊',
    color: 'lime',
    lessons: ['run / jump / swim / fly', 'I can ... / I cannot ...'],
    intro: 'Can you swim? I can run! 说说你的本领，运动单词动起来！',
  },
  {
    id: 'h5',
    name: 'Unit 2',
    title: "That's my family",
    emoji: '👨‍👩‍👧',
    color: 'emerald',
    lessons: ['father / mother / grandfather / grandmother', 'Who is he / she?'],
    intro: "That's my family! 介绍你的家人：这是爸爸，这是妈妈……",
  },
  {
    id: 'h6',
    name: 'Unit 3',
    title: 'My hair is short',
    emoji: '💇',
    color: 'violet',
    lessons: ['hair / head / face', 'long / short'],
    intro: 'My hair is short. Your hair is long. 看看头发长短短，五官单词也来啦！',
  },
  {
    id: 'h7',
    name: 'Unit 1',
    title: "In the children's garden",
    emoji: '🛝',
    color: 'amber',
    lessons: ['slide / swing / seesaw', 'Play on the ...'],
    intro: "In the children's garden: slide、swing、seesaw，滑梯秋千跷跷板真好玩！",
  },
  {
    id: 'h8',
    name: 'Unit 2',
    title: 'In my room',
    emoji: '🛏️',
    color: 'orange',
    lessons: ['bed / desk / chair / bag', 'In my room, there is ...'],
    intro: 'In my room: bed、desk、chair——你的房间里有什么？用英语说一说！',
  },
  {
    id: 'h9',
    name: 'Unit 3',
    title: 'In the kitchen',
    emoji: '🍳',
    color: 'red',
    lessons: ['bowl / plate / spoon / chopsticks', 'tableware 餐具'],
    intro: 'In the kitchen: bowl、plate、spoon——吃饭的餐具英文都会说吗？',
  },
  {
    id: 'h10',
    name: 'Unit 1',
    title: 'In the sky',
    emoji: '☁️',
    color: 'sky',
    lessons: ['sun / moon / star', 'Look at the sky!'],
    intro: 'Look at the sky! 白天有太阳，晚上有月亮和星星——天空单词一起学！',
  },
  {
    id: 'h11',
    name: 'Unit 2',
    title: 'In the forest',
    emoji: '🌳',
    color: 'lime',
    lessons: ['tree / bird / flower', 'In the forest, I can see ...'],
    intro: 'In the forest: 大树、小鸟、花朵——森林里藏着好多英语单词！',
  },
  {
    id: 'h12',
    name: 'Unit 3',
    title: 'In the street',
    emoji: '🚌',
    color: 'violet',
    lessons: ['bus / car / taxi', 'On the road'],
    intro: 'In the street: bus、car、taxi——马路上的车车英语大集合！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  h1: [
    { id: 'h1-1', type: 'choice', q: '早上见到老师，应该说：', options: ['Good morning.', 'Good night.', 'Good evening.', 'Good afternoon.'], answer: 0, explain: '早上问好用 Good morning；Good afternoon 是下午，Good evening 是傍晚，Good night 是睡前道晚安。', tag: '问候语' },
    { id: 'h1-2', type: 'choice', q: '"晚上好"用英语怎么说？', options: ['Good evening.', 'Good morning.', 'Good night.', 'Good day.'], answer: 0, explain: '傍晚见面问好用 Good evening；睡前道别、说晚安用 Good night。', tag: '问候语' },
    { id: 'h1-3', type: 'choice', q: '"How are you today?" 的正确回答是：', options: ["I'm very well. Thank you.", 'I am Danny.', 'It is a book.', 'Good night.'], answer: 0, explain: '别人问你好不好，回答 I’m very well. Thank you.（我很好，谢谢），还要有礼貌哦。', tag: '对话' },
    { id: 'h1-4', type: 'choice', q: '"night" 这个单词的意思是：', options: ['夜晚', '早晨', '中午', '白天'], answer: 0, explain: 'night 是夜晚，如 Good night 晚安。morning 早晨、afternoon 下午、evening 傍晚。', tag: '词汇' },
    { id: 'h1-5', type: 'choice', q: '"mum" 的意思是：', options: ['妈妈', '爸爸', '老师', '同学'], answer: 0, explain: 'mum 是妈妈（英式），dad 是爸爸。today 意思是今天。', tag: '词汇' },
    { id: 'h1-6', type: 'choice', q: '和同学初次见面，说"见到你很高兴"：', options: ['Nice to meet you.', 'Goodbye.', 'Good night.', 'How old are you?'], answer: 0, explain: 'Nice to meet you. 见到你很高兴。回答是 Nice to meet you, too.（我也是）。', tag: '问候语' },
    { id: 'h1-7', type: 'choice', q: '下午三点见到同学，说：', options: ['Good afternoon.', 'Good morning.', 'Good night.', 'Good evening.'], answer: 0, explain: '下午用 Good afternoon。一天中的问候语：morning → afternoon → evening → night。', tag: '问候语' },
    { id: 'h1-8', type: 'judge', q: '"Good night." 也可以在晚上见面时当问好用。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Good night 是睡前或晚上分别时说的"晚安"，晚上见面问好应该说 Good evening。', tag: '易错点' },
    { id: 'h1-9', type: 'choice', q: '"today" 的意思是：', options: ['今天', '明天', '昨天', '每天'], answer: 0, explain: 'today 今天，tomorrow 明天，yesterday 昨天。How are you today? 你今天好吗？', tag: '词汇' },
    { id: 'h1-10', type: 'choice', q: '放学时和好朋友说再见：', options: ['Goodbye! / Bye-bye!', 'Hello!', 'Thank you.', 'Sorry.'], answer: 0, explain: '说再见用 Goodbye 或 Bye-bye；Hello 是你好，Thank you 是谢谢，Sorry 是对不起。', tag: '问候语' },
  ],
  h2: [
    { id: 'h2-1', type: 'choice', q: '介绍自己是男孩，应该说：', options: ["I'm a boy.", "I'm a girl.", 'I am tall.', 'You are a boy.'], answer: 0, explain: 'I’m a boy. 我是男孩；girl 是女孩。介绍自己用 I am……', tag: '句型' },
    { id: 'h2-2', type: 'choice', q: '"tall" 的意思是：', options: ['高的', '矮的', '大的', '胖的'], answer: 0, explain: 'tall 高的，short 矮的、短的；big 大的，small 小的。这四个形容词要分清。', tag: '词汇' },
    { id: 'h2-3', type: 'choice', q: 'Danny 很矮，可以说：', options: ["Danny is short.", 'Danny is tall.', 'Danny is big.', 'Danny is small.'], answer: 0, explain: 'short 表示个子矮：Danny is short. 丹尼个子矮。tall 表示高。', tag: '句型' },
    { id: 'h2-4', type: 'choice', q: '大象很大，用英语说：', options: ['The elephant is big.', 'The elephant is small.', 'The elephant is short.', 'The elephant is a boy.'], answer: 0, explain: 'big 大的：The elephant is big. 大象很大。small 是小的。', tag: '句型' },
    { id: 'h2-5', type: 'choice', q: '"boy" 的反义词（相对词）是：', options: ['girl', 'tall', 'small', 'teacher'], answer: 0, explain: 'boy 男孩 ↔ girl 女孩；tall 高 ↔ short 矮；big 大 ↔ small 小。', tag: '词汇' },
    { id: 'h2-6', type: 'choice', q: '“I’m Danny.” 是什么意思？', options: ['我是丹尼。', '你是丹尼。', '他很高。', '丹尼是女孩。'], answer: 0, explain: "I'm = I am，I'm Danny. 我是丹尼。用 I'm…… 来介绍自己的名字。", tag: '句型' },
    { id: 'h2-7', type: 'choice', q: '询问别人是谁，应该问：', options: ['Who are you?', 'How are you?', 'Good morning.', 'Thank you.'], answer: 0, explain: 'Who are you? 你是谁？回答 I’m……；How are you? 是问身体好不好。', tag: '对话' },
    { id: 'h2-8', type: 'judge', q: '形容女生个子高，可以说：She is tall.', options: ['√ 对', '✗ 错'], answer: 0, explain: 'she 她，he 他。She is tall. 她个子高。He is tall. 他个子高。', tag: '句型' },
    { id: 'h2-9', type: 'choice', q: '小老鼠很小，用英语形容它：', options: ['The mouse is small.', 'The mouse is big.', 'The mouse is tall.', 'The mouse is short.'], answer: 0, explain: 'small 小的：The mouse is small. 老鼠很小。注意 small 也指体积小。', tag: '句型' },
    { id: 'h2-10', type: 'choice', q: '"short" 可以表示哪两个意思？', options: ['矮的 / 短的', '高的 / 长的', '大的 / 小的', '胖的 / 瘦的'], answer: 0, explain: 'short 既指个子矮（He is short.），也指长度短（My hair is short.），一词两用。', tag: '词汇' },
  ],
  h3: [
    { id: 'h3-1', type: 'choice', q: '问新同学的名字，应该说：', options: ['What is your name?', 'Who is he?', 'How are you?', 'I am fine.'], answer: 0, explain: 'What is your name? 你叫什么名字？回答：My name is…… 或 I’m……', tag: '对话' },
    { id: 'h3-2', type: 'choice', q: '"classmate" 的意思是：', options: ['同学', '老师', '爸爸', '朋友'], answer: 0, explain: 'classmate 同学（class 班级 + mate 伙伴），a new classmate 一位新同学。', tag: '词汇' },
    { id: 'h3-3', type: 'choice', q: '介绍别人：这是爱丽丝。用英语说：', options: ['This is Alice.', 'I am Alice.', 'She is I.', 'You are Alice.'], answer: 0, explain: '介绍别人用 This is……：This is Alice. 这是爱丽丝。介绍自己才用 I am……', tag: '句型' },
    { id: 'h3-4', type: 'choice', q: '新同学问你名字，你回答：', options: ['My name is Kitty.', 'You are Kitty.', 'She is Kitty.', 'His name is Kitty.'], answer: 0, explain: 'My name is…… 我的名字叫……；his 他的，her 她的，my 我的。', tag: '对话' },
    { id: 'h3-5', type: 'judge', q: '"Nice to meet you." 的回答是 "Nice to meet you, too."', options: ['√ 对', '✗ 错'], answer: 0, explain: 'too 表示"也"：Nice to meet you, too. 我也很高兴见到你，这是有礼貌的回答。', tag: '对话' },
    { id: 'h3-6', type: 'choice', q: '告诉新同学你七岁了，说：', options: ['I am seven.', 'You are seven.', 'Seven books.', 'I am a boy.'], answer: 0, explain: 'I am seven. 我七岁。英语里年龄用 be 动词表达：I am + 数字。', tag: '句型' },
    { id: 'h3-7', type: 'choice', q: '"teacher" 的意思是：', options: ['老师', '学生', '同学', '家长'], answer: 0, explain: 'teacher 老师，student 学生，classmate 同学。', tag: '词汇' },
    { id: 'h3-8', type: 'choice', q: '描述新同学是大眼睛女孩（用 she）：', options: ['She is a girl.', 'He is a girl.', 'It is a girl.', 'You are a girl.'], answer: 0, explain: 'she 指女生，he 指男生：She is a girl. 她是女孩。', tag: '句型' },
    { id: 'h3-9', type: 'choice', q: '下课了想和新同学一起玩，有礼貌地说：', options: ["Let's play together!", 'Go away!', 'I am taller.', 'You are short.'], answer: 0, explain: "Let's play together! 我们一起玩吧！对朋友要友好，Go away（走开）不礼貌。", tag: '口语交际' },
    { id: 'h3-10', type: 'choice', q: '指着自己的朋友向老师介绍（男孩），说：', options: ['This is my friend. He is a boy.', 'This is my friend. She is a boy.', 'I am a boy.', 'He is my friend. She is a boy.'], answer: 0, explain: '男孩用 he：This is my friend. He is a boy. 这是我的朋友，他是男孩。', tag: '句型' },
  ],
  h4: [
    { id: 'h4-1', type: 'choice', q: '"Can you swim?" 是什么意思？', options: ['你会游泳吗？', '你会跑吗？', '你能飞吗？', '你会跳吗？'], answer: 0, explain: 'swim 游泳，run 跑，fly 飞，jump 跳。Can you……? 用来问会不会做某事。', tag: '词汇与句型' },
    { id: 'h4-2', type: 'choice', q: '会游泳，怎么回答？', options: ['Yes, I can swim.', 'No, I can swim.', 'I am swim.', 'You can swim.'], answer: 0, explain: '会：Yes, I can. / Yes, I can swim. 不会：No, I cannot（can’t）swim.', tag: '对话' },
    { id: 'h4-3', type: 'choice', q: '小鸟会飞，说：', options: ['The bird can fly.', 'The bird can swim.', 'The bird can run.', 'The bird can jump.'], answer: 0, explain: 'fly 飞：The bird can fly. 小鸟会飞。fish 会 swim，rabbit 会 run 和 jump。', tag: '句型' },
    { id: 'h4-4', type: 'choice', q: '"run" 的意思是：', options: ['跑', '游泳', '飞', '写字'], answer: 0, explain: 'run 跑，swim 游泳，fly 飞。I can run fast. 我能跑得快。', tag: '词汇' },
    { id: 'h4-5', type: 'choice', q: '不会跳绳，诚实地说：', options: ["I cannot jump rope.", 'I can jump rope.', 'I am jump rope.', 'Jump rope, yes.'], answer: 0, explain: 'cannot = can’t，表示不会：I cannot jump rope. 我不会跳绳。', tag: '句型' },
    { id: 'h4-6', type: 'choice', q: '"jump" 的意思是：', options: ['跳', '跑', '走', '爬'], answer: 0, explain: 'jump 跳，run 跑，walk 走，climb 爬。青蛙会 jump，袋鼠也会 jump。', tag: '词汇' },
    { id: 'h4-7', type: 'judge', q: '问别人会不会游泳，用 "Can you swim?"，很有礼貌。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Can you……? 是礼貌的询问方式，也可以用来发出邀请，如 Can you sing? 你会唱歌吗？', tag: '句型' },
    { id: 'h4-8', type: 'choice', q: '鱼的本领是什么？', options: ['The fish can swim.', 'The fish can fly.', 'The fish can run.', 'The fish can jump.'], answer: 0, explain: 'The fish can swim. 鱼会游泳。不同动物有不同的本领：bird-fly、fish-swim、rabbit-jump。', tag: '句型' },
    { id: 'h4-9', type: 'choice', q: '"super" 的意思是：', options: ['超级的、厉害的', '小的', '慢的', '伤心的'], answer: 0, explain: 'super 超级、了不起：You are super! 你真棒！夸奖别人时可以说。', tag: '词汇' },
    { id: 'h4-10', type: 'choice', q: '夸同学跳得高，说：', options: ['You can jump high. Great!', 'You can swim high.', 'You jump can high.', 'High are you?'], answer: 0, explain: 'You can jump high. 你能跳得很高！high 高高地，夸人本领时常用。', tag: '句型' },
  ],
  h5: [
    { id: 'h5-1', type: 'choice', q: '"father" 的意思是：', options: ['爸爸', '妈妈', '爷爷', '奶奶'], answer: 0, explain: 'father/dad 爸爸，mother/mum 妈妈，grandfather 爷爷/外公，grandmother 奶奶/外婆。', tag: '词汇' },
    { id: 'h5-2', type: 'choice', q: '指着照片上的奶奶说：', options: ['This is my grandmother.', 'This is my grandfather.', 'This is my father.', 'This is my classmate.'], answer: 0, explain: 'grandmother 奶奶/外婆，grandfather 爷爷/外公。This is…… 用来介绍家人。', tag: '句型' },
    { id: 'h5-3', type: 'choice', q: '"Who is she?" 的正确回答是：', options: ['She is my mother.', 'He is my mother.', 'I am a girl.', 'This is my mother. 不用 She'], answer: 0, explain: '问 she 用 she 答：She is my mother. 她是我妈妈。问 he 用 He is…… 回答。', tag: '对话' },
    { id: 'h5-4', type: 'choice', q: '"family" 的意思是：', options: ['家庭', '朋友', '学校', '教室'], answer: 0, explain: 'family 家庭：That’s my family. 那是我的家庭。家人是 father、mother、me……', tag: '词汇' },
    { id: 'h5-5', type: 'choice', q: '介绍爸爸很强壮，说：', options: ['My father is strong.', 'My father is a girl.', 'My mother is strong.', 'My father can swim.'], answer: 0, explain: 'strong 强壮的：My father is strong. 我爸爸很强壮。', tag: '句型' },
    { id: 'h5-6', type: 'choice', q: '"grandfather" 是指：', options: ['爷爷或外公', '爸爸', '哥哥', '叔叔'], answer: 0, explain: 'grandfather 爷爷/外公，grandmother 奶奶/外婆，都是 family 里的长辈。', tag: '词汇' },
    { id: 'h5-7', type: 'judge', q: '问男孩用 "Who is he?"，回答用 "He is my father."', options: ['√ 对', '✗ 错'], answer: 0, explain: 'he 他、she 她，问和答要一致：Who is he? → He is my father.（他是我爸爸。）', tag: '对话' },
    { id: 'h5-8', type: 'choice', q: '"mother" 的意思是：', options: ['妈妈', '爸爸', '姐姐', '老师'], answer: 0, explain: 'mother/mum 妈妈。I love my mother. 我爱我的妈妈。', tag: '词汇' },
    { id: 'h5-9', type: 'choice', q: '介绍自己的家人（妈妈），最有礼貌的说法是：', options: ['This is my mother. I love her.', 'This is mother I love her.', 'My mother is she.', 'She mother is my.'], answer: 0, explain: 'This is my mother. I love her. 这是我的妈妈，我爱她。her 是 she 的宾格。', tag: '句型' },
    { id: 'h5-10', type: 'choice', q: '"me" 的意思是：', options: ['我（宾格）', '你', '他', '我们'], answer: 0, explain: 'me 我。介绍全家时：father、mother and me 爸爸、妈妈和我。', tag: '词汇' },
  ],
  h6: [
    { id: 'h6-1', type: 'choice', q: '"hair" 的意思是：', options: ['头发', '手', '脚', '脸'], answer: 0, explain: 'hair 头发，head 头，face 脸。My hair is short. 我的头发是短的。', tag: '词汇' },
    { id: 'h6-2', type: 'choice', q: '"My hair is short." 的意思是：', options: ['我的头发短。', '我的头发长。', '我的头很大。', '我的脸圆圆的。'], answer: 0, explain: 'short 短的，long 长的：My hair is short. 我的头发短。Your hair is long. 你的头发长。', tag: '句型' },
    { id: 'h6-3', type: 'choice', q: '"long" 的反义词是：', options: ['short', 'tall', 'big', 'small'], answer: 0, explain: 'long 长的 ↔ short 短的（长的）。tall 高的反义词也是 short（矮），注意区分语境。', tag: '词汇' },
    { id: 'h6-4', type: 'choice', q: '说妹妹的头发长长的：', options: ["My sister's hair is long.", "My sister's hair is short.", "My sister can swim.", "My sister is small. 不是说头发"], answer: 0, explain: "long 长的：My sister's hair is long. 我妹妹（姐姐）的头发长长的。's 表示『某某的』。", tag: '句型' },
    { id: 'h6-5', type: 'choice', q: '"face" 的意思是：', options: ['脸', '头发', '腿', '耳朵'], answer: 0, explain: 'face 脸。五官单词：eye 眼睛、nose 鼻子、mouth 嘴巴、ear 耳朵，都在 face 上。', tag: '词汇' },
    { id: 'h6-6', type: 'choice', q: '"head" 的意思是：', options: ['头', '手', '脚', '背'], answer: 0, explain: 'head 头。Touch your head. 摸摸你的头，课堂上老师常用这样的口令。', tag: '词汇' },
    { id: 'h6-7', type: 'judge', q: '问句 "Is your hair long?" 回答 "Yes, it is." 表示头发长。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Is your hair long? 你的头发长吗？Yes, it is. 是的，长。No, it isn’t. 不，不长。', tag: '对话' },
    { id: 'h6-8', type: 'choice', q: '形容爷爷的头发白白的：', options: ["My grandfather's hair is white.", "My grandfather's hair is black.", "My grandfather can fly.", "My grandfather is white. 不是说头发"], answer: 0, explain: "white 白色：My grandfather's hair is white. 爷爷的头发白了。black 黑色。", tag: '句型' },
    { id: 'h6-9', type: 'choice', q: '"short hair" 是什么意思？', options: ['短发', '长发', '黑发', '白发'], answer: 0, explain: 'short hair 短发，long hair 长发，black hair 黑发。单词顺序：形容词在名词前面。', tag: '词汇' },
    { id: 'h6-10', type: 'choice', q: '好朋友问你头发长短，你留长发，回答：', options: ['My hair is long.', 'My hair is short.', 'I am long.', 'My hair long is.'], answer: 0, explain: 'My hair is long. 我的头发长。句型：My + 身体部位 + is + 形容词。', tag: '句型' },
  ],
  h7: [
    { id: 'h7-1', type: 'choice', q: '"slide" 的意思是：', options: ['滑梯', '秋千', '跷跷板', '球'], answer: 0, explain: 'slide 滑梯，swing 秋千，seesaw 跷跷板，都是 children’s garden（儿童乐园）里的游乐设施。', tag: '词汇' },
    { id: 'h7-2', type: 'choice', q: '在儿童乐园玩滑梯，说：', options: ["Play on the slide.", 'Play on the swing.', 'Play on the seesaw.', 'Play on the book.'], answer: 0, explain: 'Play on the slide. 玩滑梯；play on the swing 荡秋千；play on the seesaw 玩跷跷板。', tag: '句型' },
    { id: 'h7-3', type: 'choice', q: '"swing" 的意思是：', options: ['秋千', '滑梯', '花园', '教室'], answer: 0, explain: 'swing 秋千。Let’s play on the swing! 我们去荡秋千吧！', tag: '词汇' },
    { id: 'h7-4', type: 'choice', q: '"seesaw" 的意思是：', options: ['跷跷板', '滑梯', '秋千', '沙坑'], answer: 0, explain: 'seesaw 跷跷板，一上一下真好玩：We can play on the seesaw. 我们可以玩跷跷板。', tag: '词汇' },
    { id: 'h7-5', type: 'choice', q: '"children’s garden" 的意思是：', options: ['儿童乐园', '菜园', '花园', '动物园'], answer: 0, explain: "children's garden 儿童乐园（也是 kindergarden 幼儿园的由来），In the children's garden 在儿童乐园里。", tag: '词汇' },
    { id: 'h7-6', type: 'judge', q: '邀请朋友一起玩，说 "Let’s play together!"', options: ['√ 对', '✗ 错'], answer: 0, explain: "Let’s = Let us，Let's play together! 我们一起玩吧！是有好的邀请用语。", tag: '口语交际' },
    { id: 'h7-7', type: 'choice', q: '排队玩滑梯要遵守规则，"排队"是：', options: ['Wait for your turn.', 'Push others.', 'Run away.', 'Cry loudly.'], answer: 0, explain: 'Wait for your turn. 等轮到你，要排队；push others 推别人、run away 跑开都不安全。', tag: '口语交际' },
    { id: 'h7-8', type: 'choice', q: '问朋友会不会荡秋千：', options: ['Can you play on the swing?', 'Do you swing good?', 'You swing?', 'Swing can you?'], answer: 0, explain: 'Can you play on the swing? 你会荡秋千吗？回答：Yes, I can. / No, I cannot.', tag: '对话' },
    { id: 'h7-9', type: 'choice', q: '"play" 的意思是：', options: ['玩', '学习', '睡觉', '吃饭'], answer: 0, explain: 'play 玩：play on the slide 玩滑梯。play 还能接球类，如 play football 踢足球。', tag: '词汇' },
    { id: 'h7-10', type: 'choice', q: '玩好滑梯后觉得开心，说：', options: ['I am happy!', 'I am sad.', 'I am hungry.', 'I am tired.'], answer: 0, explain: 'happy 开心，sad 伤心，hungry 饿，tired 累。I am happy! 我好开心！', tag: '词汇' },
  ],
  h8: [
    { id: 'h8-1', type: 'choice', q: '"bed" 的意思是：', options: ['床', '桌子', '椅子', '窗户'], answer: 0, explain: 'bed 床，desk 书桌，chair 椅子，door 门，window 窗户，都是房间里的物品。', tag: '词汇' },
    { id: 'h8-2', type: 'choice', q: '"desk" 的意思是：', options: ['书桌', '床', '书包', '灯'], answer: 0, explain: 'desk 书桌。I have a desk and a chair. 我有一张书桌和一把椅子。', tag: '词汇' },
    { id: 'h8-3', type: 'choice', q: '介绍自己房间里的床，说：', options: ['In my room, there is a bed.', 'In my room, there is a car.', 'In my bed, there is a room.', 'My room is a bed.'], answer: 0, explain: 'In my room, there is a bed. 我的房间里有一张床。there is 表示"有"。', tag: '句型' },
    { id: 'h8-4', type: 'choice', q: '"chair" 的意思是：', options: ['椅子', '桌子', '黑板', '门'], answer: 0, explain: 'chair 椅子。Sit on the chair. 坐在椅子上。desk 和 chair 是学习好伙伴。', tag: '词汇' },
    { id: 'h8-5', type: 'choice', q: '"bag" 的意思是：', options: ['书包', '笔', '尺子', '橡皮'], answer: 0, explain: 'bag 书包/袋子。My bag is new. 我的新书包。文具：pen 钢笔、ruler 尺子、rubber 橡皮。', tag: '词汇' },
    { id: 'h8-6', type: 'judge', q: '"window" 的意思是窗户。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'window 窗户，door 门。Open the window, please. 请打开窗户。', tag: '词汇' },
    { id: 'h8-7', type: 'choice', q: '"room" 的意思是：', options: ['房间', '屋顶', '家', '床'], answer: 0, explain: 'room 房间：my room 我的房间。house 才是整个房子/家。', tag: '词汇' },
    { id: 'h8-8', type: 'choice', q: '房间里有一盏灯，说：', options: ['There is a lamp in my room.', 'There is a lamp on my bed.', 'There are a lamp.', 'Lamp there is a.'], answer: 0, explain: 'There is a lamp in my room. 房间里有一盏灯。lamp 灯，a lamp 一盏灯。', tag: '句型' },
    { id: 'h8-9', type: 'choice', q: '问朋友的房间里有什么，可以问：', options: ['What is in your room?', 'Who is in your room? 不合适作为普遍提问', 'How is your room? 只问好不好', 'Where is room?'], answer: 0, explain: 'What is in your room? 你的房间里有什么？回答：There is a bed and a desk.', tag: '对话' },
    { id: 'h8-10', type: 'choice', q: '和房间物品配对错误的是：', options: ['kitchen - bed（厨房-床）', 'bedroom - bed', 'desk - chair', 'room - window'], answer: 0, explain: 'bed 床在 bedroom（卧室）里；kitchen 是厨房，放的是碗筷灶台，不放床哦。', tag: '易错点' },
  ],
  h9: [
    { id: 'h9-1', type: 'choice', q: '"bowl" 的意思是：', options: ['碗', '盘子', '勺子', '筷子'], answer: 0, explain: 'bowl 碗，plate 盘子，spoon 勺子，chopsticks 筷子，都是餐具（tableware）。', tag: '词汇' },
    { id: 'h9-2', type: 'choice', q: '"plate" 的意思是：', options: ['盘子', '碗', '杯子', '锅'], answer: 0, explain: 'plate 盘子。Put the food on the plate. 把食物放在盘子上。', tag: '词汇' },
    { id: 'h9-3', type: 'choice', q: '"spoon" 的意思是：', options: ['勺子', '盘子', '碗', '刀'], answer: 0, explain: 'spoon 勺子。Eat with a spoon. 用勺子吃饭。', tag: '词汇' },
    { id: 'h9-4', type: 'choice', q: '"chopsticks" 是什么？', options: ['筷子（常用复数）', '勺子', '碗', '盘子'], answer: 0, explain: 'chopsticks 筷子，因为有两根，常用复数：a pair of chopsticks 一双筷子。', tag: '词汇' },
    { id: 'h9-5', type: 'choice', q: '"kitchen" 的意思是：', options: ['厨房', '卧室', '客厅', '厕所'], answer: 0, explain: 'kitchen 厨房：In the kitchen 在厨房里。bedroom 卧室，living room 客厅。', tag: '词汇' },
    { id: 'h9-6', type: 'choice', q: '妈妈在厨房里，说：', options: ['Mum is in the kitchen.', 'Mum is on the kitchen.', 'Mum kitchen is in.', 'Mum is kitchen.'], answer: 0, explain: 'Mum is in the kitchen. 妈妈在厨房里。在某个房间里用介词 in。', tag: '句型' },
    { id: 'h9-7', type: 'judge', q: '吃饭前帮忙摆碗筷是好习惯，"bowl and spoon" 是碗和勺子。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'bowl 碗、spoon 勺子，帮妈妈摆 tableware（餐具）可以说：Here is the bowl and spoon.', tag: '词汇' },
    { id: 'h9-8', type: 'choice', q: '用英语请别人用餐：', options: ['Have dinner, please. / Dinner is ready!', 'Go to bed!', 'Open the door!', 'Wash your hair!'], answer: 0, explain: 'Dinner is ready! 晚饭好啦！Have dinner, please. 请用餐。Go to bed 是去睡觉。', tag: '口语交际' },
    { id: 'h9-9', type: 'choice', q: '"cup" 的意思是：', options: ['杯子', '勺子', '盘子', '碗'], answer: 0, explain: 'cup 杯子：a cup of milk 一杯牛奶。drinking cup 喝水的杯子。', tag: '词汇' },
    { id: 'h9-10', type: 'choice', q: '吃完饭帮忙收拾，碗用英语说：', options: ['Wash the bowls, please.', 'Wash the window, please.', 'Wash the chair, please.', 'Wash the book, please.'], answer: 0, explain: 'Wash the bowls, please. 请洗碗。wash 洗，帮做家务也要会用英语说哦。', tag: '句型' },
  ],
  h10: [
    { id: 'h10-1', type: 'choice', q: '"sun" 的意思是：', options: ['太阳', '月亮', '星星', '云'], answer: 0, explain: 'sun 太阳，moon 月亮，star 星星，cloud 云，都在天上（in the sky）。', tag: '词汇' },
    { id: 'h10-2', type: 'choice', q: '晚上天空中最亮的是月亮，月亮是：', options: ['moon', 'sun', 'star', 'sky'], answer: 0, explain: 'moon 月亮：The moon is bright tonight. 今晚月亮很亮。', tag: '词汇' },
    { id: 'h10-3', type: 'choice', q: '"star" 的意思是：', options: ['星星', '太阳', '月亮', '天空'], answer: 0, explain: 'star 星星：Twinkle, twinkle, little star. 一闪一闪小星星。', tag: '词汇' },
    { id: 'h10-4', type: 'choice', q: '"Look at the sky!" 的意思是：', options: ['看天空！', '看黑板！', '看书！', '关门！'], answer: 0, explain: 'sky 天空：Look at the sky! 看天空！look at 表示"看着"。', tag: '句型' },
    { id: 'h10-5', type: 'choice', q: '白天太阳挂天上，说：', options: ['The sun is in the sky.', 'The moon is in the sky. 白天不说月亮', 'The sun is in my room.', 'The sky is in the sun.'], answer: 0, explain: 'The sun is in the sky. 太阳在天空中。白天能看到 sun，晚上能看到 moon 和 star。', tag: '句型' },
    { id: 'h10-6', type: 'judge', q: '"cloud" 的意思是云朵。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'cloud 云：The clouds are white. 云朵白白的。sky 是天空，cloud 是天空中的云。', tag: '词汇' },
    { id: 'h10-7', type: 'choice', q: '"The sun is big and bright." 中 "bright" 的意思是：', options: ['明亮的', '暗的', '冷的', '小的'], answer: 0, explain: 'bright 明亮的：The sun is big and bright. 太阳又大又亮。', tag: '词汇' },
    { id: 'h10-8', type: 'choice', q: '数天上的星星，很多星星用：', options: ['stars（复数）', 'star 不变', 'a star', 'one star'], answer: 0, explain: '很多星星要说 stars，复数加 s：I can see many stars. 我能看到许多星星。', tag: '语法' },
    { id: 'h10-9', type: 'choice', q: '"night" 的反义词是：', options: ['day', 'star', 'moon', 'sun'], answer: 0, explain: 'night 夜晚 ↔ day 白天。At night, we can see the moon and stars. 晚上能看到月亮星星。', tag: '词汇' },
    { id: 'h10-10', type: 'choice', q: '和爸爸妈妈看星星，说：', options: ["Let's watch the stars!", "Let's play football!", 'Let me sleep!', 'Close your eyes!'], answer: 0, explain: "Let's watch the stars! 我们一起看星星吧！watch 表示观看，很有诗意哦。", tag: '口语交际' },
  ],
  h11: [
    { id: 'h11-1', type: 'choice', q: '"tree" 的意思是：', options: ['树', '花', '草', '鸟'], answer: 0, explain: 'tree 树，flower 花，bird 鸟。In the forest, I can see tall trees. 森林里有高高的大树。', tag: '词汇' },
    { id: 'h11-2', type: 'choice', q: '"forest" 的意思是：', options: ['森林', '天空', '街道', '教室'], answer: 0, explain: 'forest 森林：in the forest 在森林里，有大树、小鸟、小动物。', tag: '词汇' },
    { id: 'h11-3', type: 'choice', q: '森林里的小鸟会唱歌，说：', options: ['The birds can sing in the forest.', 'The birds can swim.', 'The tree can sing.', 'The forest can fly.'], answer: 0, explain: 'sing 唱歌：The birds can sing in the forest. 小鸟在森林里唱歌。', tag: '句型' },
    { id: 'h11-4', type: 'choice', q: '"flower" 的意思是：', options: ['花', '树', '叶子', '草'], answer: 0, explain: 'flower 花：The flowers are beautiful. 花儿真美丽。leaf（复数 leaves）是叶子。', tag: '词汇' },
    { id: 'h11-5', type: 'choice', q: '"I can see a bird." 的意思是：', options: ['我能看见一只鸟。', '我会唱歌。', '我是一只鸟。', '看那只鸟！'], answer: 0, explain: 'I can see…… 我能看见……：I can see a bird. 我能看见一只鸟。', tag: '句型' },
    { id: 'h11-6', type: 'judge', q: '森林里要保持干净，"不能乱扔垃圾"是 "Do not litter."', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Do not litter. 不要乱扔垃圾。爱护大自然，森林才会美美的。', tag: '口语交际' },
    { id: 'h11-7', type: 'choice', q: '"grass" 的意思是：', options: ['草', '树', '花', '石头'], answer: 0, explain: 'grass 草：The grass is green. 草是绿色的。不要踩草坪：Do not walk on the grass.', tag: '词汇' },
    { id: 'h11-8', type: 'choice', q: '森林里的树很多很高，"高高的树"说：', options: ['tall trees', 'short trees', 'small trees', 'big trees 侧重大小不是高'], answer: 0, explain: 'tall trees 高高的树，tall 形容树、人的高；short 矮。', tag: '词汇' },
    { id: 'h11-9', type: 'choice', q: '在森林里看到小兔子，用英语数"一只兔子"：', options: ['a rabbit / one rabbit', 'two rabbit', 'rabbits 一只', 'rabbit many'], answer: 0, explain: '一只兔子：a rabbit 或 one rabbit；两只要说 two rabbits，复数加 s。', tag: '语法' },
    { id: 'h11-10', type: 'choice', q: '告诉朋友森林很美丽：', options: ['The forest is beautiful.', 'The forest is ugly.', 'I am beautiful.', 'The sky is forest.'], answer: 0, explain: 'beautiful 美丽的：The forest is beautiful. 森林很美丽。ugly 是它的反义词。', tag: '句型' },
  ],
  h12: [
    { id: 'h12-1', type: 'choice', q: '"bus" 的意思是：', options: ['公共汽车', '小汽车', '出租车', '自行车'], answer: 0, explain: 'bus 公共汽车，car 小汽车，taxi 出租车，bike/bicycle 自行车。', tag: '词汇' },
    { id: 'h12-2', type: 'choice', q: '"taxi" 的意思是：', options: ['出租车', '公交车', '火车', '飞机'], answer: 0, explain: 'taxi 出租车：Take a taxi. 乘出租车。也可以说 cab。', tag: '词汇' },
    { id: 'h12-3', type: 'choice', q: '"car" 的意思是：', options: ['小汽车', '公交车', '自行车', '地铁'], answer: 0, explain: 'car 小汽车：My father drives a car. 我爸爸开小汽车。', tag: '词汇' },
    { id: 'h12-4', type: 'choice', q: '"in the street" 的意思是：', options: ['在街上', '在森林里', '在天上', '在房间里'], answer: 0, explain: 'street 街道：in the street 在街上。I can see many cars in the street. 街上有许多汽车。', tag: '词汇' },
    { id: 'h12-5', type: 'judge', q: '过马路要看红绿灯，"红绿灯"是 "traffic lights"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'traffic lights 红绿灯：Look at the traffic lights. 看红绿灯，红灯停、绿灯行。', tag: '安全知识' },
    { id: 'h12-6', type: 'choice', q: '"bike" 的意思是：', options: ['自行车', '汽车', '出租车', '公交车'], answer: 0, explain: 'bike（bicycle）自行车：I can ride a bike. 我会骑自行车。ride a bike 骑自行车。', tag: '词汇' },
    { id: 'h12-7', type: 'choice', q: '街上有一辆大公交车，说：', options: ['There is a big bus in the street.', 'There is a big bus on the sky.', 'There are a bus.', 'Bus is there the street.'], answer: 0, explain: 'There is a big bus in the street. 街上有一辆大公交车。', tag: '句型' },
    { id: 'h12-8', type: 'choice', q: '乘公交车要说：', options: ['Take the bus.', 'Take the bed.', 'Ride the bus 也不常用', 'Drive the bus（乘客不说）'], answer: 0, explain: 'Take the bus. 乘公交车。drive the bus 是司机开车；乘客坐车用 take。', tag: '口语交际' },
    { id: 'h12-9', type: 'choice', q: '马路上的车很多，"cars" 是：', options: ['car 的复数，许多车', 'car 的过去式', '一种新车', '拼写错误'], answer: 0, explain: 'many cars 许多汽车，复数在词尾加 s。many 后面要接复数名词。', tag: '语法' },
    { id: 'h12-10', type: 'choice', q: '过马路前牵好大人的手，说：', options: ['Hold my hand, please.', 'Run across the road!', 'Play in the street!', 'Close the door, please.'], answer: 0, explain: 'Hold my hand, please. 请牵着我的手。过马路注意安全，不能在街上玩闹。', tag: '安全知识' },
  ],
}
