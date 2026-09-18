// 统编版（部编版）五年级上册语文随堂知识点题库
// 每个单元一关，每关 10 题

export type QType = 'choice' | 'judge' | 'fill'

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
    title: '一花一鸟总关情',
    emoji: '🦩',
    color: 'emerald',
    lessons: ['《白鹭》', '《落花生》', '《桂花雨》', '《珍珠鸟》'],
    intro: '一起认识精巧的白鹭、朴实的花生，感受作家笔下的花鸟情。',
  },
  {
    id: 'u2',
    name: '第二单元',
    title: '阅读提速训练营',
    emoji: '🚄',
    color: 'orange',
    lessons: ['《搭石》', '《将相和》', '《什么比猎豹的速度更快》', '《冀中的地道战》'],
    intro: '学习提高阅读速度，认识蔺相如和廉颇，了解神奇的地道战。',
  },
  {
    id: 'u3',
    name: '第三单元',
    title: '民间故事园',
    emoji: '🏮',
    color: 'rose',
    lessons: ['《猎人海力布》', '《牛郎织女（一）》', '《牛郎织女（二）》'],
    intro: '走进口耳相传的民间故事，认识善良的海力布和勤劳的牛郎织女。',
  },
  {
    id: 'u4',
    name: '第四单元',
    title: '少年中国心',
    emoji: '🔥',
    color: 'red',
    lessons: ['《古诗三首》', '《少年中国说（节选）》', '《圆明园的毁灭》', '《小岛》'],
    intro: '读古诗、诵美文，记住那段历史，做自强不息的中国少年。',
  },
  {
    id: 'u5',
    name: '第五单元',
    title: '说明文小达人',
    emoji: '🔬',
    color: 'amber',
    lessons: ['《太阳》', '《松鼠》'],
    intro: '学习列数字、作比较、打比方，掌握说明文的秘密武器。',
  },
  {
    id: 'u6',
    name: '第六单元',
    title: '舐犊情深',
    emoji: '🌊',
    color: 'teal',
    lessons: ['《慈母情深》', '《父爱之舟》', '《"精彩极了"和"糟糕透了"》'],
    intro: '在字里行间体会父母深沉的爱，读懂鼓励与提醒都是爱。',
  },
  {
    id: 'u7',
    name: '第七单元',
    title: '四时景物皆成趣',
    emoji: '🌙',
    color: 'lime',
    lessons: ['《古诗词三首》', '《四季之美》', '《鸟的天堂》', '《月迹》'],
    intro: '跟随诗人作家的脚步，欣赏四季之美、榕树之盛、月色之趣。',
  },
  {
    id: 'u8',
    name: '第八单元',
    title: '读书明智',
    emoji: '📖',
    color: 'orange',
    lessons: ['《古人谈读书》', '《忆读书》', '《我的"长生果"》'],
    intro: '听古人谈读书方法，向冰心奶奶学"读书好，多读书，读好书"。',
  },
]

interface RawQuestion {
  id: string
  type: QType
  q: string
  options: string[]
  answer: number
  explain: string
  tag: string
}

