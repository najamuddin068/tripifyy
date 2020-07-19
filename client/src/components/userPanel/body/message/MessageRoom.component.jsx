import React, { Component } from 'react'
import {getUserProfile} from '../../../../actions/userProfileActions'
import { connect } from 'react-redux'

class MessageRoom extends Component {

  componentDidMount(){
      const {message} = this.props

      this.props.getUserProfile(message)
  }
    render() {
      const {message} = this.props
      const {profile} = this.props.profile
        return (
            <div className="pl-3 pr-3 pt-3 pb-3 border-top border-bottom ">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <img
                          src={profile && profile.user.avatar}
                          alt=""
                          className="rounded-circle avatar-img z-depth-1-half mr-3"
                          style={{width:'50px'}}
                        />
                        <span>{profile && `${profile.user.firstName} ${profile.user.lastName}`}</span>
                      </div>
                      {/* <div className="">14 h</div> */}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, {getUserProfile})(MessageRoom)
