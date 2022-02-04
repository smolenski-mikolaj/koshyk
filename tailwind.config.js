module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2788E1",
        "blue-light": "#3090E9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
