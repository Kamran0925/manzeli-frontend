import React from "react";
import { Box, Typography } from "@mui/material";
import Profile from "../../../../../assets/icons/ui/Profile";
import Logout from "../../../../../assets/icons/ui/Logout";
import styles from "./ProfileActions.module.css";

interface ProfileActionsProps {
  handleClose: React.MouseEventHandler<HTMLDivElement>;
}

const ProfileActions: React.FC<ProfileActionsProps> = ({ handleClose }) => {
  return (
    <Box className={styles.profileActions}>
      <Box className={styles.actionsAlign}>
        <Box className={styles.actionsContainer}>
          <Profile height={13} width={13} fill="#7F7F7F" background="#FFF" />
          <Typography className={styles.actionsFont}>
            Profile Settings
          </Typography>
        </Box>
        <Box
          component="div"
          className={styles.actionsContainer}
          onClick={handleClose}
        >
          <Logout />
          <Typography className={styles.actionsFont}>Logout</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileActions;
