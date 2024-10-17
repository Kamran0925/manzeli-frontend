import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../../../../shared/Header/Header";
import PropertyViewToggle from "../PropertyViewToggle/PropertyViewToggle";
import PropertySubtitleBar from "../PropertySubtitleBar/PropertySubtitleBar";
import Pagination from "../../../../shared/Pagination/Pagination";
import { PropertyCardItem } from "./PropertyCardItem/PropertyCardItem";
import { PropertyListItem } from "./PropertyListItem/PropertyListItem";
import SortFilter from "../../../../shared/SortFilter/SortFilter";
import ActionModal from "../../../../shared/ActionModal/ActionModal";
import Pencil from "../../../../../assets/icons/ui/Pencil";
import Trash from "../../../../../assets/icons/ui/Trash";
import { deleteProperty, getProperties } from "../../../../../api/propertyApi";
import { Property } from "../Property";
import Loader from "../../../../shared/Loader/Loader";
import CSVModal from "../../../../shared/CSVModal/CSVModal";
import { useAuth } from "../../../../../context/AuthContext";
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
  const [csvModal, setCsvModal] = useState(false);
  const { apiAuthWrapper } = useAuth();

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
      await apiAuthWrapper(deleteProperty, property);
      fetchProperties();
    }
    setModal(false);
  };

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const data = await apiAuthWrapper(getProperties, null);
      setProperties(data);
    } catch (error) {
      console.error("Failed to fetch properties:", error);
    }
  };

  useEffect(() => {
    if (properties.length > 0) {
      setLoading(false);
    } else {
      fetchProperties();
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
      <Header />
      <PropertySubtitleBar
        title="Property List"
        showModal={() => setCsvModal(true)}
      />

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
        <Loader />
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

      <CSVModal
        open={csvModal}
        onClose={() => setCsvModal(false)}
        title="File Upload"
        description="Upload a file or multiple CSV files to add properties in bulk"
        actionBtnText="Upload"
      />

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
