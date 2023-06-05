<script>
  import { onMount } from "svelte";

  import { page } from "$app/stores";
  import { browser } from "$app/environment";

  let uuid = "";

  let ownedcards = 0;
  let madecards = 0;
  let ownedcardsplural = "s";
  let madecardsplural = "s";

  const searchParams = browser && $page.url.searchParams;
  onMount(() => {
    uuid = searchParams.get("uuid") || localStorage.getItem("uuid");
    fetch("https://crowdcards-api.glitch.me/api/getUserData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UUID: searchParams.get("uuid") || localStorage.getItem("uuid"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        ownedcards++;
        document.getElementById("username").innerHTML = data.USERNAME;
        document.getElementById("uuid").innerHTML = searchParams.get("uuid") || localStorage.getItem("uuid");

        if (ownedcards === 1) {
          ownedcardsplural = "";
        }

        if (madecards === 1) {
          madecardsplural = "";
        }
      });
  });
  $: title = `CrowdCards - Profile (${uuid})`;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="flexbox-container">
  <div class="flexbox-item flexbox-stretch">
    <div class="flexbox-column">
      <div class="debug-background">
        <div class="image-container">
          <img class="circle-image" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="User" />
        </div>
      </div>
    </div>
    <div class="flexbox-item flexbox-stretch flexbox-column">
      <div class="debug-background" id="username">[Loading]</div>
      <div class="debug-background" />
      <div class="debug-background" />
      <div class="debug-background" id="uuid">[Loading]</div>
    </div>
    <div class="flexbox-item flexbox-stretch flexbox-column">
      <div class="debug-background" id="owned">Owns {ownedcards} card{ownedcardsplural}</div>
      <div class="debug-background" />
      <div class="debug-background" />
      <div class="debug-background" id="created">Created {madecards} card{madecardsplural}</div>
    </div>
  </div>
  <div class="flexbox-item flexbox-stretch flexbox-column">
    <div class="debug-background">Owned cards:</div>
    <div class="debug-background" id="cardiv" />
  </div>
  <div class="flexbox-item flexbox-stretch flexbox-column">
    <div class="debug-background">Created cards:</div>
    <div class="debug-background" id="cardiv2" />
  </div>
</div>

<style>
  .flexbox-container {
    display: flex;

    width: 100%;
    flex-direction: column;
  }

  .flexbox-item {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: 10px;
  }

  .flexbox-stretch {
    flex: 1 1 0%;
  }

  .image-container {
    border: 2px solid black;
    border-radius: 50%;
    overflow: hidden;

    margin-right: 10px;
  }

  .circle-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .flexbox-column {
    display: flex;
    flex-direction: column;
  }

  .debug-background {
    padding: 10px;
  }
</style>
