/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orange: {
          normal: '#fb9216',
        },
        navyBlue: {
          normal: '#0c264c',
        },
        navyBlue: {
          normal: '#0c264c',
        },
        skyBlue: {
          normal: '#bcdcff',
        },
        PrimaryBlue: {
          normal: '#1071db',
        },
      },
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

