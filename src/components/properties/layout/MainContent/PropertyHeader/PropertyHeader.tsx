import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ProfileActions from "../ProfileActions/ProfileActions";
import Profile from "../../../../../assets/icons/ui/Profile";
import Notification from "../../../../../assets/icons/ui/Notification";
import styles from "./PropertyHeader.module.css";

const PropertyHeader: React.FC = () => {
  const [profileActions, setProfileActions] = useState(false);

  return (
    <Box className={styles.mainBar}>
      <Typography variant="h1" className={styles.mainHeading}>
        Welcome, John Doe!
      </Typography>
      <Box className={styles.mainBarIcons}>
        <Notification />
        <Profile
          background="#001283"
          fill="#FFF"
          onClick={() => setProfileActions(true)}
        />
        {profileActions && (
          <ProfileActions handleClose={() => setProfileActions(false)} />
        )}
      </Box>
    </Box>
  );
};

export default PropertyHeader;
