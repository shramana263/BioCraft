/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      keyframes:{
        slide: {
          '0%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%':{transform:'translateX(-20%)'}
        },
        slideRight: {
          '0%': { transform: 'translateX(-20%)' },
          '100%':{transform:'translateX(0%)'}
        },
      },
      animation:{
        slide: 'slide ease-in-out 1s infinite',
        slideRight: 'slideRight ease-in-out 0.5s '
      },
    },
  },
  plugins: [require('tailwindcss-motion'),
    require('tailwindcss-animate')
  ],
  
}
// // tailwind.config.js
// module.exports = {
//   darkMode: 'class', // Enable dark mode using the 'class' strategy
//   // Other configurations...
// };