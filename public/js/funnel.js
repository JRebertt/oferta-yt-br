(function () {
    const FunnelManager = {
        init() {
            document.addEventListener('DOMContentLoaded', () => {
                this.updateBalance();
                this.populateUpsellPage();
            });
        },

        updateBalance() {
            const balanceEl = document.getElementById("header-balance");
            if (balanceEl && window.appState) {
                window.appState.subscribe((balance) => {
                    balanceEl.textContent = window.appState.formatMoney(balance);
                });
            }
        },

        populateUpsellPage() {
            const path = window.location.pathname;
            let currentUpsell = null;

            const match = path.match(new RegExp("/up(\\d+)/"));
            if (match) {
                currentUpsell = `up${match[1]}`;
            }

            if (currentUpsell && window.funnelData && window.funnelData.upsells[currentUpsell]) {
                const data = window.funnelData.upsells[currentUpsell];

                this.setTextContent("upsell-title", data.title);
                this.setHTMLContent("upsell-desc", data.desc);
                this.setTextContent("upsell-badge", data.badge);
                this.setTextContent("upsell-price", `R$ ${data.price}`);
                this.setTextContent("upsell-cta", data.cta);

                const badgeIcon = document.getElementById("upsell-icon");
                if (badgeIcon) badgeIcon.textContent = data.icon;

                window.currentCheckoutLink = data.link;
            }
        },

        setTextContent(id, text) {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        },

        setHTMLContent(id, html) {
            const el = document.getElementById(id);
            if (el) el.innerHTML = html;
        },

        handleCheckout() {
            const funnelLink = window.currentCheckoutLink || "https://go.perfectpay.com.br/PPU38COP9EJ";
            const checkoutUrl = new URL(funnelLink);

            const currentParams = new URLSearchParams(window.location.search);
            currentParams.forEach((value, key) => {
                checkoutUrl.searchParams.append(key, value);
            });

            if (!checkoutUrl.searchParams.has("ref")) {
                checkoutUrl.searchParams.append("ref", "");
            }

            window.location.href = checkoutUrl.toString();
        }
    };

    window.FunnelManager = FunnelManager;
    window.handleCheckout = () => FunnelManager.handleCheckout();

    FunnelManager.init();
})();
