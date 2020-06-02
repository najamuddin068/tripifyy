import React, { Component } from 'react';

class CustomizeTrip extends Component {
    render() {
        return (
            <div>
                <MDBBtnGroup >
                    <MDBBtn color='cyan'  onClick={this.destinationTab} className={step==1 && ['btnIsActive','active']}>Basic Info</MDBBtn>
                    <MDBBtn color='cyan'  onClick={this.hotelsTab} className={step==2 && ['btnIsActive','active']}>Detailed Info</MDBBtn>
                    <MDBBtn color='cyan'  onClick={this.restaurantsTab} className={step==3 && ['btnIsActive','active']}>Payment Info</MDBBtn>
                    <MDBBtn color='cyan'  onClick={this.flightsTab} className={step==4 && ['btnIsActive','active']}>Finish</MDBBtn>
                    <MDBBtn color='cyan'  onClick={this.carRentalsTab} className={step==4 && ['btnIsActive','active']}>Finish</MDBBtn>
                </MDBBtnGroup>

            </div>
        );
    }
}

export default CustomizeTrip;