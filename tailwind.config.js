/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        // These map to the CSS variables set by next/font in layout.tsx
        'title': ['var(--font-title)', '"Averia Serif Libre"', 'cursive'],
        'body': ['var(--font-body)', '"Be Vietnam Pro"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'pop': '8px 8px 0px #000000',
        'pop-hover': '15px 15px 0px #d17bac',
        'pop-sm': '4px 4px 0px #000000',
        'hard': '12px 12px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'scroll-text': 'scrollText 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glitch': 'glitch 3s infinite',
        'reveal-mask': 'revealMask 1s cubic-bezier(0.77, 0, 0.175, 1) forwards',
        'wiggle': 'wiggle 0.5s infinite',
        'slide-text': 'slideText 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      keyframes: {
        scrollText: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        revealMask: {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '2%': { transform: 'translate(-2px, 2px)' },
          '4%': { transform: 'translate(2px, -2px)' },
          '6%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(0)' },
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
        },
      },
    },
  },
  plugins: [],
}
