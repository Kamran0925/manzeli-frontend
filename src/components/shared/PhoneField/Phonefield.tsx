import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { TextField, InputAdornment } from "@mui/material";
import { E164Number } from "libphonenumber-js/types.cjs";
import { useTheme } from "@mui/material/styles";
import styles from "./Phonefield.module.css";

interface InputFieldProps {
  type: "number";
  name: string;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  errorMessage?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
    type: "number",
  ) => void;
}

const PhoneField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder = "",
  value,
  disabled,
  errorMessage,
  handleChange,
}) => {
  const theme = useTheme();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event, name, type);
  };

  return (
    <TextField
      type={type}
      value={value || ""}
      placeholder={placeholder}
      onChange={onChangeHandler}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PhoneInput
              international
              value={value}
              defaultCountry="US"
              className={styles.phoneInput}
              onChange={function (value?: E164Number | undefined): void {}}
            />
          </InputAdornment>
        ),
      }}
      sx={{
        height: "54px",
        maxWidth: "554px",
        margin: "5px 0px",
        border: disabled
          ? "none"
          : `1px solid ${
              errorMessage ? theme.palette.error.main : "rgba(4, 3, 8, 0.6)"
            }`,
        borderRadius: "40px",
        backgroundColor: disabled ? "rgba(59, 76, 184, 0.11)" : "transparent",
        "& fieldset": {
          border: "none",
          "&::placeholder": {
            color: "#6D6D6D",
          },
        },
        "& .MuiInputBase-root": {
          padding: "0px 20px",
          margin: 0,
        },
        "& .MuiOutlinedInput-input": {
          padding: "15px 0px",
          color: errorMessage ? theme.palette.error.main : "#494949",
        },
      }}
    />
  );
};

export default PhoneField;
