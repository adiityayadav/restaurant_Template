import { Box, Button, Card, Divider, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    border: '1px dotted grey',
    maxWidth: 520,
    margin: 5,
    [theme.breakpoints.down('md')]: {
      margin: 0,
      maxWidth: 370,
    },
  },
  image: {
    width: 120,
    height: 120,
    [theme.breakpoints.down('md')]: {
        width: 120,
        height: 120,
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      maxWidth: 200,
      padding: 5,
    },
  },
  cardHeader: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      fontSize: 10,
    },
  },
  priceButton: {
    backgroundColor: 'orange',
    fontSize: 12,
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      fontSize: 8,
    },
  },
  divider: {
    border: 'gray',
    marginTop: 5,
  },
  tagButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 5,
  },
  tagButton: {
    backgroundColor: '#EEEEEE',
    margin: 5,
    fontSize: 12,
    [theme.breakpoints.down('md')]: {
      margin: 2,
      fontSize: 7,
    },
  },
  cardDescription: {
    paddingLeft: 5,
    textAlign: 'left',
    fontSize: 12,
    [theme.breakpoints.down('md')]: {
      fontSize: 10,
    },
  },
}));

const Card4blk = () => {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <img
        className={classes.image}
        src="https://elanta.app/nazar/tastyc-demo/img/menu/3.jpg"
        alt="Live from space album cover"
      />
      <Box className={classes.cardContent}>
        <div className={classes.cardTitle}>
          <Typography style={{ fontFamily: "'Playfair Display', serif" }} variant="h5">
            Сasserole
          </Typography>
          <Button className={classes.priceButton} variant="contained">
            $12
          </Button>
        </div>
        <Divider className={classes.divider} />
        <Box className={classes.tagButtonContainer}>
          <Button className={classes.tagButton} variant="contained">
            SEAFOOD
          </Button>
          <Button className={classes.tagButton} variant="contained">
            FISH
          </Button>
          <Button className={classes.tagButton} variant="contained">
            DISHES
          </Button>
        </Box>
        <div className={classes.cardDescription}>
          Consectetur adipisicing elit. Animi praesentium at veritatis cumque facere vero.
        </div>
      </Box>
    </div>
  );
};

export default Card4blk;
