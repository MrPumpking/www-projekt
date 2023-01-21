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
        navbar: '64px',
      },
      width: {
        offcanvas: '256px',
      },
      colors: {
        bg: '#10141B',
        text: '#FAF6F0',
      },
      maxWidth: {
        text: '810px',
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
};
