/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/preline/dist/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto'],
        Montserrat: ['Montserrat'],
        Poppins: ['Poppins'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    //require('@tailwindcss/forms'),
    require('preline/plugin'),
    require('flowbite/plugin'),
  ],
}

