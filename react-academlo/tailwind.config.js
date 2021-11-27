module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFFFFF",
      yellow: "#F0A500",
      light_blue: "#334756",
      main_blue: "#082032",
      black: "#000000",
      white_bg: "#F2F2F2",
      pink: "#ff416c",
      red: "#ff416c"
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px"
      // => @media (min-width: 1280px) { ... }
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
