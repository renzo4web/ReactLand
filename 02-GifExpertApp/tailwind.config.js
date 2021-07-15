module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      scale: {
        100: "1",
        101: "1.01",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
