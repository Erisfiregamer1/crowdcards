<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import { messageAction } from "svelte-legos";
  import Swal from "sweetalert2";
  import { Button } from "$components/ui/button";
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$components/ui/card";
  import { Input } from "$components/ui/input";
  import { Label } from "$components/ui/label";

  $: title = `CrowdCards - Login (NEW)`;

  const abortController = new AbortController(); // Used to cancel the Webauthn call we use later

  function loginWithWebauthn() {
    showMessage("info", "This option is not implemented!");
  }

  function loginWithGoogle() {
    authflow.login({ app_name: "CrowdCards (Google Login via Authflow)", redirect: "https://crowdcards.glitch.me/authflow" });
  }

  function loginNormally() {
    showMessage("info", "This option is not implemented!");
  }

  function loginWithErisWS() {
    showMessage("info", "This option is not implemented!");
  }

  function switchToCreateAccount() {
    goto("/makeaccount");
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
</script>

<div id="hmm">
  <div id="modal" />
  <!-- An empty div for shenanagins involving le funny messageAction -->
</div>

<Card class="bg-[#222] text-white">
  <CardHeader class="space-y-1">
    <CardTitle class="text-2xl">Login to an account</CardTitle>
    <CardDescription>Choose your login method.</CardDescription>
  </CardHeader>
  <CardContent class="grid gap-4">
    <div class="grid grid-cols-3 gap-4">
      <Button variant="outline" class="bg-slate-950" on:click={loginWithGoogle}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" class="mr-2 h-4 w-4" />
        <img src="https://authflow.glitch.me/assets/favicon.svg" class="mr-2 h-4 w-4" />
        Google (Via Authflow)
      </Button>
      <Button variant="outline" class="bg-slate-950" on:click={loginWithWebauthn}>Passwordless via Webauthn</Button>
      <Button variant="outline" class="bg-slate-950" on:click={loginWithErisWS}>
        <img class="mr-2 h-4 w-4" />

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
      <Input id="username" type="username" />
    </div>
    <div class="grid gap-2">
      <Label for="password">Password</Label>
      <Input id="password" type="password" />
    </div>
  </CardContent>
  <CardFooter>
    <Button class="w-full" on:click={loginNormally}>Login</Button>
  </CardFooter>
</Card>
