cat > /mnt/user-data/outputs/style.css << 'CSSEOF'
/* ============================================
   GameMatch — style.css
   Dark gaming theme with neon blue/purple accents
   ============================================ */

/* --- Reset & Base --- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg-deep:    #07080f;
  --bg-card:    #0d0f1e;
  --bg-card2:   #11142a;
  --bg-glass:   rgba(255,255,255,0.04);
  --bg-glass2:  rgba(255,255,255,0.07);

  --neon-blue:   #3b9eff;
  --neon-purple: #a855f7;
  --neon-cyan:   #22d3ee;
  --neon-gold:   #f59e0b;
  --neon-green:  #22c55e;

  --accent-grd:  linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
  --gold-grd:    linear-gradient(135deg, #f59e0b, #ef4444);
  --glow-blue:   0 0 20px rgba(59,158,255,0.4);
  --glow-gold:   0 0 20px rgba(245,158,11,0.4);

  --text-primary:   #f0f4ff;
  --text-secondary: #8892b0;
  --text-muted:     #4a5568;

  --border:        rgba(255,255,255,0.08);
  --border-accent: rgba(59,158,255,0.3);
  --border-gold:   rgba(245,158,11,0.35);

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-xl: 32px;

  --transition:      0.25s cubic-bezier(0.4,0,0.2,1);
  --transition-slow: 0.5s cubic-bezier(0.4,0,0.2,1);

  --nav-h: 60px;
}

html { scroll-behavior: smooth; }
body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: var(--bg-deep);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  line-height: 1.6;
  padding-top: var(--nav-h);
}

/* ========== TOP NAV ========== */
.topnav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  background: rgba(7,8,15,0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  z-index: 50;
}
.topnav-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.brand-icon { font-size: 1.25rem; }
.brand-name { background: var(--accent-grd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

.topnav-links {
  display: flex;
  align-items: center;
  gap: 6px;
}
.nav-link {
  background: none;
  border: 1px solid transparent;
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 6px;
}
.nav-link:hover { color: var(--text-primary); border-color: var(--border); background: var(--bg-glass); }

.nav-points-badge {
  background: linear-gradient(135deg, rgba(245,158,11,0.2), rgba(239,68,68,0.15));
  border: 1px solid var(--border-gold);
  color: var(--neon-gold);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 100px;
}

/* ========== SECTION SYSTEM ========== */
.section {
  display: none;
  min-height: calc(100vh - var(--nav-h));
  position: relative;
}
.section.active {
  display: flex;
  align-items: center;
  justify-content: center;
}
.section.fade-in  { animation: fadeIn 0.5s ease forwards; }
.section.fade-out { animation: fadeOut 0.3s ease forwards; }

@keyframes fadeIn  { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeOut { from { opacity:1; transform:translateY(0); }    to { opacity:0; transform:translateY(-16px); } }

/* ========== HERO ========== */
#hero { overflow: hidden; }
.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.grid-overlay {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(59,158,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59,158,255,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
}
.orb { position:absolute; border-radius:50%; filter:blur(80px); animation:drift 8s ease-in-out infinite; }
.orb-1 { width:500px; height:500px; background:rgba(59,158,255,0.12);  top:-100px; right:-100px; animation-delay:0s; }
.orb-2 { width:400px; height:400px; background:rgba(168,85,247,0.10);  bottom:-80px; left:-80px; animation-delay:-3s; }
.orb-3 { width:300px; height:300px; background:rgba(34,211,238,0.07);  top:50%; left:50%; transform:translate(-50%,-50%); animation-delay:-5s; }
@keyframes drift { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(20px,-20px) scale(1.05);} 66%{transform:translate(-15px,15px) scale(0.97);} }

.hero-content {
  position: relative; z-index: 2;
  text-align: center;
  max-width: 700px;
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(59,158,255,0.12);
  border: 1px solid rgba(59,158,255,0.25);
  color: var(--neon-blue);
  font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 6px 16px; border-radius: 100px;
  margin-bottom: 24px;
  animation: fadeIn 0.6s ease 0.1s both;
}
.hero-badge::before { content:'◆'; font-size:0.6em; }

.hero-title {
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 800; letter-spacing: -0.03em; line-height: 1.05;
  margin-bottom: 16px;
  animation: fadeIn 0.6s ease 0.2s both;
}
.gradient-text {
  background: var(--accent-grd);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-desc {
  font-size: 1.1rem; color: var(--text-secondary);
  max-width: 480px; margin: 0 auto 28px;
  animation: fadeIn 0.6s ease 0.3s both;
}
.hero-actions {
  display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
  margin-bottom: 36px;
  animation: fadeIn 0.6s ease 0.4s both;
}
.hero-stats {
  display: flex; align-items: center; justify-content: center; gap: 24px;
  margin-bottom: 28px;
  animation: fadeIn 0.6s ease 0.5s both;
}
.stat { text-align: center; }
.stat-num   { display:block; font-size:1.5rem; font-weight:700; line-height:1; }
.stat-label { font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.06em; }
.stat-divider { width:1px; height:32px; background:var(--border); }

/* QuestPass hero teaser */
.hero-questpass-teaser {
  display: flex; align-items: center; gap: 14px;
  background: linear-gradient(135deg, rgba(245,158,11,0.08), rgba(168,85,247,0.08));
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-lg);
  padding: 16px 20px;
  max-width: 560px;
  width: 100%;
  animation: fadeIn 0.6s ease 0.6s both;
}
.qp-teaser-icon { font-size: 1.6rem; flex-shrink: 0; }
.qp-teaser-text { flex: 1; font-size: 0.88rem; color: var(--text-secondary); text-align: left; }
.qp-teaser-text strong { color: var(--neon-gold); display: block; margin-bottom: 2px; }

/* ========== BUTTONS ========== */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; border-radius: var(--radius-md);
  font-size: 0.95rem; font-weight: 600; border: none; cursor: pointer;
  transition: var(--transition); white-space: nowrap;
  position: relative; overflow: hidden;
}
.btn::after { content:''; position:absolute; inset:0; background:rgba(255,255,255,0); transition:var(--transition); }
.btn:hover::after { background: rgba(255,255,255,0.06); }
.btn:active { transform: scale(0.97); }

.btn-primary {
  background: var(--accent-grd); color: #fff; box-shadow: var(--glow-blue);
}
.btn-primary:hover { box-shadow: 0 0 32px rgba(59,158,255,0.55), 0 0 60px rgba(168,85,247,0.25); transform: translateY(-2px); }
.btn-primary:disabled { opacity:0.4; cursor:not-allowed; transform:none; box-shadow:none; }

.btn-ghost {
  background: var(--bg-glass); color: var(--text-secondary); border: 1px solid var(--border);
}
.btn-ghost:hover { border-color: var(--border-accent); color: var(--text-primary); transform: translateY(-2px); }
.btn-ghost:disabled { opacity:0.35; cursor:not-allowed; transform:none; }

.btn-gold {
  background: var(--gold-grd); color: #fff; box-shadow: var(--glow-gold);
}
.btn-gold:hover { box-shadow: 0 0 32px rgba(245,158,11,0.55); transform: translateY(-2px); }

.btn-sm { padding: 8px 18px; font-size: 0.85rem; }
.btn-icon { font-size: 0.8em; }

/* ========== QUIZ ========== */
#quiz { padding: 32px 16px; background: var(--bg-deep); }
.quiz-container { width:100%; max-width:640px; display:flex; flex-direction:column; gap:28px; }

.progress-wrap { display:flex; flex-direction:column; gap:10px; }
.progress-info { display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted); letter-spacing:0.04em; }
.progress-bar-bg { width:100%; height:4px; background:rgba(255,255,255,0.07); border-radius:100px; overflow:hidden; }
.progress-bar-fill { height:100%; background:var(--accent-grd); border-radius:100px; width:0%; transition:width 0.5s cubic-bezier(0.4,0,0.2,1); box-shadow:0 0 12px rgba(59,158,255,0.6); }
.progress-steps { display:flex; gap:8px; }
.step { flex:1; height:3px; background:rgba(255,255,255,0.08); border-radius:100px; transition:var(--transition); }
.step.active    { background:var(--neon-blue); box-shadow:0 0 8px rgba(59,158,255,0.5); }
.step.completed { background:var(--neon-purple); }

.question-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-xl); padding: 40px 36px;
  position: relative; overflow: hidden;
}
.question-card::before {
  content:''; position:absolute; top:0; left:0; right:0; height:2px;
  background: var(--accent-grd);
}
.q-number { font-size:3rem; font-weight:900; color:rgba(59,158,255,0.08); line-height:1; margin-bottom:12px; letter-spacing:-0.04em; }
.q-text   { font-size:1.45rem; font-weight:700; margin-bottom:6px; line-height:1.3; }
.q-hint   { font-size:0.85rem; color:var(--neon-blue); margin-bottom:28px; opacity:0.8; display:flex; align-items:center; gap:6px; }
.q-hint::before { content:'⊕'; font-size:0.75em; }

