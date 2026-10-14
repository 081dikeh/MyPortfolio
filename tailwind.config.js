// tailwind.config.js
/** @type {import('tailwindcss').Config} */

// Colours come from CSS variables (see src/index.css) so the whole site
// switches between light and dark by changing one class on <html>.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: token('paper'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        accent: token('accent'),
        surface: token('surface'),
        panel: token('panel'),
        'on-panel': token('on-panel'),
        error: token('error'),
        // Older names, so any leftover classes still resolve
        canvas: token('paper'),
        border: token('line'),
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
      },
      animation: {
        'fade-in-up': 'riseIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-down': 'fadeIn 0.5s ease-out forwards',
        'fade-in-left': 'riseIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in-right': 'riseIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.45s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}