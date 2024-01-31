/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px', //phone
      md: '768px',
      lg: '1024px',
      xl: '1440px' //desktop
    },
    extend: {
      colors: {
        title: '#B11717',
        'button-bgColor': '#861616',
        'main-bgColor': '#FDFFE8',
        white: '#FFFFFF',
        'quiz-bgColor': '#F4E4C0',
        black: '#20201D'
      }
    },

    fontFamily: {
      Alkarta: ['Alkatra', 'system-ui'],
      Outfit: ['Outfit', 'sans-serif'],
      NotoSansSC: ['Noto Sans SC', 'sans-serif']
    },
    lineHeight: {
      title: '1.10',
      list: '2.5'
    },
    // padding: {
    //   title: '100px'
    // },
    letterSpacing: {
      title: '2.8px'
    }
  },
  backgroundImage: {
    'chinese-frame': "url('../assets/chinese-frame.png')"
  },
  plugins: [[require('daisyui')]]
}
