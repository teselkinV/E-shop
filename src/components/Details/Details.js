import React, { useEffect } from "react";
import styled from "styled-components";
import Selected from "../Selected/Selected";
import Summer from "../Summer/Summer";
import Footer from "../Footer/Footer";
import { ProductConsumer } from "../../context";
import Navbar from "../Navbar/Navbarpages";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import description from "../../images/description-product.png";
import care from "../../images/care-product.png";
import careicons from "../../images/care-icons.png";
import { Link } from "react-router-dom";
import Drawer from "../Navbar/Drawer";

function Details() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Drawer />
      <ProductConsumer>
        {(value) => {
          const {
            id,
            img,
            title,
            price,
            info,
            inCart,
            size,
            identifier,
          } = value.detailProduct;
          return (
            <div className="container product-page">
              <Breadcrumbs />

              {/* product info */}
              <div className="row">
                <div className="col-12 mx-auto col-md-6 my-3 px-0">
                  <img
                    src={img}
                    className="img-fluid details-img"
                    alt="product"
                  />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2 className="font-weight-light details-title">{title}</h2>
                  <h2 className="details-price">${price}</h2>
                  <p className="details-size">
                    Size:{" "}
                    <span className="size-table">
                      <Link
                        to="/clothing-size-charts"
                        target="_blank"
                        className="size-table"
                      >
                        <i className="fas fa-tshirt mr-1"></i>
                        See size table
                      </Link>
                    </span>
                  </p>
                  <div className="select-size">
                    <select className="size" id="size">
                      <option value="choose">Choose size</option>
                      <option value="s">{size.s}</option>
                      <option value="s">{size.m}</option>
                      <option value="s">{size.l}</option>
                      <option value="s">{size.xl}</option>
                      <option value="s">{size.xxl}</option>
                    </select>
                  </div>

                  {/* add to cart button */}
                  <div className="add-cart-btn">
                    <AddToCart
                      className="button mb-4 size-lg text-uppercase"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </AddToCart>
                  </div>
                  <p className="font-weight-bold mb-1 details-shipment">
                    Standart shipment
                  </p>
                  <p className="font-weight-light mb-3 details-shipment">
                    Free within 3-6 business days
                  </p>
                  <p className="font-weight-bold mb-1 details-shipment">
                    Express delivery
                  </p>
                  <p className="font-weight-light mb-3 details-shipment">
                    $35,00 available
                  </p>
                  <p className="text-muted font-weight-light details-shipment">
                    Product ID: {identifier}
                  </p>
                </div>
              </div>

              <div className="container description-section">
                <div className="row">
                  <div className="col-8 col-md-3 mx-auto py-6">
                    <h3 className="description">Description</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 col-md-6 col-lg-6 mx-auto text-center">
                    <div className="description-content">
                      <img
                        className="description-img"
                        src={description}
                        alt="image"
                      />
                      <h4 className="description-title">
                        Details and product description
                      </h4>
                      <p className="description-text">{info}</p>
                    </div>
                  </div>

                  <div className="col-10 col-md-6 col-lg-6 mx-auto text-center">
                    <div className="material-content">
                      <img className="material-img" src={care} alt="image" />
                      <h4 className="material-title">Material(s) and care</h4>
                      <p className="material-text">
                        Body: 98% COTTON - 2% ELASTANE
                      </p>
                      <img className="care-icons" src={careicons} alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
      <Selected />
      <Summer />
      <Footer />
    </React.Fragment>
  );
}

const AddToCart = styled.button`
  border: transparent;
  background-color: var(--mainYellow);
  border-radius: 2rem;
  width: 13rem;
  height: 3rem;
  font-size: 0.8rem;
  font-weight: 700;
  &:focus {
    outline: none;
  }
  &:active {
    background-color: var(--secondYellow);
  }
`;

export default Details;
