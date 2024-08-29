import { useEffect, useState } from "react";
import { Typography, Box, Link as MuiLink, Button } from "@mui/material";
import InputField from "../../shared/InputField/InputField";
import Error from "../../shared/Error/Error";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

interface FormField {
  value: string;
  errorMessage: string;
}

interface FormState {
  email: FormField;
  password: FormField;
}

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
  const initialFormState: FormState = {
    email: {
      value: "",
      errorMessage: "",
    },
    password: {
      value: "",
      errorMessage: "",
    },
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);

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

      if (errorMessage) {
        setIsButtonDisabled(true);
      }
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
      setIsButtonDisabled(true);
      return;
    }

    setIsButtonDisabled(false);
  };

  const collectErrors = (formState: FormState): string[] => {
    return Object.values(formState)
      .map(field => field.errorMessage)
      .filter(message => message !== "");
  };

  useEffect(() => {
    if (formState.email.value === "" && formState.password.value === "") {
      return;
    }

    const emailError =
      formState.email.value !== "" ? validateEmail(formState.email.value) : "";
    const passwordError =
      formState.password.value !== ""
        ? validatePassword(formState.password.value)
        : "";

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

    const hasErrors = emailError || passwordError;
    setIsButtonDisabled(!!hasErrors);
  }, [formState.email.value, formState.password.value]);

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
          <MuiLink
            component={Link}
            to="/registration"
            sx={{
              color: "#000",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Sign Up
          </MuiLink>
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
            {collectErrors(formState).length > 0 && (
              <Error messages={collectErrors(formState)} />
            )}
          </Box>
          <MuiLink
            component={Link}
            to="/forgot-password"
            sx={{
              color: "#001283",
              fontSize: "14px",
              fontWeight: 400,
              marginLeft: "auto",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Forgot Password?
          </MuiLink>
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
