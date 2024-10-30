import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Authentication from "../components/authentication/authentication";
import Layout from "../components/layout/Layout";
import PropertyForm from "../components/layout/Main/Properties/PropertyForm/PropertyForm";
import { ApartmentBuildingDetails } from "../components/layout/Main/Properties/PropertyFormFields/ApartmentBuildingDetails/ApartmentBuildingDetails";
import { ResidentialCompoundDetails } from "../components/layout/Main/Properties/PropertyFormFields/ResidentialCompoundDetails/ResidentialCompoundDetails";
import { StandAlonePropertyDetails } from "../components/layout/Main/Properties/PropertyFormFields/StandAlonePropertyDetails/StandAlonePropertyDetails";
import PropertyListings from "../components/layout/Main/Properties/PropertyListings/PropertyListings";
import PropertyDetails from "../components/layout/Main/Properties/PropertyDetails/PropertyDetails";
import TenancyDetails from "../components/layout/Main/Tenancy/TenancyLists/TenancyDetails/TenancyDetails";
import TenancyEdit from "../components/layout/Main/Tenancy/TenancyLists/TenancyEdit/TenancyEdit";
import TenancyLists from "../components/layout/Main/Tenancy/TenancyLists/TenancyLists";
import Plans from "../components/registration/Plans/Plans";
import { useAuth } from "../context/AuthContext";
import IsAuth from "../hoc/isAuth";
import Settings from "../components/layout/Main/Settings/Settings";

export const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  const ProtectedRoute = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="property/*"
          element={
            <IsAuth>
              <ProtectedRoute />
            </IsAuth>
          }
        >
          <Route element={<Layout />}>
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
            <Route path="details/:id" element={<PropertyDetails />} />
          </Route>
        </Route>

        <Route
          path="tenancy/*"
          element={
            <IsAuth>
              <ProtectedRoute />
            </IsAuth>
          }
        >
          <Route element={<Layout />}>
            <Route path="" element={<TenancyLists />} />
            <Route path="details" element={<TenancyDetails />} />
            <Route path="edit" element={<TenancyEdit />} />
          </Route>
        </Route>

        <Route
          path="settings/*"
          element={
            <IsAuth>
              <ProtectedRoute />
            </IsAuth>
          }
        >
          <Route element={<Layout />}>
            <Route path="" element={<Settings />} />
          </Route>
        </Route>

        <Route path="pricing" element={<Plans />} />
        <Route path="*" element={<Authentication />} />
      </Routes>
    </Router>
  );
};
