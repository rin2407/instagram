import React from "react";
import { Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Card, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import Logo from "./Logo";
import Download from "./Download";
import callApi from '../../callApi/CallerApi'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
    fontWeight: 600,
    color: "rgba(var(--f52,142,142,142),1)",
    fontSize: 17,
  },
  fb: {
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 10,
  },
  btnFb:{
     textTransform:'unset'
  },
  form: {
    marginTop: theme.spacing(1),
    width: "100%", // Fix IE 11 issue.
    paddingLeft: 40,
    paddingRight: 40,
  },
  input: {
    marginBottom: 0,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  decoration: {
    textDecoration: "none",
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
  },
}));

function Register(props) {
  const classes = useStyles();
  const [state,setState]= React.useState({
    phone:'',
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:''
  })
  const handleChange =(event)=>{
    setState({
      ...state,
      [event.target.name] : event.target.value});    
  }
  const handleRegister = () => {
    const user={
      fullName: state.fullName,
      userName: state.userName,
      phone: state.phone,
      password: state.password
    }
    callApi('users','POST',{user}).then(res => {
      console.log(res.data.user)
    })
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Card>
          <Logo />
          <Grid item xs={12} className={classes.title}>
            <Typography>
              Sign up to see photos and videos from your friends.
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.fb}>
            <Button
              className={classes.btnFb}
              fullWidth
              variant="contained"
              color="primary"
              size="small"
              startIcon={<FacebookIcon />}
            >
              Log in with Facebook
            </Button>
          </Grid>
          <div className={classes.form}>
            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="fullName"
              label="Full name"
              size="small"
              onChange={handleChange }
            />
            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="userName"
              label="User name"
              size="small"
              onChange={handleChange }
            />
             <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Mobile number or email"
              name="phone"
              autoComplete="off"
              autoFocus
              size="small"
              onChange={handleChange }
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
              autoComplete="current-password"
              size="small"
              onChange={handleChange }
            />
            <TextField
              className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm password"
              type="password"
              autoComplete="current-password"
              size="small"
              onChange={handleChange }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleRegister}
            >
              Sign up
            </Button>
          </div>
        </Card>
        <Card className={classes.root}>
          <Typography className={classes.sign}>
            Have an account?{" "}
            <Link to="/" className={classes.decoration}>
              Log in
            </Link>
          </Typography>
        </Card>
        <Download />
      </div>
    </Container>
  );
}
export default withRouter(Register);
