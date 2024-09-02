import { Container, Grid } from "@mui/material";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import classNames from "classnames";
import PrimarySection from "./PrimarySection/PrimarySection";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import styles from "./authentication.module.css";

const Authentication = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";

  return (
    <Container disableGutters maxWidth={false}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          className={classNames(styles.leftGrid, {
            [styles.loginImage]: isLoginRoute,
          })}
        >
          {!isLoginRoute && <PrimarySection />}
        </Grid>
        <Grid item xs={12} sm={12} md={8} className={styles.rightGrid}>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="*" element={<Navigate to="login" />} />
          </Routes>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Authentication;
