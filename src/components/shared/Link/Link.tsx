import React from "react";
import { Typography } from "@mui/material";

interface LinkProps {
  children?: any;
}

const Link: React.FC<LinkProps> = ({children}) => {
  return (
    <Typography
      style={{display: "inline", cursor: "pointer"}}  
      variant="body1"
      sx={{
        
        color: "#8692A6",
      }}
    >
      <b>
        <span style={{ color: "#001283" }}>{children}</span>
      </b>
    </Typography>
  );
};

export default Link;
