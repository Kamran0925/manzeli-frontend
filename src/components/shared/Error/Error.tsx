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
        padding: "14px",
        gap: "8px",
        maxWidth: "554px",
        bgcolor: "rgba(59, 76, 184, 0.11)",
        borderRadius: "20px",
      }}
    >
      {messages.map((msg, index) => (
        <Typography key={index} variant="body2" color="#6D6D6D">
          {msg}
        </Typography>
      ))}
    </Box>
  );
};

export default Error;
