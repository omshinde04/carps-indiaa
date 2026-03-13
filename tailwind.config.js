/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e63746",
        "background-light": "#f8f6f6",
        "background-dark": "#211112",
        "navy-deep": "#1a1617",
      },

      fontFamily: {
        display: ["Lexend", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },

      boxShadow: {
        nav: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};