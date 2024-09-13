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
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Checkfield } from "../Checkfield/Checkfield";
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
  showOptional: boolean;
  showFont: boolean;
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
              border: "none",
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
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "1px solid #E3E3E3",
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
            onChange={handleSelectChange}
            MenuProps={{
              PaperProps: {
                sx: {
                  borderRadius: "10px",
                  backgroundColor: "#FFF",
                  boxShadow: "0px 4px 15.3px 0px rgba(0, 0, 0, 0.25)",
                  padding: "20px 7px 5px",
                },
              },
              MenuListProps: {
                sx: {
                  padding: "0",
                },
              },
            }}
            sx={{
              borderRadius: "6px",
              border: "1px solid #E3E3E3",
              height: "32px",
              color: "#7F7F7F",
              fontFamily: "Poppins",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "100%",
              padding: "10px 15px 4px",
              "& .MuiSelect-select": {
                padding: "0 !important",
              },
              "& .css-yf8vq0-MuiSelect-nativeInput": {
                padding: "0px !important",
              },
              "& .MuiSelect-nativeInput": {
                border: "none !important",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none !important",
              },
            }}
          >
            {props.fieldConfig.options?.map(option => (
              <MenuItem
                key={option.label}
                value={option.value}
                sx={{
                  color: "#7F7F7F",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "100%",
                  display: "flex",
                  padding: "10.552px 10px 9.448px 10px",
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
        <FormGroup sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {props.fieldConfig.options?.map((option, index) => (
            <FormControlLabel
              key={index}
              label={option.label}
              control={
                <Checkfield
                  defaultChecked
                  checked={option.value}
                  onChange={e => handleCheckboxChange(e, option.label)}
                />
              }
              sx={{
                margin: 0,
                padding: 0,
                "& .css-6pkdlj-MuiTypography-root": {
                  color: "#7F7F7F",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "100%",
                },
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
        <InputLabel
          htmlFor={props.fieldId}
          className={`${styles.label} ${
            props.showFont ? styles.robotoFont : ""
          }`}
        >
          {props.fieldLabel}
        </InputLabel>
        {props.showLabel && (
          <Typography className={styles.smallText}>(Auto-generated)</Typography>
        )}
        {props.showOptional && (
          <Typography className={styles.smallText}>(Optional)</Typography>
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
