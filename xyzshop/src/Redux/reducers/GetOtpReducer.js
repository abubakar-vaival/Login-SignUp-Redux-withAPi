import { userConstants } from "../constants/userconstants";
import userService from "../../services/UserService";

export function GetOtpReducer(state={},action){
    switch(action.type)
    {
        case userConstants.GETOTP_REQUEST:
            return{
                RecieveingOTP : true,
            };
        case userConstants.GETOTP_SUCCESS:
            return{
                OTPRecieved : true,
            };
        case userConstants.GETOTP_FAILURE:
            return{
                OTPRecieved : false,
            };
        default:
            return state;
    }
}