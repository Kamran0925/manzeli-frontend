import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import LocationIcon from "../../../../../../assets/icons/ui/Location";
import VerticalDots from "../../../../../../assets/icons/ui/VerticalDots";
import PropertyCardActions from "./PropertyCardActions/PropertyCardActions";
import { Property } from "../properties";
import styles from "./PropertyCard.module.css";

export const PropertyCard: React.FC<{ key: number; property: Property }> = ({
  property,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Box className={styles.propertyCard}>
      <Box className={styles.cardContent}>
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
        {open && <PropertyCardActions handleClose={() => setOpen(false)} />}
      </Box>
    </Box>
  );
};
