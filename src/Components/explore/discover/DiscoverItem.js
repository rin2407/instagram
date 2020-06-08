import React from "react";
import { Card, Grid, Avatar, Typography, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DoneIcon from '@material-ui/icons/Done';
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  card: {
    width: 200,
    marginBottom:10
  },
  gAvatar:{
    marginTop:15,
    marginBottom:15
  },
  avatar: {
    width: 60,
    height: 60,
  },
  title: {
    fontWeight: 500,
  },
  content: {
    color: "#8e8e8e",
    fontSize: 12,
  },
  gButton: {
    marginTop: 20,
    marginBottom: 20,
  },
  button:{
    textTransform:'unset'
  },
  iconButton:{
    backgroundColor:'#3f51b5',
    padding:1,
    marginLeft:5
  },
  done:{
    color:'#ffff'
  }
}));
function DiscoverItem(props) {
  var classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <Grid container justify="center" alignItems="center" className={classes.gAvatar}>
          <Avatar
            className={classes.avatar}
            alt="Remy Sharp"
            src={props.image}
          />
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography className={classes.title}>{props.title} </Typography>
          <IconButton className={classes.iconButton}> <DoneIcon className={classes.done} /> </IconButton>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography className={classes.content}>
            {props.content}
          </Typography>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.gButton}
        >
          <Button variant="contained" color="primary" size="small" className={classes.button}>
            Follow
          </Button>
        </Grid>
      </Card>
    </div>
  );
}

export default DiscoverItem;
