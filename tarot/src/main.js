const cards = [
  { id: 0, roman: '0', zh: '愚者', en: 'The Fool', glyph: '✦', theme: '启程 · 信任未知', color: '#d9ad63', keywords: ['自由', '冒险', '新生', '直觉'], essence: '愚者站在世界的边缘，行囊很轻，心却装着未命名的可能。它不是鲁莽，而是一种愿意先迈出脚步、再让道路显现的勇气。', upright: '此刻适合把自己从旧叙事里松开。新的机会、旅程或关系正在靠近，你不必等到所有条件都完美才开始。保持好奇，听见身体与直觉的微小兴奋；但给冲动留一盏理性的灯，先确认底线与安全感。', reversed: '你可能正把“随缘”当作逃避准备，或因害怕失败而迟迟不肯出发。也要留意过度理想化、承诺过多、忽略风险的倾向。真正的自由不是没有边界，而是知道自己愿意为哪一种选择负责。', action: '为接下来七天安排一次低风险的新尝试：一封邮件、一条路线、一个作品草稿。只设定“开始”的目标，不要求立刻证明结果。', reflection: '如果没有人评价你，这一步仍然值得走吗？你真正害怕的是未知，还是别人眼中的不成熟？' },
  { id: 1, roman: 'I', zh: '魔术师', en: 'The Magician', glyph: '∞', theme: '显化 · 意志成形', color: '#e9c47b', keywords: ['专注', '表达', '资源', '行动'], essence: '魔术师将天上的意念落到桌面上的工具，提醒你：你拥有的资源比想象中更多，关键在于把分散的能量聚成一个清晰的动作。', upright: '这是主动沟通、启动项目、展示才华的好时机。你的表达具有穿透力，手边已有足够材料完成第一版。先做出可见的雏形，再根据真实反馈迭代，不要让“还不够好”把力量锁在脑中。', reversed: '注意操控、夸大能力或言行不一致。你也许懂得很多方法，却把注意力分散在太多目标上。与其追求让所有人惊叹，不如诚实说明你能交付什么，并为承诺建立清晰边界。', action: '把一个愿望改写成“今天可以完成的 30 分钟动作”，并在结束时留下可见成果。', reflection: '你正在使用自己的能力创造，还是用能力证明自己值得被看见？' },
  { id: 2, roman: 'II', zh: '女祭司', en: 'The High Priestess', glyph: '☾', theme: '聆听 · 潜意识之门', color: '#b9b9dc', keywords: ['直觉', '秘密', '静默', '洞察'], essence: '女祭司坐在两根柱子之间，守护着尚未说出口的答案。她邀请你暂时离开喧闹，以更细腻的感知辨认内在的声音。', upright: '答案正在沉淀，而非催促你立即表态。观察梦境、身体反应、重复出现的线索与未被说出的情绪。适合研究、保留、等待一个更准确的时机；少一些解释，多一些聆听，你会知道什么是真的。', reversed: '可能是信息过载、忽略直觉，或让秘密与猜测替代了真实沟通。不要因为“感觉不对”就自行补完故事。给沉默一个期限，然后用温和而直接的问题换取清晰。', action: '今晚留出 15 分钟不接收任何输入，把最困扰你的问题写下，再写下第一瞬间的答案。', reflection: '当所有外界声音消失后，你最不愿承认的那句话是什么？' },
  { id: 3, roman: 'III', zh: '皇后', en: 'The Empress', glyph: '♀', theme: '丰盛 · 滋养生长', color: '#e8a9b7', keywords: ['创造', '感受', '丰盛', '照料'], essence: '皇后的力量来自滋养：让身体、关系与创意拥有可持续生长的土壤。她不是用力催促，而是把美好照料到自然发生。', upright: '丰盛正在通过感官与关系进入生活。适合创作、休息、布置空间、照顾身体，也适合接受帮助与赞美。你的温柔并不削弱效率，它让长期的成果拥有更稳的根。', reversed: '你可能在过度付出、用照顾别人换取价值感，或因缺乏休息而感到枯竭。另一面也可能是过度舒适，让灵感停留在想象里。重新划分给予与接受的比例。', action: '把一个重要目标转成日常仪式：一杯水、一小时无打扰创作，或一次真正的休息。', reflection: '你对别人很慷慨，却是否允许自己成为被照料的人？' },
  { id: 4, roman: 'IV', zh: '皇帝', en: 'The Emperor', glyph: '♜', theme: '结构 · 稳定边界', color: '#d88464', keywords: ['秩序', '责任', '边界', '领导'], essence: '皇帝以结构守护疆域。他提醒你，稳定并非僵化，而是让重要的事有清晰的边界、节奏与责任归属。', upright: '现在适合定规则、做决策、建立计划与承担领导责任。把模糊的期待写成可执行的标准，别害怕说“不”。可靠不是控制一切，而是让自己和他人都知道下一步是什么。', reversed: '警惕控制欲、固执、权力失衡与“只有我知道正确答案”的姿态。太紧的结构会压扁生命力；若你正承受外部权威，先识别哪些规则真正服务于你。', action: '建立一个只包含三条原则的边界清单，并在一个具体场景中清晰表达。', reflection: '你建立秩序，是为了保护重要之物，还是为了不让任何意外靠近？' },
  { id: 5, roman: 'V', zh: '教皇', en: 'The Hierophant', glyph: '✚', theme: '传承 · 价值共识', color: '#d4c17a', keywords: ['传统', '导师', '信念', '学习'], essence: '教皇连接个人经验与更大的传统，提醒你从可靠的系统、老师与共同体中借来一座桥，同时保留自己的判断。', upright: '适合拜师、学习、加入组织、确认长期价值观，也适合把经验整理成方法分享给别人。你不必独自摸索，正确的指导会显著减少消耗。', reversed: '某种权威、传统或集体期待可能已不再适合你。不要为了被接纳而背叛内心，也不要因为反叛而否定一切经验。你需要的是重新定义自己的信念体系。', action: '寻找一位在该领域真正走过路的人，带着一个具体问题去请教，而不是泛泛求答案。', reflection: '你遵循的原则，是亲自验证过的，还是只因为从小被这样教导？' },
  { id: 6, roman: 'VI', zh: '恋人', en: 'The Lovers', glyph: '♡', theme: '选择 · 真诚连接', color: '#edb4a3', keywords: ['关系', '选择', '价值', '共鸣'], essence: '恋人不仅指爱情，更指一次基于价值与诚实的选择。当你不再把自己拆成互相讨好的两半，连接才会真正发生。', upright: '一段关系、合作或重要决定正在要求你诚实。听见彼此真正的需要，选择让行动与价值观一致的方向。吸引力很强，但长久的答案来自相互尊重与共同承担。', reversed: '可能有犹豫、投射、暧昧或为了不失去关系而放弃自我。别把化学反应误认成兼容，也别用“再等等”拖延已经知道的选择。', action: '写下这段关系或选择中你绝不愿牺牲的三项价值，并据此进行一次坦诚对话。', reflection: '如果不需要被选择，你会怎样选择自己？' },
  { id: 7, roman: 'VII', zh: '战车', en: 'The Chariot', glyph: '✧', theme: '驾驭 · 意志前行', color: '#8ec8c8', keywords: ['胜利', '方向', '纪律', '推进'], essence: '战车由两股不同力量驱动，胜利不来自消灭冲突，而来自你能否为它们设定共同方向。', upright: '推进会带来突破。你需要目标感、节奏与自我纪律，把情绪与行动放到同一辆车上。外界可能很嘈杂，但只要方向清楚，短期的阻力会变成速度的燃料。', reversed: '能量分散、急于证明、失去方向或让情绪掌舵。此时继续加速只会把偏差放大。先停下来校准目标，再决定是否需要更强的力量。', action: '今天只选一个主战场，写出“做到什么算完成”，并把第一步安排进日历。', reflection: '你想赢下的到底是什么：目标本身，还是不想被看轻的感觉？' },
  { id: 8, roman: 'VIII', zh: '力量', en: 'Strength', glyph: '☼', theme: '柔韧 · 驯服内在', color: '#f0c86c', keywords: ['勇气', '耐心', '慈悲', '自信'], essence: '力量牌中的手与狮子没有搏斗，真正的勇气是能够以温柔接近自己的本能、恐惧与欲望。', upright: '你拥有比想象中更稳定的耐心与恢复力。以柔克刚会比强行压制更有效，尤其在关系与长期目标里。相信持续的小动作，胜过一次情绪化的爆发。', reversed: '可能是自我怀疑、情绪压抑，或把强硬误认为坚定。不要用羞耻驱动自己，也别把疲惫当作软弱。承认需要帮助，本身就是力量的一种形式。', action: '在冲突里先做三次缓慢呼吸，再说出事实、感受与请求，而不是直接评判。', reflection: '你对自己最难温柔的那一部分，正在试图保护什么？' },
  { id: 9, roman: 'IX', zh: '隐者', en: 'The Hermit', glyph: '⌁', theme: '独处 · 内在灯火', color: '#b9c0d8', keywords: ['反思', '独处', '智慧', '寻找'], essence: '隐者提着一盏只照亮脚下的灯。答案不在远处的喧哗，而在你愿意独自走一小段、重新听见自己脚步的时刻。', upright: '适合退一步、做深度思考、研究与整理经验。不是消失，而是暂时减少外部噪音，让内在形成自己的坐标。你的洞察可能也会成为别人正在寻找的灯。', reversed: '孤立、过度分析、拒绝帮助或把“独处”变成逃避连接。你不必在所有事情上独自摸索，适度让可信的人知道你正在经历什么。', action: '安排一次不被打扰的散步或书写，把“别人怎么看”从问题里暂时拿走。', reflection: '你需要的是更多答案，还是允许自己诚实地停下来？' },
  { id: 10, roman: 'X', zh: '命运之轮', en: 'Wheel of Fortune', glyph: '◌', theme: '转机 · 周期流动', color: '#a9d0ae', keywords: ['变化', '时机', '循环', '机会'], essence: '命运之轮提醒你，人生并非静态答案，而是不断变化的气候。你无法控制所有风向，却可以练习在风起时调整帆。', upright: '旧周期正在转动，意外的机会或新的窗口值得留意。顺势不等于被动，而是快速辨认变化、放下已经结束的执着。好消息会带着一点不确定性一起到来。', reversed: '重复模式、错失时机或过度把结果归咎于运气。你可能还在用旧方式回应新局面。先找出自己能影响的那一小部分，再等待轮盘下一次转动。', action: '列出当前局势中三件可控之事，并在 48 小时内完成其中一件。', reflection: '这次变化是打断了你的计划，还是在替你结束一个已经过期的章节？' },
  { id: 11, roman: 'XI', zh: '正义', en: 'Justice', glyph: '⚖', theme: '清醒 · 因果平衡', color: '#d9c4ad', keywords: ['真相', '公平', '决定', '责任'], essence: '正义的秤不承诺让所有人满意，只承诺让事实、责任与选择彼此对应。清晰往往来自愿意看见全部代价。', upright: '适合签约、评估、谈判、复盘与做出理性决定。把事实与情绪分别写下，你会发现真正的重点。承担自己的部分，同时要求关系与规则保持对等。', reversed: '偏见、逃避责任、信息不完整或对自己过于严苛。不要用一个局部结果定义全部价值，也不要为了赢一场争论扭曲事实。', action: '把一个纠结的问题拆成“事实 / 感受 / 可承担后果”三列，再做决定。', reflection: '如果你必须对自己和对方同样诚实，答案会改变吗？' },
  { id: 12, roman: 'XII', zh: '倒吊人', en: 'The Hanged Man', glyph: '▽', theme: '暂停 · 换位观看', color: '#a6c5d7', keywords: ['等待', '放下', '视角', '牺牲'], essence: '倒吊人不是失败，而是主动暂停旧动作，让世界在一个不同的角度里重新排列。某些答案只能在“不再强求”之后出现。', upright: '暂缓推进反而有助于突破。放下一个执念、旧身份或必须立刻得到的答案，你会获得新的视角。把等待当作有意识的观察，而不是无力的停滞。', reversed: '你可能在无意义地拖延，或把受困感包装成牺牲。问问自己：这段停顿是否带来理解？如果没有，就需要重新选择一个行动。', action: '对一个卡住的问题，尝试写出三种与原立场相反的解释，再决定是否继续原路。', reflection: '你紧抓不放的东西，是否正是阻挡你获得新视角的重量？' },
  { id: 13, roman: 'XIII', zh: '死神', en: 'Death', glyph: '✺', theme: '蜕变 · 旧章终结', color: '#bd90a9', keywords: ['结束', '转化', '告别', '重生'], essence: '死神不是灾难的预言，而是不可逆的换季。旧形式正在完成它的工作，新的生命需要空间才能进入。', upright: '一个周期即将结束，越早承认结束，越能减少消耗。关系、习惯、身份或工作方式可能需要彻底更新。允许悲伤存在，但不要把告别误认成失去全部希望。', reversed: '抗拒变化、反复回到旧模式，或提前恐惧一个尚未发生的终点。你不需要一次性斩断所有东西，但需要诚实地承认：旧方式已经无法把你带到新位置。', action: '清理一个象征旧阶段的物品、承诺或文件，并写下你想为新阶段保留的核心品质。', reflection: '如果你确定会被更好的生活接住，你愿意今天放下什么？' },
  { id: 14, roman: 'XIV', zh: '节制', en: 'Temperance', glyph: '◒', theme: '调和 · 恢复流动', color: '#d9b97a', keywords: ['平衡', '疗愈', '融合', '耐心'], essence: '节制把两只杯中的水持续调和，提醒你真正的平衡不是静止，而是让不同的部分不断交换、校准与共存。', upright: '适合修复、协调、整合资源与建立可持续节奏。不要用极端方案解决暂时的不适；温和的调整会在一段时间后显出力量。关系里也适合寻找双方都能呼吸的方式。', reversed: '失衡、过度、急于求成或把冲突压回水面之下。注意生活里的某个“太多”或“太少”，从最小的日常习惯开始修复。', action: '挑一个过量或匮乏的习惯，做一个只改变 10% 的微调，坚持三天再观察。', reflection: '你想要的是真正的平衡，还是暂时不感到不舒服？' },
  { id: 15, roman: 'XV', zh: '恶魔', en: 'The Devil', glyph: '♄', theme: '欲望 · 看见枷锁', color: '#d87575', keywords: ['依附', '诱惑', '阴影', '觉察'], essence: '恶魔牌把锁链放在明处：束缚或许真实，但很多锁链并没有锁上。看见自己如何参与其中，选择才重新出现。', upright: '某种欲望、依赖、执念或权力交换正在占据过多空间。不要急着羞辱自己，先诚实看见它给了你什么、拿走了什么。清晰的觉察是脱离的第一步。', reversed: '你正在松开一个循环，或已经意识到自己不再愿意继续交换。也可能只是把阴影推开、假装一切没事。真正的释放需要可执行的边界与支持。', action: '记录一个反复发生的模式：触发点、即时奖励、长期代价，并找一个更小的替代动作。', reflection: '你口中的“我没办法”，里面是否藏着一项你不愿承担的选择？' },
  { id: 16, roman: 'XVI', zh: '高塔', en: 'The Tower', glyph: '⚡', theme: '突变 · 真相显现', color: '#df8768', keywords: ['突破', '崩塌', '真相', '重建'], essence: '高塔击碎的是建立在虚假安全感上的结构。震动令人不安，却也让你不必再为一座已经空心的房子继续加固。', upright: '某个意外会迫使真相浮出水面。与其维持表面的完整，不如把注意力放在保护核心、清理残骸与重建基础。你失去的可能只是不能继续承载你的形式。', reversed: '你可能在延迟必然的改变，或把恐惧放大成灾难。先区分真正的危险与想象中的失控，提前准备撤离路径，能让变化更有尊严。', action: '为最坏情境写一页应对方案，再回到眼前能做的第一件保护性动作。', reflection: '哪一个“稳定”其实已经让你无法继续成长？' },
  { id: 17, roman: 'XVII', zh: '星星', en: 'The Star', glyph: '✷', theme: '希望 · 重新相信', color: '#a8d6e8', keywords: ['疗愈', '愿景', '灵感', '信任'], essence: '星星在水面上同时倒入土地与河流，意味着希望既要照顾内在，也要流向现实。你可以柔软，同时继续前行。', upright: '疗愈、灵感与未来感重新回到你身边。不要小看一个安静而真诚的愿景，它会为接下来的行动提供方向。适合分享创意、恢复身体、建立长期信任。', reversed: '失望、耗竭或只看见当下的黑暗。希望不是强迫自己乐观，而是允许自己先承认伤口，再寻找一件仍然值得保护的小事。', action: '写一封给三个月后自己的信，描述你愿意持续照料的一个愿景。', reflection: '哪一颗微小的星，虽然不喧哗，却仍然在你心里没有熄灭？' },
  { id: 18, roman: 'XVIII', zh: '月亮', en: 'The Moon', glyph: '☽', theme: '朦胧 · 穿越幻象', color: '#9da6d8', keywords: ['梦境', '不确定', '潜意识', '想象'], essence: '月亮照亮的是轮廓而非全貌。它提醒你，恐惧与直觉都可能借用同一种语言，真正的辨认需要时间与事实。', upright: '情绪、梦境与想象力很活跃。适合创作与深入内心，但不要在信息不足时做不可逆的决定。给模糊留空间，同时为自己设置验证线索与时间点。', reversed: '迷雾正在散去，或你已经厌倦被猜测牵着走。把未证实的故事与已发生的事实分开，你会重新取回判断力。', action: '把一个担忧写成“我知道的 / 我猜测的 / 我可以验证的”，今天验证其中一项。', reflection: '你害怕的画面，是现实发出的信号，还是过去经验投下的影子？' },
  { id: 19, roman: 'XIX', zh: '太阳', en: 'The Sun', glyph: '☀', theme: '明朗 · 生命绽放', color: '#f3cb5f', keywords: ['喜悦', '成功', '真诚', '活力'], essence: '太阳让一切无需隐藏。它不是永不阴天，而是在看清自己之后，愿意以真实而温暖的姿态参与生活。', upright: '清晰、成功、被看见与真诚的快乐正在增加。适合展示作品、表达爱、庆祝进展，也适合让身体得到阳光与活动。别把幸福缩小成“还不够完美”。', reversed: '快乐被延迟、过度乐观或因为害怕失去而不敢享受。某个小阴影不等于太阳消失；把期待调回现实，你仍然可以接住当下的光。', action: '主动分享一个真实的好消息，或安排一件只为了快乐而做的事。', reflection: '当你不再需要证明自己，什么会自然地发光？' },
  { id: 20, roman: 'XX', zh: '审判', en: 'Judgement', glyph: '◉', theme: '觉醒 · 回应召唤', color: '#c8a6d9', keywords: ['复盘', '召唤', '宽恕', '重启'], essence: '审判的号角不是惩罚，而是一次清醒的召唤：回看过去，不是为了困住自己，而是为了把经验转成更自由的选择。', upright: '一个长期问题迎来总结与重启。你可能收到重要消息、看见过去的意义，或终于愿意原谅那个曾经只能如此选择的自己。响应内心的召唤，比继续扮演旧角色更重要。', reversed: '自我审判、无法放下旧标签，或因为害怕改变而装作没有听见召唤。复盘应当带来理解，而不是把你永远钉在过去。', action: '写下过去一年最重要的三次选择，以及它们教会你的新能力。', reflection: '如果你相信自己已经有资格开始下一章，你会停止重复哪种旧证明？' },
  { id: 21, roman: 'XXI', zh: '世界', en: 'The World', glyph: '◎', theme: '完成 · 新循环开启', color: '#86c9b8', keywords: ['圆满', '整合', '归属', '完成'], essence: '世界把旅程中的碎片编成一座完整的花环。完成不是终点，而是你终于能带着全部经验，进入下一轮更大的舞蹈。', upright: '阶段性成果值得被承认与庆祝。你正在整合身份、关系与能力，获得一种“回到自己”的归属感。把作品交付、把旅程走完，也为下一次展开留出空间。', reversed: '差最后一步、迟迟不肯收尾，或因为害怕结束而不断增加新任务。完成并不意味着永远完美，而是足够真实、足够完整地交出去。', action: '为一个拖延已久的项目定义“可交付版本”，并在本周完成闭环。', reflection: '什么已经完成，只是你还没有允许自己承认？' },
]

