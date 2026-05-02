const majorArcana = [
    { id: "major-0", name: "愚者", subtitle: "The Fool", keywords: ["开始", "冒险", "自由"], upright: "适合带着开放心态迈出新一步。", reversed: "先别急着冲动决定，先看清脚下。", advice: "勇气很重要，判断力也要一起带上。", symbolism: "悬崖、行囊与白玫瑰都在提醒你，新旅程迷人，但自由也意味着要对自己的方向负责。" },
    { id: "major-1", name: "魔术师", subtitle: "The Magician", keywords: ["行动", "创造", "掌控"], upright: "你手上的资源比以为的更多。", reversed: "分心、拖延或过度包装会削弱行动力。", advice: "把注意力集中到最关键的一步。", symbolism: "一手指天一手指地，像是在把灵感拉进现实，桌上的四元素工具说明你并不是空手上阵。" },
    { id: "major-2", name: "女祭司", subtitle: "The High Priestess", keywords: ["直觉", "观察", "隐藏"], upright: "答案更适合在安静观察后浮现。", reversed: "你可能忽略了已经感受到的信号。", advice: "慢一点，让心先安静下来。", symbolism: "黑白双柱、月亮与卷轴都在强调门槛、秘密与内在知识，不是所有答案都适合立刻说出口。" },
    { id: "major-3", name: "皇后", subtitle: "The Empress", keywords: ["丰盛", "滋养", "关系"], upright: "这张牌强调舒展、滋养与长期价值。", reversed: "别为了照顾别人耗空自己。", advice: "让选择既舒适又可持续。", symbolism: "麦田、森林和石榴纹样都在强调生长与丰盛，这是一张会把你带回身体、关系和生活感受的牌。" },
    { id: "major-4", name: "皇帝", subtitle: "The Emperor", keywords: ["秩序", "结构", "责任"], upright: "事情适合按清晰规则与计划推进。", reversed: "控制欲过强反而会压缩弹性。", advice: "清晰边界比强硬态度更重要。", symbolism: "石座、高山和红袍都传递出稳定、掌权与规则感，它要求你站稳，而不是摇摆。" },
    { id: "major-5", name: "教皇", subtitle: "The Hierophant", keywords: ["传统", "规范", "学习"], upright: "成熟经验和经典做法会给你帮助。", reversed: "旧方法未必仍然适合现在。", advice: "先理解规则，再决定要不要突破。", symbolism: "冠冕、权杖与信徒形象带来一种制度与传承感，这张牌经常把问题拉回“你依据什么相信”。" },
    { id: "major-6", name: "恋人", subtitle: "The Lovers", keywords: ["选择", "契合", "关系"], upright: "关键在于选择是否与真实价值一致。", reversed: "犹豫和回避只会拖长问题。", advice: "先问自己真正想要什么。", symbolism: "天使、树与蛇把这张牌从单纯爱情拉回选择与诱惑，你面对的不只是喜欢，还有价值排序。" },
    { id: "major-7", name: "战车", subtitle: "The Chariot", keywords: ["推进", "目标", "意志"], upright: "只要方向清晰，推进力会很强。", reversed: "急着冲会让你偏航。", advice: "先定方向，再加速度。", symbolism: "黑白双兽、战甲与车身在讲的是相反力量的整合，真正的前进来自稳定驾驭，而非蛮力猛冲。" },
    { id: "major-8", name: "力量", subtitle: "Strength", keywords: ["耐心", "稳定", "内在力量"], upright: "温和而稳定的方式比硬碰硬更有效。", reversed: "疲惫和自我怀疑正在拖慢你。", advice: "先安顿自己，再处理外部问题。", symbolism: "女子轻扶狮子，强调真正的力量不是压制，而是能够温柔却坚定地靠近本能与情绪。" },
    { id: "major-9", name: "隐者", subtitle: "The Hermit", keywords: ["沉淀", "独处", "思考"], upright: "现在适合慢下来整理答案。", reversed: "别把思考变成逃避现实。", advice: "给自己留出安静判断的空间。", symbolism: "高处的灯、斗篷和独行姿态都说明这是一段向内走的过程，答案不喧哗，但会慢慢亮起来。" },
    { id: "major-10", name: "命运之轮", subtitle: "Wheel of Fortune", keywords: ["转机", "变化", "循环"], upright: "局势正在转动，新机会会出现。", reversed: "抗拒变化会让你更被动。", advice: "顺势调整，而不是死守原样。", symbolism: "轮盘与四角象征循环和更大节奏，这张牌常提醒你，有些变化不是你发动的，但你可以选择怎么回应。" },
    { id: "major-11", name: "正义", subtitle: "Justice", keywords: ["平衡", "判断", "责任"], upright: "问题需要回到事实、边界与因果。", reversed: "情绪化判断会让局面失衡。", advice: "先看事实，再谈想象。", symbolism: "剑与天平一静一动，像在提醒你，清晰判断不是冷酷，而是对现实负责。" },
    { id: "major-12", name: "倒吊人", subtitle: "The Hanged Man", keywords: ["停顿", "换位", "重新理解"], upright: "暂停是为了换个角度看清楚。", reversed: "拖延式等待正在消耗你。", advice: "停下来，但不要无限拖着。", symbolism: "倒挂却平静的姿态说明停滞不全是坏事，有时放下控制，才会看见旧问题的新入口。" },
    { id: "major-13", name: "死神", subtitle: "Death", keywords: ["结束", "转化", "更新"], upright: "旧阶段该结束了，新阶段才能开始。", reversed: "不舍得放下会延长阵痛。", advice: "别把必要的结束误解成失败。", symbolism: "白马、黑旗和远方太阳在讲清场与更新，这张牌更像“转换期”，不是单纯的毁灭。" },
    { id: "major-14", name: "节制", subtitle: "Temperance", keywords: ["调和", "恢复", "节奏"], upright: "平衡与适度是当前最重要的答案。", reversed: "失衡已经持续一段时间，需要修正。", advice: "用稳定节奏替代一时过猛。", symbolism: "双杯之间来回流动的水象征调和，这张牌不是无聊，而是极其高阶的稳定能力。" },
    { id: "major-15", name: "恶魔", subtitle: "The Devil", keywords: ["欲望", "束缚", "执念"], upright: "你要正视真正困住自己的东西。", reversed: "你已经开始意识到问题根源。", advice: "先承认问题，才可能摆脱问题。", symbolism: "锁链与被束缚的人并不是真的没有出口，真正卡住你的，往往是已经合理化太久的习惯与依赖。" },
    { id: "major-16", name: "高塔", subtitle: "The Tower", keywords: ["冲击", "真相", "重建"], upright: "表面稳定可能会被突然打破。", reversed: "你已经感觉到裂缝，只是还在拖。", advice: "尽快处理真正的问题源头。", symbolism: "闪电、坠落与破裂的王冠让一切伪稳固现形，这张牌常常很剧烈，但也很诚实。" },
    { id: "major-17", name: "星星", subtitle: "The Star", keywords: ["希望", "疗愈", "愿景"], upright: "这张牌带来恢复感与未来感。", reversed: "希望不是没有了，只是暂时被遮住。", advice: "给自己留一点相信未来的空间。", symbolism: "大星、水流与赤足姿态都很纯净，这是一种恢复联系、重新相信生命节奏的牌。" },
    { id: "major-18", name: "月亮", subtitle: "The Moon", keywords: ["情绪", "迷雾", "潜意识"], upright: "局势还不够明朗，情绪会放大判断。", reversed: "迷雾开始散开，但仍需谨慎。", advice: "先把感受和事实分开。", symbolism: "狼、狗、龙虾与小径像在说，你已经进入深水区，本能会变强，但方向感会变弱。" },
    { id: "major-19", name: "太阳", subtitle: "The Sun", keywords: ["清晰", "喜悦", "成功"], upright: "事情更容易朝明朗积极的方向发展。", reversed: "结果并不差，只是你还没完全接住。", advice: "允许自己相信好结果正在靠近。", symbolism: "向日葵、孩子和白马把光亮、单纯和表达感推到最前面，这是很会驱散阴影的一张牌。" },
    { id: "major-20", name: "审判", subtitle: "Judgement", keywords: ["觉醒", "回应", "复盘"], upright: "现在适合回应真正重要的召唤。", reversed: "回避复盘会拖慢新阶段开始。", advice: "认真面对你已经听见的内在声音。", symbolism: "号角与复起的人群都在提醒你，有些时刻不是“要不要”，而是“你终于该回应了”。" },
    { id: "major-21", name: "世界", subtitle: "The World", keywords: ["完成", "整合", "圆满"], upright: "事情接近完整收束。", reversed: "离完成不远，但还有最后一段要整合。", advice: "认真走完最后一程。", symbolism: "舞者、花环与四角守护者带来完整感，这是一种阶段性完成，也是更大循环的起点。" }
];

const suitConfigs = [
    { key: "wands", name: "权杖", subtitle: "Wands", theme: "行动", core: "行动力、热情、野心与推进", element: "火" },
    { key: "cups", name: "圣杯", subtitle: "Cups", theme: "情感", core: "情绪、关系、感受与连接", element: "水" },
    { key: "swords", name: "宝剑", subtitle: "Swords", theme: "思维", core: "判断、冲突、语言与认知", element: "风" },
    { key: "pentacles", name: "星币", subtitle: "Pentacles", theme: "现实", core: "金钱、身体、落地与长期经营", element: "土" }
];

