import React, { Component } from 'react';
import './App.scss';
import Home from './routes/guests/Home.route';
import {Route, Switch, withRouter } from 'react-router-dom';
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
import store from './store';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CreateProfile from './components/userPanel/body/profile/CreateProfile.component';
import CreateUserProfile from './routes/user/CreateUserProfile.route';
import OrganizerFeed from './routes/organizer/OrganizerFeed.route';
import Post from './components/organizerPanel/body/post/Post.component';
import OrganizerPost from './routes/organizer/OrganizerPost.route';
import Footer from './components/homepage/footer/Footer.component';
import UserFeed from './routes/user/UserFeed.route';
import UserPost from './routes/user/UserPost.route';
import UserProfile from './components/userPanel/body/profile/UserProfile.component';
import UProfile from './routes/user/UProfile.route';
import PrivateUserRoute from './common/PrivateUserRoute';
import Test from './components/Test';
import UMessages from './routes/user/UMessages.route';
import UProfiles from './routes/user/UProfiles.route';
import GetUserProfile from './routes/user/GetUserProfile.route';
import PrivateOrganizerRoute from './common/PrivateOrganizerRoute';
import OrganizerTrips from './routes/organizer/OrganizerTrips.route';
import OrganizerCreateTrip from './routes/organizer/OrganizerCreateTrip.route';
import OrganizerMessage from './routes/organizer/OrganizerMessage.route';
import OrganizerAnalytics from './routes/organizer/OrganizerAnalytics.route';
import OrganizerEarnings from './routes/organizer/OrganizerEarnings.route';
import OrganizerTripDashboard from './routes/organizer/OrganizerTripDashboard.component';
import InlineCartPage from './components/userPanel/payment/InlineCartPage';

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
            <PrivateUserRoute exact path='/user/dashboard' component={withRouter(User)}/>
            <PrivateUserRoute exact path='/user/create-profile' component={withRouter(CreateUserProfile)}/>
            <PrivateOrganizerRoute exact path='/organizer/dashboard' component={withRouter(OrganizerDashboard)}/>
            <Route exact path='/register/user' component={withRouter(UserRegistraion)}/>
            <Route exact path='/register/organizer' component={withRouter(OrganizerRegistration)}/>
            <Route exact path='/admin' component={withRouter(Admin)}/>
            <Route exact path='/sign-in' component={withRouter(SignIn)}/>
            <PrivateOrganizerRoute exact path='/organizer/myfeed' component={withRouter(OrganizerFeed)}/>
            <PrivateOrganizerRoute exact path='/organizer/post/:id' component={withRouter(OrganizerPost)}/>
            <PrivateUserRoute exact path='/user/myfeed' component={withRouter(UserFeed)}/>
            <PrivateUserRoute exact path='/user/post/:id' component={withRouter(UserPost)}/>
            <PrivateUserRoute exact path='/user/profile' component={withRouter(UProfile)}/>
            <PrivateUserRoute exact path='/user/messages' component={withRouter(UMessages)}/>
            <PrivateUserRoute exact path='/user/profiles' component={withRouter(UProfiles)}/>
            <PrivateUserRoute exact path='/user/:id' component={withRouter(GetUserProfile)}/>
            <PrivateOrganizerRoute exact path='/organizer/trips' component={withRouter(OrganizerTrips)}/>
            <PrivateOrganizerRoute exact path='/organizer/trips/:id' component={withRouter(OrganizerTripDashboard)}/>
            <PrivateOrganizerRoute exact path='/organizer/messages' component={withRouter(OrganizerMessage)}/>
            <PrivateOrganizerRoute exact path='/organizer/create-trip' component={withRouter(OrganizerCreateTrip)}/>
            <PrivateOrganizerRoute exact path='/organizer/notification' component={withRouter(OrganizerAnalytics)}/>
            <PrivateOrganizerRoute exact path='/organizer/earnings' component={withRouter(OrganizerEarnings)}/>
            <PrivateOrganizerRoute exact path='/organizer/help-center' component={withRouter(OrganizerEarnings)}/>

            {/* <Route exact path='/test' component={withRouter(Test)} /> */}

          </Switch>
          <Footer/>
    </div>
  );
}
}

const mapStateToProps = state => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(withRouter(App));;
