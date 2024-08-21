import React from "react";
import { Container, Grid } from "@mui/material";

import PrimarySection from "../../components/registration/PrimarySection/PrimarySection";
import styles from "./ProfileInfo.module.css";
import UploadImage from "../../components/registration/UploadImage/UploadImage";

const ProfileInformation = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} className={styles.leftGrid}>
          <PrimarySection />
        </Grid>
        <Grid item xs={12} sm={12} md={8} className={styles.rightGrid}>
          <UploadImage />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileInformation;
