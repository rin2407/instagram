import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../layout/Header";
import Container from "@material-ui/core/Container";
import InformationUser from '../user/InformationUser';
import SuggestionList from '../suggestion/SuggestionList';
import CardAvatar from '../card/CardAvatar';
import SuggestionTitle from '../suggestion/SuggestionTitle'
import {
  Grid,
  CssBaseline,
} from "@material-ui/core";
import CardList from '../card/CardList';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
  },
  padding: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  follow:{
    position: "fixed",
    backgroundColor:'rgba(0, 0, 0, 0.87)',
    width: '100%'
  },
}));
function Home(props) {
  var classes = useStyles();
  return (
    <div>
      <Header />
      <Container className={classes.root}>
        <CssBaseline></CssBaseline>
        <Grid container spacing={2} className={classes.padding}>
          <Grid item xs={12} sm={7}>
            <CardAvatar/>
            <CardList/>
          </Grid>
          <Grid item xs={12} sm={5} >
            <div className={classes.follow}>
                <InformationUser/>
                <SuggestionTitle/>
                <SuggestionList/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
