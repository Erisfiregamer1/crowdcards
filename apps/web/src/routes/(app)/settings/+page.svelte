<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  const registerEndpoint = "https://crowdcards-api.glitch.me/webauthn/register";
  const verifyRegisterEndpoint = "https://crowdcards-api.glitch.me/webauthn/register/verify";
  const authenticateEndpoint = "https://crowdcards-api.glitch.me/webauthn/authenticate";
  const verifyAuthenticateEndpoint = "https://crowdcards-api.glitch.me/webauthn/authenticate/verify";

  function enablenotifs() {
    if (!("Notification" in window)) {
      Swal.fire({
        icon: "error",
        title: "Not supported!",
        text: "Apologies, but this browser doesn't support notifications yet.",
      });
    } else if (Notification.permission === "granted") {
      Swal.fire({
        icon: "info",
        title: "Already enabled!",
        text: "You already gave us notification permissions. No need to give them to us again!",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const notification = new Notification("Thanks!", {
            body: "You've enabled notifications for CrowdCards! We'll send you notifications when stuff happens (Namely, your cards have a status change).",
            icon: "https://cdn.glitch.com/560ed5ed-9d00-433a-9ff9-7750d79d13da%2FGlitch_TeamAvatar.png",
          });

          Swal.fire({
            icon: "success",
            title: "Enabled!",
            text: "Notifications enabled! You should see one right now. :)",
          });
        }
      });
    }
  }

  function logout() {
    localStorage.removeItem("uuid");
    localStorage.removeItem("sessionToken");
    document.getElementById("login-btn").innerHTML = "Login";
    document.getElementById("login-btn").href = "/login";

    Swal.fire({
      icon: "success",
      title: "Logged out!",
      text: "You've been logged out. You can now log in again.",
    });

    goto("/"); // Return to main page to prevent problems.
  }

  function arrayBufferToBase64Url(arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    const base64 = btoa(String.fromCharCode.apply(null, byteArray));
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  function base64UrlToArrayBuffer(base64Url) {
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  }

  function base64UrlToUint8Array(base64Url) {
    const padding = "=".repeat((4 - (base64Url.length % 4)) % 4);
    const base64 = (base64Url + padding).replace(/-/g, "+").replace(/_/g, "/");

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  async function register() {
    let userUUID = localStorage.getItem("uuid");

    try {
      const stoken = localStorage.getItem("sessionToken");

      const response = await fetch(registerEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userUUID, stoken }),
      });
      const options = await response.json();

      options.challenge = base64UrlToUint8Array(options.challenge);
      options.user.id = base64UrlToUint8Array(options.user.id);

      options.excludeCredentials = options.excludeCredentials.map((credential) => {
        return {
          ...credential,
          id: base64UrlToArrayBuffer(credential.id),
        };
      });

      // Use web browser's WebAuthn support for registration
      const credential = await navigator.credentials.create({ publicKey: options });

      // Convert necessary ArrayBuffer properties to Base64Url strings
      const attestationResponse = {
        rawId: arrayBufferToBase64Url(credential.rawId),
        id: credential.id,
        type: credential.type,
        response: {
          clientDataJSON: arrayBufferToBase64Url(credential.response.clientDataJSON),
          attestationObject: arrayBufferToBase64Url(credential.response.attestationObject),
        },
      };

      // Send the registration result to the server
      const newsession = await fetch(verifyRegisterEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userUUID, attestationResponse }),
      });

      localStorage.setItem("sessionToken", await newsession.text());

      Swal.fire({
        icon: "success",
        title: "Added!",
        text: 'The authenticator was sucessfully added! You can now log in using the "Use Passwordless Auth" button on the login page.',
      });
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire({
        icon: "error",
        title: "Whoops...",
        text: "Something went wrong adding the authenticator. This could have many causes- you might have timed out or the API is down. Try again!",
      });
    }
  }

  $: title = `CrowdCards - Settings`;

  onMount(async () => {
    if (!localStorage.getItem("sessionToken")) {
      await Swal.fire({
        icon: "error",
        title: "Not logged in!",
        text: "You're not logged in! Log in to access your settings.",
      });

      goto("/"); // Return to main page to prevent problems.
    }
  });
</script>

<button on:click={register} class="mb-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"> Register Passwordless Authenticator </button>
<br />
<br />
<button on:click={logout} class="mb-4 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"> Log Out </button>
<button on:click={enablenotifs} class="hover:bg-red-green mb-4 rounded bg-green-500 px-4 py-2 font-bold text-white"> Enable Notifications </button>

<!--<form id="settings">
  <br />
  <br />
  <button type="submit" class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800">
    <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"> Save </span>
  </button>
</form>-->
