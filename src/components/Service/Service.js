import React from "react";
import shipping from "../../images/shipping.png";
import payments from "../../images/payments.png";
import money from "../../images/money-back.png";
import quality from "../../images/quality.png";

class Service extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container service">
          <div className="row">
            <div className="col-10 text-center">
              <h2 className="service-title">Why should you choose us?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-3 col-6">
              <img src={shipping} alt="product" />
              <h3 className="services-title">Free shipping</h3>
              <p className="services-text">
                All purchases over $199 are eligible for free shipping via USPS
                First Class Mail.
              </p>
            </div>
            <div className="col-lg-3 col-sm-3 col-6">
              <img src={payments} alt="img" />
              <h3 className="services-title">Easy payments</h3>
              <p className="services-text">
                All payments are processed instantly over a secure payment
                protocol.
              </p>
            </div>
            <div className="col-lg-3 col-sm-3 col-6">
              <img src={money} alt="img" />
              <h3 className="services-title">Money-back guarantee</h3>
              <p className="services-text">
                If you've changed your mind, you can send it back for a full
                refund.
              </p>
            </div>
            <div className="col-lg-3 col-sm-3 col-6">
              <img src={quality} alt="img" />
              <h3 className="services-title">Finest quality</h3>
              <p className="services-text">
                Designed to last, each of our products has been crafted with the
                finest materials.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Service;
