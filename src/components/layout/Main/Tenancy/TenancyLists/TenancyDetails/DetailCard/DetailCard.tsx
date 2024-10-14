import React from "react";
import { Box, Typography } from "@mui/material";
import { tenantDetails } from "../tenantDetails";
import styles from "./DetailCard.module.css";

const DetailCard: React.FC = () => {
  return (
    <>
      {tenantDetails.map((tenant, index) => (
        <Box key={index} className={styles.detailsBox}>
          <Typography className={styles.title2}>{tenant.title}</Typography>
          <Box className={styles.titleContainer}>
            {tenant.details.map((detail, detailIndex) => (
              <Box key={detailIndex} className={styles.titleContainer2}>
                <Typography className={styles.subtitle1}>
                  {detail.label}
                </Typography>
                <Typography className={styles.subtitle2}>
                  {detail.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default DetailCard;
