import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  typography: {
    h1: {
      fontSize: 40,
      fontWeight: 500,
    },
    h2: {
      fontSize: 30,
      fontWeight: 500,
    },
    h3: {
      fontSize: 20,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 500,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#17a5ea",
    },
    secondary: {
      main: "#2dd4bf",
    },
    background: {
      default: "#EEE",
      paper: "#FFF",
    },
  },
});

export const instructionsTheme = createTheme({
  typography: {
    fontFamily: "Oracle, sans-serif",
    fontSize: 12,
    h1: {
      fontSize: 60,
      fontWeight: 500,
      letterSpacing: -1.5,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.6,
    },
  },
  palette: {
    primary: {
      main: "#582AB9",
    },
    text: {
      primary: "#fcfdf8",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          shadow: "none",
          paddingTop: 7,
          paddingBottom: 7,
          paddingLeft: 15,
          paddingRight: 15,
          textTransform: "none",
          fontSize: 13,
          fontWeight: 400,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        color: "text.primary",
      },
    },
  },
});
