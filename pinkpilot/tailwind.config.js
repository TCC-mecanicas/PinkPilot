/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "preto": "#4a3a3a",
        "margentinha": "#951b4a",
        "rosinha": "#e9bdc0"
      }
    },
  },
  plugins: [],
}