<script lang="ts">
  if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/prompt-sw.js', { scope: '/' })
  })
    
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    Swal.fire({
        title: "Refresh required!",
        text: "New site content has been loaded! To see it, you'll have to refresh the site.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Refresh now",
        cancelButtonText: "Refresh later",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
});
}
</script>
