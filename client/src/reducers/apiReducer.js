import { GET_LOCATION, GET_RESTAURANTS } from "../actions/types"

const initialState = {
    location:[],
    restaurants:[],
}

export default function (state = initialState, action){
    switch (action.type){
        case GET_LOCATION:
            return{
                ...state,
                location:action.payload
            }
        
        case GET_RESTAURANTS:
            return{
                ...state,
                restaurants: action.payload,
            }   
        default: 
            return state
    }
}