import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
} from "@mui/material";

import InputField from "../../shared/InputField/InputField";
import StyledButton from "../../shared/StyledButton/StyledButton";
import LeftArrow from "../../../assets/icons/ui/LeftArrow";
import MobileStepper from "@mui/material/MobileStepper";

import { useFormContext } from "../../../context/FormContext";
import { collectContactDetailErrors } from "../../../utils/validationHelpers";
import LockIcon from "../../../assets/icons/ui/LockIcon";
import { Country, countries } from "../../common/data/countries";
import Error from "../../shared/Error/Error";
import PhoneField from "../../shared/PhoneField/Phonefield";
import styles from "./ContactDetails.module.css";

const ContactDetails = () => {
  const { formState, validateField, previousStep, nextStep } = useFormContext();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [collectedErrors, setCollectedErrors] = useState<string[]>([]);

  const handleChange = (
    event: SelectChangeEvent<string>,
    name: string,
    type: string,
  ) => {
    validateField(type, name, event.target.value);
  };

  const onChangeHandler = (event: SelectChangeEvent<string>, name: string) => {
    handleChange(event, name, formState.residence.type);
  };

  const handlePhoneChange = (value: any, name: string, type: string) => {
    validateField(type, name, value);
  };

  const handleSubmit = () => {
    let isValidForm = true;
    Object.entries(formState).forEach(([key, field]) => {
      if (
        field.step === formState.step &&
        typeof field === "object" &&
        "type" in field
      ) {
        const isValidField = validateField(field.type, key, field.value);
        if (!isValidField) {
          isValidForm = false;
        }
      }
    });

    if (isValidForm) {
      nextStep();
    } else {
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    const errors = collectContactDetailErrors(formState);
    setCollectedErrors(errors);
    setIsButtonDisabled(errors.length > 0);
  }, [formState]);

  return (
    <>
      <Container className={styles.box1} disableGutters={true}>
        <MobileStepper
          variant="text"
          steps={4}
          position="static"
          activeStep={1}
          backButton={
            <Button size="small" onClick={previousStep}>
              <LeftArrow />
              Back
            </Button>
          }
          nextButton={null}
        />
        <Typography
          variant="body1"
          sx={{ textAlign: "right" }}
          color="secondary"
        >
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
            Complete Your Profile!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginRight: "auto",
              fontSize: {
                xs: "14px",
                sm: "18px",
              },
              width: {
                xs: "100%",
                sm: "80%",
              },
            }}
          >
            For the purpose of industry regulation, your details are required.
          </Typography>

          <Box className={styles.box3}>
            <Box>
              <Typography variant="h4" color="#696F79">
                Phone number
              </Typography>
              <PhoneField
                type="phone"
                name="phone"
                value={formState.phone.value}
                placeholder="Enter phone"
                errorMessage={formState.phone.errorMessage}
                handleChange={handlePhoneChange}
              />
            </Box>

            <Box mt={2}>
              <Typography variant="h4" color="#696F79">
                Your address
              </Typography>

              <InputField
                type="text"
                name="address"
                placeholder="Enter address"
                value={formState.address.value}
                errorMessage={formState.address.errorMessage}
                handleChange={handleChange}
              />

              <InputField
                type="text"
                name="street"
                value={formState.street.value}
                placeholder="Enter street"
                errorMessage={formState.street.errorMessage}
                handleChange={handleChange}
              />
              <InputField
                type="text"
                name="city"
                value={formState.city.value}
                placeholder="Enter city"
                errorMessage={formState.city.errorMessage}
                handleChange={handleChange}
              />
            </Box>

            <Box mt={2}>
              <Typography variant="h4" color="#696F79">
                Country of residence
              </Typography>
              <FormControl fullWidth>
                <Select
                  name="residence"
                  disabled
                  value={formState.residence.value}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  onChange={(e: SelectChangeEvent<string>) =>
                    onChangeHandler(e, "residence")
                  }
                  fullWidth
                  sx={{
                    borderRadius: "40px",
                    outline: "1px solid rgba(4, 3, 8, 0.60)",
                  }}
                >
                  <MenuItem value="" disabled>
                    Please select
                  </MenuItem>
                  {countries.map((country: Country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box mt={2}>
              <Typography variant="h4" color="#696F79">
                Tax Identify Number
              </Typography>
              <InputField
                type="text"
                name="identity"
                value={formState.identity.value}
                placeholder="Please select"
                errorMessage={formState.identity.errorMessage}
                handleChange={handleChange}
              />
            </Box>

            {collectedErrors.length > 0 && <Error messages={collectedErrors} />}
            <StyledButton
              fullWidth={true}
              disabled={isButtonDisabled}
              title="Save & Continue"
              styles={{
                margin: "20px 0px",
                backgroundColor: "#001283",
              }}
              onClick={handleSubmit}
            />

            <Typography
              color="secondary"
              sx={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "18px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                margin: "10px auto",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <LockIcon />
              Your Info is safely secured
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ContactDetails;
