import React, { Component } from "react";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";
import SubmitOrder from "./SubmitOrder";
import Confirmation from "./Confirmation";

export class CheckoutForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    year: "",
    month: "",
    cardholderName: "",
    cvc: "",
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

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      street,
      apartment,
      city,
      state,
      zipCode,
      email,
      phoneNumber,
      cardNumber,
      year,
      month,
      cardholderNam,
      cvc,
    } = this.state;

    const values = {
      firstName,
      lastName,
      street,
      apartment,
      city,
      state,
      zipCode,
      email,
      phoneNumber,
      cardNumber,
      year,
      month,
      cardholderNam,
      cvc,
    };

    switch (step) {
      case 1:
        return (
          <ShippingDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PaymentDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <SubmitOrder
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Confirmation />;
    }
  }
}

export default CheckoutForm;
