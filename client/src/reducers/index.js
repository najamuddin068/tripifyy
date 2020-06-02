import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer'
import userProfileReducer from './userProfileReducer'
import postReducer from './postReducer'


export default combineReducers({
    auth: authReducer,
    profile: userProfileReducer,
    errors: errorReducer,
    post: postReducer,

})


