import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';
import userService from '../../services/UserService';
import {toast} from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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
const Register = (props) => {
    const dispatch = useDispatch();
    const registering = useSelector((state)=>state.registrationreducer.registering);
    let navigate = useHistory();
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [name,setName] = React.useState("");
    const classes = useStyles();
    function handlesubmit(){
      if(email && password)
      {
          dispatch(userActions.register(name,email,password));
      }
  }
    return ( <div className={classes.container}>
        <div className={classes.child}>
            <TextField label="name" fullWidth value={name} onChange={(e)=>{setName(e.target.value)}}/> <br/>
            <TextField label="email" fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
            <TextField label="password" type="password" fullWidth value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br/>
            <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {handlesubmit(); props.history.push("/login");
          }}
        >
          Register
        </Button>
        </div>
    </div> );
}
 
export default Register;