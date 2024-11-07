import { Typography, Box, Link as MuiLink, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useState, useEffect } from "react";
import { confirmEmailChange } from "../../../../../../api/auth";
import styles from "./VerifyOTP.module.css";

const validateOTP = (otpFields: string[]) => {
  return otpFields.every(field => field !== "");
};

interface VerifyOTPProps {
  isSubmit: boolean;
  setIsSubmit: (value: boolean) => void;
  openModal: (value: number) => void;
  setPrimaryAction: (value: boolean) => void;
}

const VerifyOTP: React.FC<VerifyOTPProps> = ({
  isSubmit,
  setIsSubmit,
  openModal,
  setPrimaryAction,
}) => {
  const [otpFields, setOtpFields] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState<string | null>(null);

  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newOtpFields = [...otpFields];
    newOtpFields[index] = e.target.value;
    setOtpFields(newOtpFields);
  };

  const collectErrors = () => {
    if (!validateOTP(otpFields)) {
      return "OTP fields cannot be empty.";
    }
    return null;
  };

  const submitOTP = async () => {
    const otpError = collectErrors();
    if (otpError) {
      setError(otpError);
      setPrimaryAction(true);
      return;
    }

    setError(null);

    const otp = otpFields.join("");
    try {
      await confirmEmailChange({ otp });
      openModal(2);
    } catch (error: any) {
      setError("Invalid OTP, please try again.");
    }
  };

  useEffect(() => {
    if (isSubmit) {
      submitOTP();
      setIsSubmit(false);
    }
  }, [isSubmit]);

  useEffect(() => {
    if (collectErrors() == null) {
      setPrimaryAction(false);
    }
  }, [otpFields]);

  return (
    <Box className={styles.section}>
      <Typography className={styles.infoText}>
        We've sent a 6-digit OTP to your new email. Enter it below to confirm.
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
                "& .css-17e02us-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "none",
                  },
              }}
              value={otpFields[index]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleOtpChange(e, index)
              }
            />
          ))}
        </Box>
      </Box>

      <Typography
        className={classNames(styles.resendText, {
          [styles.errorText]: error,
        })}
      >
        {error ?? "Didn't receive the code?"}{" "}
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
