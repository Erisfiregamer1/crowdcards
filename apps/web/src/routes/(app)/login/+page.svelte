<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import { messageAction } from "svelte-legos";
  import { default as ParticleNetwork } from "canvas-particle-network"
  import Swal from "sweetalert2";
  import { Button } from "$components/ui/button";
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$components/ui/card";
  import { Input } from "$components/ui/input";
  import { Label } from "$components/ui/label";

  $: title = `CrowdCards - Login (NEW)`;

  const abortController = new AbortController(); // Used to cancel the Webauthn call we use later

  const registerEndpoint = "https://crowdcards-api.glitch.me/webauthn/register";
  const verifyRegisterEndpoint = "https://crowdcards-api.glitch.me/webauthn/register/verify";
  const authenticateEndpoint = "https://crowdcards-api.glitch.me/webauthn/authenticate";
  const verifyAuthenticateEndpoint = "https://crowdcards-api.glitch.me/webauthn/authenticate/verify";

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

  async function loginWithWebauthn() {
    let hasShownError = false;

    abortController.abort(); // Stop Conditional UI so we can authenticate error-less

    try {
      let userUUID2 = await fetch("https://crowdcards-api.glitch.me/api/getUUID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: document.getElementById("username").value,
          usertype: 1,
        }),
      });

      let userUUID = await userUUID2.text();

      console.log(userUUID);

      const response = await fetch(authenticateEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userUUID }),
      });
      const opts = await response.text();

      console.log(opts);

      const options = JSON.parse(opts);

      console.log(JSON.stringify(options.allowCredentials) === JSON.stringify([]));

      options.challenge = base64UrlToUint8Array(options.challenge);

      if (JSON.stringify(options.allowCredentials) === JSON.stringify([]) && userUUID !== "") {
        showMessage("error", "Passwordless not registered!");

        hasShownError = true;

        throw "Atempted to auth as non-passwordless user";
      } else if (JSON.stringify(options.allowCredentials) === JSON.stringify([]) && userUUID === "") {
        showMessage("error", "No passwordless accounts available!");

        hasShownError = true;

        throw "Nobody is passwordless :skull:";
      }

      options.allowCredentials = options.allowCredentials.map((credential) => {
        return {
          ...credential,
          id: base64UrlToArrayBuffer(credential.id),
        };
      });

      // Use web browser's WebAuthn support for authentication
      const credential = await navigator.credentials.get({ publicKey: options });

      console.log(credential);

      const attestationResponse = {
        rawId: arrayBufferToBase64Url(credential.rawId),
        id: credential.id,
        type: credential.type,
        response: {
          authenticatorData: arrayBufferToBase64Url(credential.response.authenticatorData) + "=",
          signature: arrayBufferToBase64Url(credential.response.signature) + "=",
          clientDataJSON: arrayBufferToBase64Url(credential.response.clientDataJSON),
        },
      };

      // Send the authentication result to the server
      const authResult = await fetch(verifyAuthenticateEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userUUID, attestationResponse }),
      });

      const resp = await authResult.json();
      const authToken = resp.res.session;
      const uuid = resp.res.uuid;

      localStorage.setItem("sessionToken", authToken);
      localStorage.setItem("uuid", uuid);
      document.getElementById("login-btn").innerHTML = "Profile";
      document.getElementById("login-btn").href = "/profile";
      showMessage("success", "Successfully logged in!");
      // Display filler page while logged in
      goto("/");
    } catch (error) {
      console.error("Error during authentication:", error);

      if (hasShownError === false) {
        showMessage("error", "Authentication failed!");
      }
    }
  }

  function loginWithGoogle() {
    authflow.login({ app_name: "CrowdCards (Google Login via Authflow)", redirect: "https://crowdcards.glitch.me/authflow" });
  }

  function loginNormally() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
      showMessage("error", "Please provide a username and password!");
      return
    }

    // Make a GET request to the /api/getUUID endpoint to retrieve the user's UUID
    fetch("https://crowdcards-api.glitch.me/api/getUUID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        usertype: 1,
      }),
    })
      .then((response) => {
        return response.text();
      })
      .then((uuid) => {
        // If UUID is returned, make a POST request to the /api/startSession endpoint to start a new session
        if (uuid) {
          fetch("https://crowdcards-api.glitch.me/api/startSession", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              UUID: uuid,
              password: password,
              logintype: 1,
            }),
          })
            .then((response) => {
              // If the response status is 400 (Bad Request), display an error message
              if (response.status === 400) {
                showMessage("error", "Invalid username / password!");
              }
              // Otherwise, return the response as text (the session token)
              else if (response.status === 403) {
                Swal.fire({
                  icon: "error",
                  title: "Banned!",
                  text: "This account has been banned from CrowdCards. See the TOS for more information.",
                  showCancelButton: true,
                  confirmButtonText: "Aw, man!",
                  cancelButtonText: "Open TOS",
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isDenied) {
                    window.location.href = "https://cdn.glitch.global/d24a8d52-d1f8-43e5-a4b9-2b8939c0a945/CrowdCards%20TOS%20planning.pdf?v=1675547587832";
                  }
                });
              } else {
                return response.text();
              }
            })
            .then((sessionToken) => {
              // If session token is returned, store it in local storage along with the user's UUID
              if (sessionToken) {
                localStorage.setItem("uuid", uuid);
                localStorage.setItem("sessionToken", sessionToken);

                document.getElementById("login-btn").innerHTML = "Profile";
                document.getElementById("login-btn").href = "/profile";
                showMessage("success", "Successfully logged in!");
                // Display filler page while logged in
                goto("/");
              }
              // If no UUID is returned, display an error message
              else {
                showMessage("error", "Invalid username / password!");
              }
            });
        } else {
          showMessage("error", "Invalid username / password!");
        }
      });
  }

  function loginWithErisWS() {
    showMessage("info", "This option is not implemented!");
  }

  function switchToCreateAccount() {
    goto("/makeaccount");
  }

  function showMessage(type, text) {
    const oldElement = document.getElementById("modallogin");
    const newElement = oldElement.cloneNode(true);
    document.getElementById("hmmlogin").appendChild(newElement);
    document.getElementById("hmmlogin").removeChild(oldElement);

    messageAction(newElement, {
      message: text,
      type: type,
    });

    newElement.click();
  }

  onMount(async () => {
      var options = {
        particleColor: "#F2F2F2",
        background: "#222",
        speed: "high",
        density: "medium",
        interactive: false,
      };
      var particleCanvas = new ParticleNetwork(document.getElementById("backgroundlogin"), options);

      document.getElementById("backgroundlogin").style = null;

    if (window.PublicKeyCredential && PublicKeyCredential.isConditionalMediationAvailable) {
      // Check if conditional mediation is available.
      const isCMA = await PublicKeyCredential.isConditionalMediationAvailable();
      console.log(isCMA);

      if (isCMA) {
        let allowedAuth = false;

        try {
          let userUUID2 = await fetch("https://crowdcards-api.glitch.me/api/getUUID", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: document.getElementById("login-username").value,
              usertype: 1,
            }),
          });

          let userUUID = await userUUID2.text();

          const response = await fetch(authenticateEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userUUID }),
          });
          const options = await response.json();

          options.challenge = base64UrlToUint8Array(options.challenge);

          options.allowCredentials = options.allowCredentials.map((credential) => {
            return {
              ...credential,
              id: base64UrlToArrayBuffer(credential.id),
            };
          });

          // Use web browser's WebAuthn support for authentication
          const credential = await navigator.credentials.get({ publicKey: options, mediation: "conditional", signal: abortController.signal });

          const attestationResponse = {
            rawId: arrayBufferToBase64Url(credential.rawId),
            id: credential.id,
            type: credential.type,
            response: {
              authenticatorData: arrayBufferToBase64Url(credential.response.authenticatorData) + "=",
              signature: arrayBufferToBase64Url(credential.response.signature) + "=",
              clientDataJSON: arrayBufferToBase64Url(credential.response.clientDataJSON),
            },
          };

          allowedAuth = true;

          // Send the authentication result to the server
          const authResult = await fetch(verifyAuthenticateEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userUUID, attestationResponse }),
          });

          const resp = await authResult.json();
          const authToken = resp.res.session;
          const uuid = resp.res.uuid;

          localStorage.setItem("sessionToken", authToken);
          localStorage.setItem("uuid", uuid);
          document.getElementById("login-btn").innerHTML = "Profile";
          document.getElementById("login-btn").href = "/profile";
          showMessage("success", "Successfully logged in!");
          // Display filler page while logged in
          goto("/");
        } catch (error) {
          if (allowedAuth === true) {
            console.error("Error during authentication:", error);
            showMessage("error", "Failed to authenticate with the server!");
          }
        }
      }
    }
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div id="hmmlogin">
  <div id="modallogin" />
  <!-- An empty div for shenanagins involving le funny messageAction -->