const app = document.querySelector('#app')
app.innerHTML = `
  <div class="app-shell">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>
    <header class="topbar">
      <a class="brand" href="#top" aria-label="星轨塔罗首页">
        <span class="brand-mark"><span>✧</span></span>
        <span><strong>星轨塔罗</strong><small>ARCANA TAROT</small></span>
      </a>
      <a class="home-link" href="../">← Alan的魔术箱</a>
    </header>

    <main id="top">
      <section class="hero-section">
        <div class="hero-copy">
          <p class="eyebrow">THE CELESTIAL READING · 00:00</p>
          <h1>让答案，<em>从星尘里浮现。</em></h1>
          <p class="hero-lead">在牌面翻转的瞬间，为此刻的自己留一束光。一次抽牌，一份只属于你的内在坐标。</p>
          <div class="hero-stats">
            <div><strong>22</strong><span>大阿卡纳</span></div>
            <div><strong>2</strong><span>牌位解读</span></div>
            <div><strong>1</strong><span>此刻提问</span></div>
          </div>
        </div>
        <div class="hero-orbit" aria-hidden="true"><span class="orbit-line orbit-a"></span><span class="orbit-line orbit-b"></span><span class="orbit-star star-a">✦</span><span class="orbit-star star-b">✧</span><span class="orbit-star star-c">·</span></div>
      </section>

      <section class="reading-layout">
        <div class="reading-column">
          <div class="section-kicker"><span>01</span><div><b>准备你的抽牌</b><small>静下心，想一个你愿意诚实面对的问题</small></div></div>
          <div class="scene-card" id="scene-card">
            <div class="scene-topline"><span id="scene-status">牌堆已就绪 · 等待你的问题</span><span class="scene-count"><i id="deck-count">22</i> / 22</span></div>
            <div class="three-stage" id="three-stage"><div class="stage-glow"></div><div class="fallback-deck" aria-hidden="true">✧</div><div class="stage-hint" id="stage-hint">点击下方「抽一张」<br><small>让命运为你挑选一张牌</small></div></div>
            <div class="scene-actions"><button class="button button-ghost" id="shuffle-btn"><span>⟲</span> 洗牌</button><button class="button button-primary" id="draw-btn"><span>✦</span> 抽一张</button></div>
          </div>
          <div class="question-card"><div class="question-symbol">☾</div><div><span>抽牌前的小仪式</span><p>闭上眼睛，呼吸三次。把问题从“我会不会”改成“我现在需要看见什么”。</p></div></div>

          <div class="deck-section">
            <div class="section-kicker"><span>02</span><div><b>大阿卡纳牌库</b><small>22 张原型牌 · 每一张都是一面镜子</small></div><span class="deck-total">22 CARDS</span></div>
            <div class="deck-grid" id="deck-grid"></div>
          </div>
        </div>

        <aside class="result-column" id="result-panel">
          <div class="section-kicker result-kicker"><span>03</span><div><b>你的星轨签文</b><small>翻开牌面，开始阅读此刻的讯息</small></div></div>
          <div class="result-empty" id="result-empty"><div class="empty-orbit"><span>✦</span></div><h2>答案正在靠近</h2><p>抽取一张牌，看看今天的星轨<br>想把什么带到你的面前。</p><div class="empty-line"></div><small>YOUR READING AWAITS</small></div>
          <div class="result-content hidden" id="result-content"></div>
        </aside>
      </section>
    </main>

    <footer class="footer"><span>✧</span><span>星轨塔罗不是替你决定，而是帮你听见自己。</span><span class="footer-right">ARCANA / 2026</span></footer>
  </div>
`

