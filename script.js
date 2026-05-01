/* ============================================================
   RESET & BASE
   ============================================================ */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html { scroll-behavior: smooth; }

body {
    font-family: 'Poppins', sans-serif;
    background: #eef2f3;
    color: #333;
    line-height: 1.6;
    overflow-x: hidden;
}

/* Offset para header fixo */
section[id] { scroll-margin-top: 70px; }

/* ============================================================
   HEADER
   ============================================================ */
#header {
    position: fixed;
    top: 0; left: 0; right: 0;
    background: #e74d06;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0,0,0,0.15);
}

.header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 1.2em;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
    width: 42px;
    height: 42px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s;
}

.logo:hover {
    background: rgba(255,255,255,0.35);
    transform: scale(1.05);
    color: #fff;
}

nav {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
}

#menu {
    list-style: none;
    display: flex;
    gap: 2px;
}

#menu li a {
    color: rgba(255,255,255,0.92);
    text-decoration: none;
    font-size: 0.87em;
    font-weight: 500;
    padding: 7px 13px;
    border-radius: 20px;
    transition: all 0.25s;
    display: block;
}

#menu li a:hover,
#menu li a.active {
    background: rgba(255,255,255,0.2);
    color: #fff;
}

.header-social {
    display: flex;
    gap: 14px;
}

.social-icon {
    color: rgba(255,255,255,0.85);
    font-size: 18px;
    text-decoration: none;
    transition: all 0.3s;
}

.social-icon:hover {
    color: #fff;
    transform: scale(1.2);
}

.menu-toggle {
    display: none;
    font-size: 22px;
    cursor: pointer;
    color: #fff;
    padding: 5px;
    background: none;
    border: none;
}

/* ============================================================
   HERO
   ============================================================ */
#hero {
    min-height: 100vh;
    background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 45%, #16213e 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    padding: 80px 20px 50px;
    overflow: hidden;
}

/* Glow radial */
#hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
        radial-gradient(ellipse at 20% 65%, rgba(231,77,6,0.18) 0%, transparent 55%),
        radial-gradient(ellipse at 80% 20%, rgba(231,77,6,0.11) 0%, transparent 45%);
    pointer-events: none;
}

/* Grid sutil de pontos */
#hero::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px);
    background-size: 30px 30px;
    pointer-events: none;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 720px;
}

.hero-tag {
    display: inline-block;
    color: #e74d06;
    font-size: 0.88em;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 14px;
    background: rgba(231,77,6,0.12);
    border: 1px solid rgba(231,77,6,0.3);
    padding: 5px 18px;
    border-radius: 20px;
}

.hero-name {
    font-size: 3.8em;
    font-weight: 700;
    color: #fff;
    line-height: 1.1;
    margin-bottom: 15px;
}

.hero-typed {
    font-size: 1.35em;
    color: #e74d06;
    font-weight: 600;
    min-height: 42px;
    margin-bottom: 18px;
}

.cursor {
    animation: blink 0.8s step-end infinite;
    font-weight: 300;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
}

.hero-desc {
    color: rgba(255,255,255,0.58);
    font-size: 0.9em;
    line-height: 2;
    margin-bottom: 36px;
}

.hero-ctas {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
}

/* Botões */
.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 30px;
    background: #e74d06;
    color: #fff;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.91em;
    transition: all 0.3s;
    box-shadow: 0 5px 20px rgba(231,77,6,0.35);
}

.btn-primary:hover {
    background: #c43e05;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(231,77,6,0.45);
    color: #fff;
}

.btn-mt { margin-top: 20px; }

.btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 28px;
    background: transparent;
    color: #fff;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.91em;
    border: 2px solid rgba(255,255,255,0.35);
    transition: all 0.3s;
}

.btn-outline:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.7);
    transform: translateY(-2px);
    color: #fff;
}

.hero-socials {
    display: flex;
    gap: 24px;
    justify-content: center;
}

.hero-socials a {
    color: rgba(255,255,255,0.45);
    font-size: 22px;
    text-decoration: none;
    transition: all 0.3s;
}

