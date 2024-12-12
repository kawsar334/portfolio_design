/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#9538E2', 
        blueText:"#333",
        primary:"#302f47",
        secondary:"#151611",
        dark:"#232d3f",
        white:"#fff",

           
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
