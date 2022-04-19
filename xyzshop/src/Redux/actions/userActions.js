import { userConstants } from "../constants/userconstants";
import { alertActions } from "./alertActions";
import userService from "../../services/UserService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { HistoryOutlined } from "@material-ui/icons";
import userService from '../../services/UserService';
import {toast} from 'react-toastify';
export const userActions={
    login,
    logout,
    register,
    sendotp,
    getotp,
}

function login(email,password){
    return dispatch=> {
        dispatch(request({email}));
        userService.login(email,password).then(
            user=>{
                dispatch(success(user));
               
            },
            error=>{
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        ).catch((err)=>{
            console.log(err);
            toast.error(err.response.data, {
              position: toast.POSITION.TOP_LEFT,
            });
        })
    };
    function request(user){return {type:userConstants.LOGIN_REQUEST,user}}
    function success(user){return {type:userConstants.LOGIN_SUCCESS,user}}
    function failure(error){return {type:userConstants.LOGIN_FAILURE,error}}
}

function logout(){
    userService.logout();
    return{
        type:userConstants.LOGOUT
    };
}

function register(name,email,password)
{
    return dispatch=>{
        dispatch(request(email));
        userService.register(name,email,password).
        then(
            user=>{
                dispatch(success());
                
                dispatch(alertActions.success("Registration Successfull"));
            },
            error=>{
                dispatch(failure());
                dispatch(alertActions.error(error.toString()))

            }
        ).catch((err)=>{
            console.log(err);
            toast.error(err.response.data, {
              position: toast.POSITION.TOP_LEFT,
            });
        });
    };
    function request(user){return {type:userConstants.REGISTER_REQUEST,user}}
    function success(user){return {type:userConstants.REGISTER_SUCCESS,user}}
    function failure(error){return {type:userConstants.REGISTER_FAILURE,error}}
}

function sendotp(email){
    return dispatch=>{
        if(email)
        {
        dispatch(request(email));
        userService.sendOtp(email);
        dispatch(success());
        dispatch(alertActions.success("OTP SENT"));
        }
        else{
            dispatch(failure());
        }
    }
    function request(user){return {type:userConstants.SENDOTP_REQUEST,user}}
    function success(user){return {type:userConstants.SENDOTP_SUCCESS,user}}
    function failure(error){return {type:userConstants.SENDOTP_FAILURE,error}}
}


function getotp(email,otp,password){
    return dispatch=>{
        dispatch(request(email));
        userService.getOtp(email,otp,password);
        dispatch(success());
        dispatch(alertActions.success("Password RESET SUCCESSFULL"));
        
    }
    function request(user){return {type:userConstants.GETOTP_REQUEST,user}}
    function success(user){return {type:userConstants.GETOTP_SUCCESS,user}}
    function failure(error){return {type:userConstants.GETOTP_FAILURE,error}}
}

