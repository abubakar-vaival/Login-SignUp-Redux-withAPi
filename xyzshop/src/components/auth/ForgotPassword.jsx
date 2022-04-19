import React, { useRef } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core';
import userService from '../../services/UserService';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
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
const ForgotPassword = (props) => {
    const dispatch = useDispatch();
    const [email,setEmail] = React.useState("abubakar@gmail.com");
    const optsending = useSelector((state)=>state.sendotpreducer.otpsending);
    function sendotp()
    {
        if(email)
        {
            dispatch(userActions.sendotp(email));
        }
    }
    // const emailRef = useRef();
    // const sendOtp = async ()=>{
    //     try{
    //         let url = "http://localhost:4000/api/users/email-sent";
    //         let options = {
    //             method : "POST",
    //             url : url,
    //             data : {email : emailRef.current.value}
    //         }
    //         let response = await axios(options);
    //         let record = response.data;
    //         if(record.statusText == "Success")
    //         {
    //             toast.success();
    //         }
    //         else
    //         {
    //             toast.error(record.message);
    //         }
    //     }catch(e)
    //     {
    //         toast.error("Something went wrong");
    //     }
    // }
    const classes = useStyles();
    return ( <div className={classes.container}>
        <div className={classes.child}>
            <h1 style={{justifyContent : "center", alignContent:"Center"}}> Forgot Password</h1>
            <TextField label="Email" fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
            <Button variant="contained" color="secondary" style={{marginRight:"5px", marginTop:"5px"}} onClick={(e)=>{sendotp(); props.history.push("/login/resetpassword");}}>Send OTP</Button>
        </div>
    </div> );
}
 
export default ForgotPassword;