const minorRankConfigs = [
    { value: "Ace", name: "首牌", order: 1, keywords: ["开端", "新机会", "种子"], upright: "新的能量正在成形。", reversed: "开端感存在，但还不够稳定。", advice: "先保护刚冒头的可能性。" },
    { value: "Two", name: "二", order: 2, keywords: ["平衡", "选择", "协调"], upright: "事情进入互动与拿捏阶段。", reversed: "摇摆会拖慢判断。", advice: "先明确主次，再谈兼顾。" },
    { value: "Three", name: "三", order: 3, keywords: ["展开", "合作", "成长"], upright: "局面开始向外扩展。", reversed: "节奏容易被误解或打断。", advice: "先让基础配合顺起来。" },
    { value: "Four", name: "四", order: 4, keywords: ["稳定", "结构", "停留"], upright: "当前更需要稳住而不是乱动。", reversed: "过度停留会让机会流失。", advice: "判断是该守还是该动。" },
    { value: "Five", name: "五", order: 5, keywords: ["摩擦", "挑战", "失衡"], upright: "冲突或不适已经显现。", reversed: "问题没有完全过去，只是暂时压着。", advice: "先看清冲突真正来自哪里。" },
    { value: "Six", name: "六", order: 6, keywords: ["调整", "过渡", "修复"], upright: "局势正在走向过渡与调整。", reversed: "旧问题仍在拖后腿。", advice: "让修复成为实际动作。" },
    { value: "Seven", name: "七", order: 7, keywords: ["考验", "坚持", "辨别"], upright: "需要更清楚地守住立场。", reversed: "焦躁会让判断走样。", advice: "看见挑战，但别先输给心态。" },
    { value: "Eight", name: "八", order: 8, keywords: ["推进", "变化", "持续"], upright: "节奏会明显加快。", reversed: "卡点多半来自失速或拖延。", advice: "先让节奏恢复流动。" },
    { value: "Nine", name: "九", order: 9, keywords: ["积累", "收尾", "临界点"], upright: "事情已接近阶段性成果。", reversed: "疲惫会让你高估压力。", advice: "临门一脚之前先稳住心神。" },
    { value: "Ten", name: "十", order: 10, keywords: ["完成", "负担", "结果"], upright: "一轮结果已经成形。", reversed: "负担过量需要拆解。", advice: "别把所有重量都扛在自己身上。" },
    { value: "Page", name: "侍者", order: 11, keywords: ["讯息", "学习", "尝试"], upright: "新的信息、灵感或机会会出现。", reversed: "信息不稳，先别急着下结论。", advice: "保持好奇，但别轻信表面。" },
    { value: "Knight", name: "骑士", order: 12, keywords: ["行动", "追逐", "推进"], upright: "局势带着明显的推动力。", reversed: "冲过头会让问题升级。", advice: "让行动有方向感，而不是只有速度。" },
    { value: "Queen", name: "王后", order: 13, keywords: ["成熟", "照料", "掌握"], upright: "你更适合用成熟稳定的方式掌局。", reversed: "过度敏感或过度控制都会失衡。", advice: "稳定自己，再影响环境。" },
    { value: "King", name: "国王", order: 14, keywords: ["主导", "决断", "定局"], upright: "你有能力把局面定下来。", reversed: "强压局面可能带来反弹。", advice: "领导力来自清晰，不只是硬度。" }
];

const majorImageFiles = [
    "RWS Tarot 00 Fool.jpg",
    "RWS Tarot 01 Magician.jpg",
    "RWS Tarot 02 High Priestess.jpg",
    "RWS Tarot 03 Empress.jpg",
    "RWS Tarot 04 Emperor.jpg",
    "RWS Tarot 05 Hierophant.jpg",
    "RWS Tarot 06 Lovers.jpg",
    "RWS Tarot 07 Chariot.jpg",
    "RWS Tarot 08 Strength.jpg",
    "RWS Tarot 09 Hermit.jpg",
    "RWS Tarot 10 Wheel of Fortune.jpg",
    "RWS Tarot 11 Justice.jpg",
    "RWS Tarot 12 Hanged Man.jpg",
    "RWS Tarot 13 Death.jpg",
    "RWS Tarot 14 Temperance.jpg",
    "RWS Tarot 15 Devil.jpg",
    "RWS Tarot 16 Tower.jpg",
    "RWS Tarot 17 Star.jpg",
    "RWS Tarot 18 Moon.jpg",
    "RWS Tarot 19 Sun.jpg",
    "RWS Tarot 20 Judgement.jpg",
    "RWS Tarot 21 World.jpg"
];

const bookLensById = {
    "major-0": "用好奇走向新旅程，也看见天真背后的代价。",
    "major-1": "把灵感化成行动，练习让手上的资源真正为你所用。",
    "major-2": "先别急着表态，在安静里听懂直觉真正指向哪里。",
    "major-3": "接住丰盛、身体感与被滋养的需要，让生活重新开花。",
    "major-4": "建立秩序与边界，但别让控制感压过弹性。",
    "major-5": "回到信念、传统与学习，分辨什么值得承袭。",
    "major-6": "在爱与选择里对齐价值，而不只是追逐感觉。",
    "major-7": "驾驭彼此拉扯的力量，带着目标感稳稳前进。",
    "major-8": "用温柔驯服本能，而不是一味压抑自己。",
    "major-9": "暂时抽离喧闹，在独处里整理真正的答案。",
    "major-10": "接受变化是过程的一部分，学习顺势调整位置。",
    "major-11": "回到事实、因果与责任，做出清楚判断。",
    "major-12": "停下脚步换个角度，等待新的理解自己浮现。",
    "major-13": "放下旧阶段，让结束成为更新的入口。",
    "major-14": "调和过与不及，在关系与生活里找回中线。",
    "major-15": "识别欲望、依赖与执着，慢慢拿回主导权。",
    "major-16": "面对结构崩解，让真相逼你重新建设。",
    "major-17": "在脆弱之后重新相信，恢复愿景与希望。",
    "major-18": "穿过投射与不安，练习与未知共处。",
    "major-19": "诚实表达自己，让生命力重新流动。",
    "major-20": "回应内在召唤，结束逃避与拖延。",
    "major-21": "整合经验、完成阶段，并准备进入下一轮。",
    "wands-ace": "把念头点燃成行动，认真接住每一个开端的火花。",
    "wands-two": "在安稳与远方之间评估下一步野心。",
    "wands-three": "用更长远的视角布局合作与未来。",
    "wands-four": "允许自己在阶段性的安定里庆祝成果。",
    "wands-five": "在碰撞和竞争中看见彼此真正的立场。",
    "wands-six": "接住肯定与荣誉，同时记得成功并非独力完成。",
    "wands-seven": "守住位置与信念，别因为压力轻易退让。",
    "wands-eight": "顺势加速，让能量朝同一个方向前进。",
    "wands-nine": "承认疲惫与防备，别让旧伤主导现在。",
    "wands-ten": "放下过度承担，把不属于你的重量还回去。",
    "cups-ace": "轻轻捧住新关系与情感流动，不急着控制。",
    "cups-two": "用平等交流让差异重新连结。",
    "cups-three": "和值得信任的人共享成果、支持与喜悦。",
    "cups-four": "在厌倦与停滞里重新寻找心的回应。",
    "cups-five": "允许失落被看见，也别忘了你仍拥有支持。",
    "cups-six": "让回忆带来温柔，而不是把自己困在过去。",
    "cups-seven": "穿过幻想与投射，辨认自己真正想要什么。",
    "cups-eight": "当现状无法满足灵魂，就勇敢离开继续寻找。",
    "cups-nine": "看见满足背后的自我保护，不只沉浸在表面圆满。",
    "cups-ten": "练习在关系与家庭里创造包容、信任与和谐。",
    "swords-ace": "用清晰判断主动切入问题核心。",
    "swords-two": "停止把自己僵住，面对那些不想看的现实。",
    "swords-three": "接受心痛与延迟也是成长的一部分。",
    "swords-four": "让自己暂停修复，而不是继续硬撑到底。",
    "swords-five": "看清输赢执念如何同时伤人也伤己。",
    "swords-six": "带着伤慢慢过渡，允许帮助真正出现。",
    "swords-seven": "识别侥幸、隐瞒与自我欺骗。",
    "swords-eight": "松开自我设限，听见内在求生的声音。",
    "swords-nine": "正视焦虑来源，别独自困在漫长黑夜里。",
    "swords-ten": "在最低谷承认结束，才有机会重新开始。",
    "pentacles-ace": "把想法落地，给机会一个具体形体。",
    "pentacles-two": "在起伏变化里练习弹性与调度。",
    "pentacles-three": "透过专业分工把事情做扎实。",
    "pentacles-four": "看见守成、安全感与控制欲之间的界线。",
    "pentacles-five": "在匮乏里学会求助，也守住尊严。",
    "pentacles-six": "觉察施与受是否真的平衡而舒服。",
    "pentacles-seven": "在已有基础上停下来盘点，思考是否需要转向。",
    "pentacles-eight": "用反复练习磨出真正的本事。",
    "pentacles-nine": "享受独立成果，也继续维持自律。",
    "pentacles-ten": "从家族、团队与长期资源里理解丰盛。",
    "wands-page": "让尝试欲和冒险心带你出发。",
    "wands-knight": "把热情变成推进力，但别只顾着冲刺。",
    "wands-queen": "用乐观与直觉照亮周围的人与事。",
    "wands-king": "用经验与愿景带人向前。",
    "cups-page": "保留好奇与柔软，接收心里浮现的讯息。",
    "cups-knight": "追随理想与感受行动，同时记得落回现实。",
    "cups-queen": "用同理与感受力照顾自己，也照顾他人。",
    "cups-king": "在情感丰沛时，依然维持成熟与稳定。",
    "swords-page": "多听多看，先分辨资讯真假。",
    "swords-knight": "让锋利有方向，不把胜负心开到最大。",
    "swords-queen": "保持清醒边界，也照顾伤后的心。",
    "swords-king": "用理性结构与专业判断承担决策。",
    "pentacles-page": "从模仿与实作开始，慢慢累积经验。",
    "pentacles-knight": "用耐心与踏实把事情长期做成。",
    "pentacles-queen": "以温暖务实的方式经营人、钱与生活。",
    "pentacles-king": "从长期分配与稳定经营里创造成果。"
};

