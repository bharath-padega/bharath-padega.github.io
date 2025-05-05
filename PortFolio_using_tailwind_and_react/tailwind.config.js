/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: '#E6E6FA',
        }
      }
    },
  },
  plugins: [],
}