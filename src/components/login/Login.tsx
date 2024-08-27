import { Container, Grid } from "@mui/material";
import SecondarySection from "./SecondarySection/SecondarySection";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} className={styles.leftGrid}></Grid>
        <Grid item xs={12} sm={12} md={8} className={styles.rightGrid}>
          <SecondarySection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