const stage = document.querySelector('#three-stage')
const statusEl = document.querySelector('#scene-status')
const countEl = document.querySelector('#deck-count')
const hintEl = document.querySelector('#stage-hint')
const drawBtn = document.querySelector('#draw-btn')
const shuffleBtn = document.querySelector('#shuffle-btn')
const resultEmpty = document.querySelector('#result-empty')
const resultContent = document.querySelector('#result-content')
const deckGrid = document.querySelector('#deck-grid')

function renderDeckGrid(activeId = null) {
  deckGrid.innerHTML = cards.map(card => `
    <button class="deck-item ${activeId === card.id ? 'active' : ''}" data-id="${card.id}" style="--card-accent:${card.color}" aria-label="查看 ${card.zh}">
      <span class="mini-card"><span class="mini-roman">${card.roman}</span><strong>${card.glyph}</strong><span class="mini-number">${String(card.id).padStart(2, '0')}</span></span>
      <span class="deck-item-copy"><b>${card.zh}</b><small>${card.en}</small></span>
    </button>
  `).join('')
  deckGrid.querySelectorAll('.deck-item').forEach(item => {
    item.addEventListener('click', () => {
      const card = cards[Number(item.dataset.id)]
      focusDeckCard(card)
    })
  })
}
renderDeckGrid()

