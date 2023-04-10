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
import SwiggySlider1 from "./MySecondCarousel/SwiggySlider/SwiggySlider1";
const sliderData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    title: "The best Restaurant",
    description:
      "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
    author: "Van Chuan",
    date: "12/22/20",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    title: "It was Delicious",
    description:
      "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
    author: "Chek Mary",
    date: "12/22/20",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
    title: "I am Delighted",
    description:
      "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
    author: " Hurry Lama",
    date: "12/22/20",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/2108843/pexels-photo-2108843.jpeg",
    title: "I will visit again",
    description:
      "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
    author: " Smith Curry",
    date: "12/22/20",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
    title: "The Restaurant",
    description:
      "Et recusandae nihil et perferendis dolor ab totam eveniet aut quod accusamus aut officia aperiam aut explicabo ipsum! Sit aperiam aspernatur cum libero veritatis cum magnam itaque vel enim consequatur non porro aliquam a maiores ipsum. Hic odio quaerat et rerum deserunt hic consequuntur vitae et placeat doloribus aut magnam possimus.",
    author: "Van Chuan",
    date: "12/22/20",
  },
];
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

export default function Testimonial() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          TESTIMONIALS
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
            What Our visitors say
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
        <SwiggySlider1 sliderData={sliderData} />
        <Divider />

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
              Use the tips and recipes of our chefs
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
                <Card sx={{ maxWidth: 345 }}>
                  <img
                    src="https://elanta.app/nazar/tastyc-demo/img/menu/2.jpg"
                    alt=""
                    style={{
                      height: "200px",
                      marginLeft: "50px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      style={{
                        fontSize: "30px",
                        textAlign: "center",
                        fontFamily: "'Playfair Display', serif",
                      }}
                      variant="h4"
                    >
                      Lizard
                    </Typography>
                    <div
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </div>
                  </CardContent>
                  <Divider />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      width: "100%",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Avatar
                      style={{ marginRight: "5%" }}
                      alt="Profile Picture"
                      src="https://elanta.app/nazar/tastyc-demo/img/faces/1.jpg"
                    />

                    <Typography style={{ marginRight: "5%" }} variant="body2">
                      EMMA NEWMAN
                    </Typography>
                    <Typography style={{ marginLeft: "5%" }} variant="body2">
                      02.02.21
                    </Typography>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <img
                    src="https://elanta.app/nazar/tastyc-demo/img/menu/2.jpg"
                    alt=""
                    style={{
                      height: "200px",
                      marginLeft: "50px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      style={{
                        fontSize: "30px",
                        textAlign: "center",
                        fontFamily: "'Playfair Display', serif",
                      }}
                      variant="h4"
                    >
                      Lizard
                    </Typography>
                    <div
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </div>
                  </CardContent>
                  <Divider />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      width: "100%",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Avatar
                      style={{ marginRight: "5%" }}
                      alt="Profile Picture"
                      src="https://elanta.app/nazar/tastyc-demo/img/faces/1.jpg"
                    />

                    <Typography style={{ marginRight: "5%" }} variant="body2">
                      EMMA NEWMAN
                    </Typography>
                    <Typography style={{ marginLeft: "5%" }} variant="body2">
                      02.02.21
                    </Typography>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <img
                    src="https://elanta.app/nazar/tastyc-demo/img/menu/2.jpg"
                    alt=""
                    style={{
                      height: "200px",
                      marginLeft: "50px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      style={{
                        fontSize: "30px",
                        textAlign: "center",
                        fontFamily: "'Playfair Display', serif",
                      }}
                      variant="h4"
                    >
                      Lizard
                    </Typography>
                    <div
                      style={{
                        textAlign: "center",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </div>
                  </CardContent>
                  <Divider />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      width: "100%",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                  >
                    <Avatar
                      style={{ marginRight: "5%" }}
                      alt="Profile Picture"
                      src="https://elanta.app/nazar/tastyc-demo/img/faces/1.jpg"
                    />

                    <Typography style={{ marginRight: "5%" }} variant="body2">
                      EMMA NEWMAN
                    </Typography>
                    <Typography style={{ marginLeft: "5%" }} variant="body2">
                      02.02.21
                    </Typography>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </div>
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
            Read More
          </Button>
        </div>

        <Divider />

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
