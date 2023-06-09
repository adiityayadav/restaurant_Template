import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url(https://wallpaperaccess.com/full/1288325.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: "100%",
overflow:"hidden",

    border: "2px solid white"
  },
  cardContainer: {
    backgroundColor : "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  card: {
    backgroundColor : "transparent",
    color:"white",
    width: "90%",
    margin: theme.spacing(1),
  },
  logo: {
    width: "30%",
    margin: theme.spacing(1),
    "@media (max-width: 500px)": {
         
       width:"50%"
      
       },
  },
  socialIcons: {
    margin: theme.spacing(1),
    display:"flex",
    justifyContent: "right",
    color: "white",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img
            src="https://elanta.app/nazar/tastyc-demo/img/logo-sm-white.svg"
            alt="Logo"
            className={classes.logo}
          />
        </Grid>
        <Grid item xs={6}>
          <div className={classes.socialIcons}>
            <FacebookIcon fontSize="small" />
            <InstagramIcon fontSize="small" />
            <TwitterIcon fontSize="small" />
            <YouTubeIcon fontSize="small" />
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.cardContainer}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" style={{ fontFamily: "'Playfair Display', serif",}} gutterBottom>
                  About Us
                </Typography>
                <div style={{    color:"white",
}} component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  auctor, ipsum euismod commodo blandit, nibh magna dictum urna,
                  eget viverra nisl nisl et magna.
                </div>  <Button
            variant="outlined"
            style={{ marginTop: "5px",color:"orange" ,border:"1px solid orange" }}
          >
            Read More
          </Button>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.cardContainer}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" style={{ fontFamily: "'Playfair Display', serif",}} gutterBottom>
                  Contact Info
                </Typography>
                <div  style={{    color:"white",paddingTop:"10px",paddingBottom:"10px"
}} component="p">
                  Phone: 555-555-5555 <br />
                  Email: contact@yourcompany.com <br />
                  Address: 123 Main St, City, State 12345
                </div> <Button
            variant="outlined"
            style={{ marginTop: "5px",color:"orange" ,border:"1px solid orange" }}
          >
            Read More
          </Button>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.cardContainer}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" style={{ fontFamily: "'Playfair Display', serif",}} gutterBottom>
                  Gallery
                </Typography>
                <div  style={{    color:"white",
}} component="p">
                  View our gallery to see some of our delicious dishes and
                  beautiful restaurant.
                </div>
                <Button
            variant="outlined"
            style={{ marginTop: "5px",color:"orange" ,border:"1px solid orange" }}
          >
            Read More
          </Button>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
     
      <Button
        className={classes.backToTop}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <ArrowUpwardIcon  />  <Button
        variant="contained"
        color="success"
        className={classes.reserveButton}
      >
       Back-to-Top
      </Button>
      </Button>
    </div>
  );
}
