import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

import Grid from "../../../../assets/icons/ui/Grid";
import Home from "../../../../assets/icons/ui/Home";
import Message from "../../../../assets/icons/ui/Message";
import Tenant from "../../../../assets/icons/ui/Tenant";
import Plan from "../../../../assets/icons/ui/Plan";
import classNames from "classnames";
import { useTheme } from "@mui/material/styles";

import styles from "./SideBar.module.css";

const SideBar = () => {
  const theme = useTheme();

  return (
    <Box className={styles.sideNav}>
      <List className={styles.navList}>
        <ListItem disablePadding>
          <ListItemButton
            className={classNames(styles.navBtn, {
              [styles.activeBtn]: true,
            })}
          >
            <ListItemIcon>
              <Grid fill={theme.palette.primary.main} />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              className={styles.navItemText}
              disableTypography
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className={styles.navBtn}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText
              primary="Properties"
              className={styles.navItemText}
              disableTypography
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className={styles.navBtn}>
            <ListItemIcon>
              <Message />
            </ListItemIcon>
            <ListItemText
              primary="Messages"
              className={styles.navItemText}
              disableTypography
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className={styles.navBtn}>
            <ListItemIcon>
              <Tenant />
            </ListItemIcon>
            <ListItemText
              primary="Tenants"
              className={styles.navItemText}
              disableTypography
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className={styles.navBtn}>
            <ListItemIcon>
              <Plan />
            </ListItemIcon>
            <ListItemText
              primary="Plans & Billing"
              className={styles.navItemText}
              disableTypography
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
