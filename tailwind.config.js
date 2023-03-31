/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  variants: {
    extend: {
      colors: ['before']
    },
  },
  plugins: [require("daisyui")],
}
