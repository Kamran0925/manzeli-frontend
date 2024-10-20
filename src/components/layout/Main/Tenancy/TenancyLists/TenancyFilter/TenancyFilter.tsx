import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import { Search } from "../../../../../../assets/icons/ui/Search";
import SortFilter from "../../../../../shared/SortFilter/SortFilter";
import styles from "./TenancyFilter.module.css";

interface TenancyFilterProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const TenancyFilter: React.FC<TenancyFilterProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <Box className={styles.sortingBar}>
      <TextField
        className={styles.searchBar}
        placeholder="Search by Building Name, Apartment No., or Tenant"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .css-maty06-MuiInputBase-root-MuiOutlinedInput-root": {
            paddingLeft: "22px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .css-1tovafv-MuiInputBase-root-MuiOutlinedInput-root": {
            fontSize: "14px",
          },
        }}
      />

      <SortFilter
        options={options}
        selectedValue={selectedValue}
        onChange={onChange}
      />
    </Box>
  );
};

export default TenancyFilter;
