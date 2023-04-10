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
const Firstblock = () => {
  return (
    <>
      <div   style={{display: "flex",
    direction: "row",
    margin: "1.5625vw",
    "@media (max-width: 1000px)": {
      display: "block",
      direction: "column",
      marginLeft: "2vw",
    },}}>

        <Grid item xs={12} sm={12} md={6} >
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
        <Grid item xs={12} sm={12} md={6}  >
          <Container>
            ABOUT US
            <Typography   style={{  fontSize: "48px",
    fontFamily: "'Playfair Display', serif",
    "@media (max-width: 980px)": {
      fontSize: "30px",
    },}} variant="h4">
              We invite you to visit our restaurant
            </Typography>{" "}
            Assumenda possimus eaque illo iste, autem. Porro eveniet, autem
            ipsam vitae amet repellat repudiandae tenetur, quod corrupti
            consectetur cum? Repudiandae dignissimos fugiat sit nam. Tempore
            aspernatur quae repudiandae dolorem, beatae dolorum, praesentium
            itaque et quam quaerat. Cumque, consequatur!
            <div style={{display: "flex",
    direction: "row",}}>
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
    </>
  )
}

export default Firstblock
