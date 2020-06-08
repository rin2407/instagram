import React from "react";
import {NavLink } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography,CardMedia, Grid, Avatar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import NearMeSharpIcon from '@material-ui/icons/NearMeSharp';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import '../../App.css'
const useStyles = makeStyles((theme) => ({
  titleHeader: {
    flexGrow: 1,
  },
  AppBar: {
    background: "#ffff",
    paddingLeft: 40,
    paddingRight: 40,
  },
  input:{
    marginTop:4,
    marginBottom:4
  },
  pointer:{
    cursor:'pointer'
  },
  Avatar:{
    width:30,
    height:30
  }
}));
function Header(props) {
  var classes = useStyles();
  const home= () =>{
    props.history.push('/home')
  }
  return (
    <div>
      <AppBar className={classes.AppBar} >
        <Toolbar>
                <Grid item xs={1} sm={1} onClick={home} className={classes.pointer}>
                <CardMedia
                 component="img"
                 image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                />
                </Grid>
          <Typography
            variant="h6"
            align="center"
            className={classes.titleHeader}
          >
            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              name="search"
              placeholder="Search text"
              autoComplete="off"
              autoFocus
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchSharpIcon/>
                  </InputAdornment>
                ),
              }}
            />
          </Typography>
          <NavLink to="/home" className="list-group-item"> <IconButton><HomeIcon /></IconButton> </NavLink>
          <NavLink to="/ffhh" className="list-group-item "> <IconButton><NearMeSharpIcon/></IconButton> </NavLink>
          <NavLink to="/explore" className="list-group-item "> <IconButton><ExploreIcon /></IconButton> </NavLink>
          <NavLink to="/gjjj" className="list-group-item "> <IconButton><FavoriteBorderSharpIcon/></IconButton> </NavLink>
          <NavLink to="/jkjlll" className="list-group-item ">
          <IconButton>
          <Avatar
              className={classes.Avatar}
              alt="Remy Sharp"
              src="https://i.pinimg.com/originals/db/15/eb/db15eb36d6e9080764049f0eb6640198.png"
            />
            </IconButton>
           </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
