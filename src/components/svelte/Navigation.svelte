<script lang="ts">
  import Button from "../svelte/Button.svelte";
  import Icon from "@iconify/svelte";
  import { fly, fade, slide } from "svelte/transition";

  export let activePath: string;

  let sidebarOpen = false;
  const toggleSidebar = () => (sidebarOpen = !sidebarOpen);
</script>

<nav
  aria-label="Primary"
  class="flex flex-wrap justify-between items-center lg:px-24 md:px-12 px-6 py-4 dark:bg-slate-100 text-black sticky top-0 z-40 shadow-[0_-10px_20px_2px]"
>
  <a href="/">
    <p class="text-primary-600 text-xl font-bold">Jackson Oppenheim</p>
    <p class="text-sm text-dark-700 tracking-wide font-light">UX Developer</p>
  </a>
  <div class="lg:flex gap-8 lg:gap-24 items-center hidden">
    <ul class="flex gap-3 lg:gap-4 font-bold uppercase">
      <li
        class="hover:text-gray-800 transition-[text-decoration-line] hover:underline hover:text-gray-700 duration-200 cursor-pointer underline-offset-2"
        class:text-primary-700={activePath === ""}
        class:underline={activePath === ""}
      >
        <a href="/">Home</a>
      </li>
      <li
        class="hover:text-gray-800 transition-[text-decoration-line] hover:underline hover:text-gray-700 duration-200 cursor-pointer underline-offset-2"
        class:text-primary-700={activePath.includes("about")}
        class:underline={activePath.includes("about")}
      >
        <a href="/about">About</a>
      </li>
      <li
        class="hover:text-gray-800 transition-[text-decoration-line] hover:underline hover:text-gray-700 duration-200 cursor-pointer underline-offset-2"
        class:text-primary-700={activePath.includes("portfolio")}
        class:underline={activePath.includes("portfolio")}
      >
        <a href="/portfolio">Portfolio</a>
      </li>
      <li
        class="hover:text-gray-800 transition-[text-decoration-line] hover:underline hover:text-gray-700 duration-200 cursor-pointer underline-offset-2"
        class:text-primary-700={activePath.includes("blog")}
        class:underline={activePath.includes("blog")}
      >
        <a href="/blog">Blog</a>
      </li>
      <li
        class="hover:text-gray-800 transition-[text-decoration-line] hover:underline hover:text-gray-700 duration-200 cursor-pointer underline-offset-2"
        class:text-primary-700={activePath.includes("contact")}
        class:underline={activePath.includes("contact")}
      >
        <a href="/contact">Contact</a>
      </li>
    </ul>
    <Button color="primary">Contact Me</Button>
  </div>
  <!-- content here -->
  <div
    out:fade={{ duration: 150 }}
    in:fade={{ delay: 400, duration: 150 }}
    class="block lg:hidden"
  >
    <button
      on:click={toggleSidebar}
      class="grid place-items-center w-10 h-10 border-2 border-slate-600 text-slate-600 rounded-lg active:bg-accent-600/30"
    >
      <Icon icon="ic:round-menu" height={30} />
    </button>
  </div>
  {#if sidebarOpen}
    <div in:slide out:slide={{ delay: 60 }} class="flex-grow w-full">
      <ul class="flex flex-col text-lg py-12 px-6 gap-6">
        <li
          class="underline-offset-2"
          class:text-primary-400={activePath === ""}
          class:text-opacity-90={activePath === ""}
          class:underline={activePath === ""}
          in:fly={{ x: -100 }}
          out:fly={{ x: -100, delay: 200 }}
        >
          <a href="/">Home</a>
        </li>
        <li
          class="underline-offset-2"
          class:text-primary-400={activePath === "about"}
          class:text-opacity-90={activePath === "about"}
          class:underline={activePath === "about"}
          in:fly={{ x: -100, delay: 50 }}
          out:fly={{ x: -100, delay: 150 }}
        >
          <a href="/about">About</a>
        </li>
        <li
          class="underline-offset-2"
          class:text-primary-400={activePath === "portfolio"}
          class:text-opacity-90={activePath === "portfolio"}
          class:underline={activePath === "portfolio"}
          in:fly={{ x: -100, delay: 100 }}
          out:fly={{ x: -100, delay: 100 }}
        >
          <a href="/portfolio">Portfolio</a>
        </li>
        <li
          class="underline-offset-2"
          class:text-primary-400={activePath === "blog"}
          class:text-opacity-90={activePath === "blog"}
          class:underline={activePath === "blog"}
          in:fly={{ x: -100, delay: 150 }}
          out:fly={{ x: -100, delay: 50 }}
        >
          <a href="/blog">Blog</a>
        </li>
        <li
          class="underline-offset-2"
          class:text-primary-400={activePath === "contact"}
          class:text-opacity-90={activePath === "contact"}
          class:underline={activePath === "contact"}
          in:fly={{ x: -100, delay: 200 }}
          out:fly={{ x: -100 }}
        >
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  {/if}
</nav>
