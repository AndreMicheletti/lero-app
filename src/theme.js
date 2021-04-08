import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b33d25',
    },
    secondary: {
      main: '#946f49',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#3d3d3d',
    },
    text: {
      primary: '#fff',
      secondary: '#e6e6e6'
    },
  },
});

export default theme;
