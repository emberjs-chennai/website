module.exports = {
  theme: {
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
      'amber-medium': '#E39774'
    },
    extend: {
      zIndex: {
        'negative': -1,
      }
    },
    borderColor: theme => ({
      default: theme('colors.grey-light'),
      ...theme('colors'),
    })
  },
  variants: {
    borderWidth: ['responsive', 'last']
  },
  plugins: []
};
