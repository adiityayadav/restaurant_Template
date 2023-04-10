// import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";
import React, { useState, useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { maxWidth } from "@mui/system";
import useMedia from "react-media";
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

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* {isSmall ? ( */}

      {/* ) : ( */}
      <AppBar position="static">
        <Toolbar className={classes.navigation}>
          <img
            src="https://elanta.app/nazar/tastyc-demo/img/logo-sm.svg"
            alt="logo"
            style={{ maxHeight: "100px", maxWidth: "100px" }}
          />
          <div className={classes.menuButtons}>
            <Button component={NavLink} to="/" className={classes.button}>
              HOME
            </Button>
            <Button component={NavLink} to="/about" className={classes.button}>
              ABOUT
            </Button>
            <Button component={NavLink} to="/menu" className={classes.button}>
              MENU
            </Button>
            <Button component={NavLink} to="/blog" className={classes.button}>
              BLOG
            </Button>
            <Button component={NavLink} to="/contact" className={classes.button}>
              CONTACT
            </Button>
          </div>

          <div>
            <Button className={classes.rightButton}>RESERVATION</Button>

            <IconButton aria-label="cart" color="black">
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