let THREE, scene, camera, renderer, deckGroup, selectedGroup, stars, orbitGroup, clock
let isBusy = false
let remaining = shuffledDeck()

function shuffledDeck() {
  const deck = [...cards]
  for (let index = deck.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1))
    ;[deck[index], deck[other]] = [deck[other], deck[index]]
  }
  return deck
}

function createBackTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512; canvas.height = 768
  const ctx = canvas.getContext('2d')
  const grad = ctx.createLinearGradient(0, 0, 512, 768)
  grad.addColorStop(0, '#151c56'); grad.addColorStop(1, '#080b24')
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 512, 768)
  ctx.strokeStyle = 'rgba(225, 192, 112, .65)'; ctx.lineWidth = 8; ctx.strokeRect(23, 23, 466, 722)
  ctx.strokeStyle = 'rgba(225, 192, 112, .18)'; ctx.lineWidth = 2; ctx.strokeRect(40, 40, 432, 688)
  ctx.beginPath(); ctx.arc(256, 384, 128, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(225, 192, 112, .35)'; ctx.stroke()
  ctx.beginPath(); ctx.arc(256, 384, 88, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(191, 201, 255, .2)'; ctx.stroke()
  for (let i = 0; i < 16; i++) {
    const a = i * Math.PI * 2 / 16
    const x = 256 + Math.cos(a) * 108, y = 384 + Math.sin(a) * 108
    ctx.fillStyle = '#f7db91'; ctx.font = '22px serif'; ctx.textAlign = 'center'; ctx.fillText(i % 2 ? '·' : '✦', x, y)
  }
  ctx.fillStyle = 'rgba(247,219,145,.9)'; ctx.font = '48px serif'; ctx.textAlign = 'center'; ctx.fillText('✧', 256, 401)
  ctx.fillStyle = 'rgba(191,201,255,.8)'; ctx.font = '13px sans-serif'; ctx.letterSpacing = '4px'; ctx.fillText('ARCANA', 256, 470)
  return new THREE.CanvasTexture(canvas)
}

function createFrontTexture(card) {
  const canvas = document.createElement('canvas')
  canvas.width = 512; canvas.height = 768
  const ctx = canvas.getContext('2d')
  const grad = ctx.createLinearGradient(0, 0, 512, 768)
  grad.addColorStop(0, '#1a225a'); grad.addColorStop(.56, '#0c1238'); grad.addColorStop(1, '#080a24')
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 512, 768)
  ctx.fillStyle = `${card.color}16`; ctx.beginPath(); ctx.arc(256, 350, 175, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = `${card.color}bb`; ctx.lineWidth = 5; ctx.strokeRect(22, 22, 468, 724)
  ctx.strokeStyle = 'rgba(231, 216, 177, .28)'; ctx.lineWidth = 1; ctx.strokeRect(38, 38, 436, 692)
  ctx.strokeStyle = `${card.color}5e`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(256, 366, 144, 0, Math.PI * 2); ctx.stroke()
  ctx.beginPath(); ctx.arc(256, 366, 119, 0, Math.PI * 2); ctx.stroke()
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6
    const x = 256 + Math.cos(a) * 132, y = 366 + Math.sin(a) * 132
    ctx.fillStyle = card.color; ctx.font = '18px serif'; ctx.textAlign = 'center'; ctx.fillText(i % 3 === 0 ? '✦' : '·', x, y)
  }
  ctx.textAlign = 'center'; ctx.fillStyle = 'rgba(240,226,185,.92)'; ctx.font = '20px serif'; ctx.fillText(card.roman, 256, 79)
  ctx.fillStyle = card.color; ctx.font = '168px serif'; ctx.fillText(card.glyph, 256, 425)
  ctx.fillStyle = 'rgba(245,238,215,.96)'; ctx.font = 'bold 36px serif'; ctx.fillText(card.zh, 256, 585)
  ctx.fillStyle = 'rgba(191,201,255,.68)'; ctx.font = '14px sans-serif'; ctx.fillText(card.en.toUpperCase(), 256, 616)
  ctx.fillStyle = `${card.color}bb`; ctx.font = '12px sans-serif'; ctx.fillText(card.theme.replace(' · ', '  /  '), 256, 682)
  return new THREE.CanvasTexture(canvas)
}

