import React, { Component } from "react";

class CartColumns extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="title-items">Products</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="title-items"></p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="title-items">Size</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="title-items">Quantity</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="title-items">Price</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="title-items">Remove item</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CartColumns;
