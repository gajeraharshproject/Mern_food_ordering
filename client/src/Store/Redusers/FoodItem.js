import {ADD_FOODITEM} from "../constatns"
const initstate - {
    AllFoodItems:[],
    PopulerfoodItems:[],
    AddFoodErrors:[],
}

const FoodItemReducer = (state = initstate,action) => {
    switch (action.type) {
        case ADD_FOODITEM:
           return {...state,AllFoodItems:[action.paylod,...state.AllFoodItems]}
    
        default:
            break;
    }
}


