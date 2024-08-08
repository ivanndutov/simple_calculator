/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#272727",
        secondary: "#da5265",
        functional: "#bdadad",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      fontSize: {
        base: "30px",
      },
      boxShadow: {
        custom: "20px 20px 4px 2px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
