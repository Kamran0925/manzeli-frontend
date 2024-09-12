import React from "react";
import { Box, Typography } from "@mui/material";
import Notification from "../../../../assets/icons/ui/Notification";
import Profile from "../../../../assets/icons/ui/Profile";
import PropertyFilters from "./PropertyFilters/PropertyFilters";
import PropertyForm from "./PropertyForm/PropertyForm";
import { Routes, Route } from "react-router-dom";
import { ResidentialCompoundDetails } from "./ResidentialCompoundDetails/ResidentialCompoundDetails";
import { ApartmentBuildingDetails } from "./ApartmentBuildingDetails/ApartmentBuildingDetails";
import { StandAlonePropertyDetails } from "./StandAloneProperty/StandAloneProperty";
import styles from "./MainContent.module.css";

const Main = () => {
  return (
    <Box className={styles.mainContent}>
      <Box className={styles.mainBar}>
        <Typography variant="h1" className={styles.mainHeading}>
          Welcome, John Doe!
        </Typography>
        <Box className={styles.mainBarIcons}>
          <Notification />
          <Profile />
        </Box>
      </Box>

      <Box className={styles.subTitleBar}>
        <Typography className={styles.subTitle}>Add Property</Typography>
      </Box>

      <PropertyFilters />

      <Routes>
        <Route
          path="residential-compound"
          element={
            <PropertyForm
              title="Residential Compound Details"
              formFields={ResidentialCompoundDetails}
            />
          }
        />
        <Route
          path="apartment-building"
          element={
            <PropertyForm
              title="Apartment Building Details"
              formFields={ApartmentBuildingDetails}
            />
          }
        />
        <Route
          path="stand-alone-property"
          element={
            <PropertyForm
              title="Stand Alone Property Details"
              formFields={StandAlonePropertyDetails}
            />
          }
        />
      </Routes>
    </Box>
  );
};

export default Main;
