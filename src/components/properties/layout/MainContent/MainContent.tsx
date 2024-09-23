import { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import PropertyForm from "./PropertyForm/PropertyForm";
import PropertyListings from "./PropertyListings/PropertyListings";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import { ResidentialCompoundDetails } from "./PropertyFormFields/ResidentialCompoundDetails/ResidentialCompoundDetails";
import { ApartmentBuildingDetails } from "./PropertyFormFields/ApartmentBuildingDetails/ApartmentBuildingDetails";
import { StandAlonePropertyDetails } from "./PropertyFormFields/StandAlonePropertyDetails/StandAlonePropertyDetails";
import { properties } from "./PropertyListings/properties";
import { Search } from "../../../../assets/icons/ui/Search";
import Menu from "../../../../assets/icons/ui/Menu";
import Plus from "../../../../assets/icons/ui/Plus";
import GridItem from "../../../../assets/icons/ui/GridItem";
import Pagination from "../../../shared/Pagination/Pagination";
import PropertySortFilter from "./PropertySortFilter/PropertySortFilter";
import styles from "./MainContent.module.css";

const Main = () => {
  const propertyTypeOptions = [
    { value: "Residential", label: "Residential" },
    { value: "Commercial", label: "Commercial" },
  ];

  const [gridView, setGridView] = useState(false);

  const location = useLocation();

  const [sortOption, setSortOption] = useState("Default");

  const sortOptions = [
    { value: "Default", label: "Default" },
    { value: "Newest", label: "Newest" },
  ];

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  return (
    <Box className={styles.mainContent}>
      <Box className={styles.subTitleBar}>
        <Typography className={styles.subTitle}>
          {location.pathname === "/property/details"
            ? "Property Details"
            : "Property List"}
        </Typography>

        <Box className={styles.subTitleActions}>
          <Button className={styles.addPropertyButton} variant="contained">
            <Plus /> Add New Property
          </Button>

          <TextField
            className={styles.searchBar}
            placeholder="Search here..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .css-maty06-MuiInputBase-root-MuiOutlinedInput-root": {
                paddingLeft: "22px",
              },
              "& .MuiOutlinedInput-notchedOutline ": {
                border: "none",
              },
              "& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input": {
                padding: "12px",
              },
            }}
          />
        </Box>
      </Box>

      <Box
        className={styles.filterBar}
        sx={{
          justifyContent:
            location.pathname === "/property/details"
              ? "flex-end"
              : "space-between",
        }}
      >
        {location.pathname !== "/property/details" && (
          <Pagination
            totalResults={13}
            resultsPerPage={9}
            currentPage={1}
            onPageChange={() => null}
          />
        )}
        <Box className={styles.sortContainer}>
          <PropertySortFilter
            options={sortOptions}
            selectedValue={sortOption}
            onChange={handleSortChange}
          />
          <Box className={styles.iconContainer}>
            <Box
              className={styles.menuContainer}
              onClick={() => setGridView(false)}
              sx={{
                backgroundColor: !gridView ? "#001283" : "transparent",
                color: !gridView ? "#FFF" : "#000",
              }}
            >
              <Menu fill={!gridView ? "#FFF" : "#000"} />
            </Box>
            <Box
              className={styles.menuContainer}
              onClick={() => setGridView(true)}
              sx={{
                backgroundColor: gridView ? "#001283" : "transparent",
                color: gridView ? "#FFF" : "#000",
              }}
            >
              <GridItem fill={gridView ? "#FFF" : "#000"} />
            </Box>
          </Box>
        </Box>
      </Box>

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
          element={
            <PropertyListings properties={properties} gridView={gridView} />
          }
        />
        <Route
          path="details"
          element={<PropertyDetails property={properties[0]} />}
        />
      </Routes>
    </Box>
  );
};

export default Main;
