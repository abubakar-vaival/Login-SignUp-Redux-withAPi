import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { GetOtpReducer } from "./GetOtpReducer";
import { LoginReducer } from "./LoginReducer";
import { RegistrationReducer } from "./RegistrationReducer";
import { SendOtpReducer } from "./SendOtpReducer";

export default combineReducers({
    alertreducer : alertReducer,
    getotpreducer : GetOtpReducer,
    loginreducer : LoginReducer,
    registrationreducer : RegistrationReducer,
    sendotpreducer : SendOtpReducer,
});