import React from "react";
import { Container, Grid } from "@mui/material";

import PrimarySection from "../../components/registration/PrimarySection/PrimarySection";

import { useFormContext } from "../../context/FormContext";
import { renderPage } from "../../utils/renderPage";
import Plans from "../../components/registration/Plans/Plans";
import styles from "./AccountTypeSelectable.module.css";

const AccountTypeSelectable = () => {
  const { formState } = useFormContext();
  const { step } = formState;

  if (step === 3) {
    return <Plans />;
  }

  return (
    <Container disableGutters maxWidth={false}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} className={styles.leftGrid}>
          <PrimarySection />
        </Grid>
        <Grid item xs={12} sm={12} md={8} className={styles.rightGrid}>
          {renderPage(step)}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountTypeSelectable;
