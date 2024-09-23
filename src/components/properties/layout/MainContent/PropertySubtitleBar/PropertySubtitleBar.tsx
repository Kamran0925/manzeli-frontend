import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import Plus from "../../../../../assets/icons/ui/Plus";
import { Search } from "../../../../../assets/icons/ui/Search";
import styles from "./PropertySubtitleBar.module.css";

const PropertySubtitleBar: React.FC = () => {
  return (
    <Box className={styles.subTitleBar}>
      <Typography className={styles.subTitle}>Property List</Typography>
      <Box className={styles.subTitleActions}>
        <Button className={styles.addPropertyButton} variant="contained">
          <Plus /> Add New Property
        </Button>
        <TextField
          className={styles.searchBar}
          placeholder="Search here..."
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
            "& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input": {
              padding: "12px",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default PropertySubtitleBar;
