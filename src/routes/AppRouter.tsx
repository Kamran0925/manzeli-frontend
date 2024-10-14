import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "../components/authentication/authentication";
import Layout from "../components/properties/layout/Layout";
import PropertyForm from "../components/properties/layout/Main/PropertyForm/PropertyForm";
import { ApartmentBuildingDetails } from "../components/properties/layout/Main/PropertyFormFields/ApartmentBuildingDetails/ApartmentBuildingDetails";
import { ResidentialCompoundDetails } from "../components/properties/layout/Main/PropertyFormFields/ResidentialCompoundDetails/ResidentialCompoundDetails";
import { StandAlonePropertyDetails } from "../components/properties/layout/Main/PropertyFormFields/StandAlonePropertyDetails/StandAlonePropertyDetails";
import PropertyListings from "../components/properties/layout/Main/PropertyListings/PropertyListings";
import TenancyDetails from "../components/properties/layout/Main/TenancyLists/TenancyDetails/TenancyDetails";
import TenancyEdit from "../components/properties/layout/Main/TenancyLists/TenancyEdit/TenancyEdit";
import TenancyLists from "../components/properties/layout/Main/TenancyLists/TenancyLists";
import Plans from "../components/registration/Plans/Plans";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="property/*" element={<Layout />}>
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
          <Route path="listings" element={<PropertyListings />} />
        </Route>

        <Route path="tenancy/*" element={<Layout />}>
          <Route path="" element={<TenancyLists />} />
          <Route path="details" element={<TenancyDetails />} />
          <Route path="edit" element={<TenancyEdit />} />
        </Route>

        <Route path="pricing" element={<Plans />} />
        <Route path="*" element={<Authentication />} />
      </Routes>
    </Router>
  );
};
