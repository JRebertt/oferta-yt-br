(function () {
    if (window.__backRedirectReady) return;
    window.__backRedirectReady = true;

    const script = document.currentScript;
    const target = script && script.dataset.backredirectTarget ? script.dataset.backredirectTarget : "back/index.html";
    const allowedStages = script && script.dataset.backredirectStages
        ? script.dataset.backredirectStages.split(",").map((value) => value.trim()).filter(Boolean)
        : [];
    const redirectUrl = new URL(target, window.location.href);
    redirectUrl.search = window.location.search;
    redirectUrl.hash = "";
    let currentStage = "";

    function redirectToBack() {
        if (allowedStages.length > 0 && !allowedStages.includes(String(currentStage))) {
            return;
        }
        window.location.replace(redirectUrl.toString());
    }

    if (!window.history || !window.history.pushState) return;

    window.setBackRedirectStage = function setBackRedirectStage(stage) {
        currentStage = stage == null ? "" : String(stage);
    };

    window.history.replaceState({ backRedirectBase: true }, "", window.location.href);
    window.history.pushState({ backRedirectGuard: true }, "", window.location.href);

    window.addEventListener("popstate", redirectToBack);
})();
