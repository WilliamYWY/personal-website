/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize:{
        '10xl': '9rem',
        '11xl': '10rem',
        '15xl': '14rem',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-gray': '#DCDCDC',
        'primary-white': '#FFFFFF',
        'dark-white': '#FAFAFA',
        'light-black': '#1C1C1C',
        'primary-black': '#000000',
        'dim-gray': '#6B6D76',
      },
      
    },
  },
  plugins: [],
}