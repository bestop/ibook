// 宠物系统（与网页版同构）：学习任务驱动成长 + 专属剧情
// 等级曲线/阶段/心情/喂食规则与 src/lib/pet.ts 保持一致
const PET_LEVEL_EXP = [0, 40, 100, 180, 280, 400, 540, 700, 880, 1080, 1300, 1540, 1800, 2080, 2380]
const PET_MAX_LEVEL = 15

const PET_EXP = {
  level1Star: 20,
  level2Star: 30,
  level3Star: 40,
  failComfort: 5,
  daily: 25,
  review: 15,
  signIn: 10,
  dailyGoal: 20,
  reviewCleared: 3,
}

const MOOD_DECAY_PER_DAY = 10
const MOOD_MIN = 20
const MOOD_MAX = 100
const FEED_COST = 20
const FEED_MOOD = 30
const FEED_DAILY_LIMIT = 3

const PET_STAGES = [
  { minLevel: 1, name: '幼年期', title: '小小冒险家', desc: '刚来到冒险岛的小毛球，需要多多学习才能长大', dogEmoji: '🐶', catEmoji: '🐱' },
  { minLevel: 4, name: '少年期', title: '勇敢探险家', desc: '翅膀变硬啦（虽然猫狗都没有翅膀）', dogEmoji: '🐕', catEmoji: '🐈' },
  { minLevel: 8, name: '成年期', title: '岛屿守护者', desc: '可以独当一面，守护岛上的小伙伴们', dogEmoji: '🦮', catEmoji: '🐈‍⬛' },
  { minLevel: 12, name: '传说期', title: '岛之传说', desc: '觉醒远古血脉，戴上传说皇冠', dogEmoji: '🐕‍🦺', catEmoji: '🦁' },
]

const STORY_UNLOCK_LEVELS = [1, 2, 4, 6, 8, 10, 12, 15]

const STORY_BOOK_TITLE = { dog: '旺旺冒险记', cat: '喵喵奇遇记' }

const PET_NAME_SUGGESTIONS = {
  dog: ['旺旺', '棉花糖', '小煤球', '饼干', '豆豆'],
  cat: ['喵喵', '糯米', '小橘子', '雪球', '布丁'],
}

function petLevelOf(exp) {
  let lv = 1
  for (let i = 0; i < PET_LEVEL_EXP.length; i++) {
    if (exp >= PET_LEVEL_EXP[i]) lv = i + 1
  }
  return Math.min(lv, PET_MAX_LEVEL)
}

function petLevelProgress(exp) {
  const level = petLevelOf(exp)
  if (level >= PET_MAX_LEVEL) return { level: level, cur: 0, need: 0, pct: 1 }
  const base = PET_LEVEL_EXP[level - 1]
  const next = PET_LEVEL_EXP[level]
  return { level: level, cur: exp - base, need: next - base, pct: Math.min(1, (exp - base) / (next - base)) }
}

function petStageOf(level) {
  let stage = PET_STAGES[0]
  PET_STAGES.forEach(function (s) {
    if (level >= s.minLevel) stage = s
  })
  return stage
}

function petEmoji(kind, level) {
  const stage = petStageOf(level)
  return kind === 'dog' ? stage.dogEmoji : stage.catEmoji
}

function moodLabel(mood) {
  if (mood >= 85) return { text: '开心得转圈圈！', emoji: '💕' }
  if (mood >= 60) return { text: '心情不错，想出去探险～', emoji: '😊' }
  if (mood >= 40) return { text: '有点想小主人了……', emoji: '🙂' }
  return { text: '想吃点小零食提提神', emoji: '🥺' }
}

function storyUnlockLevel(index) {
  return STORY_UNLOCK_LEVELS[index - 1] || PET_MAX_LEVEL
}

function petExpForLevelStars(stars) {
  if (stars >= 3) return PET_EXP.level3Star
  if (stars === 2) return PET_EXP.level2Star
  if (stars === 1) return PET_EXP.level1Star
  return PET_EXP.failComfort
}

