(function(){
  try {
    if (history && 'scrollRestoration' in history) history.scrollRestoration = 'manual';
  } catch (e) {}
})();