import React, { Component } from "react";
import { Stepper, Step } from "react-form-stepper";
import Destination from "./Destination.component";
import Flights from "./Flights.componrnt";
import { MDBContainer } from "mdbreact";
import Hotels from './Hotels.component'
import Restaurants from "./Restaurants.component";
import {addTrip} from '../../../../../actions/tripActions'
import { connect } from "react-redux";
import Budget from "./Budget.component";
import Finish from "./Finish.component";
import { withRouter } from "react-router-dom";

class CreateTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      designation: "",
      departureDate: null,
      numberOfDays: "",
      numberOfPeople: "",
      tripType: "",
      title: "",
      desc: "",
      image: "",

      flightFrom:'',
      flightTo:'',
      flightDepart:null,
      flightReturn:null,
      flightTravellors:'',
      way: '',

      price:'',


      errors: {},
    };
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.errors){
        this.setState({errors: nextProps.errors})
    }
}


  openDestinationTab = () => {
    const { step } = this.state;
    this.setState({
      step: 1,
    });
  };

  openFlightsTab = () => {
    const { step } = this.state;
    this.setState({
      step: 2,
    });
  };

  openHotelsTab = () => {
    const { step } = this.state;
    this.setState({
      step: 3,
    });
  };

  openRestaurantsTab = () => {
    const { step } = this.state;
    this.setState({
      step: 4,
    });
  };

  openPaymentTab = () => {
    const { step } = this.state;
    this.setState({
      step: 5,
    });
  };
  openFinishTab = () => {
    const { step } = this.state;
    this.setState({
      step: 6,
    });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleRadio = nr => () => {
    this.setState({
      way: nr
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  handleDate = input => date => {
    this.setState({
      [input]: date
    });
  };
  resetFields = (...values) => {
    const temp = Object.getOwnPropertyNames({ ...values[0] });
    temp.map((t) => this.setState({ [t]: "" }));
  };

  handleSubmit = e => {
    e.preventDefault()

    const {
      departureDate,
      numberOfDays,
      title,
      desc,
      designation,
      numberOfPeople,
      tripType,
      price,
    } = this.state

    const tripData = {
      departureDate,
      numberOfDays,
      title,
      desc,
      designation,
      numberOfPeople,
      tripType,
      price,

      errors: {}
    }

    this.props.addTrip(
      tripData,
      this.props.history,
      ()=>{
        Object.getOwnPropertyNames(this.state.errors).length>0 && this.openDestinationTab()
        }
      )
  }

  renderSwitch = (step, values, errors) => {
    switch (step) {
      case 1:
        return (
          <Destination
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleDate={this.handleDate}
            values={values}
            resetFields={this.resetFields}
            errors={errors}
          />
        );
      case 2:
        return (
          <Flights
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleDate={this.handleDate}
            handleRadio={this.handleRadio}
            values = {values}
            resetFields={this.resetFields}
            errors={errors}
          />
        );
      case 3: 
        return (
          <Hotels
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          resetFields={this.resetFields}
          values = {values}


        />
      );
      case 4:
        return (
          <Restaurants
          
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        resetFields={this.resetFields}
        values={values}
          />
          
        )
      case 5: 
          return (
            <Budget
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            resetFields={this.resetFields}
            handleChange={this.handleChange}
            values={values}
            errors={errors}
            />
          )
      case 6: 
          return (
            <Finish
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              resetFields={this.resetFields}
              handleSubmit={this.handleSubmit}
              values={values}
            />
          )
    }
  };
  render() {
    const {errors} = this.props
    const {
      step,
      designation,
      departureDate,
      numberOfDays,
      title,
      desc,
      numberOfPeople,
      tripType,
      flightFrom,
      flightTo,
      flightDepart,
      flightReturn,
      flightTravellors,
      way,
      price

    } = this.state;
    const values = {
      designation,
      departureDate,
      numberOfDays,
      title,
      desc,
      numberOfPeople,
      tripType,
      flightFrom,
      flightTo,
      flightDepart,
      flightReturn,
      flightTravellors,
      way,
      price
    }

      return (
      <div>
          <MDBContainer>
              <div className='pt-4'/>
          <h2>Create Trip</h2>
          <hr/>
        <Stepper
          activeStep={step}
          connectorStateColors
          connectorStyleConfig={{
            activeColor: "#00bfff",
            completedColor: "#006080",
          }}
          styleConfig={{
            activeBgColor: "#00bfff",
            completedBgColor: "#006080",
          }}
        >
          <Step disabled={false} label="Destination" onClick={this.openDestinationTab} />
          <Step disabled={false} label="Flights" onClick={this.openFlightsTab} />
          <Step  disabled={false} label="Hotels" onClick={this.openHotelsTab} />
          <Step disabled={false} label="Restaurants" onClick={this.openRestaurantsTab} />
          <Step  disabled={false} label="Budget" onClick={this.openPaymentTab} />
          <Step  disabled={false} label="Finish" onClick={this.openFinishTab} />

        </Stepper>
        <MDBContainer>
          <div
            className="rounded ml-5 mr-5 pl-5 pr-5 pt-4 pb-2"
            style={{ backgroundColor: "#fafafa",}}
          >
            {this.renderSwitch(step, values, errors)}
          </div>
        </MDBContainer>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors

})
export default connect(mapStateToProps, {addTrip})(withRouter(CreateTrips))