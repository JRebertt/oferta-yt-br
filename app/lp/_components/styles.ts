// CSS inline do fonte (public/lp/index.html) preservado EXATAMENTE, sem alteracoes de valores.
export const lpCss = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --black: #0a0a0a;
    --gray-900: #1a1a1a;
    --gray-700: #444;
    --gray-500: #777;
    --gray-300: #ccc;
    --gray-100: #f5f5f3;
    --white: #ffffff;
    --accent: #0a0a0a;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--white);
    color: var(--black);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
  }


  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }

  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 18px;
    letter-spacing: -0.02em;
    color: var(--black);
  }

  .nav-cta {
    font-size: 13px;
    font-weight: 500;
    color: var(--white);
    background: var(--black);
    padding: 10px 22px;
    border-radius: 100px;
    text-decoration: none;
    letter-spacing: 0.01em;
    transition: opacity 0.2s;
  }
  .nav-cta:hover { opacity: 0.8; }


  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 24px 80px;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 60%;
    background: var(--gray-100);
    z-index: -1;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--gray-500);
    background: var(--white);
    border: 1px solid var(--gray-300);
    padding: 6px 16px;
    border-radius: 100px;
    margin-bottom: 32px;
  }

  .badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #22c55e;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(44px, 7vw, 88px);
    line-height: 1.0;
    letter-spacing: -0.03em;
    color: var(--black);
    max-width: 800px;
    margin-bottom: 24px;
  }

  h1 em {
    font-style: italic;
    color: var(--gray-500);
  }

  .hero-sub {
    font-size: 18px;
    font-weight: 300;
    color: var(--gray-700);
    max-width: 480px;
    margin-bottom: 48px;
    line-height: 1.7;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--black);
    color: var(--white);
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    padding: 18px 40px;
    border-radius: 100px;
    transition: transform 0.2s, opacity 0.2s;
    letter-spacing: 0.01em;
  }

  .hero-cta:hover { transform: translateY(-2px); opacity: 0.9; }

  .hero-cta svg { transition: transform 0.2s; }
  .hero-cta:hover svg { transform: translateX(3px); }

  .hero-note {
    margin-top: 16px;
    font-size: 13px;
    color: var(--gray-500);
  }


  .proof-strip {
    background: var(--black);
    color: var(--white);
    padding: 40px 40px;
    display: flex;
    justify-content: center;
    gap: 0;
  }

  .proof-item {
    flex: 1;
    max-width: 220px;
    text-align: center;
    padding: 0 24px;
  }

  .proof-item + .proof-item {
    border-left: 1px solid rgba(255,255,255,0.1);
  }

  .proof-number {
    font-family: 'DM Serif Display', serif;
    font-size: 42px;
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 6px;
  }

  .proof-label {
    font-size: 12px;
    font-weight: 400;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }


  section { padding: 100px 40px; max-width: 960px; margin: 0 auto; }

  .section-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--gray-500);
    margin-bottom: 16px;
  }

  .section-title {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(32px, 5vw, 52px);
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 56px;
    max-width: 560px;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }

  .step {
    background: var(--gray-100);
    padding: 40px 32px;
    position: relative;
  }

  .step:first-child { border-radius: 16px 0 0 16px; }
  .step:last-child { border-radius: 0 16px 16px 0; }

  .step-num {
    font-family: 'DM Serif Display', serif;
    font-size: 48px;
    color: var(--gray-300);
    line-height: 1;
    margin-bottom: 20px;
  }

  .step h3 {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--black);
  }

  .step p {
    font-size: 14px;
    color: var(--gray-500);
    line-height: 1.7;
  }


  .for-who {
    background: var(--gray-100);
    padding: 100px 40px;
    margin: 0;
    max-width: 100%;
  }

  .for-who-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .for-who-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
    margin-top: 56px;
  }

  .for-who-card {
    background: var(--white);
    padding: 36px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  .for-who-card:first-child { border-radius: 16px 0 0 0; }
  .for-who-card:nth-child(2) { border-radius: 0 16px 0 0; }
  .for-who-card:nth-child(3) { border-radius: 0 0 0 16px; }
  .for-who-card:last-child { border-radius: 0 0 16px 0; }

  .check-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--black);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .for-who-card h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 6px;
    color: var(--black);
  }

  .for-who-card p {
    font-size: 14px;
    color: var(--gray-500);
    line-height: 1.65;
  }


  .what-get-list {
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .get-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 28px 32px;
    background: var(--gray-100);
    border-radius: 0;
  }

  .get-item:first-child { border-radius: 16px 16px 0 0; }
  .get-item:last-child { border-radius: 0 0 16px 16px; }

  .get-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .get-num {
    font-family: 'DM Serif Display', serif;
    font-size: 22px;
    color: var(--gray-300);
    width: 32px;
  }

  .get-item h4 {
    font-size: 16px;
    font-weight: 500;
    color: var(--black);
    margin-bottom: 2px;
  }

  .get-item p {
    font-size: 13px;
    color: var(--gray-500);
  }

  .get-tag {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 6px 14px;
    border-radius: 100px;
    background: var(--black);
    color: var(--white);
    white-space: nowrap;
  }


  .testimonials {
    background: var(--black);
    padding: 100px 40px;
    max-width: 100%;
    margin: 0;
  }

  .testimonials-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .testimonials .section-label { color: rgba(255,255,255,0.4); }
  .testimonials .section-title { color: var(--white); }

  .testi-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    margin-top: 56px;
  }

  .testi-card {
    background: rgba(255,255,255,0.05);
    padding: 36px;
  }

  .testi-card:first-child { border-radius: 16px 0 0 16px; }
  .testi-card:last-child { border-radius: 0 16px 16px 0; }

  .stars {
    display: flex;
    gap: 3px;
    margin-bottom: 20px;
  }

  .star {
    width: 14px;
    height: 14px;
    background: #facc15;
    clip-path: polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%);
  }

  .testi-text {
    font-size: 15px;
    color: rgba(255,255,255,0.8);
    line-height: 1.75;
    font-style: italic;
    font-family: 'DM Serif Display', serif;
    margin-bottom: 28px;
  }

  .testi-author {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .testi-avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: var(--white);
  }

  .testi-name {
    font-size: 14px;
    font-weight: 500;
    color: var(--white);
  }

  .testi-detail {
    font-size: 12px;
    color: rgba(255,255,255,0.4);
  }


  .final-cta {
    text-align: center;
    padding: 120px 24px;
    max-width: 100%;
  }

  .final-cta .section-title {
    max-width: 640px;
    margin: 0 auto 16px;
    font-size: clamp(36px, 5vw, 58px);
  }

  .final-cta .hero-sub {
    margin: 0 auto 48px;
  }


  footer {
    border-top: 1px solid var(--gray-100);
    padding: 32px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    color: var(--gray-500);
  }

  .footer-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 15px;
    color: var(--black);
  }


  @media (max-width: 700px) {
    nav { padding: 16px 20px; }
    .proof-strip { flex-direction: column; align-items: center; gap: 32px; padding: 48px 24px; }
    .proof-item + .proof-item { border-left: none; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 32px; }
    section { padding: 72px 20px; }
    .for-who { padding: 72px 20px; }
    .steps { grid-template-columns: 1fr; }
    .step:first-child { border-radius: 16px 16px 0 0; }
    .step:last-child { border-radius: 0 0 16px 16px; }
    .for-who-grid { grid-template-columns: 1fr; }
    .for-who-card:first-child { border-radius: 16px 16px 0 0; }
    .for-who-card:nth-child(2) { border-radius: 0; }
    .for-who-card:nth-child(3) { border-radius: 0; }
    .for-who-card:last-child { border-radius: 0 0 16px 16px; }
    .testi-grid { grid-template-columns: 1fr; }
    .testi-card:first-child { border-radius: 16px 16px 0 0; }
    .testi-card:last-child { border-radius: 0 0 16px 16px; }
    .get-item { flex-direction: column; align-items: flex-start; gap: 16px; }
    footer { flex-direction: column; gap: 12px; text-align: center; }
    .testimonials { padding: 72px 20px; }
    .testimonials-inner { max-width: 100%; }
  }


  .fade-in {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`
