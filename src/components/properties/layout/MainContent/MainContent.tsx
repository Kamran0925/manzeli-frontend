import { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import PropertyForm from "./PropertyForm/PropertyForm";
import ProfileActions from "./ProfileActions/ProfileActions";
import { ResidentialCompoundDetails } from "./PropertyFormFields/ResidentialCompoundDetails/ResidentialCompoundDetails";
import { ApartmentBuildingDetails } from "./PropertyFormFields/ApartmentBuildingDetails/ApartmentBuildingDetails";
import { StandAlonePropertyDetails } from "./PropertyFormFields/StandAloneProperty/StandAloneProperty";
import PropertyListings from "./PropertyListings/PropertyListings";
import { properties } from "./PropertyListings/properties";
import { Search } from "../../../../assets/icons/ui/Search";
import Menu from "../../../../assets/icons/ui/Menu";
import Plus from "../../../../assets/icons/ui/Plus";
import GridItem from "../../../../assets/icons/ui/GridItem";
import Profile from "../../../../assets/icons/ui/Profile";
import Notification from "../../../../assets/icons/ui/Notification";
import PropertyDetails from "./PropertyDetails/PropertyDetails";
import styles from "./MainContent.module.css";

const Main = () => {
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    console.log(event.target.value);
  };

  const propertyTypeOptions = [
    { value: "Residential", label: "Residential" },
    { value: "Commercial", label: "Commercial" },
  ];

  const [profileActions, setProfileActions] = useState(false);

  const location = useLocation();

  const [gridView, setGridView] = useState(false);

  return (
    <Box className={styles.mainContent}>
      <Box className={styles.mainBar}>
        <Typography variant="h1" className={styles.mainHeading}>
          Welcome, John Doe!
        </Typography>
        <Box className={styles.mainBarIcons}>
          <Notification />
          <Profile
            background="#001283"
            fill="#FFF"
            onClick={() => setProfileActions(true)}
          />
          {profileActions && (
            <ProfileActions handleClose={() => setProfileActions(false)} />
          )}
        </Box>
      </Box>

      <Box className={styles.subTitleBar}>
        <Typography className={styles.subTitle}>Property Details</Typography>

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
          <Typography className={styles.pageResults}>
            Showing 1-9 of 13 Results
          </Typography>
        )}
        <Box className={styles.sortContainer}>
          <Box className={styles.sortingBar}>
            <Typography className={styles.sort}>Sort by:</Typography>
            <Select
              defaultValue="Default"
              className={styles.sortSelect}
              MenuProps={{
                PaperProps: {
                  sx: {
                    top: "240px !important",
                    width: "196px !important",
                    borderRadius: "10px",
                    backgroundColor: "#FFF",
                    boxShadow: "0px 4px 15.3px 0px rgba(0, 0, 0, 0.25)",
                    padding: "10px 7px",
                    "& .MuiMenu-list": {
                      padding: "0 !important",
                    },
                    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        padding: "0 !important",
                      },
                  },
                },
              }}
              sx={{
                "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                  {
                    padding: "0px",
                  },
                "& .css-yf8vq0-MuiSelect-nativeInput": {
                  padding: "0px",
                },
              }}
            >
              <MenuItem
                value="Default"
                sx={{
                  color: "#7F7F7F",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "100%",
                  padding: "11.006px 10px 8.994px 10px",
                  marginBottom: "8px",
                  borderRadius: "5px",
                  "&:hover": {
                    color: "#3B4CB8",
                    backgroundColor: "#EBEDF8",
                  },
                }}
              >
                Default
              </MenuItem>
            </Select>
          </Box>

          <Box className={styles.iconContainer}>
            <Box
              className={styles.menuContainer}
              onClick={() => setGridView(false)}
              sx={{
                backgroundColor: !gridView ? "#001283" : "#FFF",
                color: !gridView ? "#FFF" : "#000",
              }}
            >
              <Menu fill={!gridView ? "#FFF" : "#000"} />
            </Box>
            <Box
              className={styles.menuContainer}
              onClick={() => setGridView(true)}
              sx={{
                backgroundColor: gridView ? "#001283" : "#FFF",
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
