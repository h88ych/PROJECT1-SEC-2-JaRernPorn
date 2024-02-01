/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src//*.{vue,js,ts,jsx,tsx}'],
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
        'settingButton-size': '85px',
        'compliment-size': '74px',
        'resultButton-size': '36px'
      },
      lineHeight: {
        title: '1.10'
      },
      padding: {
        title: '100px'
      },
      letterSpacing: {
        title: '2.8px'
      },
      screens: {
        sm: '480px', //phone
        md: '768px',
        lg: '1024px',
        xl: '2560px' //desktop
      }
    },
    backgroundImage: {
      'chinese-frame': "url('../assets/chinese-frame.png')"
    }
  },
  plugins: []
}
