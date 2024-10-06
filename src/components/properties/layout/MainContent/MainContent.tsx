import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import PropertyForm from "./PropertyForm/PropertyForm";
import PropertyListings from "./PropertyListings/PropertyListings";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import { ResidentialCompoundDetails } from "./PropertyFormFields/ResidentialCompoundDetails/ResidentialCompoundDetails";
import { ApartmentBuildingDetails } from "./PropertyFormFields/ApartmentBuildingDetails/ApartmentBuildingDetails";
import { StandAlonePropertyDetails } from "./PropertyFormFields/StandAlonePropertyDetails/StandAlonePropertyDetails";
import { properties } from "./PropertyListings/properties";
import TenancyLists from "./TenancyLists/TenancyLists";
import TenancyDetails from "./TenancyLists/TenancyDetails/TenancyDetails";
import TenancyEdit from "./TenancyLists/TenancyEdit/TenancyEdit";
import styles from "./MainContent.module.css";

const Main = () => {
  return (
    <Box className={styles.mainContent}>
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
        <Route
          path="listings"
          element={<PropertyListings properties={properties} />}
        />

        <Route path="tenancy" element={<TenancyLists />} />
        <Route path="tenancy/details" element={<TenancyDetails />} />
        <Route path="tenancy/edit" element={<TenancyEdit />} />

        <Route
          path="details"
          element={<PropertyDetails property={properties[0]} />}
        />
      </Routes>
    </Box>
  );
};

export default Main;