function applyBookLens(card) {
    return {
        ...card,
        bookLens: bookLensById[card.id] || ""
    };
}

const tarotDeck = [
    ...majorArcana.map((card, index) => ({
        ...card,
        imageFile: majorImageFiles[index]
    })),
    ...buildMinorArcana()
].map(applyBookLens);

const spreads = {
    1: ["核心信息"],
    2: ["现状", "建议"],
    3: ["过去", "现在", "未来"],
    4: ["现状", "阻碍", "助力", "建议"],
    5: ["核心问题", "外在影响", "内在状态", "转机", "下一步"],
    6: ["过去", "现在", "隐藏因素", "可用资源", "行动方向", "结果趋势"],
    7: ["你自己", "对方或环境", "当前局势", "挑战", "优势", "建议", "结果趋势"]
};

const questionInput = document.getElementById("question");
const countInput = document.getElementById("card-count");
const drawBtn = document.getElementById("draw-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const refreshPromptsBtn = document.getElementById("refresh-prompts-btn");
const promptOptions = document.getElementById("prompt-options");
const cardsContainer = document.getElementById("cards");
const summary = document.getElementById("summary");
const resultMeta = document.getElementById("result-meta");
const selectionHint = document.getElementById("selection-hint");
const selectionStage = document.getElementById("selection-stage");
const selectionMeta = document.getElementById("selection-meta");
const selectionProgress = document.getElementById("selection-progress");
const selectionPool = document.getElementById("selection-pool");
const selectionDropZone = document.getElementById("selection-dropzone");
const selectionDropText = document.getElementById("selection-droptext");
const selectionPicked = document.getElementById("selection-picked");
const template = document.getElementById("card-template");
const chips = Array.from(document.querySelectorAll(".chip"));
const saveReadingBtn = document.getElementById("save-reading-btn");
const useReadingInDiaryBtn = document.getElementById("use-reading-in-diary-btn");
const readingSaveFeedback = document.getElementById("reading-save-feedback");
const learningNotesContainer = document.getElementById("learning-notes");
const journalForm = document.getElementById("journal-form");
const journalTitleInput = document.getElementById("journal-title");
const journalDateInput = document.getElementById("journal-date");
const journalMoodInput = document.getElementById("journal-mood");
const journalContentInput = document.getElementById("journal-content");
const clearJournalBtn = document.getElementById("clear-journal-btn");
const clearJournalHistoryBtn = document.getElementById("clear-journal-history-btn");
const weeklySummaryNode = document.getElementById("weekly-summary");
const monthlySummaryNode = document.getElementById("monthly-summary");
const journalListNode = document.getElementById("journal-list");
const guideForm = document.getElementById("guide-form");
const guideTitleInput = document.getElementById("guide-title");
const guideContentInput = document.getElementById("guide-content");
const guideListNode = document.getElementById("guide-list");
const languageForm = document.getElementById("language-form");
const languageTermInput = document.getElementById("language-term");
const languageMeaningInput = document.getElementById("language-meaning");
const languageExampleInput = document.getElementById("language-example");
const languageListNode = document.getElementById("language-list");

let selectionState = null;
let draggingSlotId = null;
let currentReadingState = null;
const promptLibrary = [
    "明日运势会有什么重点？",
    "这周我的事业运势如何？",
    "我和他接下来的关系会怎么发展？",
    "我最近适合开始新的计划吗？",
    "这段关系值得我继续投入吗？",
    "我近期的财运会往哪里走？",
    "接下来一个月我最该注意什么？",
    "我现在换工作是好时机吗？",
    "我最近的人际关系状态如何？",
    "这次面试会有好结果吗？",
    "我目前的学业方向是对的吗？",
    "我该继续坚持现在的选择吗？",
    "他对我的感觉更像喜欢还是依赖？",
    "我近期的整体能量状态怎么样？",
    "这个决定会把我带向更好的方向吗？",
    "我接下来会迎来新的感情机会吗？",
    "我的工作压力什么时候会缓下来？",
    "我现在最应该优先解决什么问题？",
    "这段暧昧关系还有继续发展的可能吗？",
    "未来三天我的状态会有什么变化？"
];
const storageKeys = {
    journals: "tarotJournalEntries",
    guides: "tarotGuideEntries",
    language: "tarotLanguageEntries"
};
const defaultLearningNotes = [
    {
        title: "大阿尔克纳怎么读",
        body: "先看它代表的生命课题，再看它在你问题里的位置。大牌通常说明这件事不只是眼前事件，也和更深层的成长主题有关。",
        tags: ["核心课题", "生命阶段"]
    },
    {
        title: "小阿尔克纳怎么读",
        body: "把花色先当成观察入口：权杖看行动，圣杯看情感，宝剑看思维，星币看现实。数字再补充节奏与发展阶段。",
        tags: ["花色", "数字"]
    },
    {
        title: "正位与逆位",
        body: "逆位不等于坏，更多是在说能量卡住、回缩、延迟或需要调整表达方式。先问自己：哪里失衡了？",
        tags: ["正逆位", "失衡"]
    },
    {
        title: "先看位置，再看牌义",
        body: "同一张牌放在“阻碍”和“建议”位置，解读会完全不同。位置决定这张牌在帮你指出什么层面。",
        tags: ["牌阵", "位置"]
    },
    {
        title: "日记比占答案更重要",
        body: "把每天抽到的牌和当天事件对照，你会更快理解牌面语言。长期回看时，也更容易看见自己的重复模式。",
        tags: ["复盘", "觉察"]
    },
    {
        title: "问题要具体",
        body: "比起“我运势怎么样”，更适合问“我这周工作推进最大的阻碍是什么”。问题越具体，牌越容易落到可行动层面。",
        tags: ["提问", "实战"]
    },
    {
        title: "牌面元素也会说话",
        body: "先观察人物朝向、表情、距离、颜色和重复符号。很多时候，真正打动你的线索就藏在画面里，而不是教科书关键词里。",
        tags: ["图像", "观察"]
    },
    {
        title: "学习顺序建议",
        body: "可以按“花色主题 -> 数字节奏 -> 宫廷人格 -> 牌阵练习”往下走，再把自己的笔记持续补到自学指南里。",
        tags: ["学习路径", "方法"]
    }
];
const defaultGuideEntries = [
    {
        id: "guide-default-1",
        title: "自学路径示例",
        content: "第一周熟悉 22 张大阿尔克纳；第二周按四花色理解小阿尔克纳；第三周做单张牌日记；第四周开始练习 3 张牌阵。",
        builtIn: true
    },
    {
        id: "guide-default-2",
        title: "每日练习模板",
        content: "早上抽 1 张牌，写下关键词、第一眼感觉、当天事件呼应；晚上回看这张牌如何在现实中出现。",
        builtIn: true
    },
    {
        id: "guide-default-3",
        title: "解牌检查清单",
        content: "先确认问题、再看牌阵位置、再看正逆位、再看图像细节、最后才写综合结论和建议。",
        builtIn: true
    }
];
const defaultLanguageEntries = [
    {
        id: "lang-default-1",
        term: "Major Arcana",
        meaning: "大阿尔克纳",
        example: "The Major Arcana often points to long-term soul lessons rather than short-term events.",
        builtIn: true
    },
    {
        id: "lang-default-2",
        term: "Minor Arcana",
        meaning: "小阿尔克纳",
        example: "The Minor Arcana usually reflects daily situations, choices, and emotional patterns.",
        builtIn: true
    },
    {
        id: "lang-default-3",
        term: "Upright",
        meaning: "正位",
        example: "An upright card may show smoother expression or clearer forward movement.",
        builtIn: true
    },
    {
        id: "lang-default-4",
        term: "Reversed",
        meaning: "逆位",
        example: "A reversed card can suggest blockage, delay, inner tension, or misalignment.",
        builtIn: true
    },
    {
        id: "lang-default-5",
        term: "Spread",
        meaning: "牌阵",
        example: "A spread gives each card a role, so the same card can mean different things in different positions.",
        builtIn: true
    },
    {
        id: "lang-default-6",
        term: "Querent",
        meaning: "提问者 / 求问者",
        example: "The querent's wording often shapes the depth and precision of the reading.",
        builtIn: true
    }
];

chips.forEach((chip) => {
    chip.addEventListener("click", () => {
        countInput.value = chip.dataset.count;
        refreshChipState();
    });
});

countInput.addEventListener("input", refreshChipState);
drawBtn.addEventListener("click", startInteractiveDraw);
shuffleBtn.addEventListener("click", reshuffleSelection);
refreshPromptsBtn.addEventListener("click", renderPromptOptions);
selectionDropZone.addEventListener("dragover", handleDropZoneDragOver);
selectionDropZone.addEventListener("dragenter", handleDropZoneDragEnter);
selectionDropZone.addEventListener("dragleave", handleDropZoneDragLeave);
selectionDropZone.addEventListener("drop", handleDropZoneDrop);
if (saveReadingBtn) {
    saveReadingBtn.addEventListener("click", saveCurrentReadingToJournal);
}
if (useReadingInDiaryBtn) {
    useReadingInDiaryBtn.addEventListener("click", fillJournalFormFromCurrentReading);
}
if (journalForm) {
    journalForm.addEventListener("submit", handleJournalSubmit);
}
if (clearJournalBtn) {
    clearJournalBtn.addEventListener("click", resetJournalForm);
}
if (clearJournalHistoryBtn) {
    clearJournalHistoryBtn.addEventListener("click", clearJournalHistory);
}
if (guideForm) {
    guideForm.addEventListener("submit", handleGuideSubmit);
}
if (languageForm) {
    languageForm.addEventListener("submit", handleLanguageSubmit);
}

refreshChipState();
renderPromptOptions();
restoreReading();
if (journalDateInput) {
    journalDateInput.value = formatDateInput(new Date());
}
if (learningNotesContainer) {
    renderLearningNotes();
}
if (weeklySummaryNode && monthlySummaryNode && journalListNode) {
    renderJournalSection();
}
if (guideListNode) {
    renderGuideSection();
}
if (languageListNode) {
    renderLanguageSection();
}
initUsageModal();

function buildMinorArcana() {
    const cards = [];

    suitConfigs.forEach((suit) => {
        minorRankConfigs.forEach((rank) => {
            const name = `${suit.name}${rank.name}`;
            cards.push({
                id: `${suit.key}-${rank.value.toLowerCase()}`,
                name,
                subtitle: `${rank.value} of ${suit.subtitle}`,
                imageFile: buildMinorImageFile(suit, rank),
                keywords: buildMinorKeywords(suit, rank),
                upright: `${name}强调${suit.core}中的${rank.keywords[0]}面向。${rank.upright}`,
                reversed: `${name}提醒你，${suit.core}这条线目前可能出现失衡。${rank.reversed}`,
                advice: `${rank.advice} 这张牌更偏向${suit.theme}课题。`,
                symbolism: `${name}属于${suit.name}系列，对应${suit.element}元素，重点放在${suit.core}。${buildMinorSymbolism(suit, rank)}`
            });
        });
    });

    return cards;
}

function renderPromptOptions() {
    const options = shuffleArray(promptLibrary).slice(0, 4);
    promptOptions.innerHTML = "";

    options.forEach((prompt) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "prompt-chip";
        button.textContent = prompt;
        button.addEventListener("click", () => {
            questionInput.value = prompt;
            questionInput.focus();
        });
        promptOptions.appendChild(button);
    });
}

