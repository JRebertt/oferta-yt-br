// Logica inline do <body> de public/index.html portada FIELMENTE.
// Unicos ajustes vs. o fonte:
//   1. caminhos de asset -> absolutos (assets/... -> /assets/..., images/... -> /images/...)
//   2. o handler DOMContentLoaded roda imediatamente se o DOM ja estiver pronto
//      (no Next o script roda apos hydration, quando DOMContentLoaded ja disparou)
//   3. render() inicial espera window.appState + window.funnelData estarem carregados
// Todo o restante (render, roleta de opcoes, popup, som, VSL, comentarios, CTA) e identico.
export const appScript = `
      let currentStep = 1;
      let questionIndex = 0;
      let selectedOptions = [];

      const appContainer = document.getElementById("app");
      const headerBalance = document.getElementById("header-balance");
      const popupOverlay = document.getElementById("popup-overlay");
      const popupAmount = document.getElementById("popup-amount");
      const popupTotal = document.getElementById("popup-total");
      const fallbackVideoCta = {
        text: "DESTRAVAR MEU SAQUE AGORA",
        delay: 810000,
        link: "https://marketingsolucoesprime-ltda-embarrassed-article.trackup.cloud/50b7444e?"
      };

      function getVideoCta() {
        return {
          ...fallbackVideoCta,
          ...(window.funnelData?.videoInfo?.cta || {})
        };
      }

      const __onReady = (fn) => {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", fn);
        } else {
          fn();
        }
      };

      __onReady(() => {
         sessionStorage.removeItem('funnelStep');
         sessionStorage.removeItem('funnelQuestionIndex');
         currentStep = 1;
         questionIndex = 0;
         selectedOptions = [];

         if (window.appState) {
           window.appState.setBalance(0);
         }
         window.appState.subscribe((balance) => {
           headerBalance.textContent = window.appState.formatMoney(balance);
         });
      });
      const cashSound = new Audio("/assets/cashregister.mp3");
      cashSound.preload = "auto";


      const unlockAudio = () => {
        cashSound.play().then(() => {
          cashSound.pause();
          cashSound.currentTime = 0;
        }).catch((e) => console.log("Audio unlock failed:", e));
        document.removeEventListener("click", unlockAudio);
        document.removeEventListener("touchstart", unlockAudio);
      };
      document.addEventListener("click", unlockAudio);
      document.addEventListener("touchstart", unlockAudio);

      function playCashSound() {
        cashSound.currentTime = 0;
        cashSound.play().catch((e) => console.log("Audio play failed", e));
      }

      const optionLogos = [
        { match: ["coca"], key: "coca_cola", tone: "bg-red-500/10 border-red-500/25" },
        { match: ["guarana"], key: "guarana", tone: "bg-emerald-500/10 border-emerald-500/25" },
        { match: ["pepsi"], key: "pepsi", tone: "bg-blue-500/10 border-blue-500/25" },
        { match: ["fanta"], key: "fanta", tone: "bg-orange-500/10 border-orange-500/25" },
        { match: ["sprite"], key: "sprite", tone: "bg-lime-500/10 border-lime-500/25" },
        { match: ["netflix"], key: "netflix", tone: "bg-red-500/10 border-red-500/25" },
        { match: ["globoplay"], key: "globoplay", tone: "bg-pink-500/10 border-pink-500/25" },
        { match: ["disney"], key: "disney", tone: "bg-sky-500/10 border-sky-500/25" },
        { match: ["max"], key: "max", tone: "bg-indigo-500/10 border-indigo-500/25" },
        { match: ["amazon", "prime"], key: "amazon", tone: "bg-cyan-500/10 border-cyan-500/25" },
        { match: ["apple", "iphone"], key: "apple", tone: "bg-stone-500/10 border-stone-500/25" },
        { match: ["samsung"], key: "samsung", tone: "bg-blue-500/10 border-blue-500/25" },
        { match: ["xiaomi"], key: "xiaomi", tone: "bg-orange-500/10 border-orange-500/25" },
        { match: ["motorola"], key: "motorola", tone: "bg-cyan-500/10 border-cyan-500/25" },
        { match: ["realme"], key: "realme", tone: "bg-yellow-500/10 border-yellow-500/25" },
        { match: ["mcdonald"], key: "mcdonalds", tone: "bg-yellow-500/10 border-yellow-500/25" },
        { match: ["burger", "king"], key: "burgerking", tone: "bg-amber-500/10 border-amber-500/25" },
        { match: ["subway"], key: "subway", tone: "bg-emerald-500/10 border-emerald-500/25" },
        { match: ["habib"], key: "habibs", tone: "bg-red-500/10 border-red-500/25" },
        { match: ["giraffas"], key: "giraffas", tone: "bg-yellow-500/10 border-yellow-500/25" },
        { match: ["nubank"], key: "nubank", tone: "bg-purple-500/10 border-purple-500/25" },
        { match: ["itau"], key: "itau", tone: "bg-orange-500/10 border-orange-500/25" },
        { match: ["inter"], key: "inter", tone: "bg-orange-600/10 border-orange-600/25" },
        { match: ["bradesco"], key: "bradesco", tone: "bg-red-500/10 border-red-500/25" },
        { match: ["picpay"], key: "picpay", tone: "bg-emerald-500/10 border-emerald-500/25" },
      ];
      const logoAssetVersion = "20260605d";

      function normalizeOptionName(option) {
        return option
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\\u0300-\\u036f]/g, "");
      }

      function getBrandInitials(option) {
        return option
          .replace(/\\([^)]*\\)/g, "")
          .split(/\\s+|-/)
          .filter(Boolean)
          .slice(0, 2)
          .map((word) => word[0])
          .join("")
          .toUpperCase();
      }

      function getOptionIcon(option) {
        const normalized = normalizeOptionName(option);
        const logo = optionLogos.find((item) => item.match.every((part) => normalized.includes(normalizeOptionName(part))));

        if (logo) {
          return \`
            <div class="brand-tile select-none">
              <img src="/assets/logos/\${logo.key}.png?v=\${logoAssetVersion}" class="brand-tile-image" alt="\${option} logo" loading="eager" onerror="this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden');" />
              <span class="hidden text-[11px] font-black font-oswald text-zinc-900">\${getBrandInitials(option)}</span>
            </div>
          \`;
        }

        return \`
          <div class="brand-tile bg-zinc-800 flex items-center justify-center select-none text-zinc-300">
            <span class="text-[11px] font-black font-oswald">\${getBrandInitials(option)}</span>
          </div>
        \`;
      }

      function getHeaderPromoHtml() {
        return \`
          <div class="text-center mb-5 px-4 select-none mt-1">
            <p class="eyebrow-soft font-bold font-roboto-condensed uppercase text-[1.05rem] tracking-[0.06em] inline-block">PARTICIPE DO</p>
            <div class="block mt-1 relative">
              <span class="hero-word">DESAFIO</span>
            </div>
            <div class="flex justify-center mt-4">
              <div class="micro-pill max-w-[710px] w-full">
                <span class="text-zinc-200 font-medium text-[0.95rem] tracking-[0.04em] uppercase block">
                  Nunca foi tão fácil. Avaliou. <span class="text-[#caff35] font-bold">Ganhou!</span>
                </span>
              </div>
            </div>
          </div>
        \`;
      }

      function render() {
        appContainer.innerHTML = "";

        if (typeof window.setBackRedirectStage === "function") {
          window.setBackRedirectStage(currentStep);
        }

        if (currentStep === 1) {
          renderWelcome();
        } else if (currentStep === 2) {
          renderSurvey();
        } else if (currentStep === 3) {
          renderReady();
        } else if (currentStep === 4) {
          renderVideo();
        }

        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }

      function renderWelcome() {
        const html = \`
                \${getHeaderPromoHtml()}
                <div class="welcome-shell px-3 sm:px-4 py-1 sm:py-2 w-full mx-auto flex flex-col animate-fade-in-up">
                    <div class="poster-card">
                      <div class="welcome-card-body poster-card-inner md:p-10 relative overflow-hidden">
                        <div class="relative z-10 flex flex-col items-center text-center">
                            <div class="spark-row text-red-500 mb-4">
                              <span class="spark-line"></span>
                              <span class="spark-dot"></span>
                              <span class="spark-line text-orange-400"></span>
                            </div>
                            <h1 class="welcome-title font-black font-oswald uppercase text-white mb-3 tracking-[-0.04em]">Parabéns!</h1>
                             <p class="welcome-copy text-zinc-200 mb-6 font-light">
                                Você foi selecionado para participar do nosso <span class="text-[#caff35] font-medium">Desafio de Recompensas Exclusivo</span> entre YouTube e Kwai.
                            </p>

                            <div class="welcome-bonus entry-bonus mb-7 w-full">
                              <div class="p-6 md:p-8 relative overflow-hidden shadow-inner">
                                <div class="absolute inset-0 bg-gradient-to-b from-[#d5ff2a]/7 to-transparent pointer-events-none"></div>
                                <p class="welcome-bonus-label text-zinc-300 uppercase mb-2 font-medium tracking-[0.14em] relative z-10">Bônus de Entrada Desbloqueado</p>
                                <p class="welcome-bonus-value text-[#caff35] font-bold font-oswald tracking-[-0.05em] relative z-10">R$ 250,00</p>
                              </div>
                            </div>

                            <p class="welcome-note text-zinc-200/90 mb-7 font-light px-2">
                                Responda a 5 perguntas rápidas e libere o seu acesso imediato.
                            </p>

                            <div class="welcome-cta poster-cta-outline">
                              <button id="btn-start" onclick="nextStep()" class="poster-cta w-full text-black font-black text-[1.12rem] md:text-[1.35rem] tracking-[0.06em] rounded-[1.7rem] py-4 md:py-5 transition-all hover:brightness-105 hover:scale-[1.01] active:scale-[0.985] uppercase flex items-center justify-center gap-3">
                                  Começar Agora <i data-lucide="arrow-right" class="w-7 h-7"></i>
                              </button>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4 flex items-center justify-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.16em]">
                        <i data-lucide="shield-check" class="w-3.5 h-3.5 text-zinc-500"></i>
                        <span>Ambiente 100% Seguro e Verificado</span>
                    </div>
                </div>
            \`;
        appContainer.innerHTML = html;
      }

      function renderSurvey() {
        const question = window.funnelData.questions[questionIndex];
        const letterBadges = ["A", "B", "C", "D", "E"];

        const optionsHtml = question.options
          .map(
            (option, idx) => \`
                <div class="relative flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 group overflow-hidden bg-white/5 border border-white/5 hover:border-[#adff2f]/60" onclick="toggleOption(\${idx})" id="option-\${idx}">
                    <input type="checkbox" class="absolute opacity-0 w-full h-full cursor-pointer inset-0 z-10" value="\${option}">
                    <div class="flex items-center gap-3">
                        \${getOptionIcon(option)}
                        <span class="font-bold text-sm md:text-base text-zinc-200 group-hover:text-white transition-colors" id="text-\${idx}">\${option}</span>
                    </div>
                    <div class="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center transition-all bg-transparent flex-shrink-0" id="check-\${idx}">
                    </div>
                </div>
            \`,
          )
          .join("");

        const html = \`
                \${getHeaderPromoHtml()}
                <div class="px-4 py-2 max-w-md w-full mx-auto flex flex-col animate-fade-in-up">
                    <div class="glass-panel p-5 border border-white/5">

                        <div class="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 select-none">
                            <div class="flex items-center gap-1.5">
                                <span class="text-[10px] uppercase font-bold text-zinc-400">Pergunta</span>
                                <span class="text-xs font-bold text-white font-mono"><span class="text-[#adff2f]">\${questionIndex + 1}</span> de \${window.funnelData.questions.length}</span>
                            </div>


                            <div class="flex items-center gap-1.5 bg-black/20 rounded-full px-2.5 py-1 border border-white/5">
                                \${Array.from({length: window.funnelData.questions.length}).map((_, i) => \`
                                    <span class="w-2.5 h-2.5 rounded-full transition-all duration-300 \${i <= questionIndex ? 'bg-[#adff2f] shadow-md shadow-[#adff2f]/50' : 'bg-zinc-800'}"></span>
                                \`).join('')}
                            </div>

                            <div class="flex items-center gap-1.5 rounded-full border border-[#adff2f]/35 bg-[#adff2f]/10 px-2.5 py-1 text-[#adff2f] shadow-sm shadow-[#adff2f]/10">
                                <i data-lucide="badge-dollar-sign" class="w-4 h-4"></i>
                                <span class="text-[10px] font-black font-mono">\${window.appState.formatMoney(question.reward)}</span>
                            </div>
                        </div>


                        <div class="mb-4 select-none">
                            <div class="flex-1">
                                <div class="flex items-start gap-3">
                                    <div class="w-9 h-9 rounded-full bg-[#adff2f] flex items-center justify-center flex-shrink-0 text-black shadow-md shadow-[#adff2f]/20">
                                        <i data-lucide="circle-help" class="w-5 h-5 stroke-[3]"></i>
                                    </div>
                                    <div>
                                        <h2 class="text-[17px] font-black font-roboto-condensed text-white leading-tight uppercase">\${question.question}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="space-y-2">
                            \${optionsHtml}
                        </div>
                    </div>


                    <div class="mt-3 flex items-center justify-center gap-1.5 text-[9px] font-bold text-zinc-500 uppercase">
                        <i data-lucide="shield-check" class="w-3.5 h-3.5 text-zinc-500"></i>
                        <span>Ambiente 100% Seguro & Verificado</span>
                    </div>
                </div>
            \`;
        appContainer.innerHTML = html;
        updateOptionsUI();
      }

      function renderReady() {
        const html = \`
                \${getHeaderPromoHtml()}
                <div class="px-4 py-2 max-w-md w-full mx-auto flex flex-col animate-fade-in-up">
                    <div class="glass-panel p-8 relative overflow-hidden">
                        <div class="relative z-10 flex flex-col items-center text-center">
                            <h1 class="text-3xl font-black font-oswald uppercase text-white mb-2 tracking-wide">Desafio Concluído!</h1>

                            <p class="text-zinc-300 mb-6 leading-relaxed text-sm font-light">
                                Seu saldo acumulado está garantido. Conclua a última etapa para liberar o saque instantâneo via Pix.
                            </p>

                            <div class="bg-black/40 rounded-2xl p-5 mb-6 border border-white/5 w-full relative overflow-hidden shadow-inner">
                                <div class="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none"></div>
                                <p class="text-zinc-400 text-xs uppercase mb-1.5 font-medium tracking-widest relative z-10">Saldo Total Acumulado</p>
                                <p class="text-[#adff2f] font-bold text-4xl font-mono tracking-tight relative z-10">\${window.appState.formatMoney(window.appState.balance)}</p>
                            </div>

                            <p class="text-zinc-400 text-xs mb-6 font-medium px-2">
                                Assista ao vídeo de instruções abaixo de 1 minuto para liberar seu saque.
                            </p>

                            <button onclick="nextStep()" class="w-full bg-[#adff2f] text-black font-bold text-sm tracking-wide rounded-2xl py-4 transition-all hover:bg-[#9de825] hover:scale-[1.02] active:scale-95 uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(173,255,47,0.2)]">
                                <i data-lucide="play" class="w-4 h-4 text-black fill-black"></i>
                                Assistir Vídeo e Sacar
                                <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>

                    <div class="mt-3 flex items-center justify-center gap-1.5 text-[9px] font-bold text-zinc-500 uppercase">
                        <i data-lucide="shield-check" class="w-3.5 h-3.5 text-zinc-500"></i>
                        <span>Ambiente 100% Seguro & Verificado</span>
                    </div>
                </div>
            \`;
        appContainer.innerHTML = html;
      }

      function renderVideo() {
        const videoInfo = window.funnelData?.videoInfo || {};
        const comments = Array.isArray(window.funnelData?.comments) ? window.funnelData.comments : [];
        const ctaData = getVideoCta();
        const commentCount = videoInfo.stats?.comments || "0";

        const html = \`
                <div class="w-full mx-auto pb-12">
                    <div class="px-4 py-4 max-w-xl mx-auto">
                        <div class="glass-panel p-5 mb-8 relative">
                            <h2 class="text-xs font-black font-oswald uppercase text-white mb-3 flex items-center gap-2">
                                <span class="w-2.5 h-2.5 rounded-full bg-[#adff2f] animate-pulse inline-block shadow-md shadow-[#adff2f]/50"></span> VÍDEO DE INSTRUÇÕES (LIBERAÇíO DO SAQUE)
                            </h2>
                            <div class="aspect-video w-full flex items-start justify-center relative rounded-xl overflow-hidden bg-black border border-white/5">
                                <div class="w-full h-full relative z-10">
                                    <vturb-smartplayer id="vid-6a22e142cf5b757b7649342e" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>
                                </div>
                            </div>
                            <div id="cta-container" class="mt-5 hidden animate-scale-in flex justify-center">
                                <button onclick="goToVslCheckout()" class="w-full max-w-[420px] bg-[#10d313] hover:bg-[#12e015] text-white font-bold py-4 px-5 rounded-[16px] uppercase text-[17px] sm:text-[21px] leading-tight flex items-center justify-center transition-transform active:scale-[0.98] shadow-[0_10px_22px_rgba(16,211,19,0.22)]">
                                    <span>\${ctaData.text}</span>
                                </button>
                            </div>
                        </div>

                        <div class="glass-panel p-6">
                            <div class="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
                                <h3 class="font-bold text-lg text-white">Comentários <span class="text-zinc-400 text-xs ml-1.5 bg-zinc-800 px-2 py-0.5 rounded">\${commentCount}</span></h3>
                                <i data-lucide="sliders-horizontal" class="w-4 h-4 text-zinc-500"></i>
                            </div>
                            <div class="space-y-6" id="comments-container">

                            </div>
                        </div>
                    </div>
                </div>
            \`;
        appContainer.innerHTML = html;

        renderComments(comments);
        initVideo();
      }

      function renderComments(commentsList) {
        const container = document.getElementById("comments-container");
        if (!container) return;

        container.innerHTML = commentsList
          .map(
            (comment, index) => \`
          <div class="flex gap-3 animate-fade-in-up" style="animation-delay: \${index * 100}ms;">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex-shrink-0 overflow-hidden">
                  <img src="\${comment.avatar}" class="w-full h-full object-cover" onerror="this.src='/images/cropped-1384060-192x192.png'">
              </div>
              <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-bold text-gray-300">\${comment.author}</span>
                      <span class="text-[10px] text-gray-500">\${comment.time}</span>
                  </div>
                  <p class="text-sm text-white leading-relaxed mb-2">\${comment.text}</p>
                  <div class="flex items-center gap-4 text-gray-400 mb-4">
                      <div class="flex items-center gap-1.5 cursor-pointer hover:text-white">
                          <i data-lucide="thumbs-up" class="w-3.5 h-3.5"></i>
                          <span class="text-xs font-medium">\${comment.likes}</span>
                      </div>
                      <div class="cursor-pointer hover:text-white">
                          <i data-lucide="thumbs-down" class="w-3.5 h-3.5"></i>
                      </div>
                      <span class="text-xs font-medium cursor-pointer hover:text-white">Responder</span>
                  </div>
                  \${
                    comment.replies && comment.replies.length > 0
                      ? \`
                    <div class="mt-2 space-y-4 border-l-2 border-white/5 pl-4">
                        \${comment.replies
                          .map(
                            (reply) => \`
                            <div class="flex gap-3">
                                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex-shrink-0 overflow-hidden">
                                    <img src="\${reply.avatar}" class="w-full h-full object-cover" onerror="this.src='/images/cropped-1384060-192x192.png'">
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center gap-2 mb-0.5">
                                        <span class="text-[11px] font-bold text-gray-300">\${reply.author}</span>
                                        <span class="text-[9px] text-gray-500">\${reply.time}</span>
                                    </div>
                                    <p class="text-xs text-white leading-relaxed mb-1.5">\${reply.text}</p>
                                    <div class="flex items-center gap-3 text-gray-400">
                                        <div class="flex items-center gap-1 cursor-pointer hover:text-white">
                                            <i data-lucide="thumbs-up" class="w-3 h-3"></i>
                                            <span class="text-[10px]">\${reply.likes}</span>
                                        </div>
                                        <div class="cursor-pointer hover:text-white">
                                            <i data-lucide="thumbs-down" class="w-3 h-3"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        \`,
                          )
                          .join("")}
                    </div>
                  \`
                      : ""
                  }
              </div>
          </div>
        \`,
          )
          .join("");
      }

      function goToVslCheckout() {
        const checkoutUrl = new URL(getVideoCta().link);
        const currentParams = new URLSearchParams(window.location.search);

        currentParams.forEach((value, key) => {
          checkoutUrl.searchParams.append(key, value);
        });

        if (!checkoutUrl.searchParams.has("ref")) {
          checkoutUrl.searchParams.append("ref", "");
        }

        window.location.href = checkoutUrl.toString();
      }

      function nextStep() {
        if (currentStep === 1) {
          window.appState.setBalance(window.funnelData.initialBonus);
          currentStep = 2;
          render();
        } else if (currentStep === 3) {
          currentStep = 4;
          render();
        }
      }

      function toggleOption(optionIdx) {
        if (selectedOptions.length > 0) return;


        playCashSound();

        const question = window.funnelData.questions[questionIndex];
        const option = question.options[optionIdx];

        selectedOptions = [option];
        updateOptionsUI();

        setTimeout(() => {
            submitAnswer();
        }, 350);
      }

      function updateOptionsUI() {
        const options = document.querySelectorAll("[id^=option-]");

        options.forEach((el, idx) => {
          const val = el.querySelector("input").value;
          const isSelected = selectedOptions.includes(val);
          const checkDiv = document.getElementById(\`check-\${idx}\`);
          const textSpan = document.getElementById(\`text-\${idx}\`);

          if (isSelected) {
            el.className = "relative flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 overflow-hidden bg-[#0a1b36] border border-[#adff2f]/60 select-none";
            checkDiv.className = "w-6 h-6 rounded-full bg-[#adff2f] border border-[#adff2f] flex items-center justify-center transition-all flex-shrink-0";
            checkDiv.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-black stroke-[3]"></i>';
            textSpan.className = "font-bold text-sm md:text-base text-white transition-colors";
          } else {
            el.className = "relative flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 overflow-hidden bg-[#070e1b] border border-[#13233c] hover:border-[#adff2f]/60 select-none";
            checkDiv.className = "w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center transition-all bg-transparent flex-shrink-0";
            checkDiv.innerHTML = "";
            textSpan.className = "font-bold text-sm md:text-base text-zinc-200 transition-colors";
          }
        });

        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }

      function submitAnswer() {
        if (selectedOptions.length === 0) return;

        const question = window.funnelData.questions[questionIndex];
        const reward = question.reward;
        const currentTotal = window.appState.balance + reward;

        const popupAmountEl = document.getElementById("popup-amount");
        const popupTotalEl = document.getElementById("popup-total");
        popupAmountEl.textContent = window.appState.formatMoney(reward);
        popupTotalEl.textContent = window.appState.formatMoney(currentTotal);

        popupOverlay.classList.remove("hidden");
      }

      function closePopup() {
        popupOverlay.classList.add("hidden");

        const question = window.funnelData.questions[questionIndex];
        window.appState.addBalance(question.reward);

        questionIndex++;
        selectedOptions = [];

        if (questionIndex >= window.funnelData.questions.length) {
          currentStep = 3;
        }

        render();
      }

      function initVideo() {
        if (!document.querySelector('script[src*="players/6a22e142cf5b757b7649342e/v4/player.js"]')) {
          var s = document.createElement("script");
          s.src = "https://scripts.converteai.net/fcffbf36-808d-429e-ae14-e506c0644ae3/players/6a22e142cf5b757b7649342e/v4/player.js";
          s.async = true;
          document.head.appendChild(s);
        }

        const ctaData = getVideoCta();
        const delayMs = Number.isFinite(ctaData.delay) ? ctaData.delay : 810000;
        const delayInSeconds = delayMs / 1000;
        let ctaVisible = false;
        const startedAt = Date.now();

        function showCTA() {
          if (ctaVisible) return;
          const ctaContainer = document.getElementById("cta-container");
          if (!ctaContainer) return;
          ctaContainer.classList.remove("hidden");
          ctaVisible = true;
          if (typeof lucide !== 'undefined') {
            lucide.createIcons();
          }
        }

        const checkInterval = setInterval(() => {
          if (ctaVisible) {
            clearInterval(checkInterval);
            return;
          }

          let videoNode = null;

          if (typeof smartplayer !== 'undefined' && smartplayer.instances && smartplayer.instances.length > 0) {
            videoNode = smartplayer.instances[0].video;
          }

          if (!videoNode) {
            videoNode = document.querySelector("vturb-smartplayer video") || document.querySelector("video");
          }

          if (videoNode && videoNode.currentTime >= delayInSeconds) {
            showCTA();
            clearInterval(checkInterval);
            return;
          }

          if (!videoNode && Date.now() - startedAt >= delayMs) {
            showCTA();
            clearInterval(checkInterval);
          }
        }, 1000);
      }

      (function __ytkwBoot() {
        if (!window.appState || !window.funnelData) {
          setTimeout(__ytkwBoot, 30);
          return;
        }
        render();
      })();

      window.closePopup = closePopup;
      window.nextStep = nextStep;
      window.toggleOption = toggleOption;
      window.goToVslCheckout = goToVslCheckout;
`
