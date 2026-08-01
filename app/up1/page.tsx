'use client'

import Script from 'next/script'
import { useEffect } from 'react'

export default function Up1Page() {
  // Porta fielmente o <script> inline do HTML original:
  // - inicializa os icones lucide
  // - aplica o comportamento dos botoes de plano (spinner + redirect com propagacao de UTMs)
  useEffect(() => {
    const w = window as unknown as {
      lucide?: { createIcons: () => void }
    }

    const initIcons = () => {
      if (typeof w.lucide !== 'undefined') {
        w.lucide.createIcons()
      }
    }
    initIcons()
    // caso o script do lucide ainda nao tenha carregado, tenta de novo
    const iconTimer = window.setInterval(() => {
      if (typeof w.lucide !== 'undefined') {
        w.lucide.createIcons()
        window.clearInterval(iconTimer)
      }
    }, 150)

    const planLinks: Record<string, string> = {
      gold: 'https://go.perfectpay.com.br/PPU38CQCRR6',
      premium: 'https://go.perfectpay.com.br/PPU38CQCRLJ',
      black: 'https://go.perfectpay.com.br/PPU38CQCRR7',
    }

    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>('.plan-btn')
    )

    const handler = function (this: HTMLButtonElement) {
      const btnText = this.innerText.trim().toLowerCase()
      let planName = ''

      if (btnText.includes('gold')) planName = 'gold'
      else if (btnText.includes('premium')) planName = 'premium'
      else if (btnText.includes('black')) planName = 'black'

      this.disabled = true
      this.innerHTML = `
                    <svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                `

      setTimeout(() => {
        const baseUrl = planLinks[planName]
        if (baseUrl) {
          const checkoutUrl = new URL(baseUrl)
          const currentParams = new URLSearchParams(window.location.search)
          currentParams.forEach((value, key) => {
            checkoutUrl.searchParams.append(key, value)
          })
          if (!checkoutUrl.searchParams.has('ref')) {
            checkoutUrl.searchParams.append('ref', '')
          }
          window.location.href = checkoutUrl.toString()
        } else {
          window.location.href = '#'
        }
      }, 800)
    }

    buttons.forEach((button) => button.addEventListener('click', handler))

    return () => {
      window.clearInterval(iconTimer)
      buttons.forEach((button) => button.removeEventListener('click', handler))
    }
  }, [])

  return (
    <>
      {/* ==== <head> portado ==== */}
      <title>Planos - YouTube x Kwai</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/images/cropped-1384060-32x32.png" sizes="32x32" />
      <link rel="icon" href="/images/cropped-1384060-192x192.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="/images/cropped-1384060-180x180.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;700&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* CSS original mantido igual */}
      <link rel="stylesheet" href="/assets/css/style.css" />

      {/* Tailwind via CDN + config (beforeInteractive para as classes funcionarem) */}
      <Script
        src="https://cdn.tailwindcss.com"
        strategy="beforeInteractive"
      />
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
              "yt-gray": "#13233c",
              "yt-red": "#ff0000",
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

      {/* lucide icons */}
      <Script
        src="https://unpkg.com/lucide@latest"
        strategy="afterInteractive"
      />

      {/* utmify pixel */}
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
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
        strategy="afterInteractive"
        async
        defer
      />

      {/* ==== <body> portado (classes do body no wrapper) ==== */}
      <div className="bg-[#050505] text-white min-h-screen relative overflow-x-hidden py-10 px-4 flex flex-col justify-center items-center selection:bg-red-500/30">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-600/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-600/15 rounded-full blur-[120px]"></div>
        </div>

        <header className="relative z-10 w-full max-w-6xl mx-auto mb-10 flex flex-col items-center justify-center gap-4 select-none px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
            <div className="flex items-center gap-2">
              <img
                src="/assets/youtube_icon.svg"
                className="h-7 w-auto drop-shadow-[0_0_10px_rgba(255,0,0,0.14)]"
                alt="YouTube"
              />
              <span className="text-white font-black text-[1.7rem] leading-none tracking-[-0.04em] font-roboto-condensed">
                YouTube
              </span>
            </div>

            <span className="text-gray-400 font-light text-lg">&times;</span>

            <div className="flex items-center">
              <img
                src="/assets/kwai_logo.png"
                className="h-[3.45rem] w-auto object-contain drop-shadow-[0_0_12px_rgba(255,145,0,0.14)]"
                alt="Kwai"
              />
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
              Aproveite a oportunidade
            </p>
            <h1 className="text-3xl md:text-5xl font-black font-oswald italic uppercase text-[#adff2f] tracking-tight mt-1 leading-none select-none">
              ESCOLHA SEU PLANO
            </h1>
            <p className="text-white font-bold text-xs md:text-sm uppercase tracking-wider mt-2">
              Mais avalia&ccedil;&otilde;es liberadas significam maiores lucros
              di&aacute;rios
            </p>
          </div>
        </header>

        <div className="relative z-10 max-w-6xl w-full mx-auto">
          <div className="max-w-sm md:max-w-xl mx-auto mb-6 bg-amber-500/10 border border-amber-400/25 rounded-xl px-4 py-3 flex items-start gap-3 text-left select-none">
            <i
              data-lucide="alert-triangle"
              className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5"
            ></i>
            <p className="text-[11px] md:text-xs text-amber-100/90 font-bold uppercase tracking-wide leading-snug">
              N&atilde;o feche esta p&aacute;gina durante a
              confirma&ccedil;&atilde;o. Voltar ou atualizar pode duplicar a
              tentativa de compra.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-sm md:max-w-none mx-auto items-stretch">
            {/* Plano Gold */}
            <div className="glass-panel p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-200 hover:scale-[1.01]">
              <div className="flex items-center justify-between mb-8 select-none">
                <div className="flex items-center gap-2.5">
                  <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 text-amber-500">
                    <i data-lucide="ticket" className="w-5 h-5"></i>
                  </div>
                  <div className="leading-none">
                    <span className="block text-xs font-black text-white uppercase tracking-tighter font-oswald">
                      Plano Gold
                    </span>
                    <span className="block text-[9px] font-medium text-zinc-400 uppercase font-roboto">
                      Iniciante
                    </span>
                  </div>
                </div>
                <span className="text-amber-500 font-bold text-[9px] uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full font-roboto-condensed">
                  Gold
                </span>
              </div>

              <div className="flex-grow space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#adff2f]/10 border border-[#adff2f]/30 flex items-center justify-center flex-shrink-0 mt-0.5 select-none">
                    <i
                      data-lucide="check"
                      className="w-3.5 h-3.5 text-[#adff2f] stroke-[3]"
                    ></i>
                  </div>
                  <p className="text-zinc-400 text-xs font-medium leading-snug">
                    Limite Di&aacute;rio de Saque:
                    <span className="block text-xl text-white font-black font-oswald tracking-tight mt-0.5">
                      R$ 150,00
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#adff2f]/10 border border-[#adff2f]/30 flex items-center justify-center flex-shrink-0 mt-0.5 select-none">
                    <i
                      data-lucide="check"
                      className="w-3.5 h-3.5 text-[#adff2f] stroke-[3]"
                    ></i>
                  </div>
                  <p className="text-zinc-400 text-xs font-medium leading-snug">
                    Volume de Trabalho:
                    <span className="block text-xl text-white font-black font-oswald tracking-tight mt-0.5">
                      25 Avalia&ccedil;&otilde;es/dia
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-10 select-none">
                <button className="plan-btn w-full bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 border border-zinc-700 text-white font-black py-4 rounded-xl uppercase text-xs tracking-wider transition-all active:scale-[0.98]">
                  Escolher Gold
                </button>
              </div>
            </div>

            {/* Plano Black (Mais Popular) */}
            <div className="glass-panel !border-[#adff2f]/60 p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-200 hover:scale-[1.01] z-10 shadow-[0_25px_50px_-12px_rgba(173,255,47,0.15)]">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-[#17d966] text-[#04100b] text-[9px] font-black px-4 py-1.5 rounded-b-lg uppercase tracking-widest select-none">
                Mais Popular
              </div>

              <div className="flex items-center justify-between mb-8 mt-2 select-none">
                <div className="flex items-center gap-2.5">
                  <div className="bg-[#adff2f]/10 p-2.5 rounded-xl border border-[#adff2f]/30 text-[#adff2f]">
                    <i data-lucide="ticket" className="w-5 h-5"></i>
                  </div>
                  <div className="leading-none">
                    <span className="block text-xs font-black text-[#adff2f] uppercase tracking-tighter font-oswald">
                      Plano Black
                    </span>
                    <span className="block text-[9px] font-medium text-zinc-400 uppercase font-roboto">
                      Intermedi&aacute;rio
                    </span>
                  </div>
                </div>
                <span className="text-[#adff2f] font-bold text-[9px] uppercase tracking-widest bg-[#adff2f]/10 border border-[#adff2f]/20 px-3 py-1 rounded-full font-roboto-condensed">
                  Popular
                </span>
              </div>

              <div className="flex-grow space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#adff2f]/10 border border-[#adff2f]/30 flex items-center justify-center flex-shrink-0 mt-0.5 select-none">
                    <i
                      data-lucide="check"
                      className="w-3.5 h-3.5 text-[#adff2f] stroke-[3]"
                    ></i>
                  </div>
                  <p className="text-zinc-450 text-xs font-medium leading-snug">
                    Limite Di&aacute;rio de Saque:
                    <span className="block text-xl text-white font-black font-oswald tracking-tight mt-0.5">
                      R$ 450,00
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#adff2f]/10 border border-[#adff2f]/30 flex items-center justify-center flex-shrink-0 mt-0.5 select-none">
                    <i
                      data-lucide="check"
                      className="w-3.5 h-3.5 text-[#adff2f] stroke-[3]"
                    ></i>
                  </div>
                  <p className="text-zinc-450 text-xs font-medium leading-snug">
                    Volume de Trabalho:
                    <span className="block text-xl text-white font-black font-oswald tracking-tight mt-0.5">
                      75 Avalia&ccedil;&otilde;es/dia
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-10 select-none">
                <button className="plan-btn w-full bg-[#17d966] hover:bg-[#19e96d] text-[#04100b] font-black py-4 rounded-xl uppercase text-xs tracking-wider transition-all active:scale-[0.98] shadow-lg">
                  Escolher Black
                </button>
              </div>
            </div>

            {/* Plano Premium */}
            <div className="glass-panel p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-200 hover:scale-[1.01]">
              <div className="flex items-center justify-between mb-8 select-none">
                <div className="flex items-center gap-2.5">
                  <div className="bg-purple-500/10 p-2.5 rounded-xl border border-purple-500/20 text-purple-400">
                    <i data-lucide="ticket" className="w-5 h-5"></i>
                  </div>
                  <div className="leading-none">
                    <span className="block text-xs font-black text-white uppercase tracking-tighter font-oswald">
                      Plano Premium
                    </span>
                    <span className="block text-[9px] font-medium text-zinc-400 uppercase font-roboto">
                      Profissional
                    </span>
                  </div>
                </div>
                <span className="text-purple-400 font-bold text-[9px] uppercase tracking-widest bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full font-roboto-condensed">
                  Premium
                </span>
              </div>

              <div className="flex-grow space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#adff2f]/10 border border-[#adff2f]/30 flex items-center justify-center flex-shrink-0 mt-0.5 select-none">
                    <i
                      data-lucide="check"
                      className="w-3.5 h-3.5 text-[#adff2f] stroke-[3]"
                    ></i>
                  </div>
                  <p className="text-zinc-400 text-xs font-medium leading-snug">
                    Limite Di&aacute;rio de Saque:
                    <span className="block text-xl text-[#adff2f] font-black font-oswald tracking-tight mt-0.5">
                      R$ 1.500,00
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#adff2f]/10 border border-[#adff2f]/30 flex items-center justify-center flex-shrink-0 mt-0.5 select-none">
                    <i
                      data-lucide="check"
                      className="w-3.5 h-3.5 text-[#adff2f] stroke-[3]"
                    ></i>
                  </div>
                  <p className="text-zinc-400 text-xs font-medium leading-snug">
                    Volume de Trabalho:
                    <span className="block text-xl text-[#adff2f] font-black font-oswald tracking-tight mt-0.5">
                      250 Avalia&ccedil;&otilde;es/dia
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-10 select-none">
                <button className="plan-btn w-full bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-700 hover:to-zinc-600 border border-zinc-700 text-white font-black py-4 rounded-xl uppercase text-xs tracking-wider transition-all active:scale-[0.98]">
                  Escolher Premium
                </button>
              </div>
            </div>
          </div>

          <footer className="mt-16 text-center px-4 select-none">
            <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.25em] leading-relaxed">
              Pagamentos processados via gateway criptografado seguro.{' '}
              <br className="md:hidden" />
              Acesso e libera&ccedil;&atilde;o imediata
              p&oacute;s-compensa&ccedil;&atilde;o.
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}
