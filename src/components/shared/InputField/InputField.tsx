import React from "react";
import { TextField } from "@mui/material";

interface InputFieldProps {
  type: "text" | "password" | "email";
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder = "",
  disabled,
  error,
}) => (
  <TextField
    type={type}
    fullWidth
    disabled={disabled}
    placeholder={disabled ? "Minimum length of 8 characters" : placeholder}
    sx={{
      height: "45px",
      maxWidth: "554px",
      margin: "6px 0px",
      border: disabled
        ? "none"
        : `1px solid ${error ? "#E80000" : "rgba(4, 3, 8, 0.6)"}`,
      borderRadius: "40px",
      backgroundColor: disabled ? "rgba(59, 76, 184, 0.11)" : "transparent",
      "& fieldset": {
        border: "none",
        "&::placeholder": {
          color: "#6D6D6D",
        },
      },
      "& .MuiInputBase-root": {
        padding: 0,
        margin: 0,
      },
      "& .MuiOutlinedInput-input": {
        padding: "10px 18px",
        color: error ? "#E80000" : "inherit",
      },
    }}
  />
);

export default InputField;
