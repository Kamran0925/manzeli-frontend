import React from "react";
import {
  Container,
  Box,
  Typography,
  Checkbox,
  Button,
  Link,
} from "@mui/material";

import InputField from "../../shared/InputField/InputField";
import StyledButton from "../../shared/StyledButton/StyledButton";
import LeftArrow from "../../../assets/icons/ui/LeftArrow";
import MobileStepper from "@mui/material/MobileStepper";
import { useFormContext } from "../../../context/FormContext";
import { hasErrors } from "../../../utils/validationHelpers";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const { formState, validateField } = useFormContext();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    validateField(name, event.target.value);
  };

  const isButtonDisabled = hasErrors(formState);

  return (
    <>
      <Container className={styles.box1}>
        <MobileStepper
          variant="text"
          steps={4}
          position="static"
          activeStep={1}
          backButton={
            <Button size="small" disabled={true}>
              <LeftArrow />
              Back
            </Button>
          }
          nextButton={null}
        />
        <Typography variant="body1" sx={{ textAlign: "right" }} color="#8692A6">
          Personal Info.
        </Typography>

        <Box className={styles.box2}>
          <Typography
            variant="h3"
            sx={{
              marginRight: "auto",
              fontSize: {
                xs: "25px",
                sm: "30px",
              },

              lineHeight: {
                xs: "30px",
                sm: "45px",
              },
            }}
          >
            Register Individual Account!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginRight: "auto",
              width: {
                xs: "80%",
              },
            }}
          >
            For the purpose of industry regulation, your details are required.
          </Typography>

          <Box className={styles.box3}>
            <Box>
              <Typography variant="h4" color="#696F79">
                Your fullname*
              </Typography>

              <InputField
                type="text"
                name="username"
                placeholder="Enter name"
                value={formState.username.value}
                error={formState.username.error}
                errorMessage={formState.username.errorMessage}
                handleChange={handleChange}
              />
            </Box>

            <Box mt={2}>
              <Typography variant="h4" color="#696F79">
                Email address*
              </Typography>

              <InputField
                name="email"
                type="email"
                placeholder="Enter email address"
                value={formState.email.value}
                error={formState.email.error}
                errorMessage={formState.email.errorMessage}
                handleChange={handleChange}
              />
            </Box>

            <Box mt={2}>
              <Typography variant="h4" color="#696F79">
                Create password*
              </Typography>

              <InputField
                type="password"
                name="password"
                placeholder="Your password"
                value={formState.password.value}
                error={formState.password.error}
                errorMessage={formState.password.errorMessage}
                handleChange={handleChange}
              />
              <InputField
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={formState.confirmPassword.value}
                error={formState.confirmPassword.error}
                errorMessage={formState.confirmPassword.errorMessage}
                handleChange={handleChange}
              />
            </Box>

            <Box className={styles.box5}>
              <Checkbox defaultChecked />

              <Typography variant="body1">
                I agree to{" "}
                <Link color="#001283" variant="body1">
                  terms and conditions
                </Link>
              </Typography>
            </Box>

            <StyledButton
              fullWidth={true}
              margin="10px 0px"
              color="#001283"
              disabled={isButtonDisabled}
              title="Register Account"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
