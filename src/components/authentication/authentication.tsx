import { Container, Grid } from "@mui/material";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import classNames from "classnames";
import PrimarySection from "./PrimarySection/PrimarySection";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ResetPassword from "./ResetPassword/ResetPassword";
import { useFormContext } from "../../context/FormContext";
import styles from "./authentication.module.css";

const Authentication = () => {
  const location = useLocation();
  const loginRoutes = ["/login", "/forgot-password", "/reset-password"];
  const isLoginRoute = loginRoutes.includes(location.pathname);
  const { formState } = useFormContext();

  return (
    <Container disableGutters maxWidth={false}>
      {formState.step < 5 ? (
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
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="*" element={<Navigate to="login" />} />
            </Routes>
          </Grid>
        </Grid>
      ) : (
        <Registration />
      )}
    </Container>
  );
};

export default Authentication;
