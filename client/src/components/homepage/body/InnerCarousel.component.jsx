import React from 'react';
import './InnerCarousel.style.scss'
import SearchBar from './SearchBar.component';
import { MDBBtn, MDBRow, MDBCol, MDBBadge } from 'mdbreact';
const InnerCarousel = () => {
    return (
        <div className="inner-component">
        <div className='left-content'>
            <h3>
                            
            </h3>
            <br/>
        <h2><strong>Find the trips you want</strong></h2>
        <div style={{width:'550px',marginTop:'10px'}}>
        <SearchBar/>
        <span className='myp'>Popular: </span>
       
            <MDBBadge pill color="primary">Naran</MDBBadge>
            <MDBBadge pill size="lg" color="primary">Kashmir</MDBBadge>
            <MDBBadge pill size="lg" color="primary">Hunza</MDBBadge>
            <MDBBadge pill size="lg" color="primary">Skardu</MDBBadge>
            <MDBBadge pill size="lg" color="primary">Kumrat</MDBBadge>
        
        </div>
        </div>
        
        </div>
    );
}

export default InnerCarousel;
