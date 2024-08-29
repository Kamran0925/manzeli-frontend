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

interface ResetFormState {
  password: PasswordField;
  confirmPassword: PasswordField;
}

const validatePassword = (field: string, password: string): string => {
  const name = field === "password" ? "Password" : "Confirm Password";
  return password.length < 8
    ? `${name} must contain at least 8 characters`
    : "";
};

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onNext }) => {
  const [formState, setFormState] = useState<ResetFormState>({
    password: { value: "", errorMessage: "" },
    confirmPassword: { value: "", errorMessage: "" },
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const handleChange =
    (field: keyof ResetFormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setFormState(prevState => {
        const errorMessage = validatePassword(field, value);

        const updatedState = {
          ...prevState,
          [field]: {
            value,
            errorMessage,
          },
        };

        if (errorMessage) {
          setIsButtonDisabled(true);
        }
        return updatedState;
      });
    };

  const handleSubmit = () => {
    const passwordError = validatePassword(
      "password",
      formState.password.value,
    );
    const confirmPasswordError = validatePassword(
      "confirmPassword",
      formState.confirmPassword.value,
    );

    if (passwordError || confirmPasswordError) {
      setFormState(prevState => ({
        password: {
          ...prevState.password,
          errorMessage: passwordError,
        },
        confirmPassword: {
          ...prevState.confirmPassword,
          errorMessage: confirmPasswordError,
        },
      }));
      setIsButtonDisabled(true);
      return;
    }

    if (formState.password.value !== formState.confirmPassword.value) {
      setFormState(prevState => ({
        ...prevState,
        confirmPassword: {
          ...prevState.confirmPassword,
          errorMessage: "Passwords do not match. Please try again!",
        },
      }));
      setIsButtonDisabled(true);
      return;
    }

    setIsButtonDisabled(false);
    onNext();
  };

  const collectErrors = (formState: ResetFormState): string[] => {
    return Object.values(formState)
      .map(field => field.errorMessage)
      .filter(message => message !== "");
  };

  useEffect(() => {
    if (
      formState.password.value === "" &&
      formState.confirmPassword.value === ""
    ) {
      return;
    }

    const passwordError =
      formState.password.value !== ""
        ? validatePassword("password", formState.password.value)
        : "";
    const confirmPasswordError =
      formState.confirmPassword.value !== ""
        ? validatePassword("confirmPassword", formState.confirmPassword.value)
        : "";

    setFormState(prevState => ({
      password: {
        ...prevState.password,
        errorMessage: passwordError,
      },
      confirmPassword: {
        ...prevState.confirmPassword,
        errorMessage: confirmPasswordError,
      },
    }));

    const hasErrors = passwordError || confirmPasswordError;
    setIsButtonDisabled(!!hasErrors);
  }, [formState.password.value, formState.confirmPassword.value]);

  return (
    <Box component="section" className={styles.box1}>
      <Box className={styles.box2}>
        <Typography
          variant="h4"
          sx={{
            color: "#040308",
            fontFamily: "Poppins, sans-serif",
            fontSize: "32px",
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
            value={formState.password.value}
            errorMessage={formState.password.errorMessage}
            handleChange={handleChange("password")}
          />
          <InputField
            type="password"
            name="confirmPassword"
            placeholder="Confirm your new password"
            value={formState.confirmPassword.value}
            errorMessage={formState.confirmPassword.errorMessage}
            handleChange={handleChange("confirmPassword")}
          />
          {collectErrors(formState).length > 0 && (
            <Box sx={{ maxWidth: "554px", marginTop: "10px", width: "100%" }}>
              <Error messages={collectErrors(formState)} />
            </Box>
          )}
          <Button
            variant="contained"
            sx={{
              margin: "30px 0px",
              padding: "15px 20px",
              height: "54px",
              width: "100%",
              fontSize: "16px",
              borderRadius: "40px",
              textTransform: "none",
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
                "&:hover": { textDecoration: "underline" },
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
