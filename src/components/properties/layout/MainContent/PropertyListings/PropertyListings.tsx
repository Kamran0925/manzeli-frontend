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
import ActionModal from "../../../../shared/ActionModal/ActionModal";
import Pencil from "../../../../../assets/icons/ui/Pencil";
import Trash from "../../../../../assets/icons/ui/Trash";
import styles from "./PropertyListings.module.css";

interface PropertyListingsProps {
  properties: Property[];
}

interface Action {
  icon: React.ReactNode;
  optionText: string;
  routeLink: string;
  onClick?: () => void;
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

  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const PropertyActions: Action[] = [
    {
      icon: <Pencil />,
      optionText: "Edit",
      routeLink: "/property/edit",
    },
    {
      icon: <Trash />,
      optionText: "Delete",
      routeLink: "/property/delete",
      onClick: showModal,
    },
  ];

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
            <PropertyCardItem
              key={property.id}
              property={property}
              deleteModal={showModal}
            />
          ) : (
            <PropertyListItem
              key={property.id}
              property={property}
              propertyActions={PropertyActions}
            />
          ),
        )}
      </Box>
      {modal && (
        <ActionModal
          open={modal}
          onClose={() => setModal(false)}
          onDelete={() => setModal(false)}
          title="Are you sure you want to delete this property?"
          description="Once delete it won’t be undone."
          actionBtnText="Yes, Delete"
        />
      )}
    </>
  );
};

export default PropertyListings;
