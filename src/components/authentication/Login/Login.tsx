import { useEffect, useState } from "react";
import { Typography, Box, Link as MuiLink, Button } from "@mui/material";
import InputField from "../../shared/InputField/InputField";
import { Link, useNavigate } from "react-router-dom";
import { displayError, validate } from "../../../utils/validationHelpers";
import Error from "../../shared/Error/Error";
import { useAuth } from "../../../context/AuthContext";
import { formatErrorMessages } from "../../../utils/errorHelper";
import styles from "./Login.module.css";

interface FormField {
  value: string;
  errorMessage: string;
}

interface FormState {
  email: FormField;
  password: FormField;
}

const validateField = (name: string, value: string) => {
  switch (name) {
    case "email":
      return validate("email", value).errorMessage;
    case "password":
      return validate("password", value).errorMessage;
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
  const { login, isAuthenticated } = useAuth();
  const [loginError, setLoginError] = useState<string[]>([]);

  const [formState, setFormState] = useState<FormState>(initialFormState);

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    const { value } = e.target;

    setFormState(prevState => {
      let errorMessage = validateField(name, value);

      if (errorMessage && name === "password") {
        errorMessage = displayError(name, errorMessage);
      }

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

  const handleSubmit = async () => {
    const emailError = validate("email", formState.email.value).errorMessage;

    let passwordError = validate(
      "password",
      formState.password.value,
    ).errorMessage;

    if (passwordError) {
      passwordError = displayError("password", passwordError);
    }

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

    try {
      const response = await login({
        email: formState.email.value,
        password: formState.password.value,
      });
      console.log(response);
      navigate("/property/listings");
    } catch (err: any) {
      setLoginError(formatErrorMessages(err.response.data));
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
      formState.email.value !== ""
        ? validate("email", formState.email.value).errorMessage
        : "";

    let passwordError =
      formState.password.value !== ""
        ? validate("password", formState.password.value).errorMessage
        : "";

    if (passwordError) {
      passwordError = displayError("password", passwordError);
    }

    setIsButtonDisabled(!!(emailError || passwordError));
  }, [formState.email.value, formState.password.value]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/property/listings");
    }
  }, [isAuthenticated, navigate]);

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
            color="primary"
            sx={{
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
          {(collectErrors(formState).length > 0 || loginError.length > 0) && (
            <Box
              sx={{
                maxWidth: "554px",
                width: "100%",
              }}
            >
              <Error messages={[...collectErrors(formState), ...loginError]} />
            </Box>
          )}
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
