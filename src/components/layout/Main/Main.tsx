import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Main.module.css";

const Main = () => {
  const location = useLocation();
  const isSettingsRoute = location.pathname === "/settings";

  return (
    <Box
      className={styles.mainContent}
      sx={{
        backgroundColor: isSettingsRoute ? "#FFF" : "transparent",
      }}
    >
      <Outlet />
    </Box>
  );
};
export default Main;
