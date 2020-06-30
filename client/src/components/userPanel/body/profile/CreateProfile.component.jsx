import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { MDBInput, MDBContainer, MDBInputGroup, MDBIcon, MDBBtn } from 'mdbreact';
import {createProfile} from '../../../../actions/userProfileActions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CreateProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            handle: '',
            bio:'',
            twitter:'',
            facebook:'',
            linkedin:'',
            instagram:'',
            errors:{}

        }
    }
    handleChange = input => e => {
        this.setState({[input]:e.target.value})
    }
    onSubmit = e =>{
        e.preventDefault();

        const profileData = {
            handle: this.state.handle,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            instagram: this.state.instagram
        }
        this.props.createProfile(profileData, this.props.history)
       
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }
    render() {
        const {handle, bio, twitter, facebook, linkedin, instagram, errors} = this.state
        return (
            <div>
                <MDBContainer>
                    <h1 align='center'>Create Profile</h1>
                    <div style={{margin:'0px 225px'}}>
                        
                        <MDBInput label="Handle*" icon="user" value={handle} onChange={this.handleChange('handle')}/>
                        <MDBInput type='textarea' label="bio" icon="user" outline value={bio} onChange={this.handleChange('bio')}/>
                        <br/>
                        <h4 style={{display:'inline'}}>Add Social Links </h4>
                        <span className='text-muted'>(Optional)</span>
                        <br/>
                        <br/>
                        <div style={{marginRight:'350px'}}>
                        <MDBInputGroup 
                            material 
                            containerClassName="mb-3 mt-0" 
                            prepend={<MDBIcon fab icon="facebook-f" />} 
                            hint="Facebook Profile URL"
                            value={facebook}
                            onChange={this.handleChange('facebook')}/>
                        <MDBInputGroup 
                            material 
                            containerClassName="mb-3 mt-0" 
                            prepend={<MDBIcon fab icon="linkedin-in" />} 
                            hint="LinkedIn Profile URL"
                            value={linkedin}
                            onChange={this.handleChange('linkedin')}/>
                        <MDBInputGroup 
                            material 
                            containerClassName="mb-3 mt-0" 
                            prepend={<MDBIcon fab icon="instagram" />} 
                            hint="Instagram Profile URL"
                            value={instagram}
                            onChange={this.handleChange('instagram')}/>
                        <MDBInputGroup 
                            material 
                            containerClassName="mb-3 mt-0" 
                            prepend={<MDBIcon fab icon="twitter" />} 
                            hint="Twitter Profile URL"
                            value={twitter}
                            onChange={this.handleChange('twitter')}/>
                        
                        </div>
                        <div style={{textAlign:'center'}}>
                        <MDBBtn style={{width:'100%'}} type='submit' onClick={this.onSubmit}>Create Profile</MDBBtn>
                        </div>
                    </div>
                </MDBContainer>
            </div>
        );
    }
}

CreateProfile.propTypes ={
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    profile: state.profile,
    errors: state.errors
})
export default connect(mapStateToProps, {createProfile} )(withRouter(CreateProfile));