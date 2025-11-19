/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}