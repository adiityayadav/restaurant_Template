import React from "react";
import Media from "react-media";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { CardMedia } from "@material-ui/core";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import { GoogleFont } from "react-google-fonts";
import ReactPlayer from "react-player";
import { styled } from "@mui/styles";
import { Container, Avatar, Box } from "@material-ui/core";
import { color } from "@mui/system";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(https://wallpaperaccess.com/full/1288325.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: 1,
    overflow: "hidden",
    width: "100%",
marginBottom:"5%",
    
  },
  flexbox2: {
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IEAFFBWlXFq6lI1WCKKga32X8Cm8T-Kyww&usqp=CAU)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  parent3: {
    margin: "2%",
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 1000px)": {
      
      flexDirection: "column",
       
    },

  },
  menuButtons: {
    display: "flex",
    direction: "row",
  },

  rightButton: {
    margin: " 0.15625vw",
    border: "1px solid orange",
    backgroundColor: "orange",

    "&:hover": {
      backgroundColor: "#ffa726",
    },
  },
  imgContainer: {
     
    width: "150%",
    color: "white",

  },
}));
const Secondblock = () => {
  const classes = useStyles();
  return (
    <>
         <div className={classes.parent2}>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          FEATURES
          <Typography
            className={classes.heading1}
            style={{ margin: "10px" }}
            variant="h4"
          >
            Why people choose us?
          </Typography>{" "}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Porro eveniet, autem ipsam vitae consequatur!
          </div>
        </Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            {/* first item */}{" "}
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className={classes.img}
                src="https://elanta.app/nazar/tastyc-demo/img/icons/1.svg"
                alt="image-description"
              />
              <Typography className={classes.headingforgrid} variant="h6">
                {" "}
                Menu for every taste{" "}
              </Typography>
              <div style={{ textAlign: "center" }}>
                Dolor sit amet, consectetur adipisicing elit et molestias
                possimus{" "}
              </div>
            </Container>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* second item */}{" "}
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className={classes.img}
                src="https://elanta.app/nazar/tastyc-demo/img/icons/2.svg"
                alt="image-description"
              />
              <Typography className={classes.headingforgrid} variant="h6">
                Always fresh ingredients
              </Typography>
              <div style={{ textAlign: "center" }}>
                Assumenda possimus eaque illo iste, autem. Porro eveniet autem
              </div>
            </Container>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* third item */}{" "}
            <Container
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className={classes.img}
                src="https://elanta.app/nazar/tastyc-demo/img/icons/3.svg"
                alt="image-description"
              />
              <Typography className={classes.headingforgrid} variant="h6">
                Experienced chefs
              </Typography>
              <div style={{ textAlign: "center" }}>
                Rolorem, beatae dolorum, praesentium itaque et quam quaerat
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Secondblock
