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
      "gray-200": "#D2CFCF",
      "gray-300": "#B1ACB1",
      "gray-400": "#8C8289",
      "gray-deep": "#4F4A4C",
      "gray-light": "#EAE9E8",
      "yellow-light": "#EAB861",
      "yellow-deep": "#D5874A",
      "red-light": "#C35A44",
      "red-deep": "#D6513C",
      "rose-light": "#D6A196",
    },
    extend: {
      gridTemplateColumns: {
        '1-3': '.5fr .6fr',
        '1-4': '.4fr 1fr',
        '1-5': '.2fr 1fr',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}