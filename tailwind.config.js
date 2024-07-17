/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg-project": "#EAEBEF",
        "hover-elements": "#F6F8FA"
      },
      fontFamily:{
        "poppins":["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

