import React from "react";
import "../../App.css";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

class Modal extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal-container">
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-10 mx-auto col-md-6 col-lg-4 text-center"
                    >
                      <h6 className="text-uppercase font-weight-light">
                        Item added to the cart
                      </h6>
                      <img src={img} className="img-fluid" alt="product"></img>
                      <h5 className="modal-title">{title}</h5>
                      <h5 className="modal-price">${price}</h5>
                      <Link to="/">
                        <button
                          className="button modal-continue-btn"
                          onClick={() => closeModal()}
                        >
                          Continue shopping
                        </button>
                      </Link>
                      <Link to="/shoppingcart">
                        <button
                          className="button modal-complete-btn"
                          onClick={() => closeModal()}
                        >
                          Complete order
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
