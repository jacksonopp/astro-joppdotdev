<script lang="ts">
  import Button from "./Button.svelte";

  export let activePath: string;
</script>

<nav
  class="flex justify-between items-center px-24 py-4 dark:bg-slate-100 text-black sticky top-0 z-50 shadow-[0_-10px_20px_2px]"
>
  <div>Logo</div>
  <div class="flex xl:gap-48 lg:gap-36 md:gap-24 items-center">
    <ul class="flex gap-4 font-bold uppercase">
      <li
        class="hover:text-gray-800 transition-[text-decoration-line] hover:underline duration-200 cursor-pointer underline-offset-2"
        class:text-primary-700={activePath === ""}
      >
        <a href="/">Home</a>
      </li>
      <li
        class="hover:text-gray-800 transition-[text-decoration-line] hover:underline duration-200 cursor-pointer underline-offset-2"
        class:text-primary-700={activePath.includes("about")}
      >
        <a href="/about">About</a>
      </li>
      <li
        class="hover:text-gray-800 transition-[text-decoration-line] hover:underline duration-200 cursor-pointer underline-offset-2"
        class:text-primary-700={activePath.includes("portfolio")}
      >
        <a href="/portfolio">Portfolio</a>
      </li>
      <li
        class="hover:text-gray-800 transition-[text-decoration-line] hover:underline duration-200 cursor-pointer underline-offset-2"
        class:text-primary-700={activePath.includes("blog")}
      >
        <a href="/blog">Blog</a>
      </li>
      <li
        class="hover:text-gray-800 transition-[text-decoration-line] hover:underline duration-200 cursor-pointer underline-offset-2"
        class:text-primary-700={activePath.includes("contact")}
      >
        <a href="/blog">Contact</a>
      </li>
    </ul>
    <Button color="primary">Contact Me</Button>
  </div>
</nav>
