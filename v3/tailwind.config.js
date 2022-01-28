const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "border-red-400",
    "border-amber-400",
    "border-violet-400",
    "border-blue-400",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'HK Grotesk'"],
        mono: ["'JetBrains Mono'"],
      },
      colors: {
        gray: colors.neutral,
      },
    },
  },
};
