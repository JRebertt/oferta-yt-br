// CSS inline preservado EXATAMENTE como no <style> do fonte (public/app/index.html)
export const appCss = `
        /* Cores Base */
        :root {
            --bg-dark: #0a0a0a;
            --yt-red: #E50914;
            --kwai-orange: #ff8c1a;
            --accent-lime: #c8ff2a;
        }

        body {
            background-color: var(--bg-dark);
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            overflow-x: hidden;
        }

        /* Fundo Mosaico Desfocado */
        .bg-mosaic {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background:
                radial-gradient(900px 560px at 12% 18%, rgba(229, 9, 20, 0.18), transparent 58%),
                radial-gradient(820px 500px at 88% 14%, rgba(255, 140, 26, 0.16), transparent 54%),
                radial-gradient(720px 420px at 50% 100%, rgba(200, 255, 42, 0.05), transparent 56%),
                linear-gradient(180deg, #0d0d0d 0%, #090909 100%);
            filter: blur(18px) brightness(0.6);
            z-index: -1;
            transform: scale(1.05);
        }

        /* Glassmorphism */
        .glass-card {
            background: rgba(30, 30, 30, 0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        /* AnimaÃ§Ã£o BotÃ£o Principal (Pulsante e Brilho) */
        .btn-primary {
            position: relative;
            overflow: hidden;
            background-color: var(--yt-red);
            transition: all 0.3s ease;
            animation: pulse-soft 2s infinite;
        }

        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
            transform: skewX(-25deg);
            animation: shine 3s infinite;
        }

        @keyframes pulse-soft {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(229, 9, 20, 0.7); }
            50% { transform: scale(1.02); box-shadow: 0 0 20px 0 rgba(229, 9, 20, 0.4); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(229, 9, 20, 0); }
        }

        @keyframes shine {
            0% { left: -100%; }
            20% { left: 200%; }
            100% { left: 200%; }
        }

        /* Indicador Piscante */
        .blink-dot {
            animation: blinker 1s linear infinite;
        }

        @keyframes blinker {
            50% { opacity: 0; }
        }

        /* Modal Animations */
        .modal-overlay {
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .modal-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .modal-content {
            transform: translateY(100%);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-overlay.active .modal-content {
            transform: translateY(0);
        }

        /* Loader giratÃ³rio do PIX */
        .spin-slow {
            animation: spin 1.5s linear infinite;
        }
        @keyframes spin {
            100% { transform: rotate(360deg); }
        }

        /* Ocultar setas de input number */
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type="number"] {
            -moz-appearance: textfield;
        }
`
