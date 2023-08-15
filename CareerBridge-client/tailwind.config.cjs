module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary-color': '#333',
        'title-color': 'var(--title-color)',
        'text-color': 'var(--text-color)',
        'body-color': 'var(--body-color)',
        'container-color': 'var(--container-color)',
        'border-color': 'var(--border-color)',
        'white-text': 'var(--white-text)',
      },
      fontFamily: {
        body: ['var(--body-font)', 'sans-serif'],
        second: ['var(--second-font)', 'cursive'],
        code: ['var(--code-font)', 'cursive'],
      },
      fontSize: {
        'big': 'var(--big-font-size)',
        'h1': 'var(--h1-font-size)',
        'h2': 'var(--h2-font-size)',
        'h3': 'var(--h3-font-size)',
        'large': 'var(--large-font-size)',
        'normal': 'var(--normal-font-size)',
        'small': 'var(--small-font-size)',
        'tiny': 'var(--tiny-font-size)',
      },
      fontWeight: {

      },
    },
  },
  variants: {},
  plugins: [],
}
