import PropertyHeader from "../../PropertyHeader/PropertyHeader";
import { Box, Button, Typography } from "@mui/material";
import DetailCard from "./DetailCard/DetailCard";
import DetailTable from "./DetailTable/DetailTable";
import classNames from "classnames";
import styles from "./TenancyDetails.module.css";

const TenancyDetails = () => {
  return (
    <>
      <PropertyHeader />
      <Box className={styles.container}>
        <Box className={styles.detailHeader}>
          <Typography className={styles.title1}>Tenancy Details</Typography>
        </Box>

        <Box className={styles.detailsRow}>
          <DetailCard />
          <DetailTable />
        </Box>

        <Box className={styles.detailActions}>
          <Button
            variant="outlined"
            className={classNames(styles.btn, styles.backBtn)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            className={classNames(styles.btn, styles.editBtn)}
          >
            Edit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TenancyDetails;