function createCardGroup(card = cards[0]) {
  const group = new THREE.Group()
  group.userData.card = card
  const frontTexture = createFrontTexture(card)
  const backTexture = createBackTexture()
  const front = new THREE.Mesh(new THREE.PlaneGeometry(2.65, 3.97), new THREE.MeshBasicMaterial({ map: frontTexture, transparent: true, side: THREE.DoubleSide }))
  const back = new THREE.Mesh(new THREE.PlaneGeometry(2.65, 3.97), new THREE.MeshBasicMaterial({ map: backTexture, transparent: true, side: THREE.DoubleSide }))
  front.position.z = 0.045
  back.position.z = -0.045
  back.rotation.y = Math.PI
  group.add(front, back)
  const edge = new THREE.Mesh(new THREE.BoxGeometry(2.69, 4.01, .07), new THREE.MeshBasicMaterial({ color: 0xc2a45e, transparent: true, opacity: .7 }))
  edge.position.z = 0
  group.add(edge)
  group.userData.front = front
  group.userData.back = back
  return group
}

function initThree() {
  clock = new THREE.Clock()
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(34, 1, .1, 100)
  camera.position.set(0, .25, 11)
  camera.lookAt(0, .1, 0)
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.domElement.setAttribute('aria-label', 'Three.js 塔罗牌 3D 牌堆')
  stage.appendChild(renderer.domElement)

  deckGroup = new THREE.Group()
  scene.add(deckGroup)
  for (let i = 0; i < 11; i++) {
    const card = createCardGroup()
    card.position.set((i % 3 - 1) * .035, i * .03, i * .012)
    card.rotation.z = (i % 2 ? 1 : -1) * .02
    card.rotation.y = (i % 2 ? 1 : -1) * .025
    deckGroup.add(card)
  }

  orbitGroup = new THREE.Group()
  const ringMat = new THREE.LineBasicMaterial({ color: 0x7c84d6, transparent: true, opacity: .34 })
  const ring1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(new THREE.EllipseCurve(0, 0, 3.5, 1.05, 0, Math.PI * 2, false, 0).getPoints(128).map(p => new THREE.Vector3(p.x, p.y, 0))), ringMat)
  const ring2 = ring1.clone(); ring2.scale.set(.78, .78, .78); ring2.rotation.x = .55; ring2.rotation.y = -.24
  const ring3 = ring1.clone(); ring3.scale.set(.62, .62, .62); ring3.rotation.x = -.7; ring3.rotation.y = .32
  orbitGroup.add(ring1, ring2, ring3); orbitGroup.rotation.z = -.15; scene.add(orbitGroup)

  const starGeo = new THREE.BufferGeometry(); const starCount = 240; const positions = new Float32Array(starCount * 3)
  for (let i = 0; i < starCount; i++) { positions[i * 3] = (Math.random() - .5) * 18; positions[i * 3 + 1] = (Math.random() - .5) * 10; positions[i * 3 + 2] = (Math.random() - .5) * 4 - 2 }
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xd6d4ff, size: .025, transparent: true, opacity: .68 }))
  scene.add(stars)
  resizeScene()
  animate()
}

