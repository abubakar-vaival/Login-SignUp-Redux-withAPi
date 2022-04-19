import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography,Button } from "@material-ui/core";
import userService from "../services/UserService";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <img src="data:image/png;base64,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" style={{width:"5%",padding:'1rem'}}></img>
      <Typography variant="h6" className={classes.link}>
          PENETRATORS GAMESTOP
        </Typography>
        <Typography variant="h6" >
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.link}>
            Products
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products/new" className={classes.link}>
            New Product
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/contact-us" className={classes.link}>
            Contact Us
          </Link>
        </Typography>
        {!userService.isLoggedIn() ?  <>
        <Typography variant="h6">
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/register" className={classes.link}>
            Register
          </Link>
        </Typography>
        </> : <Button variant="contained" color="secondary" onClick={(e)=>{
          userService.logout();
          window.location.reload();
        }}>Logout {userService.getLoggedInUser().name } </Button>}
       {/* + userService.getLoggedInUser().role */}
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
