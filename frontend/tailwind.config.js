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
          normal_hover : '#e28314',
          dark_hover : '#97580d'
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
          darker : '#06284d',
          light_active : '#b5d3f4'
        },
      },
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        work_intro: "url('../public/images/work-intro.jpg')",
        live_intro: "url('../public/images/live-intro.jpg')",
        
       
      }
    },
  },
  plugins: [],
}