function resizeScene() {
  if (!renderer) return
  const rect = stage.getBoundingClientRect(); const w = Math.max(rect.width, 300); const h = Math.max(rect.height, 340)
  renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix()
}

function animate() {
  requestAnimationFrame(animate)
  const t = clock.getElapsedTime()
  if (deckGroup) { deckGroup.rotation.y = Math.sin(t * .35) * .055; deckGroup.position.y = Math.sin(t * .9) * .05 }
  if (orbitGroup) { orbitGroup.rotation.y = t * .08; orbitGroup.rotation.z = -.15 + Math.sin(t * .25) * .04 }
  if (stars) { stars.rotation.y = t * .012; stars.rotation.x = Math.sin(t * .08) * .02 }
  if (selectedGroup && !isBusy) { selectedGroup.position.y = Math.sin(t * .75) * .06; selectedGroup.rotation.y = Math.sin(t * .32) * .025 }
  renderer.render(scene, camera)
}

function tween(duration, update, ease = t => t) {
  return new Promise(resolve => {
    const start = performance.now()
    function frame(now) { const p = Math.min((now - start) / duration, 1); update(ease(p)); if (p < 1) requestAnimationFrame(frame); else resolve() }
    requestAnimationFrame(frame)
  })
}

function easeInOut(t) { return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2 }
function easeOut(t) { return 1 - Math.pow(1 - t, 3) }

