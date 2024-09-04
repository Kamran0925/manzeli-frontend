import { Typography, Box, Link as MuiLink, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./EmailVerification.module.css";

interface EmailVerificationProps {
  onNext: () => void;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({ onNext }) => {
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
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Check your Email
        </Typography>

        <Typography variant="h4" fontWeight={400}>
          We have sent an email with password reset information to
          p****11@g***l.com.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "100px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#040308",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Didn't receive the email? Check your spam, junk, or promotion
            folders or
          </Typography>

          <Button
            variant="contained"
            sx={{
              margin: "30px 0px",
              padding: "15px 20px",
              height: "54px",
              width: "100%",
              borderRadius: "40px",
              fontSize: "16px",
              textTransform: "none",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={handleSubmit}
          >
            Resend Email
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

export default EmailVerification;
