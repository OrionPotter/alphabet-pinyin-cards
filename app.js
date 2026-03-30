const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const writingSongs = {
  a: "先写多半圆，竖弯写右边。",
  b: "长竖出二线，右下写半圆。",
  c: "一笔写成多半圆，上下紧挨二三线。",
  d: "中格先写左半圆，右边长竖出二线。",
  e: "中格正中写横线，接笔再写多半圆。",
  f: "左竖弯，出二线，短横写在二线边。",
  g: "先写左半圆，竖弯下三线。",
  h: "长竖出二线，弯竖写右边。",
  i: "短竖写中间，一点出二线。",
  j: "左竖弯，下三线，上格正中写圆点。",
  k: "长竖出二线，斜左斜右写中间。",
  l: "长竖出二线，写直才好看。",
  m: "短竖写中间，弯竖弯竖写右边。",
  n: "短竖写中间，弯竖写右边。",
  o: "从左到右写圆圈，上下紧挨二三线。",
  p: "长竖下三线，中格写上右半圆。",
  q: "中格先写左半圆，右边长竖下三线。",
  r: "短竖写中间，右上一小弯。",
  s: "8 字写一半，上下挨着线。",
  t: "竖右弯，出二线，短横写在二线边。",
  u: "中格写竖弯，短竖写右边。",
  ü: "u 字写中间，两点出二线。",
  w: "斜下斜上写两遍，上下紧挨二三线。",
  x: "左斜右斜叉中间，上下紧挨二三线。",
  y: "右斜中格慢，左斜下三线。",
  z: "2 字硬拐弯，中格要充满。",
};

const pinyinReference = {
  rhyme:
    "四线三格记心间，拼音字母住里边。声调、圆点写上格，胳膊长了住上格，尾巴长了住下格，其它部分在中格。中格一定要饱满，上格、下格空一点儿，书写规则记心间，拼音才能写规范。",
  rules: [
    "声调和圆点写在上格。",
    "胳膊长了住上格，尾巴长了住下格，其它部分在中格。",
    "中格一定要饱满，上格、下格空一点儿。",
    "音节里的字母要靠紧，写得紧凑、匀称。",
    "按顺序写完一个音节的所有字母后再标调号。",
    "不要看一个字母写一个字母，要看一个音节写一个音节。",
  ],
  errorPairs: ["b-d", "p-q", "t-f", "ei-ie", "ui-iu"],
};

const pinyinInitialItems = [
  { primary: "b", detail: "菠" },
  { primary: "p", detail: "泼" },
  { primary: "m", detail: "摩" },
  { primary: "f", detail: "佛" },
  { primary: "d", detail: "的" },
  { primary: "t", detail: "特" },
  { primary: "n", detail: "讷" },
  { primary: "l", detail: "乐" },
  { primary: "g", detail: "歌" },
  { primary: "k", detail: "可" },
  { primary: "h", detail: "喝" },
  { primary: "j", detail: "鸡" },
  { primary: "q", detail: "气" },
  { primary: "x", detail: "西" },
  { primary: "zh", detail: "知" },
  { primary: "ch", detail: "吃" },
  { primary: "sh", detail: "师" },
  { primary: "r", detail: "日" },
  { primary: "z", detail: "字" },
  { primary: "c", detail: "磁" },
  { primary: "s", detail: "司" },
  { primary: "y", detail: "医" },
  { primary: "w", detail: "舞" },
];

const pinyinSimpleFinalItems = [
  { primary: "a", detail: "阿" },
  { primary: "o", detail: "哦" },
  { primary: "e", detail: "鹅" },
  { primary: "i", detail: "衣" },
  { primary: "u", detail: "乌" },
  { primary: "ü", detail: "鱼" },
];

const pinyinCompoundFinalItems = [
  { primary: "ai", detail: "艾" },
  { primary: "ei", detail: "诶" },
  { primary: "ui", detail: "水" },
  { primary: "ao", detail: "袄" },
  { primary: "ou", detail: "鸥" },
  { primary: "iu", detail: "优" },
  { primary: "ie", detail: "姐" },
  { primary: "üe", detail: "月" },
];

const pinyinSpecialFinalItems = [{ primary: "er", detail: "耳" }];

const pinyinFrontNasalFinalItems = [
  { primary: "an", detail: "安" },
  { primary: "en", detail: "恩" },
  { primary: "in", detail: "音" },
  { primary: "un", detail: "春" },
  { primary: "ün", detail: "晕" },
];

const pinyinBackNasalFinalItems = [
  { primary: "ang", detail: "昂" },
  { primary: "eng", detail: "风" },
  { primary: "ing", detail: "鹦" },
  { primary: "ong", detail: "虫" },
];

const pinyinFinalItems = [
  ...pinyinSimpleFinalItems,
  ...pinyinCompoundFinalItems,
  ...pinyinSpecialFinalItems,
  ...pinyinFrontNasalFinalItems,
  ...pinyinBackNasalFinalItems,
];

const phoneticReference = {
  rhyme:
    "音标像地图，帮助孩子把声音和口型一一对应。先听音，再看口型和示例词，最后自己模仿读出来。",
  rules: [
    "先学单元音，再学双元音，最后学习辅音，顺序更稳定。",
    "长音通常要拉长一点，短音保持轻快，不要拖尾。",
    "清辅音发音轻，浊辅音发音时喉咙会有振动。",
    "每次只盯住一个音，配合一个熟悉的示例词记忆更快。",
    "看到音标时先不要急着拼字母，要先想它代表的声音。",
  ],
  errorPairs: ["iː-ɪ", "e-æ", "ʌ-ɑː", "ɔː-ɒ", "s-θ", "w-v", "n-ŋ"],
};

const phoneticMonophthongItems = [
  { primary: "iː", detail: "see", tip: "嘴角向两侧展开，声音拉长。" },
  { primary: "ɪ", detail: "ship", tip: "嘴型比 iː 更放松，声音更短。" },
  { primary: "e", detail: "bed", tip: "嘴巴微开，舌位居中偏前。" },
  { primary: "æ", detail: "cat", tip: "嘴巴张得更开，发音明亮。" },
  { primary: "ʌ", detail: "cup", tip: "嘴巴自然张开，声音短促。" },
  { primary: "ɑː", detail: "car", tip: "嘴巴张大，声音从口腔后部出来。" },
  { primary: "ɒ", detail: "hot", tip: "嘴唇略圆，声音短。" },
  { primary: "ɔː", detail: "door", tip: "嘴唇更圆，声音拉长。" },
  { primary: "ʊ", detail: "book", tip: "嘴唇轻轻收圆，声音短。" },
  { primary: "uː", detail: "blue", tip: "双唇收圆更明显，发音更长。" },
  { primary: "ɜː", detail: "bird", tip: "舌头放平，声音平稳拉长。" },
  { primary: "ə", detail: "about", tip: "弱读最常见，短而轻，不要重读。" },
];

