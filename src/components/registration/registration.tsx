import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useFormContext } from "../../context/FormContext";
import ContactDetails from "./ContactDetails/ContactDetails";
import PrimarySection from "./PrimarySection/PrimarySection";
import SecondarySection from "./SecondarySection/SecondarySection";
import SignUp from "./SignUp/SignUp";
import UploadImage from "./UploadImage/UploadImage";

import styles from "./registration.module.css";

const Registration = () => {
  const { formState } = useFormContext();
  const { step } = formState;

  const [content, setContent] = useState(<SecondarySection />);

  useEffect(() => {
    switch (step) {
      case -1:
        setContent(<SecondarySection />);
        break;
      case 0:
        setContent(<SignUp />);
        break;
      case 1:
        setContent(<ContactDetails />);
        break;
      case 2:
        setContent(<UploadImage />);
        break;
      default:
        setContent(<SecondarySection />);
    }
  }, [step]);

  return (
    <Container disableGutters maxWidth={false}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} className={styles.leftGrid}>
          <PrimarySection />
        </Grid>
        <Grid item xs={12} sm={12} md={8} className={styles.rightGrid}>
          {content}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
