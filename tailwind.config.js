module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {},
    fontFamily: {
      poppins: ["Poppins", "cursive"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      dark: "#2c2c2c",
      primary: "#C83B52",
      secondary: "#59bfff",
      smoke: "#c4c4c4",
      danger: "#e3342f",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      dark: "#2c2c2c",
      primary: "#C83B52",
      secondary: "#59bfff",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
