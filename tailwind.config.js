/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom": "linear-gradient(75deg, #10b981, #8b5cf6, #ef4444)",
        "gradient-white": "linear-gradient(180deg, #fff, #ffffff4f)",
      },
      colors: {
        primary: "#10b981", // teal-500
        secondary: "#8b5cf6", // purple-500
        accent: "#ef4444", // red-500
        dark: "#09090b", // zinc-950
        light: "#f5f5f5", // neutral-100
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-gradient-primary": {
          background: "linear-gradient(75deg, #10b981, #8b5cf6, #ef4444)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-gradient-white": {
          background: "linear-gradient(180deg, #fff, #ffffff4f)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },

        ".text-chip-primary": {
          background: "linear-gradient(125deg, #10b981, #8b5cf6, #ef4444)",
          padding: "0.5rem 0.5rem",
          borderRadius: "1rem",
        },
      });
    }),
  ],
};
