import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const PRIMARY = "#fb5b5a"
export const PRIMARY_BACKGROUND = "#461919"

export const SECONDARY = "#00f5f7"
export const SECONDARY_BACKGROUND = "#001925"

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
      default: SECONDARY_BACKGROUND,
      paper: SECONDARY_BACKGROUND,
      primary: PRIMARY_BACKGROUND
    },
    text: {
      primary: PRIMARY,
      secondary: PRIMARY,
      accent: SECONDARY,
      icon: PRIMARY,
      white: WHITE
    },
  },
  typography: {
    fontFamily: "SourceCodePro, RetroGaming, VCRMono, monospace"
  },
  overrides: {
    MuiInput: {
      'underline:hover': {
        borderBottom: `2px solid ${SECONDARY}`
      }
    },
    MuiInputBase: {
      // Nome da regra
      input: {
        // Algum CSS
        color: WHITE,
      },
    },
  },
});

export default theme;
