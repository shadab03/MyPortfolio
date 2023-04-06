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
      }, 
      animation:{
        'spin-slow': 'spin 8s linear infinite'
      }, 
      backgroundImage :{
        circularlight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px)'
      }
    },
  },
  plugins: [],
}

