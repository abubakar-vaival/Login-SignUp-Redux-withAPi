import { userConstants } from "../constants/userconstants";
import userService from "../../services/UserService";

export function SendOtpReducer(state={},action){
    switch(action.type)
    {
        case userConstants.SENDOTP_REQUEST:
            return{
                otpsending : true,
            };
        case userConstants.SENDOTP_SUCCESS:
            return{
                otpsent : true,
            };
        case userConstants.SENDOTP_FAILURE:
            return{
                otpsent : false,
            };
        default:
            return state;
    }
}