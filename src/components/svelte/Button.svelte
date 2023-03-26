<script lang="ts">
  export let color: "primary" | "accent" = "accent";
  $: primary = color === "primary";
</script>

<button
  class="px-6 py-4 rounded-lg hover:shadow-[inset_20em_0_0_0] duration-[400ms,700ms] transition-[box-shadow] w-fit"
  class:bg-primary-800={primary}
  class:text-white={primary}
  class:hover:shadow-primary-700={primary}
  class:bg-accent-500={!primary}
  class:hover:shadow-accent-700={!primary}
>
  <slot />
</button>
