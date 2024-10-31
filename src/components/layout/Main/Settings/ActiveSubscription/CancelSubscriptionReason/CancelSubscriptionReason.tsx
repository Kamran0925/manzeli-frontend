import { Typography, Box, Checkbox } from "@mui/material";
import styles from "./CancelSubscriptionReason.module.css";

const CancelSubscriptionReason: React.FC = () => {
  const options = [
    "Too expensive",
    "No Longer Needed",
    "Switching to another service",
    "Other",
  ];

  return (
    <Box className={styles.section}>
      <Typography className={styles.feedbackText}>Feedback Options</Typography>
      {options.map(option => (
        <Box className={styles.feedbackOption}>
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "#AAA",
              },
              "&.MuiCheckbox-root": {
                color: "#AAA",
              },
            }}
          />
          <Typography className={styles.feedback}>{option}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CancelSubscriptionReason;
