import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import cart from "../../cart.svg";
import "../../App.css";
import DropdownMan from "./DropdownMan";
import DropdownWomen from "./DropdownWomen";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [vis, setVis] = useState(false);

  const displayMenu = () => {
    setVisible(true);
  };
  const hideMenu = () => {
    setVisible(false);
  };
  const display = () => {
    setVis(true);
  };
  const hide = () => {
    setVis(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="navbar navbar-expand px-sm-5 d-none d-sm-none d-md-none d-lg-flex mt-5 py-0">
            <Link to="/">
              <img src={logo} alt="brand" className="brand-logo" />
            </Link>
            <ul className="navbar-nav align-items-center mx-auto">
              <li className="nav-item ml-5" onMouseLeave={hideMenu}>
                <a className="nav-link" onMouseOver={displayMenu}>
                  Men
                </a>
                <DropdownMan isVisible={visible} />
              </li>
              <li className="nav-item ml-5" onMouseLeave={hide}>
                <a className="nav-link" onMouseOver={display}>
                  Women
                </a>
                <DropdownWomen isVisible={vis} />
              </li>

              <li className="nav-item ml-5">
                <Link to="/sale" className="nav-link">
                  Sale
                </Link>
              </li>
            </ul>
            <Link to="/shoppingcart" className="ml-auto">
              <img src={cart} alt="cart" className="cart" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