const phoneticDiphthongItems = [
  { primary: "eɪ", detail: "day", tip: "从 e 滑向 ɪ，结尾抬高。" },
  { primary: "aɪ", detail: "my", tip: "开口后快速滑向 ɪ。" },
  { primary: "ɔɪ", detail: "boy", tip: "先圆唇，再往前收。" },
  { primary: "əʊ", detail: "go", tip: "先轻后圆，结尾更收口。" },
  { primary: "aʊ", detail: "now", tip: "从大开口滑向圆唇。" },
  { primary: "ɪə", detail: "ear", tip: "从短 ɪ 滑向弱读 ə。" },
  { primary: "eə", detail: "hair", tip: "从 e 滑向 ə，口型逐渐放松。" },
  { primary: "ʊə", detail: "tour", tip: "双唇先圆，再慢慢放松。" },
];

const phoneticConsonantItems = [
  { primary: "p", detail: "pen", tip: "双唇闭合后送气。" },
  { primary: "b", detail: "bag", tip: "和 p 口型接近，但喉咙会振动。" },
  { primary: "t", detail: "ten", tip: "舌尖碰上齿龈，轻送气。" },
  { primary: "d", detail: "dog", tip: "和 t 位置接近，但带振动。" },
  { primary: "k", detail: "cat", tip: "舌后部抬起，再突然放开。" },
  { primary: "g", detail: "go", tip: "和 k 相似，但喉咙振动。" },
  { primary: "f", detail: "fish", tip: "上齿轻触下唇，气流摩擦出去。" },
  { primary: "v", detail: "van", tip: "口型像 f，但要带振动。" },
  { primary: "θ", detail: "thin", tip: "舌尖轻碰牙齿，轻轻送气。" },
  { primary: "ð", detail: "this", tip: "口型像 θ，但喉咙振动。" },
  { primary: "s", detail: "sun", tip: "舌尖靠近齿龈，送出细气流。" },
  { primary: "z", detail: "zoo", tip: "和 s 接近，但有振动。" },
  { primary: "ʃ", detail: "ship", tip: "嘴唇略突出，气流更宽。" },
  { primary: "ʒ", detail: "vision", tip: "和 ʃ 接近，但要振动。" },
  { primary: "h", detail: "hat", tip: "张口送气，不要挤压喉咙。" },
  { primary: "m", detail: "map", tip: "双唇闭合，鼻腔出气。" },
  { primary: "n", detail: "nose", tip: "舌尖抵上齿龈，鼻腔出气。" },
  { primary: "ŋ", detail: "sing", tip: "舌后部抬起，气流从鼻腔出去。" },
  { primary: "l", detail: "leg", tip: "舌尖抵上齿龈，两侧放气。" },
  { primary: "r", detail: "red", tip: "舌尖不要卷得太紧，嘴唇微圆。" },
  { primary: "j", detail: "yes", tip: "从 i 的口型快速滑向元音。" },
  { primary: "w", detail: "wet", tip: "双唇先收圆，再快速张开。" },
  { primary: "tʃ", detail: "chair", tip: "先短暂停住，再摩擦送气。" },
  { primary: "dʒ", detail: "jump", tip: "口型像 tʃ，但带振动。" },
];

function getCombinedSong(text) {
  return [...text]
    .map((char) => (writingSongs[char] ? `${char}：${writingSongs[char]}` : ""))
    .filter(Boolean)
    .join(" / ");
}

const deckRegistry = {
  pinyin: {
    label: "汉语拼音",
    description: "支持 23 个声母和 24 个韵母，并补充示例字帮助记忆与跟读。",
    modes: {
      initials: {
        label: "声母",
        cardLabel: "汉语拼音 · 声母",
        description: "23 个声母，按常用教学顺序排列。",
        items: pinyinInitialItems,
      },
      finals: {
        label: "韵母",
        cardLabel: "汉语拼音 · 韵母",
        description: "24 个韵母合并展示，便于整体刷一遍。",
        items: pinyinFinalItems,
      },
      simpleFinals: {
        label: "单韵母",
        cardLabel: "汉语拼音 · 单韵母",
        description: "6 个单韵母，适合入门阶段先记熟。",
        items: pinyinSimpleFinalItems,
      },
      compoundFinals: {
        label: "复韵母",
        cardLabel: "汉语拼音 · 复韵母",
        description: "8 个复韵母，带常见示例字帮助联想。",
        items: pinyinCompoundFinalItems,
      },
      specialFinals: {
        label: "特殊",
        cardLabel: "汉语拼音 · 特殊韵母",
        description: "特殊韵母单独识记，避免和普通韵母混淆。",
        items: pinyinSpecialFinalItems,
      },
      frontNasalFinals: {
        label: "前鼻音",
        cardLabel: "汉语拼音 · 前鼻音韵母",
        description: "5 个前鼻音韵母，感受收尾落在 n 的口型。",
        items: pinyinFrontNasalFinalItems,
      },
      backNasalFinals: {
        label: "后鼻音",
        cardLabel: "汉语拼音 · 后鼻音韵母",
        description: "4 个后鼻音韵母，感受收尾落在 ng 的口型。",
        items: pinyinBackNasalFinalItems,
      },
    },
  },
  english: {
    label: "英文字母",
    description: "26 个字母，支持大写、小写与大小写练习。",
    modes: {
      uppercase: {
        label: "大写",
        cardLabel: "英文字母 · 大写",
        items: alphabet.map((letter) => ({
          primary: letter,
        })),
      },
      lowercase: {
        label: "小写",
        cardLabel: "英文字母 · 小写",
        items: alphabet.map((letter) => ({
          primary: letter.toLowerCase(),
        })),
      },
      combined: {
        label: "大小写",
        cardLabel: "英文字母 · 大小写",
        items: alphabet.map((letter) => ({
          primary: letter,
          secondary: letter.toLowerCase(),
        })),
      },
    },
  },
  phonetic: {
    label: "英语音标",
    description: "补充常见英语 IPA 音标，支持单元音、双元音和辅音练习。",
    modes: {
      monophthongs: {
        label: "单元音",
        cardLabel: "英语音标 · 单元音",
        description: "12 个常见单元音，先建立基础口型和长短音感知。",
        items: phoneticMonophthongItems,
      },
      diphthongs: {
        label: "双元音",
        cardLabel: "英语音标 · 双元音",
        description: "8 个常见双元音，重点感受口型滑动。",
        items: phoneticDiphthongItems,
      },
      consonants: {
        label: "辅音",
        cardLabel: "英语音标 · 辅音",
        description: "24 个常见辅音，配合示例词区分清浊和送气。",
        items: phoneticConsonantItems,
      },
    },
  },
};

