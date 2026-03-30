(function(){
  try {
    if (history && 'scrollRestoration' in history) history.scrollRestoration = 'manual';
  } catch (e) {}

  function resetAllScroll() {
    try { window.scrollTo(0, 0); } catch (e) {}
    try { document.documentElement.scrollTop = 0; } catch (e) {}
    try { document.body.scrollTop = 0; } catch (e) {}

    [
      document.querySelector('.content'),
      document.querySelector('.app-container'),
      document.querySelector('.screen.active'),
      document.querySelector('.left-panel'),
      document.querySelector('.right-panel'),
      document.scrollingElement
    ].forEach(function(el){
      if (!el) return;
      try { el.scrollTop = 0; } catch (e) {}
      try {
        if (typeof el.scrollTo === 'function') el.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } catch (e) {}
    });
  }

  function attachSingleShowScreenPatch() {
    if (typeof window.showScreen !== 'function') return;
    if (window.__egSingleScrollPatchApplied) return;
    window.__egSingleScrollPatchApplied = true;

    const originalShowScreen = window.showScreen;
    window.showScreen = function(screenId) {
      const out = originalShowScreen.apply(this, arguments);
      resetAllScroll();
      requestAnimationFrame(function(){
        resetAllScroll();
        setTimeout(resetAllScroll, 40);
        setTimeout(resetAllScroll, 120);
      });
      return out;
    };
  }

  attachSingleShowScreenPatch();
  setTimeout(attachSingleShowScreenPatch, 0);
  setTimeout(attachSingleShowScreenPatch, 200);

  window.addEventListener('load', function(){
    resetAllScroll();
    setTimeout(resetAllScroll, 60);
  });

  window.addEventListener('orientationchange', function(){
    setTimeout(resetAllScroll, 50);
    setTimeout(resetAllScroll, 180);
  });
})();