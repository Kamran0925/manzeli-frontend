import React, { ChangeEvent } from "react";
import {
  Box,
  TextField,
  InputLabel,
  Typography,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";

import styles from "./FormInput.module.css";

interface FieldConfig {
  type: string;
  placeholder?: string;
  value?: string;
  validation?: {
    required: boolean;
  };
  options?: { value: string | number; label: string }[];
}

interface FormInputProps {
  fieldId: string;
  fieldLabel: string;
  fieldType: string;
  fieldConfig: FieldConfig;
  value: string;
  error: string | undefined;
  onChange: (fieldId: string, value: string, fieldConfig: FieldConfig) => void;
  showLabel: boolean;
}

const FormInput: React.FC<FormInputProps> = props => {
  let inputElement: JSX.Element | null = null;

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    props.onChange(props.fieldId, value, props.fieldConfig);
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    props.onChange(props.fieldId, value, props.fieldConfig);
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    props.onChange(props.fieldId, checked ? value : "", props.fieldConfig);
  };

  switch (props.fieldConfig.type) {
    case "text":
      inputElement = (
        <TextField
          placeholder={props.fieldConfig.placeholder}
          value={props.value}
          required={props.fieldConfig?.validation?.required}
          onChange={handleTextFieldChange}
          className={styles.textField}
          inputProps={{
            style: {
              color: "#7F7F7F",
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "100%",
              boxSizing: "border-box",
            },
          }}
        />
      );
      break;
    case "select":
      inputElement = (
        <FormControl fullWidth>
          <Select
            id={props.fieldId}
            value={props.value}
            label={props.fieldLabel}
            onChange={handleSelectChange}
            className={styles.textField}
            inputProps={{
              style: {
                color: "#7F7F7F",
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "100%",
                boxSizing: "border-box",
              },
            }}
          >
            {props.fieldConfig.options?.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
      break;

    case "date":
      inputElement = (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            sx={{
              color: "#7F7F7F",
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "100%",
              boxSizing: "border-box",
              height: "32px",
              padding: 0,
            }}
          />
        </LocalizationProvider>
      );
      break;

    case "checkbox":
      inputElement = (
        <FormGroup
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            paddingLeft: "19px",
          }}
        >
          {props.fieldConfig.options?.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={false}
                  onChange={e => handleCheckboxChange(e)}
                  className={styles.checkbox}
                />
              }
              className={styles.checkboxLabel}
              label={option.label}
            />
          ))}
        </FormGroup>
      );
      break;

    default:
      inputElement = <div>Unsupported field type</div>;
  }

  return (
    <Box
      className={styles.field}
      sx={{ width: props.fieldType === "checkbox" ? "100%" : "300px" }}
    >
      <Box className={styles.align}>
        <InputLabel htmlFor={props.fieldId} className={styles.label}>
          {props.fieldLabel}
        </InputLabel>
        {props.showLabel && (
          <Typography className={styles.smallText}>(Auto-generated)</Typography>
        )}
      </Box>
      {inputElement}
      {props.error && (
        <Typography color="error.main" variant="body2">
          {props.error}
        </Typography>
      )}
    </Box>
  );
};

export default FormInput;