const fontOptions = {
  pinyinWenkai: {
    label: "文楷",
    decks: ["pinyin"],
    bodyFont: '"Avenir Next", "PingFang SC", "Hiragino Sans GB", sans-serif',
    cardFont: '"Pinyin WenKai", "Pinyin Regular", "Kaiti SC", "STKaiti", "KaiTi", serif',
  },
  pinyin: {
    label: "拼音",
    decks: ["pinyin"],
    bodyFont: '"Avenir Next", "PingFang SC", "Hiragino Sans GB", sans-serif',
    cardFont:
      '"Pinyin Regular", "Maple Mono NF", "Trebuchet MS", "Century Gothic", "Tw Cen MT", "Futura", "Gill Sans MT", monospace',
  },
  pinyinStep: {
    label: "比画",
    tooltip: "描红",
    decks: ["pinyin"],
    bodyFont: '"Avenir Next", "PingFang SC", "Hiragino Sans GB", sans-serif',
    cardFont: '"Pinyin Step", "Pinyin Regular", "Maple Mono NF", monospace',
  },
  andika: {
    label: "Andika",
    decks: ["english", "phonetic"],
    bodyFont: '"Avenir Next", "PingFang SC", "Hiragino Sans GB", sans-serif',
    cardFont: '"Andika Basic", "Trebuchet MS", "Century Gothic", "Tw Cen MT", "Gill Sans MT", sans-serif',
  },
  print: {
    label: "印刷体",
    decks: ["english", "phonetic"],
    bodyFont: '"Avenir Next", "PingFang SC", "Hiragino Sans GB", sans-serif',
    cardFont:
      '"Trebuchet MS", "Century Gothic", "Tw Cen MT", "Gill Sans MT", "Avenir Next", sans-serif',
  },
  textbook: {
    label: "练字本",
    decks: ["english"],
    bodyFont: '"Avenir Next", "PingFang SC", "Hiragino Sans GB", sans-serif',
    cardFont: '"Pinyin WenKai", "Kaiti SC", "STKaiti", "KaiTi", "Trebuchet MS", serif',
  },
  phoneticSerif: {
    label: "IPA Serif",
    decks: ["phonetic"],
    bodyFont: '"Avenir Next", "PingFang SC", "Hiragino Sans GB", sans-serif',
    cardFont: '"Times New Roman", "Georgia", "Noto Serif", serif',
  },
};

const learningPathRegistry = {
  pinyin: [
    { mode: "initials", label: "1. 声母", description: "先熟悉 23 个声母。" },
    { mode: "simpleFinals", label: "2. 单韵母", description: "先把 a o e i u ü 记稳。" },
    { mode: "compoundFinals", label: "3. 复韵母", description: "把 ai ei ui 这类组合读顺。" },
    { mode: "frontNasalFinals", label: "4. 前鼻音", description: "重点区分 an en in un ün。" },
    { mode: "backNasalFinals", label: "5. 后鼻音", description: "重点区分 ang eng ing ong。" },
    { mode: "specialFinals", label: "6. 特殊韵母", description: "单独记住 er。" },
    { mode: "finals", label: "7. 综合复习", description: "把韵母整体过一遍。" },
  ],
  english: [
    { mode: "uppercase", label: "1. 大写字母", description: "先认大写字母形状。" },
    { mode: "lowercase", label: "2. 小写字母", description: "再认小写字母形状。" },
    { mode: "combined", label: "3. 大小写配对", description: "把大小写一一对应起来。" },
  ],
  phonetic: [
    { mode: "monophthongs", label: "1. 单元音", description: "先建立基础口型。" },
    { mode: "diphthongs", label: "2. 双元音", description: "再练口型滑动。" },
    { mode: "consonants", label: "3. 辅音", description: "最后练清浊和送气。" },
  ],
};

const learningViewOptions = {
  browse: {
    label: "卡片学习",
    description: "自由翻卡和听音。",
  },
  quiz: {
    label: "听音练习",
    description: "听一听，再选对答案。",
  },
};

const progressStorageKey = "pinyin-learning-progress-v1";

const state = {
  activeDeck: "pinyin",
  activeMode: "initials",
  activeFont: "pinyinWenkai",
  activeView: "browse",
  indices: {},
  progress: null,
  quiz: null,
  hasSessionRecorded: false,
  lastTrackedCardKey: "",
};

const guideLineSets = {
  pinyin: {
    line1: 4,
    line2: 35,
    line3: 65,
    line4: 96,
    thickness: 0.42,
  },
  english: {
    line1: 8,
    line2: 36,
    line3: 64,
    line4: 92,
    thickness: 0.55,
  },
};

const baselineGlyphHeight = guideLineSets.pinyin.line3 - guideLineSets.pinyin.line1;
const compactGlyphFonts = new Set(["pinyin", "pinyinStep"]);
const glyphSizePx = 500;

const englishScales = {
  primaryCombined: 0.84,
  secondaryCombined: 0.78,
};

const englishSlots = {
  single: {
    uppercase: { left: 50, width: 40, scale: 1 },
    lowercase: { left: 50, width: 36, scale: 1 },
  },
  combined: {
    uppercase: { left: 30, width: 28, scale: englishScales.primaryCombined },
    lowercase: { left: 46, width: 24, scale: englishScales.secondaryCombined },
  },
};

const deckTypeGroup = document.querySelector("#deck-type-group");
const pathList = document.querySelector("#path-list");
const resumeButton = document.querySelector("#resume-button");
const deckModeGroup = document.querySelector("#deck-mode-group");
const viewGroup = document.querySelector("#view-group");
const fontGroup = document.querySelector("#font-group");
const audioButton = document.querySelector("#audio-button");
const audioStatus = document.querySelector("#audio-status");
const deckTitle = document.querySelector("#deck-title");
const deckDescription = document.querySelector("#deck-description");
const listDescription = document.querySelector("#list-description");
const cardList = document.querySelector("#card-list");
const cardCounter = document.querySelector("#card-counter");
const cardCategory = document.querySelector("#card-category");
const cardValues = document.querySelector(".card-values");
const cardValue = document.querySelector("#card-value");
const cardSubvalue = document.querySelector("#card-subvalue");
const cardDetail = document.querySelector("#card-detail");
const cardHint = document.querySelector(".card-hint");
const referenceGrid = document.querySelector(".reference-grid");
const writingSummary = document.querySelector("#writing-summary");
const writingSong = document.querySelector("#writing-song");
const ruleRhyme = document.querySelector("#rule-rhyme");
const ruleList = document.querySelector("#rule-list");
const errorPairs = document.querySelector("#error-pairs");
const flashcard = document.querySelector("#flashcard");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const randomButton = document.querySelector("#random-button");
const fullscreenButton = document.querySelector("#fullscreen-button");
const progressGrid = document.querySelector("#progress-grid");
const practicePanel = document.querySelector("#practice-panel");
const practiceTitle = document.querySelector("#practice-title");
const practiceCopy = document.querySelector("#practice-copy");
const practiceOptions = document.querySelector("#practice-options");
const practiceFeedback = document.querySelector("#practice-feedback");
const practiceAudioButton = document.querySelector("#practice-audio-button");
const practiceNextButton = document.querySelector("#practice-next-button");
const englishAudioBaseUrl = "./audio/english/";
const pinyinAudioBaseUrl = "./audio/pinyin/";
const phoneticAudioBaseUrl = "./audio/phonetic/";
const audioCache = new Map();
let activeAudio = null;
let audioStatusTimer = 0;
let audioPlayRequestId = 0;

function applyStateFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const deckId = params.get("deck");
  if (deckId && deckRegistry[deckId]) {
    state.activeDeck = deckId;
  }

  const deck = deckRegistry[state.activeDeck];
  const modeId = params.get("mode");
  if (modeId && deck.modes[modeId]) {
    state.activeMode = modeId;
  } else if (!deck.modes[state.activeMode]) {
    [state.activeMode] = Object.keys(deck.modes);
  }

  const availableFonts = getAvailableFontEntries(state.activeDeck).map(([fontId]) => fontId);
  const fontId = params.get("font");
  if (fontId && availableFonts.includes(fontId)) {
    state.activeFont = fontId;
  } else if (!availableFonts.includes(state.activeFont)) {
    [state.activeFont] = availableFonts;
  }

  const rawIndex = Number.parseInt(params.get("index") ?? "", 10);
  if (Number.isInteger(rawIndex)) {
    state.indices[buildDeckKey(state.activeDeck, state.activeMode)] = rawIndex;
  }

  const viewId = params.get("view");
  if (viewId && learningViewOptions[viewId]) {
    state.activeView = viewId;
  }
}

function buildDeckKey(deckId, modeId) {
  return `${deckId}:${modeId}`;
}

function createDefaultProgress() {
  return {
    version: 1,
    sessionCount: 0,
    lastState: null,
    paths: {},
  };
}

function loadProgress() {
  try {
    const raw = window.localStorage.getItem(progressStorageKey);
    if (!raw) {
      state.progress = createDefaultProgress();
      return;
    }

    const parsed = JSON.parse(raw);
    state.progress = {
      ...createDefaultProgress(),
      ...parsed,
      paths: parsed?.paths ?? {},
    };
  } catch {
    state.progress = createDefaultProgress();
  }
}

function saveProgress() {
  if (!state.progress) {
    return;
  }

  try {
    window.localStorage.setItem(progressStorageKey, JSON.stringify(state.progress));
  } catch {
    return;
  }
}

function ensureProgressBucket(deckId = state.activeDeck, modeId = state.activeMode) {
  const key = buildDeckKey(deckId, modeId);
  if (!state.progress.paths[key]) {
    state.progress.paths[key] = {
      seen: {},
      correct: 0,
      wrong: 0,
      lastIndex: 0,
      lastVisitedAt: 0,
    };
  }

  return state.progress.paths[key];
}

function recordSessionIfNeeded() {
  if (state.hasSessionRecorded) {
    return;
  }

  state.progress.sessionCount += 1;
  state.hasSessionRecorded = true;
  saveProgress();
}

function persistLastState() {
  state.progress.lastState = {
    deck: state.activeDeck,
    mode: state.activeMode,
    font: state.activeFont,
    view: state.activeView,
    index: getCurrentIndex(),
  };
  saveProgress();
}

function restoreProgressState() {
  const savedState = state.progress?.lastState;
  if (!savedState) {
    return;
  }

  if (deckRegistry[savedState.deck]) {
    state.activeDeck = savedState.deck;
  }

  const deck = deckRegistry[state.activeDeck];
  if (deck?.modes[savedState.mode]) {
    state.activeMode = savedState.mode;
  }

  const availableFonts = getAvailableFontEntries(state.activeDeck).map(([fontId]) => fontId);
  if (savedState.font && availableFonts.includes(savedState.font)) {
    state.activeFont = savedState.font;
  }

  if (savedState.view && learningViewOptions[savedState.view]) {
    state.activeView = savedState.view;
  }

  if (Number.isInteger(savedState.index)) {
    state.indices[buildDeckKey(state.activeDeck, state.activeMode)] = savedState.index;
  }
}

function recordCurrentCardView(force = false) {
  const key = `${buildDeckKey(state.activeDeck, state.activeMode)}:${getCurrentIndex()}`;
  if (!force && state.lastTrackedCardKey === key) {
    persistLastState();
    return;
  }

  state.lastTrackedCardKey = key;
  const bucket = ensureProgressBucket();
  bucket.seen[getCurrentIndex()] = 1;
  bucket.lastIndex = getCurrentIndex();
  bucket.lastVisitedAt = Date.now();
  persistLastState();
}

function recordQuizResult(isCorrect, index) {
  const bucket = ensureProgressBucket();
  bucket.lastIndex = index;
  bucket.lastVisitedAt = Date.now();

  if (isCorrect) {
    bucket.correct += 1;
  } else {
    bucket.wrong += 1;
  }

  persistLastState();
}

function getProgressSummary(deckId = state.activeDeck, modeId = state.activeMode) {
  const bucket = ensureProgressBucket(deckId, modeId);
  const seenCount = Object.keys(bucket.seen).length;

  return {
    seenCount,
    correct: bucket.correct,
    wrong: bucket.wrong,
    lastIndex: bucket.lastIndex,
    sessionCount: state.progress.sessionCount,
  };
}

function syncStateToQuery() {
  const params = new URLSearchParams(window.location.search);
  params.set("deck", state.activeDeck);
  params.set("mode", state.activeMode);
  params.set("font", state.activeFont);
  params.set("index", String(getCurrentIndex()));
  params.set("view", state.activeView);

  const nextQuery = params.toString();
  const nextUrl = nextQuery ? `${window.location.pathname}?${nextQuery}${window.location.hash}` : window.location.pathname;
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (nextUrl !== currentUrl) {
    try {
      window.history.replaceState(null, "", nextUrl);
    } catch {
      return;
    }
  }
}

function showAudioStatus(message, tone = "default") {
  window.clearTimeout(audioStatusTimer);

  if (!message) {
    audioStatus.hidden = true;
    audioStatus.textContent = "";
    delete audioStatus.dataset.tone;
    return;
  }

  audioStatus.hidden = false;
  audioStatus.textContent = message;
  audioStatus.dataset.tone = tone;

  audioStatusTimer = window.setTimeout(() => {
    audioStatus.hidden = true;
    audioStatus.textContent = "";
    delete audioStatus.dataset.tone;
  }, 2600);
}

function classifyEnglishLowercase(text) {
  if (!text) {
    return "middle";
  }

  const normalized = text.toLowerCase();

  if (/[gjpqy]/.test(normalized)) {
    return "descender";
  }

  if (/[bdfhiklt]/.test(normalized)) {
    return "ascender";
  }

  return "middle";
}

function buildGlyphLayout({ left = 50, width, size, shiftY = 0, spacing = "0.04em", height = baselineGlyphHeight }) {
  return {
    left,
    height,
    sizePx: glyphSizePx,
    width,
    size,
    shiftY,
    spacing,
  };
}

function getAdjustedGlyphHeight(height) {
  if (compactGlyphFonts.has(state.activeFont)) {
    return Math.max(0, height - 8);
  }

  return height;
}

function applyGlyphLayout(element, layout) {
  const adjustedHeight = getAdjustedGlyphHeight(layout.height);

  element.style.setProperty("--glyph-left", `${layout.left}%`);
  element.style.setProperty("--glyph-height", `${adjustedHeight}%`);
  element.style.setProperty("--glyph-width", `${layout.width}%`);
  element.style.setProperty("--glyph-size-px", `${layout.sizePx}px`);
  element.style.setProperty("--glyph-shift-y", `${layout.shiftY}%`);
  element.style.setProperty("--glyph-spacing", layout.spacing);
}

function clearGlyphLayout(element) {
  [
    "--glyph-left",
    "--glyph-height",
    "--glyph-width",
    "--glyph-size-px",
    "--glyph-shift-y",
    "--glyph-spacing",
  ].forEach((property) => {
    element.style.removeProperty(property);
  });
}

