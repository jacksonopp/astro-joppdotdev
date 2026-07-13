<script lang="ts">
  import Button from "../svelte/Button.svelte";
  import { fade, slide } from "svelte/transition";

  export let activePath: string;

  let sidebarOpen = false;
  const toggleSidebar = () => (sidebarOpen = !sidebarOpen);

  const links = [
    { href: "/", label: "Home", match: "" },
    { href: "/about", label: "About", match: "about" },
    { href: "/portfolio", label: "Portfolio", match: "portfolio" },
    { href: "/contact", label: "Contact", match: "contact" },
  ];

  const isActive = (match: string) =>
    match === "" ? activePath === "" : activePath.includes(match);
</script>

<nav
  aria-label="Primary"
  class="sticky top-0 z-40 border-b border-dark-200/70 bg-white/80 px-6 py-3 backdrop-blur-md md:px-12 lg:px-24"
>
  <div class="flex flex-wrap items-center justify-between gap-4">
    <a href="/" class="shrink-0">
      <span class="sr-only">Home</span>
      <img src="/logos/blue-long.svg" class="h-14" alt="jopp dot dev logo" />
    </a>

    <div class="hidden items-center gap-2 lg:flex">
      <ul class="flex items-center gap-1 text-sm font-semibold">
        {#each links as { href, label, match }}
          <li>
            <a
              {href}
              class="rounded-full px-4 py-2 transition-colors duration-150"
              class:bg-primary-50={isActive(match)}
              class:text-primary-800={isActive(match)}
              class:text-dark-600={!isActive(match)}
              class:hover:bg-dark-100={!isActive(match)}
              class:hover:text-dark-900={!isActive(match)}
            >
              {label}
            </a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="hidden lg:block">
      <Button link href="/contact" color="primary">Contact Me</Button>
    </div>

    <div class="block lg:hidden">
      <button
        on:click={toggleSidebar}
        aria-expanded={sidebarOpen}
        aria-label="Toggle navigation menu"
        class="grid h-11 w-11 place-items-center rounded-full border border-dark-200 text-dark-700 transition-colors hover:bg-dark-100 active:bg-primary-100"
      >
        {#if sidebarOpen}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        {:else}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
          >
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        {/if}
      </button>
    </div>
  </div>

  {#if sidebarOpen}
    <div
      in:slide={{ duration: 200 }}
      out:slide={{ duration: 150 }}
      class="w-full lg:hidden"
    >
      <ul class="flex flex-col gap-1 py-6 text-lg font-semibold">
        {#each links as { href, label, match }}
          <li in:fade={{ duration: 150 }}>
            <a
              {href}
              class="block rounded-xl px-4 py-3 transition-colors"
              class:bg-primary-50={isActive(match)}
              class:text-primary-800={isActive(match)}
              class:text-dark-700={!isActive(match)}
            >
              {label}
            </a>
          </li>
        {/each}
        <li class="px-4 pt-2">
          <Button link href="/contact" color="primary">Contact Me</Button>
        </li>
      </ul>
    </div>
  {/if}
</nav>
