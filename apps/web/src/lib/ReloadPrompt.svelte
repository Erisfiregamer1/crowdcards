<script lang="ts">
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/prompt-sw.js', { scope: '/' })
      
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
