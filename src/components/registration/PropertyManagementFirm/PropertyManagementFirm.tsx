import { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  SelectChangeEvent,
  styled,
  MobileStepper,
} from "@mui/material";

import InputField from "../../shared/InputField/InputField";
import StyledButton from "../../shared/StyledButton/StyledButton";
import { AccountType, useFormContext } from "../../../context/FormContext";
import { collectPropertyFirmErrors } from "../../../utils/validationHelpers";
import Error from "../../shared/Error/Error";
import Circle from "../../../assets/icons/ui/Circle";
import FileUpload from "../../../assets/icons/ui/FileUpload";
import LeftArrow from "../../../assets/icons/ui/LeftArrow";
import { FormState } from "../../shared/RegistrationFields/RegistrationFields";
import styles from "./PropertyManagementFirm.module.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const PropertyManagementFirm = () => {
  const {
    formState,
    validateField,
    previousStep,
    nextStep,
    setProfilePicture,
  } = useFormContext();

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [collectedErrors, setCollectedErrors] = useState<string[]>([]);

  const handleChange = (
    event: SelectChangeEvent<string>,
    name: string,
    type: string,
  ) => {
    validateField(type, name as keyof FormState, event.target.value);
  };

  const handleSubmit = () => {
    let isValidForm = true;
    Object.entries(formState).forEach(([key, field]) => {
      if (typeof field === "object" && "type" in field) {
        if (
          field.companyFlowStep === formState.step &&
          formState.accountType === AccountType.PropertyManagementFirm
        ) {
          const isValidField = validateField(
            field.type,
            key as keyof FormState,
            field.value,
          );
          if (!isValidField) {
            isValidForm = false;
          }
        }
      }
    });

    if (!formState.profilePicture) {
      isValidForm = false;
      setFileError("Please select a profile picture.");
    }

    if (isValidForm) {
      nextStep();
    } else {
      setIsButtonDisabled(true);
    }
  };

  const [fileName, setFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      const fileType = file.type;
      const fileSize = file.size;

      if (fileType !== "image/jpeg" && fileType !== "image/png") {
        setFileError("Only JPG and PNG files are allowed.");
        event.target.value = "";
        return;
      }

      const maxSize = 10 * 1024 * 1024;
      if (fileSize > maxSize) {
        setFileError("File size exceeds the 10MB limit.");
        event.target.value = "";
        return;
      }

      setFileError(null);

      setFileName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        const blob = new Blob([reader.result as ArrayBuffer], {
          type: fileType,
        });
        setProfilePicture(blob);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleRemoveFile = () => {
    setFileName(null);
    setProfilePicture("");
  };

  useEffect(() => {
    const errors = collectPropertyFirmErrors(formState);
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
            Property Management Firm Registration
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
            For the purpose of property management firm, your details are
            required.
          </Typography>

          <Box className={styles.box3}>
            <Box mt={2}>
              <Typography variant="h4" color="#696F79">
                Company name
              </Typography>

              <InputField
                type="text"
                name="company"
                placeholder="Enter Company Name"
                value={formState.company.value}
                errorMessage={formState.company.errorMessage}
                handleChange={handleChange}
              />

              <Typography variant="h4" color="#696F79">
                Website
              </Typography>

              <InputField
                type="text"
                name="website"
                placeholder="Website"
                value={formState.website.value}
                errorMessage={formState.website.errorMessage}
                handleChange={handleChange}
              />

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
          </Box>

          <Box className={styles.profilePicture}>
            <Box>
              <Typography
                variant="h4"
                color="#696F79"
                sx={{ marginBottom: "12px" }}
              >
                Upload Profile Picture
              </Typography>

              {formState.profilePicture ? (
                <img
                  style={{
                    height: "114px",
                    width: "114px",
                    borderRadius: "100%",
                  }}
                  alt="The house from the offer."
                  src={URL.createObjectURL(formState.profilePicture)}
                />
              ) : (
                <Circle />
              )}
              <Typography
                sx={{
                  color: fileError ? "#E80000" : "#7F7F7F",
                  fontSize: "10px",
                  fontWeight: 400,
                  marginTop: "7px",
                }}
              >
                {fileError ? (
                  <>{fileError}</>
                ) : (
                  "The application should support common image formats (png, jpg) and limit the file size to 10MB"
                )}
              </Typography>

              <Box className={styles.profilePricture2}>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  startIcon={<FileUpload />}
                  sx={{
                    borderRadius: "16.064px",
                    border: "0.803px solid #001283",
                    background: "#001283",
                    padding: "0px 19.276px",
                    height: "35.34px",
                    maxWidth: "134.531px",
                    textTransform: "none",
                    fontSize: {
                      xs: "10px",
                      lg: "11.079px",
                    },
                  }}
                >
                  {fileName ? `${fileName.substring(0, 8)}...` : "Choose File"}

                  <VisuallyHiddenInput
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={handleFileChange}
                  />
                </Button>
                <Button
                  component="button"
                  variant="text"
                  onClick={handleRemoveFile}
                  sx={{
                    borderRadius: "16.064px",
                    outline: "0.803px solid #F3F3F3",
                    background: "#FFF",
                    color: "#7F7F7F",
                    height: "35.34px",
                    padding: "0px 19.276px",
                    fontSize: "12.079px",
                    textTransform: "none",
                  }}
                >
                  Remove
                </Button>
              </Box>
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
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default PropertyManagementFirm;
