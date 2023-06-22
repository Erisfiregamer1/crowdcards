<script lang="ts">
  import { cn } from "$lib/utils";

  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<div class={cn("bg-card text-card-foreground rounded-lg shadow-sm", className)} {...$$restProps} on:click on:focusin on:focusout on:mouseenter on:mouseleave>
  <slot />
</div>
