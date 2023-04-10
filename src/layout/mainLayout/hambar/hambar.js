import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Button, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",

    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    flexGrow: 1,
    margin: "10px",

    overflow: "hidden",
    zIndex: 1,
    
  },
  title: {
    flexGrow: 1,
  },
  navigation: {
    display: "flex",
    alignItems: "center",
    border: "1px solid white",

    backgroundColor: "white",
    borderRadius: "10px",
    justifyContent: "space-between",
  },

  menuButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  button: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
    "&.active": {
      textDecorationLine: "underline",
      textDecorationThickness: "3px",
      textDecorationColor: "#F39C12",
    },
  },
  rightButton: {
    border: "1px solid orange",
    backgroundColor: "#F39C12",
    alignItems: "right",

    "&:hover": {
      backgroundColor: "#ffa726",
    },
  },
}));

export default function Hambar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem> <Button component={NavLink} to="/" className={classes.button}>
              HOME
            </Button></MenuItem>
      <MenuItem> <Button component={NavLink} to="/about" className={classes.button}>
              ABOUT
            </Button></MenuItem>
      <MenuItem> <Button component={NavLink} to="/menu" className={classes.button}>
              MENU
            </Button></MenuItem>
      <MenuItem><Button component={NavLink} to="/blog" className={classes.button}>
              BLOG
            </Button></MenuItem>
      <MenuItem> <Button component={NavLink} to="/contact" className={classes.button}>
              CONTACT
            </Button></MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        zIndex: 1,
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        flexGrow: 1,
        margin: "10px",
        overflow: "hidden",
      }}
    >
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <img
            src="https://elanta.app/nazar/tastyc-demo/img/logo-sm.svg"
            alt="logo"
            style={{ maxHeight: "100px", maxWidth: "100px" }}
          />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <LocalMallIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
