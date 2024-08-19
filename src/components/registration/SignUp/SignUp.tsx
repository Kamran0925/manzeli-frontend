import React, { useState } from "react";
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
import { collectErrors, hasErrors } from "../../../utils/validationHelpers";
import Error from "../../shared/Error/Error";
import styles from "./SignUp.module.css";
import TermsAndConditionsPopup from "../TermsAndConditionsPopup/TermsAndConditionsPopup";

const SignUp = () => {
  const { formState, validateField } = useFormContext();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    type: string,
  ) => {
    validateField(type, name, event.target.value, formState.password.value);
  };

  const isButtonDisabled = hasErrors(formState);

  const errors = collectErrors(formState);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                errorMessage={formState.password.errorMessage}
                handleChange={handleChange}
              />
              <InputField
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={formState.confirmPassword.value}
                errorMessage={formState.confirmPassword.errorMessage}
                handleChange={handleChange}
              />
            </Box>

            {errors.length > 0 && <Error messages={errors} />}
            <Box mt={2} className={styles.box5}>
              <Checkbox
                defaultChecked={formState.isTermsAccepted}
                onClick={handleOpen}
              />

              <Typography variant="body1">
                I agree to{" "}
                <Link color="#001283" variant="body1" onClick={handleOpen}>
                  terms and conditions
                </Link>
              </Typography>
            </Box>

            <StyledButton
              fullWidth={true}
              styles={{
                margin: "10px 0px",
                backgoundColor: "#001283",
              }}
              disabled={isButtonDisabled}
              title="Register Account"
            />
          </Box>
        </Box>
        {open && <TermsAndConditionsPopup onClose={handleClose} />}
      </Container>
    </>
  );
};

export default SignUp;
