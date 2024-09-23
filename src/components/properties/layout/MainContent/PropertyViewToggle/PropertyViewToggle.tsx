import React from "react";
import { Box } from "@mui/material";
import Menu from "../../../../../assets/icons/ui/Menu";
import GridItem from "../../../../../assets/icons/ui/GridItem";
import styles from "./PropertyViewToggle.module.css";

interface PropertyViewToggleProps {
  gridView: boolean;
  onToggle: (view: boolean) => void;
}

const PropertyViewToggle: React.FC<PropertyViewToggleProps> = ({
  gridView,
  onToggle,
}) => {
  return (
    <Box className={styles.iconContainer}>
      <Box
        className={styles.menuContainer}
        onClick={() => onToggle(false)}
        sx={{
          backgroundColor: !gridView ? "#001283" : "transparent",
          color: !gridView ? "#FFF" : "#000",
        }}
      >
        <Menu fill={!gridView ? "#FFF" : "#000"} />
      </Box>
      <Box
        className={styles.menuContainer}
        onClick={() => onToggle(true)}
        sx={{
          backgroundColor: gridView ? "#001283" : "transparent",
          color: gridView ? "#FFF" : "#000",
        }}
      >
        <GridItem fill={gridView ? "#FFF" : "#000"} />
      </Box>
    </Box>
  );
};

export default PropertyViewToggle;
