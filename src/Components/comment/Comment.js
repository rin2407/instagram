import React from "react";
import Header from "../layout/Header";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
  Divider,
  List,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CommentList from './CommentList';
import Section from './Section';
import AddComment from './AddComment';
import Morepost from './Morepost';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 90,
  },
  col8:{
    marginBottom:20
  },
  comment:{
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 215,
  }
}));
function Comment(props) {
  var classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Container>
          <Grid container spaccing={3}>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={8} >
              <Grid container spacing={2} className={classes.col8}>
                <Grid item xs={12} sm={7}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      image="https://cf.shopee.vn/file/bc4ed6ade67b10942f8488ee7bd53db2"
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Card>
                    <CardHeader
                      className={classes.header}
                      avatar={
                        <Avatar
                          aria-label="recipe"
                          className={classes.avatar}
                          src="https://www.dungplus.com/wp-content/uploads/2019/02/Roronoa-zoro-2.jpg"
                        />
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreHorizIcon />
                        </IconButton>
                      }
                      title="Roronoa zoro"
                    />
                    <Divider/>
                    <List className={classes.comment}>
                         <CommentList/>
                    </List>
                    <Divider/>
                    <Section/>
                    <Divider/>
                    <AddComment/>
                  </Card>
                </Grid>
              </Grid>
              <Divider/>
            </Grid>
            <Grid item xs={12} sm={2}></Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={10}>
              <Morepost/>
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Comment;