const UNIT1: RawQuestion[] = [
  {
    id: 'q1-1', type: 'choice', tag: '文学常识',
    q: '《白鹭》的作者是谁？',
    options: ['老舍', '郭沫若', '巴金', '许地山'],
    answer: 1,
    explain: '《白鹭》作者是郭沫若，他是一位大诗人，还写了诗集《女神》《星空》。',
  },
  {
    id: 'q1-2', type: 'choice', tag: '读音',
    q: '「嫌弃」的「嫌」怎么读？',
    options: ['xián', 'xiǎn', 'qián', 'xiàn'],
    answer: 0,
    explain: '嫌读 xián，第二声。《白鹭》里说：白鹭的嘴、脚再长一点就"嫌"长了。',
  },
  {
    id: 'q1-3', type: 'choice', tag: '读音',
    q: '「榨油」的「榨」怎么读？',
    options: ['zhá', 'zhà', 'zà', 'chá'],
    answer: 1,
    explain: '榨读 zhà，第四声。《落花生》里，花生可以榨油。',
  },
  {
    id: 'q1-4', type: 'choice', tag: '多音字',
    q: '「爱好」中的「好」读什么？',
    options: ['hǎo', 'hào'],
    answer: 1,
    explain: '"好"是多音字：表示优点多读 hǎo（好人），表示喜欢读 hào（爱好、好学）。',
  },
  {
    id: 'q1-5', type: 'choice', tag: '字形',
    q: '下面书写完全正确的一项是？',
    options: ['爱幕', '爱暮', '爱慕', '爱摹'],
    answer: 2,
    explain: '爱慕：因为喜欢而向往。"慕"字下面是"⺗"（心字底），表示心里的感情。别写成幕布的"幕"、日暮的"暮"哦。',
  },
  {
    id: 'q1-6', type: 'choice', tag: '词义',
    q: '「美中不足」是什么意思？',
    options: ['美的东西不太多', '虽然很好，但还有小缺点', '不美的地方太多'],
    answer: 1,
    explain: '课文里说白鹭不会唱歌，是"美中不足"。这个成语的意思是：虽然很好，但略有缺陷。',
  },
  {
    id: 'q1-7', type: 'choice', tag: '课文理解',
    q: '《落花生》里，父亲借花生告诉我们要做怎样的人？',
    options: ['外表华美、引人注目的人', '像花生一样朴实无华、对别人有用的人', '只讲体面的人'],
    answer: 1,
    explain: '父亲说："人要做有用的人，不要做只讲体面，而对别人没有好处的人。"这种写法叫"借物喻人"。',
  },
  {
    id: 'q1-8', type: 'choice', tag: '文学常识',
    q: '《桂花雨》的作者是谁？',
    options: ['琦君', '冯骥才', '郭沫若', '吴冠中'],
    answer: 0,
    explain: '《桂花雨》作者琦君；《珍珠鸟》作者冯骥才，别弄混哦！',
  },
  {
    id: 'q1-9', type: 'choice', tag: '课文理解',
    q: '《珍珠鸟》说"信赖，往往创造出美好的境界"，这里的"美好的境界"指什么？',
    options: ['鸟笼特别漂亮', '人与鸟互相信任、和睦相处', '珍珠鸟生了小雏鸟'],
    answer: 1,
    explain: '因为"我"从不伤害珍珠鸟，它才敢趴在"我"的肩头睡觉。人与动物互相信赖、和谐相处，就是美好的境界。',
  },
  {
    id: 'q1-10', type: 'judge', tag: '课文理解',
    q: '《桂花雨》表面写摇桂花，其实表达了对家乡和童年生活的怀念。',
    options: ['√ 对', '× 错'],
    answer: 0,
    explain: '母亲说："这里的桂花再香，也比不上家乡院子里的桂花。"因为家乡的桂花里，藏着浓浓的乡情和童年回忆。',
  },
]

const UNIT2: RawQuestion[] = [
  {
    id: 'q2-1', type: 'choice', tag: '文学常识',
    q: '《将相和》中，"将"和"相"分别指谁？',
    options: ['廉颇和蔺相如', '蔺相如和廉颇', '秦王和赵王', '赵王和秦王'],
    answer: 0,
    explain: '"将"是大将军廉颇，"相"是上卿蔺相如。故事出自司马迁的《史记·廉颇蔺相如列传》。',
  },
  {
    id: 'q2-2', type: 'choice', tag: '课文理解',
    q: '"负荆请罪"中，是谁背着荆条去请罪？',
    options: ['蔺相如向廉颇', '廉颇向蔺相如', '赵王向秦王'],
    answer: 1,
    explain: '廉颇知道自己错怪了蔺相如，就脱下战袍、背上荆条去请罪。后来两人成了同生共死的好朋友。',
  },
  {
    id: 'q2-3', type: 'choice', tag: '词义',
    q: '"完璧归赵"是什么意思？',
    options: ['把璧玉藏进柜子', '把原物完好无损地归还本人', '打碎了赔一个新的'],
    answer: 1,
    explain: '蔺相如把和氏璧完好地送回赵国。"完"是完好无损，"璧"就是和氏璧。',
  },
  {
    id: 'q2-4', type: 'choice', tag: '课文理解',
    q: '《将相和》三个小故事的先后顺序是？',
    options: ['完璧归赵→渑池会面→负荆请罪', '负荆请罪→完璧归赵→渑池会面', '渑池会面→完璧归赵→负荆请罪'],
    answer: 0,
    explain: '蔺相如先"完璧归赵"立了功，又在"渑池会面"上再立大功，最后廉颇"负荆请罪"，将相和好。',
  },
  {
    id: 'q2-5', type: 'choice', tag: '读音',
    q: '「渑池」的「渑」怎么读？',
    options: ['mián', 'miǎn', 'shéng', 'yíng'],
    answer: 1,
    explain: '渑池是河南的一个地名，"渑"读 miǎn，第三声。渑池会面上，蔺相如逼秦王击缶。',
  },
  {
    id: 'q2-6', type: 'choice', tag: '读音',
    q: '《搭石》里「人影绰绰」的「绰」怎么读？',
    options: ['zhuó', 'chuò', 'chuō', 'chāo'],
    answer: 1,
    explain: '绰读 chuò。"人影绰绰"形容人影多、姿态美好，走在搭石上就像画一样。',
  },
  {
    id: 'q2-7', type: 'choice', tag: '课文理解',
    q: '《什么比猎豹的速度更快》一文中，速度最快的是什么？',
    options: ['火箭', '喷气式飞机', '游隼', '光'],
    answer: 3,
    explain: '课文按由慢到快的顺序介绍，最后说光是速度最快的，每秒约 30 万千米。',
  },
  {
    id: 'q2-8', type: 'choice', tag: '课文理解',
    q: '《冀中的地道战》中，地道的主要作用是什么？',
    options: ['储存粮食', '保护自己、打击敌人', '躲避洪水', '通风乘凉'],
    answer: 1,
    explain: '地道战是冀中人民创造的神奇战斗方式：地道理有陷阱、瞭望孔、气孔，既能保护自己，又能打击敌人。',
  },
  {
    id: 'q2-9', type: 'choice', tag: '词义',
    q: '"协调有序"是什么意思？',
    options: ['配合得适当、有先后次序', '吵吵闹闹很混乱', '各走各的互不相干'],
    answer: 0,
    explain: '课文写乡亲们走搭石："前面的抬起脚来，后面的紧跟上去"——动作配合得整齐有节奏，这就是协调有序。',
  },
  {
    id: 'q2-10', type: 'judge', tag: '课文理解',
    q: '《搭石》通过摆搭石、走搭石，体现了乡亲们无私奉献、互相礼让的美好品质。',
    options: ['√ 对', '× 错'],
    answer: 0,
    explain: '一块块搭石连起了乡亲们的情感：上了点年纪的人摆搭石、走搭石互相礼让，体现了心灵的美好。',
  },
]

