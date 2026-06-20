/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { light: '#7F63F1' },
        secondary: { light: '#63F1B4' },
        brand: {
          50: '#faf5ff',
          100: '#858D9D',
          200: '#667085',
          300: '#4D5464',
          400: '#333843',
          500: '#ABB2BF',
          600: '#9333ea',
          700: '#C778DD',
          800: '#F3F0FE',
          900: '#F16363',
        }
      },
      fontFamily: {
        fira: ['Fira Code', 'monospace'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(36px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-36px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-48px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(48px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-in-up':    'fadeInUp 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-down':  'fadeInDown 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-left':  'fadeInLeft 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-right': 'fadeInRight 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':       'fadeIn 0.65s ease-out forwards',
        'float':         'float 5s ease-in-out infinite',
        'blink':         'blink 1.1s step-end infinite',
        'scale-in':      'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}
