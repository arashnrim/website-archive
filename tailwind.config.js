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
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Clash Display"'],
        sans: ["Inter"],
        mono: ["'JetBrains Mono'"],
      },
      height: {
        "screen-1/2": "50vh",
      },
      minHeight: {
        "screen-1/3": "33vh",
      },
      backgroundOpacity: {
        "2-5": "0.025",
      },
      colors: {
        gray: colors.trueGray,
      },
    },
  },
};
