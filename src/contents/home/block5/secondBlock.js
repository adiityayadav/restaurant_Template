import { Avatar, Button, Card, CardContent, Container, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'

const secondBlock = () => {
  return (
    <>
        <div   style={{ backgroundImage:
      "url{'https://elanta.app/nazar/tastyc-demo/img/menu/1.jpg'}",
    backgroundSize: "cover",
    backgroundPosition: "center",}}>
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
                  <CardContent >
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
    </>
  )
}

export default secondBlock
