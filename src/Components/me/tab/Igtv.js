import React from "react";
import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import LiveTvIcon from "@material-ui/icons/LiveTv";
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
function Igtv() {
  var classes = useStyles();
  return (
    <Container>
      <Grid container justify="center">
        <IconButton>
          <LiveTvIcon className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid container justify="center">
        <Typography component={"span"} variant={"body2"} className={classes.up}>
          {" "}
          Up load a video
        </Typography>
      </Grid>
      <Grid container justify="center">
        <Typography component={"span"} variant={"body2"} className={classes.note}>
          Videos must be between 1 and 60 minutes long.
        </Typography>
      </Grid>
      <Grid container justify="center">
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
      </Grid>
    </Container>
  );
}
export default Igtv;
