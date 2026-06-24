/**
 * GameMatch — script.js
 * Quiz engine, recommendation system, local-storage history,
 * search/filter, and modal logic.
 */

/* ============================================================
   1. GAME DATABASE  (25 games)
   ============================================================ */
const GAMES = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    emoji: "⚔️",
    genre: "rpg",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    modes: ["single"],
    experience: ["story-driven", "exploration"],
    sessionLength: ["3-5h", "5h+"],
    description: "A vast open-world RPG with morally complex choices, incredible storytelling, and hundreds of hours of content set in a dark fantasy universe.",
    matchReasons: {
      genre: "Deep RPG mechanics with character progression",
      experience: "Rich narrative driven by player choices",
      session: "Perfect for long sessions — always something new to discover"
    }
  },
  {
    id: 2,
    title: "Skyrim",
    emoji: "🐉",
    genre: "rpg",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    modes: ["single"],
    experience: ["story-driven", "exploration"],
    sessionLength: ["1-3h", "3-5h", "5h+"],
    description: "An iconic open-world RPG where you're the Dragonborn. Explore mountains, dungeons, and ancient ruins across the frozen land of Skyrim.",
    matchReasons: {
      genre: "Classic RPG with total freedom to build any character",
      experience: "Hundreds of quests and lore to uncover",
      session: "Endlessly replayable across short or long sessions"
    }
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    emoji: "🌆",
    genre: "rpg",
    platforms: ["pc", "playstation", "xbox"],
    modes: ["single"],
    experience: ["story-driven", "exploration"],
    sessionLength: ["1-3h", "3-5h", "5h+"],
    description: "A neon-drenched open-world RPG set in Night City. Customize your mercenary V and make choices that shape the fate of the city.",
    matchReasons: {
      genre: "Action-RPG hybrid with deep character builds",
      experience: "One of the most cinematic stories in modern gaming",
      session: "Packed with side quests and secrets"
    }
  },
  {
    id: 4,
    title: "Valorant",
    emoji: "🎯",
    genre: "fps",
    platforms: ["pc"],
    modes: ["multiplayer", "both"],
    experience: ["competitive"],
    sessionLength: ["<1h", "1-3h"],
    description: "A tactical 5v5 FPS by Riot Games blending precise gunplay with unique character abilities. The premier competitive shooter on PC.",
    matchReasons: {
      genre: "Tight tactical FPS with a high skill ceiling",
      experience: "Ranked mode for true competitive grind",
      session: "Quick matches fit any schedule"
    }
  },
  {
    id: 5,
    title: "Counter-Strike 2",
    emoji: "💣",
    genre: "fps",
    platforms: ["pc"],
    modes: ["multiplayer", "both"],
    experience: ["competitive"],
    sessionLength: ["<1h", "1-3h"],
    description: "The legendary tactical shooter rebuilt in Source 2. Plant or defuse the bomb in intense 5v5 rounds that reward pure skill.",
    matchReasons: {
      genre: "The definitive pure-skill FPS experience",
      experience: "Decades of competitive depth in every match",
      session: "Short rounds make it easy to pick up and play"
    }
  },
  {
    id: 6,
    title: "Apex Legends",
    emoji: "🦾",
    genre: "fps",
    platforms: ["pc", "playstation", "xbox", "mobile"],
    modes: ["multiplayer", "both"],
    experience: ["competitive"],
    sessionLength: ["<1h", "1-3h"],
    description: "A fast-paced battle royale with Legends that each have unique abilities. Master movement, teamwork, and gunplay to be champion.",
    matchReasons: {
      genre: "Hero-shooter battle royale with fluid movement",
      experience: "Ranked mode and World's Edge await competitive players",
      session: "Each match is self-contained and action-packed"
    }
  },
  {
    id: 7,
    title: "Minecraft",
    emoji: "⛏️",
    genre: "survival",
    platforms: ["pc", "playstation", "xbox", "nintendo", "mobile"],
    modes: ["single", "multiplayer", "both"],
    experience: ["survival", "exploration", "relaxing"],
    sessionLength: ["<1h", "1-3h", "3-5h", "5h+"],
    description: "Build, explore, and survive in infinite procedurally generated worlds. The best-selling game of all time offers limitless creativity.",
    matchReasons: {
      genre: "The original survival-craft sandbox",
      experience: "Play relaxed in Creative or tense in Hardcore Survival",
      session: "Jump in for 20 minutes or lose 8 hours — it's up to you"
    }
  },
  {
    id: 8,
    title: "Subnautica",
    emoji: "🌊",
    genre: "survival",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    modes: ["single"],
    experience: ["survival", "exploration"],
    sessionLength: ["1-3h", "3-5h", "5h+"],
    description: "Crash-land on an alien ocean planet and survive by exploring the deep, building underwater bases, and uncovering a haunting mystery.",
    matchReasons: {
      genre: "Underwater survival like no other game",
      experience: "Exploration-driven narrative with genuine tension",
      session: "Long sessions reward with the richest discoveries"
    }
  },
  {
    id: 9,
    title: "No Man's Sky",
    emoji: "🪐",
    genre: "adventure",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    modes: ["single", "multiplayer", "both"],
    experience: ["exploration", "relaxing", "survival"],
    sessionLength: ["1-3h", "3-5h", "5h+"],
    description: "Explore an infinite procedurally generated galaxy with billions of unique planets, creatures, and civilisations. A zen journey across the cosmos.",
    matchReasons: {
      genre: "Space exploration at an almost incomprehensible scale",
      experience: "The most relaxing exploration game in existence",
      session: "Perfect for long, meditative play sessions"
    }
  },
  {
    id: 10,
    title: "Resident Evil 4 Remake",
    emoji: "🧟",
    genre: "horror",
    platforms: ["pc", "playstation", "xbox"],
    modes: ["single"],
    experience: ["survival", "story-driven"],
    sessionLength: ["1-3h", "3-5h"],
    description: "The definitive survival-horror game, fully remade. Rescue the president's daughter from a Spanish village overrun by terrifying cultists.",
    matchReasons: {
      genre: "Horror masterclass with perfect resource management",
      experience: "Tense survival meets cinematic storytelling",
      session: "Chapter-based structure fits medium sessions"
    }
  },
  {
    id: 11,
    title: "Dead Space Remake",
    emoji: "👾",
    genre: "horror",
    platforms: ["pc", "playstation", "xbox"],
    modes: ["single"],
    experience: ["survival", "story-driven"],
    sessionLength: ["1-3h", "3-5h"],
    description: "Engineer Isaac Clarke battles the Necromorphs aboard the USG Ishimura. The scariest sci-fi horror experience, reimagined with modern visuals.",
    matchReasons: {
      genre: "Sci-fi horror at its most atmospheric",
      experience: "Unrelenting survival tension with a compelling story",
      session: "Intense sequences ideal for focused 2–3 hour sittings"
    }
  },
  {
    id: 12,
    title: "Outlast",
    emoji: "📷",
    genre: "horror",
    platforms: ["pc", "playstation", "xbox"],
    modes: ["single"],
    experience: ["survival"],
    sessionLength: ["1-3h", "3-5h"],
    description: "Armed only with a night-vision camera, survive a psychiatric hospital gone horribly wrong. Run, hide, and don't get caught.",
    matchReasons: {
      genre: "Pure stealth-horror with zero combat — only fear",
      experience: "An unbroken survival nightmare from start to finish",
      session: "Short enough to complete in one terrifying evening"
    }
  },
  {
    id: 13,
    title: "EA Sports FC 26",
    emoji: "⚽",
    genre: "sports",
    platforms: ["pc", "playstation", "xbox", "nintendo", "mobile"],
    modes: ["single", "multiplayer", "both"],
    experience: ["competitive", "relaxing"],
    sessionLength: ["<1h", "1-3h"],
    description: "The world's #1 football simulation. Play career mode, build your Ultimate Team, or compete online in one of the most popular games on the planet.",
    matchReasons: {
      genre: "The most authentic football experience available",
      experience: "Competitive online modes and chill career management",
      session: "One match fits perfectly into a short session"
    }
  },
  {
    id: 14,
    title: "NBA 2K26",
    emoji: "🏀",
    genre: "sports",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    modes: ["single", "multiplayer", "both"],
    experience: ["competitive", "story-driven"],
    sessionLength: ["<1h", "1-3h", "3-5h"],
    description: "The most complete basketball experience: stunning player likenesses, deep MyCareer story mode, and intense online Park competitions.",
    matchReasons: {
      genre: "Gold standard basketball simulation",
      experience: "MyCareer's narrative depth surprises most players",
      session: "Quick Park games or extended MyCareer sessions"
    }
  },
  {
    id: 15,
    title: "God of War: Ragnarök",
    emoji: "🪓",
    genre: "action",
    platforms: ["playstation", "pc"],
    modes: ["single"],
    experience: ["story-driven", "exploration"],
    sessionLength: ["1-3h", "3-5h", "5h+"],
    description: "Kratos and Atreus journey through the Nine Realms as Ragnarök approaches. Stunning combat, breathtaking setpieces, and an emotional father-son story.",
    matchReasons: {
      genre: "Combat perfection meets blockbuster spectacle",
      experience: "One of gaming's greatest stories",
      session: "Epic enough for long sessions, chapters work in medium ones too"
    }
  },
  {
    id: 16,
    title: "Elden Ring",
    emoji: "🌑",
    genre: "action",
    platforms: ["pc", "playstation", "xbox"],
    modes: ["single", "multiplayer", "both"],
    experience: ["exploration", "survival", "story-driven"],
    sessionLength: ["1-3h", "3-5h", "5h+"],
    description: "FromSoftware's open-world masterpiece. Explore the Lands Between, face punishing bosses, and unravel the mystery of the Elden Ring.",
    matchReasons: {
      genre: "Action-RPG that rewards patience and mastery",
      experience: "Every corner holds lore and discovery",
      session: "Best enjoyed in long, focused sessions"
    }
  },
  {
    id: 17,
    title: "Hades",
    emoji: "🔱",
    genre: "action",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    modes: ["single"],
    experience: ["story-driven", "competitive"],
    sessionLength: ["<1h", "1-3h"],
    description: "A roguelike dungeon crawler where each failed escape attempt from the Underworld reveals more of an incredible story. Addictive run-based gameplay.",
    matchReasons: {
      genre: "Roguelike action with satisfying moment-to-moment combat",
      experience: "Groundbreaking narrative integration in a rogue-lite",
      session: "Each run takes 20–40 min — perfect for shorter sessions"
    }
  },
  {
    id: 18,
    title: "Stardew Valley",
    emoji: "🌾",
    genre: "rpg",
    platforms: ["pc", "playstation", "xbox", "nintendo", "mobile"],
    modes: ["single", "multiplayer", "both"],
    experience: ["relaxing"],
    sessionLength: ["<1h", "1-3h"],
    description: "Leave the corporate world behind and rebuild a rundown farm. Farm, fish, mine, and build relationships in this endlessly charming life sim.",
    matchReasons: {
      genre: "The quintessential cozy farming RPG",
      experience: "Deeply relaxing with layers of satisfying progression",
      session: "Each in-game day takes about 15 min — great for quick plays"
    }
  },
  {
    id: 19,
    title: "Civilization VI",
    emoji: "🏛️",
    genre: "strategy",
    platforms: ["pc", "playstation", "xbox", "nintendo", "mobile"],
    modes: ["single", "multiplayer", "both"],
    experience: ["competitive", "exploration"],
    sessionLength: ["3-5h", "5h+"],
    description: "Build an empire to stand the test of time. Lead your civilization from the Stone Age to the Space Age through war, diplomacy, and culture.",
    matchReasons: {
      genre: "The deepest turn-based strategy series ever made",
      experience: "Every game is a different story of conquest or culture",
      session: "'One more turn' syndrome — plan for a long session"
    }
  },
  {
    id: 20,
    title: "StarCraft II",
    emoji: "🛸",
    genre: "strategy",
    platforms: ["pc"],
    modes: ["single", "multiplayer", "both"],
    experience: ["competitive", "story-driven"],
    sessionLength: ["<1h", "1-3h"],
    description: "The pinnacle of real-time strategy. Command Terran, Zerg, or Protoss in a deep competitive ladder or an award-winning campaign trilogy.",
    matchReasons: {
      genre: "The defining competitive RTS with unmatched depth",
      experience: "The campaign tells one of gaming's best sci-fi stories",
      session: "Matches range from 10-minute blitzes to 45-minute epics"
    }
  },
  {
    id: 21,
    title: "The Legend of Zelda: Tears of the Kingdom",
    emoji: "🌟",
    genre: "adventure",
    platforms: ["nintendo"],
    modes: ["single"],
    experience: ["exploration", "story-driven"],
    sessionLength: ["1-3h", "3-5h", "5h+"],
    description: "Hyrule reimagined with sky islands and depths. Build contraptions, solve inventive shrines, and save the kingdom using Ultrahand and Recall.",
    matchReasons: {
      genre: "The greatest open-world adventure on any Nintendo platform",
      experience: "Encourages creative exploration above all else",
      session: "Each region is a self-contained adventure"
    }
  },
  {
    id: 22,
    title: "Hollow Knight",
    emoji: "🦋",
    genre: "action",
    platforms: ["pc", "playstation", "xbox", "nintendo"],
    modes: ["single"],
    experience: ["exploration", "story-driven"],
    sessionLength: ["1-3h", "3-5h"],
    description: "Delve into Hallownest, a vast underground kingdom of insects and monsters. A gorgeous, challenging metroidvania with extraordinary depth.",
    matchReasons: {
      genre: "Metroidvania with precise, rewarding combat",
      experience: "The exploration and lore reveal a tragic, beautiful world",
      session: "Natural stopping points make it great for medium sessions"
    }
  },
  {
    id: 23,
    title: "Forza Horizon 5",
    emoji: "🏎️",
    genre: "sports",
    platforms: ["pc", "xbox"],
    modes: ["single", "multiplayer", "both"],
    experience: ["exploration", "competitive", "relaxing"],
    sessionLength: ["<1h", "1-3h", "3-5h"],
    description: "Race hundreds of cars across a stunning Mexico open world. The most accessible and joyful racing game ever made.",
    matchReasons: {
      genre: "Best-in-class open-world racing",
      experience: "Equally great for competitive racing or scenic exploration",
      session: "Events fit perfectly into any session length"
    }
  },
  {
    id: 24,
    title: "Baldur's Gate 3",
    emoji: "🎲",
    genre: "rpg",
    platforms: ["pc", "playstation"],
    modes: ["single", "multiplayer", "both"],
    experience: ["story-driven", "exploration"],
    sessionLength: ["1-3h", "3-5h", "5h+"],
    description: "A staggeringly deep D&D RPG where every choice matters. Co-op with friends or solo through a rich story of mind flayers, gods, and chaos.",
    matchReasons: {
      genre: "The most critically acclaimed RPG in years — true D&D depth",
      experience: "A branching story that remembers every decision you make",
      session: "Chapter structure supports any length of play"
    }
  },
  {
    id: 25,
    title: "Among Us",
    emoji: "🚀",
    genre: "strategy",
    platforms: ["pc", "playstation", "xbox", "nintendo", "mobile"],
    modes: ["multiplayer"],
    experience: ["competitive"],
    sessionLength: ["<1h", "1-3h"],
    description: "Find the impostors among your crew — or be the impostor and avoid detection. The definitive social deduction party game.",
    matchReasons: {
      genre: "Deduction and social strategy in quick rounds",
      experience: "Pure competitive social experience with friends",
      session: "Each round is 5–15 minutes — great for casual hangouts"
    }
  }
];

