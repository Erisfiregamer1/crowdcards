<script>
  import { onMount, onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  $: title = `CrowdCards - Login`;

  const abortController = new AbortController(); // Used to cancel the Webauthn call from earlier

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

  const registerEndpoint = "https://crowdcards-api.glitch.me/webauthn/register";
  const verifyRegisterEndpoint = "https://crowdcards-api.glitch.me/webauthn/register/verify";
  const authenticateEndpoint = "https://crowdcards-api.glitch.me/webauthn/authenticate";
  const verifyAuthenticateEndpoint = "https://crowdcards-api.glitch.me/webauthn/authenticate/verify";

  async function authenticate() {
    let hasShownError = false;

    abortController.abort(); // Stop Conditional UI so we can authenticate error-less

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

      console.log(userUUID);

      if (userUUID === "") {
        const result = await Swal.fire({
          icon: "warning",
          title: "No/Invalid username!",
          text: "You haven't inputted a username, or the one you inputted is invalid. Logging in passwordless will work fine, but it's reccomended to input one anyway in case of issues. Continue?",
          confirmButtonText: "Continue",
          showDenyButton: true,
          denyButtonText: "Exit",
        });
        /* Read more about isConfirmed, isDenied below */
        if (result.isDenied) {
          hasShownError = true;
          throw "User denied authentication";
        }
      }

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
        await Swal.fire({
          icon: "error",
          title: "Passwordless not supported!",
          text: "This user has not registered a passwordless authentication method. If this is you, head over to Settings to add one once you're logged in.",
        });

        hasShownError = true;

        throw "Atempted to auth as non-passwordless user";
      } else if (JSON.stringify(options.allowCredentials) === JSON.stringify([]) && userUUID === "") {
        await Swal.fire({
          icon: "error",
          title: "Nobody is passwordless!",
          text: "Nobody has registered a passwordless authentication method. If this is you, head over to Settings to add one once you're logged in.",
        });

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
      // Display filler page while logged in
      goto("/");
    } catch (error) {
      console.error("Error during authentication:", error);

      if (hasShownError === false) {
        Swal.fire({
          icon: "error",
          title: "Whoops...",
          text: "Something went wrong while authenticating. This could have many causes- you might have timed out, the API is down, or you didn't add a passwordless auth method. Try again!",
        });
      }
    }
  }

  onMount(async () => {
    document.getElementById("create-user-form").addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document.getElementById("create-username").value;
      const password = document.getElementById("create-password").value;

      // Make POST request to /api/addUser endpoint
      fetch("https://crowdcards-api.glitch.me/api/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => {
          return response.text();
        })
        .then((uuid) => {
          if (uuid.startsWith("002")) {
            Swal.fire({
              icon: "warning",
              title: "Error!",
              text: `Something went wrong. The error returned was ${uuid}.`,
              confirmButtonText: "Darn it",
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: `Your account was created! It's UUID is ${uuid}.`,
              confirmButtonText: "Awesome!",
              showDenyButton: true,
              denyButtonText: "Log into new account",
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isDenied) {
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
                        Swal.fire({
                          icon: "warning",
                          title: "Error!",
                          text: "Invalid username or password. This shouldn't have happened, please contact the developers.",
                          confirmButtonText: ":(",
                        });
                      }
                      // Otherwise, return the response as text (the session token)
                      else if (response.status === 403) {
                        Swal.fire({
                          icon: "error",
                          title: "Banned!",
                          text: "This account has been banned from CrowdCards. This should NOT have happened, contact the developers to get your account unbanned.",
                          confirmButtonText: "Aw, man!",
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
                        // Display filler page while logged in
                        goto("/");
                      }
                      // If no UUID is returned, display an error message
                      else {
                        Swal.fire({
                          icon: "warning",
                          title: "Error!",
                          text: "Invalid username or password. This shouldn't have happened, please contact the developers.",
                          confirmButtonText: ":(",
                        });
                      }
                    });
                } else {
                  Swal.fire({
                    icon: "warning",
                    title: "Error!",
                    text: "Invalid username or password. This shouldn't have happened, please contact the developers.",
                    confirmButtonText: ":(",
                  });
                }
              }
            });
          }
        });
    });
    // Login form submission handler
    document.getElementById("login-form").addEventListener("submit", (event) => {
      event.preventDefault();

      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

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
                  Swal.fire({
                    icon: "warning",
                    title: "Error!",
                    text: "Invalid username or password.",
                    confirmButtonText: "Whoops",
                  });
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
                  // Display filler page while logged in
                  goto("/");
                }
                // If no UUID is returned, display an error message
                else {
                  Swal.fire({
                    icon: "warning",
                    title: "Error!",
                    text: "Invalid username or password.",
                    confirmButtonText: "Whoops",
                  });
                }
              });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Invalid username or password.",
              confirmButtonText: "Whoops",
            });
          }
        });
    });
    // Check if session token and UUID are stored in local storage and if so, make a POST request to the /api/checkSession endpoint to verify the session
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
            goto("/");
          }
          // If session is invalid, remove session token and UUID from local storage
          else {
            localStorage.removeItem("uuid");
            localStorage.removeItem("sessionToken");
          }
        });
    }

    // Availability of `window.PublicKeyCredential` means WebAuthn is usable.
    if (window.PublicKeyCredential && PublicKeyCredential.isConditionalMediationAvailable) {
      console.log("hi");
      // Check if conditional mediation is available.
      const isCMA = await PublicKeyCredential.isConditionalMediationAvailable();
      console.log(isCMA);

      if (isCMA) {
        console.log("pain");

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
          // Display filler page while logged in
          goto("/");
        } catch (error) {
          if (allowedAuth === true) {
            console.error("Error during authentication:", error);
            Swal.fire({
              icon: "error",
              title: "Whoops...",
              text: "Something went wrong while authenticating. This could have many causes- you might have timed out, the API is down, or you didn't add a passwordless auth method. Try again!",
            });
          }
        }
      }
    }
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h2 class="text-3xl">Create a new user</h2>
<br />
<form id="create-user-form">
  <label for="create-username">Username:</label><br />
  <input class="rounded-sm text-black" type="text" id="create-username" name="create-username" /><br />
  <label for="create-password">Password:</label><br />
  <input class="rounded-sm text-black" type="password" id="create-password" name="create-password" /><br /><br />
  <button type="submit" class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">Create User</button>
</form>
<br /><br />
<!-- Login form -->
<h2 class="text-3xl">Login</h2>
<br />
<form id="login-form">
  <label for="login-username">Username:</label><br />
  <input class="rounded-sm text-black" type="text" id="login-username" name="login-username" autocomplete="username webauthn" /><br />
  <br />
  <button type="button" on:click={authenticate} class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800">Use Passwordless Auth</button>
  <br />
  <label for="login-password">Password:</label><br />
  <input class="rounded-sm text-black" type="password" id="login-password" name="login-password" autocomplete="password webauthn" /><br /><br />
  <button type="submit" class="mb-2 mr-2 rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800">Login</button>
  <br /> <br />
</form>
