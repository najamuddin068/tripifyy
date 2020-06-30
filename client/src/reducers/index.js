import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer'
import userProfileReducer from './userProfileReducer'
import postReducer from './postReducer'
import organizerProfileReducer from './organizerProfileReducer';


export default combineReducers({
    auth: authReducer,
    profile: userProfileReducer,
    oprofile: organizerProfileReducer,
    errors: errorReducer,
    post: postReducer,

})


