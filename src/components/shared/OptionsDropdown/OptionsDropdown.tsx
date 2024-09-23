import * as React from "react";
import { styled } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import { Box, Typography, MenuItem } from "@mui/material";
import Cross from "../../../assets/icons/ui/Cross";

interface Option {
  icon: React.ReactNode;
  optionText: string;
  routeLink: string;
}

interface OptionsDropdownProps {
  options: Option[];
  anchorEl: null | SVGSVGElement | HTMLButtonElement;
  handleClose: () => void;
  showCross?: boolean;
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
    sx={{
      "& .MuiMenu-list": {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "0px",
      },
    }}
  />
))(() => ({
  "& .MuiPaper-root": {
    padding: "0px 0px 18px 10px",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 8px 28px -6px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    width: "116px",
  },
  "& .MuiMenuItem-root": {
    "&:active": {
      backgroundColor: "#FFF",
      color: "#FFF",
    },
  },
  "& .MuiMenu-list": {
    width: "100% ",
    position: "relative",
    padding: "16px 5px 0px 0px",
  },
}));

export const OptionsDropdown: React.FC<OptionsDropdownProps> = ({
  options,
  anchorEl,
  handleClose,
  showCross,
}) => {
  const open = Boolean(anchorEl);

  const handleMenuItemClick = (routeLink: string) => {
    handleClose();
    window.location.href = routeLink;
  };

  if (!anchorEl) return null;
  return (
    <StyledMenu
      id="options-dropdown-menu"
      MenuListProps={{
        "aria-labelledby": "options-dropdown-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      {showCross && (
        <Box
          component="div"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: "5px",
            top: "3px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          <Cross />
        </Box>
      )}
      {options.map((option, index) => (
        <MenuItem
          disableGutters={true}
          key={index}
          onClick={() => handleMenuItemClick(option.routeLink)}
          disableRipple
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "3px",
            padding: 0,
          }}
        >
          {option.icon}
          <Typography
            sx={{
              color: "#7F7F7F",
              fontFamily: "Poppins",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: "130%",
              cursor: "pointer",
            }}
          >
            {option.optionText}
          </Typography>
        </MenuItem>
      ))}
    </StyledMenu>
  );
};
