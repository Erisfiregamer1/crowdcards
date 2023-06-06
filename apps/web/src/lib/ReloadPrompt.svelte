<script lang="ts">
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const registration = await navigator.serviceWorker.register('/prompt-sw.js', { scope: '/' })
      
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
      
      let isControlled = Boolean(navigator.serviceWorker.controller);

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (isControlled) {
      window.location.reload();
    } else {
      isControlled = true;
    }
  });

    })
  }
</script>
