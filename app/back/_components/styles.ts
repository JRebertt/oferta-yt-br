// CSS copiado EXATAMENTE do <style> inline de public/back/index.html (sem alteracoes de valores).
export const wheelCss = `
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      :root {
        --bg: #050811;
        --panel: #0a1322;
        --panel-soft: #101b2d;
        --line: rgba(129, 160, 205, 0.22);
        --green: #adff2f;
        --green-2: #12df89;
        --red: #ff4747;
        --text: #ffffff;
        --muted: rgba(255, 255, 255, 0.64);
        --soft: rgba(255, 255, 255, 0.42);
      }

      html {
        background: var(--bg);
      }

      body {
        min-height: 100vh;
        min-height: 100svh;
        background: var(--bg);
        color: var(--text);
        font-family: "Roboto", sans-serif;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }

      body::before {
        content: "";
        position: fixed;
        inset: 0;
        z-index: -2;
        background: #050505;
      }

      body::after {
        content: "";
        position: fixed;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        background:
          radial-gradient(ellipse 60% 60% at -10% 30%, rgba(229, 9, 20, 0.15) 0%, transparent 70%),
          radial-gradient(ellipse 60% 60% at 110% 70%, rgba(255, 127, 0, 0.15) 0%, transparent 70%);
      }

      .site-header {
        position: sticky;
        top: 0;
        z-index: 30;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 14px 18px 12px;
        background: rgba(5, 8, 17, 0.94);
        border-bottom: 1px solid rgba(129, 160, 205, 0.18);
        backdrop-filter: blur(16px);
      }

      .logo-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        width: 100%;
        user-select: none;
      }

      .logo-brand {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .brand-text {
        font-family: "Roboto Condensed", sans-serif;
        font-size: 30px;
        font-weight: 900;
        line-height: 1;
        letter-spacing: -0.04em;
      }

      .separator {
        color: rgba(255, 255, 255, 0.52);
        font-size: 20px;
        font-weight: 300;
      }

      .balance-pill {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: min(100%, 320px);
        padding: 10px 16px;
        border: 1px solid transparent;
        border-radius: 14px;
        background: rgba(13, 22, 36, 0.92);
        background-clip: padding-box;
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.24), 0 0 15px rgba(255, 0, 0, 0.08), 0 0 15px rgba(255, 123, 0, 0.08);
        position: relative;
      }
      .balance-pill::before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -1px;
        border-radius: inherit;
        background: linear-gradient(to right, #ff0000, #ff7b00);
        pointer-events: none;
      }

      .balance-pill span:first-child {
        color: var(--soft);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      #header-balance {
        color: var(--green);
        font-family: "Roboto Mono", "Roboto", monospace;
        font-size: 17px;
        font-weight: 900;
        letter-spacing: 0.02em;
        text-shadow: 0 1px 0 rgba(20, 65, 10, 0.45);
      }

      .page-shell {
        width: min(100%, 430px);
        margin: 0 auto;
        padding: 16px 14px 28px;
      }

      .wheel-card {
        position: relative;
        overflow: hidden;
        border: 1px solid transparent;
        border-radius: 22px;
        background: rgba(10, 19, 34, 0.94);
        background-clip: padding-box;
        box-shadow: 0 22px 44px rgba(0, 0, 0, 0.38), 0 0 15px rgba(255, 0, 0, 0.08), 0 0 15px rgba(255, 123, 0, 0.08);
        padding: 18px 16px 16px;
        text-align: center;
      }
      .wheel-card::before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -1px;
        border-radius: inherit;
        background: linear-gradient(to right, #ff0000, #ff7b00);
        pointer-events: none;
      }

      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 9px;
        color: var(--green);
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .eyebrow i {
        width: 16px;
        height: 16px;
      }

      h1 {
        font-family: "Oswald", sans-serif;
        font-size: clamp(34px, 10vw, 48px);
        font-weight: 900;
        line-height: 0.95;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      .lead {
        max-width: 315px;
        margin: 10px auto 16px;
        color: var(--muted);
        font-size: 14px;
        font-weight: 600;
        line-height: 1.45;
      }

      .wheel-stage {
        position: relative;
        width: min(74vw, 302px);
        max-width: 100%;
        aspect-ratio: 1;
        margin: 0 auto 18px;
      }

      .wheel-frame {
        position: absolute;
        inset: -7px;
        border: 2px solid rgba(173, 255, 47, 0.76);
        border-radius: 50%;
        background: rgba(173, 255, 47, 0.06);
        box-shadow: inset 0 0 24px rgba(0, 0, 0, 0.42);
      }

      #wheel {
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #07101d;
      }

      .pointer {
        position: absolute;
        top: 50%;
        right: -3px;
        z-index: 3;
        width: 0;
        height: 0;
        transform: translateY(-50%);
        border-top: 14px solid transparent;
        border-bottom: 14px solid transparent;
        border-right: 25px solid var(--red);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.32));
      }

      .spin-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: min(100%, 310px);
        min-height: 58px;
        border: 0;
        border-radius: 18px;
        background: linear-gradient(135deg, var(--green-2), var(--green));
        color: #05100a;
        cursor: pointer;
        font-family: "Oswald", sans-serif;
        font-size: 23px;
        font-weight: 900;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.34);
        transition: transform 0.16s ease, filter 0.16s ease;
      }

      .spin-btn:hover:not(:disabled) {
        transform: translateY(-1px);
        filter: brightness(1.03);
      }

      .spin-btn:active:not(:disabled) {
        transform: translateY(1px) scale(0.99);
      }

      .spin-btn:disabled {
        cursor: wait;
        opacity: 0.74;
      }

      .spin-btn i {
        width: 21px;
        height: 21px;
        stroke-width: 3;
      }

      .mini-proof {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 14px;
        flex-wrap: wrap;
      }

      .proof-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 30px;
        padding: 0 10px;
        border: 1px solid rgba(129, 160, 205, 0.18);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        color: rgba(255, 255, 255, 0.62);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .proof-item i {
        width: 14px;
        height: 14px;
        color: var(--green);
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 9px;
        margin-top: 12px;
      }

      .info-card {
        min-height: 78px;
        padding: 12px 8px;
        border: 1px solid rgba(129, 160, 205, 0.16);
        border-radius: 16px;
        background: rgba(8, 15, 28, 0.82);
        text-align: center;
      }

      .info-card strong {
        display: block;
        color: var(--text);
        font-family: "Oswald", sans-serif;
        font-size: 18px;
        font-weight: 900;
        line-height: 1;
      }

      .info-card span {
        display: block;
        margin-top: 6px;
        color: rgba(255, 255, 255, 0.52);
        font-size: 10px;
        font-weight: 800;
        line-height: 1.25;
        text-transform: uppercase;
      }

      .footer-note {
        margin: 16px auto 0;
        color: rgba(255, 255, 255, 0.42);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.05em;
        line-height: 1.5;
        text-align: center;
        text-transform: uppercase;
      }

      #resultOverlay {
        position: fixed;
        inset: 0;
        z-index: 90;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 18px;
        background: rgba(5, 8, 17, 0.88);
        backdrop-filter: blur(10px);
      }

      #resultOverlay.show {
        display: flex;
      }

      .result-box {
        width: min(100%, 380px);
        border: 1px solid rgba(173, 255, 47, 0.4);
        border-radius: 24px;
        background: #0a1322;
        padding: 26px 22px 22px;
        text-align: center;
        box-shadow: 0 28px 60px rgba(0, 0, 0, 0.5);
        animation: popIn 0.34s ease-out both;
      }

      @keyframes popIn {
        from {
          opacity: 0;
          transform: translateY(16px) scale(0.96);
        }

        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      .result-icon {
        display: grid;
        place-items: center;
        width: 58px;
        height: 58px;
        margin: 0 auto 14px;
        border-radius: 18px;
        background: linear-gradient(135deg, var(--green-2), var(--green));
        color: #05100a;
      }

      .result-icon i {
        width: 30px;
        height: 30px;
        stroke-width: 3;
      }

      .result-pre {
        color: rgba(255, 255, 255, 0.52);
        font-size: 11px;
        font-weight: 900;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .result-prize {
        margin: 8px 0 10px;
        color: var(--green);
        font-family: "Oswald", sans-serif;
        font-size: 54px;
        font-weight: 900;
        line-height: 1;
        text-shadow: 0 1px 0 rgba(20, 65, 10, 0.55);
      }

      .result-sub {
        color: rgba(255, 255, 255, 0.68);
        font-size: 14px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 18px;
      }

      .cta-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        min-height: 56px;
        border: 0;
        border-radius: 17px;
        background: linear-gradient(135deg, var(--green-2), var(--green));
        color: #05100a;
        cursor: pointer;
        font-family: "Oswald", sans-serif;
        font-size: 20px;
        font-weight: 900;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .cta-btn i {
        width: 20px;
        height: 20px;
        stroke-width: 3;
      }

      @media (max-width: 380px) {
        .site-header {
          padding: 12px 14px 10px;
          gap: 8px;
        }

        .page-shell {
          padding: 12px 10px 24px;
        }

        .wheel-card {
          border-radius: 18px;
          padding: 15px 12px;
        }

        .wheel-stage {
          width: min(72vw, 264px);
          margin-bottom: 15px;
        }

        .spin-btn {
          min-height: 54px;
          font-size: 21px;
        }

        .info-grid {
          grid-template-columns: 1fr;
        }
      }
`;
