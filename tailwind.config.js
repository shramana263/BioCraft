/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        slide: {
          '0%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%':{transform:'translateX(-20%)'}
        },
      },
      animation:{
        slide: 'slide ease-in-out 1s infinite'
      },
    },
  },
  plugins: [],
}