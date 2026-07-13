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
      keyframes: {
        "drift-a": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-5%, 6%) scale(1.1)" },
        },
        "drift-b": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(6%, -4%) scale(0.92)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "22px 22px" },
        },
      },
      animation: {
        "drift-a": "drift-a 16s ease-in-out infinite",
        "drift-b": "drift-b 20s ease-in-out infinite",
        "grid-pan": "grid-pan 12s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
