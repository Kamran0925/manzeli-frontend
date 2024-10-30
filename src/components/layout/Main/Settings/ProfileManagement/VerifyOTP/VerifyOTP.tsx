import { Typography, Box, Link as MuiLink, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";
import styles from "./VerifyOTP.module.css";

const VerifyOTP = () => {
  const [error, setError] = useState<boolean>(true);
  return (
    <Box className={styles.section}>
      <Typography className={styles.infoText}>
        We’ve sent a 4-digit OTP to your new email. Enter it below to confirm.
      </Typography>

      <Box>
        <Box className={styles.inputContainer}>
          {[...Array(6)].map((_, index) => (
            <TextField
              key={index}
              variant="outlined"
              className={classNames(styles.inputField, {
                [styles.errorField]: error,
              })}
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center" },
              }}
              sx={{
                "& .MuiOutlinedInput-input": {
                  height: "70px",
                  padding: 0,
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <Typography
        className={classNames(styles.resendText, {
          [styles.errorText]: error,
        })}
      >
        {error ? "Invalid OTP, please try again." : "Didn't receive the code?"}{" "}
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

export default VerifyOTP;
