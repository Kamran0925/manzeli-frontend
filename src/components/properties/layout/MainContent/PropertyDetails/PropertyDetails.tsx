import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { Property } from "../PropertyListings/properties";
import LocationIcon from "../../../../../assets/icons/ui/Location";
import AreaIcon from "../../../../../assets/icons/ui/AreaIcon";
import Stairs from "../../../../../assets/icons/ui/Stairs";
import Apartment from "../../../../../assets/icons/ui/Apartment";
import Bath from "../../../../../assets/icons/ui/Bath";
import Bed from "../../../../../assets/icons/ui/Bed";
import styles from "./PropertyDetails.module.css";

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>{property.title}</Typography>
      <Box className={styles.locationContainer}>
        <LocationIcon />
        <Typography className={styles.location}>{property.location}</Typography>
      </Box>
      <Box className={styles.tag}>{property.type}</Box>

      <Box className={styles.featuresContainer}>
        <Box className={styles.featureItem}>
          <Bed />
          <Typography className={styles.featureText}>
            {property.beds} Beds
          </Typography>
        </Box>
        <Box className={styles.featureItem}>
          <Bath />
          <Typography className={styles.featureText}>
            {property.baths} Bath
          </Typography>
        </Box>
        <Box className={styles.featureItem}>
          <AreaIcon />
          <Typography className={styles.featureText}>
            {property.area} Sqft
          </Typography>
        </Box>
        <Box className={styles.featureItem}>
          <Stairs />
          <Typography className={styles.featureText}>
            Number of Floors {property.floors}
          </Typography>
        </Box>
        <Box className={styles.featureItem}>
          <Apartment />
          <Typography className={styles.featureText}>
            {property.apartments} Number of Apartments
          </Typography>
        </Box>
      </Box>

      <Box className={styles.featuresContainer2}>
        <Typography className={styles.additionalFeature}>
          Additional Features
        </Typography>
        <FormGroup className={styles.featuresWrapper}>
          {property?.features?.map(feature => {
            return (
              <FormControlLabel
                control={<Checkbox defaultChecked checked color="primary" />}
                label={feature}
              />
            );
          })}
        </FormGroup>
      </Box>

      <Typography className={styles.propertyLocation}>
        Property Location
      </Typography>
    </Box>
  );
};

export default PropertyDetails;
