import Header from "../../../../../shared/Header/Header";
import { Box, Button, Typography } from "@mui/material";
import DetailCard from "./DetailCard/DetailCard";
import DetailTable from "./DetailTable/DetailTable";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import styles from "./TenancyDetails.module.css";

const TenancyDetails = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/tenancy");
  };

  const handleEditClick = () => {
    navigate("/tenancy/edit");
  };

  return (
    <>
      <Header />
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
            onClick={handleBackClick}
          >
            Back
          </Button>
          <Button
            variant="contained"
            className={classNames(styles.btn, styles.editBtn)}
            onClick={handleEditClick}
          >
            Edit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TenancyDetails;
