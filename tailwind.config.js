/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'swiper-button-next', 'swiper-button-prev', 'swiper-pagination-bullet',
    'reveal', 'modal-in', 'reveal-slow', 'float-very-slow', 'hover-elevate', 'bg-glass'
  ],
  theme: {
    extend: {
      colors: {
        warnasari: "#00B373" // hijau Tokopedia-style
      },
    },
  },
  plugins: [],
};
