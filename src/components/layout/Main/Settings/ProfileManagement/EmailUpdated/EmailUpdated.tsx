import { Typography, Box } from "@mui/material";
import FailedMail from "../../../../../../assets/icons/ui/FailedMail";
import styles from "./EmailUpdated.module.css";

interface EmailUpdatedProps {
  isSuccess: boolean;
}

const EmailUpdated: React.FC<EmailUpdatedProps> = ({ isSuccess }) => {
  return (
    <Box className={styles.section}>
      {isSuccess ? <Box className={styles.image}></Box> : <FailedMail />}
      <Typography className={styles.infoText}>
        {isSuccess ? (
          <>
            Your email has been updated.
            <br />
            Please use your new email address the next time you log in.
          </>
        ) : (
          <>
            Failed to update your email.
            <br />
            Please try again later or contact support if the issue persists.
          </>
        )}
      </Typography>
    </Box>
  );
};

export default EmailUpdated;
