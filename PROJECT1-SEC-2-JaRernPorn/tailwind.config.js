/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src//*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px', //phone
      md: '768px',
      lg: '1024px',
      xl: '2560px' //desktop
    },
    extend: {
      fontFamily: {
        alkatra: ['Alkatra', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        NotoSansSC: ['Noto Sans SC', 'sans-serif']
      },
      colors: {
        title: '#B11717',
        'button-bgColor': '#861616',
        'main-bgColor': '#FDFFE8',
        white: '#FFFFFF',
        'quiz-bgColor': '#F4E4C0',
        black: '#20201D',
        'answer-fontColor': '#BE4400',
        brownColor: '#52250E'
      },
      fontSize: {
        'title-size': '118px',
        'compliment-size': '74px',
        'wrongPopup-size': '58px',
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
      }
    },
    backgroundImage: {
      'chinese-frame': "url('../assets/chinese-frame.png')"
    }
  },
  plugins: []
}
