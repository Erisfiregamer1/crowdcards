<script>
  import confetti from "canvas-confetti";
  import { onMount } from "svelte";

  onMount(async () => {
    // launch some confetti from the left
    confetti({
      particleCount: 150,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.9 },
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 150,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.9 },
    });
    // For good measure, spawn some confetti from the middle
    confetti({
      particleCount: 150,

      origin: { y: 0.9 },
    });
  });

  $: title = `CrowdCards - Success!`;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1 class="text-3xl">GG!</h1>

<br />
<br />

<div>
  Your purchase was sucessful! The card should be on your profile momentarily.
  <br />
  <br />
  Thank you for playing CrowdCards.
</div>
