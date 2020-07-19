import React, { Component } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { MDBInput, MDBBtn } from 'mdbreact'
import { connect } from 'react-redux'
import {getTrips, addTrip, getTripsByOrganizer, getTrip} from '../actions/tripActions'
class Test extends Component {
    constructor(props){
        super(props)


}
  
    componentDidMount(){
        this.props.getTrips()
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps, {getTrips, addTrip, getTripsByOrganizer, getTrip})(Test)