/* ============================================================
   2. QUIZ QUESTIONS
   ============================================================ */
const QUESTIONS = [
  {
    id: "platform",
    text: "What platform do you play on?",
    hint: "Select all that apply.",
    options: [
      { value: "pc",          label: "PC",               icon: "🖥️" },
      { value: "playstation", label: "PlayStation",      icon: "🎮" },
      { value: "xbox",        label: "Xbox",             icon: "🟢" },
      { value: "nintendo",    label: "Nintendo Switch",  icon: "🕹️" },
      { value: "mobile",      label: "Mobile",           icon: "📱" }
    ]
  },
  {
    id: "genre",
    text: "What genre do you enjoy most?",
    hint: "Select all genres you enjoy.",
    options: [
      { value: "action",   label: "Action",    icon: "⚡" },
      { value: "rpg",      label: "RPG",        icon: "🧙" },
      { value: "fps",      label: "FPS",        icon: "🎯" },
      { value: "adventure",label: "Adventure",  icon: "🗺️" },
      { value: "strategy", label: "Strategy",   icon: "♟️" },
      { value: "horror",   label: "Horror",     icon: "👻" },
      { value: "sports",   label: "Sports",     icon: "⚽" }
    ]
  },
  {
    id: "mode",
    text: "Do you prefer…",
    hint: "Select all that apply.",
    options: [
      { value: "single",      label: "Single-player", icon: "🧍" },
      { value: "multiplayer", label: "Multiplayer",    icon: "👥" },
      { value: "both",        label: "Both",           icon: "🔄" }
    ]
  },
  {
    id: "session",
    text: "How long do you usually play?",
    hint: "Select all that apply.",
    options: [
      { value: "<1h",  label: "Under 1 hour",  icon: "⚡" },
      { value: "1-3h", label: "1 – 3 hours",   icon: "🕐" },
      { value: "3-5h", label: "3 – 5 hours",   icon: "🕓" },
      { value: "5h+",  label: "5+ hours",      icon: "🔥" }
    ]
  },
  {
    id: "experience",
    text: "What kind of experience are you after?",
    hint: "Select all that apply.",
    options: [
      { value: "competitive",  label: "Competitive",   icon: "🏆" },
      { value: "relaxing",     label: "Relaxing",      icon: "😌" },
      { value: "story-driven", label: "Story-Driven",  icon: "📖" },
      { value: "exploration",  label: "Exploration",   icon: "🌍" },
      { value: "survival",     label: "Survival",      icon: "🪖" }
    ]
  }
];

