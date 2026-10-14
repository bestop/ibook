// 外研版新标准英语（一年级起点）二年级上册 随堂知识点题库
// 教材：义务教育教科书 英语（一年级起点）二年级上册 · 外语教学与研究出版社
// 目录（电子课本网 dzkbw.com/books/waiyan/yingyu/yq2s 核对）：
//   M1 I like the ABC song./I like football. · M2 I don't like meat./I don't like ginger.
//   M3 Do you like bananas?/Do they like apples? · M4 Sam likes T-shirts./He doesn't like these trousers.
//   M5 At 7, I get up./I go home at 5. · M6 What do you do on Sundays?/Where do you live?
//   M7 How do you go to school?/I go by train. · M8 She goes swimming./Does he play the piano?
//   M9 It's winter./What does he do in summer? · M10 Happy New Year!/We have Christmas.
// 每模块一关，每关 10 题，共 10 关 100 题，题目 id 前缀 wb

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
    id: 'wb1',
    name: 'Module 1',
    title: 'I like the ABC song.',
    emoji: '🎵',
    color: 'amber',
    lessons: ['I like the ABC song.', 'I like football.', 'Things I like'],
    intro: '唱歌踢球做游戏，用 like 说出我喜欢！',
  },
  {
    id: 'wb2',
    name: 'Module 2',
    title: "I don't like meat.",
    emoji: '🥩',
    color: 'orange',
    lessons: ["I don't like meat.", "I don't like ginger.", 'Food I try'],
    intro: '不喜欢的东西怎么说？don\'t like 来帮忙！',
  },
  {
    id: 'wb3',
    name: 'Module 3',
    title: 'Do you like bananas?',
    emoji: '🍌',
    color: 'rose',
    lessons: ['Do you like bananas?', 'Do they like apples?', 'Asking about likes'],
    intro: '问一问 Do you like...?，了解大家的喜好！',
  },
  {
    id: 'wb4',
    name: 'Module 4',
    title: 'Sam likes T-shirts.',
    emoji: '👕',
    color: 'lime',
    lessons: ['Sam likes T-shirts.', "He doesn't like these trousers.", 'He and she'],
    intro: 'likes 是 like 的三单兄弟，说说他人的喜好！',
  },
  {
    id: 'wb5',
    name: 'Module 5',
    title: 'At 7, I get up.',
    emoji: '⏰',
    color: 'teal',
    lessons: ['At 7, I get up.', 'I go home at 5.', 'My day'],
    intro: '几点起床几点回家，作息规律身体棒！',
  },
  {
    id: 'wb6',
    name: 'Module 6',
    title: 'What do you do on Sundays?',
    emoji: '📅',
    color: 'sky',
    lessons: ['What do you do on Sundays?', 'Where do you live?', 'Weekend fun'],
    intro: '周日做什么？住在哪里？聊聊天吧！',
  },
  {
    id: 'wb7',
    name: 'Module 7',
    title: 'How do you go to school?',
    emoji: '🚌',
    color: 'violet',
    lessons: ['How do you go to school?', 'I go by train.', 'Transportation'],
    intro: '坐车坐船坐火车，出行方式真多样！',
  },
  {
    id: 'wb8',
    name: 'Module 8',
    title: 'She goes swimming.',
    emoji: '🏊',
    color: 'pink',
    lessons: ['She goes swimming.', 'Does he play the piano?', 'Does he/she...?'],
    intro: 'goes、goes，第三人称要加 s！',
  },
  {
    id: 'wb9',
    name: 'Module 9',
    title: "It's winter.",
    emoji: '❄️',
    color: 'indigo',
    lessons: ["It's winter.", 'What does he do in summer?', 'Four seasons'],
    intro: '春夏秋冬四季轮，说说季节真有趣！',
  },
  {
    id: 'wb10',
    name: 'Module 10',
    title: 'Happy New Year!',
    emoji: '🎉',
    color: 'emerald',
    lessons: ['Happy New Year!', 'We have Christmas.', 'Festivals'],
    intro: '新年圣诞节齐欢乐，节日祝福送起来！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  wb1: [
    { id: 'wb1-1', type: 'choice', q: '"I like the ABC song." 的意思是：', options: ['我喜欢字母歌。', '我会唱字母歌。', '请唱字母歌。', '字母歌真好听。'], answer: 0, explain: 'like 喜欢，I like... 我喜欢……，后面接喜欢的东西。', tag: '句型' },
    { id: 'wb1-2', type: 'choice', q: '表达"我喜欢足球"，应该说：', options: ['I like football.', 'I am football.', 'I play like football.', 'Football likes me.'], answer: 0, explain: 'I like football. 我喜欢足球，like 后面直接加喜欢的东西。', tag: '句型' },
    { id: 'wb1-3', type: 'choice', q: '字母歌里一共有多少个英文字母？', options: ['26 个', '24 个', '28 个', '20 个'], answer: 0, explain: '英语字母表有 26 个字母，A 到 Z，快唱一遍吧！', tag: '字母' },
    { id: 'wb1-4', type: 'choice', q: '字母表的顺序，哪一组是对的？', options: ['A B C D', 'A C B D', 'B A D C', 'D C B A'], answer: 0, explain: 'A B C D E F G……按顺序背字母歌就不会错。', tag: '字母' },
    { id: 'wb1-5', type: 'judge', q: '"I like basketball." 意思是"我喜欢篮球"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'basketball 篮球，I like basketball. 我喜欢篮球。', tag: '句型' },
    { id: 'wb1-6', type: 'choice', q: '"like" 的意思是：', options: ['喜欢', '讨厌', '看见', '跑'], answer: 0, explain: 'like 喜欢，don\'t like 不喜欢，意思正好相反。', tag: '单词' },
    { id: 'wb1-7', type: 'choice', q: '想告诉朋友你喜欢唱歌，可以说：', options: ['I like singing.', 'I sing likes.', 'Me sing like.', 'I likes singing.'], answer: 0, explain: 'I like singing. 我喜欢唱歌。说自己用 I like（不加 s）。', tag: '句型' },
    { id: 'wb1-8', type: 'choice', q: '问朋友喜欢什么，可以说：', options: ['What do you like?', 'What is it?', 'How are you?', 'Where is it?'], answer: 0, explain: 'What do you like? 你喜欢什么？', tag: '句型' },
    { id: 'wb1-9', type: 'judge', q: '多唱英文歌能帮助我们记住单词。', options: ['√ 对', '✗ 错'], answer: 0, explain: '英文歌旋律好听又好记，是学英语的好帮手！', tag: '学习方法' },
    { id: 'wb1-10', type: 'choice', q: '"I like football and swimming." 意思是：', options: ['我喜欢足球和游泳。', '我不喜欢足球。', '我在踢足球。', '足球像游泳。'], answer: 0, explain: 'and 连接两个喜欢的东西：足球和游泳。', tag: '句型' },
  ],
  wb2: [
    { id: 'wb2-1', type: 'choice', q: '"I don\'t like meat." 的意思是：', options: ['我不喜欢肉。', '我喜欢肉。', '我没有肉。', '请吃肉。'], answer: 0, explain: "don't = do not，I don't like... 我不喜欢……。", tag: '句型' },
    { id: 'wb2-2', type: 'choice', q: '"不喜欢姜"用英语说：', options: ["I don't like ginger.", 'I like ginger.', "I don't ginger.", 'Ginger likes me.'], answer: 0, explain: "ginger 姜，I don't like ginger. 我不喜欢姜。", tag: '句型' },
    { id: 'wb2-3', type: 'choice', q: '"meat" 指的是：', options: ['肉', '米饭', '水果', '牛奶'], answer: 0, explain: 'meat 肉类，rice 米饭，milk 牛奶，食物单词多积累。', tag: '食物' },
    { id: 'wb2-4', type: 'choice', q: '"I like noodles." 的否定句是：', options: ["I don't like noodles.", 'I not like noodles.', 'I like no noodles.', 'I am not noodles.'], answer: 0, explain: '否定要加 don\'t：I don\'t like noodles. 我不喜欢面条。', tag: '语法' },
    { id: 'wb2-5', type: 'judge', q: '"I don\'t like bananas." 意思是"我喜欢香蕉"。', options: ['√ 对', '✗ 错'], answer: 1, explain: "don't like 是“不喜欢”：I don't like bananas. 我不喜欢香蕉。", tag: '句型' },
    { id: 'wb2-6', type: 'choice', q: '不喜欢某样食物时，礼貌的做法是：', options: ['说 "I don\'t like it, thanks." 并尝一小口', '把它扔到地上', '大声喊叫', '偷偷给别人'], answer: 0, explain: '不喜欢也要有礼貌地表达，可以试着尝一小口，说不定会爱上它！', tag: '习惯养成' },
    { id: 'wb2-7', type: 'choice', q: '"rice" 指的是：', options: ['米饭', '面条', '面包', '鸡蛋'], answer: 0, explain: 'rice 米饭，noodles 面条，bread 面包，eggs 鸡蛋。', tag: '食物' },
    { id: 'wb2-8', type: 'choice', q: '问朋友"你喜欢香蕉吗"，可以说：', options: ['Do you like bananas?', 'Are you bananas?', 'What is bananas?', 'Where are bananas?'], answer: 0, explain: 'Do you like...? 你喜欢……吗？是最常用的问法。', tag: '句型' },
    { id: 'wb2-9', type: 'judge', q: '每种食物都有营养，不挑食才能长得高。', options: ['√ 对', '✗ 错'], answer: 0, explain: '蔬菜水果肉蛋奶都要吃，营养全面身体棒！', tag: '习惯养成' },
    { id: 'wb2-10', type: 'choice', q: '"I don\'t like ginger." 的肯定说法是：', options: ['I like ginger.', "I don't ginger.", 'I am like ginger.', 'I liked ginger.'], answer: 0, explain: "去掉 don't 就是肯定句：I like ginger. 我喜欢姜。", tag: '语法' },
  ],
  wb3: [
    { id: 'wb3-1', type: 'choice', q: '"Do you like bananas?" 的意思是：', options: ['你喜欢香蕉吗？', '这是香蕉吗？', '香蕉在哪里？', '给我香蕉。'], answer: 0, explain: 'Do you like...? 你喜欢……吗？回答 Yes, I do. / No, I don\'t.。', tag: '句型' },
    { id: 'wb3-2', type: 'choice', q: '"Do you like apples?" 的肯定回答是：', options: ['Yes, I do.', "Yes, I don't.", 'Yes, I like.', 'No, I do.'], answer: 0, explain: 'Do 开头的一般疑问句，肯定回答 Yes, I do.。', tag: '语法' },
    { id: 'wb3-3', type: 'choice', q: '"Do they like apples?" 的否定回答是：', options: ["No, they don't.", 'No, they do.', "No, they aren't.", 'Yes, they don\'t.'], answer: 0, explain: "主语是 they，否定回答 No, they don't.。", tag: '语法' },
    { id: 'wb3-4', type: 'choice', q: '"banana" 指的是：', options: ['香蕉', '苹果', '橘子', '葡萄'], answer: 0, explain: 'banana 香蕉，apple 苹果，orange 橘子，grape 葡萄。', tag: '水果' },
    { id: 'wb3-5', type: 'judge', q: '问 "Do you like fish?"，回答 "Yes, I do." 表示"是的，我喜欢"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Do you...? 的回答用 do 呼应：Yes, I do.。', tag: '语法' },
    { id: 'wb3-6', type: 'choice', q: '"apple" 指的是：', options: ['苹果', '香蕉', '梨', '桃子'], answer: 0, explain: 'apple 苹果，An apple a day keeps the doctor away. 一天一苹果，医生远离我。', tag: '水果' },
    { id: 'wb3-7', type: 'choice', q: '想问同学他们（they）喜不喜欢橘子，应该说：', options: ['Do they like oranges?', 'Does they like oranges?', 'Do they likes oranges?', 'Are they like oranges?'], answer: 0, explain: 'they 配 do：Do they like...? 他们喜欢……吗？', tag: '语法' },
    { id: 'wb3-8', type: 'choice', q: '"Yes, I do." 中 "do" 的意思是：', options: ['帮助回答的助动词，不单独翻译', '做作业', '去', '吃'], answer: 0, explain: '这里的 do 不用翻译出来，它帮我们回答 Do you...? 的问题。', tag: '语法' },
    { id: 'wb3-9', type: 'judge', q: '问别人喜好时，语气要友好，别人不喜欢也不要笑话他。', options: ['√ 对', '✗ 错'], answer: 0, explain: '每个人的喜好不同，尊重别人是好朋友的第一步！', tag: '习惯养成' },
    { id: 'wb3-10', type: 'choice', q: '"Do you like milk?" 你喜欢牛奶，应该回答：', options: ['Yes, I do. I like milk.', "No, I don't.", 'Yes, I don\'t.', 'It is milk.'], answer: 0, explain: '喜欢就回答 Yes, I do.，还可以补充 I like milk.。', tag: '句型' },
  ],
  wb4: [
    { id: 'wb4-1', type: 'choice', q: '"Sam likes T-shirts." 的意思是：', options: ['萨姆喜欢 T 恤。', '萨姆不喜欢 T 恤。', '萨姆买 T 恤。', '萨姆有一件 T 恤。'], answer: 0, explain: 'Sam 是第三人称单数，like 要加 s 变 likes。', tag: '语法' },
    { id: 'wb4-2', type: 'choice', q: '什么情况下 like 要变成 likes？', options: ['主语是 he、she 或一个人名时', '主语是 I 时', '主语是 you 时', '主语是 they 时'], answer: 0, explain: '三单主语（he/she/人名）后面动词加 s：He likes...。', tag: '语法' },
    { id: 'wb4-3', type: 'choice', q: '"He doesn\'t like these trousers." 的意思是：', options: ['他不喜欢这条裤子。', '他喜欢这条裤子。', '他没穿裤子。', '这是他的裤子。'], answer: 0, explain: "doesn't = does not，三单否定用 doesn't like。", tag: '语法' },
    { id: 'wb4-4', type: 'choice', q: '"trousers" 指的是：', options: ['裤子', '上衣', '裙子', '鞋子'], answer: 0, explain: 'trousers 裤子（常用复数），T-shirt T 恤衫，dress 连衣裙。', tag: '服装' },
    { id: 'wb4-5', type: 'judge', q: '"She likes cats." 中 likes 加了 s，因为主语 she 是三单。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'she 他（女）、he 他（男）、人名 Sam 都是三单，动词要加 s。', tag: '语法' },
    { id: 'wb4-6', type: 'choice', q: '"She" 指的是：', options: ['她', '他', '它', '他们'], answer: 0, explain: 'she 她，he 他，it 它，指女生用 she。', tag: '代词' },
    { id: 'wb4-7', type: 'choice', q: '说"爸爸喜欢游泳"，应该说：', options: ['Dad likes swimming.', 'Dad like swimming.', 'Dad liking swimming.', 'Dad don\'t like swimming.'], answer: 0, explain: 'Dad 是三单，like 加 s：Dad likes swimming.。', tag: '语法' },
    { id: 'wb4-8', type: 'choice', q: '"He doesn\'t like..." 中 doesn\'t 后面的动词：', options: ['用原形 like', '用 likes', '用 liking', '用 liked'], answer: 0, explain: "doesn't 已经带上 s 了，后面动词用原形：doesn't like。", tag: '语法' },
    { id: 'wb4-9', type: 'judge', q: '"Amy likes rice." 意思是"艾米喜欢米饭"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Amy 是人名（三单），likes rice 喜欢米饭。', tag: '句型' },
    { id: 'wb4-10', type: 'choice', q: '"I like T-shirts." 变成三单（He）：', options: ['He likes T-shirts.', 'He like T-shirts.', 'He is like T-shirts.', 'He liking T-shirts.'], answer: 0, explain: 'I 变 He，like 变 likes：He likes T-shirts.。', tag: '语法' },
  ],
  wb5: [
    { id: 'wb5-1', type: 'choice', q: '"At 7, I get up." 的意思是：', options: ['我七点起床。', '我七点睡觉。', '我有七个。', '我在七班。'], answer: 0, explain: 'get up 起床，At 7 在七点，At + 时间表示"在几点"。', tag: '句型' },
    { id: 'wb5-2', type: 'choice', q: '"get up" 的意思是：', options: ['起床', '睡觉', '回家', '上学'], answer: 0, explain: 'get up 起床，go to bed 上床睡觉，一对好反义。', tag: '短语' },
    { id: 'wb5-3', type: 'choice', q: '"I go home at 5." 中 "go home" 的意思是：', options: ['回家', '出门', '去学校', '去公园'], answer: 0, explain: 'go home 回家，home 前不加 to 哦。', tag: '短语' },
    { id: 'wb5-4', type: 'choice', q: '"在八点"用英语说：', options: ['at 8', 'on 8', 'in 8', 'to 8'], answer: 0, explain: '在具体几点用 at：at 8 在八点。', tag: '语法' },
    { id: 'wb5-5', type: 'judge', q: '"I go to school at 8." 意思是"我八点上学"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'go to school 上学，at 8 在八点，合起来就是八点上学。', tag: '句型' },
    { id: 'wb5-6', type: 'choice', q: '晚上九点上床睡觉，应该说：', options: ['I go to bed at 9.', 'I get up at 9.', 'I go home at 9.', 'I at bed 9.'], answer: 0, explain: 'go to bed 上床睡觉，早睡早起身体好！', tag: '短语' },
    { id: 'wb5-7', type: 'choice', q: '"have lunch" 的意思是：', options: ['吃午饭', '做午饭', '买午饭', '带午饭'], answer: 0, explain: 'have lunch 吃午饭，have breakfast 吃早饭，have dinner 吃晚饭。', tag: '短语' },
    { id: 'wb5-8', type: 'choice', q: '"At 7, I get up." 的语序还可以说成：', options: ['I get up at 7.', 'I at 7 get up.', 'Get I up at 7.', 'At I get up 7.'], answer: 0, explain: '两种说法都对：At 7, I get up. = I get up at 7.。', tag: '句型' },
    { id: 'wb5-9', type: 'judge', q: '按时起床、按时睡觉，作息规律有益健康。', options: ['√ 对', '✗ 错'], answer: 0, explain: '早睡早起精神好，规律作息是好习惯！', tag: '习惯养成' },
    { id: 'wb5-10', type: 'choice', q: '"上午 7 点"和"晚上 7 点"可以分别说：', options: ['7 in the morning；7 in the evening', '7 at night；7 at morning', '7 on Monday；7 on Sunday', '都只能说 7'], answer: 0, explain: 'morning 早上，evening 晚上：in the morning / in the evening。', tag: '时间' },
  ],
  wb6: [
    { id: 'wb6-1', type: 'choice', q: '"What do you do on Sundays?" 的意思是：', options: ['你周日做什么？', '你几点起床？', '你喜欢周日吗？', '今天是周日吗？'], answer: 0, explain: 'on Sundays 在周日，What do you do...? 你做什么？', tag: '句型' },
    { id: 'wb6-2', type: 'choice', q: '"Where do you live?" 的意思是：', options: ['你住在哪里？', '你是谁？', '你去哪里？', '你喜欢什么？'], answer: 0, explain: 'live 居住，Where do you live? 你住在哪里？', tag: '句型' },
    { id: 'wb6-3', type: 'choice', q: '"I live in Beijing." 的意思是：', options: ['我住在北京。', '我去北京。', '我来自北京。', '我在北京玩。'], answer: 0, explain: 'live in + 地点，住在某地。', tag: '句型' },
    { id: 'wb6-4', type: 'choice', q: '"Sunday" 指的是：', options: ['星期日', '星期一', '周六', '周末'], answer: 0, explain: 'Sunday 星期日，Monday 星期一，Saturday 星期六。', tag: '时间' },
    { id: 'wb6-5', type: 'judge', q: '在星期几前面用 on，如 on Sundays。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'on + 星期：on Sundays 在周日；at + 点钟：at 7。', tag: '语法' },
    { id: 'wb6-6', type: 'choice', q: '"我周日看书"应该说：', options: ['I read books on Sundays.', 'I read books at Sundays.', 'I on Sundays read books.', 'I reads books on Sundays.'], answer: 0, explain: 'on Sundays 在周日，read books 看书。', tag: '句型' },
    { id: 'wb6-7', type: 'choice', q: '回答 "What do you do on Sundays?" 可以说：', options: ['I play football.', "I'm fine.", 'It is Sunday.', 'I live in London.'], answer: 0, explain: '问做什么就答活动：I play football. 我踢足球。', tag: '句型' },
    { id: 'wb6-8', type: 'choice', q: '"Where do you live?" 的回答是：', options: ['I live in Shanghai.', 'I like Shanghai.', 'I go to Shanghai.', "I'm fine."], answer: 0, explain: '问住哪里就答 I live in + 城市。', tag: '句型' },
    { id: 'wb6-9', type: 'judge', q: 'Sunday 是一周的第一天，在很多西方国家一周从周日开始。', options: ['√ 对', '✗ 错'], answer: 0, explain: '英美习惯把 Sunday 算一周第一天，Saturday 是最后一天。', tag: '文化' },
    { id: 'wb6-10', type: 'choice', q: '"watch TV" 的意思是：', options: ['看电视', '读书', '唱歌', '画画'], answer: 0, explain: 'watch TV 看电视，I watch TV on Sundays. 我周日看电视。', tag: '短语' },
  ],
  wb7: [
    { id: 'wb7-1', type: 'choice', q: '"How do you go to school?" 的意思是：', options: ['你怎么去上学？', '你在哪里上学？', '你几点上学？', '你喜欢上学吗？'], answer: 0, explain: 'How 询问方式：怎么去？回答用 by + 交通工具。', tag: '句型' },
    { id: 'wb7-2', type: 'choice', q: '"I go by train." 的意思是：', options: ['我坐火车去。', '我跑步去。', '我坐飞机去。', '我在火车上。'], answer: 0, explain: 'by train 坐火车，by + 交通工具表示出行方式。', tag: '句型' },
    { id: 'wb7-3', type: 'choice', q: '"坐公交车去"应该说：', options: ['go by bus', 'go on bus', 'go bus', 'by go bus'], answer: 0, explain: 'by bus 坐公交车，by car 坐小汽车，by bike 骑自行车。', tag: '短语' },
    { id: 'wb7-4', type: 'choice', q: '"train" 指的是：', options: ['火车', '飞机', '轮船', '自行车'], answer: 0, explain: 'train 火车，plane 飞机，ship 轮船，bike 自行车。', tag: '交通工具' },
    { id: 'wb7-5', type: 'judge', q: '"How do you go to school?" 可以回答 "I go by bus."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '问怎么去就答出行方式：I go by bus. 我坐公交去。', tag: '句型' },
    { id: 'wb7-6', type: 'choice', q: '"plane" 指的是：', options: ['飞机', '火车', '地铁', '轮船'], answer: 0, explain: 'plane 飞机，go by plane 坐飞机去。', tag: '交通工具' },
    { id: 'wb7-7', type: 'choice', q: '"步行去学校"应该说：', options: ['I walk to school.', 'I go by walk.', 'I walk by school.', 'I to school walk.'], answer: 0, explain: 'walk to school 走路上学，也可以说 I go on foot.。', tag: '句型' },
    { id: 'wb7-8', type: 'choice', q: '"bike" 指的是：', options: ['自行车', '公共汽车', '出租车', '地铁'], answer: 0, explain: 'bike 自行车，by bike 骑自行车。', tag: '交通工具' },
    { id: 'wb7-9', type: 'judge', q: '坐车时要系好安全带或坐稳扶好，不能把头手伸出窗外。', options: ['√ 对', '✗ 错'], answer: 0, explain: '交通安全记心中：坐稳扶好，不把头手伸出窗外！', tag: '安全教育' },
    { id: 'wb7-10', type: 'choice', q: '"How does your dad go to work?" 的回答：', options: ['He goes by car.', 'He like by car.', 'He go by car.', 'He is by car.'], answer: 0, explain: 'he 是三单：goes by car 他开车去。', tag: '语法' },
  ],
  wb8: [
    { id: 'wb8-1', type: 'choice', q: '"She goes swimming." 中 "goes" 的意思是：', options: ['go 的三单形式', 'go 的过去式', 'go 的复数', 'go 的否定'], answer: 0, explain: 'she 是三单，go 变 goes（go 加 es）。', tag: '语法' },
    { id: 'wb8-2', type: 'choice', q: '"She goes swimming." 的意思是：', options: ['她去游泳。', '她喜欢游泳。', '她会游泳。', '她在水池边。'], answer: 0, explain: 'go swimming 去游泳，三单 goes swimming 去游泳。', tag: '句型' },
    { id: 'wb8-3', type: 'choice', q: '"Does he play the piano?" 的肯定回答是：', options: ['Yes, he does.', 'Yes, he do.', 'Yes, he plays.', 'Yes, he is.'], answer: 0, explain: 'Does 开头的问句，肯定回答 Yes, he does.。', tag: '语法' },
    { id: 'wb8-4', type: 'choice', q: '"Does he play the piano?" 的否定回答是：', options: ["No, he doesn't.", "No, he doesn't play.", 'No, he does.', 'No, he isn\'t.'], answer: 0, explain: "Does 问句否定回答：No, he doesn't.。", tag: '语法' },
    { id: 'wb8-5', type: 'judge', q: '主语是 she 或 he 时，动词 like 要加 s 变 likes。', options: ['√ 对', '✗ 错'], answer: 0, explain: '三单主语后面的动词加 s：She likes... / He likes...。', tag: '语法' },
    { id: 'wb8-6', type: 'choice', q: '"piano" 指的是：', options: ['钢琴', '足球', '钢琴曲', '音乐会'], answer: 0, explain: 'piano 钢琴，play the piano 弹钢琴，乐器前要加 the。', tag: '单词' },
    { id: 'wb8-7', type: 'choice', q: '"他打篮球"应该说：', options: ['He plays basketball.', 'He play basketball.', 'He playing basketball.', 'He is play basketball.'], answer: 0, explain: 'he 三单：plays basketball 打篮球（球类前不加 the）。', tag: '语法' },
    { id: 'wb8-8', type: 'choice', q: '"She goes swimming on Sundays." 的意思是：', options: ['她周日去游泳。', '她周日喜欢游泳。', '她会游泳。', '她周日学游泳。'], answer: 0, explain: 'on Sundays 每周日，goes swimming 去游泳。', tag: '句型' },
    { id: 'wb8-9', type: 'judge', q: '"Does she like rice?" 中 Does 后面的 like 用原形，不加 s。', options: ['√ 对', '✗ 错'], answer: 0, explain: "Does 已经是三单形式了，后面动词用原形：Does she like...?。", tag: '语法' },
    { id: 'wb8-10', type: 'choice', q: '"go swimming"、"play football"、"watch TV" 分别是：', options: ['去游泳；踢足球；看电视', '游泳；篮球；看书', '游泳；足球；唱歌', '跳水；踢球；看电视'], answer: 0, explain: 'go swimming 去游泳，play football 踢足球，watch TV 看电视。', tag: '短语' },
  ],
  wb9: [
    { id: 'wb9-1', type: 'choice', q: '"It\'s winter." 的意思是：', options: ['现在是冬天。', '现在是夏天。', '天气很冷吗？', '我喜欢冬天。'], answer: 0, explain: 'winter 冬天，It\'s winter. 现在是冬天。', tag: '季节' },
    { id: 'wb9-2', type: 'choice', q: '一年四季的英文是：', options: ['spring, summer, autumn, winter', 'spring, autumn, summer, winter', 'summer, spring, winter, autumn', 'winter, spring, summer, autumn'], answer: 0, explain: 'spring 春，summer 夏，autumn 秋，winter 冬。', tag: '季节' },
    { id: 'wb9-3', type: 'choice', q: '"summer" 指的是：', options: ['夏天', '春天', '秋天', '冬天'], answer: 0, explain: 'summer 夏天，天热可以吃西瓜、游泳。', tag: '季节' },
    { id: 'wb9-4', type: 'choice', q: '"What does he do in summer?" 的意思是：', options: ['他夏天做什么？', '他喜欢夏天吗？', '夏天热吗？', '他在哪过夏天？'], answer: 0, explain: 'What does he do...? 他做什么？does 因为 he 是三单。', tag: '句型' },
    { id: 'wb9-5', type: 'judge', q: '"It\'s spring." 意思是"现在是春天"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'spring 春天，花儿开了，It\'s spring.。', tag: '季节' },
    { id: 'wb9-6', type: 'choice', q: '冬天下雪很冷，"冷"是：', options: ['cold', 'hot', 'warm', 'cool'], answer: 0, explain: 'cold 冷的，hot 热的，warm 暖和的，cool 凉爽的。', tag: '天气' },
    { id: 'wb9-7', type: 'choice', q: '夏天很热，"热"是：', options: ['hot', 'cold', 'cool', 'windy'], answer: 0, explain: 'hot 热的，It\'s hot in summer. 夏天很热。', tag: '天气' },
    { id: 'wb9-8', type: 'choice', q: '"He swims in summer." 中 swims 说明：', options: ['他在夏天游泳（习惯）', '他正在游泳', '他会游泳', '他想游泳'], answer: 0, explain: '一般现在时 swims 表示经常性的习惯动作。', tag: '语法' },
    { id: 'wb9-9', type: 'judge', q: '秋天树叶变黄落下，autumn 也可以说 fall（美式）。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'autumn 是英式说法，美国人常说 fall。', tag: '文化' },
    { id: 'wb9-10', type: 'choice', q: '"What does he do in summer?" 的回答：', options: ['He goes swimming.', 'He is fine.', 'It is hot.', 'He likes summer.'], answer: 0, explain: '问做什么答活动：He goes swimming. 他去游泳。', tag: '句型' },
  ],
  wb10: [
    { id: 'wb10-1', type: 'choice', q: '"Happy New Year!" 的意思是：', options: ['新年快乐！', '生日快乐！', '圣诞节快乐！', '新年礼物！'], answer: 0, explain: 'Happy New Year! 新年快乐！过年时的祝福语。', tag: '节日' },
    { id: 'wb10-2', type: 'choice', q: '"Merry Christmas!" 的意思是：', options: ['圣诞快乐！', '新年快乐！', '生日快乐！', '节日礼物！'], answer: 0, explain: 'Merry Christmas! 圣诞快乐！圣诞节的祝福语。', tag: '节日' },
    { id: 'wb10-3', type: 'choice', q: '"We have Christmas." 的意思是：', options: ['我们过圣诞节。', '我们有圣诞老人。', '我们喜欢冬天。', '我们去送礼物。'], answer: 0, explain: 'have 这里表示"过（节日）"，We have Christmas. 我们过圣诞节。', tag: '句型' },
    { id: 'wb10-4', type: 'choice', q: '圣诞节是几月几日？', options: ['12 月 25 日', '1 月 1 日', '10 月 31 日', '6 月 1 日'], answer: 0, explain: 'Christmas 圣诞节在 12 月 25 日；1 月 1 日是新年。', tag: '文化' },
    { id: 'wb10-5', type: 'judge', q: '春节是中国的传统节日，英文常说 Chinese New Year 或 Spring Festival。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Spring Festival 春节，是中国最重要的传统节日。', tag: '文化' },
    { id: 'wb10-6', type: 'choice', q: '别人对你说 "Happy New Year!"，你应该说：', options: ['Happy New Year! / Thank you!', 'Goodbye!', "I'm fine.", 'Sorry!'], answer: 0, explain: '回以同样的祝福 Happy New Year!，或说 Thank you!。', tag: '祝福语' },
    { id: 'wb10-7', type: 'choice', q: '"present"（gift）指的是：', options: ['礼物', '聚会', '贺卡', '蛋糕'], answer: 0, explain: 'present 礼物，Thank you for your present. 谢谢你的礼物。', tag: '单词' },
    { id: 'wb10-8', type: 'choice', q: '"party" 指的是：', options: ['聚会', '糖果', '灯笼', '饺子'], answer: 0, explain: 'party 聚会，have a party 举办聚会。', tag: '单词' },
    { id: 'wb10-9', type: 'judge', q: '过年收到红包要双手接并说谢谢。', options: ['√ 对', '✗ 错'], answer: 0, explain: '双手接红包说"谢谢"，中英文里礼貌都一样重要！', tag: '习惯养成' },
    { id: 'wb10-10', type: 'choice', q: '"At Christmas, we sing songs." 的意思是：', options: ['圣诞节时我们唱歌。', '我们唱圣诞歌。', '我们去过圣诞节。', '圣诞老人在唱歌。'], answer: 0, explain: 'at Christmas 在圣诞节，sing songs 唱歌。', tag: '句型' },
  ],
}
