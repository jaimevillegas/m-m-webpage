/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        poppinsBold: ["poppins", "sans-serif"],
      },
      colors: {
        "main-orange": "#E5963A",
        "main-blue": "#416293",
        "main-red": "#E83A43",
        "main-brown": "#9D6438",
        "main-black": "#211C22",
      },
    },
  },
  daisyui: {
    themes: ["emerald"],
  },
  plugins: [require("daisyui")],
};
