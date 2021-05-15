import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

import CategroyWomen from "../MainProducts/CategoryWomen";
import CategoryWomen from "../MainProducts/CategoryWomen";

const DropdownWomen = ({ isVisible }) => {
  return (
    <React.Fragment>
      <div className={`${isVisible ? "block" : "hidden"} absolute`}>
        <div className="container-sm dropdown-container">
          <div className="row">
            <div className="col-3 mx-auto">
              <h3 className="submenu-title">TOPS</h3>
              <ul className="menu-column">
                <CategoryWomen />
              </ul>
            </div>
            <div className="col-3 mx-auto">
              <h3 className="submenu-title">BOTTOMS</h3>
              <ul className="menu-column">
                <Link to="/women's-t-jeans">
                  <li>Jeans</li>
                </Link>
                <Link to="/women's-t-skirts">
                  <li>Skirts</li>
                </Link>
                <Link to="/women's-t-shorts">
                  <li>Shorts</li>
                </Link>
                <Link to="/women's-t-paints">
                  <li>Pants & Leggings</li>
                </Link>
                <br />

                <Link to="/women's-suites" className="accesories">
                  <li>Suits & Tailoring</li>
                </Link>
                <Link to="/women's-shoes" className="accesories">
                  <li>Shoes</li>
                </Link>
                <Link to="/women's-lingerie" className="accesories">
                  <li>Lingerie</li>
                </Link>
              </ul>
            </div>
            <div className="col-3 mx-auto">
              <div className="img-1-box">
                <Link to="/women's-new-arrived">
                  <div className="img-arr-women"></div>
                </Link>
              </div>
            </div>
            <div className="col-3 mx-auto">
              <div className="img-2-box">
                <Link to="/women's-sale">
                  <div className="img-sale-women"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DropdownWomen;
