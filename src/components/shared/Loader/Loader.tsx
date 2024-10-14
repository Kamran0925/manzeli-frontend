import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      height="100vh"
      mt={5}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <CircularProgress color="primary" />
        Loading...
      </Box>
    </Box>
  );
};

export default Loader;
