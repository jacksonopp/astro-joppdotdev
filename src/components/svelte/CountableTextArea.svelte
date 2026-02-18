<script lang="ts">
  export let className = "";
  export let name: string;
  export let id: string;
  export let placeholder: string;
  export let required: boolean | null | undefined;
  export let maxLen = 1000;

  let value = "";

  $: charLeft = maxLen - value.length;
</script>

<div class="flex flex-col items-end">
  <textarea
    bind:value
    {name}
    {id}
    {placeholder}
    {required}
    class={className}
    rows="5"
    maxlength={maxLen}
  ></textarea>
  <p class="text-sm text-dark-700">
    Characters Remaining: {charLeft}
  </p>
</div>
