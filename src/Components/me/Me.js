import React from "react";
import Header from "../layout/Header";
import { makeStyles } from "@material-ui/core/styles";
import SettingsIcon from '@material-ui/icons/Settings';
import TabsMe from './TabsMe'
import {
  Container,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Typography,
  ListItemIcon,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 90,
  },
  gAvatar: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  bigAvatar: {
    width: 150,
    height: 150,
  },
  userName:{
      flex:'unset',
      paddingRight:20,
      color:'rgba(var(--i1d,38,38,38),1)'
  },
  edit:{
      marginRight:20,
      fontSize:'0.7rem'
  },
  lEdit:{
    flex:'unset'
  },
  fullName:{
      paddingLeft:16,
      fontWeight:600
  },
  list:{
      paddingTop:0,
      paddingBottom:0
  },
  paddingEdit:{
      paddingBottom:0
  }
}));
function Me() {
  var classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={8}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          className={classes.bigAvatar}
                          alt="Remy Sharp"
                          src="https://i.pinimg.com/originals/db/15/eb/db15eb36d6e9080764049f0eb6640198.png"
                        />
                      </ListItemAvatar>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} sm={8}>
                   <Grid item xs={12} sm={12}>
                   <List className={classes.paddingEdit}>
                        <ListItem>
                            <ListItemText className={classes.userName}>
                                <Typography variant="h5">D.Luffy</Typography>
                            </ListItemText>
                            <ListItemText className={classes.lEdit}>
                            <Button variant="outlined" size="small" className={classes.edit} >Edit profile</Button>
                            </ListItemText>
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                        </ListItem>
                    </List>
                   </Grid>
                   <Grid item xs={12} sm={12}>
                       <List className={classes.list}>
                           <ListItem>
                               <ListItemText>
                                   18 post
                               </ListItemText>
                               <ListItemText>
                                  34 followers
                               </ListItemText>
                               <ListItemText>
                                   12 following
                               </ListItemText>
                           </ListItem>
                       </List>
                   </Grid>
                   <Grid item xs={12} sm={12}>
                       <Typography className={classes.fullName}>Monkey D.Luffy</Typography>
                   </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={2}></Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <TabsMe/>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
export default Me;
