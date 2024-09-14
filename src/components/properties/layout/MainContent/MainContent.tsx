import React from "react";
import { Box, Typography } from "@mui/material";
import Notification from "../../../../assets/icons/ui/Notification";
import Profile from "../../../../assets/icons/ui/Profile";
import styles from "./MainContent.module.css";

const MainContent = () => {
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
    </Box>
  );
};

export default MainContent;
