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

import VisibilitySensor from 'react-visibility-sensor';

import CountUp from 'react-countup';


const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: " -7.8125vw",
    left: "0",
    right: "0",
    bottom: "0",
    width: "98%",
    height: "100%",
    overflow: "hidden",
    margin: " 0.78125vw",
    zIndex: 1,
    borderRadius: " 0.78125vw",
    backgroundColor: "white",
    border: "1px solid black",
  },
  parent: {
    display: "flex",
    direction: "row",
    margin: "1.5625vw",
    "@media (max-width: 1000px)": {
      display: "block",
      direction: "column",
      marginLeft: "2vw",
    },
  },

  menuButtons: {
    display: "flex",
    direction: "row",
    alignItems: "left",
    justifyContent: "left",
    marginTop: "20px",

    "@media (max-width: 980px)": {},
  },

  heading1: {
    fontSize: "48px",
    fontFamily: "'Playfair Display', serif",
    "@media (max-width: 980px)": {
      fontSize: "30px",
    },
  },
  headingforgrid: {
    fontSize: "20px",
    fontFamily: "'Playfair Display', serif",
  },
  heading2: {
    fontfamily: "Roboto Mono",
  },
  img: {
    width: "15%",
    height: "15%",
    display: "inline",
  },
 
  parent3: {
    display: "flex",
    flexDirection: "row",
    color: "sky-blue",
    "@media (max-width: 500px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  imgContainer: {
    margin:"2%",
    backgroundImage: `url(https://elanta.app/nazar/tastyc-demo/img/menu/4.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
    width: "70%",
    "@media (max-width: 980px)": {
      margin:"0",
      width: "90%",

    },

     
  },
}));

export default function MyComponent() {
  const classes = useStyles();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // const [visitors, setVisitors] = useState(0);
  // const [deliveries, setDeliveries] = useState(0);
  // const [feedbacks, setFeedback] = useState(0);
  // const [awards, setAward] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);

  // const updateCount = () => {
  //   const newCount = Math.floor(Math.random() * 1000) + 1; // Generate a random number between 1 and 1000
  //   setVisitors(newCount);
  //   setDeliveries(newCount/10);
  //   setFeedback(newCount/20);
  //   setAward(newCount/50);
  // }

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <Grid item xs={12} sm={12} md={6} className={classes.sibling1}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/SXJqEnauNaY"
            title="10 brilliant restaurant interior design ideas"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.sibling2}>
          <Container>
            ABOUT US
            <Typography className={classes.heading1} variant="h4">
              We invite you to visit our restaurant
            </Typography>{" "}
            Assumenda possimus eaque illo iste, autem. Porro eveniet, autem
            ipsam vitae amet repellat repudiandae tenetur, quod corrupti
            consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore
            aspernatur quae repudiandae dolorem, beatae dolorum, praesentium
            itaque et quam quaerat. Cumque, consequatur!
            <div className={classes.menuButtons}>
              <Button variant="contained" style={{ backgroundColor: "orange" }}>
                Read More
              </Button>
              <Button>
                <Grid item>
                  <IconButton>
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <YouTubeIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Button>
            </div>
          </Container>
        </Grid>
      </div>
      <Divider />
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
      <Divider />
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

      <Divider />
      <div>
        <Grid container  >
          <Grid item sm={3} xs={6}>
            <div style={ {display:'flex',flexDirection:"column", justifyContent:'center',}} >
          <Typography
                style={{
                  fontSize: "48px",
                  textAlign: "center",
                  fontFamily: "'Playfair Display', serif",
                  "@media (max-width: 980px)": {
                    fontSize: "30px",
                  },
                }}
                variant="h4"
              > 200+</Typography><div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
               VISITORS DAILY 
               </div>    </div>
          </Grid>
          <Grid item sm={3} xs={6}>
            <div style={ {display:'flex',flexDirection:"column", justifyContent:'center',}} >
          <Typography
                style={{
                  fontSize: "48px",
                  textAlign: "center",
                  fontFamily: "'Playfair Display', serif",
                  "@media (max-width: 980px)": {
                    fontSize: "30px",
                  },
                }}
                variant="h4"
              > 400+</Typography><div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              DELIVERIES MONTHLY

               </div>    </div>
          </Grid>
          <Grid item sm={3} xs={6}>
            <div style={ {display:'flex',flexDirection:"column", justifyContent:'center',}} >
          <Typography
                style={{
                  fontSize: "48px",
                  textAlign: "center",
                  fontFamily: "'Playfair Display', serif",
                  "@media (max-width: 980px)": {
                    fontSize: "30px",
                  },
                }}
                variant="h4"
              > 100%
              </Typography><div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
POSITIVE FEEDBACK
               </div>    </div>
          </Grid>
          <Grid item sm={3} xs={6}>
            <div style={ {display:'flex',flexDirection:"column", justifyContent:'center',}} >
          <Typography
                style={{
                  fontSize: "48px",
                  textAlign: "center",
                  fontFamily: "'Playfair Display', serif",
                  "@media (max-width: 980px)": {
                    fontSize: "30px",
                  },
                }}
                variant="h4"
              > 40+
              </Typography><div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
AWARDS AND HONORS
               </div>    </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
