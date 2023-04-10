import React from "react";
import Media from "react-media";
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
import { CardMedia, TextField } from "@material-ui/core";
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

export default function Block2() {
    const classes = useStyles();
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        contact: Yup.string().required('Required'),
        message: Yup.string().required('Required'),
      });
    
      const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          contact: '',
          message: '',
        },
        validationSchema,
        onSubmit: (values) => {
          // Handle form submission here
          console.log(values);
        },

      });
    
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
                    CONTACT
                    <Typography
                        className={classes.heading1}
                        style={{ margin: "10px" }}
                        variant="h4"
                    >
                        Contact information

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
            <Divider style={{ margin: "30px", border: "1px dotted gray" }} />
            <div>
                <Container
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "20px",
                    }}
                >
                    CONTACT
                    <Typography
                        className={classes.heading1}
                        style={{ margin: "10px" }}
                        variant="h4"
                    >
                        Write us a message


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
                <form onSubmit={formik.handleSubmit}>
      <Grid container style={{ margin: '2%' }} spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            name="firstName"
            label="First Name"
            fullWidth
            style={{ maxWidth: '500px' }}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="lastName"
            label="Last Name"
            fullWidth
            style={{ maxWidth: '500px' }}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="email"
            label="Email"
            fullWidth
            style={{ maxWidth: '500px' }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="contact"
            label="Contact"
            fullWidth
            style={{ maxWidth: '500px' }}
            value={formik.values.contact}
            onChange={formik.handleChange}
            error={formik.touched.contact && Boolean(formik.errors.contact)}
            helperText={formik.touched.contact && formik.errors.contact}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            fullWidth
            style={{ maxWidth: '1130px' }}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" style={{ backgroundColor: 'orange' }} type="submit">
            Send a message
          </Button>
        </Grid>
      </Grid>
    </form>
            </div>
        </div>
    );
}