function buildMinorKeywords(suit, rank) {
    return [suit.theme, ...rank.keywords];
}

function buildMinorImageFile(suit, rank) {
    const prefixMap = {
        wands: "Wands",
        cups: "Cups",
        swords: "Swords",
        pentacles: "Pents"
    };

    return `${prefixMap[suit.key]}${String(rank.order).padStart(2, "0")}.jpg`;
}

function buildMinorSymbolism(suit, rank) {
    const rankText = {
        1: "它更像一颗刚落地的种子，还需要被看见、被投入、被培养。",
        2: "这里更像两股力量正在试探彼此，关键在于你怎么拿捏和回应。",
        3: "局势开始向外展开，合作、成长或外部连接会变得重要。",
        4: "它让节奏慢下来，逼你面对稳定感和停滞感之间的差别。",
        5: "不舒服、摩擦或落差已经出现，这张牌会让矛盾更直接地被感知。",
        6: "这是一张过渡中的牌，意味着你已经不在原地，但也还没完全抵达新的位置。",
        7: "你会进入一段需要辨别、坚持或面对考验的阶段。",
        8: "节奏会加快，很多事不再允许你无限拖着不做决定。",
        9: "你已经积累了不少，接下来更关键的是如何稳住成果和心态。",
        10: "一整轮能量走到了结果位，完成感与负担感常常会同时出现。",
        11: "它像一封新消息，带来尝试、学习或尚不成熟但值得留意的开端。",
        12: "行动被明显放大，重点不是有没有动，而是动得是否准确。",
        13: "这张牌比较成熟，会把议题拉回情绪掌握、照顾方式与稳定影响力。",
        14: "这是一种已经能定调的能量，说明你需要更有主心骨地面对现实。"
    };

    return rankText[rank.order];
}

function refreshChipState() {
    const value = clampCount(Number(countInput.value) || 1);
    countInput.value = value;

    chips.forEach((chip) => {
        chip.classList.toggle("active", Number(chip.dataset.count) === value);
    });
}

function clampCount(value) {
    return Math.max(1, Math.min(7, value));
}

function startInteractiveDraw() {
    const question = questionInput.value.trim();
    const count = clampCount(Number(countInput.value) || 3);
    const spread = spreads[count] || spreads[3];
    const lens = analyzeQuestion(question);

    currentReadingState = null;
    selectionState = createSelectionState(question, count, spread, lens);
    selectionState.animateOnRender = true;
    sessionStorage.removeItem("tarotReading");
    cardsContainer.innerHTML = "";
    summary.classList.add("empty-state");
    summary.innerHTML = "牌已经洗好。请从扇形牌阵里拖动背面牌到抽牌区，完成本次抽取。";
    resultMeta.textContent = "等待你拖动抽牌";
    renderSelectionStage();
}

function reshuffleSelection() {
    const question = questionInput.value.trim();
    const count = clampCount(Number(countInput.value) || 3);
    const spread = spreads[count] || spreads[3];
    const lens = analyzeQuestion(question);

    if (
        !selectionState ||
        selectionState.selectedSlots.length === 0 ||
        selectionState.count !== count ||
        selectionState.question !== question
    ) {
        selectionState = createSelectionState(question, count, spread, lens);
        selectionState.animateOnRender = true;
    } else {
        const unselectedCards = [
            ...selectionState.visibleCards.map((slot) => slot.card),
            ...selectionState.remainingDeck.map((slot) => slot.card)
        ];

        selectionState = {
            question,
            count,
            spread,
            lens,
            selectedSlots: selectionState.selectedSlots,
            remainingDeck: [],
            visibleCards: [],
            animateOnRender: true
        };

        refillVisibleCardsFromCards(selectionState, shuffleArray(unselectedCards));
    }

    cardsContainer.innerHTML = "";
    summary.classList.add("empty-state");
    summary.innerHTML = "已重新洗牌并换成另一组背面牌。继续拖动你真正想抽的那几张。";
    resultMeta.textContent = selectionState.selectedSlots.length
        ? `已抽 ${selectionState.selectedSlots.length} 张，已换新牌阵`
        : "已换成新的 15 张牌阵";
    renderSelectionStage();
}

function createSelectionState(question, count, spread, lens) {
    const shuffledCards = shuffleArray(tarotDeck);
    const state = {
        question,
        count,
        spread,
        lens,
        selectedSlots: [],
        remainingDeck: [],
        visibleCards: []
    };

    refillVisibleCardsFromCards(state, shuffledCards);
    return state;
}

function refillVisibleCardsFromCards(state, cards) {
    const slots = cards.map((card) => createSelectionSlot(card));
    state.visibleCards = slots.slice(0, Math.min(15, slots.length));
    state.remainingDeck = slots.slice(state.visibleCards.length);
}

function createSelectionSlot(card) {
    return {
        slotId: `${card.id}-${Math.random().toString(36).slice(2, 9)}`,
        card
    };
}

function restoreReading() {
    const saved = sessionStorage.getItem("tarotReading");
    if (!saved) {
        return;
    }

    try {
        const readingState = JSON.parse(saved);
        if (!readingState || !Array.isArray(readingState.picks) || readingState.picks.length === 0) {
            return;
        }

        const upgradedState = {
            ...readingState,
            lens: readingState.lens || analyzeQuestion(readingState.question || ""),
            picks: readingState.picks.map((entry, index) => {
                if (entry.contextualMeaning && entry.symbolism && entry.contextualAdvice) {
                    return entry;
                }

                return buildReadingEntry(
                    { card: entry.card, reversed: entry.reversed },
                    index,
                    readingState.picks.map((item) => item.position),
                    readingState.lens || analyzeQuestion(readingState.question || "")
                );
            })
        };

        questionInput.value = upgradedState.question || "";
        countInput.value = clampCount(upgradedState.picks.length);
        refreshChipState();
        selectionState = null;
        hideSelectionStage();
        renderReadingState(upgradedState);
    } catch (_error) {
        sessionStorage.removeItem("tarotReading");
    }
}

function renderSelectionStage() {
    if (!selectionState) {
        hideSelectionStage();
        return;
    }

    selectionStage.classList.remove("hidden");
    selectionPool.innerHTML = "";
    selectionHint.textContent = "从完整 78 张牌里，每次只展开 15 张背面牌。把想要的牌拖到抽牌区；若这组不合感觉，就洗牌换新一组。";
    selectionMeta.textContent = `已展开 ${selectionState.visibleCards.length} 张背面牌`;
    selectionProgress.textContent = `已抽取 ${selectionState.selectedSlots.length} / ${selectionState.count} 张。目标张数抽满后会自动生成解读。`;
    selectionDropText.textContent = selectionState.selectedSlots.length >= selectionState.count
        ? "抽牌完成，正在整理结果"
        : "把背面牌拖到这里完成抽取";

    renderSelectionFan();
    renderSelectedSlots();

    if (selectionState.animateOnRender) {
        animateShuffleFan();
        selectionState.animateOnRender = false;
    }
}

function renderSelectionFan() {
    const total = selectionState.visibleCards.length;
    const containerWidth = selectionPool.clientWidth || 780;
    const totalSpan = Math.min(containerWidth * 0.68, 540);
    const spread = total > 1 ? totalSpan / (total - 1) : 0;

    selectionState.visibleCards.forEach((slot, index) => {
        const card = document.createElement("div");
        const angle = (index - (total - 1) / 2) * 5;
        const offset = (index - (total - 1) / 2) * spread;
        const lift = Math.abs(index - (total - 1) / 2) * 3.2;

        card.className = "fan-card";
        card.draggable = true;
        card.dataset.slotId = slot.slotId;
        card.style.setProperty("--fan-angle", `${angle}deg`);
        card.style.setProperty("--fan-offset", `${offset}px`);
        card.style.setProperty("--fan-lift", `${lift}px`);
        card.style.setProperty("--fan-index", String(index));
        card.style.zIndex = String(index + 1);
        card.setAttribute("aria-label", `拖动背面牌 ${index + 1} 到抽牌区`);
        card.innerHTML = `
            <div class="fan-card-inner">
                <span class="fan-card-number">${index + 1}</span>
                <span class="fan-card-mark">Tarot</span>
                <span class="fan-card-hint">拖动抽取</span>
            </div>
        `;

        card.addEventListener("dragstart", (event) => handleCardDragStart(event, slot.slotId));
        card.addEventListener("dragend", handleCardDragEnd);
        selectionPool.appendChild(card);
    });
}

