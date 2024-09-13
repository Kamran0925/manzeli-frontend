import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import { useTheme } from "@mui/material/styles";
import { NAV_LINKS } from "./NavLinks";
import Ellipse from "../../../../assets/icons/ui/Ellipse";

import styles from "./SideBar.module.css";

const SideBar = () => {
  const theme = useTheme();

  return (
    <Box className={styles.sideNav}>
      <List className={styles.navList}>
        {NAV_LINKS.map(link => (
          <ListItem
            key={link.route}
            disablePadding
            className={styles.navListItem}
          >
            <ListItemButton
              className={classNames(styles.navBtn, {
                [styles.activeBtn]: window.location.pathname === link.route,
              })}
            >
              <ListItemIcon>
                <link.icon
                  fill={
                    window.location.pathname === link.route
                      ? theme.palette.primary.main
                      : undefined
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={link.label}
                className={styles.navItemText}
                disableTypography
              />
              {link.label === "Messages" && (
                <Box sx={{ position: "relative", display: "inline-block" }}>
                  <Ellipse width={20} height={20} fill="#FF5B19" />
                  <Typography
                    sx={{
                      position: "absolute",
                      left: "0px",
                      top: "4px",
                      color: "#FFF",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 600,
                      lineHeight: "12px",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    3
                  </Typography>
                </Box>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
