import { Box, Container } from "@mui/material";
import MainContent from "./MainContent/MainContent";
import SideBar from "./SideBar/SideBar";

const Layout = () => {
  return (
    <Container disableGutters={true} maxWidth={false}>
      <Box sx={{ position: "relative" }}>
        <SideBar />
        <MainContent />
      </Box>
    </Container>
  );
};

export default Layout;
