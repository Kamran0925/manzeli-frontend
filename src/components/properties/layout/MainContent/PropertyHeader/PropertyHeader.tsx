import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import ProfileActions from "../ProfileActions/ProfileActions";
import Profile from "../../../../../assets/icons/ui/Profile";
import Notification from "../../../../../assets/icons/ui/Notification";
import styles from "./PropertyHeader.module.css";

const PropertyHeader: React.FC = () => {
  const [profileActions, setProfileActions] = useState(false);
  const profileActionsRef = useRef<HTMLDivElement>(null);

  const handleClose = () => setProfileActions(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileActionsRef.current &&
        !profileActionsRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <ProfileActions handleClose={handleClose} ref={profileActionsRef} />
        )}
      </Box>
    </Box>
  );
};

export default PropertyHeader;
