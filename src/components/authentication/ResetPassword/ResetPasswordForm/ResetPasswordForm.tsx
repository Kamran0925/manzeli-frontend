import { useState, useEffect } from "react";
import { Typography, Box, Link, Button, CircularProgress } from "@mui/material";
import InputField from "../../../shared/InputField/InputField";
import Error from "../../../shared/Error/Error";
import { displayError, validate } from "../../../../utils/validationHelpers";
import {
  PasswordResetConfirmData,
  confirmPasswordReset,
} from "../../../../api/auth";
import styles from "./ResetPasswordForm.module.css";

interface ResetPasswordFormProps {
  uid: string | null;
  token: string | null;
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

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  uid,
  token,
  onNext,
}) => {
  const [formState, setFormState] = useState<ResetFormState>({
    password: { value: "", errorMessage: "" },
    confirmPassword: { value: "", errorMessage: "" },
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string[]>([]);

  const formatError = (type: string, field: string, value: any): string => {
    const { errorMessage } = validate(type, value);
    return errorMessage ? displayError(field, errorMessage) : "";
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string,
    type: string,
  ) => {
    const { value } = event.target;
    let errorMessage = formatError(type, field, value);

    setFormState(prevState => {
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

  const handleSubmit = async () => {
    const passwordError = formatError(
      "password",
      "password",
      formState.password.value,
    );

    const confirmPasswordError = formatError(
      "password",
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
          errorMessage: "Passwords do not match! Please try again",
        },
      }));
      setIsButtonDisabled(true);
      return;
    }

    setIsButtonDisabled(false);

    setIsLoading(true);

    const data: PasswordResetConfirmData = {
      uid: uid,
      token: token,
      new_password1: formState.password.value,
      new_password2: formState.confirmPassword.value,
    };

    try {
      await confirmPasswordReset(data);
      setError([]);
      onNext();
    } catch (error: any) {
      setError(Object.values(error.response?.data));
    }

    setIsLoading(false);
  };

  const collectErrors = (formState: ResetFormState): string[] => {
    return Object.values(formState)
      .map(field => field.errorMessage)
      .filter(message => message !== "");
  };

  useEffect(() => {
    const { password, confirmPassword } = formState;

    if (password.value === "" && confirmPassword.value === "") {
      return;
    }

    let passwordError = password.value
      ? formatError("password", "password", password.value)
      : "";

    let confirmPasswordError = confirmPassword.value
      ? formatError("password", "confirmPassword", confirmPassword.value)
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

    setIsButtonDisabled(!!(passwordError || confirmPasswordError));
  }, [formState.password.value, formState.confirmPassword.value]);

  const errors = [...collectErrors(formState), ...error];

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
            handleChange={handleChange}
          />
          <InputField
            type="password"
            name="confirmPassword"
            placeholder="Confirm your new password"
            value={formState.confirmPassword.value}
            errorMessage={formState.confirmPassword.errorMessage}
            handleChange={handleChange}
          />

          {errors.length > 0 && (
            <Box sx={{ maxWidth: "554px", marginTop: "10px", width: "100%" }}>
              <Error messages={errors} />
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
            Reset Password{" "}
            {isLoading && (
              <CircularProgress
                size="16px"
                sx={{
                  marginLeft: "20px",
                  color: "#FFF",
                }}
              />
            )}
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
              href="/login"
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
