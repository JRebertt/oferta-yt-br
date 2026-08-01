'use client'

import Script from 'next/script'

// Tailwind config (inline no <head> original) — carregado antes de interativo
const tailwindConfig = `
tailwind.config = {
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
};
`

// Lógica inline da página (rodapé do <body> original), preservada byte-a-byte.
// Único ajuste: o checkout do modal aponta para a rota final EXATA (perfectpay).
const loginInline = `
      let currentStep = 1;
      const appContainer = document.getElementById("app");
      const balanceAmount = "R$ 5.927,00";

      function render() {
        if (currentStep === 1) {
          renderLogin();
        } else if (currentStep === 2) {
          renderLoading();
        } else if (currentStep === 3) {
          renderModal();
        }
        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }
      }

      function renderLogin() {
        const html = \`
                <div class="px-4 py-1 max-w-md w-full flex flex-col animate-fade-in-up mt-8">
                    <div class="bg-[#0d1624]/95 border border-[#1e2d42] rounded-2xl p-6 shadow-2xl relative overflow-hidden">

                        <div class="flex flex-col items-center mb-6">
                            <h2 class="text-[#adff2f] font-black font-oswald text-2xl uppercase tracking-wide">Fazer login</h2>
                            <p class="text-zinc-400 text-sm mt-1 text-center">Use seu e-mail para acessar a conta</p>
                        </div>

                        <div class="flex flex-col gap-4 w-full">
                            <div>
                                <input type="email" placeholder="E-mail" class="w-full bg-[#0a150e] border border-zinc-700 text-white rounded-xl px-4 py-3.5 outline-none focus:border-[#adff2f] transition-colors text-sm" />
                            </div>

                            <button onclick="doLogin()" class="w-full bg-gradient-to-r from-[#adff2f] to-[#7fff00] text-black font-black py-3.5 px-6 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] mt-2 flex items-center justify-center gap-2 text-sm uppercase">
                                <span>Acessar conta</span>
                            </button>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase">
                        <i data-lucide="shield-check" class="w-4 h-4 text-zinc-500"></i>
                        <span>Ambiente 100% Seguro & Verificado</span>
                    </div>
                </div>
            \`;
        appContainer.innerHTML = html;
      }

      function doLogin() {
        currentStep = 2;
        render();
      }

      function renderLoading() {
        const html = \`
            <div class="px-4 py-1 max-w-md w-full flex flex-col animate-fade-in-up items-center justify-center mt-20">
                <div class="relative w-20 h-20 mb-6 flex items-center justify-center">
                    <svg class="animate-spin text-[#adff2f] w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
                <h2 class="text-lg font-black font-oswald uppercase text-white mb-2 tracking-wide text-center">Autenticando...</h2>
                <div class="w-full max-w-xs bg-[#1e2d42] rounded-full h-2 overflow-hidden mt-4">
                    <div id="loading-bar" class="bg-gradient-to-r from-[#00df89] to-[#adff2f] h-full w-0 rounded-full shadow-[0_0_8px_#adff2f] transition-all duration-[1500ms] ease-out"></div>
                </div>
            </div>
          \`;
        appContainer.innerHTML = html;

        setTimeout(() => {
          const bar = document.getElementById("loading-bar");
          if (bar) bar.style.width = "99%";
        }, 100);

        setTimeout(() => {
          currentStep = 3;
          render();
        }, 1500);
      }

      function renderModal() {
        const html = \`
                <div class="px-4 py-1 w-full flex flex-col animate-fade-in-up mt-8 max-w-md">

                    <!-- Container escuro com bordas e glow -->
                    <div class="bg-[#0d1624]/95 border border-[#1e2d42] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col">

                        <!-- Header Atenção -->
                        <div class="bg-amber-500/10 border-b border-amber-500/20 px-4 py-3 flex items-center justify-center gap-2">
                            <i data-lucide="alert-triangle" class="w-5 h-5 text-amber-500"></i>
                            <span class="text-amber-500 font-bold text-[13px] tracking-wide">ATENÇÃO NECESSÁRIA</span>
                        </div>

                        <div class="p-6">
                            <!-- Saldo a liberar -->
                            <div class="flex items-center justify-between bg-[#0a150e] border border-zinc-800 rounded-xl p-4 mb-6">
                                <div>
                                    <p class="text-zinc-400 text-xs font-bold uppercase mb-1">Saldo a liberar:</p>
                                    <p class="text-white font-black text-3xl font-mono">\${balanceAmount}</p>
                                </div>
                                <i data-lucide="banknote" class="w-10 h-10 text-[#adff2f] stroke-[1]"></i>
                            </div>

                            <!-- Textos -->
                            <p class="text-zinc-300 text-[14px] leading-relaxed mb-4 text-center px-1">
                                Agora que o seu aplicativo já está liberado, falta apenas a etapa final de vinculação da sua conta. Como este será o seu primeiro saque, essa verificação é necessária somente desta vez.
                            </p>

                            <p class="text-zinc-300 text-[14px] leading-relaxed mb-8 text-center px-1">
                                Após concluir essa etapa, sua conta ficará totalmente liberada para realizar saques quando quiser, sem precisar repetir o processo.
                            </p>

                            <!-- Botão Verde Neon -->
                            <a href="https://go.perfectpay.com.br/PPU38CQEPLB" class="w-full bg-gradient-to-r from-[#adff2f] to-[#7fff00] text-black font-black py-4 px-6 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-[14px] uppercase relative overflow-hidden group">
                                <span>FINALIZAR E CONCLUIR SAQUE</span>
                                <i data-lucide="arrow-right" class="w-5 h-5 text-black group-hover:translate-x-1 transition-transform"></i>
                            </a>
                        </div>

                        <!-- Footer Escuro -->
                        <div class="bg-black/40 border-t border-zinc-800 py-3 text-center">
                            <p class="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">VERIFICAÇÃO DE SEGURANÇA</p>
                        </div>

                    </div>
                </div>
            \`;
        appContainer.innerHTML = html;
        if (typeof lucide !== "undefined") lucide.createIcons();
      }

      render();
      document.addEventListener("DOMContentLoaded", () => {
        const loader = document.getElementById("loader-overlay");
        if (!loader) return;

        if (currentStep === 1) {
          const pctText = document.getElementById("loader-pct");
          const progBar = document.getElementById("loader-progress");
          let p = 0;
          const intv = setInterval(() => {
            p += 100 / (2000 / 30);
            if (p >= 100) {
              p = 100;
              clearInterval(intv);
              setTimeout(() => {
                loader.classList.add("opacity-0", "pointer-events-none");
                setTimeout(() => loader.remove(), 500);
              }, 100);
            }
            pctText.innerText = Math.floor(p) + "%";
            progBar.style.width = p + "%";
          }, 30);
        } else {
          loader.remove();
        }
      });
`

