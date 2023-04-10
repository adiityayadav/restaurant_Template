import { makeStyles } from '@material-ui/core';
import { Typography } from '@mui/material';
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const useStyles = makeStyles((theme) => ({
  innerdiv: {
    color: "white",
    Width: "50%",
    height: "100%", display: "flex",
    backgroundImage: "url(https://wallpaperaccess.com/full/1288325.jpg)", backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "20px",
    "@media (max-width: 800px)": {
      flexDirection: "column"
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
    justifyContent: "center",
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
const Block1 = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.innerdiv}>
        <div style={{ width: "50","media (max-width: 980px)": {
              textAlign: "center",
            }, }}>
          <Typography sx={{
            fontSize: "48px", marginTop: "80px",
            fontFamily: "'Playfair Display', serif",
            textAlign: "left",
            "@media (max-width: 980px)": {
              fontSize: "30px",
              textAlign: "center",

            },
          }} variant="h4">
            {" "}
            Get in touch
          </Typography>{" "}
          <div style={{ textAlign: "center", marginTop: "15px", "@media (max-width: 980px)": { textAlign: "center"},}}>
            Quaerat debitis, vel, sapiente dicta sequi
            labore porro pariatur harum expedita.

          </div>
        </div>
        <div  >
          <LocationOnIcon style={{ fontSize: "100px", marginTop: "70px", marginLeft: "150px", color: "orange" }} />
        </div>
      </div>{" "}
    </>
  )
}

export default Block1