.options-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr)); gap:10px; }
.option-btn {
  background: var(--bg-glass); border: 1px solid var(--border); border-radius: var(--radius-md);
  padding: 14px 16px; color: var(--text-secondary); font-size: 0.9rem; font-weight: 500;
  cursor: pointer; transition: var(--transition); text-align: left;
  display: flex; align-items: center; gap: 10px;
}
.option-btn .opt-icon { font-size:1.2em; flex-shrink:0; }
.option-btn:hover { border-color:var(--border-accent); color:var(--text-primary); background:rgba(59,158,255,0.06); transform:translateY(-2px); }
.option-btn.selected { border-color:var(--neon-blue); color:var(--text-primary); background:rgba(59,158,255,0.12); box-shadow:0 0 0 1px var(--neon-blue) inset, var(--glow-blue); }
.option-btn.selected .opt-check { background:var(--neon-blue); border-color:var(--neon-blue); color:#fff; }
.opt-check { width:18px; height:18px; border-radius:50%; border:2px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:0.6rem; margin-left:auto; flex-shrink:0; transition:var(--transition); }

.quiz-nav { display:flex; justify-content:space-between; gap:12px; }

.slide-in-right  { animation: slideInRight 0.35s cubic-bezier(0.4,0,0.2,1) forwards; }
.slide-out-left  { animation: slideOutLeft  0.3s cubic-bezier(0.4,0,0.2,1) forwards; }
.slide-in-left   { animation: slideInLeft   0.35s cubic-bezier(0.4,0,0.2,1) forwards; }
.slide-out-right { animation: slideOutRight 0.3s cubic-bezier(0.4,0,0.2,1) forwards; }
@keyframes slideInRight  { from{opacity:0;transform:translateX(50px);}  to{opacity:1;transform:translateX(0);} }
@keyframes slideOutLeft  { from{opacity:1;transform:translateX(0);}  to{opacity:0;transform:translateX(-50px);} }
@keyframes slideInLeft   { from{opacity:0;transform:translateX(-50px);} to{opacity:1;transform:translateX(0);} }
@keyframes slideOutRight { from{opacity:1;transform:translateX(0);}  to{opacity:0;transform:translateX(50px);} }

/* ========== LOADING ========== */
#loading { background:var(--bg-deep); flex-direction:column; text-align:center; }
.loading-container { display:flex; flex-direction:column; align-items:center; gap:28px; }
.loading-ring { position:relative; width:120px; height:120px; display:flex; align-items:center; justify-content:center; }
.ring { position:absolute; border-radius:50%; border:2px solid transparent; animation:spin 2s linear infinite; }
.r1 { inset:0;   border-top-color:var(--neon-blue);   animation-duration:1.5s; }
.r2 { inset:12px; border-right-color:var(--neon-purple); animation-duration:2s; animation-direction:reverse; }
.r3 { inset:24px; border-bottom-color:var(--neon-cyan);  animation-duration:2.5s; }
@keyframes spin { to { transform: rotate(360deg); } }
.loading-icon  { font-size:2rem; animation:pulse 1.5s ease-in-out infinite; position:relative; z-index:1; }
@keyframes pulse { 0%,100%{transform:scale(1);} 50%{transform:scale(1.15);} }
.loading-title { font-size:1.5rem; font-weight:700; }
.loading-sub   { color:var(--text-muted); font-size:0.9rem; animation:loadingFlicker 1.8s ease-in-out infinite; }
@keyframes loadingFlicker { 0%,100%{opacity:0.5;} 50%{opacity:1;} }

/* ========== RESULTS ========== */
#results { align-items:flex-start; padding: 40px 24px; background:var(--bg-deep); }
.results-container { width:100%; max-width:1100px; margin:0 auto; display:flex; flex-direction:column; gap:24px; }
.results-header { display:flex; align-items:flex-start; justify-content:space-between; flex-wrap:wrap; gap:16px; }
.results-title { font-size:2rem; font-weight:800; letter-spacing:-0.02em; }
.results-sub   { color:var(--text-muted); font-size:0.9rem; margin-top:4px; }
.results-controls { display:flex; gap:10px; flex-wrap:wrap; }

.search-wrap { position:relative; display:flex; align-items:center; }
.search-icon { position:absolute; left:12px; font-size:0.85rem; pointer-events:none; }
.search-input {
  background:var(--bg-card); border:1px solid var(--border); color:var(--text-primary);
  border-radius:var(--radius-sm); padding:9px 12px 9px 36px; font-size:0.88rem; width:200px;
  transition:var(--transition); outline:none;
}
.search-input::placeholder { color:var(--text-muted); }
.search-input:focus { border-color:var(--border-accent); box-shadow:0 0 0 3px rgba(59,158,255,0.1); }

/* QuestPass exclusive banner */
.qp-exclusive-banner {
  display: flex; align-items: center; gap: 12px;
  background: linear-gradient(135deg, rgba(245,158,11,0.1), rgba(168,85,247,0.08));
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-md);
  padding: 14px 20px;
  font-size: 0.9rem; color: var(--text-secondary);
}
.qp-exc-icon { font-size: 1.3rem; }
.qp-exc-badge {
  margin-left: auto; background: var(--gold-grd); color: #fff;
  font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border-radius: 100px;
  letter-spacing: 0.06em;
}

