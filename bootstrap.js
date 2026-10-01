(function () {
  'use strict';
  const status = document.getElementById('boot-status');

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      const timer = setTimeout(function () {
        script.remove();
        reject(new Error('Timed out loading ' + src));
      }, 1200);
      script.onload = function () { clearTimeout(timer); resolve(); };
      script.onerror = function () { clearTimeout(timer); reject(new Error('Could not load ' + src)); };
      document.head.appendChild(script);
    });
  }

  async function boot() {
    let runtime = 'react';
    try {
      if (!navigator.onLine) throw new Error('Device is offline.');
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js');
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js');
      if (!window.React || !window.ReactDOM || !window.ReactDOM.createRoot) throw new Error('React did not initialize.');
    } catch (error) {
      runtime = 'offline-fallback';
      console.info('Using local offline UI runtime.', error);
      window.React = undefined;
      window.ReactDOM = undefined;
      await loadScript('./vendor/react-lite.js');
      await loadScript('./vendor/react-dom-lite.js');
    }
    document.documentElement.dataset.runtime = runtime;
    await loadScript('./app.js');
    if (status) status.remove();
  }

  boot().catch(function (error) {
    console.error(error);
    if (status) {
      status.innerHTML = '<strong>Nihongo Trip could not start.</strong><br>Please reload the page.';
      status.className = 'boot-error';
    }
  });
})();
