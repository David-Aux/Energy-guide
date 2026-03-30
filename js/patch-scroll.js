(function(){
  // Keep this file lightweight. Main scroll control now lives in platform.js.
  function hardTop() {
    try {
      const nodes = [
        window,
        document.scrollingElement,
        document.documentElement,
        document.body,
        document.querySelector('.content'),
        document.querySelector('.app-container'),
        document.querySelector('.screen.active'),
        document.querySelector('.left-panel'),
        document.querySelector('.right-panel')
      ];
      nodes.forEach(n => {
        try {
          if (!n) return;
          if (n === window) window.scrollTo(0, 0);
          else {
            n.scrollTop = 0;
            if (typeof n.scrollTo === 'function') n.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }
        } catch(e){}
      });
    } catch(e){}
  }

  window.addEventListener('load', function(){
    hardTop();
    setTimeout(hardTop, 80);
  });

  window.addEventListener('orientationchange', function(){
    setTimeout(hardTop, 80);
    setTimeout(hardTop, 220);
  });
})();