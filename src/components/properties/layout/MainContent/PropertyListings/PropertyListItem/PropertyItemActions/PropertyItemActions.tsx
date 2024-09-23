import React from "react";
import { Box, Typography } from "@mui/material";
import Pencil from "../../../../../../../assets/icons/ui/Pencil";
import Trash from "../../../../../../../assets/icons/ui/Trash";
import Cross from "../../../../../../../assets/icons/ui/Cross";
import styles from "./PropertyItemActions.module.css";

interface PropertyItemActionsProps {
  handleClose: React.MouseEventHandler<HTMLDivElement>;
}

const PropertyItemActions: React.FC<PropertyItemActionsProps> = ({
  handleClose,
}) => {
  return (
    <Box className={styles.propertyItemActions}>
      <Box className={styles.propertyItemContainer}>
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
    </Box>
  );
};

export default PropertyItemActions;
