import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    svelte(),
    tailwind(),
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
