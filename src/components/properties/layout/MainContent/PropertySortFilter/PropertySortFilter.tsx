import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import styles from "./PropertySortFilter.module.css";

interface PropertySortFilterProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const PropertySortFilter: React.FC<PropertySortFilterProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <Box className={styles.sortingBar}>
      <Typography className={styles.sort}>Sort by:</Typography>
      <Select
        value={selectedValue}
        onChange={event => onChange(event.target.value)}
        className={styles.sortSelect}
        MenuProps={{
          PaperProps: {
            sx: {
              top: "240px !important",
              width: "196px !important",
              borderRadius: "10px",
              backgroundColor: "#FFF",
              boxShadow: "0px 4px 15.3px 0px rgba(0, 0, 0, 0.25)",
              padding: "10px 7px",
              "& .MuiMenu-list": {
                padding: "0 !important",
              },
              "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  padding: "0 !important",
                },
            },
          },
        }}
        sx={{
          width: "196px",
          height: "35px",
          padding: "15px 17px 10px 15px",
          flexShrink: 0,
          borderRadius: "20px",
          backgroundColor: "#fff",
          color: "#000",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "110%",
          letterSpacing: "0.14px",
          "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
            {
              padding: "0px",
            },
          "& .css-yf8vq0-MuiSelect-nativeInput": {
            padding: "0px",
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
              fontWeight: 500,
              lineHeight: "100%",
              padding: "11.006px 10px 8.994px 10px",
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
    </Box>
  );
};

export default PropertySortFilter;
