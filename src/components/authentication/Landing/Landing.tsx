import { Typography, Box, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import StyledButton from "../../shared/StyledButton/StyledButton";
import { useFormContext } from "../../../context/FormContext";
import styles from "./Landing.module.css";

const Landing = () => {
  const { nextStep } = useFormContext();

  return (
    <>
      <Box component="section" className={styles.box1}>
        <Box sx={{ marginLeft: "auto", display: "flex" }}>
          <Typography variant="body1">
            Already have an account?{" "}
            <MuiLink
              component={Link}
              color="primary"
              variant="body1"
              to="/login"
            >
              Sign in
            </MuiLink>
          </Typography>
        </Box>

        <Box className={styles.box2}>
          <Typography
            variant="h3"
            sx={{
              fontSize: {
                xs: "28px",
                sm: "30px",
              },
            }}
          >
            Join Us to manage and market your Properties with ease!
          </Typography>

          <StyledButton
            fullWidth={true}
            styles={{
              marginTop: "60px",
            }}
            title="Join Now"
            onClick={nextStep}
          />
        </Box>
      </Box>
    </>
  );
};

export default Landing;
