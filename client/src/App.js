import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './routes/guests/Home.route';
import {BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Admin from './routes/admin/Admin.route';
import UserRegistraion from './routes/registeration/UserRegistraion.route';
import OrganizerRegistration from './routes/registeration/OrganizerRegistration.route';
import SignIn from './routes/signIn/SignIn.route';
import User from './routes/user/User.route';
import OrganizerDashboard from './routes/organizer/OrganizerDashboard.route'
import { applyMiddleware, createStore } from 'redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser, setCurrentOrganizer} from './actions/authActions';
import {SET_CURRENT_USER} from './actions/types'
import {initialState} from './reducers/authReducer'
import store from './store';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CreateProfile from './components/userPanel/body/profile/CreateProfile.component';
import CreateUserProfile from './routes/user/CreateUserProfile.route';
import OrganizerFeed from './routes/organizer/OrganizerFeed.route';
import Post from './components/organizerPanel/body/post/Post.component';
import OrganizerPost from './routes/organizer/OrganizerPost.route';
import Footer from './components/organizerPanel/footer/Footer.component';
import UserFeed from './routes/user/UserFeed.route';
import UserPost from './routes/user/UserPost.route';

class App extends Component {

  constructor(props){
    super(props)

    // if(localStorage.jwtToken){
    //   setAuthToken(localStorage.jwtToken)
    //   const decoded = jwt_decode(localStorage.jwtToken);
    //   store.dispatch(setCurrentUser(decoded))}
    
    if(localStorage.jwtToken){

      setAuthToken(localStorage.jwtToken)
      const decoded = jwt_decode(localStorage.jwtToken);
      if(decoded.isUser)
      {
        store.dispatch(setCurrentUser(decoded))
      }
      else if(decoded.isOrganizer)
      {
        store.dispatch(setCurrentOrganizer(decoded))
      }
   
    }
    
  }

render(){
  return (
    <div className='body'>
          <Switch>
            <Route exact path='/' component={withRouter(Home)}/>
            <Route exact path='/admin' component={withRouter(Admin)}/>
            <Route ecaxt path='/user/dashboard' component={withRouter(User)}/>
            <Route ecaxt path='/user/create-profile' component={withRouter(CreateUserProfile)}/>
            <Route ecaxt path='/organizer/dashboard' component={withRouter(OrganizerDashboard)}/>
            <Route exact path='/register/user' component={withRouter(UserRegistraion)}/>        
            <Route exact path='/register/organizer' component={withRouter(OrganizerRegistration)}/>
            <Route exact path='/admin' component={withRouter(Admin)}/>
            <Route exact path='/sign-in' component={withRouter(SignIn)}/>
            <Route exact path='/organizer/myfeed' component={withRouter(OrganizerFeed)}/>
            <Route exact path='/organizer/post/:id' component={withRouter(OrganizerPost)}/>
            <Route exact path='/user/myfeed' component={withRouter(UserFeed)}/>
            <Route exact path='/user/post/:id' component={withRouter(UserPost)}/>
            
            
          </Switch>
    </div>
  );
}
}

const mapStateToProps = state => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(withRouter(App));;
