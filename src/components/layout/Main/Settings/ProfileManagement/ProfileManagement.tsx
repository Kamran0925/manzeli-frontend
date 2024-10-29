import { Button, Box, Typography } from "@mui/material";
import classNames from "classnames";
import FormInput from "../../../../shared/FormInput/FormInput";
import { ProfileFields } from "./ProfileFields";
import FileUpload from "../../../../../assets/icons/ui/FileUpload";
import Trash2 from "../../../../../assets/icons/ui/Trash2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../../shared/Modal/Modal";
import VerifyCurrentEmail from "./VerifyCurrentEmail/VerifyCurrentEmail";
import UpdateEmail from "./UpdateEmail/UpdateEmail";
import VerifyOTP from "./VerifyOTP/VerifyOTP";
import EmailUpdated from "./EmailUpdated/EmailUpdated";
import UpdatePassword from "./UpdatePassword/UpdatePassword";
import PasswordUpdated from "./PasswordUpdated/PasswordUpdated";
import styles from "./ProfileManagement.module.css";

const ProfileManagement = () => {
  const alignField = (section: string, index: number): string => {
    const defaultWidth = "528px";

    if (section !== "Personal Details") {
      return defaultWidth;
    }

    switch (index) {
      case 0:
        return "calc(528px - 60%)";
      case 1:
        return "calc(60% - 4px)";
      default:
        return defaultWidth;
    }
  };

  const [emailModal, setEmailModal] = useState<boolean>(false);
  const [updateEmail, setUpdateEmail] = useState<boolean>(false);
  const [otpModal, setOtpModal] = useState<boolean>(false);
  const [emailUpdated, setEmailUpdated] = useState<boolean>(false);

  const [passwordModal, setPasswordModal] = useState<boolean>(false);
  const [passwordUpdated, setPasswordUpdated] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    if (link === "Change Email") {
      setEmailModal(true);
    } else if (link === "Change Password") {
      setPasswordModal(true);
    }
  };

  return (
    <Box>
      <Box className={styles.profileContainer}>
        <Box className={styles.profilePicture}></Box>
        <Box className={styles.profileUpload}>
          <Typography className={styles.profileText}>
            We support PNGs and JPEGs under 10MB
          </Typography>
          <Box className={styles.profileActions}>
            <Button
              variant="contained"
              className={classNames(styles.profileBtn, styles.uploadBtn)}
            >
              <FileUpload /> Upload Image
            </Button>
            <Button className={classNames(styles.profileBtn, styles.removeBtn)}>
              <Trash2 /> Remove
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={styles.formContainer}>
        {Object.entries(ProfileFields).map(([section, fields]) => (
          <Box
            key={section}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
            }}
          >
            <Typography className={styles.fieldsSubtitle}>{section}</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
              }}
            >
              {fields.map((field, index) => (
                <FormInput
                  key={index}
                  field={field}
                  value={field.fieldConfig.value}
                  onChange={() => null}
                  error=""
                  customStyle={{
                    marginTop: "18px",
                    width: {
                      xs: "100%",
                      sm: alignField(section, index),
                    },
                  }}
                  onLinkClick={link => handleClick(link)}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Box className={styles.actions}>
        <Button
          variant="outlined"
          className={classNames(styles.btn, styles.saveBtn)}
        >
          Save Changes
        </Button>
        <Button
          variant="contained"
          className={classNames(styles.btn, styles.cancelBtn)}
        >
          Cancel
        </Button>
      </Box>

      <Modal
        open={emailModal}
        onClose={() => setEmailModal(false)}
        showClose={false}
        title="Verify Your Current Email Address"
        description={<VerifyCurrentEmail />}
        showActions={true}
        primaryBtnText="Send Verification Email"
        onClickPrimaryBtn={() => {
          setEmailModal(false);
          setUpdateEmail(true);
        }}
        secondaryBtnText="Cancel"
        onClickSecondaryBtn={() => setEmailModal(false)}
      />

      <Modal
        open={updateEmail}
        onClose={() => setUpdateEmail(false)}
        showClose={false}
        title="Change Email"
        description={<UpdateEmail />}
        showActions={true}
        primaryBtnText="Send OTP"
        onClickPrimaryBtn={() => {
          setUpdateEmail(false);
          setOtpModal(true);
        }}
        secondaryBtnText="Cancel"
        onClickSecondaryBtn={() => setUpdateEmail(false)}
      />

      <Modal
        open={otpModal}
        onClose={() => setOtpModal(true)}
        showClose={false}
        title="Verify OTP"
        description={<VerifyOTP />}
        showActions={true}
        primaryBtnText="Verify and Update Email"
        onClickPrimaryBtn={() => {
          setOtpModal(false);
          setEmailUpdated(true);
        }}
        secondaryBtnText="Cancel"
        onClickSecondaryBtn={() => setOtpModal(false)}
      />

      <Modal
        open={emailUpdated}
        onClose={() => setEmailUpdated(false)}
        showClose={false}
        title="Email Changed Successfully!"
        description={<EmailUpdated isSuccess={true} />}
        showActions={true}
        primaryBtnText="Go to Dashboard"
        onClickPrimaryBtn={() => {
          setEmailUpdated(false);
          navigate("/property-listings");
        }}
        secondaryBtnText="Back to Profile Management"
        onClickSecondaryBtn={() => {
          setEmailUpdated(false);
        }}
      />

      <Modal
        open={passwordModal}
        onClose={() => setPasswordModal(false)}
        showClose={false}
        title="Change Password"
        description={<UpdatePassword />}
        showActions={true}
        primaryBtnText="Save Changes"
        onClickPrimaryBtn={() => {
          setPasswordModal(false);
          setPasswordUpdated(true);
        }}
        secondaryBtnText="Cancel"
        onClickSecondaryBtn={() => setPasswordModal(false)}
      />

      <Modal
        open={passwordUpdated}
        onClose={() => setPasswordUpdated(false)}
        showClose={false}
        title="Password Changed Successfully!"
        description={<PasswordUpdated isSuccess={true} />}
        showActions={true}
        primaryBtnText="Go to Dashboard"
        onClickPrimaryBtn={() => {
          setPasswordUpdated(false);
          navigate("/property-listings");
        }}
        secondaryBtnText="Back To Profile Management"
        onClickSecondaryBtn={() => setPasswordUpdated(false)}
      />
    </Box>
  );
};

export default ProfileManagement;