/* Games grid */
.games-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:18px; }
.game-card {
  background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg);
  overflow:hidden; transition:var(--transition); cursor:pointer; position:relative;
  display:flex; flex-direction:column;
  animation: cardIn 0.4s ease both;
}
@keyframes cardIn { from{opacity:0;transform:translateY(20px) scale(0.97);} to{opacity:1;transform:translateY(0) scale(1);} }
.game-card:hover { border-color:rgba(59,158,255,0.35); transform:translateY(-4px); box-shadow:0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,158,255,0.15) inset; }

/* QuestPass exclusive card styling */
.game-card.qp-exclusive {
  border-color: var(--border-gold);
  background: linear-gradient(180deg, rgba(245,158,11,0.05) 0%, var(--bg-card) 60%);
}
.game-card.qp-exclusive:hover { border-color: var(--neon-gold); box-shadow: 0 12px 40px rgba(0,0,0,0.4), var(--glow-gold); }

.card-rank {
  position:absolute; top:12px; left:12px;
  background:var(--accent-grd); color:#fff;
  font-size:0.7rem; font-weight:700; padding:3px 10px; border-radius:100px; z-index:2; letter-spacing:0.04em;
}
.card-rank.rank-exclusive {
  background: var(--gold-grd);
}
.card-cover {
  width:100%; height:165px; display:flex; align-items:center; justify-content:center;
  font-size:4rem; background:var(--bg-card2); position:relative; overflow:hidden;
}
.card-cover::after { content:''; position:absolute; inset:0; background:var(--accent-grd); opacity:0.06; }
.game-card.qp-exclusive .card-cover::after { background: var(--gold-grd); opacity: 0.08; }

