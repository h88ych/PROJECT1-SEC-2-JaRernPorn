/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alkatra: ["Alkatra", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        title: "#B11717",
        "button-bgColor": "#861616",
        "main-bgColor": "#FDFFE8",
        white: "#FFFFFF",
        "quiz-bgColor": "#F4E4C0",
        black: "#20201D",
      },
      screens:{
        mobile:'320px',
        sm:'480px', //phone
        md:'768px',
        lg:'1024px',
        xl:'1440px' //desktop
      }
    }
  },
  plugins: [],
};

