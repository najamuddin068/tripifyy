import axios from 'axios'

import { GET_OPROFILE, PROFILE_OLOADING, GET_ERRORS, CLEAR_CURRENT_OPROFILE } from './types'
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading())
    axios.get('/api/oprofile')
        .then(res => {
            dispatch({
                type: GET_OPROFILE,
                payload:res.data
            })
        })
        .catch(err => 
            dispatch({
                type: GET_OPROFILE,
                payload:{}
            })
        )
}

export const setProfileLoading = () => {
    return {
        type: PROFILE_OLOADING 
    }
}

export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_OPROFILE 
    }
}
export const createProfile = (profileData, history) => dispatch => {
    axios.post('/api/oprofile', profileData)
        .then(res => history.push('/organizer/dashboard'))
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}