.card-body { padding:18px 20px 20px; display:flex; flex-direction:column; gap:8px; flex:1; }
.card-meta { display:flex; align-items:center; gap:6px; flex-wrap:wrap; }
.tag { font-size:0.7rem; font-weight:600; padding:3px 9px; border-radius:100px; letter-spacing:0.04em; text-transform:uppercase; }
.tag-genre    { background:rgba(168,85,247,0.15); color:var(--neon-purple); border:1px solid rgba(168,85,247,0.25); }
.tag-platform { background:rgba(59,158,255,0.12);  color:var(--neon-blue);   border:1px solid rgba(59,158,255,0.2); }
.tag-exclusive { background:rgba(245,158,11,0.15); color:var(--neon-gold);  border:1px solid rgba(245,158,11,0.3); }

.card-title { font-size:1.1rem; font-weight:700; line-height:1.25; }
.card-desc  { font-size:0.83rem; color:var(--text-secondary); line-height:1.55; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
.card-match { margin-top:4px; background:rgba(59,158,255,0.06); border:1px solid rgba(59,158,255,0.12); border-radius:var(--radius-sm); padding:8px 10px; font-size:0.78rem; color:var(--neon-blue); display:flex; align-items:flex-start; gap:6px; }
.card-match::before { content:'◆'; font-size:0.6em; margin-top:2px; flex-shrink:0; }
.game-card.qp-exclusive .card-match { background:rgba(245,158,11,0.06); border-color:rgba(245,158,11,0.15); color:var(--neon-gold); }

.score-bar { height:3px; background:rgba(255,255,255,0.06); border-radius:100px; overflow:hidden; margin-top:6px; }
.score-fill { height:100%; background:var(--accent-grd); border-radius:100px; transition:width 1s cubic-bezier(0.4,0,0.2,1); }
.game-card.qp-exclusive .score-fill { background: var(--gold-grd); }

.no-results { grid-column:1/-1; text-align:center; padding:60px 24px; color:var(--text-muted); }
.no-results-icon { font-size:3rem; margin-bottom:12px; }

.results-actions { display:flex; gap:12px; flex-wrap:wrap; }

/* ========== QUESTPASS SECTION ========== */
#questpass {
  align-items: flex-start;
  padding: 40px 24px;
  background: var(--bg-deep);
}

