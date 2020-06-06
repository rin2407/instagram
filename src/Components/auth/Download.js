import React from "react";
import { CardMedia, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card,Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    media:{
        marginTop:10
    },
    app:{
        marginTop:15,
        marginBottom:15,
        textAlign:'center'
    }
}))
function Download() {
    const classes = useStyles();
    return (
    <div>
        <Grid item xs={12} className={classes.app}>
            <Typography>Get in app.</Typography>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
                 <Card>
                     <CardMedia 
                     component="img"
                     image="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                      />
                 </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                   <Card>
                       <CardMedia
                       component="img"
                       image="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                       />
                   </Card>
            </Grid>
            </Grid>
    </div>
      
  );
}
export default Download;
