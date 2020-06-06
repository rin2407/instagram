import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Grid, CssBaseline } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#fafafa",
  },
  button:{
      marginTop:25
  }
}));

function SuggestionItem(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CssBaseline></CssBaseline>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className={classes.bigAvatar}
                    alt="instagram"
                    src={props.image}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={props.name}
                  secondary="Instagram Official Account"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              className={classes.button}
            >
              Follow
            </Button>
          </Grid>
        </Grid>
    </div>
  );
}
export default  SuggestionItem;