.qp-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* Header */
.qp-header { text-align: center; padding: 20px 0 8px; }
.qp-logo   { font-size: 3.5rem; margin-bottom: 10px; filter: drop-shadow(0 0 20px rgba(245,158,11,0.5)); }
.qp-title  { font-size: 2.5rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 10px; }
.qp-subtitle { color: var(--text-secondary); font-size: 1rem; max-width: 500px; margin: 0 auto; }

/* Points card */
.qp-points-card {
  background: linear-gradient(135deg, rgba(245,158,11,0.08), rgba(168,85,247,0.06));
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-xl);
  padding: 28px 32px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
}
.qp-points-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--gold-grd);
}
.qp-points-left { text-align: center; min-width: 120px; }
.qp-points-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 4px; }
.qp-points-value {
  font-size: 3.2rem; font-weight: 900; letter-spacing: -0.04em;
  background: var(--gold-grd); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  line-height: 1;
  transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
}
.qp-points-value.bump { animation: pointsBump 0.5s cubic-bezier(0.4,0,0.2,1); }
@keyframes pointsBump { 0%{transform:scale(1);} 50%{transform:scale(1.18);} 100%{transform:scale(1);} }
.qp-tier-label { font-size: 0.85rem; color: var(--neon-gold); font-weight: 600; margin-top: 6px; }

.qp-points-right { flex: 1; display: flex; flex-direction: column; gap: 14px; }
.qp-tier-progress-wrap { display: flex; flex-direction: column; gap: 8px; }
.qp-tier-info { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); }
.qp-perks { display: flex; flex-direction: column; gap: 6px; }
.qp-perk { font-size: 0.83rem; color: var(--text-muted); transition: var(--transition); padding: 4px 0; }
.qp-perk.unlocked { color: var(--neon-green); }
.qp-perk.locked   { color: var(--text-muted); }

/* Redeem card */
.qp-redeem-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.qp-redeem-header { display: flex; align-items: center; gap: 16px; }
.qp-redeem-icon   { font-size: 2.2rem; }
.qp-redeem-title  { font-size: 1.1rem; font-weight: 700; }
.qp-redeem-sub    { font-size: 0.85rem; color: var(--text-muted); margin-top: 2px; }

