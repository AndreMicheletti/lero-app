import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7d130c',
    },
    secondary: {
      main: '#FFCF99',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#1E1E24',
    },
    text: {
      primary: '#FFF8F0',
      secondary: '#e6e6e6'
    },
  },
  typography: {
    fontFamily: "SourceCodePro, RetroGaming, VCRMono, monospace"
  },
});

export default theme;
