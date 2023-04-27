import { Box, Button, Card, Divider, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    border: '1px dotted grey',
    width: 520,
    margin: 5,
    [theme.breakpoints.down('md')]: {
      margin: 0,
      width: 370,
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
const MenuCard = (props) => {
    const classes = useStyles();
    const { name, price, image, tags, description } = props;
  
    return (
      <div className={classes.cardContainer}>
        <img className={classes.image} src={image} alt={name} />
        <Box className={classes.cardContent}>
          <div className={classes.cardTitle}>
            <Typography style={{ display:"flex",fontFamily: "'Playfair Display', serif" }} variant="subtitle1">
              {name}
            </Typography>
            <Button className={classes.priceButton} variant="contained">
              ${price}
            </Button>
          </div>
          <Divider className={classes.divider} />
          <Box className={classes.tagButtonContainer}>
            {tags.map((tag) => (
              <Button className={classes.tagButton} variant="contained" key={tag}>
                {tag}
              </Button>
            ))}
          </Box>
          <div className={classes.cardDescription}>{description}</div>
        </Box>
      </div>
    );
  };
  
  export default MenuCard;