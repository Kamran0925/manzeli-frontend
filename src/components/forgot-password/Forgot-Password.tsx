import { useState } from "react";
import { Container, Grid } from "@mui/material";

import EmailVerification from "./EmailVerfication/EmailVerification";
import LinkExpired from "./LinkExpired/LinkExpired";
import ResetPassword from "./ResetPassword/ResetPassword";
import ResetPasswordSuccess from "./ResetPasswordSuccess/ResetPasswordSuccess";
import SecondarySection from "./SecondarySection/SecondarySection";
import styles from "./Forgot-Password.module.css";

const ForgotPassword = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(prevStep => Math.min(prevStep + 1, 4));
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <SecondarySection onNext={handleNext} />;
      case 1:
        return <EmailVerification onNext={handleNext} />;
      case 2:
        return <LinkExpired onNext={handleNext} />;
      case 3:
        return <ResetPassword onNext={handleNext} />;
      case 4:
        return <ResetPasswordSuccess />;
      default:
        return <SecondarySection onNext={handleNext} />;
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

export default ForgotPassword;
