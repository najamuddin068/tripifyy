import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
class OrganizerBio extends Component {
    render() {
        const {profile} = this.props.oprofile
        return (
            <div className=''>
                <h2>Bio</h2>
                <div className='pl-1 pr-1 mb-4'>
                {profile ? profile.bio : null}
                </div>
            </div>
        )
    }
}

OrganizerBio.propTypes ={
    oprofile:PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => ({
    oprofile:state.oprofile
  })


export default connect(mapStateToProps) (OrganizerBio)