function renderSelectedSlots() {
    selectionPicked.innerHTML = "";

    for (let index = 0; index < selectionState.count; index++) {
        const picked = selectionState.selectedSlots[index];
        const cell = document.createElement("div");
        cell.className = `picked-slot${picked ? " is-filled" : ""}`;

        if (picked) {
            cell.innerHTML = `
                <span class="picked-slot-order">第 ${index + 1} 张</span>
                <span class="picked-slot-name">已抽取</span>
                <span class="picked-slot-orientation">结果将在解析页统一揭晓</span>
            `;
        } else {
            cell.innerHTML = `
                <span class="picked-slot-order">第 ${index + 1} 张</span>
                <span class="picked-slot-name">等待抽取</span>
            `;
        }

        selectionPicked.appendChild(cell);
    }
}

function hideSelectionStage() {
    selectionStage.classList.add("hidden");
    selectionPool.innerHTML = "";
    selectionPicked.innerHTML = "";
    selectionDropZone.classList.remove("is-active");
}

function handleCardDragStart(event, slotId) {
    draggingSlotId = slotId;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", slotId);
}

function handleCardDragEnd() {
    draggingSlotId = null;
    selectionDropZone.classList.remove("is-active");
}

function handleDropZoneDragOver(event) {
    if (!selectionState || selectionState.selectedSlots.length >= selectionState.count) {
        return;
    }

    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
}

function handleDropZoneDragEnter(event) {
    if (!selectionState || selectionState.selectedSlots.length >= selectionState.count) {
        return;
    }

    event.preventDefault();
    selectionDropZone.classList.add("is-active");
}

function handleDropZoneDragLeave(event) {
    if (!selectionDropZone.contains(event.relatedTarget)) {
        selectionDropZone.classList.remove("is-active");
    }
}

function handleDropZoneDrop(event) {
    if (!selectionState || selectionState.selectedSlots.length >= selectionState.count) {
        return;
    }

    event.preventDefault();
    selectionDropZone.classList.remove("is-active");
    const slotId = event.dataTransfer.getData("text/plain") || draggingSlotId;
    pickVisibleCard(slotId);
}

function pickVisibleCard(slotId) {
    const cardIndex = selectionState.visibleCards.findIndex((slot) => slot.slotId === slotId);
    if (cardIndex === -1) {
        return;
    }

    const [slot] = selectionState.visibleCards.splice(cardIndex, 1);
    selectionState.selectedSlots.push({
        card: slot.card,
        reversed: Math.random() < 0.35
    });

    if (selectionState.visibleCards.length < 15 && selectionState.remainingDeck.length > 0) {
        selectionState.visibleCards.push(selectionState.remainingDeck.shift());
    }

    if (selectionState.selectedSlots.length >= selectionState.count) {
        finalizeInteractiveReading();
        return;
    }

    resultMeta.textContent = `已抽 ${selectionState.selectedSlots.length} / ${selectionState.count} 张`;
    renderSelectionStage();
}

function finalizeInteractiveReading() {
    const readingState = {
        question: selectionState.question,
        lens: selectionState.lens,
        picks: selectionState.selectedSlots.map((entry, index) => buildReadingEntry(entry, index, selectionState.spread, selectionState.lens, selectionState.question))
    };

    sessionStorage.setItem("tarotReading", JSON.stringify(readingState));
    selectionState = null;
    renderReadingState(readingState);
}

function renderReadingState(readingState) {
    currentReadingState = readingState;
    cardsContainer.innerHTML = "";
    hideSelectionStage();
    selectionHint.textContent = "想重新抽一轮时，点击“开始抽牌”重新开始；想看另一组候选背面牌，则在抽牌过程中点“洗牌换一组”。";

    readingState.picks.forEach((entry, index) => {
        const cardNode = template.content.firstElementChild.cloneNode(true);
        const img = cardNode.querySelector(".card-visual");
        const badge = cardNode.querySelector(".orientation-badge");
        const position = cardNode.querySelector(".position-label");
        const name = cardNode.querySelector(".card-name");
        const previewTitle = cardNode.querySelector(".preview-title");
        const previewKeywords = cardNode.querySelector(".preview-keywords");
        const previewMeaning = cardNode.querySelector(".preview-meaning");
        const previewAdvice = cardNode.querySelector(".preview-advice");

        img.src = buildCardImageUrl(entry.card);
        img.alt = `${entry.card.name} ${entry.orientationLabel}`;
        img.loading = "lazy";
        img.referrerPolicy = "no-referrer";
        img.onerror = () => {
            img.onerror = null;
            img.src = buildCardArt(entry.card);
        };

        if (entry.reversed) {
            img.classList.add("reversed");
        }

        badge.textContent = entry.orientationLabel;
        position.textContent = entry.position;
        name.textContent = `${entry.card.name} · ${entry.card.subtitle}`;
        previewTitle.textContent = `${entry.position} · ${entry.orientationLabel}`;
        previewKeywords.textContent = `关键词：${entry.card.keywords.join(" / ")}`;
        previewMeaning.textContent = entry.previewMeaning;
        previewAdvice.textContent = `建议：${entry.previewAdvice}`;

        cardNode.addEventListener("click", () => openDetail(index));
        cardNode.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openDetail(index);
            }
        });

        cardsContainer.appendChild(cardNode);
    });

    summary.classList.remove("empty-state");
    summary.innerHTML = buildSummary(readingState);
    resultMeta.textContent = `${readingState.picks.length} 张牌 · ${readingState.question ? "已结合你的问题生成解读" : "本次为通用指引"}`;
}

function buildReadingEntry(entry, index, spread, lens, question = "") {
    const card = entry.card;
    const position = spread[index] || `位置 ${index + 1}`;
    const orientationLabel = entry.reversed ? "逆位" : "正位";
    const baseMeaning = entry.reversed ? card.reversed : card.upright;

    return {
        index,
        card,
        reversed: entry.reversed,
        position,
        orientationLabel,
        baseMeaning,
        contextualMeaning: buildContextualMeaning(lens, card, entry.reversed, position, question),
        contextualAdvice: buildCardAdvice(lens, card, entry.reversed, question),
        previewMeaning: buildPreviewMeaning(lens, card, entry.reversed, position, question),
        previewAdvice: buildPreviewAdvice(lens, card, entry.reversed, position, question),
        symbolism: `${card.symbolism}${entry.reversed ? " 逆位时，这些画面线索常会表现为能量回缩、节奏受阻，或你还没有真正回应这张牌的提醒。" : ""}`
    };
}

function analyzeQuestion(question) {
    if (!question) {
        return {
            type: "general",
            label: "整体方向",
            focus: "当前整体走向",
            intent: "guidance",
            keywords: []
        };
    }

    const rules = [
        {
            type: "love",
            label: "感情关系",
            terms: ["感情", "爱情", "恋爱", "对象", "关系", "婚", "复合", "喜欢", "暧昧", "分手", "前任", "爱不爱", "想我", "联系", "告白"],
            focusMap: [
                { pattern: /(爱不爱|喜欢不喜欢|是否爱|真心)/, focus: "对方是否真的投入情感", intent: "feelings" },
                { pattern: /(复合|和好|重新开始)/, focus: "关系是否还有复合和回流的可能", intent: "reconcile" },
                { pattern: /(联系|主动|找我|回消息)/, focus: "对方是否会主动靠近与联系", intent: "contact" },
                { pattern: /(发展|结果|未来|走向)/, focus: "关系接下来会往什么方向发展", intent: "future" },
                { pattern: /(暧昧|告白|在一起)/, focus: "这段关系能否明确下来", intent: "commitment" }
            ],
            defaultFocus: "关系里的真实情感、互动方式与未来走向"
        },
        {
            type: "career",
            label: "事业工作",
            terms: ["工作", "事业", "职业", "跳槽", "面试", "升职", "offer", "职场", "离职", "同事", "老板", "项目"],
            focusMap: [
                { pattern: /(跳槽|换工作|离职)/, focus: "是否适合变动工作方向", intent: "change" },
                { pattern: /(面试|offer|录用)/, focus: "机会能否真正落地", intent: "result" },
                { pattern: /(升职|晋升|老板)/, focus: "你在当前环境中的位置和上升空间", intent: "growth" },
                { pattern: /(同事|团队|合作)/, focus: "职场中的人际协作与摩擦", intent: "people" }
            ],
            defaultFocus: "工作发展、执行节奏与现实机会"
        },
        {
            type: "study",
            label: "学业成长",
            terms: ["学业", "考试", "考研", "学习", "论文", "答辩", "成绩", "上岸", "备考", "录取"],
            focusMap: [
                { pattern: /(考试|成绩|上岸|录取|通过)/, focus: "结果是否有机会达到预期", intent: "result" },
                { pattern: /(论文|答辩)/, focus: "当前准备是否足够扎实", intent: "readiness" },
                { pattern: /(学习|备考|复习)/, focus: "方法、节奏和专注力是否需要调整", intent: "process" }
            ],
            defaultFocus: "学习方法、状态与结果趋势"
        },
        {
            type: "money",
            label: "金钱与资源",
            terms: ["钱", "财", "收入", "投资", "副业", "生意", "经济", "赚钱", "支出", "存款"],
            focusMap: [
                { pattern: /(投资|理财|入场)/, focus: "风险和收益是否匹配", intent: "risk" },
                { pattern: /(副业|赚钱|收入)/, focus: "资源增长和现金流变化", intent: "growth" },
                { pattern: /(支出|花钱|存款)/, focus: "财务稳定感与边界", intent: "stability" }
            ],
            defaultFocus: "资源流向、风险控制与稳定感"
        }
    ];

    const keywords = extractQuestionKeywords(question);
    const matchedRule = rules.find((rule) => rule.terms.some((term) => question.includes(term)));

    if (!matchedRule) {
        return {
            type: "general",
            label: "当前处境",
            focus: buildGeneralFocus(question, keywords),
            intent: inferGeneralIntent(question),
            keywords
        };
    }

    const matchedFocus = matchedRule.focusMap.find((item) => item.pattern.test(question));

    return {
        type: matchedRule.type,
        label: matchedRule.label,
        focus: matchedFocus ? matchedFocus.focus : matchedRule.defaultFocus,
        intent: matchedFocus ? matchedFocus.intent : "guidance",
        keywords
    };
}

