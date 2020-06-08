import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid, Typography} from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  second:{
      textAlign:'center',
      position: 'absolute',
      marginTop: '-15%',
      color:'#ffff',
      marginLeft:'10%',
      cursor:'poniter'
  },
  chat:{
      marginLeft:10
  }
});

export default function ExploreItem(props) {
  const classes = useStyles();

  return (
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={props.image}
              />
            </CardActionArea>
            <Typography className={classes.second} >
                 <FavoriteBorderIcon/> {props.favB}
                 <ChatBubbleOutlineIcon className={classes.chat}/> {props.chatB}
            </Typography>
          </Card>
        </Grid>  
  );
}
