import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Property } from "../PropertyListings/properties";
import LocationIcon from "../../../../../assets/icons/ui/Location";
import LeftIcon from "../../../../../assets/icons/ui/LeftIcon";
import RightIcon from "../../../../../assets/icons/ui/RightIcon";
import Carousel from "react-material-ui-carousel";
import GeoLocation from "./GeoLocation/GeoLocation";

import styles from "./PropertyDetails.module.css";

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  return (
    <Box className={styles.container}>
      <Box className={styles.container2}>
        <Box className={styles.titleContainer}>
          <Typography className={styles.title}>{property.title}</Typography>
          <Button className={styles.unitsBtn}>View Units</Button>
        </Box>
        <Box className={styles.locationContainer}>
          <LocationIcon />
          <Typography className={styles.location}>
            {property.location}
          </Typography>
        </Box>
      </Box>

      <Box className={styles.container3}>
        <Box className={styles.tag}>{property.type}</Box>

        <Box className={styles.featuresContainer}>
          <Box className={styles.featureItem}>
            {property.beds.icon}
            <Typography className={styles.featureText}>
              {property.beds.value} Beds
            </Typography>
          </Box>
          <Box className={styles.featureItem}>
            {property.baths.icon}
            <Typography className={styles.featureText}>
              {property.baths.value} Bath
            </Typography>
          </Box>
          <Box className={styles.featureItem}>
            {property.area.icon}
            <Typography className={styles.featureText}>
              {property.area.value} Sqft
            </Typography>
          </Box>
          <Box className={styles.featureItem}>
            {property.floors.icon}
            <Typography className={styles.featureText}>
              Number of Floors {property.floors.value}
            </Typography>
          </Box>
          <Box className={styles.featureItem}>
            {property.apartments.icon}
            <Typography className={styles.featureText}>
              {property.apartments.value} Number of Apartments
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

        <ListItem disablePadding className={styles.circleListItem}>
          <ListItemText
            sx={{
              "& .css-konndc-MuiListItemText-root": {
                padding: "0px",
              },
            }}
            primary={
              <Typography component="span" className={styles.listItemText}>
                Electricity and Water Registered Number:
              </Typography>
            }
            secondary={
              <Typography component="span" color="primary">
                {" "}
                12345678
              </Typography>
            }
          />
        </ListItem>
        <ListItem disablePadding className={styles.circleListItem}>
          <ListItemText
            primary={
              <Typography component="span" className={styles.listItemText}>
                Management Contract Expiry:
              </Typography>
            }
            secondary={
              <Typography component="span" color="primary">
                {" "}
                12/31/2025
              </Typography>
            }
          />
        </ListItem>
      </Box>

      <Typography className={styles.propertyLocation}>
        Property Location
      </Typography>
      <GeoLocation center={property.geoPoints} zoom={12} />

      <Typography className={styles.images}>Image Gallery</Typography>
      <Carousel
        sx={{
          width: "100%",
          height: "312px",
          flexShrink: 0,
          borderRadius: "16.537px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 0,
          "& .css-e1mnrr": {
            right: "-45px",
          },
          "& .css-zbwuqm": {
            left: "-45px",
          },
        }}
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
            color: "#000",
            display: "block",
            opacity: 1,
          },
        }}
        navButtonsWrapperProps={{
          style: {
            padding: 0,
          },
        }}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        PrevIcon={<LeftIcon />}
        NextIcon={<RightIcon />}
        fullHeightHover={false}
      >
        {property?.images?.map((image, i) => (
          <img
            key={i}
            src={image}
            alt="Property"
            style={{
              backgroundPosition: "center center",
              backgroundSize: "contain",
              height: "312px",
              width: "100%",
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default PropertyDetails;
