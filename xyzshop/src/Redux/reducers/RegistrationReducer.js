import { userConstants } from "../constants/userconstants";
import userService from "../../services/UserService";

export function RegistrationReducer(state={},action){
    switch(action.type)
    {
        case userConstants.REGISTER_REQUEST:
            return{
                registering : true,
            };
        case userConstants.REGISTER_SUCCESS:
            return{};
        case userConstants.REGISTER_FAILURE:
            return{};
        default:
            return state;
    }
}