/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Mred': '#A02C2C',
        'Myellow': '#F7EEDD'
      },
      backgroundImage: {
        'logo1': "url('/src/assets/image/logo/logo01.png')",
        'logo2': "url('/src/assets/image/logo/logo02.png')",
      }
    },
  },
  plugins: [],
}
