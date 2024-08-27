import { useState, useEffect } from "react";
import { Typography, Box, Link, Button } from "@mui/material";
import InputField from "../../shared/InputField/InputField";
import Error from "../../shared/Error/Error";

import styles from "./ResetPassword.module.css";

interface ResetPasswordProps {
  onNext: () => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ onNext }) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    const errors: string[] = [];

    if (password.length > 0 || confirmPassword.length > 0) {
      if (password.length < 8) {
        errors.push("Password must contain at least 8 characters");
      }

      if (confirmPassword.length < 8) {
        errors.push("Confirm password must contain at least 8 characters");
      }

      if (password !== confirmPassword) {
        errors.push("Passwords do not match. Please try again");
      }
    }

    setFormErrors(errors);
    setIsButtonDisabled(errors.length > 0);
  }, [password, confirmPassword]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

  const handleSubmit = () => {
    const errors: string[] = [];

    if (password.length < 8) {
      errors.push("Password must contain at least 8 characters");
    }

    if (confirmPassword.length < 8) {
      errors.push("Confirm password must contain at least 8 characters");
    }

    if (password !== confirmPassword) {
      errors.push("Passwords do not match. Please try again");
    }

    setFormErrors(errors);

    if (errors.length === 0) {
      console.log("Resetting password with:", password);
    }

    setIsButtonDisabled(errors.length > 0);
    onNext();
  };

  return (
    <Box component="section" className={styles.box1}>
      <Box className={styles.box2}>
        <Typography
          variant="h4"
          sx={{
            color: "#040308",
            fontFamily: "Poppins, sans-serif",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Reset Password
        </Typography>

        <Typography variant="h4" fontWeight={400}>
          Choose a new password for your account
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "100px",
          }}
        >
          <InputField
            type="password"
            name="password"
            placeholder="Your new password"
            value={password}
            errorMessage={passwordError}
            handleChange={handlePasswordChange}
          />

          <InputField
            type="password"
            name="confirmPassword"
            placeholder="Confirm your new password"
            value={confirmPassword}
            errorMessage={confirmPasswordError}
            handleChange={handleConfirmPasswordChange}
          />

          <Box
            sx={{
              maxWidth: "554px",
              marginTop: "10px",
            }}
          >
            {formErrors.length > 0 && <Error messages={formErrors} />}
          </Box>

          <Button
            variant="contained"
            sx={{
              margin: "30px 0px",
              padding: "15px 20px",
              height: "54px",
              width: "100%",
              fontSize: "16px",
              borderRadius: "40px",
              backgroundColor: "#001283",
              color: "#fff",
              textTransform: "none",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#000a4e",
              },
            }}
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            Reset Password
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: "15px",
              fontWeight: 600,
            }}
          >
            <Link
              href="/forgot-password"
              sx={{
                textDecoration: "none",
                color: "#000",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Back to Login
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
