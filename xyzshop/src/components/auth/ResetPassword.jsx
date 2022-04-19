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
const ResetPassword = (props) => {
    const dispatch = useDispatch();
    const RecieveingOTP = useSelector((state)=>state.getotpreducer.RecieveingOTP);
    const OTPRecieved = useSelector((state)=>state.getotpreducer.OTPRecieved);
    const [otpcode,setOtpCode] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [email,setEmail] = React.useState("abubakar@gmail.com");
    const [name,setName] = React.useState("abubakar");
    function handlesubmit(){
        if(email && password)
        {
            dispatch(userActions.getotp(name,email,otpcode,password));
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
            <h1 style={{justifyContent : "center", alignContent:"Center"}}> Reset Your Password</h1>
            <TextField label="Name" fullWidth value={name} onChange={(e)=>{setName(e.target.value)}}/> <br/>
            <TextField label="Email" fullWidth value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
            <TextField label="Code" fullWidth value={otpcode} onChange={(e)=>{setOtpCode(e.target.value)}}/> <br/>
            <TextField label="Password" type="password"fullWidth value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br/>
            <Button variant="contained" color="secondary" style={{marginRight:"5px", marginTop:"5px"}} onClick={(e)=>{
                handlesubmit();
                toast.success("Password Changed Successfully");
                // myfunc();
                setTimeout(() => {
                    props.history.push("/login");
                }, 15000);
            }}>Confirm Password</Button>
        </div>
    </div> );
}
 
export default ResetPassword;