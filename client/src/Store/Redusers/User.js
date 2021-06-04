import { ADD_RESTORENTDATA, ADD_USER_LOGIN, CLOSE_LODING, SET_LODING, SET_LOGIN } from "../constatns"

const initstate = {
    login: true,
    user: "",
    loding:false,
    RestorentData:{}
}


 const Userreducer = (state = initstate, action) => {
    switch (action.type) {
        case SET_LODING:
            return { ...state, loding: true }
        case CLOSE_LODING:
            return { ...state, loding: false }
        case ADD_USER_LOGIN :
            return {...state,user:action.paylod}
        case SET_LOGIN:
            return {...state,login:action.paylod}
        case ADD_RESTORENTDATA:
            return {...state,RestorentData:action.paylod}
        default:
            return state
    }
}
export default Userreducer