import React, { Component } from "react";

export class PaymentForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container payment-details">
          <div className="row">
            <div className="col-10 col-md-10 col-lg-8 mx-auto my-4 text-title">
              <h4 className="title-delivery-method">Payment*</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-10 col-lg-8 mx-auto">
              <form>
                <div className="form-row">
                  <div className="col-6 form-group col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      id="inputNumber"
                      aria-required="true"
                      placeholder="Card number"
                    />
                  </div>

                  {/* Years */}
                  <div className=" col-3 form-group col-md-3">
                    <select
                      className="form-control"
                      name="year"
                      type="select"
                      placeholder="Year"
                      aria-labelledby="form-input__label-year"
                      aria-required="true"
                      aria-describedby="form-input__desc-year"
                    >
                      <option value="" disabled="">
                        Year
                      </option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </select>
                  </div>

                  {/* Month */}
                  <div className=" col-3 form-group col-md-3">
                    <select
                      className="form-control"
                      name="month"
                      type="select"
                      placeholder="Month"
                      aria-labelledby="form-input__label-month"
                      aria-required="true"
                      aria-describedby="form-input__desc-month"
                    >
                      <option value="" disabled="">
                        Month
                      </option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-6 form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      aria-required="true"
                      placeholder="Cardholder name"
                    />
                  </div>

                  <div className=" col-4 form-group col-md-3">
                    <input
                      type="number"
                      className="form-control"
                      id="inputCvv"
                      aria-required="true"
                      placeholder="CVV code"
                    />
                  </div>
                </div>
              </form>
              <p className="paymet-text">
                * This form doesn't collect card information. Build for example
                purpose.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PaymentForm;
