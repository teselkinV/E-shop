import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

class Newproducts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container new-arr">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mx-auto">
              <div className="new-arrival-img-1">
                <div className="arr-content">
                  <h3 className="arr-text">
                    New arrivals
                    <br />
                    are now in!
                  </h3>
                  <Link to="/women's-new-arrived">
                    <button className="btn btn-arr">Show collection</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="new-arrival-img-2">
                <div className="arr-content">
                  <h3 className="arr-text">
                    Men's t-shirt
                    <br />
                    $19.95
                  </h3>
                  <Link to="/men's-t-shirts">
                    <button className="btn btn-arr">More details</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="new-arrival-img-3">
                <div className="arr-content">
                  <h3 className="arr-text">
                    Sale this <br /> summer
                  </h3>
                  <Link to="/sale">
                    <button className="btn btn-arr">View all</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Newproducts;
