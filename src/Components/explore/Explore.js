import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../layout/Header";
import DiscoverList from "./discover/DiscoverList";
import ExploreList from "./exploreImage/ExploreList";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 90,
    paddingLeft: 40,
    paddingRight: 40,
  },
  discover:{
    fontSize:'0.9rem',
    marginBottom:10,
    marginLeft:5,
    color:"#8e8e8e"
  },
 explore:{
   paddingLeft:40,
   paddingRight:40,
   marginTop:30
 }
}));
function Explore(props) {
  var classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Typography className={classes.discover} variant="h2" >Discover people</Typography>
      <DiscoverList/>
      </div>
      <div className={classes.explore}>
      <Typography className={classes.discover} variant="h2" >Explore</Typography>
      <ExploreList/>
      </div>
    </div>
  );
}

export default Explore;
