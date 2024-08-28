import { Container, Grid } from "@mui/material";

import PrimarySection from "./PrimarySection/PrimarySection";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import styles from "./authentication.module.css";

const Authentication = () => {
  const isLogin = false;
  return (
    <Container disableGutters maxWidth={false}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          className={`${styles.leftGrid} ${isLogin ? styles.loginImage : ""}`}
        >
          {isLogin && <PrimarySection />}
        </Grid>
        <Grid item xs={12} sm={12} md={8} className={styles.rightGrid}>
          {isLogin ? <Login /> : <Registration />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Authentication;
