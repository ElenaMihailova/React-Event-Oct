import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    borders: {
      default: string;
      defaultRadius: number;
    };
  }
  interface ThemeOptions {
    borders?: {
      default: string;
      defaultRadius: number;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E88E5",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#000000DE",
      secondary: "#00000099",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
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
    h2: {
      fontSize: "34px",
      lineHeight: "123.5%",
      letterSpacing: "0.25px",
      fontWeight: "400",
    },
    h4: {
      fontSize: "16px",
      lineHeight: "150%",
      letterSpacing: "0.15px",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 400,
    },
    h6: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "160%", 

    },
  },
  shape: {
    borderRadius: 4,
  },
  borders: {
    default: "1px solid #E0E0E0",
    defaultRadius: 1,
  },
});

export default theme;
