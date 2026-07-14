<script lang="ts">
  export let color: "primary" | "accent" = "accent";
  export let variant: "solid" | "outline" = "solid";
  export let invert = false;
  export let link = false;
  export let href: string | undefined = undefined;
  $: primary = color === "primary";

  $: classes = [
    "inline-flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variant === "solid" && primary
      ? "bg-primary-700 text-white shadow-soft hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-card focus-visible:outline-primary-600"
      : "",
    variant === "solid" && !primary
      ? "bg-accent-500 text-white shadow-soft hover:-translate-y-0.5 hover:bg-accent-600 hover:shadow-card focus-visible:outline-accent-500"
      : "",
    variant === "outline" && !invert
      ? "border border-dark-300 text-dark-900 hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-700 focus-visible:outline-primary-600"
      : "",
    variant === "outline" && invert
      ? "border border-white/30 text-white hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 focus-visible:outline-white"
      : "",
  ]
    .filter(Boolean)
    .join(" ");
</script>

{#if link}
  <a {href} class={classes}>
    <slot />
  </a>
{:else}
  <button class={classes}>
    <slot />
  </button>
{/if}