/* ============================================================
   3. APP STATE
   ============================================================ */
let currentQuestion = 0;
let answers = {};     // { platform, genre, mode, session, experience }
let results  = [];    // scored & sorted game list

/* ============================================================
   4. DOM HELPERS
   ============================================================ */
const $ = (id) => document.getElementById(id);

/** Switch visible section with animation */
function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(s => {
    if (s.classList.contains('active')) {
      s.classList.remove('fade-in');
      s.classList.add('fade-out');
      setTimeout(() => { s.classList.remove('active', 'fade-out'); }, 300);
    }
  });
  setTimeout(() => {
    const target = $(id);
    target.classList.add('active', 'fade-in');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 300);
}

/* ============================================================
   5. QUIZ LOGIC
   ============================================================ */
function startQuiz() {
  currentQuestion = 0;
  answers = {};
  showSection('quiz');
  renderQuestion();
}

/** Render the current question into the card */
function renderQuestion(direction = 'right') {
  const q   = QUESTIONS[currentQuestion];
  const card = $('questionCard');

  // Animate out then back in
  const outClass = direction === 'right' ? 'slide-out-left' : 'slide-out-right';
  const inClass  = direction === 'right' ? 'slide-in-right' : 'slide-in-left';

  card.classList.add(outClass);
  setTimeout(() => {
    card.classList.remove(outClass);

    // Update content
    $('qNumber').textContent  = String(currentQuestion + 1).padStart(2, '0');
    $('qText').textContent    = q.text;
    $('qHint').textContent    = q.hint;

    // Build option buttons (multi-select: answers[q.id] is always an array)
    if (!Array.isArray(answers[q.id])) answers[q.id] = [];
    const grid = $('optionsGrid');
    grid.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.value = opt.value;
      const isSelected = answers[q.id].includes(opt.value);
      btn.innerHTML = `
        <span class="opt-icon">${opt.icon}</span>
        <span class="opt-label">${opt.label}</span>
        <span class="opt-check">${isSelected ? '✓' : ''}</span>
      `;
      if (isSelected) btn.classList.add('selected');
      btn.addEventListener('click', () => selectOption(btn, q.id, opt.value));
      grid.appendChild(btn);
    });

    card.classList.add(inClass);
    setTimeout(() => card.classList.remove(inClass), 400);
  }, 300);

  updateProgress();
  updateNavButtons();
}

