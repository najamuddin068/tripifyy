import React, { Component } from 'react';
import { MDBContainer, MDBCarousel, MDBCarouselInner, MDBRow, MDBCarouselItem, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBView, MDBMask, MDBCarouselCaption } from 'mdbreact';
import './Trips.styles.scss'
import tripData from './TripsData.data'
import TripCard from './TripCard.component';
export class PopularTrips extends Component {

    constructor(props)
    {
        super(props)
        this.state=
        {
          data:tripData
        }
    }

    render() {
      const {data} = this.state
        return ( <div style={{marginTop:'50px'}}>
      <MDBContainer>
        <h1>Popular Destination</h1>
      <MDBCarousel activeItem={1} length={2} slide={false}slide showControls={true} showIndicators={false} multiItem interval={15000}>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1" className='trips-container'>
                <div className='trip-cards'>
                  {data.filter(trip=>trip.id<=4).map(trip=><TripCard key={trip.id} {...trip}/>)}
                  
                  
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2" className='trips-container'>
                <div className='trip-cards'>
                  {data.filter(trip=>trip.id>4).map(trip=><TripCard key={trip.id} {...trip}/>)}
                  
                  
              </div>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </div>
        );
    }
}

export default PopularTrips;
