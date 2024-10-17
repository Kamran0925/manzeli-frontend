import { useEffect, useState } from "react";
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
import LocationIcon from "../../../../../assets/icons/ui/Location";
import LeftIcon from "../../../../../assets/icons/ui/LeftIcon";
import RightIcon from "../../../../../assets/icons/ui/RightIcon";
import Header from "../../../../shared/Header/Header";
import Carousel from "react-material-ui-carousel";
import GeoLocation from "./GeoLocation/GeoLocation";
import PropertySubtitleBar from "../PropertySubtitleBar/PropertySubtitleBar";
import { Amenity, Property, contractType, propertyType } from "../Property";
import { useParams } from "react-router-dom";
import { getProperty } from "../../../../../api/propertyApi";
import Loader from "../../../../shared/Loader/Loader";
import { useAuth } from "../../../../../context/AuthContext";
import styles from "./PropertyDetails.module.css";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const { apiAuthWrapper } = useAuth();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await apiAuthWrapper(getProperty, id);
        const propertyData: Property = {
          id: data.id,
          name: data.name,
          type: data.type as keyof typeof propertyType,
          type_name: data.type_name,
          contract_type: data.contract_type as keyof typeof contractType,
          contract_type_name: data.contract_type_name,
          local_authority_id: data.local_authority_id,
          street: data.street,
          city: data.city,
          country: data.country,
          latitude: data.gps_coordinates[0],
          longitude: data.gps_coordinates[1],
          units: data.units,
          amenities: data.amenities.map((amenity: Amenity) => ({
            id: amenity.id,
            name: amenity.name,
          })),
          created_at: data.created_at,
          images: data.images,
        };

        setProperty(propertyData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch property:", error);
      }
    };

    fetchProperty();
  }, []);

  return (
    <>
      <Header />
      <PropertySubtitleBar title="Property Details" subTitleActions={false} />
      {loading ? (
        <Loader />
      ) : (
        <Box className={styles.container}>
          <Box className={styles.container2}>
            <Box className={styles.titleContainer}>
              <Typography className={styles.title}>{property?.name}</Typography>
              <Button className={styles.unitsBtn}>View Units</Button>
            </Box>
            <Box className={styles.locationContainer}>
              <LocationIcon />
              <Typography className={styles.location}>
                {property?.street}
              </Typography>
            </Box>
          </Box>

          <Box className={styles.container3}>
            <Box className={styles.tag}>
              {property && propertyType[property?.type]}
            </Box>
            {/* 
            This is not coming from Backend API for property details 
            <Box className={styles.featuresContainer}>
              <Box className={styles.featureItem}>
                <Typography className={styles.featureText}>
                  {property.beds} Beds
                </Typography>
              </Box>
              <Box className={styles.featureItem}>
                <Typography className={styles.featureText}>
                  {property.baths} Baths
                </Typography>
              </Box>
              <Box className={styles.featureItem}>
                <Typography className={styles.featureText}>
                  {property.area} Sqft
                </Typography>
              </Box>
              <Box className={styles.featureItem}>
                <Typography className={styles.featureText}>
                  Number of Floors {property.floors}
                </Typography>
              </Box>
              <Box className={styles.featureItem}>
                <Typography className={styles.featureText}>
                  {property.apartments} Number of Apartments
                </Typography>
              </Box>
            </Box> */}

            <Box className={styles.featuresContainer2}>
              <Typography className={styles.additionalFeature}>
                Additional Features
              </Typography>
              <FormGroup className={styles.featuresWrapper}>
                {property?.amenities?.map(amenity => (
                  <FormControlLabel
                    control={
                      <Checkbox defaultChecked checked color="primary" />
                    }
                    label={amenity.name}
                    key={amenity.id}
                    sx={{
                      "& .css-6pkdlj-MuiTypography-root": {
                        color: "#000",
                      },
                    }}
                  />
                ))}
              </FormGroup>
            </Box>

            <ListItem disablePadding className={styles.circleListItem}>
              <ListItemText
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
          <GeoLocation
            center={{
              lat: property?.latitude || 0,
              lng: property?.longitude || 0,
            }}
            zoom={12}
          />
          {property?.images && property.images.length > 0 && (
            <>
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
                  "& .css-1g04gm2-MuiButtonBase-root-MuiIconButton-root": {
                    backgroundColor: "#FFF",
                    "&:hover": {
                      backgroundColor: "#FFF",
                    },
                  },
                }}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                PrevIcon={<LeftIcon />}
                NextIcon={<RightIcon />}
              >
                {property.images.map((image, i) => (
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
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default PropertyDetails;
