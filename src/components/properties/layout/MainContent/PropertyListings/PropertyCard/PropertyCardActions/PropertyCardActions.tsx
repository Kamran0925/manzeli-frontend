import React from "react";
import { Box, Typography } from "@mui/material";
import Pencil from "../../../../../../../assets/icons/ui/Pencil";
import Trash from "../../../../../../../assets/icons/ui/Trash";
import Cross from "../../../../../../../assets/icons/ui/Cross";
import styles from "./PropertyCardActions.module.css";

interface PropertyCardActionsProps {
  handleClose: React.MouseEventHandler<HTMLDivElement>;
}

const PropertyCardActions: React.FC<PropertyCardActionsProps> = ({
  handleClose,
}) => {
  return (
    <Box className={styles.propertyCardActions}>
      <Box component="div" className={styles.closeIcon} onClick={handleClose}>
        <Cross />
      </Box>
      <Box className={styles.actionsAlign}>
        <Box className={styles.actionsContainer}>
          <Pencil />
          <Typography className={styles.actionsFont}>Edit</Typography>
        </Box>
        <Box className={styles.actionsContainer}>
          <Trash />
          <Typography className={styles.actionsFont}>Delete</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyCardActions;