function extractQuestionKeywords(question) {
    const dictionary = [
        "爱", "喜欢", "真心", "复合", "联系", "主动", "未来", "发展", "结果", "关系",
        "跳槽", "面试", "offer", "升职", "老板", "同事", "项目",
        "考试", "上岸", "成绩", "论文", "答辩", "录取",
        "财运", "投资", "收入", "副业", "赚钱", "支出",
        "选择", "决定", "开始", "继续", "离开", "改变", "机会", "风险"
    ];

    return dictionary.filter((term) => question.includes(term)).slice(0, 5);
}

function buildGeneralFocus(question, keywords) {
    if (/(会不会|能不能|可不可以|行不行)/.test(question)) {
        return "这件事是否有推进空间";
    }

    if (/(为什么|原因)/.test(question)) {
        return "问题背后的原因与症结";
    }

    if (/(怎么|如何)/.test(question)) {
        return "接下来最合适的处理方式";
    }

    if (keywords.length) {
        return `和“${keywords.join("、")}”相关的核心走向`;
    }

    return "当前最值得优先处理的核心问题";
}

function inferGeneralIntent(question) {
    if (/(会不会|能不能|可不可以|行不行)/.test(question)) {
        return "possibility";
    }

    if (/(怎么|如何)/.test(question)) {
        return "method";
    }

    if (/(为什么|原因)/.test(question)) {
        return "cause";
    }

    return "guidance";
}

function formatLensKeywords(lens) {
    return lens.keywords && lens.keywords.length ? `问题关键词：${lens.keywords.join("、")}。` : "";
}

function buildIntentPrompt(lens) {
    const map = {
        feelings: "这更像是在确认情感真假，而不是只看表面互动。",
        reconcile: "重点是关系有没有回流空间，以及阻碍是否还能被松动。",
        contact: "重点在对方是否会主动出现，以及这种主动的质量如何。",
        future: "重点放在未来走向，而不只是当前情绪。",
        commitment: "重点是这段关系能否被说清楚、被确定下来。",
        change: "重点是变动值不值得，以及变动后的现实承接力。",
        result: "重点是结果能否落地，而不是只看过程热度。",
        growth: "重点是你有没有被看见、被提升的空间。",
        people: "重点是人际协作、信任与边界。",
        readiness: "重点是准备是否到位，以及短板在哪。",
        process: "重点是方法、节奏与执行状态。",
        risk: "重点是收益背后你要承担什么风险。",
        stability: "重点是稳不稳，而不是一时冲动。",
        possibility: "重点在于这件事有没有现实推进空间。",
        method: "重点在于你接下来该怎么做才更有效。",
        cause: "重点在于问题为什么会卡在这里。"
    };

    return map[lens.intent] || "重点是抓住你这次提问最想确认的那一层。";
}

function buildContextualMeaning(lens, card, reversed, position, question) {
    const orientationLine = reversed
        ? "逆位说明这条线正在卡住，常见表现是犹豫、回避、过度消耗或节奏失衡。"
        : "正位说明这里的能量更顺，更容易被你转化成可执行的行动。";
    const questionLead = question ? `围绕你提出的“${question}”，` : "";
    const keywordLead = formatLensKeywords(lens);
    const focusLead = `这张牌现在主要回应的是“${lens.focus}”。`;
    const intentLead = buildIntentPrompt(lens);
    const bookLead = card.bookLens
        ? `从《用塔罗写日记》的觉察角度来看，这张牌更重要的提醒是：${card.bookLens} `
        : "";

    const meaningMap = {
        love: `${questionLead}${keywordLead}${position}上的${card.name}不是在空泛地谈爱情，而是在回应你和对方之间的情感流动、亲密感、拉扯点，以及你真正想确认的关系质量。${focusLead}${intentLead}${orientationLine}`,
        career: `${questionLead}${keywordLead}${position}上的${card.name}在回应你的工作议题。它会把焦点拉回目标、执行、边界和现实节奏是否对齐。${focusLead}${intentLead}${orientationLine}`,
        study: `${questionLead}${keywordLead}${position}上的${card.name}在回应你的学业议题。它提醒你别只看努力程度，更要看方法、心态和节奏是否匹配。${focusLead}${intentLead}${orientationLine}`,
        money: `${questionLead}${keywordLead}${position}上的${card.name}在回应你的资源议题。这里更关心你如何处理风险、投入与长期稳定感。${focusLead}${intentLead}${orientationLine}`,
        general: `${questionLead}${keywordLead}${position}上的${card.name}在回应你当前的整体提问。它会把注意力带回此刻最需要被看见的矛盾、动力或关系。${focusLead}${intentLead}${orientationLine}`
    };

    return `${bookLead}${meaningMap[lens.type] || meaningMap.general} 单看牌义，它也表示${reversed ? card.reversed : card.upright}`;
}

function buildCardAdvice(lens, card, reversed, question) {
    const tail = reversed ? "先处理卡住你的那部分，再决定怎么继续。" : "现在更适合你主动一点。";
    const questionTail = question ? ` 这会更贴近你这次提问“${question}”真正想确认的核心。` : "";
    const focusTail = ` 这张牌提示你优先处理“${lens.focus}”这一层。`;
    const bookTail = card.bookLens ? ` 写成塔罗日记时，可以把关注点放在：${card.bookLens}` : "";
    const adviceMap = {
        love: `在感情里少一点猜测，多一点把边界、期待和不安说清楚。${tail}`,
        career: `在工作上先校准目标与优先级，再推进眼前最具体的一步。${tail}`,
        study: `把注意力放回方法、节奏和专注力，而不是单纯加码时间。${tail}`,
        money: `先看清成本、风险和真实承受力，别被一时情绪带着下注。${tail}`,
        general: `从你最能掌控的一步开始，别试图一下子解决所有事。${tail}`
    };

    return `${adviceMap[lens.type] || adviceMap.general} ${card.advice}${focusTail}${bookTail}${questionTail}`;
}

function buildPreviewMeaning(lens, card, reversed, position, question) {
    const orientationText = reversed ? "这里先别急着下结论。" : "这里有比较明确的推进信号。";
    const keywordText = lens.keywords && lens.keywords.length ? `和“${lens.keywords[0]}”最相关的回应是：` : "";
    const positionText = buildPositionPreviewText(position);
    const bookLead = card.bookLens ? `从本书的觉察视角来看，这张牌在提醒你${card.bookLens}` : "";

    const previewMap = {
        love: `${keywordText}${positionText}${card.name}更像在提醒你关注关系里的${pickCardKeyword(card)}，而不是只看表面态度。${orientationText}`,
        career: `${keywordText}${positionText}${card.name}把重点放在${pickCardKeyword(card)}这条线上，说明工作问题的关键不只在结果，也在推进方式。${orientationText}`,
        study: `${keywordText}${positionText}${card.name}更直接回应${lens.focus}，提示你当前最该调整的是${pickCardKeyword(card)}这部分。${orientationText}`,
        money: `${keywordText}${positionText}${card.name}指向${pickCardKeyword(card)}与资源分配的关系，说明这张牌在提醒你先看稳不稳。${orientationText}`,
        general: `${keywordText}${positionText}${card.name}会把问题拉回${lens.focus}，而这张牌特别强调${pickCardKeyword(card)}。${orientationText}`
    };

    if (question && lens.type === "love" && /(爱不爱|喜欢不喜欢|是否爱|真心)/.test(question)) {
        return `${positionText}${card.name}像是在回答“感情有没有真正投入”这一层，重点落在${pickCardKeyword(card)}。${orientationText}`;
    }

    return `${bookLead}${previewMap[lens.type] || previewMap.general}`;
}

