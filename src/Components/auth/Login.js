import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Card, Typography, Divider, ListItem, ListItemText } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import Logo from "./Logo";
import Download from "./Download";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    marginBottom: 0,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forgot: {
    textAlign: "center",
    marginTop: 18,
    marginBottom: 18,
  },
  decoration: {
    textDecoration: "none",
  },
  btnFb:{
    textTransform:'unset',
 },
  root: {
    width: "100%",
    marginTop: 10,
  },
  sign: {
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  or:{
    textAlign:'center'
  }
}));

function Login(props) {
  const classes = useStyles();
  // const CheckLogin = () => {
  //   props.history.push("/home");
  // };
  const [state,setState]= React.useState({
    user:'',
    password:''
  })
  const login = (event)=>{
      event.preventDefault();
      if(state.user !== '' && state.password !== ''){
        console.log('ok')
      }
      else{
        console.log('fails')
      }
  }
  const onHandelChange=(event)=>{
    setState({
      ...state,
      [event.target.name] : event.target.value});    
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Card>
          <Logo />
          <form className={classes.form} noValidate onSubmit={login}>
            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Phone number,username or email"
              name="user"
              autoComplete="off"
              autoFocus
              size="small"
              onChange={onHandelChange}
            />
            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              size="small"
              onChange={onHandelChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <ListItem>
              <ListItemText> <Divider/></ListItemText>
              <ListItemText className={classes.or}> OR </ListItemText>
              <ListItemText> <Divider/></ListItemText>
            </ListItem>
            <Button
              className={classes.btnFb}
              fullWidth
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<FacebookIcon />}
            >
              Log in with Facebook
            </Button>
            <Grid container>
              <Grid item xs={12} className={classes.forgot}>
                <Link to="/" variant="body2" className={classes.decoration}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Card>
        <Card className={classes.root}>
          <Typography className={classes.sign}>
            Don't have an account?{" "}
            <Link to="/signup" className={classes.decoration}>
              Sign up
            </Link>
          </Typography>
        </Card>

        <Download />
      </div>
    </Container>
  );
}
export default withRouter(Login);