function selectOption(btn, questionId, value) {
  // Toggle the clicked option in/out of the answers array
  if (!Array.isArray(answers[questionId])) answers[questionId] = [];
  const idx = answers[questionId].indexOf(value);
  if (idx === -1) {
    answers[questionId].push(value);
    btn.classList.add('selected');
    btn.querySelector('.opt-check').textContent = '✓';
  } else {
    answers[questionId].splice(idx, 1);
    btn.classList.remove('selected');
    btn.querySelector('.opt-check').textContent = '';
  }
  updateNavButtons();
}

function updateProgress() {
  const pct = Math.round((currentQuestion / QUESTIONS.length) * 100);
  $('progressFill').style.width  = pct + '%';
  $('progressLabel').textContent = `Question ${currentQuestion + 1} of ${QUESTIONS.length}`;
  $('progressPct').textContent   = pct + '%';

  // Update step dots
  document.querySelectorAll('.step').forEach((dot, i) => {
    dot.classList.toggle('active',    i === currentQuestion);
    dot.classList.toggle('completed', i < currentQuestion);
  });
}

function updateNavButtons() {
  const val = answers[QUESTIONS[currentQuestion].id];
  const answered = Array.isArray(val) ? val.length > 0 : val !== undefined;
  $('prevBtn').disabled = currentQuestion === 0;
  $('nextBtn').disabled = !answered;

  const isLast = currentQuestion === QUESTIONS.length - 1;
  $('nextBtn').innerHTML = isLast ? 'See Results 🎮' : 'Next →';
}

