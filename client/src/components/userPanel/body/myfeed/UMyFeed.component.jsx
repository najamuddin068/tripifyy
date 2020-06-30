import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './UMyFeed.styles.scss'
import UCreatePost from './UCreatePost.component';
import UNewFeed from './UNewFeed.component';

class UMyFeed extends Component {
    render() {
        return (
            <div className='myfeed-container'>
                   <MDBRow>
                       <MDBCol md='2'>

                       </MDBCol>
                       <MDBCol md='8'>
                            <UCreatePost/>
                            <div style={{marginTop:'50px'}}/>
                            <UNewFeed/>
                        </MDBCol>
                        <MDBCol md='2'>

                        </MDBCol>
                   </MDBRow>
            </div>
        );
    }
}

export default UMyFeed;