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
          customStyle={{ margin: 0 }}
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
          customStyle={{ margin: 0 }}
        />
      </Box>
      <Box className={styles.field}>
        <Typography className={styles.label}>Confirm New Password</Typography>
        <InputField
          type="password"
          name="password"
          placeholder="Re-enter New Password"
          value=""
          errorMessage="Passwords do not match"
          handleChange={() => {}}
          customStyle={{ margin: 0 }}
        />
        <Error
          messages={["Passwords do not match"]}
          customStyle={{ margin: 0 }}
        />
      </Box>
    </Box>
  );
};

export default UpdatePassword;
