const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      lightBrown: "#F9E29A",
      black: "#011224",
      white: "#FFFEFF",
      aqua: "#A0D2FF",
      darkBlue: "#20386B",
      darkBrown: "#EFB01F",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-gradient": {
          "background-image": "linear-gradient(to right, #F3C11A, #FFFFFF)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
