import { Button, Typography } from '@material-ui/core'
import React from 'react'

const thirdBlock = () => {
  return (
    <>
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
    </>
  )
}

export default thirdBlock
