'use client'

import Script from 'next/script'

export default function SaquePage() {
  return (
    <>
      {/* ---- <head> do fonte convertido em JSX ---- */}
      <title>Verificação de Segurança - GC</title>

      {/* Fontes base */}
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&family=Oswald:wght@300;400;700;900&family=Roboto+Condensed:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      {/* Tailwind via CDN com as mesmas configs */}
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script
        id="tailwind-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              "yt-black": "#050811",
              "yt-red": "#ff0000",
              "yt-text": "#ffffff",
            },
            fontFamily: {
              roboto: ["Roboto", "sans-serif"],
              oswald: ["Oswald", "sans-serif"],
              "roboto-condensed": ['"Roboto Condensed"', "sans-serif"],
            },
          },
        },
      };
`,
        }}
      />

      {/* Ícones Lucide */}
      <Script
        src="https://unpkg.com/lucide@latest"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as unknown as { lucide?: { createIcons: () => void } }
          if (typeof w.lucide !== 'undefined') w.lucide.createIcons()
        }}
      />

      {/* CSS próprio da página preservado (linkado como no fonte) */}
      <link rel="stylesheet" href="/saque/saque.css" />

      {/* ---- <body> do fonte convertido em JSX (classes do body no wrapper) ---- */}
      <div className="poster-bg bg-[#050505] text-white min-h-screen relative overflow-x-hidden selection:bg-red-500/30">
        {/* Tela de Carregamento Profissional */}

        <div className="relative z-10 w-full min-h-screen flex flex-col">
          {/* Header modificado */}
          <header className="relative z-50 px-5 pt-5 pb-1 transition-all duration-300 flex flex-col items-center justify-center gap-2">
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
                  className="h-16 sm:h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,145,0,0.14)]"
                  alt="Kwai"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full max-w-xs mt-0.5">
              <div className="flex items-center justify-between w-full bg-[#0d1624]/85 border border-[#1e2d42] rounded-xl px-4 py-1.5 shadow-lg shadow-black/35 animate-scale-in">
                <span className="text-[10px] text-zinc-400 uppercase font-bold">Saldo Disponível</span>
                <span className="text-[#d5ff2a] font-bold font-mono text-lg text-neon-glow">R$ 3.096,04</span>
              </div>
            </div>
          </header>
          {/* Container Dinâmico */}
          <main className="flex-1 flex flex-col justify-start py-3" id="app">
            <div className="text-center mb-4 px-4 select-none mt-1">
              <span className="hero-word text-4xl md:text-5xl inline-block mt-4">
                VERIFICAÇÃO
                <br />
                DE SEGURANÇA
              </span>
            </div>
            <div className="px-4 py-1 max-w-md w-full mx-auto flex flex-col animate-fade-in-up">
              <div className="bg-[#0d1624]/95 border border-[#1e2d42] rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h1 className="text-xl font-black font-oswald uppercase text-white mb-3 leading-tight">
                    Assista o vídeo abaixo para liberar o seu acesso
                  </h1>
                  <div className="bg-zinc-950/70 rounded-xl p-5 mb-5 border border-[#1e2d42] w-full">
                    <p className="text-zinc-500 text-[11px] uppercase mb-1.5 font-bold font-roboto">
                      Dados do seu resgate - Valor Disponível
                    </p>
                    <p className="text-[#d5ff2a] font-bold text-4xl font-mono text-neon-glow">R$ 3.096,04</p>
                  </div>
                  {/* Box do Vídeo */}
                  <div className="w-full flex items-center justify-center mb-4 rounded-xl overflow-hidden border border-[#1e2d42] bg-black relative">
                    <video
                      className="w-full h-auto"
                      controls
                      id="verification-video"
                      playsInline
                      src="/assets/video1.mov"
                    ></video>
                    <div
                      className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 cursor-pointer backdrop-blur-sm"
                      id="unmute-overlay"
                    >
                      <div className="bg-[#d5ff2a] text-black font-black px-4 py-2 rounded-full flex items-center gap-2 animate-bounce">
                        <svg
                          aria-hidden="true"
                          className="lucide lucide-volume-2 w-5 h-5"
                          data-lucide="volume-2"
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
                          <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
                          <path d="M16 9a5 5 0 0 1 0 6"></path>
                          <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
                        </svg>
                        <span>CLIQUE PARA OUVIR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase">
                <svg
                  aria-hidden="true"
                  className="lucide lucide-shield-check w-4 h-4 text-zinc-500"
                  data-lucide="shield-check"
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
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>Ambiente 100% Seguro &amp; Verificado</span>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* JS próprio da página (toda a lógica do funil manipula o DOM via #app) */}
      <Script src="/saque/saque.js" strategy="afterInteractive" />
    </>
  )
}
