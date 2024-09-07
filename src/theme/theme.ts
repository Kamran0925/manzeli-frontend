import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    // Main heading
    h3: {
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "45px",
      color: "#000000",
    },
    // Smaller heading
    h4: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#000000",
    },
    // Main paragraph
    body1: {
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "28px",
      color: "#8692A6",
    },
    // Smaller paragraph
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "21px",
      color: "#8692A6",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  //define complete pallete as defined here https://mui.com/material-ui/customization/color/
  palette: {
    primary: {
      main: "#001283",
    },
    secondary: {
      main: "#8692A6",
      dark: "#848199",
    },
    error: {
      light: "#FBE9EA",
      main: "#E80000",
    },
  },
});

export default theme;
