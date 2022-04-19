import { userConstants } from "../constants/userconstants";
import userService from "../../services/UserService";

let user = userService.isAdminorUser();

const initialState= user ? {loggedIn :true,user} : {};

export function LoginReducer(state = initialState,action){
    switch(action.type)
    {
        case userConstants.LOGIN_REQUEST:
            return{
                loggingIn : true,
                user : action.user,
            };
        case userConstants.LOGIN_SUCCESS:
            return{
                loggedIn : true,
                user : action.user,
            };
        case userConstants.LOGIN_FAILURE:
            return{
                
            };
        case userConstants.LOGOUT:
            return{
               
            };
        default:
            return state;
    }
}