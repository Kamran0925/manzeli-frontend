import React from "react";
import Button from "@mui/material/Button";

interface StyledButtonProps {
  fullWidth?: boolean;
  margin?: string;
  color?: string;
  disabled?: boolean;
  title: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  fullWidth = false,
  margin,
  color = "#000000",
  disabled,
  title,
}) => (
  <Button
    variant="contained"
    fullWidth={fullWidth}
    disabled={disabled}
    sx={{
      padding: "15px 20px",
      maxWidth: "554px",
      backgroundColor: color,
      borderRadius: "40px",
      textTransform: "none",
      fontSize: "16px",
      margin: margin,
    }}
  >
    {title}
  </Button>
);

export default StyledButton;
