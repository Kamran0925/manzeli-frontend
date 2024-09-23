import React, { useState } from "react";
import { Box } from "@mui/material";
import Menu from "../../../../../assets/icons/ui/Menu";
import GridItem from "../../../../../assets/icons/ui/GridItem";
import styles from "./PropertyViewToggle.module.css";

const PropertyViewToggle: React.FC = () => {
  const [gridView, setGridView] = useState(false);

  return (
    <Box className={styles.iconContainer}>
      <Box
        className={styles.menuContainer}
        onClick={() => setGridView(false)}
        sx={{
          backgroundColor: !gridView ? "#001283" : "transparent",
          color: !gridView ? "#FFF" : "#000",
        }}
      >
        <Menu fill={!gridView ? "#FFF" : "#000"} />
      </Box>
      <Box
        className={styles.menuContainer}
        onClick={() => setGridView(true)}
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
