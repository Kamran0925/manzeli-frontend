import React from "react";
import { Grid } from "@mui/material";
import { SelectField } from "../../../../shared/SelectField/SelectField";
import { SelectChangeEvent } from "@mui/material";

const PropertyFilters = () => {
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    console.log(event.target.value);
  };

  const propertyTypeOptions = [
    { value: "", label: "None" },
    { value: "Residential", label: "Residential" },
    { value: "Commercial", label: "Commercial" },
  ];

  const contractTypeOptions = [
    { value: "", label: "None" },
    { value: "Investing", label: "Investing" },
    { value: "Management", label: "Management" },
    {
      value: "Self-managed (for individual owners)",
      label: "Self-managed (for individual owners)",
    },
  ];

  const propertySubTypeOptions = [
    { value: "", label: "None" },
    { value: "Apartment Building", label: "Apartment Building" },
    { value: "Residential Compound", label: "Residential Compound" },
    {
      value: "Stand alone property (for individual owners)",
      label: "Stand alone property (for individual owners)",
    },
  ];

  return (
    <Grid container mt="42px">
      <Grid item xs={12} sm={6} md={4}>
        <SelectField
          label="Property Type"
          value="Residential"
          options={propertyTypeOptions}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SelectField
          label="Type of Contract"
          value="Investing"
          options={contractTypeOptions}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SelectField
          label="Property Sub-Type"
          value="Apartment Building"
          options={propertySubTypeOptions}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default PropertyFilters;
