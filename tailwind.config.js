module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-black': '#141519',
        'main-gray': {
          'dark': '#1F2630',
          'light': '#7C8898'
        },
        'orange': {
          '400': '#FC7613'
        }
      },
      width: {
        'box-type': '400px'
      },
      height: {
        'box-type': '375px'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
