/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scrollbarBg: '#1a202c', // Dark background
        scrollbarThumb: '#48bb78', // Green thumb
        scrollbarThumbHover: '#38a169', // Darker green on hover
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
