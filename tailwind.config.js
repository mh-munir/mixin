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
      "black": "#000",
      "gray-deep": "#4F4A4C",
      "gray-400": "#8C8289",
      "gray-light": "#EAE9E8",
      "yellow-light": "#EAB861",
      "yellow-deep": "#D5874A",
      "red-light": "#C35A44",
      "red-deep": "#D6513C",
      "rose-light": "#D6A196",
    },
    extend: {},
  },
  plugins: [
  ],
}