.qp-redeem-input-row { display: flex; gap: 10px; }
.qp-code-input {
  flex: 1;
  background: var(--bg-card2);
  border: 1px solid var(--border);
  color: var(--text-primary);
  border-radius: var(--radius-md);
  padding: 12px 16px;
  font-size: 1rem;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.05em;
  outline: none;
  text-transform: uppercase;
  transition: var(--transition);
}
.qp-code-input::placeholder { color: var(--text-muted); letter-spacing: 0; font-family: inherit; text-transform: none; }
.qp-code-input:focus { border-color: var(--border-gold); box-shadow: 0 0 0 3px rgba(245,158,11,0.1); }

.qp-redeem-feedback {
  font-size: 0.9rem; font-weight: 600; min-height: 22px;
  transition: var(--transition);
}
.qp-redeem-feedback.success { color: var(--neon-green); }
.qp-redeem-feedback.error   { color: #f87171; }

/* Demo codes */
.qp-demo-codes { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.demo-label { font-size: 0.78rem; color: var(--text-muted); }
.demo-code-btn {
  background: var(--bg-card2); border: 1px solid var(--border);
  color: var(--neon-blue); font-size: 0.75rem; font-family: 'Courier New', monospace;
  padding: 4px 10px; border-radius: var(--radius-sm);
  cursor: pointer; transition: var(--transition); letter-spacing: 0.03em;
}
.demo-code-btn:hover { border-color: var(--border-accent); background: rgba(59,158,255,0.06); }

/* Redeemed history */
.qp-section-title { font-size: 1rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.06em; }
.qp-redeemed-list { display: flex; flex-direction: column; gap: 8px; }
.qp-redeemed-entry {
  display: flex; align-items: center; gap: 12px;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-md); padding: 12px 16px;
}
.qp-redeemed-code { font-family: 'Courier New', monospace; font-size: 0.88rem; color: var(--neon-blue); flex: 1; letter-spacing: 0.04em; }
.qp-redeemed-pts  { font-size: 0.85rem; font-weight: 700; color: var(--neon-gold); }
.qp-redeemed-date { font-size: 0.75rem; color: var(--text-muted); }
.qp-empty         { color: var(--text-muted); font-size: 0.88rem; padding: 12px 0; }

/* Tier cards */
.qp-tiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 14px;
}
.qp-tier-card {
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-lg); padding: 20px 16px;
  text-align: center; transition: var(--transition);
  position: relative; overflow: hidden;
}
.qp-tier-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background: var(--accent-grd); opacity:0.4; }
.qp-tier-card.active  { border-color: var(--neon-gold); background: rgba(245,158,11,0.06); }
.qp-tier-card.active::before { background: var(--gold-grd); opacity: 1; }
.tier-icon { font-size: 1.8rem; margin-bottom: 8px; }
.tier-name { font-size: 0.95rem; font-weight: 700; margin-bottom: 4px; }
.tier-pts  { font-size: 0.78rem; color: var(--neon-gold); font-weight: 600; margin-bottom: 12px; }
.tier-perks-list { list-style: none; display: flex; flex-direction: column; gap: 5px; text-align: left; }
.tier-perks-list li { font-size: 0.78rem; color: var(--text-secondary); }

.qp-footer-actions { display: flex; gap: 12px; flex-wrap: wrap; padding-bottom: 20px; }

/* ========== MODALS ========== */
.modal-overlay {
  display:none; position:fixed; inset:0;
  background:rgba(7,8,15,0.85); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
  z-index:100; align-items:center; justify-content:center; padding:16px;
  animation:overlayIn 0.25s ease;
}
.modal-overlay.open { display:flex; }
@keyframes overlayIn { from{opacity:0;} to{opacity:1;} }
.modal {
  background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-xl);
  width:100%; max-width:480px; max-height:80vh; overflow:hidden;
  display:flex; flex-direction:column;
  animation:modalIn 0.3s cubic-bezier(0.4,0,0.2,1);
}
.modal-wide { max-width:640px; }
@keyframes modalIn { from{opacity:0;transform:scale(0.94) translateY(20px);} to{opacity:1;transform:scale(1) translateY(0);} }
.modal-header { display:flex; align-items:center; justify-content:space-between; padding:20px 24px; border-bottom:1px solid var(--border); }
.modal-header h3 { font-size:1.1rem; font-weight:700; }
.modal-close { background:var(--bg-glass); border:1px solid var(--border); color:var(--text-secondary); width:32px; height:32px; border-radius:var(--radius-sm); cursor:pointer; font-size:0.85rem; transition:var(--transition); display:flex; align-items:center; justify-content:center; }
.modal-close:hover { border-color:var(--border-accent); color:var(--text-primary); }
.modal-body   { padding:20px 24px; overflow-y:auto; flex:1; }
.modal-footer { padding:16px 24px; border-top:1px solid var(--border); display:flex; justify-content:flex-end; }

