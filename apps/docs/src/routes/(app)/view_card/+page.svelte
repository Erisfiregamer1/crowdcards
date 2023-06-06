<script>
  import { onMount } from "svelte";
  import Swal from "sweetalert2";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  const searchParams = browser && $page.url.searchParams;
  $: title = `CrowdCards - View Card`;
  onMount(() => {
    fetch("https://crowdcards-api.glitch.me/api/getCardData", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Get the root element
        const root = document.getElementById("root");
        console.log(root);
        // Iterate over the card data and create a card element for each card
        for (const cardId in data) {
          const card = data[cardId];
          let cuuid = searchParams.get("cuuid");

          if (cuuid === cardId) {
            let voted = false;
            const v1 = document.getElementById("value1");
            const v2 = document.getElementById("value2");
            const v3 = document.getElementById("value3");
            const v4 = document.getElementById("value4");
            const v5 = document.getElementById("value5");
            v1.innerHTML = `UUID: ${cardId}`;
            v2.innerHTML = `Creator UUID: ${card.uploader}`;
            if (card.score > 0) {
              v3.innerHTML = `Current score: <font color="green">${card.score}</font>`;
            } else if (card.score === 0) {
              v3.innerHTML = `Current score: <font color="white">${card.score}</font>`;
            } else if (card.score < 0) {
              v3.innerHTML = `Current score: <font color="red">${card.score}</font>`;
            }
            if (card.status === 0) {
              v4.innerHTML = `Current status: In Community queue`;
            } else if (card.status === 1) {
              v4.innerHTML = `Current status: In Administration queue`;
            } else if (card.status === 2) {
              v4.innerHTML = `Current status: Approved!`;
              v5.innerHTML = `Reason: ${card.reason}`;
            } else if (card.status === 3) {
              v4.innerHTML = `Current status: DENIED.`;
              v5.innerHTML = `Reason: ${card.reason}`;
            }
            // Create the card element and wipe the "Please wait"
            if (localStorage.getItem("uuid") && card.spid) {
              const qr = document.getElementById("REPLACE_ME");
              qr.innerHTML = `
          <form action="https://crowdcards-api.glitch.me/api/purchase-card?cuuid=${cuuid}&uuid=${localStorage.getItem("uuid")}" method="POST">
        <button type="submit" class="text-white-900 bg-[#5539cc] hover:bg-[#5539cc]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/25 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/25 mr-2 mb-2">
  <img class="w-7 h-7 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="stripe" role="img" src="https://cdn.glitch.global/706b2edd-9a0c-4d84-82d3-abcf8d553bfe/1200x630wa-removebg-preview.png?v=1681397868135"/>
  Purchase with Stripe
</button>
      </form>`;
            }
            root.innerHTML = ``;

            const cardEl = document.createElement("div");
            cardEl.classList.add("card");
            cardEl.innerHTML = `
      <div class="card-header"><img id="upvote", src="https://cdn.glitch.global/d24a8d52-d1f8-43e5-a4b9-2b8939c0a945/green-thumbs-up-11246.svg"/>${card.name}<img id="downvote", src="https://cdn.glitch.global/d24a8d52-d1f8-43e5-a4b9-2b8939c0a945/thumbs-down-14924.svg"/></div>
        <div class="card-content">
          <svg></svg>
        </div>
      `;
            const bruh = cardEl.getElementsByClassName("card-header")[0];
            const upvote = cardEl.querySelector("#upvote");
            const downvote = cardEl.querySelector("#downvote");
            upvote.classList.toggle("expanded");
            downvote.classList.toggle("expanded");

            cardEl.classList.toggle("expanded");
            bruh.classList.toggle("expanded");
            // Get the svg element
            const svg = cardEl.querySelector("svg");
            // set the svg data
            svg.innerHTML = card.data;
            // Get the bounding box of the SVG element and set the viewBox attribute
            requestAnimationFrame(() => {
              const bbox = svg.getBBox();
              svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
            });

            downvote.addEventListener("click", () => {
              if (voted === false) {
                Swal.fire({
                  icon: "question",
                  text: "Are you sure you want to downvote this card? There is no way to reverse this!",
                  showCancelButton: true,
                  confirmButtonText: "Downvote",
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    fetch("https://crowdcards-api.glitch.me/api/downvoteCard", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        CUUID: cardId,
                        UUID: localStorage.getItem("uuid"),
                        stoken: localStorage.getItem("sessionToken"),
                      }),
                    })
                      .then((response) => {
                        return response.text();
                      })
                      .then((data) => {
                        if (data.startsWith("001")) {
                          voted = true;
                          if (card.score - 1 > 0) {
                            v3.innerHTML = `Current score: <font color="green">${card.score - 1}</font>`;
                          } else if (card.score - 1 === 0) {
                            v3.innerHTML = `Current score: <font color="white">${card.score - 1}</font>`;
                          } else if (card.score - 1 < 0) {
                            v3.innerHTML = `Current score: <font color="red">${card.score - 1}</font>`;
                          }
                          Swal.fire("You have downvoted this card!", "", "success");
                        } else if (data === "003-0004") {
                          voted = true;
                          Swal.fire({
                            icon: "error",
                            title: "Oops!",
                            text: "You already voted on this card! Sorry about that.",
                          });
                        } else {
                          Swal.fire(`Something went wrong downvoting the card! The error message was ${data}.`, "", "error");
                        }
                      });
                  }
                });
              } else if (voted === true) {
                Swal.fire({
                  icon: "error",
                  title: "Oops!",
                  text: "You already voted on this card! Sorry about that.",
                });
              }
            });

            upvote.addEventListener("click", () => {
              if (voted === false) {
                Swal.fire({
                  icon: "question",
                  text: "Are you sure you want to upvote this card? There is no way to reverse this!",
                  showCancelButton: true,
                  confirmButtonText: "Upvote",
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    fetch("https://crowdcards-api.glitch.me/api/upvoteCard", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        CUUID: cardId,
                        UUID: localStorage.getItem("uuid"),
                        stoken: localStorage.getItem("sessionToken"),
                      }),
                    })
                      .then((response) => {
                        return response.text();
                      })
                      .then((data) => {
                        if (data.startsWith("001")) {
                          voted = true;
                          if (card.score + 1 > 0) {
                            v3.innerHTML = `Current score: <font color="green">${card.score + 1}</font>`;
                          } else if (card.score + 1 === 0) {
                            v3.innerHTML = `Current score: <font color="white">${card.score + 1}</font>`;
                          } else if (card.score + 1 < 0) {
                            v3.innerHTML = `Current score: <font color="red">${card.score + 1}</font>`;
                          }
                          Swal.fire("You have upvoted this card!", "", "success");
                        } else if (data === "003-0004") {
                          voted = true;
                          Swal.fire({
                            icon: "error",
                            title: "Oops!",
                            text: "You already voted on this card! Sorry about that.",
                          });
                        } else {
                          Swal.fire(`Something went wrong upvoting the card! The error message was ${data}.`, "", "error");
                        }
                      });
                  }
                });
              } else if (voted === true) {
                Swal.fire({
                  icon: "error",
                  title: "Oops!",
                  text: "You already voted on this card! Sorry about that.",
                });
              }
            });

            // Append the card element to the root element
            root.appendChild(cardEl);
          }
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
    <div id="value1">UUID:</div>
    <div id="value2">Creator UUID:</div>
    <div id="value3">Current score:</div>
    <br />
    <div id="value4">Current status:</div>
    <div id="value5" />
    <br />
    <br />
    <div id="REPLACE_ME" />
  </div>
</div>
