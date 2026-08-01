'use client'

import Script from 'next/script'
import { posterCss } from './_components/styles'
import { appScript } from './_components/appScript'
import {
  obfuscatedLoader,
  kwaiPixel1,
  kwaiPixel2,
  kwaiPixel3,
  trackupScript,
  storageReset,
  tailwindConfig,
  pltScript,
  utmifyPixel,
} from './_components/headScripts'

export default function Home() {
  return (
    <>
      {/* ===================== <head> do fonte ===================== */}
      <title>Desafio YouTube x Kwai</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/cropped-1384060-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/cropped-1384060-180x180.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* CSS externo do dominio — mantido igual */}
      <link rel="stylesheet" href="/assets/css/style.css" />

      {/* Bloco <style> inline do fonte, copiado EXATAMENTE */}
      <style dangerouslySetInnerHTML={{ __html: posterCss }} />

      {/* converteai preloads / dns-prefetch */}
      <link
        rel="preload"
        href="https://scripts.converteai.net/fcffbf36-808d-429e-ae14-e506c0644ae3/players/6a22e142cf5b757b7649342e/v4/player.js"
        as="script"
      />
      <link
        rel="preload"
        href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"
        as="script"
      />
      <link rel="dns-prefetch" href="https://cdn.converteai.net" />
      <link rel="dns-prefetch" href="https://scripts.converteai.net" />
      <link rel="dns-prefetch" href="https://images.converteai.net" />
      <link rel="dns-prefetch" href="https://api.vturb.com.br" />

      {/* ---- Loader OFUSCADO (atob/xor) do topo do <head> ---- */}
      <Script id="obfuscated-loader" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: obfuscatedLoader }} />

      {/* Dependencias do funil: data.js (funnelData), reset de storage, state.js (appState),
          funnel.js, backredirect.js. beforeInteractive p/ garantir a mesma ordem do <head> original. */}
      <Script src="/assets/js/data.js?v=20260609-names1" strategy="beforeInteractive" />
      <Script id="storage-reset" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: storageReset }} />
      <Script src="/assets/js/state.js" strategy="beforeInteractive" />
      <Script src="/assets/js/funnel.js" strategy="beforeInteractive" />
      {/* backredirect: target "back/index.html" -> rota Next "/back"; stages preservados */}
      <Script
        src="/assets/js/backredirect.js"
        strategy="beforeInteractive"
        data-backredirect-target="/back"
        data-backredirect-stages="1,4"
      />

      {/* Tailwind via CDN + config inline (beforeInteractive p/ as classes funcionarem) */}
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script id="tailwind-config" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: tailwindConfig }} />

      {/* Pixels Kwai (x3), trackup, _plt, utmify — mesmos do <head> */}
      <Script id="kwai-pixel-1" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: kwaiPixel1 }} />
      <Script id="kwai-pixel-2" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: kwaiPixel2 }} />
      <Script id="kwai-pixel-3" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: kwaiPixel3 }} />
      <Script id="trackup" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: trackupScript }} />
      <Script id="plt-marker" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: pltScript }} />
      <Script id="utmify-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: utmifyPixel }} />
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
        strategy="afterInteractive"
      />

      {/* lucide (icones) */}
      <Script
        src="https://unpkg.com/lucide@latest"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as unknown as { lucide?: { createIcons: () => void } }
          if (typeof w.lucide !== 'undefined') w.lucide.createIcons()
        }}
      />

      {/* ===================== <body> do fonte convertido em JSX ===================== */}
      <div className="poster-bg bg-[#050505] text-white min-h-screen relative overflow-x-hidden selection:bg-red-500/30">
        <div className="poster-noise"></div>
        <div className="poster-lines"></div>

        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-600/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-600/15 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 w-full min-h-screen flex flex-col">
          <header className="relative z-50 px-5 pt-5 pb-1 transition-all duration-300">
            <div className="header-floating">
              <div className="flex items-center justify-center gap-3 w-full select-none">
                <div className="flex items-center gap-1.5">
                  <img
                    src="/assets/youtube_icon.svg"
                    className="h-6 sm:h-7 w-auto drop-shadow-[0_0_10px_rgba(255,0,0,0.14)]"
                    alt="YouTube"
                  />
                  <span className="text-white font-black text-[1.3rem] sm:text-[1.5rem] leading-none font-roboto-condensed tracking-[-0.04em]">
                    YouTube
                  </span>
                </div>
                <span className="text-zinc-600 font-bold mx-1">×</span>
                <div className="flex items-center">
                  <img
                    src="/assets/kwai_logo.png"
                    className="h-6 sm:h-7 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,145,0,0.14)]"
                    alt="Kwai"
                  />
                </div>
              </div>

              <div className="w-full max-w-[860px] mt-0.5 animate-scale-in">
                <div className="balance-poster">
                  <div className="balance-poster-inner">
                    <span className="balance-poster-label">Saldo Disponível</span>
                    <span className="balance-poster-sep" aria-hidden="true"></span>
                    <span id="header-balance" className="balance-poster-value">R$ 0,00</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main id="app" className="flex-1 flex flex-col items-center justify-start pt-2 pb-20"></main>
        </div>

        <div
          id="popup-overlay"
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[100] hidden flex items-center justify-center px-4"
        >
          <div className="glass-panel p-6 max-w-sm w-full shadow-2xl animate-scale-in relative overflow-hidden">
            <div className="text-center relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#adff2f]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#adff2f]/30 shadow-md animate-bounce">
                <i data-lucide="check-circle-2" className="w-8 h-8 text-[#adff2f]"></i>
              </div>

              <h3 className="text-2xl font-black font-oswald uppercase text-white mb-2">Recompensa Recebida!</h3>
              <p className="text-4xl font-black text-[#adff2f] mb-2 font-mono" id="popup-amount">
                R$ 0,00
              </p>
              <p className="text-gray-300 text-sm mb-6 font-medium">
                Saldo total atualizado:
                <span id="popup-total" className="text-white font-bold font-mono">R$ 0,00</span>
              </p>

              <button
                onClick={() => (window as unknown as { closePopup: () => void }).closePopup()}
                className="w-full bg-gradient-to-r from-[#00df89] to-[#adff2f] text-black font-black py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm uppercase relative overflow-hidden group"
              >
                <span>RESGATAR RECOMPENSA</span>
                <i data-lucide="arrow-right" className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Logica inline do <body> (render, roleta de opcoes, popup, som, VSL, comentarios) ---- */}
      <Script id="app-logic" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: appScript }} />
    </>
  )
}
