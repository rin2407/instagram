import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TelegramIcon from "@material-ui/icons/Telegram";
const useStyles = makeStyles((theme) => ({
    typo:{
        flexGrow:1
    },
    like:{
      paddingLeft:20
    },
    time:{
      paddingLeft:20,
      color:'rgba(0, 0, 0, 0.54)'
    }
}))
function Section() {
    var classes=useStyles();
  return (
    <div>
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
      <Typography className={classes.like}>38,142 likes</Typography>
      <Typography className={classes.time}>21 Hour ago</Typography>
    </div>
  );
}
export default Section;
