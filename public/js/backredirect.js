(function () {
    if (window.__backRedirectReady) return;
    window.__backRedirectReady = true;

    const script = document.currentScript;
    const target = script && script.dataset.backredirectTarget ? script.dataset.backredirectTarget : "back/index.html";
    const redirectUrl = new URL(target, window.location.href);
    redirectUrl.search = window.location.search;
    redirectUrl.hash = "";

    function redirectToBack() {
        window.location.replace(redirectUrl.toString());
    }

    if (!window.history || !window.history.pushState) return;

    window.history.replaceState({ backRedirectBase: true }, "", window.location.href);
    window.history.pushState({ backRedirectGuard: true }, "", window.location.href);

    window.addEventListener("popstate", redirectToBack);
})();
