import axios from "axios"
import { SET_LODING, CLOSE_LODING, ADD_FOODITEM } from "../constatns"
export const Addfooditem = (data) => async (dispatch) => {
    dispatch({ type: SET_LODING })
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const res = await axios.post("/fooditem/Addfood", data, config)
        dispatch({ type: CLOSE_LODING })
        console.log(res.data)
     
        if (res.data.jwterror) {
     return   window.location.reload()
         
        }

    } catch (error) {
        dispatch({ type: CLOSE_LODING })
        console.log(error.response)


    }
}