/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
        'resultButton-size': '36px',
        'sm-title-size': '100px',
        'mobile-title-size': '80px',
        'sub-title-size': '14px'
      },
      lineHeight: {
        title: '1.10'
      },
      padding: {
        title: '42px'
        // title: '100px'
      },
      letterSpacing: {
        'sub-title': '2.8px',
        title: '2.8px',
        subtitle: '1.5px'
      },
      screens: {
        mobile: '320px',
        sm: '480px', //phone
        md: '768px',
        lg: '1024px',
        xl: '1440px' //desktop
      },
      width: {
        'catePage-20': '73px'
      },

      backgroundImage: {
        'chinese-frame': "url('../assets/chinese-frame.png')"
      },
      lineHeight: {
        title: '1.10',
        list: '2.3',
        listMobile: '2'
      }
      // padding: {
      //   title: '100px'
      // },
    },
    plugins: [
      [
        require('daisyui'),
        require('tailwind-scrollbar')({ nocompatible: true })
      ]
    ]
  }
}
