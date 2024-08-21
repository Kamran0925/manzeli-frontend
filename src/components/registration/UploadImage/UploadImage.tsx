import React, { ChangeEvent, useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import StyledButton from "../../shared/StyledButton/StyledButton";
import LeftArrow from "../../../assets/icons/ui/LeftArrow";
import LockIcon from "../../../assets/icons/ui/LockIcon";
import Circle from "../../../assets/icons/ui/Circle";
import FileUpload from "../../../assets/icons/ui/FileUpload";
import { useFormContext } from "../../../context/FormContext";
import styles from "./UploadImage.module.css";

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

const UploadImage = () => {
  const { formState, setProfilePicture, nextStep } = useFormContext();
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
    setProfilePicture(null);
  };

  const handleSave = () => {
    if (formState.profilePicture) {
      nextStep();
    } else {
      setFileError("Please select a profile picture.");
    }
  };

  return (
    <>
      <Container className={styles.box1}>
        <MobileStepper
          variant="text"
          steps={4}
          position="static"
          activeStep={2}
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
                xs: "24px",
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
                xs: "100%",
                sm: "80%",
              },
            }}
          >
            For the purpose of industry regulation, your details are required.
          </Typography>

          <Box className={styles.box3}>
            <Box>
              <Typography variant="h4" color="#696F79" mb={1}>
                Upload Profile Picture
              </Typography>
              <Circle />
              <Typography
                sx={{
                  color: fileError ? "#E80000" : "#7F7F7F",
                  fontFamily: "Poppins",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginTop: "6px",
                }}
              >
                {fileError ? (
                  <>{fileError}</>
                ) : (
                  "The application should support common image formats (png, jpg) and limit the file size to 10MB"
                )}
              </Typography>

              <Box className={styles.box4}>
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
                    fontSize: {
                      xs: "12.079px",
                      sm: "10px",
                    },
                  }}
                >
                  {fileName ? `File: ${fileName}` : "Choose File"}

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
                  }}
                >
                  Remove
                </Button>
              </Box>
            </Box>

            <StyledButton
              fullWidth={true}
              title="Save & Continue"
              styles={{
                margin: "30px 0px",
                backgroundColor: "#001283",
              }}
              onClick={handleSave}
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

export default UploadImage;
