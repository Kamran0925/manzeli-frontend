import { useState, useEffect } from "react";
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

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [failedAttempts, setFailedAttempts] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (failedAttempts >= 3) {
      setIsButtonDisabled(true);
      setFormErrors([
        "Error: Account locked due to 3 failed attempts. Please check your email for unlock instructions.",
      ]);
      const timer = setTimeout(() => {
        setFailedAttempts(0);
        setIsButtonDisabled(false);
        setFormErrors([]);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [failedAttempts]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value) {
      setEmailError(validateEmail(value));
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value) {
      setPasswordError(validatePassword(value));
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      setFormErrors([emailError, passwordError]);
      setFailedAttempts(prevAttempts => prevAttempts + 1);
      return;
    }

    console.log("Logging in with:", { email, password });
    setFormErrors([]);
    setFailedAttempts(0);
  };

  const isSubmitDisabled = !!emailError || !!passwordError;

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
            value={email}
            errorMessage={emailError}
            handleChange={handleEmailChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            errorMessage={passwordError}
            handleChange={handlePasswordChange}
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
              color: "#000",
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
            Forgot Password
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
            backgroundColor: "#001283",
            color: "#fff",
            textTransform: "none",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#000a4e",
            },
          }}
          onClick={handleSubmit}
          disabled={isButtonDisabled || isSubmitDisabled}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
