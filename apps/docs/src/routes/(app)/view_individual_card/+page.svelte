<script>
  import { onMount } from "svelte";
  import Swal from "sweetalert2";
  $: title = `CrowdCards - View Card`;
  onMount(() => {
    let params = new URLSearchParams(location.search);
    let cuuid = params.get("icuuid");
    fetch("https://crowdcards-api.glitch.me/api/getIndCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        card: cuuid,
      }),
    }).then((response) => {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then((data) => {
          const root = document.getElementById("root");
          const v1 = document.getElementById("value1");
          const v2 = document.getElementById("value2");
          const v3 = document.getElementById("value3");
          const v4 = document.getElementById("value4");
          v1.innerHTML = `Individual card UUID: ${cardId}`;
          v2.innerHTML = `Parent card UUID: ${data.parent}`;
          v3.innerHTML = `Creator UUID: ${data.uploader}`;
          v4.innerHTML = `Owner UUID: ${data.owner}`;
          // Create the card element and wipe the "Please wait"
          root.innerHTML = ``;

          const cardEl = document.createElement("div");
          cardEl.classList.add("card");
          cardEl.innerHTML = `
      <div class="card-header">${data.name}</div>
        <div class="card-content">
          <svg></svg>
        </div>
      `;
          const bruh = cardEl.getElementsByClassName("card-header")[0];

          cardEl.classList.toggle("expanded");
          bruh.classList.toggle("expanded");
          // Get the svg element
          const svg = cardEl.querySelector("svg");
          // set the svg data
          svg.outerHTML = data.data;
          // Get the bounding box of the SVG element and set the viewBox attribute
          requestAnimationFrame(() => {
            const bbox = svg.getBBox();
            svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
          });

          // Append the card element to the root element
          root.appendChild(cardEl);
        });
      } else {
        return response.text().then((text) => {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "This card doesn't exist, or something went wrong. Check the card UUID in the URL and try again.",
          });
          const root = document.getElementById("root");
          const v1 = document.getElementById("value1");
          const v2 = document.getElementById("value2");
          const v3 = document.getElementById("value3");
          const v4 = document.getElementById("value4");
          root.innerHTML = `:(`;
          v1.innerHTML = `Individual card UUID: None!`;
          v2.innerHTML = `Parent card UUID: None!`;
          v3.innerHTML = `Creator UUID: None!`;
          v4.innerHTML = `Owner UUID: None!`;
        });
      }
    });
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="flex justify-between p-5">
  <div
    id="root"
    class="
w-6/12 pr-5"
  >
    <p>Please wait...</p>
  </div>
  <div
    class="
w-6/12 text-center"
  >
    <br />
    <div id="value1">Individual card UUID:</div>
    <div id="value2">Parent card UUID:</div>
    <div id="value3">Creator UUID:</div>
    <div id="value4">Owner UUID:</div>
  </div>
</div>