const UNIT3: RawQuestion[] = [
  {
    id: 'q3-1', type: 'choice', tag: '课文理解',
    q: '《猎人海力布》中，海力布为救乡亲们，最后变成了什么？',
    options: ['一棵大树', '一块石头', '一只小鸟', '一座山'],
    answer: 1,
    explain: '海力布说出实情后变成了一块石头。乡亲们得救了，世世代代纪念这位舍己救人的英雄。',
  },
  {
    id: 'q3-2', type: 'choice', tag: '课文理解',
    q: '海力布从龙王那里得到的宝贝是什么？',
    options: ['能听懂动物说话的宝石', '一把宝剑', '一袋金币', '一匹快马'],
    answer: 0,
    explain: '小白蛇送给海力布一颗含在嘴里就能听懂动物说话的宝石。但动物的话只能自己知道，对别人说了就会变成石头。',
  },
  {
    id: 'q3-3', type: 'choice', tag: '课文理解',
    q: '听到鸟儿说大山要崩塌、洪水要淹没村子时，海力布是怎么做的？',
    options: ['自己悄悄跑掉', '不顾牺牲，坚持劝说乡亲们搬家', '装作什么都没听到'],
    answer: 1,
    explain: '为了让乡亲们相信并赶快搬家，海力布把实情全说了出来，牺牲了自己，救了大家。',
  },
  {
    id: 'q3-4', type: 'choice', tag: '课文理解',
    q: '《牛郎织女》里，老牛是怎么帮助牛郎的？',
    options: ['教他耕田种地', '指点他在湖边认识了织女', '驮着他去城里'],
    answer: 1,
    explain: '老牛开口说话，让牛郎黄昏时去湖边，认识了善良的织女。老牛是牛郎最忠实的朋友。',
  },
  {
    id: 'q3-5', type: 'choice', tag: '文学常识',
    q: '下面哪一组是我国四大民间故事？',
    options: ['牛郎织女、孟姜女、梁山伯与祝英台、白蛇传', '西游记、三国演义、水浒传、红楼梦', '精卫填海、女娲补天、愚公移山、夸父追日'],
    answer: 0,
    explain: '四大民间故事口耳相传，寄托着人们的美好愿望。B 组是四大名著，C 组是神话传说。',
  },
  {
    id: 'q3-6', type: 'choice', tag: '拓展常识',
    q: '七夕节（乞巧节）和哪个民间故事有关？',
    options: ['白蛇传', '牛郎织女', '花木兰替父从军'],
    answer: 1,
    explain: '农历七月初七，传说牛郎织女在鹊桥相会。古时候的姑娘们还会在这一天向织女"乞巧"呢。',
  },
  {
    id: 'q3-7', type: 'choice', tag: '读音',
    q: '「酬谢」的「酬」怎么读？',
    options: ['zhòu', 'chóu', 'cóu', 'tiáo'],
    answer: 1,
    explain: '酬读 chóu，第二声。小白蛇说，海力布可以要龙王嘴里的宝石作酬谢。',
  },
  {
    id: 'q3-8', type: 'choice', tag: '词义',
    q: '"叮嘱"的意思是？',
    options: ['随口说说', '再三嘱咐', '大声吼叫'],
    answer: 1,
    explain: '叮嘱＝再三嘱咐，近义词有"嘱咐""叮咛"。老牛临死前叮嘱牛郎遇到困难就找它。',
  },
  {
    id: 'q3-9', type: 'choice', tag: '读音',
    q: '「牺牲」的「牺」怎么读？',
    options: ['xī', 'xì', 'xí', 'sī'],
    answer: 0,
    explain: '牺读 xī，第一声。海力布牺牲了自己，拯救了乡亲们。',
  },
  {
    id: 'q3-10', type: 'judge', tag: '文学常识',
    q: '民间故事是老百姓口耳相传的，情节曲折、充满幻想，寄托着人们美好的愿望。',
    options: ['√ 对', '× 错'],
    answer: 0,
    explain: '民间故事的特点：口耳相传、情节夸张、充满幻想，表达人们朴素的愿望，比如对幸福生活的追求。',
  },
]

