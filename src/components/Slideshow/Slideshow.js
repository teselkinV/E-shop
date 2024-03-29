import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

class Slideshow extends React.Component {
  render() {
    return (
      <div className="slideshow-img">
        <div className="slideshow-box">
          <div className="slideshow-content col-10 col-md-6">
            <h1 className="slideshow-text">
              Sale of the <br />
              summer <br />
              collection
            </h1>
            <Link to="/women's-sale">
              <button className="btn btn-text">
                <span className="btn-slideshow">&#8594;</span>Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
