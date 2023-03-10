/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    screens: {
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        Mred: '#A02C2C',
        Myellow: '#F7EEDD',
        gold: '#b4a27f',
        gray: '#707070',
        wrap: 'rgba(0, 0, 0, 0.5)'
      },
      backgroundImage: {
        logo1: "url('/src/assets/image/logo/logo01.png')",
        logo2: "url('/src/assets/image/logo/logo02.png')",
        bgword: "url('/src/assets/image/other/CHUEIKUN.png')",
        bread: "url('/src/assets/image/other/bx-right-arrow-alt.png')",
        right: "url('/src/assets/image/other/right.png')",
        rightW: "url('/src/assets/image/other/right(white).png')",
        down: "url('/src/assets/image/other/down.png')",
      },
      boxShadow: {
        'mYellow': '2px 2px 0px 2px #F6EEDD',
        'main': '0px 3px 6px rgba(0, 0, 0, 0.16)'
      },
    },
  },
  plugins: []
}
