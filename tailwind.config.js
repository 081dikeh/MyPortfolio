// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F6F2',
        ink: '#14202B',
        muted: '#55616D',
        line: '#D9DED7',
        accent: '#17705F',
        // Semantic aliases, so any older class names still resolve
        canvas: '#F4F6F2',
        surface: '#FFFFFF',
        border: '#D9DED7',
        error: '#B93425',
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader Variable"', 'Georgia', 'Cambria', 'serif'],
      },
      spacing: {
        section: '7rem',
        'section-lg': '9rem',
      },
      keyframes: {
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        dotPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(34,160,90,0.45)' },
          '50%': { boxShadow: '0 0 0 5px rgba(34,160,90,0)' },
        },
      },
      animation: {
        'fade-in-up': 'riseIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-down': 'fadeIn 0.5s ease-out forwards',
        'fade-in-left': 'riseIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-right': 'riseIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards',
        'dot-pulse': 'dotPulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}