module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
     
    },
    extend: {
      colors: {
        primary: {
          blue: "#010D3C", // headings and backgrounds
          green: "#40DCB6", //Actions (texts/symbols/..)
          grey3: "#808093", // Pragraphs and headings
          grey2: "#A6A6BB", // Headings
          grey1: "#CACAD8", // headings/icon
        },
        secondary: {
          blue: "#DAE8FF",
          yellow: "#FEF1D1",
          lightRed: "#FFECEA",
        },
      },

    },
  }, 
  variants: {
    extend: {},
  },
  plugins: [],
};
