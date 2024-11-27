/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Chakra Petch"', 'sans-serif'], // Set Chakra Petch as the default sans font
      },
      colors: {
        darkClassicBlue: '#0A1828', // Dark classic blue
        turquoise: '#178582',      // Turquoise
        gold: '#BFA181',           // Gold
      },
    },
  },
  plugins: [],
}

