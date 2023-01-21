const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', ...fontFamily.serif],
      },
      height: {
        navbar: '72px',
      },
      width: {
        offcanvas: '256px',
      },
      colors: {
        bg: '#10141B',
        text: '#FAF6F0',
        navbar: '#10141B',
      },
      maxWidth: {
        text: '810px',
      },
      zIndex: {
        navbar: 100,
        'offcanvas-backdrop': 200,
        offcanvas: 300,
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
