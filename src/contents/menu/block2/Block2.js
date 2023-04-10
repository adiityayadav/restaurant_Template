import React from "react";

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
import { CardActions, CardContent, CardMedia } from "@material-ui/core";
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
import { Image } from "@mui/icons-material";
import Card4blk from "./Card4blk";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "98%",
        height: "100%",
        overflow: "hidden",
        margin: " 0.78125vw",
        zIndex: 1,
        borderRadius: " 0.78125vw",
        backgroundColor: "white",
        border: "1px solid black",
    },
    div: {
        backgroundImage:
            "url('https://elanta.app/nazar/tastyc-demo/img/menu/1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "230px",
        margin: "4%", "@media (max-width: 680px)": {
        height: "130px",

        },

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
        margin: "2%",
        backgroundImage: `url(https://elanta.app/nazar/tastyc-demo/img/menu/4.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        width: "70%",
        "@media (max-width: 980px)": {
            margin: "0",
            width: "90%",

        },


    },
}));

export default function Block3() {
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

            <div className={classes.div}
            >
                <div style={{ margin: "5%", paddingTop: '6%' }}>
                    <div
                        style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "left",

                        }}
                    >
                        MENU
                        {" "}
                    </div>
                    <Typography
                        style={{
                            display: "flex",

                            justifyContent: "left",
                            fontSize: "48px",
                            color: "white",

                            fontFamily: "'Playfair Display', serif",
                            "@media (max-width: 980px)": {
                                fontSize: "30px",
                            },
                        }}
                        variant="h3"
                    >
                        Main dishes
                    </Typography>{" "}

                </div>
            </div>
            <Grid container style={{ margin: "3.2vw", display: "flex", alignItems: "center", justifyContent: 'center', textAlign: "center", }} >
                <Grid item xs={12} md={6}>
                    <Card4blk />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card4blk />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card4blk />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card4blk />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card4blk />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card4blk />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card4blk />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card4blk />
                </Grid>


            </Grid>
            {/* <Card sx={{ display: 'flex', border: "1px dotted grey", maxWidth: 500 }}>

                <img

                    style={{ width: '150px', height: '150px' }}

                    src="https://elanta.app/nazar/tastyc-demo/img/menu/3.jpg"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ margin: "1%", padding: "2%" }}>
                        <div style={{ display: "flex", alignContent: "center", justifyContent: 'space-between' }}>
                            <Typography
                                style={{


                                    fontSize: "18px",

                                    fontFamily: "'Playfair Display', serif",
                                    marginRight: "90px"

                                }}
                                variant="h3"
                            >
                                Сasserole

                            </Typography>{" "}
                            <Button variant="contained" style={{ backgroundColor: "orange", marginleft: "30px" }}>$12</Button></div>
                        <Divider style={{ border: "gray", marginTop: "5px" }} />

                    </div>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="contained" style={{ backgroundColor: "#EEEEEE", margin: "5px" }}>SEAFOOD
                        </Button>
                        <Button variant="contained" style={{ backgroundColor: "#EEEEEE", margin: "5px" }}>FISH
                        </Button>
                        <Button variant="contained" style={{ backgroundColor: "#EEEEEE", margin: "5px" }}>MAIN DISHES
                        </Button>

                    </Box>
                    <div style={{ paddingLeft: "5px" }}>
                        Consectetur adipisicing elit. Animi praesentium at veritatis cumque facere vero.
                    </div>
                </Box>
            </Card> */}

        </div>
    );
}
