import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import EyeCross from "../../../assets/icons/ui/EyeCross";
import { getInputType } from "../../../utils/inputFIeldHelper";
import { useFormContext } from "../../../context/FormContext";

interface InputFieldProps {
  type: "text" | "password" | "email";
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  name: "username" | "email" | "password" | "confirmPassword";
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder = "",
  disabled,
  error,
  name,
}) => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const inputType = getInputType(type, showPassword);

  const { formState, validateField } = useFormContext();

  const handleClickShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateField(name, event.target.value);
  };

  useEffect(() => {
    validateField(name, formState[name]?.value || "");
  }, [name, formState[name]?.value, validateField]);

  return (
    <TextField
      error={formState[name]?.error}
      helperText={formState[name]?.error ? formState[name]?.errorMessage : ""}
      value={formState[name]?.value || ""}
      onChange={handleChange}
      type={inputType}
      fullWidth
      placeholder={placeholder}
      InputProps={{
        endAdornment: type === "password" && (
          <InputAdornment position="end" onClick={handleClickShowPassword}>
            <IconButton aria-label="Toggle password visibility">
              <EyeCross />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        height: "44px",
        maxWidth: "554px",
        margin: "6px 0px 20px 0px",
        border: disabled
          ? "none"
          : `1px solid ${
              formState[name]?.error
                ? theme.palette.error.main
                : "rgba(4, 3, 8, 0.6)"
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
          padding: "8px 16px",
          color: formState[name]?.error ? theme.palette.error.main : "inherit",
        },
      }}
    />
  );
};

export default InputField;
