import axios from "axios";

// const BASE_URL = " http://192.168.0.60:4000/api/";


const BASE_URL = "https://viewvibe.wm.r.appspot.com/api/";




export const publicRequest = (Token)=> axios.create({
  baseURL: BASE_URL,
  params: {token:Token},
  
 
}); 