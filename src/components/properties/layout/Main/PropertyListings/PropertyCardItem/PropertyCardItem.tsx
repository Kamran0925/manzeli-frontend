import { Box, IconButton, Typography } from "@mui/material";
// import { Property } from "../properties";
import Location from "../../../../../../assets/icons/ui/Location";
import Pencil from "../../../../../../assets/icons/ui/Pencil";
import Trash from "../../../../../../assets/icons/ui/Trash";
import { Property, propertyType } from "../../Property";
import styles from "./PropertyCardItem.module.css";

export const PropertyCardItem: React.FC<{
  key: number;
  property: Property;
  deleteModal: (propertyId: number) => void;
}> = ({ property, deleteModal }) => {
  return (
    <Box className={styles.propertyItemContainer}>
      <Box className={styles.propertyItem}>
        <Typography className={styles.title}>{property.name}</Typography>
        <Box className={styles.propertyInfo}>
          <Location />
          <Typography className={styles.location}>{property.street}</Typography>
          <Box className={styles.tag}>{propertyType[property.type]}</Box>
        </Box>
      </Box>

      <Box className={styles.propertyItemActions}>
        <IconButton className={styles.btn}>
          <Pencil height={17.5} width={17.73} fill="#001283" />
        </IconButton>
        <Typography className={styles.details}>View Details</Typography>
        <IconButton
          className={styles.btn}
          onClick={() => deleteModal(property.id)}
        >
          <Trash height={17.5} width={17.73} fill="#001283" />
        </IconButton>
      </Box>
    </Box>
  );
};