function buildPreviewAdvice(lens, card, reversed, position, question) {
    const actionLead = buildPositionAction(position);
    const coreAdvice = reversed ? "先别被情绪或焦虑推着走。" : "可以把注意力更集中一些。";
    const keywordAdvice = lens.keywords && lens.keywords.length ? `先围绕“${lens.keywords[0]}”这一点看清楚。` : "";

    const adviceMap = {
        love: `${actionLead}${keywordAdvice}${reversed ? "先确认对方真实投入，再谈结果。" : "把真实需求说清楚，比反复猜更有效。"} ${card.advice}`,
        career: `${actionLead}${keywordAdvice}${reversed ? "先校准方向和边界。" : "先落一个实际动作。"} ${card.advice}`,
        study: `${actionLead}${keywordAdvice}${reversed ? "先修方法和节奏。" : "先保持稳定推进。"} ${card.advice}`,
        money: `${actionLead}${keywordAdvice}${reversed ? "先收住冲动。" : "先守住节奏和边界。"} ${card.advice}`,
        general: `${actionLead}${keywordAdvice}${coreAdvice} ${card.advice}`
    };

    if (question && lens.type === "love" && /(联系|主动|找我|回消息)/.test(question)) {
        return `${actionLead}${reversed ? "先别过度期待对方立刻行动。" : "留意真正有质量的靠近，而不是表面热度。"} ${card.advice}`;
    }

    return adviceMap[lens.type] || adviceMap.general;
}
function buildPositionPreviewText(position) {
    const map = {
        "过去": "从过去这张牌看，",
        "现在": "从现在这张牌看，",
        "未来": "从未来趋势看，",
        "现状": "就现状来说，",
        "阻碍": "在阻碍位上，",
        "助力": "在助力位上，",
        "建议": "在建议位上，",
        "核心问题": "在核心问题位上，",
        "外在影响": "从外在影响看，",
        "内在状态": "从你的内在状态看，",
        "转机": "在转机位上，",
        "下一步": "关于下一步，",
        "隐藏因素": "在隐藏因素位上，",
        "可用资源": "在可用资源位上，",
        "行动方向": "在行动方向位上，",
        "结果趋势": "从结果趋势看，",
        "你自己": "从你自己这边看，",
        "对方或环境": "从对方或环境这边看，",
        "当前局势": "从当前局势看，",
        "挑战": "在挑战位上，",
        "优势": "在优势位上，",
        "核心信息": "这张核心牌显示，"
    };

    return map[position] || `在${position}这张牌里，`;
}

function buildPositionAction(position) {
    const map = {
        "过去": "先理解过去留下了什么影响。 ",
        "现在": "先看清你此刻正在经历什么。 ",
        "未来": "先把未来趋势当成提醒，不要当成绝对结果。 ",
        "阻碍": "先处理阻碍，不要绕过去。 ",
        "助力": "先用好已经存在的助力。 ",
        "建议": "这张牌更适合直接执行。 ",
        "转机": "转机往往出现在你愿意调整的时候。 ",
        "下一步": "下一步要尽量具体。 ",
        "结果趋势": "先看趋势，再决定怎么修正当下。 "
    };

    return map[position] || "";
}

function pickCardKeyword(card) {
    return card.keywords[1] || card.keywords[0] || "关键主题";
}

function buildSummary(readingState) {
    const uprightCount = readingState.picks.filter((item) => !item.reversed).length;
    const reversedCount = readingState.picks.length - uprightCount;
    const dominant = getDominantKeywords(readingState.picks);
    const question = readingState.question
        ? `你这次提问聚焦于“${escapeHtml(readingState.question)}”。`
        : "你这次没有输入具体问题，因此本次解读更偏向近期整体提醒。";

    const directAnswer = buildDirectAnswer(readingState);
    const energy = uprightCount >= reversedCount
        ? "整体来看，这组牌更偏向可推进、可修复，说明答案并不是完全停滞的。"
        : "逆位牌偏多，说明问题不是不能解决，而是更需要先调整心态、节奏与方法。";

    return `
        <strong>综合解读：</strong>${question}
        <br><br>
        <strong>对你问题的直接回应：</strong>${directAnswer}
        <br><br>
        这组牌最明显的主题是 <strong>${dominant.join("、")}</strong>。${energy}
        把鼠标放到每张牌上可以预览简版解读，点击卡牌可以进入详细页面查看完整说明。
    `;
}

function buildDirectAnswer(readingState) {
    const lens = readingState.lens;
    const picks = readingState.picks;
    const mainCards = picks.slice(0, Math.min(2, picks.length)).map((item) => item.card.name).join("、");
    const positive = picks.filter((item) => !item.reversed).length >= Math.ceil(picks.length / 2);
    const questionLead = readingState.question ? `针对“${readingState.question}”，` : "";
    const focusLead = `围绕“${lens.focus}”来看，`;

    const answerMap = {
        love: positive
            ? `${questionLead}${focusLead}以 ${mainCards} 为主导，这段关系并非没有空间，重点在于把真实需求、依恋方式和边界说清楚，再判断这份情感到底有多深。`
            : `${questionLead}${focusLead}以 ${mainCards} 为主导，这段关系里确实存在卡点。与其急着下结论，不如先面对关系里真正卡住的部分。`,
        career: positive
            ? `${questionLead}${focusLead}以 ${mainCards} 为主导，这件工作或事业问题有推进空间，但要靠清晰目标和实际动作。`
            : `${questionLead}${focusLead}以 ${mainCards} 为主导，这件事目前更适合先校准方向、减少内耗，再谈发力。`,
        study: positive
            ? `${questionLead}${focusLead}以 ${mainCards} 为主导，你的学业并非没有机会，方法对了，结果会慢慢向好。`
            : `${questionLead}${focusLead}以 ${mainCards} 为主导，你现在最需要的不是更拼，而是先把节奏和方法整理对。`,
        money: positive
            ? `${questionLead}${focusLead}以 ${mainCards} 为主导，这个资源问题有机会改善，但前提是判断要稳、动作要克制。`
            : `${questionLead}${focusLead}以 ${mainCards} 为主导，这件事目前不适合冲动下注，先守住风险边界更重要。`,
        general: positive
            ? `${questionLead}${focusLead}以 ${mainCards} 为主导，这个问题可以推进，但你需要先抓住关键点再行动。`
            : `${questionLead}${focusLead}以 ${mainCards} 为主导，这个问题不是不能解决，而是现在更适合先看清症结。`
    };

    return answerMap[lens.type] || answerMap.general;
}

function getDominantKeywords(picks) {
    const counts = new Map();

    picks.forEach(({ card }) => {
        card.keywords.forEach((keyword) => {
            counts.set(keyword, (counts.get(keyword) || 0) + 1);
        });
    });

    return [...counts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([keyword]) => keyword);
}

function openDetail(index) {
    sessionStorage.setItem("tarotSelectedIndex", String(index));
    window.location.href = "detail.html";
}

