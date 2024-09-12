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

export interface FieldConfig {
  type: string;
  placeholder?: string;
  value?: string;
  validation?: {
    required: boolean;
  };
  options?: { value: any; label: string }[];
}

interface FormInputProps {
  fieldId: string;
  fieldLabel: string;
  fieldType: string;
  fieldConfig: FieldConfig;
  value: string;
  error: string | undefined;
  onChange: (fieldId: string, value: any, fieldConfig: FieldConfig) => void;
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

  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    label: string,
  ) => {
    const { checked } = event.target;
    props.onChange(props.fieldId, { value: checked, label }, props.fieldConfig);
  };

  switch (props.fieldConfig.type) {
    case "text":
    case "number":
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
              fontWeight: 500,
              lineHeight: "100%",
              boxSizing: "border-box",
            },
          }}
          sx={{
            "& .MuiInputBase-root": {
              padding: "0px 15px",
              margin: 0,
            },
            "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              padding: "0px",
              height: "32px",
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
                fontWeight: 500,
                lineHeight: "100%",
                boxSizing: "border-box",
              },
            }}
          >
            {props.fieldConfig.options?.map(option => (
              <MenuItem key={option.label} value={option.value}>
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
              "& .css-1s267lr-MuiInputBase-root-MuiOutlinedInput-root": {
                color: "#7F7F7F",
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "100%",
                boxSizing: "border-box",
                height: "32px",
                padding: "0 15px",
              },
              "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                padding: 0,
              },
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
          }}
        >
          {props.fieldConfig.options?.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={option.value}
                  onChange={e => handleCheckboxChange(e, option.label)}
                  className={styles.checkbox}
                />
              }
              label={option.label}
              sx={{
                "& .MuiFormControlLabel-label": {
                  color: "#7f7f7f",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "100%",
                },
                margin: "0px",
                padding: "0px",
              }}
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
      sx={{
        width: {
          xs: props.fieldType === "checkbox" ? "100%" : "80%",
          sm: props.fieldType === "checkbox" ? "100%" : "300px",
        },
      }}
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
