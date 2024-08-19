import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import EyeCross from "../../../assets/icons/ui/EyeCross";
import { getInputType } from "../../../utils/inputFIeldHelper";

interface InputFieldProps {
  type: "text" | "password" | "email";
  name: string;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  placeholder = "",
  disabled,
  error,
  errorMessage,
  handleChange,
}) => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const inputType = getInputType(type, showPassword);

  const handleClickShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event, name);
  };

  return (
    <TextField
      type={inputType}
      value={value || ""}
      error={error}
      helperText={error ? errorMessage : ""}
      placeholder={placeholder}
      onChange={onChangeHandler}
      fullWidth
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
          padding: "8px 16px",
          color: error ? theme.palette.error.main : "inherit",
        },
      }}
    />
  );
};

export default InputField;
