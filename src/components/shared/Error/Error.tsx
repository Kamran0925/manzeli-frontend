import React from "react";
import { Box, Typography } from "@mui/material";

interface ErrorProps {
  messages: string[];
}

const Error: React.FC<ErrorProps> = ({ messages }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "14px 20px",
        gap: "8px",
        maxWidth: "554px",
        bgcolor: "rgba(232, 0, 0, 0.08)",
        borderRadius: "40px",
        marginTop: "12px",
        width: "100%",
      }}
    >
      {messages.map((msg, index) => (
        <Typography key={index} variant="body2" color="error">
          {msg}
        </Typography>
      ))}
    </Box>
  );
};

export default Error;
