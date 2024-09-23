import React, { useState } from "react";
import { Box } from "@mui/material";
import { Property } from "./properties";
import PropertySortFilter from "../PropertySortFilter/PropertySortFilter";
import PropertyViewToggle from "../PropertyViewToggle/PropertyViewToggle";
import PropertySubtitleBar from "../PropertySubtitleBar/PropertySubtitleBar";
import PropertyHeader from "../PropertyHeader/PropertyHeader";
import Pagination from "../../../../shared/Pagination/Pagination";
import { PropertyCardItem } from "./PropertyCardItem/PropertyCardItem";
import { PropertyListItem } from "./PropertyListItem/PropertyListItem";
import styles from "./PropertyListings.module.css";

interface PropertyListingsProps {
  properties: Property[];
}

const PropertyListings: React.FC<PropertyListingsProps> = ({ properties }) => {
  const [sortOption, setSortOption] = useState("Default");

  const sortOptions = [
    { value: "Default", label: "Default" },
    { value: "Newest", label: "Newest" },
  ];

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const [gridView, setGridView] = useState(false);

  return (
    <>
      <PropertyHeader />
      <PropertySubtitleBar />

      <Box className={styles.filterBar}>
        <Pagination
          totalResults={13}
          resultsPerPage={9}
          currentPage={1}
          onPageChange={() => null}
        />
        <Box className={styles.sortContainer}>
          <PropertySortFilter
            options={sortOptions}
            selectedValue={sortOption}
            onChange={handleSortChange}
          />
          <PropertyViewToggle gridView={gridView} onToggle={setGridView} />
        </Box>
      </Box>

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
