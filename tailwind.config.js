/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif'],
      },
      colors: {
        'dark-gray': '#0B0D17',
        'light-blue': '#D0D6F9',
      },
      screens: {
        'mobilexs': '320px',
        'mobilemd': '480px',
        'tabletxs': '640px',
        'tabletmd': '768px',
        'desktopxs': '1024px',
        'desktopmd': '1280px',
        'desktoplg': '1440px',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  base: '/space-tourism/'
}