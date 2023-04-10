import React from 'react'
import SwiggySlider1 from './Carousel/SwiggySlider1'
import { swiggysliderData } from 'constants/Home/swiggysliderData'
import { Container, Typography } from '@material-ui/core'

const firstBlock = () => {
  return (
    <>
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
        <SwiggySlider1 sliderData={swiggysliderData} />
      
    </>
  )
}

export default firstBlock
