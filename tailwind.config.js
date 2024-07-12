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
      cream: "#F3E6DD",
      transparant: "rgba(255,255,255,0.5)",
      transparantBlack: "rgba(0,0,0,0.5)",
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
        ".bg-gradient-blue": {
          "background-image": "linear-gradient(to right, #011224, #021E5C)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
