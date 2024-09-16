import React from "react";
import { Property } from "./properties";
import { PropertyCard } from "./PropertyCard/PropertyCard";
import { Box } from "@mui/material";
import styles from "./PropertyListings.module.css";

interface PropertyListingsProps {
  properties: Property[];
}

const PropertyListings: React.FC<PropertyListingsProps> = ({ properties }) => {
  return (
    <Box className={styles.container}>
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </Box>
  );
};

export default PropertyListings;
