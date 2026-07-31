let currentStep = 1;
      const appContainer = document.getElementById("app");
      const balanceAmount = "R$ 3.096,04";

      // Controla a renderização de telas
      function render() {
        if (currentStep === 1) {
          renderCaptcha();
        } else if (currentStep === 2) {
          renderLoading();
        } else if (currentStep === 3) {
          renderReady();
        }
        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }
      }

      function getHeaderPromoHtml() {
        return `
          <div class="text-center mb-4 px-4 select-none mt-1">
            <span class="hero-word text-4xl md:text-5xl inline-block mt-4">VERIFICAÇÃO<br/>DE SEGURANÇA</span>
          </div>
        `;
      }

      // Tela 1: O Falso Captcha
      function renderCaptcha() {
        const html = `
                ${getHeaderPromoHtml()}
                <div class="px-4 py-1 max-w-md w-full mx-auto flex flex-col animate-fade-in-up">
                    <div class="poster-card w-full">
                        <div class="poster-card-inner p-5 flex flex-col items-center text-center w-full">
                            <h1 class="text-xl font-black font-oswald uppercase text-white mb-3 leading-tight">Assista o vídeo abaixo para liberar o seu acesso</h1>
                            
                            <div class="bg-black/50 rounded-xl p-5 mb-5 border border-white/10 w-full">
                                <p class="text-zinc-500 text-[11px] uppercase mb-1.5 font-bold font-roboto">Dados do seu resgate - Valor Disponível</p>
                                <p class="text-[#d5ff2a] font-bold text-4xl font-mono text-neon-glow">${balanceAmount}</p>
                            </div>
                            
                            <!-- Box do Vídeo -->
                            <div class="w-full flex items-center justify-center mb-4 rounded-xl overflow-hidden border border-[#1e2d42] bg-black relative">
                                <video id="verification-video" src="/assets/video1.mov" controls playsinline class="w-full h-auto"></video>
                                <div id="unmute-overlay" class="absolute inset-0 z-20 flex items-center justify-center bg-black/60 cursor-pointer hidden backdrop-blur-sm">
                                    <div class="bg-[#d5ff2a] text-black font-black px-4 py-2 rounded-full flex items-center gap-2 animate-bounce">
                                        <i data-lucide="volume-2" class="w-5 h-5"></i>
                                        <span>CLIQUE PARA OUVIR</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div class="mt-4 flex items-center justify-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase">
                        <i data-lucide="shield-check" class="w-4 h-4 text-zinc-500"></i>
                        <span>Ambiente 100% Seguro & Verificado</span>
                    </div>
                </div>
            `;
        appContainer.innerHTML = html;

        // Segue o funil automaticamente quando o vídeo acabar
        const video = document.getElementById("verification-video");
        const unmuteOverlay = document.getElementById("unmute-overlay");

        if (video) {
          video.volume = 1;
          video.muted = false;
          let playPromise = video.play();

          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              // Se o navegador bloquear o autoplay com som, toca mutado e mostra overlay
              video.muted = true;
              video.play();

              if (unmuteOverlay) {
                unmuteOverlay.classList.remove("hidden");
                unmuteOverlay.addEventListener("click", () => {
                  video.muted = false;
                  video.currentTime = 0; // Reinicia o vídeo
                  unmuteOverlay.classList.add("hidden");
                });
              }
            });
          }
          video.addEventListener("ended", () => {
            currentStep = 2;
            render();
          });
        }
      }

      // Função de animação de clique no captcha original mantida (mas sem uso no fluxo novo)
      function simulateCaptcha() {
        const box = document.getElementById("captcha-box");
        if (!box) return; // Evita erros

        // Exibe um spinner temporário de loading
        box.innerHTML = `<svg class="animate-spin text-blue-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
        box.classList.remove("border-gray-400");

        setTimeout(() => {
          // Exibe o checkmark verdinho
          box.innerHTML = `<svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>`;

          // Aguarda uns milissegundos e passa de tela
          setTimeout(() => {
            currentStep = 2;
            render();
          }, 600);
        }, 1200);
      }

      // Tela 2: Processamento (Falso loading de redirecionamento)
      function renderLoading() {
        const html = `
            ${getHeaderPromoHtml()}
            <div class="px-4 py-1 max-w-md w-full mx-auto flex flex-col animate-fade-in-up items-center justify-center mt-10">
                <div class="relative w-20 h-20 mb-6 flex items-center justify-center">
                    <svg class="animate-spin text-[#d5ff2a] w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </div>
                <h2 class="text-lg font-black font-oswald uppercase text-white mb-2 tracking-wide text-center">Processando liberação...</h2>
                <div class="w-full max-w-xs bg-[#1e2d42] rounded-full h-2 overflow-hidden mt-4">
                    <div id="loading-bar" class="bg-gradient-to-r from-[rgba(255,82,70,0.62)] to-[#d5ff2a] h-full w-0 rounded-full shadow-[0_0_8px_#d5ff2a] transition-all duration-[2000ms] ease-out"></div>
                </div>
            </div>
          `;
        appContainer.innerHTML = html;

        setTimeout(() => {
          const bar = document.getElementById("loading-bar");
          if (bar) bar.style.width = "99%";
        }, 100);

        setTimeout(() => {
          currentStep = 3;
          render();
        }, 2500);
      }

      // Tela 3: Liberação / Resgate
      function renderReady() {
        const html = `
                ${getHeaderPromoHtml()}
                <div class="px-4 py-1 max-w-md w-full mx-auto flex flex-col animate-fade-in-up">
                    <div class="poster-card w-full mt-6">
                        
                        <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-black rounded-full border border-[#d5ff2a] flex items-center justify-center neon-border-glow z-20">
                            <i data-lucide="check-circle-2" class="w-7 h-7 text-[#d5ff2a]"></i>
                        </div>
                        
                        <div class="poster-card-inner p-6 flex flex-col items-center text-center mt-4 w-full">
                            <h1 class="text-2xl font-black font-oswald uppercase text-white mb-2 leading-tight">
                                Acesso ao aplicativo garantido
                            </h1>
                            <p class="text-zinc-300 font-medium text-sm mb-6">Liberação de acesso ao aplicativo e saque de R$ 3.096,04</p>
                            
                            <div class="w-full mb-6 text-left">
                                <div class="w-full h-5 bg-[#1e2d42] rounded-full relative overflow-hidden border border-zinc-700">
                                    <div class="h-full bg-gradient-to-r from-[rgba(255,82,70,0.62)] to-[#d5ff2a] w-[99%] rounded-full relative shadow-[0_0_10px_rgba(173,255,47,0.5)]">
                                        <span class="absolute right-2 top-1/2 -translate-y-1/2 text-black text-[10px] font-black">99%</span>
                                    </div>
                                </div>
                                <p class="text-zinc-400 text-xs font-bold uppercase mt-2 text-center">Processando liberação: 99%</p>
                            </div>
                            
                            <p class="text-zinc-300 mb-6 leading-relaxed text-[14px]">
                                Você concluiu todas as etapas e está apto a realizar seu <span class="text-[#d5ff2a] font-bold">saque imediato</span>. Efetue a liberação abaixo.
                            </p>
                            
                            <div class="bg-black/40 border border-white/10 rounded-xl p-4 mb-6 w-full text-left">
                                <p class="text-white text-xs font-bold uppercase mb-3 border-b border-zinc-800 pb-2">Resumo da liberação</p>
                                
                                <div class="space-y-2 text-sm">
                                    <div class="flex justify-between">
                                        <span class="text-zinc-400">Valor do resgate:</span>
                                        <span class="text-white font-medium">${balanceAmount}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-zinc-400">Taxa de saque:</span>
                                        <span class="text-red-400 font-medium">R$ 97,00</span>
                                    </div>
                                    <div class="flex justify-between border-t border-zinc-800 pt-2 mt-2">
                                        <span class="text-zinc-300 font-bold">Líquido a receber:</span>
                                        <span class="text-[#d5ff2a] font-bold">${balanceAmount}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <p class="text-zinc-400 text-[11px] mb-4 text-center">Após a finalização, você será redirecionado automaticamente para o aplicativo.</p>

                            <div class="poster-cta-outline w-full mt-2">
                                <a href="https://go.perfectpay.com.br/PPU38CQEPL8" class="w-full poster-cta text-black font-black py-4 px-6 rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-[15px] uppercase relative overflow-hidden group">
                                    <span>PROSSEGUIR PARA SAQUE</span>
                                    <i data-lucide="arrow-right" class="w-5 h-5 text-black group-hover:translate-x-1 transition-transform"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        appContainer.innerHTML = html;
        if (typeof lucide !== "undefined") lucide.createIcons();
      }

      // Inicializa o app
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
