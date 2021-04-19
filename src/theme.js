import { red, green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const PRIMARY = "#00f5f7"
export const PRIMARY_BACKGROUND = "#001925"

export const SECONDARY = "#f7c300"
export const SECONDARY_BACKGROUND = "#796000"

export const CONNECTED = 'green'
export const ERROR = 'red'

export const WHITE = "#FFF"
export const BLACK = "#000"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY,
    },
    secondary: {
      main: PRIMARY,
    },
    accent: {
      main: SECONDARY
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#111315',
      paper: BLACK,
      primary: PRIMARY_BACKGROUND
    },
    text: {
      primary: PRIMARY,
      secondary: PRIMARY,
      accent: PRIMARY,
      icon: PRIMARY,
      white: WHITE
    },
  },
  typography: {
    fontFamily: "SourceCodePro, RetroGaming, VCRMono, monospace"
  },
  overrides: {
    MuiInputBase: {
      input: {
        color: WHITE,
      },
    },
  },
});

export default theme;
