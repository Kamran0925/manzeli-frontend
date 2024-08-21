import React, { useEffect, useState } from "react";
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
import { collectErrors } from "../../../utils/validationHelpers";
import Error from "../../shared/Error/Error";
import TermsAndConditionsPopup from "../TermsAndConditionsPopup/TermsAndConditionsPopup";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const { formState, validateField, previousStep } = useFormContext();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    type: string,
  ) => {
    validateField(type, name, event.target.value, formState.password.value);
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const handleTermsAccept = () => {
    validateField("checkbox", "isTermsAccepted", true);
  };

  const handleSubmit = () => {
    Object.entries(formState).forEach(([key, field]) => {
      if (typeof field === "object" && "type" in field) {
        validateField(field.type, key, field.value, formState.password.value);
      }
    });

    const errors = collectErrors(formState);
    setIsButtonDisabled(errors.length > 0);
  };

  useEffect(() => {
    const errors = collectErrors(formState);
    setIsButtonDisabled(errors.length > 0);
  }, [formState]);

  const handleBack = () => {
    previousStep();
  };

  return (
    <>
      <Container className={styles.box1}>
        <MobileStepper
          variant="text"
          steps={4}
          position="static"
          activeStep={formState.step}
          backButton={
            <Button size="small" onClick={handleBack}>
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

            {collectErrors(formState).length > 0 && (
              <Error messages={collectErrors(formState)} />
            )}

            <Box className={styles.box5}>
              <Checkbox
                checked={formState.isTermsAccepted}
                onClick={() => setIsOpen(true)}
              />

              <Typography variant="body1">
                I agree to{" "}
                <Link
                  color="#001283"
                  variant="body1"
                  onClick={() => setIsOpen(true)}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  terms and conditions
                </Link>
              </Typography>
            </Box>

            <StyledButton
              fullWidth={true}
              styles={{
                margin: "10px 0px",
                backgroundColor: "#001283",
              }}
              disabled={isButtonDisabled}
              title="Register Account"
              onClick={handleSubmit}
            />
          </Box>
        </Box>
        {isOpen && (
          <TermsAndConditionsPopup
            onClose={() => setIsOpen(false)}
            onAccept={handleTermsAccept}
          />
        )}
      </Container>
    </>
  );
};

export default SignUp;