</div>

<div id="a" class="relative overflow-hidden">
  <div id="backgroundlogin" class="absolute h-screen w-screen" />

  <Card class="relative	z-[900] bg-transparent text-white">
    <CardHeader class="space-y-1">
      <CardTitle class="text-2xl">Login to an account</CardTitle>
      <CardDescription>Choose your login method.</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="grid grid-cols-3 gap-4">
        <Button variant="outline" class="bg-slate-950" on:click={loginWithGoogle}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="The Google logo" class="mr-2 h-4 w-4" />
          <img src="https://authflow.glitch.me/assets/favicon.svg" alt="The Authflow logo" class="mr-2 h-4 w-4" />
          Google (Via Authflow)
        </Button>
        <Button variant="outline" class="bg-slate-950" on:click={loginWithWebauthn}>Passwordless via Webauthn</Button>
        <Button variant="outline" class="bg-slate-950" on:click={loginWithErisWS}>
          <img class="mr-2 h-4 w-4" alt="The empty ErisWS logo" />

          ErisWS
        </Button>
      </div>

      <Button variant="outline" class="bg-slate-950" on:click={switchToCreateAccount}>Switch to creating account</Button>

      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="text-muted-foreground bg-[#222] px-2 text-white"> Or continue with </span>
        </div>
      </div>
      <div class="grid gap-2">
        <Label for="username">Username</Label>
        <Input id="username" type="username" autocomplete="username webauthn" class="bg-[#222]" required/>
      </div>
      <div class="grid gap-2">
        <Label for="password">Password</Label>
        <Input id="password" type="password" autocomplete="password webauthn" class="bg-[#222]" required/>
      </div>
    </CardContent>
    <CardFooter class="pb-0">
      <Button class="w-full" on:click={loginNormally}>Login</Button>
    </CardFooter>
  </Card>
</div>