$('nextBtn').addEventListener('click', () => {
  const val = answers[QUESTIONS[currentQuestion].id];
  const answered = Array.isArray(val) ? val.length > 0 : !!val;
  if (!answered) return;
  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion('right');
  } else {
    showResults();
  }
});

$('prevBtn').addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion('left');
  }
});

/* ============================================================
   6. RECOMMENDATION ENGINE
   ============================================================ */

/**
 * Score each game against the user's answers.
 * Returns array of { game, score, matchNote } sorted descending.
 */
function scoreGames() {
  // Normalise answers — each is now an array
  const platforms   = answers.platform   || [];
  const genres      = answers.genre      || [];
  const modes       = answers.mode       || [];
  const sessions    = answers.session    || [];
  const experiences = answers.experience || [];

  return GAMES.map(game => {
    let score = 0;
    const reasons = [];

    // Platform — game must match at least one selected platform
    const platformMatch = platforms.some(p => game.platforms.includes(p));
    if (!platformMatch) return { game, score: -1, matchNote: '' };
    score += 30;

    // Genre — score for each matching genre selected
    const exactGenreMatch = genres.includes(game.genre);
    if (exactGenreMatch) {
      score += 40;
      reasons.push(game.matchReasons.genre);
    } else if (genres.some(g => genreRelated(game.genre, g))) {
      score += 15;
      reasons.push(`Related to your selected genres`);
    }

    // Mode — game must support at least one selected mode
    const modeOk = modes.some(m =>
      m === 'both' ||
      game.modes.includes(m) ||
      game.modes.includes('both')
    );
    if (modeOk) score += 15;

    // Session length — score for each matching session
    const sessionMatches = sessions.filter(s => game.sessionLength.includes(s));
    if (sessionMatches.length > 0) {
      score += 10 * Math.min(sessionMatches.length, 2); // up to +20
      reasons.push(game.matchReasons.session);
    }

    // Experience — score for each matching experience
    const expMatches = experiences.filter(e => game.experience.includes(e));
    if (expMatches.length > 0) {
      score += 20 * Math.min(expMatches.length, 2); // up to +40
      reasons.push(game.matchReasons.experience);
    }

    const matchNote = reasons.slice(0, 2).join('. ') || `Available on your platform in ${game.genre}`;
    return { game, score, matchNote };
  })
  .filter(r => r.score > 0)
  .sort((a, b) => b.score - a.score);
}

