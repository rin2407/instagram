import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography} from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { connect } from 'react-redux'
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

function ExploreItem(props) {
  const classes = useStyles();
  const show = ()=>{
    if(props.statusHover.status===true){
      return(
        <Typography className={classes.second}  component={'span'} variant={'body2'} >
        <FavoriteBorderIcon/> {props.favB}
        <ChatBubbleOutlineIcon className={classes.chat}/> {props.chatB}
        </Typography>
      )
    }
  }
  return (
          <Card onMouseOver={props.hoverStatus}
          onMouseOut={props.hoverStatus} >
            <CardActionArea>
              <CardMedia
                component="img"
                image={props.image}
                
              />
            </CardActionArea>
               {show()}
          </Card>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
      statusHover: state.hoverStatusReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      hoverStatus: () => {
          dispatch({type:'HOVER'})
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ExploreItem)
