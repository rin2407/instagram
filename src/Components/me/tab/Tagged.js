import React from "react";
import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
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
function Tagged() {
  var classes = useStyles();
  return (
    <Container>
      <Grid container justify="center">
        <IconButton>
          < PhotoSizeSelectActualIcon className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid container justify="center">
        <Typography component={"span"} variant={"body2"} className={classes.up}>
          {" "}
          Photos of you
        </Typography>
      </Grid>
      <Grid container justify="center">
        <Typography component={"span"} variant={"body2"} className={classes.note}>
        When people tag you in photos, they'll appear here.
        </Typography>
      </Grid>
    </Container>
  );
}
export default Tagged;
