import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
const PrivateOrganizerRoute = ({component: Component, auth, ...rest}) => (
    <Route
        {...rest}
        render = {props => auth.isOrganizer === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/sign-in" />
            )
        }
    />
)
PrivateOrganizerRoute.propTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(PrivateOrganizerRoute)