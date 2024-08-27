import { useState } from "react";
import { Container, Grid } from "@mui/material";

import ResetPasswordSuccess from "./ResetPasswordSuccess/ResetPasswordSuccess";
import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";
import styles from "./reset-password.module.css";

const ResetPassword = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(prevStep => Math.min(prevStep + 1, 4));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <ResetPasswordForm onNext={handleNext} />;
      case 1:
        return <ResetPasswordSuccess />;
    }
  };

  return (
    <Container disableGutters maxWidth={false}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} className={styles.leftGrid}></Grid>
        <Grid item xs={12} sm={12} md={8} className={styles.rightGrid}>
          {renderStep()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResetPassword;
