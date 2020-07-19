import React, { Component } from "react";
import { MDBBtn, MDBRow, MDBCol, MDBInput, MDBFormInline } from "mdbreact";
import DatePicker from "react-datepicker";

export default class Flights extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values,
      handleChange,
      resetFields,
      errors,
      handleDate,
      handleRadio,
    } = this.props;
    const {flightFrom, flightTo, way, flightDepart, flightReturn} = values
    const flightData = {flightFrom, flightTo, way, flightDepart, flightReturn}
    return (
      <div>
        <div className="ml-5 mr-5 pt-2">
          <h3>Flight Info</h3>
          <hr />
          <MDBRow center className="bg-white rounded ml-1 mr-1">
            <MDBCol md="10">
              
                  <MDBInput
                    label="From"
                    value={values.flightFrom}
                    onChange={handleChange("flightFrom")}
                    outline
                  />
                
                  <MDBInput
                    label="Where To"
                    value={values.flightTo}
                    onChange={handleChange("flightTo")}
                    outline
                  />

                  <MDBFormInline className='d-flex'>
                    <MDBInput
                      gap
                      onClick={handleRadio(1)}
                      checked={values.way === 1 ? true : false}
                      label="one way"
                      type="radio"
                      id="radio1"
                      containerClass="mr-5"
                    />
                    <MDBInput
                      gap
                      onClick={handleRadio(2)}
                      checked={values.way === 2 ? true : false}
                      label="two way"
                      type="radio"
                      id="radio2"
                      containerClass="mr-5"
                    />
                  </MDBFormInline>
                  <div className='d-flex'>
                  <MDBInput
                    label="Travelors"
                    value={values.flightTo}
                    onChange={handleChange("flightTo")}
                    outline
                  />
                        <span className='mr-4'/>
                  <DatePicker
                    selected={values.flightDepart}
                    onChange={handleDate("flightDepart")}
                    placeholderText="Departure Date"
                    minDate={new Date()}
                    className="mt-4 pl-2 pr-2 pb-1 pt-2 w-100 border border-light rounded"
                  />
                  <span className='mr-4'/>
                  
                  <DatePicker
                    selected={values.flightReturn}
                    onChange={handleDate("flightReturn")}
                    placeholderText="Return Date"
                    minDate={values.flightDepart}
                    disabled={values.way===2 ? true : false}
                    className="mt-4 pl-2 pr-2 pb-1 pt-2  w-100 border border-light rounded"
                  />
                              
                
                 
                  </div>
                  <div className='d-flex justify-content-between'>
                    <MDBBtn color='link' onClick={ ()=>resetFields({...flightData}) } className='blue-text'>Reset Fields</MDBBtn>

                    <MDBBtn color='link' onClick={ ()=>{resetFields({...flightData}); this.props.nextStep();} } className='blue-text'>Skip</MDBBtn>

                  </div>

            </MDBCol>
          </MDBRow>
          <div className='d-flex flex-row-reverse'>
            
            <MDBBtn color='link' size='lg' onClick={this.continue}className='blue-text'>Continue</MDBBtn>
            <MDBBtn color='link' size='lg' onClick={this.back}className='blue-text'>Back</MDBBtn>

    </div>
        </div>
      </div>
    );
  }
}
