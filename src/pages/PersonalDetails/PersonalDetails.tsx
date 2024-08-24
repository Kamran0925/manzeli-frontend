import React from "react";
import { Container, Grid } from "@mui/material";

import PrimarySection from "../../components/registration/PrimarySection/PrimarySection";

import ContactDetails from "../../components/registration/ContactDetails/ContactDetails";
import styles from "./PersonalDetails.module.css";

const PersonalDetails = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} className={styles.leftGrid}>
          <PrimarySection />
        </Grid>
        <Grid item xs={12} sm={12} md={8} className={styles.rightGrid}>
          <ContactDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PersonalDetails;
