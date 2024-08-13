const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      orange: {
        100: '#FDF8F3'
      },
      green: {
        700: '#687B5E',
        800: '#515F49'
      }
    },
    extend: {
      fontFamily: {
        inria: ["Inria Serif", "serif"],
        luxurious: ["Luxurious Script", "cursive"],
        lato: ["Lato", "sans-serif"],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
