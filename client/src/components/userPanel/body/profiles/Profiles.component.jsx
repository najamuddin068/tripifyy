import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getUserProfiles} from '../../../../actions/userProfileActions'
import UserProfiles from './UserProfiles.component'
class Profiles extends Component {
    componentDidMount(){
        this.props.getUserProfiles()
    }
    render() {
        return (
            <div className='mr-5 ml-5 pl-5 pr-5'>
                Profiles
                <UserProfiles/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    profiles: state.profiles
})
export default connect(mapStateToProps, {getUserProfiles}) (Profiles)
