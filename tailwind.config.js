/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-light': '#054a91',
        'blue-verylight': '#0a66c2',
      },
      fontFamily: {
        'OpenSans': ['Open Sans', 'sans - serif'],
        'Oswald': ['Oswald', ' sans-serif']
      },
    },
  },
  plugins: [],
}

