<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import "canvas-particle-network"
  import Swal from "sweetalert2";
  import { messageAction } from "svelte-legos";
  import { Button } from "$components/ui/button";
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$components/ui/card";
  import { Input } from "$components/ui/input";
  import { Label } from "$components/ui/label";

  $: title = `CrowdCards - Create Account (NEW)`;

  const abortController = new AbortController(); // Used to cancel the Webauthn call we use later

  function loginWithGoogle() {
    authflow.login({ app_name: "CrowdCards (Google Login via Authflow)", redirect: "https://crowdcards.glitch.me/authflow" });
  }

  function loginNormally() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

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
          if (uuid === "002-0002") {
            showMessage("error", "This account already exists!");
          } else {
            showMessage("error", "Something went wrong!");
          }
        } else {
          Swal.fire({
            icon: "success",
            title: "Welcome!",
            text: `Your account was created! It's UUID is ${uuid}.`,
            confirmButtonText: ":D",
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
                        confirmButtonText: "D:",
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
                      showMessage("error", "Invalid username / password! Please contact the developers.");
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
  }

  function loginWithErisWS() {
    showMessage("info", "This option is not implemented!");
  }

  function switchToLogIn() {
    goto("/login");
  }

  function showMessage(type, text) {
    const oldElement = document.getElementById("modal");
    const newElement = oldElement.cloneNode(true);
    document.getElementById("hmm").appendChild(newElement);
    document.getElementById("hmm").removeChild(oldElement);

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
      var particleCanvas = new ParticleNetwork(document.getElementById("background"), options);

      document.getElementById("background").style = null;
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div id="hmm">
  <div id="modal" />
  <!-- An empty div for shenanagins involving le funny messageAction -->
</div>

<!-- The background div (A canvas is added inside on code execution, I can provide the code. Everything below this is content) -->
<div id="a" class="relative overflow-hidden">
  <div id="background" class="absolute h-screen w-screen" />

  <Card class="relative	z-[900] bg-transparent text-white">
    <CardHeader class="space-y-1">
      <CardTitle class="text-2xl">Create an account</CardTitle>
      <CardDescription>Choose your account creation method.</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div class="grid grid-cols-2 gap-4">
        <Button variant="outline" class="bg-slate-950" on:click={loginWithGoogle}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="The Google logo" class="mr-2 h-4 w-4" />
          <img src="https://authflow.glitch.me/assets/favicon.svg" alt="The Authflow logo" class="mr-2 h-4 w-4" />
          Google (Via Authflow)
        </Button>
        <Button variant="outline" class="bg-slate-950" on:click={loginWithErisWS}>
          <img class="mr-2 h-4 w-4" alt="The empty ErisWS logo" />

          ErisWS
        </Button>
      </div>

      <Button variant="outline" class="bg-slate-950" on:click={switchToLogIn}>Switch to logging in</Button>

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
        <Input id="username" type="username" class="bg-[#222]" />
      </div>
      <div class="grid gap-2">
        <Label for="password">Password</Label>
        <Input id="password" type="password" class="bg-[#222]" />
      </div>
    </CardContent>
    <CardFooter class="pb-0">
      <Button class="w-full" on:click={loginNormally}>Login</Button>
    </CardFooter>
  </Card>
</div>
