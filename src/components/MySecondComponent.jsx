import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Container, Avatar, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { zIndex } from '@material-ui/core/styles/zIndex';
import AOS from 'aos';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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
const MySecondComponent = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile'
    });
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.parent3}>
        <Container data-aos="fade-right" data-aos-duration="2000" className={classes.imgContainer}>
          <div style={{ margin: "" ,
    width: "60%",
       
     }}>
            {" "}
            MOBILE APPLICATION
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
              Download our application
            </Typography><div
            style={{
               
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</div>
         
          <div className={classes.menuButtons}  >
          <Button variant="contained" style={{ backgroundColor: "orange"  ,margin:"5px",padding:"10px"}}>
          <AppleIcon />    Appstore 
              </Button>  <Button variant="contained" style={{ backgroundColor: "orange",margin:"5px",padding:"10px" }}>
              <PlayArrowIcon />  PlayMarket
              </Button>             
          </div> </div>
        </Container>
        <Container data-aos="fade-left" data-aos-duration="2000" margin="2%">
          <Box sytle={{ display: "flex", flexDirection: "column" }}>
            <img  height="400vw" src="https://elanta.app/nazar/tastyc-demo/img/phone.png" alt="" />
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default MySecondComponent;
