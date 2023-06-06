<script>
  import { onMount } from "svelte";
  import Swal from "sweetalert2";
  $: title = `CrowdCards - Add Card`;

  onMount(() => {
    const form = document.querySelector("form");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const svgFile = document.getElementById("svg").files[0];
      const UUID = localStorage.getItem("uuid");
      const stoken = localStorage.getItem("sessionToken");

      if (UUID && stoken) {
        // read the file content
        const fileReader = new FileReader();
        fileReader.readAsText(svgFile, "UTF-8");
        fileReader.onload = async function (event) {
          const svg = event.target.result;
          const type = document.getElementById("types").value;
          const rarity = document.getElementById("rarity").value;
          const data = { name, type, rarity, svg, UUID, stoken };
          fetch("https://crowdcards-api.glitch.me/api/addCard", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((response) => response.text())
            .then((result) => {
              console.log(result);
              const rxp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
              const lololololololol = rxp.test(result);
              if (lololololololol === true) {
                Swal.fire({
                  title: "Success!",
                  text: `Your card has been uploaded! Its UUID is ${result}.`,
                  icon: "success",
                  confirmButtonText: `<a href=//crowdcards.glitch.me/view_card.html?cuuid=${result}>Let me see it!</a>`,
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Uh oh!",
                  text: `Something went wrong uploading your card, sorry! The error was ${result}.`,
                  confirmButtonText: ":(",
                });
              }
            })
            .catch((error) => {
              alert("An error occured! Error:" + error);
            });
        };
      } else {
        alert("You haven't logged in yet! Log in before you can upload a card to CrowdCards.");
      }
    });
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<form id="form">
  <label>
    Card name:
    <input type="text" class="rounded-sm text-black" id="name" required />
  </label>
  <br />
  <br />
  <label>
    Card file (Must be SVG):
    <input type="file" id="svg" accept=".svg" required />
  </label>
  <br />
  <br />
  <label>
    Card type:
    <select name="types" class="bg-white text-black" id="types">
      <option value="1">Player</option>
      <option value="2">Ability</option>
      <option value="3">Item</option>
    </select>
  </label>
  <br />
  <br />
  <label>
    Card rarity:
    <select name="rarity" class="bg-white text-black" id="rarity">
      <option value="1">Common</option>
      <option value="2">Uncommon</option>
      <option value="3">Rare</option>
      <option value="4">Epic</option>
      <option value="5">Legendary</option>
      <!--<option value="6">Mythic</option>-->
    </select>
  </label>
  <br />
  <br />
  <button type="submit" class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-400 to-yellow-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-200 group-hover:from-red-400 group-hover:to-orange-600 dark:text-white dark:focus:ring-red-800">
    <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"> Submit (Send your card to the API) </span>
  </button>
</form>
