import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./ResetPasswordSuccess.module.css";

const ResetPasswordSuccess = () => {
  const handleSubmit = () => {
    console.log("Link Expired:");
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
          Password reset successfully
        </Typography>

        <Typography variant="h4" fontWeight={400} sx={{ textAlign: "center" }}>
          Your account has been unlocked by the admin.
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
            component={Link}
            to="/login"
            sx={{
              margin: "30px 0px",
              padding: "15px 20px",
              fontSize: "16px",
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
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPasswordSuccess;
