import React from "react";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Box,
  TextField,
  Container,
  CardActions,
} from "@material-ui/core";
import { Avatar } from "@material-ui/core";

// import "./testimonial.css"
import Divider from "@material-ui/core/Divider";
import { margin } from "@mui/system";
import Card4blk from "./Card4blk";
 
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: " -7.8125vw",
    left: "0",
    right: "0",
    bottom: "0",
    width: "98%",
    height: "100%",
    margin: " 0.78125vw",
    overflowx: "hidden",
    zIndex: 1,
    borderRadius: " 0.78125vw",
    backgroundColor: "white",
    border: "1px solid black",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  input: {
    margin: theme.spacing(1),
  },
  background: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1581386133899-f9c52b1d2c33?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
    color: "white",
  },
  container: {
    maxWidth: " 62.5vw",
    margin: "0 auto",
  },
  testimonial: {
    padding: "2.34375vw",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  },
  rightButton: {
    margin: " 0.78125vw",
    marginTop: "1.5625vw",
    marginRight: "1.5625vw",

    border: "1px solid orange",
    backgroundColor: "orange",

    "&:hover": {
      backgroundColor: "#ffa726",
    },
  },
  quote: {
    fontSize: "1.5625vw",
    fontWeight: "bold",
    marginBottom: "1.5625vw",
  },
  author: {
    fontSize: "0.7vw",
    fontWeight: "bold",
    marginBottom: "1.5625vw",
  },

  subscribeButton: {
    margin: theme.spacing(2),
  },

  div: {
    display: "flex",
    direction: "row",
    width: "100%",
    height: "auto",
    "@media (max-width: 500px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  divin: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 500px)": {
      border: "1px solid black",
      backgroundColor: "gray",
    },
  },
  divLast: {
    backgroundImage:
      "url{'https://elanta.app/nazar/tastyc-demo/img/menu/1.jpg'}",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function Block2() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
         

        <div className={classes.divLast}>
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            NEWSLETTER
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
            >
              Latest publications

            </Typography>{" "}
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae
              dignissimos fugiat sit nam.
            </div>
          </Container>
          <Grid container direction="column">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Divider style={{border:"1px dotted gray", margin:"20px"}} />
        <Container
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            NEWSLETTER
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
            >
             Popular publications


            </Typography>{" "}
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae
              dignissimos fugiat sit nam.
            </div>
          </Container>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                 <Card4blk />
              </Grid>
               
              
            </Grid>
        <div
          style={{
            display: "flex",
            direction: "row",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Read the news of our restaurant, recipes for delicious fears, tips for
          your home kitchen in our blog!
          <Button
            variant="contained"
            style={{ marginTop: "-5px", backgroundColor: "orange" }}
          >
            ALL PUBLICATIONS
          </Button>
        </div>

        <Divider style={{border:"1px dotted gray", margin:"20px"}} />

        <div
          style={{
            backgroundImage:
              "url('https://elanta.app/nazar/tastyc-demo/img/menu/1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
            margin: "2%",
          }}
        >
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            NEWSLETTER{" "}
          </div>
          <Typography
            style={{
              display: "flex",
              textAlign: "center",

              justifyContent: "center",
              fontSize: "48px",
              color: "white",
              padding: "1%",
              fontFamily: "'Playfair Display', serif",
              "@media (max-width: 980px)": {
                fontSize: "30px",
              },
            }}
            variant="h3"
          >
            Subscribe our newsletter
          </Typography>{" "}
          <div
            style={{
              textAlign: "center",
              color: "white",
              marginTop: "20px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              padding: "1%",
            }}
          >
            Rolorem, beatae dolorum, praesentium itaque et quam quaerat.
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <textarea size="md" name="Size" placeholder="email" />
            <Button
              variant="contained"
              style={{ backgroundColor: "orange", marginLeft: "5px" }}
            >
              SUBSCRIBE{" "}
            </Button>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
