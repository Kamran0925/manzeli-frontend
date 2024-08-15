import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./LeftQuoteMark.module.css";

const LeftQuoteMark = () => {
  return (
    <Box className={styles.box}>
      <Typography
        sx={{
          fontFamily: "Gayathri, sans-serif",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "96px",
          lineHeight: "117px",
          color: "#00DAF7",
        }}
      >
        “
      </Typography>
    </Box>
  );
};

export default LeftQuoteMark;
