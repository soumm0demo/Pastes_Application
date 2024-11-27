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
    },
  },
  plugins: [],
}

