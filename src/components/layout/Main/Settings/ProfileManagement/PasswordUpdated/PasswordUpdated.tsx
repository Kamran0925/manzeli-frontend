import { Typography, Box } from "@mui/material";
import FailedMail from "../../../../../../assets/icons/ui/FailedMail";
import styles from "./PasswordUpdated.module.css";

interface PasswordUpdatedProps {
  isSuccess: boolean;
}

const PasswordUpdated: React.FC<PasswordUpdatedProps> = ({ isSuccess }) => {
  return (
    <Box className={styles.section}>
      {isSuccess ? <Box className={styles.image}></Box> : <FailedMail />}
      <Typography className={styles.infoText}>
        Your password has been updated. <br />
        Please use the new password the next time you log in.
      </Typography>
    </Box>
  );
};

export default PasswordUpdated;
