/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      colors: {
        Mred: '#A02C2C',
        Myellow: '#F7EEDD',
        gold: '#b4a27f'
      },
      backgroundImage: {
        logo1: "url('/src/assets/image/logo/logo01.png')",
        logo2: "url('/src/assets/image/logo/logo02.png')",
        bgword: "url('/src/assets/image/other/CHUEIKUN.png')"
      }
    }
  },
  plugins: []
}
