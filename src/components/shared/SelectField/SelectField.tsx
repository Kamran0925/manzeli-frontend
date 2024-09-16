import React from "react";
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import styles from "./SelectField.module.css";

interface Option {
  value: string | number;
  label: string;
}

interface SelectFieldProps {
  label: string;
  value: string | number;
  options: Option[];
  onChange: (event: SelectChangeEvent<string | number>) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <Box className={styles.selectContainer}>
      <Typography variant="h4" className={styles.label}>
        {label}
      </Typography>

      <FormControl sx={{ mt: "8px" }}>
        <Select
          value={value}
          onChange={onChange}
          className={styles.select}
          MenuProps={{
            PaperProps: {
              sx: {
                top: "290px !important",
                width: "300px !important",
                borderRadius: "10px",
                backgroundColor: "#FFF",
                boxShadow: "0px 4px 15.3px 0px rgba(0, 0, 0, 0.25)",
                padding: "10px 7px",
                "& .MuiMenu-list": {
                  padding: "0 !important",
                },
              },
            },
          }}
          sx={{
            "& .MuiSelect-select": {
              color: "#9A9A9A",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "23.462px",
            },
            "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select":
              {
                height: "43px",
                padding: "9px 20px 10px 16px",
                boxSizing: "border-box",
              },
            "& .css-yf8vq0-MuiSelect-nativeInput": {
              border: "none",
            },
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                color: "#7F7F7F",
                fontFamily: "Poppins",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "100%",
                display: "flex",
                padding: "11.006px 10px 8.994px 10px",
                alignItems: "center",
                alignSelf: "stretch",
                marginBottom: "8px",
                borderRadius: "5px",
                "&:hover": {
                  color: "#3B4CB8",
                  backgroundColor: "#EBEDF8",
                },
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
