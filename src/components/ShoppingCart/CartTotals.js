import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { itemsTotal } = value;
  return (
    <React.Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-10 col-md-4 mx-auto text-center my-2">
            <Link to="/" className=" continue-shopping">
              &#8592; Continue shopping
            </Link>
          </div>
          <div className="col-10 col-md-4 mx-auto text-center my-2">
            <h5 className="total-cost">
              Sub-total:{" "}
              <span className="total-cost-number">${itemsTotal}</span>
            </h5>
            {/* <h5 className='total-cost'>Sales tax: <span className='total-cost-number'>${salesTax}</span></h5>
                        <h5 className='total-cost'>Total cost: <span className='total-cost-number'>${cartTotal}</span></h5> */}
          </div>
          <div className="col-10 col-md-4 mx-auto text-center my-2">
            <Link to="/checkout-details">
              <button className="button modal-continue-btn">Shipping</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
