import {createStyleSheet} from 'jss-theme-reactor';

const styleSheet = createStyleSheet('Site', (theme) => ({
  '@global': {
    html: {
      boxSizing: 'border-box'
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit'
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    a: {
      color: theme.palette.accent.A400,
      textDecoration: 'none'
    },
    'a:hover': {
      textDecoration: 'underline'
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto'
    }
  },
  root: {
    flexGrow: 1,
    padding: 0
  },
  appbar: {
    position: 'relative'
  },
  content : theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop:16,
    flex: '1 1 100%',
    maxWidth: '98%',
    margin: '0 auto',
  }),
}));

export default styleSheet;
