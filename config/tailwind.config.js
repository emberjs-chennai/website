module.exports = {
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '4.5rem'
    },
    colors: {
      'transparent': 'transparent',
      'blue-dark': '#156F9C',
      'blue-light': '#70AFD0',
      'red-dark': '#b14d38',
      'yellow': '#fbc840',
      'white': '#fdfdfd',
      'grey-light': '#fdf7f6',
      'grey-dark': '#434343',
      'black': '#212121',
      'violet': '#653881',
      'brown': 'rgba(27, 27, 27, 0.78)',
      'amber': '#df5e49',
      'amber-light': '#ffbaae',
    },
    borderColor: theme => ({
      default: theme('colors.grey-light'),
      ...theme('colors'),
    })
  },
  variants: {},
  plugins: []
};
