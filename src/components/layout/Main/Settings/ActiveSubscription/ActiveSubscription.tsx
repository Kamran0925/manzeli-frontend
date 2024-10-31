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
  const [planVisible, setPlanVisible] = useState<boolean>(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [flowType, setFlowType] = useState<"cancel" | null>(null);

  const openPlan = () => setPlanVisible(true);
  const closePlan = () => setPlanVisible(false);

  const handleCancelSubscriptionClick = () => {
    setFlowType("cancel");
    openModal(0);
  };

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => {
    setModalIndex(null);
    setFlowType(null);
  };

  const modals = {
    cancel: [
      {
        title: "Confirmation for Cancel Subscription",
        description: <CancelSubscription isRequested={true} />,
        primaryBtnText: "Proceed with Cancellation",
        nextModalIndex: 1,
      },
      {
        title: "Reason for Cancellation",
        description: <CancelSubscriptionReason />,
        primaryBtnText: "Submit",
        nextModalIndex: 2,
      },
      {
        title: "Cancellation Confirmation",
        description: <CancelSubscriptionConfirm />,
        primaryBtnText: "Back to Dashboard",
      },
    ],
  };

  const handlePrimaryBtnClick = () => {
    const currentModal = modals[flowType!][modalIndex!];
    if (currentModal.nextModalIndex !== undefined) {
      openModal(currentModal.nextModalIndex);
    } else {
      closeModal();
    }
  };

  const currentModal = flowType ? modals[flowType][modalIndex!] : null;

  if (planVisible) {
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
                Oct 26, 2024
              </Typography>
            </Box>
          </Box>
          <Box className={styles.planBtnContainer}>
            <Button className={styles.changePlanBtn} onClick={openPlan}>
              Change Plan
            </Button>
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
            height: "24px",
            width: "24px",
            borderRadius: "100%",
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
          onClick={handleCancelSubscriptionClick}
        >
          Cancel Subscription
        </Button>
        <Button className={classNames(styles.btn, styles.managePaymentsBtn)}>
          Manage Payments
        </Button>
      </Box>

      {currentModal && (
        <Modal
          open={true}
          onClose={closeModal}
          showClose={false}
          title={currentModal.title}
          description={currentModal.description}
          showActions={true}
          primaryBtnText={currentModal.primaryBtnText}
          onClickPrimaryBtn={handlePrimaryBtnClick}
          secondaryBtnText="Cancel"
          onClickSecondaryBtn={closeModal}
        />
      )}
    </Box>
  );
};

export default ActiveSubscription;
