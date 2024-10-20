import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <Box className={styles.mainContent}>
      <Outlet />
    </Box>
  );
};
export default Main;
