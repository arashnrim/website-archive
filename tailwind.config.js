module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Inter']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
