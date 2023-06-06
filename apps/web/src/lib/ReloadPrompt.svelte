<script lang="ts">
  import Swal from sweetalert2
  
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/prompt-sw.js', { scope: '/' })
      
      let isControlled = Boolean(navigator.serviceWorker.controller);

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (isControlled) {
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
    } else {
      isControlled = true;
    }
  });

    })
  }
</script>