const UNIT4: RawQuestion[] = [
  {
    id: 'q4-1', type: 'choice', tag: '古诗词',
    q: '《示儿》"王师北定中原日，家祭无忘告乃翁"，"乃翁"是什么意思？',
    options: ['你们', '你的父亲', '别人家的老人'],
    answer: 1,
    explain: '"乃"是你的，"翁"是父亲。陆游临终嘱咐儿子：朝廷军队收复中原的那天，家祭时别忘了把这个好消息告诉爸爸。',
  },
  {
    id: 'q4-2', type: 'choice', tag: '古诗词',
    q: '《示儿》表达了诗人陆游怎样的感情？',
    options: ['对大自然的热爱', '至死不忘收复失地的爱国之情', '对儿童们的喜爱'],
    answer: 1,
    explain: '"死去元知万事空，但悲不见九州同。"陆游是南宋爱国诗人，一辈子都盼望国家统一。',
  },
  {
    id: 'q4-3', type: 'choice', tag: '古诗词',
    q: '"暖风熏得游人醉，直把杭州作汴州"出自谁的《题临安邸》？',
    options: ['陆游', '林升', '龚自珍', '王维'],
    answer: 1,
    explain: '林升是南宋诗人。这两句诗讽刺了统治者只顾享乐、忘记了失去的国土。',
  },
  {
    id: 'q4-4', type: 'choice', tag: '古诗词',
    q: '"我劝天公重抖擞，不拘一格降人才"的作者是？',
    options: ['龚自珍', '林升', '纳兰性德', '张继'],
    answer: 0,
    explain: '龚自珍是清代诗人，《己亥杂诗》呼吁打破常规、广纳人才。"不拘一格"现在还是常用成语。',
  },
  {
    id: 'q4-5', type: 'choice', tag: '课文理解',
    q: '《圆明园的毁灭》中，圆明园是被谁毁灭的？',
    options: ['八国联军', '英法联军', '日本侵略者'],
    answer: 1,
    explain: '1860 年 10 月，英法联军闯进圆明园，把能拿走的统统掠走，最后放火焚烧。别忘了这段历史！',
  },
  {
    id: 'q4-6', type: 'choice', tag: '词义',
    q: '《圆明园的毁灭》里"众星拱月"在文中指什么？',
    options: ['天上星星围着月亮', '圆明园和许多小园环绕分布的布局', '月亮又大又圆'],
    answer: 1,
    explain: '圆明园由圆明园、万春园、长春园组成，周围还有许多小园环绕着，就像众星拱月。这个词常用来比喻许多人簇拥着一个人。',
  },
  {
    id: 'q4-7', type: 'choice', tag: '课文理解',
    q: '《少年中国说（节选）》中，"少年强则国强"的下一句是？',
    options: ['少年富则国富', '少年独立则国独立', '少年智则国智'],
    answer: 1,
    explain: '课文用了一串排比："少年智则国智……少年强则国强，少年独立则国独立……"激励中国少年发奋图强。',
  },
  {
    id: 'q4-8', type: 'choice', tag: '文学常识',
    q: '《少年中国说（节选）》的作者是？',
    options: ['梁启超', '龚自珍', '鲁迅', '巴金'],
    answer: 0,
    explain: '梁启超是近代思想家、戊戌变法的领袖之一。他把建设新中国的希望寄托在中国少年身上。',
  },
  {
    id: 'q4-9', type: 'choice', tag: '读音',
    q: '《小岛》中「舀汤」的「舀」怎么读？',
    options: ['tāo', 'yǎo', 'xiǎn', 'dào'],
    answer: 1,
    explain: '舀读 yǎo，第三声，意思是用瓢、勺等取东西。别和"稻""蹈"混淆哦。',
  },
  {
    id: 'q4-10', type: 'judge', tag: '课文理解',
    q: '《小岛》讲将军登岛，看到战士们在缺土的小岛上种出蔬菜，感受到守岛战士扎根海岛、艰苦守岛的爱国情怀。',
    options: ['√ 对', '× 错'],
    answer: 0,
    explain: '战士们从家乡背来泥土种菜，还舍不得吃，要留给将军。课文歌颂了守岛战士热爱海岛、保家卫国的精神。',
  },
]

