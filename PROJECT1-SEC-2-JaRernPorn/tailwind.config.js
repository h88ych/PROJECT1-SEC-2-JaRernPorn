/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        alkatra: ['Alkatra', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        title: '#B11717',
        'button-bgColor': '#861616',
        'main-bgColor': '#FDFFE8',
        white: '#FFFFFF',
        'quiz-bgColor': '#F4E4C0',
        black: '#20201D'
      },
      fontSize: {
        'title-size': '118px',
        'sm-title-size': '100px',
        'mobile-title-size': '80px',
        'sub-title-size': '14px'
      },
      lineHeight: {
        title: '1.10'
      },
      padding: {
        title: '42px'
      },
      letterSpacing: {
        'sub-title': '2.8px'
      },
      screens:{
        mobile:'320px',
        sm:'480px', //phone
        md:'768px',
        lg:'1024px',
        xl:'1440px' //desktop
      },
      width:{
        "catePage-20":"73px"
      }
    },
  },
  plugins: []
}