function buildCardArt(card) {
    const firstLine = card.name.length > 4 ? card.name.slice(0, 4) : card.name;
    const secondLine = card.name.length > 4 ? card.name.slice(4) : "";
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 500">
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#f0d7a0" />
                    <stop offset="60%" stop-color="#b85c38" />
                    <stop offset="100%" stop-color="#182432" />
                </linearGradient>
            </defs>
            <rect width="300" height="500" rx="24" fill="#121212"/>
            <rect x="12" y="12" width="276" height="476" rx="18" fill="url(#bg)"/>
            <circle cx="150" cy="165" r="78" fill="none" stroke="rgba(255,245,224,0.8)" stroke-width="2"/>
            <text x="150" y="176" text-anchor="middle" font-size="40" fill="#fff8eb" font-family="Georgia">${firstLine}</text>
            <text x="150" y="220" text-anchor="middle" font-size="40" fill="#fff8eb" font-family="Georgia">${secondLine}</text>
            <text x="150" y="430" text-anchor="middle" font-size="22" fill="#fff8eb" font-family="Georgia">${card.name}</text>
            <text x="150" y="456" text-anchor="middle" font-size="14" fill="rgba(255,248,235,0.85)" font-family="Georgia">${card.subtitle}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function buildCardImageUrl(card) {
    if (!card.imageFile) {
        return buildCardArt(card);
    }

    return `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(card.imageFile)}`;
}

function animateShuffleFan() {
    selectionStage.classList.remove("is-shuffling");
    void selectionStage.offsetWidth;
    selectionStage.classList.add("is-shuffling");
    window.clearTimeout(animateShuffleFan.timeoutId);
    animateShuffleFan.timeoutId = window.setTimeout(() => {
        selectionStage.classList.remove("is-shuffling");
    }, 1100);
}

function shuffleArray(items) {
    const list = [...items];

    for (let index = list.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
    }

    return list;
}

function escapeHtml(text) {
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll("\"", "&quot;")
        .replaceAll("'", "&#39;");
}

function renderLearningNotes() {
    if (!learningNotesContainer) {
        return;
    }

    learningNotesContainer.innerHTML = "";

    defaultLearningNotes.forEach((item) => {
        const card = document.createElement("article");
        card.className = "knowledge-card";
        card.innerHTML = `
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
            <div class="tag-row">${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
        `;
        learningNotesContainer.appendChild(card);
    });
}

function readStoredList(key) {
    try {
        return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (_error) {
        return [];
    }
}

function writeStoredList(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getJournalEntries() {
    return readStoredList(storageKeys.journals)
        .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function getGuideEntries() {
    return [...defaultGuideEntries, ...readStoredList(storageKeys.guides)];
}

function getLanguageEntries() {
    return [...defaultLanguageEntries, ...readStoredList(storageKeys.language)];
}

function handleJournalSubmit(event) {
    event.preventDefault();
    const now = new Date();
    const content = journalContentInput.value.trim();
    const title = journalTitleInput.value.trim() || "未命名塔罗日记";

    if (!content) {
        window.alert("先写一点日记内容再保存。");
        return;
    }

    const readingSnapshot = currentReadingState ? buildJournalSnapshot(currentReadingState) : null;
    const entries = getJournalEntries();
    entries.push({
        id: `journal-${Date.now()}`,
        title,
        date: journalDateInput.value || formatDateInput(now),
        createdAt: now.toISOString(),
        mood: journalMoodInput.value,
        content,
        question: readingSnapshot ? readingSnapshot.question : "",
        cards: readingSnapshot ? readingSnapshot.cards : [],
        summary: readingSnapshot ? readingSnapshot.summary : ""
    });

    writeStoredList(storageKeys.journals, entries);
    renderJournalSection();
    resetJournalForm();
}

function resetJournalForm() {
    if (!journalForm || !journalDateInput || !journalMoodInput) {
        return;
    }

    journalForm.reset();
    journalDateInput.value = formatDateInput(new Date());
    journalMoodInput.value = "平静";
}

function fillJournalFormFromCurrentReading() {
    if (!currentReadingState) {
        window.alert("先完成一次抽牌阅读，再把结果带入日记。");
        return;
    }

    const snapshot = buildJournalSnapshot(currentReadingState);
    sessionStorage.setItem("tarotPendingJournalDraft", JSON.stringify({
        title: snapshot.question ? `${snapshot.question} · 阅读记录` : "塔罗阅读记录",
        content: `问题：${snapshot.question || "通用指引"}\n牌阵：${snapshot.cards.join("、")}\n摘要：${snapshot.summary}\n\n今天的事件与感受：`,
        date: formatDateInput(new Date()),
        mood: "平静",
        selectedCards: snapshot.cardNames
    }));
    window.location.href = "journal.html";
}

function saveCurrentReadingToJournal() {
    if (!currentReadingState) {
        window.alert("先完成一次抽牌阅读，再保存到日记。");
        return;
    }

    const now = new Date();
    const snapshot = buildJournalSnapshot(currentReadingState);
    const entries = getJournalEntries();
    entries.push({
        id: `journal-${Date.now()}`,
        title: snapshot.question ? `${snapshot.question} · 自动归档` : "塔罗阅读自动归档",
        date: formatDateInput(now),
        createdAt: now.toISOString(),
        content: `自动保存的阅读记录。\n问题：${snapshot.question || "通用指引"}\n牌阵：${snapshot.cards.join("、")}\n摘要：${snapshot.summary}`,
        question: snapshot.question,
        cards: snapshot.cardNames,
        summary: snapshot.summary
    });

    writeStoredList(storageKeys.journals, entries);
    renderJournalSection();
    setReadingSaveFeedback("已成功保存到日记记录。");
}

function setReadingSaveFeedback(message) {
    if (!readingSaveFeedback) {
        return;
    }

    readingSaveFeedback.textContent = message;
    window.clearTimeout(setReadingSaveFeedback.timeoutId);
    setReadingSaveFeedback.timeoutId = window.setTimeout(() => {
        readingSaveFeedback.textContent = "";
    }, 2800);
}

function buildJournalSnapshot(readingState) {
    return {
        question: readingState.question || "",
        cardNames: readingState.picks.map((item) => item.card.name),
        cards: readingState.picks.map((item) => `${item.position} ${item.card.name}${item.reversed ? "（逆位）" : "（正位）"}`),
        summary: buildDirectAnswer(readingState)
    };
}

function renderJournalSection() {
    if (!weeklySummaryNode || !monthlySummaryNode || !journalListNode) {
        return;
    }

    const entries = getJournalEntries();
    weeklySummaryNode.textContent = buildAiSummary(entries, 7, "周");
    monthlySummaryNode.textContent = buildAiSummary(entries, 30, "月");
    renderJournalList(entries);
}

function renderJournalList(entries) {
    journalListNode.innerHTML = "";

    if (!entries.length) {
        journalListNode.innerHTML = `<div class="empty-list">还没有日记记录。完成阅读后可以一键归档，也可以手动写下复盘。</div>`;
        return;
    }

    entries.forEach((entry) => {
        const card = document.createElement("article");
        card.className = "journal-card";
        card.innerHTML = `
            <p class="journal-card-meta">${escapeHtml(entry.date)} · ${escapeHtml(entry.mood)}</p>
            <h3>${escapeHtml(entry.title)}</h3>
            <p>${escapeHtml(entry.content).replaceAll("\n", "<br>")}</p>
            ${entry.cards && entry.cards.length ? `<div class="tag-row">${entry.cards.slice(0, 4).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>` : ""}
            <div class="card-actions">
                <button class="text-btn" type="button" data-journal-delete="${entry.id}">删除</button>
            </div>
        `;
        journalListNode.appendChild(card);
    });

    journalListNode.querySelectorAll("[data-journal-delete]").forEach((button) => {
        button.addEventListener("click", () => deleteJournalEntry(button.dataset.journalDelete));
    });
}

function deleteJournalEntry(id) {
    const entries = getJournalEntries().filter((entry) => entry.id !== id);
    writeStoredList(storageKeys.journals, entries);
    renderJournalSection();
}

function clearJournalHistory() {
    if (!getJournalEntries().length) {
        return;
    }

    if (!window.confirm("确定要清空所有日记记录吗？")) {
        return;
    }

    writeStoredList(storageKeys.journals, []);
    renderJournalSection();
}

function buildAiSummary(entries, days, label) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - (days - 1));
    const recent = entries.filter((entry) => new Date(entry.date) >= cutoff);

    if (!recent.length) {
        return `最近还没有可用于生成${label}总结的日记。先记录几次抽牌和现实反馈，这里会自动整理主题、情绪与重复课题。`;
    }

    const moodCounts = countBy(recent.map((entry) => entry.mood || "平静"));
    const topMood = topKey(moodCounts);
    const cardMentions = countBy(recent.flatMap((entry) => entry.cards || []).map((item) => item.replace(/（.*?）/g, "").trim()));
    const topCard = topKey(cardMentions);
    const questions = recent.map((entry) => entry.question).filter(Boolean);
    const recurringFocus = topKey(countBy(questions.flatMap((item) => item.split(/[，。？、\s]/)).filter((word) => word && word.length >= 2)));

    return `本地 AI ${label}总结基于最近 ${recent.length} 篇记录生成：你的情绪底色偏向“${topMood}”，最常回到的牌面线索是“${topCard || "尚未形成固定主牌"}”，重复出现的关注点更靠近“${recurringFocus || "自我整理与生活节奏"}”。适合回看这些记录里你反复提到的选择、边界和行动方式，确认哪些已经有进展，哪些还停留在同一循环里。`;
}

function countBy(items) {
    const counts = new Map();
    items.forEach((item) => {
        counts.set(item, (counts.get(item) || 0) + 1);
    });
    return counts;
}

function topKey(counts) {
    return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "";
}

function handleGuideSubmit(event) {
    event.preventDefault();
    const title = guideTitleInput.value.trim();
    const content = guideContentInput.value.trim();

    if (!title || !content) {
        window.alert("学习主题和内容都需要填写。");
        return;
    }

    const items = readStoredList(storageKeys.guides);
    items.push({
        id: `guide-${Date.now()}`,
        title,
        content
    });
    writeStoredList(storageKeys.guides, items);
    guideForm.reset();
    renderGuideSection();
}

function renderGuideSection() {
    if (!guideListNode) {
        return;
    }

    const items = getGuideEntries();
    guideListNode.innerHTML = "";

    items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "guide-card";
        card.innerHTML = `
            <p class="guide-card-meta">${item.builtIn ? "系统预置" : "自定义内容"}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.content).replaceAll("\n", "<br>")}</p>
            ${item.builtIn ? "" : `<div class="card-actions"><button class="text-btn" type="button" data-guide-delete="${item.id}">删除</button></div>`}
        `;
        guideListNode.appendChild(card);
    });

    guideListNode.querySelectorAll("[data-guide-delete]").forEach((button) => {
        button.addEventListener("click", () => deleteGuideEntry(button.dataset.guideDelete));
    });
}

function deleteGuideEntry(id) {
    writeStoredList(storageKeys.guides, readStoredList(storageKeys.guides).filter((item) => item.id !== id));
    renderGuideSection();
}

function handleLanguageSubmit(event) {
    event.preventDefault();
    const term = languageTermInput.value.trim();
    const meaning = languageMeaningInput.value.trim();
    const example = languageExampleInput.value.trim();

    if (!term || !meaning || !example) {
        window.alert("术语、中文解释和例句都需要填写。");
        return;
    }

    const items = readStoredList(storageKeys.language);
    items.push({
        id: `lang-${Date.now()}`,
        term,
        meaning,
        example
    });
    writeStoredList(storageKeys.language, items);
    languageForm.reset();
    renderLanguageSection();
}

function renderLanguageSection() {
    if (!languageListNode) {
        return;
    }

    const items = getLanguageEntries();
    languageListNode.innerHTML = "";

    items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "knowledge-card";
        card.innerHTML = `
            <div class="language-term">
                <strong>${escapeHtml(item.term)}</strong>
                <span class="tag">${escapeHtml(item.meaning)}</span>
            </div>
            <p>${escapeHtml(item.example)}</p>
            ${item.builtIn ? "" : `<div class="card-actions"><button class="text-btn" type="button" data-language-delete="${item.id}">删除</button></div>`}
        `;
        languageListNode.appendChild(card);
    });

    languageListNode.querySelectorAll("[data-language-delete]").forEach((button) => {
        button.addEventListener("click", () => deleteLanguageEntry(button.dataset.languageDelete));
    });
}

function deleteLanguageEntry(id) {
    writeStoredList(storageKeys.language, readStoredList(storageKeys.language).filter((item) => item.id !== id));
    renderLanguageSection();
}

function formatDateInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function initUsageModal() {
    const modal = document.getElementById("usage-modal");
    const closeBtn = document.getElementById("usage-modal-close");
    const sessionKey = `usageModalSeen:${window.location.pathname}`;

    if (!modal || sessionStorage.getItem(sessionKey) === "1") {
        return;
    }

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");

    const close = () => {
        modal.classList.add("hidden");
        modal.setAttribute("aria-hidden", "true");
        sessionStorage.setItem(sessionKey, "1");
    };

    closeBtn?.addEventListener("click", close);
    modal.querySelectorAll("[data-close-usage='true']").forEach((node) => {
        node.addEventListener("click", close);
    });
}
