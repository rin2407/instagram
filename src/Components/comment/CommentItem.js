import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItemAvatar,Avatar, ListItemSecondaryAction,IconButton} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  avatar:{
    width:30,
    height:30
  },
  cmt:{
    color:"rgba(0, 0, 0, 0.54)",
    fontSize:'0.85rem'
  },
  fav:{
    width:'0.8rem',
    height:'0.85rem'
  }
}));

export default function CommentItem(props) {
  const classes = useStyles();

  return (
    <li  className={classes.listSection}>
          <ul className={classes.ul}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    aria-label="recipe"
                    className={classes.avatar}
                    src={props.image}
                  />
                </ListItemAvatar>
                <ListItemText primary={props.name} />
                <ListItemSecondaryAction>
                    <IconButton>
                         <FavoriteBorderIcon className={classes.fav}/>
                    </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                  <ListItemText className={classes.cmt}>{props.comments}</ListItemText>
              </ListItem>
          </ul>
        </li>
  );
}
