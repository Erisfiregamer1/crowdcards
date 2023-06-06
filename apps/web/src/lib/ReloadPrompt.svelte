<script lang="ts">
  if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    let reg = await navigator.serviceWorker.register('/prompt-sw.js', { scope: '/' })
    navigator.serviceWorker.addEventListener('controllerchange', () => {
  window.location.reload();
});
  })
</script>