// ---------- 专属剧情（与网页版 pet-stories.ts 完全一致） ----------
const PET_STORIES = {
  dog: [
    {
      id: 'dog-1', index: 1, title: '小小的开始', lines: [
        { who: '旁白', emoji: '🏝️', text: '清晨的冒险岛，海浪轻轻拍着沙滩。一个小纸箱被冲上了岸，箱子里传出"呜呜"的声音。' },
        { who: '旁白', emoji: '📦', text: '你轻轻打开箱子——一只毛茸茸的小奶狗探出头，尾巴摇得像小风车！' },
        { who: '旺旺', emoji: '🐶', text: '汪！你好呀，我的小主人！我叫旺旺，是来陪你一起冒险的！' },
        { who: '旺旺', emoji: '🐶', text: '听说冒险岛上藏着好多好多秘密，可是我年纪太小，还需要慢慢长大。' },
        { who: '旺旺', emoji: '🐶', text: '小主人，你每完成一次学习任务，我就能获得力量哦！我们一起加油吧！' },
        { who: '旁白', emoji: '🌅', text: '从今天起，旺旺就是你在冒险岛上第一个伙伴啦！' },
      ],
    },
    {
      id: 'dog-2', index: 2, title: '海边的约定', lines: [
        { who: '旁白', emoji: '🏖️', text: '傍晚散步时，旺旺突然对着一块礁石"汪汪"直叫——那里有一只迷路的小海龟！' },
        { who: '小海龟', emoji: '🐢', text: '呜呜……我找不到回大海的路了，天黑之前我回不去，妈妈会着急的。' },
        { who: '旺旺', emoji: '🐶', text: '别怕别怕！我的小主人最会解决问题了，就像做难题一样，一步一步来！' },
        { who: '旁白', emoji: '🌙', text: '你们沿着月光的方向，绕过三块大石头，终于听到了海浪的声音。' },
        { who: '小海龟', emoji: '🐢', text: '谢谢你们！旺旺，你和你小主人的友谊真让人羡慕，这是我见过最亮的光！' },
        { who: '旺旺', emoji: '🐶', text: '汪！我好像又长大了一点点！帮助别人的感觉，比追自己的尾巴还开心！' },
      ],
    },
    {
      id: 'dog-3', index: 3, title: '彩虹果园', lines: [
        { who: '旁白', emoji: '🌈', text: '传说彩虹的尽头有一座果园，果树上结着七种颜色的彩虹果实，吃一颗就能变聪明。' },
        { who: '旺旺', emoji: '🐶', text: '小主人快看！果树下有一位老树精爷爷，他在守护果园呢。' },
        { who: '老树精', emoji: '🌳', text: '嘿嘿，想吃彩虹果实？可以！但我的果子只送给爱动脑筋的孩子——先回答我三个问题！' },
        { who: '旁白', emoji: '🍃', text: '老树精的问题一道比一道有趣，你皱着眉头认真思考，旺旺在旁边"呜呜"地为你加油。' },
        { who: '老树精', emoji: '🌳', text: '答得好！答得好！记住喽——脑筋越用越灵活，就像我的树枝越修剪越茂盛！' },
        { who: '旺旺', emoji: '🐶', text: '小主人，原来学习真的有用！你看，我的耳朵好像都变灵了，能听见远处的海鸥！' },
        { who: '旁白', emoji: '🍎', text: '你们一人捧着一颗彩虹果实，甜滋滋的味道里，藏着一股越来越聪明的暖流。' },
      ],
    },
    {
      id: 'dog-4', index: 4, title: '萤火虫之夜', lines: [
        { who: '旁白', emoji: '🌙', text: '夏夜的探险走得太远，月亮爬到了头顶——你和旺旺在黑漆漆的树林里迷路了。' },
        { who: '旺旺', emoji: '🐶', text: '小主人……别怕，我在呢！虽然……虽然我的尾巴也有点发抖。' },
        { who: '旁白', emoji: '✨', text: '就在这时，一只萤火虫飞了过来，尾巴上亮着小小的绿灯笼。' },
        { who: '萤火虫', emoji: '🐝', text: '别怕，小朋友。黑夜虽然大，但只要一直朝着亮的方向走，就一定走得出去。' },
        { who: '旁白', emoji: '🌟', text: '一只、两只、一百只……萤火虫汇成了一条流动的星河，照亮了回家的小路。' },
        { who: '旺旺', emoji: '🐶', text: '哇——小主人你看！我们就像做数学题一样，一步一步，总能找到答案！' },
        { who: '旁白', emoji: '🏠', text: '回到小木屋，你给旺旺倒了一碗温热的骨头汤。旺旺打了个饱嗝，睡得特别香。' },
      ],
    },
    {
      id: 'dog-5', index: 5, title: '岛屿运动会', lines: [
        { who: '旁白', emoji: '🏟️', text: '一年一度的岛屿运动会开幕啦！跑道上站满了小动物，旺旺代表狗狗队出战飞盘赛！' },
        { who: '小猫', emoji: '🐱', text: '喵～狗狗队，你们可别输得太惨哦！我们猫队的"闪电尾巴"可是三连冠！' },
        { who: '旺旺', emoji: '🐶', text: '哼哼，比赛最重要的是尽力！小主人教过我：每天进步一点点，就是最棒的胜利！' },
        { who: '旁白', emoji: '🥏', text: '飞盘划过天空！旺旺像一道棕色的闪电冲出去——踩水坑、跳栅栏、一个漂亮的转身接住！' },
        { who: '旁白', emoji: '🏅', text: '最终，狗狗队和猫队只差了半分。裁判宣布：并列冠军！' },
        { who: '旺旺', emoji: '🐶', text: '小主人，快看小猫队的表情——它们也笑得好开心！原来一起努力过的对手，就是朋友呀！' },
      ],
    },
    {
      id: 'dog-6', index: 6, title: '神秘洞穴', lines: [
        { who: '旁白', emoji: '🕳️', text: '岛的北面有一个神秘的洞穴，据说里面藏着海盗留下的宝藏。洞口刻着一行字："只有合作才能通过。"' },
        { who: '旺旺', emoji: '🐶', text: '汪汪！我的鼻子可灵了，负责找路；小主人你脑子最灵，负责解开石门上的谜题！' },
        { who: '旁白', emoji: '🔦', text: '洞穴深处，一面石墙上写着一道古老的谜语。你念出答案的那一刻，石门"轰隆隆"打开了。' },
        { who: '旺旺', emoji: '🐶', text: '小主人你太厉害了！你怎么什么都会呀！' },
        { who: '旁白', emoji: '💎', text: '洞穴尽头的宝箱里没有金币，只有一面小小的镜子——镜子里，是你和旺旺笑得亮晶晶的眼睛。' },
        { who: '旁白', emoji: '📖', text: '镜子上刻着一行小字："最珍贵的宝藏，是一路学会的本领。"' },
        { who: '旺旺', emoji: '🐶', text: '嗯！宝藏就是小主人学到的每一个知识！全都装在我们心里，谁也偷不走！' },
      ],
    },
    {
      id: 'dog-7', index: 7, title: '风暴救援', lines: [
        { who: '旁白', emoji: '⛈️', text: '风暴夜的雨点噼里啪啦砸在屋顶上。突然，旺旺竖起耳朵——风里传来微弱的"叽叽"声！' },
        { who: '旺旺', emoji: '🐶', text: '是雏鸟的声音！它一定是从树上被吹下来的！小主人，快带上雨伞，我们去救它！' },
        { who: '旁白', emoji: '🌧️', text: '你们顶着风雨，在灌木丛里找到了浑身湿透的小雏鸟，把它捧回了温暖的木屋。' },
        { who: '旁白', emoji: '🔥', text: '炉火旁，小雏鸟慢慢睁开眼睛，翅膀上的羽毛在暖光里闪着新生的光泽。' },
        { who: '雏鸟', emoji: '🐦', text: '谢谢你们……大家平时都说我太小、什么都不会。原来小小的身体里，也能有大大的勇敢。' },
        { who: '旺旺', emoji: '🐶', text: '当然啦！每个小家伙都在长大，就像小主人每天做题、每天进步一样，没有人是小小的！' },
        { who: '旁白', emoji: '🌈', text: '第二天清晨，雨过天晴。小雏鸟飞上蓝天，在你们头顶转了三圈——那是鸟儿的敬礼！' },
      ],
    },
    {
      id: 'dog-8', index: 8, title: '传说之星', lines: [
        { who: '旁白', emoji: '🌌', text: '岛上的老人们说：当传说之星亮起，就会有新的"岛之传说"诞生。而今晚，天上的星星格外亮。' },
        { who: '旁白', emoji: '⭐', text: '一颗流星缓缓落下，悬停在海面上空——那是传说之星，它在寻找配得上它的人。' },
        { who: '海岛长老', emoji: '🧙', text: '旺旺和它的小主人，你们帮助过海龟、点亮过黑夜、守护过雏鸟……这颗星，属于你们！' },
        { who: '旺旺', emoji: '🐕‍🦺', text: '汪汪！！小主人，你摸摸我的头——我是不是变得又高又壮了！' },
        { who: '旺旺', emoji: '🐕‍🦺', text: '这一路，是你每天的学习给了我力量，是每一次勇敢的尝试让我长大。谢谢你，小主人！' },
        { who: '旁白', emoji: '👑', text: '传说之星落在旺旺的头顶，变成了一顶闪闪发光的小皇冠。从此，冒险岛的故事里多了一个名字——' },
        { who: '旁白', emoji: '🏆', text: '"旺旺船长与它的小主人"！而这个故事，还在继续……因为学习之路，永远有新的冒险！' },
      ],
    },
  ],
  cat: [
    {
      id: 'cat-1', index: 1, title: '月夜来客', lines: [
        { who: '旁白', emoji: '🌙', text: '满月的夜晚，一朵云轻轻飘进你的窗台。云上蜷着一只小奶猫，胡须上还挂着亮晶晶的月露。' },
        { who: '喵喵', emoji: '🐱', text: '喵呜～你好呀。我叫喵喵，是乘着月光小船来的。月亮婆婆说，岛上有个很爱学习的孩子。' },
        { who: '喵喵', emoji: '🐱', text: '我的尾巴上有一个小铃铛，只有认真学习的日子，它才会"叮铃叮铃"地响——那是魔法的声音哦。' },
        { who: '旁白', emoji: '🔔', text: '你轻轻碰了碰铃铛，"叮铃——"一声清脆的响声飞出窗外，夜空里的星星眨了眨眼。' },
        { who: '喵喵', emoji: '🐱', text: '从今晚开始，我就是你的魔法小伙伴啦！记住哦，你的每一次努力，都会变成我的魔法粉末！' },
        { who: '旁白', emoji: '✨', text: '月亮婆婆在天上微笑着。冒险岛的故事，从这一个神奇的夜晚开始了。' },
      ],
    },
    {
      id: 'cat-2', index: 2, title: '月亮井的秘密', lines: [
        { who: '旁白', emoji: '🪣', text: '岛心广场有一口古老的月亮井。井边坐着一只小狐狸，正对着井口发呆。' },
        { who: '小狐狸', emoji: '🦊', text: '呜……我把奶奶给我的银币掉进井里了，那是我最珍贵的东西。' },
        { who: '喵喵', emoji: '🐱', text: '别哭别哭！听说月亮井会在满月之夜归还诚实孩子丢失的东西。我们来想办法！' },
        { who: '旁白', emoji: '🌙', text: '喵喵趴在井口，尾巴上的铃铛轻轻一晃——井水里升起一轮小小的月亮，银币顺着月光浮了上来！' },
        { who: '喵喵', emoji: '🐱', text: '看！这就是魔法的力量。不过小狐狸，月亮婆婆悄悄告诉我：魔法的燃料，是你小主人每天的学习哦。' },
        { who: '小狐狸', emoji: '🦊', text: '哇，原来认真做作业这么厉害！我以后也要好好学习，攒好多好多"魔法燃料"！' },
      ],
    },
    {
      id: 'cat-3', index: 3, title: '猫头鹰图书馆', lines: [
        { who: '旁白', emoji: '📚', text: '老橡树的高处藏着一座只在深夜开放的图书馆——猫头鹰图书馆，馆长是一位戴着圆眼镜的猫头鹰博士。' },
        { who: '猫头鹰博士', emoji: '🦉', text: '呼呼～欢迎欢迎！本馆的每一本书里都封印着一个魔法咒语，只有读懂它的孩子才能念出来。' },
        { who: '喵喵', emoji: '🐱', text: '小主人，快看那本发光的书！书页上的字排成了螺旋，好像在跳舞！' },
        { who: '旁白', emoji: '📖', text: '你一字一句认真地读，突然，书里的文字化作金色的光点，在空中组成了一道发光的门！' },
        { who: '猫头鹰博士', emoji: '🦉', text: '妙啊！孩子，记住：知识就是世界上最稳当的魔法——它不用咒语杖，只装在脑子里，谁也拿不走。' },
        { who: '喵喵', emoji: '🐱', text: '喵～我的铃铛响得停不下来啦！小主人，你的"魔法能量"快满出来咯！' },
      ],
    },
    {
      id: 'cat-4', index: 4, title: '星星灯塔', lines: [
        { who: '旁白', emoji: '🗼', text: '海岬上有一座老灯塔，灯塔爷爷已经很久很久没有点亮它了——传说只有"收集星星的人"才能重新点亮。' },
        { who: '喵喵', emoji: '🐱', text: '灯塔爷爷，别难过！我的小主人收集了很多很多"星星"——每答对一道题就是一颗！' },
        { who: '灯塔爷爷', emoji: '👴', text: '呵呵，是吗？那么孩子，把你们的星星放进塔顶的星槽里试试吧。' },
        { who: '旁白', emoji: '⭐', text: '金色的星星一颗颗飞进星槽，"咔哒"一声——整座灯塔"轰"地亮了起来，光柱直冲云霄！' },
        { who: '灯塔爷爷', emoji: '👴', text: '亮了！亮了！海上迷航的小船又能找到回家的路了！谢谢你们，收集星星的孩子！' },
        { who: '喵喵', emoji: '🐱', text: '小主人你看，你学的每一个知识，都在悄悄照亮别人呢——这大概就是最了不起的魔法吧！' },
      ],
    },
    {
      id: 'cat-5', index: 5, title: '风筝节', lines: [
        { who: '旁白', emoji: '🪁', text: '春分这天是冒险岛的风筝节。山坡上开满了野花，天空中飘着章鱼风筝、凤凰风筝，还有一条百米长的龙！' },
        { who: '喵喵', emoji: '🐱', text: '小主人，我们做了一个月亮形状的风筝！可是……它怎么才能飞得比龙还高呀？' },
        { who: '旁白', emoji: '🍃', text: '你仔细观察风的方向，记起科学课上学过的知识：逆风跑，放线，再收线，一点点把风筝"牵"上天。' },
        { who: '旁白', emoji: '🌤️', text: '月亮风筝越飞越高，越飞越稳，最后稳稳地停在了所有风筝的最上头，像给天空别了一枚银色的发卡！' },
        { who: '大象裁判', emoji: '🐘', text: '本届风筝节冠军——月亮风筝！它的主人不仅手艺好，还最懂风儿的脾气！' },
        { who: '喵喵', emoji: '🐱', text: '喵嘿嘿～小主人，你看，课堂上学的本领，连风儿都愿意帮忙呢！' },
      ],
    },
    {
      id: 'cat-6', index: 6, title: '时光花园', lines: [
        { who: '旁白', emoji: '🌸', text: '森林深处有一座时光花园，园里的花有个奇怪的名字——记忆之花。据说只有努力过的日子才能种出花来。' },
        { who: '喵喵', emoji: '🐱', text: '小主人，这里有一块空空的花园牌，上面写着："留给最努力的孩子。"' },
        { who: '旁白', emoji: '🌱', text: '你把手掌轻轻按在园土上——那些认真读书的清晨、坚持练题的夜晚，化作一粒粒光种子，落进土里。' },
        { who: '旁白', emoji: '🌷', text: '光种子发芽、拔节、开花！转眼间，空空的花园开满了五颜六色的记忆之花，每一朵都亮晶晶的。' },
        { who: '喵喵', emoji: '🐱', text: '哇……小主人，每一朵花都是你努力过的证明呀！我数数……一朵、两朵……好多好多！' },
        { who: '旁白', emoji: '💐', text: '时光花园的主人——一只超大的树懒园丁，慢吞吞地说："恭喜你们，这些花，会永远开在这里。"' },
      ],
    },
    {
      id: 'cat-7', index: 7, title: '暗夜魔法', lines: [
        { who: '旁白', emoji: '🌑', text: '这一夜发生了罕见的月蚀——月亮婆婆被阴影一点点吞掉，岛上的魔法变得不稳定起来。' },
        { who: '喵喵', emoji: '🐱', text: '小主人，不好了！没有月光，我的铃铛魔法要失灵了！呜呜……' },
        { who: '旁白', emoji: '🕯️', text: '你想了想，点起小蜡烛，拿出白天学过的知识，一项一项帮喵喵梳理还能用的"备用魔法"。' },
        { who: '旁白', emoji: '💫', text: '神奇的事情发生了——你冷静思考的样子，让喵喵尾巴上的铃铛自己亮了起来，越亮越强！' },
        { who: '喵喵', emoji: '🐈‍⬛', text: '喵呜——！小主人，我感觉到了！我的身体里涌出一股新魔法——远古的暗夜魔法！它只回应沉着的心！' },
        { who: '旁白', emoji: '🌕', text: '暗夜魔法托起一轮小小的光月，月亮婆婆重新钻出了阴影。满月清辉洒满全岛，为你和喵喵镀上一层银光。' },
        { who: '喵喵', emoji: '🐈‍⬛', text: '原来最厉害的魔法不是铃铛，是遇到困难不慌张、动脑筋解决它的心呀！' },
      ],
    },
    {
      id: 'cat-8', index: 8, title: '九命传说', lines: [
        { who: '旁白', emoji: '🌟', text: '时光飞逝。这一晚，月亮婆婆亲自下凡，把一束月光披在了喵喵的背上。' },
        { who: '月亮婆婆', emoji: '🌕', text: '喵喵，你陪伴小主人走过了一千多个努力的日子。现在，唤醒你血脉里的远古力量吧！' },
        { who: '旁白', emoji: '🦁', text: '金光中，喵喵的鬃毛迎风扬起——它觉醒了远古巨猫的血脉，威风凛凛，又温柔依旧。' },
        { who: '喵喵', emoji: '🦁', text: '喵——！小主人，你看我！可是不管我变得多大、多厉害，我都是你一个人的喵喵！' },
        { who: '喵喵', emoji: '🦁', text: '这一路，是你每天的学习变成了我的魔法粉末，是我尾巴上的铃铛记住了我们所有的故事。' },
        { who: '月亮婆婆', emoji: '🌕', text: '从今往后，冒险岛的夜空会多一颗"喵喵星"，守护每一个认真学习的孩子。' },
        { who: '旁白', emoji: '✨', text: '而你和喵喵都知道：真正的传说，不是魔法，是每一天都不放弃的自己。新的冒险，明天继续！' },
      ],
    },
  ],
}

module.exports = {
  PET_LEVEL_EXP: PET_LEVEL_EXP,
  PET_MAX_LEVEL: PET_MAX_LEVEL,
  PET_EXP: PET_EXP,
  MOOD_DECAY_PER_DAY: MOOD_DECAY_PER_DAY,
  MOOD_MIN: MOOD_MIN,
  MOOD_MAX: MOOD_MAX,
  FEED_COST: FEED_COST,
  FEED_MOOD: FEED_MOOD,
  FEED_DAILY_LIMIT: FEED_DAILY_LIMIT,
  PET_STAGES: PET_STAGES,
  STORY_UNLOCK_LEVELS: STORY_UNLOCK_LEVELS,
  STORY_BOOK_TITLE: STORY_BOOK_TITLE,
  PET_NAME_SUGGESTIONS: PET_NAME_SUGGESTIONS,
  PET_STORIES: PET_STORIES,
  petLevelOf: petLevelOf,
  petLevelProgress: petLevelProgress,
  petStageOf: petStageOf,
  petEmoji: petEmoji,
  moodLabel: moodLabel,
  storyUnlockLevel: storyUnlockLevel,
  petExpForLevelStars: petExpForLevelStars,
}
