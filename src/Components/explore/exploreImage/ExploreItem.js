import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography} from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
const useStyles = makeStyles({
  
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
  const [state,setState] = React.useState({
       hover: false
  });
  const Hover= () =>{
      setState({...state,hover:true});
  }
  const NoHover= () =>{
       setState({...state,hover:false})
  }
  const show = ()=>{
    if(state.hover===true){
      return(
        <Typography className={classes.second}  component={'span'} variant={'body2'} >
        <FavoriteBorderIcon/> {props.favB}
        <ChatBubbleOutlineIcon className={classes.chat}/> {props.chatB}
        </Typography>
      )
    }
  }
  return (
          <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={props.image}
                onMouseOver={Hover}
                onMouseOut={NoHover}
              />
            </CardActionArea>
               {show()}
          </Card>
  );
}
