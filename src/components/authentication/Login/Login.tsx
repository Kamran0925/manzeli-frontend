import { useState } from "react";
import { Typography, Box, Link, Button } from "@mui/material";
import InputField from "../../shared/InputField/InputField";
import Error from "../../shared/Error/Error";
import styles from "./Login.module.css";

const validateEmail = (email: string): string => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : "Invalid email address";
};

const validatePassword = (password: string): string => {
  return password.length < 8
    ? "Password must contain at least 8 characters"
    : "";
};

const validateField = (name: string, value: string) => {
  switch (name) {
    case "email":
      return validateEmail(value);
    case "password":
      return validatePassword(value);
    default:
      return "";
  }
};

const Login = () => {
  const [formState, setFormState] = useState({
    email: {
      value: "",
      errorMessage: "",
    },
    password: {
      value: "",
      errorMessage: "",
    },
  });

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    const { value } = e.target;

    setFormState(prevState => {
      const errorMessage = validateField(name, value);

      const updatedState = {
        ...prevState,
        [name]: {
          value,
          errorMessage,
        },
      };

      const emailError = validateField("email", updatedState.email.value);
      const passwordError = validateField(
        "password",
        updatedState.password.value,
      );

      const updatedErrors = [emailError, passwordError].filter(Boolean);

      setFormErrors(updatedErrors);
      setIsButtonDisabled(updatedErrors.length > 0);

      return updatedState;
    });
  };

  const handleSubmit = () => {
    const emailError = validateEmail(formState.email.value);
    const passwordError = validatePassword(formState.password.value);

    if (emailError || passwordError) {
      setFormState(prevState => ({
        email: {
          ...prevState.email,
          errorMessage: emailError,
        },
        password: {
          ...prevState.password,
          errorMessage: passwordError,
        },
      }));
      setFormErrors([emailError, passwordError].filter(Boolean));
      setIsButtonDisabled(true);
      return;
    }

    setFormErrors([]);
    setIsButtonDisabled(false);
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
          Welcome Back
        </Typography>

        <Typography variant="h4" fontWeight={400}>
          Don’t have an account?{" "}
          <Link
            href="/sign-up"
            sx={{
              color: "#000",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Sign Up
          </Link>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "100px",
            gap: "20px",
          }}
        >
          <InputField
            name="email"
            type="email"
            placeholder="Email"
            value={formState.email.value}
            errorMessage={formState.email.errorMessage}
            handleChange={e => handleInputChange(e, "email")}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password.value}
            errorMessage={formState.password.errorMessage}
            handleChange={e => handleInputChange(e, "password")}
          />
          <Box
            sx={{
              width: "554px",
            }}
          >
            {formErrors.length > 0 && <Error messages={formErrors} />}
          </Box>
          <Link
            href="/forgot-password"
            sx={{
              color: "#001283",
              fontFamily: "Poppins, sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginLeft: "auto",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Forgot Password?
          </Link>
        </Box>

        <Button
          variant="contained"
          sx={{
            marginTop: "30px",
            padding: "15px 20px",
            height: "54px",
            width: "100%",
            borderRadius: "40px",
            textTransform: "none",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={handleSubmit}
          disabled={isButtonDisabled}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
