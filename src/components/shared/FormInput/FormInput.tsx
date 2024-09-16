import React from "react";
import {
  Box,
  TextField,
  InputLabel,
  Typography,
  FormControl,
  MenuItem,
  Select,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Checkfield } from "../Checkfield/Checkfield";
import { SelectChangeEvent } from "@mui/material/Select";
import { PropertyFieldConfig } from "../../properties/layout/MainContent/PropertyFormFields/PropertyFieldConfig";
import styles from "./FormInput.module.css";

interface FormInputProps {
  field: PropertyFieldConfig;
  value: any;
  error: string | undefined;
  onChange: (value: any, field: PropertyFieldConfig) => void;
}

const FormInput: React.FC<FormInputProps> = props => {
  let inputElement: JSX.Element | null = null;
  const { field, value, onChange, error } = props;

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<unknown>,
  ) => {
    onChange(event.target.value, field);
  };

  switch (field.fieldConfig.type) {
    case "text":
    case "number":
      inputElement = (
        <TextField
          placeholder={field.fieldConfig.placeholder}
          value={value}
          required={field.fieldConfig?.validation?.required}
          onChange={e => handleChange(e)}
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
            id={field.fieldId}
            value={value}
            onChange={e => handleChange(e)}
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
            {field.fieldConfig.options?.map(option => (
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
          {field.fieldConfig.options?.map((option, index) => (
            <FormControlLabel
              key={index}
              label={option.label}
              control={
                <Checkfield checked={value} onChange={e => handleChange(e)} />
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
          xs: field.fieldConfig.type === "checkbox" ? "100%" : "80%",
          sm: field.fieldConfig.type === "checkbox" ? "100%" : "300px",
        },
      }}
    >
      <Box className={styles.align}>
        <InputLabel htmlFor={field.fieldId} className={`${styles.label}`}>
          {field.fieldLabel}
        </InputLabel>
        {field.fieldConfig?.isAutoGenerated && (
          <Typography className={styles.smallText}>(Auto-generated)</Typography>
        )}
        {field.fieldConfig?.isOptional && (
          <Typography className={styles.smallText}>(Optional)</Typography>
        )}
      </Box>

      {inputElement}

      {error && (
        <Typography color="error.main" variant="body2">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default FormInput;
