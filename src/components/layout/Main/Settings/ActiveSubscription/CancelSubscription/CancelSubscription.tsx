import { Typography, Box } from "@mui/material";
import CancelSubscriptionIcon from "../../../../../../assets/icons/ui/CancelSubscription";
import styles from "./CancelSubscription.module.css";

interface CancelSubscriptionConfirmProps {
  isRequested?: boolean;
}
const CancelSubscription: React.FC<CancelSubscriptionConfirmProps> = ({
  isRequested = false,
}) => {
  return (
    <Box className={styles.section}>
      <CancelSubscriptionIcon />
      {isRequested ? (
        <Typography className={styles.infoText}>
          A cancellation request is already being processed for this
          subscription. Your subscription will remain active until [End Date].
        </Typography>
      ) : (
        <Typography className={styles.infoText}>
          Are you sure you want to cancel your subscription? <br />
          You’ll lose access to premium features after [End of Billing Cycle].
        </Typography>
      )}
    </Box>
  );
};

export default CancelSubscription;
