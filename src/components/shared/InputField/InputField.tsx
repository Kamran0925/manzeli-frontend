import React from "react";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import EyeCross from "../../../assets/icons/ui/EyeCross";

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
}) => {
  const theme = useTheme();

  return (
    <TextField
      type={type}
      fullWidth
      disabled={disabled}
      placeholder={disabled ? "Minimum length of 8 characters" : placeholder}
      InputProps={{
        endAdornment: type === "password" && (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility">
              <EyeCross />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        height: "45px",
        maxWidth: "554px",
        margin: "6px 0px",
        border: disabled
          ? "none"
          : `1px solid ${
              error ? theme.palette.error.main : "rgba(4, 3, 8, 0.6)"
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
          padding: 0,
          margin: 0,
        },
        "& .MuiOutlinedInput-input": {
          padding: "10px 18px",
          color: error ? theme.palette.error.main : "inherit",
        },
      }}
    />
  );
};

export default InputField;
