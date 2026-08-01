// Logica da roleta copiada EXATAMENTE do <script> final de public/back/index.html.
// Unicas adaptacoes: envolvido em IIFE (evita redeclaracao em navegacao SPA) e o bloco
// DOMContentLoaded roda imediatamente quando o documento ja esta pronto (o next/script
// injeta apos a hidratacao, quando DOMContentLoaded ja disparou).
export const initScript = `
(function () {
      const headerBalance = document.getElementById("header-balance");
      const canvas = document.getElementById("wheel");
      const stage = document.getElementById("wheelStage");
      const ctx = canvas.getContext("2d");
      const spinBtn = document.getElementById("spinBtn");
      const resultOverlay = document.getElementById("resultOverlay");
      const prizeDisplay = document.getElementById("prizeDisplay");
      const ctaBtn = document.getElementById("ctaBtn");

      const prizes = [
        { label: "R$ 250", bg: "#101b2d", fg: "#ffffff" },
        { label: "R$ 300", bg: "#17243a", fg: "#ffffff" },
        { label: "R$ 500", bg: "#101b2d", fg: "#ffffff" },
        { label: "R$ 1.000", bg: "#17243a", fg: "#ffffff" },
        { label: "R$ 10.000", bg: "#ff4747", fg: "#ffffff" },
        { label: "R$ 2.500", bg: "#adff2f", fg: "#05100a" }
      ];

      let size = 300;
      let angle = 0;
      let spinning = false;
      const arc = (Math.PI * 2) / prizes.length;
      const targetIndex = 5;

      function formatMoney(value) {
        return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
      }

      function readBalance() {
        const stored = parseFloat(localStorage.getItem("userBalance"));
        return Number.isFinite(stored) ? stored : 0;
      }

      function syncBalance() {
        if (window.appState) {
          window.appState.subscribe((balance) => {
            headerBalance.textContent = window.appState.formatMoney(balance);
          });
          return;
        }

        headerBalance.textContent = formatMoney(readBalance());
      }

      function resizeWheel() {
        const nextSize = Math.round(stage.getBoundingClientRect().width);
        const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
        size = nextSize;
        canvas.width = Math.round(size * dpr);
        canvas.height = Math.round(size * dpr);
        canvas.style.width = \`\${size}px\`;
        canvas.style.height = \`\${size}px\`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        drawWheel(angle);
      }

      function drawWheel(rotation) {
        const center = size / 2;
        const radius = center - 9;

        ctx.clearRect(0, 0, size, size);
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(rotation);

        prizes.forEach((prize, index) => {
          const start = index * arc;
          const end = start + arc;
          const middle = start + arc / 2;

          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, radius, start, end);
          ctx.closePath();
          ctx.fillStyle = prize.bg;
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, radius, start, end);
          ctx.closePath();
          ctx.strokeStyle = "rgba(173, 255, 47, 0.18)";
          ctx.lineWidth = 1.4;
          ctx.stroke();

          ctx.save();
          ctx.rotate(middle);
          ctx.translate(radius * 0.66, 0);
          ctx.rotate(Math.PI / 2);
          ctx.fillStyle = prize.fg;
          ctx.font = \`900 \${size > 280 ? 14 : 12}px Roboto, sans-serif\`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(prize.label, 0, 0);
          ctx.restore();
        });

        ctx.restore();

        ctx.beginPath();
        ctx.arc(center, center, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "#adff2f";
        ctx.lineWidth = 4;
        ctx.stroke();

        const capRadius = Math.max(30, size * 0.105);
        const gradient = ctx.createRadialGradient(center - 7, center - 8, 2, center, center, capRadius);
        gradient.addColorStop(0, "#ffffff");
        gradient.addColorStop(0.54, "#adff2f");
        gradient.addColorStop(1, "#47a820");

        ctx.beginPath();
        ctx.arc(center, center, capRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = "rgba(5, 16, 10, 0.4)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = "#05100a";
        ctx.font = \`900 \${size > 280 ? 18 : 16}px Oswald, sans-serif\`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("R$", center, center);
      }

      function getSpinDelta() {
        const targetCenter = targetIndex * arc + arc / 2;
        const normalized = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
        const wanted = (Math.PI * 2 - targetCenter + Math.PI * 2) % (Math.PI * 2);
        const alignDelta = (wanted - normalized + Math.PI * 2) % (Math.PI * 2);
        return Math.PI * 2 * 8 + alignDelta;
      }

      function easeOutQuart(value) {
        return 1 - Math.pow(1 - value, 4);
      }

      function spinWheel() {
        if (spinning) return;

        spinning = true;
        spinBtn.disabled = true;
        const start = performance.now();
        const startAngle = angle;
        const delta = getSpinDelta();
        const duration = 5200;

        function frame(now) {
          const progress = Math.min((now - start) / duration, 1);
          angle = startAngle + delta * easeOutQuart(progress);
          drawWheel(angle);

          if (progress < 1) {
            requestAnimationFrame(frame);
            return;
          }

          spinning = false;
          showResult();
        }

        requestAnimationFrame(frame);
      }

      function showResult() {
        prizeDisplay.textContent = "R$ 2.500";
        resultOverlay.classList.add("show");
      }

      function handleCTA() {
        const baseUrl = "https://checkout.perfectpay.com.br/pay/PPU38CQA4R7";
        window.location.href = baseUrl + window.location.search;
      }

      function init() {
        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }
        syncBalance();
        resizeWheel();
      }

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
      } else {
        init();
      }

      window.addEventListener("resize", resizeWheel);
      spinBtn.addEventListener("click", spinWheel);
      ctaBtn.addEventListener("click", handleCTA);
      canvas.addEventListener("touchstart", (event) => event.preventDefault(), { passive: false });
})();
`;
