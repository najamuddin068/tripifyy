import axios from 'axios';

import {GET_USER_NOTIFICATION, GET_ORGANIZER_NOTIFICATION} from './types';

export const getNotificationByUser = id => dispatch => {
    axios
        .get(`/api/notification/user/${id}`)
        .then(res => dispatch({
            type: GET_USER_NOTIFICATION,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_USER_NOTIFICATION,
            payload: null
        }))
}

export const getNotificationByOrganizer = id => dispatch => {
    axios
        .get(`/api/notification/organizer/${id}`)
        .then(res => dispatch({
            type: GET_ORGANIZER_NOTIFICATION,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ORGANIZER_NOTIFICATION,
            payload: null
        }))
}