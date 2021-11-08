const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './public/**/*.html',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        gray: colors.blueGray,
        primary: colors.teal,
        secondary: colors.sky,
        success: colors.green,
        info: colors.purple,
        warning: colors.yellow,
        danger: colors.red,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
