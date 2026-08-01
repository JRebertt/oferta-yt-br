// Script inline do fonte (public/lp/index.html) preservado EXATAMENTE.
// Reescreve os .checkout-link propagando query params/UTMs para o checkout
// e ativa o IntersectionObserver dos elementos .fade-in.
export const initScript = `
  const checkoutBaseUrl = "https://go.perfectpay.com.br/PPU38CQCRS1";
  const checkoutParams = new URLSearchParams(window.location.search);

  document.querySelectorAll('.checkout-link').forEach((link) => {
    const checkoutUrl = new URL(checkoutBaseUrl);
    checkoutParams.forEach((value, key) => {
      checkoutUrl.searchParams.append(key, value);
    });
    if (!checkoutUrl.searchParams.has("ref")) {
      checkoutUrl.searchParams.append("ref", "");
    }
    link.href = checkoutUrl.toString();
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
`
