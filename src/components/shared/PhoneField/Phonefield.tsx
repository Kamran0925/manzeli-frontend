import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Box } from "@mui/material";
import styles from "./PhoneNumberInput.module.css";

interface PhoneFieldProps {
  type: string;
  name: string;
  value: any;
  disabled?: boolean;
  placeholder?: string;
  errorMessage?: string;
  handleChange: (value: any, name: string, type: string) => void;
}

const PhoneField: React.FC<PhoneFieldProps> = ({
  type,
  name,
  value,
  disabled = false,
  errorMessage,
  placeholder,
  handleChange,
}) => {
  const onChangeHandler = (value: any) => {
    handleChange(value, name, type);
  };

  return (
    <Box className={`${styles.container} ${errorMessage ? styles.error : ""}`}>
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        country={"US"}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        disabled={disabled}
        inputClassName={`${styles.phoneInput} ${
          errorMessage ? styles.error : ""
        }`}
        buttonClassName={styles.phoneInput}
      />
    </Box>
  );
};

export default PhoneField;
