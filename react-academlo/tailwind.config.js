module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFFFFF",
      yellow: "#F0A500",
      light_blue: "#334756",
      main_blue: "#082032",
      black: "#000000"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