function getPinyinLayout(text) {
  const length = [...text].length;
  const baseWidth = [0, 34, 52, 68, 80][Math.min(length, 4)] ?? 84;
  const size = [0, 10.8, 9.2, 7.8, 6.8][Math.min(length, 4)] ?? 6.2;

  return buildGlyphLayout({
    width: baseWidth,
    size,
  });
}

function getPhoneticLayout(text) {
  const length = [...text].length;
  const baseWidth = [0, 30, 42, 58, 72][Math.min(length, 4)] ?? 76;
  const size = [0, 11.6, 10.2, 8.6, 7.2][Math.min(length, 4)] ?? 6.8;

  return buildGlyphLayout({
    width: baseWidth,
    size,
    spacing: "0.02em",
    height: guideLineSets.english.line4 - guideLineSets.english.line1,
  });
}

function getEnglishUppercaseLayout(isCombined) {
  const slot = isCombined ? englishSlots.combined.uppercase : englishSlots.single.uppercase;
  return buildGlyphLayout({
    left: slot.left,
    width: slot.width,
    size: Number((11.6 * slot.scale).toFixed(2)),
  });
}

function getEnglishLowercaseLayout(text, isCombined) {
  const slot = isCombined ? englishSlots.combined.lowercase : englishSlots.single.lowercase;
  const letter = text.toLowerCase();
  const guide = letter === "j" ? "j" : classifyEnglishLowercase(text);

  const layouts = {
    middle: { size: 8, shiftY: 0 },
    ascender: { size: 10.2, shiftY: 0 },
    descender: { size: 10, shiftY: 0 },
    j: { size: 10, shiftY: 0 },
  };

  const current = layouts[guide];
  const layout = buildGlyphLayout({
    left: slot.left,
    width: slot.width,
    size: Number((current.size * slot.scale).toFixed(2)),
    shiftY: current.shiftY,
    spacing: "0.02em",
  });

  if (isCombined) {
    layout.sizePx = glyphSizePx;
  }

  return layout;
}

function applyCardLayout(item) {
  clearGlyphLayout(cardValue);
  clearGlyphLayout(cardSubvalue);

  cardValues.dataset.deck = state.activeDeck;
  cardValues.dataset.mode = state.activeMode;

  if (state.activeDeck === "pinyin") {
    applyGlyphLayout(cardValue, getPinyinLayout(item.primary));
    return;
  }

  if (state.activeDeck === "phonetic") {
    applyGlyphLayout(cardValue, getPhoneticLayout(item.primary));
    return;
  }

  if (state.activeMode === "combined") {
    applyGlyphLayout(cardValue, getEnglishUppercaseLayout(true));
    applyGlyphLayout(cardSubvalue, getEnglishLowercaseLayout(item.secondary, true));
    return;
  }

  if (state.activeMode === "uppercase") {
    applyGlyphLayout(cardValue, getEnglishUppercaseLayout(false));
    return;
  }

  applyGlyphLayout(cardValue, getEnglishLowercaseLayout(item.primary, false));
}

function getCurrentModeSet() {
  return deckRegistry[state.activeDeck].modes[state.activeMode];
}

function getCurrentItems() {
  return getCurrentModeSet().items;
}

function getAvailableFontEntries(deckId = state.activeDeck) {
  return Object.entries(fontOptions).filter(([, font]) => font.decks.includes(deckId));
}

function getCurrentIndex() {
  const key = buildDeckKey(state.activeDeck, state.activeMode);
  return state.indices[key] ?? 0;
}

function setCurrentIndex(index) {
  const items = getCurrentItems();
  const normalizedIndex = (index + items.length) % items.length;
  state.indices[buildDeckKey(state.activeDeck, state.activeMode)] = normalizedIndex;
}

function getEnglishLetterKey(item) {
  return (item.secondary ?? item.primary).toLowerCase();
}

function normalizeAudioKey(text) {
  return text.toLowerCase().replace(/ü/g, "v");
}

function normalizePhoneticAudioKey(text) {
  const map = {
    "iː": "i-long",
    "ɪ": "i-short",
    "æ": "ae",
    "ʌ": "uh",
    "ɑː": "a-long",
    "ɒ": "o-short",
    "ɔː": "aw-long",
    "ʊ": "u-short",
    "uː": "u-long",
    "ɜː": "er-long",
    "ə": "schwa",
    "eɪ": "ay",
    "aɪ": "eye",
    "ɔɪ": "oy",
    "əʊ": "oh",
    "aʊ": "ow",
    "ɪə": "ear",
    "eə": "air",
    "ʊə": "oor",
    "θ": "th-unvoiced",
    "ð": "th-voiced",
    "ʃ": "sh",
    "ʒ": "zh",
    "ŋ": "ng",
    "tʃ": "ch",
    "dʒ": "j-sound",
  };

  return map[text] ?? text.toLowerCase();
}

function getAudioConfigForItem(item, deckId = state.activeDeck) {
  if (!item) {
    return null;
  }

  if (deckId === "english") {
    const letterKey = getEnglishLetterKey(item);
    return {
      type: "file",
      cacheKey: `english:${letterKey}`,
      key: letterKey,
      label: item.secondary ?? item.primary,
      src: `${englishAudioBaseUrl}${letterKey}.mp3`,
    };
  }

  if (deckId === "pinyin") {
    const pinyinKey = normalizeAudioKey(item.audio ?? item.primary);
    return {
      type: "file",
      cacheKey: `pinyin:${pinyinKey}`,
      key: pinyinKey,
      label: item.primary,
      src: `${pinyinAudioBaseUrl}${pinyinKey}.mp3`,
    };
  }

  if (deckId === "phonetic") {
    const phoneticKey = normalizePhoneticAudioKey(item.audio ?? item.primary);
    return {
      type: "file",
      cacheKey: `phonetic:${phoneticKey}`,
      key: phoneticKey,
      label: item.primary,
      src: `${phoneticAudioBaseUrl}${phoneticKey}.mp3`,
    };
  }

  return null;
}

function getCurrentAudioConfig() {
  return getAudioConfigForItem(getCurrentItems()[getCurrentIndex()]);
}

function getCachedAudio(audioConfig) {
  if (!audioCache.has(audioConfig.cacheKey)) {
    const audio = new Audio(audioConfig.src);
    audio.preload = "auto";
    audio.addEventListener("ended", () => {
      if (activeAudio === audio) {
        activeAudio = null;
        resetAudioButtonState();
      }
    });
    audio.addEventListener("error", () => {
      if (activeAudio === audio) {
        activeAudio = null;
        resetAudioButtonState();
      }
    });
    audioCache.set(audioConfig.cacheKey, audio);
  }

  return audioCache.get(audioConfig.cacheKey);
}

function resetAudioButtonState() {
  audioButton.classList.remove("is-playing");
}

function stopCurrentAudio() {
  audioPlayRequestId += 1;

  if (!activeAudio) {
    resetAudioButtonState();
    return;
  }

  activeAudio.pause();
  activeAudio.currentTime = 0;
  activeAudio = null;
  resetAudioButtonState();
}

