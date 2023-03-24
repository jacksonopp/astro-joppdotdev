const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        accent: colors.orange,
        dark: colors.slate,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
