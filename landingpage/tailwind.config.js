













/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container:{
      padding:{
        DEFAULT:'15px'
      },
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px',
    },
    fontFamily:{
      primary:'DM Serif Display',
      secondary:'Jost'
    },
    backgroundImage:{
      hero:'url(/src/assets/hero/bg.jpg)',
      grid:'url(/src/assets/grid.png)',
      logo:'url(/src/assets/logo.svg',
     
    },
    extend: {
      colors:{
        primary:{
          DEFAULT:'#292f36',
          hover:'#343e4a'
        },
        secondary:'#4d5053',
        accent:{
          DEFAULT:'#cda274',
          secondary:'#f4f0ec',
          hover:'#b88c5d'
        }
      }
    },
  },
  plugins: [],
}