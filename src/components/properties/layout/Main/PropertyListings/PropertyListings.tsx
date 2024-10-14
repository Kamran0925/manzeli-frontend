import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import PropertyViewToggle from "../PropertyViewToggle/PropertyViewToggle";
import PropertySubtitleBar from "../PropertySubtitleBar/PropertySubtitleBar";
import PropertyHeader from "../PropertyHeader/PropertyHeader";
import Pagination from "../../../../shared/Pagination/Pagination";
import { PropertyCardItem } from "./PropertyCardItem/PropertyCardItem";
import { PropertyListItem } from "./PropertyListItem/PropertyListItem";
import SortFilter from "../../../../shared/SortFilter/SortFilter";
import ActionModal from "../../../../shared/ActionModal/ActionModal";
import Pencil from "../../../../../assets/icons/ui/Pencil";
import Trash from "../../../../../assets/icons/ui/Trash";
import { deleteProperty, getProperties } from "../../../../../api/propertyApi";
import { Property } from "../Property";
import styles from "./PropertyListings.module.css";

interface Action {
  icon: React.ReactNode;
  optionText: string;
  routeLink: string;
  onClick?: (id: number) => void;
}

const PropertyListings = () => {
  const [sortOption, setSortOption] = useState("Default");
  const [property, setProperty] = useState<number | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [gridView, setGridView] = useState(false);
  const [modal, setModal] = useState(false);

  const sortOptions = [
    { value: "Default", label: "Default" },
    { value: "Newest", label: "Newest" },
  ];

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const showModal = async () => {
    setModal(true);
  };

  const handleDelete = async () => {
    if (property) {
      await deleteProperty(property);
      fetchProperties();
    }
    setModal(false);
  };

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const data = await getProperties();
      setProperties(data);
    } catch (error) {
      console.error("Failed to fetch properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
    if (properties.length > 0) {
      setLoading(false);
    }
  }, [properties]);

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
          <SortFilter
            options={sortOptions}
            selectedValue={sortOption}
            onChange={handleSortChange}
          />
          <PropertyViewToggle gridView={gridView} onToggle={setGridView} />
        </Box>
      </Box>

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-start"
          height="100vh"
          gap={2}
          mt={5}
        >
          <CircularProgress color="primary" /> Loading...
        </Box>
      ) : (
        <Box className={styles.container}>
          {properties.map(property =>
            gridView ? (
              <PropertyCardItem
                key={property.id}
                property={property}
                deleteModal={propertyId => {
                  setProperty(propertyId);
                  showModal();
                }}
              />
            ) : (
              <PropertyListItem
                key={property.id}
                property={property}
                propertyActions={PropertyActions}
                handleListClick={propertyId => setProperty(propertyId)}
              />
            ),
          )}
        </Box>
      )}

      {modal && (
        <ActionModal
          open={modal}
          onClose={() => setModal(false)}
          onDelete={handleDelete}
          title="Are you sure you want to delete this property?"
          description="Once delete it won’t be undone."
          actionBtnText="Yes, Delete"
        />
      )}
    </>
  );
};

export default PropertyListings;
