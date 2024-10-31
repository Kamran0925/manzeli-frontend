import { Typography, Box } from "@mui/material";
import styles from "./CancelSubscriptionConfirm.module.css";

const CancelSubscriptionConfirm: React.FC = () => {
  return (
    <Box className={styles.section}>
      <Box className={styles.image}></Box>
      <Typography className={styles.infoText}>
        Your subscription will remain active until [End Date]. <br />
        You can reactivate anytime before this date.
      </Typography>
    </Box>
  );
};

export default CancelSubscriptionConfirm;
