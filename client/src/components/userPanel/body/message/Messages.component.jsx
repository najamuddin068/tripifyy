import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBInputGroup,
  MDBIcon,
} from "mdbreact";
import { connect } from "react-redux";
// import { sendMessage, receiveMessages } from "../../../../actions/messageActions";
import MessageRoom from "./MessageRoom.component";
import MessageChat from "./MessageChat.component";

class Messages extends Component {
  

  componentDidMount(){
    const {profile} = this.props.profile
    const {auth} = this.props
      if (profile && profile.user._id!==auth.user.id){
      const newMessage = { 
        name: `${profile.user.firstName} ${profile.user.lastName}`, 
        sender: auth.user.id,
        receiver:profile.user._id,
        senderAvatar: auth.user.avatar,
        receiverAvatar: profile.user.avatar
      
      };
      this.props.sendMessage(newMessage)

    }
    const user = {
      sender: auth.user.id,
    }
    this.props.receiveMessages(user)


  }
  render() {
    const { message } = this.props;
    const {profile} = this.props.profile
    return (
      <div className="ml-5 mr-5">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="4">
              <div className="border pb-2 mt-2 pt-3 rounded">
                <div className="pl-4 pt-2 pb-2 border-bottom">
                  <h4>Inbox</h4>
                </div>
                <div className="overflow-auto " style={{ height: "72vh" }}>
                  {message.messages.map(message => <MessageRoom key={message._id} message={message}/>)}
                </div>
              </div>
            </MDBCol>
            <MDBCol md="8">
              <MessageChat />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  message: state.message
});
export default connect(mapStateToProps,
  //  {sendMessage, receiveMessages}
   )(Messages);
