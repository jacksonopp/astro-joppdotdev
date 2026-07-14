<script lang="ts">
  export let classes = "";
  export let id = "";
  export let theme: "primary" | "accent" = "primary";
  export let dark = false;
  // Retained for backwards compatibility with existing call sites; the
  // flanking-bar layout that used these no longer exists in this design.
  export let offset = false;
  export let oneline = false;
  $: primary = theme === "primary";
  void offset;
  void oneline;
</script>

<h2
  {id}
  class="font-display mb-5 flex w-fit flex-col gap-2 text-lg font-bold uppercase tracking-wide md:text-xl {classes}"
  class:text-primary-800={primary && !dark}
  class:text-primary-300={primary && dark}
  class:text-accent-700={!primary && !dark}
  class:text-accent-400={!primary && dark}
>
  <slot />
  <span
    class="h-[3px] w-9 rounded-full"
    class:bg-primary-600={primary && !dark}
    class:bg-primary-400={primary && dark}
    class:bg-accent-500={!primary && !dark}
    class:bg-accent-400={!primary && dark}
  ></span>
</h2>
