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
          "0%": {
            transform: "translate(0%, 0%) scale(1)",
            "border-radius": "42% 58% 63% 37% / 41% 44% 56% 59%",
          },
          "22%": {
            transform: "translate(-70%, 55%) scale(1.3)",
            "border-radius": "58% 42% 35% 65% / 55% 62% 38% 45%",
          },
          "48%": {
            transform: "translate(-135%, 15%) scale(0.85)",
            "border-radius": "35% 65% 60% 40% / 65% 35% 55% 45%",
          },
          "74%": {
            transform: "translate(-55%, -60%) scale(1.15)",
            "border-radius": "60% 40% 45% 55% / 40% 60% 45% 55%",
          },
          "100%": {
            transform: "translate(0%, 0%) scale(1)",
            "border-radius": "42% 58% 63% 37% / 41% 44% 56% 59%",
          },
        },
        "drift-b": {
          "0%": {
            transform: "translate(0%, 0%) scale(1)",
            "border-radius": "48% 52% 40% 60% / 55% 45% 60% 40%",
          },
          "28%": {
            transform: "translate(65%, -70%) scale(0.75)",
            "border-radius": "60% 40% 55% 45% / 40% 60% 35% 65%",
          },
          "55%": {
            transform: "translate(140%, -10%) scale(1.25)",
            "border-radius": "35% 65% 40% 60% / 60% 35% 65% 40%",
          },
          "82%": {
            transform: "translate(55%, 80%) scale(0.9)",
            "border-radius": "55% 45% 60% 40% / 45% 55% 40% 60%",
          },
          "100%": {
            transform: "translate(0%, 0%) scale(1)",
            "border-radius": "48% 52% 40% 60% / 55% 45% 60% 40%",
          },
        },
        "drift-c": {
          "0%": {
            transform: "translate(0%, 0%) scale(0.9)",
            "border-radius": "50%",
          },
          "30%": {
            transform: "translate(-90%, -70%) scale(1.2)",
            "border-radius": "60% 40% 30% 70% / 50% 60% 40% 50%",
          },
          "63%": {
            transform: "translate(60%, 90%) scale(0.65)",
            "border-radius": "40% 60% 70% 30% / 50% 40% 60% 50%",
          },
          "88%": {
            transform: "translate(100%, -30%) scale(1.05)",
            "border-radius": "55% 45% 50% 50% / 45% 55% 50% 50%",
          },
          "100%": {
            transform: "translate(0%, 0%) scale(0.9)",
            "border-radius": "50%",
          },
        },
      },
      animation: {
        "drift-a": "drift-a 17s ease-in-out infinite",
        "drift-b": "drift-b 23s ease-in-out infinite",
        "drift-c": "drift-c 29s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
