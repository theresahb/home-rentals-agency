/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Manrope: ['Manrope', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        DMSans: ['DM Sans', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        Assistant: ['Assistant', 'sans-serif'],
      },
      
      colors:{
        orange: '#F4511E',
        ash: '#BDBDBD'
      },
    },

    screens: {
      'xx': {'min': '100px', 'max': '768px'},
      'xs': {'max': '500px'},
      'sm':	'640px',
      'md':	'768px',
      'lg':	'1024px',
      'xl':	'1280px',
      '2xl':	'1536px',
    },
  },
  plugins: [],
}

