import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ProfileActions from "./ProfileActions/ProfileActions";
import Profile from "../../../assets/icons/ui/Profile";
import Notification from "../../../assets/icons/ui/Notification";
import classNames from "classnames";
import styles from "./Header.module.css";

interface HeaderProps {
  title?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Welcome, John Doe!",
  className,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles.mainBar}>
      <Typography
        variant="h1"
        className={classNames(
          styles.mainHeading,
          className && styles[className],
        )}
      >
        {title}
      </Typography>
      <Box className={styles.mainBarIcons}>
        <Notification />
        <Profile background="#001283" fill="#FFF" onClick={handleClick} />
        <ProfileActions anchorEl={anchorEl} handleClose={handleClose} />
      </Box>
    </Box>
  );
};

export default Header;
