import React, { useEffect, useState } from "react";
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

const mycarousel = ({ data }) => {


  return (
    <Carousel
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{
        position: "relative",
        "@media (max-width: 800px)": {},
      }}
      autoplay={true}
      pauseOnHover={true}
      animation="slide"
      indicators={false}
      color="white"
    >
      {data.map((item, index) => (
        <div
          key={index}
          data-aos={item.animation}
          data-aos-duration={item.duration}
          style={{
            width: "100%",
            height: "600px",
            backgroundImage: `url(${item.image})`,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{
            color: "white",
            width: "50%",
            padding: "20px",
            "@media (max-width: 800px)": {
              width: "150%",
            },
          }}>
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
              {item.title}
            </Typography>{" "}
            <div>
              {item.content}
            </div>
            <div style={{
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              marginTop: "50px",
            }} >
              <Button style={{
                border: "1px solid orange",
                backgroundColor: "orange",
                "&:hover": {
                  backgroundColor: "#ffa726",
                },
              }
              }>
                {item.buttonText}
              </Button>
              <Button style={{
                color: "white",
                marginRight: "20px",
              }}>{item.openMenuText}</Button>
            </div>
          </div>
          <div style={{
            color: "white",
            width: "50%",
            padding: "20px",
            "@media (max-width: 800px)": {
              width: "150%",
            },
          }}></div>
        </div>
      ))}
    </Carousel>
  );
};

export default mycarousel;
