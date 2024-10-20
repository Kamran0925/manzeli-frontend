import { Box, Container } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";

const Layout = () => {
  return (
    <Container disableGutters={true} maxWidth={false}>
      <Box sx={{ position: "relative" }}>
        <SideBar />
        <Main />
      </Box>
    </Container>
  );
};

export default Layout;
