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
          active : '#feddb7',
          normal_hover : '#e28314'
        },
        navyBlue: {
          normal: '#0c264c',
          dark_hover : '#07172e'
        },
        
        skyBlue: {
          normal: '#bcdcff',
        },
        PrimaryBlue: {
          normal: '#1071db',
          darker : '#06284d'
        },
      },
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'work_intro': "url('../public/images/work-intro.jpg')",
        
       
      }
    },
  },
  plugins: [],
}

