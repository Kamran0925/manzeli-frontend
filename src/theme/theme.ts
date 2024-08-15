import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontFamily: "Kaisei HarunoUmi, sans-serif",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "58px",
      color: "#FFFFFF",
      textAlign: "left",
    },
    h3: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "30px",
      lineHeight: "45px",
      color: "#000000",
    },
    h4: {
      fontFamily: "Poppins, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "28px",
      color: "#8692A6",
    },
    h6: {
      fontFamily: "Poppins, sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#000000",
      display: "flex",
      alignItems: "center",
    },
    body1: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "28px",
      color: "#8692A6",
    },
    body2: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "21px",
      color: "#8692A6",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#000000",
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
});

export default theme;
