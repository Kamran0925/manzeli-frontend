import { Typography, Box } from "@mui/material";
import InputField from "../../../../../shared/InputField/InputField";
import classNames from "classnames";
import styles from "./UpdateEmail.module.css";

const UpdateEmail = () => {
  return (
    <Box className={styles.section}>
      <Typography variant="h4" className={styles.infoText}>
        Enter the new email address you want to use.
      </Typography>

      <Box>
        <Box className={styles.field}>
          <Typography className={styles.label}>New Email</Typography>
          <InputField
            name="email"
            type="email"
            placeholder="Enter new email address"
            value=""
            errorMessage=""
            handleChange={() => null}
            customStyle={{ margin: 0 }}
          />
        </Box>

        <Box className={classNames(styles.field, styles.spacing1)}>
          <Typography className={styles.label}>Password</Typography>
          <InputField
            type="password"
            name="password"
            placeholder="Your password"
            value=""
            errorMessage=""
            handleChange={() => null}
            customStyle={{ margin: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateEmail;
