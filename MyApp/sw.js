<script>
    // Registra il service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then(() => console.log("Service Worker registrato!"))
        .catch(err => console.error("Errore SW:", err));
    }
  </script>