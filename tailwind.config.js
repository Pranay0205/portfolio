/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(75deg, #4a93ff, #00b9fe, #00dbec, #00f4cd, #00ffa4, #00ff75, #abff41, #ffee00)",
      },
    },
  },
  plugins: [],
};