const UNIT5: RawQuestion[] = [
  {
    id: 'q5-1', type: 'choice', tag: '课文理解',
    q: '《太阳》一课介绍了太阳哪三个特点？',
    options: ['远、大、热', '高、圆、亮', '近、小、冷'],
    answer: 0,
    explain: '课文先写太阳"远、大、热"三个特点，再写太阳和人类有非常密切的关系。',
  },
  {
    id: 'q5-2', type: 'choice', tag: '说明方法',
    q: '"太阳离我们约有一亿五千万千米远"，用了什么说明方法？',
    options: ['打比方', '列数字', '举例子'],
    answer: 1,
    explain: '用具体数字来说明事物，叫"列数字"，这是说明文最常用的方法，能让说明更准确。',
  },
  {
    id: 'q5-3', type: 'choice', tag: '说明方法',
    q: '"一百三十万个地球的抵得上一个太阳"，用了什么说明方法？',
    options: ['列数字、作比较', '打比方', '分类别'],
    answer: 0,
    explain: '既用了一百三十万这个数字，又把太阳和地球作比较，突出了太阳"大"的特点。',
  },
  {
    id: 'q5-4', type: 'choice', tag: '说明方法',
    q: '"太阳会发光，会发热，是个大火球"，用了什么说明方法？',
    options: ['列数字', '作比较', '打比方'],
    answer: 2,
    explain: '把太阳比作大火球，是"打比方"，让说明更生动形象。',
  },
  {
    id: 'q5-5', type: 'choice', tag: '文学常识',
    q: '《松鼠》的作者是法国博物学家——',
    options: ['布封', '法布尔', '达尔文'],
    answer: 0,
    explain: '布封用 40 年写成了《自然史》。注意别和写《昆虫记》的法布尔搞混哦。',
  },
  {
    id: 'q5-6', type: 'choice', tag: '课文理解',
    q: '《松鼠》一文写了松鼠哪些特点？',
    options: ['漂亮、乖巧、驯良', '凶猛、危险', '贪吃、懒惰'],
    answer: 0,
    explain: '松鼠面容清秀、眼睛闪闪发光、身体矫健，是一种漂亮、乖巧、驯良的小动物。',
  },
  {
    id: 'q5-7', type: 'choice', tag: '读音',
    q: '「驯良」的「驯」怎么读？',
    options: ['xún', 'xùn', 'shùn', 'xuàn'],
    answer: 1,
    explain: '驯读 xùn，第四声，意思是顺从、温顺。"驯良"指和顺善良。',
  },
  {
    id: 'q5-8', type: 'choice', tag: '读音',
    q: '「摄氏度」的「摄」怎么读？',
    options: ['niè', 'shè', 'zhé', 'chǎn'],
    answer: 1,
    explain: '摄读 shè，第四声。摄氏度（℃）是温度单位，太阳表面温度有 6000 摄氏度呢。',
  },
  {
    id: 'q5-9', type: 'choice', tag: '课文理解',
    q: '课文说，如果没有太阳，地球上会怎样？',
    options: ['没有什么影响', '不会有植物，也不会有动物', '动物会更活泼'],
    answer: 1,
    explain: '太阳的光和热是植物生长、雨雪风形成、动物生存的根本。一句话："没有太阳，就没有我们这个美丽可爱的世界。"',
  },
  {
    id: 'q5-10', type: 'judge', tag: '课文理解',
    q: '《太阳》语言平实，《松鼠》语言生动活泼，它们都是说明文。',
    options: ['√ 对', '× 错'],
    answer: 0,
    explain: '《太阳》多用列数字、作比较，语言平实；《松鼠》像在描写一位小可爱，语言活泼。它们都在介绍事物的特点。',
  },
]