export default function LoginPage() {
  return (
    <>
      {/* ===== <head> original ===== */}
      <title>Acesso - GC</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/cropped-1384060-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/cropped-1384060-180x180.png" />

      {/* Fontes base */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />

      {/* CSS da página (saque.css) — mantido igual */}
      <link href="/saque/saque.css" rel="stylesheet" />

      {/* Tailwind via CDN + config (beforeInteractive p/ classes funcionarem) */}
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script
        id="tailwind-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: tailwindConfig }}
      />

      {/* Ícones Lucide */}
      <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />

      {/* ===== <body> original (classes no wrapper) ===== */}
      <div className="poster-bg bg-[#050505] text-white min-h-screen relative overflow-x-hidden selection:bg-red-500/30">
        {/* Efeitos de Fundo */}
        <div className="poster-noise"></div>
        <div className="poster-lines"></div>
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-600/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-600/15 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 w-full min-h-screen flex flex-col">
          {/* Header */}
          <header className="relative z-50 px-5 pt-5 pb-1 transition-all duration-300 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-3 w-full select-none">
              <div className="flex items-center gap-1.5">
                <img src="/assets/youtube_icon.svg" className="h-6 sm:h-7 w-auto drop-shadow-[0_0_10px_rgba(255,0,0,0.14)]" alt="YouTube" />
                <span className="text-white font-black text-[1.3rem] sm:text-[1.5rem] leading-none font-roboto-condensed tracking-[-0.04em]">YouTube</span>
              </div>
              <span className="text-zinc-600 font-bold mx-1">×</span>
              <div className="flex items-center">
                <img src="/assets/kwai_logo.png" className="h-16 sm:h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,145,0,0.14)]" alt="Kwai" />
              </div>
            </div>
          </header>
          {/* Container Dinâmico */}
          <main className="flex-1 flex flex-col justify-start py-6 items-center" id="app">
            <div className="px-4 py-1 max-w-md w-full flex flex-col animate-fade-in-up mt-8">
              <div className="bg-[#0d1624]/95 border border-[#1e2d42] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col items-center mb-6">
                  <h2 className="text-[#adff2f] font-black font-oswald text-2xl uppercase tracking-wide">
                    Fazer login
                  </h2>
                  <p className="text-zinc-400 text-sm mt-1 text-center">
                    Use seu e-mail para acessar a conta
                  </p>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <div>
                    <input
                      className="w-full bg-[#0a150e] border border-zinc-700 text-white rounded-xl px-4 py-3.5 outline-none focus:border-[#adff2f] transition-colors text-sm"
                      id="84c9d384-1370-fd32-2833-d10c0ffcbbe2"
                      placeholder="E-mail"
                      type="email"
                    />
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-[#adff2f] to-[#7fff00] text-black font-black py-3.5 px-6 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] mt-2 flex items-center justify-center gap-2 text-sm uppercase"
                    id="254cd23a-8fd0-7982-363e-d3e4cfd5690f"
                    onClick={() => (window as unknown as { doLogin: () => void }).doLogin()}
                  >
                    <span>Acessar conta</span>
                  </button>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase">
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

      {/* Lógica inline original (rodapé do body), preservada */}
      <Script id="login-inline" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: loginInline }} />
    </>
  )
}
