/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
      'lekton': ['Lekton', 'sans-serif'],
    },
    colors: {
      "white": "#fff",
      "dark": "#000",
      "gray-deep": "#4F4A4C",
      "gray-light": "#EAE9E8",
      "yellow": "#EAB861",
      "yellow-deep": "#D5874A",
      "red": "#C35A44",
      "rose": "#D6A196",
    },
    extend: {},
  },
  plugins: [],
}