import React from "react";
import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
const useStyles = makeStyles((theme) => ({
  icon: {
    width: 100,
    height: 100,
  },
  input: {
    display: 'none',
  },
  up:{
      fontSize:'1.875rem',
      paddingBottom:20
  },
  note:{
      paddingBottom:20
  }
}));
function Save() {
  var classes = useStyles();
  return (
    <Container>
      <Grid container justify="center">
        <IconButton>
          < BookmarkBorderIcon className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid container justify="center">
        <Typography component={"span"} variant={"body2"} className={classes.up}>
          {" "}
          Save
        </Typography>
      </Grid>
      <Grid container justify="center">
        <Typography component={"span"} variant={"body2"} className={classes.note}>
        Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.
        </Typography>
      </Grid>
    </Container>
  );
}
export default Save;
