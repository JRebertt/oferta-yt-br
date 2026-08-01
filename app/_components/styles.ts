// CSS copiado EXATAMENTE do <style> inline de public/index.html (sem alteracoes de valores).
export const posterCss = `
      .poster-bg::before,
      .poster-bg::after {
        content: "";
        position: fixed;
        pointer-events: none;
        z-index: 0;
        border-radius: 9999px;
      }

      .poster-bg {
        background:
          radial-gradient(circle at 18% 16%, rgba(255, 44, 44, 0.06), transparent 20%),
          radial-gradient(circle at 82% 18%, rgba(255, 145, 0, 0.06), transparent 22%),
          linear-gradient(180deg, #090606 0%, #070606 42%, #060606 100%);
      }

      .poster-bg::before {
        left: -20vw;
        top: 24vh;
        width: 58vw;
        height: 58vw;
        border: 1px solid rgba(255, 59, 48, 0.08);
        box-shadow: 0 0 36px rgba(255, 59, 48, 0.04);
      }

      .poster-bg::after {
        right: -18vw;
        top: 28vh;
        width: 60vw;
        height: 60vw;
        border: 1px solid rgba(255, 149, 0, 0.08);
        box-shadow: 0 0 40px rgba(255, 149, 0, 0.04);
      }

      .poster-noise {
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        opacity: 0.08;
        background-image:
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
        background-size: 22px 22px;
        mask-image: radial-gradient(circle at center, black 35%, transparent 82%);
      }

      .poster-lines {
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        opacity: 0.22;
        background:
          radial-gradient(68vw 68vw at -14% 50%, transparent 68%, rgba(255, 76, 61, 0.11) 68.4%, transparent 69.4%),
          radial-gradient(62vw 62vw at 112% 42%, transparent 70%, rgba(255, 149, 0, 0.11) 70.4%, transparent 71.4%);
      }

      .header-floating {
        width: 100%;
        max-width: 920px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }

      .brand-divider {
        color: rgba(255,255,255,0.84);
        font-size: 31px;
        font-weight: 300;
        line-height: 1;
      }

      .balance-poster {
        position: relative;
        overflow: hidden;
        border-radius: 9999px;
        padding: 1px;
        background: linear-gradient(90deg, rgba(255,86,66,0.78), rgba(255,156,41,0.82));
        box-shadow: 0 10px 36px rgba(0, 0, 0, 0.22);
      }

      .balance-poster-inner {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 17px 28px;
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(11,9,9,0.975), rgba(8,8,8,0.985));
      }

      .balance-poster-inner::before {
        content: "";
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        border: 1px solid rgba(255,255,255,0.03);
        pointer-events: none;
      }

      .balance-poster-label {
        flex: 1;
        color: rgba(255,255,255,0.84);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
      }

      .balance-poster-sep {
        width: 1px;
        align-self: stretch;
        background: linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent);
      }

      .balance-poster-value {
        min-width: 138px;
        text-align: right;
        color: #bfff22;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 31px;
        font-weight: 700;
        letter-spacing: -0.04em;
        text-shadow: 0 0 10px rgba(191,255,34,0.12);
      }

      .poster-card {
        position: relative;
        overflow: hidden;
        border-radius: 32px;
        padding: 1px;
        background: linear-gradient(135deg, rgba(255,82,70,0.72), rgba(255,156,41,0.82));
        box-shadow: 0 20px 54px rgba(0, 0, 0, 0.28);
      }

      .poster-card-inner {
        position: relative;
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(12,8,8,0.975), rgba(6,6,6,0.988));
      }

      .poster-card-inner::before {
        content: "";
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        border: 1px solid rgba(255,255,255,0.035);
        pointer-events: none;
      }

      .hero-word {
        display: inline-block;
        position: relative;
        font-family: "Oswald", sans-serif;
        font-size: clamp(5.1rem, 17vw, 8.6rem);
        line-height: 0.92;
        font-weight: 700;
        letter-spacing: -0.05em;
        text-transform: uppercase;
        color: #d5ff2a;
        text-shadow: 0 2px 0 rgba(27,42,0,0.82), 0 0 10px rgba(190,255,60,0.12);
        -webkit-text-stroke: 1px rgba(246,255,181,0.46);
      }

      .micro-pill {
        border-radius: 9999px;
        padding: 1px;
        background: linear-gradient(90deg, rgba(255,82,70,0.62), rgba(255,156,41,0.72));
      }

      .micro-pill > span {
        display: block;
        border-radius: inherit;
        background: rgba(8,8,8,0.975);
        padding: 11px 24px;
      }

      .spark-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 18px;
      }

      .spark-line {
        width: 70px;
        height: 1px;
        background: linear-gradient(90deg, transparent, currentColor, transparent);
      }

      .spark-dot {
        width: 8px;
        height: 8px;
        border-radius: 9999px;
        background: currentColor;
        box-shadow: 0 0 12px currentColor;
      }

      .entry-bonus {
        border-radius: 28px;
        padding: 1px;
        background: linear-gradient(135deg, rgba(241,255,120,0.55), rgba(181,255,45,0.64));
      }

      .entry-bonus > div {
        position: relative;
        border-radius: inherit;
        background: linear-gradient(180deg, rgba(7,7,7,0.985), rgba(10,10,10,0.988));
      }

      .entry-bonus > div::before {
        content: "";
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        border: 1px solid rgba(255,255,255,0.03);
        pointer-events: none;
      }

      .poster-cta {
        background: linear-gradient(180deg, #d9ff24 0%, #bde81d 100%);
        box-shadow: 0 10px 24px rgba(185,255,40,0.12), inset 0 1px 0 rgba(255,255,255,0.24);
      }

      .poster-cta-outline {
        position: relative;
        width: 100%;
        max-width: 720px;
        border-radius: 1.7rem;
        padding: 1px;
        background: linear-gradient(135deg, rgba(210,255,72,0.52), rgba(169,224,29,0.48));
      }

      .poster-cta-outline::before {
        content: "";
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        border: 1px solid rgba(0,0,0,0.1);
        pointer-events: none;
      }

      .eyebrow-soft {
        color: rgba(255,255,255,0.92);
        text-shadow: 0 0 6px rgba(255,255,255,0.04);
      }

      .welcome-shell {
        max-width: 880px;
      }

      .welcome-card-body {
        padding: 1.75rem;
      }

      .welcome-title {
        font-size: clamp(3.45rem, 10vw, 5.4rem);
        line-height: 0.94;
      }

      .welcome-copy {
        max-width: 680px;
        font-size: 1.12rem;
        line-height: 1.2;
      }

      .welcome-bonus {
        max-width: 700px;
      }

      .welcome-bonus-label {
        font-size: 0.95rem;
      }

      .welcome-bonus-value {
        font-size: clamp(3.4rem, 9vw, 5.6rem);
        line-height: 0.92;
      }

      .welcome-note {
        max-width: 620px;
        font-size: 1rem;
        line-height: 1.18;
      }

      .welcome-cta {
        max-width: 720px;
      }

      @media (min-width: 1024px) {
        .header-floating {
          max-width: 760px;
          gap: 12px;
        }

        .balance-poster {
          max-width: 860px;
          margin: 0 auto;
        }

        .balance-poster-inner {
          padding: 15px 24px;
        }

        .balance-poster-label {
          font-size: 10px;
        }

        .balance-poster-value {
          font-size: 24px;
          min-width: 116px;
        }

        .welcome-shell {
          max-width: 760px;
        }

        .welcome-card-body {
          padding: 1.5rem 1.5rem 1.35rem;
        }

        .hero-word {
          font-size: clamp(4.4rem, 9vw, 7rem);
        }

        .welcome-title {
          font-size: clamp(3.25rem, 6vw, 4.7rem);
          margin-bottom: 0.7rem;
        }

        .welcome-copy {
          max-width: 560px;
          font-size: 0.98rem;
          line-height: 1.18;
          margin-bottom: 1rem;
        }

        .welcome-bonus {
          max-width: 600px;
          margin-bottom: 1rem;
        }

        .welcome-bonus-label {
          font-size: 0.8rem;
          margin-bottom: 0.4rem;
        }

        .welcome-bonus-value {
          font-size: clamp(3rem, 5vw, 4.3rem);
        }

        .welcome-note {
          max-width: 540px;
          font-size: 0.95rem;
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .welcome-cta {
          max-width: 600px;
        }

        .poster-cta {
          font-size: 1rem;
          padding-top: 0.95rem;
          padding-bottom: 0.95rem;
        }
      }

      @media (max-width: 640px) {
        .poster-lines {
          opacity: 0.36;
          background:
            radial-gradient(80vw 80vw at -16% 32%, transparent 69%, rgba(255, 76, 61, 0.16) 69.5%, transparent 71%),
            radial-gradient(76vw 76vw at 118% 34%, transparent 71%, rgba(255, 149, 0, 0.16) 71.5%, transparent 73%);
        }

        .header-floating {
          gap: 10px;
        }

        .balance-poster-inner {
          padding: 13px 16px;
          gap: 10px;
        }

        .balance-poster-label {
          font-size: 9px;
          letter-spacing: 0.12em;
        }

        .balance-poster-value {
          min-width: 96px;
          font-size: 22px;
        }

        .poster-card {
          border-radius: 22px;
        }

        .poster-card-inner {
          border-radius: inherit;
        }

        .brand-divider {
          font-size: 24px;
        }

        .welcome-shell {
          max-width: 420px;
        }

        .welcome-card-body {
          padding: 1.15rem 1rem 1rem;
        }

        .welcome-title {
          font-size: 3.2rem;
          margin-bottom: 0.65rem;
        }

        .welcome-copy {
          font-size: 0.88rem;
          line-height: 1.15;
          margin-bottom: 0.9rem;
          max-width: 292px;
        }

        .welcome-bonus {
          margin-bottom: 0.95rem;
          max-width: 100%;
        }

        .welcome-bonus-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.35rem;
        }

        .welcome-bonus-value {
          font-size: 3.45rem;
        }

        .welcome-note {
          font-size: 0.9rem;
          line-height: 1.12;
          margin-bottom: 1rem;
          max-width: 292px;
        }

        .welcome-cta {
          max-width: 100%;
        }

        .hero-word {
          font-size: clamp(4.1rem, 17vw, 5.3rem);
          line-height: 0.9;
        }

        .micro-pill > span {
          padding: 9px 16px;
        }

        .poster-cta {
          font-size: 1rem;
          padding-top: 0.95rem;
          padding-bottom: 0.95rem;
          border-radius: 1.3rem;
        }

        .poster-cta-outline {
          border-radius: 1.3rem;
        }
      }

      @media (max-width: 420px) {
        .header-floating {
          gap: 8px;
        }

        .balance-poster-inner {
          padding: 12px 14px;
        }

        .balance-poster-value {
          min-width: 90px;
          font-size: 20px;
        }

        .hero-word {
          font-size: 3.8rem;
        }

        .welcome-title {
          font-size: 2.95rem;
        }

        .welcome-bonus-value {
          font-size: 3.1rem;
        }
      }
`
