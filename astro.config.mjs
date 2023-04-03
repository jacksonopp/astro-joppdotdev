import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/serverless";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [svelte(), tailwind(), mdx(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), partytown()],
  adapter: vercel({
    analytics: true
  })
});