/** Check if two genres are related enough for a partial score */
function genreRelated(a, b) {
  const related = {
    action:    ['rpg', 'adventure', 'horror'],
    rpg:       ['action', 'adventure', 'strategy'],
    adventure: ['rpg', 'action', 'survival'],
    survival:  ['horror', 'adventure'],
    horror:    ['survival', 'action'],
    strategy:  ['rpg'],
    fps:       ['action'],
    sports:    []
  };
  return (related[a] || []).includes(b);
}

/* ============================================================
   7. SHOW RESULTS
   ============================================================ */
function showResults() {
  showSection('loading');
  animateLoading(() => {
    results = scoreGames();
    saveHistory(results);
    renderResultsPage(results);
    showSection('results');
  });
}

const loadingMessages = [
  "Scanning 25 games…",
  "Analyzing your play style…",
  "Checking platform availability…",
  "Ranking best matches…"
];
let loadingMsgIndex = 0;
let loadingInterval = null;

function animateLoading(callback) {
  loadingMsgIndex = 0;
  $('loadingSub').textContent = loadingMessages[0];
  clearInterval(loadingInterval);
  loadingInterval = setInterval(() => {
    loadingMsgIndex = (loadingMsgIndex + 1) % loadingMessages.length;
    $('loadingSub').textContent = loadingMessages[loadingMsgIndex];
  }, 500);
  setTimeout(() => {
    clearInterval(loadingInterval);
    callback();
  }, 2000);
}

