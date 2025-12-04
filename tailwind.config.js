/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero': '#3f43b5',
        'muted': '#6d79b5',
        'rose': '#d17bac',
        'teal': '#7bc8d1',
        'yellow': '#e5e690',
        'navy': '#202c60',
        'black': '#000000',
        'white': '#ffffff',
      },
      fontFamily: {
        'title': ['"Averia Serif Libre"', 'cursive'],
        'body': ['"Be Vietnam Pro"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'pop': '8px 8px 0px #000000',
        'pop-hover': '15px 15px 0px #d17bac',
        'pop-sm': '4px 4px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'scroll-text': 'scrollText 40s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s infinite',
        'slide-text': 'slideText 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      keyframes: {
        scrollText: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'rotate(-3deg) translateY(0px)' },
          '50%': { transform: 'rotate(-3deg) translateY(-15px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '50%': { transform: 'rotate(-3deg)' },
          '75%': { transform: 'rotate(1deg)' },
        },
        slideText: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}