import React from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Box } from "@mui/material";

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
    <Box
      sx={{
        height: "54px",
        width: "520px",
        maxWidth: "554px",
      }}
    >
      <PhoneInput
        country={"us"}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        disabled={disabled}
        countryCodeEditable={false}
        containerStyle={{
          border: errorMessage
            ? "1px solid #E80000"
            : "1px solid rgba(4, 3, 8, 0.60)",
          borderRadius: "40px",
          padding: "15px 20px",
          display: "flex",
          alignItems: "center",
        }}
        inputStyle={{
          height: "20px",
          border: "none",
          padding: "0px 70px",
          color: "#494949",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
        }}
        buttonStyle={{
          width: "50px",
          height: "50px",
          border: "none",
          backgroundColor: "white",
        }}
      />
    </Box>
  );
};

export default PhoneField;
