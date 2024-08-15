import React from "react";
import { Typography, Box } from "@mui/material";
import LeftQuoteMark from "../../LeftQuoteMark/LeftQuoteMark";
import MatrixIcon from "../../../assets/icons/ui/Matrix";
import styles from "./PrimarySection.module.css";

const PrimarySection = () => {
  return (
    <>
      <Box className={styles.box}>
        <div style={{ display: "flex" }}>
          <LeftQuoteMark />
          <Typography
            variant="h2"
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
          <div className={styles.div2}>
            <div className={styles.div3}>
              <MatrixIcon />
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default PrimarySection;
