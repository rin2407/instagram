import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  typo:{
    flexGrow:1
  },
  bigAvatar: {
    width: 60,
    height: 60,
    marginLeft:15,
    marginTop:10,
    marginBottom:10
  },
  name:{
    marginLeft:15,
    color:'#A4A4A4'
},
}));

export default function CardAvatar(props) {
  const classes = useStyles();
  return (
    <div>
           <Card>
              <Avatar
                className={classes.bigAvatar}
                src="https://www.dungplus.com/wp-content/uploads/2019/02/Roronoa-zoro-2.jpg"
              />
              <Typography className={classes.name}>Roronoa zoro</Typography>
            </Card> 
    </div>
  );
}
