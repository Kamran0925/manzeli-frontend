import React from "react";
import { Box, Container } from "@mui/material";
import MainContent from "./MainContent/MainContent";
import SideBar from "./SideBar/SideBar";

const Layout = () => {
  return (
    <Container disableGutters={true} maxWidth={false} sx={{ p: 0 }}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <SideBar />
        <MainContent />
      </Box>
    </Container>
  );
};

export default Layout;
