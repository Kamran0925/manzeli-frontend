import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import classNames from "classnames";
import { useTheme } from "@mui/material/styles";
import { NAV_LINKS } from "./NavLinks";

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
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
