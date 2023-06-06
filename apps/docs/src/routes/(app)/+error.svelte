<script>
  import { page } from "$app/stores";
  $: title = `CrowdCards - Whoops`;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1 class="text-5xl">Oops!</h1>
<br />
<div>
  Something went wrong. This page probably isn't coded or has errors. :(
  <br />
  The particular error returned was {$page.status}: {$page.error.message}
</div>
