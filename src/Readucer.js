import { INCREASE , DECREASE } from "./ActionType";
let initialState = 0

export const readucer =(state=initialState,action) =>{
    switch (action.type) {
        case INCREASE:
         return state + 1
        case DECREASE:
            return state - 1
        default:
            return state
    }
}