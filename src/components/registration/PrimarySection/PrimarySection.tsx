import React from "react";
import { Typography, Box } from "@mui/material";
import MatrixIcon from "../../../assets/icons/ui/Matrix";
import styles from "./PrimarySection.module.css";

const PrimarySection = () => {
  return (
    <>
      <Box className={styles.box}>
        <Box sx={{ display: "flex" }}>
          <Box className={styles.box1}>
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

          <Typography
            variant="h2"
            className={styles.content}
            sx={{
              fontSize: {
                xs: "20px",
                sm: "30px",
                md: "40px",
              },
              lineHeight: {
                xs: "40px",
                sm: "50px",
                md: "58px",
              },
              padding: {
                xs: "10px 0px",
              },
            }}
          >
            Effortlessly manage your rental properties and grow your business.
          </Typography>
          <Box className={styles.div2}>
            <Box className={styles.div3}>
              <MatrixIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PrimarySection;
