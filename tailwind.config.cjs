const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        accent: colors.orange,
        dark: colors.zinc,
      },
      fontFamily: {
        sans: [
          "InterVariable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Space Grotesk",
          "InterVariable",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 10px -3px rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        card: "0 8px 30px -8px rgb(0 0 0 / 0.12)",
        "card-hover": "0 16px 40px -12px rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
