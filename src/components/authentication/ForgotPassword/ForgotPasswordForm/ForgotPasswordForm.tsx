import { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Link as MuiLink,
  CircularProgress,
} from "@mui/material";
import InputField from "../../../shared/InputField/InputField";
import { Link } from "react-router-dom";
import { resetPassword } from "../../../../api/auth";
import styles from "./ForgotPasswordForm.module.css";
import Error from "../../../shared/Error/Error";

interface ForgotPasswordProps {
  onNext: () => void;
  email: string;
  setEmail: (value: string) => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordProps> = ({
  onNext,
  email,
  setEmail,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 8) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
    setEmail(value);
  };

  const handleSubmit = async () => {
    const emailData = { email: email };
    setIsLoading(true);

    try {
      await resetPassword(emailData);
      onNext();
    } catch (error: any) {
      setError(Object.values(error?.response?.data));
    }
    setIsLoading(false);
  };

  return (
    <Box component="section" className={styles.box1}>
      <Box className={styles.box2}>
        <Typography
          variant="h4"
          sx={{
            color: "#040308",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Forgot Password
        </Typography>

        <Typography variant="h4" fontWeight={400}>
          Enter the email you used to create your account so we can send you
          instructions on how to reset your password.
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
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            errorMessage={""}
            handleChange={handleChange}
          />
          {error.length > 0 && <Error messages={error} />}

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
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            Send{" "}
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
            <MuiLink
              component={Link}
              to="/login"
              sx={{
                textDecoration: "none",
                color: "#000",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Back to Login
            </MuiLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPasswordForm;
