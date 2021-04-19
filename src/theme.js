import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const GREEN_100 = "#112d00"
export const GREEN_900 = "#00ff2d"
export const GREEN_BLUE_900 = "#00ff97"
export const GREEN_BLUE_100 = "#183319"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: GREEN_900,
    },
    secondary: {
      main: GREEN_900,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000000',
      paper: '#121512',
      green: GREEN_100
    },
    text: {
      primary: GREEN_BLUE_900,
      secondary: GREEN_900,
      icon: GREEN_900,
      white: "#fff"
    },
  },
  typography: {
    fontFamily: "SourceCodePro, RetroGaming, VCRMono, monospace"
  },
});

export default theme;