function renderAudioButton() {
  const audioConfig = getCurrentAudioConfig();
  const isPlayable = Boolean(audioConfig?.key);

  audioButton.disabled = !isPlayable;
  audioButton.title = isPlayable ? `播放 ${audioConfig.label} 的读音` : "当前卡片没有可播放的发音";
  audioButton.setAttribute("aria-label", isPlayable ? `播放 ${audioConfig.label} 的读音` : "当前卡片没有可播放的发音");
  audioButton.classList.toggle("is-playing", Boolean(activeAudio) && isPlayable);
}

function playCurrentAudio() {
  const audioConfig = getCurrentAudioConfig();
  if (!audioConfig?.key) {
    showAudioStatus("当前卡片没有可播放的发音。", "error");
    return;
  }

  const audio = getCachedAudio(audioConfig);
  if (activeAudio && activeAudio !== audio) {
    stopCurrentAudio();
  }

  activeAudio = audio;
  const playRequestId = ++audioPlayRequestId;
  audio.currentTime = 0;
  audioButton.classList.add("is-playing");
  showAudioStatus("");

  const playPromise = audio.play();
  if (!playPromise?.catch) {
    return;
  }

  playPromise.catch((error) => {
    const isStaleRequest = playRequestId !== audioPlayRequestId;
    if (isStaleRequest || error?.name === "AbortError") {
      return;
    }

    if (activeAudio === audio) {
      activeAudio = null;
    }

    resetAudioButtonState();
    showAudioStatus("播放失败，请重试。", "error");
  });
}

function playAudioFromConfig(audioConfig, feedbackTarget = audioStatus) {
  if (!audioConfig?.key) {
    feedbackTarget.hidden = false;
    feedbackTarget.textContent = "当前题目没有可播放的发音。";
    feedbackTarget.dataset.tone = "error";
    return;
  }

  const audio = getCachedAudio(audioConfig);
  if (activeAudio && activeAudio !== audio) {
    stopCurrentAudio();
  }

  activeAudio = audio;
  const playRequestId = ++audioPlayRequestId;
  audio.currentTime = 0;

  const playPromise = audio.play();
  if (!playPromise?.catch) {
    return;
  }

  playPromise.catch((error) => {
    const isStaleRequest = playRequestId !== audioPlayRequestId;
    if (isStaleRequest || error?.name === "AbortError") {
      return;
    }

    if (activeAudio === audio) {
      activeAudio = null;
    }

    feedbackTarget.hidden = false;
    feedbackTarget.textContent = "播放失败，请重试。";
    feedbackTarget.dataset.tone = "error";
  });
}

function selectDeck(deckId) {
  const deck = deckRegistry[deckId];
  stopCurrentAudio();
  showAudioStatus("");
  state.activeDeck = deckId;

  if (!deck.modes[state.activeMode]) {
    [state.activeMode] = Object.keys(deck.modes);
  }

  const availableFonts = getAvailableFontEntries(deckId).map(([fontId]) => fontId);
  if (!availableFonts.includes(state.activeFont)) {
    [state.activeFont] = availableFonts;
  }

  state.quiz = null;
  recordCurrentCardView(true);

  if (state.activeView === "quiz") {
    startQuizRound();
  }

  render();
}

function selectMode(modeId) {
  let preservedEnglishLetter = "";
  if (state.activeDeck === "english") {
    const currentItem = getCurrentItems()[getCurrentIndex()];
    preservedEnglishLetter = getEnglishLetterKey(currentItem);
  }

  stopCurrentAudio();
  showAudioStatus("");
  state.activeMode = modeId;

  if (state.activeDeck === "english" && preservedEnglishLetter) {
    const nextItems = getCurrentItems();
    const matchedIndex = nextItems.findIndex((item) => getEnglishLetterKey(item) === preservedEnglishLetter);
    if (matchedIndex >= 0) {
      setCurrentIndex(matchedIndex);
    }
  }

  state.quiz = null;
  recordCurrentCardView(true);

  if (state.activeView === "quiz") {
    startQuizRound();
  }

  render();
}

function selectFont(fontId) {
  state.activeFont = fontId;
  showAudioStatus("");
  renderFonts();
  persistLastState();
  syncStateToQuery();
}

function selectCard(index) {
  stopCurrentAudio();
  showAudioStatus("");
  setCurrentIndex(index);
  state.quiz = null;
  recordCurrentCardView(true);
  renderCard();
  renderCardList();
  renderReference();
  renderAudioButton();
  renderProgress();
  syncStateToQuery();
}

function formatListItem(item) {
  if (item.secondary) {
    return `${item.primary} ${item.secondary}`;
  }

  if (item.detail) {
    return `${item.primary} ${item.detail}`;
  }

  return item.primary;
}

function getPathSteps(deckId = state.activeDeck) {
  return learningPathRegistry[deckId] ?? [];
}

function selectLearningPath(modeId) {
  stopCurrentAudio();
  showAudioStatus("");
  state.activeMode = modeId;
  setCurrentIndex(0);
  recordCurrentCardView(true);

  if (state.activeView === "quiz") {
    startQuizRound();
  }

  render();
}

function setActiveView(viewId) {
  if (!learningViewOptions[viewId]) {
    return;
  }

  stopCurrentAudio();
  showAudioStatus("");
  state.activeView = viewId;

  if (viewId === "quiz") {
    startQuizRound();
  } else {
    state.quiz = null;
  }

  render();
}

function buildQuizQuestion() {
  const items = getCurrentItems();
  if (!items.length) {
    return null;
  }

  const optionCount = Math.min(4, items.length);
  const correctIndex = Math.floor(Math.random() * items.length);
  const optionSet = new Set([correctIndex]);

  while (optionSet.size < optionCount) {
    optionSet.add(Math.floor(Math.random() * items.length));
  }

  const optionIndices = [...optionSet].sort(() => Math.random() - 0.5);

  return {
    correctIndex,
    optionIndices,
    selectedIndex: null,
    answered: false,
    prompt: "听一听，选出正确答案。",
  };
}

function startQuizRound() {
  state.quiz = buildQuizQuestion();
  if (!state.quiz) {
    return;
  }

  setCurrentIndex(state.quiz.correctIndex);
  practiceFeedback.hidden = true;
  practiceFeedback.textContent = "";
  delete practiceFeedback.dataset.tone;
}

function submitQuizAnswer(index) {
  if (!state.quiz || state.quiz.answered) {
    return;
  }

  const isCorrect = index === state.quiz.correctIndex;
  state.quiz.selectedIndex = index;
  state.quiz.answered = true;
  recordQuizResult(isCorrect, state.quiz.correctIndex);

  practiceFeedback.hidden = false;
  practiceFeedback.dataset.tone = isCorrect ? "success" : "error";
  practiceFeedback.textContent = isCorrect
    ? "答对了，继续下一题。"
    : `这次选错了，正确答案是 ${formatListItem(getCurrentItems()[state.quiz.correctIndex])}。`;

  renderCard();
  renderPracticePanel();
  renderProgress();
}

