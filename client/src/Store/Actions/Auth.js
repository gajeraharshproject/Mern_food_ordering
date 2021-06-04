import axios from "axios"
import { CLOSE_LODING, SET_LODING, ADD_USER_LOGIN, SET_LOGIN, ADD_RESTORENTDATA } from "../constatns"



export const loginRestorent = (data) => async (dispatch) => {
    dispatch({ type: SET_LODING })
    try {
        const res = await axios.post("/Restorent/RestorentLogin", data)

        dispatch({ type: ADD_USER_LOGIN, paylod: res.data.token })
        localStorage.setItem("token", res.data.token)
        dispatch({ type: SET_LOGIN, paylod: true })
      
        dispatch({ type: ADD_RESTORENTDATA, paylod: res.data.data })
        dispatch({ type: CLOSE_LODING })
    } catch (error) {
        dispatch({ type: CLOSE_LODING })
        console.log(error.response)
    }

}
export const getRestorendata = (id) => async (dispatch) => {
const token = localStorage.getItem("token")

    try {
        const config = {
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        }
        const res = await axios.get(`/Restorent/getRestorentdata${id}`,config)
        dispatch({type:ADD_RESTORENTDATA,paylod:res.data.data})

        return res.data.data
    } catch (error) {
        console.log(error.response)
    }
}