.history-entry { display:flex; align-items:flex-start; gap:12px; padding:14px 0; border-bottom:1px solid var(--border); }
.history-entry:last-child { border-bottom:none; }
.history-icon  { font-size:1.6rem; flex-shrink:0; margin-top:2px; }
.history-info  { flex:1; }
.history-date  { font-size:0.75rem; color:var(--text-muted); }
.history-games { font-size:0.85rem; color:var(--text-secondary); margin-top:2px; }
.history-empty { text-align:center; padding:40px 0; color:var(--text-muted); }

.detail-cover { width:100%; height:200px; border-radius:var(--radius-md); overflow:hidden; display:flex; align-items:center; justify-content:center; font-size:5rem; background:var(--bg-card2); margin-bottom:20px; position:relative; }
.detail-cover::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom,transparent 40%,var(--bg-card)); }
.detail-meta  { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px; }
.detail-desc  { color:var(--text-secondary); font-size:0.9rem; line-height:1.65; margin-bottom:16px; }
.detail-match { background:rgba(59,158,255,0.07); border:1px solid rgba(59,158,255,0.15); border-radius:var(--radius-md); padding:14px 16px; font-size:0.85rem; color:var(--neon-blue); }
.detail-match strong { display:block; margin-bottom:4px; color:var(--text-secondary); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.06em; }

/* ========== POINTS TOAST ========== */
.points-toast {
  position: fixed;
  bottom: 28px; right: 28px;
  background: linear-gradient(135deg, rgba(245,158,11,0.15), rgba(168,85,247,0.12));
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-lg);
  padding: 14px 20px;
  display: flex; align-items: center; gap: 10px;
  font-size: 0.95rem; font-weight: 600; color: var(--neon-gold);
  z-index: 200;
  box-shadow: var(--glow-gold);
  transform: translateY(80px);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
  pointer-events: none;
}
.points-toast.show { transform: translateY(0); opacity: 1; }
.toast-icon { font-size: 1.2rem; }

/* ========== SCROLLBAR ========== */
::-webkit-scrollbar { width:6px; }
::-webkit-scrollbar-track { background:var(--bg-deep); }
::-webkit-scrollbar-thumb { background:rgba(59,158,255,0.25); border-radius:100px; }
::-webkit-scrollbar-thumb:hover { background:rgba(59,158,255,0.4); }

/* ========== RESPONSIVE ========== */
@media (max-width: 700px) {
  .topnav { padding: 0 16px; }
  .nav-link span:first-child { display: none; }
  .hero-title { font-size: 2.5rem; }
  .hero-stats { gap: 14px; }
  .hero-questpass-teaser { flex-direction: column; text-align: center; }
  .question-card { padding: 28px 20px; }
  .q-text { font-size: 1.2rem; }
  .options-grid { grid-template-columns: 1fr 1fr; }
  .results-header { flex-direction: column; }
  .results-controls { width: 100%; }
  .search-input { width: 100%; }
  .games-grid { grid-template-columns: 1fr; }
  .results-actions, .qp-footer-actions { flex-direction: column; }
  .btn { width: 100%; justify-content: center; }
  .qp-points-card { flex-direction: column; gap: 20px; }
  .qp-points-left { min-width: unset; }
  .qp-redeem-input-row { flex-direction: column; }
  .qp-tiers-grid { grid-template-columns: 1fr 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration:0.01ms !important; transition-duration:0.01ms !important; }
}
CSSEOF
echo "Done"
