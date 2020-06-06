import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CssBaseline, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#fafafa",
  },
  sug:{
      marginLeft:25,
  }
}));

function SuggestionTitle(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CssBaseline></CssBaseline>
        <Grid container spacing={2}>
          <Grid item xs={3}>
               <Typography className={classes.sug}>Suggestions for you</Typography>
          </Grid>
          <Grid item xs={3}>
               <Typography>Follow</Typography>
          </Grid>
        </Grid>
    </div>
  );
}
export default  SuggestionTitle;
