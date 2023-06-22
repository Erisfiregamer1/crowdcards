<script>
  import { onMount } from "svelte";
  import Swal from "sweetalert2";
  $: title = `CrowdCards - New Cards`;
  onMount(async () => {
    fetch("https://crowdcards-api.glitch.me/api/getCardData", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Get the root element
        const root = document.getElementById("rootnc");

        // Iterate over the card data and create a card element for each card

        let loop = 0;

        for (const cardId in data) {
          const card = data[cardId];
          if (card.status === 0) {
            loop = 1;
            let voted = false;
            // Create the card element
            document.getElementById("messagelolnc").innerHTML = ``;
            const cardEl = document.createElement("div");
            cardEl.classList.add("card");
            cardEl.innerHTML = `
      <div class="card-header"><div></div><a class="flex-center" href="/view_card?cuuid=${cardId}">${card.name}</a><div></div></div>
        <div id="card-content" class="card-content">
          <svg></svg>
        </div>
      <div class="card-header"><img id="upvote", src="https://cdn.glitch.global/d24a8d52-d1f8-43e5-a4b9-2b8939c0a945/green-thumbs-up-11246.svg"/><div id="score">${card.score}</div><img id="downvote", src="https://cdn.glitch.global/d24a8d52-d1f8-43e5-a4b9-2b8939c0a945/thumbs-down-14924.svg", width="16", height="16"/></div>
      `;
            const score = cardEl.querySelector("#score");

            if (card.score > 0) {
              score.innerHTML = `<font color="green">${card.score}</font>`;
            } else if (card.score === 0) {
              score.innerHTML = `<font color="white">${card.score}</font>`;
            } else if (card.score < 0) {
              score.innerHTML = `<font color="red">${card.score}</font>`;
            }
            // Get the svg element
            const svg = cardEl.querySelector("svg");
            // set the svg data
            svg.innerHTML = card.data;
            const upvote = cardEl.querySelector("#upvote");
            const downvote = cardEl.querySelector("#downvote");

            const bruh = cardEl.getElementsByClassName("card-header")[0];
            const bruh2 = cardEl.getElementsByClassName("card-header")[1];

            // Get the bounding box of the SVG element and set the viewBox attribute
            requestAnimationFrame(() => {
              const bbox = svg.getBBox();
              svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
            });

            svg.addEventListener("click", () => {
              cardEl.classList.toggle("expanded");
              bruh.classList.toggle("expanded");
              bruh2.classList.toggle("expanded");
              upvote.classList.toggle("expanded");
              downvote.classList.toggle("expanded");
            });

            downvote.addEventListener("click", () => {
              if (!localStorage.getItem("sessionToken")) {
                Swal.fire({
                  icon: "error",
                  title: "Not logged in!",
                  text: "You're not logged in! Log in to downvote cards!",
                });
              } else if (voted === false) {
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
                            score.innerHTML = `<font color="green">${card.score - 1}</font>`;
                          } else if (card.score - 1 === 0) {
                            score.innerHTML = `<font color="white">${card.score - 1}</font>`;
                          } else if (card.score - 1 < 0) {
                            score.innerHTML = `<font color="red">${card.score - 1}</font>`;
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
                          Swal.fire({
                            text: `Something went wrong downvoting the card! The error message was ${data}.`,
                            title: "Uh oh!",
                            icon: "error",
                          });
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
              if (!localStorage.getItem("sessionToken")) {
                Swal.fire({
                  icon: "error",
                  title: "Not logged in!",
                  text: "You're not logged in! Log in to upvote cards!",
                });
              } else if (voted === false) {
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
                            score.innerHTML = `<font color="green">${card.score + 1}</font>`;
                          } else if (card.score + 1 === 0) {
                            score.innerHTML = `<font color="white">${card.score + 1}</font>`;
                          } else if (card.score + 1 < 0) {
                            score.innerHTML = `<font color="red">${card.score + 1}</font>`;
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
                          Swal.fire({
                            text: `Something went wrong upvoting the card! The error message was ${data}.`,
                            title: "Uh oh!",
                            icon: "error",
                          });
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

        if (loop === 0) {
          document.getElementById("messagelolnc").innerHTML = `<font color="red">There are no cards in this category yet! Come back later.</font>`;
        }
      });
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div id="rootnc">
  <div id="messagelolnc">Please wait... (If this is taking too long try reloading the page)</div>
</div>
