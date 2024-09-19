import React from "react";
import { Property } from "./properties";
import { Box } from "@mui/material";
import { PropertyCardItem } from "./PropertyCardItem/PropertyCardItem";
import { PropertyListItem } from "./PropertyListItem/PropertyListItem";
import styles from "./PropertyListings.module.css";

interface PropertyListingsProps {
  properties: Property[];
  gridView: boolean;
}

const PropertyListings: React.FC<PropertyListingsProps> = ({
  properties,
  gridView = false,
}) => {
  return (
    <>
      <Box className={styles.container}>
        {properties.map(property =>
          gridView ? (
            <PropertyCardItem key={property.id} property={property} />
          ) : (
            <PropertyListItem key={property.id} property={property} />
          ),
        )}
      </Box>
    </>
  );
};

export default PropertyListings;
