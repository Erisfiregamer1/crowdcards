<script lang="ts">
  import { useRegisterSW } from "virtual:pwa-register/svelte";

  import { get } from "svelte/store";

  // replaced dynamically
  let buildDate = __DATE__;
  let reloadSW = __RELOAD_SW__;

  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
    onRegistered(r) {
      if (reloadSW) {
        r &&
          setInterval(() => {
            console.log("Checking for SW update");
            r.update();
          }, 20000);
      } else {
        console.log(`SW Registered: ${r}`);
      }
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  offlineReady.subscribe((offlr) => {
    if (offlr === true) {
      console.log("[DEV] Site ready to work offline!");
    }
  });
  needRefresh.subscribe((neerf) => {
    if (neerf === true) {
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
    }
  });
</script>
