<script lang="ts">
  import Button from "./Button.svelte";

  export let activePath: string;
</script>

<nav
  class="flex justify-between items-center px-24 py-4 dark:bg-slate-100 text-black"
>
  <div>Logo</div>
  <ul class="flex gap-4 font-bold uppercase">
    <li
      class="hover:text-gray-800 transition-[text-decoration-line] hover:underline duration-200 cursor-pointer underline-offset-2"
      class:text-primary-700={activePath === ""}
    >
      <a href="/">Home</a>
    </li>
    <li
      class="hover:text-gray-800 transition-[text-decoration-line] hover:underline duration-200 cursor-pointer underline-offset-2"
      class:text-primary-700={activePath === "about"}
    >
      <a href="/about">About</a>
    </li>
    <li
      class="hover:text-gray-800 transition-[text-decoration-line] hover:underline duration-200 cursor-pointer underline-offset-2"
    >
      <a href="/">Portfolio</a>
    </li>
    <li
      class="hover:text-gray-800 transition-[text-decoration-line] hover:underline duration-200 cursor-pointer underline-offset-2"
    >
      <a href="/">Blog</a>
    </li>
    <li
      class="hover:text-gray-800 transition-[text-decoration-line] hover:underline duration-200 cursor-pointer underline-offset-2"
    >
      <a href="/">Contact</a>
    </li>
  </ul>
  <div>
    <Button color="primary">Contact Me</Button>
  </div>
</nav>