async function shuffleDeck() {
  if (isBusy) return
  isBusy = true; drawBtn.disabled = true; shuffleBtn.disabled = true
  statusEl.textContent = '正在洗牌 · 让旧的轨迹重新排列'
  hintEl.classList.add('is-hidden')
  clearSelectedCard()
  resultEmpty.classList.remove('hidden')
  resultContent.classList.add('hidden')
  resultContent.classList.remove('reveal')
  stage.querySelector('.fallback-deck').textContent = '✧'
  renderDeckGrid()
  remaining = shuffledDeck()
  const items = deckGroup?.children ?? []
  await Promise.all([...items].map((card, i) => tween(560 + i * 22, p => {
    card.position.x = Math.sin(p * Math.PI * 2 + i) * .72 * (1 - p) + (i % 3 - 1) * .035
    card.position.y = Math.cos(p * Math.PI * 2 + i) * .34 * (1 - p) + i * .03
    card.rotation.z = Math.sin(p * Math.PI * 4 + i) * .55 * (1 - p)
    card.rotation.y = Math.cos(p * Math.PI * 3 + i) * .4 * (1 - p)
  }, easeInOut)))
  await Promise.all([...items].map((card, i) => tween(330, p => {
    card.position.x = ((i % 3) - 1) * .035 * p
    card.position.y = i * .03 * p
    card.position.z = i * .012
    card.rotation.z = ((i % 2 ? 1 : -1) * .02) * p
    card.rotation.y = ((i % 2 ? 1 : -1) * .025) * p
  }, easeOut)))
  countEl.textContent = '22'; statusEl.textContent = '牌堆已就绪 · 等待你的问题'; hintEl.innerHTML = '点击下方「抽一张」<br><small>让命运为你挑选一张牌</small>'; hintEl.classList.remove('is-hidden')
  drawBtn.disabled = false; shuffleBtn.disabled = false; isBusy = false
}