function renderResultsPage(scored) {
  // Update sub-header
  const genres      = answers.genre      || [];
  const experiences = answers.experience || [];
  const platforms   = answers.platform   || [];
  $('matchSub').textContent =
    `${genres.join(', ') || 'Mixed'} games for ${platforms.join(', ') || 'your platform'} — ${experiences.join(', ') || 'your'} focus`;

  // Reset search
  $('searchInput').value = '';

  renderCards(scored);
}

function renderCards(scored) {
  const grid = $('gamesGrid');
  grid.innerHTML = '';

  const maxScore = scored[0]?.score || 1;

  if (scored.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <p>No games match those filters. Try adjusting your search.</p>
      </div>`;
    return;
  }

  scored.forEach(({ game, score, matchNote }, idx) => {
    const pct = Math.round((score / maxScore) * 100);
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.animationDelay = `${idx * 60}ms`;
    card.dataset.gameId = game.id;

    card.innerHTML = `
      ${idx < 3 ? `<div class="card-rank">${['🥇 Top Pick','🥈 Runner-Up','🥉 Great Match'][idx]}</div>` : ''}
      <div class="card-cover">${game.emoji}</div>
      <div class="card-body">
        <div class="card-meta">
          <span class="tag tag-genre">${game.genre}</span>
          <span class="tag tag-platform">${answers.platform}</span>
        </div>
        <div class="card-title">${game.title}</div>
        <div class="card-desc">${game.description}</div>
        <div class="card-match">${matchNote}</div>
        <div class="score-bar">
          <div class="score-fill" style="width:0%" data-pct="${pct}"></div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openGameModal(game, matchNote));
    grid.appendChild(card);

    // Animate score bars after paint
    requestAnimationFrame(() => {
      setTimeout(() => {
        const fill = card.querySelector('.score-fill');
        if (fill) fill.style.width = fill.dataset.pct + '%';
      }, 200 + idx * 60);
    });
  });
}

/* ============================================================
   8. SEARCH & FILTER
   ============================================================ */
function getFilteredResults() {
  const query = $('searchInput').value.toLowerCase().trim();
  return results.filter(({ game }) =>
    !query ||
    game.title.toLowerCase().includes(query) ||
    game.description.toLowerCase().includes(query)
  );
}

$('searchInput').addEventListener('input', () => renderCards(getFilteredResults()));