.hero-socials a:hover {
    color: #e74d06;
    transform: translateY(-3px);
}

.hero-scroll-arrow {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255,255,255,0.35);
    font-size: 18px;
    text-decoration: none;
    z-index: 2;
    animation: floatArrow 2s ease-in-out infinite;
}

.hero-scroll-arrow:hover { color: #e74d06; }

@keyframes floatArrow {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(9px); }
}

/* ============================================================
   SECTIONS BASE
   ============================================================ */
.section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 70px 30px;
}

/* Seções com estilo de card branco */
.card-section {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.07);
    margin: 30px auto;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-size: 2em;
    font-weight: 700;
    color: #222;
}

.section-header h2 span { color: #e74d06; }

.line {
    width: 55px;
    height: 4px;
    background: linear-gradient(90deg, #e74d06, #ff8c42);
    margin: 12px auto 0;
    border-radius: 2px;
}

.section-sub {
    color: #777;
    font-size: 0.92em;
    margin-top: 12px;
}

/* ============================================================
   SOBRE
   ============================================================ */
.sobre-grid {
    display: grid;
    grid-template-columns: 1fr 330px;
    gap: 40px;
    align-items: start;
}

.sobre-text p {
    color: #555;
    font-size: 0.94em;
    line-height: 1.88;
    margin-bottom: 13px;
}

/* Tags */
.tag-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 18px;
}

.tag {
    background: #fff8f5;
    color: #e74d06;
    border: 1px solid #fdddd0;
    padding: 5px 13px;
    border-radius: 20px;
    font-size: 0.81em;
    font-weight: 500;
    transition: all 0.25s;
    cursor: default;
}

.tag:hover {
    background: #e74d06;
    color: #fff;
    border-color: #e74d06;
}

.tag-sm {
    display: inline-block;
    background: #fff8f5;
    color: #e74d06;
    border: 1px solid #fdddd0;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.74em;
    font-weight: 500;
}

/* Info box */
.sobre-info-box {
    background: #f7f8fa;
    border-radius: 14px;
    padding: 24px;
    border: 1px solid #eee;
}

.info-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 13px;
    font-size: 0.87em;
    color: #555;
}

.info-row i {
    color: #e74d06;
    width: 18px;
    flex-shrink: 0;
    margin-top: 2px;
}

/* ============================================================
   TIMELINE – EXPERIÊNCIA
   ============================================================ */
.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 22px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(to bottom, #e74d06 70%, rgba(231,77,6,0.1));
}

.tl-item {
    display: flex;
    gap: 28px;
    margin-bottom: 28px;
    position: relative;
    padding-left: 58px;
}

.tl-dot {
    position: absolute;
    left: 14px;
    top: 22px;
    width: 16px;
    height: 16px;
    background: #e74d06;
    border-radius: 50%;
    border: 3px solid #eef2f3;
    box-shadow: 0 0 0 3px rgba(231,77,6,0.22);
    flex-shrink: 0;
}

.tl-card {
    background: #fff;
    border-radius: 12px;
    padding: 22px 24px;
    box-shadow: 0 3px 18px rgba(0,0,0,0.07);
    border-left: 3px solid #e74d06;
    width: 100%;
    transition: transform 0.3s, box-shadow 0.3s;
}

.tl-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(0,0,0,0.11);
}

.tl-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 10px;
}

.tl-top h3 {
    color: #e74d06;
    font-size: 1em;
    font-weight: 600;
}

.tl-company {
    display: block;
    color: #444;
    font-size: 0.86em;
    font-weight: 500;
    margin-top: 3px;
}

.tl-company i {
    margin-right: 5px;
    color: #e74d06;
    font-size: 0.9em;
}

.tl-date {
    font-size: 0.77em;
    color: #999;
    font-weight: 500;
    white-space: nowrap;
    background: #f4f5f7;
    padding: 4px 10px;
    border-radius: 12px;
    flex-shrink: 0;
}

.tl-card > p {
    font-size: 0.86em;
    color: #666;
    line-height: 1.76;
    margin-bottom: 12px;
}

