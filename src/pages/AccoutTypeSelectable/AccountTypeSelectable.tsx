import React from "react";
import { Container, Grid } from "@mui/material";

import PrimarySection from "../../components/registration/PrimarySection/PrimarySection";

import styles from "./AccountTypeSelectable.module.css";
import { useFormContext } from "../../context/FormContext";
import { renderPage } from "../../utils/renderPage";

const AccountTypeSelectable = () => {
  const { formState } = useFormContext();
  const { step } = formState;

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
