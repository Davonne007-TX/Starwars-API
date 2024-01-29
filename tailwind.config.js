/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audio: "'Audiowide', sans-serif",
      },
      colors: {
        darkRed: "#b0091f",
      },
    },
  },
  plugins: [],
};
