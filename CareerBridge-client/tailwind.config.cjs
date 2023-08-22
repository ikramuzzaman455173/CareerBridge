module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color": "#333",
        "title-color": "cyan",
        "text-color": "black",
        // "body-color": "var(--sajim-color)",
        "body-color": "#e60b0b",
        color: "#1adb4e",
        "container-color": "var(--container-color)",
        "border-color": "var(--border-color)",
        "white-text": "var(--white-text)",
      },
      fontFamily: {
        // "body-font": "var(--body-font)",
        // // second: ["Inter", "sans-serif"],
        // code: ["Merienda", "cursive"],
      },
      fontSize: {
        big: "var(--big-font-size)",
        h1: "var(--h1-font-size)",
        h2: "var(--h2-font-size)",
        h3: "var(--h3-font-size)",
        large: "var(--large-font-size)",
        normal: "var(--normal-font-size)",
        small: "var(--small-font-size)",
        tiny: "var(--tiny-font-size)",
      },
      fontWeight: {},
    },
  },
  variants: {},
  plugins: [],
};

