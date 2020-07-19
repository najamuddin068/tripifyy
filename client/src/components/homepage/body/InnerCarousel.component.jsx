import React from 'react';
import './InnerCarousel.style.scss'
import SearchBar from './SearchBar.component';
import { MDBBtn, MDBRow, MDBCol, MDBBadge } from 'mdbreact';
const InnerCarousel = () => {
    return (
        <div className="inner-component">
                <div>
                    <MDBBtn className='rounded' size='lg'>
                        Explore Now
                    </MDBBtn>
                </div>
        </div>
    );
}

export default InnerCarousel;
