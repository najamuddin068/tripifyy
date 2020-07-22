import { GET_LOCATION, GET_RESTAURANTS, GET_HOTELS,GET_FLIGHTS } from "../actions/types"

const initialState = {
    location:[],
    restaurants:[],
    hotels:[],
    flights:[]
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

        case GET_HOTELS:
            return {
                ...state,
                hotels: action.payload
            }
        case GET_FLIGHTS:
            return {
                ...state,
                flights:action.payload
            }
        default: 
            return state
    }
}