const UNIT6: RawQuestion[] = [
  {
    id: 'q6-1', type: 'choice', tag: '文学常识',
    q: '《慈母情深》的作者是？',
    options: ['梁晓声', '吴冠中', '巴金'],
    answer: 0,
    explain: '梁晓声，当代作家，代表作有《人世间》《雪城》等。',
  },
  {
    id: 'q6-2', type: 'choice', tag: '课文理解',
    q: '《慈母情深》中，母亲是在怎样的环境里工作的？',
    options: ['明亮安静的办公室', '震耳欲聋、闷热嘈杂的车间', '宽敞明亮的教室'],
    answer: 1,
    explain: '在这样恶劣的环境里，母亲却毫不犹豫地掏钱给"我"买书，更显母爱之深。',
  },
  {
    id: 'q6-3', type: 'choice', tag: '课文理解',
    q: '知道"我"要用一元五角买课外书后，母亲是怎么做的？',
    options: ['骂了"我"一顿', '毫不犹豫地把钱塞给"我"', '让爸爸来决定'],
    answer: 1,
    explain: '在那样穷苦的日子里，母亲仍然支持"我"读课外书："我挺高兴他爱看书的！"',
  },
  {
    id: 'q6-4', type: 'choice', tag: '词义',
    q: '"震耳欲聋"是什么意思？',
    options: ['耳朵完全聋了', '声音大得像要把耳朵震聋，形容声音很大', '非常安静'],
    answer: 1,
    explain: '课文用"震耳欲聋"写出车间噪声极大，反衬出母亲工作的辛苦。',
  },
  {
    id: 'q6-5', type: 'choice', tag: '文学常识',
    q: '《父爱之舟》的作者吴冠中是著名的——',
    options: ['画家', '音乐家', '科学家'],
    answer: 0,
    explain: '吴冠中是著名画家。课文用梦境回忆往事，所以画面感特别强，像一幅幅画。',
  },
  {
    id: 'q6-6', type: 'choice', tag: '课文理解',
    q: '《父爱之舟》中反复出现的"小渔船"有什么作用？',
    options: ['只是出门的交通工具', '是全文的线索，寄托着深深的父爱', '说明家里很穷'],
    answer: 1,
    explain: '姑爹的小渔船见证了父亲送"我"考学、陪"我"住宿、缝棉被的点点滴滴，它是父爱的象征，也是全文的线索。',
  },
  {
    id: 'q6-7', type: 'choice', tag: '读音',
    q: '"龟裂"的"龟"读什么？',
    options: ['guī', 'jūn', 'guì', 'guó'],
    answer: 1,
    explain: '易错音！"龟裂"读 jūn liè，指皮肤因干燥而开裂。表示乌龟时才读 guī。',
  },
  {
    id: 'q6-8', type: 'choice', tag: '课文理解',
    q: '《"精彩极了"和"糟糕透了"》中，父母对"我"的第一首诗评价截然不同，是因为——',
    options: ['母亲不懂诗，父亲懂诗', '母亲是鼓励的爱，父亲是严格的爱', '父亲不喜欢"我"'],
    answer: 1,
    explain: '母亲的"精彩极了"是慈祥的鼓励，父亲的"糟糕透了"是严厉的提醒。两种爱都为了"我"健康成长。',
  },
  {
    id: 'q6-9', type: 'choice', tag: '词义',
    q: '"失魂落魄"形容什么？',
    options: ['心神不定、行动失常的样子', '特别开心兴奋', '生了很重的病'],
    answer: 0,
    explain: '"我"整天像失魂落魄似的，满脑子都想着写诗，形容人极度着迷、心神不定的样子。',
  },
  {
    id: 'q6-10', type: 'judge', tag: '课文理解',
    q: '《慈母情深》《父爱之舟》都表达了父母对孩子深沉的爱。',
    options: ['√ 对', '× 错'],
    answer: 0,
    explain: '一个写母亲在困苦中支持"我"买书，一个写父亲摇船送"我"上学，舐犊之情，感人至深。',
  },
]

