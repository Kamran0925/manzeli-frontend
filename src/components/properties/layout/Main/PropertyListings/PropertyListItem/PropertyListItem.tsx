import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import LocationIcon from "../../../../../../assets/icons/ui/Location";
import VerticalDots from "../../../../../../assets/icons/ui/VerticalDots";
import PropertyItemActions from "./PropertyItemActions/PropertyItemActions";
import { Property, propertyType } from "../../Property";
import styles from "./PropertyListItem.module.css";

export const PropertyListItem: React.FC<{
  key: number;
  property: Property;
  propertyActions: any;
  handleListClick: (propertyId: number) => void;
}> = ({ property, propertyActions, handleListClick }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePropertyClick = () => {
    navigate(`/property/details`);
  };

  return (
    <Box
      className={styles.propertyItem}
      onClick={() => handleListClick(property.id)}
    >
      <Box className={styles.itemContent} onClick={handlePropertyClick}>
        <Box className={styles.align1}>
          <Typography className={styles.title}>{property.name}</Typography>
          <Box className={styles.tag}>{propertyType[property.type]}</Box>
        </Box>

        <Box className={styles.align2}>
          <LocationIcon />
          <Typography className={styles.location}>
            {property.street}, {property.city}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
        }}
      >
        <Button className={styles.actionBtn} onClick={handleClick}>
          <VerticalDots />
        </Button>

        <PropertyItemActions
          anchorEl={anchorEl}
          handleClose={handleClose}
          propertyActions={propertyActions}
        />
      </Box>
    </Box>
  );
};
