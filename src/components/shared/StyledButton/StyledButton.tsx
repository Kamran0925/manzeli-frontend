import React from "react";
import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";

interface StyledButtonProps {
  fullWidth?: boolean;
  styles?: SxProps<Theme>;
  disabled?: boolean;
  title: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  fullWidth = false,
  styles,
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
      borderRadius: "40px",
      textTransform: "none",
      fontSize: "16px",
      ...styles,
    }}
  >
    {title}
  </Button>
);

export default StyledButton;
