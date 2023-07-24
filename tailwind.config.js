/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  colors:{
      'green': '#008000',
    },
    fontFamily :{
      vazir: ["vazir"],
      Vazirtitr: ["Vazirtitr"],
      vazirmedium: ["vazirmedium"],
    }},
  },
  plugins: [],
}

