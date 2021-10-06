const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    safelist: [
      "border-red-400",
      "border-yellow-400",
      "border-purple-400",
      "border-blue-400",
    ],
  },
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Clash Display"'],
        sans: ["Inter"],
        mono: ["'JetBrains Mono'"],
      },
      colors: {
        gray: colors.trueGray,
      },
    },
  },
};
