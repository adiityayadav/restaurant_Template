import { Avatar, Card, CardContent, Divider, Typography } from '@material-ui/core'
import React from 'react'

const Card4blk = () => {
  return (
    <Card sx={{ maxWidth: 320 }}>
        <div style={{ display: "flex",
                      justifyContent: "center",}} >
                  <img
                    src="https://elanta.app/nazar/tastyc-demo/img/blog/1.jpg"
                    alt=""
                    style={{
                      height: "200px",
                     
                     
                    }}
                    title="green iguana"
                  /></div>
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
  )
}

export default Card4blk
