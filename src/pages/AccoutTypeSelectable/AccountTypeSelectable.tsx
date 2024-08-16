import React from "react";
import { Container, Grid } from "@mui/material";

import PrimarySection from "../../components/registration/PrimarySection/PrimarySection";
import SecondarySection from "../../components/registration/SecondarySection/SecondarySection";

import styles from "./AccountTypeSelectable.module.css";

const AccountTypeSelectable = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} className={styles.leftGrid}>
          <PrimarySection />
        </Grid>
        <Grid item xs={12} sm={12} md={8} className={styles.rightGrid}>
          <SecondarySection />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountTypeSelectable;
