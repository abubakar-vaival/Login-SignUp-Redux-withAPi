import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';
import userService from '../../services/UserService';
import {useSelector, useDispatch} from 'react-redux';
import {userActions} from '../../Redux/actions/userActions';
const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems : "center",
      height:"300px"
    },
    child:{
        width:"60%",
    },
    button:{
        marginTop:"50px"
    }
  }));
const Login = (props) => {
    const dispatch = useDispatch();
    const loggingIn = useSelector((state)=>state.loginreducer.loggingIn);
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    function handlesubmit(){
        if(email && password)
        {
            dispatch(userActions.login(email,password));
        }
    }
    
    const classes = useStyles();
    return ( <div className={classes.container}>
        <div className={classes.child}>
            <TextField label="email" fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
            <TextField label="password" type="password"fullWidth value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br/>
            <Button variant="contained" color="secondary" onClick={(e)=>{
handlesubmit(); window.location.href = "/";}} style={{marginRight:"5px", marginTop:"5px"}}>Login {loggingIn}</Button>
            <Button variant="contained" color="secondary" style={{marginRight:"5px", marginTop:"5px"}} onClick={(e)=>{
                props.history.push("/login/forgotpassword");
            }}>Forgot Passcode ?</Button>
        </div>
    </div> );
}
 
export default Login;