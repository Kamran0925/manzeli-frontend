import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
} from "@mui/material";
import Plus from "../../../../../assets/icons/ui/Plus";
import { Search } from "../../../../../assets/icons/ui/Search";
import SingleProperty from "../../../../../assets/icons/ui/SingleProperty";
import MultipleProperty from "../../../../../assets/icons/ui/MultipleProperty";
import styles from "./PropertySubtitleBar.module.css";

interface PropertySubtitleBarProps {
  title?: string;
  subTitleActions?: boolean;
  showModal?: () => void;
}

const PropertySubtitleBar: React.FC<PropertySubtitleBarProps> = ({
  title,
  subTitleActions = true,
  showModal,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (showModal) {
      showModal();
    }
  };

  const propertiesOptions = [
    { icon: <SingleProperty />, label: "Single Property" },
    { icon: <MultipleProperty />, label: "Multiple Properties" },
  ];

  return (
    <Box className={styles.subTitleBar}>
      <Typography className={styles.subTitle}>{title}</Typography>
      {subTitleActions && (
        <Box className={styles.subTitleActions}>
          <Box>
            <Button
              id="add-property-button"
              aria-controls={open ? "menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className={styles.addPropertyButton}
              variant="contained"
            >
              <Plus />
              Add New Property
            </Button>
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "add-property-button",
              }}
              sx={{
                "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
                  width: "200px",
                  boxSizing: "border-box",
                  marginTop: "3px",
                  padding: "6.47px",
                  borderRadius: "6.475px",
                },
                "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                  padding: "0 !important",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  gap: "12px",
                },
              }}
            >
              {propertiesOptions.map((option, index) => (
                <MenuItem
                  key={index}
                  onClick={handleClose}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    gap: "5px",
                    padding: "6.475px 0px 6.475px 12.949px",
                    "&:hover": {
                      borderRadius: "6.475px",
                      background:
                        "linear-gradient(0deg, #F6F7F8 0%, #F6F7F8 100%), #FFF",
                    },
                  }}
                >
                  {option.icon}
                  <Typography
                    sx={{
                      color: "#212B36",
                      fontSize: "10px",
                      fontWeight: 500,
                      lineHeight: "17.805px",
                    }}
                  >
                    {option.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
      )}
    </Box>
  );
};

export default PropertySubtitleBar;
