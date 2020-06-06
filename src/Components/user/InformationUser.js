import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor:'#fafafa',
  },
  bigAvatar:{
      width:60,
      height:60,
      marginRight:10
  }
}));

export default function InformationUser() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
        <Avatar
                className={classes.bigAvatar}
                alt="Remy Sharp"
                src="https://i.pinimg.com/originals/db/15/eb/db15eb36d6e9080764049f0eb6640198.png"
              />
        </ListItemAvatar>
        <ListItemText primary="D.Luffy" secondary="Monkey D.Luffy" />
      </ListItem>
    </List>
  );
}
