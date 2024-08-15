import React from "react";
import { Typography } from "@mui/material";

const Link = () => {
  return (
    <Typography
      sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: {
          xs: "14px",
          md: "18px",
        },
        lineHeight: {
          xs: "20px",
          md: "28px",
        },
        color: "#8692A6",
        textAlign: "end",
      }}
    >
      Already have an account?{" "}
      <b>
        <span style={{ color: "#001283" }}>Sign In</span>
      </b>
    </Typography>
  );
};

export default Link;
