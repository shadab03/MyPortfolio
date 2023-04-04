/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['var(--font-mont)', ...fontFamily.sans],
      }, 
      colors:{
        dark:'#1b1b1b',
        light:'#f5f5f5', 
        primary: '#B63E96',
        primaryDark:'#58E6O9'
      }
    },
  },
  plugins: [],
}

