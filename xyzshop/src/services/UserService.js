import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
import {ToastContainer,toast} from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'
class UserService extends GenericService {
  constructor() {
    super();
  }
  
  login = (email, password) =>
  new Promise((resolve, reject) => {
    this.post("users/login", { email, password })
      .then((token) => {
        localStorage.setItem("token", token);
        resolve(token);
      })
      .catch((err) => {
        reject(err);
      });
  });
  register = (name, email, password) =>
    this.post("users/register", { password, email, name });
  
  logout =()=>{
    localStorage.removeItem("token");

  }

  isLoggedIn = ()=>{
    return localStorage.getItem("token") ? true : false;
  }

  getLoggedInUser = ()=>{
    // let token = localStorage.getItem("token");
    try{
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    }catch(ex)
    { 
      return null;
    }
  };

  isAdmin = ()=>{
    if(this.isLoggedIn())
    {
      if(this.getLoggedInUser().role == "admin")
      {
        return true;
      }
      else{
        return false;
      }
    }
    else
    {
      return false;
    }
  };

  isAdminorUser = ()=>{
    if(this.isLoggedIn())
    {
      if(this.getLoggedInUser().role == "admin" || this.getLoggedInUser().role == "user")
      {
        return true;
      }
      else{
        return false;
      }
    }
    else
    {
      return false;
    }
  };

  sendOtp = (email)=>{
    this.post("/users/email-sent",{email});
  };

  getOtp = (name,email,otp,password)=>{
    this.post("users/change-password",{name,email,otp,password});
  }
 

  // updateProduct = (_id, data) => this.put("users/" + _id, data);
  // getProducts = () => this.get("users");
  // getSingleProduct = (id) => this.get("users/" + id);
}

let userService = new UserService();
export default userService;
