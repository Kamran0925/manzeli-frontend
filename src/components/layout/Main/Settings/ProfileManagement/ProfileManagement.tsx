import { Button, Box, Typography } from "@mui/material";
import classNames from "classnames";
import FormInput from "../../../../shared/FormInput/FormInput";
import { ProfileFields } from "./ProfileFields";
import FileUpload from "../../../../../assets/icons/ui/FileUpload";
import Trash2 from "../../../../../assets/icons/ui/Trash2";
import { useState } from "react";
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
  const [passwordModal, setPasswordModal] = useState<boolean>(false);

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
        onClickPrimaryBtn={() => null}
        secondaryBtnText="Cancel"
        onClickSecondaryBtn={() => null}
      />

      {false && (
        <Modal
          open={false}
          onClose={() => null}
          showClose={false}
          title="Change Email"
          description={<UpdateEmail />}
          showActions={true}
          primaryBtnText="Send OTP"
          onClickPrimaryBtn={() => null}
          secondaryBtnText="Cancel"
          onClickSecondaryBtn={() => null}
        />
      )}

      {false && (
        <Modal
          open={false}
          onClose={() => null}
          showClose={false}
          title="Verify OTP"
          description={<VerifyOTP />}
          showActions={true}
          primaryBtnText="Verify and Update Email"
          onClickPrimaryBtn={() => null}
          secondaryBtnText="Cancel"
          onClickSecondaryBtn={() => null}
        />
      )}

      {false && (
        <Modal
          open={false}
          onClose={() => null}
          showClose={false}
          title="Email Changed Successfully!"
          description={<EmailUpdated isSuccess={false} />}
          showActions={true}
          primaryBtnText="Go to Dashboard"
          onClickPrimaryBtn={() => null}
          secondaryBtnText="Back to Profile Management"
          onClickSecondaryBtn={() => null}
        />
      )}

      {passwordModal && (
        <Modal
          open={passwordModal}
          onClose={() => null}
          showClose={false}
          title="Change Password"
          description={<UpdatePassword />}
          showActions={true}
          primaryBtnText="Save Changes"
          onClickPrimaryBtn={() => null}
          secondaryBtnText="Cancel"
          onClickSecondaryBtn={() => null}
        />
      )}

      {false && (
        <Modal
          open={false}
          onClose={() => null}
          showClose={false}
          title="Change Password"
          description={<PasswordUpdated isSuccess={true} />}
          showActions={true}
          primaryBtnText="Save Changes"
          onClickPrimaryBtn={() => null}
          secondaryBtnText="Cancel"
          onClickSecondaryBtn={() => null}
        />
      )}
    </Box>
  );
};

export default ProfileManagement;
