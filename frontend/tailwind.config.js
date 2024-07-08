import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors:{
        orange: {
          normal: '#fb9216',
          active : '#feddb7',
          normal_hover : '#e28314',
          dark_hover : '#97580d',
          light : '#fff4e8'
        },
        navyBlue: {
          normal: '#0c264c',
          dark_hover : '#07172e',
          light : '#e7e9ed'
        },
        
        skyBlue: {
          normal: '#bcdcff',
          dark_active : '#556373'
        },
        PrimaryBlue: {
          normal: '#1071db',
          darker : '#06284d',
          light_active : '#b5d3f4',
          dark_active : '#073363'
        },
      },
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        // Custom row templates
        'custom-layout': '1fr 1fr 0.5fr 1fr',
      },
    },
  },
  plugins: [],
}

