<script lang="ts">
  import "../../app.css";
  import { onMount } from "svelte";
  import { pwaInfo } from "virtual:pwa-info";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  let ReloadPrompt;
  onMount(async () => {
    goto(`/${window.location.href.match(new RegExp("(?<=https://.*/).*"))}`);
    pwaInfo && (ReloadPrompt = (await import("$lib/ReloadPrompt.svelte")).default);
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

{#if ReloadPrompt}
  <svelte:component this={ReloadPrompt} />
{/if}
