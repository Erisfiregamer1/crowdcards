<script lang="ts">
  import "../../app.css";
  import { onMount } from "svelte";
  import { pwaInfo } from "virtual:pwa-info";
  import Swal from "sweetalert2";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { fade } from "svelte/transition";

  export let data;

  let ReloadPrompt;
  onMount(async () => {
    goto(`/${window.location.href.match(new RegExp("(?<=https://.*/).*"))}`);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/prompt-sw.js").then((reg) => {
        console.log("Service worker registered / loaded, registration is", reg);

        reg.addEventListener("updatefound", () => {
          console.log("Service Worker update found!");
          const b = document.getElementById("status");
          b.innerHTML = "Installing...";
        });

        setInterval(function () {
          console.log("Checking for updates...");
          reg.update();
        }, 30000);
      });

      let isControlled = Boolean(navigator.serviceWorker.controller);

      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (isControlled) {
          const b = document.getElementById("status");
          b.innerHTML = "";

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
          const b = document.getElementById("status");
          b.innerHTML = "";

          isControlled = true;
        }
      });
    }

    window.addEventListener("offline", (e) => {
      console.log(navigator.onLine, navigator.online);
      const b = document.getElementById("offline");
      b.innerHTML = "You are offline!";
    });

    window.addEventListener("online", (e) => {
      console.log(navigator.onLine, navigator.online);
      const b = document.getElementById("offline");
      b.innerHTML = "";
    });

    if (navigator.onLine === false) {
      console.log(navigator.onLine, navigator.online);
      const b = document.getElementById("offline");
      b.innerHTML = "You are offline!";
    }

    const uuid = localStorage.getItem("uuid");
    const sessionToken = localStorage.getItem("sessionToken");
    if (uuid && sessionToken) {
      fetch("https://crowdcards-api.glitch.me/api/checkSession", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UUID: uuid,
          stoken: sessionToken,
        }),
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          if (data === "001") {
            // If session is valid, display filler page while logged in
            document.getElementById("login-btn").innerHTML = "Profile";
            document.getElementById("login-btn").href = "/profile";
          }
          // If session is invalid, remove session token and UUID from local storage
          else {
            localStorage.removeItem("uuid");
            localStorage.removeItem("sessionToken");
          }
        });
    }

    const admin = document.getElementById("admin");
    const ap = localStorage.getItem("admin_password");
    if (ap) {
      fetch("https://crowdcards-api.glitch.me/api/checkAdminPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: ap,
        }),
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          if (!data === "001") {
            localStorage.removeItem("admin_password");
          } else {
            admin.innerHTML = `Admin`;
          }
        });
    }
  });

  function openSettings() {
    if (!localStorage.getItem("sessionToken")) {
      Swal.fire({
        icon: "error",
        title: "Not logged in!",
        text: "You're not logged in! Log in to access your settings.",
      });
    } else {
      goto("/settings");
    }
  }

  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
  {@html webManifest}
</svelte:head>

<nav class="font-roboto flex items-center justify-between bg-[#333] px-2.5 py-[7px] text-white" id="a">
  <div class="flex items-center">
    <a href="/">
      <img class="mr-[30px] inline-block h-auto w-[3.12rem]" src="/cclogo-layout.svg" alt="Logo" />
    </a>
    <div class="space-x-3.5">
      <a href="/add_card">Create Card</a>
      <a href="/new_cards">View Community Cards</a>
      <a href="/verified_cards">View Approved Cards</a>
    </div>
  </div>
  <div class="mr-3 flex">
    <div id="status" role="status" aria-label="The installing notice for this site's service worker." />
    <a href="/offline" role="status" id="offline" class="ml-2 mr-2 text-red-800" aria-label="The offline button that appears when the site is disconnected from the internet." />

    <a href="/login" id="login-btn"> Login </a>
    <a href="javascript:void(0)" id="settings" on:click={openSettings}><img class="ml-[20px] inline-block h-auto w-[1.5rem]" src="https://cdn.glitch.global/3de90402-af4c-426a-b746-6b7cb6f31203/139-1393405_file-gear-icon-svg-wikimedia-commons-gear-icon-removebg-preview.png" alt="Settings" /></a>
  </div>
</nav>

<br />

{#key data.pathname}
  <div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }} class="border-2 border-transparent text-white" id="c">
    <slot />
  </div>
{/key}
