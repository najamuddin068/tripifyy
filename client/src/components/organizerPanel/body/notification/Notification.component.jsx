import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NotificationItems from "./NotificationItems.component";
import {getNotificationByOrganizer} from '../../../../actions/notificationActions'
class Notification extends Component {
    componentDidMount(){
        this.props.getNotificationByOrganizer(this.props.auth.organizer.id)
    }
  render() {
      const {notification} = this.props.notification
    return (
      <div>
        <MDBContainer>
          <div className="pt-4" />
          <h2>Notifications</h2>
          <hr/>

          {notification && notification.map(notification=><NotificationItems key={notification._id} notification={notification}/>)}
        </MDBContainer>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
    notification: state.notification 
})
export default connect(mapStateToProps, {getNotificationByOrganizer})(withRouter(Notification))
