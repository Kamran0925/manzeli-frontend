import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import InputField from "../../../../../shared/InputField/InputField";
import classNames from "classnames";
import Error from "../../../../../shared/Error/Error";
import { ChangePasswordData, changePassword } from "../../../../../../api/auth";
import styles from "./UpdatePassword.module.css";

interface UpdatePasswordProps {
  isSubmit: boolean;
  setIsSubmit: (value: boolean) => void;
  openModal: (value: number) => void;
}

const UpdatePassword: React.FC<UpdatePasswordProps> = ({
  isSubmit,
  setIsSubmit,
  openModal,
}) => {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const validateFields = () => {
    const errors: string[] = [];

    const passwordLength = 8;

    if (currentPassword.length < passwordLength) {
      errors.push(
        `Current password must be at least ${passwordLength} characters.`,
      );
    }
    if (newPassword.length < passwordLength) {
      errors.push(
        `New password must be at least ${passwordLength} characters.`,
      );
    }
    if (confirmPassword.length < passwordLength) {
      errors.push(
        `Confirm password must be at least ${passwordLength} characters.`,
      );
    }
    if (newPassword !== confirmPassword) {
      errors.push("New password and confirmation do not match.");
    }
    if (currentPassword === newPassword) {
      errors.push("New password must be different from the current password.");
    }

    return errors;
  };

  useEffect(() => {
    const handleSubmit = async () => {
      if (isSubmit) {
        const validationErrors = validateFields();
        if (validationErrors.length > 0) {
          setErrorMessages(validationErrors);
          return;
        }

        const data: ChangePasswordData = {
          current_password: currentPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        };

        try {
          const result = await changePassword(data);
          console.log("Password changed successfully:", result);
          openModal(1);
        } catch (error) {
          console.error("Error changing password:", error);
          setErrorMessages(["Failed to change password. Please try again."]);
        }
      }
    };

    handleSubmit();
    setIsSubmit(false);
  }, [isSubmit]);

  useEffect(() => {
    if (isSubmit) {
      const validationErrors = validateFields();
      if (validationErrors.length > 0) {
        setErrorMessages(validationErrors);
      } else {
        setErrorMessages([]);
      }
    }
  }, [currentPassword, newPassword, confirmPassword, isSubmit]);

  return (
    <Box className={styles.section}>
      <Box className={classNames(styles.field)}>
        <Typography className={styles.label}>Current Password</Typography>
        <InputField
          type="password"
          name="currentPassword"
          placeholder="Enter Current Password"
          value={currentPassword}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentPassword(e.target.value)
          }
          customStyle={{ margin: 0 }}
        />
      </Box>
      <Box className={classNames(styles.field)}>
        <Typography className={styles.label}>New Password</Typography>
        <InputField
          type="password"
          name="newPassword"
          placeholder="Enter New Password"
          value={newPassword}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPassword(e.target.value)
          }
          customStyle={{ margin: 0 }}
        />
      </Box>
      <Box className={styles.field}>
        <Typography className={styles.label}>Confirm New Password</Typography>
        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Re-enter New Password"
          value={confirmPassword}
          handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          customStyle={{ margin: 0 }}
        />
        {errorMessages.length > 0 && (
          <Error messages={errorMessages} customStyle={{ margin: 0 }} />
        )}
      </Box>
    </Box>
  );
};

export default UpdatePassword;
