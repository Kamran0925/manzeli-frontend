import { Typography, Box, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import InputField from "../../../../../shared/InputField/InputField";
import classNames from "classnames";
import styles from "./VerifyCurrentEmail.module.css";

const VerifyCurrentEmail = () => {
  return (
    <Box className={styles.section}>
      <Typography className={styles.infoText}>
        We need to confirm your current email before making any changes.
      </Typography>

      <Box>
        <Box className={styles.field}>
          <Typography className={styles.label}>Email address</Typography>
          <InputField
            name="email"
            type="email"
            placeholder="Enter email address"
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
          />
        </Box>
      </Box>

      <Typography className={styles.resendText}>
        Didn't receive the email?{" "}
        <MuiLink
          component={Link}
          to="/resend-email"
          color="primary"
          sx={{
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Resend in 30s
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default VerifyCurrentEmail;
