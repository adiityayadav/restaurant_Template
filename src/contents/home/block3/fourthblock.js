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
const Fourthblock = () => {
    const classes = useStyles();

  return (
    <>
      <div className={classes.parent3}>
        <div className={classes.imgContainer}>
          <div
            style={{
              margin: "15%",    
            }}
          >
            {" "}
            <div style={{ color: "white" }}>ABOUT US</div>
            <Typography
              style={{
                fontSize: "48px",
                color: "white",
                fontFamily: "'Playfair Display', serif",
                "@media (max-width: 980px)": {
                  fontSize: "30px",
                },
              }}
              variant="h3"
            >
              Working hours
            </Typography>{" "}
            <div
              style={{
                textAlign: "left",
                color: "white",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Rolorem, beatae dolorum, praesentium itaque et quam quaerat.
            </div>
            <div style={{}}>
              <Button variant="contained" style={{ backgroundColor: "orange" }}>
                Reservation
              </Button>
              <Button style={{ color: "white" }}>Contact us</Button>
            </div>{" "}
          </div>
        </div>
        <div  style={{    margin: "auto"}}>
          
        <div style={{margin:"10px"}}>
              SUNDAY TO TUESDAY
              <Typography
                style={{
                  fontSize: "48px",

                  fontFamily: "'Playfair Display', serif",
                  "@media (max-width: 980px)": {
                    fontSize: "30px",
                  },
                }}
                variant="h4"
              >
                {" "}
                09 : 00
              </Typography>
              <Typography
                style={{
                  fontSize: "48px",

                  fontFamily: "'Playfair Display', serif",
                  "@media (max-width: 980px)": {
                    fontSize: "30px",
                  },
                }}
                variant="h4"
              >
                {" "}
                22 : 00
              </Typography>
          
              </div> 
              <div style={{margin:"10px"}}>
              FRIDAY TO SATURDAY
              <Typography
                style={{
                  fontSize: "48px",

                  fontFamily: "'Playfair Display', serif",
                  "@media (max-width: 980px)": {
                    fontSize: "30px",
                  },
                }}
                variant="h4"
              >
                {" "}
                11 : 00
              </Typography>   <Typography
                style={{
                  fontSize: "48px",

                  fontFamily: "'Playfair Display', serif",
                  "@media (max-width: 980px)": {
                    fontSize: "30px",
                  },
                }}
                variant="h4"
              >
                {" "}
                19 : 00
              </Typography>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Fourthblock
