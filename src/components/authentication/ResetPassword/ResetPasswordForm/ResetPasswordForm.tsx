import { useState, useEffect } from "react";
import { Typography, Box, Link, Button } from "@mui/material";
import InputField from "../../../shared/InputField/InputField";
import Error from "../../../shared/Error/Error";

import styles from "./ResetPasswordForm.module.css";

interface ResetPasswordFormProps {
  onNext: () => void;
}

interface PasswordField {
  value: string;
  errorMessage: string;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onNext }) => {
  const [passwordFields, setPasswordFields] = useState<{
    password: PasswordField;
    confirmPassword: PasswordField;
  }>({
    password: { value: "", errorMessage: "" },
    confirmPassword: { value: "", errorMessage: "" },
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const validateFields = () => {
    const errors: string[] = [];

    const password = passwordFields.password.value;
    const confirmPassword = passwordFields.confirmPassword.value;

    if (password.length < 8) {
      errors.push("Password must contain at least 8 characters");
    }

    if (confirmPassword.length < 8) {
      errors.push("Confirm password must contain at least 8 characters");
    }

    if (password && confirmPassword && password !== confirmPassword) {
      errors.push("Passwords do not match. Please try again");
    }

    return errors;
  };

  useEffect(() => {
    if (passwordFields.password.value || passwordFields.confirmPassword.value) {
      const errors = validateFields();
      setFormErrors(errors);
      setIsButtonDisabled(errors.length > 0);
    }
  }, [passwordFields]);

  const handleChange =
    (field: "password" | "confirmPassword") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setPasswordFields(prevState => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          value,
          errorMessage: "",
        },
      }));
    };

  const handleSubmit = () => {
    const errors = validateFields();
    setFormErrors(errors);

    if (errors.length === 0) {
      console.log("Resetting password with:", passwordFields.password.value);
      onNext();
    }

    setIsButtonDisabled(errors.length > 0);
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
            value={passwordFields.password.value}
            errorMessage={passwordFields.password.errorMessage}
            handleChange={handleChange("password")}
          />

          <InputField
            type="password"
            name="confirmPassword"
            placeholder="Confirm your new password"
            value={passwordFields.confirmPassword.value}
            errorMessage={passwordFields.confirmPassword.errorMessage}
            handleChange={handleChange("confirmPassword")}
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

export default ResetPasswordForm;
