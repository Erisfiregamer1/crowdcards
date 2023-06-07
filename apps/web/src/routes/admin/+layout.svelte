<script lang="ts">
  import "../../app.css";
  import { onMount } from "svelte";
  import { pwaInfo } from "virtual:pwa-info";
  import { page } from "$app/stores";
  import Swal from "sweetalert2"
  import { goto } from "$app/navigation";

  let ReloadPrompt;
  onMount(async () => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/prompt-sw.js", { scope: "/" });

        let isControlled = Boolean(navigator.serviceWorker.controller);

        navigator.serviceWorker.addEventListener("controllerchange", () => {
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
      });
    }

    goto(`/${window.location.href.match(new RegExp("(?<=https://.*/).*"))}`);
  });

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

<nav class="font-roboto flex items-center justify-between bg-[#333] px-2.5 py-[7px] text-white" id="b">
  <div class="flex items-center">
    <a href="/">
      <img class="mr-[30px] inline-block h-auto w-[3.12rem]" src="/cclogo-layout.svg" alt="Logo" />
    </a>
    <div class="space-x-3.5">
      <a href="/admin/add_card">Create Card (Admin)</a>
      <a href="/admin/pending_cards">View Cards To Be Approved</a>
      <a href="/admin/agui">Administration GUI</a>
    </div>
  </div>
  <div class="mr-3">
    <a href="/" id="return">Return to CrowdCards</a>
  </div>
</nav>
<br />

<div class="border-2 border-transparent">
  <slot />
</div>
