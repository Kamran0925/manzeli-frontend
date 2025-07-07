import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames';
import { useTheme } from '@mui/material/styles';
import { NAV_LINKS } from './NavLinks';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const SideBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:900px)');
  const [open, setOpen] = useState(false);

  const navList = (
    <List className={styles.navList}>
      {NAV_LINKS.map(link => (
        <ListItem
          key={link.route}
          disablePadding
          className={classNames(styles.navListItem, {
            [styles.activeListItem]: window.location.pathname === link.route,
          })}
        >
          <Link
            to={link.route}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              width: '100%',
            }}
            onClick={() => setOpen(false)}
          >
            <ListItemButton
              className={classNames(styles.navBtn, {
                [styles.activeBtn]: window.location.pathname === link.route,
              })}
            >
              <ListItemIcon>
                <link.icon
                  fill={
                    window.location.pathname === link.route ? theme.palette.primary.main : undefined
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary={link.label}
                className={classNames(styles.navItemText, {
                  [styles.activeBtn]: window.location.pathname === link.route,
                })}
                disableTypography
              />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton className={styles.menuButton} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <Box sx={{ width: 250 }}>{navList}</Box>
          </Drawer>
        </>
      ) : (
        <Box className={styles.sideNav}>{navList}</Box>
      )}
    </>
  );
};

export default SideBar;
