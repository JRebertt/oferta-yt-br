'use client'

import Script from 'next/script'
import { tailwindPreflightCss } from './_components/styles'
import { surveyScript } from './_components/initScript'

// Funcoes globais definidas pelo <Script> de logica (surveyScript). Os botoes
// estaticos abaixo apenas as invocam via window para reproduzir os onclick="" do fonte.
declare global {
  interface Window {
    startSurvey?: () => void
    closePopup?: () => void
  }
}

export default function PixPage() {
  return (
    <>
      {/* ---- <head> do fonte: title, favicons, fontes, Tailwind CDN + config, lucide, CSS inline ---- */}
      <title>Avaliações - Hexa</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/cropped-1384060-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/cropped-1384060-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/cropped-1384060-192x192.png" />

      {/* Fontes base (Oswald, Roboto, Roboto Condensed) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* CSS relativo QUEBRADO no fonte (404 na propria origem) — MANTIDO identico, nao consertar. */}
      <link href="css/style.css" rel="stylesheet" />

      {/* CSS inline preservado EXATAMENTE como no fonte (bloco <style> do <head>) */}
      <style dangerouslySetInnerHTML={{ __html: tailwindPreflightCss }} />

      {/* Tailwind via CDN + tailwind.config (beforeInteractive para as classes funcionarem,
          inclusive as injetadas dinamicamente pelo script de avaliacao). */}
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script
        id="tailwind-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `tailwind.config = {
        theme: {
          extend: {
            colors: {
              "yt-black": "#050811",
            },
            fontFamily: {
              roboto: ["Roboto", "sans-serif"],
              oswald: ["Oswald", "sans-serif"],
              "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
            },
          },
        },
      };`,
        }}
      />

      {/* Icones Lucide (beforeInteractive para estar disponivel quando render() rodar) */}
      <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />

      {/* ---- <body> do fonte convertido em JSX (classes do body vao no wrapper) ---- */}
      <div className="bg-[#050811] text-white min-h-screen bg-[url('/assets/stadium_bg.png')] bg-cover bg-center bg-no-repeat bg-fixed relative overflow-x-hidden">
        {/* Tela de Carregamento Profissional */}
        {/* Overlay de fundo escuro */}
        <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-[#050811]/95 to-black pointer-events-none z-0"></div>
        <div className="relative z-10 w-full min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-[#050811]/90 backdrop-blur-md border-b border-zinc-800/60 px-6 py-3 flex flex-col items-center justify-center gap-2 transition-all duration-300">
            <div className="flex items-center justify-center gap-4 w-full select-none">
              <div className="flex items-center gap-1.5">
                <img alt="YouTube" className="h-6 w-auto" src="images/youtube_icon.svg" />
                <span className="text-white font-black text-xl font-roboto-condensed">YouTube</span>
              </div>
              <span className="text-gray-400 font-light text-lg">âœ•</span>
              <div className="flex items-center">
                <img alt="FIFA" className="h-6 w-auto" src="images/fifa_logo.svg" />
              </div>
            </div>
            <div className="flex items-center justify-center w-full max-w-xs mt-0.5">
              <div className="flex items-center justify-between w-full bg-[#0d1624]/85 border border-[#1e2d42] rounded-xl px-4 py-1.5 shadow-lg shadow-black/35 animate-scale-in">
                <span className="text-[10px] text-zinc-400 uppercase font-bold">Saldo Disponível</span>
                <span className="text-[#adff2f] font-bold font-mono text-lg text-neon-glow" id="header-balance">
                  R$ 3.096,04
                </span>
              </div>
            </div>
          </header>
          {/* Container Dinâmico */}
          <main className="flex-1 flex flex-col justify-start py-6 items-center" id="app">
            <div className="text-center mb-4 px-4 select-none mt-1">
              <p className="text-white/95 font-bold font-roboto-condensed uppercase text-sm inline-block">
                ETAPA DE AVALIAÇÃO
              </p>
              <div className="block -mt-1">
                <span className="hero-title text-4xl md:text-5xl font-black font-oswald inline-block uppercase leading-none select-none text-[#adff2f]">
                  AVALIE E GANHE
                </span>
              </div>
            </div>
            <div className="px-4 py-1 max-w-md w-full mx-auto flex flex-col animate-fade-in-up">
              <div className="bg-[#0d1624]/95 border border-[#1e2d42] rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h1 className="text-xl font-black font-oswald uppercase text-white mb-3 leading-tight">
                    Você possui um saldo inicial
                  </h1>
                  <div className="bg-zinc-950/70 rounded-xl p-5 mb-5 border border-[#1e2d42] w-full">
                    <p className="text-zinc-500 text-[11px] uppercase mb-1.5 font-bold font-roboto">Saldo Atual</p>
                    <p className="text-[#adff2f] font-bold text-4xl font-mono text-neon-glow">R$ 3.096,04</p>
                  </div>
                  <p className="text-zinc-300 text-[15px] mb-6 px-1 leading-relaxed">
                    Para liberar seu saque total de <strong>R$ 5.927,00</strong>, precisamos que você faça mais{' '}
                    <strong>4 avaliações rápidas</strong> de vídeos.
                  </p>
                  <button
                    className="w-full bg-gradient-to-r from-[#adff2f] to-[#7fff00] text-black font-black py-4 px-6 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-[15px] uppercase relative overflow-hidden group"
                    id="f84f8ca1-fb4b-dc65-94e7-bf30b9473b79"
                    onClick={() => window.startSurvey?.()}
                  >
                    <span>INICIAR AVALIAÇÕES</span>
                    <svg
                      aria-hidden="true"
                      className="lucide lucide-play-circle w-5 h-5 text-black"
                      data-lucide="play-circle"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* Popup de Recompensa */}
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[100] hidden flex items-center justify-center px-4"
          id="popup-overlay"
        >
          <div className="bg-[#0d1624] border border-[#adff2f]/30 rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-scale-in relative overflow-hidden neon-border-glow">
            <div className="text-center relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#adff2f]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#adff2f]/30 animate-bounce">
                <svg
                  aria-hidden="true"
                  className="lucide lucide-check-circle-2 w-8 h-8 text-[#adff2f]"
                  data-lucide="check-circle-2"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-black font-oswald uppercase text-white mb-2">Avaliação Concluída!</h3>
              <p className="text-4xl font-black text-[#adff2f] mb-2 font-mono text-neon-glow" id="popup-amount">
                + R$ 0,00
              </p>
              <p className="text-gray-300 text-sm mb-6 font-medium">
                Saldo total atualizado:{' '}
                <span className="text-white font-bold font-mono" id="popup-total">
                  R$ 0,00
                </span>
              </p>
              <button
                className="w-full bg-gradient-to-r from-[#00df89] to-[#adff2f] text-black font-black py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm uppercase relative overflow-hidden group"
                id="a00d04e9-77be-2232-bffb-e9ed98721ea3"
                onClick={() => window.closePopup?.()}
              >
                <span>RESGATAR E CONTINUAR</span>
                <svg
                  aria-hidden="true"
                  className="lucide lucide-arrow-right w-5 h-5 text-black group-hover:translate-x-1 transition-transform"
                  data-lucide="arrow-right"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logica do funil de avaliacoes (script final do fonte, caminhos de asset absolutos) */}
      <Script id="pix-survey-logic" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: surveyScript }} />
    </>
  )
}
