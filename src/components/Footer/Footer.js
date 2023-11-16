import React from "react";
import "font-awesome/css/font-awesome.min.css";
import appstore from "../../images/app-store-badge.png";
import googleplay from "../../images/google-play-badge.png";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container d-none d-sm-none d-md-none d-lg-block">
          <div className="row">
            <div className="col mx-auto text-left text-slanted my-5">
              <h6 className="footer-title">Shopping online</h6>
              <ul className="footer-col">
                <li className="footer-text">Order status</li>
                <li className="footer-text">Shipping and Delivery</li>
                <li className="footer-text">Returns</li>
                <li className="footer-text">Payment Options</li>
                <li className="footer-text">Contact Us</li>
              </ul>
            </div>
            <div className="col mx-auto text-left text-slanted my-5">
              <h6 className="footer-title">Information</h6>
              <ul className="footer-col">
                <li className="footer-text">Gift Cards</li>
                <li className="footer-text">Find a store</li>
                <li className="footer-text">Newsletter</li>
                <li className="footer-text">Become a member</li>
                <li className="footer-text">Feedback</li>
              </ul>
            </div>
            <div className="col mx-auto text-left text-slanted my-5">
              <h6 className="footer-title">Company</h6>
              <ul className="footer-col">
                <li className="footer-text">Company Overview</li>
                <li className="footer-text">Made in USA</li>
                <li className="footer-text">Careers</li>
                <li className="footer-text">Idea Submission</li>
                <li className="footer-text">Student Discount</li>
              </ul>
            </div>
            <div className="col mx-auto text-left text-slanted my-5">
              <h6 className="footer-title">Contact</h6>
              <ul className="footer-col">
                <li className="footer-text">eshop@developer.com</li>
                <li className="footer-text">Hotline: +1 999 138 138</li>
                <li className="footer-text">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row footer-end-row">
            <div className="footer-end">
              <ul className="footer-end-text">
                <li className="footer-end-item">Contacts</li>
                <li className="footer-end-item">Privacy policy</li>
                <li className="footer-end-item">Carrer</li>
                <li className="footer-end-item">Web map</li>
              </ul>
              <div className="downloads-icon">
                <a
                  href="https://www.apple.com/ios/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appstore} alt="icon" className="mx-1" />
                </a>
                <a href="https://play.google.com/store">
                  <img src={googleplay} alt="icon" className="mx-1" />
                </a>
              </div>
              <div className="copiright">
                <p className="copiright-text">
                  Design by <a href="https://teselkin.us/">TESELKIN</a> - ©
                  2020. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end-mobile d-block d-sm-block d-md-block d-lg-none">
          <div className="container">
            <div className="row">
              <div className="col-5 col-md-6 mx-auto copiright-footer">
                Design by{" "}
                <a href="https://teselkin.us/" className="teselkin">
                  TESELKIN
                </a>
              </div>
              <div className="col-5 col-md-6 mx-auto text-right copiright-footer">
                © E-Shop Inc. | USA
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