const UNIT7: RawQuestion[] = [
  {
    id: 'q7-1', type: 'choice', tag: '古诗词',
    q: '"空山新雨后，天气晚来秋"出自哪首诗？',
    options: ['《山居秋暝》', '《枫桥夜泊》', '《长相思》'],
    answer: 0,
    explain: '出自唐代王维的《山居秋暝》。"暝"指日落时分、天色将晚。',
  },
  {
    id: 'q7-2', type: 'choice', tag: '古诗词',
    q: '《山居秋暝》的作者是？',
    options: ['王维', '张继', '纳兰性德'],
    answer: 0,
    explain: '王维，唐代诗人，人称"诗佛"。苏轼夸他的作品"诗中有画，画中有诗"。',
  },
  {
    id: 'q7-3', type: 'choice', tag: '古诗词',
    q: '"姑苏城外寒山寺，夜半钟声到客船"出自哪首诗？',
    options: ['《枫桥夜泊》', '《示儿》', '《山居秋暝》'],
    answer: 0,
    explain: '出自唐代张继的《枫桥夜泊》，写的是秋夜江边的愁绪，古诗名句要背下来哦！',
  },
  {
    id: 'q7-4', type: 'choice', tag: '古诗词',
    q: '《长相思》"聒碎乡心梦不成"中，"聒"的意思是？',
    options: ['声音嘈杂', '安安静静', '睡觉做梦'],
    answer: 0,
    explain: '聒读 guō，声音嘈杂。风雪声吵得思乡的作者连梦都做不成。作者是清代词人纳兰性德。',
  },
  {
    id: 'q7-5', type: 'choice', tag: '文学常识',
    q: '《四季之美》的作者是日本作家——',
    options: ['清少纳言', '川端康成', '冰心'],
    answer: 0,
    explain: '清少纳言，日本平安时代的女作家，代表作《枕草子》。',
  },
  {
    id: 'q7-6', type: 'choice', tag: '课文理解',
    q: '《四季之美》中，作者认为秋天最美的是？',
    options: ['黎明', '黄昏', '夜晚'],
    answer: 1,
    explain: '课文按四季顺序写：春天最美是黎明，夏天最美是夜晚，秋天最美是黄昏，冬天最美是早晨。',
  },
  {
    id: 'q7-7', type: 'choice', tag: '课文理解',
    q: '巴金去"鸟的天堂"一共去了几次，都看到鸟了吗？',
    options: ['两次；第一次傍晚没看到鸟，第二次早晨看到群鸟纷飞', '一次；看到了很多鸟', '两次；都看到了很多鸟'],
    answer: 0,
    explain: '第一次是傍晚，鸟儿休息了，只见大榕树；第二天早晨经过，看到许多鸟，那"鸟的天堂"的确是鸟的天堂啊！',
  },
  {
    id: 'q7-8', type: 'choice', tag: '读音',
    q: '"不可计数"的"数"读什么？',
    options: ['shù', 'shǔ', 'shuò', 'sù'],
    answer: 1,
    explain: '易错音！"不可计数"是多到没法数（shǔ）清楚。表示"数字"时才读 shù。',
  },
  {
    id: 'q7-9', type: 'choice', tag: '词义',
    q: '"应接不暇"在《鸟的天堂》中形容什么？',
    options: ['鸟太多，眼睛看不过来', '主人不欢迎客人', '天太黑看不见'],
    answer: 0,
    explain: '到处都是鸟声、鸟影，大的、小的、花的、黑的——眼睛应接不暇，形容东西太多，来不及看。',
  },
  {
    id: 'q7-10', type: 'judge', tag: '课文理解',
    q: '《月迹》通过孩子们追寻月亮的踪迹，表现了孩子们对美好事物的向往。',
    options: ['√ 对', '× 错'],
    answer: 0,
    explain: '作者贾平凹写了孩子们在镜中、院中、杯中、水中到处"寻月"，充满童真童趣。',
  },
]

