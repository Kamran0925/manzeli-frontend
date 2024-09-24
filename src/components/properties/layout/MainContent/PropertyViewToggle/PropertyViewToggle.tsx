import React from "react";
import { Box } from "@mui/material";
import Menu from "../../../../../assets/icons/ui/Menu";
import GridItem from "../../../../../assets/icons/ui/GridItem";
import styles from "./PropertyViewToggle.module.css";

interface StyledMenuBoxProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const StyledMenuBox: React.FC<StyledMenuBoxProps> = ({
  isActive,
  onClick,
  children,
}) => (
  <Box
    className={styles.menuContainer}
    onClick={onClick}
    sx={{
      backgroundColor: isActive ? "#001283" : "transparent",
      color: isActive ? "#FFF" : "#000",
    }}
  >
    {children}
  </Box>
);

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
      <StyledMenuBox isActive={!gridView} onClick={() => onToggle(false)}>
        <Menu fill={!gridView ? "#FFF" : "#000"} />
      </StyledMenuBox>
      <StyledMenuBox isActive={gridView} onClick={() => onToggle(true)}>
        <GridItem fill={gridView ? "#FFF" : "#000"} />
      </StyledMenuBox>
    </Box>
  );
};

export default PropertyViewToggle;
