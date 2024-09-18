import React from "react";
import { Property } from "./properties";
import { Box } from "@mui/material";
import { PropertyListItem } from "./PropertyListItem/PropertyListItem";
import styles from "./PropertyListings.module.css";

interface PropertyListingsProps {
  properties: Property[];
}

const PropertyListings: React.FC<PropertyListingsProps> = ({ properties }) => {
  return (
    <Box className={styles.container}>
      {properties.map(property => (
        <PropertyListItem key={property.id} property={property} />
      ))}
    </Box>
  );
};

export default PropertyListings;
