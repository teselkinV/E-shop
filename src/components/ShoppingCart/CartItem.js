import React from "react";
import "../../App.css";

export default function CartItem({ item, value }) {
  const { id, title, img, price, size, count, sign } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-6 mx-0 px-1 col-lg-2 col-md-6">
          <img src={img} className="image-fluid cart-img" alt="product" />
        </div>
        <div className="col-6 col-lg-10 col-md-6 cart-content mx-0 px-1">
          <div className="d-flex-column cart-title-block">
            <div className="col-6 col-lg-2 col-md-5 px-0 cart-title-product">
              {title}
            </div>
          </div>
          <div className="d-block d-sm-block d-md-none d-lg-none col-6 mx-0 my-2 px-0 col-lg-2 col-md-5 cart-price">
            ${price}
          </div>
          <div className="col-6  mx-0 my-2 px-0 col-lg-1 col-md-5 cart-size">
            <span className="d-content d-sm-content d-md-none d-lg-none">
              size:{" "}
            </span>
            {size.l}
          </div>
          <div className="col-6 mx-0 my-4 px-0 col-lg-2 col-md-5 my-lg-0">
            <div className="d-flex justify-content-center quintity text-center">
              <div>
                <span
                  className="btn btn-black py-0 change-count"
                  onClick={() => decrement(id)}
                >
                  -
                </span>
              </div>
              <div>
                <span className="btn py-0 count-cart">{count}</span>
              </div>
              <div>
                <span
                  className="btn btn-black py-0 change-count"
                  onClick={() => increment(id)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
          <div className="d-none d-sm-none d-md-block d-lg-block col-6 m-1 col-lg-2 col-md-5 cart-price">
            ${price}
          </div>

          <div
            className=" col-6 m-0 p-0 col-lg-2 col-md-5 cart-remove"
            onClick={() => removeItem(id)}
          >
            Remove item
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
