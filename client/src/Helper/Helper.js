

import {  CLOSE_LODING, SET_LODING, SET_LOGIN } from '../Store/constatns';
import jwt_decode from "jwt-decode" 
import {getRestorendata}  from "../Store/Actions/Auth"
export const checktoken = () => (dispatch) =>  {
    dispatch({type:SET_LODING})
    const token = localStorage.getItem("token")
    if(!token){
       dispatch({type:SET_LOGIN,paylod:false})
    return  dispatch({type:CLOSE_LODING})
       
    }
    const decodetoken = jwt_decode(token)
      
    const expin = new Date(decodetoken.exp * 1000)
   console.log(expin )
    if(new Date() > expin){
      localStorage.removeItem("token")
      dispatch({type:SET_LOGIN,paylod:false})
      dispatch({type:CLOSE_LODING})
    
    }else{
      dispatch({type:SET_LOGIN,paylod:true})
      dispatch({type:CLOSE_LODING})
      dispatch(getRestorendata(decodetoken.id))
    }
    
  }