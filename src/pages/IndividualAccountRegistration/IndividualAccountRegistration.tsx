import React from "react";
import { Container, Grid } from "@mui/material";

import PrimarySection from "../../components/registration/PrimarySection/PrimarySection";

import SignUp from "../../components/registration/SignUp/SignUp";
import styles from "./IndividualAccountRegistration.module.css";

const IndividualAccountRegistration = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} className={styles.leftGrid}>
          <PrimarySection />
        </Grid>
        <Grid item xs={12} sm={12} md={8} className={styles.rightGrid}>
          <SignUp />
        </Grid>
      </Grid>
    </Container>
  );
};

export default IndividualAccountRegistration;
