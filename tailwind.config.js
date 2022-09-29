/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
     screens: {
      sm: "400px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      ds: "1920px",
      dm: "2480px",
      dl: "2700px",
    },
    extend: {
        colors: {
        siloBlue: "#1c85eb",
        siloBlack: "#002343",
        siloGrey: "#f9f9f9",
        siloRed: "#fe886f",
        siloFaint: "#37474f",
        siloSky: "#B5DCFF",
      },
    },
  },
  plugins: [],
}
