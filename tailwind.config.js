// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(date-picker|button|ripple|spinner|calendar|date-input|form|popover).js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "hsl(var(--brand-purple))",
          blue: "hsl(var(--brand-blue))",
          gold: "hsl(var(--brand-gold))",
          neutral: "#f8f8f6",
          nearblack: "#0b0b0d",
        },
      },
      ringColor: {
        gold: "hsl(var(--brand-gold))",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};