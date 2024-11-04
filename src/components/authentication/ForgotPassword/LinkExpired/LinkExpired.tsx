import { Typography, Box, Button, CircularProgress } from "@mui/material";
import { resetPassword } from "../../../../api/auth";
import { useState } from "react";
import styles from "./LinkExpired.module.css";

interface LinkExpiredProps {
  onNext: () => void;
  email: string;
}

const LinkExpired: React.FC<LinkExpiredProps> = ({ onNext, email }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const emailData = { email: email };

    try {
      const response = await resetPassword(emailData);
      console.log(response);
      onNext();
    } catch (error) {
      console.error("Error resetting password:", error);
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
            fontSize: "20px",
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Link Expired
        </Typography>

        <Typography variant="h4" fontWeight={400}>
          The password reset link has expired. Please request a new link.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Button
            variant="contained"
            sx={{
              margin: "30px 0px",
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
          >
            Request New Link{" "}
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
        </Box>
      </Box>
    </Box>
  );
};

export default LinkExpired;
