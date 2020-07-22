import React, { Component } from "react";
import { MDBInputGroup, MDBBtn, MDBIcon } from "mdbreact";
// import { receiveAllMessage } from '../../../../actions/messageActions'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
class MessageChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  componentWillReceiveProps(){
    //   const {profile} = this.props.profile
    //   const {auth} = this.props
    // if(profile){
    //     const data = {
    //         receiver: profile.user._id,
    //         sender: auth.user.id
    //     }
    //     this.props.receiveAllMessage(data)
    //     console.log('hello')
    // }
    
   

  }

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { profile } = this.props.profile;
    const { auth } = this.props;

    const newMessage = {
      name: `${profile.user.firstName} ${profile.user.lastName}`,
      sender: auth.user.id,
      text: this.state.text,
      receiver: profile.user._id,
      senderAvatar: auth.user.avatar,
      receiverAvatar: profile.user.avatar,
    };
    this.props.sendMessage(newMessage);
  };

  render() {
    const { message } = this.props;
    const {auth} = this.props
    const { profile } = this.props.profile;
    const { text } = this.state;

    if(profile){
        const data = {
            receiver: profile.user._id,
            sender: auth.user.id
        }
        this.props.receiveAllMessage(data)
        console.log('hello')
    }

    return (
      <div className="border  mt-2 pt-3 rounded">
        <div className="pl-4 pt-2 pb-2 border-bottom">
          <h4>
            {profile && `${profile.user.firstName} ${profile.user.lastName}`}
          </h4>
        </div>
        <div className="overflow-auto" style={{ height: "67vh" }}>
          <div className=" ml-3 mr-3 mt-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={profile && profile.user.avatar}
                  alt=""
                  className="rounded-circle avatar-img z-depth-1-half mr-3"
                  style={{ width: "50px" }}
                />
                <div className="mr-3">{}</div>
              </div>
              {/* <div className="">14 h</div> */}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <form>
            <MDBInputGroup
              material
              containerClassName="mb-0 pb-0 pt-0 mt-0"
              hint="Type Your Message"
              value={text}
              onChange={this.handleChange("text")}
              append={
                <MDBBtn
                  className="m-0 px-3 py-2 z-depth-0 rounded-right"
                  type="submit"
                  size="lg"
                  onClick={this.handleSubmit}
                >
                  Send
                  <MDBIcon className="ml-2" icon="paper-plane" />
                </MDBBtn>
              }
            />
          </form>
        </div>
      </div>
    );
  }
}
MessageChat.propTypes = {
    profile: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    receiveAllMessage: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  profile: state.profile,
  message: state.message,
  auth: state.auth,
});
export default connect(mapStateToProps, 
  // {receiveAllMessage}
  )(MessageChat);
