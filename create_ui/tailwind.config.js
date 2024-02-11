/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleBtn: {
          DEFAULT: '#825AF6',
        },
        btnBorder: {
          DEFAULT : '#757575',
        },
        btnText : {
          DEFAULT : '#C6C6C6',
        },
      },
    },
  },
  plugins: [],
};