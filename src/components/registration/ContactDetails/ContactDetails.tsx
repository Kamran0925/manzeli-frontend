import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
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
import styles from "./ContactDetails.module.css";
import PhoneField from "../../shared/PhoneField/Phonefield";

const ContactDetails = () => {
  const { formState, validateField, previousStep, nextStep } = useFormContext();

  const handleChange = (
    event: SelectChangeEvent<string>,
    name: string,
    type: string,
  ) => {
    console.log(type, name, event.target.value);
    validateField(type, name, event.target.value);
  };

  const handlePhoneChange = (value: any, name: string, type: string) => {
    validateField(type, name, value);
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [collectedErrors, setCollectedErrors] = useState<string[]>([]);

  const handleSubmit = () => {
    Object.entries(formState).forEach(([key, field]) => {
      if (typeof field === "object" && "type" in field) {
        validateField(field.type, key, field.value, formState.password.value);
      }
      setIsButtonDisabled(collectedErrors.length > 0);
    });

    const errors = collectContactDetailErrors(formState);
    setIsButtonDisabled(errors.length > 0);
    nextStep();
  };

  useEffect(() => {
    const errors = collectContactDetailErrors(formState);
    setCollectedErrors(errors);
    setIsButtonDisabled(errors.length > 0);
    console.log("Formstate", formState);
  }, [formState]);

  const handleBack = () => {
    previousStep();
  };

  const onChangeHandler = (event: SelectChangeEvent<string>, name: string) => {
    handleChange(event, name, formState.residence.type);
  };

  return (
    <>
      <Container className={styles.box1}>
        <MobileStepper
          variant="text"
          steps={4}
          position="static"
          activeStep={1}
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
            Complete Your Profile!
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
                {formState.phone.title}
              </Typography>
              <PhoneField
                type="text"
                name="phone"
                value={formState.phone.value}
                placeholder={formState.phone.placeholder}
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
                placeholder={formState.address.placeholder}
                value={formState.address.value}
                errorMessage={formState.address.errorMessage}
                handleChange={handleChange}
              />

              <InputField
                type="text"
                name="street"
                value={formState.street.value}
                placeholder={formState.street.placeholder}
                errorMessage={formState.street.errorMessage}
                handleChange={handleChange}
              />
              <InputField
                type="text"
                name="city"
                value={formState.city.value}
                placeholder={formState.city.placeholder}
                errorMessage={formState.city.errorMessage}
                handleChange={handleChange}
              />
            </Box>

            <Box mt={2}>
              <Typography variant="h4" color="#696F79">
                Country of residence
              </Typography>
              <Select
                label="Country of Residence"
                labelId="country-select-label"
                id="country-select"
                value={formState.residence.value}
                name="residence"
                onChange={(e: SelectChangeEvent<string>) =>
                  onChangeHandler(e, "residence")
                }
                fullWidth
                sx={{
                  borderRadius: "40px",
                  outline: "1px solid rgba(4, 3, 8, 0.60)",
                }}
              >
                {countries.map((country: Country) => (
                  <MenuItem key={country.code} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            <Box mt={2}>
              <Typography variant="h4" color="#696F79">
                Tax Identify Number
              </Typography>
              <InputField
                type="text"
                name="identity"
                value={formState.identity.value}
                placeholder={formState.identity.placeholder}
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
                backgoundColor: "#001283",
              }}
              onClick={handleSubmit}
            />

            <Typography
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
                color: "#8692A6",
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
