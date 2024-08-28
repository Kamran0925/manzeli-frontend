import { useState } from "react";
import { Typography, Box, Button, Link as MuiLink } from "@mui/material";
import InputField from "../../../shared/InputField/InputField";
import { Link } from "react-router-dom";

import styles from "./ForgotPasswordForm.module.css";

interface ForgotPasswordProps {
  onNext: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordProps> = ({ onNext }) => {
  const [name, setName] = useState<string>("");

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 8) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
    setName(value);
  };

  const handleSubmit = () => {
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
          Forgot Password
        </Typography>

        <Typography variant="h4" fontWeight={400}>
          Enter the Username you used to create your account so we can send you
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
            type="text"
            name="username"
            placeholder="Username"
            value={name}
            errorMessage={""}
            handleChange={handleChange}
          />

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
            Send
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
