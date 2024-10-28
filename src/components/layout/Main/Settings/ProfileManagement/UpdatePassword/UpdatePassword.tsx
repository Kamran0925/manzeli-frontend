import { Typography, Box } from "@mui/material";
import InputField from "../../../../../shared/InputField/InputField";
import classNames from "classnames";
import styles from "./UpdatePassword.module.css";
import Error from "../../../../../shared/Error/Error";

const UpdatePassword = () => {
  return (
    <Box className={styles.section}>
      <Box className={classNames(styles.field)}>
        <Typography className={styles.label}>Current Password</Typography>
        <InputField
          type="password"
          name="password"
          placeholder="Enter Current Password"
          value=""
          errorMessage=""
          handleChange={() => null}
        />
      </Box>
      <Box className={classNames(styles.field)}>
        <Typography className={styles.label}>New Current Password</Typography>
        <InputField
          type="password"
          name="password"
          placeholder="Enter New Current Password"
          value=""
          errorMessage=""
          handleChange={() => null}
        />
      </Box>
      <Box className={classNames(styles.field, styles.spacing1)}>
        <Typography className={styles.label}>Confirm New Password</Typography>
        <InputField
          type="password"
          name="password"
          placeholder="Re-enter New Password"
          value=""
          errorMessage=""
          handleChange={() => {}}
        />
        <Error messages={["Passwords do not match"]} />
      </Box>
    </Box>
  );
};

export default UpdatePassword;
