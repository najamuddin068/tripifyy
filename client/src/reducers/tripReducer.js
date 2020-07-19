import {GET_TRIP, GET_TRIPS, ADD_TRIP, GET_ERRORS, GET_TRIPS_BY_ORGANIZER, TRIP_LOADING } from '../actions/types'

const initialState = {
    trips:[],
    trip:[],
    mytrips:[],
    loading: false,
}

export default function (state = initialState, action){
    switch (action.type){

        case TRIP_LOADING:
            return{
                ...state,
                loading:true
            }
        
        case GET_TRIPS:
            return{
                ...state,
                trips: action.payload,
                loading: false
            } 

        case GET_TRIP:
            return{
                ...state,
                trip: action.payload,
                loading: false
            }

        case GET_TRIPS_BY_ORGANIZER:
            return{
                ...state,
                mytrips: action.payload,
                loading: false
            }

        case ADD_TRIP:
            return {
                ...state,
                trips:[action.payload, ...state.trips]
            }

        default:
            return state
    }
}