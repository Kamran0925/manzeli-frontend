import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import PropertyForm from "./PropertyForm/PropertyForm";
import PropertyListings from "./PropertyListings/PropertyListings";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import { ResidentialCompoundDetails } from "./PropertyFormFields/ResidentialCompoundDetails/ResidentialCompoundDetails";
import { ApartmentBuildingDetails } from "./PropertyFormFields/ApartmentBuildingDetails/ApartmentBuildingDetails";
import { StandAlonePropertyDetails } from "./PropertyFormFields/StandAlonePropertyDetails/StandAlonePropertyDetails";
import TenancyLists from "./TenancyLists/TenancyLists";
import TenancyDetails from "./TenancyLists/TenancyDetails/TenancyDetails";
import TenancyEdit from "./TenancyLists/TenancyEdit/TenancyEdit";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <Box className={styles.mainContent}>
      <Routes>
        {/* Property Routes */}
        <Route
          path="/property/residential-compound"
          element={
            <PropertyForm
              title="Residential Compound Details"
              formFields={ResidentialCompoundDetails}
            />
          }
        />
        <Route
          path="/property/apartment-building"
          element={
            <PropertyForm
              title="Apartment Building Details"
              formFields={ApartmentBuildingDetails}
            />
          }
        />
        <Route
          path="/property/stand-alone-property"
          element={
            <PropertyForm
              title="Stand Alone Property Details"
              formFields={StandAlonePropertyDetails}
            />
          }
        />
        <Route path="/property/listings" element={<PropertyListings />} />
        {/* <Route path="/property/details" element={<PropertyDetails />} /> */}

        {/* Tenancy Routes */}
        <Route path="/tenancy" element={<TenancyLists />} />
        <Route path="/tenancy/details" element={<TenancyDetails />} />
        <Route path="/tenancy/edit" element={<TenancyEdit />} />
      </Routes>
    </Box>
  );
};

export default Main;
