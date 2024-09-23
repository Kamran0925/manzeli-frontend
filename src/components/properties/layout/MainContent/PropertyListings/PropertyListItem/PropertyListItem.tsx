import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LocationIcon from "../../../../../../assets/icons/ui/Location";
import VerticalDots from "../../../../../../assets/icons/ui/VerticalDots";
import { Property } from "../properties";
import PropertyItemActions from "./PropertyItemActions/PropertyItemActions";
import styles from "./PropertyListItem.module.css";

export const PropertyListItem: React.FC<{
  key: number;
  property: Property;
}> = ({ property }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles.propertyItem}>
      <Box className={styles.itemContent}>
        <Box className={styles.align1}>
          <Typography className={styles.title}>{property.title}</Typography>
          <Box className={styles.tag}>{property.type}</Box>
        </Box>

        <Box className={styles.align2}>
          <LocationIcon />
          <Typography className={styles.location}>
            {property.location}
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

        <PropertyItemActions anchorEl={anchorEl} handleClose={handleClose} />
      </Box>
    </Box>
  );
};
