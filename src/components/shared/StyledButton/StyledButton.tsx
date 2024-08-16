import React from "react";
import Button from "@mui/material/Button";

interface StyledButtonProps {
  fullWidth?: boolean;
  margin?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  fullWidth = false,
  margin,
}) => (
  <Button
    variant="contained"
    fullWidth={fullWidth}
    sx={{
      padding: "15px 20px",
      maxWidth: "554px",
      backgroundColor: "#001283",
      borderRadius: "40px",
      textTransform: "none",
      fontSize: "16px",
      margin: margin,
    }}
  >
    Register Account
  </Button>
);

export default StyledButton;