function clearSelectedCard() {
  if (!selectedGroup) return
  scene.remove(selectedGroup)
  selectedGroup.traverse(object => {
    object.geometry?.dispose()
    object.material?.map?.dispose()
    object.material?.dispose()
  })
  selectedGroup = null
}

async function drawCard() {
  if (isBusy) return
  isBusy = true; drawBtn.disabled = true; shuffleBtn.disabled = true
  if (!remaining.length) remaining = shuffledDeck()
  const card = remaining.pop()
  const reversed = Math.random() > .52
  countEl.textContent = String(Math.max(0, remaining.length)).padStart(2, '0')
  statusEl.textContent = '星轨正在回应 · 牌面即将显现'
  hintEl.classList.add('is-hidden')
  clearSelectedCard()
  if (deckGroup) {
    const deckItems = [...deckGroup.children]
    await Promise.all(deckItems.slice(-4).map((item, idx) => tween(300 + idx * 45, p => { item.position.x = (idx - 1.5) * .28 * p; item.position.y = idx * .08 * p + .2 * p; item.rotation.z = (idx - 1.5) * .12 * p }, easeOut)))
    const target = createCardGroup(card)
    target.position.set(0, -2.8, .65)
    target.rotation.y = Math.PI
    target.scale.setScalar(.82)
    scene.add(target)
    selectedGroup = target
    await tween(720, p => { target.position.y = -2.8 + 2.95 * p; target.scale.setScalar(.82 + .18 * p); target.rotation.z = reversed ? Math.PI * p : 0 }, easeOut)
    await tween(920, p => { target.rotation.y = Math.PI * (1 - p) }, easeInOut)
  } else {
    stage.querySelector('.fallback-deck').textContent = card.glyph
  }
  await showResult(card, reversed)
  statusEl.textContent = `${card.roman} · ${card.zh} ${reversed ? '· 逆位' : '· 正位'}`
  drawBtn.disabled = false; shuffleBtn.disabled = false; isBusy = false
}

async function showResult(card, reversed) {
  resultEmpty.classList.add('hidden'); resultContent.classList.remove('hidden');
  const positionText = reversed ? '逆位 REVERSED' : '正位 UPRIGHT'
  resultContent.innerHTML = `
    <div class="result-heading"><div class="result-index">${card.roman}</div><div><span class="result-overline">YOUR CARD · ${positionText}</span><h2>${card.zh}</h2><p>${card.en}</p></div><span class="result-glyph" style="--card-accent:${card.color}">${card.glyph}</span></div>
    <div class="position-badge ${reversed ? 'is-reversed' : ''}"><span class="badge-dot"></span>${positionText}<small>${reversed ? '向内整理 · 重新校准' : '向外展开 · 顺势而行'}</small></div>
    <div class="meaning-block"><span class="block-label">核心寓意</span><p>${card.essence}</p></div>
    <div class="keyword-row">${card.keywords.map(k => `<span>${k}</span>`).join('')}</div>
    <div class="interpretation-grid"><article><span class="block-label">${reversed ? '逆位解读' : '正位解读'}</span><p>${reversed ? card.reversed : card.upright}</p></article><article><span class="block-label">今日行动</span><p>${card.action}</p></article><article><span class="block-label">留给自己的反思</span><p class="reflection">“${card.reflection}”</p></article></div>
    <button class="reset-reading" id="reset-reading"><span>↗</span> 再占卜一次</button>
  `
  document.querySelector('#reset-reading').addEventListener('click', shuffleDeck)
  renderDeckGrid(card.id)
  requestAnimationFrame(() => resultContent.classList.add('reveal'))
  setTimeout(() => document.querySelector('#result-panel').scrollIntoView({ behavior: 'smooth', block: 'start' }), 260)
}

function focusDeckCard(card) {
  if (isBusy) return
  statusEl.textContent = `${card.roman} · ${card.zh} 已在牌库中 · 点击抽一张开始正式占卜`
  hintEl.innerHTML = `<span class="hint-selected">${card.glyph}</span>${card.zh}<br><small>${card.theme}</small>`
  hintEl.classList.remove('is-hidden')
  deckGroup?.children.forEach((item, i) => { item.rotation.z = ((i % 2 ? 1 : -1) * .02) + (i === card.id % 11 ? .08 : 0) })
  drawBtn.focus()
}

window.addEventListener('resize', resizeScene)
shuffleBtn.addEventListener('click', shuffleDeck)
drawBtn.addEventListener('click', () => drawCard())
// Keep drawing available while the optional 3D scene loads or if WebGL is unavailable.
import('../vendor/build/three.module.min.js').then(module => {
  if (!document.createElement('canvas').getContext('webgl2')) return
  THREE = module
  initThree()
  stage.classList.add('has-3d')
}).catch(error => {
  renderer?.domElement.remove()
  renderer?.dispose()
  renderer = null
  deckGroup = null
  console.warn('星轨塔罗已切换到平面牌面。', error)
})