/* ============================================================
   PROJETOS – FILTROS
   ============================================================ */
.filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-bottom: 40px;
}

.filter-btn {
    padding: 8px 18px;
    border: 2px solid #e74d06;
    background: transparent;
    color: #e74d06;
    border-radius: 25px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.83em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s;
}

.filter-btn:hover,
.filter-btn.active {
    background: #e74d06;
    color: #fff;
    box-shadow: 0 4px 14px rgba(231,77,6,0.3);
    transform: translateY(-1px);
}

/* ============================================================
   PROJETOS – CARDS
   ============================================================ */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 22px;
}

.pcard {
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 3px 16px rgba(0,0,0,0.07);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid #f0f0f0;
    transition: transform 0.3s, box-shadow 0.3s;
}

.pcard:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 36px rgba(0,0,0,0.13);
}

.pcard.hidden { display: none; }

/* Cabeçalho dos cards */
.pcard-header {
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.2em;
    color: rgba(255,255,255,0.9);
    flex-shrink: 0;
}

.pcard-header.img-header { background: #f0f0f0; padding: 0; }

.pcard-header.img-header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Gradientes dos ícones */
.gradient-ai       { background: linear-gradient(135deg, #1a1a2e, #e74d06); }
.gradient-auto     { background: linear-gradient(135deg, #c0392b, #e74d06); }
.gradient-research { background: linear-gradient(135deg, #e67e22, #f39c12); }
.gradient-embedded { background: linear-gradient(135deg, #2c3e50, #34495e); }

/* Corpo dos cards */
.pcard-body {
    padding: 18px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.badge {
    display: inline-block;
    background: #fff8f5;
    color: #e74d06;
    border: 1px solid #fdddd0;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.72em;
    font-weight: 600;
    margin-bottom: 10px;
}

.pcard-body h3 {
    font-size: 0.99em;
    font-weight: 600;
    color: #222;
    margin-bottom: 9px;
}

.pcard-body > p {
    font-size: 0.84em;
    color: #666;
    line-height: 1.72;
    flex: 1;
}

.pcard-footer {
    margin-top: 15px;
    padding-top: 12px;
    border-top: 1px solid #f5f5f5;
}

.status-badge {
    font-size: 0.81em;
    font-weight: 600;
    color: #555;
}

.btn-card {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 16px;
    background: #e74d06;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.82em;
    font-weight: 600;
    transition: all 0.25s;
}

.btn-card:hover {
    background: #c43e05;
    transform: translateY(-1px);
    color: #fff;
}

/* ============================================================
   HABILIDADES
   ============================================================ */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}

.skills-group {
    background: #f7f8fa;
    border-radius: 14px;
    padding: 24px;
    border: 1px solid #eee;
}

.skills-group-title {
    font-size: 0.93em;
    font-weight: 600;
    color: #e74d06;
    margin-bottom: 22px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.skill-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.84em;
    color: #555;
    font-weight: 500;
    margin-bottom: 5px;
}

.bar {
    width: 100%;
    height: 8px;
    background: rgba(0,0,0,0.09);
    border-radius: 10px;
    overflow: hidden;
}

.bar-fill {
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, #e74d06, #ff8c42);
    border-radius: 10px;
    display: block;
    transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ============================================================
   PRÊMIOS
   ============================================================ */
.awards-grid {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.award-card {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    background: #f7f8fa;
    border-radius: 12px;
    padding: 22px 24px;
    border: 1px solid #eee;
    transition: transform 0.3s, box-shadow 0.3s;
}

.award-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.09);
}

.award-icon {
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, #e74d06, #ff8c42);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.2em;
    flex-shrink: 0;
}

.award-info h3 {
    font-size: 0.97em;
    font-weight: 600;
    color: #222;
    margin-bottom: 4px;
}

.award-from {
    display: block;
    font-size: 0.81em;
    color: #e74d06;
    font-weight: 600;
    margin-bottom: 8px;
}

.award-info p {
    font-size: 0.84em;
    color: #666;
    line-height: 1.72;
}

/* ============================================================
   CONTATO
   ============================================================ */
.contato-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    max-width: 820px;
    margin: 0 auto;
}

.contato-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
    background: #f7f8fa;
    border: 1px solid #eee;
    border-radius: 14px;
    padding: 30px 20px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s;
}

.contato-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 28px rgba(231,77,6,0.15);
    border-color: #e74d06;
    color: #333;
}

.contato-icon {
    width: 58px;
    height: 58px;
    background: linear-gradient(135deg, #e74d06, #ff8c42);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.3em;
}

.contato-card h4 {
    font-size: 0.95em;
    font-weight: 600;
    color: #333;
}

.contato-card p {
    font-size: 0.82em;
    color: #777;
}

/* ============================================================
   FOOTER
   ============================================================ */
footer {
    background: #1a1a2e;
    color: rgba(255,255,255,0.6);
    padding: 26px 30px;
    margin-top: 30px;
}

.footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

.footer-inner strong { color: #e74d06; }

.footer-social {
    display: flex;
    gap: 18px;
}

.footer-social .social-icon {
    color: rgba(255,255,255,0.55);
    font-size: 18px;
}

.footer-social .social-icon:hover {
    color: #e74d06;
    transform: scale(1.2);
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
.scroll-top-btn {
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 46px;
    height: 46px;
    background: #e74d06;
    color: #fff;
    border: none;
    border-radius: 50%;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    box-shadow: 0 4px 16px rgba(231,77,6,0.4);
    z-index: 900;
}

.scroll-top-btn.show {
    opacity: 1;
    visibility: visible;
}

.scroll-top-btn:hover {
    background: #c43e05;
    transform: translateY(-3px);
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
.reveal-card {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal-card.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ============================================================
   RESPONSIVIDADE
   ============================================================ */
@media (max-width: 900px) {
    .sobre-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    /* Header */
    .header-inner { padding: 0 20px; }
    .header-social { display: none; }
    .menu-toggle { display: block; }

    #menu {
        display: none;
        position: absolute;
        top: 65px;
        left: -30px;
        right: -30px;
        background: #d44505;
        flex-direction: column;
        padding: 8px 0;
        box-shadow: 0 8px 22px rgba(0,0,0,0.2);
    }

    #navbar.active #menu { display: flex; }

    #menu li a {
        padding: 11px 22px;
        border-radius: 0;
        border-bottom: 1px solid rgba(255,255,255,0.07);
        font-size: 0.9em;
    }

    /* Hero */
    .hero-name  { font-size: 2.5em; }
    .hero-typed { font-size: 1.1em; }

    /* Sections */
    .section { padding: 50px 20px; }
    .card-section { margin: 15px; border-radius: 12px; }

    /* Cards */
    .cards-grid { grid-template-columns: 1fr; }
    .skills-grid { grid-template-columns: 1fr; }

    /* Timeline */
    .timeline::before { left: 16px; }
    .tl-item { padding-left: 50px; }
    .tl-dot  { left: 9px; }

    /* Contact */
    .contato-grid { grid-template-columns: 1fr 1fr; }

    /* Footer */
    .footer-inner {
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .hero-name  { font-size: 2em; }
    .hero-ctas  { flex-direction: column; align-items: center; }
    .filter-bar { gap: 7px; }
    .filter-btn { font-size: 0.77em; padding: 6px 12px; }
    .contato-grid { grid-template-columns: 1fr; }
    .card-section { margin: 10px; }
}

/* ============================================================
   LANGUAGE BUTTON
   ============================================================ */
.lang-btn {
    font-size: 0.78em;
    font-weight: 700;
    color: #fff;
    background: rgba(255,255,255,0.18);
    border: 1.5px solid rgba(255,255,255,0.4);
    border-radius: 20px;
    padding: 5px 14px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all 0.25s;
    flex-shrink: 0;
}

.lang-btn:hover {
    background: rgba(255,255,255,0.32);
    border-color: #fff;
    transform: scale(1.05);
}