const UNIT8: RawQuestion[] = [
  {
    id: 'q8-1', type: 'choice', tag: '课文理解',
    q: '朱熹认为读书有"三到"，指的是？',
    options: ['心到、眼到、口到', '手到、脚到、耳到', '心到、手到、嘴到'],
    answer: 0,
    explain: '朱熹说"三到之中，心到最急"。这里的"急"是要紧的意思——读书最重要的是用心。',
  },
  {
    id: 'q8-2', type: 'choice', tag: '古文理解',
    q: '《论语》"敏而好学，不耻下问"的意思是？',
    options: ['聪敏又好学，向学问不如自己的人请教也不觉得羞耻', '聪明的人不用学习', '地位低的人不能提问'],
    answer: 0,
    explain: '这是孔子夸孔文子的话。学习就要勤奋好学、虚心求教。',
  },
  {
    id: 'q8-3', type: 'choice', tag: '课文理解',
    q: '《忆读书》中，冰心奶奶送给儿童的话是？',
    options: ['"读书好，多读书，读好书"', '"书山有路勤为径"', '"为中华之崛起而读书"'],
    answer: 0,
    explain: '冰心奶奶用九个字总结了读书的感悟和方法，送给了小朋友。',
  },
  {
    id: 'q8-4', type: 'choice', tag: '文学常识',
    q: '《忆读书》的作者是？',
    options: ['冰心', '叶文玲', '老舍'],
    answer: 0,
    explain: '冰心，原名谢婉莹，代表作有《繁星》《春水》《寄小读者》。',
  },
  {
    id: 'q8-5', type: 'choice', tag: '文学常识',
    q: '《我的"长生果"》中，"长生果"指的是？',
    options: ['花生', '书', '一种药'],
    answer: 1,
    explain: '作者叶文玲把书比作"长生果"——书是人类精神的营养品，滋养我们成长。',
  },
  {
    id: 'q8-6', type: 'choice', tag: '古文理解',
    q: '曾国藩说，读书要有"三要"，是哪三要？',
    options: ['有志、有识、有恒', '有钱、有闲、有书', '多看、多写、多背'],
    answer: 0,
    explain: '曾国藩说：有志则不甘为下流，有识则知学问无尽，有恒则断无不成之事。',
  },
  {
    id: 'q8-7', type: 'choice', tag: '读音',
    q: '「教诲」的「诲」怎么读？',
    options: ['huǐ', 'huì', 'měi', 'wǔ'],
    answer: 1,
    explain: '诲读 huì，第四声，是教导的意思。"教诲"就是教导；注意"后悔"的"悔"才读 huǐ。',
  },
  {
    id: 'q8-8', type: 'choice', tag: '古文理解',
    q: '"默而识之，学而不厌，诲人不倦"中的"识"读什么？是什么意思？',
    options: ['shí，认识', 'zhì，记住', 'zhī，知道'],
    answer: 1,
    explain: '易错字！这里的"识"通"志"，读 zhì，是记住的意思。整句：默默地记住知识，学习不满足，教人不知疲倦。',
  },
  {
    id: 'q8-9', type: 'choice', tag: '课文理解',
    q: '冰心七岁时读哪本书，读得津津有味？',
    options: ['《三国演义》', '《西游记》', '《红楼梦》'],
    answer: 0,
    explain: '冰心七岁开始读《三国演义》，后来又读了《水浒传》《红楼梦》等许多书。',
  },
  {
    id: 'q8-10', type: 'judge', tag: '文学常识',
    q: '《论语》是记录孔子及其弟子言行的书。',
    options: ['√ 对', '× 错'],
    answer: 0,
    explain: '《古人谈读书》第一部分就选自《论语》。《论语》是儒家经典，记录了孔子和弟子们的言行。',
  },
]

export const QUESTIONS: Record<string, Question[]> = {
  u1: UNIT1,
  u2: UNIT2,
  u3: UNIT3,
  u4: UNIT4,
  u5: UNIT5,
  u6: UNIT6,
  u7: UNIT7,
  u8: UNIT8,
}

export const ALL_QUESTIONS: Question[] = [
  ...UNIT1, ...UNIT2, ...UNIT3, ...UNIT4, ...UNIT5, ...UNIT6, ...UNIT7, ...UNIT8,
]

export const QUESTIONS_PER_LEVEL = 10
export const TIME_PER_QUESTION = 40 // 每题倒计时（秒）
export const LIVES = 3 // 生命值

// 洗牌（Fisher-Yates）
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 生成一次闯关的题目序列（选项也打乱，judge 保持顺序）
export function buildLevelQuestions(unitId: string): { question: Question; options: string[]; answer: number }[] {
  const pool = QUESTIONS[unitId] || []
  const picked = pool.length <= QUESTIONS_PER_LEVEL ? pool : shuffle(pool).slice(0, QUESTIONS_PER_LEVEL)
  return picked.map((q) => {
    if (q.type === 'judge') return { question: q, options: q.options, answer: q.answer }
    const idx = shuffle(q.options.map((_, i) => i))
    return {
      question: q,
      options: idx.map((i) => q.options[i]),
      answer: idx.indexOf(q.answer),
    }
  })
}

// 每日挑战：从全部已学单元中随机抽题
export function buildDailyQuestions(unlockedUnits: string[]): { question: Question; options: string[]; answer: number }[] {
  const pool = ALL_QUESTIONS.filter((q) => unlockedUnits.some((u) => q.id.startsWith(u.replace('u', 'q'))))
  const source = pool.length >= QUESTIONS_PER_LEVEL ? pool : ALL_QUESTIONS
  const picked = shuffle(source).slice(0, QUESTIONS_PER_LEVEL)
  return picked.map((q) => {
    if (q.type === 'judge') return { question: q, options: q.options, answer: q.answer }
    const idx = shuffle(q.options.map((_, i) => i))
    return {
      question: q,
      options: idx.map((i) => q.options[i]),
      answer: idx.indexOf(q.answer),
    }
  })
}
