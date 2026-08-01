'use client'

import Script from 'next/script'
import { wheelCss } from './_components/styles'
import { initScript } from './_components/initScript'

export default function BackPage() {
  return (
    <>
      {/* <head> do fonte: title, favicons, fontes, CSS inline, lucide, state.js, utmify */}
      <title>Roleta de Bonus</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/cropped-1384060-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/cropped-1384060-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/cropped-1384060-192x192.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* CSS inline preservado EXATAMENTE como no fonte */}
      <style dangerouslySetInnerHTML={{ __html: wheelCss }} />

      {/* lucide (icones) e state.js (window.appState).
          onLoad no lucide garante que os icones sejam desenhados mesmo se ele terminar
          depois da logica da roleta (que ja chama createIcons de forma defensiva). */}
      <Script
        src="https://unpkg.com/lucide@latest"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as unknown as { lucide?: { createIcons: () => void } }
          if (typeof w.lucide !== 'undefined') w.lucide.createIcons()
        }}
      />
      <Script src="/assets/js/state.js" strategy="afterInteractive" />

      {/* utmify pixel (loader inline do <head>) */}
      <Script
        id="utmify-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.pixelId = "6a22e9983c66ac1b9c986167";
      var a = document.createElement("script");
      a.setAttribute("async", "");
      a.setAttribute("defer", "");
      a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
      document.head.appendChild(a);
`,
        }}
      />

      {/* utmify utms */}
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
        strategy="afterInteractive"
      />

      {/* ---- <body> do fonte convertido em JSX ---- */}
      <header className="site-header">
        <div className="logo-row">
          <div className="logo-brand">
            <img
              src="/assets/youtube_icon.svg"
              alt="YouTube"
              style={{ height: '28px', width: 'auto', filter: 'drop-shadow(0 0 10px rgba(255,0,0,0.14))' }}
            />
            <span className="brand-text">YouTube</span>
          </div>
          <span className="separator">×</span>
          <img
            src="/assets/kwai_logo.png"
            alt="Kwai"
            style={{ height: '64px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 12px rgba(255,145,0,0.14))' }}
          />
        </div>
        <div className="balance-pill">
          <span>Saldo Disponível</span>
          <strong id="header-balance">R$ 0,00</strong>
        </div>
      </header>

      <main className="page-shell">
        <section className="wheel-card" aria-labelledby="wheel-title">
          <div className="eyebrow">
            <i data-lucide="badge-dollar-sign"></i>
            Giro extra liberado
          </div>
          <h1 id="wheel-title">Roleta de Bônus</h1>
          <p className="lead">Uma chance adicional foi desbloqueada para revelar um prêmio Pix especial.</p>

          <div className="wheel-stage" id="wheelStage">
            <div className="wheel-frame"></div>
            <canvas id="wheel" aria-label="Roleta de premios"></canvas>
            <div className="pointer"></div>
          </div>

          <button className="spin-btn" id="spinBtn" type="button">
            Girar roleta
            <i data-lucide="arrow-right"></i>
          </button>

          <div className="mini-proof" aria-label="Garantias do bonus">
            <span className="proof-item"><i data-lucide="shield-check"></i> Seguro</span>
            <span className="proof-item"><i data-lucide="zap"></i> Pix imediato</span>
          </div>
        </section>

        <div className="info-grid" aria-label="Resumo do bonus">
          <div className="info-card">
            <strong>1x</strong>
            <span>Giro por acesso</span>
          </div>
          <div className="info-card">
            <strong>R$ 2.500</strong>
            <span>Prêmio alvo</span>
          </div>
          <div className="info-card">
            <strong>PIX</strong>
            <span>Resgate rápido</span>
          </div>
        </div>

        <p className="footer-note">Ambiente 100% seguro e verificado</p>
      </main>

      <div id="resultOverlay" role="dialog" aria-modal="true" aria-labelledby="result-title">
        <div className="result-box">
          <div className="result-icon">
            <i data-lucide="gift"></i>
          </div>
          <div className="result-pre" id="result-title">Parabéns, você ganhou</div>
          <div className="result-prize" id="prizeDisplay">R$ 2.500</div>
          <p className="result-sub">Seu prêmio ficou reservado. Continue para confirmar o resgate imediato via Pix.</p>
          <button className="cta-btn" type="button" id="ctaBtn">
            Resgatar prêmio
            <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Logica da roleta (script final do fonte) */}
      <Script id="wheel-logic" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: initScript }} />
    </>
  )
}
