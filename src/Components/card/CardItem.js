import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom"
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TelegramIcon from "@material-ui/icons/Telegram";
import { Divider } from "@material-ui/core";
import Comment from '../card/Comment'
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  typo:{
    flexGrow:1
  },
  comment:{
    textDecoration:'none'
  },
  bigAvatar: {
    width: 100,
    height: 100,
    marginLeft:10,
    marginTop:10,
    marginBottom:10
  },
  name:{
    marginLeft:15,
    color:'#A4A4A4'
},
header:{
  fontSize:'1rem'
}
}));

export default function CardItem(props) {
  const classes = useStyles();
  return (
    <div>
    <Card className={classes.root}>
      <CardHeader className={classes.header}
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={props.image}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
        title={props.name}
      />
      <CardMedia className={classes.media} image={props.images} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton>
          <TelegramIcon />
        </IconButton>
        <Typography className={classes.typo}></Typography>
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </CardActions>
        <CardContent>
          <Typography> {props.total_like} like</Typography>
          <Typography>{props.name} belike</Typography>
          <Link to="/" className={classes.comment}>See all {props.total_comment} comments</Link>
        </CardContent>
        <Divider/>
            <Comment/>
    </Card>
    </div>
  );
}
