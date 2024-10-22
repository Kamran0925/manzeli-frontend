import * as React from "react";
import { styled } from "@mui/material/styles";
import { Menu, MenuProps, PopoverOrigin } from "@mui/material";
import { Typography, MenuItem } from "@mui/material";

interface Option {
  icon: React.ReactNode;
  optionText: string;
  routeLink: string;
  onClick?: () => void;
}

interface OptionsDropdownProps {
  options: Option[];
  anchorEl: null | SVGSVGElement | HTMLButtonElement;
  handleClose: () => void;
  ref?: React.Ref<HTMLDivElement>;
}

interface StyledMenuProps
  extends Omit<MenuProps, "anchorOrigin" | "transformOrigin"> {
  elevation?: number;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  sx?: object;
}

const StyledMenu = styled(
  ({
    elevation,
    anchorOrigin,
    transformOrigin,
    sx,
    ...props
  }: StyledMenuProps) => (
    <Menu
      elevation={elevation}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      sx={{
        "& .MuiMenu-list": {
          display: "flex",
          flexDirection: "column",
          padding: "0px",
        },
        ...sx,
      }}
      {...props}
    />
  ),
)(() => ({
  "& .MuiPaper-root": {
    padding: "7px 0px 0px",
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
  },
}));

const actions = ["Delete", "Logout"] as const;

const isActionableOption = (optionText: string): boolean => {
  return actions.includes(optionText as (typeof actions)[number]);
};

export const OptionsDropdown: React.FC<OptionsDropdownProps> = ({
  options,
  anchorEl,
  handleClose,
  ref,
}) => {
  const open = Boolean(anchorEl);

  const handleMenuItemClick = (option: Option) => {
    if (isActionableOption(option.optionText) && option.onClick) {
      option.onClick();
    } else {
      window.location.href = option.routeLink;
    }
    handleClose();
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
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {options.map((option, index) => (
        <MenuItem
          disableGutters={true}
          key={index}
          onClick={() => handleMenuItemClick(option)}
          disableRipple
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "3px",
            padding: "10px 15px",
          }}
        >
          {option.icon}
          <Typography
            sx={{
              color: "#7F7F7F",
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
