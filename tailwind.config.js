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
    extend: {
      spacing: {
        13: "3.05rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
        98: "27rem",
        100: "30rem",
        102: "33rem",
        104: "36rem",
        106: "39rem",
        108: "42rem",
        110: "45rem",
        115: "60rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
