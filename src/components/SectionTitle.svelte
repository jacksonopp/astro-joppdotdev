<script lang="ts">
  export let classes = "";
  export let id = "";
  export let theme: "primary" | "accent" = "primary";
  export let dark = false;
  export let offset = false;
  $: primary = theme === "primary";
</script>

<h2
  class="font-bold text-xl uppercase relative w-fit section-title mb-[0.5em] z-0 {classes}"
  class:text-primary-900={primary}
  class:text-primary-400={primary && dark}
  class:text-accent-700={!primary && !dark}
  class:text-accent-400={!primary && dark}
  class:section-title--accent--light={!primary && !dark}
  class:section-title--accent--dark={!primary && dark}
  class:section-title--primary--light={primary && !dark}
  class:section-title--primary--dark={primary && dark}
  class:-left-8={offset}
  class:left-10={!offset}
  {id}
>
  <slot />
</h2>

<style>
  /* Primary Light */
  .section-title::before {
    @apply h-1 w-8 absolute top-3 -left-10 bg-primary-900;
    content: "";
  }
  .section-title::after {
    @apply h-1 w-8 absolute top-3 -right-10 bg-primary-900;
    content: "";
  }

  /* Primary Dark */
  .section-title--primary--dark::before {
    @apply h-1 w-8 absolute top-3 -left-10 bg-primary-400;
    content: "";
  }
  .section-title--primary--dark::after {
    @apply h-1 w-8 absolute top-3 -right-10 bg-primary-400;
    content: "";
  }

  /* Accent Light */
  .section-title--accent--light::before {
    @apply h-1 w-8 absolute top-3 -left-10 bg-accent-700;
    content: "";
  }
  .section-title--accent--light::after {
    @apply h-1 w-8 absolute top-3 -right-10 bg-accent-700;
    content: "";
  }

  /* Accent Dark */
  .section-title--accent--dark::before {
    @apply h-1 w-8 absolute top-3 -left-10 bg-accent-400;
    content: "";
  }
  .section-title--accent--dark::after {
    @apply h-1 w-8 absolute top-3 -right-10 bg-accent-400;
    content: "";
  }
</style>
