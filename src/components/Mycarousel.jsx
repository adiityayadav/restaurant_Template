import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import AOS from "aos";

import { Paper } from "@material-ui/core";
import { margin } from "@mui/system";
import { Typography } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  innerdiv: {
    color: "white",
    Width: "50%",
    padding: "20px",
    "@media (max-width: 800px)": {
      Width: "150%",
    },
  },
  heading1: {
    fontSize: "48px",
    fontFamily: "'Playfair Display', serif",
    "@media (max-width: 980px)": {
      fontSize: "30px",
    },
  },
  innerdiv2: {
    width: "150%",
    "@media (max-width: 800px)": {
      display: "none",
    },
  },
  menuButtons: {
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    marginTop: "50px",
  },
  button: {
    color: "white",
    marginRight: theme.spacing(6),
  },

  rightButton: {
    border: "1px solid orange",
    backgroundColor: "orange",
    "&:hover": {
      backgroundColor: "#ffa726",
    },
  },
}));

const Mycarousel = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <Carousel
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{
        position: "relative",
        "@media (max-width: 800px)": {},
      }}
      autoplay="true"
      pauseOnHover="true"
      animation="slide"
      indicators={false}
      color="white"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        style={{
          width: "100%",
          height: "600px",
          backgroundImage:
            "url(https://elanta.app/nazar/tastyc-demo/img/banners/banner-1.jpg)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width: 800px)": {},
        }}
      >
        <div className={classes.innerdiv}>
          <Typography
            sx={{
              fontSize: "48px",
              fontFamily: "'Playfair Display', serif",
              "@media (max-width: 980px)": {
                fontSize: "30px",
              },
            }}
            variant="h4"
          >
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>{" "}
          <div>
            Laboriosam quisquam officia eos facere rerum corrupti reiciendis
            minima fuga, sunt culpa blanditiis pariatur omnis ipsa harum, illo
            laborum veniam ex architecto! Laboriosam quisquam officia eos facere
            rerum corrupti reiciendis minima fuga, sunt culpa blanditiis
            pariatur omnis ipsa harum, illo laborum veniam ex architecto!
          </div>
          <div className={classes.menuButtons}>
            <Button className={classes.rightButton}>RESERVATION</Button>
            <Button className={classes.button}>Open Menu</Button>
          </div>
        </div>
        <div className={classes.innerdiv2}></div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        style={{
          width: "100%",
          height: "600px",
          backgroundImage:
            "url(https://elanta.app/nazar/tastyc-demo/img/banners/banner-2.jpg)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={classes.innerdiv}>
          <Typography  sx={{
              fontSize: "48px",
              fontFamily: "'Playfair Display', serif",
              "@media (max-width: 980px)": {
                fontSize: "30px",
              },
            }} variant="h4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>{" "}
          <div>
            Laboriosam quisquam officia eos facere rerum corrupti reiciendis
            minima fuga, sunt culpa blanditiis pariatur omnis ipsa harum, illo
            laborum veniam ex architecto! Laboriosam quisquam officia eos facere
            rerum corrupti reiciendis minima fuga, sunt culpa blanditiis
            pariatur omnis ipsa harum, illo laborum veniam ex architecto!
          </div>
          <div className={classes.menuButtons}>
            <Button className={classes.rightButton}>RESERVATION</Button>
            <Button className={classes.button}>Open Menu</Button>
          </div>
        </div>{" "}
        <div className={classes.innerdiv2}></div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        style={{
          width: "100%",
          height: "600px",
          backgroundImage:
            "url(https://elanta.app/nazar/tastyc-demo/img/banners/banner-3.jpg)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={classes.innerdiv}>
          <Typography sx={{
              fontSize: "48px",
              fontFamily: "'Playfair Display', serif",
              "@media (max-width: 980px)": {
                fontSize: "30px",
              },
            }} variant="h4">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>{" "}
          <div>
            Laboriosam quisquam officia eos facere rerum corrupti reiciendis
            minima fuga, sunt culpa blanditiis pariatur omnis ipsa harum, illo
            laborum veniam ex architecto! Laboriosam quisquam officia eos facere
            rerum corrupti reiciendis minima fuga, sunt culpa blanditiis
            pariatur omnis ipsa harum, illo laborum veniam ex architecto!
          </div>
          <div className={classes.menuButtons}>
            <Button className={classes.rightButton}>RESERVATION</Button>
            <Button className={classes.button}>Open Menu</Button>
          </div>
        </div>{" "}
        <div className={classes.innerdiv2}></div>
      </div>
    </Carousel>
  );
};

export default Mycarousel;