function renderPathButtons() {
  pathList.innerHTML = "";

  getPathSteps().forEach((step) => {
    const summary = getProgressSummary(state.activeDeck, step.mode);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `path-button${step.mode === state.activeMode ? " is-active" : ""}`;
    button.addEventListener("click", () => {
      selectLearningPath(step.mode);
    });

    const title = document.createElement("span");
    title.className = "path-title";
    title.textContent = step.label;

    const copy = document.createElement("span");
    copy.className = "path-copy";
    copy.textContent = step.description;

    const meta = document.createElement("span");
    meta.className = "path-meta";
    meta.textContent = `已学 ${summary.seenCount} 张`;

    button.append(title, copy, meta);
    pathList.append(button);
  });
}

function renderViewButtons() {
  viewGroup.innerHTML = "";

  Object.entries(learningViewOptions).forEach(([viewId, view]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `segment${viewId === state.activeView ? " is-active" : ""}`;
    button.textContent = view.label;
    button.title = view.description;
    button.addEventListener("click", () => {
      setActiveView(viewId);
    });
    viewGroup.append(button);
  });
}

function renderProgress() {
  const summary = getProgressSummary();
  const savedState = state.progress.lastState;
  if (savedState && deckRegistry[savedState.deck]?.modes[savedState.mode]) {
    resumeButton.disabled = false;
    resumeButton.textContent = `继续上次：${deckRegistry[savedState.deck].label} / ${deckRegistry[savedState.deck].modes[savedState.mode].label}`;
  } else {
    resumeButton.disabled = true;
    resumeButton.textContent = "继续上次学习";
  }

  const cards = [
    { value: summary.seenCount, label: "当前已学卡片" },
    { value: summary.correct, label: "当前答对题数" },
    { value: summary.wrong, label: "当前答错题数" },
    { value: summary.sessionCount, label: "累计学习次数" },
  ];

  progressGrid.innerHTML = "";
  cards.forEach((item) => {
    const card = document.createElement("div");
    card.className = "progress-card";

    const value = document.createElement("p");
    value.className = "progress-value";
    value.textContent = String(item.value);

    const label = document.createElement("p");
    label.className = "progress-label";
    label.textContent = item.label;

    card.append(value, label);
    progressGrid.append(card);
  });
}

function renderPracticePanel() {
  const inQuiz = state.activeView === "quiz" && state.quiz;
  practicePanel.hidden = !inQuiz;
  if (!inQuiz) {
    return;
  }

  const items = getCurrentItems();
  practiceTitle.textContent = `${getCurrentModeSet().label}练习`;
  practiceCopy.textContent = state.quiz.prompt;
  practiceNextButton.hidden = !state.quiz.answered;

  practiceOptions.innerHTML = "";
  state.quiz.optionIndices.forEach((optionIndex) => {
    const item = items[optionIndex];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "practice-option";
    if (state.quiz.answered && optionIndex === state.quiz.correctIndex) {
      button.classList.add("is-correct");
    } else if (state.quiz.answered && optionIndex === state.quiz.selectedIndex) {
      button.classList.add("is-wrong");
    }
    button.disabled = state.quiz.answered;
    button.addEventListener("click", () => {
      submitQuizAnswer(optionIndex);
    });

    const label = document.createElement("span");
    label.className = "practice-option-label";
    label.textContent = item.primary;

    const copy = document.createElement("span");
    copy.className = "practice-option-copy";
    copy.textContent = item.secondary ?? item.detail ?? getCurrentModeSet().cardLabel;

    button.append(label, copy);
    practiceOptions.append(button);
  });
}

function renderDeckTypeButtons() {
  deckTypeGroup.innerHTML = "";

  Object.entries(deckRegistry).forEach(([deckId, deck]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `segment${deckId === state.activeDeck ? " is-active" : ""}`;
    button.textContent = deck.label;
    button.addEventListener("click", () => {
      selectDeck(deckId);
    });
    deckTypeGroup.append(button);
  });
}

function renderModeButtons() {
  deckModeGroup.innerHTML = "";

  Object.entries(deckRegistry[state.activeDeck].modes).forEach(([modeId, mode]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `segment${modeId === state.activeMode ? " is-active" : ""}`;
    button.textContent = mode.label;
    button.addEventListener("click", () => {
      selectMode(modeId);
    });
    deckModeGroup.append(button);
  });
}

function renderFonts() {
  fontGroup.innerHTML = "";

  getAvailableFontEntries().forEach(([fontId, font]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `segment${fontId === state.activeFont ? " is-active" : ""}`;
    button.textContent = font.label;
    if (font.tooltip) {
      button.title = font.tooltip;
      button.setAttribute("aria-label", `${font.label}，悬停提示：${font.tooltip}`);
    }
    button.addEventListener("click", () => {
      selectFont(fontId);
    });
    fontGroup.append(button);
  });

  document.body.dataset.activeFont = state.activeFont;
  document.body.style.setProperty("--body-font", fontOptions[state.activeFont].bodyFont);
  document.body.style.setProperty("--card-font", fontOptions[state.activeFont].cardFont);

  document.fonts?.ready.then(() => {
    if (document.body.dataset.activeFont === state.activeFont) {
      renderCard();
    }
  });
}

function syncGuideLines() {
  const guideLines = state.activeDeck === "pinyin" ? guideLineSets.pinyin : guideLineSets.english;
  document.body.style.setProperty("--guide-line-1", `${guideLines.line1}%`);
  document.body.style.setProperty("--guide-line-2", `${guideLines.line2}%`);
  document.body.style.setProperty("--guide-line-3", `${guideLines.line3}%`);
  document.body.style.setProperty("--guide-line-4", `${guideLines.line4}%`);
  document.body.style.setProperty("--guide-line-thickness", `${guideLines.thickness}%`);
}

function renderFullscreenButton() {
  const isFullscreen = document.fullscreenElement === flashcard;
  fullscreenButton.textContent = isFullscreen ? "退出卡片全屏" : "卡片全屏";
  fullscreenButton.classList.toggle("is-active", isFullscreen);
}

function renderCard() {
  const deck = deckRegistry[state.activeDeck];
  const mode = getCurrentModeSet();
  const items = getCurrentItems();
  const index = getCurrentIndex();
  const item = items[index];
  const quizPending = state.activeView === "quiz" && state.quiz && !state.quiz.answered;
  const displayPrimary = quizPending ? "?" : item.primary;
  const displaySecondary = quizPending ? "" : item.secondary;
  const displayDetail = quizPending ? "" : item.detail;
  const visualLength = `${displayPrimary}${displaySecondary ?? ""}`.length;

  deckTitle.textContent = deck.label;
  deckDescription.textContent = mode.description ?? deck.description;
  cardCounter.textContent = `${index + 1} / ${items.length}`;
  cardCategory.textContent = quizPending ? `${mode.cardLabel} · 听音练习` : mode.cardLabel;
  flashcard.dataset.deck = state.activeDeck;
  flashcard.dataset.mode = state.activeMode;
  syncGuideLines();
  cardValue.textContent = displayPrimary;
  flashcard.dataset.long = visualLength >= 4 ? "true" : "false";

  if (displaySecondary) {
    cardSubvalue.hidden = false;
    cardSubvalue.textContent = displaySecondary;
  } else {
    cardSubvalue.hidden = true;
    cardSubvalue.textContent = "";
  }

  if (displayDetail) {
    cardDetail.hidden = false;
    cardDetail.textContent = displayDetail;
  } else {
    cardDetail.hidden = true;
    cardDetail.textContent = "";
  }

  cardHint.textContent = quizPending ? "先听发音，再选正确答案" : "点击切换到下一张";
  applyCardLayout({
    ...item,
    primary: displayPrimary,
    secondary: displaySecondary,
  });
}

