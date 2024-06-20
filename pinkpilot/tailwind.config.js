/** @type {import('tailwindcss').Config} */

const withMt = require("@material-tailwind/react/utils/withMT");


module.exports = withMt({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "preto": "#4a3a3a",
        "margentinha": "#951b4a",
        "rosinha": "#e9bdc0", //card3
        "clarinho": "#F2E0E1", //card1
        "textCardS": "#4B0F26",
        "card2": "#EECFD1",
        "card4": "#D698A5",
        "card5": "#BF6B84",
        "card6": "#AA4367",
        "card7": "#A0325D",
        "cinza": "#3D3D3D"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif']
      },
    },
  },
  plugins: [],
})