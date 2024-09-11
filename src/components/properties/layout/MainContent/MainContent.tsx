import React from "react";
import { Box, Typography } from "@mui/material";
import Notification from "../../../../assets/icons/ui/Notification";
import Profile from "../../../../assets/icons/ui/Profile";
import PropertyFilters from "./PropertyFilters/PropertyFilters";
import PropertyForm from "./PropertyForm/PropertyForm";
import styles from "./MainContent.module.css";

const Main = () => {
  return (
    <Box className={styles.mainContent}>
      <Box className={styles.mainBar}>
        <Typography variant="h1" className={styles.mainHeading}>
          Welcome, John Doe!
        </Typography>
        <Box className={styles.mainBarIcons}>
          <Notification />
          <Profile />
        </Box>
      </Box>

      <Box className={styles.subTitleBar}>
        <Typography className={styles.subTitle}>Add Property</Typography>
      </Box>

      <PropertyFilters />

      <PropertyForm />
    </Box>
  );
};

export default Main;
