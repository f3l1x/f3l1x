module.exports = {
  mode: 'jit',
  purge: [
    './content/**/*.md',
    './content/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      inset: {
        '1/2': '50%'
      },
      fontFamily: {
        'body': ['Poppins', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      fontSize: {
        '2xs': '.65rem'
      },
      gridTemplateColumns: {
        'projects': 'min-content auto min-content',
      },
      width: {
        "96": "24rem"
      }
    }
  },
  variants: {},
  plugins: []
}
