import {GET_OPROFILE, PROFILE_OLOADING, CLEAR_CURRENT_OPROFILE} from '../actions/types'

const initialState = {
    profile: null,
    profiles: null,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case PROFILE_OLOADING:
            return{
                ...state,
                loading: true
            }
        
        case GET_OPROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            }
        case CLEAR_CURRENT_OPROFILE:
            return {
                ...state,
                profile: null
            }
        default: 
            return state;
    }
}