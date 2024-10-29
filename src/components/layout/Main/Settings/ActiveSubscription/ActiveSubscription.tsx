import { Box, Button, Typography } from "@mui/material";
import Circle from "../../../../../assets/icons/ui/Circle";
import VisaImage from "../../../../../assets/icons/ui/VisaImage";
import classNames from "classnames";
import Modal from "../../../../shared/Modal/Modal";
import CancelSubscription from "./CancelSubscription/CancelSubscription";
import CancelSubscriptionReason from "./CancelSubscriptionReason/CancelSubscriptionReason";
import CancelSubscriptionConfirm from "./CancelSubscriptionConfirm/CancelSubscriptionConfirm";
import Cross from "../../../../../assets/icons/ui/Cross";
import Plans from "../../../../registration/Plans/Plans";
import { useState } from "react";
import styles from "./ActiveSubscription.module.css";

const ActiveSubscription = () => {
  const [plan, setPlan] = useState<boolean>(false);

  if (plan) {
    return (
      <Plans showStepper={false} customStyle={{ marginTop: "0 !important" }} />
    );
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.section1}>
        <Box className={styles.subscriptionContainer}>
          <Box className={styles.subscriptionInfo}>
            <Typography className={styles.activeSubscriptionText}>
              Active Subscription
            </Typography>
            <Box className={styles.align}>
              <Typography className={styles.price}>$19</Typography>
              <Typography className={styles.duration}>/month</Typography>
            </Box>
          </Box>
          <Box className={styles.buttonContainer}>
            <Button className={styles.starterBtn}>Starter</Button>
            <Button className={classNames(styles.activeBtn)}>
              <Circle height="8px" width="8px" fill="#72D400" /> Active
              {/* <Circle height="8px" width="8px" fill="#FFA500" /> Pending
              Cancellation */}
            </Button>
          </Box>
        </Box>

        <Box className={styles.paymentContainer}>
          <Box className={styles.paymentInfo}>
            <Typography className={styles.nextPaymentText}>
              Next Payment
            </Typography>
            <Box className={styles.align2}>
              <VisaImage />
              <Typography className={styles.visaInfoText}>
                Visa ending with 3456
              </Typography>
              <Typography className={styles.visaInfoDate}>
                Oct 26,2024
              </Typography>
            </Box>
          </Box>
          <Box className={styles.planBtnContainer}>
            <Button className={styles.changePlanBtn}>Change Plan</Button>
          </Box>
        </Box>
      </Box>

      <Box className={styles.subscriptionStatusText}>
        "Your subscription will end on [End Date]. Go to Subscription Management
        to re-activate before this date."
        <Box
          sx={{
            cursor: "pointer",
            background: "#F0F0F0",
          }}
        >
          <Cross height={24} width={24} />
        </Box>
      </Box>

      <Box className={styles.section2}>
        <Typography className={styles.paymentInfoText}>Payment info</Typography>
        <Box className={styles.cardContainer}>
          <Typography className={styles.cardDetailsText}>
            Card Details
          </Typography>
          <Box className={styles.align2}>
            <VisaImage />
            <Typography className={styles.cardInfo}>
              Visa ending with 3456
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className={styles.section3}>
        <Button
          className={classNames(
            styles.btn,
            styles.cancelSubscriptionBtn,
            styles.reactivateBtn,
          )}
        >
          Cancel Subscription
        </Button>
        <Button className={classNames(styles.btn, styles.managePaymentsBtn)}>
          Manage Payments
        </Button>
      </Box>

      <Modal
        open={false}
        onClose={() => null}
        showClose={false}
        title="Confirmation  for Cancel Subscription"
        description={<CancelSubscription isRequested={true} />}
        showActions={true}
        primaryBtnText="Proceed with Cancellation"
        onClickPrimaryBtn={() => null}
        secondaryBtnText="Cancel"
        onClickSecondaryBtn={() => null}
      />

      <Modal
        open={false}
        onClose={() => null}
        showClose={false}
        title="Reason for Cancellation"
        description={<CancelSubscriptionReason />}
        showActions={true}
        primaryBtnText="Submit"
        onClickPrimaryBtn={() => null}
        secondaryBtnText="Skip"
        onClickSecondaryBtn={() => null}
      />

      <Modal
        open={false}
        onClose={() => null}
        showClose={false}
        title="Cancellation Confirmation"
        description={<CancelSubscriptionConfirm />}
        showActions={true}
        primaryBtnText="Back to Dashboard"
        onClickPrimaryBtn={() => null}
      />
    </Box>
  );
};

export default ActiveSubscription;
