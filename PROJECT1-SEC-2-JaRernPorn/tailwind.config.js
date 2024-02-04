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
        black: '#20201D',
        'answer-fontColor': '#FFD232'
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
