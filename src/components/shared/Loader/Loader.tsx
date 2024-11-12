import React from "react";
import { Box } from "@mui/material";
import loadingGif from "../../../assets/gifs/loading-bar.gif";

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
          width: "265px",
          height: "265px",
          background: `url(${loadingGif}) transparent 50% / cover no-repeat`,
        }}
      ></Box>
    </Box>
  );
};

export default Loader;