/* ============================================================
   9. GAME DETAIL MODAL
   ============================================================ */
function openGameModal(game, matchNote) {
  $('modalGameTitle').textContent = game.title;

  const platformBadges = game.platforms.map(p =>
    `<span class="tag tag-platform">${p}</span>`
  ).join('');

  $('gameModalBody').innerHTML = `
    <div class="detail-cover">${game.emoji}</div>
    <div class="detail-meta">
      <span class="tag tag-genre">${game.genre}</span>
      ${platformBadges}
    </div>
    <p class="detail-desc">${game.description}</p>
    <div class="detail-match">
      <strong>Why it matches you</strong>
      ${matchNote || 'Matches your platform and genre preferences.'}
    </div>
  `;

  $('gameModal').classList.add('open');
}

$('closeGameModal').addEventListener('click', () => $('gameModal').classList.remove('open'));
$('gameModal').addEventListener('click', (e) => {
  if (e.target === $('gameModal')) $('gameModal').classList.remove('open');
});

/* ============================================================
   10. LOCAL STORAGE — HISTORY
   ============================================================ */

/**
 * Save a recommendation session to localStorage.
 * Keeps the last 10 sessions.
 */
function saveHistory(scored) {
  const history = loadHistory();
  const platforms = answers.platform || [];
  const genres    = answers.genre    || [];
  const entry = {
    date:    new Date().toISOString(),
    answers: { ...answers },
    games:   scored.slice(0, 5).map(r => r.game.title),
    summary: `${genres.join('+')} on ${platforms.join('+')}`
  };
  history.unshift(entry);
  if (history.length > 10) history.pop();
  try {
    localStorage.setItem('gamematch_history', JSON.stringify(history));
  } catch (e) {
    console.warn('localStorage unavailable', e);
  }
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem('gamematch_history') || '[]');
  } catch { return []; }
}

function clearHistory() {
  try { localStorage.removeItem('gamematch_history'); } catch {}
  renderHistory();
}

function renderHistory() {
  const list    = $('historyList');
  const history = loadHistory();

  if (history.length === 0) {
    list.innerHTML = `<div class="history-empty">
      <div style="font-size:2rem;margin-bottom:8px">📭</div>
      No history yet — complete a quiz to see your results here.
    </div>`;
    return;
  }

  list.innerHTML = history.map(entry => {
    const d    = new Date(entry.date);
    const dateStr = d.toLocaleDateString('en-US', { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
    const topGames = entry.games.slice(0, 3).join(', ');
    const summary  = entry.summary || 'mixed';
    return `
      <div class="history-entry">
        <div class="history-icon">🎮</div>
        <div class="history-info">
          <div class="history-date">${dateStr} · ${summary}</div>
          <div class="history-games">${topGames}</div>
        </div>
      </div>`;
  }).join('');
}

/* ============================================================
   11. HISTORY MODAL
   ============================================================ */
function openHistoryModal() {
  renderHistory();
  $('historyModal').classList.add('open');
}

$('historyBtn').addEventListener('click',    openHistoryModal);
$('viewHistoryBtn').addEventListener('click', openHistoryModal);
$('closeModal').addEventListener('click',    () => $('historyModal').classList.remove('open'));
$('historyModal').addEventListener('click',  (e) => {
  if (e.target === $('historyModal')) $('historyModal').classList.remove('open');
});
$('clearHistory').addEventListener('click',  clearHistory);

/* ============================================================
   12. NAV — Restart & Start
   ============================================================ */
$('startQuizBtn').addEventListener('click', startQuiz);
$('restartBtn').addEventListener('click',   startQuiz);

/* ============================================================
   13. KEYBOARD SUPPORT
   ============================================================ */
document.addEventListener('keydown', (e) => {
  // Close modals on Escape
  if (e.key === 'Escape') {
    $('historyModal').classList.remove('open');
    $('gameModal').classList.remove('open');
  }
  // Enter / Space advances quiz
  if ((e.key === 'Enter' || e.key === ' ') && $('quiz').classList.contains('active')) {
    if (!$('nextBtn').disabled) $('nextBtn').click();
  }
});
