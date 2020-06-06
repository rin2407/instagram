import React from "react";
import { CardMedia, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    media:{
        marginTop:10
    }
}))
function Logo() {
    const classes = useStyles();
    return (
    <Grid container spacing={2}>
    <Grid item xs={12} sm={3}></Grid>
    <Grid item xs={12} sm={6} className={classes.media}>
    <CardMedia
        component="img"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
      />
    </Grid>
    <Grid item xs={12} sm={3}></Grid>

</Grid>
      
  );
}
export default Logo;
