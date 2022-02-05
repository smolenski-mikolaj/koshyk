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
        black: "#383838",
        blue: "#2788E1",
        "blue-light": "#3090E9",
        light: "#E5E5E5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
