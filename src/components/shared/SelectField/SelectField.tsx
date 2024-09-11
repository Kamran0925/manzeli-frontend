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
          displayEmpty
          className={styles.select}
        >
          {options.map(option => (
            <MenuItem
              key={option.value}
              value={option.value}
              className={styles.menuItem}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