function renderReference() {
  if (state.activeView === "quiz") {
    referenceGrid.hidden = true;
    return;
  }

  const deck = deckRegistry[state.activeDeck];
  const mode = getCurrentModeSet();
  const item = getCurrentItems()[getCurrentIndex()];
  const currentSong =
    item.song ??
    (item.secondary
      ? `${item.primary}：${getCombinedSong(item.primary.toLowerCase())} / ${item.secondary}：${getCombinedSong(
          item.secondary.toLowerCase(),
        )}`
      : getCombinedSong(item.primary.toLowerCase()));

  if (state.activeDeck === "pinyin") {
    referenceGrid.hidden = false;
    writingSummary.textContent = item.detail
      ? `${mode.label} · ${item.primary} · 示例字：${item.detail}`
      : `${mode.label} · ${item.primary}`;
    writingSong.textContent = currentSong || "当前拼音组合没有单独笔顺歌，建议按字母拆开书写。";
    ruleRhyme.textContent = pinyinReference.rhyme;
    ruleList.innerHTML = "";
    pinyinReference.rules.forEach((rule) => {
      const li = document.createElement("li");
      li.textContent = rule;
      ruleList.append(li);
    });
    errorPairs.innerHTML = "";
    pinyinReference.errorPairs.forEach((pair) => {
      const chip = document.createElement("span");
      chip.className = "pair-chip";
      chip.textContent = pair;
      errorPairs.append(chip);
    });
    return;
  }

  if (state.activeDeck === "phonetic") {
    referenceGrid.hidden = false;
    writingSummary.textContent = `${mode.label} · ${item.primary} · 示例词：${item.detail}`;
    writingSong.textContent = item.tip ?? `建议先听 ${item.detail}，再模仿 ${item.primary} 的口型和发音。`;
    ruleRhyme.textContent = phoneticReference.rhyme;
    ruleList.innerHTML = "";
    phoneticReference.rules.forEach((rule) => {
      const li = document.createElement("li");
      li.textContent = rule;
      ruleList.append(li);
    });
    errorPairs.innerHTML = "";
    phoneticReference.errorPairs.forEach((pair) => {
      const chip = document.createElement("span");
      chip.className = "pair-chip";
      chip.textContent = pair;
      errorPairs.append(chip);
    });
    return;
  }

  referenceGrid.hidden = true;
}

function renderCardList() {
  if (state.activeView === "quiz") {
    listDescription.textContent = "练习模式已开启";
    cardList.innerHTML = "";
    return;
  }

  const mode = getCurrentModeSet();
  const items = getCurrentItems();
  const currentIndex = getCurrentIndex();

  listDescription.textContent = `${mode.cardLabel} · 共 ${items.length} 项`;
  cardList.innerHTML = "";

  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `list-chip${index === currentIndex ? " is-active" : ""}`;
    button.textContent = formatListItem(item);
    button.addEventListener("click", () => {
      selectCard(index);
    });
    cardList.append(button);
  });
}

function render() {
  document.body.dataset.activeView = state.activeView;
  const inQuiz = state.activeView === "quiz";
  prevButton.hidden = inQuiz;
  nextButton.hidden = inQuiz;
  randomButton.textContent = inQuiz ? "换一题" : "随机一张";
  renderDeckTypeButtons();
  renderPathButtons();
  renderModeButtons();
  renderViewButtons();
  renderFonts();
  renderFullscreenButton();
  renderCard();
  renderCardList();
  renderReference();
  renderPracticePanel();
  renderAudioButton();
  renderProgress();
  syncStateToQuery();
}

function shiftCard(step) {
  if (state.activeView === "quiz") {
    return;
  }

  stopCurrentAudio();
  showAudioStatus("");
  setCurrentIndex(getCurrentIndex() + step);
  recordCurrentCardView(true);
  renderCard();
  renderCardList();
  renderReference();
  renderAudioButton();
  renderProgress();
  syncStateToQuery();
}

function randomizeCard() {
  if (state.activeView === "quiz") {
    startQuizRound();
    render();
    return;
  }

  const items = getCurrentItems();
  if (items.length <= 1) {
    return;
  }

  let nextIndex = getCurrentIndex();
  while (nextIndex === getCurrentIndex()) {
    nextIndex = Math.floor(Math.random() * items.length);
  }

  selectCard(nextIndex);
}

async function toggleFullscreen() {
  if (document.fullscreenElement === flashcard) {
    await document.exitFullscreen();
    return;
  }

  await flashcard.requestFullscreen();
}

flashcard.addEventListener("click", () => {
  if (state.activeView === "quiz") {
    return;
  }
  shiftCard(1);
});

prevButton.addEventListener("click", () => {
  shiftCard(-1);
});

nextButton.addEventListener("click", () => {
  shiftCard(1);
});

randomButton.addEventListener("click", () => {
  randomizeCard();
});

audioButton.addEventListener("click", () => {
  playCurrentAudio();
});

resumeButton.addEventListener("click", () => {
  restoreProgressState();
  if (state.activeView === "quiz") {
    startQuizRound();
  }
  render();
});

practiceAudioButton.addEventListener("click", () => {
  if (!state.quiz) {
    return;
  }

  playAudioFromConfig(getAudioConfigForItem(getCurrentItems()[state.quiz.correctIndex]), practiceFeedback);
});

practiceNextButton.addEventListener("click", () => {
  startQuizRound();
  render();
});

fullscreenButton.addEventListener("click", () => {
  toggleFullscreen().catch(() => {
    renderFullscreenButton();
  });
});

document.addEventListener("fullscreenchange", () => {
  renderFullscreenButton();
  renderCard();
});

window.addEventListener("resize", () => {
  renderCard();
});

window.addEventListener("keydown", (event) => {
  const targetTag = document.activeElement?.tagName;
  if (targetTag === "INPUT" || targetTag === "TEXTAREA" || targetTag === "SELECT") {
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    shiftCard(-1);
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    shiftCard(1);
  }

  if (event.key.toLowerCase() === "r") {
    event.preventDefault();
    randomizeCard();
  }

  if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    toggleFullscreen().catch(() => {
      renderFullscreenButton();
    });
  }

  if (event.code === "Space") {
    event.preventDefault();
    if (state.activeView === "quiz" && state.quiz) {
      playAudioFromConfig(getAudioConfigForItem(getCurrentItems()[state.quiz.correctIndex]), practiceFeedback);
    } else {
      playCurrentAudio();
    }
  }

  if (state.activeView === "quiz" && /^[1-4]$/.test(event.key)) {
    const option = state.quiz?.optionIndices?.[Number(event.key) - 1];
    if (Number.isInteger(option)) {
      event.preventDefault();
      submitQuizAnswer(option);
    }
  }
});

loadProgress();
restoreProgressState();
recordSessionIfNeeded();
applyStateFromQuery();
recordCurrentCardView(true);
if (state.activeView === "quiz") {
  startQuizRound();
}
render();
