import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E88E5",
    },
    secondary: {
      main: "#ff4081",
    },
    text: {
      primary: "#000000DE",
      secondary: "#00000099",
    },
    background: {
      default: "#f5f5f5",
    },
  },

  typography: {
    fontFamily: "Roboto, Arial, sans-serif",

    body1: {
      fontSize: "16px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
    },
    h5: {
      fontSize: "24px",
      fontWeight: 400,
    },
    h6: {
      fontSize: "20px",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
