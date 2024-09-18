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
  const [open, setOpen] = useState(false);

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
        <Button
          className={styles.actionBtn}
          onClick={() => setOpen(prev => !prev)}
        >
          <VerticalDots />
        </Button>
        {open && <PropertyItemActions handleClose={() => setOpen(false)} />}
      </Box>
    </Box>
  );
};
