/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7F63F1',
        },
        secondary: {
          light: '#63F1B4',
        },
        brand: {
          50: '#faf5ff',
          100: '#858D9D',
          200: '#667085',
          300: '#4D5464',
          400: '#333843',
          500: '#484848ff',  // Main brand color
          600: '#9333ea',
          700: '#7e22ce',
          800: '#F3F0FE',
          900: '#F16363',
        }
      }
    },
  },
  plugins: [],
}