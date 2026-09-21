// 人教版PEP英语 五年级下册（三年级起点·六三制 现行版·人民教育出版社）随堂知识点题库
// 教材：义务教育教科书 英语（PEP）五年级下册（现行版，新版五下尚未出版）· 人民教育出版社
// 目录（电子课本网 dzkbw peps5x 权威核对）：
//   Unit 1 My day / Unit 2 My favourite season / Unit 3 My school calendar
//   Unit 4 When is the art show? / Unit 5 Whose dog is it? / Unit 6 Work quietly!
//   Recycle 1 / Recycle 2（合并为一关综合复习）
// 每单元一关，每关 10 题，共 7 关 70 题，题目 id 前缀 zte

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
    id: 'zte1',
    name: 'Unit 1',
    title: 'My day',
    emoji: '🕗',
    color: 'lime',
    lessons: ['My day', 'My daily routine', 'A busy but fun day'],
    intro: '几点起床几点锻炼，说说自己的一天，作息棒棒！',
  },
  {
    id: 'zte2',
    name: 'Unit 2',
    title: 'My favourite season',
    emoji: '🍂',
    color: 'amber',
    lessons: ['My favourite season', 'Spring, summer, autumn, winter', 'Seasons and fun'],
    intro: '春夏秋冬各有妙，说说你最爱的季节！',
  },
  {
    id: 'zte3',
    name: 'Unit 3',
    title: 'My school calendar',
    emoji: '📅',
    color: 'teal',
    lessons: ['My school calendar', 'Months of the year', 'School events'],
    intro: '开学日、运动会、秋游日，校园日历记心间！',
  },
  {
    id: 'zte4',
    name: 'Unit 4',
    title: 'When is the art show?',
    emoji: '🎨',
    color: 'rose',
    lessons: ['When is the art show?', 'Dates and ordinal numbers', 'Special days'],
    intro: '几月几日美术展？日期序数来报到！',
  },
  {
    id: 'zte5',
    name: 'Unit 5',
    title: 'Whose dog is it?',
    emoji: '🐕',
    color: 'cyan',
    lessons: ['Whose dog is it?', 'Mine, yours, his, hers', 'Playing with pets'],
    intro: '这只小狗是谁的？名词所有格来帮忙！',
  },
  {
    id: 'zte6',
    name: 'Unit 6',
    title: 'Work quietly!',
    emoji: '🤫',
    color: 'indigo',
    lessons: ['Work quietly!', 'Classroom signs', 'Polite behaviour'],
    intro: '轻声工作不喧哗，文明标识处处见！',
  },
  {
    id: 'zter',
    name: 'Recycle',
    title: '快乐复习站',
    emoji: '🌟',
    color: 'pink',
    lessons: ['Recycle 1', 'Recycle 2', '综合复习'],
    intro: '把五下的单词句型串一串，快乐大复习！',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  zte1: [
    { id: 'zte1-1', type: 'choice', q: '"My day" 的意思是：', options: ['我的一天', '我的家', '我的朋友', '我的学校'], answer: 0, explain: 'day 一天，My day 我的一天，说说每天的作息安排。', tag: '短语理解' },
    { id: 'zte1-2', type: 'choice', q: '"When do you get up?" 的意思是：', options: ['你几点起床？', '你怎么起床？', '你在哪里起床？', '你为什么起床？'], answer: 0, explain: 'When do you...? 你几点……？问时间用 when。', tag: '句型' },
    { id: 'zte1-3', type: 'choice', q: '"我通常六点半起床"是：', options: ['I usually get up at 6:30.', 'I usually go to bed at 6:30.', 'I get up usually at school.', 'I am getting up 6:30.'], answer: 0, explain: 'usually 通常，频率副词放动词前；get up at + 时间点。', tag: '句型' },
    { id: 'zte1-4', type: 'choice', q: '中午 12 点吃午饭，"吃午饭"是：', options: ['eat lunch / have lunch', 'eat breakfast', 'eat dinner', 'eat snacks'], answer: 0, explain: 'breakfast 早饭、lunch 午饭、dinner 晚饭，三餐要分清。', tag: '词汇' },
    { id: 'zte1-5', type: 'judge', q: '"do morning exercises" 的意思是"做早操"。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'morning exercises 早操，do morning exercises 做早操，锻炼身体好。', tag: '动词短语' },
    { id: 'zte1-6', type: 'choice', q: '下午 4 点放学后先做作业，"然后"六点吃晚饭，"然后"用：', options: ['then', 'when', 'what', 'who'], answer: 0, explain: 'then 然后，表示先后顺序：First..., then...。', tag: '连接词' },
    { id: 'zte1-7', type: 'choice', q: '"in the afternoon" 的意思是：', options: ['在下午', '在上午', '在晚上', '在中午'], answer: 0, explain: 'morning 上午、afternoon 下午、evening 晚上，时间段要分清。', tag: '时间表达' },
    { id: 'zte1-8', type: 'judge', q: '每天按时睡觉、按时起床，作息有规律。', options: ['√ 对', '✗ 错'], answer: 0, explain: '作息规律 keep a regular schedule，身体学习都受益！', tag: '作息习惯' },
    { id: 'zte1-9', type: 'choice', q: '"play sports" 的意思是：', options: ['进行体育运动', '玩游戏机', '做游戏', '听音乐'], answer: 0, explain: 'play sports 做运动，每天运动一小时，健康生活一辈子！', tag: '动词短语' },
    { id: 'zte1-10', type: 'choice', q: '介绍自己忙碌又快乐的一天，最好的顺序是：', options: ['按时间先后说清楚', '想到哪说到哪', '只说吃饭', '什么都不说'], answer: 0, explain: '按时间线 in order 介绍一天，条理清楚别人听得明白！', tag: '表达方法' },
  ],
  zte2: [
    { id: 'zte2-1', type: 'choice', q: '"My favourite season" 的意思是：', options: ['我最喜欢的季节', '我的假期', '我的同学', '我的教室'], answer: 0, explain: 'favourite 最喜爱的，season 季节，一年有四个季节。', tag: '短语理解' },
    { id: 'zte2-2', type: 'choice', q: '"春天"的英语是：', options: ['spring', 'summer', 'autumn', 'winter'], answer: 0, explain: 'spring 春天，Spring is warm. 春天暖洋洋，花儿开满园。', tag: '季节词汇' },
    { id: 'zte2-3', type: 'choice', q: '白雪飘飘的季节是：', options: ['winter 冬天', 'spring 春天', 'summer 夏天', 'autumn 秋天'], answer: 0, explain: 'winter 冬天，It snows in winter. 冬天下雪，可以堆雪人。', tag: '季节词汇' },
    { id: 'zte2-4', type: 'choice', q: '"Which season do you like best?" 的意思是：', options: ['你最喜欢哪个季节？', '今天是哪个季节？', '季节一共有几个？', '你喜欢雪吗？'], answer: 0, explain: 'Which...best? 最喜欢哪个？回答：I like summer best.。', tag: '句型' },
    { id: 'zte2-5', type: 'choice', q: '夏天 hot 又 sunny，最适合的活动是：', options: ['swim in the sea 去海边游泳', 'make a snowman 堆雪人', 'plant trees 种树赏花', 'pick apples 摘苹果'], answer: 0, explain: '夏天游泳；堆雪人是冬天，种树在春天，摘苹果在秋天。', tag: '季节活动' },
    { id: 'zte2-6', type: 'judge', q: '秋天的叶子是金色的，秋天可以放风筝、摘苹果。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'autumn 秋天，leaves turn golden 树叶变金，秋高气爽好时节！', tag: '季节常识' },
    { id: 'zte2-7', type: 'choice', q: '"Why do you like spring?" 的意思是：', options: ['你为什么喜欢春天？', '春天什么时候来？', '春天有多长？', '春天在哪里？'], answer: 0, explain: 'Why...? 为什么？回答用 Because...：Because it\'s warm.。', tag: '句型' },
    { id: 'zte2-8', type: 'choice', q: '回答"喜欢冬天的原因"，用哪个词开头？', options: ['Because 因为', 'But 但是', 'So 所以', 'Or 或者'], answer: 0, explain: 'Because 引出原因：Because I can play with snow.。', tag: '连接词' },
    { id: 'zte2-9', type: 'judge', q: '中国大部分地区的夏天是炎热多雨的。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Summer is hot and rainy. 夏天炎热多雨，记得带伞防晒！', tag: '季节常识' },
    { id: 'zte2-10', type: 'choice', q: '四个季节的正确排序是：', options: ['spring → summer → autumn → winter', 'summer → spring → winter → autumn', 'winter → spring → autumn → summer', 'autumn → winter → spring → summer'], answer: 0, explain: '春夏秋冬依次是 spring, summer, autumn, winter。', tag: '季节词汇' },
  ],
  zte3: [
    { id: 'zte3-1', type: 'choice', q: '"school calendar" 的意思是：', options: ['学校日历/校历', '数学日历', '家庭相册', '课程大纲'], answer: 0, explain: 'calendar 日历，school calendar 校历，上面的校园活动要看清！', tag: '短语理解' },
    { id: 'zte3-2', type: 'choice', q: '"一月"的英语是：', options: ['January', 'June', 'July', 'February'], answer: 0, explain: 'January 一月，月份首字母要大写哦！', tag: '月份词汇' },
    { id: 'zte3-3', type: 'choice', q: '教师节在九月，"九月"是：', options: ['September', 'December', 'November', 'October'], answer: 0, explain: 'September 九月，Teachers\' Day is in September.。', tag: '月份词汇' },
    { id: 'zte3-4', type: 'choice', q: '"运动会"的英语是：', options: ['sports meet', 'art show', 'reading week', 'school trip'], answer: 0, explain: 'sports meet 运动会，art show 美术展，school trip 校外研学。', tag: '校园活动' },
    { id: 'zte3-5', type: 'judge', q: '"When is the sports meet?" 是在问运动会的时间。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'When is...? 询问时间：It\'s in October. 在十月。', tag: '句型' },
    { id: 'zte3-6', type: 'choice', q: '介绍月份时正确的说法是：', options: ['The sports meet is in April.', 'The sports meet is at April.', 'The sports meet is on April.', 'The sports meet is April in.'], answer: 0, explain: '月份前用介词 in：in April 在四月。', tag: '介词' },
    { id: 'zte3-7', type: 'choice', q: '"校历上画着蛋糕"最可能是：', options: ['birthday party 生日会', 'maths test 数学考试', 'cleaning day 大扫除', 'parents\' meeting 家长会'], answer: 0, explain: 'cake 蛋糕代表 birthday party，看日历图标猜活动！', tag: '生活常识' },
    { id: 'zte3-8', type: 'judge', q: '一年有十二个月，December 是最后一个月。', options: ['√ 对', '✗ 错'], answer: 0, explain: '一年 12 个月，December 十二月，新年在向我们招手！', tag: '月份词汇' },
    { id: 'zte3-9', type: 'choice', q: '把重要活动记在校历上，好处是：', options: ['提前准备不慌张', '让日历变漂亮', '可以多吃零食', '不用上学'], answer: 0, explain: '记下 dates 日期，提前准备，做时间的小主人！', tag: '时间管理' },
    { id: 'zte3-10', type: 'choice', q: '"五月"的英语是：', options: ['May', 'March', 'April', 'June'], answer: 0, explain: 'May 五月，March 三月，April 四月，按顺序记牢！', tag: '月份词汇' },
  ],
  zte4: [
    { id: 'zte4-1', type: 'choice', q: '"When is the art show?" 的意思是：', options: ['美术展是什么时候？', '美术展在哪里？', '美术展好玩吗？', '谁办美术展？'], answer: 0, explain: 'art show 美术展，When is...? 问日期：It\'s on May 1st.。', tag: '句型' },
    { id: 'zte4-2', type: 'choice', q: '表示日期"第一"，用序数词：', options: ['first (1st)', 'one', 'once', 'fist'], answer: 0, explain: 'first 第一（1st），second 第二（2nd），third 第三（3rd）。', tag: '序数词' },
    { id: 'zte4-3', type: 'choice', q: '"5 月 4 日"的英语表达是：', options: ['May 4th', 'May four', '4 Mayth', 'the May four'], answer: 0, explain: '月份 + 序数词：May 4th 读作 May the fourth。', tag: '日期表达' },
    { id: 'zte4-4', type: 'choice', q: '"儿童节在 6 月 1 日"是：', options: ['Children\'s Day is on June 1st.', 'Children\'s Day is in June 1st.', 'Children\'s Day is at June one.', 'Children\'s Day is June one in.'], answer: 0, explain: '具体日期前用 on：on June 1st。', tag: '介词' },
    { id: 'zte4-5', type: 'judge', q: '"第二十"的序数词是 twentieth。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'twenty→twentieth 第二十，以 y 结尾变 ie 加 th。', tag: '序数词' },
    { id: 'zte4-6', type: 'choice', q: '生日派对邀请函上写着 "Come at 3 p.m. on Saturday!"，意思是：', options: ['周六下午 3 点来！', '周六早上 3 点来！', '周六凌晨来！', '每周六都来！'], answer: 0, explain: 'a.m. 上午，p.m. 下午，时间是 3 p.m. 下午三点。', tag: '时间表达' },
    { id: 'zte4-7', type: 'choice', q: '"特殊的日子"是：', options: ['special days', 'special ways', 'special plays', 'special says'], answer: 0, explain: 'special 特别的，special days 特别的日子，如生日、节日。', tag: '词汇' },
    { id: 'zte4-8', type: 'judge', q: '劳动节（May Day）在五月份。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'May Day 五一劳动节，在 May 五月，顾名思义！', tag: '节日常识' },
    { id: 'zte4-9', type: 'choice', q: '想知道朋友的生日，可以问：', options: ['When is your birthday?', 'Where is your birthday?', 'What is birthday?', 'Who is your birthday?'], answer: 0, explain: 'When is your birthday? 你的生日在哪天？回答：It\'s on...。', tag: '句型' },
    { id: 'zte4-10', type: 'choice', q: '第十二的序数词是：', options: ['twelfth', 'twelveth', 'twelve', 'twentieth'], answer: 0, explain: 'twelve→twelfth 第十二，特殊变化要记住！', tag: '序数词' },
  ],
  zte5: [
    { id: 'zte5-1', type: 'choice', q: '"Whose dog is it?" 的意思是：', options: ['这是谁的狗？', '狗在哪里？', '狗是什么颜色？', '狗几岁了？'], answer: 0, explain: 'whose 谁的，问归属：Whose dog is it?。', tag: '句型' },
    { id: 'zte5-2', type: 'choice', q: '"这是我的书包"用名词性物主代词说是：', options: ['The schoolbag is mine.', 'The schoolbag is my.', 'The schoolbag is me.', 'The schoolbag is I.'], answer: 0, explain: 'mine = my + 东西，名词性物主代词单独使用。', tag: '物主代词' },
    { id: 'zte5-3', type: 'choice', q: '"这是她的猫"中的"她的（猫）"用：', options: ['hers', 'her', 'she', 'him'], answer: 0, explain: 'hers 她的（东西），The cat is hers.。', tag: '物主代词' },
    { id: 'zte5-4', type: 'choice', q: '"那是他们的球场"，"他们的（场地）"是：', options: ['theirs', 'them', 'they', 'their'], answer: 0, explain: 'theirs = their + 东西：The playground is theirs.。', tag: '物主代词' },
    { id: 'zte5-5', type: 'judge', q: '"Is this your pen?" 的回答可以是 "Yes, it\'s mine."。', options: ['√ 对', '✗ 错'], answer: 0, explain: '问：这是你的钢笔吗？答：是的，是我的（mine）。', tag: '句型' },
    { id: 'zte5-6', type: 'choice', q: '小狗正在"睡觉"，用现在进行时说：', options: ['The dog is sleeping.', 'The dog sleeps now.', 'The dog sleep now.', 'The dog are sleeping.'], answer: 0, explain: 'be + 动词-ing 现在进行时：is sleeping 正在睡觉。', tag: '时态' },
    { id: 'zte5-7', type: 'choice', q: '小兔子正在"吃胡萝卜"是：', options: ['The rabbit is eating a carrot.', 'The rabbit eating a carrot.', 'The rabbit eats a carrot now.', 'The rabbit is eat a carrot.'], answer: 0, explain: 'eat 的 -ing 形式是 eating，别丢了 be 动词 is！', tag: '时态' },
    { id: 'zte5-8', type: 'judge', q: '捡到别人的东西应该交给老师或失主。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Whose is it? 帮东西找到主人，拾金不昧好品格！', tag: '品德养成' },
    { id: 'zte5-9', type: 'choice', q: '"它们正在玩球"是：', options: ['They are playing with a ball.', 'They is playing a ball.', 'They are play with a ball.', 'They playing with ball.'], answer: 0, explain: 'play with... 玩……，They are + playing 进行时结构。', tag: '时态' },
    { id: 'zte5-10', type: 'choice', q: '宠物在喝水，"喝水"的 -ing 表达是：', options: ['drinking water', 'drink water now', 'drinked water', 'drinks water'], answer: 0, explain: 'drink→drinking，The cat is drinking water.。', tag: '时态' },
  ],
  zte6: [
    { id: 'zte6-1', type: 'choice', q: '"Work quietly!" 的意思是：', options: ['安静地工作/学习！', '快点跑过来！', '大声读出来！', '一起玩游戏！'], answer: 0, explain: 'quietly 安静地，Work quietly! 图书馆、自习课的文明提醒。', tag: '短语理解' },
    { id: 'zte6-2', type: 'choice', q: '图书馆里的提示牌 "Talk quietly" 意思是：', options: ['轻声交谈', '大声交谈', '不要吃饭', '随便跑动'], answer: 0, explain: 'talk 说话 + quietly 轻声 = 轻声交谈，不打扰别人。', tag: '文明标识' },
    { id: 'zte6-3', type: 'choice', q: '看到 "Keep your desk clean"，你应该：', options: ['保持课桌整洁', '把桌子擦花', '在桌上画画', '把垃圾放桌上'], answer: 0, explain: 'keep...clean 保持……干净，自己的课桌自己爱护！', tag: '文明标识' },
    { id: 'zte6-4', type: 'choice', q: '"排队"的英语提示是：', options: ['Take turns. / Wait in line.', 'Run fast.', 'Talk loudly.', 'Push others.'], answer: 0, explain: 'take turns 轮流、wait in line 排队等候，文明小标兵！', tag: '文明标识' },
    { id: 'zte6-5', type: 'judge', q: '同学在写作业，你可以大声唱歌手舞足蹈。', options: ['√ 对', '✗ 错'], answer: 1, explain: 'Work quietly! 别人在学习时轻声细语，不打扰是一种礼貌。', tag: '礼貌用语' },
    { id: 'zte6-6', type: 'choice', q: '上课想发言，正确的做法是：', options: ['先举手，被点到再发言', '直接大喊答案', '和同桌讨论不停', '站起来就走'], answer: 0, explain: 'Raise your hand first. 先举手，遵守课堂秩序。', tag: '课堂规则' },
    { id: 'zte6-7', type: 'choice', q: '"Walk quietly in the hallway" 的意思是：', options: ['在走廊轻声慢走', '在走廊快跑', '在走廊大声笑', '在走廊吃东西'], answer: 0, explain: 'walk quietly 轻声慢走，hallway 走廊，安全文明两不误。', tag: '文明标识' },
    { id: 'zte6-8', type: 'judge', q: '公共场合不大声喧哗，是文明的表现。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'Keep your voice down! 压低音量，文明素养看得见！', tag: '礼貌用语' },
    { id: 'zte6-9', type: 'choice', q: '同桌铅笔掉了，你应该：', options: ['帮他捡起来', '踩一脚', '藏起来', '装没看见'], answer: 0, explain: '小小的帮助大大的温暖，Let me help you.！', tag: '品德养成' },
    { id: 'zte6-10', type: 'choice', q: '自习课上大家都在安静学习，你也应该：', options: ['安静做自己的事', '找人聊天', '来回走动', '听歌外放'], answer: 0, explain: '安静环境靠大家维护，Work quietly! 从我做起！', tag: '文明习惯' },
  ],
  zter: [
    { id: 'zter-1', type: 'choice', q: '"Recycle" 在课本里是"复习巩固"单元，它还有个意思是：', options: ['回收利用', '重新购买', '重新开始', '重新画画'], answer: 0, explain: 'recycle 回收利用，复习就是把知识"回收"再用，越用越活！', tag: '一词多义' },
    { id: 'zter-2', type: 'choice', q: '下面作息安排最合理的是：', options: ['早睡早起，坚持锻炼', '熬夜游戏', '不吃早饭', '作业拖到深夜'], answer: 0, explain: 'My day 的精髓：作息规律 keep a routine！', tag: '作息习惯' },
    { id: 'zter-3', type: 'choice', q: '"I like summer best." 的意思是：', options: ['我最喜欢夏天。', '我喜欢冬天。', '夏天很长。', '夏天很热。'], answer: 0, explain: 'like...best 最喜欢……，favourite 的句型表达。', tag: '句型' },
    { id: 'zter-4', type: 'choice', q: '"运动会十月举行"是：', options: ['The sports meet is in October.', 'The sports meet is at October.', 'The sports meet is on October.', 'The sports meet October in.'], answer: 0, explain: '月份前用 in：in October。', tag: '介词' },
    { id: 'zter-5', type: 'judge', q: '"June 1st" 是 6 月 1 日，儿童节。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'June 1st 六月一日，Children\'s Day 儿童节快乐！', tag: '日期表达' },
    { id: 'zter-6', type: 'choice', q: '问"这是谁的足球？"，问：', options: ['Whose football is this?', 'Who football is this?', 'Where is the football?', 'What is the football?'], answer: 0, explain: 'Whose + 名词 问归属，回答：It\'s Lily\'s.。', tag: '句型' },
    { id: 'zter-7', type: 'choice', q: '小鸟正在"飞"，用进行时说：', options: ['The bird is flying.', 'The bird is fly.', 'The bird are flying.', 'The bird flies now.'], answer: 0, explain: 'be + doing：is flying 正在飞，进行时三件套不能少 be！', tag: '时态' },
    { id: 'zter-8', type: 'choice', q: '图书馆里应该：', options: ['Keep quiet and read.', 'Sing and dance.', 'Run and shout.', 'Eat and play.'], answer: 0, explain: 'Work quietly! 安静阅读，书香四溢。', tag: '文明习惯' },
    { id: 'zter-9', type: 'judge', q: '"twelfth" 是"第十二"的意思。', options: ['√ 对', '✗ 错'], answer: 0, explain: 'twelfth 第十二，twelve 的序数词，特殊变化记心间。', tag: '序数词' },
    { id: 'zter-10', type: 'choice', q: '本学期你学到的文明好习惯是：', options: ['轻声慢步、排队轮流、爱护公物', '大声喧哗、随手乱扔', '插队抢行', '上课随便说话'], answer: 0, explain: 'Work quietly、Take turns、Keep it clean，文明习惯伴我行！', tag: '习惯养成' },
  ],
}
